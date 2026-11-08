import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Layout from "@/components/details/demo-four/shop-product-detail-2";
import { getDetail } from "@/data/details";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = true;
export function generateStaticParams() {
  return [{ slug: "disney-toys" }];
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const detail = getDetail("product", slug, "demo-four");
  return {
    title: detail ? detail.title + " - News5" : "Not Found - News5",
    description: detail?.description || detail?.title,
    alternates: { canonical: "/demo-four/shop-product-detail-2/" + slug },
  };
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const detail = getDetail("product", slug, "demo-four");
  if (!detail) notFound();
  return <Layout detail={detail} />;
}
