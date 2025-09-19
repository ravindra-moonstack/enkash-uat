import {
  autoCollect,
  instant,
  notificationImage,
  paymentButton,
  paymentGatewayImg,
  paymentLinkImage,
  paymentOptionImage,
  qrCodes,
  reminder,
  scrollIconOne,
  scrollIconThree,
  scrollIconTwo,
  shareImage,
  taskIconFour,
  taskIconOne,
  taskIconThree,
  taskIconTwo,
} from "./img"

const cardsData = [
  {
    title: "Connect Your Financial Accounts",
    description:
      "Link your bank accounts, payables, receivables, and expense systems to sync real-time data.",
    icon: scrollIconOne,
  },
  {
    title: "Configure Cashflow Categoriess",
    description:
      "Set up key categories like income, fixed costs, variable expenses, and projections for accurate tracking.",
    icon: scrollIconTwo,
  },
  {
    title: "Monitor & Act on Insights",
    description:
      "View dashboards, spot trends, and use AI-powered suggestions to make informed business decisions.",
    icon: scrollIconThree,
  },
]

const policies = [
  {
    icon: taskIconOne,
    title: "Real-Time Visibility",
    description:
      "Track your cash inflows and outflows as they happen, so you're aware.",
    image: paymentLinkImage,
    buttonUrl: "/sales/",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconTwo,
    title: "Smarter Decision-Making",
    description:
      "Use AI-driven insights to make informed choices about spending, saving, and investing.",
    image: notificationImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "Predictive Forecasting",
    description:
      "Anticipate cash shortages or surpluses and plan proactively for growth or emergencies.",
    image: shareImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
  },
  {
    icon: taskIconFour,
    title: "Identify Trends & Patterns",
    description:
      "Spot recurring expenses, seasonal fluctuations, and revenue cycles to optimize cash flow.",
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
export { cardsData, managementCards, policies }
