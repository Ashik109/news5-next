import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Layout from "@/components/details/demo-ten/blog-details-2";
import { getDetail } from "@/data/details";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = true;
export function generateStaticParams() {
  return [{ slug: "the-rise-of-gourmet-street-food-trends-and-top-picks" }];
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const detail = getDetail("blog", slug, "demo-ten");
  return {
    title: detail ? detail.title + " - News5" : "Not Found - News5",
    description: detail?.description || detail?.title,
    alternates: { canonical: "/demo-ten/blog-details-2/" + slug },
  };
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const detail = getDetail("blog", slug, "demo-ten");
  if (!detail) notFound();
  return <Layout detail={detail} />;
}
