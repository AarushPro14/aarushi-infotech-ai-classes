"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowUp, BookOpen, ChevronRight, Compass, ExternalLink, GraduationCap, LoaderCircle, MapPin, MessageSquareText, RotateCcw, Sparkles, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ReXoMessage from "./ReXoMessage";
import { rexoSuggestedMessages } from "@/data/rexoResponses";

type Message = { id: string; role: "user" | "assistant"; content: string };

const starterMessage: Message = {
  id: "welcome",
  role: "assistant",
  content: "Hi, I’m ReXo. I can help you explore AI classes, Tally Prime, technology services, or find your way around the site. Pick a quick guide or ask me anything about Aarushi Infotech.",
};

type ReXoChatProps = { onClose: () => void };

export default function ReXoChat({ onClose }: ReXoChatProps) {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([starterMessage]);
  const [showGuides, setShowGuides] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [notice, setNotice] = useState("");
  const [thinking, setThinking] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  async function sendMessage(text = input) {
    const question = text.trim();
    if (!question || thinking) return;
    const history = messages.slice(1).map(({ role, content }) => ({ role, content }));
    setMessages((previous) => [...previous, { id: `${Date.now()}-user`, role: "user", content: question }]);
    setInput("");
    setNotice("");
    setShowGuides(false);
    setThinking(true);
    try {
      const response = await fetch("/api/rexo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question, history }),
      });
      const result: unknown = await response.json().catch(() => null);
      const payload = typeof result === "object" && result !== null ? result : null;
      const errorMessage = payload && "error" in payload && typeof payload.error === "string" ? payload.error : "ReXo couldn’t prepare a reply. Please try again.";
      if (!response.ok || !payload || !("success" in payload) || payload.success !== true) throw new Error(errorMessage);

      const answer = "answer" in payload && typeof payload.answer === "string" && payload.answer.trim() ? payload.answer.trim() : "I couldn’t prepare a clear answer. Please try asking another way.";
      setMessages((previous) => [...previous, { id: `${Date.now()}-assistant`, role: "assistant", content: answer }]);

    } catch (error) {
      const message = error instanceof Error ? error.message : "ReXo couldn’t reach its AI service. Please try again.";
      setMessages((previous) => [...previous, { id: `${Date.now()}-error`, role: "assistant", content: message }]);
    } finally {
      setThinking(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage();
  }

  function navigateTo(path: string) {
    setNavigationOpen(false);
    if (path === "official") {
      window.open("https://aarushiinfotech.in/", "_blank", "noopener,noreferrer");
      return;
    }
    if (path.startsWith("/#")) {
      const targetId = path.slice(2);
      onClose();
      if (window.location.pathname === "/") {
        window.history.pushState(null, "", path);
        window.requestAnimationFrame(() => {
          document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      } else {
        window.location.assign(path);
      }
      return;
    }
    router.push(path);
    onClose();
  }

  function startOver() {
    setMessages([starterMessage]);
    setInput("");
    setShowGuides(true);
    setNavigationOpen(false);
    setNotice("Chat restarted");
    window.setTimeout(() => setNotice(""), 1800);
  }

  const guides = [
    { label: "Explore AI classes", icon: GraduationCap, question: "Show me all AI classes" },
    { label: "Tally Prime help", icon: BookOpen, question: "Tell me about Tally Prime" },
    { label: "Our services", icon: Compass, question: "What services does Aarushi Infotech provide?" },
    { label: "Contact & location", icon: MapPin, question: "How can I contact Aarushi Infotech?" },
  ];

  return (
    <section
      aria-label="ReXo AI assistant"
      className="fixed left-[max(0.75rem,env(safe-area-inset-left))] z-[100] flex w-[calc(100vw-1.5rem)] max-w-[420px] flex-col overflow-hidden rounded-[28px] border border-[#83e6f0] bg-[#e7f8fc] shadow-[0_24px_90px_rgba(0,174,193,0.24)] sm:left-auto sm:right-[max(1.5rem,env(safe-area-inset-right))]"
      style={{ top: "50dvh", translate: "0 -50%", height: "min(760px, calc(100dvh - 1.5rem))", maxHeight: "calc(100dvh - 1.5rem)" }}
    >
      <header className="relative shrink-0 overflow-hidden bg-gradient-to-br from-[#04151f] via-[#062b38] to-[#07424d] px-5 pb-5 pt-5 text-white">
        <div className="absolute -right-10 -top-16 h-44 w-44 rounded-full border border-[#00f0ff]/15" />
        <div className="absolute -right-2 -top-10 h-32 w-32 rounded-full border border-[#00f0ff]/20" />
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-[#00f0ff]/40 bg-[#00d8ee]/10 shadow-[0_0_22px_rgba(0,240,255,0.16)]">
              <Image src="/images/rexo-logo.png" alt="ReXo" width={36} height={36} className="object-contain" />
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#062b38] bg-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
            </div>
            <div>
              <div className="text-[17px] font-bold tracking-tight">ReXo <span className="font-medium text-[#8ffaff]">AI</span></div>
              <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-[#a7dce3]"><span className="h-1.5 w-1.5 rounded-full bg-[#00f0ff] shadow-[0_0_8px_rgba(0,240,255,0.85)]" />Ask anything</div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button type="button" onClick={startOver} className="rounded-xl p-2.5 text-[#a7dce3] transition hover:bg-[#00f0ff]/15 hover:text-[#00f0ff]" aria-label="Start a new chat" title="Start a new chat"><RotateCcw size={17} /></button>
            <button type="button" onClick={onClose} className="rounded-xl p-2.5 text-[#a7dce3] transition hover:bg-[#00f0ff]/15 hover:text-[#00f0ff]" aria-label="Close ReXo"><X size={20} /></button>
          </div>
        </div>
        <div className="relative mt-4 flex items-center justify-between rounded-2xl border border-[#00f0ff]/20 bg-[#03151d]/55 px-3.5 py-2.5 text-[11px] text-[#c9faff]">
          <span className="flex items-center gap-2"><Sparkles size={14} className="text-[#00f0ff]" /> Open-ended AI answers</span>
          <span className="rounded-full border border-[#00f0ff]/20 bg-[#00f0ff]/10 px-2 py-1 font-medium text-[#92faff]">Fast & helpful</span>
        </div>
      </header>

      <main className="min-h-0 flex-1 overflow-y-auto bg-[#e7f8fc] px-4 py-4">
        <div className="space-y-3">
          {messages.map((message) => <ReXoMessage key={message.id} role={message.role} content={message.content} />)}
          {thinking && <div className="mr-auto flex w-fit max-w-[88%] items-center gap-2 rounded-2xl border border-[#00ddeb]/40 bg-[#062a34] px-4 py-3 text-xs font-medium text-[#9cf8ff]"><LoaderCircle size={15} className="animate-spin text-[#00f0ff]" /> ReXo is thinking…</div>}
        </div>

        {showGuides && messages.length === 1 && (
          <div className="mt-5">
            <div className="mb-2.5 flex items-center justify-between px-1">
              <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#14505c]">Quick guides</h2>
              <span className="text-[11px] text-[#57808a]">Tap to get started</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {guides.map(({ label, icon: Icon, question }) => (
                <button key={label} type="button" disabled={thinking} onClick={() => void sendMessage(question)} className="group flex min-h-[72px] items-center gap-2.5 rounded-2xl border border-[#b1eefa] bg-[#f7fdff] p-3 text-left shadow-[0_2px_8px_rgba(2,91,113,0.05)] transition hover:border-[#00cfe3] hover:shadow-[0_7px_20px_rgba(0,183,205,0.13)] disabled:opacity-50">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#a7ebf3] bg-[#dcf8fc] text-[#087c8c] transition group-hover:border-[#00f0ff] group-hover:bg-[#073541] group-hover:text-[#00f0ff]"><Icon size={17} /></span>
                  <span className="text-xs font-semibold leading-4 text-[#153e48]">{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <div ref={endRef} />
      </main>

      <div className="shrink-0 border-t border-[#aeeaf2] bg-[#f2fbfd]">
        <div className="flex items-center justify-between px-4 pb-2 pt-2.5">
          <button type="button" onClick={() => setShowAll((value) => !value)} className="flex items-center gap-1.5 text-xs font-semibold text-[#086d7b] transition hover:text-[#032a33]">
            <MessageSquareText size={14} /> Suggested questions <ChevronRight size={14} className={`transition-transform ${showAll ? "rotate-90" : ""}`} />
          </button>
          <span role="status" className="text-[10px] text-[#54828b]">{notice || (thinking ? "Preparing your answer…" : "Ask a follow-up anytime")}</span>
        </div>
        {showAll && (
          <div className="mx-4 mb-2 max-h-28 space-y-1 overflow-y-auto rounded-xl border border-[#c6eef3] bg-[#e5f7fa] p-1.5">
            {rexoSuggestedMessages.map(({ id, text }) => <button key={id} type="button" disabled={thinking} onClick={() => void sendMessage(text)} className="block w-full rounded-lg px-2.5 py-2 text-left text-xs text-[#28535b] transition hover:bg-[#f7feff] hover:text-[#007887] disabled:opacity-50">{text}</button>)}
          </div>
        )}
        <form onSubmit={handleSubmit} className="px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-1">
          <div className="mb-2 flex items-center justify-between">
            <button type="button" onClick={() => setNavigationOpen((value) => !value)} aria-expanded={navigationOpen} aria-controls="rexo-navigation-options" className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-semibold transition ${navigationOpen ? "border-[#00aebe] bg-[#063943] text-[#7df7ff]" : "border-[#b7eaf0] bg-white text-[#176675] hover:border-[#00aebe]"}`}>
              <Compass size={13} /> Navigate this website <ChevronRight size={13} className={`transition-transform ${navigationOpen ? "rotate-90" : ""}`} />
            </button>
            <span className="text-[10px] text-[#54828b]">Aarushi Infotech only</span>
          </div>
          {navigationOpen && (
            <div id="rexo-navigation-options" role="region" aria-label="Aarushi Infotech navigation preview" className="mb-2 max-h-64 space-y-2 overflow-y-auto rounded-2xl border border-[#b7eaf0] bg-gradient-to-b from-white to-[#e6f8fb] p-2.5 shadow-inner">
              {[
                {
                  title: "Main pages",
                  items: [
                    { label: "Visit Official Website", path: "official", icon: ExternalLink },
                    { label: "Home", path: "/#home", icon: Compass },
                    { label: "Contact", path: "/#contact", icon: MapPin },
                    { label: "About Us", path: "/about", icon: Sparkles },
                    { label: "View QuickBook", path: "/quick-book", icon: MessageSquareText },
                    { label: "Get Started / Join Classes", path: "/start", icon: GraduationCap },
                  ],
                },
                {
                  title: "Homepage sections",
                  items: [
                    { label: "AI Classes section", path: "/#ai-classes", icon: GraduationCap },
                    { label: "Features", path: "/#features", icon: Sparkles },
                    { label: "Our Services & Data Experience", path: "/#data-experience", icon: BookOpen },
                  ],
                },
                {
                  title: "AI class pages",
                  items: [
                    { label: "Class Catalog", path: "/classes", icon: GraduationCap },
                    { label: "AI Fundamentals", path: "/classes/ai-fundamentals", icon: Sparkles },
                    { label: "Data Handling", path: "/classes/data-handling", icon: BookOpen },
                    { label: "Data Analysis", path: "/classes/data-analysis", icon: Compass },
                    { label: "Content Creation", path: "/classes/content-creation", icon: Sparkles },
                    { label: "Responsible AI", path: "/classes/responsible-ai", icon: Compass },
                    { label: "Business Technology", path: "/classes/business-technology", icon: BookOpen },
                  ],
                },
              ].map((group) => (
                <div key={group.title}>
                  <h3 className="px-1 pb-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#56828a]">{group.title}</h3>
                  <div className="grid grid-cols-2 gap-1.5">
                    {group.items.map(({ label, path, icon: Icon }) => (
                      <button key={path} type="button" onClick={() => navigateTo(path)} className="flex min-h-11 items-center gap-2 rounded-xl border border-[#c8edf2] bg-white px-2.5 py-2 text-left shadow-[0_2px_7px_rgba(5,103,121,0.04)] transition hover:-translate-y-0.5 hover:border-[#00b7ca] hover:bg-[#f5fdff] hover:shadow-[0_5px_14px_rgba(5,103,121,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b7ca]">
                        <Icon size={14} className="shrink-0 text-[#008b9b]" />
                        <span className="text-[10px] font-semibold leading-4 text-[#174752]">{label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <p className="rounded-xl border border-dashed border-[#8fd8e3] bg-[#e9faff] px-3 py-2 text-[10px] leading-4 text-[#39737d]">Choose a destination to open it. Only the official Aarushi Infotech website opens outside this site.</p>
            </div>
          )}
          <div className="flex items-center gap-2 rounded-2xl border border-[#7cdae7] bg-[#e7f8fc] p-1.5 pl-3 focus-within:border-[#00cfe3] focus-within:ring-4 focus-within:ring-[#00d9ee]/15">
            <Sparkles size={17} className="shrink-0 text-[#008b9b]" />
            <input value={input} onChange={(event) => setInput(event.target.value)} maxLength={1800} disabled={thinking} placeholder="Ask ReXo anything..." aria-label="Ask ReXo anything" className="min-w-0 flex-1 bg-transparent py-2 text-sm text-[#102f37] outline-none placeholder:text-[#638891] disabled:opacity-60" />
            <button type="submit" disabled={!input.trim() || thinking} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#00d7eb]/50 bg-[#052c36] text-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.18)] transition hover:bg-[#07414d] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] disabled:cursor-not-allowed disabled:border-transparent disabled:bg-[#b9dfe5] disabled:text-[#6f9ca4] disabled:shadow-none" aria-label="Send message"><ArrowUp size={19} strokeWidth={2.5} /></button>
          </div>
          <p className="mt-2 text-center text-[10px] text-[#5b858e]">Gemini may process your message · Avoid sharing sensitive information</p>
        </form>
      </div>
    </section>
  );
}
