import { GoogleGenAI, ThinkingLevel, Type } from "@google/genai";
import { NextResponse } from "next/server";
import { rexoSystemInstruction } from "@/lib/rexoSystemInstruction";

export const runtime = "nodejs";

type GeminiTurn = {
  role: "user" | "model";
  parts: { text: string }[];
};

const navigationDestinations = [
  "home",
  "classes",
  "ai-fundamentals",
  "data-handling",
  "data-analysis",
  "content-creation",
  "responsible-ai",
  "business-technology",
  "quick-book",
  "about",
  "start",
  "contact",
  "location",
  "none",
] as const;

function buildConversation(history: unknown, question: string): GeminiTurn[] {
  const turns: GeminiTurn[] = [];
  const entries = Array.isArray(history) ? history.slice(-12) : [];

  for (const entry of entries) {
    if (typeof entry !== "object" || entry === null) continue;
    if (!("role" in entry) || !("content" in entry)) continue;

    const role = entry.role === "assistant" ? "model" : entry.role === "user" ? "user" : null;
    if (!role || typeof entry.content !== "string") continue;

    const content = entry.content.trim().slice(0, 1200);
    if (!content) continue;

    // The API conversation starts with a user turn. Merge adjacent messages
    // with the same role so a topic returning two knowledge sections stays valid.
    if (!turns.length && role === "model") continue;
    const previous = turns[turns.length - 1];
    if (previous?.role === role) {
      previous.parts[0].text += `\n\n${content}`;
    } else {
      turns.push({ role, parts: [{ text: content }] });
    }
  }

  const previous = turns[turns.length - 1];
  if (previous?.role === "user") {
    previous.parts[0].text += `\n\nFollow-up question: ${question}`;
  } else {
    turns.push({ role: "user", parts: [{ text: question }] });
  }

  return turns;
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Please send a valid message." },
      { status: 400 },
    );
  }

  const payload = typeof body === "object" && body !== null ? body : {};
  const message = "message" in payload && typeof payload.message === "string"
    ? payload.message.trim()
    : "";

  if (!message) {
    return NextResponse.json(
      { success: false, error: "Please enter a message." },
      { status: 400 },
    );
  }

  if (message.length > 500) {
    return NextResponse.json(
      { success: false, error: "Please keep your message under 500 characters." },
      { status: 413 },
    );
  }

  const apiKey = process.env.GEMINI_API_KEY?.trim();
  if (!apiKey) {
    return NextResponse.json(
      {
        success: false,
        error: "ReXo is not connected right now. Please use the contact options on this website.",
      },
      { status: 503 },
    );
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL?.trim() || "gemini-3.8-flash",
      contents: buildConversation(
        "history" in payload ? payload.history : undefined,
        message,
      ),
      config: {
        systemInstruction: rexoSystemInstruction,
        thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
        maxOutputTokens: 400,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            answer: { type: Type.STRING },
            destination: {
              type: Type.STRING,
              enum: [...navigationDestinations],
              description: "Use a destination only when the visitor clearly asks to navigate there; otherwise use none.",
            },
          },
          required: ["answer", "destination"],
        },
      },
    });

    const responseText = response.text?.trim();
    if (!responseText) {
      return NextResponse.json(
        {
          success: false,
          error: "I couldn't prepare a clear answer just now. Please try once more or use the contact options on this website.",
        },
        { status: 502 },
      );
    }

    const result: unknown = JSON.parse(responseText);
    if (typeof result !== "object" || result === null || !("answer" in result)) {
      throw new Error("Gemini returned an invalid response shape.");
    }

    const answer = typeof result.answer === "string" ? result.answer.trim() : "";
    const destination =
      "destination" in result &&
      typeof result.destination === "string" &&
      navigationDestinations.includes(result.destination as (typeof navigationDestinations)[number])
        ? result.destination
        : "none";

    if (!answer) {
      return NextResponse.json(
        {
          success: false,
          error: "I couldn't prepare a clear answer just now. Please try once more or use the contact options on this website.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true, answer, destination });
  } catch (error) {
    // Keep enough information in server logs to diagnose deployment/API
    // configuration problems without ever logging the API key or request body.
    const errorStatus =
      typeof error === "object" && error !== null && "status" in error
        ? Number(error.status)
        : undefined;
    const model = process.env.GEMINI_MODEL?.trim() || "gemini-3.8-flash";
    const errorName = error instanceof Error ? error.name : "UnknownError";
    console.error("[ReXo] Gemini request failed", {
      status: Number.isFinite(errorStatus) ? errorStatus : undefined,
      errorName,
      model,
    });

    return NextResponse.json(
      {
        success: false,
        error:
          errorStatus === 401 || errorStatus === 403
            ? "ReXo's AI connection needs attention. Please contact Aarushi Infotech or try again later."
            : errorStatus === 404
              ? "ReXo's AI model is temporarily unavailable. Please contact Aarushi Infotech or try again later."
              : errorStatus === 429
                ? "ReXo is busy right now. Please wait a moment and try again."
                : errorStatus === 400
                  ? "ReXo couldn't process that request. Please try rephrasing your message."
                  : "ReXo couldn't reach its AI service just now. Please try again or use the contact options on this website.",
      },
      {
        status:
          errorStatus === 401 || errorStatus === 403 || errorStatus === 404 || errorStatus === 429 || errorStatus === 400
            ? errorStatus
            : 502,
      },
    );
  }
}
