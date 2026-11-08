import { test, expect } from "@playwright/test";
import { getDetails } from "../src/data/details";
import defaults from "../src/data/detail-defaults.json";

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem("newsletterModalShown", "true");
    localStorage.setItem("gdprAccepted", "true");
  });
});

for (const demo of ["main", "demo-three", "demo-eight"]) {
  test(`${demo}: blog cards open their own slug and content`, async ({ page }) => {
    await page.goto(`/${demo}`);
    const card = page.locator('#wrapper .post-title a[href*="/blog/"]').first();
    const title = (await card.innerText()).trim();
    const href = await card.getAttribute("href");
    expect(href).toMatch(new RegExp(`^/${demo}/blog/[a-z0-9-]+$`));
    await card.click();
    await expect(page).toHaveURL(new RegExp(`${href}$`));
    await expect(page.locator("#wrapper h1")).toHaveText(title);
    await expect(page).toHaveTitle(`${title} - News5`);
    const related = page.locator(`.post-related h5 a[href^="/${demo}/blog/"]:not([href="${href}"])`).first();
    const relatedTitle = (await related.innerText()).trim();
    await related.click();
    await expect(page.locator("#wrapper h1")).toHaveText(relatedTitle);
    await expect(page).toHaveTitle(`${relatedTitle} - News5`);
  });
}

for (const base of ["blog", "blog-details-2", "blog-details-3"]) {
  test(`${base}: slug selects the article across layout variants`, async ({ page }) => {
    const post = getDetails("blog", "main").find(item => item.slug !== defaults["main/blog-details"])!;
    await page.goto(`/main/${base}/${post.slug}`);
    await expect(page.locator("#wrapper h1")).toHaveText(post.title);
    const hero = page.locator(`#wrapper img[alt="${post.title}"]`).first();
    await expect(hero).toHaveAttribute("src", post.image);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", new RegExp(`/main/${base}/${post.slug}$`));
  });
}

test("product cards select the product's title, image and price", async ({ page }) => {
  await page.goto("/main/shop");
  const card = page.locator('#wrapper article.type-product h5 a[href*="/shop/"]').first();
  const href = (await card.getAttribute("href"))!;
  const slug = href.split("/").at(-1);
  const product = getDetails("product", "main").find(item => item.slug === slug)!;
  expect(product).toBeTruthy();
  await card.click();
  await expect(page.locator("#wrapper h1")).toHaveText(product.title);
  await expect(page.locator(".product-header .product-price .price").first()).toHaveText(product.price);
  await expect(page.locator(".product-header .swiper-main img").first()).toHaveAttribute("src", product.image);
  await page.goto(`/main/shop-product-detail-2/${product.slug}`);
  await expect(page.locator("#wrapper h1")).toHaveText(product.title);
  await expect(page.locator(".product-gallery img").first()).toHaveAttribute("src", product.image);
});

test("unknown slugs return 404 and legacy URLs redirect to named content", async ({ request }) => {
  for (const base of ["blog", "blog-details", "blog-details-2", "blog-details-3", "shop", "shop-product-detail", "shop-product-detail-2"]) {
    const response = await request.get(`/main/${base}/not-a-real-record`);
    expect(response.status(), base).toBe(404);
  }
  for (const variant of ["blog-details", "blog-details-2", "blog-details-3", "shop-product-detail", "shop-product-detail-2"]) {
    const response = await request.get(`/main/${variant}`, { maxRedirects: 0 });
    expect(response.status()).toBe(307);
    expect(response.headers().location).toContain(defaults[`main/${variant}` as keyof typeof defaults]);
  }
});
