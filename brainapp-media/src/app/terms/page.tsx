import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the BrainApp Media website.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-light-bg border-b border-navy/10">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]} />
          <h1 className="text-4xl font-bold text-navy">Terms of Use</h1>
          <p className="mt-3 text-sm text-body/70">Last updated: October 2025</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 lg:px-6 prose-bam">
        <p>
          By accessing this website operated by BrainApp Media, you agree to these Terms of Use.
          Replace this summary with counsel-approved terms before relying on them in production.
        </p>
        <h2>Use of the site</h2>
        <p>
          Content is provided for general information about our services. You may not misuse the
          site, attempt unauthorized access, or copy materials except as allowed by applicable law or
          written permission.
        </p>
        <h2>No guaranteed outcomes</h2>
        <p>
          Marketing and web performance depend on many factors outside our control. We do not guarantee
          specific rankings, revenue, or lead volumes unless explicitly stated in a signed agreement.
        </p>
        <h2>Portfolio & resources</h2>
        <p>
          Concept portfolio projects and articles illustrate approach and education. They are not
          promises of future results for your business.
        </p>
        <h2>Third-party links</h2>
        <p>
          Links to external sites are provided for convenience. We are not responsible for third-party
          content or policies.
        </p>
        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, BrainApp Media is not liable for indirect or
          consequential damages arising from use of this site. Direct service engagements are governed
          by separate signed agreements.
        </p>
        <h2>Changes</h2>
        <p>
          We may update these terms. Continued use after changes constitutes acceptance of the
          revised terms.
        </p>
      </section>
    </>
  );
}
