import {
  autoCollect,
  costControlSavings,
  costControlSavingsIcon,
  fraudProtection,
  fraudProtectionIcon,
  instant,
  notificationImage,
  paymentButton,
  paymentGatewayImg,
  paymentLink,
  paymentLinkImage,
  paymentOptionImage,
  qrCodes,
  realTimeExpense,
  realTimeExpenseIcon,
  reminder,
  scrollIconOne,
  scrollIconThree,
  scrollIconTwo,
  shareImage,
  streamlinedReimbursement,
  streamlinedReimbursementIcon,
  taskIconFour,
  taskIconOne,
  taskIconThree,
  taskIconTwo,
} from "./img"

const stackcardData = [
  {
    color: "#fff",
    icon: realTimeExpenseIcon,
    title: "Data Collection",
    description: `EnKash automates the entire data collection process by pulling real-time data directly from the dashboard, reducing manual errors, and collating all the data in a centralized system, simplifying analysis and reporting.`,
    image: realTimeExpense,
    buttonUrl: "/sales/?source=collection-analytics",
  },
  {
    color: "#eee",
    icon: fraudProtectionIcon,
    title: "Accessibility",
    description: `With EnKash, you can grant role-based access to a user-friendly dashboard, enabling cross-functional teams like finance, sales, and operations teams to readily access relevant AR information for a 360° view.`,
    image: fraudProtection,
    buttonUrl: "/sales/?source=collection-analytics",
  },
  {
    color: "#fff",
    icon: streamlinedReimbursementIcon,
    title: "DSO Management ",
    description: `Get up-to-the-minute tracking of payment statuses, and implement proactive strategies for reducing DSO. By leveraging real-time insights, EnKash enables organizations to maintain a healthier cash flow position.`,
    image: streamlinedReimbursement,
    buttonUrl: "/sales?source=collection-analytics",
  },
  {
    color: "#eee",
    icon: costControlSavingsIcon,
    title: "Real-Time Insights ",
    description: `With EnKash, businesses can get access to a comprehensive dashboard that provides real-time insights into AR metrics, ultimately enabling proactive collection management and quick identification of discrepancies for faster resolutions.`,
    image: costControlSavings,
    buttonUrl: "/sales/?source=collection-analytics",
  },
]

const cardsData = [
  {
    title: "Integrate Payment Data",
    description:
      "Connect your payment systems, bank accounts, and invoicing tools to EnKash for seamless data flow.",
    icon: scrollIconOne,
  },
  {
    title: "Customize Analytics Dashboard",
    description:
      "Set up personalized filters and segmentation to track and analyze collections by customer, region, or payment status.",
    icon: scrollIconTwo,
  },
  {
    title: "Review & Optimize",
    description:
      "Access real-time insights, identify trends, and adjust your collection strategy based on actionable data.",
    icon: scrollIconThree,
  },
]

const allInOnePolicies = [
  {
    icon: taskIconOne,
    title: "Customizable Dashboards",
    description:
      "Tailor your collection analytics dashboard to show reports on the basis of week, month, or custom date range, ensuring relevance and clarity.",
    image: paymentLinkImage,
    buttonUrl: "/sales/",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconTwo,
    title: "Visibility And Monitoring",
    description:
      "Effortlessly track your collection process with complete visibility by monitoring invoice status, outstanding amounts, total collections, and overdue payments for prompt follow-ups.",
    image: notificationImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "Automated Reporting",
    description:
      "Receive comprehensive downloadable reports automatically, eliminating the need for manual compilation and reducing the risk of errors.",
    image: shareImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
  },
  {
    icon: taskIconFour,
    title: "DSO Tracking",
    description:
      "Measure and manage Days Sales Outstanding (DSO) efficiently to gain insights into the average time it takes to collect payments. Improve your receivables management with a clear understanding of payment cycle trends, helping you optimize your cash flow further.",
    image: paymentOptionImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
    reverse: true,
  },
]
const managementCards = [
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
    linkUrl: "/payment-button",
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
    linkUrl: "/qr-code",
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
      "Get instant access to your funds, skip traditional settlement cycles, and take full control of your cash flow.",
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
export { allInOnePolicies, cardsData, managementCards, stackcardData }
