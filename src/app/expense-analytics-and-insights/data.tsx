import clockIcon from "./img/clockIcon.svg"
import integrationIcon from "./img/integration.svg"
import approvedIcon from "./img/approved.svg"
import advance from "./img/advanced.webp"
import policyApproval from "./img/policy-approval.webp"
import herarchy from "./img/herarchy.webp"
import insight from "./img/insights.webp"
import scanAndDrops from "./img/scan-and-drops.webp"
import reimbursements from "./img/reimbursement.webp"
import { stepCardImgOne, stepCardImgThree, stepCardImgTwo } from "."

const cardData = [
  {
    icon: clockIcon,
    title: "Real-time Data Access",
  },
  {
    icon: integrationIcon,
    title: "Cost-saving Opportunities ",
  },
  {
    icon: approvedIcon,
    title: "Identify Overspending",
  },
]

const stepCards = [
  {
    title: "Centralized Dashboard",
    description:
      "Dive into detailed employee expense analytics with a centralized dashboard for real-time tracking and decision-making.",
    ctaColor: "equity-blue",
    source: "expense_management",
    cardImage: stepCardImgOne,
    steps: "01",
  },
  {
    title: "Understand Data",
    description:
      "Easily comprehend complex data through intuitive visualizations like charts, graphs, and tables, making it easy for everyone to understand.",
    ctaColor: "blue",
    source: "expense_management",
    cardImage: stepCardImgTwo,
    steps: "02",
  },
  {
    title: "Make Data-backed Decisions",
    description:
      "Use data to make better and more informed decisions for your business.",
    ctaColor: "blue",
    source: "expense_management",
    cardImage: stepCardImgThree,
    steps: "03",
  },
]

const expenseManagementData = [
  {
    whiteTitle: "Budget & Advances",
    description:
      "Get advances cleared as per the defined expense budget to get going without any hindrance.",
    cardImage: advance,
  },
  {
    whiteTitle: "Reimbursements",
    description:
      "Businesses repay the amount to employees or partners for expenses incurred on their behalf.",
    cardImage: reimbursements,
  },
  {
    whiteTitle: "Scan & Drop Receipts",
    description:
      "Scan and upload expense receipts digitally for quick and efficient reimbursement.",
    cardImage: scanAndDrops,
  },
  {
    whiteTitle: "Hierarchy and Control",
    description: "Define hierarchies for better control and transparency.",
    cardImage: herarchy,
  },
  {
    whiteTitle: "Insights",
    description:
      "Make use of deep, data-driven understandings for informed decision-making.",
    cardImage: insight,
  },
  {
    whiteTitle: "Policy and Approval Flow",
    description:
      "A set of guidelines or rules that outline the procedures for seeking and granting official authorization for expenses. ",
    cardImage: policyApproval,
  },
]

export { cardData, expenseManagementData, stepCards }
