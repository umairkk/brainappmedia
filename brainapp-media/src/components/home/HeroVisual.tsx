"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function HeroVisual() {
  const reduce = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const animate = !reduce && !isMobile;

  if (!animate) {
    return (
      <div className="relative mx-auto aspect-square max-w-md rounded-3xl bg-gradient-to-br from-electric/15 via-white to-teal/20 p-6 shadow-xl shadow-navy/10">
        <StaticMockup />
      </div>
    );
  }

  return (
    <div className="relative mx-auto aspect-square max-w-md">
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-electric/20 via-teal/10 to-navy/5"
        animate={{ scale: [1, 1.03, 1], rotate: [0, 1, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-4 top-8 h-24 w-24 rounded-2xl bg-teal/30 blur-sm"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -left-6 bottom-12 h-20 w-20 rounded-full bg-electric/25 blur-sm"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="relative rounded-3xl border border-white/50 bg-white/80 p-6 shadow-2xl shadow-navy/15 backdrop-blur-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <StaticMockup />
        <motion.div
          className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 gap-2 rounded-full border border-navy/10 bg-white px-4 py-2 text-xs font-semibold text-navy shadow-lg"
          animate={{ opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span className="h-2 w-2 rounded-full bg-teal" aria-hidden />
          Campaign · Site · Brand aligned
        </motion.div>
      </motion.div>
    </div>
  );
}

function StaticMockup() {
  return (
    <div className="space-y-3" aria-hidden>
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-red-300/80" />
        <div className="h-3 w-3 rounded-full bg-amber-300/80" />
        <div className="h-3 w-3 rounded-full bg-teal/60" />
      </div>
      <p className="text-[10px] font-semibold uppercase tracking-wide text-body/50">
        Illustrative dashboard · not live client data
      </p>
      <div className="rounded-xl bg-light-bg p-4">
        <div className="h-3 w-3/4 rounded bg-navy/15" />
        <div className="mt-2 h-2 w-full rounded bg-navy/10" />
        <div className="mt-1 h-2 w-5/6 rounded bg-navy/10" />
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="h-14 rounded-lg bg-electric/20" />
          <div className="h-14 rounded-lg bg-teal/25" />
          <div className="h-14 rounded-lg bg-navy/10" />
        </div>
        <div className="mt-4 h-9 w-32 rounded-lg bg-electric/40" />
      </div>
      <div className="flex gap-2">
        <div className="h-8 flex-1 rounded-lg border border-navy/10 bg-white" />
        <div className="h-8 flex-1 rounded-lg border border-navy/10 bg-white" />
      </div>
    </div>
  );
}
