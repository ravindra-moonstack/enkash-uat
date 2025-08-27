import clockIcon from "./img/clockIcon.svg"
import integrationIcon from "./img/integration.svg"
import approvedIcon from "./img/approved.svg"
import advance from "./img/advanced.webp"
import herarchy from "./img/herarchy.webp"
import insight from "./img/insights.webp"
import reimbursement from "./img/reimbursement.webp"
import scanAndDrops from "./img/scan-and-drops.webp"
import {
  costControlSavings,
  costControlSavingsIcon,
  fraudProtection,
  fraudProtectionIcon,
  realTimeExpense,
  realTimeExpenseIcon,
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
      "Select a category or category groups to submit multiple categories.",
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
    linkUrl: "/approval-flows/",
  },
  {
    whiteTitle: "Reimbursements",
    description:
      "Businesses repay the amount to employees or partners for expenses incurred on their behalf.",
    cardImage: reimbursement,
    linkUrl: "/reimbursements/",
  },
  {
    whiteTitle: "Scan & Drop Receipts",
    description:
      "Scan and upload expense receipts digitally for quick and efficient reimbursement.",
    cardImage: scanAndDrops,
    linkUrl: "/receipts/",
  },
  {
    whiteTitle: "Insights",
    description:
      "Make use of deep, data-driven understandings for informed decision-making.",
    cardImage: insight,
    linkUrl: "/expense-analytics-and-insights/",
  },
  {
    whiteTitle: "Hierarchy and Control",
    description: "Define hierarchies for better control and transparency.",
    cardImage: herarchy,
    linkUrl: "/hierarchy-and-controls/",
  },
]

const stackcardData = [
  {
    color: "#fff",
    icon: realTimeExpenseIcon,
    title: "Define Budgets",
    description:
      "Enterprises can create their budgets as per their expenses and allocate them as per their business finances and goals during specific periods.",
    image: realTimeExpense,
    buttonUrl: "/sales",
    maxImageHeight: "300px",
  },
  {
    color: "#eee",
    icon: fraudProtectionIcon,
    title: "Allocate To Specific Users",
    description:
      "Budgets can be created for specific users to keep spending in check. Individual spending can be tracked and compared with a defined budget ensuring your financial plans are not disturbed.",
    image: fraudProtection,
    buttonUrl: "/sales",
    maxImageHeight: "300px",
  },
  {
    color: "#fff",
    icon: streamlinedReimbursementIcon,
    title: "Spending Aligned With Budgets",
    description:
      "Easily check whether the spending is aligned with the defined budget from the dashboard.",
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "300px",
  },
  {
    color: "#eee",
    icon: costControlSavingsIcon,
    title: "Auto-fill Budgets",
    description:
      "Enter the budget amount for each category. Enter it initially for the first period and then auto-fill the values for other periods. Fill in fixed values, and adjust the amount by percentage.",
    image: costControlSavings,
    buttonUrl: "/sales",
    maxImageHeight: "300px",
  },
]

export { cardData, expenseManagementData, stepCards, stackcardData }
