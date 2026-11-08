import catalog from "./detail-catalog.json";

export type DetailKind = "blog" | "product";
type CatalogRecord = {
  kind: string;
  slug: string;
  title: string;
  demos: string[];
  images: Record<string, string>;
  category: string;
  author: string;
  price: string;
  oldPrice: string;
  description: string;
  gallery: string[];
};
export type DetailRecord = CatalogRecord & { image: string };
const records: Record<DetailKind, Record<string, CatalogRecord>> = catalog;

export function getDetail(kind: DetailKind, slug: string, demo: string): DetailRecord | undefined {
  const record = Object.hasOwn(records[kind], slug) ? records[kind][slug] : undefined;
  if (!record || !record.demos.includes(demo)) return undefined;
  const image = record.images[demo] || record.images.main || Object.values(record.images)[0] || "/assets/images/common/seo-image.jpg";
  return { ...record, image, gallery: record.gallery.length ? record.gallery : [image] };
}

export function getDetails(kind: DetailKind, demo: string): DetailRecord[] {
  return Object.keys(records[kind]).flatMap(slug => {
    const record = getDetail(kind, slug, demo);
    return record ? [record] : [];
  });
}
