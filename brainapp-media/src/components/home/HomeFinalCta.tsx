import Link from "next/link";
import { ProposalForm } from "@/components/forms/ProposalForm";

const bullets = [
  "24+ service scopes across marketing, ads, web, and creative",
  "Written proposals with milestones—not opaque packages",
  "Concept portfolio samples; your live case studies can replace them",
  "Forms validate today; connect delivery when your endpoint is ready",
];

export function HomeFinalCta() {
  return (
    <section className="bg-navy py-16 text-white lg:py-24" id="proposal">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-black md:text-4xl">
              Your growth program starts here
            </h2>
            <p className="mt-4 text-lg text-white/75">
              Tell us where you want your business to go. We will follow up with clarifying
              questions before sending a tailored scope.
            </p>
            <ul className="mt-8 space-y-4">
              {bullets.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-white/85">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-black text-navy">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-white/60">
              Prefer to read first?{" "}
              <Link href="/faqs" className="font-semibold text-brand hover:underline">
                Browse FAQs
              </Link>{" "}
              or{" "}
              <Link href="/resources" className="font-semibold text-brand hover:underline">
                explore resources
              </Link>
              .
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 text-body shadow-2xl md:p-8">
            <h3 className="text-lg font-bold text-navy">Request a free proposal</h3>
            <p className="mt-2 text-sm text-body/70">
              Ad platform spend is separate from management fees unless your scope says otherwise.
            </p>
            <div className="mt-6">
              <ProposalForm compact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
