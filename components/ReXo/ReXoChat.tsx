"use client";

import { FormEvent, useState } from "react";
import { Loader2, Send, Sparkles, X } from "lucide-react";
import { useRouter } from "next/navigation";
import ReXoMessage from "./ReXoMessage";
import SuggestedMessages from "./SuggestedMessages";
import Image from "next/image";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const internalDestinations: Record<string, string> = {
  home: "/",
  classes: "/classes",
  "ai-fundamentals": "/classes/ai-fundamentals",
  "data-handling": "/classes/data-handling",
  "data-analysis": "/classes/data-analysis",
  "content-creation": "/classes/content-creation",
  "responsible-ai": "/classes/responsible-ai",
  "business-technology": "/classes/business-technology",
  "quick-book": "/quick-book",
  about: "/about",
  start: "/start",
  contact: "/#contact",
};

const locationUrl =
  "https://www.google.com/maps/search/?api=1&query=Skylon+Building+Vapi+Char+Rasta+Near+HDFC+Bank+396195";

type ReXoChatProps = {
  onClose: () => void;
};

export default function ReXoChat({ onClose }: ReXoChatProps) {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Welcome to Aarushi Infotech! I'm ReXo, your AI assistant. I'm happy to help you explore our AI classes, services, Tally Prime solutions, and more. What would you like to know?",
    },
  ]);

  const [thinking, setThinking] = useState(false);
  const [thinkingText, setThinkingText] = useState("");

  async function sendMessage(messageText?: string) {
    const message = (messageText ?? input).trim();

    if (!message || thinking) return;

    setInput("");

    const userMessage: Message = {
      id: `${Date.now()}-user`,
      role: "user",
      content: message,
    };

    setMessages((previous) => [...previous, userMessage]);
    setThinking(true);
    setThinkingText("Finding a helpful answer...");

    try {
      const response = await fetch("/api/rexo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          history: messages.slice(1).slice(-12).map(({ role, content }) => ({
            role,
            content,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "ReXo error");
      }

      const assistantMessage: Message = {
        id: `${Date.now()}-assistant`,
        role: "assistant",
        content:
          typeof data.answer === "string" && data.answer.trim()
            ? data.answer.trim()
            : "I'm sorry, I couldn't prepare a clear answer just now. Please try again or use the contact options on this website.",
      };

      setMessages((previous) => [...previous, assistantMessage]);

      if (data.destination === "location") {
        window.location.assign(locationUrl);
        return;
      }

      if (typeof data.destination === "string" && internalDestinations[data.destination]) {
        const destination = internalDestinations[data.destination];
        onClose();
        router.push(destination);
      }
    } catch (error) {
      setMessages((previous) => [
        ...previous,
        {
          id: `${Date.now()}-error`,
          role: "assistant",
          content: error instanceof Error && error.message
            ? error.message
            : "ReXo couldn't process that request right now. Please try again or use the contact options on this website.",
        },
      ]);
    } finally {
      setThinking(false);
      setThinkingText("");
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage();
  }

  return (
    <div
      className="fixed left-[max(1rem,env(safe-area-inset-left))] z-[100] flex w-[calc(100vw-2rem)] max-w-[420px] flex-col overflow-hidden rounded-3xl border border-emerald-400/20 bg-[#050807]/95 shadow-[0_0_60px_rgba(16,185,129,0.18)] backdrop-blur-2xl sm:left-auto sm:right-[max(1.5rem,env(safe-area-inset-right))]"
      style={{
        top: "50dvh",
        translate: "0 -50%",
        height: "min(760px, calc(100dvh - 2rem))",
        maxHeight: "calc(100dvh - 2rem)",
      }}
    >
      {/* HEADER */}
      <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10">
            <Image
  src="/images/rexo-logo.png"
  alt="ReXo"
  width={40}
  height={40}
  className="object-contain"
/>

            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#050807] bg-emerald-400" />
          </div>

          <div>
            <div className="font-bold text-white">ReXo AI Assistant</div>
            <div className="flex items-center gap-1 text-[11px] text-emerald-300">
              <span>●</span>
              ReXo Online
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="rounded-xl p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
          aria-label="Close ReXo"
        >
          <X size={20} />
        </button>
      </div>

      {/* MESSAGES */}
      <div className="min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain p-4">
        {messages.map((message) => (
          <ReXoMessage
            key={message.id}
            role={message.role}
            content={message.content}
          />
        ))}

        {thinking && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-md border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-3">
              <div className="mb-1 flex items-center gap-2 text-xs font-bold text-emerald-300">
                <Loader2 size={14} className="animate-spin" />
                ReXo
              </div>

              <div className="text-sm text-gray-200">
                {thinkingText}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* SUGGESTIONS */}
      <SuggestedMessages
        disabled={thinking}
        onSelect={(message) => void sendMessage(message)}
      />

      {/* INPUT */}
      <form
        onSubmit={handleSubmit}
        className="shrink-0 border-t border-white/10 p-3"
      >
        <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] p-2 focus-within:border-emerald-400/40">
          <Sparkles
            size={18}
            className="ml-2 shrink-0 text-emerald-300"
          />

          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            disabled={thinking}
            placeholder="Ask me anything about Aarushi Infotech AI Classes..."
            className="min-w-0 flex-1 bg-transparent px-1 py-2 text-sm text-white outline-none placeholder:text-gray-500 disabled:opacity-50"
          />

          <button
            type="submit"
            disabled={!input.trim() || thinking}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400 text-black transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Send message"
          >
            <Send size={17} />
          </button>
        </div>
      </form>
    </div>
  );
}
