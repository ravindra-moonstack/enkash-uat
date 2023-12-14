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
} from "@/components/header";

const olympusProducts = [
  {
    subtitle: "Payables",
    subtitleLink: "/olympus/payables",
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
        link: "/olympus/payables/bill-payment",
      },
      {
        name: "Bulk Payout",
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
        name: "Vendor Payment",
        description:
          "Instantaneously add, verify, pay, and manage vendors with ease",
        imageSrc: vendorPayment,
        imageSrcHovered: vendorPaymentFilled,
        link: "/olympus/payables/vendor-payment",
      },
      {
        name: "Rental Payment",
        description:
          "Pay & manage your office/home rent directly into your landlord’s bank",
        imageSrc: rentalPayments,
        imageSrcHovered: rentalPaymentsFilled,
        link: "/olympus/payables/rental-payment",
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
    subtitleLink: "olympus/receivables",
    currentHeading: {
      name: "Olympus",
      description:
        "Automate your company's AP, AR, and bank reconciliation seamlessly",
    },
    list: [
      {
        name: "Virtual Accounts*",
        description: "Reconcile invoices and streamline collections",
        imageSrc: virtualAccounts,
        imageSrcHovered: virtualAccountsFilled,
        link: "/olympus/receivables/virtual-accounts",
      },
      {
        name: "Payment Links*",
        description: "Embed payments, quicken collections, improve sales",
        imageSrc: paymentLinks,
        imageSrcHovered: paymentLinksFilled,
        link: "/olympus/receivables/payment-links",
      },
      {
        name: "Bulk Collect*",
        description: "Simplify bulk collections, invoicing, data quality",
        imageSrc: bulkCollect,
        imageSrcHovered: bulkCollectFilled,
        link: "/olympus/receivables/bulk-collect",
      },
      {
        name: "Invoices*",
        description:
          "Manage invoices with complete details with quicker payment options",
        imageSrc: invoices,
        imageSrcHovered: invoicesFilled,
        link: "/olympus/receivables/invoices",
      },
    ],
    footerText:
      "Effortlessly streamline your business payments and collections",
    footerMobileText: "Explore Receivables",
    footerImg: "olympus_footer_bg",
    footerLink: "olympus",
    parentLink: "/olympus",
  },
];

export default olympusProducts;
