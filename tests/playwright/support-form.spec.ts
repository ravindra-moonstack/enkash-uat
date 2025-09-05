import { test, expect } from "@playwright/test"

test("submits the support form using field name selectors", async ({
  page,
}) => {
  // 👇 no hardcoding, just relative path
  await page.goto("/support")

  // Fill inputs using their 'name' attributes
  await page.locator('input[name="SingleLine"]').fill("John Doe") // Name
  await page.locator('input[name="Email"]').fill("john.doe@example.com") // Email
  await page.locator('input[name="SingleLine1"]').fill("Doe Enterprises") // Company Name
  await page.locator('input[name="PhoneNumber_countrycode"]').fill("9876543210") // Contact No.

  // ✅ Handle checkbox
  await page
    .locator('input[name="MultipleChoice"][value="Collect Payments"]')
    .check()

  // Fill textarea using name
  await page
    .locator('textarea[name="MultiLine"]')
    .fill("Need help with onboarding and product features.")

  // ✅ Intercept API call (flexible)
  await page.route("**/api/zoho", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ status: "success" }),
    })
  })

  // Click submit
  await page.getByRole("button", { name: "Submit" }).click()

  // ✅ Either expect redirect OR success message
  // await expect(page).toHaveURL(/confirmation-support/);
  await expect(page.getByText(/thank you/i)).toBeVisible()
})
