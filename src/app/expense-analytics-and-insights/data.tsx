import clockIcon from "./img/clockIcon.svg"
import integrationIcon from "./img/integration.svg"
import approvedIcon from "./img/approved.svg"
import advance from "./img/advanced.webp"
import policyApproval from "./img/policy-approval.webp"
import herarchy from "./img/herarchy.webp"
import insight from "./img/insights.webp"
import scanAndDrops from "./img/scan-and-drops.webp"
import reimbursements from "./img/reimbursement.webp"
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
    linkUrl: "/budget-and-advances",
  },
  {
    whiteTitle: "Reimbursements",
    description:
      "Businesses repay the amount to employees or partners for expenses incurred on their behalf.",
    cardImage: reimbursements,
    linkUrl: "/reimbursements",
  },
  {
    whiteTitle: "Scan & Drop Receipts",
    description:
      "Scan and upload expense receipts digitally for quick and efficient reimbursement.",
    cardImage: scanAndDrops,
    linkUrl: "/receipts",
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
    whiteTitle: "Policy and Approval Flow",
    description:
      "A set of guidelines or rules that outline the procedures for seeking and granting official authorization for expenses. ",
    cardImage: policyApproval,
    linkUrl: "/approval-flows",
  },
]

const stackcardData = [
  {
    color: "#fff",
    icon: realTimeExpenseIcon,
    title: "Security & Compliance",
    description:
      "Ensure confidentiality and compliance of your financial data with our robust encryption and security measures.",
    image: realTimeExpense,
    buttonText: "Learn More",
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "300px",
  },
  {
    color: "#eee",
    icon: fraudProtectionIcon,
    title: "Customizable Dashboards",
    description:
      "Grant varied access, like admin and finance teams, and customize dashboards for tailored insights based on status, payment mode, category, segments, etc.",
    image: fraudProtection,
    buttonUrl: "/sales",
    maxImageHeight: "300px",
  },
  {
    color: "#eee",
    icon: stackCardThreeIcon,
    title: "AI-Powered Insights",
    description:
      "Get actionable insights into employee expense patterns, identify cost-saving opportunities, and optimize budgets with AI-driven analytics.",
    image: stackCardThreeImg,
    buttonUrl: "/sales",
    maxImageHeight: "300px",
  },
  {
    color: "#fff",
    icon: streamlinedReimbursementIcon,
    title: "Policy Violation",
    description:
      "Easily analyze policies with the highest violations and get a comprehensive overview of expenses deviating from policy norms, allowing for proactive corrective actions.",
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "300px",
  },
  {
    color: "#eee",
    icon: costControlSavingsIcon,
    title: "Real-time Tracking",
    description:
      "Monitor expenses in real-time, allowing for proactive decision-making and cost control, leading to improved bottom-line results.",
    image: costControlSavings,
    buttonUrl: "/sales",
    maxImageHeight: "300px",
  },
]
export { cardData, expenseManagementData, stepCards, stackcardData }
