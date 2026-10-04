"use client";

import Image from "next/image";

type ReXoMessageProps = {
  role: "user" | "assistant";
  content: string;
};

function formatLine(line: string, index: number) {
  const value = line.trim();
  if (!value) return <div key={index} className="h-1" />;

  const heading = value.match(/^#{1,3}\s+(.+)$/);
  if (heading) return <h3 key={index} className="pt-1 font-bold text-[#00f0ff]">{heading[1]}</h3>;

  const bullet = value.match(/^[-*]\s+(.+)$/);
  const numbered = value.match(/^(\d+)[.)]\s+(.+)$/);
  const text = bullet?.[1] ?? numbered?.[2] ?? value;
  const formatted = text.split(/(\*\*[^*]+\*\*)/g).map((part, partIndex) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={partIndex} className="font-semibold">{part.slice(2, -2)}</strong>
      : part,
  );

  if (bullet || numbered) {
    return (
      <div key={index} className="flex gap-2">
        <span className="shrink-0 font-bold text-[#00ddeb]">{numbered ? `${numbered[1]}.` : "•"}</span>
        <span>{formatted}</span>
      </div>
    );
  }
  return <p key={index}>{formatted}</p>;
}

export default function ReXoMessage({ role, content }: ReXoMessageProps) {
  const isUser = role === "user";

  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-lg ${
          isUser
            ? "rounded-br-md border border-[#88ddea] bg-[#c9f0fa] text-[#103740]"
            : "rounded-bl-md border border-[#00ddeb]/45 bg-[#062a34] text-[#d9fbff] shadow-[0_5px_20px_rgba(0,66,80,0.2)]"
        }`}
      >
        {!isUser && (
          <div className="mb-1 text-xs font-bold tracking-wide text-[#00e7f5]">
            <span className="mb-1 flex items-center gap-2">
              <Image src="/images/rexo-logo.png" alt="ReXo" width={20} height={20} className="rounded-full object-cover" />
              ReXo
            </span>
          </div>
        )}
        {isUser
          ? <div className="whitespace-pre-wrap">{content}</div>
          : <div className="space-y-1.5">{content.split("\n").map(formatLine)}</div>}
      </div>
    </div>
  );
}
