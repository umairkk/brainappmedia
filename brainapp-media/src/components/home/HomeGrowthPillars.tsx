"use client";

import clsx from "clsx";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const pillars = [
  {
    id: "execution",
    label: "Expert execution",
    title: "Channel work done with clear ownership",
    bullets: [
      "Search, paid social, web, and creative handled by specialists who understand each platform’s constraints.",
      "Campaign and site changes documented so your team knows what shipped and why.",
      "Launch checklists cover tracking, QA, and approvals before spend scales.",
    ],
    cta: { href: "/services", label: "Browse services" },
  },
  {
    id: "integration",
    label: "Connected delivery",
    title: "Marketing, site, and brand in one rhythm",
    bullets: [
      "Landing pages, ad creative, and identity updates planned together—not in competing silos.",
      "UTMs, forms, and CRM handoffs defined when lead quality matters to your sales process.",
      "E-commerce, email, and remarketing aligned when you sell products online.",
    ],
    cta: { href: "/our-process", label: "How we work" },
  },
  {
    id: "measurement",
    label: "Measurement & improvement",
    title: "Reporting tied to goals you define",
    bullets: [
      "Dashboards and summaries explain what changed—not raw exports without narrative.",
      "Tests change one lever at a time where possible so results are interpretable.",
      "Recommendations reference your capacity, margins, and seasonality—not generic best practices alone.",
    ],
    cta: { href: "/resources/leads-conversion-roas", label: "Read on metrics" },
  },
];

export function HomeGrowthPillars() {
  const [active, setActive] = useState(pillars[0].id);
  const reduce = useReducedMotion();
  const current = pillars.find((p) => p.id === active) ?? pillars[0];

  return (
    <section className="bg-navy py-16 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">How we deliver</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Built to power real business growth
          </h2>
          <p className="mt-4 text-white/75">
            Every engagement combines disciplined execution, connected creative and marketing, and
            measurement you can review with your team—without invented platform certifications or
            guaranteed ROAS claims.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-2 border-b border-white/10 pb-2">
          {pillars.map((pillar) => (
            <button
              key={pillar.id}
              type="button"
              onClick={() => setActive(pillar.id)}
              className={clsx(
                "relative rounded-t-lg px-4 py-3 text-sm font-bold transition",
                active === pillar.id ? "text-navy" : "text-white/70 hover:text-white",
              )}
            >
              {active === pillar.id && !reduce && (
                <motion.span
                  layoutId="pillar-tab"
                  className="absolute inset-0 rounded-t-lg bg-brand"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
              {active === pillar.id && reduce && (
                <span className="absolute inset-0 rounded-t-lg bg-brand" />
              )}
              <span className="relative">{pillar.label}</span>
            </button>
          ))}
        </div>

        <motion.div
          key={current.id}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid gap-10 rounded-b-2xl rounded-tr-2xl border border-white/10 bg-white/5 p-8 lg:grid-cols-2 lg:p-12"
        >
          <div>
            <h3 className="text-2xl font-bold">{current.title}</h3>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-white/85">
              {current.bullets.map((b) => (
                <li key={b.slice(0, 30)} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
            <Button href={current.cta.href} className="mt-8">
              {current.cta.label}
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 rounded-full bg-brand/20 blur-3xl" aria-hidden />
              <div className="relative grid grid-cols-2 gap-4">
                {["SEO & content", "Paid media", "Web & stores", "Brand & creative"].map((label, i) => (
                  <motion.div
                    key={label}
                    className="rounded-xl border border-white/15 bg-navy/80 p-4 text-center text-sm font-semibold"
                    initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                    whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <span className="mb-2 block text-2xl font-black text-brand">{i + 1}</span>
                    {label}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
