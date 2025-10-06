import { TCardTypes, TStackCardsProp } from "@/src/types"
import {
  activationIcon,
  autoCollect,
  costControlSavings,
  costControlSavingsIcon,
  fraudProtection,
  fraudProtectionIcon,
  hundredPercentIcon,
  instant,
  notificationImage,
  paymentButton,
  paymentLink,
  paymentLinkImage,
  paymentOptionImage,
  qrCodes,
  realTimeExpense,
  realTimeExpenseIcon,
  realTimeIcon,
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
  TravelIcon,
  TravelImage,
} from "./img"
const benifitsData = [
  { icon: hundredPercentIcon, title: "Instant Setup" },
  { icon: activationIcon, title: "Single Dashboard Tracking" },
  { icon: realTimeIcon, title: "Detailed Insights" },
]

const cardsData: TStackCardsProp = [
  {
    title: "Sign Up",
    description: "Create your account on EnKash and get payment links.",
    icon: scrollIconOne,
  },
  {
    title: "Send Reminders",
    description:
      "Send payment links via different channels with automated reminders.",
    icon: scrollIconTwo,
  },
  {
    title: "Collect Payments",
    description: "Start accepting payments from your customers.",
    icon: scrollIconThree,
  },
]

const allInOnePolicies: TStackCardsProp = [
  {
    icon: taskIconOne,
    title: "Automation",
    description:
      "Automate collection reminders and save time for other productive work. Send timely payment reminder emails to ensure faster collections and improved cash flow.",
    image: paymentLinkImage,
    buttonUrl: "/sales/",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconTwo,
    title: "Payment Links",
    description:
      "Businesses can embed payment links within the reminder engine channel, and collections can be done instantly.",
    image: notificationImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "DSO Management",
    description:
      "Businesses can automate collection reminders and accelerate their collections, decreasing their DSO and stabilizing their cash flow.",
    image: shareImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
  },
  {
    icon: taskIconFour,
    title: "Improved Customer Relationships",
    description:
      "EnKash brings businesses closer to their customers by providing insights into their behaviour and patterns. This enables businesses to make decisions keeping customers at the forefront, therefore, establishing better customer relationships.",
    image: paymentOptionImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
    reverse: true,
  },
  {
    icon: taskIconFive,
    title: "Real-time Insights",
    description:
      "Leverage actionable insights with our powerful dashboard. Access real-time transaction data, monitor payment trends, and analyze customer behavior to make strategic business decisions that can drive growth and enhance operational efficiency.",
    image: secureImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
  },
]
const managementCards: TCardTypes = [
  {
    titleHtml: "Payment Gateway",
    description:
      "A no-code solution to effortlessly collect payments across various channels, guaranteeing you never miss a transaction.",
    cardImage: paymentLink,
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
const stackcardData: TStackCardsProp = [
  {
    icon: realTimeExpenseIcon,
    title: "Choice of Reminders",
    description: `Businesses can send either of the two types of reminders — invoice reminders and automatic reminders. While invoice reminders can be sent to specific customers by looking at their payment patterns and timeline. Automatic reminders can be sent as and when the customer is onboarded.`,
    image: realTimeExpense,
    buttonUrl: "/sales/?source=upi-payments",
  },
  {
    icon: fraudProtectionIcon,
    title: "Absolute Visibility",
    description: `Enterprises can view the customer’s payment history and pattern to understand their payment behaviour.`,
    image: fraudProtection,
    buttonUrl: "/sales",
  },
  {
    icon: streamlinedReimbursementIcon,
    title: "Embedded Links",
    description: `Payment reminders are sent to the customer with embedded links. This encourages then to pay instantly. `,
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=upi-payments",
  },
  {
    icon: costControlSavingsIcon,
    title: "Total Control",
    description: `Enterprises can control when to send the reminders and which channel for payment collection — email, SMS, or WhatsApp.`,
    image: costControlSavings,
    buttonUrl: "/sales",
  },
  {
    icon: TravelIcon,
    title: "Single Click Reminders",
    description: `Using invoice reminders, businesses can select and dispatch multiple reminders using a single click.`,
    image: TravelImage,
    buttonUrl: "/sales",
  },
]
export {
  allInOnePolicies,
  cardsData,
  managementCards,
  stackcardData,
  benifitsData,
}
