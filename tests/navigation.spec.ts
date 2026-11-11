import { test, expect } from "@playwright/test";

for (const width of [1440, 390]) {
  test(`page navigation resets scroll without an animated jump at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.addInitScript(() => {
      localStorage.setItem("newsletterModalShown", "true");
      localStorage.setItem("gdprAccepted", "true");
      localStorage.setItem("visitCount", "0");
    });
    await page.goto("/demo-three");
    await page.waitForFunction(() => !!window.UniCore && !!document.querySelector(".swiper-initialized"));
    await page.evaluate(() => window.scrollTo({ top: 1600, behavior: "instant" }));
    expect(await page.evaluate(() => scrollY)).toBeGreaterThan(500);

    const firstDestinationFrame = await page.evaluate(() => new Promise<number>(resolve => {
      const link = document.querySelector<HTMLAnchorElement>('#wrapper .post-title a[href^="/demo-three/blog/"]')!;
      const destination = new URL(link.href).pathname;
      const sample = () => {
        if (location.pathname === destination) resolve(scrollY);
        else requestAnimationFrame(sample);
      };
      requestAnimationFrame(sample);
      // Keep the starting scroll position; a locator click would scroll the link into view.
      link.click();
    }));

    await expect(page).toHaveURL(/\/demo-three\/blog\/[^/]+$/);
    expect(firstDestinationFrame).toBe(0);
    await expect(page.locator("#wrapper h1").first()).toBeVisible();
    expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe("smooth");
  });
}
