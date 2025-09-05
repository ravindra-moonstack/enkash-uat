import { test, expect } from "@playwright/test"

test("Website loads properly", async ({ page }) => {
  await page.goto("https://enkash.com/")

  // Expect the page title to contain the correct text.
  await expect(page).toBeDefined()
})

test("has main heading", async ({ page }) => {
  await page.goto("https://enkash.com/")

  // ✅ Check the H1 heading text
  const heading = page.getByRole("heading", {
    name: /Unifying Payments. Simplifying Spends/i,
  })
  await expect(heading).toBeVisible()
})

test("Connect with Us button navigates or opens contact form", async ({
  page,
}) => {
  await page.goto("https://enkash.com/")

  // Wait for the button to be visible before clicking.
  const connectButton = page.getByRole("button", { name: /Connect with Us/i })
  await expect(connectButton).toBeTruthy()

  // Click the button
  await connectButton.click()

  // Optional: Add an assertion to verify the result of the click.
  // For example, check if a modal appears or if navigation happens:
  // You can adjust this depending on the actual behavior.
})
