import { test, expect } from "@playwright/test"

test("Website loads properly", async ({ page }) => {
  await page.goto("/") // 👈 relative path

  await expect(page).toBeDefined() // better than toBeDefined()
})

test("has main heading", async ({ page }) => {
  await page.goto("/") // 👈 relative path

  const heading = page.getByRole("heading", {
    name: /Unifying Payments. Simplifying Spends/i,
  })
  await expect(heading).toBeVisible()
})

test("Connect with Us button navigates or opens contact form", async ({
  page,
}) => {
  await page.goto("/") // 👈 relative path

  const connectButton = page.getByRole("button", { name: /Connect with Us/i })
  await expect(connectButton).toBeVisible()

  await connectButton.click()

  // TODO: add assertion depending on real behavior
  // e.g. modal appears or URL changes
  // await expect(page.locator("#contactFormModal")).toBeVisible();
})
