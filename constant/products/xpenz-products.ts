import {
  budgetAndAndvances,
  budgetAndAndvancesFilled,
  hierarchyAndControlsFilled,
  hierarchyAndControls,
  reimbursements,
  reimbursementsFilled,
  policyAndApproval,
  policyAndApprovalFilled,
  scanAndDrop,
  scanAndDropFilled,
  spendControl,
  spendControlFilled,
} from "@/components/header";

const xpenzProducts = [
  {
    subtitle: "Default",
    currentHeading: {
      name: "Xpenz ",
      description:
        "Automate your company's AP, AR, and bank reconciliation seamlessly",
    },
    list: [
      {
        name: "Budget and Advances",
        description: "Track and manage your budget with ease",
        imageSrc: budgetAndAndvances,
        imageSrcHovered: budgetAndAndvancesFilled,
        link: "/budget-and-advances",
      },
      {
        name: "Hierarchy and controls",
        description: "DIY Hierarchy for approval, policies, and expenses",
        imageSrc: hierarchyAndControls,
        imageSrcHovered: hierarchyAndControlsFilled,
        link: "/hierarchy-and-controls",
      },
      {
        name: "Policy and Approval Flows",
        description: " Create policies and approval flows on the go",
        imageSrc: policyAndApproval,
        imageSrcHovered: policyAndApprovalFilled,
        link: "/policy-and-approval-flows",
      },
      {
        name: "Reimbursements",
        description: "Get reimbursed for your expenses quickly and easily",
        imageSrc: reimbursements,
        imageSrcHovered: reimbursementsFilled,
        link: "/reimbursement",
      },
      {
        name: "Scan and Drop Receipts",
        description: "Automate receipt management with OCR",
        imageSrc: scanAndDrop,
        imageSrcHovered: scanAndDropFilled,
        link: "/scan-and-drop-receipts",
      },
      {
        name: "Spend Control",
        description: "Real-time visibility and control on your spends",
        imageSrc: spendControl,
        imageSrcHovered: spendControlFilled,
        link: "/spend-control",
      },
    ],
    footerText: "Optimize Business Spends with Xpenz",
    footerImg: "xpenz_footer_bg",
    footerLink: "/xpenz",
  },
];

export default xpenzProducts;
