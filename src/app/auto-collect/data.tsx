import { TCardTypes, TStackCardsProp } from "@/src/types"
import {
  activationIcon,
  hundredPercentIcon,
  instant,
  notificationImage,
  paymentButton,
  paymentLink,
  paymentLinkImage,
  paymentOptionImage,
  paymentPage,
  qrCodes,
  realTimeIcon,
  reminder,
  scrollIconOne,
  scrollIconThree,
  scrollIconTwo,
  secureImage,
  shareImage,
  taskIconFive,
  taskIconFour,
  taskIconOne,
  taskIconThree,
  taskIconTwo,
  UpiPayments,
} from "./img"

const cards = [
  { icon: hundredPercentIcon, title: "Instant" },
  { icon: activationIcon, title: "Smart" },
  { icon: realTimeIcon, title: "Secure" },
]

const cardsData: TStackCardsProp = [
  {
    title: "Virtual Account Creation",
    description:
      "Instantly set up unique virtual payment addresses for each customer, branch, or department.",
    icon: scrollIconOne,
  },
  {
    title: "Collect Payment",
    description:
      "Receive payments via NEFT, RTGS, IMPS, or other channels directly to your virtual bank accounts.",
    icon: scrollIconTwo,
  },
  {
    title: "Stay Informed",
    description:
      "Real-time alerts and centralized dashboards, for smooth reconciliation and transparency.",
    icon: scrollIconThree,
  },
]

const allInOnePolicies: TStackCardsProp = [
  {
    icon: taskIconOne,
    title: "Payment Collection Across Multiple Modes",
    description:
      "EnKash Auto-Collect supports various payment methods including UPI, NEFT, IMPS, and RTGS. Whether it’s branch-specific payments or individual customer transfers, EnKash makes the process frictionless, helping your business grow faster.",
    image: paymentLinkImage,
    buttonUrl: "/sales/",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconTwo,
    title: "Real-Time Notifications for Every Transaction",
    description:
      "Stay informed with instant alerts every time a payment is made. Real-time webhook updates and our dashboard ensure complete transparency and keep your financial operations running smoothly.",
    image: notificationImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "Zero Cost Setup for Virtual Accounts",
    description:
      "Create unlimited virtual accounts and payment addresses at no additional cost. Eliminate the manual efforts of assigning account numbers, and let our automation simplify your financial workflows.",
    image: shareImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
  },
  {
    icon: taskIconFour,
    title: "Tailored for Your Business Needs",
    description:
      "Whether you’re managing multiple branches, customer touchpoints, or financial services, EnKash Auto-Collect provides flexible virtual accounts tailored to each business unit, department, or individual customer.",
    image: paymentOptionImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
    reverse: true,
  },
  {
    icon: taskIconFive,
    title: "Advanced Security & Compliance",
    description:
      "Rest easy knowing that every transaction is secure. EnKash adheres to industry-leading compliance standards and encryption protocols to protect your data and funds.",
    image: secureImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
  },
]
const managementCards: TCardTypes = [
  {
    titleHtml: "Payment Gateway",
    description:
      "No-code solution to seamlessly collect payments across multiple channels, ensuring you never miss a transaction.",
    cardImage: paymentLink,
    linkUrl: "/payment-gateway",
  },
  {
    titleHtml: "Payment Page",
    description:
      "Set up custom-branded payment pages in just minutes, requiring no technical expertise to start accepting payments online.",
    cardImage: paymentPage,
    linkUrl: "/payment-page",
  },
  {
    titleHtml: "Payment Button",
    description:
      "Add a pre-designed payment button to your website with a simple plug-and-play integration.",
    cardImage: paymentButton,
    linkUrl: "/payment-button",
  },
  {
    titleHtml: "QR Codes",
    description:
      "Allow customers to make payments via scannable QR codes using their smart devices.",
    cardImage: qrCodes,
    linkUrl: "/qr-code",
  },
  {
    titleHtml: "UPI Payments",
    description:
      "UPI payments with any app - BHIM, PhonePe, WhatsApp for smooth transactions. No SMS, no VPA hassles.",
    cardImage: UpiPayments,
    linkUrl: "/upi-payments",
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
      "Remove manual reminders and easily automate your business collections for a more seamless cash flow.",
    cardImage: reminder,
    linkUrl: "/collection-reminder",
  },
]

export { cardsData, allInOnePolicies, managementCards, cards }
