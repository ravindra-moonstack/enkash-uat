import { test, expect } from "@playwright/test"

test("submits the support form using field name selectors", async ({
  page,
}) => {
  // ⏱ set timeout for this test only
  test.setTimeout(50000)

  await page.goto("/support")

  // Fill text fields
  await page.locator('input[name="SingleLine"]').fill("John Doe")
  await page.locator('input[name="Email"]').fill("john.doe@example.com")
  await page.locator('input[name="SingleLine1"]').fill("Doe Enterprises")
  await page.locator('input[name="PhoneNumber_countrycode"]').fill("9876543210")

  // ✅ MultiSelect
  const multiSelect = page.getByRole("combobox")
  await multiSelect.click()
  await page.getByText("Exploring EnKash", { exact: true }).click()

  // Fill textarea
  await page
    .locator('textarea[name="MultiLine"]')
    .fill("Need help with onboarding and product features.")

  await page.getByRole("button", { name: "Submit" }).click()

  // Assert color change after click
  await expect(page.locator(".submitBtn")).toHaveClass(/clicked/)

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

  // ✅ Wait for the request to your API route
  const [request] = await Promise.all([
    page.waitForRequest(
      (req) => req.url().includes("/api/zoho") && req.method() === "POST"
    ),
  ])

  expect(request.url()).toContain("/api/zoho")

  // Assert navigation or confirmation page
  await expect(page).toHaveURL(/confirmation-support/)
})
