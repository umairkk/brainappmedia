"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ImageReveal } from "@/components/motion/ImageReveal";

const steps = [
  {
    step: "Discovery",
    text: "Goals, audience, constraints, and access requirements clarified before tactics.",
    image: "/images/sections/process-notes.jpg",
    alt: "Discovery workshop notes and goal setting",
  },
  {
    step: "Strategy",
    text: "Channel mix, creative direction, and measurement plan aligned to your business model.",
    image: "/images/sections/strategy-planning.jpg",
    alt: "Strategy planning session",
  },
  {
    step: "Build & Launch",
    text: "Design, development, or campaign build with QA, tracking checks, and launch coordination.",
    image: "/images/sections/web-design.jpg",
    alt: "Design and development in progress",
  },
  {
    step: "Measure & Improve",
    text: "Reporting, optimization, and iterative tests tied to the metrics you defined upfront.",
    image: "/images/sections/audience-analytics.jpg",
    alt: "Reviewing performance analytics after launch",
  },
];

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative">
      <div
        className="absolute left-4 top-0 hidden h-full w-0.5 origin-top bg-navy/10 lg:left-1/2 lg:block lg:-translate-x-1/2"
        aria-hidden
      >
        {!reduce && (
          <motion.div
            className="h-full w-full origin-top bg-brand"
            style={{ scaleY: lineScale }}
          />
        )}
      </div>
      <ol className="space-y-12 lg:space-y-16">
        {steps.map((item, i) => (
          <li
            key={item.step}
            className={`relative grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
              i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
            }`}
          >
            <motion.div
              initial={reduce ? false : { opacity: 0, x: i % 2 === 0 ? -32 : 32 }}
              whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-10 lg:pl-0"
            >
              <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-black text-navy lg:hidden">
                {i + 1}
              </span>
              <span className="text-sm font-bold text-brand">Step {i + 1}</span>
              <h3 className="mt-2 text-2xl font-bold text-navy">{item.step}</h3>
              <p className="mt-3 leading-relaxed text-body/85">{item.text}</p>
            </motion.div>
            <ImageReveal
              src={item.image}
              alt={item.alt}
              className="aspect-[4/3] shadow-lg ring-1 ring-navy/10"
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
