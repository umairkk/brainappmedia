export type ServiceLink = {
  title: string;
  href: string;
  description: string;
};

export type ServiceGroup = {
  title: string;
  links: ServiceLink[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Digital Marketing",
    links: [
      {
        title: "Digital Marketing",
        href: "/services/digital-marketing",
        description: "Integrated plans across search, content, and conversion.",
      },
      {
        title: "SEO",
        href: "/services/seo",
        description: "Organic visibility built on technical and content foundations.",
      },
      {
        title: "Local SEO",
        href: "/services/local-seo",
        description: "Maps, local listings, and location-focused pages.",
      },
      {
        title: "Content Marketing",
        href: "/services/content-marketing",
        description: "Useful content that supports discovery and trust.",
      },
      {
        title: "Social Media Management",
        href: "/services/social-media-management",
        description: "Planned publishing and community engagement.",
      },
      {
        title: "Email Marketing",
        href: "/services/email-marketing",
        description: "Campaigns and automations that nurture leads.",
      },
      {
        title: "Conversion Rate Optimization",
        href: "/services/conversion-rate-optimization",
        description: "Improve forms, pages, and checkout flows.",
      },
    ],
  },
  {
    title: "Paid Advertising",
    links: [
      {
        title: "PPC Management",
        href: "/services/ppc-management",
        description: "Paid search and social managed with clear goals.",
      },
      {
        title: "Google Ads",
        href: "/services/google-ads",
        description: "Search, Display, Shopping, and Performance Max.",
      },
      {
        title: "Meta Ads",
        href: "/services/meta-ads",
        description: "Facebook and Instagram campaigns and creative tests.",
      },
      {
        title: "Microsoft Ads",
        href: "/services/microsoft-ads",
        description: "Search and Shopping on the Microsoft network.",
      },
      {
        title: "Shopping Ads",
        href: "/services/shopping-ads",
        description: "Product feeds and shopping campaign structure.",
      },
      {
        title: "Remarketing",
        href: "/services/remarketing",
        description: "Re-engage site visitors and past customers.",
      },
    ],
  },
  {
    title: "Websites & E-commerce",
    links: [
      {
        title: "Website Design",
        href: "/services/website-design",
        description: "UX-focused layouts that guide visitors to action.",
      },
      {
        title: "Website Development",
        href: "/services/website-development",
        description: "Fast, maintainable sites built for growth.",
      },
      {
        title: "WordPress Development",
        href: "/services/wordpress-development",
        description: "Flexible WordPress builds and customizations.",
      },
      {
        title: "Shopify Development",
        href: "/services/shopify-development",
        description: "Store setup, themes, and conversion-focused storefronts.",
      },
      {
        title: "E-commerce Development",
        href: "/services/ecommerce-development",
        description: "Online stores tailored to your catalog and operations.",
      },
      {
        title: "Landing Page Design",
        href: "/services/landing-page-design",
        description: "Focused pages for campaigns and lead generation.",
      },
      {
        title: "Website Maintenance",
        href: "/services/website-maintenance",
        description: "Updates, monitoring, and ongoing site care.",
      },
    ],
  },
  {
    title: "Branding & Creative",
    links: [
      {
        title: "Logo Design",
        href: "/services/logo-design",
        description: "Distinct marks that work across applications.",
      },
      {
        title: "Brand Identity",
        href: "/services/brand-identity",
        description: "Visual systems, voice, and practical guidelines.",
      },
      {
        title: "Graphic Design",
        href: "/services/graphic-design",
        description: "Print and digital assets for campaigns and sales.",
      },
      {
        title: "Social Media & Ad Creatives",
        href: "/services/ad-creatives",
        description: "Scroll-stopping visuals sized for each platform.",
      },
    ],
  },
];

export const industryLinks = [
  {
    title: "E-commerce",
    href: "/industries/ecommerce",
    description: "Stores that need traffic, conversion, and retention.",
  },
  {
    title: "Home Services",
    href: "/industries/home-services",
    description: "Local lead generation for trades and service providers.",
  },
  {
    title: "Real Estate",
    href: "/industries/real-estate",
    description: "Listings, agents, and brokerage marketing support.",
  },
  {
    title: "Professional Services",
    href: "/industries/professional-services",
    description: "Credibility-driven sites and demand generation.",
  },
  {
    title: "Restaurants & Hospitality",
    href: "/industries/restaurants-hospitality",
    description: "Brand experience from menu to reservations.",
  },
  {
    title: "Authors & Publishers",
    href: "/industries/authors-publishers",
    description: "Author sites, launch creative, and audience building.",
  },
];

export const companyLinks = [
  { title: "About Us", href: "/about" },
  { title: "Our Process", href: "/our-process" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Resources", href: "/resources" },
  { title: "FAQs", href: "/faqs" },
  { title: "Contact", href: "/contact" },
];

export const allServiceHrefs = serviceGroups.flatMap((g) =>
  g.links.map((l) => l.href),
);
