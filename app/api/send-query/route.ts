import { createHmac, randomInt, randomUUID, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ADMIN_EMAIL = "info@aarushiinfotech.in";
// EmailJS limits the combined dynamic template variables to 50 KB.
// Keeping queries to 10,000 Unicode characters leaves room for the email metadata.
const MAX_QUERY = 10_000;
const MAX_FILES = 5;
const MAX_FILE_BYTES = 256 * 1024;
const MAX_FILES_BYTES = 256 * 1024;
const MAX_BODY_BYTES = 4_500_000;
const BOOKING_CLASSES = new Set([
  "AI Prompting", "AI Image Generation", "Logo Generation", "Banner Generation",
  "Learning Data Analysis", "Learning Data Handling", "Code Learning",
  "Practical Programming", "Tally Master", "Learning Tally", "Working With Data",
  "Web Development", "Video Generation", "Video Prompt Enhancement", "Custom",
]);
const CODE_COOKIE = "send_query_email_code";
const VERIFIED_COOKIE = "send_query_email_verified";
const CODE_TTL = 10 * 60;
const VERIFIED_TTL = 30 * 60;

type Limit = { count: number; resetAt: number };
const limits = new Map<string, Limit>();

function jsonError(error: string, status: number) {
  return NextResponse.json({ success: false, error }, { status });
}

function normalizeEmail(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim().toLowerCase();
}

function validEmail(email: string) {
  return email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function cleanName(value: unknown) {
  return typeof value === "string" ? value.trim().replace(/\s+/gu, " ") : "";
}

function validName(name: string) {
  return name.length >= 2 && name.length <= 120 && /^[\p{L}\p{M}][\p{L}\p{M}\s.'’\-]{1,119}$/u.test(name);
}

function validInternationalNumber(value: string) {
  return /^\+[1-9]\d{6,14}$/.test(value);
}

function sign(value: string) {
  const secret = process.env.SEND_QUERY_VERIFICATION_SECRET;
  if (!secret || secret.length < 32) throw new Error("SEND_QUERY_VERIFICATION_SECRET must be configured with at least 32 characters.");
  return createHmac("sha256", secret).update(value).digest("base64url");
}

function safeEqual(left: string, right: string) {
  const a = Buffer.from(left);
  const b = Buffer.from(right);
  return a.length === b.length && timingSafeEqual(a, b);
}

function makeToken(payload: string) {
  const encoded = Buffer.from(payload).toString("base64url");
  return `${encoded}.${sign(encoded)}`;
}

function readToken(token: string | undefined) {
  if (!token) return "";
  const [encoded, signature] = token.split(".");
  if (!encoded || !signature) return "";
  try {
    if (!safeEqual(sign(encoded), signature)) return "";
    return Buffer.from(encoded, "base64url").toString();
  } catch {
    return "";
  }
}

function cookieOptions(maxAge: number) {
  return { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict" as const, path: "/api/send-query", maxAge };
}

function rateLimit(request: Request, bucket: string, limit: number, windowMs: number) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const key = `${bucket}:${forwarded}`;
  const now = Date.now();
  const current = limits.get(key);
  if (!current || current.resetAt <= now) {
    limits.set(key, { count: 1, resetAt: now + windowMs });
    if (limits.size > 2_000) for (const [entry, value] of limits) if (value.resetAt <= now) limits.delete(entry);
    return false;
  }
  if (current.count >= limit) return true;
  current.count += 1;
  return false;
}

function sameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    const originUrl = new URL(origin);
    const requestUrl = new URL(request.url);
    const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim();
    const requestHost = request.headers.get("host") || forwardedHost || requestUrl.host;
    const forwardedProtocol = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim();
    const requestProtocol = forwardedProtocol || requestUrl.protocol.slice(0, -1);
    return originUrl.host.toLowerCase() === requestHost.toLowerCase()
      && originUrl.protocol.slice(0, -1).toLowerCase() === requestProtocol.toLowerCase();
  } catch { return false; }
}

type OutgoingAttachment = { filename: string; content: string; contentType: string };
type EmailPayload = { to: string; subject: string; text: string; replyTo?: string; attachments?: OutgoingAttachment[] };

async function sendEmail(payload: EmailPayload) {
  const serviceId = process.env.EMAILJS_SERVICE_ID?.trim();
  const templateId = process.env.EMAILJS_TEMPLATE_ID?.trim();
  const publicKey = process.env.EMAILJS_PUBLIC_KEY?.trim();
  const privateKey = process.env.EMAILJS_PRIVATE_KEY?.trim();
  if (!serviceId || !templateId || !publicKey) {
    throw new Error("Query email is not configured. Set EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, and EMAILJS_PUBLIC_KEY.");
  }
  if (payload.attachments?.length && process.env.EMAILJS_ATTACHMENTS_ENABLED !== "true") {
    throw new Error("EmailJS attachments are not enabled. Use a plan that supports attachments, configure the template attachment slots, and set EMAILJS_ATTACHMENTS_ENABLED=true.");
  }
  const templateParams: Record<string, string> = {
    to_email: payload.to,
    subject: payload.subject,
    message: payload.text,
    reply_to: payload.replyTo || "",
  };
  for (const [index, attachment] of (payload.attachments || []).entries()) {
    templateParams[`attachment_${index + 1}`] = attachment.content;
    templateParams[`attachment_${index + 1}_name`] = attachment.filename;
    templateParams[`attachment_${index + 1}_type`] = attachment.contentType;
  }
  const dynamicParams = Object.fromEntries(Object.entries(templateParams).filter(([key]) => !/^attachment_\d+$/.test(key)));
  if (Buffer.byteLength(JSON.stringify(dynamicParams), "utf8") > 45 * 1024) {
    throw new Error("The query is too long for the email service. Please shorten it and try again.");
  }
  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      ...(privateKey ? { accessToken: privateKey } : {}),
      template_params: templateParams,
    }),
    signal: AbortSignal.timeout(15_000),
  });
  if (!response.ok) {
    const details = await response.text().catch(() => "");
    console.error("[Send Query] EmailJS rejected a message", { status: response.status, details: details.slice(0, 300) });
    if (response.status === 429 || response.status >= 500) {
      throw new Error("Email service is temporarily busy. Please try again shortly.");
    }
    const safeDetails = details.replace(/[\r\n\t]+/g, " ").trim().slice(0, 240);
    const message = process.env.NODE_ENV === "development" && safeDetails
      ? `EmailJS rejected the request: ${safeDetails}`
      : "Email could not be sent. Check the EmailJS service and template settings.";
    throw new Error(message);
  }
  return { id: await response.text().catch(() => "") };
}

function setCookie(response: NextResponse, name: string, value: string, maxAge: number) {
  response.cookies.set(name, value, cookieOptions(maxAge));
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) return jsonError("Request origin could not be verified.", 403);
  const type = request.headers.get("content-type") || "";
  const isForm = type.includes("multipart/form-data");
  if (!isForm && !type.includes("application/json")) return jsonError("Use the Send Query form to send your message.", 415);
  const declaredLength = Number(request.headers.get("content-length") || 0);
  if (declaredLength > MAX_BODY_BYTES) return jsonError("This request is larger than the 4.5 MB server limit. Reduce the combined query and attachments, then retry.", 413);

  if (isForm) return submitQuery(request);

  let body: unknown;
  try { body = await request.json(); } catch { return jsonError("Please send a valid request.", 400); }
  if (!body || typeof body !== "object") return jsonError("Please send a valid request.", 400);
  const data = body as Record<string, unknown>;
  const email = normalizeEmail(data.email);
  if (!validEmail(email)) return jsonError("Enter a valid email address.", 400);

  if (data.action === "send-code") {
    if (rateLimit(request, "code", 3, 15 * 60_000)) return jsonError("Too many verification attempts. Please wait 15 minutes before trying again.", 429);
    const code = String(randomInt(0, 1_000_000)).padStart(6, "0");
    const expiresAt = Date.now() + CODE_TTL * 1000;
    try {
      const token = makeToken(`${email}|${code}|${expiresAt}`);
      await sendEmail({ to: email, subject: "Your Aarushi Infotech email verification code", text: `Your verification code is ${code}. It expires in 10 minutes. If you did not request this code, you can ignore this email.` });
      const response = NextResponse.json({ success: true });
      setCookie(response, CODE_COOKIE, token, CODE_TTL);
      return response;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Email could not be sent. Please try again.";
      return jsonError(message, message.includes("not configured") ? 503 : 502);
    }
  }

  if (data.action === "verify-code") {
    if (rateLimit(request, "verify", 10, 15 * 60_000)) return jsonError("Too many code attempts. Request a new code and try again later.", 429);
    const code = typeof data.code === "string" ? data.code.trim() : "";
    const payload = readToken(request.headers.get("cookie")?.split(";").map((item) => item.trim()).find((item) => item.startsWith(`${CODE_COOKIE}=`))?.slice(CODE_COOKIE.length + 1));
    const [savedEmail, savedCode, expiry] = payload.split("|");
    if (!/^\d{6}$/.test(code) || savedEmail !== email || !safeEqual(savedCode || "", code) || Number(expiry) < Date.now()) return jsonError("That code is invalid or expired. Request a new verification code.", 400);
    const response = NextResponse.json({ success: true });
    setCookie(response, VERIFIED_COOKIE, makeToken(`${email}|${Date.now() + VERIFIED_TTL * 1000}`), VERIFIED_TTL);
    response.cookies.set(CODE_COOKIE, "", { ...cookieOptions(0), maxAge: 0 });
    return response;
  }

  return jsonError("Unknown Send Query action.", 400);
}

async function submitQuery(request: Request) {
  if (rateLimit(request, "submit", 5, 60 * 60_000)) return jsonError("Too many submissions from this connection. Please try again later.", 429);
  const verification = readToken(request.headers.get("cookie")?.split(";").map((item) => item.trim()).find((item) => item.startsWith(`${VERIFIED_COOKIE}=`))?.slice(VERIFIED_COOKIE.length + 1));
  let verifiedEmail = "";
  try {
    const [email, expiry] = verification.split("|");
    if (validEmail(email) && Number(expiry) >= Date.now()) verifiedEmail = email;
  } catch { /* invalid token */ }
  if (!verifiedEmail) return jsonError("Verify your email before sending your query.", 401);

  let form: FormData;
  try { form = await request.formData(); } catch { return jsonError("The submitted form is invalid or too large. Please reduce its size and retry.", 400); }
  const name = cleanName(form.get("name"));
  const email = normalizeEmail(form.get("email"));
  const contact = typeof form.get("contact") === "string" ? String(form.get("contact")) : "";
  const whatsapp = typeof form.get("whatsapp") === "string" ? String(form.get("whatsapp")) : "";
  let query = typeof form.get("query") === "string" ? String(form.get("query")) : "";
  const isBooking = form.get("booking") === "true";
  if (email !== verifiedEmail) return jsonError("The verified email does not match this request. Verify the address again.", 401);
  if (!validName(name)) return jsonError("Enter a valid full name between 2 and 120 characters.", 400);
  if (!validInternationalNumber(contact) || !validInternationalNumber(whatsapp)) return jsonError("Enter complete contact and WhatsApp numbers, including their country codes.", 400);
  if (isBooking) {
    let selected: unknown;
    try { selected = JSON.parse(String(form.get("booking_classes") || "")); } catch { selected = null; }
    if (!Array.isArray(selected) || selected.length < 1 || selected.length > 7 || !selected.every((item) => typeof item === "string" && BOOKING_CLASSES.has(item)) || new Set(selected).size !== selected.length) {
      return jsonError("Choose between 1 and 7 valid classes.", 400);
    }
    const customDescription = typeof form.get("custom_description") === "string" ? String(form.get("custom_description")).trim() : "";
    if (selected.includes("Custom") && !customDescription) return jsonError("Describe your custom learning requirements.", 400);
    if (Array.from(customDescription).length > 700) return jsonError("The custom description cannot exceed 700 characters.", 400);
    query = [
      "Class booking request",
      `Selected classes: ${(selected as string[]).join(", ")}`,
      ...(selected.includes("Custom") ? [`Custom learning requirements: ${customDescription}`] : []),
    ].join("\n");
  }
  if (!query.trim()) return jsonError("Please add your query.", 400);
  if (Array.from(query).length > MAX_QUERY) return jsonError("The query cannot exceed 10,000 characters.", 413);

  const files = form.getAll("files").filter((value): value is File => value instanceof File);
  if (files.length > MAX_FILES) return jsonError("You can attach up to five files.", 400);
  let totalBytes = 0;
  const attachments: OutgoingAttachment[] = [];
  for (const file of files) {
    if (file.size <= 0 || file.size > MAX_FILE_BYTES) return jsonError(`${file.name} is empty or exceeds the 256 KB per-file limit.`, 400);
    totalBytes += file.size;
    if (totalBytes > MAX_FILES_BYTES) return jsonError("All attachments together must be no larger than 256 KB.", 400);
    const bytes = Buffer.from(await file.arrayBuffer());
    const filename = file.name.replace(/[^\p{L}\p{N}._ -]/gu, "_").slice(0, 100);
    const mime = file.type.toLowerCase();
    const validPng = mime === "image/png" && bytes.length > 8 && bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
    const validJpeg = mime === "image/jpeg" && bytes.length > 3 && bytes[0] === 255 && bytes[1] === 216 && bytes.at(-2) === 255 && bytes.at(-1) === 217;
    const validWebp = mime === "image/webp" && bytes.length > 12 && bytes.toString("ascii", 0, 4) === "RIFF" && bytes.toString("ascii", 8, 12) === "WEBP";
    const validPdf = mime === "application/pdf" && bytes.subarray(0, 5).toString("ascii") === "%PDF-";
    let validText = false;
    if (mime === "text/plain") {
      try { new TextDecoder("utf-8", { fatal: true }).decode(bytes); validText = !bytes.includes(0); } catch { validText = false; }
    }
    if (!(validPng || validJpeg || validWebp || validPdf || validText)) return jsonError(`${filename || "An attachment"} does not contain the supported file type it claims.`, 400);
    attachments.push({ filename: filename || "attachment", content: bytes.toString("base64"), contentType: mime });
  }

  const reference = `AI-${new Date().getUTCFullYear()}-${randomUUID().replaceAll("-", "").toUpperCase()}`;
  const text = [
    isBooking ? "NEW AI CLASSES BOOKING REQUEST — FOR REVIEW" : "NEW AI CLASSES QUERY — FOR REVIEW",
    `Reference: ${reference}`,
    `Submitted: ${new Date().toISOString()}`,
    `Name (not identity-verified): ${name}`,
    `Email (inbox verified): ${email}`,
    `Contact: ${contact}`,
    `WhatsApp (not verified): ${whatsapp}`,
    `Attachments: ${attachments.length}`,
    "",
    "QUERY",
    query,
    "",
    isBooking ? "This is a class booking request for the team to review; it does not confirm enrollment." : "This is an enquiry for the team to review.",
  ].join("\n");
  try {
    await sendEmail({ to: ADMIN_EMAIL, replyTo: email, subject: `${isBooking ? "AI Classes booking request" : "AI Classes query"} ${reference} — ${name}`, text, ...(attachments.length ? { attachments } : {}) });
    // Admin inbox acceptance is the durable record available in the current project.
    // Applicant copy is best-effort: it must not turn a delivered request into a reported failure.
    try {
      // EmailJS documents a one-request-per-second API limit.
      await new Promise((resolve) => setTimeout(resolve, 1_100));
      await sendEmail({
        to: email,
        subject: `Aarushi Infotech received your ${isBooking ? "class request" : "query"} (${reference})`,
        text: isBooking
          ? `Thank you, ${name}. Your class request ${reference} has been emailed to Aarushi Infotech. This is a request, not a confirmed enrollment. If you also want to contact us on WhatsApp, open the prepared message and press Send.`
          : `Thank you, ${name}. Your query ${reference} has been sent to Aarushi Infotech. Our team will review it and respond.`,
      });
    } catch {
      // Admin delivery is the commit point. Applicant-copy failure must not
      // report a failed request after it has already reached the team.
    }
    const response = NextResponse.json({ success: true, reference });
    response.cookies.set(VERIFIED_COOKIE, "", { ...cookieOptions(0), maxAge: 0 });
    return response;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Your request could not be delivered. Please try again.";
    return jsonError(message, message.includes("not configured") ? 503 : 502);
  }
}
