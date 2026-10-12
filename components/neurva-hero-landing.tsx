"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BrandMarquee } from "./brand-marquee";

const navLinks = ["Home", "Studio", "Manifesto", "Ecosystem", "Journal", "Contact"];

export function NeurvaHeroLanding() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#efe0d4] text-neutral-900">
      <header className="absolute inset-x-0 top-0 z-30 flex items-center justify-between gap-4 px-6 py-5 md:px-10 lg:px-14">
        <div className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <span className="inline-flex items-center gap-0.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-neutral-900" />
            <span className="-ml-1 size-2.5 rounded-full border-2 border-neutral-900 bg-transparent" />
          </span>
          Neurva
        </div>
        <nav className="hidden items-center gap-1 rounded-full bg-white/45 px-2 py-1.5 backdrop-blur-md lg:flex">
          {navLinks.map((link, index) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`rounded-full px-4 py-2 text-sm font-medium transition hover:bg-white/60 ${
                index === 0 ? "bg-white/85 shadow-sm" : ""
              }`}
            >
              {link}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white shadow-lg transition hover:scale-[1.02] active:scale-[0.98]"
        >
          Enter the void <span className="opacity-75">+</span>
        </button>
      </header>

      <div className="relative min-h-0 flex-1">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
        >
          <Image
            src="/hero-scene.png"
            alt="Neurva hero — Make sense of it all"
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
        </motion.div>

        <motion.div
          className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#1a0f2e]/95"
          aria-hidden="true"
        />

        <motion.span
          className="pointer-events-none absolute top-[22%] right-[18%] size-12 rounded-full bg-violet-400/25 blur-[1px]"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
        <motion.span
          className="pointer-events-none absolute top-[38%] right-[28%] size-8 rounded-full bg-sky-400/30 blur-[1px]"
          animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          aria-hidden="true"
        />
        <motion.span
          className="pointer-events-none absolute top-[30%] left-[55%] size-16 rotate-12 rounded-2xl bg-white/10 blur-[1px]"
          animate={{ y: [0, -12, 0], rotate: [12, 18, 12] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
          aria-hidden="true"
        />

        <motion.div
          className="pointer-events-none absolute inset-0 opacity-40 mix-blend-soft-light"
          animate={{ opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "linear-gradient(120deg, rgba(196,181,253,0.35) 0%, transparent 45%, rgba(255,200,170,0.25) 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-20 -mt-1">
        <BrandMarquee />
      </div>
    </section>
  );
}
