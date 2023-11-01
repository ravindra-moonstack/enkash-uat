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
        name: "Bill Payables",
        description:
          "Pay utilities on time, every time, with Auto-Fetch and Auto-Pay",
        imageSrc: billPayments,
        imageSrcHovered: billPaymentsFilled,
        link: "/bill-payables",
      },
      {
        name: "Bulk Payout",
        description: "Pay multiple bills & invoices with a single click",
        imageSrc: bulkPayout,
        imageSrcHovered: bulkPayoutFilled,
        link: "/bulk-payout",
      },
      {
        name: "GST Payments",
        description: "Pay GST with any card, get reminders, and track payments",
        imageSrc: taxPayment,
        imageSrcHovered: taxPaymentFilled,
        link: "/gst-payments",
      },
      {
        name: "Vendor Payment",
        description:
          "Instantaneously Add, verify, pay, and manage vendors with ease",
        imageSrc: vendorPayment,
        imageSrcHovered: vendorPaymentFilled,
        link: "/vemdor-payment",
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
    footerText: "Stream Line with Payables",
    footerImg: "xpenz_footer_bg",
    footerLink: "/payables",
  },
  {
    subtitle: "Receivables",
    subtitleLink: "/receivables",
    currentHeading: {
      name: "olympus ",
      description:
        "Automate your company's AP, AR, and bank reconciliation seamlessly",
    },
    list: [
      {
        name: "Virtual Accounts",
        description: "Reconcile invoices and streamline collections",
        imageSrc: virtualAccounts,
        imageSrcHovered: virtualAccountsFilled,
        link: "/404",
      },
      {
        name: "Payment Links",
        description: "Embed payments, quicken collections, improve sales",
        imageSrc: paymentLinks,
        imageSrcHovered: paymentLinksFilled,
        link: "/payment-links",
      },
      // {
      //   name: "Bulk Collect",
      //   description: "Keep track of all your vendor bills",
      //   imageSrc: bulkCollect,
      //   imageSrcHovered: bulkCollectFilled,
      //   link: "/bulk-collect",
      // },
      {
        name: "Invoices",
        description:
          "Manage invoices with complete details with quicker payment options",
        imageSrc: invoices,
        imageSrcHovered: invoicesFilled,
        link: "/quick-collect",
      },
    ],
    footerText: "Stream Line with Receivables",
    footerImg: "xpenz_footer_bg",
    footerLink: "/receivables",
  },
];

export default olympusProducts;
