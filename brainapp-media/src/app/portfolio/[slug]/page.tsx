import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioProjectTemplate } from "@/components/portfolio/PortfolioProjectTemplate";
import { getPortfolioProjects, getProjectBySlug } from "@/content/portfolio";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPortfolioProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.metaDescription,
  };
}

export default async function PortfolioProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return <PortfolioProjectTemplate project={project} />;
}
