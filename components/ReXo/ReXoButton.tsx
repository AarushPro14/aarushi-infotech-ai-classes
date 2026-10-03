"use client";

import { Bot, X } from "lucide-react";
import { useState } from "react";
import ReXoChat from "./ReXoChat";
import Image from "next/image";

export default function ReXoButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <ReXoChat onClose={() => setOpen(false)} />}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close ReXo" : "Open ReXo"}
        className="fixed bottom-5 right-5 z-[101] flex h-16 w-16 items-center justify-center rounded-full border border-emerald-300/40 bg-[#07110d]/90 text-emerald-300 shadow-[0_0_35px_rgba(16,185,129,0.3)] backdrop-blur-xl transition duration-300 hover:scale-110 hover:shadow-[0_0_50px_rgba(16,185,129,0.45)]"
      >
       {open ? (
  <X size={26} />
) : (
  <Image
    src="/images/rexo-logo.png"
    alt="ReXo AI"
    width={42}
    height={42}
    priority
    className="object-contain"
  />
)}

        {!open && (
          <span className="absolute inset-0 -z-10 animate-ping rounded-full border border-emerald-400/20" />
        )}
      </button>
    </>
  );
}