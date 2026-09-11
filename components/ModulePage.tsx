"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from "lucide-react";

type ModulePageProps = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  topics: string[];
  color: "cyan" | "blue" | "violet" | "pink" | "emerald" | "amber";
};

const colorMap = {
  cyan: {
    text: "text-cyan-300",
    border: "border-cyan-400/20",
    bg: "bg-cyan-400/10",
    glow: "bg-cyan-400/20",
    button: "bg-cyan-400 hover:bg-cyan-300",
  },
  blue: {
    text: "text-blue-300",
    border: "border-blue-400/20",
    bg: "bg-blue-400/10",
    glow: "bg-blue-400/20",
    button: "bg-blue-400 hover:bg-blue-300",
  },
  violet: {
    text: "text-violet-300",
    border: "border-violet-400/20",
    bg: "bg-violet-400/10",
    glow: "bg-violet-400/20",
    button: "bg-violet-400 hover:bg-violet-300",
  },
  pink: {
    text: "text-pink-300",
    border: "border-pink-400/20",
    bg: "bg-pink-400/10",
    glow: "bg-pink-400/20",
    button: "bg-pink-400 hover:bg-pink-300",
  },
  emerald: {
    text: "text-emerald-300",
    border: "border-emerald-400/20",
    bg: "bg-emerald-400/10",
    glow: "bg-emerald-400/20",
    button: "bg-emerald-400 hover:bg-emerald-300",
  },
  amber: {
    text: "text-amber-300",
    border: "border-amber-400/20",
    bg: "bg-amber-400/10",
    glow: "bg-amber-400/20",
    button: "bg-amber-400 hover:bg-amber-300",
  },
};

export default function ModulePage({
  number,
  title,
  subtitle,
  description,
  icon,
  topics,
  color,
}: ModulePageProps) {
  const theme = colorMap[color];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className={`absolute left-1/2 top-[20%] h-[500px] w-[500px] -translate-x-1/2 rounded-full ${theme.glow} opacity-20 blur-[150px]`}
        />

        <div className="absolute inset-0 opacity-[0.08]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="absolute left-[8%] top-[30%] h-1 w-1 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,1)]" />
        <div className="absolute right-[15%] top-[45%] h-1 w-1 animate-pulse rounded-full bg-blue-300 shadow-[0_0_15px_rgba(59,130,246,1)]" />
        <div className="absolute bottom-[20%] left-[25%] h-1 w-1 animate-pulse rounded-full bg-violet-300 shadow-[0_0_15px_rgba(139,92,246,1)]" />
      </div>

      {/* =========================================================
          TOP NAVIGATION
      ========================================================= */}

      <nav className="relative z-20 border-b border-white/5 bg-slate-950/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <Link
            href="/classes"
            className="group flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to AI Classes
          </Link>

          <div className="flex items-center gap-2 text-[9px] font-mono tracking-[0.25em] text-slate-600">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
            AARUSHI INFOTECH
          </div>
        </div>
      </nav>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative z-10 px-5 pb-20 pt-20 sm:px-8 sm:pt-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div
                className={`mb-6 inline-flex items-center gap-2 rounded-full border ${theme.border} ${theme.bg} px-4 py-2 text-[10px] font-bold tracking-[0.25em] ${theme.text}`}
              >
                <Sparkles className="h-3.5 w-3.5" />
                MODULE {number}
              </div>

              <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-7xl">
                {title}
              </h1>

              <p className={`mt-5 text-xl font-semibold ${theme.text}`}>
                {subtitle}
              </p>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                {description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#topics"
                  className={`group inline-flex items-center gap-2 rounded-xl ${theme.button} px-6 py-3 text-sm font-black text-slate-950 transition hover:scale-105`}
                >
                  START LEARNING
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <Link
                  href="/classes"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-bold text-white transition hover:border-white/20 hover:bg-white/[0.08]"
                >
                  ALL MODULES
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1 }}
              className="relative mx-auto w-full max-w-sm"
            >
              <div
                className={`absolute -inset-10 rounded-full ${theme.glow} blur-3xl`}
              />

              <div
                className={`relative aspect-square rounded-[2rem] border ${theme.border} bg-white/[0.035] p-8 shadow-2xl backdrop-blur-2xl`}
              >
                <div
                  className={`flex h-full flex-col items-center justify-center rounded-[1.5rem] border ${theme.border} ${theme.bg}`}
                >
                  <div className={`${theme.text}`}>{icon}</div>

                  <div
                    className={`mt-6 text-7xl font-black ${theme.text} opacity-20`}
                  >
                    {number}
                  </div>

                  <div className="mt-2 text-center text-xs font-bold tracking-[0.3em] text-slate-500">
                    AI LEARNING MODULE
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TOPICS
      ========================================================= */}

      <section id="topics" className="relative z-10 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-3 flex items-center gap-3">
              <BookOpen className={`h-5 w-5 ${theme.text}`} />

              <span
                className={`text-xs font-bold tracking-[0.25em] ${theme.text}`}
              >
                LEARNING PATH
              </span>
            </div>

            <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
              What You&apos;ll Learn
            </h2>

            <p className="mt-4 max-w-2xl text-slate-500">
              Explore the core concepts inside this learning module.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {topics.map((topic, index) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={`group rounded-2xl border ${theme.border} bg-white/[0.025] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05]`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${theme.bg} ${theme.text}`}
                  >
                    <CheckCircle2 className="h-5 w-5" />
                  </div>

                  <div className="flex-1">
                    <div className="mb-1 font-mono text-[9px] tracking-[0.2em] text-slate-600">
                      TOPIC {String(index + 1).padStart(2, "0")}
                    </div>

                    <h3 className="font-bold text-slate-200">
                      {topic}
                    </h3>
                  </div>

                  <ChevronRight
                    className={`h-5 w-5 ${theme.text} opacity-30 transition group-hover:translate-x-1 group-hover:opacity-100`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================= */}

      <section className="relative z-10 px-5 pb-24 pt-10 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div
            className={`relative overflow-hidden rounded-3xl border ${theme.border} ${theme.bg} p-8 text-center sm:p-12`}
          >
            <div
              className={`absolute left-1/2 top-0 h-32 w-64 -translate-x-1/2 ${theme.glow} blur-3xl`}
            />

            <div className="relative">
              <p className={`text-xs font-bold tracking-[0.3em] ${theme.text}`}>
                READY TO EXPLORE?
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-5xl">
                Continue Your AI Journey
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400">
                Explore another module and keep building your knowledge of
                modern AI and technology.
              </p>

              <Link
                href="/classes"
                className={`mt-8 inline-flex items-center gap-2 rounded-xl ${theme.button} px-7 py-3.5 text-sm font-black text-slate-950 transition hover:scale-105`}
              >
                EXPLORE ALL CLASSES
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="relative z-10 border-t border-white/5 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <span className="text-xs font-bold text-slate-500">
            Aarushi Infotech
          </span>

          <span className="font-mono text-[9px] tracking-[0.2em] text-slate-700">
            AI CLASSES • LEARN • CREATE • GROW
          </span>
        </div>
      </footer>
    </main>
  );
}