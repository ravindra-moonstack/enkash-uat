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
  insights,
  insightsFilled,
} from "@/components/header";

const xpenzProducts = [
  {
    subtitle: "Default",
    subtitleLink: "/ofex",
    currentHeading: {
      name: "Expense Management ", //previously it was Ofex
      description: "Digitize employee spends & reimbursements",
    },
    list: [
      {
        name: "Budget and Advances",
        description: "Track & manage your budget with ease",
        imageSrc: budgetAndAndvances,
        imageSrcHovered: budgetAndAndvancesFilled,
        link: "/ofex/budget-and-advances",
      },
      {
        name: "Hierarchy and Controls",
        description: "Customizable hierarchies for expenses & approvals",
        imageSrc: hierarchyAndControls,
        imageSrcHovered: hierarchyAndControlsFilled,
        link: "/ofex/hierarchy-and-controls",
      },

      {
        name: "Reimbursements",
        description: "Reimburse employee expenses quickly",
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
        description: "Control employee expenses with data analytics",
        imageSrc: insights,
        imageSrcHovered: insightsFilled,
        link: "/ofex/insights",
      },
      {
        name: "Policy and Approval Flows",
        description: "Create policies & approval flows as per need",
        imageSrc: policyAndApproval,
        imageSrcHovered: policyAndApprovalFilled,
        link: "/ofex/policy-and-approval-flows",
      },
    ],
    footerText: "Optimize business spends efficiently",
    footerMobileText: "Explore OfEx",
    footerImg: "xpenz_footer_bg",
    footerLink: "/ofex",
    parentLink: "/ofex",
  },
];

export default xpenzProducts;
