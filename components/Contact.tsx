"use client";

import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Globe,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const contacts = [
  {
    icon: Phone,
    label: "CONTACT",
    value: "+91-9967844269",
    href: "tel:+919967844269",
  },
  {
    icon: Phone,
    label: "CONTACT",
    value: "+91-9702048814",
    href: "tel:+919702048814",
  },
];

const emailSubject = encodeURIComponent(
  "Enquiry for AI Classes & Technology Solutions — Aarushi Infotech"
);

const emailBody = encodeURIComponent(`Dear Aarushi Infotech Team,

I am interested in learning more about your AI Classes and technology solutions.

I would like to know more about:

• AI Classes
• AI Tools & Workflows
• Data Handling & Analysis
• Content Creation
• Tally Prime Solutions
• Business Technology
• Other available services

Please share the relevant course/service details, available options, and further information.

Thank you.

Best regards,
[Your Name]`);

const whatsappMessage = encodeURIComponent(
  `Hello Aarushi Infotech Team! 👋

I would like to know more about your AI Classes and technology solutions.

I am interested in:
• AI Classes
• AI Tools & Workflows
• Data Handling & Analysis
• Content Creation
• Tally Prime Solutions
• Business Technology

Please share the available course/service details and further information.

Thank you! 🚀`
);

const emailLinks = [
  {
    label: "EMAIL",
    value: "info@aarushiinfotech.in",
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=info@aarushiinfotech.in&su=${emailSubject}&body=${emailBody}`,
  },
  {
    label: "EMAIL",
    value: "inspired1982@yahoo.co.in",
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=inspired1982@yahoo.co.in&su=${emailSubject}&body=${emailBody}`,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#01030b] px-6 py-32 text-white"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-2 text-sm font-bold tracking-[0.3em] text-cyan-400">
            <Sparkles className="h-4 w-4" />
            CONNECT WITH US
          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
            LET&apos;S BUILD
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              SOMETHING BETTER.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Have a question about AI classes, Tally Prime, business
            technology, or our services? Connect directly with Aarushi
            Infotech.
          </p>
        </motion.div>

        {/* CONTACT + EMAIL GRID */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* PHONE 1 */}
          <motion.a
            href={contacts[0].href}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                <Phone className="h-5 w-5" />
              </div>

              <ArrowUpRight className="h-4 w-4 text-slate-600 transition group-hover:text-cyan-300" />
            </div>

            <p className="mt-6 text-xs font-bold tracking-[0.2em] text-slate-500">
              CONTACT
            </p>

            <p className="mt-2 text-sm font-semibold text-slate-200">
              +91-9967844269
            </p>
          </motion.a>

          {/* PHONE 2 */}
          <motion.a
            href={contacts[1].href}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                <Phone className="h-5 w-5" />
              </div>

              <ArrowUpRight className="h-4 w-4 text-slate-600 transition group-hover:text-cyan-300" />
            </div>

            <p className="mt-6 text-xs font-bold tracking-[0.2em] text-slate-500">
              CONTACT
            </p>

            <p className="mt-2 text-sm font-semibold text-slate-200">
              +91-9702048814
            </p>
          </motion.a>

          {/* EMAIL 1 */}
          <motion.a
            href={emailLinks[0].href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                <Mail className="h-5 w-5" />
              </div>

              <ArrowUpRight className="h-4 w-4 text-slate-600 transition group-hover:text-cyan-300" />
            </div>

            <p className="mt-6 text-xs font-bold tracking-[0.2em] text-slate-500">
              EMAIL VIA GMAIL
            </p>

            <p className="mt-2 break-all text-sm font-semibold text-slate-200">
              info@aarushiinfotech.in
            </p>
          </motion.a>

          {/* EMAIL 2 */}
          <motion.a
            href={emailLinks[1].href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                <Mail className="h-5 w-5" />
              </div>

              <ArrowUpRight className="h-4 w-4 text-slate-600 transition group-hover:text-cyan-300" />
            </div>

            <p className="mt-6 text-xs font-bold tracking-[0.2em] text-slate-500">
              EMAIL VIA GMAIL
            </p>

            <p className="mt-2 break-all text-sm font-semibold text-slate-200">
              inspired1982@yahoo.co.in
            </p>
          </motion.a>
        </div>

        {/* WHATSAPP + WEBSITE */}
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {/* WHATSAPP */}
          <motion.a
            href={`https://wa.me/919967844269?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group flex items-center justify-between rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-7 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.07] hover:shadow-[0_0_50px_rgba(34,211,238,0.08)]"
          >
            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition group-hover:scale-110">
                <MessageCircle className="h-7 w-7" />
              </div>

              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-cyan-400">
                  INSTANT CONNECTION
                </p>

                <h3 className="mt-1 text-xl font-black">
                  Chat on WhatsApp
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Start with a ready-to-send enquiry.
                </p>
              </div>
            </div>

            <ArrowUpRight className="h-6 w-6 text-slate-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300" />
          </motion.a>

          {/* WEBSITE */}
          <motion.a
            href="https://aarushiinfotech.in/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/30"
          >
            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300 transition group-hover:scale-110">
                <Globe className="h-7 w-7" />
              </div>

              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-slate-500">
                  OFFICIAL WEBSITE
                </p>

                <h3 className="mt-1 text-xl font-black">
                  aarushiinfotech.in
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Explore Aarushi Infotech.
                </p>
              </div>
            </div>

            <ArrowUpRight className="h-6 w-6 text-slate-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300" />
          </motion.a>
        </div>

        {/* LOCATION */}
        <div className="mt-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-sm font-bold tracking-[0.3em] text-cyan-400">
                OUR LOCATION
              </p>

              <h3 className="mt-4 text-3xl font-black sm:text-4xl">
                FIND AARUSHI INFOTECH
              </h3>
            </div>

            <MapPin className="hidden h-10 w-10 text-cyan-400/50 sm:block" />
          </div>

          {/* GOOGLE MAPS LOCATION */}
          <motion.a
            href="https://www.google.com/maps/search/?api=1&query=Shop+No.+M6+M7+Skylon+Building+Vapi+Char+Rasta+Near+HDFC+Bank+396195"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_60px_rgba(34,211,238,0.08)]"
          >
            <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-cyan-400/5 blur-3xl transition group-hover:bg-cyan-400/10" />

            <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition group-hover:scale-105 group-hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]">
                  <MapPin className="h-8 w-8" />
                </div>

                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-cyan-400">
                    MAIN BRANCH
                  </p>

                  <h4 className="mt-2 text-2xl font-black">
                    VAPI
                  </h4>

                  <div className="mt-4 space-y-1 text-sm leading-6 text-slate-400">
                    <p>Shop No. M6 | M7</p>
                    <p>Skylon Building</p>
                    <p>Vapi Char Rasta</p>
                    <p>Near HDFC Bank</p>
                    <p>396195</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.04] px-5 py-3 text-sm font-bold text-cyan-300">
                OPEN IN GOOGLE MAPS
                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </div>
          </motion.a>
        </div>

        {/* FINAL CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 rounded-3xl border border-cyan-400/10 bg-gradient-to-r from-cyan-400/[0.05] via-blue-500/[0.04] to-violet-500/[0.05] p-8 text-center sm:p-12"
        >
          <p className="text-sm font-bold tracking-[0.25em] text-cyan-400">
            READY TO START?
          </p>

          <h3 className="mt-4 text-3xl font-black sm:text-4xl">
            YOUR NEXT STEP STARTS HERE.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            Connect with Aarushi Infotech and explore AI learning,
            technology solutions, Tally Prime services, and more.
          </p>

          <a
            href={`https://wa.me/919967844269?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-cyan-400 px-7 py-4 font-black text-slate-950 shadow-[0_0_35px_rgba(34,211,238,0.2)] transition hover:scale-105 hover:shadow-[0_0_55px_rgba(34,211,238,0.35)]"
          >
            <MessageCircle className="h-5 w-5" />
            START A CONVERSATION
          </a>
        </motion.div>
      </div>
    </section>
  );
}