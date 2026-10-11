import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { portfolioCategoryLabels } from "@/content/portfolio";
import type { PortfolioProject } from "@/content/types";

export function PortfolioProjectTemplate({ project }: { project: PortfolioProject }) {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-20">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Portfolio", href: "/portfolio" },
              { label: project.title },
            ]}
          />
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-wider text-teal">
              {portfolioCategoryLabels[project.category]} · Concept project
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/80">{project.summary}</p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <div className="prose-bam max-w-3xl">
          <h2>Brief</h2>
          <p>{project.brief}</p>
          <h2>Audience</h2>
          <p>{project.audience}</p>
          <h2>Key decisions</h2>
          <ul>
            {project.decisions.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <h2>Deliverables</h2>
          <ul>
            {project.deliverables.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <h2>Approach</h2>
          <ol>
            {project.approach.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="rounded-xl border border-teal/30 bg-teal/5 p-4 text-sm">
            This portfolio entry is a concept project illustrating BrainApp Media&apos;s process and
            deliverable quality. Client names and performance metrics can be added when you have
            approved case studies to publish.
          </p>
        </div>
      </section>

      <section className="bg-light-bg py-14">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-6">
          <h2 className="text-2xl font-bold text-navy">Want work like this for your brand?</h2>
          <p className="mt-3 text-body/80">
            Share your goals and we will outline scope, timeline, and recommended services.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/get-proposal">Get a Free Proposal</Button>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-lg border border-navy/15 bg-white px-5 py-2.5 text-sm font-semibold text-navy hover:border-electric hover:text-electric"
            >
              Back to portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
