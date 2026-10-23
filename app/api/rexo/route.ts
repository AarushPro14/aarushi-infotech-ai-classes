import { NextResponse } from "next/server";
import { rexoSystemInstruction } from "@/lib/rexoSystemInstruction";

export const runtime = "nodejs";

type Turn = { role: "user" | "model"; parts: { text: string }[] };

function buildConversation(history: unknown, message: string): Turn[] {
  const turns: Turn[] = [];
  const entries = Array.isArray(history) ? history.slice(-4) : [];

  for (const entry of entries) {
    if (typeof entry !== "object" || entry === null || !("role" in entry) || !("content" in entry)) continue;
    const role = entry.role === "assistant" ? "model" : entry.role === "user" ? "user" : null;
    if (!role || typeof entry.content !== "string") continue;
    const text = entry.content.trim().slice(0, 1000);
    if (!text || (!turns.length && role === "model")) continue;
    const previous = turns.at(-1);
    if (previous?.role === role) previous.parts[0].text += `\n${text}`;
    else turns.push({ role, parts: [{ text }] });
  }

  const previous = turns.at(-1);
  if (previous?.role === "user") previous.parts[0].text += `\n\nFollow-up: ${message}`;
  else turns.push({ role: "user", parts: [{ text: message }] });
  return turns;
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Please send a valid question." }, { status: 400 });
  }

  const body = typeof payload === "object" && payload !== null ? payload : {};
  const message = "message" in body && typeof body.message === "string" ? body.message.trim() : "";
  if (!message) return NextResponse.json({ success: false, error: "Please enter a question." }, { status: 400 });
  if (message.length > 1800) return NextResponse.json({ success: false, error: "Please keep your question under 1,800 characters." }, { status: 413 });

  const apiKey = process.env.GEMINI_API_KEY?.trim();
  if (!apiKey) return NextResponse.json({ success: false, error: "ReXo’s AI connection is not configured. Please contact Aarushi Infotech." }, { status: 503 });

  // Keep the fastest model as the production default even if an older
  // GEMINI_MODEL value is still set in the deployment environment.
  const models = ["gemini-3.1-flash-lite", "gemini-3.5-flash-lite"];
  let model = models[0];
  try {
    const requestBody = JSON.stringify({
        systemInstruction: { parts: [{ text: rexoSystemInstruction }] },
        contents: buildConversation("history" in body ? body.history : undefined, message),
        generationConfig: {
          maxOutputTokens: 500,
          thinkingConfig: { thinkingLevel: "minimal" },
        },
      });

    let response: Response | null = null;
    let result: unknown = null;
    for (let index = 0; index < models.length; index += 1) {
      model = models[index];
      response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:streamGenerateContent?alt=sse`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
        body: requestBody,
        signal: AbortSignal.timeout(25000),
      });
      if (!response.ok) result = await response.json().catch(() => null);

      const shouldTryFallback = !response.ok && response.status === 404 && index < models.length - 1;
      if (!shouldTryFallback) break;
      console.warn("[ReXo] Configured Gemini model unavailable; trying the Flash-Lite fallback", {
        httpStatus: response.status,
        model,
      });
    }

    if (!response) throw new Error("No Gemini model was attempted");
    if (!response.ok) {
      const status = response.status;
      const providerError = typeof result === "object" && result !== null && "error" in result && typeof result.error === "object" && result.error !== null
        ? result.error
        : null;
      const providerMessage = providerError && "message" in providerError && typeof providerError.message === "string"
        ? providerError.message.replace(/AIza[\w-]{20,}/g, "[redacted key]").slice(0, 240)
        : "";
      const providerStatus = providerError && "status" in providerError && typeof providerError.status === "string" ? providerError.status : "";
      console.error("[ReXo] Gemini request rejected", { httpStatus: status, providerStatus, providerMessage, model });

      const friendly = /api key not valid/i.test(providerMessage)
        ? "Google rejected the Gemini API key. Create or copy a valid key in Google AI Studio, update GEMINI_API_KEY in .env.local, and restart the development server."
        : status === 403
          ? "Google denied this key or project. In Google AI Studio, check the key type and Gemini API access. If it is an old Standard key, create a new key or restrict it to the Gemini API."
            : status === 404
              ? "The selected Gemini model is not available to this key or project. Check Gemini model access in Google AI Studio."
              : status === 503 || status === 500
                ? "Gemini is temporarily overloaded. Please try again shortly."
              : status === 429
                ? "Gemini’s request limit is reached. Check the project’s usage limits in Google AI Studio or try again after the limit resets."
              : status === 400
                ? `Google rejected the Gemini request (${providerStatus || status}). ${providerMessage || "Check the server terminal for details."}`
                : "ReXo couldn’t reach Gemini just now. Check the server terminal for the Gemini error and try again.";
      return NextResponse.json({ success: false, error: friendly }, { status: status === 429 ? 429 : 502 });
    }

    if (!response.body) throw new Error("Gemini returned an empty response stream");
    return new Response(response.body, {
      headers: {
        "Content-Type": "text/event-stream; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "X-Accel-Buffering": "no",
      },
    });
  } catch (error) {
    console.error("[ReXo] AI request failed", { name: error instanceof Error ? error.name : "UnknownError", model });
    const message = error instanceof Error && error.name === "TimeoutError"
      ? "That took longer than expected. Please try again."
      : "ReXo couldn’t prepare a reply just now. Please try again.";
    return NextResponse.json({ success: false, error: message }, { status: 502 });
  }
}
