import { TStackCardsProp } from "@/src/types"
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
} from "./img"


const cardsData  : TStackCardsProp =[
  {
    title: "Login",
    description:
      "Login to EnKash with your registered number or create an account if you are not registered.",
    icon: scrollIconOne,
  },
  {
    title: "Upload Invoices",
    description:
      "Upload the invoices and select the invoice number against which you want to use the smart payment collection feature.",
    icon: scrollIconTwo,
  },
  {
    title: "Dispatch",
    description:
      "Click on “Dispatch Invoices,” and all your customers will receive their invoices in one click.",
    icon: scrollIconThree,
  },
]


const allInOnePolicyData  : TStackCardsProp =[
  {
    icon: taskIconOne,
    title: "Streamlined Payment Reminders",
    description:
      "Automate payment reminders to ensure timely follow-ups with your customers. With EnKash, you eliminate manual tracking and reduce delays, improving your collection cycle while freeing up resources to focus on strategic growth. Stay proactive and maintain strong relationships by never missing a payment reminder.",
    image: paymentLinkImage,
    buttonUrl: "/sales/",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconTwo,
    title: "Bulk Invoice Dispatch",
    description:
      "Save time and effort by sending multiple invoices in just a single click. EnKash’s intuitive platform minimizes human errors and streamlines the invoicing process, ensuring your customers receive accurate details every time. Simplify workflows and accelerate cash flow with this smart invoicing solution.",
    image: notificationImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "Enhanced Reconciliation Accuracy",
    description:
      "Monitor your payment collections in real-time with EnKash’s advanced tracking tools. Automated reconciliation reduces discrepancies and provides a clear financial picture, saving your team hours of manual effort. Gain actionable insights to improve decision-making and maintain accuracy across all transactions.",
    image: shareImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
  },
  {
    icon: taskIconFour,
    title: "Improved Customer Experience",
    description:
      "EnKash empowers your team to focus on building better relationships by automating repetitive tasks. Offer your customers a smoother, hassle-free payment experience with prompt notifications and accurate invoices. Prioritize customer satisfaction, strengthen loyalty, and enhance your reputation with an optimized collection process.",
    image: paymentOptionImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
    reverse: true,
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

export {
allInOnePolicyData, cardsData, managementCardData 
}
