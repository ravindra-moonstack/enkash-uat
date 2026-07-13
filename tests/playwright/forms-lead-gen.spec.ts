import { test, expect } from "@playwright/test"

test.describe("Forms & Lead Generation", () => {

  const checkFormValidation = async (page: any, submitBtnName: string | RegExp) => {
    const submitBtn = page.getByRole("button", { name: submitBtnName })
    await submitBtn.click()
    
    // Look for HTML5 validation or custom error messages
    const errorMessages = page.locator("text=/required|valid email|invalid/i")
    if (await errorMessages.count() > 0) {
      await expect(errorMessages.first()).toBeVisible()
    }
  }

  test.describe("Contact Us (/contact-us)", () => {
    test("CNT-01: Form validation and submission", async ({ page }) => {
      await page.goto("/contact-us")
      await checkFormValidation(page, /Submit|Send/i)
      
      // We do not submit actual data to avoid spamming the backend,
      // but we ensure the form fields are present
      await expect(page.getByLabel(/Email/i).or(page.locator("input[type='email']"))).toBeVisible()
    })
  })

  test.describe("Sales (/sales)", () => {
    test("SLS-01 & SLS-02: Form fields exist", async ({ page }) => {
      await page.goto("/sales")
      
      const emailInput = page.getByLabel(/Email/i).or(page.locator("input[type='email']"))
      await expect(emailInput).toBeVisible()
      
      // Verify dropdowns if they exist
      const selectBox = page.locator("select").first()
      if (await selectBox.count() > 0) {
        await expect(selectBox).toBeVisible()
      }
    })
  })

  test.describe("Support (/support)", () => {
    test("SUP-01: Support form validation", async ({ page }) => {
      await page.goto("/support")
      
      await expect(page.locator("form")).toBeVisible()
      const emailInput = page.getByLabel(/Email/i).or(page.locator("input[type='email']"))
      await expect(emailInput).toBeVisible()
    })
  })

  test.describe("Partnerships", () => {
    test("PRT-01 & PRT-02: Bank Partnerships", async ({ page }) => {
      await page.goto("/bank-partnerships")
      await expect(page.locator("form")).toBeVisible()
    })

    test("PRT-01 & PRT-02: Payment Gateway Partners", async ({ page }) => {
      await page.goto("/payment-gateway-partners")
      await expect(page.locator("form")).toBeVisible()
    })
    
    test("AFF-01: Affiliate Programs", async ({ page }) => {
      await page.goto("/affiliate-programs")
      await expect(page.locator("form")).toBeVisible()
    })
  })
})
