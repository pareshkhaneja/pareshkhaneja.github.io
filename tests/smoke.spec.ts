import { expect, test } from "@playwright/test";

const sections = ["home", "about", "expertise", "project", "experience", "contact"];

test.describe("Portfolio UI validation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("renders hero with role title and status badge", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Paresh Khaneja", level: 1 })).toBeVisible();
    await expect(page.getByText("Senior SDET | AI-First Quality Engineering")).toBeVisible();
    await expect(page.getByText("Open to opportunities")).toBeVisible();
    await expect(page.getByText("Gurgaon, Haryana, India")).toBeVisible();
  });

  test("primary navigation includes all mock sections", async ({ page }) => {
    for (const label of ["Home", "About", "Expertise", "Experience", "Project", "Contact"]) {
      await expect(page.getByRole("link", { name: label }).first()).toBeVisible();
    }
  });

  test("hero CTAs and skill tags are present", async ({ page }) => {
    await expect(page.getByRole("link", { name: /Connect on LinkedIn/ })).toBeVisible();
    await expect(page.getByRole("link", { name: "View GitHub" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Download Resume" }).first()).toBeVisible();
    await expect(page.getByText("Microsoft Fabric")).toBeVisible();
    await expect(page.getByText("LLMs & AI Agents")).toBeVisible();
  });

  test("expertise cards match expected titles", async ({ page }) => {
    await page.locator("#expertise").scrollIntoViewIfNeeded();
    for (const title of [
      "AI-Assisted Testing",
      "Data Platform Testing",
      "Test Automation",
      "Quality Engineering",
      "Modern Tools",
    ]) {
      await expect(page.getByRole("heading", { name: title })).toBeVisible();
    }
  });

  test("featured ADVP project section content", async ({ page }) => {
    await page.locator("#project").scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Featured Project" })).toBeVisible();
    await expect(page.getByText("Autonomous Data Validation Platform")).toBeVisible();
    await expect(page.getByText("Autonomous Validation")).toBeVisible();
    await expect(page.getByText("12 Forks")).toBeVisible();
    await expect(page.getByText("4 Stars")).toBeVisible();
  });

  test("experience timeline is visible", async ({ page }) => {
    await page.locator("#experience").scrollIntoViewIfNeeded();
    await expect(page.getByText("GlobalLogic")).toBeVisible();
    await expect(page.getByText("Qualys")).toBeVisible();
  });

  test("contact banner CTA", async ({ page }) => {
    await page.locator("#contact").scrollIntoViewIfNeeded();
    await expect(page.getByText("Let's Build Intelligent Quality Solutions")).toBeVisible();
    await expect(page.getByRole("link", { name: "Email Me" })).toBeVisible();
  });

  test("section anchors exist", async ({ page }) => {
    for (const id of sections) {
      await expect(page.locator(`#${id}`)).toHaveCount(1);
    }
  });

  test("external links use noopener noreferrer", async ({ page }) => {
    const external = page.locator('a[href^="https://"][target="_blank"]');
    const count = await external.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i += 1) {
      const rel = await external.nth(i).getAttribute("rel");
      expect(rel).toContain("noopener");
      expect(rel).toContain("noreferrer");
    }
  });

  test("hero uses dark background styling", async ({ page }) => {
    const hero = page.locator(".hero-shell");
    await expect(hero).toBeVisible();
    const bg = await hero.evaluate((el) => getComputedStyle(el).backgroundImage);
    expect(bg).toContain("gradient");
  });

  test("hero shows three-column layout on desktop", async ({ page }) => {
    await page.setViewportSize({ width: 1366, height: 900 });
    await page.goto("/");
    await expect(page.getByAltText("Portrait of Paresh Khaneja")).toBeVisible();
    await expect(page.getByText("9+ Years of Experience")).toBeVisible();
    const cols = await page.locator(".hero-inner").evaluate((el) => getComputedStyle(el).gridTemplateColumns);
    expect(cols.split(" ").length).toBeGreaterThanOrEqual(3);
  });

  test("portrait image loads", async ({ page }) => {
    const img = page.getByAltText("Portrait of Paresh Khaneja");
    await expect(img).toBeVisible();
    await expect(img).toHaveAttribute("src", /portrait\.jpg/);
  });
});
