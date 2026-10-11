import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import type { ResourceArticle } from "@/content/types";
import { getServiceBySlug } from "@/content/services";

export function ResourceArticleLayout({ article }: { article: ResourceArticle }) {
  const related = getServiceBySlug(article.relatedServiceSlug);

  return (
    <>
      <section className="bg-light-bg border-b border-navy/10">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:py-16">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: article.title },
            ]}
          />
          <FadeIn>
            <p className="text-sm font-semibold text-teal">{article.readMinutes} min read</p>
            <h1 className="mt-2 max-w-3xl text-4xl font-bold tracking-tight text-navy md:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-body/80">{article.excerpt}</p>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-4 lg:order-2">
            <nav
              aria-label="Table of contents"
              className="sticky top-24 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm"
            >
              <h2 className="text-sm font-bold uppercase tracking-wider text-navy">
                On this page
              </h2>
              <ol className="mt-4 space-y-2 text-sm">
                {article.sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-body/80 transition hover:text-electric"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
              {related && (
                <div className="mt-8 border-t border-navy/10 pt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-teal">
                    Related service
                  </p>
                  <Link
                    href={`/services/${related.slug}`}
                    className="mt-2 block font-semibold text-navy hover:text-electric"
                  >
                    {related.title} →
                  </Link>
                </div>
              )}
            </nav>
          </aside>

          <article className="prose-bam lg:col-span-8 lg:order-1 max-w-none">
            {article.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2>{section.heading}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </section>
            ))}
          </article>
        </div>
      </div>

      <section className="bg-navy py-14 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-6">
          <h2 className="text-2xl font-bold">Want help applying this?</h2>
          <p className="mt-3 text-white/75">
            Share your context and we will map recommendations to your stack, timeline, and goals.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/get-proposal">Get a Free Proposal</Button>
            <Button href="/resources" variant="ghost">
              More resources
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
