"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { CountUp } from "@/components/motion/CountUp";

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
  return (
    <section className="relative bg-white py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
        {stats.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 0.08}>
            <div className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-light-bg p-6 transition duration-300 hover:border-brand/50 hover:shadow-lg hover:shadow-brand/10">
              <div
                className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand/20 opacity-0 transition group-hover:opacity-100 animate-pulse-ring motion-reduce:animate-none"
                aria-hidden
              />
              <p className="text-4xl font-black tracking-tight text-navy">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 font-semibold text-navy">{stat.label}</p>
              <p className="mt-1 text-sm text-body/70">{stat.detail}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
