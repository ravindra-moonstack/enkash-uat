import cards from "./img/credit-debit-cards.svg"
import upi from "./img/upi.svg"
import netBanking from "./img/net-banking.svg"
import digital from "./img/digital.svg"

import {
  autoCollect,
  instant,
  fraudProtection,
  fraudProtectionIcon,
  notificationImage,
  optimizedIcon,
  paymentButton,
  paymentLink,
  paymentLinkImage,
  paymentOptionImage,
  paymentPage,
  qrCodes,
  reminder,
  scrollIconFourth,
  scrollIconOne,
  scrollIconThree,
  scrollIconTwo,
  shareImage,
  taskIconFive,
  taskIconFour,
  realTimeExpense,
  realTimeExpenseIcon,
  taskIconOne,
  taskIconThree,
  taskIconTwo,
} from "./img"
import { TStackCardsProp } from "@/src/types"

const cardsData = [
  {
    title: "Generate QR Code",
    description:
      "Use EnKash dashboard or API to create a QR code for your business.",
    icon: scrollIconOne,
  },
  {
    title: "Display and Share",
    description:
      "Print it for your storefront, share it digitally, or include it on invoices.",
    icon: scrollIconTwo,
  },
  {
    title: "Accept Payments",
    description:
      "Customers scan the code using their preferred UPI app or wallet.",
    icon: scrollIconThree,
  },
  {
    title: "Track and Reconcile",
    description:
      "Automatically match payments with orders and generate detailed reports.",
    icon: scrollIconFourth,
  },
]

const paymentMethodData = [
  {
    title: "Bulk QR Code Generation",
    description:
      "Upload payment details in bulk using our dashboard to generate multiple QR codes instantly.",
    icon: cards,
  },
  {
    title: "Custom Split Settlements",
    description:
      "Define and automate revenue sharing across branches, franchises, or departments.",
    icon: upi,
  },
  {
    title: "Real-Time Notifications",
    description:
      "Get instant updates on successful payments via email, SMS, or webhook notifications.",
    icon: netBanking,
  },
  {
    title: "Advanced Analytics",
    description:
      "Monitor performance metrics like daily transactions, total revenue, and settlement reports from a centralized dashboard.",
    icon: digital,
  },
]

const allInOnePolicyData = [
  {
    icon: taskIconOne,
    title: "Generate QR Codes for your Business in Seconds",
    description:
      "With EnKash QR codes, getting started is quick and easy. Generate your unique QR codes instantly through our user-friendly platform. No complicated processes or long wait times—just a few clicks, and you’re ready to accept payments, boosting efficiency for your business operations.",
    image: paymentLinkImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconTwo,
    title: "Showcase your Brand on Every QR Code",
    description:
      "Stand out by adding your business logo to every QR code. With custom branding, you promote trust and professionalism and reinforce your brand identity at every payment interaction. It’s a simple yet powerful way to make your business memorable.",
    image: shareImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "305px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "Generate QR Codes for Fixed or Dynamic Amounts",
    description:
      "Enjoy the flexibility to generate fixed-amount codes for specific transactions or dynamic codes that allow open payments. Whether for recurring billing or flexible purchases, our solution adapts to your business needs, offering convenience for you and your customers.",
    image: paymentOptionImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "268px",
  },
  {
    icon: taskIconFour,
    title: "Real-time Reconciliation and Tracking of Financial Transactions",
    description:
      "Stay on top of your business finances with EnKash’s real-time transaction tracking. Our powerful dashboard provides instant updates on payments, detailed reports, and reconciliation tools, ensuring you always have clear insights into your revenue streams for efficient financial management.",
    image: notificationImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: taskIconFive,
    title: "Industry Leading Encryption and Compliance Standards",
    description:
      "Protect your business and customer data with EnKash’s secure payment platform. Our QR codes are backed by advanced encryption and compliance with global security standards, giving you peace of mind and ensuring every transaction is safe, reliable, and trustworthy.",
    image: optimizedIcon,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "221px",
  },
]

const managementCardData = [
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

const stackcardData: TStackCardsProp = [
  {
    icon: realTimeExpenseIcon,
    title: "Static QR Code",
    description: `Generate a single QR code for your business. Customers scan and pay the pre-defined amount using any UPI app. Ideal for displaying at stores or on invoices`,
    image: realTimeExpense,
    buttonUrl: "",
  },
  {
    icon: fraudProtectionIcon,
    title: "Dynamic QR Code",
    description: `Generate unique QR codes for each transaction. Perfect for online payments, allowing you to capture specific invoice details for easy reconciliation and can be left open-ended for variable payment amounts`,
    image: fraudProtection,
    buttonUrl: "",
  },
]
export {
  allInOnePolicyData,
  cardsData,
  managementCardData,
  paymentMethodData,
  stackcardData,
}
