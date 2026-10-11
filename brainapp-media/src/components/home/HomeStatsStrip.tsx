"use client";

import { CountUp } from "@/components/motion/CountUp";
import { motion, useReducedMotion } from "framer-motion";

const stats = [
  {
    value: 24,
    suffix: "+",
    label: "Service offerings",
    detail: "Marketing, ads, web, and creative",
  },
  {
    value: 4,
    suffix: "",
    label: "Practice areas",
    detail: "Integrated under one partner",
  },
  {
    value: 6,
    suffix: "",
    label: "Industry playbooks",
    detail: "Tailored starting recommendations",
  },
  {
    value: 6,
    suffix: "",
    label: "Concept portfolio pieces",
    detail: "Labeled samples, not client claims",
  },
];

export function HomeStatsStrip() {
  const reduce = useReducedMotion();

  return (
    <section className="relative z-20 -mt-10 px-4 pb-4 lg:-mt-14 lg:px-6">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="rounded-2xl border border-navy/10 bg-white p-6 shadow-xl shadow-navy/10"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-4xl font-black tracking-tight text-navy md:text-5xl">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 font-bold text-navy">{stat.label}</p>
            <p className="mt-1 text-sm text-body/70">{stat.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
