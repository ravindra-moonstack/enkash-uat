import {
  policyIcon,
  whatsappIcon,
  mailIcon,
  scannIcon,
  realTimeIcon,
  travelIcon,
  autoCalculateIcon,
  awareIcon,
  integreatedControlIcon,
  walletlIcon,
  controlIcon,
  trackIcon,
  cashIcon,
  taxSaveIcon,
  instantAcessIcon,
  verifiedIcon,
  visibilityIcon,
  corporateCard,
  automaticCard,
  gstCard,
  expenseCard,
  exchangeCard,
  trackingCard,
  disrubsmentCard,
  customExpenseCard,
  encruption,
  complience,
  audit,
  signOn,
  key,
  costControlSavings,
  costControlSavingsIcon,
  fraudProtection,
  fraudProtectionIcon,
  realTimeExpense,
  realTimeExpenseIcon,
  smartIconeOne,
  smartIconeThree,
  smartIconeTwo,
  stackCardsixIicon,
  stackCardsixImg,
  stackCardThreeIcon,
  stackCardThreeImg,
  streamlinedReimbursement,
  streamlinedReimbursementIcon,
  wideAcceptanceNetwork,
  wideAcceptanceNetworkIcon,
} from "./img"
import { approve } from "../products/corporate-cards/img"
import { TStackCardsProp } from "@/src/types"

const cardsData: TStackCardsProp = [
  {
    title: "Custom Expense Policies ",
    description:
      "Set precise rules for spend limits, categories, and approval hierarchies—ensuring every expense complies with your company’s policies before it even reaches the finance team.",
    icon: smartIconeOne,
  },
  {
    title: "Multi-Level Approval Workflows",
    description:
      "Create customized, multi-tier approval flows based on amount, department, or category, so the right people always review the right expenses—no bottlenecks or manual routing.",
    icon: smartIconeTwo,
  },
  {
    title: "Auto-Flagging of Policy Violations",
    description:
      "The system instantly flags out-of-policy expenses like overspending, wrong categories, or duplicate claims, helping finance teams catch issues before reimbursement.",
    icon: smartIconeThree,
  },
  {
    title: "Receipt Upload Reminders & Enforcement",
    description:
      "Automated reminders ensure employees submit receipts on time. Missing receipts trigger alerts and block approvals, reducing audit risks and improving documentation quality.",
    icon: policyIcon,
  },
  {
    title: "Pre-Submission Policy Validation",
    description:
      "Employees receive real-time feedback on policy violations before submitting expenses, cutting down rework, and ensuring cleaner, compliant entries from the start.",
    icon: policyIcon,
  },
  {
    title: "Role-Based Permissions & Data Access Control",
    description:
      "Assign permissions based on user roles—employee, approver, finance, or admin—so everyone only sees and does what they’re supposed to. Ensures data security and compliance.",
    icon: policyIcon,
  },
  {
    title: "Travel Request Approvals with Custom Policies",
    description:
      "Set rules for travel spend, routes, and booking classes. Route requests through multi-level approvals and sync approved trips with bookings—all while staying policy-compliant.",
    icon: policyIcon,
  },
]
const introductionCards = [
  { value: "100%", label: "Regulatory Compliance" },
  { value: "99.99%", label: "Platform Uptime" },
  { value: "100%", label: "Auto  -  scalable" },
]

const cardData = [
  {
    whiteTitle: "Corporate Card Transaction Sync",
    description:
      "Sync card transactions instantly from partnered banks, ensuring accurate, real-time expense tracking without any manual uploads or delays.",
    cardImage: corporateCard,
  },
  {
    whiteTitle: "Automatic Expense Creation from Cards",
    description:
      "Card spends auto-create draft expense entries, letting employees review and submit with minimal effort.",
    cardImage: automaticCard,
  },
  {
    whiteTitle: "GST Automation",
    description:
      "Automatically split CGST, SGST, and IGST, validate GSTINs, capture input tax to simplify GST filing, ensuring compliance, and easing audit processes.",
    cardImage: gstCard,
  },
  {
    whiteTitle: "Expense Itemization",
    description:
      "Break down a single bill into multiple expense entries to ensure precise tracking, budgeting, and compliance",
    cardImage: expenseCard,
  },
  {
    whiteTitle: "Multi-currency & Exchange Rate",
    description:
      "Automatically calculate accurate, fast, and policy-aligned travel claims via GPS or manual entry on company-rate based calculations.",
    cardImage: exchangeCard,
  },
  {
    whiteTitle: "Mileage Tracking",
    description:
      "Automatically calculate accurate, fast, and policy-aligned travel claims via GPS or manual entry on company-rate based calculations.",
    cardImage: trackingCard,
  },
  {
    whiteTitle: "Pre-Approved Branch Disbursements",
    description:
      "Disburse fixed budgets to branches or teams in advance, with real-time tracking and automated policy checks.",
    cardImage: disrubsmentCard,
  },
  {
    whiteTitle: "Custom Expense Categories & Tags",
    description:
      "Define custom categories and tags to classify expenses accurately and enable precise reporting and analysis.",
    cardImage: customExpenseCard,
  },
]

const integrationData = [
  {
    title: "RBI-Authorized Licenses",
    description:
      "We operate under both PPI and PA/PG licenses, giving you immediate access to regulated infrastructure.",
    icon: whatsappIcon,
  },
  {
    title: "Compliant by Design",
    description:
      "Escrow, KYC, and settlement flows are pre-built to ensure every transaction aligns with strict RBI regulations.",
    icon: mailIcon,
  },
  {
    title: "Multi-Layered Data Protection Architecture",
    description:
      "PCI-DSS-certified infrastructure with AI fraud intelligence and real-time anomaly detection ensures end-to-end payment data protection.",
    icon: scannIcon,
  },
  {
    title: "Audit & Governance",
    description:
      "Automated reporting and compliance trails make it easier to meet regulatory and partner bank obligations.",
    icon: realTimeIcon,
  },
]

const paymentMethodData = [
  {
    title: "Smart KYC Onboarding",
    description:
      "Onboard users at any hour, including pre- and post-office times, ensuring no drop-offs due to time constraints.",
    icon: travelIcon,
  },
  {
    title: "Instant Wallet Activation",
    description:
      "Real-time notifications keep your platform updated the moment a wallet is fully enabled.",
    icon: autoCalculateIcon,
  },
  {
    title: "Tier Upgrade Flows",
    description:
      "Seamlessly move users from Min KYC to Full KYC, unlocking higher wallet limits and interoperability without additional friction.",
    icon: awareIcon,
  },
  {
    title: "Built for Scale",
    description:
      "Optimized KYC engine supports large volumes without slowing down the user journey.",
    icon: integreatedControlIcon,
  },
]

const dashboardData = [
  {
    title: "API-First Approach",
    description:
      "From wallet creation to fund loading to IMPS transfer, everything managed through APIs.",
    icon: walletlIcon,
  },
  {
    title: "Pre-Integrated Payment Gateway",
    description:
      "Simplify fund flows with an embedded payment gateway that eliminates third-party integrations.",
    icon: controlIcon,
  },
  {
    title: "Multi-Rail Support",
    description:
      "Enable wallet loads, spends, refunds, merchant settlements, and UPI linkage in a unified flow.",
    icon: trackIcon,
  },
  {
    title: "Operational Visibility",
    description:
      "Monitor transactions and settlements in real-time through a single dashboard.",
    icon: cashIcon,
  },
]

const rankData = [
  {
    title: "Powerful APIs",
    description:
      "REST APIs designed for speed, security, and easy integration.",
    icon: taxSaveIcon,
  },
  {
    title: "Sandbox Environment",
    description:
      "Test, iterate, and simulate transactions safely before going live.",
    icon: instantAcessIcon,
  },
  {
    title: "Event-Driven Architecture",
    description:
      "Webhooks for real-time updates on transactions, settlements, and wallet events.",
    icon: verifiedIcon,
  },
  {
    title: "Flexible Integration",
    description:
      "Works seamlessly across mobile and web platforms with minimal engineering effort.",
    icon: visibilityIcon,
  },
]

const stackcardData: TStackCardsProp = [
  {
    icon: realTimeExpenseIcon,
    title: "Real-Time Expense Overview",
    description:
      "Get a live view of company-wide expenses with powerful filters. Drill down by department, project, or user to uncover patterns and make data-driven decisions instantly.",
    image: realTimeExpense,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    icon: fraudProtectionIcon,
    title: "Budget vs. Actual Tracking",
    description:
      "Track actual expenses against allocated budgets in real-time. Spot overruns early, optimize spending, and stay in control of every cost center without relying on spreadsheets.",
    image: fraudProtection,
    buttonUrl: "/sales",
  },
  {
    icon: stackCardThreeIcon,
    title: "AI-powered Predictive Spend Forecasting",
    description:
      "Leverage AI to forecast upcoming expenses based on historical trends. Anticipate budget spikes, plan ahead, and make smarter financial decisions before costs hit the bottom line.",
    image: stackCardThreeImg,
    buttonUrl: "/sales",
  },
  {
    icon: streamlinedReimbursementIcon,
    title: "Custom Financial Reports",
    description:
      "Create tailored reports with actionable financial metrics - budget utilization, compliance gaps, exception flags - delivered in your preferred format, ready for audits, reviews, and strategic decisions.",
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    icon: costControlSavingsIcon,
    title: "Identify User Behaviour and Patterns",
    description:
      "Identify your biggest spenders, repeat violators, and high-usage categories. Use these insights to refine policies, coach teams, and proactively reduce unnecessary costs.",
    image: costControlSavings,
    buttonUrl: "/sales",
  },
  {
    icon: wideAcceptanceNetworkIcon,
    title: "One-Click Data Downloads",
    description:
      "Export all reports and dashboards in multiple formats—PDFs for presentations, Excel for deep dives, CSVs for uploads—keeping your team and systems aligned effortlessly.",
    image: wideAcceptanceNetwork,
    buttonUrl: "/sales",
  },
  {
    icon: stackCardsixIicon,
    title: "Instant Budget Overrun Alerts",
    description:
      "Get instant alerts when actual spend exceeds budget thresholds. Stay informed in real-time, take corrective actions quickly, and avoid surprises at month-end.",
    image: stackCardsixImg,
    buttonUrl: "/sales",
  },
]

const allProductSections = [
  {
    title:
      "From Wallet Issuance to Payment Processing: End-to-End Digital Wallet Service Provider ",
    subtitle: "",
    items: [
      {
        title: "RBI",
        title2: " Compliance",
        description:
          "Fully regulated with PPI and PA licenses, ensuring secure and legal operations.",
        image: encruption,
        link: "",
      },
      {
        title: "Open-Loop",
        title2: " Wallets",
        description:
          "Wallets that work across multiple merchants, not limited to your ecosystem.",
        image: complience,
        link: "",
      },
      {
        title: "Credit Card",
        title2: " Loading",
        description:
          "Integrated Payment Gateway for easy fund addition via credit cards.",
        image: audit,
        link: "",
      },
      {
        title: "API",
        title2: " Integration",
        description:
          "Simple APIs for quick setup, perfect for B2C companies looking to scale.",
        image: signOn,
        link: "",
      },
      {
        title: "Tailor",
        title2: "-Made",
        description:
          "Owned tech stack allows tailored solutions to fit your business needs.",
        image: key,
        link: "",
      },
      {
        title: "Fast",
        title2: " Time-to-Market",
        description:
          "Go live in weeks, not months, with our streamlined processes.",
        image: approve,
        link: "",
      },
    ],
  },
]

export {
  allProductSections,
  cardData,
  cardsData,
  stackcardData,
  dashboardData,
  integrationData,
  paymentMethodData,
  rankData,
  introductionCards,
}
