import { test, expect } from "@playwright/test"

test("Website loads properly", async ({ page }) => {
  await page.goto("/products/make-payments")

  await expect(page).toHaveTitle(
    /Fast, Easy and Secure Business Payments with EnKash/i
  )
})

test("has main heading", async ({ page }) => {
  await page.goto("/products/make-payments")

  const heading = page.getByRole("heading", {
    name: /The Control Tower for All Your Business Payments/i,
  })
  await expect(heading).toBeVisible()
})

test("Talk to Us button navigates to Sales page with source param", async ({
  page,
}) => {
  await page.goto("https://www.enkash.com/products/make-payments")
  const talkToUsButton = page.locator("text=Talk to Us").first()

  await expect(talkToUsButton).toBeVisible({ timeout: 10000 })

  await Promise.all([
    page.waitForURL(/\/sales\?source=make-payments/),
    talkToUsButton.click(),
  ])

  await expect(page).toHaveURL(/\/sales\?source=make-payments/)
})

test("Explore Vendor Payments button navigates to Vendor Payments page", async ({
  page,
}) => {
  await page.goto("https://www.enkash.com/products/make-payments")

  const exploreVendorButton = page
    .getByRole("button", { name: /Explore Vendor Payments/i })
   

  await expect(exploreVendorButton).toBeVisible({ timeout: 10000 })

  await Promise.all([
    page.waitForURL(/\/vendor-payment/),
    exploreVendorButton.click(),
  ])

  await expect(page).toHaveURL(/\/vendor-payment/)
})

