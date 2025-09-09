import { test, expect } from "@playwright/test"

test("submits the support form using field name selectors", async ({
  page,
}) => {
  // ⏱ set timeout for this test only
  test.setTimeout(50000)

  await page.goto("/bank-partnerships")

  // Fill text fields
  await page.locator('input[name="SingleLine"]').fill("John Doe")
  await page.locator('input[name="Email"]').fill("john.doe@example.com")
  await page.locator('input[name="SingleLine1"]').fill("Doe Enterprises")
  await page.locator('input[name="PhoneNumber_countrycode"]').fill("9876543210")

  const singleSelect = page.getByRole("button", { name: "" }) // button has no accessible name
  await singleSelect.click()

  await page.getByRole("menuitem", { name: "Bank Partnership" }).click()

  // ✅ Assert hidden input has correct value
  await expect(page.locator('input[name="MultiSelect"]')).toHaveValue(
    "Bank Partnership"
  )

  // Fill textarea
  await page
    .locator('textarea[name="MultiLine"]')
    .fill("Need help with onboarding and product features.")

  await page.getByRole("button", { name: "Submit" }).click()

  // ✅ Intercept your API route instead of Zoho
  await page.route("**/api/zoho", async (route) => {
    if (route.request().method() === "POST") {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ status: "success" }),
      })
    } else {
      await route.continue()
    }
  })

  // Assert navigation or confirmation page
  await expect(page).toHaveURL(/confirmation-partnerships/)
})
