import { test, expect } from "@playwright/test"

test("Website loads properly", async ({ page }) => {
  await page.goto("https://enkash.com/careers")

  // ✅ Make sure the page loaded by checking the heading
  await expect(page).toHaveTitle(/EnKash/i)
})

test("has main heading", async ({ page }) => {
  await page.goto("https://enkash.com/careers")

  // ✅ Check the H1 heading text
  const heading = page.getByRole("heading", {
    name: /Building the Future of How Businesses Pay, Spend & Grow/i,
  })
  await expect(heading).toBeVisible()
})

test("View Open Roles button scrolls to opportunity section", async ({
  page,
}) => {
  // Go to About Us page (where button exists)
  await page.goto("https://enkash.com/about-us")

  // Find the "View Open Roles" button
  const openRolesButton = page.getByRole("button", { name: /View Open Roles/i })
  await expect(openRolesButton).toBeVisible()

  // Click the button
  await openRolesButton.click()

  // Assert that the URL includes the hash
  await expect(page).toHaveURL("https://www.enkash.com/careers")

  // Optional: Verify the section is actually visible
  const section = page.locator("#yourOpportunitySection")
  await expect(section).toBeVisible()
})
