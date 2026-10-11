"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { PortfolioProject } from "@/content/types";
import { portfolioCategoryLabels } from "@/content/portfolio";

const coverByCategory: Record<PortfolioProject["category"], string> = {
  websites: "/images/sections/web-design.jpg",
  ecommerce: "/images/sections/ecommerce-shopping.jpg",
  branding: "/images/sections/brand-design.jpg",
  "ad-creatives": "/images/sections/social-ads.jpg",
};

export function HomeConceptShowcase({ projects }: { projects: PortfolioProject[] }) {
  const reduce = useReducedMotion();
  const featured = projects.slice(0, 4);

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Portfolio</p>
            <h2 className="mt-3 text-3xl font-black text-navy md:text-4xl">
              Concept work for growth-focused businesses
            </h2>
            <p className="mt-4 text-body/80">
              Sample projects illustrate structure, messaging, and channel fit. Each is labeled as a
              concept—no invented clients, testimonials, or performance metrics.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="text-sm font-bold text-navy hover:text-brand"
          >
            View full portfolio →
          </Link>
        </div>

        <div className="mt-10 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {featured.map((project, i) => (
            <motion.article
              key={project.slug}
              className="w-[min(100%,340px)] shrink-0 snap-start overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-md"
              initial={reduce ? false : { opacity: 0, x: 40 }}
              whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={coverByCategory[project.category]}
                  alt={`Concept project preview: ${project.title}`}
                  fill
                  className="object-cover"
                  sizes="340px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-[10px] font-black uppercase tracking-wide text-navy">
                  Concept project
                </span>
                <p className="absolute bottom-4 left-4 right-4 text-lg font-bold text-white">
                  {project.title}
                </p>
              </div>
              <div className="p-5">
                <p className="text-xs font-bold uppercase text-brand">
                  {portfolioCategoryLabels[project.category]}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-body/85 line-clamp-3">
                  {project.summary}
                </p>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="mt-4 inline-block text-sm font-bold text-navy hover:text-brand"
                >
                  View concept details →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
