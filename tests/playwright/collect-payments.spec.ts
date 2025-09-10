import { test, expect } from "@playwright/test"

test("Website loads properly", async ({ page }) => {
  await page.goto("/products/collect-payments")

  await expect(page).toHaveTitle(/EnKash/i)
})

test("has main heading", async ({ page }) => {
  await page.goto("/products/collect-payments")

  const heading = page.getByRole("heading", {
    name: /Accept Payments the Smarter Way with EnKash/i,
  })
  await expect(heading).toBeVisible()
})

test("Talk to Us button navigates to Sales page with source param", async ({
  page,
}) => {
  await page.goto("https://www.enkash.com/products/collect-payments")
  const talkToUsButton = page.locator("text=Talk to Us").first()

  await expect(talkToUsButton).toBeVisible({ timeout: 10000 })

  await Promise.all([
    page.waitForURL(/\/sales\?source=collect-payments/),
    talkToUsButton.click(),
  ])

  await expect(page).toHaveURL(/\/sales\?source=collect-payments/)
})

test("Explore More button navigates to Auto Collect page", async ({ page }) => {
  await page.goto("https://www.enkash.com/products/collect-payments")

  const exploreMoreButton = page
    .getByRole("button", { name: /Explore More/i })
    .first()

  await expect(exploreMoreButton).toBeVisible({ timeout: 10000 })

  await Promise.all([
    page.waitForURL(/\/auto-collect/),
    exploreMoreButton.click(),
  ])

  await expect(page).toHaveURL(/\/auto-collect/)
})


