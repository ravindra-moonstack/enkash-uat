import clockIcon from "./img/clockIcon.svg"
import integrationIcon from "./img/integration.svg"
import approvedIcon from "./img/approved.svg"
import policyApproval from "./img/policy-approval.webp"
import herarchy from "./img/herarchy.webp"
import insight from "./img/insights.webp"
import advance from "./img/advanced.webp"
import reimbursements from "./img/reimbursement.webp"
import { stepCardImgOne, stepCardImgThree, stepCardImgTwo } from "."

const cardData = [
  {
    icon: clockIcon,
    title: "Quick Capture",
  },
  {
    icon: integrationIcon,
    title: "Streamlined Record-keeping",
  },
  {
    icon: approvedIcon,
    title: "Link with Expenses Anytime",
  },
]

const stepCards = [
  {
    title: "Scan receipts:",
    description:
      " Go to Drop Receipts as visible on the top and store all your receipts on the go.",
    ctaColor: "equity-blue",
    source: "expense_management",
    cardImage: stepCardImgOne,
    steps: "01",
  },
  {
    title: "Upload on the go:",
    description: " Upload receipts as and when you spend.",
    ctaColor: "blue",
    source: "expense_management",
    cardImage: stepCardImgTwo,
    steps: "02",
  },
  {
    title: "Reimburse:",
    description: "Link them to expenses anytime as per your convenience.",
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
    cardImage: advance,
    link: "/budget-and-advances",
  },
  {
    whiteTitle: "Reimbursements",
    description:
      "Businesses repay the amount to employees or partners for expenses incurred on their behalf.",
    cardImage: reimbursements,
    link: "/reimbursements",
  },
  {
    whiteTitle: "Hierarchy and Control",
    description: "Define hierarchies for better control and transparency.",
    cardImage: herarchy,
    link: "/hierarchy-and-controls",
  },
  {
    whiteTitle: "Insights",
    description:
      "Make use of deep, data-driven understandings for informed decision-making.",
    cardImage: insight,
    link: "/expense-analytics-and-insights/",
  },
  {
    whiteTitle: "Policy and Approval Flow",
    description:
      "A set of guidelines or rules that outline the procedures for seeking and granting official authorization for expenses. ",
    cardImage: policyApproval,
    link: "/approval-flows/",
  },
]

export { cardData, expenseManagementData, stepCards }
