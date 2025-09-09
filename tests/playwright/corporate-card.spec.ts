import { test, expect } from "@playwright/test"

test("Website loads properly", async ({ page }) => {
  await page.goto("/products/corporate-cards")

  await expect(page).toHaveTitle(/EnKash/i)
})

test("has main heading", async ({ page }) => {
  await page.goto("/products/corporate-cards")

  const heading = page.getByRole("heading", {
    name: /The Only Corporate Cards You’ll Ever Need./i,
  })
  await expect(heading).toBeVisible()
})

test("Talk to Us button navigates to Sales page with source param", async ({
  page,
}) => {
  await page.goto("https://www.enkash.com/products/corporate-cards")
  const talkToUsButton = page.locator("text=Talk to Us").first()

  await expect(talkToUsButton).toBeVisible({ timeout: 10000 })

  await Promise.all([
    page.waitForURL(/\/sales\?source=corporate-cards/),
    talkToUsButton.click(),
  ])

  await expect(page).toHaveURL(/\/sales\?source=corporate-cards/)
})

test("Explore More button navigates to Prepaid Card page", async ({ page }) => {
  await page.goto("https://www.enkash.com/products/corporate-cards")

  const exploreMoreButton = page.getByRole("button", { name: /Explore More/i })

  await expect(exploreMoreButton).toBeVisible({ timeout: 10000 })

  await Promise.all([
    page.waitForURL(/\/prepaid-card/),
    exploreMoreButton.click(),
  ])

  await expect(page).toHaveURL(/\/prepaid-card/)
})

test("Explore Our Expense Management Suite button navigates to Expense Management Suite page", async ({
  page,
}) => {
  await page.goto("https://www.enkash.com/products/corporate-cards")

  const expenseManagementButton = page.getByRole("button", {
    name: /Expense Management Suite/i,
  })

  await expect(expenseManagementButton).toBeVisible({ timeout: 10000 })

  await Promise.all([
    page.waitForURL(/\/products\/expense-management/),
    expenseManagementButton.click(),
  ])

  await expect(page).toHaveURL(/\/products\/expense-management/)
})
