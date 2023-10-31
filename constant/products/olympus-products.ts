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
        name: "Vendor Payments",
        description: "Keep track of all your vendor bills",
        imageSrc: vendorPayment,
        imageSrcHovered: vendorPaymentFilled,
        link: "/404",
      },
      {
        name: "Rental Payments",
        description: "Maintain rental records for payments",
        imageSrc: rentalPayments,
        imageSrcHovered: rentalPaymentsFilled,
        link: "/404",
      },
      {
        name: "Bulk Payout",
        description: "Keep track of all your vendor bills",
        imageSrc: bulkPayout,
        imageSrcHovered: bulkPayoutFilled,
        link: "/404",
      },
      {
        name: "Bill Payments",
        description: "Automate timely bill payments",
        imageSrc: billPayments,
        imageSrcHovered: billPaymentsFilled,
        link: "/bill-payments",
      },
      {
        name: "Tax Payments",
        description: "Audit-compliant tax payment process.",
        imageSrc: taxPayment,
        imageSrcHovered: taxPaymentFilled,
        link: "/tax-payments",
      },
    ],
    footerText: "Stream Line with Payables",
    footerImg: "xpenz_footer_bg",
    footerLink: "/olympus",
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
        name: "Virtual Account",
        description: "Keep track of all your vendor bills",
        imageSrc: virtualAccounts,
        imageSrcHovered: virtualAccountsFilled,
        link: "/404",
      },
      {
        name: "Payment Links",
        description: "Maintain rental records for payments",
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
        name: "Quick Collect",
        description: "Automate timely bill payments",
        imageSrc: quickCollect,
        imageSrcHovered: quickCollectFilled,
        link: "/quick-collect",
      },
      {
        name: "Invoices",
        description: "Audit-compliant tax payment process.",
        imageSrc: invoices,
        imageSrcHovered: invoicesFilled,
        link: "/invoices",
      },
    ],
    footerText: "Stream Line with Receivables",
    footerImg: "xpenz_footer_bg",
    footerLink: "/olympus",
  },
];

export default olympusProducts;
