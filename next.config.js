/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.enkash.com"],
  },
  async redirects() {
    return [
      {
        source: "/vendor-payments",
        destination: "/olympus/payables/vendor-payment",
        permanent: true,
      },
      {
        source: "/rental-payments",
        destination: "/olympus/payables/rental-payment",
        permanent: true,
      },
      {
        source: "/bulk-payout",
        destination: "/olympus/payables/bulk-payout",
        permanent: true,
      },
      {
        source: "/bill-payments",
        destination: "/olympus/payables/bill-payment",
        permanent: true,
      },
      {
        source: "/tax-payments",
        destination: "/olympus/payables/gst-payments",
        permanent: true,
      },
      {
        source: "/virtual-accounts",
        destination: "/olympus/receivables/virtual-accounts",
        permanent: true,
      },
      {
        source: "/payment-links",
        destination: "/olympus/receivables/payment-links",
        permanent: true,
      },
      {
        source: "/bulk-collect",
        destination: "/olympus/receivables/bulk-collect",
        permanent: true,
      },
      {
        source: "/quick-collect",
        destination: "/olympus/receivables/bulk-collect",
        permanent: false,
      },
      {
        source: "/invoices",
        destination: "/olympus/receivables/invoices",
        permanent: true,
      },
      { source: "/corporate-cards", destination: "/slash", permanent: true },
      {
        source: "/virtual-cards",
        destination: "/slash/virtual-cards",
        permanent: true,
      },
      { source: "/integrated-cards", destination: "/slash", permanent: false },
      { source: "/diy-card", destination: "/slash", permanent: false },
      { source: "/spend-control", destination: "/slash", permanent: false },
      {
        source: "/budget-management",
        destination: "/ofex/budget-and-advances",
        permanent: true,
      },
      {
        source: "/department-management",
        destination: "/ofex/hierarchy-and-controls",
        permanent: true,
      },
      {
        source: "/reimbursement",
        destination: "/ofex/reimbursement",
        permanent: true,
      },
      {
        source: "/approvals",
        destination: "/ofex/policy-and-approval-flows",
        permanent: true,
      },
      {
        source: "/ocr-receipt-manage",
        destination: "/ofex/scan-and-drop-receipts",
        permanent: true,
      },
      {
        source: "/employee-reward",
        destination: "/loyalty-lounge/employee-rewards",
        permanent: true,
      },
      {
        source: "/brand-gift-vouchers",
        destination: "/loyalty-lounge/brand-voucher",
        permanent: true,
      },
      {
        source: "/channel-incentive",
        destination: "/loyalty-lounge/channel-incentive",
        permanent: true,
      },
      {
        source: "/rewards-and-offers",
        destination: "/loyalty-lounge/offers",
        permanent: true,
      },
      {
        source: "/gift-cards",
        destination: "/loyalty-lounge/gift-cards",
        permanent: true,
      },
      {
        source: "/career-team-and-openings",
        destination: "/",
        permanent: false,
      },
      { source: "/support", destination: "/", permanent: false },
      { source: "/about", destination: "/", permanent: false },
    ];
  },
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/resources/videos",
        destination: "https://blogs.enkash.com/videos/",
      },
      {
        source: "/resources/press-release",
        destination: "https://blogs.enkash.com/press-release/",
      },
      {
        source: "/resources/media-coverage",
        destination: "https://blogs.enkash.com/media-coverage/",
      },
      {
        source: "/resources/customer-stories",
        destination: "https://blogs.enkash.com/customer-stories/",
      },
      {
        source: "/resources",
        destination: "https://blogs.enkash.com/",
      },
      {
        source: "/resources/blog/:slug/",
        destination: "https://blogs.enkash.com/blog/:slug/",
      },
      {
        source: "/resources/:slug*",
        destination: "https://blogs.enkash.com/:slug*",
      },
    ];
  },
};

module.exports = nextConfig;
