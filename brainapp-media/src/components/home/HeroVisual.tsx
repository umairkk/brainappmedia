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

  const shell = (
    <div className="relative">
      <FloatingCard
        className="absolute -left-4 top-6 z-20 w-36 rounded-xl border border-navy/10 bg-white p-3 shadow-xl motion-reduce:static motion-reduce:mb-3"
        animate={animate}
        delay={0.3}
        y={[0, -8, 0]}
      >
        <p className="text-[10px] font-bold uppercase text-muted">Ads</p>
        <p className="text-lg font-black text-navy">Sample</p>
        <p className="text-[10px] text-muted">Illustrative metrics</p>
      </FloatingCard>
      <FloatingCard
        className="absolute -right-2 top-20 z-20 w-32 rounded-xl border border-brand/40 bg-brand p-3 shadow-xl motion-reduce:static motion-reduce:mb-3"
        animate={animate}
        delay={0.5}
        y={[0, 10, 0]}
      >
        <p className="text-[10px] font-bold uppercase text-navy/70">Brand</p>
        <div className="mt-1 flex gap-1">
          <span className="h-4 w-4 rounded-full bg-navy" />
          <span className="h-4 w-4 rounded-full bg-white border border-navy/20" />
          <span className="h-4 w-4 rounded-full bg-brand" />
        </div>
      </FloatingCard>
      <div className="relative rounded-3xl border border-navy/10 bg-white p-6 shadow-2xl shadow-navy/10">
        <StaticMockup />
      </div>
      <FloatingCard
        className="absolute -bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-2 text-xs font-bold text-navy shadow-lg motion-reduce:static motion-reduce:mt-4 motion-reduce:translate-x-0"
        animate={animate}
        delay={0.2}
        y={[0, -6, 0]}
      >
        <span className="h-2 w-2 rounded-full bg-brand animate-pulse motion-reduce:animate-none" />
        Campaign · Site · Brand aligned
      </FloatingCard>
    </div>
  );

  if (!animate) {
    return (
      <div className="relative mx-auto max-w-md rounded-3xl bg-brand-soft/80 p-4">{shell}</div>
    );
  }

  return (
    <div className="relative mx-auto max-w-md">
      <motion.div
        className="absolute -left-8 top-1/4 h-40 w-40 rounded-full bg-brand/30 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-10 bottom-1/4 h-32 w-32 rounded-full bg-navy/10 blur-2xl"
        animate={{ x: [0, 12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        {shell}
      </motion.div>
    </div>
  );
}

function FloatingCard({
  children,
  className,
  animate: shouldAnimate,
  delay,
  y,
}: {
  children: React.ReactNode;
  className: string;
  animate: boolean;
  delay: number;
  y: number[];
}) {
  if (!shouldAnimate) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y }}
      transition={{
        opacity: { duration: 0.5, delay },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      {children}
    </motion.div>
  );
}

function StaticMockup() {
  return (
    <div className="space-y-3" aria-hidden>
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-red-400/80" />
        <div className="h-3 w-3 rounded-full bg-brand" />
        <div className="h-3 w-3 rounded-full bg-navy/20" />
      </div>
      <p className="text-[10px] font-semibold uppercase tracking-wide text-muted">
        Illustrative dashboard · not live client data
      </p>
      <div className="rounded-xl bg-light-bg p-4">
        <div className="h-3 w-3/4 rounded bg-navy/15" />
        <div className="mt-2 h-2 w-full rounded bg-navy/10" />
        <div className="mt-1 h-2 w-5/6 rounded bg-navy/10" />
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="h-14 rounded-lg bg-brand/40" />
          <div className="h-14 rounded-lg bg-navy/10" />
          <div className="h-14 rounded-lg bg-brand/25" />
        </div>
        <div className="mt-4 h-9 w-32 rounded-full bg-brand motion-safe:animate-pulse" />
      </div>
      <div className="flex gap-2">
        <div className="h-8 flex-1 rounded-lg border border-navy/10 bg-white" />
        <div className="h-8 flex-1 rounded-lg border border-navy/10 bg-white" />
      </div>
    </div>
  );
}
