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
      "Enable UPI-based payments for everyday expenses - no cash, no chaos. Assign wallets to employees, apply spend controls and approval flows, and get full visibility of transactions in a compliant, audit-ready format.",
    image: realTimeExpense,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "300px",
  },
  {
    icon: fraudProtectionIcon,
    title: "Digital Petty Cash Distribution",
    description:
      "Distribute funds instantly with EnKash prepaid cards or UPI wallets. Set monthly budgets, configure user or branch-level limits, automate top-ups, and revoke access anytime—eliminating manual disbursement and giving you total control over petty cash.",
    image: fraudProtection,
    buttonUrl: "/sales",
    maxImageHeight: "300px",
  },
  {
    icon: stackCardThreeIcon,
    title: "Automatic Expense Creation",
    description:
      "Every transaction is auto-converted into an expense with pre-filled details like amount, date, and merchant. Smart categorization and mobile app verification simplify reporting, so employees just review, attach receipts, and submit in seconds.",
    image: stackCardThreeImg,
    buttonUrl: "/sales",
    maxImageHeight: "300px",
  },
  {
    icon: streamlinedReimbursementIcon,
    title: "Real-Time Tracking & Spend Visibility",
    description:
      "Track every rupee as it’s spent. Get live dashboards, instant policy alerts, and geo-tagged logs for each transaction, ensuring complete transparency and real-time visibility across teams, branches, or employees, from anywhere.",
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "300px",
  },
  {
    icon: costControlSavingsIcon,
    title: "Automated Reconciliation",
    description:
      "The system automatically matches each transaction with submitted receipts. One-click verifications, live reconciliation reports, and instant exception alerts mean faster closes, fewer errors, and a hassle-free audit trail—all with minimal manual effort.",
    image: costControlSavings,
    buttonUrl: "/sales",
    maxImageHeight: "300px",
  },
]

const managementCards : TCardTypes = [
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
