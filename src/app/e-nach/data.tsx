import {
  autoCollect,
  fraudProtection,
  fraudProtectionIcon,
  instant,
  notificationImage,
  paymentButton,
  paymentLink,
  paymentLinkImage,
  paymentOptionImage,
  paymentPage,
  playIntegrationImage,
  realTimeExpense,
  realTimeExpenseIcon,
  scrollIconFourth,
  scrollIconOne,
  scrollIconThree,
  scrollIconTwo,
  secureImage,
  shareImage,
  streamlinedReimbursement,
  streamlinedReimbursementIcon,
  taskIconFive,
  taskIconFour,
  taskIconOne,
  taskIconSix,
  taskIconThree,
  taskIconTwo,
} from "./img"

import { upiPayments } from "@/src/components/header"

const cardsData = [
  {
    title: "Login",
    description: "Log in to EnKash and initiate eNACH registration",
    icon: scrollIconOne,
  },
  {
    title: "Enter Details",
    description: "Provide the required personal and bank information",
    icon: scrollIconTwo,
  },
  {
    title: "Authenticate",
    description: "Verify using net banking, debit card, or Aadhaar OTP.",
    icon: scrollIconThree,
  },
  {
    title: "Activation",
    description: "eNACH is set up for recurring payments, once approved",
    icon: scrollIconFourth,
  },
]

const allInOnePolicies = [
  {
    icon: taskIconOne,
    title: "Instant Digital Mandate Creation",
    description:
      "Eliminate paperwork and delays—register mandates digitally for faster processing and hassle-free automation.",
    image: paymentLinkImage,
    buttonUrl: "/sales/",
    maxImageHeight: "243",
  },
  {
    icon: taskIconTwo,
    title: "Smart Payment Retries for Higher Success Rates",
    description:
      "Reduce revenue loss with automatic retries on failed payments, ensuring uninterrupted cash flow and improved collection efficiency.",
    image: notificationImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "259",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "Bulk Subscription Management Made Easy",
    description:
      "Set up, track, and manage multiple mandates at scale directly to handle larger payments from a single dashboard—saving time and effort.",
    image: shareImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305",
  },
  {
    icon: taskIconFour,
    title: "One-Time Authentication, Lifetime Convenience",
    description:
      "Secure recurring payments with a simple one-time authentication, offering a frictionless experience for both businesses and customers.",
    image: paymentOptionImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305",
    reverse: true,
  },
  {
    icon: taskIconFive,
    title: "Customizable Checkout for a Branded Experience",
    description:
      "Choose between a quick plug-and-play checkout or fully customize it with your brand’s identity, colors, and elements for better engagement.",
    image: secureImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305",
  },
  {
    icon: taskIconSix,
    title: "Plug & Play Integration",
    description:
      "It provides customers a hassle-free and smooth authentication as compared to physical NACH and can be easily integrated via plug and play method.",
    image: playIntegrationImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305",
    reverse: true,
  },
]
const managementCards = [
  {
    titleHtml: "Payment Gateway",
    description:
      "No-code solution to seamlessly collect payments across multiple channels, ensuring you never miss a transaction",
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
    titleHtml: "UPI Payments",
    description:
      "UPI payments with any app - BHIM, PhonePe, WhatsApp for smooth transactions. No SMS, no VPA hassles.",
    cardImage: upiPayments,
    linkUrl: "/upi-payments",
  },
  {
    titleHtml: "Auto Collect",
    description:
      "Seamlessly accept NEFT, RTGS, and IMPS transfers using customer-specific identifiers, with automated reconciliation for large-scale transactions.",
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
]

const stackcardData = [
  {
    color: "#fff",
    icon: realTimeExpenseIcon,
    title: "Track Every Transaction",
    description: `e-NACH keeps track of all recurring payments helping save big on penalties and lapsing of services.`,
    image: realTimeExpense,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    color: "#eee",
    icon: fraudProtectionIcon,
    title: "Schedule As Convenient",
    description: `e-NACH gives the choice to schedule payment as per convenience for recurring payments.`,
    image: fraudProtection,
    buttonUrl: "/sales",
  },
  {
    color: "#fff",
    icon: streamlinedReimbursementIcon,
    title: "Secure Transaction",
    description: `e-NACH transactions are digitally authorized and encrypted, helping reduce the risk of data breaches.`,
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=expense_management",
  },
]

export { allInOnePolicies, cardsData, managementCards, stackcardData }
