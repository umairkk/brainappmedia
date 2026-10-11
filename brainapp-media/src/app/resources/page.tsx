import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FadeIn } from "@/components/motion/FadeIn";
import { getResourceArticles } from "@/content/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides on paid media, conversion, local SEO, Shopify prep, branding consistency, and marketing measurement from BrainApp Media.",
};

export default function ResourcesPage() {
  const articles = getResourceArticles();

  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-20">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources" }]} />
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Resource library
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Practical articles you can share with your team—no filler stats, just frameworks that
            match how we plan client work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <ul className="grid gap-6 md:grid-cols-2">
          {articles.map((article, i) => (
            <FadeIn key={article.slug} delay={i * 0.04}>
              <li className="list-none">
                <Link
                  href={`/resources/${article.slug}`}
                  className="block h-full rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-electric/30 hover:shadow-md"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-teal">
                    {article.readMinutes} min read
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-navy">{article.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-body/85">{article.excerpt}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-electric">
                    Read article →
                  </span>
                </Link>
              </li>
            </FadeIn>
          ))}
        </ul>
      </section>
    </>
  );
}
