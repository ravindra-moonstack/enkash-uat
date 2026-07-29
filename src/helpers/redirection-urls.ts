const url: {
  source: string
  destination: string
  permanent?: boolean
}[] = [
  {
    source: "/resource",
    destination: "/resources",
  },
  {
    source: "/bolt/category/404",
    destination: "/products/vouchers/",
    permanent: true,
  },
  { source: "/bolt/category/apparels", destination: "/apparels-vouchers/" },
  { source: "/bolt/category/e-commerce", destination: "/e-commerce-vouchers/" },
  {
    source: "/bolt/category/food-and-beverages",
    destination: "/food-and-beverages-vouchers",
  },
  {
    source: "/voucher/food-and-beverages",
    destination: "/food-and-beverages-vouchers",
    permanent: true,
  },
  {
    source: "/voucher/nykaa-fashion-e-gift-card",
    destination: "/vouchers/nykaa",
    permanent: true,
  },
  {
    source: "/bolt/category/health-and-wellness",
    destination: "/health-and-wellness-vouchers",
  },
  {
    source: "/bolt/category/movies-and-music",
    destination: "/movie-and-music-vouchers",
  },
  { source: "/bolt/voucher/404", destination: "/products/vouchers" },
  {
    source: "/bolt/voucher/BookMyShow-E-Gift-Card",
    destination: "/products/vouchers",
  },
  {
    source: "/corporate-cards/digital-marketing-cards",
    destination: "/digital-marketing-card",
  },
  {
    source: "/corporate-cards/diy-card-module",
    destination: "/diy-card-module",
  },
  { source: "/corporate-cards/fuel-cards", destination: "/fuel-card" },
  {
    source: "/corporate-cards/meal-cards",
    destination: "/meal-card",
    permanent: true,
  },
  {
    source: "/corporate-cards/purchase-cards",
    destination: "/purchase-card",
    permanent: true,
  },
  {
    source: "/corporate-cards/saas-cards",
    destination: "/saas-card",
    permanent: true,
  },
  {
    source: "/saas-cards",
    destination: "/saas-card",
    permanent: true,
  },
  {
    source: "/corporate-cards/travel-and-expense-cards",
    destination: "/travel-and-expense-card",
  },
  {
    source: "/corporate-cards/virtual-cards",
    destination: "/virtual-card",
    permanent: true,
  },
  {
    source: "/loyalty-lounge/brand-voucher",
    destination: "/products/vouchers",
    permanent: true,
  },
  {
    source: "/loyalty-lounge/channel-incentive",
    destination: "/channel-incentives",
  },
  {
    source: "/loyalty-lounge/employee-rewards",
    destination: "/employee-rewards",
    permanent: true,
  },
  {
    source: "/loyalty-lounge/gift-cards",
    destination: "/gift-cards",
    permanent: true,
  },
  { source: "/loyalty-lounge/offers", destination: "/offers" },
  {
    source: "/ofex/budget-and-advances",
    destination: "/budget-and-advances",
    permanent: true,
  },
  {
    source: "/ofex/hierarchy-and-controls",
    destination: "/hierarchy-and-controls",
  },
  { source: "/ofex/insights", destination: "/expense-analytics-and-insights" },
  {
    source: "/ofex/policy-and-approval-flows",
    destination: "/approval-flows",
    permanent: true,
  },
  {
    source: "/ofex/reimbursement",
    destination: "/reimbursements",
    permanent: true,
  },
  { source: "/ofex/scan-and-drop-receipts", destination: "/receipts" },
  {
    source: "/olympus/payables",
    destination: "/products/make-payments",
    permanent: true,
  },
  {
    source: "/olympus/payables/bill-payment",
    destination: "/utility-bill-payment",
    permanent: true,
  },
  {
    source: "/olympus/payables/bulk-payout",
    destination: "/bulk-pay",
    permanent: true,
  },
  {
    source: "/olympus/payables/gst-payments",
    destination: "/gst-payment",
    permanent: true,
  },
  {
    source: "/olympus/payables/invoice-management",
    destination: "/invoice-management",
    permanent: true,
  },
  {
    source: "/olympus/payables/payable-analytics",
    destination: "/payable-analytics",
    permanent: true,
  },
  {
    source: "/olympus/payables/payroll-processing",
    destination: "/payroll",
    permanent: true,
  },
  {
    source: "/olympus/payables/rental-payment",
    destination: "/rent-payment",
    permanent: true,
  },
  {
    source: "/olympus/payables/seamless-banking",
    destination: "/connected-banking",
  },
  {
    source: "/olympus/payables/vendor-management",
    destination: "/vendor-management",
    permanent: true,
  },
  {
    source: "/olympus/payables/vendor-payment",
    destination: "/vendor-payment",
  },
  {
    source: "/olympus/receivables",
    destination: "/products/collect-payments",
    permanent: true,
  },
  {
    source: "/olympus/receivables/auto-collect",
    destination: "/auto-collect",
    permanent: true,
  },
  {
    source: "/olympus/receivables/automated-reconciliation",
    destination: "/auto-reconciliation",
  },
  {
    source: "/olympus/receivables/bulk-collect",
    destination: "/bulk-collect",
    permanent: true,
  },
  {
    source: "/olympus/receivables/collection-analytics",
    destination: "/collection-analytics",
    permanent: true,
  },
  {
    source: "/olympus/receivables/customized-payment",
    destination: "/payment-page",
  },
  { source: "/olympus/receivables/e-nach", destination: "/e-nach" },
  {
    source: "/olympus/receivables/instant-settlements",
    destination: "/instant-settlement",
  },
  {
    source: "/olympus/receivables/invoices",
    destination: "/digital-invoicing",
    permanent: true,
  },
  {
    source: "/olympus/receivables/payment-button",
    destination: "/payment-button",
  },
  {
    source: "/olympus/receivables/payment-gateway",
    destination: "/payment-gateway",
    permanent: true,
  },
  {
    source: "/olympus/receivables/payment-links",
    destination: "/payment-links",
    permanent: true,
  },
  {
    source: "/olympus/receivables/qr-codes",
    destination: "/qr-code",
    permanent: true,
  },
  {
    source: "/olympus/receivables/reminder-engine",
    destination: "/collection-reminder",
    permanent: true,
  },
  {
    source: "/olympus/receivables/subscription-management",
    destination: "/subscriptions",
    permanent: true,
  },
  {
    source: "/olympus/receivables/upi-payments",
    destination: "/upi-payments",
    permanent: true,
  },
  { source: "/olympus/receivables/virtual-accounts", destination: "/" },
  { source: "/policies/payments", destination: "/policies", permanent: true },
  { source: "/policies/platform", destination: "/policies", permanent: true },
  {
    source: "/policies/prepaid-program",
    destination: "/policies",
    permanent: true,
  },

  // ✅ Solutions redirects
  { source: "/solutions/apis-modules", destination: "/" },
  {
    source: "/solutions/cashflow-analytics",
    destination: "/",
    permanent: true,
  },
  { source: "/solutions/cfo-insights", destination: "/" },
  { source: "/solutions/cfo-suite", destination: "/" },
  {
    source: "/solutions/customized-reporting",
    destination: "/",
    permanent: true,
  },
  {
    source: "/solutions/instant-card-management",
    destination: "/instant-card-management",
    permanent: true,
  },
  {
    source: "/solutions/integrations",
    destination: "https://docs.enkash.com/",
  },
  {
    source: "/solutions/workflow-management",
    destination: "/workflow-management",
    permanent: true,
  },

  { source: "/voucher/zee5", destination: "/vouchers/zee5" },
  { source: "/vouchers/category/apparels", destination: "/apparels-vouchers" },
  {
    source: "/vouchers/category/e-commerce",
    destination: "/e-commerce-vouchers",
    permanent: true,
  },
  {
    source: "/vouchers/category/food-and-beverages",
    destination: "/food-and-beverages-vouchers",
    permanent: true,
  },
  {
    source: "/vouchers/category/health-and-wellness",
    destination: "/health-and-wellness-vouchers",
  },
  {
    source: "/vouchers/category/movies-and-music",
    destination: "/movie-and-music-vouchers",
  },
  {
    source: "/vouchers/movies-and-music/zee5-gift-card",
    destination: "/vouchers/zee5",
  },

  {
    source: "/vouchers/e-commerce/nykaa-gift-card",
    destination: "/vouchers/nykaa",
  },
  {
    source: "/vouchers/e-commerce/flipkart-supercoins-e-gift-card",
    destination: "/vouchers/flipkart-super-coins",
    permanent: true,
  },

  {
    source: "/vouchers/e-commerce/ajio-e-gift-card",
    destination: "/vouchers/ajio",
  },

  {
    source: "/vouchers/e-commerce/amazon-prime-shopping",
    destination: "/vouchers/amazon-prime-shopping",
  },

  {
    source: "/vouchers/food-and-beverages/zomato-e-gift-card",
    destination: "/vouchers/zomato",
    permanent: true,
  },
  {
    source: "/vouchers/food-and-beverages/swiggy-e-gift-card",
    destination: "/vouchers/swiggy",
    permanent: true,
  },
  {
    source: "/vouchers/food-and-beverages/dominos-gift-card",
    destination: "/vouchers/dominos",
    permanent: true,
  },
  {
    source: "/vouchers/food-and-beverages/mcdonalds-gift-card",
    destination: "/vouchers/mcdonalds",
  },
  {
    source: "/vouchers/health-and-wellness/cultfit-gift-card",
    destination: "/vouchers/cultfit",
  },
  {
    source: "/vouchers/apparels/levis-gift-card",
    destination: "/vouchers/levis",
  },
  {
    source: "/vouchers/apparels/jockey-e-gift-card",
    destination: "/vouchers/jockey",
  },
  {
    source: "/vouchers/health-and-wellness/healthkart-gift-card",
    destination: "/vouchers/healthkart",
  },
  {
    source: "/vouchers/apparels/pantaloons-e-gift-card",
    destination: "/vouchers/pantaloons",
  },
  {
    source: "/vouchers/food-and-beverages/kfc-e-gift-card",
    destination: "/vouchers/kfc",
  },
  {
    source: "/vouchers/apparels/westside-gift-card",
    destination: "/vouchers/westside",
  },
  {
    source: "/vouchers/health-and-wellness/apollo-pharmacy-e-healing-gift-card",
    destination: "/vouchers/apollo",
  },
  {
    source: "/vouchers/health-and-wellness/mamaearth-gift-card",
    destination: "/vouchers/mamaearth",
  },
  {
    source: "/vouchers/movies-and-music/amazon-prime-gift-card",
    destination: "/vouchers/amazon-prime-shopping",
  },
  {
    source: "/vouchers/movies-and-music/fancode-gift-card",
    destination: "/vouchers/fan-code",
  },
  {
    source: "/vouchers/movies-and-music/pvr-gift-card",
    destination: "/vouchers/pvr",
  },
  {
    source: "/vouchers/dominos-pizza-e-gift-card",
    destination: "/vouchers/dominos",
  },
  {
    source: "/qr-codes",
    destination: "/qr-code",
  },

  {
    source: "/voucher/:path*",
    destination: "/vouchers/:path*",
    permanent: true,
  },
  {
    source: "/voucher",
    destination: "/products/vouchers",
  },
  {
    source: "/resourcesblog/budget-highlights-2023",
    destination: "/resources/blog/union-budget-2023",
  },
  {
    source: "/wp-admin/:path*",
    destination: "/resources/wp-admin/:path*",
  },

  {
    source: "/corporate-cards",
    destination: "/products/corporate-cards",
    permanent: true,
  },
  { source: "/bill-payments", destination: "/utility-bill-payment" },
  { source: "/cardx", destination: "/products/corporate-cards" },
  { source: "/budget-management", destination: "/budget-and-advances" },
  { source: "/tax-payments", destination: "/gst-payment" },
  { source: "/virtual-cards", destination: "/virtual-card" },
  { source: "/rewards-and-offers", destination: "/products/rewards" },
  { source: "/approvals", destination: "/approval-flows" },
  { source: "/bulk-payout", destination: "/bulk-pay" },
  { source: "/invoices", destination: "/digital-invoicing" },
  {
    source: "/vendor-payments",
    destination: "/vendor-payment",
    permanent: true,
  },
  { source: "/spend-control", destination: "/hierarchy-and-controls" },
  {
    source: "/expense-management",
    destination: "/products/expense-management",
  },
  { source: "/reimbursement", destination: "/reimbursements" },
  { source: "/card-pay", destination: "/products/corporate-cards" },
  { source: "/quick-collect", destination: "/products/collect-payments" },
  { source: "/rental-payments", destination: "/rent-payment" },
  { source: "/buy-now-pay-later", destination: "/affordability-suite" },
  { source: "/olympus", destination: "/payment-gateway" },
  { source: "/department-management", destination: "/" },
  {
    source: "/resources/blogs/aadhaar-card",
    destination: "/resources/blog/category/aadhaar-card",
  },
  {
    source: "/resources/blogs/accounting-and-finance",
    destination: "/resources/blog/category/accounting-and-finance",
  },
  {
    source: "/resources/blogs/banking",
    destination: "/resources/blog/category/banking",
  },
  {
    source: "/resources/blogs/be-inspired",
    destination: "/resources/blog/category/be-inspired",
  },
  {
    source: "/resources/blogs/brand-vouchers",
    destination: "/resources/blog/category/brand-vouchers",
  },
  {
    source: "/resources/blogs/cards",
    destination: "/resources/blog/category/cards",
  },
  {
    source: "/resources/blogs/corporate-card",
    destination: "/resources/blog/category/corporate-card",
  },
  {
    source: "/resources/blogs/funding-guide",
    destination: "/resources/blog/category/funding-guide",
  },
  {
    source: "/resources/blogs/gift-cards",
    destination: "/resources/blog/category/gift-cards",
  },
  {
    source: "/resources/blogs/gift-vouchers",
    destination: "/resources/blog/category/gift-vouchers",
  },
  {
    source: "/resources/blogs/growth-guide",
    destination: "/resources/blog/category/growth-guide",
  },
  {
    source: "/resources/blogs/gst",
    destination: "/resources/blog/category/gst",
  },
  {
    source: "/resources/blogs/guest-article",
    destination: "/resources/blog/category/guest-article",
  },
  {
    source: "/resources/blogs/ilearn",
    destination: "/resources/blog/category/ilearn",
  },
  {
    source: "/resources/blogs/invoices",
    destination: "/resources/blog/category/invoices",
  },
  {
    source: "/resources/blogs/loyalty-lounge",
    destination: "/resources/blog/category/loyalty-lounge",
  },
  {
    source: "/resources/blogs/pan-card",
    destination: "/resources/blog/category/pan-card",
  },
  {
    source: "/resources/blogs/payables",
    destination: "/resources/blog/category/payables",
  },
  {
    source: "/resources/blogs/payables-expenses",
    destination: "/resources/blog/category/payables-expenses",
  },
  {
    source: "/resources/blogs/payment-gateway",
    destination: "/resources/blog/category/payment-gateway",
  },
  {
    source: "/resources/blogs/payments",
    destination: "/resources/blog/category/payments",
  },
  {
    source: "/resources/blogs/receivables",
    destination: "/resources/blog/category/receivables",
  },
  {
    source: "/resources/blogs/recent-news",
    destination: "/resources/blog/category/recent-news",
  },
  {
    source: "/resources/blogs/rewards-recognition",
    destination: "/resources/blog/category/rewards-recognition",
  },
  {
    source: "/resources/blogs/tax-payment",
    destination: "/resources/blog/category/tax-payment",
  },
  {
    source: "/resources/blogs/trending-topics",
    destination: "/resources/blog/category/trending-topics",
  },
  {
    source: "/resources/blogs/wallets",
    destination: "/resources/blog/category/wallets",
  },
  {
    source: "/resources/video-category/Corporate%20Card",
    destination: "/resources/videos",
    permanent: true,
  },
  {
    source: "/resources/video-category/Corporate Card",
    destination: "/resources/videos",
    permanent: true,
  },
  {
    source: "/resources/video-category/Marketing",
    destination: "/resources/videos",
    permanent: true,
  },
  {
    source:
      "/resources/blog/press_release/press-note-pa-license-in-principle-approval",
    destination: "/resources/blogs",
  },
  {
    source: "/resources/blogs/expenses",
    destination: "/resources/blog/category/expenses",
  },
  {
    source: "/resources/blogs/industry-news",
    destination: "/resources/blog/category/industry-news",
  },
  {
    source: "/resources/form",
    destination: "/sales",
  },
  {
    source: "/account-payable",
    destination: "/products/make-payments",
  },
  {
    source: "/bolt",
    destination: "/products/vouchers",
  },
  {
    source: "/bulk-payment-collection",
    destination: "/bulk-pay",
  },
  {
    source: "/business-bill-payment",
    destination: "/utility-bill-payment",
  },
  {
    source: "/cards",
    destination: "/products/corporate-cards",
  },
  {
    source: "/collect-payments",
    destination: "/products/collect-payments",
  },
  {
    source: "/employee-reward",
    destination: "/products/rewards",
  },
  {
    source: "/express-pay",
    destination: "/bulk-pay",
  },
  {
    source: "/integrated-accounting",
    destination: "/",
  },
  {
    source: "/integrated-cards",
    destination: "/products/corporate-cards",
  },
  {
    source: "/loyalty-lounge",
    destination: "/products/vouchers",
  },
  {
    source: "/make-payments",
    destination: "/products/make-payments",
  },
  {
    source: "/ofex",
    destination: "/products/expense-management",
    permanent: true,
  },
  {
    source: "/partnerships",
    destination: "/affiliate-programs",
    permanent: true,
  },
  {
    source: "/payment-link",
    destination: "/payment-links",
  },
  {
    source: "/qr-c",
    destination: "/qr-code",
    permanent: true,
  },
  {
    source: "/rewards",
    destination: "/products/rewards",
  },
  {
    source: "/utility-bill-payment class=",
    destination: "/utility-bill-payment",
  },
  {
    source: "/virtual-account",
    destination: "/",
  },
  {
    source: "/virtual-card",
    destination: "/products/corporate-cards",
    permanent: true,
  },
  {
    source: "/vouchers",
    destination: "/products/vouchers",
  },
  {
    source: "/resources/blog/category/video-monitorisation",
    destination: "/resources/videos",
  },
  {
    source: "/resources/blog/llp-vs-company-key-differences-explained",
    destination:
      "/resources/blog/private-limited-company-vs-limited-liability-partnership-llp",
    permanent: true,
  },
  {
    source:
      "/resources/blog/tax-deducted-at-source-tds-vs-tax-collected-at-source-tcs-key-differences",
    destination: "/resources/blog/what-is-tds-and-how-is-it-different-from-tcs",
    permanent: true,
  },
  {
    source: "/resources/blog/top-payment-apis-for-developers",
    destination: "/resources/blog/top-payment-apis-for-developers-in-2026",
    permanent: true,
  },
  {
    source: "/resources/blog/top-private-banks-in-india",
    destination:
      "/resources/blog/private-banks-in-india-list-of-top-private-sector-banks-in-2026",
    permanent: true,
  },
  {
    source: "/resources/blog/category/undefined",
    destination: "/resources/blogs",
    permanent: true,
  },
  {
    source: "/glossary/NBFCs",
    destination: "/glossary/non-banking-financial-company",
    permanent: true,
  },
  {
    source: "/glossary/Prepaid%20Payment%20Instruments%20\\(PPI\\)",
    destination: "/glossary/prepaid-payment-instruments-ppi",
    permanent: true,
  },

]

const mappedUrls = url.map((item) => {
  const { permanent, ...rest } = item
  return {
    ...rest,
    statusCode: permanent ? 301 : 302,
  }
})

export default mappedUrls
