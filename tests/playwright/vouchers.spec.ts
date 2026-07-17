import { test, expect } from "@playwright/test"

test("Website loads properly", async ({ page }) => {
  await page.goto("/products/vouchers")

  await expect(page).toHaveTitle("Grab 400+ Brand Gift Vouchers for Best Discounts")
})

test("has main heading", async ({ page }) => {
  await page.goto("/products/vouchers")

  const heading = page.getByRole("heading", {
    name: /400\+ Brand Vouchers. One Powerful Platform./i,
  })
  await expect(heading).toBeVisible()
})

test("Talk to Us button navigates to Sales page with source param", async ({
  page,
}) => {
  await page.goto("/products/vouchers")
  const talkToUsButton = page.locator("text=Talk to Us").first()

  await expect(talkToUsButton).toBeVisible({ timeout: 10000 })

  await Promise.all([
    page.waitForURL(/\/sales\?source=vouchers/),
    talkToUsButton.click(),
  ])

  await expect(page).toHaveURL(/\/sales\?source=vouchers/)
})
