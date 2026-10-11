import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResourceArticleLayout } from "@/components/resources/ResourceArticleLayout";
import { getResourceArticles, getResourceBySlug } from "@/content/resources";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getResourceArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getResourceBySlug(slug);
  if (!article) return { title: "Article not found" };
  return {
    title: article.title,
    description: article.metaDescription,
  };
}

export default async function ResourceArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getResourceBySlug(slug);
  if (!article) notFound();
  return <ResourceArticleLayout article={article} />;
}
