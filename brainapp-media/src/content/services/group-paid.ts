import type { ServiceContent } from "@/content/types";

export const paidServices: ServiceContent[] = [
  {
    slug: "ppc-management",
    title: "PPC Management",
    metaDescription:
      "PPC management across search and social with structured accounts, budget pacing, conversion tracking, and reporting tied to business goals.",
    heroSubtitle:
      "Paid campaigns managed with clear account architecture, disciplined testing, and reporting that connects spend to leads and revenue—not vanity clicks.",
    intro: [
      "Pay-per-click advertising can produce measurable demand quickly, but accounts often grow messy: overlapping keywords, stale ads, broken tracking, and budgets spread too thin to learn anything useful. Management should impose structure, not just increase bids.",
      "Our PPC management covers the full operational loop—strategy, build or rebuild, daily tuning, and reporting—aligned to the outcomes you care about, whether that is qualified leads, purchases, or booked appointments.",
      "We treat platforms as different channels with different intent. Search captures active demand; social and display introduce offers to audiences who may not be searching yet. Budget allocation reflects that distinction instead of copying the same creative everywhere.",
      "Conversion tracking is validated before scaling spend. Without reliable signals, automated bidding and audience strategies optimize toward noise. We document what is measured, what is inferred, and where offline imports may be needed.",
      "Communication stays predictable: you receive summaries that explain what changed, why, and what we are testing next—without jargon that hides performance issues.",
    ],
    whoItHelps:
      "PPC management suits businesses spending consistently on ads who need expert oversight, teams launching paid channels for the first time, and organizations recovering from a paused or neglected account.",
    problems: [
      "Cost per lead rises while quality stagnates because structure and negatives lag behind new queries.",
      "Tracking breaks after site changes, causing smart bidding to target the wrong events.",
      "Campaigns duplicate each other in auctions, inflating costs without adding reach.",
      "Reporting shows clicks and impressions but not pipeline or revenue contribution.",
      "Seasonal budgets are spent too early or held back without a pacing plan.",
      "Creative and landing pages drift out of sync with active ad promises.",
    ],
    deliverables: [
      {
        title: "Account audit and roadmap",
        body: "Review of campaigns, tracking, and historical performance with prioritized fixes and a testing plan for the first quarter of management.",
      },
      {
        title: "Campaign architecture",
        body: "Logical campaign and ad group structure with naming conventions that scale as you add products, regions, or offers.",
      },
      {
        title: "Keyword and audience strategy",
        body: "Target lists, match type policies, and audience segments documented with rationale for each platform in scope.",
      },
      {
        title: "Ad copy and extension setup",
        body: "Responsive search assets, callouts, sitelinks, and other extensions aligned to landing pages and compliance needs.",
      },
      {
        title: "Bid and budget management",
        body: "Ongoing pacing, bid strategy selection, and guardrails so automation serves business targets rather than platform defaults alone.",
      },
      {
        title: "Performance reporting",
        body: "Regular reports with context on changes, experiments, and recommendations—not raw exports without narrative.",
      },
    ],
    approach: [
      {
        title: "Define success metrics",
        body: "We agree on primary conversions, secondary signals, and how CRM or ecommerce data will inform optimization.",
      },
      {
        title: "Fix measurement first",
        body: "Tags, conversions, and consent-mode considerations are verified before major budget shifts.",
      },
      {
        title: "Restructure or launch cleanly",
        body: "Campaigns are organized for clarity and control, retiring redundant entities that waste spend.",
      },
      {
        title: "Test with discipline",
        body: "Experiments change one lever at a time where possible—creative, landing page, or bid strategy—so results are interpretable.",
      },
      {
        title: "Iterate and document",
        body: "Winning patterns are scaled; losers are retired with notes so institutional knowledge survives staff changes.",
      },
    ],
    platforms:
      "Management can include Google Ads, Microsoft Advertising, Meta Ads, and other paid channels you operate. Each platform’s bidding, attribution, and creative requirements are handled natively rather than forcing identical setups everywhere.",
    measurement:
      "We track cost per acquisition, conversion volume, impression share where relevant, and quality metrics such as lead-to-opportunity rates when CRM data is shared. Goals are compared to baselines and agreed targets, not guaranteed rankings or specific ROAS figures.",
    scopeFactors: [
      "Monthly ad spend and number of platforms managed.",
      "Catalog size for shopping or dynamic campaigns.",
      "Geographic and language segmentation complexity.",
      "Need for landing page builds or CRO support outside media buying.",
      "Frequency of reporting and meeting cadence with stakeholders.",
    ],
    faqs: [
      {
        question: "Do you manage both Google and Meta ads?",
        answer:
          "Yes, when scoped. We align messaging and budgets across platforms while respecting how each channel attributes conversions.",
      },
      {
        question: "Is there a minimum ad spend?",
        answer:
          "Spend minimums depend on competitive pressure and learning needs. We discuss realistic budgets during discovery so tests can reach significance.",
      },
      {
        question: "Who owns the ad accounts?",
        answer:
          "You retain account ownership. We request appropriate access levels to manage campaigns and reporting without holding your data hostage.",
      },
      {
        question: "How quickly can you take over an existing account?",
        answer:
          "Transition starts with audit and access. Major restructuring may be phased to preserve historical learning where platforms allow.",
      },
      {
        question: "Do you build landing pages?",
        answer:
          "Landing page design and development can be added as related services. PPC management assumes pages exist or are in progress.",
      },
      {
        question: "How do you handle seasonal businesses?",
        answer:
          "We plan budget ramps, promotional calendars, and bid adjustments ahead of peak periods with post-season reviews.",
      },
      {
        question: "Will you guarantee a cost per lead?",
        answer:
          "We do not guarantee specific costs or volumes. We optimize toward agreed targets using transparent reporting and testing.",
      },
      {
        question: "Can you train our in-house team?",
        answer:
          "Knowledge transfer sessions can be scoped so internal staff understand account structure and reporting after a handoff period.",
      },
    ],
    relatedSlugs: ["google-ads", "meta-ads", "conversion-rate-optimization"],
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    metaDescription:
      "Google Ads for Search, Display, Shopping, and Performance Max—keywords, negatives, conversion tracking, and structured campaign builds.",
    heroSubtitle:
      "Google Ads campaigns built around intent, clean conversion data, and account structures that stay manageable as keywords and products multiply.",
    intro: [
      "Google Ads remains a primary capture channel for high-intent searches, but the interface encourages sprawl: Performance Max alongside legacy Shopping, broad match paired with weak negatives, and conversion actions that count page views as sales.",
      "We implement Search campaigns with deliberate match-type policies, query mining routines, and negative keyword lists that evolve weekly—not once at launch. Ad copy uses responsive search ads with assets mapped to themes so messaging stays relevant to each ad group.",
      "Shopping and feed-based campaigns receive attention to product titles, custom labels, and priority structures that reflect margin and inventory goals. Feed diagnostics are monitored because disapproved items silently shrink reachable catalog segments.",
      "Display and remarketing layers support awareness and re-engagement when creative and audience definitions align with consent and list policies. We avoid treating Display as a clone of Search keywords when user intent differs.",
      "Performance Max is scoped with clear asset groups, audience signals, and brand exclusions where appropriate, with reporting that separates what Google automates from what we can still influence through inputs and exclusions.",
    ],
    whoItHelps:
      "Google Ads services help local service providers competing on map and search placements, ecommerce brands with large feeds, and B2B firms targeting niche professional queries.",
    problems: [
      "Search terms report fills with irrelevant queries because negatives and match types are outdated.",
      "Conversion tracking double-counts or misses key events after site updates.",
      "Shopping campaigns show generic titles that underperform against competitors with richer feeds.",
      "Performance Max cannibalizes branded search without incremental reach reporting clarity.",
      "Quality Score suffers from ad and landing page mismatch, raising CPCs unnecessarily.",
      "Budget concentrates on a few broad campaigns with no insight into product-level profitability.",
    ],
    deliverables: [
      {
        title: "Google Ads account assessment",
        body: "Review of campaigns, linking, conversion actions, and Merchant Center ties with a written priority list.",
      },
      {
        title: "Search campaign build or rebuild",
        body: "Themed ad groups, RSA assets, extensions, and negative keyword foundations aligned to landing pages.",
      },
      {
        title: "Shopping and feed alignment",
        body: "Campaign structure, priority settings, and feed improvement recommendations tied to Merchant Center diagnostics.",
      },
      {
        title: "Display and remarketing setup",
        body: "Audience definitions, creative specs, and exclusion rules consistent with your privacy and consent setup.",
      },
      {
        title: "Performance Max configuration",
        body: "Asset groups, listing groups where applicable, audience signals, and brand term handling documented for ongoing tuning.",
      },
      {
        title: "Tracking and tagging validation",
        body: "Google tag or Google Tag Manager implementation checks, conversion primary/secondary settings, and enhanced conversions when used.",
      },
    ],
    approach: [
      {
        title: "Clarify conversion hierarchy",
        body: "Primary and secondary actions are defined so automated bidding optimizes toward real business outcomes.",
      },
      {
        title: "Structure for control",
        body: "Campaigns split by intent, brand versus non-brand, and product lines so budgets and bids reflect priorities.",
      },
      {
        title: "Launch with monitoring",
        body: "Early weeks emphasize search term review, feed health, and disapproval resolution before aggressive scaling.",
      },
      {
        title: "Optimize queries and assets",
        body: "Negatives expand, RSAs rotate with performance labels, and Shopping titles or labels adjust based on item reports.",
      },
      {
        title: "Report with context",
        body: "Insights cover impression share, conversion trends, and test learnings rather than exporting dashboards alone.",
      },
    ],
    platforms:
      "Google Ads coverage includes Search (keywords, match types, responsive search ads, ad extensions), Display (audiences, placements, responsive display assets), Shopping (Standard and free listings coordination via Merchant Center), Performance Max (asset groups, audience signals, listing groups), and conversion tracking via Google tag or Tag Manager—including primary/secondary conversions, enhanced conversions where configured, and offline import planning when CRM ties exist.",
    measurement:
      "We monitor conversions, conversion value when ecommerce tracking is sound, cost per conversion, click-through rate by campaign type, search impression share for Search, and product-level performance in Shopping. Comparisons use agreed date ranges and account change logs to explain movement.",
    scopeFactors: [
      "Brand versus non-brand separation and trademark policies.",
      "Number of SKUs and feed update frequency for Shopping.",
      "Multi-location targeting with location extensions or separate campaigns.",
      "Languages and currency setup for international selling.",
      "Dependency on third-party checkout or delayed conversion imports.",
    ],
    faqs: [
      {
        question: "Should we use Performance Max or Standard Shopping?",
        answer:
          "It depends on feed maturity, creative assets, and control needs. We recommend a mix or single approach after reviewing catalog size and historical performance.",
      },
      {
        question: "How do you handle broad match?",
        answer:
          "Broad match is used with solid conversion data and active negative lists. We monitor search terms frequently when broad is enabled.",
      },
      {
        question: "Can you fix disapproved Merchant Center items?",
        answer:
          "We diagnose disapproval reasons and coordinate feed or landing page fixes with your team; some issues require product data changes on your side.",
      },
      {
        question: "Do you manage Google Business Profile ads?",
        answer:
          "Local campaigns and location assets can be included when local presence is part of your Google strategy.",
      },
      {
        question: "What access do you need?",
        answer:
          "Standard admin or manager access to Google Ads and linked Merchant Center, Analytics, and Tag Manager as applicable.",
      },
      {
        question: "How often are negatives updated?",
        answer:
          "Active Search accounts receive regular search term reviews; cadence scales with spend and query volume.",
      },
      {
        question: "Will you rewrite our product feed?",
        answer:
          "We recommend title and attribute improvements and can coordinate implementation; bulk feed edits may involve your ecommerce platform team.",
      },
      {
        question: "How do you treat branded search?",
        answer:
          "Brand campaigns are structured separately with budgets that reflect defensive goals and incremental reach testing where appropriate.",
      },
    ],
    relatedSlugs: ["ppc-management", "shopping-ads", "remarketing"],
  },
  {
    slug: "meta-ads",
    title: "Meta Ads",
    metaDescription:
      "Meta Ads on Facebook and Instagram—campaign structure, audiences, pixel or Conversions API setup, and creative testing workflows.",
    heroSubtitle:
      "Meta campaigns organized for learning: clear objectives, event integrity, and creative variants sized for Feed, Stories, and Reels placements.",
    intro: [
      "Meta’s advertising system rewards accounts that send consistent event data and refresh creative before fatigue sets in. Many advertisers struggle with fragmented pixels, duplicated audiences, and ad sets that never exit the learning phase because budgets are too fragmented.",
      "We structure campaigns around your funnel—awareness, consideration, conversion—with event definitions that match how your site or app actually behaves. Aggregated Event Measurement and Conversions API configurations are considered when browser restrictions limit pixel-only tracking.",
      "Audience strategy balances prospecting and retargeting without excessive overlap. Custom audiences from customer lists, site visitors, and engagers are maintained with realistic refresh expectations and exclusion rules so prospects are not bombarded after converting.",
      "Creative is treated as a primary lever. We coordinate with design on aspect ratios and safe zones, and we plan variant sets so tests isolate hooks rather than changing copy, image, and audience simultaneously.",
      "Reporting connects Meta metrics to downstream outcomes when CRM or ecommerce data is available, acknowledging attribution differences between Meta and analytics platforms.",
    ],
    whoItHelps:
      "Meta Ads fit consumer brands driving online sales, local businesses promoting events or appointments, and B2B companies targeting job titles and interest stacks with lead forms or landing pages.",
    problems: [
      "Pixel fires duplicate events, confusing optimization and reporting.",
      "Ad sets stall in learning limited due to low budget or too many concurrent tests.",
      "Creative uses one size across Reels and Feed, cropping critical text or offers.",
      "Retargeting audiences overlap prospecting, wasting spend on existing customers.",
      "Lead forms capture low-quality contacts without validation questions or follow-up flows.",
      "Account structure from years of tests makes performance hard to interpret.",
    ],
    deliverables: [
      {
        title: "Meta Business and pixel audit",
        body: "Review of Business Manager roles, pixel or dataset health, domain verification, and event priority where applicable.",
      },
      {
        title: "Campaign and ad set architecture",
        body: "Objective-aligned structure with naming conventions, budget consolidation guidance, and audience separation.",
      },
      {
        title: "Audience build and maintenance",
        body: "Custom, lookalike, and saved audience definitions with exclusion logic documented for your CRM stage.",
      },
      {
        title: "Creative briefing alignment",
        body: "Specs and variant plans coordinated with ad creative production for Feed, Stories, and Reels placements.",
      },
      {
        title: "Conversions API coordination",
        body: "Implementation guidance with your developers or partners to improve event match quality when browser tracking is limited.",
      },
      {
        title: "Optimization and reporting rhythm",
        body: "Scheduled performance reviews covering creative fatigue signals, frequency, and cost per result trends.",
      },
    ],
    approach: [
      {
        title: "Validate events",
        body: "We confirm the events you optimize toward fire reliably on key pages or purchase flows before scaling budgets.",
      },
      {
        title: "Consolidate for learning",
        body: "Ad sets are grouped to gather sufficient conversion volume per week when platform learning dynamics apply.",
      },
      {
        title: "Launch creative tests",
        body: "New hooks rotate in controlled batches so results tie to identifiable visuals or messages.",
      },
      {
        title: "Tune audiences",
        body: "Prospecting and retargeting pools adjust based on frequency, overlap diagnostics, and list freshness.",
      },
      {
        title: "Align with landing experience",
        body: "We flag mismatches between ad promise and page content that hurt conversion and relevance scores.",
      },
    ],
    platforms:
      "Meta Ads includes Facebook and Instagram placements across Feed, Stories, Reels, and Audience Network when appropriate. Setup covers Ads Manager campaigns, pixel or dataset events, optional Conversions API, catalog ads for ecommerce, and lead instant forms when used instead of site landing pages.",
    measurement:
      "We track cost per result for the chosen optimization event, frequency, CTR, and downstream metrics such as purchase revenue or qualified leads when integrated. Attribution windows are documented so stakeholders understand differences versus site analytics.",
    scopeFactors: [
      "Prospecting versus retargeting budget split and catalog size for dynamic ads.",
      "Creative production volume needed to combat fatigue.",
      "Lead form versus landing page funnels and CRM integration complexity.",
      "Regulated industry ad copy and special category settings.",
      "Number of markets with localized creative or language requirements.",
    ],
    faqs: [
      {
        question: "Do we need Conversions API if we have a pixel?",
        answer:
          "Browser tracking alone is increasingly incomplete. CAPI improves event reliability when implemented correctly alongside the pixel.",
      },
      {
        question: "What budget avoids learning limited status?",
        answer:
          "It varies by event cost and audience size. We recommend budget consolidation guidance based on your historical cost per result.",
      },
      {
        question: "Can you manage Instagram-only campaigns?",
        answer:
          "Placement controls can emphasize Instagram surfaces while using Meta’s unified campaign structure.",
      },
      {
        question: "How do lookalike audiences work today?",
        answer:
          "Lookalikes seed from customer lists or engagers. List quality and size affect performance; we set expectations without promising specific reach.",
      },
      {
        question: "Do you create the ad images?",
        answer:
          "Creative production is available through our ad creatives service or your in-house team following placement specs we provide.",
      },
      {
        question: "How do you handle iOS tracking limitations?",
        answer:
          "We use aggregated reporting, modeled metrics where disclosed, and CAPI improvements while focusing on downstream CRM validation.",
      },
      {
        question: "Can Meta ads drive B2B leads?",
        answer:
          "Yes, with targeting and offers suited to professional audiences, often paired with lead forms or gated content landing pages.",
      },
      {
        question: "How often should creative refresh?",
        answer:
          "Refresh timing depends on spend and audience size. We monitor frequency and performance decay to schedule new variants.",
      },
    ],
    relatedSlugs: ["ad-creatives", "ppc-management", "remarketing"],
  },
  {
    slug: "microsoft-ads",
    title: "Microsoft Ads",
    metaDescription:
      "Microsoft Advertising for Bing search and Shopping—keyword structure, imports from Google Ads, UET tracking, and audience extensions.",
    heroSubtitle:
      "Microsoft Advertising campaigns that capture search demand on Bing and partner networks with tracking and feeds aligned to your existing stack.",
    intro: [
      "Microsoft Advertising reaches audiences searching on Bing, Yahoo, DuckDuckGo syndication, and Microsoft-owned surfaces. Competition is often lower than on Google for the same queries, yet accounts copied blindly from other platforms inherit the same structural flaws.",
      "We configure Universal Event Tracking so conversions mirror your site goals, enabling bid strategies that resemble what you run elsewhere—without assuming numbers will match one-to-one due to audience differences.",
      "Search campaigns receive tailored ad copy and extensions even when keyword themes import from Google Ads. Messaging can emphasize segments that over-index on Microsoft traffic, such as certain desktop professionals or older demographics depending on your data.",
      "Shopping campaigns integrate with Merchant Center alternatives via Microsoft’s feed requirements, and we monitor feed errors that block product ads from serving.",
      "LinkedIn profile targeting layers are available for B2B scenarios when account settings and privacy policies support those combinations, scoped with realistic reach estimates.",
    ],
    whoItHelps:
      "Microsoft Ads benefit advertisers seeking incremental search volume beyond Google, B2B marketers targeting professional demographics, and ecommerce stores wanting another Shopping surface.",
    problems: [
      "UET tags missing or firing on the wrong pages, breaking bid automation.",
      "Imported Google campaigns run unchanged with match types ill-suited to Microsoft traffic.",
      "Shopping feeds reject items for attribute gaps not visible in other platforms.",
      "Budget sits unspent because bids are too low for Microsoft auction dynamics.",
      "Reporting is ignored because Microsoft is treated as an afterthought.",
      "Audience ads run without exclusions, paying for repeat visitors unnecessarily.",
    ],
    deliverables: [
      {
        title: "Microsoft Ads account setup or audit",
        body: "Review of campaigns, UET implementation, linking, and import status from other ad platforms.",
      },
      {
        title: "Search campaign configuration",
        body: "Keyword groups, responsive search ads, and extensions adapted for Microsoft policies and user behavior.",
      },
      {
        title: "Shopping campaign alignment",
        body: "Feed connection, campaign priorities, and product group structure with error monitoring.",
      },
      {
        title: "UET and conversion goals",
        body: "Tag verification, goal values, and offline conversion import planning when applicable.",
      },
      {
        title: "Audience and remarketing layers",
        body: "Remarketing lists and in-market audiences where they complement search intent.",
      },
      {
        title: "Cross-platform reporting notes",
        body: "Side-by-side context with other search engines so stakeholders understand incremental versus duplicated reach.",
      },
    ],
    approach: [
      {
        title: "Establish tracking",
        body: "UET and conversion goals are validated before relying on automated bidding.",
      },
      {
        title: "Import selectively",
        body: "Google imports accelerate setup, but we adjust budgets, bids, and ad copy rather than running clones unchecked.",
      },
      {
        title: "Optimize search terms",
        body: "Query reports inform negatives and keyword expansion specific to Microsoft’s network.",
      },
      {
        title: "Maintain feed health",
        body: "Shopping disapprovals and attribute gaps are addressed on a recurring cadence.",
      },
      {
        title: "Review incrementality",
        body: "Performance is judged on Microsoft-specific metrics and any lift tests you run versus holding budgets elsewhere.",
      },
    ],
    platforms:
      "Microsoft Advertising includes Search ads on Bing and syndicated partners, Shopping ads via Microsoft Merchant Center feeds, Audience ads, and remarketing powered by UET. LinkedIn targeting overlays are available for eligible campaigns when your strategy calls for professional filters.",
    measurement:
      "We report clicks, conversions, cost per conversion, impression share, and revenue when tracked. Comparisons to other search platforms include caveats about audience overlap and attribution settings unique to Microsoft Ads.",
    scopeFactors: [
      "Whether campaigns start from import or net-new builds.",
      "Feed complexity shared with or separate from Google Merchant Center.",
      "B2B need for LinkedIn profile targeting versus pure search.",
      "Budget size relative to minimum traffic for Shopping and Search tests.",
      "Integration with multi-channel PPC management reporting.",
    ],
    faqs: [
      {
        question: "Is Microsoft Ads worth it if we already use Google?",
        answer:
          "For many advertisers it provides incremental reach at competitive CPCs. Viability depends on your industry and query set; audit data helps decide budget split.",
      },
      {
        question: "Can you import our Google Ads account?",
        answer:
          "Yes. Imports save time, but we refine structure and bids rather than treating import as finished work.",
      },
      {
        question: "What is UET?",
        answer:
          "Universal Event Tracking is Microsoft’s tag for conversions and remarketing lists, similar in role to Google’s conversion tagging.",
      },
      {
        question: "Do Shopping ads use the same feed as Google?",
        answer:
          "Feeds can often be shared with adjustments for Microsoft’s attribute requirements and Merchant Center setup.",
      },
      {
        question: "How much budget should Microsoft get?",
        answer:
          "Budget share is tested against performance goals. We start with controlled spend, then scale if metrics meet agreed thresholds.",
      },
      {
        question: "Can you manage Microsoft alongside Google in one engagement?",
        answer:
          "Yes. Cross-platform PPC management keeps messaging aligned while respecting platform-specific settings.",
      },
      {
        question: "Are there industries with restrictions?",
        answer:
          "Microsoft publishes advertising policies for sensitive categories. We review your vertical for compliance during onboarding.",
      },
      {
        question: "How do you report results?",
        answer:
          "Microsoft Ads Manager data is summarized on a schedule matching your Google reporting for easier comparison.",
      },
    ],
    relatedSlugs: ["google-ads", "ppc-management", "shopping-ads"],
  },
  {
    slug: "shopping-ads",
    title: "Shopping Ads",
    metaDescription:
      "Shopping ads and product feed optimization for Google and Microsoft—titles, attributes, campaign tiers, and Merchant Center hygiene.",
    heroSubtitle:
      "Product listings that earn clicks with accurate feeds, structured Shopping campaigns, and ongoing diagnostics—not set-and-forget catalog uploads.",
    intro: [
      "Shopping ads show product imagery, price, and merchant name before a click, which makes feed quality as influential as bid strategy. Thin titles, missing GTINs, and inconsistent availability silently remove SKUs from auction eligibility.",
      "We start with Merchant Center or Microsoft Merchant Center health: account linking, policy compliance, shipping and tax settings, and product data specifications. Fixes there prevent campaigns from optimizing toward a shrinking eligible catalog.",
      "Campaign structure reflects merchandising goals—hero SKUs, margin bands, seasonal categories—using product groups, custom labels, and priority tiers where Standard Shopping still applies, or listing groups within Performance Max when that is the chosen vehicle.",
      "Feed optimization focuses on searchable titles, accurate google_product_category values, and images that meet platform rules. Supplemental feeds can layer campaign labels without rewriting your entire ecommerce export.",
      "Reporting drills to item IDs so you see which products consume spend and which generate revenue, enabling merchandising teams to adjust assortment or pricing with media feedback.",
    ],
    whoItHelps:
      "Shopping ads support ecommerce retailers of any catalog size, brands selling direct-to-consumer with structured SKU data, and wholesalers listing approved products through authorized feeds.",
    problems: [
      "Large portions of the catalog disapproved for missing identifiers or policy violations.",
      "Generic product titles underperform against competitors with descriptive, keyword-aware titles.",
      "Campaigns treat all SKUs equally, overspending on low-margin or out-of-stock items.",
      "Free listings and paid campaigns conflict because base feed data is inconsistent.",
      "Performance Max obscures product-level insight without supplemental reporting setups.",
      "Seasonal updates lag, advertising products that cannot ship in promised windows.",
    ],
    deliverables: [
      {
        title: "Merchant Center audit",
        body: "Diagnostics review covering disapprovals, account issues, shipping/tax configuration, and linked Ads accounts.",
      },
      {
        title: "Feed improvement plan",
        body: "Title, description, and attribute recommendations with prioritization by revenue impact and fix effort.",
      },
      {
        title: "Campaign structure design",
        body: "Shopping or Performance Max listing groups aligned to labels, categories, or brand tiers you care about.",
      },
      {
        title: "Negative keyword and brand rules",
        body: "Query exclusions for irrelevant searches and brand/non-brand separation where strategy requires it.",
      },
      {
        title: "Supplemental feed setup",
        body: "Optional feeds to inject custom labels or promotional titles without altering the primary ecommerce export.",
      },
      {
        title: "Item-level performance reporting",
        body: "Regular views of top and bottom SKUs by spend and conversion value to inform merchandising.",
      },
    ],
    approach: [
      {
        title: "Stabilize feed eligibility",
        body: "Disapprovals and account warnings are cleared so campaigns optimize across the intended catalog.",
      },
      {
        title: "Label for strategy",
        body: "Custom labels or grouping reflect margin, seasonality, or inventory coverage for bid and budget control.",
      },
      {
        title: "Improve data quality",
        body: "Titles and attributes are enhanced iteratively with change logs to measure impact on impressions and CTR.",
      },
      {
        title: "Tune bids and priorities",
        body: "Product groups or listing groups adjust to push spend toward strategic segments.",
      },
      {
        title: "Coordinate with site merchandising",
        body: "Stock and pricing updates on the site sync to feed refresh schedules to avoid advertising unavailable offers.",
      },
    ],
    platforms:
      "Shopping work spans Google Merchant Center with Search, Shopping, and Performance Max listings, and Microsoft Merchant Center for Bing Shopping. We align product data specs, supplemental feeds, and conversion tracking tied to ecommerce purchases.",
    measurement:
      "Metrics include impressions, clicks, CTR, conversion value, cost of sale or ROAS when value tracking is accurate, and item-level contribution. Feed fix impact is tracked via diagnostic counts and eligible item totals over time.",
    scopeFactors: [
      "SKU count and number of variants per product.",
      "Feed generation method—platform export, middleware, or manual sheets.",
      "Number of countries, currencies, and language-specific feeds.",
      "Use of Performance Max versus Standard Shopping-only management.",
      "Need for agency coordination with ERP or PIM teams for attribute enrichment.",
    ],
    faqs: [
      {
        question: "Do you manage the product feed directly?",
        answer:
          "We recommend changes and can implement supplemental feeds; primary feed edits often require your ecommerce or IT team with our specifications.",
      },
      {
        question: "What is a supplemental feed?",
        answer:
          "An additional data source that overlays labels or titles keyed by product ID without replacing your main export.",
      },
      {
        question: "Can Shopping run without a GTIN?",
        answer:
          "Some custom goods qualify for identifier exemptions. We document when exemptions apply and when missing GTINs block listings.",
      },
      {
        question: "How does Performance Max affect Shopping?",
        answer:
          "Performance Max uses listing groups fed by Merchant Center data. Control shifts toward asset groups and signals; we explain tradeoffs during planning.",
      },
      {
        question: "Do free product listings matter?",
        answer:
          "Free listings extend visibility in Google surfaces. Feed quality helps both paid and organic product placements.",
      },
      {
        question: "How often should feeds update?",
        answer:
          "Inventory and price should refresh at least daily for most retailers; high-velocity catalogs may need more frequent sync.",
      },
      {
        question: "Can you fix image disapprovals?",
        answer:
          "We identify policy issues—promotional overlays, watermarks—and coordinate replacement assets meeting platform rules.",
      },
      {
        question: "Will you guarantee ROAS targets?",
        answer:
          "We optimize toward agreed efficiency goals but do not guarantee specific return figures because markets and catalogs vary.",
      },
    ],
    relatedSlugs: ["google-ads", "ecommerce-development", "ppc-management"],
  },
  {
    slug: "remarketing",
    title: "Remarketing",
    metaDescription:
      "Remarketing across Google, Meta, and display networks—audience lists, consent-aware tagging, frequency caps, and sequential messaging.",
    heroSubtitle:
      "Re-engagement campaigns that respect consent rules, segment visitors by intent, and rotate messages instead of hammering one ad everywhere.",
    intro: [
      "Remarketing reminds people who already interacted with your brand to return—yet poorly built programs chase everyone with the same banner, ignore purchasers who should be excluded, and rely on tags that violate consent choices in regulated regions.",
      "We segment lists by behavior: product viewers, cart abandoners, form starters, content engagers, and past customers eligible for cross-sell. Each segment receives creative and landing paths aligned to where they stopped in the funnel.",
      "List freshness and membership duration are set deliberately. Short windows suit promotional urgency; longer windows fit considered purchases. Caps limit frequency so awareness campaigns do not feel like stalking.",
      "Tag deployment respects your cookie banner and platform consent modes. Lists shrink when tracking is declined—that is expected—so prospecting budgets must account for remarketing pool size realistically.",
      "Sequential messaging can introduce education before offer-heavy creative, especially for services with long sales cycles. We document the story arc so creative updates stay coherent.",
    ],
    whoItHelps:
      "Remarketing helps ecommerce stores recovering abandoned carts, B2B sites nurturing repeated content visits, and event promoters reminding registrants or waitlists.",
    problems: [
      "All site visitors see identical ads regardless of product interest or funnel stage.",
      "Converted customers still receive acquisition offers, wasting spend and annoying buyers.",
      "Remarketing tags fire before consent, creating compliance risk and noisy lists.",
      "Creative fatigues quickly because only one visual runs at high frequency.",
      "Cross-device gaps make list sizes look smaller than actual interest.",
      "No connection between remarketing audiences and email or CRM journeys.",
    ],
    deliverables: [
      {
        title: "Remarketing tag audit",
        body: "Review of pixels, tags, and consent integration across Google, Meta, and other networks in scope.",
      },
      {
        title: "Audience segmentation plan",
        body: "Defined lists with rules, durations, and exclusions documented in plain language for marketing and legal review.",
      },
      {
        title: "Campaign builds per platform",
        body: "Display, Search RLSA, Meta retargeting, or Performance Max audience signals configured to match segments.",
      },
      {
        title: "Creative and offer mapping",
        body: "Alignment between segment temperature and ad message, coordinated with ad creatives production when needed.",
      },
      {
        title: "Frequency and bid guidelines",
        body: "Caps and bid adjustments so remarketing supports conversion without dominating entire budgets blindly.",
      },
      {
        title: "Performance and list health reporting",
        body: "Updates on list sizes, consent impact, and segment performance trends over time.",
      },
    ],
    approach: [
      {
        title: "Map funnel events",
        body: "We inventory pages and events that define each audience, ensuring tracking fires after meaningful actions.",
      },
      {
        title: "Configure exclusions",
        body: "Buyers, unsubscribes, and irrelevant segments are excluded to protect experience and spend.",
      },
      {
        title: "Launch segmented campaigns",
        body: "Each audience receives tailored creative and landing destinations rather than one generic remarketing blast.",
      },
      {
        title: "Monitor frequency and fatigue",
        body: "Reach and frequency guide creative refreshes and budget shifts toward best-performing segments.",
      },
      {
        title: "Integrate with broader media",
        body: "Remarketing budgets align with prospecting so the mix reflects list size and sales cycle length.",
      },
    ],
    platforms:
      "Remarketing can span Google Ads Display and RLSA, Performance Max audience signals, Meta custom audiences from pixel or customer lists, Microsoft Advertising remarketing via UET, and email-adjacent coordination when CRM lists are uploaded with hashed data per platform policies.",
    measurement:
      "We evaluate remarketing-specific conversion rates, cost per conversion, view-through versus click-assisted context where platforms disclose it, list growth, and incremental lift when holdout tests are feasible. Absolute attribution remains shared with your analytics stack.",
    scopeFactors: [
      "Site traffic volume available to seed lists.",
      "Consent rate and regional privacy requirements affecting tag behavior.",
      "Number of segments and creative variants per segment.",
      "Sales cycle length dictating membership durations.",
      "Coordination with CRM uploads and offline conversion imports.",
    ],
    faqs: [
      {
        question: "How large must our audience be?",
        answer:
          "Each platform publishes minimum list sizes. We advise when traffic is too low for remarketing to run consistently.",
      },
      {
        question: "Does remarketing work without cookies?",
        answer:
          "Effective pools shrink as users opt out. Consent-aware setup and first-party data uploads partially offset losses.",
      },
      {
        question: "Can we remarket to cart abandoners only?",
        answer:
          "Yes. Cart-specific events or URLs define that list with exclusions for completed purchases.",
      },
      {
        question: "What about customer list uploads?",
        answer:
          "Hashed email or phone lists can seed remarketing when policies allow. Match rates vary; we set expectations accordingly.",
      },
      {
        question: "How do we avoid annoying customers?",
        answer:
          "Frequency caps, post-purchase exclusions, and segment-specific messaging reduce repetitive exposure.",
      },
      {
        question: "Is remarketing separate from PPC management?",
        answer:
          "It can be standalone or included in broader PPC management depending on scope and platforms.",
      },
      {
        question: "Do you create remarketing banners?",
        answer:
          "Ad creative design is available through our ad creatives service with sizes suited to display networks.",
      },
      {
        question: "Can remarketing support B2B long cycles?",
        answer:
          "Yes, with longer list durations and educational creative sequences rather than aggressive discounting alone.",
      },
    ],
    relatedSlugs: ["google-ads", "meta-ads", "conversion-rate-optimization"],
  },
];
