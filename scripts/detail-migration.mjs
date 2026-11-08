import path from 'node:path';

export const variants = {
  'blog-details': { kind: 'blog', base: 'blog' },
  'blog-details-2': { kind: 'blog', base: 'blog-details-2' },
  'blog-details-3': { kind: 'blog', base: 'blog-details-3' },
  'shop-product-detail': { kind: 'product', base: 'shop' },
  'shop-product-detail-2': { kind: 'product', base: 'shop-product-detail-2' },
};

export function detailRouteSource(demo, variant, kind, base, defaultSlug) {
  const primary = base === 'blog' || base === 'shop';
  const canonical = variants[variant].base;
  return `import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Layout from "@/components/details/${demo}/${variant}";
import { getDetail${primary ? ', getDetails' : ''} } from "@/data/details";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = true;
export function generateStaticParams() {
  return ${primary ? `getDetails("${kind}", "${demo}").map(({ slug }) => ({ slug }))` : `[{ slug: ${JSON.stringify(defaultSlug)} }]`};
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const detail = getDetail("${kind}", slug, "${demo}");
  return {
    title: detail ? detail.title + " - News5" : "Not Found - News5",
    description: detail?.description || detail?.title,
    alternates: { canonical: "/${demo}/${canonical}/" + slug },
  };
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const detail = getDetail("${kind}", slug, "${demo}");
  if (!detail) notFound();
  return <Layout detail={detail} />;
}
`;
}
const text = node => node?.data || node?.children?.map(text).join('') || '';
const clean = value => value.replace(/\s+/g, ' ').trim();
const has = (node, name) => (node?.attribs?.class || '').split(/\s+/).includes(name);
const all = (node, predicate) => [ ...(predicate(node) ? [node] : []), ...(node.children || []).flatMap(child => all(child, predicate)) ];
const first = (node, predicate) => predicate(node) ? node : node.children?.map(child => first(child, predicate)).find(Boolean);
const closest = (node, predicate) => !node ? undefined : predicate(node) ? node : closest(node.parent, predicate);
const slugify = title => title.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const imagePath = (node, file) => {
  const src = node?.attribs?.['data-src'] || node?.attribs?.src;
  return src ? path.posix.normalize(path.posix.join('/', path.posix.dirname(file), src)) : '';
};
const detailTarget = href => href?.match(/(?:^|\/)(blog-details(?:-[23])?|shop-product-detail(?:-2)?)\.html(?:([?#].*))?$/);

export function prepareDetailMigration(documents) {
  const catalog = { blog: {}, product: {} };
  const defaults = {};
  const resolveCard = (anchor, kind) => {
    const card = closest(anchor, node => has(node, kind === 'blog' ? 'type-post' : 'type-product') || (kind === 'blog' && has(node, 'new-post')));
    if (!card) return undefined;
    const heading = first(card, node => has(node, kind === 'blog' ? 'post-title' : 'product-title')) || first(card, node => /^h[1-6]$/.test(node.name));
    const title = clean(text(heading) || text(anchor) || first(card, node => node.name === 'img')?.attribs?.alt || '');
    if (!title || title.length < 4 || /^(read more|continue reading|add to cart)$/i.test(title)) return undefined;
    return { card, title };
  };
  for (const { file, doc } of documents) {
    const demo = file.includes('/') ? file.split('/')[0] : 'main';
    for (const anchor of all(doc, n => n.name === 'a' && !!detailTarget(n.attribs.href))) {
      const target = detailTarget(anchor.attribs.href);
      const kind = variants[target[1]].kind;
      const result = resolveCard(anchor, kind);
      if (!result) continue;
      const { card, title } = result;
      const slug = slugify(title);
      const image = first(card, n => n.name === 'img' && !/avatar|author/i.test(n.attribs.class || ''));
      const category = first(card, n => has(n, 'post-category'));
      const author = first(card, n => has(n, 'post-author'));
      const price = first(card, n => has(n, 'price'));
      const oldPrice = first(card, n => has(n, 'price-old'));
      const excerpt = first(card, n => n.name === 'p');
      const record = catalog[kind][slug] ||= { kind, slug, title, demos: [], images: {}, category: '', author: '', price: '', oldPrice: '', description: '', gallery: [] };
      if (!record.demos.includes(demo)) record.demos.push(demo);
      const src = imagePath(image, file);
      if (src && !src.includes('img-fallback')) record.images[demo] ||= src;
      record.category ||= clean(text(category));
      record.author ||= clean(text(author));
      record.price ||= clean(text(price));
      record.oldPrice ||= clean(text(oldPrice));
      record.description ||= clean(text(excerpt));
      anchor.detailSlug = slug;
    }
  }
  // The template's original detail screens remain the default examples.
  for (const { file, doc } of documents) {
    const variant = path.posix.basename(file, '.html');
    const config = variants[variant];
    if (!config) continue;
    const demo = file.split('/')[0];
    const wrapper = first(doc, n => n.attribs?.id === 'wrapper');
    const title = clean(text(first(wrapper, n => n.name === 'h1')));
    const slug = slugify(title);
    const record = catalog[config.kind][slug] ||= { kind: config.kind, slug, title, demos: [], images: {}, category: '', author: '', price: '', oldPrice: '', description: '', gallery: [] };
    if (!record.demos.includes(demo)) record.demos.push(demo);
    defaults[`${demo}/${variant}`] = slug;
    const hero = first(wrapper, n => n.name === 'img' && n.attribs.alt === title);
    if (hero) record.images[demo] = imagePath(hero, file);
    if (config.kind === 'product') {
      const gallery = first(wrapper, n => has(n, 'swiper-main'));
      const images = gallery ? all(gallery, n => n.name === 'img').map(n => imagePath(n, file)) : [];
      if (images.length && !record.gallery.length) record.gallery = [...new Set(images)];
      const details = first(wrapper, n => has(n, 'product-details'));
      record.price ||= clean(text(first(details || wrapper, n => has(n, 'price'))));
      record.oldPrice ||= clean(text(first(details || wrapper, n => has(n, 'price-old'))));
    }
    // Mark primary fields only; related cards retain their own content.
    for (const node of all(wrapper, n => n.type === 'text')) {
      if (clean(node.data) === title && (closest(node, n => n.name === 'h1') || closest(node, n => has(n, 'breadcrumb')))) node.detailText = 'detail.title';
    }
    if (config.kind === 'blog' && hero) hero.detailAttrs = { src: 'detail.image', 'data-src': 'detail.image', alt: 'detail.title' };
    if (config.kind === 'blog') {
      for (const link of all(wrapper, n => n.name === 'a')) {
        const mainPost = closest(link, n => has(n, 'type-post'));
        if (link.attribs.href?.includes('blog-category') && (closest(link, n => has(n, 'breadcrumb')) || has(mainPost, 'single-post'))) {
          for (const node of all(link, n => n.type === 'text' && !!clean(n.data))) node.detailText = `detail.category || ${JSON.stringify(clean(node.data))}`;
        }
        if (link.attribs.href?.includes('blog-author') && closest(link, n => has(n, 'post-author')) && has(mainPost, 'single-post')) {
          for (const node of all(link, n => n.type === 'text' && !!clean(n.data))) node.detailText = `detail.author || ${JSON.stringify(clean(node.data))}`;
        }
      }
    }
    if (config.kind === 'product') {
      for (const gallery of all(wrapper, n => (has(n, 'swiper-wrapper') && (has(n.parent, 'swiper-main') || has(n.parent, 'swiper-thumbs'))) || has(n, 'product-gallery'))) {
        gallery.detailGallery = true;
        const stacked = has(gallery, 'product-gallery');
        const slide = gallery.children.find(n => stacked ? n.name === 'figure' : has(n, 'swiper-slide'));
        if (stacked) gallery.detailGalleryLimit = gallery.children.filter(n => n.name === 'figure').length;
        if (!slide) continue;
        slide.detailKey = true;
        for (const image of all(slide, n => n.name === 'img')) image.detailAttrs = { src: 'image', 'data-src': 'image', alt: 'detail.title' };
        for (const link of all(slide, n => n.name === 'a')) link.detailAttrs = { href: 'image', 'data-caption': 'detail.title' };
      }
      const details = first(wrapper, n => has(n, 'product-details'));
      if (details) for (const node of all(details, n => n.type === 'text')) {
        if (has(node.parent, 'price')) node.detailText = 'detail.price';
        if (has(node.parent, 'price-old')) node.detailText = 'detail.oldPrice';
      }
    }
  }
  for (const { file, doc } of documents) {
    for (const anchor of all(doc, n => n.name === 'a' && !!detailTarget(n.attribs.href))) {
      const match = detailTarget(anchor.attribs.href);
      const config = variants[match[1]];
      const demo = path.posix.normalize(path.posix.join(path.posix.dirname(file), anchor.attribs.href.split(/[?#]/)[0])).split('/')[0];
      const slug = anchor.detailSlug || defaults[`${demo}/${match[1]}`] || Object.keys(catalog[config.kind])[0];
      anchor.attribs.href = `/${demo}/${config.base}/${slug}${match[2] || ''}`;
      anchor.detailLink = true;
    }
  }
  return { catalog, defaults };
}
