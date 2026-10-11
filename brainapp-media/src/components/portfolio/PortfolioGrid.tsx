"use client";

import clsx from "clsx";
import Link from "next/link";
import { useMemo, useState } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { portfolioCategoryLabels } from "@/content/portfolio";
import type { PortfolioProject } from "@/content/types";

type CategoryFilter = PortfolioProject["category"] | "all";

const filters: CategoryFilter[] = [
  "all",
  "websites",
  "ecommerce",
  "branding",
  "ad-creatives",
];

function ProjectVisual({ category }: { category: PortfolioProject["category"] }) {
  const styles: Record<PortfolioProject["category"], string> = {
    websites: "from-electric/20 to-navy/10",
    ecommerce: "from-teal/25 to-electric/10",
    branding: "from-amber-100 to-teal/15",
    "ad-creatives": "from-fuchsia-100 to-electric/15",
  };

  return (
    <div
      className={clsx(
        "relative flex aspect-[4/3] items-end overflow-hidden rounded-t-2xl bg-gradient-to-br p-4",
        styles[category],
      )}
      aria-hidden
    >
      <div className="absolute inset-4 rounded-lg border border-white/40 bg-white/70 shadow-inner backdrop-blur-sm">
        <div className="h-3 w-full rounded-t-lg bg-navy/10" />
        <div className="space-y-2 p-3">
          <div className="h-2 w-2/3 rounded bg-navy/15" />
          <div className="h-2 w-1/2 rounded bg-navy/10" />
          <div className="mt-4 h-8 w-24 rounded-md bg-electric/30" />
        </div>
      </div>
    </div>
  );
}

export function PortfolioGrid({ projects }: { projects: PortfolioProject[] }) {
  const [active, setActive] = useState<CategoryFilter>("all");

  const filtered = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((p) => p.category === active);
  }, [active, projects]);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter portfolio by category"
      >
        {filters.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={clsx(
              "rounded-full px-4 py-2 text-sm font-semibold transition",
              active === cat
                ? "bg-electric text-white shadow-sm"
                : "bg-light-bg text-body/80 hover:text-navy",
            )}
            aria-pressed={active === cat}
          >
            {portfolioCategoryLabels[cat]}
          </button>
        ))}
      </div>

      <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <li key={project.slug} className="list-none">
            <FadeIn delay={i * 0.04}>
            <Link
              href={`/portfolio/${project.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <ProjectVisual category={project.category} />
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-teal">
                  {portfolioCategoryLabels[project.category]}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-navy group-hover:text-electric">
                  {project.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-body/80">
                  {project.summary}
                </p>
                <span className="mt-4 text-sm font-semibold text-electric">View concept →</span>
              </div>
            </Link>
            </FadeIn>
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <p className="mt-8 text-body/70">No projects in this category yet.</p>
      )}
    </div>
  );
}
