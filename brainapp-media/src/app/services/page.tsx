import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { getAllServices } from "@/content/services";
import { serviceGroups } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Digital marketing, paid advertising, websites, e-commerce, and branding services from BrainApp Media—scoped to your goals.",
};

export default function ServicesIndexPage() {
  const all = getAllServices();

  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-20">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">Services</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Pick a capability or combine channels into one program. Every engagement starts with
            discovery and a written proposal—no opaque package walls.
          </p>
          <div className="mt-8">
            <Button href="/get-proposal">Get a Free Proposal</Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        {serviceGroups.map((group) => (
          <div key={group.title} className="mb-14 last:mb-0">
            <FadeIn>
              <h2 className="text-2xl font-bold text-navy">{group.title}</h2>
            </FadeIn>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.links.map((link, i) => {
                const svc = all.find((s) => s.slug === link.href.replace("/services/", ""));
                return (
                  <FadeIn key={link.href} delay={i * 0.03}>
                    <li className="list-none">
                      <Link
                        href={link.href}
                        className="block h-full rounded-2xl border border-navy/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-electric/30 hover:shadow-md"
                      >
                        <h3 className="font-semibold text-navy">{link.title}</h3>
                        <p className="mt-2 text-sm text-body/80">
                          {svc?.heroSubtitle ?? link.description}
                        </p>
                        <span className="mt-3 inline-block text-sm font-semibold text-electric">
                          Learn more →
                        </span>
                      </Link>
                    </li>
                  </FadeIn>
                );
              })}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
