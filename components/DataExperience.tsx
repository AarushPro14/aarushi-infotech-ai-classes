"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  Database,
  X,
  Play,
  Sparkles,
} from "lucide-react";

const dataStats = [
  { value: "01", label: "RAW DATA" },
  { value: "02", label: "ORGANIZE" },
  { value: "03", label: "ANALYZE" },
  { value: "04", label: "INSIGHT" },
];

const services = [
  {
    icon: Database,
    title: "DATA HANDLING",
    text: "Organize information into clear, usable structures.",
  },
  {
    icon: BarChart3,
    title: "DATA ANALYSIS",
    text: "Turn numbers and records into meaningful patterns.",
  },
  {
    icon: BrainCircuit,
    title: "AI-ASSISTED INSIGHTS",
    text: "Use modern AI workflows to understand information faster.",
  },
];

export default function DataExperience() {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!open) {
      setPlaying(false);
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      {/* =========================================================
          DATA EXPERIENCE LAUNCHER
      ========================================================= */}

      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group relative w-full max-w-6xl overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[#030712] text-left shadow-[0_0_100px_rgba(34,211,238,0.08)]"
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />

        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.18) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        <div className="relative z-10 grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.3fr_0.7fr] lg:p-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)]" />
              </span>

              <span className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
                DATA INTELLIGENCE SYSTEM
              </span>
            </div>

            <h2 className="mt-7 text-4xl font-black leading-none tracking-tight text-white sm:text-6xl">
              SEE DATA
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                COME ALIVE.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Experience the journey from raw information to meaningful
              insight through our cinematic data experience.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-5 py-3 text-sm font-black text-cyan-300 transition group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
              <Play className="h-4 w-4 fill-current" />
              WATCH EXPERIENCE
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 self-end">
            {dataStats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl"
              >
                <div className="font-mono text-2xl font-black text-cyan-300">
                  {item.value}
                </div>

                <div className="mt-2 text-[9px] font-bold tracking-[0.18em] text-slate-500">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.button>

      {/* =========================================================
          FULL-SCREEN DATA EXPERIENCE
      ========================================================= */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] overflow-y-auto bg-[#01030a]"
          >
            {/* =================================================
                CINEMATIC BACKGROUND
            ================================================= */}

            <div className="pointer-events-none fixed inset-0">
              <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.04] blur-[140px]" />

              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(34,211,238,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.12) 1px, transparent 1px)",
                  backgroundSize: "70px 70px",
                  maskImage:
                    "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
                }}
              />

              <motion.div
                animate={{ x: ["-20%", "120%"] }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-1/3 h-px w-1/3 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent blur-sm"
              />
            </div>

            {/* =================================================
                TOP BAR
            ================================================= */}

            <div className="sticky top-0 z-50 border-b border-white/5 bg-[#01030a]/80 backdrop-blur-2xl">
              <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
                <div className="flex items-center gap-3">
                  <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-cyan-400/20">
                    <Image
                      src="/images/IMG-logo.jpeg"
                      alt="Aarushi Infotech"
                      fill
                      sizes="36px"
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <div className="text-xs font-black tracking-wider text-white">
                      AARUSHI INFOTECH
                    </div>

                    <div className="font-mono text-[8px] tracking-[0.25em] text-cyan-400">
                      DATA INTELLIGENCE
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close data experience"
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-slate-400 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* =================================================
                EXPERIENCE CONTENT
            ================================================= */}

            <main className="relative mx-auto max-w-7xl px-5 pb-24 pt-16 sm:px-8 sm:pt-24">
              {/* HERO */}
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 font-mono text-[9px] tracking-[0.3em] text-cyan-400">
                  <Sparkles className="h-3.5 w-3.5" />
                  VISUAL DATA EXPERIENCE
                </div>

                <h1 className="mt-7 text-5xl font-black leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
                  DATA
                  <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                    IS EVERYWHERE.
                  </span>
                </h1>

                <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                  The real power isn't collecting information.
                  <br />
                  It's understanding what the information means.
                </p>
              </motion.div>

              {/* =================================================
                  CINEMATIC VIDEO
              ================================================= */}

              <motion.section
                initial={{ opacity: 0, scale: 0.96, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.9 }}
                className="relative mt-16"
              >
                <div className="absolute -inset-8 rounded-[3rem] bg-cyan-400/[0.05] blur-3xl" />

                <div className="relative rounded-[2rem] border border-cyan-400/20 bg-[#020617] p-2 shadow-[0_0_120px_rgba(34,211,238,0.12)] sm:rounded-[2.5rem] sm:p-4">
                  {/* Monitor header */}
                  <div className="flex items-center justify-between px-3 pb-3 sm:px-5 sm:pb-4">
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />

                      <span className="font-mono text-[8px] tracking-[0.25em] text-slate-600 sm:text-[10px]">
                        AI DATA VISUALIZATION SYSTEM
                      </span>
                    </div>

                    <span className="font-mono text-[8px] tracking-[0.2em] text-cyan-400 sm:text-[10px]">
                      30 SEC EXPERIENCE
                    </span>
                  </div>

                  {/* SCREEN */}
                  <div className="group relative overflow-hidden rounded-[1.5rem] border border-cyan-400/15 bg-black">
                    {/* Glow */}
                    <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.45)_100%)]" />

                    {/* Scanlines */}
                    <div
                      className="pointer-events-none absolute inset-0 z-20 opacity-[0.07]"
                      style={{
                        backgroundImage:
                          "linear-gradient(to bottom, transparent 50%, rgba(34,211,238,0.7) 50%)",
                        backgroundSize: "100% 4px",
                      }}
                    />

                    {/* Corner labels */}
                    <div className="pointer-events-none absolute left-4 top-4 z-30 hidden font-mono text-[8px] tracking-[0.2em] text-cyan-400/70 sm:block">
                      AI / DATA / INSIGHT
                    </div>

                    <div className="pointer-events-none absolute bottom-4 right-4 z-30 hidden font-mono text-[8px] tracking-[0.2em] text-cyan-400/70 sm:block">
                      AARUSHI INFOTECH
                    </div>

                    <video
                      className="aspect-video w-full object-cover"
                      src="/videos/data-experience.mp4"
                      controls
                      playsInline
                      preload="metadata"
                      onPlay={() => setPlaying(true)}
                      onPause={() => setPlaying(false)}
                    />
                  </div>

                  {/* Status */}
                  <div className="flex items-center justify-center gap-3 px-3 pt-4">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        playing
                          ? "animate-pulse bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]"
                          : "bg-slate-700"
                      }`}
                    />

                    <span className="font-mono text-[8px] tracking-[0.25em] text-slate-600">
                      {playing ? "PLAYBACK ACTIVE" : "SYSTEM READY"}
                    </span>
                  </div>
                </div>

                {/* TV stand */}
                <div className="mx-auto h-8 w-32 rounded-b-xl border-x border-b border-slate-700 bg-[#020617]" />

                <div className="mx-auto h-2 w-60 rounded-full bg-slate-950 shadow-[0_15px_40px_rgba(0,0,0,0.8)]" />
              </motion.section>

              {/* =================================================
                  DATA PIPELINE
              ================================================= */}

              <section className="mt-28">
                <div className="grid gap-4 sm:grid-cols-4">
                  {dataStats.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        delay: index * 0.08,
                        duration: 0.6,
                      }}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl"
                    >
                      <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-400/5 blur-2xl transition group-hover:bg-cyan-400/10" />

                      <div className="relative">
                        <div className="font-mono text-3xl font-black text-cyan-300">
                          {item.value}
                        </div>

                        <div className="mt-3 text-[10px] font-black tracking-[0.2em] text-white">
                          {item.label}
                        </div>

                        <div className="mt-5 h-px bg-gradient-to-r from-cyan-400/40 to-transparent" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* =================================================
                  SERVICES
              ================================================= */}

              <section className="mt-28">
                <div className="mb-10">
                  <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
                    WHAT HAPPENS NEXT
                  </p>

                  <h2 className="mt-4 text-4xl font-black sm:text-6xl">
                    FROM DATA
                    <span className="block text-slate-500">
                      TO DECISION.
                    </span>
                  </h2>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                  {services.map((service, index) => {
                    const Icon = service.icon;

                    return (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{
                          delay: index * 0.1,
                          duration: 0.7,
                        }}
                        whileHover={{ y: -6 }}
                        className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-7 backdrop-blur-xl"
                      >
                        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-400/5 blur-3xl transition group-hover:bg-cyan-400/10" />

                        <div className="relative">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-300">
                            <Icon className="h-5 w-5" />
                          </div>

                          <h3 className="mt-7 text-sm font-black tracking-wider text-white">
                            {service.title}
                          </h3>

                          <p className="mt-4 text-sm leading-7 text-slate-500">
                            {service.text}
                          </p>

                          <div className="mt-7 flex items-center gap-2 text-[9px] font-bold tracking-[0.2em] text-cyan-400">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            INTELLIGENT WORKFLOW
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </section>

              {/* =================================================
                  FINAL BRAND STATEMENT
              ================================================= */}

              <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9 }}
                className="relative mt-32 overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.08] via-blue-500/[0.04] to-transparent p-8 text-center sm:p-14"
              >
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

                <div className="relative">
                  <div className="mx-auto h-16 w-16 overflow-hidden rounded-2xl border border-cyan-400/20 bg-black/30 p-2 shadow-[0_0_40px_rgba(34,211,238,0.12)]">
                    <Image
                      src="/images/IMG-logo.jpeg"
                      alt="Aarushi Infotech Logo"
                      width={64}
                      height={64}
                      className="h-full w-full rounded-xl object-contain"
                    />
                  </div>

                  <p className="mt-7 font-mono text-[9px] tracking-[0.35em] text-cyan-400">
                    AARUSHI INFOTECH
                  </p>

                  <h2 className="mt-4 text-4xl font-black sm:text-6xl">
                    DATA
                    <span className="text-cyan-300"> → </span>
                    INFORMATION
                    <span className="text-cyan-300"> → </span>
                    INSIGHT
                  </h2>

                  <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500">
                    Learn how to understand, organize, analyze and use
                    information with confidence.
                  </p>

                  <div className="mt-9 flex flex-wrap justify-center gap-3">
                    {[
                      "LEARN",
                      "CREATE",
                      "ANALYZE",
                      "GROW",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 font-mono text-[9px] tracking-[0.2em] text-slate-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.section>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}