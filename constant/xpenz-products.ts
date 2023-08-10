import {
  vendorPayment,
  vendorPaymentFilled,
  bulkPayout,
  taxPayment,
} from "@/components/header";

const xpenzProducts = [
    {
      name: "Budgets and Advances",
      description: "Track and manage your budget with ease",
      imageSrc: vendorPayment,
      imageSrcHovered: vendorPaymentFilled,
    },
    {
      name: "Hierarchy and Controls",
      description: "DIY Hierarchy for approval, policies, and expenses",
      imageSrc: vendorPayment,
      imageSrcHovered: vendorPaymentFilled,
    },
    {
      name: "Reimbursement",
      description: "Get reimbursed for your expenses quickly and easily",
      imageSrc: bulkPayout,
      imageSrcHovered: vendorPaymentFilled,
    },
    {
      name: "Policy and Approval Flows",
      description: "Create policies and approval flows on the go",
      imageSrc: vendorPayment,
      imageSrcHovered: vendorPaymentFilled,
    },
    {
      name: "Scan and Drop Receipts",
      description: "Automate receipt management with OCR<",
      imageSrc: taxPayment,
      imageSrcHovered: vendorPaymentFilled,
    },
];

export default xpenzProducts;
