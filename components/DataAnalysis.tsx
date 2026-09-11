"use client";

import { motion } from "motion/react";
import {
  Database,
  FileSpreadsheet,
  BrainCircuit,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import DataExperience from "@/components/DataExperience";

const steps = [
  {
    icon: Database,
    title: "COLLECT",
    text: "Bring relevant information together in an organized way.",
  },
  {
    icon: FileSpreadsheet,
    title: "STRUCTURE",
    text: "Arrange information so it can be understood and processed efficiently.",
  },
  {
    icon: BrainCircuit,
    title: "ANALYZE",
    text: "Use analytical thinking and AI-assisted workflows to identify patterns and insights.",
  },
  {
    icon: BarChart3,
    title: "UNDERSTAND",
    text: "Transform analysis into useful information that supports better decisions.",
  },
];

export default function DataAnalysis() {
  return (
    <section
      id="data-analysis"
      className="relative overflow-hidden bg-[#020617] px-6 py-32 text-white"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-bold tracking-[0.3em] text-cyan-400">
            DATA INTELLIGENCE
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">
            TURN DATA INTO
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              MEANINGFUL INSIGHTS.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Data becomes more valuable when it is organized, understood,
            analyzed, and transformed into information that can support
            thoughtful decisions.
          </p>
        </motion.div>

        {/* Flow */}
        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
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
                className="relative"
              >
                <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                      <Icon className="h-7 w-7" />
                    </div>

                    <span className="font-mono text-xs text-slate-600">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-black tracking-wide">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {step.text}
                  </p>
                </div>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="pointer-events-none absolute -right-3 top-1/2 z-20 hidden -translate-y-1/2 lg:block">
                    <ArrowRight className="h-5 w-5 text-cyan-400/40" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Data command panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-10 overflow-hidden rounded-3xl border border-cyan-400/15 bg-slate-950/80 shadow-[0_0_80px_rgba(14,165,233,0.06)]"
        >
          {/* Panel header */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
              <span className="font-mono text-xs tracking-[0.2em] text-slate-400">
                DATA_ANALYSIS_SYSTEM
              </span>
            </div>

            <span className="font-mono text-xs text-cyan-400">
              ONLINE
            </span>
          </div>

          {/* Panel body */}
          <div className="grid gap-8 p-7 lg:grid-cols-[1fr_0.8fr] lg:p-10">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-slate-600">
                PROCESSING PIPELINE
              </p>

              <div className="mt-7 space-y-5">
                {[
                  "Organize information",
                  "Identify relevant patterns",
                  "Compare meaningful data",
                  "Generate useful insights",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Visualization */}
            <div className="flex min-h-64 items-end justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              {[35, 55, 42, 75, 62, 88, 70, 96].map((height, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.08,
                  }}
                  className="w-5 rounded-t-md bg-gradient-to-t from-blue-600/30 via-cyan-400/60 to-cyan-300"
                />
              ))}
            </div>
          </div>
        </motion.div>
        {/* =====================================================
    DATA ANALYSIS EXPERIENCE
===================================================== */}

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mt-14 flex justify-center"
>
  <DataExperience />
</motion.div>
      </div>
    </section>
  );
}