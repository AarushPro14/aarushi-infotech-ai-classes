"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Brain,
  BriefcaseBusiness,
  Database,
  PenTool,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const modules = [
  {
    number: "01",
    title: "AI Fundamentals",
    description:
      "Understand the foundations of Artificial Intelligence and discover how modern AI systems work.",
    tags: ["AI BASICS", "MACHINE LEARNING", "GENERATIVE AI"],
    href: "/classes/ai-fundamentals",
    icon: Brain,
    accent: "cyan",
  },
  {
    number: "02",
    title: "Data Handling",
    description:
      "Learn how digital data is collected, organized, stored, managed, and handled responsibly.",
    tags: ["DATA", "ORGANIZATION", "SECURITY"],
    href: "/classes/data-handling",
    icon: Database,
    accent: "blue",
  },
  {
    number: "03",
    title: "Data Analysis",
    description:
      "Turn information into useful understanding by discovering patterns, trends, and insights.",
    tags: ["ANALYSIS", "CHARTS", "INSIGHTS"],
    href: "/classes/data-analysis",
    icon: BarChart3,
    accent: "violet",
  },
  {
    number: "04",
    title: "Content Creation",
    description:
      "Explore how AI can support writing, visual concepts, presentations, videos, and creative workflows.",
    tags: ["CREATIVE AI", "WRITING", "MEDIA"],
    href: "/classes/content-creation",
    icon: PenTool,
    accent: "pink",
  },
  {
    number: "05",
    title: "Responsible AI",
    description:
      "Learn about privacy, fairness, human judgment, transparency, and responsible AI usage.",
    tags: ["ETHICS", "PRIVACY", "RESPONSIBILITY"],
    href: "/classes/responsible-ai",
    icon: ShieldCheck,
    accent: "emerald",
  },
  {
    number: "06",
    title: "Business Technology",
    description:
      "Discover how AI, data, productivity tools, and digital technology connect with modern business.",
    tags: ["BUSINESS", "PRODUCTIVITY", "TECHNOLOGY"],
    href: "/classes/business-technology",
    icon: BriefcaseBusiness,
    accent: "amber",
  },
];

const accentStyles = {
  cyan: {
    text: "text-cyan-300",
    border: "border-cyan-400/20",
    hoverBorder: "hover:border-cyan-400/50",
    bg: "bg-cyan-400/10",
    glow: "bg-cyan-400/20",
    button: "bg-cyan-400 hover:bg-cyan-300",
  },
  blue: {
    text: "text-blue-300",
    border: "border-blue-400/20",
    hoverBorder: "hover:border-blue-400/50",
    bg: "bg-blue-400/10",
    glow: "bg-blue-400/20",
    button: "bg-blue-400 hover:bg-blue-300",
  },
  violet: {
    text: "text-violet-300",
    border: "border-violet-400/20",
    hoverBorder: "hover:border-violet-400/50",
    bg: "bg-violet-400/10",
    glow: "bg-violet-400/20",
    button: "bg-violet-400 hover:bg-violet-300",
  },
  pink: {
    text: "text-pink-300",
    border: "border-pink-400/20",
    hoverBorder: "hover:border-pink-400/50",
    bg: "bg-pink-400/10",
    glow: "bg-pink-400/20",
    button: "bg-pink-400 hover:bg-pink-300",
  },
  emerald: {
    text: "text-emerald-300",
    border: "border-emerald-400/20",
    hoverBorder: "hover:border-emerald-400/50",
    bg: "bg-emerald-400/10",
    glow: "bg-emerald-400/20",
    button: "bg-emerald-400 hover:bg-emerald-300",
  },
  amber: {
    text: "text-amber-300",
    border: "border-amber-400/20",
    hoverBorder: "hover:border-amber-400/50",
    bg: "bg-amber-400/10",
    glow: "bg-amber-400/20",
    button: "bg-amber-400 hover:bg-amber-300",
  },
} as const;

export default function ClassesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      {/* =========================================================
          CINEMATIC BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[20%] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]"
        />

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-15%] top-[30%] h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]"
        />

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[5%] right-[-10%] h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]"
        />

        <div
          className="absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.25) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          }}
        />

        <motion.div
          animate={{ x: ["-30%", "130%"] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[25%] h-px w-[30%] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent blur-sm"
        />

        <motion.div
          animate={{ x: ["130%", "-30%"] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[72%] h-px w-[25%] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent blur-sm"
        />

        {[...Array(22)].map((_, index) => (
          <motion.span
            key={index}
            animate={{
              opacity: [0, 0.8, 0],
              y: [20, -100],
            }}
            transition={{
              duration: 4 + (index % 4),
              repeat: Infinity,
              delay: index * 0.3,
              ease: "easeOut",
            }}
            className="absolute h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
            style={{
              left: `${4 + ((index * 19) % 92)}%`,
              top: `${25 + ((index * 17) % 65)}%`,
            }}
          />
        ))}
      </div>

      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <nav className="relative z-20 border-b border-white/5 bg-slate-950/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <Link
            href="/"
            className="group flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-cyan-300"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back Home
          </Link>

          <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.3em] text-slate-600">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
            AARUSHI INFOTECH
          </div>
        </div>
      </nav>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative z-10 px-5 pb-16 pt-24 sm:px-8 sm:pt-32">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              y: -20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2.5 text-[10px] font-bold tracking-[0.3em] text-cyan-300 backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4" />
            AARUSHI INFOTECH • AI CLASSES
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 35,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              delay: 0.2,
              duration: 1,
            }}
            className="text-5xl font-black leading-[0.92] tracking-[-0.05em] sm:text-7xl md:text-8xl"
          >
            BUILD YOUR
            <span className="relative block">
              <span className="absolute inset-0 bg-cyan-400/10 blur-3xl" />

              <span className="relative bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                AI KNOWLEDGE
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
              duration: 0.8,
            }}
            className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg"
          >
            Explore practical learning modules designed to help you
            understand AI, work with data, create digital content,
            and connect technology with the real world.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.9,
              duration: 0.7,
            }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <span className="rounded-full border border-white/5 bg-white/[0.025] px-4 py-2 font-mono text-[9px] tracking-[0.2em] text-slate-600">
              06 MODULES
            </span>

            <span className="text-cyan-400/40">•</span>

            <span className="rounded-full border border-white/5 bg-white/[0.025] px-4 py-2 font-mono text-[9px] tracking-[0.2em] text-slate-600">
              PRACTICAL LEARNING
            </span>

            <span className="text-cyan-400/40">•</span>

            <span className="rounded-full border border-white/5 bg-white/[0.025] px-4 py-2 font-mono text-[9px] tracking-[0.2em] text-slate-600">
              AI • DATA • BUSINESS
            </span>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          MODULE GRID
      ========================================================= */}

      <section className="relative z-10 px-5 pb-28 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {modules.map((module, index) => {
              const Icon = module.icon;
              const style = accentStyles[module.accent as keyof typeof accentStyles];

              return (
                <motion.article
                  key={module.href}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                  className={`group relative overflow-hidden rounded-3xl border ${style.border} ${style.hoverBorder} bg-white/[0.025] p-6 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.045]`}
                >
                  {/* Card glow */}

                  <div
                    className={`pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full ${style.glow} opacity-0 blur-3xl transition duration-500 group-hover:opacity-100`}
                  />

                  {/* Top row */}

                  <div className="relative flex items-start justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${style.bg} ${style.text}`}
                    >
                      <Icon
                        className="h-7 w-7"
                        strokeWidth={1.5}
                      />
                    </div>

                    <span
                      className={`font-mono text-4xl font-black ${style.text} opacity-10`}
                    >
                      {module.number}
                    </span>
                  </div>

                  {/* Title */}

                  <div className="relative mt-7">
                    <div
                      className={`font-mono text-[9px] font-bold tracking-[0.3em] ${style.text}`}
                    >
                      MODULE {module.number}
                    </div>

                    <h2 className="mt-2 text-2xl font-black tracking-tight text-white">
                      {module.title}
                    </h2>

                    <p className="mt-4 min-h-[96px] text-sm leading-6 text-slate-500">
                      {module.description}
                    </p>
                  </div>

                  {/* Tags */}

                  <div className="relative mt-5 flex min-h-[58px] flex-wrap content-start gap-2">
                    {module.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/5 bg-white/[0.025] px-3 py-1.5 font-mono text-[8px] font-bold tracking-[0.12em] text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* REAL WORKING EXPLORE BUTTON */}

                  <div className="relative mt-7 border-t border-white/5 pt-5">
                    <Link
                      href={module.href}
                      className={`group/button flex w-full items-center justify-center gap-2 rounded-xl ${style.button} px-5 py-3.5 text-xs font-black tracking-[0.08em] text-slate-950 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]`}
                    >
                      <Zap className="h-4 w-4" />

                      EXPLORE MODULE

                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================= */}

      <section className="relative z-10 px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/15 bg-cyan-400/[0.035] p-8 text-center backdrop-blur-2xl sm:p-12">
            <div className="absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative">
              <Sparkles className="mx-auto h-7 w-7 text-cyan-300" />

              <h2 className="mt-5 text-3xl font-black sm:text-5xl">
                YOUR AI JOURNEY STARTS HERE.
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500">
                Choose a module, explore the concepts, and keep building
                practical knowledge one step at a time.
              </p>

              <Link
                href="/start"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 text-sm font-black text-slate-950 transition hover:scale-105 hover:bg-cyan-300"
              >
                <Zap className="h-4 w-4" />
                GET STARTED
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
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
          <div className="text-xs font-bold text-slate-500">
            Aarushi Infotech
          </div>

          <div className="font-mono text-[8px] tracking-[0.25em] text-slate-700">
            LEARN • CREATE • ANALYZE • SECURE • GROW
          </div>
        </div>
      </footer>
    </main>
  );
}