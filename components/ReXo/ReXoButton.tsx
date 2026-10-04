"use client";

import { useState } from "react";
import ReXoChat from "./ReXoChat";
import Image from "next/image";

export default function ReXoButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open ? (
        <ReXoChat onClose={() => setOpen(false)} />
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open ReXo"
          className="fixed bottom-5 right-5 z-[101] flex h-16 w-16 items-center justify-center rounded-full border border-[#00f0ff]/70 bg-gradient-to-br from-[#07333e] to-[#041a22] text-[#00f0ff] shadow-[0_0_28px_rgba(0,225,245,0.36)] backdrop-blur-xl transition duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(0,240,255,0.55)]"
        >
          <Image
            src="/images/rexo-logo.png"
            alt="ReXo AI"
            width={48}
            height={48}
            priority
            className="rounded-full object-cover"
          />
          <span className="absolute inset-0 -z-10 animate-ping rounded-full border border-[#00f0ff]/35" />
        </button>
      )}
    </>
  );
}
