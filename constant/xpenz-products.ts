import { heirarchyControl } from "@/app/xpenz";
import {
  vendorPayment,
  vendorPaymentFilled,
  bulkPayout,
  taxPayment,
  budgetAndAndvances,
  budgetAndAndvancesFilled,
  hierarchyAndControlsFilled,
  hierarchyAndControls,
  reimbursements,
  reimbursementsFilled,
  policyAndApproval,
  policyAndApprovalFilled,
  taxPaymentFilled,
  scanAndDrop,
  scanAndDropFilled,
} from "@/components/header";

const xpenzProducts = [
  {
    subtitle: "Default",
    list: [
      {
        name: "Budgets and Advances",
        description: "Track and manage your budget with ease",
        imageSrc: budgetAndAndvances,
        imageSrcHovered: budgetAndAndvancesFilled,
      },
      {
        name: "Hierarchy and Controls",
        description: "DIY Hierarchy for approval, policies, and expenses",
        imageSrc: hierarchyAndControls,
        imageSrcHovered: hierarchyAndControlsFilled,
      },
      {
        name: "Reimbursement",
        description: "Get reimbursed for your expenses quickly and easily",
        imageSrc: reimbursements,
        imageSrcHovered: reimbursementsFilled,
      },
      {
        name: "Policy and Approval Flows",
        description: "Create policies and approval flows on the go",
        imageSrc: policyAndApproval,
        imageSrcHovered: policyAndApprovalFilled,
      },
      {
        name: "Scan and Drop Receipts",
        description: "Automate receipt management with OCR<",
        imageSrc: scanAndDrop,
        imageSrcHovered: scanAndDropFilled,
      },
    ],
    footerText: "Stream Line with Xpenze",
  },
];

export default xpenzProducts;
