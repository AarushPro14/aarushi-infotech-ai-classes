"use client";

import { motion } from "motion/react";
import {
  Brain,
  Zap,
  Workflow,
  FileSearch,
  Presentation,
  Lightbulb,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "UNDERSTAND AI",
    text: "Learn the foundations of AI and discover how modern AI systems can support learning, creativity, and productivity.",
  },
  {
    icon: Zap,
    title: "WORK SMARTER",
    text: "Explore practical AI workflows that can help organize information, generate ideas, and simplify repetitive tasks.",
  },
  {
    icon: Workflow,
    title: "AI WORKFLOWS",
    text: "Connect different steps of a task into structured workflows for more consistent and efficient results.",
  },
  {
    icon: FileSearch,
    title: "SMART INFORMATION",
    text: "Learn how AI can assist with organizing, understanding, summarizing, and working with information.",
  },
  {
    icon: Presentation,
    title: "CREATE & PRESENT",
    text: "Use AI-assisted techniques to develop presentations, written content, concepts, and creative projects.",
  },
  {
    icon: Lightbulb,
    title: "IDEAS INTO ACTION",
    text: "Turn your ideas into structured projects by combining creativity, technology, analysis, and human decision-making.",
  },
];

export default function AIFeatures() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#01030b] px-6 py-32 text-white"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Large ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-20 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end"
        >
          <div>
            <p className="mb-5 text-sm font-bold tracking-[0.3em] text-cyan-400">
              AI CAPABILITIES
            </p>

            <h2 className="text-4xl font-black leading-tight sm:text-6xl">
              MORE THAN
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                JUST AI TOOLS.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-slate-400 lg:justify-self-end">
            Learn how to think with technology — not simply use it. Our AI
            learning approach combines practical skills, creativity,
            information handling, analysis, and responsible technology use.
          </p>
        </motion.div>

        {/* Feature layout */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                whileHover={{ scale: 1.02 }}
                className="group relative min-h-[300px] overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 p-8 backdrop-blur-xl"
              >
                {/* Animated light */}
                <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-700 group-hover:bg-cyan-400/25" />

                {/* Number */}
                <div className="absolute right-7 top-7 font-mono text-xs text-slate-700">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 transition-all duration-500 group-hover:border-cyan-300/50 group-hover:bg-cyan-400/10 group-hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Text */}
                <div className="relative mt-10">
                  <h3 className="text-xl font-black tracking-wide">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {feature.text}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent transition-all duration-500 group-hover:via-cyan-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 rounded-3xl border border-cyan-400/10 bg-cyan-400/[0.025] p-8 text-center sm:p-12"
        >
          <p className="text-2xl font-bold text-white sm:text-3xl">
            <span className="text-cyan-300">AI</span> is powerful.
            <br className="sm:hidden" /> Knowing how to use it responsibly
            makes it even more valuable.
          </p>
        </motion.div>
      </div>
    </section>
  );
}