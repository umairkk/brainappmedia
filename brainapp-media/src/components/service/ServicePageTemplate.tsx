import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FadeIn } from "@/components/motion/FadeIn";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import type { ServiceContent } from "@/content/types";
import { getServiceBySlug } from "@/content/services";

export function ServicePageTemplate({ content }: { content: ServiceContent }) {
  const related = content.relatedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean);

  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-20">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: content.title },
            ]}
          />
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-wider text-teal">
              BrainApp Media Services
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
              {content.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/80">{content.heroSubtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/get-proposal">Get a Free Proposal</Button>
              <Button href="/contact" variant="secondary" className="border-white/20 bg-transparent text-white hover:bg-white/10">
                Contact us
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <div className="prose-bam max-w-3xl">
          {content.intro.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
          <h2>Who this service helps</h2>
          <p>{content.whoItHelps}</p>
          <h2>Business problems we address</h2>
          <ul>
            {content.problems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-light-bg py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-navy">What is included</h2>
            <p className="mt-3 max-w-2xl text-body/80">
              Deliverables are tailored during discovery. The list below reflects typical scope for{" "}
              {content.title.toLowerCase()} engagements.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {content.deliverables.map((d, i) => (
              <FadeIn key={d.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <h3 className="text-lg font-semibold text-navy">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body/85">{d.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <h2 className="text-3xl font-bold text-navy">Our approach</h2>
        <ol className="mt-8 space-y-6">
          {content.approach.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.06}>
              <li className="flex gap-4 rounded-2xl border border-navy/10 p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-electric text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-navy">{step.title}</h3>
                  <p className="mt-2 text-body/85 leading-relaxed">{step.body}</p>
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>
        {content.platforms && (
          <>
            <h2 className="mt-14 text-2xl font-bold text-navy">Platforms & capabilities</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-body/85">{content.platforms}</p>
          </>
        )}
        <h2 className="mt-14 text-2xl font-bold text-navy">How we measure progress</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-body/85">{content.measurement}</p>
        {content.conceptNote && (
          <p className="mt-6 max-w-3xl rounded-xl border border-teal/30 bg-teal/5 p-4 text-sm text-body/85">
            {content.conceptNote}
          </p>
        )}
        <h2 className="mt-14 text-2xl font-bold text-navy">Scope, budget, and timeline factors</h2>
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-6 text-body/85">
          {content.scopeFactors.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </section>

      <section className="bg-light-bg py-14">
        <div className="mx-auto max-w-3xl px-4 lg:px-6">
          <h2 className="text-3xl font-bold text-navy">{content.title} FAQs</h2>
          <div className="mt-8">
            <Accordion items={content.faqs.map((f) => ({ question: f.question, answer: f.answer }))} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <h2 className="text-2xl font-bold text-navy">Related services</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {related.map(
            (svc) =>
              svc && (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="rounded-full border border-navy/15 bg-white px-4 py-2 text-sm font-medium text-navy transition hover:border-electric hover:text-electric"
                >
                  {svc.title}
                </Link>
              ),
          )}
        </div>
      </section>

      <section className="bg-navy py-14 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-6">
          <h2 className="text-3xl font-bold">Ready for a tailored proposal?</h2>
          <p className="mt-4 text-white/75">
            Share your goals and we will outline recommended services, milestones, and reporting—without
            locking you into packages that do not fit.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button href="/get-proposal">Get a Free Proposal</Button>
          </div>
        </div>
      </section>
    </>
  );
}
