import { TCardTypes, TStackCardsProp } from "@/src/types"
import {
  autoCollect,
  costControlSavings,
  costControlSavingsIcon,
  fraudProtection,
  fraudProtectionIcon,
  instant,
  notificationImage,
  paymentButton,
  paymentLink,
  paymentLinkImage,
  paymentOptionImage,
  paymentPage,
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
  TravelIcon,
  TravelImage,
  convenient,
  settlementIcon,
  flexibility,
} from "./img"

const cardsData : TStackCardsProp =  [
  {
    title: "Sign-up",
    description:
      "Register with EnKash and integrate the UPI payment gateway on your website or app.",
    icon: scrollIconOne,
  },
  {
    title: "KYC",
    description:
      "Ensure compliance and enable secure transactions by completing the simple KYC process.",
    icon: scrollIconTwo,
  },
  {
    title: "Collect",
    description:
      "Start receiving payments through UPI apps—directly into your bank account.",
    icon: scrollIconThree,
  },
]

const paymentMethodData : TStackCardsProp =  [
  {
    title: "Convenient and Fast",
    description:
      "UPI payments happen instantly with just a few taps—no more waiting for bank transfers or struggling with other payment methods.",
    icon: convenient,
  },
  {
    title: "Real-Time Settlement",
    description:
      "Enjoy faster cash flow with UPI’s real-time transaction settlement, providing your business with immediate access to funds.",
    icon: settlementIcon,
  },
  {
    title: "Flexibility for Customers",
    description:
      "With UPI AutoPay, your customers can easily manage recurring payments without needing to remember bank details.",
    icon: flexibility,
  },
]
const allInOnePolicyData : TStackCardsProp =  [
  {
    icon: taskIconOne,
    title: "Effortless Integration for Quick Setup",
    description:
      "No need for extra code or technical headaches. EnKash provides easy-to-use SDKs and APIs that integrate seamlessly with your existing website or app. This means you can start accepting UPI payments without any complex setup or lengthy development time, allowing you to focus on what matters: growing your business.",
    image: paymentLinkImage,
    buttonUrl: "/sales/",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconTwo,
    title: "Get Paid Instantly with Instant Settlement",
    description:
      "Do not wait days for payment settlements. Our real-time settlement system ensures that once a customer makes a payment, the funds are directly deposited into your bank account. This improves your cash flow, enabling you to reinvest in your business without worrying about delayed payments.",
    image: shareImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "Prioritize Secure Transactions",
    description:
      "Security is our top priority. Every UPI payment you process is backed by EnKash’s advanced security infrastructure, along with two-factor authentication ensuring all transactions are encrypted and safe. This means your business and customer data are protected, reducing the risk of fraud and giving both you and your customers peace of mind during every transaction.",
    image: paymentOptionImage,
    buttonUrl: "/sales/?source=upi-payments",
    maxImageHeight: "268px",
  },
  {
    icon: taskIconFour,
    title: "No More Payment Failures",
    description:
      "Say goodbye to payment failures. EnKash uses optimized payment routing and cutting-edge technology to ensure your transactions are successful. Our solution is designed to offer the highest UPI success rates, meaning fewer declined payments and a smoother experience for your customers. This increases customer trust and boosts your revenue by ensuring you don't miss any payments.",
    image: notificationImage,
    buttonUrl: "/sales/",
    maxImageHeight: "259px",
    reverse: true,
  },
]

const managementCardsData : TCardTypes = [
  {
    titleHtml: "Payment Gateway",
    description: "Seamlessly collect payments with no-code solutions.",
    cardImage: paymentLink,
    linkUrl: "/payment-gateway",
  },
  {
    titleHtml: "Payment Page",
    description: "Create stunning, branded checkout experiences in minutes.",
    cardImage: paymentPage,
    linkUrl: "/payment-page",
  },
  {
    titleHtml: "Payment Links",
    description:
      "Collect payments across WhatsApp, SMS, and social media with easy-to-share payment links.",
    cardImage: paymentButton,
    linkUrl: "/payment-links",
  },
  {
    titleHtml: "QR Codes",
    description:
      "Enable secure, contactless payments with QR codes, allowing businesses to process instant transactions.",
    cardImage: qrCodes,
    linkUrl: "/qr-code",
  },
  {
    titleHtml: "Auto Collect",
    description:
      "Accept NEFT, RTGS, and IMPS transfers using on-demand customer identifiers with automated reconciliation at scale.",
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
      "Automate your collections and say goodbye to manual reminders.",
    cardImage: reminder,
    linkUrl: "/collection-reminder",
  },
]
const stackcardData: TStackCardsProp = [
  {
    icon: realTimeExpenseIcon,
    title: "UPI Intent Flow",
    description: `Make UPI payments faster for your customers by automatically opening their preferred UPI app. EnKash supports intent, collect, and in-app flows for a seamless checkout experience.`,
    image: realTimeExpense,
    buttonUrl: "/sales/?source=upi-payments",
  },
  {
    icon: fraudProtectionIcon,
    title: "Dynamic QR Code",
    description: `Create and show dynamic QR codes on your website or softPOS app with our APIs, enabling quick and easy payments for your customers.`,
    image: fraudProtection,
    buttonUrl: "/sales",
  },
  {
    icon: streamlinedReimbursementIcon,
    title: "Static QR Code",
    description: `Simplify offline UPI payment collections by generating QR codes directly from your desktop or softPOS app.`,
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=upi-payments",
  },
  {
    icon: costControlSavingsIcon,
    title: "Virtual UPI ID",
    description: `Generate unique UPI IDs for each payer, automatically reconcile payments from various customers, and allow users to pay without manually entering the amount.`,
    image: costControlSavings,
    buttonUrl: "/sales",
  },
  {
    icon: TravelIcon,
    title: "UPI AutoPay",
    description: `Automate recurring payments up to ₹15,000 with a one-time UPI mandate and streamline your subscription collections.`,
    image: TravelImage,
    buttonUrl: "/sales",
  },
]
export {
  cardsData,
  paymentMethodData,
  allInOnePolicyData,
  managementCardsData,
  stackcardData,
}
