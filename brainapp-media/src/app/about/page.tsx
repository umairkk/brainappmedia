import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FadeIn } from "@/components/motion/FadeIn";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "BrainApp Media helps SMBs connect marketing, websites, and brand design with clear communication and actionable reporting.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-20">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">About BrainApp Media</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            We are a marketing and creative partner for businesses that need web, paid media, and
            brand work to pull in the same direction—not compete for credit.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="prose-bam max-w-3xl">
          <FadeIn>
            <p>
              Most growing companies juggle a website vendor, an ads freelancer, and a designer who
              never talk to each other. Messaging drifts. Landing pages do not match campaigns.
              Reporting lives in silos. BrainApp Media exists to reduce that friction with integrated
              planning and accountable delivery.
            </p>
            <p>
              We serve small and medium businesses across e-commerce, local services, professional
              firms, hospitality, real estate, and author launches. Scope ranges from focused
              projects—such as a Shopify build or local SEO program—to ongoing management across
              multiple channels.
            </p>
            <h2>How we work with clients</h2>
            <p>
              Engagements start with discovery and a written proposal that lists milestones,
              assumptions, and reporting—not a black-box retainer. You know who is doing the work,
              what we need from you, and how we will decide if progress is on track.
            </p>
            <p>
              We do not invent client logos, awards, or performance claims for this site. Portfolio
              entries are concept projects that show our thinking; your live case studies can replace
              or supplement them when ready.
            </p>
            <h2>What we are building toward</h2>
            <p>
              This site is a foundation you can extend with your contact details, social profiles,
              reviews, and CRM-connected forms. Our job is to make the strategy, content, and
              structure credible from day one so you can launch confidently.
            </p>
          </FadeIn>
          <div className="mt-10 flex flex-wrap gap-3 not-prose">
            <Button href="/our-process">See our process</Button>
            <Button href="/get-proposal" variant="secondary">
              Get a Free Proposal
            </Button>
            <Link href="/contact" className="inline-flex items-center text-sm font-semibold text-navy hover:text-brand">
              Contact →
            </Link>
          </div>
          </div>
          <FadeIn delay={0.1}>
            <ImageReveal
              src="/images/sections/workspace.jpg"
              alt="Collaborative workspace for marketing and design projects"
              className="aspect-[4/5] lg:sticky lg:top-24"
            />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
