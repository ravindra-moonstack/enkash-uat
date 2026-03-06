import { TCardTypes, TStackCardsProp } from "@/src/types"
import {
  autoCollect,
  instant,
  paymentButton,
  paymentGatewayImg,
  paymentLink,
  qrCodes,
  reminder,
  pettyIconTwo,
  pettyIconOne,
  pettyIconThree,
  pettyIconFour,
  pettyIconFive,
  pettyIconSix,
  pettyIconSeven,
  pettyIconEight,
  success,
  quickIcon,
  paymentLinkImage,
  paymentOptionIcon,
  paymentOptionImage,
  notificationIcon,
  notificationImage,
  secureIcon,
  secureImage,
  shareImage,
  websiteIcon,
  corporateCard,
  automaticCard,
  gstCard,
  expenseCard,
  exchangeCard,
  trackingCard,
} from "./img"

const dashboardData = [
  {
    title: "Block merchant categories",
    icon: pettyIconOne,
  },
  {
    title: "Set transaction limits",
    icon: pettyIconTwo,
  },
  {
    title: "Define time windows",
    icon: pettyIconThree,
  },
  {
    title: "Bulk allocate budgets",
    icon: pettyIconFour,
  },
  {
    title: "Reclaim unused funds",
    icon: pettyIconFive,
  },
]

const policies: TStackCardsProp = [
  {
    icon: quickIcon,
    title: "Branch Budgets, Defined Centrally",
    descriptionHtml: (
      <>
        <p>Multi-location businesses require disciplined allocation. Budgets are set at branch level, with employee-specific limits defined within each location.</p>
        <ul>
          <li>Monthly petty cash limits per branch</li>
          <li>Employee-level caps within each unit</li>
          <li>Automated recurring top-ups</li>
          <li>Instant reallocation of unused balances</li>
        </ul>
        <p>Allocation remains structured across cities and teams.</p>
      </>
    ),
    image: paymentLinkImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "248px",
  },
  {
    icon: websiteIcon,
    title: "Policy Embedded in Every Transaction",
    descriptionHtml: (
      <>
        <p>Local teams transact using UPI QR at any vendor, while policies remain consistent across branches.</p>
        <ul>
          <li>Transaction caps applied automatically</li>
          <li>Merchant category restrictions enforced system-wide</li>
          <li>Time-based rules validated before payment</li>
          <li>Non-compliant transactions blocked at source</li>
        </ul>
        <p>Control is embedded directly into the transaction flow.</p>
      </>
    ),
    image: shareImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "305px",
    reverse: true,
  },
  {
    icon: paymentOptionIcon,
    title: "Every Payment Becomes a Record",
    descriptionHtml: (
      <>
        <p>The moment a payment is completed, it becomes structured financial data.</p>
        <ul>
          <li>Expense entries created instantly</li>
          <li>Transaction details pre-filled</li>
          <li>Receipts captured via mobile or WhatsApp</li>
          <li>Automated categorization for reporting</li>
        </ul>
        <p>Petty cash accounting progresses in real time.</p>
      </>
    ),
    image: paymentOptionImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "243px",
  },
  {
    icon: notificationIcon,
    title: "Visibility Across Every Branch",
    descriptionHtml: (
      <>
        <p>Finance teams gain continuous oversight across distributed locations.</p>
        <ul>
          <li>Branch-level budget tracking</li>
          <li>Employee-level spend monitoring</li>
          <li>Vendor frequency insights</li>
          <li>Real-time policy alerts</li>
        </ul>
        <p>Operational clarity does not depend on month-end reporting.</p>
      </>
    ),
    image: notificationImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: secureIcon,
    title: "Close in Minutes",
    descriptionHtml: (
      <>
        <p>Reconciliation across multiple locations is system-driven.</p>
        <ul>
          <li>Automatic matching of transactions and receipts</li>
          <li>Instant exception alerts</li>
          <li>Streamlined verification workflows</li>
          <li>Audit-ready exports on demand</li>
        </ul>
        <p>Even at scale, financial closure remains controlled and predictable.</p>
      </>
    ),
    image: secureImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "259px",
  },
]
const analyticData = [
  {
    title: "Identify top-spending branches and employees",
    icon: pettyIconFive,
  },
  {
    title: "Detect budget violations in real-time",
    icon: pettyIconSix,
  },
  {
    title: "Forecast future spend based on patterns",
    icon: pettyIconSeven,
  },
  {
    title: "Export audit-ready reports for compliance",
    icon: pettyIconEight,
  },
]

const acceleratedGrowthData = [
  {
    title: "Zero setup fees",
    icon: success,
  },
  {
    title: "Live in 2 weeks",
    icon: success,
  },
  {
    title: "Branch-wise budget control",
    icon: success,
  },
  {
    title: "Dedicated account manager",
    icon: success,
  },
]
const cardData = [
  {
    whiteTitle: "QR payments",
    description:
      "Pay any merchant instantly via UPI. No cards, cash, or transfers needed.",
    cardImage: corporateCard,
  },
  {
    whiteTitle: "Budget automation",
    description:
      "Set limits once. System enforces across all branches automatically.",
    cardImage: automaticCard,
  },
  {
    whiteTitle: "Pre-spend control",
    description:
      "Block non-compliant transactions before payment completes.",
    cardImage: gstCard,
  },
  {
    whiteTitle: "Real-time visibility",
    description:
      "See every branch expense the moment it happens.",
    cardImage: expenseCard,
  },
  {
    whiteTitle: "Auto reconciliation",
    description:
      "Receipts captured, expenses created, books updated—automatically.",
    cardImage: exchangeCard,
  },
  {
    whiteTitle: "Audit ready",
    description:
      "Complete digital trail with GST tracking built in.",
    cardImage: trackingCard,
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
export { analyticData, dashboardData, managementCards, acceleratedGrowthData, policies, cardData }
