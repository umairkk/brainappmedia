import type { MetadataRoute } from "next";
import { getAllIndustries } from "@/content/industries";
import { getPortfolioProjects } from "@/content/portfolio";
import { getResourceArticles } from "@/content/resources";
import { getAllServices } from "@/content/services";

const baseUrl = "https://brainappmedia.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/industries",
    "/portfolio",
    "/resources",
    "/about",
    "/our-process",
    "/faqs",
    "/contact",
    "/get-proposal",
    "/privacy-policy",
    "/terms",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: "2025-10-01",
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...getAllServices().map((s) => ({
      url: `${baseUrl}/services/${s.slug}`,
      lastModified: "2025-10-01",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...getAllIndustries().map((i) => ({
      url: `${baseUrl}/industries/${i.slug}`,
      lastModified: "2025-10-01",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...getPortfolioProjects().map((p) => ({
      url: `${baseUrl}/portfolio/${p.slug}`,
      lastModified: "2025-10-01",
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
    ...getResourceArticles().map((a) => ({
      url: `${baseUrl}/resources/${a.slug}`,
      lastModified: "2025-10-01",
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
