import { TCardTypes, TStackCardsProp } from "@/src/types"
import {
  autoCollect,
  generateIcon,
  getPaidIcon,
  instant,
  invoices,
  notificationIcon,
  notificationImage,
  paymentButton,
  paymentLink,
  paymentLinkImage,
  paymentOptionIcon,
  paymentOptionImage,
  paymentPage,
  qrCodes,
  quickIcon,
  reminder,
  secureIcon,
  secureImage,
  shareImage,
  sharePaymentIcon,
  websiteIcon,
} from "./img"


const cardsData : TStackCardsProp = [
  {
    title: "Generate Payment Links",
    description:
      "Use the EnKash dashboard or APIs to generate payment links with ease.",
    icon: generateIcon,
  },
  {
    title: "Share Payment Links",
    description: "Send the link via SMS, email, WhatsApp, or social media.",
    icon: sharePaymentIcon,
  },
  {
    title: "Get Paid",
    description:
      "Customers pay using their preferred payment method, and you get notified instantly.",
    icon: getPaidIcon,
  },
]


const policies : TStackCardsProp =  [
  {
    icon: quickIcon,
    title: "Quick and Easy Setup",
    description:
      "Generate payment links effortlessly from the dashboard or through APIs in just a few clicks. No technical expertise is required, allowing merchants of all sizes to start quickly. Focus on running your business while we simplify your payment collection process.",
    image: paymentLinkImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "248px",
  },
  {
    icon: websiteIcon,
    title: "No Website Required",
    description:
      "EnKash Payment Links are perfect for merchants without an online presence. Collect payments via SMS, WhatsApp, email, or social media, eliminating the need for a website or app. This solution bridges the gap between offline and online payment experiences seamlessly.",
    image: shareImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "305px",
    reverse: true,
  },
  {
    icon: paymentOptionIcon,
    title: "100+ Payment Options",
    description:
      "Offer your customers the flexibility to pay using their preferred method, including UPI, net banking, credit/debit cards, wallets, and more. EnKash Payment Links ensure a smooth checkout experience for everyone, boosting customer satisfaction and increasing conversions.",
    image: paymentOptionImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "243px",
  },
  {
    icon: notificationIcon,
    title: "Real-Time Notifications",
    description:
      "Stay in the loop with instant alerts for every successful payment. Gain better control and visibility into your transactions, enabling faster decision-making and improved financial management. Receive updates across all devices to keep your operations running smoothly.",
    image: notificationImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: secureIcon,
    title: "Secure Transactions",
    description:
      "Built on a foundation of PCI DSS compliance and advanced encryption protocols, EnKash Payment Links ensure every transaction is safe and secure. Protect sensitive customer data while providing a trustworthy payment experience, strengthening customer confidence in your business.",
    image: secureImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "259px",
  },
]

const managementCards : TCardTypes = [
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
    titleHtml: "Invoices",
    description:
      "Automate invoicing for recurring transactions, monitor sales and payments, and generate bulk invoices with integrated payment links.",
    cardImage: invoices,
    linkUrl: "/digital-invoicing",
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
cardsData, managementCards, policies
}
