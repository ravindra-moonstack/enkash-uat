import {
  vendorPayment,
  vendorPaymentFilled,
  bulkPayout,
  taxPayment,
  bulkPayoutFilled,
  taxPaymentFilled,
  virtualAccounts,
  virtualAccountsFilled,
  paymentLinks,
  paymentLinksFilled,
  invoices,
  invoicesFilled,
  bulkCollect,
  bulkCollectFilled,
  rentalPayments,
  rentalPaymentsFilled,
  billPayments,
  billPaymentsFilled,
  payByAnyCard,
  payByAnyCardFilled,
  invoiceManegement,
  invoiceManegementFilled,
  collectionAnalyticsFilled,
  collectionAnalytics,
  eNach,
  eNachFilled,
  seamlessBankingFilled,
  seamlessBanking,
  reminderEngineFilled,
  reminderEngine,
  payablesAnalytics,
  payablesAnalyticsFilled,
  subscriptionManagement,
  subscriptionManagementFilled,
  payrollProcessing,
  payrollProcessingFilled,
} from "@/components/header";

const olympusProducts = [
  {
    subtitle: "Payables",
    subtitleLink: "/olympus/payables",
    currentHeading: {
      name: "Olympus",
      description:
        "Automate your company’s accounts payable, accounts receivables, and bank reconciliation seamlessly",
    },
    list: [
      {
        name: "Vendor Payment",
        description:
          "Instantaneously add, verify, pay, and manage vendors with ease",
        imageSrc: vendorPayment,
        imageSrcHovered: vendorPaymentFilled,
        link: "/olympus/payables/vendor-payment",
      },
      {
        name: "Bill Payment",
        description:
          "Pay utilities on time, every time, with Auto-Fetch and Auto-Pay",
        imageSrc: billPayments,
        imageSrcHovered: billPaymentsFilled,
        link: "/olympus/payables/bill-payment",
      },
      {
        name: "Express Pay",
        description: "Pay multiple bills & invoices with a single click",
        imageSrc: bulkPayout,
        imageSrcHovered: bulkPayoutFilled,
        link: "/olympus/payables/bulk-payout",
      },
      {
        name: "GST Payment",
        description: "Pay GST with any card, get reminders, and track payments",
        imageSrc: taxPayment,
        imageSrcHovered: taxPaymentFilled,
        link: "/olympus/payables/gst-payments",
      },

      {
        name: "Rental Payment",
        description:
          "Pay & manage your office/home rent directly into your landlord’s bank",
        imageSrc: rentalPayments,
        imageSrcHovered: rentalPaymentsFilled,
        link: "/olympus/payables/rental-payment",
      },
      // {
      //   name: "Pay By Any Card",
      //   description:
      //     "Pay your business utility bills, GST and vendor payments via any card",
      //   imageSrc: payByAnyCard,
      //   imageSrcHovered: payByAnyCardFilled,
      //   link: "/olympus/payables/pay-by-any-card",
      // },
      {
        name: "Invoice Management",
        description:
          "Upload and manage all the vendor invoices from a single dashboard",
        imageSrc: invoiceManegement,
        imageSrcHovered: invoiceManegementFilled,
        link: "/olympus/payables/invoice-management",
      },
      {
        name: "Vendor Management",
        description: "Onboard, verify, and manage all business vendors easily",
        imageSrc: rentalPayments,
        imageSrcHovered: rentalPaymentsFilled,
        link: "/olympus/payables/vendor-management",
      },
      {
        name: "Seamless Banking",
        description: "A personalized business banking experience",
        imageSrc: seamlessBanking,
        imageSrcHovered: seamlessBankingFilled,
        link: "/olympus/payables/seamless-banking/",
      },
      {
        name: "Payable Analytics",
        description:
          "Stay informed about business’s accounts payable for better financial planning",
        imageSrc: payablesAnalytics,
        imageSrcHovered: payablesAnalyticsFilled,
        link: "/olympus/payables/payable-analytics/",
      },
      {
        name: "Payroll Processing",
        description:
          "Simplify salary disbursement process with efficient payroll processing",
        imageSrc: payrollProcessing,
        imageSrcHovered: payrollProcessingFilled,
        link: "/olympus/payables/payroll-processing/",
      },
    ],
    footerText:
      "Effortlessly streamline your business payments and collections",
    footerMobileText: "Explore Payables",
    footerImg: "olympus_footer_bg",
    footerLink: "/olympus",
    parentLink: "/olympus",
  },
  {
    subtitle: "Receivables",
    subtitleLink: "/olympus/receivables",
    currentHeading: {
      name: "Olympus",
      description:
        "Automate your company’s accounts payable, accounts receivables, and bank reconciliation seamlessly",
    },
    list: [
      {
        name: "Virtual Accounts",
        description: "Reconcile invoices and streamline collections",
        imageSrc: virtualAccounts,
        imageSrcHovered: virtualAccountsFilled,
        link: "/olympus/receivables/virtual-accounts",
      },
      {
        name: "Payment Links",
        description: "Embed payments, quicken collections, improve sales",
        imageSrc: paymentLinks,
        imageSrcHovered: paymentLinksFilled,
        link: "/olympus/receivables/payment-links",
      },
      {
        name: "Bulk Collect",
        description: "Simplify bulk collections, invoicing, data quality",
        imageSrc: bulkCollect,
        imageSrcHovered: bulkCollectFilled,
        link: "/olympus/receivables/bulk-collect",
      },
      {
        name: "Invoices",
        description:
          "Manage invoices with complete details with quicker payment options",
        imageSrc: invoices,
        imageSrcHovered: invoicesFilled,
        link: "/olympus/receivables/invoices",
      },

      {
        name: "Collection Analytics",
        description:
          "Analyze and enhance your collection process with smart analytics",
        imageSrc: collectionAnalytics,
        imageSrcHovered: collectionAnalyticsFilled,
        link: "/olympus/receivables/collection-analytics",
      },
      {
        name: "Reminder Engine",
        description:
          "Automate reminders for efficient collections and improve cash flow",
        imageSrc: reminderEngine,
        imageSrcHovered: reminderEngineFilled,
        link: "/olympus/receivables/reminder-engine",
      },
      {
        name: "e-NACH",
        description:
          "Automate recurring payments and collections, ensuring efficient cash-flow management",
        imageSrc: eNach,
        imageSrcHovered: eNachFilled,
        link: "/olympus/receivables/e-nach",
      },
      {
        name: "Subscription Management",
        description:
          "Track and handle recurring subscriptions with utmost ease",
        imageSrc: subscriptionManagement,
        imageSrcHovered: subscriptionManagementFilled,
        link: "/olympus/receivables/subscription-management",
      },
      {
        name: "Payment gateway",
        description:
          "Track and handle recurring subscriptions with utmost ease",
        imageSrc: subscriptionManagement,
        imageSrcHovered: subscriptionManagementFilled,
        link: "/olympus/receivables/payment-gateway",
      },
      {
        name: "Payment button",
        description:
          "Track and handle recurring subscriptions with utmost ease",
        imageSrc: subscriptionManagement,
        imageSrcHovered: subscriptionManagementFilled,
        link: "/olympus/receivables/payment-button",
      },
      {
        name: "Customized Payment",
        description:
          "Track and handle recurring subscriptions with utmost ease",
        imageSrc: subscriptionManagement,
        imageSrcHovered: subscriptionManagementFilled,
        link: "/olympus/receivables/customized-payment",
      },
    ],
    footerText:
      "Effortlessly streamline your business payments and collections",
    footerMobileText: "Explore Receivables",
    footerImg: "olympus_footer_bg",
    footerLink: "/olympus",
    parentLink: "/olympus",
  },
];

export default olympusProducts;
