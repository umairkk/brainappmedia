import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { generalFaqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about BrainApp Media services, contracts, reporting, onboarding, and proposals.",
};

export default function FaqsPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-20">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQs" }]} />
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Frequently asked questions
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Straight answers about how we scope work, handle ad spend, and communicate during
            projects.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 lg:px-6">
        <Accordion items={generalFaqs} />
        <div className="mt-12 rounded-2xl bg-light-bg p-8 text-center">
          <p className="text-body/85">Still have questions?</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Button href="/contact">Contact</Button>
            <Button href="/get-proposal" variant="secondary">
              Get a Free Proposal
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
