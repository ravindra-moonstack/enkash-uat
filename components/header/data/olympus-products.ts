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
  quickCollect,
  quickCollectFilled,
  invoices,
  invoicesFilled,
  bulkCollect,
  bulkCollectFilled,
  rentalPayments,
  rentalPaymentsFilled,
  billPayments,
  billPaymentsFilled,
} from "@/components/header";

const olympusProducts = [
  {
    subtitle: "Payables",
    subtitleLink: "/payables",
    currentHeading: {
      name: "Olympus",
      description:
        "Automate your company's AP, AR, and bank reconciliation seamlessly",
    },
    list: [
      {
        name: "Bill Payment",
        description:
          "Pay utilities on time, every time, with Auto-Fetch and Auto-Pay",
        imageSrc: billPayments,
        imageSrcHovered: billPaymentsFilled,
        link: "/bill-payment",
      },
      {
        name: "Bulk Payout",
        description: "Pay multiple bills & invoices with a single click",
        imageSrc: bulkPayout,
        imageSrcHovered: bulkPayoutFilled,
        link: "/bulk-payout",
      },
      {
        name: "GST Payment",
        description: "Pay GST with any card, get reminders, and track payments",
        imageSrc: taxPayment,
        imageSrcHovered: taxPaymentFilled,
        link: "/tax-payments",
      },
      {
        name: "Vendor Payment",
        description:
          "Instantaneously add, verify, pay, and manage vendors with ease",
        imageSrc: vendorPayment,
        imageSrcHovered: vendorPaymentFilled,
        link: "/vendor-payment",
      },
      {
        name: "Rental Payment",
        description:
          "Pay & manage your office/home rent directly into your landlord’s bank",
        imageSrc: rentalPayments,
        imageSrcHovered: rentalPaymentsFilled,
        link: "/rental-payment",
      },
    ],
    footerText: "Streamline your payments with payables",
    footerMobileText: "Explore Payables",
    footerImg: "olympus_footer_bg",
    footerLink: "/payables",
    parentLink: "/olympus",
  },
  {
    subtitle: "Receivables",
    subtitleLink: "/receivables",
    currentHeading: {
      name: "Olympus",
      description:
        "Automate your company's AP, AR, and bank reconciliation seamlessly",
    },
    list: [
      {
        name: "Virtual Accounts",
        description: "Reconcile invoices and streamline collections",
        imageSrc: virtualAccounts,
        imageSrcHovered: virtualAccountsFilled,
        link: "/virtual-accounts",
      },
      {
        name: "Payment Links",
        description: "Embed payments, quicken collections, improve sales",
        imageSrc: paymentLinks,
        imageSrcHovered: paymentLinksFilled,
        link: "/payment-links",
      },
      {
        name: "Bulk Collect",
        description: "Simplify bulk collections, invoicing, data quality",
        imageSrc: bulkCollect,
        imageSrcHovered: bulkCollectFilled,
        link: "/bulk-collect",
      },
      {
        name: "Invoices",
        description:
          "Manage invoices with complete details with quicker payment options",
        imageSrc: invoices,
        imageSrcHovered: invoicesFilled,
        link: "/invoices",
      },
    ],
    footerText: "Optimize your collections with receivables",
    footerMobileText: "Explore Receivables",
    footerImg: "olympus_footer_bg",
    footerLink: "/receivables",
    parentLink: "/olympus",
  },
];

export default olympusProducts;
