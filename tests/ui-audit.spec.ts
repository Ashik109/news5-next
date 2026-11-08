import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }, testInfo) => {
  await page.addInitScript((acceptCookies: boolean) => {
    localStorage.setItem("newsletterModalShown", "true");
    if (acceptCookies) localStorage.setItem("gdprAccepted", "true");
  }, !testInfo.title.startsWith("cookie acceptance"));
});

test("account modal switches between login, registration and password reset", async ({ page }) => {
  await page.goto("/main");
  await page.waitForFunction(() => !!window.initSwiper);
  await page.locator('a[href="#uc-account-modal"]:visible').first().click();
  const modal = page.locator("#uc-account-modal");
  await expect(modal).toHaveClass(/uc-open/);
  const active = modal.locator(".account-tabs-content > .uc-active");
  await expect(active.getByRole("heading", { name: "Log in", exact: true })).toBeVisible();
  await expect.poll(() => active.locator("form").evaluate(form => (form as HTMLFormElement).checkValidity())).toBe(false);
  await active.locator('a[data-uc-switcher-item="1"]').click();
  await expect(active.getByRole("heading", { name: "Create an account" })).toBeVisible();
  await active.locator('a[data-uc-switcher-item="0"]').click();
  await active.locator('a[data-uc-switcher-item="2"]').click();
  await expect(active.getByRole("heading", { name: "Reset password", exact: true })).toBeVisible();
  await modal.locator(".uc-modal-close-default").click();
  await expect(modal).not.toHaveClass(/uc-open/);
});

test("cart panel opens, closes and navigates to the cart screen", async ({ page }) => {
  await page.goto("/main");
  await page.waitForFunction(() => !!window.initSwiper);
  await page.locator('a[href="#uc-cart-panel"]:visible').first().click();
  const panel = page.locator("#uc-cart-panel");
  await expect(panel).toHaveClass(/uc-open/);
  await expect(panel.getByRole("heading", { name: "Shopping cart" })).toBeVisible();
  await panel.locator('a[href="/main/shop-cart"]').first().click();
  await expect(page).toHaveURL(/\/main\/shop-cart$/);
  await expect(page.locator("#wrapper")).toBeVisible();
});

test("product reviews tab and image lightbox work", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("/main/shop/disney-toys");
  await page.waitForFunction(() => !!window.initSwiper);
  await page.locator(".product-tabs-nav").getByText("Reviews (5)", { exact: true }).click();
  await expect(page.locator("#reviewer_name")).toBeVisible();
  await page.locator(".swiper-main .swiper-slide-active a.position-cover").first().click();
  await expect(page.locator(".uc-lightbox")).toHaveClass(/uc-open/);
  await page.keyboard.press("Escape");
  await expect(page.locator(".uc-lightbox.uc-open")).toHaveCount(0);
  expect(errors).toEqual([]);
});

test("cookie acceptance and dark mode persist after reload", async ({ page }) => {
  await page.addInitScript(() => { if (!sessionStorage.getItem("qa-cookie-started")) { localStorage.removeItem("gdprAccepted"); sessionStorage.setItem("qa-cookie-started", "1"); } });
  await page.goto("/main");
  const notice = page.locator("#uc-gdpr-notification");
  await expect(notice).toHaveClass(/show/, { timeout: 10000 });
  await page.locator("#uc-accept-gdpr").click();
  await expect(notice).not.toHaveClass(/show/);
  await expect.poll(() => page.evaluate(() => localStorage.getItem("gdprAccepted"))).toBe("true");
  await page.locator(".backtotop-wrap [data-darkmode-toggle] label").click();
  await expect(page.locator("html")).toHaveClass(/uc-dark/);
  await page.reload();
  await expect(page.locator("html")).toHaveClass(/uc-dark/);
  await page.waitForTimeout(5500);
  await expect(notice).not.toHaveClass(/show/);
});
