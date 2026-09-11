import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Phone,
  Sparkles,
  Zap,
} from "lucide-react";

const steps = [
  "Choose the area you want to explore.",
  "Connect with Aarushi Infotech.",
  "Discuss the learning or technology requirement.",
  "Begin your next step.",
];

export default function StartPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020617] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-1/3 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-cyan-400/[0.06] blur-[150px]" />

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

      <section className="relative z-10 mx-auto max-w-6xl px-5 pb-28 pt-24 sm:px-8 sm:pt-32">
        <div className="text-center">
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 font-mono text-[9px] tracking-[0.3em] text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            START YOUR JOURNEY
          </div>

          <h1 className="mt-8 text-5xl font-black leading-[0.9] sm:text-7xl lg:text-8xl">
            YOUR NEXT
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              STEP STARTS HERE.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Explore AI learning, data workflows and practical technology
            solutions with Aarushi Infotech.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
            >
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 font-mono text-sm font-bold text-cyan-300">
                  0{index + 1}
                </div>

                <div>
                  <p className="text-sm leading-7 text-slate-400">{step}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.08] to-transparent p-8 text-center sm:p-14">
          <Zap className="mx-auto h-9 w-9 text-cyan-300" />

          <h2 className="mt-6 text-3xl font-black sm:text-5xl">
            LET&apos;S CONNECT.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
            Contact Aarushi Infotech to discuss AI classes and technology
            requirements.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/919967844269"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-4 text-sm font-black text-slate-950 transition hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              CHAT ON WHATSAPP
            </a>

            <a
              href="tel:+919967844269"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-bold text-white transition hover:border-cyan-400/30"
            >
              <Phone className="h-4 w-4" />
              CALL NOW
            </a>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/classes"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-cyan-400"
            >
              EXPLORE AI CLASSES
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}