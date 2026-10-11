import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact BrainApp Media—send a message through the form. Phone, email, and office details can be added when you are ready to publish them.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-light-bg border-b border-navy/10">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-navy md:text-5xl">
            Contact
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-body/80">
            Use the form below for general questions. Dedicated phone numbers, email inboxes, office
            addresses, and social profile links can be added by your team when those channels are
            ready to publish—we have intentionally left them blank here.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-semibold text-navy">Send a message</h2>
            <p className="mt-2 text-sm text-body/75">
              For detailed scope and budget discussion, the proposal form captures more context.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
          <div className="prose-bam">
            <h2>Prefer a structured start?</h2>
            <p>
              The Get a Free Proposal flow asks about services, budget range, and timeline so we can
              respond with a tailored outline instead of a generic brochure.
            </p>
            <h2>What happens next</h2>
            <p>
              Once form delivery is connected to your email or CRM, submissions route to your team.
              Until then, the form validates fields locally so you can test the experience before
              go-live.
            </p>
            <Button href="/get-proposal" className="mt-4">
              Get a Free Proposal
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
