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
    list: [
      {
        name: "Vendor Payments",
        description: "Keep track of all your vendor bills",
        imageSrc: vendorPayment,
        imageSrcHovered: vendorPaymentFilled,
      },
      {
        name: "Rental Payments",
        description: "Maintain rental records for payments",
        imageSrc: rentalPayments,
        imageSrcHovered: rentalPaymentsFilled,
      },
      {
        name: "Bulk Payout",
        description: "Keep track of all your vendor bills",
        imageSrc: bulkPayout,
        imageSrcHovered: bulkPayoutFilled,
      },
      {
        name: "Bill Payments",
        description: "Automate timely bill payments",
        imageSrc: billPayments,
        imageSrcHovered: billPaymentsFilled,
      },
      {
        name: "Tax Payments",
        description: "Audit-compliant tax payment process.",
        imageSrc: taxPayment,
        imageSrcHovered: taxPaymentFilled,
      },
    ],
    footerText: "Stream Line with Payables",
  },
  {
    subtitle: "Receivables",
    list: [
      {
        name: "Virtual Account",
        description: "Keep track of all your vendor bills",
        imageSrc: virtualAccounts,
        imageSrcHovered: virtualAccountsFilled,
      },
      {
        name: "Payment Links",
        description: "Maintain rental records for payments",
        imageSrc: paymentLinks,
        imageSrcHovered: paymentLinksFilled,
      },
      {
        name: "Bulk Collect",
        description: "Keep track of all your vendor bills",
        imageSrc: bulkCollect,
        imageSrcHovered: bulkCollectFilled,
      },
      {
        name: "Quick Collect",
        description: "Automate timely bill payments",
        imageSrc: quickCollect,
        imageSrcHovered: quickCollectFilled,
      },
      {
        name: "Invoices",
        description: "Audit-compliant tax payment process.",
        imageSrc: invoices,
        imageSrcHovered: invoicesFilled,
      },
    ],
    footerText: "Stream Line with Payables",
  },
];

export default olympusProducts;
