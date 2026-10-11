export type ServiceFAQ = { question: string; answer: string };

export type ServiceContent = {
  slug: string;
  title: string;
  metaDescription: string;
  heroSubtitle: string;
  intro: string[];
  whoItHelps: string;
  problems: string[];
  deliverables: { title: string; body: string }[];
  approach: { title: string; body: string }[];
  platforms?: string;
  measurement: string;
  conceptNote?: string;
  scopeFactors: string[];
  faqs: ServiceFAQ[];
  relatedSlugs: string[];
};

export type IndustryContent = {
  slug: string;
  title: string;
  metaDescription: string;
  intro: string[];
  challenges: string[];
  recommended: { serviceSlug: string; reason: string }[];
  exampleApproach: string[];
  conversionPaths: string[];
  measurement: string[];
  faqs: ServiceFAQ[];
};

export type PortfolioProject = {
  slug: string;
  title: string;
  category: "websites" | "branding" | "ad-creatives" | "ecommerce";
  summary: string;
  metaDescription: string;
  brief: string;
  audience: string;
  decisions: string[];
  deliverables: string[];
  approach: string[];
};

export type ResourceArticle = {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  readMinutes: number;
  sections: { id: string; heading: string; paragraphs: string[] }[];
  relatedServiceSlug: string;
};
