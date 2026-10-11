import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryPageTemplate } from "@/components/industry/IndustryPageTemplate";
import { getAllIndustries, getIndustryBySlug } from "@/content/industries";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllIndustries().map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: "Industry not found" };
  return {
    title: industry.title,
    description: industry.metaDescription,
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();
  return <IndustryPageTemplate content={industry} />;
}
