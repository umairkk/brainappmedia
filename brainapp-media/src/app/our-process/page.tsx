import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "Discovery, proposal, kickoff, production, launch, and optimization—how BrainApp Media runs marketing and web projects.",
};

const steps = [
  {
    title: "Discovery & goals",
    body: "We clarify audience, offers, constraints, and success metrics. Existing analytics, ads, and brand assets are reviewed so recommendations respect what already works.",
  },
  {
    title: "Proposal & scope",
    body: "You receive a written scope with milestones, deliverables, communication rhythm, and investment outline. Ad platform spend is separated from management and creative unless explicitly bundled.",
  },
  {
    title: "Kickoff & access",
    body: "Stakeholders, tools, and approvals are confirmed. A shared work plan lists what we need from you—brand files, product data, legal disclaimers—and when.",
  },
  {
    title: "Production & reviews",
    body: "Design, development, campaigns, or content move through agreed review rounds. Feedback is tied to criteria from discovery so revisions stay purposeful.",
  },
  {
    title: "Launch & QA",
    body: "Tracking, forms, feeds, and live URLs are tested on real devices. Launch checklists cover SEO basics, redirects, and campaign alignment.",
  },
  {
    title: "Optimize & report",
    body: "Reporting explains changes, tests, and next steps. Ongoing programs revisit budgets, creative, and site improvements on a cadence defined in your proposal.",
  },
];

export default function OurProcessPage() {
  return (
    <>
      <section className="bg-light-bg border-b border-navy/10">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Our Process" }]} />
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-navy md:text-5xl">
            Our process
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-body/80">
            Predictable phases without bureaucracy. You always know what phase we are in, what is
            blocked, and what decision is needed next.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <ol className="space-y-6">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.05}>
              <li className="flex gap-4 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-electric text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h2 className="text-xl font-semibold text-navy">{step.title}</h2>
                  <p className="mt-2 leading-relaxed text-body/85">{step.body}</p>
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>
        <div className="mt-12 text-center">
          <Button href="/get-proposal">Start with a proposal</Button>
        </div>
      </section>
    </>
  );
}
