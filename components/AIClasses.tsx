"use client";

import { motion } from "motion/react";
import {
  BrainCircuit,
  Database,
  BarChart3,
  WandSparkles,
  ShieldCheck,
  BriefcaseBusiness,
  ArrowUpRight,
} from "lucide-react";

const classes = [
  {
    number: "01",
    icon: BrainCircuit,
    title: "AI FUNDAMENTALS",
    description:
      "Understand artificial intelligence, modern AI tools, prompts, workflows, and practical everyday applications.",
  },
  {
    number: "02",
    icon: Database,
    title: "DATA HANDLING",
    description:
      "Learn how to organize, manage, process, and work with information effectively using modern digital tools.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "DATA ANALYSIS",
    description:
      "Turn raw information into meaningful insights through structured analysis, visualization, and AI-assisted workflows.",
  },
  {
    number: "04",
    icon: WandSparkles,
    title: "CONTENT CREATION",
    description:
      "Explore AI-assisted workflows for writing, presentations, creative ideas, visual concepts, and digital content.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "RESPONSIBLE AI",
    description:
      "Understand privacy, responsible usage, security awareness, accuracy, and the importance of human judgment.",
  },
  {
    number: "06",
    icon: BriefcaseBusiness,
    title: "BUSINESS TECHNOLOGY",
    description:
      "Discover how AI and digital technology can support productivity, organization, business workflows, and growth.",
  },
];

export default function AIClasses() {
  return (
    <section
      id="ai-classes"
      className="relative overflow-hidden bg-[#020617] px-6 py-32 text-white"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 text-sm font-bold tracking-[0.3em] text-cyan-400">
            THE AI LEARNING SYSTEM
          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
            BUILD YOUR
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              AI KNOWLEDGE
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Practical learning designed to help you understand AI,
            information, creativity, productivity, security, and modern
            business technology.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {classes.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition duration-500 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition duration-500 group-hover:bg-cyan-400/20" />

                {/* Top row */}
                <div className="relative flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <span className="font-mono text-sm text-slate-600">
                    {item.number}
                  </span>
                </div>

                {/* Content */}
                <div className="relative mt-8">
                  <h3 className="text-xl font-black tracking-wide text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 min-h-24 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="relative mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-xs font-bold tracking-[0.2em] text-slate-600 transition group-hover:text-cyan-400">
                    EXPLORE
                  </span>

                  <ArrowUpRight className="h-5 w-5 text-slate-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}