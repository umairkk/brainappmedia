export const goalImages = {
  audience: {
    src: "/images/sections/audience-analytics.jpg",
    alt: "Analytics dashboard on a laptop representing audience and traffic insights",
  },
  leads: {
    src: "/images/sections/leads-meeting.jpg",
    alt: "Business team discussing lead generation strategy",
  },
  sales: {
    src: "/images/sections/ecommerce-shopping.jpg",
    alt: "Customer completing an online purchase on a mobile device",
  },
  brand: {
    src: "/images/sections/brand-design.jpg",
    alt: "Designer reviewing brand color and typography samples",
  },
} as const;

export const featuredServiceImages: Record<string, { src: string; alt: string }> = {
  "google-ads": {
    src: "/images/sections/google-ads-laptop.jpg",
    alt: "Marketing performance charts on a computer screen",
  },
  "meta-ads": {
    src: "/images/sections/social-ads.jpg",
    alt: "Social media applications on a smartphone",
  },
  seo: {
    src: "/images/sections/seo-content.jpg",
    alt: "Laptop with blog content and search-focused planning",
  },
  "website-design": {
    src: "/images/sections/web-design.jpg",
    alt: "Web designer sketching a responsive website layout",
  },
  "shopify-development": {
    src: "/images/sections/ecommerce-shopping.jpg",
    alt: "E-commerce shopping experience on mobile and web",
  },
  "brand-identity": {
    src: "/images/sections/brand-design.jpg",
    alt: "Creative team developing a brand identity system",
  },
};

export const industryImages: Record<string, { src: string; alt: string }> = {
  "/industries/ecommerce": {
    src: "/images/sections/ecommerce-shopping.jpg",
    alt: "Online shopping and e-commerce experience",
  },
  "/industries/home-services": {
    src: "/images/sections/home-services.jpg",
    alt: "Tools and materials for home service professionals",
  },
  "/industries/real-estate": {
    src: "/images/sections/real-estate.jpg",
    alt: "Residential property exterior for real estate marketing",
  },
  "/industries/professional-services": {
    src: "/images/sections/professional-services.jpg",
    alt: "Professional in a client consultation setting",
  },
  "/industries/restaurants-hospitality": {
    src: "/images/sections/restaurant.jpg",
    alt: "Restaurant interior with warm hospitality lighting",
  },
  "/industries/authors-publishers": {
    src: "/images/sections/learning-resources.jpg",
    alt: "Books and reading materials for authors and publishers",
  },
};

export const whyUsImages = [
  {
    src: "/images/sections/collaboration.jpg",
    alt: "Team collaborating on a marketing project",
  },
  {
    src: "/images/sections/strategy-planning.jpg",
    alt: "Strategic planning documents and business goals",
  },
  {
    src: "/images/sections/workspace.jpg",
    alt: "Modern workspace with creative and marketing tools",
  },
  {
    src: "/images/sections/process-notes.jpg",
    alt: "Reporting notes and measurement planning on a desk",
  },
];

export const resourceCoverImages: Record<string, { src: string; alt: string }> = {
  "google-ads-vs-meta-ads": {
    src: "/images/sections/google-ads-laptop.jpg",
    alt: "Paid media analytics on screen",
  },
  "website-conversion-basics": {
    src: "/images/sections/web-design.jpg",
    alt: "Website layout focused on user conversion paths",
  },
  "local-seo-checklist": {
    src: "/images/sections/retail-store.jpg",
    alt: "Local business storefront visible to nearby customers",
  },
  "shopify-store-prep": {
    src: "/images/sections/ecommerce-shopping.jpg",
    alt: "Preparing an e-commerce storefront for launch",
  },
  "consistent-branding-marketing": {
    src: "/images/sections/brand-design.jpg",
    alt: "Brand assets aligned across marketing channels",
  },
  "leads-conversion-roas": {
    src: "/images/sections/audience-analytics.jpg",
    alt: "Marketing metrics tied to leads and conversion",
  },
};
