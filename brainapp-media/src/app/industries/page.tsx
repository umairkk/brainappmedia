import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { getAllIndustries } from "@/content/industries";
import { industryLinks } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Marketing and web programs tailored to e-commerce, home services, real estate, professional services, hospitality, and authors.",
};

export default function IndustriesIndexPage() {
  const industries = getAllIndustries();

  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-20">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries" }]} />
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">Industries</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Strategy and execution adapt to how your customers buy—not a one-size template borrowed
            from unrelated verticals.
          </p>
          <div className="mt-8">
            <Button href="/get-proposal">Get a Free Proposal</Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industryLinks.map((link, i) => {
            const data = industries.find((ind) => `/industries/${ind.slug}` === link.href);
            return (
              <FadeIn key={link.href} delay={i * 0.04}>
                <li className="list-none">
                  <Link
                    href={link.href}
                    className="flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <h2 className="text-xl font-semibold text-navy">{link.title}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-body/85">
                      {data?.intro[0] ?? link.description}
                    </p>
                    <span className="mt-4 text-sm font-semibold text-electric">Explore →</span>
                  </Link>
                </li>
              </FadeIn>
            );
          })}
        </ul>
      </section>
    </>
  );
}
