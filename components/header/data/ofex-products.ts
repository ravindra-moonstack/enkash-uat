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
    subtitleLink: "/ofex",
    currentHeading: {
      name: "OfEx ",
      description:
        "Manage employee expenses and reimbursements with a highly customizable platform",
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
      {
        name: "Insights",
        description: "Automate receipt management with OCR",
        imageSrc: scanAndDrop,
        imageSrcHovered: scanAndDropFilled,
        link: "/ofex/insights",
      },
    ],
    footerText: "Optimize business spends with OfEx",
    footerMobileText: "Explore OfEx",
    footerImg: "xpenz_footer_bg",
    footerLink: "/ofex",
    parentLink: "/ofex",
  },
];

export default xpenzProducts;
