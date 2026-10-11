"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useCallback, useRef } from "react";
import { BrandMarquee } from "./brand-marquee";

const navLinks = ["Home", "Studio", "Manifesto", "Ecosystem", "Journal", "Contact"];

const awards = [
  { label: "Digital Innovation", year: "2024", icon: "✦" },
  { label: "Best UX Design", year: "2024", icon: "★" },
  { label: "Loved by thinkers worldwide", year: "", icon: "◉" },
];

export function NeurvaHeroLanding() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const parallaxX = useMotionValue(0);
  const parallaxY = useMotionValue(0);
  const sceneTransform = useMotionTemplate`translate(${parallaxX}px, ${parallaxY}px)`;

  const onPointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const bounds = sceneRef.current?.getBoundingClientRect();
      if (!bounds) return;
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      parallaxX.set(x * 14);
      parallaxY.set(y * 10);
    },
    [parallaxX, parallaxY],
  );

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#efe0d4] text-neutral-900">
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-95"
        aria-hidden="true"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
        style={{
          background:
            "linear-gradient(125deg, #f5ddd0 0%, #e8d4f0 38%, #f0c9b8 72%, #dcc8f5 100%)",
          backgroundSize: "200% 200%",
        }}
      />

      <header className="relative z-20 flex items-center justify-between gap-4 px-6 py-5 md:px-10 lg:px-14">
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

      <div className="relative z-10 grid flex-1 grid-cols-1 items-center gap-10 px-6 pb-6 md:px-10 lg:grid-cols-[minmax(0,44%)_1fr] lg:gap-6 lg:px-14 lg:pb-4">
        <div className="max-w-xl text-left">
          <motion.p
            className="mb-4 flex items-center gap-2 text-sm font-medium text-violet-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="text-violet-500">✦</span> Redefining connections
          </motion.p>
          <motion.h1
            className="text-[clamp(2.5rem,5.4vw,4.5rem)] leading-[1.02] font-bold tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Make sense
            <br />
            of it all.
          </motion.h1>
          <motion.p
            className="mt-5 max-w-md text-base leading-relaxed text-neutral-700 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            A new mindset for a new reality. Work, create, explore. Or don&apos;t.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5"
            >
              Discover more <span aria-hidden="true">↗</span>
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-3 text-sm font-medium text-neutral-800"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-violet-600 text-white shadow-lg">
                ▶
              </span>
              Watch the film
              <span className="text-neutral-500">2 min</span>
            </button>
          </motion.div>

          <motion.div
            className="mt-10 hidden flex-wrap gap-3 md:flex"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
          >
            {awards.map((award) => (
              <div
                key={award.label}
                className="max-w-[11rem] rounded-2xl border border-white/50 bg-white/30 px-4 py-3 text-xs backdrop-blur-xl"
              >
                <div className="mb-1 text-violet-600">{award.icon}</div>
                <p className="font-semibold text-neutral-800">{award.label}</p>
                {award.year ? <p className="text-neutral-500">{award.year}</p> : null}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          ref={sceneRef}
          className="relative mx-auto aspect-[4/3] w-full max-w-[860px] lg:max-w-none"
          style={{ transform: sceneTransform }}
          onPointerMove={onPointerMove}
        >
          <motion.span
            className="absolute top-[10%] left-[8%] size-16 rounded-full bg-violet-400/30 blur-[1px]"
            animate={{ y: [0, -16, 0], rotate: [0, 6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />
          <motion.span
            className="absolute top-[18%] right-[12%] size-10 rounded-full bg-sky-400/35 blur-[1px]"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            aria-hidden="true"
          />
          <motion.span
            className="absolute bottom-[28%] left-[4%] size-20 rotate-12 rounded-2xl bg-black/10 blur-[1px]"
            animate={{ y: [0, -14, 0], rotate: [12, 18, 12] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            aria-hidden="true"
          />

          <motion.div
            className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-black/5"
            animate={{ scale: [1.02, 1.06, 1.02] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/hero-scene.png"
              alt="Surreal 3D landscape with floating shapes"
              fill
              priority
              className="object-cover object-[58%_center]"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <motion.div
              className="pointer-events-none absolute inset-0 bg-linear-to-tr from-violet-300/10 via-transparent to-amber-200/15"
              animate={{ opacity: [0.35, 0.75, 0.35] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            />
          </motion.div>

          <motion.div
            className="absolute -bottom-2 -left-2 hidden rounded-2xl border border-white/40 bg-white/25 p-3 backdrop-blur-xl md:block"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          >
            <p className="text-[10px] font-semibold text-neutral-600 uppercase">Energy flow</p>
            <p className="text-[10px] text-neutral-500">Real-time · Unpredictable</p>
            <div className="mt-1 h-8 w-24 rounded bg-linear-to-r from-violet-400/50 to-sky-400/50" />
          </motion.div>
        </motion.div>
      </div>

      <BrandMarquee />
    </section>
  );
}
