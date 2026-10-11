import type { IndustryContent } from "@/content/types";

export const industries: IndustryContent[] = [
  {
    slug: "ecommerce",
    title: "E-commerce",
    metaDescription:
      "Marketing and storefront strategy for e-commerce brands—traffic, conversion, retention, and creative aligned to product catalogs and margins.",
    intro: [
      "E-commerce growth rarely fails because of a single missing tactic. It fails when acquisition, site experience, and post-purchase communication tell different stories. Shoppers compare shipping terms on one tab, read reviews on another, and return to a cart that forgot their size selection.",
      "BrainApp Media helps online retailers connect Shopify or custom storefronts with search, paid shopping campaigns, email flows, and brand creative so each channel reinforces the same value proposition.",
      "We respect operational reality: inventory changes, margin pressure, and fulfillment constraints. Recommendations prioritize measurable contribution—conversion rate, average order value where appropriate, and repeat purchase paths—not vanity traffic.",
    ],
    challenges: [
      "Rising cost per click without matching improvements on product detail and checkout pages.",
      "Product feeds with inconsistent titles, images, or attributes that underperform in shopping ads.",
      "Email and SMS programs that only broadcast discounts, eroding margin and brand perception.",
      "Site search and filters that hide best sellers or confuse mobile shoppers.",
      "Creative fatigue on Meta and Google when only one hero angle is tested repeatedly.",
      "Attribution arguments between teams instead of shared definitions of profitable orders.",
    ],
    recommended: [
      {
        serviceSlug: "shopify-development",
        reason:
          "Theme structure, speed, and merchandising modules must support campaigns and seasonal updates without breaking checkout.",
      },
      {
        serviceSlug: "shopping-ads",
        reason:
          "Shopping and Performance Max depend on clean feeds, negative keyword discipline, and landing page alignment.",
      },
      {
        serviceSlug: "conversion-rate-optimization",
        reason:
          "Small improvements on cart, shipping transparency, and trust cues compound across paid and organic traffic.",
      },
      {
        serviceSlug: "email-marketing",
        reason:
          "Lifecycle messaging—welcome, post-purchase, win-back—stabilizes revenue between acquisition spikes.",
      },
    ],
    exampleApproach: [
      "Audit catalog taxonomy, feed quality, and baseline conversion by device.",
      "Fix tracking and enhanced conversions before scaling spend.",
      "Launch structured creative tests tied to collection themes, not random graphics.",
      "Implement on-site modules for social proof and policy clarity where drop-off occurs.",
      "Review margin-aware reporting monthly with merchandising and ops stakeholders.",
    ],
    conversionPaths: [
      "Category and collection pages from organic and paid shopping clicks.",
      "Product detail pages optimized for spec clarity and complementary items.",
      "Cart and checkout with explicit shipping and return expectations.",
      "Email and SMS capture with value beyond blanket discount codes.",
      "Remarketing sequences segmented by viewed category and cart status.",
    ],
    measurement: [
      "E-commerce conversion rate and revenue per session by channel.",
      "Shopping campaign efficiency relative to gross margin bands you provide.",
      "Email flow revenue attribution with holdout tests when volume allows.",
      "Site speed and core UX metrics on mobile checkout.",
      "Creative test readouts with next hypotheses documented.",
    ],
    faqs: [
      {
        question: "Do you only work with Shopify?",
        answer:
          "Shopify is a common fit for growing catalogs, but we also support WooCommerce, custom builds, and headless front ends when integrations require them. Platform choice follows operations, not the other way around.",
      },
      {
        question: "Can you manage product feeds for us?",
        answer:
          "Yes. Feed rules, supplemental attributes, and error monitoring are part of shopping engagements. We coordinate with your ERP or PIM when those systems exist.",
      },
      {
        question: "How do you approach discount-heavy markets?",
        answer:
          "We map margin floors before recommending promo intensity. Sometimes better photography, sizing clarity, or bundling outperforms deeper discounts.",
      },
    ],
  },
  {
    slug: "home-services",
    title: "Home Services",
    metaDescription:
      "Local lead generation for trades and home service providers—local SEO, landing pages, call tracking, and paid search built for service areas.",
    intro: [
      "Home service businesses live and die by the phone ringing with qualified jobs—not just form fills from outside the service area. Marketing must respect dispatch capacity, licensing, and the urgency mix of emergency versus planned work.",
      "We build local visibility through Google Business Profile alignment, location and service pages, and paid search that routes to dedicated landings instead of a generic home page.",
      "Creative and copy speak in homeowner language: response time, credentials, and what happens after they click call or request a quote.",
    ],
    challenges: [
      "Paying for clicks that never convert because landing pages lack trust or clear geography.",
      "Duplicate or thin location pages that hurt local SEO instead of helping.",
      "Call tracking gaps that make offline conversions invisible in ad platforms.",
      "Seasonal demand swings without planned creative and budget adjustments.",
      "Review generation left informal, so competitors look more established online.",
      "Franchise or multi-location brands with inconsistent NAP data across directories.",
    ],
    recommended: [
      {
        serviceSlug: "local-seo",
        reason:
          "Maps, local pack, and service-area content drive high-intent discovery when structured correctly.",
      },
      {
        serviceSlug: "landing-page-design",
        reason:
          "Campaign-specific landings keep message match and shorten paths to call or short forms.",
      },
      {
        serviceSlug: "google-ads",
        reason:
          "Search campaigns need tight geo targeting, ad schedule alignment, and negative keywords for DIY queries.",
      },
      {
        serviceSlug: "website-development",
        reason:
          "Fast, mobile-first sites with click-to-call and service modules support both SEO and paid entry points.",
      },
    ],
    exampleApproach: [
      "Document service areas, job types, and margin priority by trade.",
      "Consolidate or expand location pages based on real coverage, not city name stuffing.",
      "Deploy call and form conversion tracking with offline import where feasible.",
      "Build seasonal ad groups and landing variants for heating, cooling, or storm response.",
      "Train office staff on lead source questions to improve CRM data quality.",
    ],
    conversionPaths: [
      "Google Maps and local pack to click-to-call or directions.",
      "Paid search to service-specific landings with zip or city validation.",
      "Organic service pages answering cost factors and process questions.",
      "Remarketing to past site visitors who did not convert during busy season.",
      "Email or SMS follow-up for membership or maintenance plans when offered.",
    ],
    measurement: [
      "Qualified leads by source with service type and geography tags.",
      "Cost per lead and booked job rate when CRM data is shared.",
      "Local pack visibility for priority keywords in target zones.",
      "Landing page speed and mobile form completion rates.",
      "Review velocity and response time on public profiles.",
    ],
    faqs: [
      {
        question: "How do you handle multiple service areas?",
        answer:
          "We map pages and campaigns to actual dispatch coverage, using unique content blocks per area rather than swapping city names on one template.",
      },
      {
        question: "Can you integrate with our CRM or dispatch tool?",
        answer:
          "Integrations depend on the platform. We document lead fields and webhook or Zapier paths during scoping so sales teams receive complete records.",
      },
      {
        question: "Do you guarantee first-page rankings?",
        answer:
          "No ethical provider guarantees specific rankings. We focus on technical health, relevance, and sustainable local authority tactics.",
      },
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    metaDescription:
      "Websites and marketing for agents, teams, and brokerages—listing discovery, neighborhood content, and lead nurture without generic template fatigue.",
    intro: [
      "Real estate marketing competes on trust and timing. Buyers and sellers compare agents on clarity of process, local knowledge signals, and how easy it is to start a conversation—not on stock skyline photos alone.",
      "BrainApp Media supports agent sites, team brands, and brokerage programs with IDX-aware architecture, neighborhood guides, and campaigns that respect compliance and fair housing language.",
      "We align search, social, and email so an open house push, new listing email, and retargeting ad share consistent details and disclosure-friendly copy.",
    ],
    challenges: [
      "Template sites that look identical to competitors and weakly support local SEO.",
      "Lead forms that ask for too much before value is established.",
      "Paid campaigns driving traffic to listing search without agent differentiation.",
      "Inconsistent branding between individual agents and brokerage parent brands.",
      "Content production bottlenecks for neighborhood and market updates.",
      "Tracking gaps between portal leads, site forms, and offline closings.",
    ],
    recommended: [
      {
        serviceSlug: "website-design",
        reason:
          "Custom information architecture highlights specialties, listings, and proof without clutter.",
      },
      {
        serviceSlug: "seo",
        reason:
          "Neighborhood and market content earns discovery beyond portal dependence.",
      },
      {
        serviceSlug: "meta-ads",
        reason:
          "Geo-targeted campaigns promote listings, events, and lead magnets with creative refresh.",
      },
      {
        serviceSlug: "email-marketing",
        reason:
          "Nurture sequences keep agents top of mind between transaction windows.",
      },
    ],
    exampleApproach: [
      "Clarify farm areas, price bands, and buyer vs. seller focus per agent or team.",
      "Design listing and search UX that works on mobile open-house traffic.",
      "Publish compliant neighborhood guides with update cadences you can maintain.",
      "Launch retargeting with listing-specific creative and privacy-conscious audiences.",
      "Report on lead quality indicators agreed with sales leadership.",
    ],
    conversionPaths: [
      "Organic neighborhood pages to valuation or consultation requests.",
      "Listing detail views to save search or schedule showing forms.",
      "Social ads to dedicated seller or buyer guides.",
      "Email drips triggered by saved search behavior when CRM supports it.",
      "Remarketing to site visitors who viewed multiple listings in one area.",
    ],
    measurement: [
      "Lead volume and type by source and geography.",
      "Engagement on neighborhood and listing content.",
      "Campaign cost per lead relative to brokerage targets you set.",
      "Email nurture click and reply patterns where trackable.",
      "Site performance on mobile during peak listing promotion windows.",
    ],
    faqs: [
      {
        question: "Do you build IDX integrations?",
        answer:
          "We work within your MLS-approved IDX provider’s embed rules and design containers that feel native to your brand while respecting data freshness requirements.",
      },
      {
        question: "Can agents keep personal branding under a brokerage site?",
        answer:
          "Yes. We structure sub-brands or profile pages with shared components so brokerage compliance and individual differentiation coexist.",
      },
      {
        question: "How do you handle fair housing in ads and copy?",
        answer:
          "We follow your brokerage compliance guidelines, avoid discriminatory targeting or copy, and route sensitive claims through your legal or compliance review when required.",
      },
    ],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    metaDescription:
      "Credibility-driven websites and demand generation for advisory, legal, accounting, and B2B professional firms with long sales cycles.",
    intro: [
      "Professional services buyers evaluate expertise slowly. They scan practice pages, read partner bios, and download resources before initiating a conversation that may stay confidential for weeks.",
      "Marketing must balance visibility with discretion. Thought leadership, clear service definitions, and proof of industry experience matter more than loud promotional language.",
      "BrainApp Media connects SEO-friendly resource hubs, LinkedIn-ready creative, and conversion paths that respect compliance and partner approval workflows.",
    ],
    challenges: [
      "Websites that list every service equally, leaving visitors unsure where to start.",
      "Content written for peers instead of decision makers with business outcomes in mind.",
      "Paid campaigns sending traffic to generic home pages with no offer match.",
      "Partner reluctance to appear on video or social, limiting trust signals.",
      "Long gaps between first visit and inquiry with no nurture plan.",
      "Reporting that counts form fills without qualitative lead grading.",
    ],
    recommended: [
      {
        serviceSlug: "content-marketing",
        reason:
          "Guides and articles support discovery and give sales teams assets for follow-up.",
      },
      {
        serviceSlug: "website-development",
        reason:
          "Structured practice pages, team profiles, and secure forms reflect firm standards.",
      },
      {
        serviceSlug: "ppc-management",
        reason:
          "Search and LinkedIn campaigns need tight keyword themes and landing offers.",
      },
      {
        serviceSlug: "brand-identity",
        reason:
          "Visual consistency across proposals, site, and events reinforces premium positioning.",
      },
    ],
    exampleApproach: [
      "Interview stakeholders on ideal client profiles and off-limits positioning.",
      "Restructure navigation around client problems and industries served.",
      "Launch gated and ungated resources with CRM tagging rules.",
      "Coordinate partner review cycles for public-facing thought leadership.",
      "Align sales discovery questions with marketing-qualified definitions.",
    ],
    conversionPaths: [
      "Organic resource downloads to consultation requests.",
      "Practice area pages to contact forms with optional company size fields.",
      "Webinars or events to email nurture and partner follow-up lists.",
      "Retargeting to visitors who consumed multiple related articles.",
      "Referral landing pages with co-branded proof for alliance partners.",
    ],
    measurement: [
      "Marketing-qualified leads by practice and source.",
      "Resource engagement depth and return visits before conversion.",
      "Pipeline influence when CRM connects opportunities to content touches.",
      "Site search queries revealing unmet content needs.",
      "Campaign efficiency on high-intent keywords vs. broad awareness terms.",
    ],
    faqs: [
      {
        question: "Can you write technical content for our experts?",
        answer:
          "We interview subject matter experts and draft in their voice, routing through partner review. We do not publish regulated advice without your approval.",
      },
      {
        question: "Do you support ABM or account-based campaigns?",
        answer:
          "Yes, when target account lists and offers are defined. We align landing pages and creative to named segments rather than generic firm messaging.",
      },
      {
        question: "How do you handle confidential client stories?",
        answer:
          "We use anonymized scenarios, aggregated outcomes, or approved named cases only. Concept portfolio work on this site follows the same integrity standard.",
      },
    ],
  },
  {
    slug: "restaurants-hospitality",
    title: "Restaurants & Hospitality",
    metaDescription:
      "Brand, web, and local marketing for restaurants and hospitality—menus, reservations, events, and social creative that match in-venue experience.",
    intro: [
      "Hospitality brands sell atmosphere as much as food or rooms. Digital touchpoints—menu PDFs, reservation widgets, Instagram stories—must preview the experience honestly or reviews will correct the narrative.",
      "We help restaurants, cafés, boutique hotels, and event venues unify logo systems, photography direction, local SEO, and paid promos for openings, seasons, and private events.",
      "Operational peaks drive marketing calendars: brunch pushes, holiday menus, and catering quotes need quick-turn creative without breaking brand guidelines.",
    ],
    challenges: [
      "Outdated menus or hours online conflicting with in-store reality.",
      "Social feeds active but disconnected from reservation or catering goals.",
      "Paid promos boosting one-off discounts without building repeat visits.",
      "Review sites ranking above owned properties for branded searches.",
      "Event and catering inquiry forms buried on slow mobile pages.",
      "Inconsistent photo quality between professional shoots and staff posts.",
    ],
    recommended: [
      {
        serviceSlug: "brand-identity",
        reason:
          "Menus, signage, and social templates should feel like the same venue.",
      },
      {
        serviceSlug: "local-seo",
        reason:
          "Maps, hours, and menu links must stay accurate across platforms.",
      },
      {
        serviceSlug: "social-media-management",
        reason:
          "Planned publishing frees kitchen and floor managers from ad hoc posting.",
      },
      {
        serviceSlug: "meta-ads",
        reason:
          "Geo-radius campaigns promote events, new menus, and private dining.",
      },
    ],
    exampleApproach: [
      "Audit listings, reservation links, and menu formats on top platforms.",
      "Define brand voice for offers vs. storytelling posts.",
      "Build event and catering landing modules with fast mobile forms.",
      "Schedule seasonal creative batches aligned to kitchen prep timelines.",
      "Monitor reviews and response templates that match brand tone.",
    ],
    conversionPaths: [
      "Local search and maps to reservations or click-to-call.",
      "Instagram and Facebook promos to event or menu landings.",
      "Email lists for wine dinners, holiday hours, and loyalty perks.",
      "Website catering pages to qualified quote requests.",
      "On-premise QR codes to review or newsletter signup when appropriate.",
    ],
    measurement: [
      "Reservation and inquiry volume by source during campaigns.",
      "Listing accuracy audits and map engagement trends.",
      "Social post reach and saves on menu and event content.",
      "Ad spend efficiency on defined geo radii and daypart schedules.",
      "Repeat visit proxies such as loyalty signups when programs exist.",
    ],
    faqs: [
      {
        question: "Do you photograph food on site?",
        answer:
          "Photography can be scoped with partners or directed shoots. Many projects start with art direction guidelines for staff or hired photographers.",
      },
      {
        question: "Can you integrate OpenTable or similar?",
        answer:
          "We embed approved reservation widgets and style surrounding content so the booking path feels native on mobile.",
      },
      {
        question: "How fast can you turn around a seasonal menu push?",
        answer:
          "Turnaround depends on approval speed. Template systems we build reduce design time once brand components exist.",
      },
    ],
  },
  {
    slug: "authors-publishers",
    title: "Authors & Publishers",
    metaDescription:
      "Author websites, launch creative, and audience building for nonfiction and fiction releases—email, ads, and brand assets aligned to launch windows.",
    intro: [
      "Book launches compress years of writing into weeks of visibility. Authors need a hub that supports pre-order, media requests, speaking inquiries, and list building without juggling five disconnected tools.",
      "Publishers and indie authors alike benefit when cover art, ad creative, and landing copy tell the same promise readers will find in chapter one.",
      "BrainApp Media plans launch phases: teaser, pre-order, release week, and long-tail speaking or course extensions when those paths exist.",
    ],
    challenges: [
      "Microsites that look temporary and undermine credibility with media.",
      "Ad spend on broad interest targets without message match to book topic.",
      "Email lists started late, missing warm readers before release day.",
      "Retail product pages and author site messaging describing different benefits.",
      "Speaking and podcast funnels competing for the same limited author time.",
      "Creative assets not sized for Meta, Amazon ads, or newsletter headers.",
    ],
    recommended: [
      {
        serviceSlug: "landing-page-design",
        reason:
          "Focused launch pages prioritize one primary action per phase.",
      },
      {
        serviceSlug: "ad-creatives",
        reason:
          "Test hooks and formats tied to audience segments and retailer links.",
      },
      {
        serviceSlug: "email-marketing",
        reason:
          "Pre-launch sequences warm readers and coordinate review team outreach.",
      },
      {
        serviceSlug: "website-development",
        reason:
          "Durable author hubs outlive a single title with modular book modules.",
      },
    ],
    exampleApproach: [
      "Extract positioning statement and reader transformation from manuscript themes.",
      "Build launch calendar with asset deadlines for ads, email, and press kit.",
      "Design sample chapter or bonus download with clear consent language.",
      "Coordinate retailer link strategy and UTM conventions for reporting.",
      "Plan post-launch content repurposing for podcasts and newsletters.",
    ],
    conversionPaths: [
      "Social and search ads to pre-order or retailer choice page.",
      "Email signup for sample chapter leading to launch day send.",
      "Press page downloads to media booking form.",
      "Speaking inquiries with event type and audience fields.",
      "Remarketing to excerpt readers who did not purchase within window.",
    ],
    measurement: [
      "Email list growth and engagement by signup source.",
      "Ad click-through and landing completion by creative angle.",
      "Pre-order and retail link clicks tracked with consistent UTMs.",
      "Speaking inquiry quality graded against author availability rules.",
      "Site performance during traffic spikes on launch day.",
    ],
    faqs: [
      {
        question: "Do you work with publishers or only indie authors?",
        answer:
          "Both. We adapt to publisher brand guidelines or build indie author brands from scratch.",
      },
      {
        question: "Can you run Amazon ads?",
        answer:
          "Amazon-specific campaigns can be coordinated when account access and goals are clear. Scope distinguishes retail ads from Meta prospecting.",
      },
      {
        question: "What if our launch date moves?",
        answer:
          "Calendars and ad flights flex with communicated date changes. Critical path items—cover final, retail listing live—are flagged early.",
      },
    ],
  },
];

export function getIndustryBySlug(slug: string): IndustryContent | undefined {
  return industries.find((i) => i.slug === slug);
}

export function getAllIndustries(): IndustryContent[] {
  return [...industries];
}
