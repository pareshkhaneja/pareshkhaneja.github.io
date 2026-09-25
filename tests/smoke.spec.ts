import { expect, test } from "@playwright/test";

test("home page loads with hero and sections", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Paresh Khaneja", level: 1 })).toBeVisible();
  await expect(page.locator("#about")).toBeVisible();
  await expect(page.locator("#expertise")).toBeVisible();
  await expect(page.locator("#projects")).toBeVisible();
  await expect(page.locator("#contact")).toBeVisible();
});

test("primary navigation links work", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "About" }).first().click();
  await expect(page.locator("#about")).toBeInViewport();
  await page.getByRole("link", { name: "Projects" }).first().click();
  await expect(page.locator("#projects")).toBeInViewport();
});

test("external links use noopener noreferrer", async ({ page }) => {
  await page.goto("/");
  const external = page.locator('a[href^="https://"][target="_blank"]');
  const count = await external.count();
  expect(count).toBeGreaterThan(0);
  for (let i = 0; i < count; i += 1) {
    const rel = await external.nth(i).getAttribute("rel");
    expect(rel).toContain("noopener");
    expect(rel).toContain("noreferrer");
  }
});
