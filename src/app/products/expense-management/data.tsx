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
} from "."
import { approve } from "@/src/components/all-products"



const cardsData = [
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
    title: "Smart WhatsApp Submissions",
    description:
      "Drop your receipt on WhatsApp. Our system instantly reads and auto-tags every detail - no app login needed.",
    icon: whatsappIcon,
  },
  {
    title: "Email & App Uploads",
    description:
      "Forward receipts via email or upload through the mobile app—EnKash extracts and processes them instantly.",
    icon: mailIcon,
  },
  {
    title: "Intelligent OCR, Not Your Usual Scanner",
    description:
      "Trained on 1,000+ receipt formats, our AI-powered OCR delivers 99% accuracy, even for complex or handwritten receipts.",
    icon: scannIcon,
  },
  {
    title: " Real-Time Expense Creation",
    description:
      "Snap, send, and you're done. Expenses are auto-created with enriched data, ready for approval - anytime, anywhere.",
    icon: realTimeIcon,
  },
]

const paymentMethodData = [
  {
    title: "Smart Travel Requests",
    description:
      "Employees can raise travel requests by entering key trip details - destination, dates, and estimated costs, for faster planning and approvals.",
    icon: travelIcon,
  },
  {
    title: "Auto-Calculated Per Diems",
    description:
      "Per diem amounts are auto-computed based on city tier, employee designation, and company travel policy—no manual work needed.",
    icon: autoCalculateIcon,
  },
  {
    title: "Policy-Aware Routing & Approval",
    description:
      "Every travel request and per diem is validated against policies, with real-time flagging of exceptions and automated routing to approvers.",
    icon: awareIcon,
  },
  {
    title: "Integrated Budget Control",
    description:
      "Finance teams gain full visibility into projected travel spends, helping them control budgets, ensure compliance, and streamline reimbursements.",
    icon: integreatedControlIcon,
  },
]

const dashboardData = [
  {
    title: "Digital Wallets for Teams & Branches",
    description:
      "Auto-assign digital wallets to control everyday spends across teams, instantly.",
    icon: walletlIcon,
  },
  {
    title: "Controlled & Pre-Approved Limits",
    description:
      "Set spending caps, and usage rules to prevent misuse or overspending.",
    icon: controlIcon,
  },
  {
    title: "Real-Time UPI Tracking",
    description:
      "Every transaction is instantly recorded, no manual logging, no missed entries.",
    icon: trackIcon,
  },
  {
    title: "From Cash to Compliant",
    description:
      "Convert untraceable cash into fully accountable digital transactions with complete audit trails.",
    icon: cashIcon,
  },
]

const rankData = [
  {
    title: "Tax-Saving, Pre-Configured Wallets",
    description:
      "Get smart wallets with pre-set monthly limits for categories like travel and meals—aligned with your company’s policies.",
    icon: taxSaveIcon,
  },
  {
    title: "Instant Access, No Bank Transfers",
    description:
      "Once your claim is approved, funds are instantly added to your wallet, ready to use via EnKash cards.",
    icon: instantAcessIcon,
  },
  {
    title: "Auto-Verified, OCR-Backed Claims",
    description:
      "Just scan your receipts, AI-powered OCR takes care of accurate and fast claim validation.",
    icon: verifiedIcon,
  },
  {
    title: "Full Visibility & Year-Round Compliance",
    description:
      "Track your balances, limits, and spends in real-time while staying compliant and audit-ready.",
    icon: visibilityIcon,
  },
]

const intantActionData = [
  {
    title: "Live Account Overview",
    description:
      "Track balances, credit limits, billing cycles, and dues in real-time.",
    // icon: overviewIcon,
  },
  {
    title: "Granular Card Controls",
    description:
      "Set custom limits, manage usage channels, and block or reissue cards with just a click.",
    icon: controlIcon,
  },
  {
    title: "Transaction Intelligence",
    description:
      "Drill down into each transaction by category, user, time, and channel.",
    // icon: intelligenceIcon,
  },
  {
    title: "Statement Clarity",
    description:
      "Download detailed, filterable statements for individual or consolidated accounts.",
    // icon: statementIcon,
  },
  {
    title: "One-Click Settlements",
    description:
      "Make payments across cards with flexible split options by total, minimum due, or custom logic.",
    // icon: oneClickIcon,
  },
]

const stackcardData = [
  {
    icon: realTimeExpenseIcon,
    title: "Real-Time Expense Overview",
    description:
      "Get a live view of company-wide expenses with powerful filters. Drill down by department, project, or user to uncover patterns and make data-driven decisions instantly.",
    image: realTimeExpense,
    buttonUrl: "/sales/?source=expense_management",
    color: "#fff",
  },
  {
    icon: fraudProtectionIcon,
    title: "Budget vs. Actual Tracking",
    description:
      "Track actual expenses against allocated budgets in real-time. Spot overruns early, optimize spending, and stay in control of every cost center without relying on spreadsheets.",
    image: fraudProtection,
    buttonUrl: "/sales",
    color: "#eee",
  },
  {
    icon: stackCardThreeIcon,
    title: "AI-powered Predictive Spend Forecasting",
    description:
      "Leverage AI to forecast upcoming expenses based on historical trends. Anticipate budget spikes, plan ahead, and make smarter financial decisions before costs hit the bottom line.",
    image: stackCardThreeImg,
    buttonUrl: "/sales",
    color: "#eee",
  },
  {
    icon: streamlinedReimbursementIcon,
    title: "Custom Financial Reports",
    description:
      "Create tailored reports with actionable financial metrics - budget utilization, compliance gaps, exception flags - delivered in your preferred format, ready for audits, reviews, and strategic decisions.",
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=expense_management",
    color: "#fff",
  },
  {
    icon: costControlSavingsIcon,
    title: "Identify User Behaviour and Patterns",
    description:
      "Identify your biggest spenders, repeat violators, and high-usage categories. Use these insights to refine policies, coach teams, and proactively reduce unnecessary costs.",
    image: costControlSavings,
    buttonUrl: "/sales",
    color: "#eee",
  },
  {
    icon: wideAcceptanceNetworkIcon,
    title: "One-Click Data Downloads",
    description:
      "Export all reports and dashboards in multiple formats—PDFs for presentations, Excel for deep dives, CSVs for uploads—keeping your team and systems aligned effortlessly.",
    image: wideAcceptanceNetwork,
    buttonUrl: "/sales",
    color: "#eee",
  },
  {
    icon: stackCardsixIicon,
    title: "Instant Budget Overrun Alerts",
    description:
      "Get instant alerts when actual spend exceeds budget thresholds. Stay informed in real-time, take corrective actions quickly, and avoid surprises at month-end.",
    image: stackCardsixImg,
    buttonUrl: "/sales",
    color: "#eee",
  },
]

const allProductSections = [
  {
    title: "Reconciliation & Policy",
    subtitle: "Control and visibility in real time",
    items: [
      {
        title: "End-to-End ",
        title2: "Data Encryption ",
        description:
          "Your expense data is protected with bank-grade AES-256 encryption at rest and TLS 1.3 in transit, ensuring end-to-end security across every device, user, and integration.",
        image: encruption,
        link: "",
      },
      {
        title: "SOC 2 Type ",
        title2: "II Compliance ",
        description:
          "EnKash EMS is SOC 2 Type II certified, meaning all security, availability, and data processing controls are independently audited to meet the highest enterprise-grade compliance standards.",
        image: complience,
        link: "",
      },
      {
        title: "Immutable  ",
        title2: "Audit Trails ",
        description:
          "Every action - submission, approval, edit—is captured with exact timestamps and user IDs in tamper-proof logs, enabling complete transparency and readiness for internal or external audits.",
        image: audit,
        link: "",
      },
      {
        title: "Single ",
        title2: "Sign-On",
        description:
          "Let users log in with one click using corporate credentials via SSO integrations with Azure AD, Okta, or Google Workspace - enhancing security, simplicity, and user adoption.",
        image: signOn,
        link: "",
      },
      {
        title: "Multi-Factor ",
        title2: "Authentication (MFA) ",
        description:
          "Secure access with MFA adds an extra verification step at login, protecting your EMS from unauthorized access, even if a password is lost or compromised.",
        image: key,
        link: "",
      },
      {
        title: "Role-Based",
        title2: " Access Controls ",
        description:
          "Grant precise permissions by role with granular controls on actions and visibility, ensuring only the right people access the right data at all times.",
        image: approve,
        link: "",
      },
      {
        title: "Audit",
        title2: " Reporting",
        description:
          "Generate audit-ready reports for internal controls, GST compliance, or clause 49 of the listing agreement regulations. Filter by timeline, user, or action to ensure nothing slips through the cracks.",
        image: approve,
        link: "",
      },
      {
        title: "Retention Policies ",
        title2: "& Legal Compliance ",
        description:
          "Configure data retention rules per jurisdiction to keep records securely for 7+ years to meet global legal requirements and ensure readiness for any regulatory inspection.",
        image: approve,
        link: "",
      },
    ],
  },
]

export {
  cardsData,
  cardData,
  dashboardData,
  integrationData,
  paymentMethodData,
  rankData,
  intantActionData,
  allProductSections,
  stackcardData,
}
