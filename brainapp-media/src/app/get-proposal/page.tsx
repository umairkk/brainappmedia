import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProposalForm } from "@/components/forms/ProposalForm";

export const metadata: Metadata = {
  title: "Get a Free Proposal",
  description:
    "Request a tailored proposal from BrainApp Media—share goals, services, budget range, and timeline.",
};

export default function GetProposalPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Get a Free Proposal" }]} />
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Get a free proposal
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Tell us where you are today and what you want to improve. We will follow up with
            clarifying questions before sending a written scope and investment outline.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 lg:px-6">
        <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm md:p-10">
          <ProposalForm />
        </div>
      </section>
    </>
  );
}
