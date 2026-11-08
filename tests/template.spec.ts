import { test, expect } from "@playwright/test";
import routes from "../src/data/routes.json";

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem("newsletterModalShown", "true");
    localStorage.setItem("gdprAccepted", "true");
  });
});

test("all 342 converted routes return their authored page", async ({ request }) => {
  for (let i = 0; i < routes.length; i += 6) {
    await Promise.all(routes.slice(i, i + 6).map(async ({ route }) => {
      const response = await request.get(route);
      expect(response.status(), route).toBe(200);
      expect(await response.text(), route).toContain("data-news5-page");
      await response.dispose();
    }));
  }
  const missing = await request.get("/this-page-does-not-exist");
  expect(missing.status()).toBe(404);
});

for (const { route } of routes.filter(r => r.source.endsWith("index.html"))) {
  test(`desktop and mobile layout: ${route}`, async ({ page }, testInfo) => {
    const errors: string[] = [];
    const failedAssets: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
    page.on("response", response => {
      if (response.url().includes("/assets/") && response.status() >= 400) failedAssets.push(response.url());
    });
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(route);
    await page.waitForFunction(() => !!window.UniCore);
    await page.waitForTimeout(1800);
    await expect(page.locator("[data-news5-page]")).toBeVisible();
    await page.screenshot({ path: testInfo.outputPath("desktop.png") });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(300);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
    expect(overflow).toBe(false);
    await page.screenshot({ path: testInfo.outputPath("mobile.png") });
    expect(errors).toEqual([]);
    expect(failedAssets).toEqual([]);
  });
}

test("menus, dark mode, sliders and client navigation remain interactive", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("/demo-three");
  await page.waitForFunction(() => !!window.UniCore && !!document.querySelector(".swiper-initialized"));
  await page.locator(".backtotop-wrap [data-darkmode-toggle] label").click();
  await expect(page.locator("html")).toHaveClass(/uc-dark/);
  await expect.poll(() => page.evaluate(() => localStorage.getItem("darkMode"))).toBe("1");
  await page.locator(".backtotop-wrap [data-darkmode-toggle] label").click();
  await expect(page.locator("html")).not.toHaveClass(/uc-dark/);

  const slider = page.locator('[data-uc-swiper*="next: .nav-next"]').first();
  const slideIndex = () => slider.evaluate(element => (element as HTMLElement & { swiper: { activeIndex: number } }).swiper.activeIndex);
  const before = await slideIndex();
  await slider.locator('xpath=ancestor::*[contains(concat(" ",normalize-space(@class)," ")," swiper-parent ")][1]').locator(".nav-next").first().click();
  await expect.poll(slideIndex).not.toBe(before);

  const search = page.locator('a[href="#uc-search-modal"]:visible').first();
  await search.click();
  await expect(page.locator("#uc-search-modal")).toHaveClass(/uc-open/);
  await page.locator("#uc-search-modal .uc-modal-close-default").click();
  await expect(page.locator("#uc-search-modal")).not.toHaveClass(/uc-open/);

  await page.setViewportSize({ width: 390, height: 844 });
  await page.locator('a[href="#uc-menu-panel"]:visible').first().click();
  await expect(page.locator("#uc-menu-panel")).toHaveClass(/uc-open/);
  await page.locator("#uc-menu-panel .uc-offcanvas-close").click();
  await expect(page.locator("#uc-menu-panel")).not.toHaveClass(/uc-open/);

  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.locator('#wrapper .post-title a[href^="/demo-three/blog/"]').first().click();
  await expect(page).toHaveURL(/\/demo-three\/blog\/[^/]+$/);
  await expect(page.locator("#wrapper h1").first()).toBeVisible();
  await page.locator(".backtotop-wrap [data-darkmode-toggle] label").click();
  await expect(page.locator("html")).toHaveClass(/uc-dark/);
  expect(errors).toEqual([]);
});

test("product quantity inputs and FAQ content work", async ({ page }) => {
  await page.goto("/main/shop-product-detail");
  await page.waitForFunction(() => !!window.UniCore);
  const quantity = page.locator('input[name="quantity"]').first();
  await expect(quantity).toHaveValue("1");
  await quantity.fill("2");
  await quantity.press("ArrowUp");
  await expect(quantity).toHaveValue("3");
  await page.goto("/main/page-faq");
  await expect(page.locator("#wrapper h1")).toHaveText("FAQ");
});

test("all main inner-page layouts hydrate without browser errors", async ({ page }) => {
  const errors: string[] = [];
  let current = "";
  page.on("pageerror", error => errors.push(`${current}: ${error.message}`));
  page.on("console", message => { if (message.type() === "error") errors.push(`${current}: ${message.text()}`); });
  for (const { route } of routes.filter(r => r.route.startsWith("/main/"))) {
    current = route;
    await page.goto(route);
    await page.waitForFunction(() => !!window.UniCore);
    await page.waitForTimeout(150);
    await expect(page.locator("[data-news5-page]")).toBeVisible();
  }
  expect(errors).toEqual([]);
});

test("switching demos replaces the theme and initializes the new page", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/demo-three");
  await page.waitForFunction(() => !!window.UniCore && !!document.querySelector(".swiper-initialized"));
  const chooseDemo = async (demo: string) => {
    await page.locator('a[href="#uc-menu-panel"]:visible').first().click();
    const menu = page.locator("#uc-menu-panel");
    await menu.getByRole("button", { name: "Homepages", exact: true }).click();
    await menu.locator(`a[href="/${demo}"]`).click();
  };
  await chooseDemo("demo-eight");
  await expect(page).toHaveURL(/\/demo-eight$/);
  const theme = page.locator('link[rel="stylesheet"][href*="/assets/css/theme/"]');
  await expect(theme).toHaveCount(1);
  await expect(theme).toHaveAttribute("href", "/assets/css/theme/demo-eight.min.css");
  await page.locator(".backtotop-wrap [data-darkmode-toggle] label").click();
  await expect(page.locator("html")).toHaveClass(/uc-dark/);
  await chooseDemo("demo-three");
  await expect(page).toHaveURL(/\/demo-three$/);
  await expect(theme).toHaveCount(1);
  await expect(theme).toHaveAttribute("href", "/assets/css/theme/demo-three.min.css");
  await page.locator(".backtotop-wrap [data-darkmode-toggle] label").click();
  await expect(page.locator("html")).not.toHaveClass(/uc-dark/);
  expect(errors).toEqual([]);
});
