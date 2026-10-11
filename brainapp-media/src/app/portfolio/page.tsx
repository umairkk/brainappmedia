import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { getPortfolioProjects } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Concept portfolio projects from BrainApp Media—websites, e-commerce, branding, and ad creative illustrating our approach.",
};

export default function PortfolioPage() {
  const projects = getPortfolioProjects();

  return (
    <>
      <section className="bg-light-bg border-b border-navy/10">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Portfolio" }]} />
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-navy md:text-5xl">
            Portfolio
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-body/80">
            Concept work showing structure, messaging, and channel fit. Filter by category or open a
            project for decisions, deliverables, and approach notes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <PortfolioGrid projects={projects} />
      </section>
    </>
  );
}
