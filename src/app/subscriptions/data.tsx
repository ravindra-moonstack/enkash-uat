
import {
  autoCollect,
  instant,
  notificationImage,
  paymentButton,
  paymentLink,
  paymentLinkImage,
  paymentOptionImage,
  paymentPage,
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
} from "."


const cardsData = [
  {
    title: "Sign Up",
    description: "Sign up on EnKash to generate and share subscription link.",
    icon: scrollIconOne,
  },
  {
    title: "Integrate",
    description:
      "Seamlessly integrate your business website with EnKash without any technical efforts.",
    icon: scrollIconTwo,
  },
  {
    title: "Collect",
    description:
      "Start receiving recurring payments from your customers as per their subscription plans.",
    icon: scrollIconThree,
  },
]

const allInOnePolicies = [
  {
    icon: taskIconOne,
    title: "Automate Recurring Payments",
    description:
      "Streamline recurring payment schedules, take control of billing cycles, and stay informed with instant alerts. Our advanced billing system simplifies subscription management with a reliable solution for card updates, payment retries, email notifications, and more.",
    image: paymentLinkImage,
    buttonUrl: "/sales/",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconTwo,
    title: "UPI AutoPay for Scalability",
    description:
      "Broaden your audience by including non-cardholders, drive conversions with affordable subscription plans, and foster customer loyalty through visibility and control while enjoying extensive UPI app compatibility.",
    image: notificationImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "Tailored Recurring Payment Models",
    description:
      "Choose fixed, usage-based, or variable models to automate payments. Support predefined amounts, usage-based billing, or both fixed rentals and ad-hoc charges for complete payment flexibility.",
    image: shareImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
  },
  {
    icon: taskIconFour,
    title: "Customize Your Checkout Experience",
    description:
      "Seamlessly integrate EnKash’s ready-to-use APIs into your app or website to offer a branded checkout experience. Use our dashboard to create plans, manage customers, and share payment links via email or SMS.",
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
    titleHtml: "UPI Payments",
    description:
      "UPI payments with any app - BHIM, PhonePe, WhatsApp for smooth transactions. No SMS, no VPA hassles.",
    cardImage: qrCodes,
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
  {
    titleHtml: "Reminder Engine",
    description:
      "Remove manual reminders and easily automate your business collections for a more seamless cash flow.",
    cardImage: reminder,
    linkUrl: "/collection-reminder",
  },
]

export {
  cardsData,
  allInOnePolicies,
  managementCards,
}
