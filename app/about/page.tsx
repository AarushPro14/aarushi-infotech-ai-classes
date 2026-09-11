import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Database,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

const principles = [
  {
    icon: BrainCircuit,
    title: "LEARN",
    text: "Build practical understanding of modern AI and technology.",
  },
  {
    icon: Database,
    title: "ORGANIZE",
    text: "Work with information in structured and useful ways.",
  },
  {
    icon: Target,
    title: "ANALYZE",
    text: "Turn information into clearer understanding and insights.",
  },
  {
    icon: ShieldCheck,
    title: "RESPONSIBLE",
    text: "Use technology thoughtfully, safely and responsibly.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020617] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/[0.06] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.14) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <header className="relative z-10 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 transition hover:text-cyan-300"
          >
            <ArrowLeft className="h-4 w-4" />
            BACK TO HOME
          </Link>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-6xl px-5 pb-24 pt-24 sm:px-8 sm:pt-32">
        <div className="text-center">
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 font-mono text-[9px] tracking-[0.3em] text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            ABOUT AARUSHI INFOTECH
          </div>

          <h1 className="mt-8 text-5xl font-black leading-[0.9] sm:text-7xl lg:text-8xl">
            TECHNOLOGY
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              WITH PURPOSE.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-sm leading-8 text-slate-400 sm:text-base">
            Aarushi Infotech brings together AI learning, data understanding,
            business technology and practical digital solutions in one
            technology-focused experience.
          </p>
        </div>

        {/* MISSION */}
        <div className="mt-20 rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 sm:p-12">
          <div className="flex items-center gap-3">
            <Target className="h-5 w-5 text-cyan-300" />

            <span className="font-mono text-[9px] tracking-[0.3em] text-cyan-400">
              OUR APPROACH
            </span>
          </div>

          <h2 className="mt-7 text-3xl font-black sm:text-5xl">
            LEARN. CREATE. ANALYZE. GROW.
          </h2>

          <p className="mt-6 max-w-3xl text-sm leading-8 text-slate-500">
            Our goal is to make modern technology easier to understand and
            more practical to use. From AI fundamentals and data analysis to
            business technology and responsible digital practices, the focus
            is on useful knowledge and real-world application.
          </p>
        </div>

        {/* PRINCIPLES */}
        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-6 text-sm font-black tracking-wider">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.text}
                </p>

                <CheckCircle2 className="mt-6 h-4 w-4 text-cyan-400/70" />
              </div>
            );
          })}
        </div>

        {/* FINAL */}
        <div className="mt-20 rounded-[2rem] border border-cyan-400/20 bg-cyan-400/[0.04] p-10 text-center sm:p-16">
          <Users className="mx-auto h-9 w-9 text-cyan-300" />

          <h2 className="mt-6 text-3xl font-black sm:text-5xl">
            BUILD YOUR NEXT LEVEL.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
            Explore our AI classes or connect with Aarushi Infotech to take
            the next step.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/classes"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-4 text-sm font-black text-slate-950 transition hover:scale-105"
            >
              EXPLORE AI CLASSES
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/start"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-bold text-white transition hover:border-cyan-400/30"
            >
              GET STARTED
              <Zap className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}