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
const stackcardData = [
  {
    color: "#fff",
    icon: realTimeExpenseIcon,
    title: "UPI-Based Petty Cash",
    description:
      "Enable UPI-based payments for everyday expenses - no cash, no chaos. Assign wallets to employees, apply spend controls and approval flows, and get full visibility of transactions in a compliant, audit-ready format.",
    image: realTimeExpense,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "300px",
  },
  {
    color: "#eee",
    icon: fraudProtectionIcon,
    title: "Digital Petty Cash Distribution",
    description:
      "Distribute funds instantly with EnKash prepaid cards or UPI wallets. Set monthly budgets, configure user or branch-level limits, automate top-ups, and revoke access anytime—eliminating manual disbursement and giving you total control over petty cash.",
    image: fraudProtection,
    buttonUrl: "/sales",
    maxImageHeight: "300px",
  },
  {
    color: "#eee",
    icon: stackCardThreeIcon,
    title: "Automatic Expense Creation",
    description:
      "Every transaction is auto-converted into an expense with pre-filled details like amount, date, and merchant. Smart categorization and mobile app verification simplify reporting, so employees just review, attach receipts, and submit in seconds.",
    image: stackCardThreeImg,
    buttonUrl: "/sales",
    maxImageHeight: "300px",
  },
  {
    color: "#fff",
    icon: streamlinedReimbursementIcon,
    title: "Real-Time Tracking & Spend Visibility",
    description:
      "Track every rupee as it’s spent. Get live dashboards, instant policy alerts, and geo-tagged logs for each transaction, ensuring complete transparency and real-time visibility across teams, branches, or employees, from anywhere.",
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "300px",
  },
  {
    color: "#eee",
    icon: costControlSavingsIcon,
    title: "Automated Reconciliation",
    description:
      "The system automatically matches each transaction with submitted receipts. One-click verifications, live reconciliation reports, and instant exception alerts mean faster closes, fewer errors, and a hassle-free audit trail—all with minimal manual effort.",
    image: costControlSavings,
    buttonUrl: "/sales",
    maxImageHeight: "300px",
  },
]

export {
  cardData,
  expenseManagementData,
  stepCards,
  dashboardData,
  analyticData,
  stackcardData,
}
