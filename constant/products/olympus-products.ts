import {
  vendorPayment,
  vendorPaymentFilled,
  bulkPayout,
  taxPayment,
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
        imageSrc: vendorPayment,
        imageSrcHovered: vendorPaymentFilled,
      },
      {
        name: "Bulk Payout",
        description: "Keep track of all your vendor bills",
        imageSrc: bulkPayout,
        imageSrcHovered: vendorPaymentFilled,
      },
      {
        name: "Bill Payments",
        description: "Automate timely bill payments",
        imageSrc: vendorPayment,
        imageSrcHovered: vendorPaymentFilled,
      },
      {
        name: "Tax Payments",
        description: "Audit-compliant tax payment process.",
        imageSrc: taxPayment,
        imageSrcHovered: vendorPaymentFilled,
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
        imageSrc: vendorPayment,
        imageSrcHovered: vendorPaymentFilled,
      },
      {
        name: "Payment Links",
        description: "Maintain rental records for payments",
        imageSrc: vendorPayment,
        imageSrcHovered: vendorPaymentFilled,
      },
      {
        name: "Bulk Collect",
        description: "Keep track of all your vendor bills",
        imageSrc: bulkPayout,
        imageSrcHovered: vendorPaymentFilled,
      },
      {
        name: "Quick Collect",
        description: "Automate timely bill payments",
        imageSrc: vendorPayment,
        imageSrcHovered: vendorPaymentFilled,
      },
      {
        name: "Invoices",
        description: "Audit-compliant tax payment process.",
        imageSrc: taxPayment,
        imageSrcHovered: vendorPaymentFilled,
      },
    ],
    footerText: "Stream Line with Payables",
  },
];

export default olympusProducts;
