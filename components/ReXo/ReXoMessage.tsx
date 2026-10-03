"use client";

import Image from "next/image";

type ReXoMessageProps = {
  role: "user" | "assistant";
  content: string;
};

export default function ReXoMessage({
  role,
  content,
}: ReXoMessageProps) {
  const isUser = role === "user";
  const [heading, ...body] = content.split("\n");
  const hasHeading = !isUser && body.length > 0;

  return (
    <div
      className={`flex w-full ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-lg ${
          isUser
            ? "rounded-br-md bg-emerald-500 text-black"
            : "rounded-bl-md border border-white/10 bg-white/[0.07] text-white"
        }`}
      >
        {!isUser && (
          <div className="mb-1 text-xs font-bold tracking-wide text-emerald-300">
            <span className="mb-1 flex items-center gap-2 text-xs font-bold tracking-wide text-emerald-300">
  <Image
    src="/images/rexo-logo.png"
    alt="ReXo"
    width={20}
    height={20}
    className="object-contain"
  />
  ReXo
</span>
          </div>
        )}

        {hasHeading ? (
          <>
            <div className="mb-1 font-semibold text-emerald-200">
              {heading}
            </div>
            <div className="whitespace-pre-wrap">{body.join("\n").trim()}</div>
          </>
        ) : (
          <div className="whitespace-pre-wrap">{content}</div>
        )}
      </div>
    </div>
  );
}
