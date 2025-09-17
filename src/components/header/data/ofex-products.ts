import { TProductCategory } from "@/src/types"
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
} from ".."

const expenseProducts: TProductCategory[] = [
  {
    name: "Expense Managment",
    description: "Flexible prepaid card solutions",
    link: "/products/expense-management",
    subProducts: [
      {
        subtitle: "Default",
        subtitleLink: "/products/expense-management",
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
            name: "Petty Cash",
            description: "Digitize branch-level petty spends",
            imageSrc: pettyCash,
            imageSrcHovered: pettyCash,
            link: "/petty-cash",
          },
          {
            name: "Hierarchy and Controls",
            description: "Role-based access and limits",
            imageSrc: hierarchyAndControls,
            imageSrcHovered: hierarchyAndControlsFilled,
            link: "/hierarchy-and-controls",
          },
          {
            name: "Insights",
            description: "Real-time spend visibility, analytics",
            imageSrc: insights,
            imageSrcHovered: insightsFilled,
            link: "/expense-analytics-and-insights",
          },

          {
            name: "Reimbursements",
            description: "Fast, policy-compliant employee claims",
            imageSrc: reimbursements,
            imageSrcHovered: reimbursementsFilled,
            link: "/reimbursements",
          },
          {
            name: "Policy and Approval Flows",
            description: "Custom workflows for every expense",
            imageSrc: budgetAndAndvances,
            imageSrcHovered: budgetAndAndvancesFilled,
            link: "/approval-flows",
          },

          {
            name: "Scan and Drop Receipts",
            description: "Auto-capture receipts, skip paperwork",
            imageSrc: scanAndDrop,
            imageSrcHovered: scanAndDropFilled,
            link: "/receipts",
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

export default expenseProducts
