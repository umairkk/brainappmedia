"use client";

import Link from "next/link";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

const outcomes = [
  {
    title: "Stay Visible & Drive Traffic",
    body: "Get in front of ready-to-buy customers in search, maps, and paid channels—with pages built to match intent.",
    href: "/services/seo",
    cta: "Explore SEO",
    icon: (
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.22.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    ),
  },
  {
    title: "Generate Qualified Leads",
    body: "Turn visits into forms, calls, and booked conversations—with tracking that ties leads back to campaigns and pages.",
    href: "/services/landing-page-design",
    cta: "Lead generation",
    icon: (
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    ),
  },
  {
    title: "Make Smarter Marketing Decisions",
    body: "Optimize spend with readable reporting and a documented test plan—not vanity metrics without context.",
    href: "/services/conversion-rate-optimization",
    cta: "Improve conversion",
    icon: (
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z" />
    ),
  },
  {
    title: "Measure What Matters",
    body: "Connect marketing work to agreed business goals—leads, sales, and engagement—with milestones you can review.",
    href: "/our-process",
    cta: "See our process",
    icon: (
      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" />
    ),
  },
];

export function HomeOutcomeCards() {
  return (
    <section className="bg-light-bg py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Outcomes</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-navy md:text-4xl">
            Growth goals we help you work toward
          </h2>
          <p className="mt-4 text-body/80">
            Practical programs for small and medium businesses—aligned to how you sell, not a
            one-size package copied from the last client.
          </p>
        </div>
        <StaggerChildren className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((item) => (
            <StaggerItem key={item.title}>
              <article className="card-hover-lift flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-navy">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
                    {item.icon}
                  </svg>
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-body/85">{item.body}</p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex text-sm font-bold text-navy hover:text-brand"
                >
                  {item.cta} →
                </Link>
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
