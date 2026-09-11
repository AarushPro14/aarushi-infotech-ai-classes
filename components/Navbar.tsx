"use client";

import Image from "next/image";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "AI Classes", href: "#ai-classes" },
  { label: "Features", href: "#features" },
  { label: "Tally", href: "#tally" },
  { label: "Security", href: "#security" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 shadow-[0_0_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-cyan-400/20">
              <Image
                src="/images/IMG-logo.jpeg"
                alt="Aarushi Infotech"
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>

            <div className="hidden sm:block">
              <div className="text-sm font-black tracking-wide text-white">
                AARUSHI INFOTECH
              </div>
              <div className="text-[10px] font-semibold tracking-[0.25em] text-cyan-400">
                AI CLASSES
              </div>
            </div>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-cyan-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2.5 text-sm font-bold text-cyan-300 transition hover:bg-cyan-400/20 lg:flex"
          >
            <Sparkles className="h-4 w-4" />
            JOIN CLASSES
          </a>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {open && (
          <div className="mt-3 border-t border-white/10 pt-3 lg:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/5 hover:text-cyan-300"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-cyan-400 px-4 py-3 text-center text-sm font-black text-slate-950"
              >
                JOIN CLASSES
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}