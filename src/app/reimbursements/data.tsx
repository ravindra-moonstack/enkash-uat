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
    title: "Real-time Data Sync",
  },
  {
    icon: integrationIcon,
    title: "Seamless Integration",
  },
  {
    icon: approvedIcon,
    title: "Quick & Easy Approvals",
  },
]

const stepCards = [
  {
    title: "Upload receipts: ",
    description: "Go to “Add Expense” and upload your receipt.",
    ctaColor: "equity-blue",
    source: "expense_management",
    cardImage: stepCardImgOne,
    steps: "01",
  },
  {
    title: "Click Create:",
    description: "The expense will be forwarded to the manager for approval.",
    ctaColor: "blue",
    source: "expense_management",
    cardImage: stepCardImgTwo,
    steps: "02",
  },
  {
    title: "Know Status: ",
    description:
      " View all expenses in the `Expenses` tab with their respective status.",
    ctaColor: "blue",
    source: "expense_management",
    cardImage: stepCardImgThree,
    steps: "03",
  },
]

const expenseManagementData = [
  {
    whiteTitle: "Budget & Advances",
    description: "Get expenses in advance without any hindrance.",
    cardImage: advance,
  },
  {
    whiteTitle: "Policy and Approval Flow",
    description:
      "Enterprises can define their policies and set approval flow for easy decision-making.",
    cardImage: policyApproval,
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
    whiteTitle: "Scan & Drop Receipts",
    description:
      "Scan and upload expense receipts digitally for quick and efficient reimbursement.",
    cardImage: scanAndDrops,
  },
]

export { cardData, expenseManagementData, stepCards }
