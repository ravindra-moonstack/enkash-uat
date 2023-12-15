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
      name: "ofEx ",
      description:
        "Automate your company's AP, AR, and bank reconciliation seamlessly",
    },
    list: [
      {
        name: "Budget and Advances",
        description: "Track and manage your budget with ease",
        imageSrc: budgetAndAndvances,
        imageSrcHovered: budgetAndAndvancesFilled,
        link: "/ofex/budget-and-advances",
      },
      {
        name: "Hierarchy and Controls",
        description: "DIY hierarchy for approval, policies, and expenses",
        imageSrc: hierarchyAndControls,
        imageSrcHovered: hierarchyAndControlsFilled,
        link: "/ofex/hierarchy-and-controls",
      },
      {
        name: "Policy and Approval Flows",
        description: " Create policies and approval flows on the go",
        imageSrc: policyAndApproval,
        imageSrcHovered: policyAndApprovalFilled,
        link: "/ofex/policy-and-approval-flows",
      },
      {
        name: "Reimbursements",
        description: "Get reimbursed for your expenses quickly and easily",
        imageSrc: reimbursements,
        imageSrcHovered: reimbursementsFilled,
        link: "/ofex/reimbursement",
      },
      {
        name: "Scan and Drop Receipts",
        description: "Automate receipt management with OCR",
        imageSrc: scanAndDrop,
        imageSrcHovered: scanAndDropFilled,
        link: "/ofex/scan-and-drop-receipts",
      },
    ],
    footerText: "Optimize business spends with ofEx",
    footerMobileText: "Explore ofEx",
    footerImg: "xpenz_footer_bg",
    footerLink: "/ofex",
    parentLink: "/ofex",
  },
];

export default xpenzProducts;
