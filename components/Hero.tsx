"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020617] px-5 py-28 text-white sm:px-6"
    >
      {/* =========================================================
          CINEMATIC BACKGROUND SYSTEM
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main cyan atmosphere */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.35, 0.5, 0.35],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[38%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px] sm:h-[700px] sm:w-[700px]"
        />

        {/* Left atmosphere */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-10%] top-[15%] h-64 w-64 rounded-full bg-blue-600/10 blur-[100px]"
        />

        {/* Right atmosphere */}
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[5%] right-[-5%] h-72 w-72 rounded-full bg-violet-600/10 blur-[110px]"
        />

        {/* =====================================================
            FUTURISTIC GRID
        ===================================================== */}

        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.25) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 75%, transparent)",
          }}
        />

        {/* =====================================================
            MOVING LIGHT STREAKS
        ===================================================== */}

        <motion.div
          animate={{
            x: ["-30%", "130%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[28%] h-px w-[35%] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent blur-sm"
        />

        <motion.div
          animate={{
            x: ["120%", "-30%"],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[67%] h-px w-[30%] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent blur-sm"
        />

        {/* =====================================================
            PARTICLES
        ===================================================== */}

        {[...Array(18)].map((_, index) => (
          <motion.span
            key={index}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [-20, -100],
            }}
            transition={{
              duration: 4 + (index % 4),
              repeat: Infinity,
              delay: index * 0.35,
              ease: "easeOut",
            }}
            className="absolute h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
            style={{
              left: `${5 + ((index * 17) % 90)}%`,
              top: `${35 + ((index * 13) % 55)}%`,
            }}
          />
        ))}
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">

        {/* =====================================================
            LOGO REVEAL
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.65,
            y: -35,
            rotateX: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            rotateX: 0,
          }}
          transition={{
            duration: 1.1,
            ease: "easeOut",
          }}
          className="mb-8"
        >
          <div className="relative">
            {/* Logo aura */}
            <motion.div
              animate={{
                opacity: [0.25, 0.55, 0.25],
                scale: [0.95, 1.08, 0.95],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-6 rounded-[2rem] bg-cyan-400/20 blur-2xl"
            />

            <div className="relative rounded-3xl border border-cyan-400/20 bg-white/[0.04] p-4 shadow-[0_0_70px_rgba(34,211,238,0.14)] backdrop-blur-2xl">
              <Image
                src="/images/IMG-logo.jpeg"
                alt="Aarushi Infotech Logo"
                width={160}
                height={160}
                priority
                className="h-28 w-28 rounded-2xl object-contain sm:h-36 sm:w-36"
              />
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            AI CLASSES BADGE
        ===================================================== */}

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
            delay: 0.45,
            duration: 0.7,
          }}
          className="mb-7 flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2.5 text-[10px] font-bold tracking-[0.3em] text-cyan-300 backdrop-blur-md sm:text-xs"
        >
          <Sparkles className="h-4 w-4" />
          AI CLASSES
        </motion.div>

        {/* =====================================================
            MAIN TITLE
        ===================================================== */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.65,
            duration: 1,
            ease: "easeOut",
          }}
          className="max-w-6xl text-5xl font-black leading-[0.92] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-[7.2rem]"
        >
          MASTER THE

          <span className="relative block">
            <span className="absolute inset-0 bg-cyan-400/10 blur-3xl" />

            <span className="relative bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              POWER OF AI
            </span>
          </span>
        </motion.h1>

        {/* =====================================================
            SUBTITLE
        ===================================================== */}

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
            delay: 1,
            duration: 0.8,
          }}
          className="mt-8 max-w-2xl text-base leading-7 text-slate-400 sm:text-xl sm:leading-8"
        >
          Learn. Create. Analyze. Secure. Grow.

          <span className="mt-3 block text-sm leading-6 text-slate-600 sm:text-base">
            Build practical skills to understand and use modern AI,
            data and technology with confidence.
          </span>
        </motion.p>

        {/* =====================================================
            CTA BUTTONS
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.2,
            duration: 0.8,
          }}
          className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
        >
          {/* GET STARTED */}
          <Link
            href="/start"
            className="group relative overflow-hidden rounded-xl bg-cyan-400 px-8 py-4 text-sm font-black text-slate-950 shadow-[0_0_35px_rgba(34,211,238,0.25)] transition duration-300 hover:scale-105 hover:bg-cyan-300 hover:shadow-[0_0_60px_rgba(34,211,238,0.45)]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Zap className="h-4 w-4" />
              GET STARTED
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>

            <motion.span
              animate={{
                x: ["-120%", "120%"],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 w-20 bg-white/30 blur-xl"
            />
          </Link>

          {/* EXPLORE AI CLASSES */}
          <Link
            href="/classes"
            className="group rounded-xl border border-white/15 bg-white/[0.04] px-8 py-4 text-sm font-bold text-white backdrop-blur-xl transition duration-300 hover:scale-105 hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-200"
          >
            <span className="flex items-center justify-center gap-2">
              EXPLORE AI CLASSES
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>

        {/* =====================================================
            QUICK ROUTE INDICATORS
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.65,
            duration: 0.8,
          }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 text-[9px] font-mono tracking-[0.18em] text-slate-600"
        >
          <span className="rounded-full border border-white/5 bg-white/[0.02] px-4 py-2">
            AI LEARNING
          </span>

          <span className="text-cyan-400/40">•</span>

          <span className="rounded-full border border-white/5 bg-white/[0.02] px-4 py-2">
            DATA
          </span>

          <span className="text-cyan-400/40">•</span>

          <span className="rounded-full border border-white/5 bg-white/[0.02] px-4 py-2">
            BUSINESS TECH
          </span>
        </motion.div>

        {/* =====================================================
            SCROLL INDICATOR
        ===================================================== */}

        <motion.a
          href="#ai-classes"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.9,
            duration: 1,
          }}
          className="mt-16 flex flex-col items-center gap-3 text-[9px] tracking-[0.35em] text-slate-600 transition hover:text-cyan-300 sm:mt-20"
        >
          <span>SCROLL TO EXPLORE</span>

          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-9 w-6 items-start justify-center rounded-full border border-slate-700 p-1"
          >
            <motion.span
              animate={{
                opacity: [0.3, 1, 0.3],
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="h-1.5 w-1.5 rounded-full bg-cyan-400"
            />
          </motion.div>

          <ArrowDown className="h-4 w-4" />
        </motion.a>
      </div>

      {/* =========================================================
          BOTTOM HUD
      ========================================================= */}

      <div className="pointer-events-none absolute bottom-5 left-0 right-0 hidden px-8 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between font-mono text-[8px] tracking-[0.25em] text-slate-700">
          <span>AARUSHI INFOTECH // AI SYSTEM</span>

          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
            SYSTEM ONLINE
          </span>

          <span>AI • DATA • TECHNOLOGY</span>
        </div>
      </div>
    </section>
  );
}