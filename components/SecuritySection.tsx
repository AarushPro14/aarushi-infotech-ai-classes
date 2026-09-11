"use client";

import { motion } from "motion/react";
import {
  Database,
  FolderLock,
  ShieldCheck,
  KeyRound,
  UserCheck,
  LockKeyhole,
  ArrowDown,
  CheckCircle2,
} from "lucide-react";

const securitySteps = [
  {
    icon: Database,
    title: "DATA",
    description: "Understand what information is being handled.",
  },
  {
    icon: FolderLock,
    title: "ORGANIZE",
    description: "Keep information structured and easier to manage.",
  },
  {
    icon: ShieldCheck,
    title: "PROTECT",
    description: "Use appropriate security and privacy practices.",
  },
  {
    icon: KeyRound,
    title: "CONTROL",
    description: "Limit access to information according to responsibility.",
  },
];

const principles = [
  "Use strong access controls",
  "Protect sensitive information",
  "Understand where data is stored",
  "Share information responsibly",
  "Keep important systems organized",
  "Use AI with privacy awareness",
];

export default function SecuritySection() {
  return (
    <section
      id="security"
      className="relative overflow-hidden bg-[#01030b] px-6 py-32 text-white"
    >
      {/* Ambient effects */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-bold tracking-[0.3em] text-cyan-400">
            DATA PROTECTION
          </p>

          <h2 className="mt-5 text-4xl font-black sm:text-6xl">
            YOUR DATA
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              DESERVES PROTECTION.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Learn the fundamentals of responsible data handling, access
            control, privacy awareness, and digital security.
          </p>
        </motion.div>

        {/* Security pipeline */}
        <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {securitySteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="group relative"
              >
                <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30">
                  <div className="absolute right-5 top-5 font-mono text-xs text-slate-700">
                    0{index + 1}
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition duration-500 group-hover:shadow-[0_0_35px_rgba(34,211,238,0.2)]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-8 text-xl font-black tracking-wider">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {step.description}
                  </p>
                </div>

                {index < securitySteps.length - 1 && (
                  <ArrowDown className="absolute -bottom-8 left-1/2 z-20 h-5 w-5 -translate-x-1/2 text-cyan-400/40 lg:hidden" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Main security panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-10 overflow-hidden rounded-3xl border border-cyan-400/15 bg-slate-950/80"
        >
          <div className="grid lg:grid-cols-2">
            {/* Visual */}
            <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden border-b border-white/10 p-10 lg:border-b-0 lg:border-r">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_55%)]" />

              {/* Security rings */}
              <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-cyan-400/20">
                <div className="absolute h-52 w-52 rounded-full border border-cyan-400/15" />
                <div className="absolute h-40 w-40 rounded-full border border-cyan-400/20" />
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-cyan-300/40 bg-cyan-400/10 shadow-[0_0_60px_rgba(34,211,238,0.15)]">
                  <LockKeyhole className="h-11 w-11 text-cyan-300" />
                </div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-2 rounded-full border border-dashed border-cyan-400/20"
                />
              </div>
            </div>

            {/* Principles */}
            <div className="p-8 lg:p-12">
              <p className="font-mono text-xs tracking-[0.25em] text-cyan-400">
                SECURITY PRINCIPLES
              </p>

              <h3 className="mt-5 text-3xl font-black">
                BUILD BETTER
                <span className="block text-cyan-300">
                  DIGITAL HABITS.
                </span>
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                Good security begins with understanding how information is
                handled. Learn practical principles that help make digital
                workflows more organized and responsible.
              </p>

              <div className="mt-8 space-y-4">
                {principles.map((principle, index) => (
                  <motion.div
                    key={principle}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400" />
                    <span className="text-sm text-slate-300">
                      {principle}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}