import {
  budgetAndAndvances,
  budgetAndAndvancesFilled,
  hierarchyAndControlsFilled,
  hierarchyAndControls,
  reimbursements,
  reimbursementsFilled,
  scanAndDrop,
  scanAndDropFilled,
  insights,
  insightsFilled,
  pettyCash,
} from "../../header"

const xpenzProducts = [
  {
    name: "Expense Managment",
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
            description: "Pre-approve & control spends",
            imageSrc: budgetAndAndvances,
            imageSrcHovered: budgetAndAndvancesFilled,
            link: "/budget-and-advances",
          },
          {
            name: "Policy and Approval Flows",
            description: "Custom workflows for every expense",
            imageSrc: budgetAndAndvances,
            imageSrcHovered: budgetAndAndvancesFilled,
            link: "/approval-flows",
          },
          {
            name: "Hierarchy and Controls",
            description: "Role-based access and limits",
            imageSrc: hierarchyAndControls,
            imageSrcHovered: hierarchyAndControlsFilled,
            link: "/hierarchy-and-controls",
          },

          {
            name: "Reimbursements",
            description: "Measure B2B account health",
            imageSrc: reimbursements,
            imageSrcHovered: reimbursementsFilled,
            link: "/reimbursements",
          },
          {
            name: "Scan and Drop Receipts",
            description: "Fast claims, zero policy gaps",
            imageSrc: scanAndDrop,
            imageSrcHovered: scanAndDropFilled,
            link: "/receipts",
          },
          {
            name: "Petty Cash",
            description: "Digitize branch-level petty spends",
            imageSrc: pettyCash,
            imageSrcHovered: pettyCash,
            link: "/petty-cash",
          },
          {
            name: "Insights",
            description: "Real-time spend visibility, analytics",
            imageSrc: insights,
            imageSrcHovered: insightsFilled,
            link: "/expense-analytics-and-insights",
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
