import { test, expect } from "@playwright/test";

test("documentation and its SVG are served as standalone static responses", async ({ request }) => {
  for (const route of ["/documentation", "/documentation/index.html"]) {
    const response = await request.get(route);
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("text/html");
    const html = await response.text();
    expect(html).toContain("news5-nextjs — Project Documentation");
    expect(html).toContain('src="/documentation/assets/logo.svg"');
    expect(html).not.toContain("uni-core.min.css");
  }
  const logo = await request.get("/documentation/assets/logo.svg");
  expect(logo.status()).toBe(200);
  expect(logo.headers()["content-type"]).toContain("image/svg+xml");
  expect(await logo.text()).toContain("<svg");
});

test("deployed documentation search, logo and mobile navigation work", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("/documentation");
  await expect(page).toHaveTitle("news5-nextjs — Project Documentation");
  await expect(page.locator("section.doc-section")).toHaveCount(13);
  await expect.poll(() => page.locator(".brand img").evaluate(img => (img as HTMLImageElement).naturalWidth)).toBe(73);
  await page.locator("#search").fill("slug");
  await expect(page.locator("#routing")).not.toHaveAttribute("hidden");
  await page.locator("#search").fill("no-matching-doc-section-123");
  await expect(page.locator("#no-results")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator("section[hidden]")).toHaveCount(0);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.locator("#menu-toggle").click();
  await expect(page.locator("#menu-toggle")).toHaveAttribute("aria-expanded", "true");
  await page.locator('#toc a[href="#routing"]').click();
  await expect(page.locator("#menu-toggle")).toHaveAttribute("aria-expanded", "false");
  expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)).toBe(false);
  expect(errors).toEqual([]);
});
