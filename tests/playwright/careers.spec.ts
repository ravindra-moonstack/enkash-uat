import { test, expect } from "@playwright/test"

test("Website loads properly", async ({ page }) => {
  await page.goto("/careers") // 👈 relative path
  await expect(page).toHaveTitle(/EnKash/i)
})

test("has main heading", async ({ page }) => {
  await page.goto("/careers") // 👈 relative path
  const heading = page.getByRole("heading", {
    name: /Building the Future of How Businesses Pay, Spend & Grow/i,
  })
  await expect(heading).toBeVisible()
})

test("View Open Roles button scrolls to opportunity section", async ({ page }) => {
  await page.goto("/about-us") // 👈 relative path

  const openRolesButton = page.getByRole("button", { name: /View Open Roles/i })
  await expect(openRolesButton).toBeVisible()

  await openRolesButton.click()

  // Assert that the URL includes /careers
  await expect(page).toHaveURL(/\/careers/)

  // Optional: Verify the section is visible
  const section = page.locator("#yourOpportunitySection")
  await expect(section).toBeVisible()
})
