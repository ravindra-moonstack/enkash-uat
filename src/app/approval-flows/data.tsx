import clockIcon from "./img/clockIcon.svg"
import integrationIcon from "./img/integration.svg"
import approvedIcon from "./img/approved.svg"
import policyApproval from "./img/policy-approval.webp"
import herarchy from "./img/herarchy.webp"
import insight from "./img/insights.webp"
import scanAndDrops from "./img/scan-and-drops.webp"
import { stepCardImgOne, stepCardImgThree, stepCardImgTwo } from "."

const cardData = [
  {
    icon: clockIcon,
    title: "Built-in policy enforcement",
  },
  {
    icon: integrationIcon,
    title: "Customizable workflows",
  },
  {
    icon: approvedIcon,
    title: "Real-time approval visibility",
  },
]

const stepCards = [
  {
    title: "Sign Up and Add Policy",
    description: "Login to EnKash and go to the OfEx section to add policy.",
    ctaColor: "equity-blue",
    source: "expense_management",
    cardImage: stepCardImgOne,
    steps: "01",
  },
  {
    title: "Create Policy",
    description:
      "Enter the details required along with the amount limit and frequency to create a policy.",
    ctaColor: "blue",
    source: "expense_management",
    cardImage: stepCardImgTwo,
    steps: "02",
  },
  {
    title: "Define Approval Flow",
    description:
      "Define an approval flow and link it with the policy. In case of no defined approval flow, default approval based on hierarchy will be set automatically.",
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
      "Get advances cleared as per the defined budget to get going without any hindrance.",
    cardImage: scanAndDrops,
    link: "/budget-and-advances",
  },
  {
    whiteTitle: "Reimbursements",
    description:
      "Businesses repay the amount to employees or partners for expenses incurred on their behalf.",
    cardImage: policyApproval,
    link: "/reimbursements",
  },

  {
    whiteTitle: "Insights",
    description:
      "Make use of deep, data-driven understandings for informed decision-making.",
    cardImage: insight,
    link: "/expense-analytics-and-insights/",
  },
  {
    whiteTitle: "Hierarchy and Control",
    description: "Define hierarchies for better control and transparency.",
    cardImage: herarchy,
    link: "/hierarchy-and-controls",
  },
  {
    whiteTitle: "Scan and Drop Receipts",
    description:
      "Submit expenses on the go by scanning the receipts and uploading them on the platform.",
    cardImage: scanAndDrops,
    link: "/receipts",
  },
]

export { cardData, expenseManagementData, stepCards }
