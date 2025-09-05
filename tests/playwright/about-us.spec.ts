import { test, expect } from "@playwright/test"

test("Website loads properly", async ({ page }) => {
  await page.goto("https://enkash.com/about-us")

  // ✅ Check actual <title>
  await expect(page).toHaveTitle(/EnKash/i)
})

test("has main heading", async ({ page }) => {
  await page.goto("https://enkash.com/about-us")

  // ✅ Check the H1 heading text
  const heading = page.getByRole("heading", {
    name: /Shaping the Future of Fintech/i,
  })
  await expect(heading).toBeVisible()
})

test("View Open Roles button navigates to Careers page", async ({ page }) => {
  await page.goto("https://enkash.com/about-us")

  // ✅ Find the button
  const openRolesButton = page.getByRole("button", { name: /View Open Roles/i })
  await expect(openRolesButton).toBeVisible()

  // ✅ Click the button
  await openRolesButton.click()

  // ✅ Assert that navigation happened
  await expect(page).toHaveURL(/\/careers/)
})
