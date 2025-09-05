import { test, expect } from "@playwright/test"

const zohoSupportUrl = process.env.NEXT_PUBLIC_ZOHO_SUPPORT_URL!

test("submits the support form using field name selectors", async ({
  page,
}) => {
  await page.goto("/support")

  // Fill text fields
  await page.locator('input[name="SingleLine"]').fill("John Doe")
  await page.locator('input[name="Email"]').fill("john.doe@example.com")
  await page.locator('input[name="SingleLine1"]').fill("Doe Enterprises")
  await page.locator('input[name="PhoneNumber_countrycode"]').fill("9876543210")

  // ✅ MultiSelect (open → click the label instead of .check())
  const multiSelect = page.getByRole("combobox")
  await multiSelect.click()
  await page.getByText("Exploring EnKash", { exact: true }).click()

  // Fill textarea
  await page
    .locator('textarea[name="MultiLine"]')
    .fill("Need help with onboarding and product features.")

  // ✅ Intercept Zoho form submission
  await page.route(zohoSupportUrl, async (route) => {
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

  // ✅ Wait for POST + click submit
  const [request] = await Promise.all([
    page.waitForRequest(
      (req) => req.url().includes("zoho") && req.method() === "POST"
    ),
    page.getByRole("button", { name: /submit/i }).click(),
  ])

  expect(request.url()).toContain("zoho")

  // Assert thank-you message
  await expect(page.getByText(/thank you/i)).toBeVisible()
})
