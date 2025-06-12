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
} from "../../header"

const xpenzProducts = [
  {
    name: "Prepaid Cards",
    description: "Flexible prepaid card solutions",
    link: "/cards",
    subProducts: [
      {
        subtitle: "Default",
        subtitleLink: "/expense-management",
        currentHeading: {
          name: "Expenses", //previously it was Ofex
          description: "Digitize employee spends & reimbursements",
        },
        list: [
          {
            name: "Budget and Advances",
            description: "Track & manage your budget with ease",
            imageSrc: budgetAndAndvances,
            imageSrcHovered: budgetAndAndvancesFilled,
            link: "/budget-and-advances",
          },
          {
            name: "Hierarchy and Controls",
            description: "Customizable hierarchies for expenses & approvals",
            imageSrc: hierarchyAndControls,
            imageSrcHovered: hierarchyAndControlsFilled,
            link: "/hierarchy-and-controls",
          },

          {
            name: "Reimbursements",
            description: "Reimburse employee expenses quickly",
            imageSrc: reimbursements,
            imageSrcHovered: reimbursementsFilled,
            link: "/reimbursements",
          },
          {
            name: "Scan and Drop Receipts",
            description: "Automate receipt management with OCR",
            imageSrc: scanAndDrop,
            imageSrcHovered: scanAndDropFilled,
            link: "/receipts",
          },
          {
            name: "Insights",
            description: "Control employee expenses with data analytics",
            imageSrc: insights,
            imageSrcHovered: insightsFilled,
            link: "/expense-analytics-and-insights",
          },
          {
            name: "Policy and Approval Flows",
            description: "Create policies & approval flows as per need",
            imageSrc: policyAndApproval,
            imageSrcHovered: policyAndApprovalFilled,
            link: "/approval-flows",
          },
        ],
        footerText: "Optimize business spends efficiently",
        footerMobileText: "Explore More",
        footerImg: "xpenz_footer_bg",
        footerLink: "/expense-management",
        parentLink: "/expense-management",
      },
    ],
  },
]

export default xpenzProducts
