import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ProposalForm } from "@/components/forms/ProposalForm";
import { HeroVisual } from "@/components/home/HeroVisual";
import { HomeServiceTabs } from "@/components/home/HomeServiceTabs";
import { HomeStatsStrip } from "@/components/home/HomeStatsStrip";
import { ServiceMarquee } from "@/components/home/ServiceMarquee";
import { FadeIn } from "@/components/motion/FadeIn";
import { TextReveal } from "@/components/motion/TextReveal";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { homeFaqs } from "@/content/faqs";
import { getPortfolioProjects } from "@/content/portfolio";
import { getResourceArticles } from "@/content/resources";
import { industryLinks, serviceGroups } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Digital Marketing & Creative Design That Move Your Business Forward",
  description:
    "BrainApp Media connects digital marketing, websites, e-commerce, and brand design into practical growth programs for small and medium businesses.",
};

const goals = [
  {
    title: "Attract the Right Audience",
    body: "SEO, content, and paid media tuned to the searches and feeds your buyers actually use—so traffic reflects fit, not vanity volume.",
    services: [
      { href: "/services/seo", label: "SEO" },
      { href: "/services/content-marketing", label: "Content marketing" },
      { href: "/services/google-ads", label: "Google Ads" },
    ],
  },
  {
    title: "Generate Qualified Leads",
    body: "Landing pages, local SEO, and conversion tracking that connect forms and calls to the campaigns and offers that sourced them.",
    services: [
      { href: "/services/local-seo", label: "Local SEO" },
      { href: "/services/landing-page-design", label: "Landing pages" },
      { href: "/services/conversion-rate-optimization", label: "CRO" },
    ],
  },
  {
    title: "Grow Online Sales",
    body: "Shopify and e-commerce experiences paired with shopping ads, email, and on-site improvements when you sell products online.",
    services: [
      { href: "/services/shopify-development", label: "Shopify" },
      { href: "/services/shopping-ads", label: "Shopping ads" },
      { href: "/services/email-marketing", label: "Email" },
    ],
  },
  {
    title: "Build a Stronger Brand",
    body: "Identity systems and creative templates that keep ads, web, and sales materials visually aligned as you scale channels.",
    services: [
      { href: "/services/brand-identity", label: "Brand identity" },
      { href: "/services/ad-creatives", label: "Ad creatives" },
      { href: "/services/graphic-design", label: "Graphic design" },
    ],
  },
];

const featuredServices = [
  {
    title: "Google Ads",
    href: "/services/google-ads",
    summary:
      "Search, Display, Shopping, and Performance Max campaigns with keyword discipline, negative lists, conversion tracking, and landing-page alignment.",
  },
  {
    title: "Meta Ads",
    href: "/services/meta-ads",
    summary:
      "Facebook and Instagram campaigns with creative testing, lead forms, website conversions, remarketing, and audience strategies documented for your team.",
  },
  {
    title: "SEO",
    href: "/services/seo",
    summary:
      "Technical review, keyword mapping, on-page improvements, content planning, internal linking, and reporting you can tie to pipeline—not just rankings.",
  },
  {
    title: "Website Design",
    href: "/services/website-design",
    summary:
      "Information architecture, UX, responsive layouts, accessibility considerations, and conversion paths that reflect how your buyers decide.",
  },
  {
    title: "Shopify Development",
    href: "/services/shopify-development",
    summary:
      "Store setup, theme customization, product organization, app integration, and storefronts built to merchandise clearly on mobile and desktop.",
  },
  {
    title: "Branding",
    href: "/services/brand-identity",
    summary:
      "Discovery, logo concepts, typography, color, guidelines, and practical templates for marketing and sales touchpoints.",
  },
];

const whyUs = [
  {
    title: "Clear communication",
    body: "Written scopes, plain-language updates, and reporting that explains what changed—not dashboards full of metrics without context.",
  },
  {
    title: "Business-specific planning",
    body: "Strategy starts from your offer, margins, and capacity—not a generic package copied from the last client.",
  },
  {
    title: "Coordinated creative & marketing",
    body: "Ads, landing pages, and brand updates share one message hierarchy so customers experience a single business.",
  },
  {
    title: "Understandable reporting",
    body: "We tie work to agreed goals—leads, sales, engagement—and document tests so you know what to scale or stop.",
  },
];

const processPreview = [
  { step: "Discovery", text: "Goals, audience, constraints, and access requirements clarified before tactics." },
  { step: "Strategy", text: "Channel mix, creative direction, and measurement plan aligned to your business model." },
  { step: "Build & Launch", text: "Design, development, or campaign build with QA, tracking checks, and launch coordination." },
  { step: "Measure & Improve", text: "Reporting, optimization, and iterative tests tied to the metrics you defined upfront." },
];

export default function HomePage() {
  const projects = getPortfolioProjects();
  const resources = getResourceArticles().slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-90"
          aria-hidden
          style={{
            background:
              "radial-gradient(circle at 18% 25%, rgba(255,193,7,0.14), transparent 40%), radial-gradient(circle at 82% 65%, rgba(255,193,7,0.08), transparent 42%)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] motion-safe:animate-[float-x_20s_ease-in-out_infinite] motion-reduce:animate-none" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:px-6 lg:py-24">
          <div>
            <FadeIn>
              <p className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
                <span className="h-2 w-2 rounded-full bg-brand motion-safe:animate-pulse" />
                BrainApp Media
              </p>
            </FadeIn>
            <TextReveal
              as="h1"
              delay={0.1}
              className="mt-5 text-4xl font-black leading-[1.08] tracking-tight md:text-5xl lg:text-[3.15rem]"
              text="Digital Marketing & Creative Design That Move Your Business Forward"
            />
            <FadeIn delay={0.35}>
              <p className="mt-6 max-w-xl text-lg text-white/80">
                Bring your marketing, website, and brand together with strategies built to attract
                the right audience and turn interest into action.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/get-proposal">Get a Free Proposal</Button>
                <Button href="/services" variant="ghost">
                  Explore Our Services
                </Button>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} className="relative">
            <HeroVisual />
          </FadeIn>
        </div>
      </section>

      <ServiceMarquee />
      <HomeStatsStrip />

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <FadeIn>
          <h2 className="text-center text-3xl font-bold text-navy">Business goals we support</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-body/80">
            Each goal maps to services that work together. Your proposal may combine pieces from
            several columns as priorities shift.
          </p>
        </FadeIn>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {goals.map((g, i) => (
            <FadeIn key={g.title} delay={i * 0.05}>
              <li className="card-hover-lift flex h-full list-none flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-navy">{g.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-body/85">{g.body}</p>
                <ul className="mt-4 space-y-1 border-t border-navy/5 pt-4 text-sm">
                  {g.services.map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="font-medium text-electric hover:underline">
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </FadeIn>
          ))}
        </ul>
      </section>

      <section className="bg-light-bg py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-navy">Full-service overview</h2>
            <p className="mt-3 max-w-2xl text-body/80">
              Four practice areas cover how most clients engage us—from always-on marketing to
              one-time builds and brand systems.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {serviceGroups.map((group, i) => (
              <FadeIn key={group.title} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-md">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-brand">
                    {group.title}
                  </h3>
                  <ul className="mt-4 flex-1 space-y-2 text-sm text-body/85">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="hover:text-electric">
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="/services" className="mt-4 text-sm font-semibold text-electric">
                    View category →
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold text-navy">Interactive solutions</h2>
          <p className="mt-3 max-w-2xl text-body/80">
            Choose the situation closest to yours. We will still confirm fit during discovery—tabs
            are a starting point, not a rigid package.
          </p>
        </FadeIn>
        <div className="mt-10">
          <HomeServiceTabs />
        </div>
      </section>

      <section className="border-y border-navy/10 bg-navy py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <FadeIn>
              <h2 className="text-3xl font-bold">Marketing and design, working together</h2>
              <p className="mt-4 leading-relaxed text-white/80">
                Ads send traffic somewhere—usually a landing page or product detail. Brand identity
                sets expectations before the click. Tracking tells you whether the full path worked.
                When those pieces are planned separately, spend leaks and creative drifts.
              </p>
              <p className="mt-4 leading-relaxed text-white/80">
                We coordinate campaign creative, page structure, tag implementation, and post-launch
                tests so improvements compound instead of conflicting.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-white/75">
                <li>• Message hierarchy from ad hook to confirmation page</li>
                <li>• GA4 and Google Tag Manager events documented for key actions</li>
                <li>• Brand templates sized for paid social, email, and web</li>
              </ul>
              <Button href="/our-process" className="mt-8" variant="teal">
                See our process
              </Button>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
                <Image
                  src="/illustrations/hero-marketing.svg"
                  alt="Illustration of connected marketing dashboard, website layout, and creative assets"
                  width={400}
                  height={400}
                  className="mx-auto h-auto w-full max-w-sm"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-navy">Featured services</h2>
          <p className="mt-2 text-body/80">
            Entry points clients often combine. Each page includes deliverables, approach, measurement,
            and service-specific FAQs.
          </p>
        </div>
        <div className="mt-12 space-y-8">
          {featuredServices.map((svc, i) => (
            <FadeIn key={svc.href} delay={i * 0.04}>
              <article
                className={`flex flex-col gap-6 rounded-2xl border border-navy/10 bg-white p-6 md:p-8 lg:flex-row lg:items-center ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-navy">{svc.title}</h3>
                  <p className="mt-3 leading-relaxed text-body/85">{svc.summary}</p>
                  <Link
                    href={svc.href}
                    className="mt-4 inline-block text-sm font-semibold text-electric hover:underline"
                  >
                    View {svc.title} →
                  </Link>
                </div>
                <div
                  className="flex h-32 w-full shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-soft to-brand/30 lg:w-48"
                  aria-hidden
                >
                  <span className="text-4xl font-black text-navy/25">{String(i + 1).padStart(2, "0")}</span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-light-bg py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-navy">Featured portfolio</h2>
              <p className="mt-2 max-w-xl text-body/80">
                Concept projects labeled clearly—illustrating structure, messaging, and channel fit.
                Filter by category or open a detail page for brief and deliverables.
              </p>
            </div>
            <Button href="/portfolio" variant="secondary">
              Full portfolio
            </Button>
          </div>
          <div className="mt-10">
            <PortfolioGrid projects={projects} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <h2 className="text-center text-3xl font-bold text-navy">Why BrainApp Media</h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <li className="list-none rounded-2xl border border-navy/10 p-6">
                <h3 className="font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body/85">{item.body}</p>
              </li>
            </FadeIn>
          ))}
        </ul>
      </section>

      <section className="bg-light-bg py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h2 className="text-3xl font-bold text-navy">Our process</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processPreview.map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.05}>
                <li className="card-hover-lift list-none rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5 transition hover:ring-brand/50">
                  <span className="text-sm font-bold text-brand">Step {i + 1}</span>
                  <h3 className="mt-2 text-lg font-semibold text-navy">{item.step}</h3>
                  <p className="mt-2 text-sm text-body/85">{item.text}</p>
                </li>
              </FadeIn>
            ))}
          </ol>
          <div className="mt-8 text-center">
            <Button href="/our-process" variant="secondary">
              Process details
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <h2 className="text-3xl font-bold text-navy">Industries</h2>
        <p className="mt-3 max-w-2xl text-body/80">
          Vertical playbooks adapt recommended services and measurement to how your customers buy.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industryLinks.map((ind, i) => (
            <FadeIn key={ind.href} delay={i * 0.03}>
              <li className="list-none">
                <Link
                  href={ind.href}
                  className="block rounded-xl border border-navy/10 bg-white px-5 py-4 transition hover:border-electric/40"
                >
                  <span className="font-semibold text-navy">{ind.title}</span>
                  <p className="mt-1 text-sm text-body/75">{ind.description}</p>
                </Link>
              </li>
            </FadeIn>
          ))}
        </ul>
        <Link href="/industries" className="mt-6 inline-block text-sm font-semibold text-electric">
          All industries →
        </Link>
      </section>

      <section className="bg-light-bg py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-navy">Resources</h2>
              <p className="mt-2 max-w-xl text-body/80">
                Educational articles with practical checklists and internal links to related services.
              </p>
            </div>
            <Button href="/resources" variant="secondary">
              Resource library
            </Button>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {resources.map((article, i) => (
              <FadeIn key={article.slug} delay={i * 0.05}>
                <li className="list-none">
                  <Link
                    href={`/resources/${article.slug}`}
                    className="block h-full rounded-2xl border border-navy/10 bg-white p-6 transition hover:shadow-md"
                  >
                    <p className="text-xs font-bold uppercase text-brand">
                      {article.readMinutes} min read
                    </p>
                    <h3 className="mt-2 font-semibold text-navy">{article.title}</h3>
                    <p className="mt-2 text-sm text-body/80">{article.excerpt}</p>
                  </Link>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 lg:px-6">
        <h2 className="text-center text-3xl font-bold text-navy">FAQs</h2>
        <div className="mt-10">
          <Accordion items={homeFaqs} />
        </div>
        <p className="mt-6 text-center text-sm text-body/75">
          <Link href="/faqs" className="font-semibold text-electric hover:underline">
            View all FAQs
          </Link>
        </p>
      </section>

      <section className="bg-navy py-16 text-white" id="proposal">
        <div className="mx-auto max-w-3xl px-4 lg:px-6">
          <h2 className="text-center text-3xl font-bold">
            Tell Us Where You Want Your Business to Go
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-white/75">
            Share goals, services of interest, and timing. After you submit, we review your details
            and follow up with clarifying questions before sending a tailored scope—no fixed response
            time is guaranteed until your team configures intake workflows.
          </p>
          <div className="mt-10 rounded-2xl bg-white p-6 text-body shadow-xl md:p-8">
            <ProposalForm compact />
          </div>
        </div>
      </section>
    </>
  );
}
