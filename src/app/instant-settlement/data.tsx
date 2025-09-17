
import {
  autoCollect,
  fraudProtection,
  fraudProtectionIcon,
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
  secureImage,
  shareImage,
  streamlinedReimbursement,
  streamlinedReimbursementIcon,
  taskIconFive,
  taskIconFour,
  taskIconOne,
  taskIconThree,
  taskIconTwo,
  upiImg
} from "."




const cardsData = [
  {
    title: "Link Payment Accounts",
    description:
      "Connect bank accounts or payment gateways to EnKash for seamless transfers.",
    icon: scrollIconOne,
  },
  {
    title: "Choose Settlement Preferences",
    description:
      "Select preferred settlement method and frequency. (instant, daily, or custom)",
    icon: scrollIconTwo,
  },
  {
    title: "Confirm & Activate",
    description:
      "Once set, activate instant settlements and start receiving funds in real-time.",
    icon: scrollIconThree,
  },
]


const allInOnePolicies = [
  {
    icon: taskIconOne,
    title: "Customized Settlements",
    description:
      "Empower yourself to decide when your customer payments should be transferred to your bank account. With a customized payment settlement process, you have full control to settle the needed amount within a few seconds.",
    image: paymentLinkImage,
    buttonUrl: "/sales/",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconTwo,
    title: "Simplified Budgeting",
    description:
      "Faster access to capital empowers you to make quicker decisions, invest in inventory, and seize strategic opportunities without delays.",
    image: notificationImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "Enhanced Relations",
    description:
      "Pay vendors/suppliers faster, build stronger relationships, potentially secure better deals, and avoid late fees.",
    image: shareImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
  },
  {
    icon: taskIconFour,
    title: "Super Fast Settlements",
    description:
      "Instantly get your customer payments straight into your bank account every day with same-day settlements, which are settled at T+O, for a quick and consistent cash flow experience.",
    image: paymentOptionImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
    reverse: true,
  },
  {
    icon: taskIconFive,
    title: "Increased Efficiency",
    description:
      "Eliminate the need to track settlement schedules and manage cash flow fluctuations, freeing up valuable time and resources for other business-critical tasks.",
    image: secureImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
  },
]

const managementCards = [
  {
    titleHtml: "Payment Gateway",
    description:
      "No-code solution to seamlessly collect payments across multiple channels, ensuring you never miss a transaction.",
    cardImage: paymentGatewayImg,
    linkUrl: "/payment-gateway",
  },
  {
    titleHtml: "Payment Links",
    description:
      "Effortlessly collect payments on WhatsApp, SMS, Facebook, Twitter, and more using no-code payment links.",
    cardImage: paymentLink,
    linkUrl: "/payment-links",
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
      "Enable secure, contactless payments using QR codes, empowering businesses to process transactions instantly.",
    cardImage: qrCodes,
    linkUrl: "/qr-code",
  },
  {
    titleHtml: "Auto Collect",
    description:
      "Seamlessly accept NEFT, RTGS, and IMPS transfers using customer-specific identifiers, with automated reconciliation for large-scale transactions.",
    cardImage: autoCollect,
    linkUrl: "/auto-collect",
  },
  {
    titleHtml: "UPI Payments",
    description:
      "UPI payments with any app - BHIM, PhonePe, WhatsApp for smooth transactions. No SMS, no VPA hassles.",
    cardImage: upiImg,
    linkUrl: "/upi-payments",
  },
  {
    titleHtml: "Reminder Engine",
    description:
      "Remove manual reminders and easily automate your business collections for a more seamless cash flow.",
    cardImage: reminder,
    linkUrl: "/collection-reminder",
  },
]

const stackcardData = [
  {
    color: "#fff",
    icon: realTimeExpenseIcon,
    title: "Instant Funds",
    description: `With EnKash’s instant payment settlement process, you receive funds instantly after every successful transaction.`,
    image: realTimeExpense,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    color: "#eee",
    icon: fraudProtectionIcon,
    title: "Easy Access",
    description: `EnKash enables you to access your funds 24/7, 365 days a year, even on weekends and holidays.`,
    image: fraudProtection,
    buttonUrl: "/sales",
  },
  {
    color: "#fff",
    icon: streamlinedReimbursementIcon,
    title: "Full Control",
    description: `Gain complete control over your cash flow, allowing you to invest, pay suppliers, or manage expenses instantly. Eliminate cash flow gaps and seize time-sensitive deals with readily available funds.`,
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=expense_management",
  },
]
export {
  cardsData,
  allInOnePolicies,
  managementCards,
  stackcardData,
}
