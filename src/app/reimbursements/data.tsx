import clockIcon from "./img/clockIcon.svg"
import integrationIcon from "./img/integration.svg"
import approvedIcon from "./img/approved.svg"
import advance from "./img/advanced.webp"
import policyApproval from "./img/policy-approval.webp"
import herarchy from "./img/herarchy.webp"
import insight from "./img/insights.webp"
import scanAndDrops from "./img/scan-and-drops.webp"
import {
  costControlSavings,
  costControlSavingsIcon,
  fraudProtection,
  fraudProtectionIcon,
  realTimeExpense,
  realTimeExpenseIcon,
  stackCardThreeIcon,
  stackCardThreeImg,
  stepCardImgOne,
  stepCardImgThree,
  stepCardImgTwo,
  streamlinedReimbursement,
  streamlinedReimbursementIcon,
} from "."

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
    linkUrl: "/budget-and-advances",
  },
  {
    whiteTitle: "Policy and Approval Flow",
    description:
      "Enterprises can define their policies and set approval flow for easy decision-making.",
    cardImage: policyApproval,
    linkUrl: "/approval-flows",
  },
  {
    whiteTitle: "Hierarchy and Control",
    description: "Define hierarchies for better control and transparency.",
    cardImage: herarchy,
    linkUrl: "/hierarchy-and-controls",
  },
  {
    whiteTitle: "Insights",
    description:
      "Make use of deep, data-driven understandings for informed decision-making.",
    cardImage: insight,
    linkUrl: "/expense-analytics-and-insights",
  },

  {
    whiteTitle: "Scan & Drop Receipts",
    description:
      "Scan and upload expense receipts digitally for quick and efficient reimbursement.",
    cardImage: scanAndDrops,
    linkUrl: "/receipts",
  },
]
const stackcardData = [
  {
    color: "#fff",
    icon: realTimeExpenseIcon,
    title: "Automated processes:",
    description:
      "Reimburse expenses using a digitized end-to-end solution that automates checking, approvals, invoice generation, and submission to ensure speed and accuracy.",
    image: realTimeExpense,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "300px",
  },
  {
    color: "#eee",
    icon: fraudProtectionIcon,
    title: "OCR Technology:",
    description:
      "Automatically scan and collect details from receipts using OCR technology, eliminating the need for manual entry.",
    image: fraudProtection,
    buttonUrl: "/sales",
    maxImageHeight: "300px",
  },
  {
    color: "#eee",
    icon: stackCardThreeIcon,
    title: "WhatsApp Integration:",
    description:
      "Seamless WhatsApp integration to approve/reject expenses at one go without logging into the dashboard.",
    image: stackCardThreeImg,
    buttonUrl: "/sales",
    maxImageHeight: "300px",
  },
  {
    color: "#fff",
    icon: streamlinedReimbursementIcon,
    title: "Alerts:",
    description:
      "Track spending made on behalf of the business by employees in real-time.",
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "300px",
  },
  {
    color: "#eee",
    icon: costControlSavingsIcon,
    title: "Insightful data:",
    description:
      "Benefit from a complete overview of reimbursement and plan your business’ cash flow accordingly.",
    image: costControlSavings,
    buttonUrl: "/sales",
    maxImageHeight: "300px",
  },
]

export { cardData, expenseManagementData, stepCards, stackcardData }
