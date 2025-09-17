import clockIcon from "./img/clockIcon.svg"
import integrationIcon from "./img/integration.svg"
import approvedIcon from "./img/approved.svg"
import advance from "./img/advanced.webp"
import policyApproval from "./img/policy-approval.webp"
import insight from "./img/insights.webp"
import scanAndDrops from "./img/scan-and-drops.webp"
import reimbursements from "./img/reimbursement.webp"
import pettyCash from "./img/pettyCash.webp"
import {
  costControlSavings,
  costControlSavingsIcon,
  fraudProtection,
  fraudProtectionIcon,
  realTimeExpense,
  realTimeExpenseIcon,
  stackCardsixIicon,
  stackCardsixImg,
  stackCardThreeIcon,
  stackCardThreeImg,
  stepCardImgOne,
  stepCardImgThree,
  stepCardImgTwo,
  wideAcceptanceNetwork,
  wideAcceptanceNetworkIcon,
} from "./img"

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
    whiteTitle: "Petty Cash",
    description:
      "Manage small, day-to-day business expenses seamlessly with digital petty cash controls. Track usage, set limits, and ensure every transaction is accounted for.",
    cardImage: pettyCash,
    linkUrl: "/petty-cash",
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
    title: "Easy Configuration",
    description:
      "Seamlessly integrating software like Zoho, Tally, SAP, and Oracle Netsuite with EnKash eliminates the need for manual data entry.",
    image: realTimeExpense,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "300px",
  },
  {
    color: "#eee",
    icon: fraudProtectionIcon,
    title: "Define Custom Roles",
    description:
      "Assign specific permissions and accessibility to multiple hierarchies based on their department structure.",
    image: fraudProtection,
    buttonUrl: "/sales",
    maxImageHeight: "300px",
  },
  {
    color: "#eee",
    icon: stackCardThreeIcon,
    title: "Efficient Decision Making",
    description:
      "The system provides real-time insights into the expense pattern for businesses to identify areas that can be managed better.",
    image: stackCardThreeImg,
    buttonUrl: "/sales",
    maxImageHeight: "300px",
  },
  {
    color: "#eee",
    icon: costControlSavingsIcon,
    title: "Scalability",
    description:
      "As your organization grows, add new departments and define new employee roles without any hassle.",
    image: costControlSavings,
    buttonUrl: "/sales",
    maxImageHeight: "300px",
  },
  {
    color: "#eee",
    icon: wideAcceptanceNetworkIcon,
    title: "Reduces Financial Risks",
    description:
      "Multiple individuals can be involved in the expense approval system. This ensures that expenses are verified multiple times and that there is no inaccuracy, duplication, or fraud.",
    image: wideAcceptanceNetwork,
    buttonUrl: "/sales",
    maxImageHeight: "300px",
  },
  {
    color: "#eee",
    icon: stackCardsixIicon,
    title: "Compliance Management",
    description:
      "The built-in compliance management tool enables enterprises to track and define automatic alerts in case of policy violations.",
    image: stackCardsixImg,
    buttonUrl: "/sales",
    maxImageHeight: "300px",
  },
]

export { cardData, expenseManagementData, stepCards, stackcardData }
