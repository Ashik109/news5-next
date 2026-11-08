import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Layout from "@/components/details/demo-five/shop-product-detail";
import { getDetail, getDetails } from "@/data/details";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = true;
export function generateStaticParams() {
  return getDetails("product", "demo-five").map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const detail = getDetail("product", slug, "demo-five");
  return {
    title: detail ? detail.title + " - News5" : "Not Found - News5",
    description: detail?.description || detail?.title,
    alternates: { canonical: "/demo-five/shop/" + slug },
  };
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const detail = getDetail("product", slug, "demo-five");
  if (!detail) notFound();
  return <Layout detail={detail} />;
}
