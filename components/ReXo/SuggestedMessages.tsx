"use client";

import { ChevronDown, Sparkles } from "lucide-react";
import { useState } from "react";
import { rexoSuggestedMessages } from "@/data/rexoResponses";

type SuggestedMessagesProps = {
  onSelect: (message: string) => void;
  disabled?: boolean;
};

export default function SuggestedMessages({
  onSelect,
  disabled = false,
}: SuggestedMessagesProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-white/10 bg-black/20 p-3">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="rexo-suggested-messages"
        disabled={disabled}
        className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2.5 text-sm text-white transition hover:border-emerald-400/30 hover:bg-white/[0.1] disabled:cursor-wait disabled:opacity-60"
      >
        <span className="flex items-center gap-2">
          <Sparkles size={16} className="text-emerald-300" />
          <span>Questions to get started</span>
        </span>

        <ChevronDown
          size={17}
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          id="rexo-suggested-messages"
          className="mt-2 max-h-32 space-y-2 overflow-y-auto overscroll-contain pr-1 sm:max-h-52"
        >
          <p className="px-1 pb-1 text-xs text-gray-400">
            Choose a question and ReXo will send it for you.
          </p>
          {rexoSuggestedMessages.map((message) => (
            <button
              key={message.id}
              type="button"
              disabled={disabled}
              onClick={() => {
                setOpen(false);
                onSelect(message.text);
              }}
              className="w-full rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2.5 text-left text-xs leading-5 text-gray-200 transition hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-white disabled:cursor-wait disabled:opacity-60"
            >
              {message.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
