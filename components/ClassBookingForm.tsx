"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { CheckCircle2, LoaderCircle, Menu, MessageCircle, ShieldCheck, X } from "lucide-react";

const classes = [
  "AI Prompting", "AI Image Generation", "Logo Generation", "Banner Generation",
  "Learning Data Analysis", "Learning Data Handling", "Code Learning",
  "Practical Programming", "Tally Master", "Learning Tally", "Working With Data",
  "Web Development", "Video Generation", "Video Prompt Enhancement", "Custom",
];
const countries = [
  { name: "India", dial: "+91", digits: 10 }, { name: "United States", dial: "+1", digits: 10 },
  { name: "United Kingdom", dial: "+44", digits: 10 }, { name: "Australia", dial: "+61", digits: 9 },
  { name: "Canada", dial: "+1", digits: 10 }, { name: "United Arab Emirates", dial: "+971", digits: 9 },
];
const whatsappDestination = "919967844269";
type Phone = { dial: string; number: string };
type ApiResponse = { success?: boolean; error?: string; reference?: string };

function phoneIsValid(value: Phone) {
  const country = countries.find((item) => item.dial === value.dial);
  const digits = value.number.replace(/\D/g, "");
  return Boolean(country && digits.length === country.digits && /^[1-9]\d*$/.test(digits));
}

export default function ClassBookingForm() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState<Phone>({ dial: "+91", number: "" });
  const [whatsapp, setWhatsapp] = useState<Phone>({ dial: "+91", number: "" });
  const [sameNumber, setSameNumber] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [customDescription, setCustomDescription] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [otp, setOtp] = useState("");
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<{ kind: "error" | "success"; text: string } | null>(null);
  const [error, setError] = useState("");
  const [reference, setReference] = useState("");

  const cleanName = name.trim().replace(/\s+/gu, " ");
  const cleanEmail = email.trim().toLowerCase();
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail);
  const waPhone = sameNumber ? contact : whatsapp;
  const selectedCustom = selected.includes("Custom");

  function updateEmail(value: string) {
    setEmail(value);
    setEmailVerified(false);
    setEmailSent(false);
    setOtp("");
  }

  function toggleClass(value: string) {
    setError("");
    setSelected((current) => {
      if (current.includes(value)) return current.filter((item) => item !== value);
      if (current.length >= 7) {
        setError("You can select a maximum of 7 classes per booking request.");
        return current;
      }
      return [...current, value];
    });
  }

  async function requestOtp() {
    if (!emailValid) { setError("Enter a valid email address before requesting a code."); return; }
    setBusy(true); setNotice(null); setError("");
    try {
      const response = await fetch("/api/send-query", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "send-code", email: cleanEmail }),
      });
      const data = await response.json() as ApiResponse;
      if (!response.ok) throw new Error(data.error || "Could not send the verification code.");
      setEmailSent(true);
      setNotice({ kind: "success", text: "Verification code sent. Check your email inbox." });
    } catch (caught) {
      setNotice({ kind: "error", text: caught instanceof Error ? caught.message : "Could not send the verification code." });
    } finally { setBusy(false); }
  }

  async function verifyOtp() {
    setBusy(true); setNotice(null);
    try {
      const response = await fetch("/api/send-query", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "verify-code", email: cleanEmail, code: otp.trim() }),
      });
      const data = await response.json() as ApiResponse;
      if (!response.ok) throw new Error(data.error || "The code could not be verified.");
      setEmailVerified(true);
      setNotice({ kind: "success", text: "Email verified. This confirms inbox access." });
    } catch (caught) {
      setNotice({ kind: "error", text: caught instanceof Error ? caught.message : "The code could not be verified." });
    } finally { setBusy(false); }
  }

  function validate() {
    if (cleanName.length < 2 || cleanName.length > 120 || !/^[\p{L}\p{M}][\p{L}\p{M}\s.'’\-]{1,119}$/u.test(cleanName)) return "Enter a valid full name.";
    if (!emailValid) return "Enter a valid email address.";
    if (!emailVerified) return "Verify your email address before sending this request.";
    if (!phoneIsValid(contact)) return "Enter a valid contact number for the selected country.";
    if (!phoneIsValid(waPhone)) return "Enter a valid WhatsApp number for the selected country.";
    if (selected.length < 1 || selected.length > 7) return "Choose between 1 and 7 classes.";
    if (selectedCustom && !customDescription.trim()) return "Describe your custom learning requirements.";
    if (Array.from(customDescription).length > 700) return "The custom description cannot exceed 700 characters.";
    return "";
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setNotice(null);
    const validationError = validate();
    if (validationError) { setError(validationError); return; }
    setBusy(true); setError("");
    try {
      const form = new FormData();
      form.set("booking", "true");
      form.set("name", cleanName);
      form.set("email", cleanEmail);
      form.set("contact", `${contact.dial}${contact.number.replace(/\D/g, "")}`);
      form.set("whatsapp", `${waPhone.dial}${waPhone.number.replace(/\D/g, "")}`);
      form.set("booking_classes", JSON.stringify(selected));
      form.set("custom_description", selectedCustom ? customDescription.trim() : "");
      form.set("query", `Class booking request\nSelected classes: ${selected.join(", ")}${selectedCustom ? `\nCustom learning requirements: ${customDescription.trim()}` : ""}`);
      const response = await fetch("/api/send-query", { method: "POST", body: form });
      const data = await response.json() as ApiResponse;
      if (!response.ok) throw new Error(data.error || "The booking request could not be sent. Please try again.");
      setReference(data.reference || "");
      setNotice({ kind: "success", text: "Your booking request was emailed to Aarushi Infotech. Continue to WhatsApp and press Send there to also message our team." });
    } catch (caught) {
      setNotice({ kind: "error", text: caught instanceof Error ? caught.message : "The booking request could not be sent. Please try again." });
    } finally { setBusy(false); }
  }

  const whatsappMessage = [
    "NEW AI CLASSES BOOKING REQUEST", `Booking Reference: ${reference}`, "", `FULL NAME:\n${cleanName}`,
    `EMAIL:\n${cleanEmail}`, `CONTACT NUMBER:\n${contact.dial}${contact.number.replace(/\D/g, "")}`,
    `WHATSAPP NUMBER:\n${waPhone.dial}${waPhone.number.replace(/\D/g, "")}`,
    `SELECTED CLASSES:\n${selected.join("\n")}`,
    ...(selectedCustom ? [`CUSTOM LEARNING REQUIREMENTS:\n${customDescription.trim()}`] : []),
    `SUBMISSION DATE:\n${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`,
    "", "Please review this enquiry and contact me about the next steps.", "Regards, Aarushi Infotech | AI Classes",
  ].join("\n");
  const whatsappUrl = `https://wa.me/${whatsappDestination}?text=${encodeURIComponent(whatsappMessage)}`;

  return <main className="min-h-screen overflow-x-clip bg-[#020617] text-white">
    <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden" aria-hidden="true"><div className="absolute -left-40 top-[-120px] h-[540px] w-[540px] rounded-full bg-emerald-400/[0.08] blur-[140px]"/><div className="absolute -right-48 top-[30%] h-[600px] w-[600px] rounded-full bg-blue-500/[0.10] blur-[150px]"/><div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(rgba(56,189,248,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.3) 1px, transparent 1px)", backgroundSize: "56px 56px" }}/></div>
    <header className="relative z-20 border-b border-white/10 bg-[#020617]/80 backdrop-blur-xl"><div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 md:px-8 md:py-4"><Link href="/" className="flex shrink-0 items-center gap-3"><span className="relative block h-10 w-10 overflow-hidden rounded-xl border border-emerald-300/25"><Image src="/images/IMG-logo.jpeg" alt="Aarushi Infotech" fill sizes="40px" className="object-cover"/></span><span><span className="block text-sm font-black tracking-[0.15em]">AARUSHI</span><span className="block text-[9px] font-bold tracking-[0.3em] text-emerald-300">INFOTECH</span></span></Link><nav aria-label="Main navigation" className="hidden items-center gap-3 text-sm font-semibold lg:gap-5 md:flex"><Link href="/" className="text-slate-300 transition hover:text-emerald-200">Home</Link><Link href="/classes" className="text-slate-300 transition hover:text-emerald-200">AI Classes</Link><Link href="/about" className="text-slate-300 transition hover:text-emerald-200">About</Link><Link href="/send-query" className="text-slate-300 transition hover:text-emerald-200">Send Query</Link><Link href="/booking" className="text-emerald-200">Book a Class</Link></nav><button type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="booking-mobile-navigation" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-emerald-300/30 hover:text-emerald-200 md:hidden">{menuOpen ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}</button>{menuOpen && <nav id="booking-mobile-navigation" aria-label="Mobile navigation" className="absolute left-3 right-3 top-[calc(100%-0.25rem)] z-50 rounded-2xl border border-white/10 bg-[#06111f]/95 p-2 shadow-2xl shadow-black/40 backdrop-blur-2xl md:hidden">{[{ label: "Home", href: "/" }, { label: "AI Classes", href: "/classes" }, { label: "About", href: "/about" }, { label: "Send Query", href: "/send-query" }, { label: "Book a Class", href: "/booking" }].map((item) => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/5 hover:text-emerald-200">{item.label}</Link>)}</nav>}</div></header>
    <section className="relative z-10 mx-auto max-w-6xl px-3 py-8 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-3xl text-center"><div className="inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.06] px-3 py-2 text-[9px] font-bold tracking-[0.16em] text-emerald-200 sm:px-4 sm:text-[10px] sm:tracking-[0.22em]"><ShieldCheck size={14}/> AI CLASSES · CLASS REQUEST</div><h1 className="mt-6 text-3xl font-black tracking-tight sm:text-6xl">Book a <span className="bg-gradient-to-r from-emerald-200 via-cyan-300 to-blue-400 bg-clip-text text-transparent">Class.</span></h1><p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">Choose what you would like to learn. We’ll email your request to our team and prepare a WhatsApp message for you.</p></div>
      <form onSubmit={submit} noValidate className="mx-auto mt-8 w-full min-w-0 max-w-4xl rounded-2xl border border-white/10 bg-slate-950/70 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.4)] backdrop-blur-2xl sm:mt-10 sm:rounded-[28px] sm:p-9">
        <div className="grid min-w-0 gap-6 md:grid-cols-2">
          <div className="min-w-0"><label htmlFor="booking-name" className="mb-2 block text-sm font-semibold text-slate-200">Full name <span className="text-emerald-300">*</span></label><input id="booking-name" autoComplete="name" maxLength={120} value={name} onChange={(event) => setName(event.target.value)} className="box-border w-full min-w-0 rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-emerald-300/60" placeholder="Your full name"/></div>
          <div className="min-w-0"><label htmlFor="booking-email" className="mb-2 block text-sm font-semibold text-slate-200">Email address <span className="text-emerald-300">*</span></label><div className="flex min-w-0 gap-2"><input id="booking-email" type="email" autoComplete="email" value={email} onChange={(event) => updateEmail(event.target.value)} className="box-border min-w-0 flex-1 rounded-xl border border-white/10 bg-slate-950/70 px-3 py-3 text-white outline-none placeholder:text-slate-600 focus:border-emerald-300/60 sm:px-4" placeholder="you@example.com"/><button type="button" disabled={busy || emailVerified} onClick={requestOtp} className="shrink-0 rounded-xl border border-emerald-300/25 bg-emerald-300/10 px-2 text-[11px] font-bold text-emerald-100 disabled:opacity-50 sm:px-3 sm:text-xs">{emailVerified ? "Verified" : emailSent ? "Resend code" : "Verify"}</button></div>{!emailVerified && <p className="mt-1.5 text-xs text-slate-500">Verify inbox access using the code we email you.</p>}{emailSent && !emailVerified && <div className="mt-3 flex min-w-0 gap-2"><input aria-label="Email verification code" inputMode="numeric" autoComplete="one-time-code" maxLength={6} value={otp} onChange={(event) => setOtp(event.target.value.replace(/\D/g, ""))} className="box-border min-w-0 flex-1 rounded-xl border border-white/10 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-emerald-300/60 sm:px-4" placeholder="6-digit code"/><button type="button" disabled={busy || otp.length !== 6} onClick={verifyOtp} className="shrink-0 rounded-xl bg-emerald-300 px-3 text-xs font-black text-slate-950 disabled:opacity-50 sm:px-4">Confirm</button></div>}</div>
          <PhoneInput label="Contact number" value={contact} onChange={(value) => { setContact(value); if (sameNumber) setWhatsapp(value); }}/>
          <div className="min-w-0"><PhoneInput label="WhatsApp number" value={sameNumber ? contact : whatsapp} disabled={sameNumber} onChange={setWhatsapp}/><label className="mt-3 inline-flex cursor-pointer items-center gap-2 text-xs text-slate-400"><input type="checkbox" checked={sameNumber} onChange={(event) => { setSameNumber(event.target.checked); if (event.target.checked) setWhatsapp(contact); }} className="h-4 w-4 shrink-0 accent-emerald-300"/> <span>Use my contact number for WhatsApp</span></label></div>
        </div>
        <fieldset className="mt-8 min-w-0"><legend className="text-sm font-semibold text-slate-200">Choose your classes <span className="text-emerald-300">*</span><span className="ml-2 text-xs font-normal text-slate-500">{selected.length} / 7 selected</span></legend><p className="mt-1 text-xs text-slate-500">You can select a maximum of 7 classes per booking request.</p><div className="mt-4 grid min-w-0 gap-2 sm:grid-cols-2 lg:grid-cols-3">{classes.map((item) => { const active = selected.includes(item); const disabled = !active && selected.length >= 7; return <label key={item} className={`flex min-w-0 cursor-pointer items-start gap-3 rounded-xl border px-3 py-3 text-sm transition ${active ? "border-emerald-300/40 bg-emerald-300/[0.08] text-emerald-100" : "border-white/10 bg-white/[0.02] text-slate-300 hover:border-white/20"} ${disabled ? "cursor-not-allowed opacity-45" : ""}`}><input type="checkbox" checked={active} disabled={disabled} onChange={() => toggleClass(item)} className="mt-0.5 h-4 w-4 shrink-0 accent-emerald-300"/><span className="min-w-0 break-words">{item}</span></label>; })}</div></fieldset>
        {selectedCustom && <div className="mt-6"><div className="mb-2 flex items-center justify-between gap-2"><label htmlFor="custom-learning" className="text-sm font-semibold text-slate-200">Describe Your Custom Learning Requirements <span className="text-emerald-300">*</span></label><span className="shrink-0 text-xs tabular-nums text-slate-500">{Array.from(customDescription).length} / 700</span></div><textarea id="custom-learning" rows={4} maxLength={700} value={customDescription} onChange={(event) => setCustomDescription(event.target.value)} className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 leading-7 text-white outline-none placeholder:text-slate-600 focus:border-emerald-300/60" placeholder="Tell us what you want to learn or the skills you want to develop…"/></div>}
        {(error || notice) && <div role="status" aria-live="polite" className={`mt-6 rounded-xl border px-4 py-3 text-sm ${notice?.kind === "success" && !error ? "border-emerald-300/20 bg-emerald-300/[0.06] text-emerald-100" : "border-rose-300/20 bg-rose-300/[0.06] text-rose-100"}`}>{error || notice?.text}{reference && <p className="mt-2 font-mono text-xs">Request reference: {reference}</p>}{reference && <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-4 py-3 font-bold text-slate-950 hover:bg-emerald-300"><MessageCircle size={17}/> Continue in WhatsApp</a>}</div>}
        <div className="mt-8 flex min-w-0 flex-col items-stretch justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center"><p className="max-w-xl break-words text-xs leading-5 text-slate-500">Your request is emailed to info@aarushiinfotech.in. WhatsApp opens with a prepared message; you must press Send there for your WhatsApp message to reach us.</p><button type="submit" disabled={busy || Boolean(reference)} className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-300 to-cyan-300 px-4 py-3.5 text-sm font-black text-slate-950 shadow-lg shadow-emerald-400/10 transition hover:brightness-110 disabled:cursor-wait disabled:opacity-60 sm:w-auto sm:min-w-[210px] sm:px-6">{busy ? <><LoaderCircle size={16} className="animate-spin"/> Sending…</> : <><CheckCircle2 size={16}/> Submit booking request</>}</button></div>
      </form>
    </section>
  </main>;
}

function PhoneInput({ label, value, onChange, disabled = false }: { label: string; value: Phone; onChange: (value: Phone) => void; disabled?: boolean }) {
  return <div className="min-w-0"><label className="mb-2 block text-sm font-semibold text-slate-200">{label} <span className="text-emerald-300">*</span></label><div className="flex min-w-0 gap-2"><select aria-label={`${label} country code`} value={value.dial} disabled={disabled} onChange={(event) => onChange({ ...value, dial: event.target.value })} className="box-border w-[104px] shrink-0 rounded-xl border border-white/10 bg-slate-950 px-1.5 py-3 text-xs text-white outline-none focus:border-emerald-300/60 sm:w-[118px] sm:px-2 sm:text-sm">{countries.map((country) => <option key={`${country.name}-${country.dial}`} value={country.dial}>{country.dial} · {country.name}</option>)}</select><input aria-label={label} inputMode="tel" autoComplete="tel-national" value={value.number} disabled={disabled} onChange={(event) => onChange({ ...value, number: event.target.value.replace(/[^\d\s()-]/g, "") })} className="box-border min-w-0 flex-1 rounded-xl border border-white/10 bg-slate-950/70 px-3 py-3 text-white outline-none placeholder:text-slate-600 focus:border-emerald-300/60 sm:px-4" placeholder="Phone number"/></div></div>;
}
