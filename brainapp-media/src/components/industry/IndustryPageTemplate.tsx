import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FadeIn } from "@/components/motion/FadeIn";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import type { IndustryContent } from "@/content/types";
import { getServiceBySlug } from "@/content/services";

export function IndustryPageTemplate({ content }: { content: IndustryContent }) {
  const recommended = content.recommended
    .map((r) => ({ ...r, service: getServiceBySlug(r.serviceSlug) }))
    .filter((r) => r.service);

  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-20">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: content.title },
            ]}
          />
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-wider text-teal">
              Industries we serve
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
              {content.title}
            </h1>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/get-proposal">Get a Free Proposal</Button>
              <Button
                href="/contact"
                variant="secondary"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                Contact us
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <div className="prose-bam max-w-3xl">
          {content.intro.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
          <h2>Common challenges</h2>
          <ul>
            {content.challenges.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-light-bg py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-navy">Recommended services</h2>
            <p className="mt-3 max-w-2xl text-body/80">
              Every industry engagement is scoped individually. These services frequently align with{" "}
              {content.title.toLowerCase()} goals based on patterns we see in discovery.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {recommended.map((rec, i) => (
              <FadeIn key={rec.serviceSlug} delay={i * 0.05}>
                <Link
                  href={`/services/${rec.serviceSlug}`}
                  className="block h-full rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-electric/30 hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold text-navy">{rec.service?.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body/85">{rec.reason}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-electric">
                    View service →
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <h2 className="text-3xl font-bold text-navy">Example approach</h2>
        <ol className="mt-8 list-decimal space-y-4 pl-6 text-body/90">
          {content.exampleApproach.map((step) => (
            <li key={step} className="leading-relaxed">
              {step}
            </li>
          ))}
        </ol>

        <h2 className="mt-14 text-2xl font-bold text-navy">Conversion paths</h2>
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-6 text-body/85">
          {content.conversionPaths.map((path) => (
            <li key={path}>{path}</li>
          ))}
        </ul>

        <h2 className="mt-14 text-2xl font-bold text-navy">What we measure</h2>
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-6 text-body/85">
          {content.measurement.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </section>

      <section className="bg-light-bg py-14">
        <div className="mx-auto max-w-3xl px-4 lg:px-6">
          <h2 className="text-3xl font-bold text-navy">{content.title} FAQs</h2>
          <div className="mt-8">
            <Accordion
              items={content.faqs.map((f) => ({
                question: f.question,
                answer: f.answer,
              }))}
            />
          </div>
        </div>
      </section>

      <section className="bg-navy py-14 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-6">
          <h2 className="text-3xl font-bold">Planning growth in {content.title.toLowerCase()}?</h2>
          <p className="mt-4 text-white/75">
            Tell us about your market, timeline, and current marketing stack. We will recommend a
            practical sequence—not a generic package list.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button href="/get-proposal">Get a Free Proposal</Button>
          </div>
        </div>
      </section>
    </>
  );
}
