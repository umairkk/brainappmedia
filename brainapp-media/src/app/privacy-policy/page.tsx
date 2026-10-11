import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for BrainApp Media website and form submissions.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-light-bg border-b border-navy/10">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
          <h1 className="text-4xl font-bold text-navy">Privacy Policy</h1>
          <p className="mt-3 text-sm text-body/70">Last updated: October 2025</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 lg:px-6 prose-bam">
        <p>
          This Privacy Policy describes how BrainApp Media (&quot;we,&quot; &quot;us&quot;) handles
          information when you visit this website or submit forms. Replace or extend this draft with
          counsel-approved language before collecting personal data in production.
        </p>
        <h2>Information we collect</h2>
        <p>
          When you submit proposal or contact forms, you may provide your name, email, business
          name, phone number, website URL, and message content. Technical data such as browser type
          and page views may be collected through analytics tools if enabled by the site owner.
        </p>
        <h2>How we use information</h2>
        <p>
          We use submitted information to respond to inquiries, prepare proposals, and deliver
          services you request. We do not sell personal information. Marketing communications, if
          any, should include an opt-out when this policy is finalized for live use.
        </p>
        <h2>Sharing</h2>
        <p>
          We may share information with service providers who assist with hosting, email delivery,
          CRM, or analytics under confidentiality obligations. We may disclose information if
          required by law.
        </p>
        <h2>Retention & security</h2>
        <p>
          Data is retained as long as needed for the purposes above or as required by law.
          Reasonable safeguards should protect data in transit and at rest once production systems
          are configured.
        </p>
        <h2>Your choices</h2>
        <p>
          You may request access, correction, or deletion of personal information by contacting the
          site owner through published channels when available.
        </p>
        <h2>Changes</h2>
        <p>
          We may update this policy. Material changes should be noted with a revised date at the top
          of this page.
        </p>
      </section>
    </>
  );
}
