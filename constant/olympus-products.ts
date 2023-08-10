import {
  vendorPayment,
  vendorPaymentFilled,
  bulkPayout,
  taxPayment,
} from "@/components/header";

const olympusProducts = [
  {
    name: "Vendor Payments",
    description: "Keep track of all your vendor bills",
    imageSrc: vendorPayment,
    imageSrcHovered: vendorPaymentFilled, // image when hovered
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
];

export default olympusProducts;
