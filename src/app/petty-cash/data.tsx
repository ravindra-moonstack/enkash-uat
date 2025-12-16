import { TCardTypes, TStackCardsProp } from "@/src/types"
import {
  autoCollect,
  costControlSavings,
  costControlSavingsIcon,
  fraudProtection,
  fraudProtectionIcon,
  instant,
  paymentButton,
  paymentGatewayImg,
  paymentLink,
  qrCodes,
  realTimeExpense,
  realTimeExpenseIcon,
  reminder,
  stackCardThreeIcon,
  stackCardThreeImg,
  streamlinedReimbursement,
  streamlinedReimbursementIcon,
  pettyIconTwo,
  pettyIconOne,
  pettyIconThree,
  pettyIconFour,
  pettyIconFive,
  pettyIconSix,
  pettyIconSeven,
  pettyIconEight,
} from "./img"

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
const stackcardData: TStackCardsProp = [
  {
    icon: realTimeExpenseIcon,
    title: "UPI-Based Petty Cash",
    description:
      "Replace messy cash handling with UPI-based petty cash that works the way your teams do. Give employees assigned wallets for daily expenses, set clear spend limits and approval rules, and track every transaction in real time. Every payment is recorded automatically - no manual entries, no missing receipts - so you stay fully compliant, audit-ready, and always in control of petty cash spends.",
    image: realTimeExpense,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "300px",
  },
  {
    icon: fraudProtectionIcon,
    title: "Digital Petty Cash Distribution",
    description:
      "Distribute petty cash instantly—without paperwork, delays, or manual handovers. Load funds to EnKash prepaid cards or UPI wallets, define monthly budgets, set user or branch-level limits, automate top-ups, and revoke access anytime. Every allocation and spend is tracked in real time, helping you replace manual petty cash registers with a fully digital, controlled, and audit-ready petty cash system for everyday reimbursements.",
    image: fraudProtection,
    buttonUrl: "/sales",
    maxImageHeight: "300px",
  },
  {
    icon: stackCardThreeIcon,
    title: "Automatic Expense Creation",
    description:
      "Every petty cash transaction is automatically converted into an expense with key details pre-filled - amount, date, and merchant. Smart categorisation and mobile verification reduce manual work, so employees simply review, attach receipts, and submit in seconds. All expenses flow into a single, accurate petty cash expense list, giving finance teams clean, error-free reporting without follow-ups.",
    image: stackCardThreeImg,
    buttonUrl: "/sales",
    maxImageHeight: "300px",
  },
  {
    icon: streamlinedReimbursementIcon,
    title: "Real-Time Tracking & Spend Visibility",
    description:
      "See every rupee as it’s spent, not after the month ends. Get live dashboards, instant policy alerts, and geo-tagged transaction logs for complete visibility across teams, branches, and locations. With itemised petty cash expenses in one central dashboard, you always know where money is going, no blind spots, no surprises.",
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "300px",
  },
  {
    icon: costControlSavingsIcon,
    title: "Automated Reconciliation",
    description:
      "Every transaction is automatically matched with submitted receipts - no manual cross-checking required. One-click verification, live reconciliation reports, and instant exception alerts help finance teams close faster with fewer errors. The result: a real-time, audit-ready trail that replaces manual petty cash registers and simplifies reviews, compliance, and audits.",
    image: costControlSavings,
    buttonUrl: "/sales",
    maxImageHeight: "300px",
  },
]

const managementCards: TCardTypes = [
  {
    titleHtml: "Payment Gateway",
    description:
      "A no-code solution to effortlessly collect payments across various channels, guaranteeing you never miss a transaction.",
    cardImage: paymentGatewayImg,
    linkUrl: "/payment-gateway",
  },
  {
    titleHtml: "Payment Link",
    description:
      "Effortlessly collect payments on WhatsApp, SMS, Facebook, Twitter, and more using no-code payment links.",
    cardImage: paymentLink,
    linkUrl: "/payment-page",
  },
  {
    titleHtml: "Payment Button",
    description:
      "Easily integrate a pre-designed payment button into your website with a quick plug-and-play setup.",
    cardImage: paymentButton,
    linkUrl: "/payment-button",
  },
  {
    titleHtml: "QR Codes",
    description:
      "Enable secure, contactless payments using QR codes, empowering businesses to process transactions instantly.",
    cardImage: qrCodes,
    linkUrl: "/auto-collect",
  },
  {
    titleHtml: "Auto Collect",
    description:
      "Easily accept NEFT, RTGS, and IMPS transfers with customer-specific identifiers and automated reconciliation for scalability.",
    cardImage: autoCollect,
    linkUrl: "/auto-collect",
  },
  {
    titleHtml: "Instant Settlement",
    description:
      "Access your funds immediately, bypass traditional settlement cycles, and take greater control of your cash flow.",
    cardImage: instant,
    linkUrl: "/instant-settlement",
  },
  {
    titleHtml: "Reminder Engine",
    description:
      "Eliminate manual reminders and automate your business collections effortlessly for smoother cash flow management.",
    cardImage: reminder,
    linkUrl: "/collection-reminder",
  },
]
export { analyticData, dashboardData, managementCards, stackcardData }
