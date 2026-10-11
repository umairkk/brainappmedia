import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Button } from "@/components/ui/Button";

export function HomeEditorialSpotlight() {
  return (
    <section className="bg-light-bg py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Resources</p>
            <h2 className="mt-3 text-3xl font-black text-navy md:text-4xl">
              Search and discovery keep changing—your plan should adapt
            </h2>
            <p className="mt-5 leading-relaxed text-body/85">
              Buyers use search, maps, social feeds, and AI-assisted tools to shortlist providers.
              Local SEO, useful content, and landing pages that answer real questions still matter—
              especially when paid costs rise or tracking gets noisier.
            </p>
            <h3 className="mt-8 text-lg font-bold text-navy">Practical starting points</h3>
            <ul className="mt-4 space-y-3 text-sm text-body/85">
              <li>• Map priority keywords to pages instead of stuffing one generic service page</li>
              <li>• Keep business information consistent across listings and your site</li>
              <li>• Pair organic visibility with conversion paths that match search intent</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/services/local-seo">Local SEO services</Button>
              <Link
                href="/resources/local-seo-checklist"
                className="inline-flex items-center text-sm font-bold text-navy hover:text-brand"
              >
                Read the local SEO checklist →
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ImageReveal
              src="/images/sections/seo-content.jpg"
              alt="Content planning and search-focused marketing work on a laptop"
              className="aspect-[4/3] shadow-xl ring-1 ring-navy/10"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
