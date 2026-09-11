"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Brain,
  BriefcaseBusiness,
  CheckCircle2,
  Database,
  FileBarChart,
  FileText,
  Globe2,
  Layers3,
  LineChart,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  PenTool,
  Phone,
  Play,
  Presentation,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

import Hero from "@/components/Hero";
import DataExperience from "@/components/DataExperience";

/* =========================================================
   DATA
========================================================= */

const knowledgeAreas = [
  {
    number: "01",
    icon: Brain,
    title: "AI Fundamentals",
    description:
      "Understand what Artificial Intelligence is, how modern AI systems work, and how people can interact with AI effectively.",
    tags: ["AI Basics", "Generative AI", "Prompting", "AI Tools"],
    href: "/classes/ai-fundamentals",
  },
  {
    number: "02",
    icon: Database,
    title: "Data Handling",
    description:
      "Learn how information can be collected, organized, prepared, managed, and protected for useful digital workflows.",
    tags: ["Data", "Organization", "Preparation", "Security"],
    href: "/classes/data-handling",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Data Analysis",
    description:
      "Discover how data can reveal patterns, trends, relationships, and insights through structured analytical thinking.",
    tags: ["Analysis", "Charts", "Patterns", "Insights"],
    href: "/classes/data-analysis",
  },
  {
    number: "04",
    icon: PenTool,
    title: "Content Creation",
    description:
      "Explore how AI can support writing, presentations, ideas, visual concepts, digital communication, and creative workflows.",
    tags: ["Writing", "Ideas", "Presentations", "Creative AI"],
    href: "/classes/content-creation",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Responsible AI",
    description:
      "Learn how to approach AI with attention to accuracy, privacy, safety, ethics, and responsible decision-making.",
    tags: ["Safety", "Privacy", "Ethics", "Accuracy"],
    href: "/classes/responsible-ai",
  },
  {
    number: "06",
    icon: BriefcaseBusiness,
    title: "Business Technology",
    description:
      "Understand how AI and modern digital tools can support productivity, business workflows, communication, and operations.",
    tags: ["Business AI", "Productivity", "Workflows", "Technology"],
    href: "/classes/business-technology",
  },
];

const featureCards = [
  {
    icon: Brain,
    title: "AI Learning",
    text: "Build a practical understanding of modern Artificial Intelligence.",
  },
  {
    icon: Database,
    title: "Data Intelligence",
    text: "Learn how information can be organized and transformed into insight.",
  },
  {
    icon: Palette,
    title: "Creative Technology",
    text: "Discover new ways AI can support creative digital work.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible AI",
    text: "Understand responsible and thoughtful use of AI technology.",
  },
  {
    icon: Workflow,
    title: "Smart Workflows",
    text: "Explore how digital tools can improve everyday workflows.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Technology",
    text: "Connect AI concepts with modern business applications.",
  },
];

const dataSteps = [
  {
    number: "01",
    title: "Collect",
    text: "Gather relevant information from useful sources.",
    icon: Database,
  },
  {
    number: "02",
    title: "Organize",
    text: "Structure information so it becomes easier to understand.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Analyze",
    text: "Look for patterns, relationships, changes, and trends.",
    icon: LineChart,
  },
  {
    number: "04",
    title: "Understand",
    text: "Turn analysis into meaningful observations and insights.",
    icon: TrendingUp,
  },
];

const tallySecurity = [
  "Only Admin Has Full Control",
  "Users cannot copy Tally data",
  "Users cannot view the Data Path",
  "Users cannot delete company data",
  "Users cannot access sensitive system settings",
  "Restricted access to unauthorized data locations",
];

const companyHighlights = [
  {
    icon: MonitorSmartphone,
    title: "Digital Technology",
    text: "Modern digital solutions for learning and business environments.",
  },
  {
    icon: Users,
    title: "AI Classes",
    text: "A structured introduction to AI, data, creativity, and technology.",
  },
  {
    icon: Presentation,
    title: "Practical Learning",
    text: "Concepts presented through visual explanations and real-world thinking.",
  },
  {
    icon: Target,
    title: "Future Focused",
    text: "Building digital knowledge for a rapidly changing technology landscape.",
  },
];

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function SectionLabel({
  children,
  icon: Icon = Sparkles,
}: {
  children: React.ReactNode;
  icon?: React.ElementType;
}) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-black tracking-[0.25em] text-cyan-300">
      <Icon size={14} />
      {children}
    </div>
  );
}

function GlowDivider() {
  return (
    <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020617] text-white">
      {/* =====================================================
          GLOBAL BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(6,182,212,0.13),transparent_28%),radial-gradient(circle_at_85%_25%,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(124,58,237,0.10),transparent_35%)]" />

        <div
          className="absolute inset-0 opacity-[0.11]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <motion.div
          animate={{ x: ["-20%", "120%"] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[22%] h-px w-[45%] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
        />

        <motion.div
          animate={{ x: ["120%", "-30%"] }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[68%] h-px w-[38%] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
        />
      </div>

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#020617]/75 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-cyan-400/30 bg-white/5">
              <Image
                src="/images/IMG-logo.jpeg"
                alt="Aarushi Infotech"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-black tracking-[0.18em]">
                AARUSHI
              </p>
              <p className="text-[9px] font-bold tracking-[0.35em] text-cyan-300">
                INFOTECH
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm font-bold text-cyan-300"
            >
              Home
            </Link>

            <Link
              href="/classes"
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
            >
              AI Classes
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
            >
              About
            </Link>

            <Link
              href="/start"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-black text-cyan-300 transition hover:bg-cyan-400/20"
            >
              Get Started
            </Link>
          </div>

          <Link
            href="/classes"
            className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-black text-cyan-300 md:hidden"
          >
            EXPLORE
          </Link>
        </div>
      </nav>

      {/* =====================================================
          HERO
          Existing components/Hero.tsx
      ===================================================== */}

      <Hero />

      {/* =====================================================
          AI INTRODUCTION
      ===================================================== */}

      <section className="relative px-5 py-28 md:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <SectionLabel icon={Sparkles}>
                INTRODUCING ARTIFICIAL INTELLIGENCE
              </SectionLabel>

              <h2 className="text-4xl font-black leading-[0.95] tracking-tight md:text-7xl">
                WELCOME TO
                <br />
                THE AGE OF
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  INTELLIGENCE.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
                Artificial Intelligence is changing the way people learn,
                create, analyze information, solve problems, and work with
                technology.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-500">
                Aarushi Infotech AI Classes introduce these concepts through a
                structured learning journey — from understanding AI basics to
                exploring data, creativity, responsibility, and business
                technology.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "LEARN",
                  "CREATE",
                  "ANALYZE",
                  "SECURE",
                  "GROW",
                ].map((word, index) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="rounded-full border border-cyan-400/10 bg-white/[0.035] px-4 py-2 text-xs font-black tracking-wider text-slate-300"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Animated AI Core */}
            <div className="relative flex min-h-[460px] items-center justify-center">
              <div className="absolute h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-80 w-80 rounded-full border border-cyan-400/15"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-64 w-64 rounded-full border border-blue-400/15"
              />

              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 35px rgba(34,211,238,0.15)",
                    "0 0 90px rgba(34,211,238,0.35)",
                    "0 0 35px rgba(34,211,238,0.15)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="relative flex h-44 w-44 items-center justify-center rounded-full border border-cyan-300/30 bg-[#07152a]/90"
              >
                <Brain size={64} className="text-cyan-300" />

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-5 rounded-full border border-dashed border-cyan-400/20"
                />
              </motion.div>

              {[
                { text: "LEARN", x: "left-[4%] top-[20%]" },
                { text: "CREATE", x: "right-[2%] top-[27%]" },
                { text: "DATA", x: "left-[5%] bottom-[23%]" },
                { text: "AI", x: "right-[9%] bottom-[18%]" },
              ].map((node, index) => (
                <motion.div
                  key={node.text}
                  animate={{
                    y: [0, index % 2 === 0 ? -10 : 10, 0],
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                  }}
                  className={`absolute ${node.x} rounded-xl border border-cyan-400/15 bg-white/[0.035] px-4 py-2 text-xs font-black tracking-wider text-cyan-300 backdrop-blur-xl`}
                >
                  {node.text}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* =====================================================
          BUILD YOUR AI KNOWLEDGE
      ===================================================== */}

      <section
        id="ai-classes"
        className="relative px-5 py-28 md:px-8 md:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <SectionLabel icon={Brain}>
              BUILD YOUR AI KNOWLEDGE
            </SectionLabel>

            <h2 className="text-4xl font-black tracking-tight md:text-7xl">
              SIX DOMAINS.
              <br />
              <span className="text-slate-500">ONE AI JOURNEY.</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400 md:text-lg">
              Explore the foundations of AI, data, creativity, responsibility,
              and modern business technology.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {knowledgeAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.article
                  key={area.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.07,
                  }}
                  whileHover={{ y: -9 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.035] p-7 backdrop-blur-xl transition hover:border-cyan-400/25 hover:bg-white/[0.055]"
                >
                  {/* Glow */}
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />

                  {/* Decorative lines */}
                  <div className="absolute right-0 top-20 h-px w-20 bg-gradient-to-l from-cyan-400/30 to-transparent" />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-xs font-black tracking-[0.3em] text-cyan-400/60">
                        {area.number}
                      </span>

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/5">
                        <Icon size={22} className="text-cyan-300" />
                      </div>
                    </div>

                    <h3 className="mt-8 text-2xl font-black">
                      {area.title}
                    </h3>

                    <p className="mt-4 min-h-[120px] text-sm leading-7 text-slate-400">
                      {area.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {area.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/8 bg-black/20 px-3 py-1.5 text-[10px] font-bold text-slate-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Individual explore buttons are deliberately
                        kept here as preview navigation to /classes/... */}
                    <Link
                      href={area.href}
                      className="group/btn mt-7 inline-flex items-center gap-2 text-xs font-black tracking-wider text-cyan-300"
                    >
                      LEARN MORE
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover/btn:translate-x-1"
                      />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Main Explore AI Classes CTA */}
          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-[2rem] border border-cyan-400/10 bg-cyan-400/[0.035] p-7 text-center md:flex-row md:text-left">
            <div>
              <p className="text-lg font-black">
                Ready for the complete AI learning system?
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Enter the dedicated AI Classes experience.
              </p>
            </div>

            <Link
              href="/classes"
              className="group inline-flex items-center gap-3 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-black text-slate-950 transition hover:scale-[1.03] hover:bg-cyan-300"
            >
              EXPLORE AI CLASSES
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

{/* =========================================================
    QUICKBOOK ULTRA — INTERACTIVE DIGITAL EXPERIENCE
========================================================= */}

<section className="relative overflow-hidden border-y border-white/10 bg-[#020711] px-5 py-28 sm:px-8">
  {/* Background glow */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[140px]" />
  <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[160px]" />

  {/* Grid background */}
  <div
    className="pointer-events-none absolute inset-0 opacity-[0.035]"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
      backgroundSize: "42px 42px",
    }}
  />

  <div className="relative mx-auto max-w-7xl">

    {/* TOP LABEL */}
    <div className="mx-auto max-w-4xl text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-5 py-2 text-xs font-bold tracking-[0.25em] text-cyan-300">
        <span className="animate-pulse">●</span>
        AARUSHI INFOTECH PRESENTS
      </div>

      <h2 className="text-5xl font-black tracking-tight text-white sm:text-7xl">
        Meet{" "}
        <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
          QuicK Book
        </span>
      </h2>

      <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/50 sm:text-xl">
        An interactive digital knowledge experience where AI, data,
        Tally Prime, business technology and Aarushi Infotech come
        together in one book.
      </p>
    </div>

    {/* MAIN EXPERIENCE */}
    <div className="mt-20 grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">

      {/* BOOK PREVIEW */}
      <div className="flex justify-center">
        <div
          className="group relative w-full max-w-md"
          style={{ perspective: "1600px" }}
        >
          {/* Book glow */}
          <div className="absolute inset-8 rounded-full bg-cyan-400/10 blur-[100px]" />

          {/* Outer book */}
          <div className="relative rotate-[-2deg] rounded-[32px] border border-cyan-300/20 bg-gradient-to-br from-[#0a1d2d] via-[#06111e] to-[#020617] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.65)] transition duration-700 group-hover:rotate-0 group-hover:scale-[1.025]">

            {/* Spine */}
            <div className="absolute bottom-5 left-0 top-5 w-2 rounded-r-full bg-gradient-to-b from-cyan-200/50 via-cyan-400/20 to-transparent" />

            {/* Cover */}
            <div className="relative overflow-hidden rounded-[25px] border border-white/10 bg-[#030914] px-7 py-9 sm:px-10 sm:py-12">

              {/* Cover shine */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/10 blur-[80px]" />

              {/* Book icon */}
              <div className="relative flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/5 text-3xl">
                  📖
                </div>

                <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-white/40">
                  ULTRA EDITION
                </div>
              </div>

              <p className="relative mt-16 text-xs font-black tracking-[0.35em] text-cyan-300">
                AARUSHI INFOTECH
              </p>

              <h3 className="relative mt-4 text-6xl font-black leading-[0.9] tracking-tight text-white sm:text-7xl">
                QuicK
                <br />
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Book
                </span>
              </h3>

              <p className="relative mt-7 max-w-xs text-sm leading-6 text-white/40">
                Artificial Intelligence
                <br />
                Data • Tally • Technology
                <br />
                Business • Services
              </p>

              <div className="relative mt-14 h-px bg-gradient-to-r from-cyan-300/30 via-white/10 to-transparent" />

              <div className="relative mt-5 flex items-center justify-between text-[10px] font-bold tracking-[0.2em] text-white/25">
                <span>INTERACTIVE DIGITAL BOOK</span>
                <span>2026</span>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -right-3 top-10 rounded-2xl border border-cyan-300/20 bg-[#071827]/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:-right-8">
            <p className="text-[10px] font-bold tracking-[0.2em] text-cyan-300">
              EXPLORE
            </p>
            <p className="mt-1 text-sm font-bold text-white">
              Page by page →
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div>

        <p className="text-sm font-black tracking-[0.3em] text-cyan-300">
          YOUR DIGITAL GUIDE
        </p>

        <h3 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
          Everything you need.
          <br />
          <span className="text-white/35">
            Inside one experience.
          </span>
        </h3>

        <p className="mt-7 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
          QuicK Book is designed as an interactive digital book for
          exploring the world of Aarushi Infotech. Turn the pages and
          discover concepts, services, technologies and learning
          experiences.
        </p>

        {/* FEATURES */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">

          <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.05]">
            <div className="text-2xl">🧠</div>
            <p className="mt-4 text-sm font-bold text-white">
              AI Classes
            </p>
            <p className="mt-1 text-xs text-white/35">
              Learn AI
            </p>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.05]">
            <div className="text-2xl">🗃️</div>
            <p className="mt-4 text-sm font-bold text-white">
              Data
            </p>
            <p className="mt-1 text-xs text-white/35">
              Handle data
            </p>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.05]">
            <div className="text-2xl">📊</div>
            <p className="mt-4 text-sm font-bold text-white">
              Analysis
            </p>
            <p className="mt-1 text-xs text-white/35">
              Understand data
            </p>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.05]">
            <div className="text-2xl">🧾</div>
            <p className="mt-4 text-sm font-bold text-white">
              Tally Prime
            </p>
            <p className="mt-1 text-xs text-white/35">
              Business tools
            </p>
          </div>

        </div>

        {/* MINI INFO ROW */}
        <div className="mt-8 grid gap-3 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
            <p className="text-xs font-bold tracking-wider text-white/30">
              EXPERIENCE
            </p>
            <p className="mt-1 text-sm font-semibold text-white/70">
              Interactive Pages
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
            <p className="text-xs font-bold tracking-wider text-white/30">
              TOPICS
            </p>
            <p className="mt-1 text-sm font-semibold text-white/70">
              AI • Data • Tally
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
            <p className="text-xs font-bold tracking-wider text-white/30">
              FORMAT
            </p>
            <p className="mt-1 text-sm font-semibold text-white/70">
              Digital Book
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center gap-4">

          <Link
            href="/quick-book"
            className="group inline-flex items-center gap-3 rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-7 py-4 font-black text-cyan-200 shadow-[0_0_40px_rgba(34,211,238,0.08)] transition duration-300 hover:scale-[1.03] hover:border-cyan-300/50 hover:bg-cyan-300/20 hover:text-white"
          >
            <span className="text-xl">📖</span>

            <span>
              Open QuicK Book
            </span>

            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <span className="text-xs font-semibold text-white/25">
            Interactive • Digital • Explore
          </span>

        </div>

      </div>
    </div>

    {/* BOTTOM STATEMENT */}
    <div className="mt-24 border-t border-white/10 pt-10 text-center">
      <p className="text-sm font-bold tracking-[0.2em] text-white/25">
        LEARN • EXPLORE • UNDERSTAND • CREATE
      </p>

      <p className="mt-4 text-lg font-semibold text-white/50">
        Your journey through Aarushi Infotech starts here.
      </p>
    </div>

  </div>
</section>

      {/* =====================================================
          DATA EXPERIENCE
      ===================================================== */}

      <section id="data-experience" className="relative py-24">
  <div className="mx-auto flex max-w-7xl justify-center px-5 sm:px-8">
    <DataExperience />
  </div>
</section>

      {/* =====================================================
          DATA ANALYSIS
      ===================================================== */}

      <section className="relative px-5 py-28 md:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <SectionLabel icon={BarChart3}>
              DATA ANALYSIS
            </SectionLabel>

            <h2 className="text-4xl font-black md:text-7xl">
              SEE THE
              <br />
              <span className="text-slate-500">PATTERN.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400">
              Data analysis is about asking better questions, recognizing
              patterns, and turning information into understandable results.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            <motion.div
              whileHover={{ y: -7 }}
              className="rounded-[2rem] border border-white/8 bg-white/[0.035] p-7"
            >
              <LineChart
                size={27}
                className="text-cyan-300"
              />

              <h3 className="mt-6 text-xl font-black">
                FIND TRENDS
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Compare information and observe how values change over time.
              </p>

              <div className="mt-8 flex h-32 items-end gap-2">
                {[30, 45, 35, 58, 50, 75, 65, 90].map(
                  (height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.07,
                        duration: 0.5,
                      }}
                      className="flex-1 rounded-t-lg bg-gradient-to-t from-cyan-500/10 to-cyan-300/60"
                    />
                  )
                )}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -7 }}
              className="rounded-[2rem] border border-white/8 bg-white/[0.035] p-7"
            >
              <TrendingUp
                size={27}
                className="text-blue-300"
              />

              <h3 className="mt-6 text-xl font-black">
                UNDERSTAND CHANGE
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Use comparisons and context to understand what the numbers
                actually mean.
              </p>

              <div className="mt-8 rounded-2xl border border-white/6 bg-black/20 p-5">
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-black text-cyan-300">
                    +42%
                  </span>

                  <span className="pb-1 text-xs text-slate-600">
                    illustrative trend
                  </span>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "72%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="h-full rounded-full bg-cyan-300"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -7 }}
              className="rounded-[2rem] border border-white/8 bg-white/[0.035] p-7"
            >
              <FileBarChart
                size={27}
                className="text-violet-300"
              />

              <h3 className="mt-6 text-xl font-black">
                COMMUNICATE INSIGHTS
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Learn how charts, summaries, and visual explanations can make
                information easier to understand.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {[68, 42, 84].map((value, index) => (
                  <div key={index}>
                    <div className="flex h-24 items-end rounded-xl bg-black/20 p-2">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${value}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.15,
                          duration: 0.6,
                        }}
                        className="w-full rounded-lg bg-violet-400/50"
                      />
                    </div>

                    <p className="mt-2 text-center text-[10px] text-slate-600">
                      DATA {index + 1}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          AI FEATURES
      ===================================================== */}

      <section className="border-y border-white/5 px-5 py-28 md:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <SectionLabel icon={Zap}>
              AI FEATURES
            </SectionLabel>

            <h2 className="text-4xl font-black md:text-7xl">
              TECHNOLOGY
              <br />
              <span className="text-slate-500">WITH PURPOSE.</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featureCards.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  whileHover={{ y: -6 }}
                  className="group rounded-[1.75rem] border border-white/8 bg-white/[0.035] p-7 transition hover:border-cyan-400/20"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/5">
                    <Icon size={21} className="text-cyan-300" />
                  </div>

                  <h3 className="mt-7 text-xl font-black">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {feature.text}
                  </p>

                  <div className="mt-7 h-px w-0 bg-cyan-300 transition-all duration-500 group-hover:w-full" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          COMPANY + AI CLASSES
      ===================================================== */}

      <section className="relative px-5 py-28 md:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionLabel icon={Globe2}>
                AARUSHI INFOTECH
              </SectionLabel>

              <h2 className="text-4xl font-black md:text-6xl">
                TECHNOLOGY.
                <br />
                LEARNING.
                <br />
                <span className="text-cyan-300">FUTURE.</span>
              </h2>

              <p className="mt-7 text-base leading-8 text-slate-400">
                Aarushi Infotech brings together technology-focused services
                and learning experiences designed around modern digital needs.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-500">
                The AI Classes experience introduces learners to important
                concepts across Artificial Intelligence, data, creativity,
                responsible technology, and business applications.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-black text-white transition hover:border-cyan-400/20 hover:text-cyan-300"
              >
                ABOUT AARUSHI INFOTECH
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {companyHighlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="rounded-[1.5rem] border border-white/8 bg-white/[0.035] p-6"
                  >
                    <Icon
                      size={24}
                      className="text-cyan-300"
                    />

                    <h3 className="mt-6 font-black">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TALLY PRIME SECURITY
      ===================================================== */}

      <section className="relative overflow-hidden border-y border-white/5 px-5 py-28 md:px-8 md:py-36">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <SectionLabel icon={Lock}>
                TALLY PRIME SECURITY SYSTEM
              </SectionLabel>

              <h2 className="text-4xl font-black md:text-6xl">
                IS YOUR TALLY DATA
                <br />
                <span className="text-cyan-300">
                  100% SECURE?
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-400">
                Protect valuable Tally data from unauthorized users and
                external access with the security-focused solution presented
                by Aarushi Infotech.
              </p>

              <div className="mt-8 rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-5">
                <p className="text-sm font-bold leading-7 text-cyan-200">
                  Your Tally Data is Your Business Asset — Keep It Secure.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl md:p-8">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black tracking-[0.25em] text-cyan-300">
                    SECURITY FEATURES
                  </p>

                  <p className="mt-1 text-xs text-slate-600">
                    USER-SUPPLIED SECURITY SYSTEM FEATURES
                  </p>
                </div>

                <ShieldCheck
                  size={25}
                  className="text-cyan-300"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {tallySecurity.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-xl border border-white/6 bg-black/20 p-4"
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-cyan-300"
                    />

                    <span className="text-sm leading-6 text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TALLY PROVIDERS / BUSINESS TECHNOLOGY
      ===================================================== */}

      <section className="px-5 py-28 md:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/8 bg-white/[0.035] p-7 md:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/5">
                <BriefcaseBusiness
                  size={25}
                  className="text-cyan-300"
                />
              </div>

              <h2 className="mt-7 text-3xl font-black md:text-4xl">
                BUSINESS
                <br />
                TECHNOLOGY
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Modern businesses depend on reliable digital tools, organized
                information, secure workflows, and technology that helps
                people work more effectively.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Digital productivity",
                  "Business workflows",
                  "Data organization",
                  "Technology awareness",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/6 bg-black/20 p-4"
                  >
                    <Zap size={16} className="text-cyan-300" />
                    <span className="text-sm text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/8 bg-white/[0.035] p-7 md:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/15 bg-blue-400/5">
                <FileText
                  size={25}
                  className="text-blue-300"
                />
              </div>

              <h2 className="mt-7 text-3xl font-black md:text-4xl">
                TALLY &
                <br />
                DIGITAL SOLUTIONS
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Explore technology-focused support and business-oriented
                solutions through Aarushi Infotech.
              </p>

              <div className="mt-7 rounded-2xl border border-blue-400/10 bg-blue-400/5 p-5">
                <p className="text-sm font-bold leading-7 text-blue-200">
                  Designed around practical business technology needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CUSTOMIZATION
      ===================================================== */}

      <section className="relative overflow-hidden border-y border-white/5 px-5 py-28 md:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <SectionLabel icon={Palette}>
                CUSTOMIZATION
              </SectionLabel>

              <h2 className="text-4xl font-black md:text-6xl">
                TECHNOLOGY
                <br />
                THAT FITS
                <br />
                <span className="text-cyan-300">
                  YOUR NEEDS.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-400">
                Digital environments can be designed around different
                workflows, learning goals, business requirements, and
                communication needs.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Learning experiences",
                "Business workflows",
                "Digital interfaces",
                "Data environments",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-[1.5rem] border border-white/8 bg-white/[0.035] p-6 transition hover:border-cyan-400/20"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black">
                      {item}
                    </span>

                    <ArrowRight
                      size={17}
                      className="text-cyan-300 transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative px-5 py-32 text-center md:px-8 md:py-44">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="relative mx-auto max-w-5xl">
          <SectionLabel icon={Sparkles}>
            THE FUTURE STARTS HERE
          </SectionLabel>

          <h2 className="text-5xl font-black tracking-tight md:text-8xl">
            READY TO
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              EXPLORE AI?
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            Enter the Aarushi Infotech AI Classes experience and start
            exploring the world of Artificial Intelligence, data, creativity,
            responsibility, and business technology.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/classes"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-cyan-400 px-8 py-4 font-black text-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.2)] transition hover:scale-[1.03] hover:bg-cyan-300"
            >
              EXPLORE AI CLASSES
              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/start"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-black text-white transition hover:border-cyan-400/20 hover:bg-cyan-400/5"
            >
              GET STARTED
              <Zap size={18} className="text-cyan-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          ULTRA CONTACT COMMAND CENTER
      ===================================================== */}

      <section className="relative overflow-hidden border-t border-white/5 px-5 py-28 md:px-8 md:py-36">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <SectionLabel icon={MessageCircle}>
              COMMAND CENTER
            </SectionLabel>

            <h2 className="text-4xl font-black md:text-7xl">
              LET&apos;S
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                CONNECT.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400 md:text-lg">
              Reach Aarushi Infotech through your preferred channel.
            </p>
          </div>

          {/* Action cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* MAP */}
            <motion.a
              href="https://www.google.com/maps/search/?api=1&query=Skylon+Building+Vapi+Char+Rasta+Near+HDFC+Bank+396195"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition hover:border-cyan-400/30"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                  <MapPin
                    size={24}
                    className="text-cyan-300"
                  />
                </div>

                <p className="mt-6 text-xs font-black tracking-[0.2em] text-cyan-300">
                  LOCATION
                </p>

                <h3 className="mt-2 text-xl font-black">
                  Open in Map
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Open the Main Branch location in Google Maps.
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-black text-cyan-300">
                  OPEN MAP
                  <ArrowRight size={15} />
                </div>
              </div>
            </motion.a>

            {/* WHATSAPP */}
            <motion.a
              href="https://wa.me/919967844269"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition hover:border-emerald-400/30"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-400/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10">
                  <MessageCircle
                    size={24}
                    className="text-emerald-300"
                  />
                </div>

                <p className="mt-6 text-xs font-black tracking-[0.2em] text-emerald-300">
                  DIRECT CHAT
                </p>

                <h3 className="mt-2 text-xl font-black">
                  Chat on WhatsApp
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Start a direct WhatsApp conversation.
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-black text-emerald-300">
                  OPEN WHATSAPP
                  <ArrowRight size={15} />
                </div>
              </div>
            </motion.a>

            {/* EMAIL */}
            <motion.a
              href="mailto:info@aarushiinfotech.in"
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition hover:border-violet-400/30"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-400/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10">
                  <Mail
                    size={24}
                    className="text-violet-300"
                  />
                </div>

                <p className="mt-6 text-xs font-black tracking-[0.2em] text-violet-300">
                  EMAIL
                </p>

                <h3 className="mt-2 text-xl font-black">
                  Send Email
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Open your email application and contact us.
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-black text-violet-300">
                  SEND EMAIL
                  <ArrowRight size={15} />
                </div>
              </div>
            </motion.a>

            {/* CALL */}
            <motion.a
              href="tel:+919967844269"
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition hover:border-blue-400/30"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-400/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10">
                  <Phone
                    size={24}
                    className="text-blue-300"
                  />
                </div>

                <p className="mt-6 text-xs font-black tracking-[0.2em] text-blue-300">
                  PHONE
                </p>

                <h3 className="mt-2 text-xl font-black">
                  Call Now
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Call Aarushi Infotech directly.
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-black text-blue-300">
                  +91 99678 44269
                  <ArrowRight size={15} />
                </div>
              </div>
            </motion.a>
          </div>

          {/* Branch command panel */}
          <div className="mt-6 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] backdrop-blur-xl">
            <div className="grid lg:grid-cols-[1fr_auto]">
              <div className="p-7 md:p-9">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-cyan-400/20">
                    <Image
                      src="/images/IMG-logo.jpeg"
                      alt="Aarushi Infotech"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-black tracking-[0.25em] text-cyan-300">
                      MAIN BRANCH
                    </p>

                    <h3 className="mt-1 text-xl font-black">
                      Aarushi Infotech
                    </h3>
                  </div>
                </div>

                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  <div className="flex gap-3">
                    <MapPin
                      size={19}
                      className="mt-1 shrink-0 text-cyan-300"
                    />

                    <div>
                      <p className="text-sm font-black">
                        Address
                      </p>

                      <p className="mt-2 text-sm leading-7 text-slate-500">
                        Shop No. M6 | M7
                        <br />
                        Skylon Building
                        <br />
                        Vapi Char Rasta
                        <br />
                        Near HDFC Bank
                        <br />
                        396195
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex gap-3">
                      <Phone
                        size={18}
                        className="mt-1 shrink-0 text-cyan-300"
                      />

                      <div>
                        <p className="text-sm font-black">
                          Phone
                        </p>

                        <a
                          href="tel:+919967844269"
                          className="mt-1 block text-sm text-slate-500 hover:text-cyan-300"
                        >
                          +91-9967844269
                        </a>

                        <a
                          href="tel:+919702048814"
                          className="mt-1 block text-sm text-slate-500 hover:text-cyan-300"
                        >
                          +91-9702048814
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Mail
                        size={18}
                        className="mt-1 shrink-0 text-cyan-300"
                      />

                      <div>
                        <p className="text-sm font-black">
                          Email
                        </p>

                        <a
                          href="mailto:info@aarushiinfotech.in"
                          className="mt-1 block text-sm text-slate-500 hover:text-cyan-300"
                        >
                          info@aarushiinfotech.in
                        </a>

                        <a
                          href="mailto:inspired1982@yahoo.co.in"
                          className="mt-1 block text-sm text-slate-500 hover:text-cyan-300"
                        >
                          inspired1982@yahoo.co.in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/5 bg-black/20 p-7 lg:border-l lg:border-t-0">
                <p className="text-xs font-black tracking-[0.25em] text-cyan-300">
                  OFFICIAL WEBSITE
                </p>

                <p className="mt-3 text-sm text-slate-400">
                  aarushiinfotech.in
                </p>

                <a
                  href="https://aarushiinfotech.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm font-black text-cyan-300 transition hover:bg-cyan-400/20"
                >
                  VISIT WEBSITE
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-white/5 px-5 py-10 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[1fr_auto_auto] md:items-start">
            <div>
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-cyan-400/20">
                  <Image
                    src="/images/IMG-logo.jpeg"
                    alt="Aarushi Infotech"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="font-black tracking-[0.15em]">
                    AARUSHI INFOTECH
                  </p>

                  <p className="text-[10px] font-bold tracking-[0.25em] text-cyan-300">
                    AI • DATA • TECHNOLOGY
                  </p>
                </div>
              </div>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
                Learn. Create. Analyze. Secure. Grow.
                <br />
                Building digital knowledge for the future.
              </p>
            </div>

            <div>
              <p className="mb-4 text-xs font-black tracking-[0.2em] text-slate-500">
                NAVIGATION
              </p>

              <div className="space-y-3 text-sm text-slate-500">
                <Link
                  href="/"
                  className="block hover:text-cyan-300"
                >
                  Home
                </Link>

                <Link
                  href="/classes"
                  className="block hover:text-cyan-300"
                >
                  AI Classes
                </Link>

                <Link
                  href="/about"
                  className="block hover:text-cyan-300"
                >
                  About
                </Link>

                <Link
                  href="/start"
                  className="block hover:text-cyan-300"
                >
                  Get Started
                </Link>
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-black tracking-[0.2em] text-slate-500">
                CONNECT
              </p>

              <div className="space-y-3 text-sm text-slate-500">
                <a
                  href="tel:+919967844269"
                  className="block hover:text-cyan-300"
                >
                  +91-9967844269
                </a>

                <a
                  href="mailto:info@aarushiinfotech.in"
                  className="block hover:text-cyan-300"
                >
                  info@aarushiinfotech.in
                </a>

                <a
                  href="https://wa.me/919967844269"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-cyan-300"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-7 text-center text-xs text-slate-700 md:flex-row md:text-left">
            <p>
              © {new Date().getFullYear()} Aarushi Infotech. All rights
              reserved.
            </p>

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
              AI CLASSES SYSTEM ONLINE
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}