import { test, expect } from "@playwright/test"

test("Website loads properly", async ({ page }) => {
  await page.goto("/fuel-card")

  await expect(page).toHaveTitle(/Fuel Card for Fleet & Employee Travel Management/i)
})



test("has main heading", async ({ page }) => {
  await page.goto("/fuel-card")

  const heading = page.getByRole("heading", {
    name: /Transform Fuel Expense with Most Flexible Fuel Card Solution/i,
  })
  await expect(heading).toBeVisible()
})



test("Get Started button navigates to Sales page with source param", async ({
  page,
}) => {
  await page.goto("/fuel-card")
  const getStartedButton = page.locator("text=Get Started").first()

  await expect(getStartedButton).toBeVisible({ timeout: 10000 })

  await Promise.all([
    page.waitForURL(/\/sales\?source=fuel-card/),
    getStartedButton.click(),
  ])

  await expect(page).toHaveURL(/\/sales\?source=fuel-card/)
})


