import clockIcon from "./img/clockIcon.svg"
import integrationIcon from "./img/integration.svg"
import approvedIcon from "./img/approved.svg"
import advance from "./img/advanced.webp"
import policyApproval from "./img/policy-approval.webp"
import herarchy from "./img/herarchy.webp"
import insight from "./img/insights.webp"
import scanAndDrops from "./img/scan-and-drops.webp"
import { stepCardImgOne, stepCardImgThree, stepCardImgTwo } from "."

const cardData = [
  {
    icon: clockIcon,
    title: "Centralized Authority",
  },
  {
    icon: integrationIcon,
    title: "Clear Chain",
  },
  {
    icon: approvedIcon,
    title: "Top-down Decision Making",
  },
]

const stepCards = [
  {
    title: "Define Roles & Departments",
    description:
      "Create an organizational structure by defining roles for each department. Map each role with spending limits across departments.",
    ctaColor: "equity-blue",
    source: "expense_management",
    cardImage: stepCardImgOne,
    steps: "01",
  },
  {
    title: "Approval Workflows",
    description:
      "Make custom approval layers for different spend types based on hierarchy and policies.",
    ctaColor: "blue",
    source: "expense_management",
    cardImage: stepCardImgTwo,
    steps: "02",
  },
  {
    title: "Real-time Monitoring ",
    description:
      "Track spends and get alerts with a centralized dashboard and automated policy enforcement.",
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
    whiteTitle: "Budget & Advances",
    description:
      "Get advances cleared as per the defined expense budget to get going without any hindrance.",
    cardImage: herarchy,
  },
]

export { cardData, expenseManagementData, stepCards }
