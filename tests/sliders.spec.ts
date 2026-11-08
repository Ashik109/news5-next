import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem("newsletterModalShown", "true");
    localStorage.setItem("gdprAccepted", "true");
  });
});

for (const route of ["main", "demo-five", "demo-eleven"]) {
  test(`${route}: video thumbnails match HTML settings and respond to resizing`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(`/${route}`);
    const thumbs = page.locator(".swiper-thumbs-progress");
    const settings = () => thumbs.evaluate(el => {
      const slider = (el as HTMLElement & { swiper?: { params: { direction: string; spaceBetween: number; slidesPerView: number | string }; width: number } }).swiper;
      return slider ? { direction: slider.params.direction, gap: slider.params.spaceBetween, items: slider.params.slidesPerView, width: Math.round(slider.width) } : null;
    });
    await expect.poll(settings).toEqual({ direction: "vertical", gap: 4, items: "auto", width: 300 });
    await expect(thumbs).not.toHaveAttribute("data-uc-swiper", /\\n/);
    await page.setViewportSize({ width: 390, height: 844 });
    await expect.poll(settings).toEqual({ direction: "horizontal", gap: 4, items: 2, width: 358 });
    await page.setViewportSize({ width: 1440, height: 1000 });
    await expect.poll(settings).toEqual({ direction: "vertical", gap: 4, items: "auto", width: 300 });
  });
}

for (const route of ["demo-eight", "main/shop-product-detail"]) {
  test(`${route}: thumbnails control their connected gallery`, async ({ page }) => {
    await page.goto(`/${route}`);
    const main = page.locator("#wrapper .swiper-main").first();
    await expect.poll(() => main.evaluate(el => {
      const s = (el as HTMLElement & { swiper?: { thumbs: { swiper?: { el: Element } } } }).swiper;
      return !!s?.thumbs.swiper?.el.matches(".swiper-thumbs");
    })).toBe(true);
    await page.locator("#wrapper .swiper-thumbs .swiper-slide").nth(2).click();
    await expect.poll(() => main.evaluate(el => (el as HTMLElement & { swiper: { realIndex: number } }).swiper.realIndex)).toBe(2);
  });
}

test("autoplay continues and sliders reinitialize after client navigation", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("/demo-three");
  const slider = page.locator('[data-uc-swiper*="autoplay: 2500"]').first();
  await expect.poll(() => slider.evaluate(el => !!(el as HTMLElement & { swiper?: { autoplay: { running: boolean } } }).swiper?.autoplay.running)).toBe(true);
  const index = () => slider.evaluate(el => (el as HTMLElement & { swiper: { realIndex: number } }).swiper.realIndex);
  const before = await index();
  await expect.poll(index, { timeout: 8000 }).not.toBe(before);
  await page.locator('#wrapper a[href="/demo-three/blog-details"]').first().click();
  await expect(page).toHaveURL(/\/blog-details$/);
  await page.goBack();
  await expect.poll(() => slider.evaluate(el => !!(el as HTMLElement & { swiper?: { destroyed?: boolean } }).swiper && !(el as HTMLElement & { swiper: { destroyed?: boolean } }).swiper.destroyed)).toBe(true);
  expect(errors).toEqual([]);
});
