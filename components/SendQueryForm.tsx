"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { ArrowLeft, CheckCircle2, CloudUpload, LoaderCircle, Paperclip, ShieldCheck, Trash2 } from "lucide-react";

const MAX_QUERY = 10_000;
const MAX_FILES = 5;
const MAX_FILE = 256 * 1024;
const MAX_FILES_TOTAL = 256 * 1024;
const formatCount = (value: number) => String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const countries = [
  { name: "India", dial: "+91", min: 10, max: 10 },
  { name: "United States", dial: "+1", min: 10, max: 10 },
  { name: "United Kingdom", dial: "+44", min: 10, max: 10 },
  { name: "Australia", dial: "+61", min: 9, max: 9 },
  { name: "Canada", dial: "+1", min: 10, max: 10 },
  { name: "United Arab Emirates", dial: "+971", min: 9, max: 9 },
];
const fileAccept = ".png,.jpg,.jpeg,.webp,.pdf,.txt,image/png,image/jpeg,image/webp,application/pdf,text/plain";

type PhoneValue = { dial: string; number: string };
type SelectedFile = { file: File; id: string; preview?: string };
type ApiResponse = { success?: boolean; error?: string; message?: string; reference?: string };

function validPhone({ dial, number }: PhoneValue) {
  const country = countries.find((item) => item.dial === dial);
  const digits = number.replace(/\D/g, "");
  return Boolean(country && digits.length >= country.min && digits.length <= country.max && /^[1-9]\d*$/.test(digits));
}

function PhoneField({ label, value, onChange, error, disabled }: { label: string; value: PhoneValue; onChange: (value: PhoneValue) => void; error?: string; disabled?: boolean }) {
  return <div>
    <label className="mb-2 block text-sm font-semibold text-slate-200">{label} <span className="text-emerald-300">*</span></label>
    <div className="flex gap-2">
      <select aria-label={`${label} country code`} value={value.dial} disabled={disabled} onChange={(event) => onChange({ ...value, dial: event.target.value })} className="w-[118px] rounded-xl border border-white/10 bg-slate-950 px-2 py-3 text-sm text-white outline-none focus:border-emerald-300/60">
        {countries.map((country) => <option key={`${country.name}-${country.dial}`} value={country.dial}>{country.dial} · {country.name}</option>)}
      </select>
      <input aria-label={label} inputMode="tel" autoComplete="tel-national" value={value.number} disabled={disabled} onChange={(event) => onChange({ ...value, number: event.target.value.replace(/[^\d\s()-]/g, "") })} className="min-w-0 flex-1 rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-emerald-300/60" placeholder="Phone number" />
    </div>
    {error && <p className="mt-1.5 text-xs text-rose-300">{error}</p>}
  </div>;
}

export default function SendQueryForm({ attachmentsEnabled }: { attachmentsEnabled: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState<PhoneValue>({ dial: "+91", number: "" });
  const [whatsapp, setWhatsapp] = useState<PhoneValue>({ dial: "+91", number: "" });
  const [sameNumber, setSameNumber] = useState(false);
  const queryRef = useRef<HTMLTextAreaElement>(null);
  const countTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [files, setFiles] = useState<SelectedFile[]>([]);
  const [otp, setOtp] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [busy, setBusy] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [notice, setNotice] = useState<{ kind: "error" | "success"; text: string } | null>(null);
  const [reference, setReference] = useState("");
  const [queryCount, setQueryCount] = useState(0);

  const setEmailValue = (value: string) => {
    const changed = value.trim().toLowerCase() !== email.trim().toLowerCase();
    setEmail(value);
    if (changed) {
      setEmailVerified(false);
      setEmailSent(false);
      setOtp("");
      setErrors((current) => ({ ...current, email: "" }));
    }
  };

  const addFiles = (incoming: FileList | File[]) => {
    setNotice(null);
    const additions: SelectedFile[] = [];
    const currentBytes = files.reduce((sum, item) => sum + item.file.size, 0);
    let totalBytes = currentBytes;
    for (const file of Array.from(incoming)) {
      if (files.length + additions.length >= MAX_FILES) { setNotice({ kind: "error", text: "You can attach up to five files." }); break; }
      if (file.size === 0 || file.size > MAX_FILE) { setNotice({ kind: "error", text: `${file.name} is empty or larger than 256 KB.` }); continue; }
      if (totalBytes + file.size > MAX_FILES_TOTAL) { setNotice({ kind: "error", text: "Attachments together must be no larger than 256 KB. This keeps submissions within the hosting request limit." }); break; }
      const typeOk = ["image/png", "image/jpeg", "image/webp", "application/pdf", "text/plain"].includes(file.type);
      const extensionOk = /\.(png|jpe?g|webp|pdf|txt)$/i.test(file.name);
      if (!typeOk || !extensionOk) { setNotice({ kind: "error", text: `${file.name} is not a supported PNG, JPG, WEBP, PDF, or TXT file.` }); continue; }
      totalBytes += file.size;
      additions.push({ file, id: `${file.name}-${file.size}-${crypto.randomUUID()}`, preview: file.type.startsWith("image/") ? URL.createObjectURL(file) : undefined });
    }
    setFiles((current) => [...current, ...additions]);
  };

  const removeFile = (id: string) => setFiles((current) => {
    const removed = current.find((item) => item.id === id);
    if (removed?.preview) URL.revokeObjectURL(removed.preview);
    return current.filter((item) => item.id !== id);
  });

  const validate = () => {
    const next: Record<string, string> = {};
    const cleanName = name.trim().replace(/\s+/gu, " ");
    if (cleanName.length < 2 || cleanName.length > 120 || !/^[\p{L}\p{M}][\p{L}\p{M}\s.'’\-]{1,119}$/u.test(cleanName)) next.name = "Enter your full name (2–120 characters).";
    const cleanEmail = email.trim();
    const validEmailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail);
    if (!validEmailFormat) next.email = "Enter a valid email address.";
    else if (!emailVerified) next.email = "This email format is valid, but inbox access is not verified yet. Click Verify and enter the code sent to this address.";
    if (!validPhone(contact)) next.contact = "Enter a complete number for the selected country.";
    if (!validPhone(sameNumber ? contact : whatsapp)) next.whatsapp = "Enter a complete WhatsApp number for the selected country.";
    const currentQuery = queryRef.current?.value ?? "";
    const currentQueryCount = Array.from(currentQuery).length;
    if (!currentQuery.trim()) next.query = "Please describe your query.";
    if (currentQueryCount > MAX_QUERY) next.query = "The query cannot exceed 10,000 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const requestOtp = async () => {
    const clean = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean)) {
      setErrors((current) => ({ ...current, email: "Enter a valid email address." })); return;
    }
    setErrors((current) => ({ ...current, email: "" }));
    setBusy(true); setNotice(null);
    try {
      const response = await fetch("/api/send-query", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "send-code", email: clean }) });
      const data = await response.json() as ApiResponse;
      if (!response.ok) throw new Error(data.error || "Could not send the verification code.");
      setEmailSent(true); setNotice({ kind: "success", text: "A verification code was sent. It expires in 10 minutes." });
    } catch (error) { setNotice({ kind: "error", text: error instanceof Error ? error.message : "Could not send the verification code." }); }
    finally { setBusy(false); }
  };

  const verifyOtp = async () => {
    setBusy(true); setNotice(null);
    try {
      const response = await fetch("/api/send-query", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "verify-code", email: email.trim(), code: otp.trim() }) });
      const data = await response.json() as ApiResponse;
      if (!response.ok) throw new Error(data.error || "The code could not be verified.");
      setEmailVerified(true); setErrors((current) => ({ ...current, email: "" })); setNotice({ kind: "success", text: "Email verified. This confirms access to the inbox, not the applicant’s identity." });
    } catch (error) { setNotice({ kind: "error", text: error instanceof Error ? error.message : "The code could not be verified." }); }
    finally { setBusy(false); }
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setNotice(null);
    if (!validate()) return;
    setBusy(true);
    try {
      const form = new FormData();
      form.set("name", name.trim().replace(/\s+/gu, " "));
      form.set("email", email.trim());
      form.set("contact", `${contact.dial}${contact.number.replace(/\D/g, "")}`);
      const whats = sameNumber ? contact : whatsapp;
      form.set("whatsapp", `${whats.dial}${whats.number.replace(/\D/g, "")}`);
      form.set("query", queryRef.current?.value ?? "");
      files.forEach((item) => form.append("files", item.file, item.file.name));
      const response = await fetch("/api/send-query", { method: "POST", body: form });
      const data = await response.json() as ApiResponse;
      if (!response.ok) throw new Error(data.error || "The request could not be sent. Your entries are still here; please try again.");
      setReference(data.reference || "");
      setNotice({ kind: "success", text: "Your query was sent to Aarushi Infotech. Our team will review it and respond; this does not enroll you in a class." });
    } catch (error) { setNotice({ kind: "error", text: error instanceof Error ? error.message : "The request could not be sent. Please try again." }); }
    finally { setBusy(false); }
  };

  return <main className="min-h-screen overflow-hidden bg-[#020617] text-white">
    <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden" aria-hidden="true"><div className="absolute -left-40 top-[-120px] h-[540px] w-[540px] rounded-full bg-emerald-400/[0.08] blur-[140px]"/><div className="absolute -right-48 top-[30%] h-[600px] w-[600px] rounded-full bg-blue-500/[0.10] blur-[150px]"/><div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(rgba(56,189,248,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.3) 1px, transparent 1px)", backgroundSize: "56px 56px" }}/></div>
    <header className="relative z-10 border-b border-white/10 bg-[#020617]/70 backdrop-blur-xl"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
      <Link href="/" className="flex items-center gap-3"><span className="relative block h-10 w-10 overflow-hidden rounded-xl border border-emerald-300/25"><Image src="/images/IMG-logo.jpeg" alt="Aarushi Infotech" fill sizes="40px" className="object-cover"/></span><span><span className="block text-sm font-black tracking-[0.15em]">AARUSHI</span><span className="block text-[9px] font-bold tracking-[0.3em] text-emerald-300">INFOTECH</span></span></Link>
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-emerald-200"><ArrowLeft size={16}/> Back to site</Link>
    </div></header>
    <section className="relative z-10 mx-auto max-w-6xl px-4 py-10 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-3xl text-center"><div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.06] px-4 py-2 text-[10px] font-bold tracking-[0.22em] text-emerald-200"><ShieldCheck size={14}/> AI CLASSES · SEND QUERY</div><h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">Send <span className="bg-gradient-to-r from-emerald-200 via-cyan-300 to-blue-400 bg-clip-text text-transparent">Query.</span></h1><p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">Tell us what you are looking for. Our team will review your query and contact you.</p></div>
      <form onSubmit={submit} className="mx-auto mt-10 max-w-4xl rounded-[28px] border border-white/10 bg-slate-950/70 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.4)] backdrop-blur-2xl sm:p-9" noValidate>
        <div className="grid gap-6 md:grid-cols-2">
          <div><label htmlFor="full-name" className="mb-2 block text-sm font-semibold text-slate-200">Full name <span className="text-emerald-300">*</span></label><input id="full-name" autoComplete="name" required maxLength={120} value={name} onChange={(event) => setName(event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-emerald-300/60" placeholder="Your full name"/>{errors.name && <p id="name-error" className="mt-1.5 text-xs text-rose-300">{errors.name}</p>}</div>
          <div><label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-200">Email address <span className="text-emerald-300">*</span></label><div className="flex gap-2"><input id="email" type="email" autoComplete="email" required value={email} onChange={(event) => setEmailValue(event.target.value)} aria-invalid={Boolean(errors.email)} className="min-w-0 flex-1 rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-emerald-300/60" placeholder="you@example.com"/><button type="button" disabled={busy || emailVerified} onClick={requestOtp} className="shrink-0 rounded-xl border border-emerald-300/25 bg-emerald-300/10 px-3 text-xs font-bold text-emerald-100 transition hover:bg-emerald-300/20 disabled:opacity-50">{emailVerified ? "Verified" : emailSent ? "Resend code" : "Verify"}</button></div>{errors.email ? <p className="mt-1.5 text-xs text-rose-300">{errors.email}</p> : !emailVerified && <p className="mt-1.5 text-xs text-slate-500">A valid email format is not inbox verification. Click Verify and enter the code sent to your email.</p>}
            {emailSent && !emailVerified && <div className="mt-3 flex gap-2"><input aria-label="Email verification code" inputMode="numeric" autoComplete="one-time-code" maxLength={6} value={otp} onChange={(event) => setOtp(event.target.value.replace(/\D/g, ""))} className="min-w-0 flex-1 rounded-xl border border-white/10 bg-slate-950 px-4 py-2.5 text-white outline-none focus:border-emerald-300/60" placeholder="6-digit code"/><button type="button" disabled={busy || otp.length !== 6} onClick={verifyOtp} className="rounded-xl bg-emerald-300 px-4 text-xs font-black text-slate-950 disabled:opacity-50">Confirm</button></div>}
          </div>
          <PhoneField label="Contact number" value={contact} disabled={sameNumber} onChange={(value) => { setContact(value); if (sameNumber) setWhatsapp(value); }} error={errors.contact}/>
          <PhoneField label="WhatsApp number" value={sameNumber ? contact : whatsapp} disabled={sameNumber} onChange={setWhatsapp} error={errors.whatsapp}/>
          <div className="md:col-start-2 -mt-3"><label className="inline-flex cursor-pointer items-center gap-2 text-xs text-slate-400"><input type="checkbox" checked={sameNumber} onChange={(event) => { setSameNumber(event.target.checked); if (event.target.checked) setWhatsapp(contact); }} className="h-4 w-4 accent-emerald-300"/> Use my contact number for WhatsApp</label></div>
        </div>
        <div className="mt-7"><div className="mb-2 flex items-end justify-between gap-3"><label htmlFor="query" className="text-sm font-semibold text-slate-200">Your query <span className="text-emerald-300">*</span></label><span aria-live="polite" className="text-xs tabular-nums text-slate-500">{formatCount(queryCount)} / 10,000</span></div><textarea id="query" required ref={queryRef} aria-invalid={Boolean(errors.query)} aria-describedby="query-hint" rows={8} onBeforeInput={(event) => { const element = event.currentTarget; const input = event.nativeEvent as InputEvent; const inputType = typeof input.inputType === "string" ? input.inputType : ""; const insertedText = typeof input.data === "string" ? input.data : null; if (insertedText === null || inputType.startsWith("delete")) return; const selected = element.selectionEnd - element.selectionStart; const candidateUnits = element.value.length - selected + insertedText.length; if (candidateUnits <= MAX_QUERY) return; const before = element.value.slice(0, element.selectionStart); const after = element.value.slice(element.selectionEnd); if (Array.from(before).length + Array.from(insertedText).length + Array.from(after).length > MAX_QUERY) { event.preventDefault(); setErrors((current) => ({ ...current, query: "The query limit is 10,000 characters. Remove some text before adding more." })); } }} onPaste={(event) => { const element = event.currentTarget; const pasted = event.clipboardData.getData("text"); const selected = element.selectionEnd - element.selectionStart; if (element.value.length - selected + pasted.length <= MAX_QUERY) return; const before = element.value.slice(0, element.selectionStart); const after = element.value.slice(element.selectionEnd); if (Array.from(before).length + Array.from(pasted).length + Array.from(after).length > MAX_QUERY) { event.preventDefault(); setErrors((current) => ({ ...current, query: "That text would exceed the 10,000 character limit. Shorten it and try again." })); } }} onChange={(event) => { if (countTimer.current) clearTimeout(countTimer.current); const element = event.currentTarget; countTimer.current = setTimeout(() => { const count = Array.from(element.value).length; setQueryCount(count); if (count <= MAX_QUERY) setErrors((current) => ({ ...current, query: "" })); }, 180); }} className="w-full resize-y rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 leading-7 text-white outline-none placeholder:text-slate-600 focus:border-emerald-300/60" placeholder="Tell us which class or service you are interested in, what you hope to learn, and any details that will help us respond."/><div id="query-hint" className="mt-2 flex justify-between text-xs text-slate-500"><span>{errors.query || "Your information will only be used to respond to this request."}</span><span>{formatCount(Math.max(0, MAX_QUERY - queryCount))} remaining</span></div></div>
        {attachmentsEnabled && <div className="mt-7"><div className="mb-2 flex items-center justify-between"><label className="text-sm font-semibold text-slate-200">Attachments <span className="text-xs font-normal text-slate-500">(optional)</span></label><span className="text-xs text-slate-500">Up to 5 · 256 KB total</span></div><label onDragOver={(event) => event.preventDefault()} onDrop={(event) => { event.preventDefault(); addFiles(event.dataTransfer.files); }} className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-5 py-7 text-center transition hover:border-emerald-300/35 hover:bg-emerald-300/[0.03]"><CloudUpload className="mb-2 text-emerald-200" size={24}/><span className="text-sm font-semibold text-slate-200">Choose files or drag them here</span><span className="mt-1 text-xs text-slate-500">PNG, JPG, WEBP, PDF, TXT · 256 KB max each</span><input type="file" multiple accept={fileAccept} onChange={(event) => { if (event.target.files) addFiles(event.target.files); event.currentTarget.value = ""; }} className="sr-only" aria-label="Choose attachments"/></label>
          {files.length > 0 && <ul className="mt-3 space-y-2">{files.map(({ file, id, preview }) => <li key={id} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">{preview ? <Image src={preview} alt={`Preview of ${file.name}`} width={36} height={36} unoptimized className="h-9 w-9 rounded-lg object-cover"/> : <Paperclip size={17} className="text-emerald-200"/>}<span className="min-w-0 flex-1 truncate text-sm text-slate-300">{file.name}<span className="ml-2 text-xs text-slate-500">{(file.size / 1024).toFixed(0)} KB</span></span><button type="button" onClick={() => removeFile(id)} aria-label={`Remove ${file.name}`} className="rounded-lg p-2 text-slate-500 hover:bg-rose-400/10 hover:text-rose-200"><Trash2 size={16}/></button></li>)}</ul>}
        </div>}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center"><p className="max-w-xl text-xs leading-5 text-slate-500">By submitting, you agree that your details, query{attachmentsEnabled ? ", and attachments" : ""} may be emailed to info@aarushiinfotech.in so the team can respond. Your email verification confirms inbox access; your name and phone number are not identity- or WhatsApp-verified.</p><button type="submit" disabled={busy || Boolean(reference)} className="inline-flex min-w-[190px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-300 to-cyan-300 px-6 py-3.5 text-sm font-black text-slate-950 shadow-lg shadow-emerald-400/10 transition hover:brightness-110 disabled:cursor-wait disabled:opacity-60">{busy ? <><LoaderCircle size={16} className="animate-spin"/> Sending…</> : <><CheckCircle2 size={16}/> Send request</>}</button></div>
        {notice && <div role="status" aria-live="polite" className={`mt-5 rounded-xl border px-4 py-3 text-sm ${notice.kind === "success" ? "border-emerald-300/20 bg-emerald-300/[0.06] text-emerald-100" : "border-rose-300/20 bg-rose-300/[0.06] text-rose-100"}`}>{notice.text}{reference && <p className="mt-2 font-mono text-xs">Reference: {reference}</p>}</div>}
      </form>
      <p className="mx-auto mt-5 max-w-4xl text-center text-xs text-slate-600">Your query will be reviewed by our team, who will contact you with a response.</p>
    </section>
  </main>;
}
