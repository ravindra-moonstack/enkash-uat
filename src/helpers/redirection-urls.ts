const url: {
  source: string
  destination: string
  permanent?: boolean
}[] = [
  {
    source: "/resource",
    destination: "/resources",
  },
  { source: "/bolt/category/404", destination: "/products/vouchers/" },
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
  { source: "/corporate-cards/meal-cards", destination: "/meal-card" },
  { source: "/corporate-cards/purchase-cards", destination: "/purchase-card" },
  { source: "/corporate-cards/saas-cards", destination: "/saas-card" },
  {
    source: "/corporate-cards/travel-and-expense-cards",
    destination: "/travel-and-expense-card",
  },
  { source: "/corporate-cards/virtual-cards", destination: "/virtual-card" },
  {
    source: "/loyalty-lounge/brand-voucher",
    destination: "/products/vouchers",
  },
  {
    source: "/loyalty-lounge/channel-incentive",
    destination: "/channel-incentives",
  },
  {
    source: "/loyalty-lounge/employee-rewards",
    destination: "/employee-rewards",
  },
  { source: "/loyalty-lounge/gift-cards", destination: "/gift-cards" },
  { source: "/loyalty-lounge/offers", destination: "/offers" },
  { source: "/ofex/budget-and-advances", destination: "/budget-and-advances" },
  {
    source: "/ofex/hierarchy-and-controls",
    destination: "/hierarchy-and-controls",
  },
  { source: "/ofex/insights", destination: "/expense-analytics-and-insights" },
  { source: "/ofex/policy-and-approval-flows", destination: "/approval-flows" },
  { source: "/ofex/reimbursement", destination: "/reimbursements" },
  { source: "/ofex/scan-and-drop-receipts", destination: "/receipts" },
  { source: "/olympus/payables", destination: "/products/make-payments" },
  {
    source: "/olympus/payables/bill-payment",
    destination: "/utility-bill-payment",
  },
  { source: "/olympus/payables/bulk-payout", destination: "/bulk-pay" },
  { source: "/olympus/payables/gst-payments", destination: "/gst-payment" },
  {
    source: "/olympus/payables/invoice-management",
    destination: "/invoice-management",
  },
  {
    source: "/olympus/payables/payable-analytics",
    destination: "/payable-analytics",
  },
  { source: "/olympus/payables/payroll-processing", destination: "/payroll" },
  { source: "/olympus/payables/rental-payment", destination: "/rent-payment" },
  {
    source: "/olympus/payables/seamless-banking",
    destination: "/connected-banking",
  },
  {
    source: "/olympus/payables/vendor-management",
    destination: "/vendor-management",
  },
  {
    source: "/olympus/payables/vendor-payment",
    destination: "/vendor-payment",
  },
  { source: "/olympus/receivables", destination: "/products/collect-payments" },
  { source: "/olympus/receivables/auto-collect", destination: "/auto-collect" },
  {
    source: "/olympus/receivables/automated-reconciliation",
    destination: "/auto-reconciliation",
  },
  { source: "/olympus/receivables/bulk-collect", destination: "/bulk-collect" },
  {
    source: "/olympus/receivables/collection-analytics",
    destination: "/collection-analytics",
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
  },
  {
    source: "/olympus/receivables/payment-button",
    destination: "/payment-button",
  },
  {
    source: "/olympus/receivables/payment-gateway",
    destination: "/payment-gateway",
  },
  {
    source: "/olympus/receivables/payment-links",
    destination: "/payment-links",
  },
  { source: "/olympus/receivables/qr-codes", destination: "/qr-code" },
  {
    source: "/olympus/receivables/reminder-engine",
    destination: "/collection-reminder",
  },
  {
    source: "/olympus/receivables/subscription-management",
    destination: "/subscriptions",
  },
  { source: "/olympus/receivables/upi-payments", destination: "/upi-payments" },
  { source: "/olympus/receivables/virtual-accounts", destination: "/" },
  { source: "/policies/payments", destination: "/policies" },
  { source: "/policies/platform", destination: "/policies" },
  { source: "/policies/prepaid-program", destination: "/policies" },

  // ✅ Solutions redirects
  { source: "/solutions/apis-modules", destination: "/" },
  { source: "/solutions/cashflow-analytics", destination: "/" },
  { source: "/solutions/cfo-insights", destination: "/" },
  { source: "/solutions/cfo-suite", destination: "/" },
  { source: "/solutions/customized-reporting", destination: "/" },
  {
    source: "/solutions/instant-card-management",
    destination: "/instant-card-management",
  },
  {
    source: "/solutions/integrations",
    destination: "https://docs.enkash.com/",
  },
  {
    source: "/solutions/workflow-management",
    destination: "/workflow-management",
  },

  { source: "/voucher/zee5", destination: "/vouchers/zee5" },
  { source: "/vouchers/category/apparels", destination: "/apparels-vouchers" },
  {
    source: "/vouchers/category/e-commerce",
    destination: "/e-commerce-vouchers",
  },
  {
    source: "/vouchers/category/food-and-beverages",
    destination: "/food-and-beverages-vouchers",
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
  },
  {
    source: "/vouchers/food-and-beverages/swiggy-e-gift-card",
    destination: "/vouchers/swiggy",
  },
  {
    source: "/vouchers/food-and-beverages/dominos-gift-card",
    destination: "/vouchers/dominos",
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

  { source: "/corporate-cards", destination: "/products/corporate-cards" },
  { source: "/bill-payments", destination: "/utility-bill-payment" },
  { source: "/cardx", destination: "/products/corporate-cards" },
  { source: "/budget-management", destination: "/budget-and-advances" },
  { source: "/tax-payments", destination: "/gst-payment" },
  { source: "/virtual-cards", destination: "/virtual-card" },
  { source: "/rewards-and-offers", destination: "/products/rewards" },
  { source: "/approvals", destination: "/approval-flows" },
  { source: "/bulk-payout", destination: "/bulk-pay" },
  { source: "/invoices", destination: "/digital-invoicing" },
  { source: "/vendor-payments", destination: "/vendor-payment" },
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
  },
  {
    source: "/resources/video-category/Corporate Card",
    destination: "/resources/videos",
  },
  {
    source: "/resources/video-category/Marketing",
    destination: "/resources/videos",
  },
  {
    source: "/resources/blog/press_release/press-note-pa-license-in-principle-approval",
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
    source: "/resources/blog/ultimate-guide-ACH-debit",
    destination: "/resources/blog/ultimate-guide-ach-debit",
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
  },
  {
    source: "/partnerships",
    destination: "/affiliate-programs",
  },
  {
    source: "/payment-link",
    destination: "/payment-links",
  },
  {
    source: "/qr-c",
    destination: "/qr-code",
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
  },
  {
    source: "/vouchers",
    destination: "/products/vouchers",
  },
]

const mappedUrls = url.map((item) => ({
  ...item,
  permanent: item.permanent ?? false,
}))

export default mappedUrls
