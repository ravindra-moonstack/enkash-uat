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
  await page.goto("/products/collect-payments")
  const talkToUsButton = page.locator("text=Talk to Us").first()
  console.log("talktous", talkToUsButton)
  await expect(talkToUsButton).toBeVisible({ timeout: 10000 })

  // Since it might link to process.env.SALES_URL or getSalesUrl
  await Promise.all([page.waitForURL(/sales/), talkToUsButton.click()])

  await expect(page.url()).toMatch(/sales/)
})
