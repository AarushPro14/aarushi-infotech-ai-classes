"use client";

import { motion } from "motion/react";
import {
  Calculator,
  FileText,
  BarChart3,
  Building2,
  Receipt,
  ArrowUpRight,
} from "lucide-react";

const solutions = [
  {
    icon: Calculator,
    title: "ACCOUNTING",
    description:
      "Understand digital accounting workflows and how business information can be organized efficiently.",
  },
  {
    icon: Receipt,
    title: "INVOICING",
    description:
      "Learn how digital invoicing can help businesses maintain organized transaction records.",
  },
  {
    icon: FileText,
    title: "BUSINESS RECORDS",
    description:
      "Explore structured ways of maintaining important business information and records.",
  },
  {
    icon: BarChart3,
    title: "REPORTING",
    description:
      "Understand how organized business data can be converted into useful reports and insights.",
  },
  {
    icon: Building2,
    title: "BUSINESS MANAGEMENT",
    description:
      "Discover how digital business tools can support everyday organizational workflows.",
  },
];

export default function TallySolutions() {
  return (
    <section
      id="tally"
      className="relative overflow-hidden bg-[#020617] px-6 py-32 text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end"
        >
          <div>
            <p className="text-sm font-bold tracking-[0.3em] text-cyan-400">
              BUSINESS TECHNOLOGY
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">
              TALLY
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                SOLUTIONS.
              </span>
            </h2>
          </div>

          <p className="text-base leading-8 text-slate-400">
            Explore how accounting and business-management software can help
            organize financial information, records, transactions, and
            reporting workflows.
          </p>
        </motion.div>

        {/* Main dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-[0_0_80px_rgba(14,165,233,0.06)]"
        >
          {/* Dashboard top bar */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
              </div>

              <span className="ml-2 font-mono text-xs tracking-[0.2em] text-slate-500">
                BUSINESS_SYSTEM
              </span>
            </div>

            <span className="font-mono text-xs text-cyan-400">
              ACTIVE
            </span>
          </div>

          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* Left panel */}
            <div className="border-b border-white/10 p-8 lg:border-b-0 lg:border-r lg:p-12">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                <Calculator className="h-8 w-8" />
              </div>

              <h3 className="mt-8 text-3xl font-black">
                ORGANIZE.
                <span className="block text-cyan-300">MANAGE.</span>
                <span className="block">UNDERSTAND.</span>
              </h3>

              <p className="mt-6 text-sm leading-7 text-slate-400">
                Build an understanding of digital accounting and business
                workflows through practical technology learning.
              </p>

              <div className="mt-8 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.03] p-5">
                <p className="font-mono text-xs tracking-[0.2em] text-cyan-400">
                  LEARNING FOCUS
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Accounting • Records • Transactions • Reporting • Business
                  Organization
                </p>
              </div>
            </div>

            {/* Right cards */}
            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;

                return (
                  <motion.div
                    key={solution.title}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="group relative bg-slate-950 p-7 transition duration-500 hover:bg-cyan-400/[0.035]"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-cyan-300 transition group-hover:border-cyan-400/30">
                        <Icon className="h-6 w-6" />
                      </div>

                      <ArrowUpRight className="h-5 w-5 text-slate-700 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300" />
                    </div>

                    <h4 className="mt-7 font-black tracking-wide">
                      {solution.title}
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {solution.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-slate-500">
            Learn technology. Understand the workflow. Make better-informed
            business decisions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}