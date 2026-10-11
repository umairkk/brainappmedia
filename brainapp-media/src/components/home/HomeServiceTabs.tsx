"use client";

import Link from "next/link";
import { Tabs } from "@/components/ui/Tabs";
import { Button } from "@/components/ui/Button";

const tabContent = [
  {
    id: "more-leads",
    label: "I Need More Leads",
    body: "Start with channels that capture intent in your market—local search, paid search, and landing pages built for one offer. We align forms, call tracking, and CRM handoffs so you can see which messages produce qualified conversations.",
    links: [
      { href: "/services/local-seo", label: "Local SEO" },
      { href: "/services/google-ads", label: "Google Ads" },
      { href: "/services/landing-page-design", label: "Landing page design" },
      { href: "/services/conversion-rate-optimization", label: "CRO" },
    ],
    cta: { href: "/get-proposal", label: "Plan lead generation" },
  },
  {
    id: "online-sales",
    label: "I Want More Online Sales",
    body: "Combine a storefront that merchandises clearly with shopping campaigns, remarketing, and on-site improvements. Product data, checkout friction, and ad creative should tell the same story when promotions change.",
    links: [
      { href: "/services/shopify-development", label: "Shopify development" },
      { href: "/services/shopping-ads", label: "Shopping ads" },
      { href: "/services/ecommerce-development", label: "E-commerce development" },
      { href: "/services/email-marketing", label: "Email marketing" },
    ],
    cta: { href: "/services/ecommerce-development", label: "Explore e-commerce services" },
  },
  {
    id: "better-website",
    label: "I Need a Better Website",
    body: "Information architecture, responsive design, and conversion paths that reflect how your buyers decide. Whether WordPress or a custom build, we prioritize speed, accessibility, and maintainability—not decorative pages that age quickly.",
    links: [
      { href: "/services/website-design", label: "Website design" },
      { href: "/services/website-development", label: "Website development" },
      { href: "/services/wordpress-development", label: "WordPress" },
      { href: "/services/website-maintenance", label: "Maintenance" },
    ],
    cta: { href: "/portfolio", label: "See concept website work" },
  },
  {
    id: "better-branding",
    label: "I Want Better Branding",
    body: "Logo, color, typography, and templates that your marketing team and vendors can apply consistently. Strong identity reduces rework across ads, email, proposals, and sales decks.",
    links: [
      { href: "/services/brand-identity", label: "Brand identity" },
      { href: "/services/logo-design", label: "Logo design" },
      { href: "/services/graphic-design", label: "Graphic design" },
      { href: "/services/ad-creatives", label: "Ad creatives" },
    ],
    cta: { href: "/services/brand-identity", label: "Start brand identity" },
  },
];

export function HomeServiceTabs() {
  return (
    <Tabs
      items={tabContent.map((tab) => ({
        id: tab.id,
        label: tab.label,
        content: (
          <div>
            <p className="text-lg leading-relaxed text-body/90">{tab.body}</p>
            <p className="mt-4 text-sm font-semibold text-navy">Recommended services</p>
            <ul className="mt-3 flex flex-wrap gap-3">
              {tab.links.map((link) => (
                <li key={link.href} className="list-none">
                  <Link
                    href={link.href}
                    className="rounded-full border border-navy/15 bg-light-bg px-4 py-2 text-sm font-semibold text-navy transition hover:border-electric hover:text-electric"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={tab.cta.href}>{tab.cta.label}</Button>
              <Button href="/services" variant="secondary">
                All services
              </Button>
            </div>
          </div>
        ),
      }))}
    />
  );
}
