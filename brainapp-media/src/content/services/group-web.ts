import type { ServiceContent } from "@/content/types";

export const webServices: ServiceContent[] = [
  {
    slug: "website-design",
    title: "Website Design",
    metaDescription:
      "Website design focused on clear UX, accessible layouts, and conversion paths—wireframes through visual design ready for development.",
    heroSubtitle:
      "User-centered website design that clarifies your offer, guides visitors to action, and hands off cleanly to development without ambiguous mockups.",
    intro: [
      "Website design is more than aesthetics: it is the sequence of decisions that help someone understand what you do, trust you, and take the next step. When navigation mirrors internal org charts or hero sections speak in jargon, bounce rates rise even if the color palette is fashionable.",
      "We start with audience tasks—what visitors need to accomplish—and map page types, content hierarchy, and calls to action before visual exploration. Wireframes validate structure without distracting stakeholders with font debates too early.",
      "Visual design applies your brand identity or interim styles with attention to typography scale, contrast, and component consistency. Responsive layouts are designed for mobile, tablet, and desktop simultaneously, not shrunk from desktop alone.",
      "Conversion paths receive explicit design: forms, chat entry points, phone prominence, and checkout steps are placed where research and analytics suggest, not hidden in footers by default.",
      "Deliverables include design files, component specs, and annotation for developers so builds match intent. We collaborate during implementation to resolve edge cases without silent deviations.",
    ],
    whoItHelps:
      "Website design helps businesses launching a first credible site, brands refreshing outdated UX, and marketing teams needing campaign landing systems aligned with the main property.",
    problems: [
      "Visitors cannot find core services within a few clicks.",
      "Mobile layouts hide critical CTAs or break navigation patterns.",
      "Visual design looks modern but copy blocks are unreadably long or jargon-heavy.",
      "Design and development teams interpret mockups differently, causing rework.",
      "Accessibility issues such as low contrast block segments of users and create risk.",
      "New pages are added ad hoc without a system, fragmenting the experience.",
    ],
    deliverables: [
      {
        title: "Discovery and sitemap",
        body: "User goals, content inventory, and proposed information architecture with stakeholder approval.",
      },
      {
        title: "Wireframes",
        body: "Low-fidelity layouts for key templates showing hierarchy, modules, and responsive behavior notes.",
      },
      {
        title: "Visual design comps",
        body: "High-fidelity screens for primary templates including home, interior, and conversion-focused pages.",
      },
      {
        title: "UI component library",
        body: "Buttons, forms, cards, and navigation states documented for reuse across templates.",
      },
      {
        title: "Responsive specifications",
        body: "Breakpoints, spacing, and type scales defined so development matches design intent.",
      },
      {
        title: "Developer handoff package",
        body: "Organized Figma or equivalent files with export guidance and interaction notes for dynamic elements.",
      },
    ],
    approach: [
      {
        title: "Research and align",
        body: "We review analytics, competitors, and brand inputs to frame design goals.",
      },
      {
        title: "Structure first",
        body: "Wireframes validate flow before investing in pixel-perfect visuals.",
      },
      {
        title: "Design systemically",
        body: "Components and styles scale across pages instead of one-off treatments.",
      },
      {
        title: "Review accessibly",
        body: "Contrast, focus states, and type sizes are checked against common accessibility expectations.",
      },
      {
        title: "Support build",
        body: "Designers answer developer questions during implementation to preserve UX quality.",
      },
    ],
    measurement:
      "Design success is measured post-launch through engagement metrics, task completion on key flows, form start rates, and qualitative feedback from sales and support. Pre-launch, milestones track approval clarity and handoff completeness.",
    conceptNote:
      "Portfolio website projects illustrate how design systems carry through to live development—browse before starting a redesign.",
    scopeFactors: [
      "Number of unique page templates versus reused layouts.",
      "Depth of custom illustration or photography art direction.",
      "Rebrand coupling with identity work versus design-only.",
      "Multilingual layout considerations and text expansion room.",
      "Integration complexity with ecommerce or member portals affecting UI.",
    ],
    faqs: [
      {
        question: "Do you design and develop?",
        answer:
          "Yes, as separate or combined scopes. Design can hand off to your developers or our development team.",
      },
      {
        question: "Which design tools do you use?",
        answer:
          "Figma is typical; we adapt if your organization standardizes elsewhere.",
      },
      {
        question: "Is copywriting included?",
        answer:
          "Microcopy and layout placeholders are included; long-form copy can be scoped with content marketing.",
      },
      {
        question: "How many revision rounds?",
        answer:
          "Rounds are defined in the proposal per milestone—wireframes and visuals— to keep progress predictable.",
      },
      {
        question: "Can you redesign one section only?",
        answer:
          "Partial redesigns are possible when they align with existing systems or include a mini design system update.",
      },
      {
        question: "Do you design for WordPress or Shopify?",
        answer:
          "Yes. Layouts respect theme constraints discussed during discovery to avoid impossible builds.",
      },
      {
        question: "Will designs be accessible?",
        answer:
          "We apply WCAG-oriented contrast and focus patterns; formal audits can be added if required.",
      },
      {
        question: "What do you need from us?",
        answer:
          "Brand assets, content direction, stakeholder availability for reviews, and access to analytics if redesigning.",
      },
    ],
    relatedSlugs: ["website-development", "brand-identity", "landing-page-design"],
  },
  {
    slug: "website-development",
    title: "Website Development",
    metaDescription:
      "Website development with performant front ends, sensible CMS choices, analytics hooks, and maintainable code for marketing teams.",
    heroSubtitle:
      "Websites built for speed, security basics, and editor-friendly content structures—so marketing can update pages without filing engineering tickets for every typo.",
    intro: [
      "Website development turns approved designs into production systems that load quickly, render correctly on modern browsers, and integrate with analytics, forms, and marketing tools. Cutting corners on structure creates brittle sites that fear content updates.",
      "We select technology based on maintainability and your team’s skills—custom stacks, headless CMS, or established platforms—not novelty for its own sake. Hosting, SSL, and environment workflows are documented so launches and rollbacks are controlled.",
      "Front-end implementation emphasizes semantic HTML, responsive CSS, and JavaScript only where interaction requires it. Performance budgets guide image handling, font loading, and third-party script discipline.",
      "CMS configuration gives editors flexible modules within guardrails: reusable blocks, preview workflows, and role permissions that prevent accidental layout breaks.",
      "Launch includes redirect maps for URL changes, Search Console verification hooks, and basic QA across devices. Post-launch support can transition to maintenance retainers.",
    ],
    whoItHelps:
      "Website development suits organizations needing a new marketing site, teams migrating off legacy CMS platforms, and businesses integrating CRM, chat, or ecommerce connectors.",
    problems: [
      "Current site is slow, scoring poorly on Core Web Vitals and mobile networks.",
      "Editors cannot update pages without breaking layout or needing developer help.",
      "Plugin or extension sprawl creates security and update risk.",
      "Analytics and conversion tracking were never implemented correctly at launch.",
      "Staging and production environments drift, causing surprise bugs on deploy.",
      "Integrations with forms, CRM, or payments fail silently after upgrades.",
    ],
    deliverables: [
      {
        title: "Technical architecture plan",
        body: "Stack selection, hosting approach, integration list, and environment strategy documented for stakeholders.",
      },
      {
        title: "Front-end implementation",
        body: "Responsive templates matching approved designs with cross-browser QA on priority browsers.",
      },
      {
        title: "CMS setup and training",
        body: "Content types, modules, roles, and editor documentation with a live training session when scoped.",
      },
      {
        title: "Analytics and tag implementation",
        body: "Google Tag Manager or platform-native tags with key events configured per measurement plan.",
      },
      {
        title: "Launch checklist execution",
        body: "Redirects, SSL, sitemap, robots, and smoke tests completed before DNS cutover.",
      },
      {
        title: "Post-launch stabilization",
        body: "Bug-fix window addressing issues discovered in the first weeks after go-live.",
      },
    ],
    approach: [
      {
        title: "Plan integrations early",
        body: "Forms, CRM, search, and ecommerce hooks are specified before build to avoid retrofit pain.",
      },
      {
        title: "Build in components",
        body: "Reusable templates accelerate page creation and keep code maintainable.",
      },
      {
        title: "Test continuously",
        body: "Staging reviews, automated checks where useful, and device testing precede launch.",
      },
      {
        title: "Optimize performance",
        body: "Images, caching, and script loading are tuned against agreed performance targets.",
      },
      {
        title: "Hand off cleanly",
        body: "Documentation covers deployments, backups, and vendor accounts your team owns.",
      },
    ],
    measurement:
      "Development quality is judged by Lighthouse or Web Vitals-related metrics agreed at kickoff, successful launch checklist completion, editor satisfaction with CMS workflows, and stability during the post-launch window.",
    scopeFactors: [
      "Number of templates and dynamic content types.",
      "Custom application features beyond marketing pages.",
      "Migration complexity from legacy URLs and content.",
      "Integration count with third-party APIs and authentication.",
      "Compliance requirements such as cookie consent and data residency.",
    ],
    faqs: [
      {
        question: "Do you build custom sites or use a CMS?",
        answer:
          "Both, depending on needs. We recommend the simplest maintainable option that meets requirements.",
      },
      {
        question: "Can you host our site?",
        answer:
          "We can deploy to common cloud hosts or work on infrastructure you manage; ownership stays with you.",
      },
      {
        question: "How do you handle SEO during migration?",
        answer:
          "Redirects, metadata preservation, and Search Console updates are part of migration planning.",
      },
      {
        question: "Is security testing included?",
        answer:
          "Baseline security hygiene—updates, HTTPS, role hardening—is standard; formal penetration tests are separate.",
      },
      {
        question: "Can marketing edit everything?",
        answer:
          "Editors control defined regions; structural changes remain developer-governed to prevent breakage.",
      },
      {
        question: "What about multilingual sites?",
        answer:
          "Multilingual CMS patterns and hreflang implementation can be scoped with localization workflows.",
      },
      {
        question: "Do you provide warranties?",
        answer:
          "Post-launch bug-fix periods are defined in the proposal; ongoing work moves to maintenance if desired.",
      },
      {
        question: "Can you integrate HubSpot or Salesforce forms?",
        answer:
          "Yes, when APIs or embeds are available and access is provided during build.",
      },
    ],
    relatedSlugs: ["website-design", "wordpress-development", "website-maintenance"],
  },
  {
    slug: "wordpress-development",
    title: "WordPress Development",
    metaDescription:
      "WordPress development with custom themes, block patterns, plugin discipline, and secure update practices for marketing sites.",
    heroSubtitle:
      "WordPress builds that balance editor flexibility with controlled themes—fewer plugin conflicts, clearer updates, and performance that respects hosting reality.",
    intro: [
      "WordPress powers a large share of marketing sites because editors know it, yet unmanaged plugin stacks and off-the-shelf themes often produce slow, fragile installs. Thoughtful development constrains flexibility to what marketing actually needs.",
      "We build custom themes or child themes aligned to design comps, using block editor patterns where they speed publishing. Advanced Custom Fields or equivalent may structure content when blocks alone are insufficient—always with editor training.",
      "Plugin selection is conservative: each plugin must justify maintenance and security surface area. Functionality that belongs in custom code or external services is not duplicated by redundant extensions.",
      "Hosting recommendations match traffic and caching needs—object caching, CDN, and staging environments are configured so updates are tested before production.",
      "Security and update practices include role hardening, backup verification, and scheduled core/plugin updates with rollback plans.",
    ],
    whoItHelps:
      "WordPress development helps content-heavy organizations, publishers, and businesses already invested in WordPress who need a modern theme or migration from page builders.",
    problems: [
      "Page builder bloat slows admin and front-end performance.",
      "Theme updates break customizations because changes lived in the wrong layer.",
      "Too many plugins create conflicts and security vulnerabilities.",
      "Editors accidentally change global layout elements.",
      "Forms and CRM integrations break after plugin updates.",
      "Staging site does not mirror production, hiding bugs until launch.",
    ],
    deliverables: [
      {
        title: "WordPress architecture setup",
        body: "Theme approach, plugin list, hosting/caching configuration, and environment sync strategy.",
      },
      {
        title: "Custom theme or child theme",
        body: "Templates matching designs with block patterns and ACF or meta fields as scoped.",
      },
      {
        title: "Editor workflows",
        body: "Reusable blocks, page templates, and documentation so marketing publishes confidently.",
      },
      {
        title: "Migration and content import",
        body: "Content transfer, redirect mapping, and media optimization when replacing an existing site.",
      },
      {
        title: "Performance tuning",
        body: "Caching, image lazy-loading, and script management appropriate to your host.",
      },
      {
        title: "Launch and training",
        body: "Go-live support plus editor training session covering daily tasks and escalation paths.",
      },
    ],
    approach: [
      {
        title: "Audit existing install",
        body: "When migrating, we inventory plugins, shortcodes, and content models before rebuilding.",
      },
      {
        title: "Build theme systematically",
        body: "Components mirror design system pieces; global styles live in theme.json or equivalent.",
      },
      {
        title: "Limit plugin surface",
        body: "Required plugins are vetted; custom code replaces fragile one-off extensions when sensible.",
      },
      {
        title: "Test editor experience",
        body: "Real editors attempt publish tasks on staging to catch confusing fields early.",
      },
      {
        title: "Maintain after launch",
        body: "Optional maintenance covers updates, backups, and monitoring through website maintenance plans.",
      },
    ],
    measurement:
      "WordPress projects track page speed metrics, successful editor training outcomes, plugin count versus plan, uptime after launch, and reduction in support tickets related to publishing.",
    scopeFactors: [
      "Migration from page builders requiring content rebuild.",
      "Multisite or multilingual network complexity.",
      "WooCommerce or membership plugin integrations.",
      "Custom post types and relational content models.",
      "Enterprise SSO or compliance plugins affecting architecture.",
    ],
    faqs: [
      {
        question: "Do you use Elementor or Divi?",
        answer:
          "We prefer block-based custom themes for maintainability but can support existing builder sites when scoped for migration.",
      },
      {
        question: "Can you add WooCommerce?",
        answer:
          "Yes. Store scope may align with Shopify or ecommerce development services depending on catalog needs.",
      },
      {
        question: "Who manages plugin updates?",
        answer:
          "Your team can, or our maintenance retainer handles tested update cycles.",
      },
      {
        question: "Is WordPress secure enough for our business?",
        answer:
          "With updates, strong hosting, limited plugins, and proper roles, WordPress is widely used by enterprises; we implement hygiene accordingly.",
      },
      {
        question: "Can we edit menus and footers ourselves?",
        answer:
          "Yes, within menus and widget/block areas exposed intentionally in the theme.",
      },
      {
        question: "Do you provide hosting?",
        answer:
          "We recommend hosts and configure sites; billing typically stays between you and the provider.",
      },
      {
        question: "What about headless WordPress?",
        answer:
          "Headless setups are possible when a separate front end is required; complexity and cost rise accordingly.",
      },
      {
        question: "How are backups handled?",
        answer:
          "Backup plugins or host snapshots are configured and verified before major changes.",
      },
    ],
    relatedSlugs: ["website-development", "website-maintenance", "seo"],
  },
  {
    slug: "shopify-development",
    title: "Shopify Development",
    metaDescription:
      "Shopify development for Online Store 2.0 themes, app integrations, checkout extensibility limits, and conversion-focused storefronts.",
    heroSubtitle:
      "Shopify stores tailored to your catalog—theme customization, app selection with restraint, and checkout-adjacent improvements within platform rules.",
    intro: [
      "Shopify offers a mature commerce platform with predictable hosting and payments, but stores still fail when themes are overloaded with apps, product data is thin, or checkout customization expectations exceed what the platform allows without Shopify Plus features.",
      "We implement Online Store 2.0 themes with sections your merchandisers can rearrange, metafields for structured product storytelling, and navigation that scales as catalogs grow.",
      "App choices are evaluated for performance impact and data ownership. When possible, native Shopify features or lightweight custom theme code replace redundant monthly subscriptions.",
      "Conversion work focuses on collection filters, product page clarity, cart drawer behavior, and trust elements—shipping, returns, reviews—within theme and Shopify policy constraints.",
      "Integrations with ERP, email, reviews, and fulfillment apps are wired with error monitoring so sync failures do not silently stale inventory online.",
    ],
    whoItHelps:
      "Shopify development helps DTC brands launching on Shopify, retailers migrating from other carts, and existing merchants outgrowing their initial theme setup.",
    problems: [
      "Theme looks generic and does not merchandise hero products effectively.",
      "App stack slows mobile load times and complicates checkout.",
      "Product pages lack structured details buyers need to decide.",
      "International selling, taxes, or markets are configured incorrectly.",
      "Discount and promotion logic confuses customers at cart.",
      "Developers previously edited checkout in unsupported ways that broke on upgrades.",
    ],
    deliverables: [
      {
        title: "Shopify store audit",
        body: "Review of theme, apps, markets, payments, and product data model with prioritized recommendations.",
      },
      {
        title: "Theme customization or build",
        body: "Liquid sections, templates, and JSON settings aligned to design and merchandising needs.",
      },
      {
        title: "Metafield and metaobject setup",
        body: "Structured fields for specs, sizing, or content blocks editors manage without code.",
      },
      {
        title: "App integration and cleanup",
        body: "Install, configure, or remove apps with performance testing after changes.",
      },
      {
        title: "Checkout-adjacent improvements",
        body: "Cart, policies, and pre-checkout UX optimized within Shopify checkout limitations for your plan.",
      },
      {
        title: "Launch or replatform support",
        body: "Data import coordination, redirect planning, and smoke tests on payments and fulfillment flows.",
      },
    ],
    approach: [
      {
        title: "Model the catalog",
        body: "Collections, tags, and metafields reflect how customers browse—not only how warehouses pick.",
      },
      {
        title: "Build theme components",
        body: "Reusable sections speed landing pages for campaigns without new code each time.",
      },
      {
        title: "Integrate carefully",
        body: "Apps connect with documented data flows and webhooks monitored for failures.",
      },
      {
        title: "Test commerce paths",
        body: "Purchase tests cover discounts, shipping zones, and tax display for target markets.",
      },
      {
        title: "Train merchandisers",
        body: "Staff learn theme editor, inventory basics, and when to escalate technical issues.",
      },
    ],
    platforms:
      "Shopify work uses the Online Store 2.0 theme architecture (JSON templates, sections, app blocks), Shopify admin for products and markets, checkout behaviors available on your plan, and vetted apps from the Shopify App Store or custom private apps when required.",
    measurement:
      "Store projects track Web Vitals on key templates, add-to-cart and checkout initiation rates, app count and script weight, order test success, and post-launch support volume related to theme or integration issues.",
    scopeFactors: [
      "Shopify plan level and checkout customization needs.",
      "SKU count, variants, and bundling rules.",
      "Number of markets, currencies, and languages.",
      "ERP or 3PL integration complexity.",
      "Custom subscription or B2B pricing requirements.",
    ],
    faqs: [
      {
        question: "Can you customize checkout on standard Shopify?",
        answer:
          "Checkout customization is limited on non-Plus plans. We optimize cart and product flows and explain Plus-only options when relevant.",
      },
      {
        question: "Do you migrate from WooCommerce or Magento?",
        answer:
          "Migrations are scoped with product, customer, and redirect planning using Shopify import tools or middleware.",
      },
      {
        question: "Will you remove slow apps?",
        answer:
          "Yes, when alternatives exist. We measure before/after performance when removing or replacing apps.",
      },
      {
        question: "Can you build custom Shopify apps?",
        answer:
          "Private apps or extensions can be scoped separately when theme code alone is insufficient.",
      },
      {
        question: "Do you handle product photography?",
        answer:
          "Photography is not included by default; we specify image dimensions and art direction for your studio or vendor.",
      },
      {
        question: "How do subscriptions work?",
        answer:
          "Subscription apps integrate with Shopify; we configure within app capabilities and test renewal flows.",
      },
      {
        question: "Is Shopify good for B2B?",
        answer:
          "Shopify B2B features on Plus or apps on lower plans may fit; we assess against your ordering workflow.",
      },
      {
        question: "Who owns the store?",
        answer:
          "You retain store ownership and billing; we request collaborator access during development.",
      },
    ],
    relatedSlugs: ["ecommerce-development", "shopping-ads", "conversion-rate-optimization"],
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce Development",
    metaDescription:
      "E-commerce development across platforms—catalog structure, payments, shipping, integrations, and storefront UX for scalable online sales.",
    heroSubtitle:
      "Online store builds and rebuilds that connect product data, payments, and fulfillment—on Shopify, WooCommerce, or stacks suited to your operations.",
    intro: [
      "E-commerce development spans more than a shopping cart skin: it is how products, inventory, pricing, tax, shipping, and promotions flow from your operations to a reliable buyer experience. Weak integrations create oversells and angry customers faster than marketing can acquire replacements.",
      "We clarify platform fit early—Shopify for speed and SaaS convenience, WooCommerce for WordPress-centric stacks, headless when content and commerce teams need separation—without forcing a trendy architecture that your staff cannot operate.",
      "Catalog modeling defines variants, attributes, bundles, and digital goods with metafields or custom tables as appropriate. Search, filters, and merchandising blocks follow how shoppers actually browse.",
      "Payment gateways, fraud tools, and PCI responsibilities are implemented per provider documentation. We avoid storing card data on custom servers when hosted checkout options exist.",
      "Post-launch, analytics tie product and funnel events to marketing channels so you know which categories profit—not just which ads click.",
    ],
    whoItHelps:
      "E-commerce development serves retailers opening online channels, wholesalers adding self-service ordering, and brands replatforming when legacy carts block growth.",
    problems: [
      "Inventory sync lags cause cancellations after customers pay.",
      "Shipping rates quote incorrectly for dimensional weight or zones.",
      "Promotions stack in unintended ways at checkout.",
      "Product data lacks filters buyers expect—size, material, compatibility.",
      "Mobile checkout abandonment exceeds desktop without mobile-specific fixes.",
      "Marketplace or ERP integrations fail silently without monitoring.",
    ],
    deliverables: [
      {
        title: "Platform and integration plan",
        body: "Recommended cart, payment, tax, shipping, and ERP/review stack with data flow diagrams.",
      },
      {
        title: "Storefront implementation",
        body: "Theme or custom front end with catalog browse, product detail, cart, and account flows.",
      },
      {
        title: "Catalog and migration setup",
        body: "Product import tools, metafields, collections, and URL redirect maps from legacy stores.",
      },
      {
        title: "Payments and tax configuration",
        body: "Gateway setup, test transactions, and tax service integration for target regions.",
      },
      {
        title: "Operational integrations",
        body: "Connections to fulfillment, email, analytics, and marketplaces scoped in the project.",
      },
      {
        title: "QA and launch playbook",
        body: "Test order scripts, monitoring hooks, and rollback steps for go-live weekend.",
      },
    ],
    approach: [
      {
        title: "Map operations",
        body: "Fulfillment, returns, and customer service workflows inform catalog and checkout rules.",
      },
      {
        title: "Build core catalog",
        body: "Products, variants, and navigation structures launch before edge-case promotions.",
      },
      {
        title: "Wire money and logistics",
        body: "Payments, tax, and shipping are validated with real-world addresses and product weights.",
      },
      {
        title: "Integrate systems",
        body: "ERP and marketing tools sync with logging and alert paths for failures.",
      },
      {
        title: "Launch and stabilize",
        body: "Soft launch or full cutover with hypercare support during the first order cycles.",
      },
    ],
    measurement:
      "E-commerce launches measure successful test orders, checkout error rates, sync latency for inventory feeds, site performance on product pages, and baseline conversion funnel metrics for ongoing CRO.",
    scopeFactors: [
      "Platform choice and licensing costs borne by you.",
      "Catalog size, custom product configurators, and subscription models.",
      "Cross-border tax and duty complexity.",
      "Number of external integrations and API maturity.",
      "Need for custom admin tools beyond platform defaults.",
    ],
    faqs: [
      {
        question: "Shopify or WooCommerce—which do you recommend?",
        answer:
          "Shopify simplifies operations for many DTC brands; WooCommerce fits WordPress-heavy environments. We recommend after discovery.",
      },
      {
        question: "Can you build headless commerce?",
        answer:
          "Yes when content flexibility or performance goals justify the operational overhead.",
      },
      {
        question: "Do you handle PCI compliance?",
        answer:
          "We use hosted checkout and gateway tools so card data stays with providers; scope follows their compliance models.",
      },
      {
        question: "Can you connect our ERP?",
        answer:
          "When APIs or middleware exist, yes. ERP projects often define timeline and budget significantly.",
      },
      {
        question: "Will you migrate customer passwords?",
        answer:
          "Password hashes may not transfer between platforms; we plan reset or import strategies accordingly.",
      },
      {
        question: "Do you support B2B pricing tiers?",
        answer:
          "Customer groups, price lists, or quote flows can be implemented per platform capabilities.",
      },
      {
        question: "Is ongoing maintenance available?",
        answer:
          "Website maintenance retainers cover updates, monitoring, and small enhancements post-launch.",
      },
      {
        question: "Can you improve our existing store without replatforming?",
        answer:
          "Theme, app, and integration improvements are often scoped without full migration.",
      },
    ],
    relatedSlugs: ["shopify-development", "shopping-ads", "website-maintenance"],
  },
  {
    slug: "landing-page-design",
    title: "Landing Page Design",
    metaDescription:
      "Landing page design for campaigns—focused messaging, fast layouts, form optimization, and variants aligned to ad traffic.",
    heroSubtitle:
      "Campaign landing pages with one clear promise, proof, and CTA—designed and built to match ad intent and load quickly on mobile.",
    intro: [
      "Landing pages exist to convert a specific audience arriving from an ad, email, or event—not to replicate your entire website on one URL. When they mirror home pages, message match breaks and quality scores suffer alongside conversion rates.",
      "We design pages around a single primary action, supporting evidence, and objection handling above the fold where possible. Navigation is often minimized to reduce exit paths unrelated to the campaign goal.",
      "Visual hierarchy emphasizes headline, offer, social proof, and form or checkout entry. Mobile layouts prioritize thumb reach and readable type without requiring pinch-zoom.",
      "Speed matters: assets are compressed, scripts limited, and third-party widgets questioned. Slow landings waste paid clicks and erode trust before copy is read.",
      "Variant sets can be planned for A/B tests—alternate headlines or hero images—coordinated with CRO or media teams so experiments launch with proper tracking.",
    ],
    whoItHelps:
      "Landing page design helps paid media campaigns needing dedicated destinations, product launches with time-bound offers, and webinars or downloads requiring registration flows.",
    problems: [
      "Ads point to home pages with no message match to the creative.",
      "Forms ask for too much information before establishing value.",
      "Pages load slowly on mobile networks, increasing bounce from paid traffic.",
      "Legal disclaimers are missing or hidden, creating compliance risk.",
      "No tracking fires on thank-you views, breaking conversion optimization.",
      "Brand styling is inconsistent, making campaigns feel like phishing attempts.",
    ],
    deliverables: [
      {
        title: "Campaign brief alignment",
        body: "Audience, offer, ad copy, and success metric documented before wireframing.",
      },
      {
        title: "Wireframe and copy structure",
        body: "Section order, proof elements, and form fields validated against the funnel step.",
      },
      {
        title: "Visual design",
        body: "On-brand comps for desktop and mobile with attention states for forms and buttons.",
      },
      {
        title: "Build and integration",
        body: "Implemented page on your CMS, landing tool, or static host with form/CRM hooks.",
      },
      {
        title: "Tracking setup",
        body: "Analytics events, ad platform pixels, and UTM conventions verified before traffic scales.",
      },
      {
        title: "Optional variants",
        body: "Alternate sections prepared for testing when scoped with conversion rate optimization.",
      },
    ],
    approach: [
      {
        title: "Match ad intent",
        body: "Headlines and hero visuals echo the ad promise to maintain visitor confidence.",
      },
      {
        title: "Reduce friction",
        body: "Fields, steps, and distractions are cut to the minimum needed for a quality lead or sale.",
      },
      {
        title: "Build for speed",
        body: "Performance budgets guide image and script choices on the live URL.",
      },
      {
        title: "QA tracking",
        body: "Test submissions confirm CRM, email, and ad conversion events fire correctly.",
      },
      {
        title: "Hand off to media",
        body: "Final URLs and variant map delivered to PPC or email teams before launch day.",
      },
    ],
    measurement:
      "Landing pages judge conversion rate, bounce rate, average time to convert, form abandonment, and ad platform quality metrics where available. Test variants compare against control with agreed statistical rules.",
    scopeFactors: [
      "Number of unique pages versus modular template with swapped copy.",
      "Integration with marketing automation and double opt-in flows.",
      "Localization and regulatory copy for multiple regions.",
      "Need for interactive calculators or configurators on the page.",
      "Timeline tied to fixed campaign launch dates.",
    ],
    faqs: [
      {
        question: "Do you use Unbounce or build in our CMS?",
        answer:
          "We fit your stack—dedicated landing tools or CMS templates—based on who will edit pages later.",
      },
      {
        question: "Can you match Google Ads Quality Score needs?",
        answer:
          "Message match, speed, and mobile experience align with common quality factors though scores are not guaranteed.",
      },
      {
        question: "How fast can a page launch?",
        answer:
          "Simple pages can ship quickly with ready copy; complex integrations need more QA time.",
      },
      {
        question: "Do you write landing copy?",
        answer:
          "Copy can be included or supplied by you; structure still optimizes for scanning and conversion.",
      },
      {
        question: "Can one template support many campaigns?",
        answer:
          "Yes. Modular sections let marketing swap offers while preserving layout and tracking.",
      },
      {
        question: "Will pages be accessible?",
        answer:
          "We apply form labels, contrast, and focus styles; formal WCAG audits can be added if required.",
      },
      {
        question: "Do you host landing pages?",
        answer:
          "Pages deploy to your domain or tooling; DNS and SSL are coordinated with your team.",
      },
      {
        question: "What after the campaign ends?",
        answer:
          "Pages can redirect, retire with 410/404 strategy, or become evergreen assets—planned during kickoff.",
      },
    ],
    relatedSlugs: ["conversion-rate-optimization", "ppc-management", "website-design"],
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance",
    metaDescription:
      "Website maintenance with updates, backups, uptime monitoring, security hygiene, and small content or dev fixes on a schedule.",
    heroSubtitle:
      "Ongoing site care—updates tested on staging, backups verified, and minor fixes handled so your team focuses on marketing instead of firefighting.",
    intro: [
      "Websites are not finished at launch: CMS cores, plugins, themes, and server runtimes receive security patches continuously. Neglected updates lead to compromises, broken forms, and emergency rebuilds that cost more than steady maintenance.",
      "Our maintenance plans define what happens each month: backup verification, update application on staging first, uptime monitoring, and a bucket of small change hours for content tweaks or bug fixes.",
      "Security hygiene includes role reviews, SSL renewal checks, and malware scans appropriate to your host. We document incidents with remediation steps when issues arise.",
      "Performance is watched for regressions after updates—large image uploads, new scripts, or plugin changes can silently slow key pages. Alerts trigger investigation before campaigns suffer.",
      "Communication uses a ticket or request system with response expectations spelled out so marketing knows how to request landing page adjustments or form changes without slack messages lost in chat history.",
    ],
    whoItHelps:
      "Website maintenance helps teams without dedicated DevOps, ecommerce merchants during peak seasons, and organizations under compliance pressure to keep software current.",
    problems: [
      "Plugins and cores are months out of date, creating exploit risk.",
      "Backups exist but nobody has tested a restore recently.",
      "Small fixes queue for weeks because no retainer covers developer time.",
      "Downtime goes unnoticed until customers report broken checkout.",
      "Staging environments do not exist, so updates hit production untested.",
      "Analytics or forms break after updates without anyone assigned to fix them.",
    ],
    deliverables: [
      {
        title: "Maintenance onboarding audit",
        body: "Inventory of stack, plugins, integrations, hosting access, and current backup/update state.",
      },
      {
        title: "Scheduled update cycles",
        body: "Regular application of CMS, theme, and plugin patches tested on staging when available.",
      },
      {
        title: "Backup and restore verification",
        body: "Periodic restore tests or provider confirmations documented for your records.",
      },
      {
        title: "Uptime and error monitoring",
        body: "Alerts for downtime or critical form/checkout failures according to plan tier.",
      },
      {
        title: "Included change hours",
        body: "Monthly allocation for minor content, styling, or bug fixes defined in the agreement.",
      },
      {
        title: "Monthly status summary",
        body: "Report of updates applied, incidents handled, and recommendations for larger projects if needed.",
      },
    ],
    approach: [
      {
        title: "Stabilize access",
        body: "Hosting, DNS, and admin credentials are secured and stored per your policies.",
      },
      {
        title: "Establish staging rhythm",
        body: "Updates flow staging → QA → production to reduce surprise breakages.",
      },
      {
        title: "Monitor continuously",
        body: "Uptime and key transaction checks run between update cycles.",
      },
      {
        title: "Triage requests",
        body: "Incoming tasks are classified as in-scope maintenance versus project work needing separate quotes.",
      },
      {
        title: "Recommend proactively",
        body: "When plugins near end-of-life or performance degrades, we flag planned improvements early.",
      },
    ],
    measurement:
      "Maintenance tracks uptime percentage, successful update completion, time to resolve incidents, backup test outcomes, and utilization of included hours versus backlog of small requests.",
    scopeFactors: [
      "Platform—WordPress, Shopify, custom, or mixed.",
      "Traffic seasonality requiring freeze windows around peaks.",
      "Number of sites and environments under care.",
      "SLA response times for critical versus normal issues.",
      "Volume of included change hours versus advisory-only plans.",
    ],
    faqs: [
      {
        question: "Is maintenance only for WordPress?",
        answer:
          "No. Shopify, custom sites, and hybrid stacks can be covered with tailored checklists.",
      },
      {
        question: "What if an update breaks the site?",
        answer:
          "We roll back using backups or staging snapshots and diagnose before reattempting fixes.",
      },
      {
        question: "Are new features included?",
        answer:
          "Large features are quoted separately; retainers cover small fixes and tweaks within allotted hours.",
      },
      {
        question: "Do you provide 24/7 support?",
        answer:
          "Response windows are defined in the plan; true 24/7 can be scoped for critical commerce sites.",
      },
      {
        question: "Can you maintain our staging and production?",
        answer:
          "Yes. Both environments receive coordinated updates when staging exists.",
      },
      {
        question: "Who hosts the site?",
        answer:
          "You typically retain hosting contracts; we work as technical administrators with access.",
      },
      {
        question: "How do we submit requests?",
        answer:
          "Email or ticket system with templates for urgency and expected turnaround.",
      },
      {
        question: "Will you monitor SEO after updates?",
        answer:
          "Basic checks for indexation-breaking changes are included; ongoing SEO is a separate service.",
      },
    ],
    relatedSlugs: ["wordpress-development", "website-development", "ecommerce-development"],
  },
];
