"use client";

import { FadeIn } from "@/components/motion/FadeIn";

const proofs = [
  {
    headline: "24+ service scopes",
    sub: "Documented marketing, ads, web, and creative offerings",
  },
  {
    headline: "4 practice areas",
    sub: "One partner for channels that should work together",
  },
  {
    headline: "Tracking in scope",
    sub: "GA4, GTM, and conversion events when analytics is part of your plan",
  },
  {
    headline: "Concept portfolio",
    sub: "Sample work labeled clearly—no fabricated client metrics",
  },
];

export function HomeProofBand() {
  return (
    <section className="border-b border-navy/10 bg-white py-10">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
        {proofs.map((item, i) => (
          <FadeIn key={item.headline} delay={i * 0.06}>
            <div className="border-l-4 border-brand pl-4">
              <p className="text-lg font-black text-navy">{item.headline}</p>
              <p className="mt-1 text-sm leading-snug text-body/75">{item.sub}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
