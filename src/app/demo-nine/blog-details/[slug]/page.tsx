import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Layout from "@/components/details/demo-nine/blog-details";
import { getDetail } from "@/data/details";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = true;
export function generateStaticParams() {
  return [{ slug: "the-rise-of-gourmet-street-food-trends-and-top-picks" }];
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const detail = getDetail("blog", slug, "demo-nine");
  return {
    title: detail ? detail.title + " - News5" : "Not Found - News5",
    description: detail?.description || detail?.title,
    alternates: { canonical: "/demo-nine/blog/" + slug },
  };
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const detail = getDetail("blog", slug, "demo-nine");
  if (!detail) notFound();
  return <Layout detail={detail} />;
}
