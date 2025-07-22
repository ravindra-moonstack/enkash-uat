import clockIcon from "./img/clockIcon.svg"
import integrationIcon from "./img/integration.svg"
import approvedIcon from "./img/approved.svg"
import advance from "./img/advanced.webp"
import policyApproval from "./img/policy-approval.webp"
import herarchy from "./img/herarchy.webp"
import insight from "./img/insights.webp"
import scanAndDrops from "./img/scan-and-drops.webp"
import pettyIconOne from "./img/pettyIconOne.svg"
import pettyIconTwo from "./img/pettyIconTwo.svg"
import pettyIconThree from "./img/pettyIconThree.svg"
import pettyIconFour from "./img/pettyIconFour.svg"
import pettyIconFive from "./img/pettyIconFive.svg"
import pettyIconSix from "./img/pettyIconSix.svg"
import pettyIconSeven from "./img/pettyIconSeven.svg"
import pettyIconEight from "./img/pettyIconEight.svg"

import { stepCardImgOne, stepCardImgThree, stepCardImgTwo } from "."

const cardData = [
  {
    icon: clockIcon,
    title: "Avoid Overspending",
  },
  {
    icon: integrationIcon,
    title: "Approval In One Go",
  },
  {
    icon: approvedIcon,
    title: "Tracking From Single Dashboard",
  },
]

const stepCards = [
  {
    title: "Log in and Add Details",
    description: "Log in and add details like advance name, amount, and date.",
    ctaColor: "equity-blue",
    source: "expense_management",
    cardImage: stepCardImgOne,
    steps: "01",
  },
  {
    title: "Submit Categories",
    description:
      "Select a category or category groups to submit multiple categories",
    ctaColor: "blue",
    source: "expense_management",
    cardImage: stepCardImgTwo,
    steps: "02",
  },
  {
    title: "Budget Alignment",
    description:
      "The policy created will check whether the advance is aligned with the budget submitted.",
    ctaColor: "blue",
    source: "expense_management",
    cardImage: stepCardImgThree,
    steps: "03",
  },
]

const expenseManagementData = [
  {
    whiteTitle: "Policy and Approval Flow",
    description:
      "Enterprises can define their policies and set approval flow for easy decision-making.",
    cardImage: advance,
  },
  {
    whiteTitle: "Reimbursements",
    description:
      "Businesses repay the amount to employees or partners for expenses incurred on their behalf.",
    cardImage: policyApproval,
  },
  {
    whiteTitle: "Scan & Drop Receipts",
    description:
      "Scan and upload expense receipts digitally for quick and efficient reimbursement.",
    cardImage: scanAndDrops,
  },
  {
    whiteTitle: "Insights",
    description:
      "Make use of deep, data-driven understandings for informed decision-making.",
    cardImage: insight,
  },
  {
    whiteTitle: "Hierarchy and Control",
    description: "Define hierarchies for better control and transparency.",
    cardImage: herarchy,
  },
]

const dashboardData = [
  {
    title: "Block specific merchants or categories (e.g., liquor, groceries)",
    icon: pettyIconOne,
  },
  {
    title: "Set maximum spend per transaction",
    icon: pettyIconTwo,
  },
  {
    title: "Define allowed spend windows or time frames",
    icon: pettyIconThree,
  },
  {
    title: "Stop out-of-policy expenses at source",
    icon: pettyIconFour,
  },
]
const analyticData = [
  {
    title: "Identify top spending branches or employees",
    icon: pettyIconFive,
  },
  {
    title: "Detect budget violations early",
    icon: pettyIconSix,
  },
  {
    title: "Forecast future needs based on spend patterns",
    icon: pettyIconSeven,
  },
  {
    title: "Export reports for audits, compliance, or management reviews",
    icon: pettyIconEight,
  },
]

export {
  cardData,
  expenseManagementData,
  stepCards,
  dashboardData,
  analyticData,
}
