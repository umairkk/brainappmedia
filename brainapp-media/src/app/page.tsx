import Link from "next/link";
import type { Metadata } from "next";
import { HomeCompareSection } from "@/components/home/HomeCompareSection";
import { HomeConceptShowcase } from "@/components/home/HomeConceptShowcase";
import { HomeEditorialSpotlight } from "@/components/home/HomeEditorialSpotlight";
import { HomeFinalCta } from "@/components/home/HomeFinalCta";
import { HomeGrowthEngine } from "@/components/home/HomeGrowthEngine";
import { HomeGrowthPillars } from "@/components/home/HomeGrowthPillars";
import { HomeMidCta } from "@/components/home/HomeMidCta";
import { HomeOutcomeCards } from "@/components/home/HomeOutcomeCards";
import { HomePartnerSection } from "@/components/home/HomePartnerSection";
import { HomeProofBand } from "@/components/home/HomeProofBand";
import { HomeServiceTabs } from "@/components/home/HomeServiceTabs";
import { HomeStatsStrip } from "@/components/home/HomeStatsStrip";
import { HeroVisual } from "@/components/home/HeroVisual";
import { IndustryCardsAnimated } from "@/components/home/IndustryCardsAnimated";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { resourceCoverImages } from "@/data/home-images";
import { FadeIn } from "@/components/motion/FadeIn";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { TextReveal } from "@/components/motion/TextReveal";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { homeFaqs } from "@/content/faqs";
import { getPortfolioProjects } from "@/content/portfolio";
import { getResourceArticles } from "@/content/resources";
import { industryLinks } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Digital Marketing & Creative Design That Move Your Business Forward",
  description:
    "BrainApp Media connects digital marketing, websites, e-commerce, and brand design into practical growth programs for small and medium businesses.",
};

export default function HomePage() {
  const projects = getPortfolioProjects();
  const resources = getResourceArticles().slice(0, 3);

  return (
    <>
      {/* Hero — WebFX-style split with strong headline + visual */}
      <section className="relative overflow-hidden bg-navy pb-20 pt-12 text-white lg:pb-28 lg:pt-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-90"
          aria-hidden
          style={{
            background:
              "radial-gradient(circle at 18% 25%, rgba(255,193,7,0.16), transparent 42%), radial-gradient(circle at 82% 65%, rgba(255,193,7,0.08), transparent 45%)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-6">
          <div>
            <FadeIn>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand">
                BrainApp Media
              </p>
            </FadeIn>
            <TextReveal
              as="h1"
              delay={0.08}
              className="mt-4 text-4xl font-black leading-[1.06] tracking-tight md:text-5xl lg:text-[3.35rem]"
              text="Digital Marketing & Creative Design That Move Your Business Forward"
            />
            <FadeIn delay={0.32}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
                For businesses that need marketing, websites, and brand design to work as one
                system—not three vendors pulling in different directions.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/get-proposal">Get a Free Proposal</Button>
                <Button href="/services" variant="ghost">
                  Explore Our Services
                </Button>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.18} className="relative lg:pl-4">
            <HeroVisual />
          </FadeIn>
        </div>
      </section>

      <HomeStatsStrip />
      <HomeProofBand />
      <HomeOutcomeCards />
      <HomeCompareSection />
      <HomeGrowthPillars />
      <HomeMidCta />
      <HomeConceptShowcase projects={projects} />
      <HomeEditorialSpotlight />
      <HomeGrowthEngine />

      <section className="bg-light-bg py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Solutions</p>
            <h2 className="mt-3 text-3xl font-black text-navy md:text-4xl">
              Where should you start?
            </h2>
            <p className="mt-4 max-w-2xl text-body/80">
              Choose the situation closest to yours. Discovery confirms fit—tabs are a starting
              point, not a fixed package.
            </p>
          </FadeIn>
          <div className="mt-10">
            <HomeServiceTabs />
          </div>
        </div>
      </section>

      <HomePartnerSection />

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-24">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Industries</p>
          <h2 className="mt-3 text-3xl font-black text-navy md:text-4xl">
            Playbooks for how your customers buy
          </h2>
          <p className="mt-4 max-w-2xl text-body/80">
            Recommended services and measurement adapt to your vertical—not a generic agency
            checklist.
          </p>
        </FadeIn>
        <IndustryCardsAnimated items={industryLinks} />
        <Link href="/industries" className="mt-8 inline-block text-sm font-bold text-navy hover:text-brand">
          All industries →
        </Link>
      </section>

      <section className="bg-light-bg py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Process</p>
            <h2 className="mt-3 text-3xl font-black text-navy md:text-4xl">
              From discovery to measurable improvement
            </h2>
          </FadeIn>
          <div className="mt-12">
            <ProcessTimeline />
          </div>
          <div className="mt-10 text-center">
            <Button href="/our-process" variant="secondary">
              Full process details
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Insights</p>
              <h2 className="mt-3 text-3xl font-black text-navy md:text-4xl">
                Practical guides—not trend filler
              </h2>
              <p className="mt-4 max-w-xl text-body/80">
                Original articles with checklists and links to related services. No invented
                statistics or authors.
              </p>
            </div>
            <Button href="/resources" variant="secondary">
              Resource library
            </Button>
          </div>
          <StaggerChildren className="mt-12 grid gap-8 md:grid-cols-3">
            {resources.map((article) => {
              const cover = resourceCoverImages[article.slug];
              return (
                <StaggerItem key={article.slug}>
                  <Link
                    href={`/resources/${article.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition hover:shadow-lg"
                  >
                    {cover && (
                      <ImageReveal
                        src={cover.src}
                        alt={cover.alt}
                        className="aspect-[16/10] rounded-none"
                      />
                    )}
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-xs font-bold uppercase text-brand">
                        {article.readMinutes} min read
                      </p>
                      <h3 className="mt-2 text-lg font-bold text-navy group-hover:text-brand">
                        {article.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-body/80">{article.excerpt}</p>
                      <span className="mt-4 text-sm font-bold text-navy group-hover:text-brand">
                        Read article →
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 lg:px-6">
        <h2 className="text-center text-3xl font-black text-navy">FAQs</h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-body/75">
          Common questions about working with BrainApp Media.
        </p>
        <div className="mt-10">
          <Accordion items={homeFaqs} />
        </div>
        <p className="mt-6 text-center text-sm text-body/75">
          <Link href="/faqs" className="font-bold text-navy hover:text-brand">
            View all FAQs
          </Link>
        </p>
      </section>

      <HomeFinalCta />
    </>
  );
}
