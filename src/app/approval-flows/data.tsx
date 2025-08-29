import clockIcon from "./img/clockIcon.svg"
import integrationIcon from "./img/integration.svg"
import approvedIcon from "./img/approved.svg"
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
  wideAcceptanceNetwork,
  wideAcceptanceNetworkIcon,
} from "."

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
    description: "Make employee reimbursements easy with an automated process.",
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
    whiteTitle: "Petty Cash",
    description:
      "Manage small, day-to-day business expenses seamlessly with digital petty cash controls. Track usage, set limits, and ensure every transaction is accounted for.",
    cardImage: insight,
    link: "/petty-cash/",
  },

  {
    whiteTitle: "Scan and Drop Receipts",
    description:
      "Submit expenses on the go by scanning the receipts and uploading them on the platform.",
    cardImage: scanAndDrops,
    link: "/receipts",
  },
]

const stackcardData = [
  {
    color: "#fff",
    icon: realTimeExpenseIcon,
    title: "Ease of use",
    description:
      "With EnKash, policies can be created on the platform as per the company's requirements and can be viewed easily on the dashboard.",
    image: realTimeExpense,
    buttonUrl: "/sales/?source=approval-flows",
    maxImageHeight: "300px",
  },
  {
    color: "#eee",
    icon: fraudProtectionIcon,
    title: "Policy Enforcement",
    description:
      "Built-in policy enforcement and tracking features for different departments and employee grades to ensure adherence to spending policies.",
    image: fraudProtection,
    buttonUrl: "/sales/?source=approval-flows",
    maxImageHeight: "300px",
  },
  {
    color: "#eee",
    icon: stackCardThreeIcon,
    title: "Alerts on Policy Breach",
    description:
      "When an employee submits expenses exceeding policy limits, a warning is sent to the submitters and approvers. The approver can then reject the expense or request a correction.",
    image: stackCardThreeImg,
    buttonUrl: "/sales/?source=approval-flows",
    maxImageHeight: "300px",
  },
  {
    color: "#fff",
    icon: streamlinedReimbursementIcon,
    title: "Approval Workflows",
    description:
      "Automated and customizable workflows streamline the approval process, ensuring faster decision-making and reduced bottlenecks.",
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=approval-flows",
    maxImageHeight: "300px",
  },
  {
    color: "#eee",
    icon: costControlSavingsIcon,
    title: "User Permissions",
    description:
      "Role-based access control ensures that the designated people have the appropriate level of authority, enhancing security and transparency.",
    image: costControlSavings,
    buttonUrl: "/sales/?source=approval-flows",
    maxImageHeight: "300px",
  },
  {
    color: "#eee",
    icon: wideAcceptanceNetworkIcon,
    title: "Transparency",
    description:
      "Real-time visibility into the approval status of transactions provides transparency and accountability at every step.",
    image: wideAcceptanceNetwork,
    buttonUrl: "/sales/?source=approval-flows",
    maxImageHeight: "300px",
  },
]

export { cardData, expenseManagementData, stepCards, stackcardData }
