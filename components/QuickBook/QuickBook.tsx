"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  FileText,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

type BookPage = {
  id: number;
  chapter: string;
  title: string;
  subtitle: string;
  content: string;
  image?: string;
};

const pages: BookPage[] = [
  {
    id: 1,
    chapter: "COVER",
    title: "AARUSHI INFOTECH",
    subtitle: "QuicK Book",
    content:
      "Technology, Data, AI, Tally Prime and Digital Intelligence — brought together in one interactive experience.",
  },

  {
    id: 2,
    chapter: "WELCOME",
    title: "WELCOME TO QUicK BOOK",
    subtitle: "Learn. Explore. Discover.",
    content:
      "Welcome to the Aarushi Infotech QuicK Book. This digital book introduces our technology ecosystem, learning programs, data services, AI education, Tally Prime knowledge and modern digital solutions.",
  },

  {
    id: 3,
    chapter: "AI CLASSES",
    title: "ARTIFICIAL INTELLIGENCE CLASSES",
    subtitle: "Learn AI. Build with AI.",
    content:
      "Our AI classes are designed to introduce learners to modern Artificial Intelligence concepts, AI tools, prompt engineering, intelligent applications, automation and practical AI workflows. The focus is on understanding technology and using it creatively.",
  },

  {
    id: 4,
    chapter: "DATA HANDLING",
    title: "DATA HANDLING",
    subtitle: "Organize. Manage. Protect.",
    content:
      "Data handling focuses on collecting, organizing, storing, processing and managing information efficiently. Proper data handling helps transform scattered information into structured and useful digital resources.",
    image: "/images/data-handling.jpg",
  },

  {
    id: 5,
    chapter: "DATA ANALYSIS",
    title: "DATA ANALYSIS",
    subtitle: "Turn data into insight.",
    content:
      "Data analysis involves examining structured information to discover patterns, relationships, trends and meaningful insights. It helps organizations understand their information and make better data-driven decisions.",
    image: "/images/data-analysis.jpg",
  },

  {
    id: 6,
    chapter: "TALLY PRIME",
    title: "TALLY PRIME",
    subtitle: "Business accounting made smarter.",
    content:
      "Tally Prime is a powerful business management and accounting software used for accounting, inventory, taxation, reporting and other business operations. Learning Tally Prime can help users understand practical digital business management.",
  },

  {
    id: 7,
    chapter: "TALLY PRIME SECURITY",
    title: "TALLY PRIME SECURITY",
    subtitle: "Secure your business information.",
    content:
      "Security is an important part of digital business management. Proper user access, permissions, backups and responsible information management can help protect business data and maintain reliable workflows.",
  },

  {
    id: 8,
    chapter: "BUSINESS TECHNOLOGY",
    title: "BUSINESS TECHNOLOGY",
    subtitle: "Technology for modern businesses.",
    content:
      "Modern businesses depend on technology for communication, accounting, data management, analysis, automation and decision-making. Aarushi Infotech focuses on connecting technology with practical business needs.",
  },

  {
    id: 9,
    chapter: "CONTENT CREATION",
    title: "DIGITAL CONTENT CREATION",
    subtitle: "Create. Design. Communicate.",
    content:
      "Digital content combines technology, creativity and communication. From educational material to business graphics and digital experiences, content creation can help ideas reach people more effectively.",
  },

  {
    id: 10,
    chapter: "RESPONSIBLE AI",
    title: "RESPONSIBLE AI",
    subtitle: "Power with responsibility.",
    content:
      "Artificial Intelligence should be used responsibly. Users should understand AI-generated information, protect private information, verify important outputs and use AI as a supportive technology rather than blindly depending on it.",
  },

  {
    id: 11,
    chapter: "AI PRODUCTIVITY",
    title: "AI PRODUCTIVITY",
    subtitle: "Work smarter with intelligent tools.",
    content:
      "AI can assist with learning, brainstorming, summarization, organization, coding, research and content creation. The goal is not simply to use AI, but to use it intelligently and efficiently.",
  },

  {
    id: 12,
    chapter: "OUR SERVICES",
    title: "AARUSHI INFOTECH SERVICES",
    subtitle: "Technology • Data • AI • Tally",
    content:
      "Aarushi Infotech provides technology-focused services including custom Tally solutions, Tally customization, data handling, data analysis, cloud storage, fast digital services, Tally Prime learning, data export support, AI assistance and other technology-related solutions.",
    image: "/images/aarushi-infotech-services.jpg",
  },

  {
    id: 13,
    chapter: "DATA EXPERIENCE",
    title: "DATA EXPERIENCE",
    subtitle: "See data come alive.",
    content:
      "The Data Experience demonstrates how raw information can move through organization, analysis and interpretation to become meaningful insight. Data handling and analysis work together to create a complete information workflow.",
  },

  {
    id: 14,
    chapter: "TALLY USERS",
    title: "FOR TALLY USERS",
    subtitle: "Learn. Manage. Improve.",
    content:
      "Tally users can benefit from practical learning related to accounting workflows, business data, reporting, data management, customization and efficient digital operations.",
  },

  {
    id: 15,
    chapter: "THE FUTURE",
    title: "THE FUTURE OF TECHNOLOGY",
    subtitle: "AI + Data + Business",
    content:
      "The future of digital business will increasingly connect Artificial Intelligence, data analysis, cloud technologies, automation and human creativity. Learning these technologies today can prepare users for tomorrow's digital environment.",
  },

  {
    id: 16,
    chapter: "CONTACT",
    title: "CONNECT WITH AARUSHI INFOTECH",
    subtitle: "Let's build something useful.",
    content:
      "For questions, learning support, Tally-related assistance, data services, AI learning or other technology requirements, connect with Aarushi Infotech through the available communication channels.",
  },

  {
    id: 17,
    chapter: "SERVICES",
    title: "AARUSHI INFOTECH",
    subtitle: "OUR SERVICES",
    content:
      "Explore our services and discover how Aarushi Infotech connects technology, data, Artificial Intelligence and business solutions.",
    image: "/images/aarushi-infotech-services.jpg",
  },

  {
    id: 18,
    chapter: "END",
    title: "THANK YOU",
    subtitle: "AARUSHI INFOTECH",
    content:
      "Thank you for exploring the Aarushi Infotech QuicK Book. Keep learning, keep building and keep exploring technology.",
  },
];

export default function QuickBook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [contentsOpen, setContentsOpen] = useState(false);

  const page = pages[currentPage];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setDirection(1);
      setCurrentPage((prev) => prev + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToPage = (index: number) => {
    setDirection(index > currentPage ? 1 : -1);
    setCurrentPage(index);
    setContentsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        nextPage();
      }

      if (event.key === "ArrowLeft") {
        previousPage();
      }

      if (event.key === "Escape") {
        setContentsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentPage]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#020617] text-white">
      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* TOP BAR */}
      <header className="relative z-20 flex items-center justify-between border-b border-white/10 bg-black/30 px-4 py-4 backdrop-blur-xl sm:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-cyan-400/20 bg-white/5">
            <Image
              src="/images/IMG-logo.jpeg"
              alt="Aarushi Infotech"
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-bold tracking-[0.25em] text-cyan-300">
              AARUSHI INFOTECH
            </p>
            <p className="text-xs text-white/40">QuicK Book</p>
          </div>
        </div>

        <button
          onClick={() => setContentsOpen(true)}
          className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-cyan-400/30 hover:bg-white/10 hover:text-white"
        >
          <Menu size={18} />
          <span className="hidden sm:inline">Contents</span>
        </button>
      </header>

      {/* BOOK AREA */}
      <section className="relative z-10 flex min-h-[calc(100vh-73px)] items-center justify-center px-4 py-8 sm:px-8">
        <div className="w-full max-w-5xl">
          {/* BOOK */}
          <div className="relative mx-auto w-full max-w-4xl">
            {/* BOOK SHADOW */}
            <div className="absolute inset-x-8 bottom-[-25px] h-10 rounded-full bg-black/60 blur-2xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#07111f]/90 shadow-[0_30px_100px_rgba(0,0,0,0.6)] backdrop-blur-xl">
              {/* BOOK TOP DETAILS */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-8">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-cyan-300">
                  <BookOpen size={16} />
                  DIGITAL BOOK
                </div>

                <div className="text-xs text-white/40">
                  {currentPage + 1} / {pages.length}
                </div>
              </div>

              {/* PAGE */}
              <div className="relative min-h-[590px] overflow-hidden px-5 py-8 sm:px-12 sm:py-12">
                <AnimatePresence
                  mode="wait"
                  initial={false}
                  custom={direction}
                >
                  <motion.article
                    key={page.id}
                    custom={direction}
                    initial={{
                      opacity: 0,
                      x: direction > 0 ? 70 : -70,
                      rotateY: direction > 0 ? 7 : -7,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      rotateY: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: direction > 0 ? -70 : 70,
                      rotateY: direction > 0 ? -7 : 7,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                    className="mx-auto flex min-h-[500px] max-w-3xl flex-col"
                  >
                    {/* CHAPTER */}
                    <div className="mb-6 flex items-center gap-3">
                      <span className="h-px w-10 bg-cyan-400/50" />

                      <span className="text-xs font-bold tracking-[0.3em] text-cyan-300">
                        {page.chapter}
                      </span>

                      <span className="h-px flex-1 bg-white/10" />
                    </div>

                    {/* TITLE */}
                    <h1 className="max-w-3xl text-3xl font-black tracking-tight text-white sm:text-5xl">
                      {page.title}
                    </h1>

                    {/* SUBTITLE */}
                    <p className="mt-4 text-base font-medium text-cyan-200/80 sm:text-lg">
                      {page.subtitle}
                    </p>

                    {/* CONTENT */}
                    <div className="mt-8 max-w-3xl">
                      <p className="text-base leading-8 text-white/65 sm:text-lg sm:leading-9">
                        {page.content}
                      </p>
                    </div>

                    {/* OPTIONAL IMAGE */}
                    {page.image && (
                      <motion.div
                        initial={{ opacity: 0, y: 25, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.15,
                        }}
                        className="mt-8 flex justify-center"
                      >
                        <div className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-black/40 p-2 shadow-[0_0_50px_rgba(34,211,238,0.08)]">
                          <Image
                            src={page.image}
                            alt={page.title}
                            width={420}
                            height={650}
                            className="max-h-[360px] w-auto rounded-xl object-contain sm:max-h-[420px]"
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* COVER BRANDING */}
                    {page.id === 1 && (
                      <div className="mt-auto pt-12">
                        <div className="flex items-center gap-4">
                          <div className="h-px flex-1 bg-cyan-400/20" />

                          <span className="text-xs font-semibold tracking-[0.25em] text-white/30">
                            LEARN • DEVELOP • EXPLORE
                          </span>

                          <div className="h-px flex-1 bg-cyan-400/20" />
                        </div>
                      </div>
                    )}

                    {/* PAGE NUMBER */}
                    <div className="mt-auto flex items-center justify-between pt-10 text-xs text-white/25">
                      <span>AARUSHI INFOTECH</span>
                      <span>{String(page.id).padStart(2, "0")}</span>
                    </div>
                  </motion.article>
                </AnimatePresence>
              </div>

              {/* NAVIGATION */}
              <div className="flex items-center justify-between border-t border-white/10 px-5 py-4 sm:px-8">
                <button
                  onClick={previousPage}
                  disabled={currentPage === 0}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/70 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <ChevronLeft size={18} />
                  <span className="hidden sm:inline">Previous</span>
                </button>

                {/* PAGE DOTS */}
                <div className="hidden max-w-[50%] items-center justify-center gap-1.5 overflow-hidden sm:flex">
                  {pages.map((bookPage, index) => (
                    <button
                      key={bookPage.id}
                      onClick={() => goToPage(index)}
                      aria-label={`Go to page ${bookPage.id}`}
                      className={`h-1.5 rounded-full transition-all ${
                        index === currentPage
                          ? "w-7 bg-cyan-300"
                          : "w-1.5 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextPage}
                  disabled={currentPage === pages.length - 1}
                  className="flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2.5 text-sm text-cyan-200 transition hover:bg-cyan-400/20 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* FOOTER HINT */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-white/25">
            <ArrowLeft size={13} />
            <span>Use ← / → keys to turn pages</span>
            <ArrowRight size={13} />
          </div>
        </div>
      </section>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 transition hover:scale-105 hover:bg-emerald-400"
        aria-label="Contact Aarushi Infotech on WhatsApp"
      >
        <MessageCircle size={25} />
      </a>

      {/* CONTENTS DRAWER */}
      <AnimatePresence>
        {contentsOpen && (
          <>
            {/* BACKDROP */}
            <motion.button
              aria-label="Close contents"
              onClick={() => setContentsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 cursor-default bg-black/70 backdrop-blur-sm"
            />

            {/* DRAWER */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-[#030712] shadow-2xl"
            >
              {/* DRAWER HEADER */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
                <div>
                  <p className="text-xs font-bold tracking-[0.25em] text-cyan-300">
                    AARUSHI INFOTECH
                  </p>

                  <h2 className="mt-1 text-xl font-bold">
                    Book Contents
                  </h2>
                </div>

                <button
                  onClick={() => setContentsOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition hover:bg-white/10 hover:text-white"
                  aria-label="Close contents"
                >
                  <X size={20} />
                </button>
              </div>

              {/* CONTENTS LIST */}
              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-2">
                  {pages.map((bookPage, index) => (
                    <button
                      key={bookPage.id}
                      onClick={() => goToPage(index)}
                      className={`group flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
                        index === currentPage
                          ? "border-cyan-400/30 bg-cyan-400/10"
                          : "border-white/5 bg-white/[0.03] hover:border-white/10 hover:bg-white/[0.06]"
                      }`}
                    >
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
                          index === currentPage
                            ? "bg-cyan-300 text-slate-950"
                            : "bg-white/5 text-white/40"
                        }`}
                      >
                        {String(bookPage.id).padStart(2, "0")}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p
                          className={`truncate text-sm font-bold ${
                            index === currentPage
                              ? "text-cyan-200"
                              : "text-white/80"
                          }`}
                        >
                          {bookPage.title}
                        </p>

                        <p className="mt-1 truncate text-xs text-white/35">
                          {bookPage.chapter}
                        </p>
                      </div>

                      <FileText
                        size={16}
                        className="shrink-0 text-white/20 transition group-hover:text-white/50"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}