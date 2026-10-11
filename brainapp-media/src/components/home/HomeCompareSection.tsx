"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";

export function HomeCompareSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-navy md:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Move from scattered tactics to a connected growth plan
            </h2>
            <p className="mt-5 text-lg text-body/80">
              Channel-only marketing optimizes for clicks and impressions. Connected marketing
              aligns your site, ads, and brand so each touchpoint supports the same business
              outcome.
            </p>
          </div>
        </FadeIn>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <FadeIn delay={0.05}>
            <div className="h-full rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-body/50">
                Common friction
              </p>
              <h3 className="mt-2 text-xl font-bold text-navy">When vendors do not connect</h3>
              <ul className="mt-6 space-y-4 text-sm text-body/85">
                <li className="flex gap-3">
                  <span className="text-brand" aria-hidden>
                    ✕
                  </span>
                  Ads promise an offer landing pages do not deliver
                </li>
                <li className="flex gap-3">
                  <span className="text-brand" aria-hidden>
                    ✕
                  </span>
                  Tracking breaks after site updates; budgets optimize toward noise
                </li>
                <li className="flex gap-3">
                  <span className="text-brand" aria-hidden>
                    ✕
                  </span>
                  Brand guidelines sit in a PDF while creative teams guess in each channel
                </li>
                <li className="flex gap-3">
                  <span className="text-brand" aria-hidden>
                    ✕
                  </span>
                  Reporting shows activity without tying work to pipeline or sales
                </li>
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.12}>
            <div className="h-full rounded-2xl border-2 border-brand bg-navy p-8 text-white shadow-xl">
              <p className="text-xs font-bold uppercase tracking-wider text-brand">BrainApp approach</p>
              <h3 className="mt-2 text-xl font-bold">One plan across web, ads, and creative</h3>
              <ul className="mt-6 space-y-4 text-sm text-white/85">
                <li className="flex gap-3">
                  <span className="font-bold text-brand" aria-hidden>
                    ✓
                  </span>
                  Shared message hierarchy from ad hook to thank-you page
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-brand" aria-hidden>
                    ✓
                  </span>
                  Tags and conversions validated before scaling paid spend
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-brand" aria-hidden>
                    ✓
                  </span>
                  Templates sized for search, social, email, and sales touchpoints
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-brand" aria-hidden>
                    ✓
                  </span>
                  Written scopes, milestones, and reporting you can act on
                </li>
              </ul>
              <Button href="/get-proposal" className="mt-8">
                Get a Free Proposal
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
