import type { PortfolioProject } from "@/content/types";

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "home-services-landing",
    title: "Home Services Lead Landing System",
    category: "websites",
    summary:
      "Concept landing templates for a regional HVAC and plumbing brand—service-area pages, trust modules, and call-to-action patterns tuned for mobile search traffic.",
    metaDescription:
      "Concept home services landing page system with service-area templates, trust signals, and conversion-focused layouts for local lead generation.",
    brief:
      "A fictional home services group needed separate entry points for emergency repair, planned maintenance, and seasonal promotions without duplicating entire sites for each campaign.",
    audience:
      "Homeowners comparing response time, licensing, and reviews on mobile devices—often arriving from paid search or local map listings late in the decision process.",
    decisions: [
      "Split campaign landings from the main site navigation to reduce distraction while preserving brand chrome and click-to-call prominence.",
      "Use modular proof blocks (license badges, service area map, process steps) that swap per trade without redesigning the whole template.",
      "Place primary phone and short quote forms above the fold on small screens; secondary chat entry sits below process content.",
      "Standardize headline formulas: problem acknowledged, service named, geography referenced, next step explicit.",
    ],
    deliverables: [
      "Responsive landing template in Figma with component variants",
      "Copy framework for three service lines and seasonal offers",
      "Form field set aligned to CRM handoff (service type, zip, urgency)",
      "Launch checklist for UTM naming and conversion tracking hooks",
    ],
    approach: [
      "Mapped paid search and local SEO entry points to required page modules.",
      "Wireframed mobile-first layouts before visual design.",
      "Validated form length against typical field completion on service sites.",
      "Documented handoff notes for development on a lightweight CMS or static host.",
    ],
  },
  {
    slug: "ecommerce-storefront",
    title: "Outdoor Gear E-commerce Storefront",
    category: "ecommerce",
    summary:
      "Concept Shopify-style storefront for a specialty outdoor retailer—collection architecture, product detail rhythm, and cart trust cues for considered purchases.",
    metaDescription:
      "Concept e-commerce storefront design for outdoor gear—collection UX, product pages, and checkout trust patterns for considered purchases.",
    brief:
      "A concept brand selling durable outdoor equipment needed a storefront that educates buyers on fit and use, not only displays SKU grids.",
    audience:
      "Enthusiast shoppers researching materials and sizing, often comparing specs across tabs before adding higher-ticket items to cart.",
    decisions: [
      "Organized collections by activity and conditions—not only product type—to mirror how customers describe their needs.",
      "Product pages lead with use-case imagery, spec tables, and care instructions before cross-sell modules.",
      "Cart drawer surfaces shipping expectations and return policy links to reduce last-step abandonment.",
      "Merchandising zones on home rotate between seasonal campaigns and evergreen bestsellers.",
    ],
    deliverables: [
      "Home, collection, and product template designs",
      "Component library for badges, size guides, and comparison rows",
      "Sample navigation and filter taxonomy",
      "Implementation notes for Shopify sections or equivalent theme structure",
    ],
    approach: [
      "Audited competitor PDP patterns for spec presentation and social proof placement.",
      "Defined image aspect ratios and art direction for pack shots vs. lifestyle.",
      "Aligned promo banner logic with email and paid creative themes.",
      "Outlined analytics events for add-to-cart, size guide opens, and filter use.",
    ],
  },
  {
    slug: "professional-services-site",
    title: "Professional Services Credibility Site",
    category: "websites",
    summary:
      "Concept website for a multi-practice advisory firm—practice area hierarchy, partner profiles, and resource hub structured for long sales cycles.",
    metaDescription:
      "Concept professional services website with practice area architecture, partner profiles, and a resource hub for credibility-driven lead generation.",
    brief:
      "A concept advisory firm offering tax, risk, and consulting services needed a site that signals expertise without overwhelming visitors with internal org charts.",
    audience:
      "Business owners and finance leaders evaluating firms on clarity, relevant experience, and ease of initiating a confidential conversation.",
    decisions: [
      "Practice areas grouped by client outcome rather than internal department names.",
      "Partner profiles emphasize industries served and engagement types—not only biography length.",
      "Resource hub supports SEO and sales follow-up with gated and ungated pieces clearly labeled.",
      "Primary conversion paths: schedule consultation, download guide, subscribe to updates.",
    ],
    deliverables: [
      "Sitemap and wireframes for home, practice areas, team, and insights",
      "Visual design system with restrained typography and accessible contrast",
      "Template for case-style stories without unverifiable metrics",
      "Form flows for consultation requests with optional company size field",
    ],
    approach: [
      "Interviewed stakeholder personas to prioritize proof points over generic claims.",
      "Structured URLs and breadcrumbs for multi-practice navigation.",
      "Planned content governance so new articles inherit SEO metadata patterns.",
      "Coordinated design with future paid landing variants for specific offers.",
    ],
  },
  {
    slug: "restaurant-brand",
    title: "Neighborhood Restaurant Brand Refresh",
    category: "branding",
    summary:
      "Concept identity for a farm-to-table restaurant—logo suite, menu typography, and social templates that carry warmth across print and digital touchpoints.",
    metaDescription:
      "Concept restaurant brand identity with logo suite, menu typography, and social templates for a farm-to-table hospitality concept.",
    brief:
      "A concept neighborhood restaurant wanted a cohesive brand that works on signage, menus, reservation pages, and Instagram without looking like a generic template.",
    audience:
      "Local diners choosing between experiential meals and convenience—sensitive to atmosphere cues before they view the menu PDF.",
    decisions: [
      "Wordmark paired with a simple icon usable at small sizes on delivery app thumbnails.",
      "Color palette anchored in natural tones with a single accent for calls to action online.",
      "Photography direction documented: kitchen action, plated dishes, and interior warmth—not stock food clichés.",
      "Menu hierarchy prioritizes dietary labels and seasonal sections for scannability.",
    ],
    deliverables: [
      "Primary and secondary logo lockups",
      "Color, type, and spacing guidelines",
      "Menu layout templates (print and mobile-friendly web)",
      "Social post and story frame templates",
    ],
    approach: [
      "Explored positioning between casual and fine dining before visual exploration.",
      "Tested logo legibility on dark wood and light chalkboard backgrounds.",
      "Aligned brand voice with short headline patterns for reservations and events.",
      "Packaged files for print vendor and web team with naming conventions.",
    ],
  },
  {
    slug: "meta-ad-creatives",
    title: "Meta Ad Creative Testing Set",
    category: "ad-creatives",
    summary:
      "Concept static and carousel ads for a subscription wellness box—hook variants, offer clarity, and format sizes for Meta placements.",
    metaDescription:
      "Concept Meta ad creative set with hook variants, carousel frames, and placement-safe layouts for a subscription wellness brand.",
    brief:
      "A concept subscription box brand needed a creative library to test messaging angles without redesigning from scratch each week.",
    audience:
      "Social feed scrollers familiar with subscription offers—skeptical of vague wellness claims, responsive to clear inclusions and cancellation transparency.",
    decisions: [
      "Three hook themes: convenience, discovery, and giftability—each with matching headline and visual focal point.",
      "Carousel frame 1 always states offer and product category; later frames show in-box items illustratively.",
      "Text kept within safe zones for Reels and Feed crops; legal disclaimer line templated.",
      "Static and carousel share typography and color for recognizable brand presence in remarketing.",
    ],
    deliverables: [
      "Static ad layouts in multiple aspect ratios",
      "Four-frame carousel storyboard with copy blocks",
      "Creative naming convention tied to test hypotheses",
      "Handoff sheet for media buyer with primary text variants",
    ],
    approach: [
      "Mapped creative angles to funnel stage (prospecting vs. remarketing).",
      "Designed for legibility on mid-size phone screens at arm’s length.",
      "Coordinated with landing page hero message to prevent message mismatch.",
      "Documented refresh cadence to avoid creative fatigue without losing learnings.",
    ],
  },
  {
    slug: "author-launch",
    title: "Author Book Launch Microsite",
    category: "branding",
    summary:
      "Concept launch site for a nonfiction author—book positioning, speaking inquiries, and email capture tied to a pre-order window.",
    metaDescription:
      "Concept author book launch microsite with positioning, speaking inquiry path, and email capture for a nonfiction release.",
    brief:
      "A concept business author preparing a launch needed a focused site that supports pre-order, speaking requests, and media kit downloads without maintaining a full blog on day one.",
    audience:
      "Readers evaluating whether the book addresses their problem, event planners scanning speaker credentials, and journalists seeking approved assets.",
    decisions: [
      "Single-scroll narrative on home with anchor links to excerpts, about, and contact.",
      "Media kit packaged as a zip with cover images and author bio at two lengths.",
      "Email capture offers a sample chapter rather than a generic newsletter promise.",
      "Speaking form captures event type, date window, and audience size for qualification.",
    ],
    deliverables: [
      "Visual design for launch home and press page",
      "Copy outline for problem-solution-author credibility sequence",
      "Email signup module copy and confirmation state",
      "Checklist aligning site messaging with retail product descriptions",
    ],
    approach: [
      "Structured story around reader transformation, not only book features.",
      "Planned post-launch evolution path toward resources and course offers.",
      "Ensured accessibility for excerpt text and download links.",
      "Coordinated ad creative thumbnails with cover art hierarchy.",
    ],
  },
];

export function getPortfolioProjects(): PortfolioProject[] {
  return [...portfolioProjects];
}

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}

export const portfolioCategoryLabels: Record<
  PortfolioProject["category"] | "all",
  string
> = {
  all: "All work",
  websites: "Websites",
  ecommerce: "E-commerce",
  branding: "Branding",
  "ad-creatives": "Ad creatives",
};
