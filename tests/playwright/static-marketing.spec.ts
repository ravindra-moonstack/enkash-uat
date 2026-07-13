import { test, expect } from "@playwright/test"

const STATIC_MARKETING_PAGES = [
  "/affordability-suite", "/approval-flows", "/auto-collect", 
  "/auto-reconciliation", "/budget-and-advances", "/bulk-collect", 
  "/bulk-pay", "/campaigns", "/cashflow-analytics", "/channel-incentives", 
  "/co-branded-card-partners", "/co-branded-digital-wallet", 
  "/products/collect-payments", "/collection-analytics", "/collection-reminder", 
  "/connected-banking", "/digital-invoicing", "/digital-marketing-card", 
  "/diy-card-module", "/e-nach", "/employee-benefit-multi-wallet", 
  "/employee-rewards", "/enterprise-bill-payments", 
  "/expense-analytics-and-insights", "/products/expense-management",
  "/fuel-card", "/gift-cards", "/gst-payment", "/hierarchy-and-controls", 
  "/instant-card-management", "/instant-settlement", "/invoice-management", 
  "/meal-card", "/offers", "/payable-analytics", "/payment-button", 
  "/payment-gateway", "/payment-gateway-for-ecommerce", "/payment-links", 
  "/payment-page", "/payroll", "/petty-cash", "/prepaid-card", 
  "/products/corporate-cards", "/products/rewards",
  "/purchase-card", "/qr-code", "/receipts", "/reimbursements", 
  "/rent-payment", "/saas-card", "/subscriptions", "/travel-and-expense-card", 
  "/upi-payments", "/used-assets", "/utility-bill-payment", 
  "/vendor-management", "/vendor-payment", "/virtual-card", 
  "/workflow-management"
]

test.describe("Static Marketing & Product Pages", () => {
  test.setTimeout(120000); // Allow extra time for Next.js to compile in dev
  for (const pageUrl of STATIC_MARKETING_PAGES) {
    test(`Global Assertions & Content renders for ${pageUrl}`, async ({ page }) => {
      const response = await page.goto(pageUrl)
      expect(response?.status()).toBe(200)
      
      const title = await page.title()
      expect(title).not.toBe("")
      
      // Look for the main heading on the page
      const heading = page.locator("h1, h2").first()
      await expect(heading).toBeVisible()
      
      // Many of these pages have a "Get Started" or "Talk to Us" CTA
      const ctaButton = page.locator("a, button").filter({ hasText: /Get Started|Talk to Us|Explore|Connect|Learn More/i }).first()
      if (await ctaButton.count() > 0) {
        await expect(ctaButton).toBeVisible()
      }
    })
  }

})
