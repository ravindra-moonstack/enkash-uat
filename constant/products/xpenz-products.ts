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
        name: "Budgets and Advances",
        description: "Track and manage your budget with ease",
        imageSrc: budgetAndAndvances,
        imageSrcHovered: budgetAndAndvancesFilled,
        link: "/404",
      },
      {
        name: "Hierarchy and Controls",
        description: "DIY Hierarchy for approval, policies, and expenses",
        imageSrc: hierarchyAndControls,
        imageSrcHovered: hierarchyAndControlsFilled,
        link: "/404",
      },
      {
        name: "Reimbursement",
        description: "Get reimbursed for your expenses quickly and easily",
        imageSrc: reimbursements,
        imageSrcHovered: reimbursementsFilled,
        link: "/reimbursement",
      },
      {
        name: "Policy and Approval Flows",
        description: "Create policies and approval flows on the go",
        imageSrc: policyAndApproval,
        imageSrcHovered: policyAndApprovalFilled,
        link: "/404",
      },
      {
        name: "Scan and Drop Receipts",
        description: "Automate receipt management with OCR<",
        imageSrc: scanAndDrop,
        imageSrcHovered: scanAndDropFilled,
        link: "/404",
      },
    ],
    footerText: "Stream Line with Xpenze",
    footerImg: "xpenz_footer_bg",
    footerLink: "/xpenz",
  },
];

export default xpenzProducts;
