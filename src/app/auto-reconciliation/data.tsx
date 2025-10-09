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
  paymentGatewayImg,
  paymentLink,
  paymentLinkImage,
  paymentOptionImage,
  qrCodes,
  realTimeExpense,
  realTimeExpenseIcon,
  realTimeIcon,
  reduceFrauds,
  reminder,
  scrollIconOne,
  scrollIconThree,
  scrollIconTwo,
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

const corebenifitData = [
  { icon: activationIcon, title: "Data Tracking " },
  { icon: hundredPercentIcon, title: "24/7 Availability" },
  { icon: realTimeIcon, title: "Visual Dashboards" },
]

const cardsData: TStackCardsProp = [
  {
    title: "Integrate Payment Sources",
    description:
      "Connect bank accounts, payment gateways, and other financial systems with EnKash.",
    icon: scrollIconOne,
  },
  {
    title: "Customise Reconciliation Rules",
    description:
      "Define rules to match transactions, invoices, and payments automatically based on your business needs.",
    icon: scrollIconTwo,
  },
  {
    title: "Review & Reconcile",
    description:
      "Allow EnKash to automatically match and reconcile transactions while generating detailed reports for your review.",
    icon: scrollIconThree,
  },
]

const allInOnePolicies: TStackCardsProp = [
  {
    icon: taskIconOne,
    title: "Multi-Bank Reconciliation",
    description:
      "Automatically map transactions with bank statements using names, dates, and amounts. Effortlessly reconcile unmatched transactions, review mappings, and update transactions in your ERP.",
    image: paymentLinkImage,
    buttonUrl: "/sales/",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconTwo,
    title: "Track and Control",
    description:
      "Manage records of vendor, rental, utilities, and tax payments from end to end, and easily track the payment status directly on the platform.",
    image: notificationImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "Enhance Customer Experience",
    description:
      "Improve overall customer experience by optimizing collection reminders via the platform with real-time updates of payments and dues.",
    image: shareImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
  },
  {
    icon: taskIconFour,
    title: "Accelerate Audits",
    description:
      "Access detailed transaction history, ensuring clear audit trails for enhanced accountability and compliance. Maintain thorough records of transactions and changes, promoting transparency and traceability",
    image: paymentOptionImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
    reverse: true,
  },
  {
    icon: taskIconFive,
    title: "Reduce Frauds",
    description:
      "Gain a clear view of all the transactions, easily identify duplicate invoices, and flag suspicious transactions. Enhancing security and reducing the risk of fraud",
    image: reduceFrauds,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
  },
]
const stackcardData: TStackCardsProp = [
  {
    icon: realTimeExpenseIcon,
    title: "Accuracy",
    description: `EnKash's automated system significantly improves accuracy by minimizing human intervention. The advanced algorithms ensure precise data extraction and validation, contributing to a more reliable reconciliation process.`,
    image: realTimeExpense,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    icon: fraudProtectionIcon,
    title: "Visibility",
    description: `With EnKash, get clear visibility into your cash flow status and ensure all your business payments are processed on time, fostering better relationships.`,
    image: fraudProtection,
    buttonUrl: "/sales",
  },
  {
    icon: streamlinedReimbursementIcon,
    title: "Cost Efficiency",
    description: `With EnKash, you can make the whole process more cost-effective, as it reduces the reliance on manual labour. The streamlined process leads to operational efficiency, minimising the risk of costly errors.`,
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    icon: costControlSavingsIcon,
    title: "Integration",
    description: `EnKash offers seamless integration with various accounting and ERP systems. This interoperability ensures a smooth flow of information across different platforms, enhancing overall efficiency and connectivity.`,
    image: costControlSavings,
    buttonUrl: "/sales",
  },
  {
    icon: TravelIcon,
    title: "Scalability",
    description: `EnKash's automated system is designed for scalability, effortlessly accommodating increasing transaction volumes without compromising efficiency.`,
    image: TravelImage,
    buttonUrl: "/sales",
  },
]
const managementCards: TCardTypes = [
  {
    titleHtml: "Payment Gateway",
    description:
      "A no-code solution to effortlessly collect payments across various channels, guaranteeing you never miss a transaction.",
    cardImage: paymentGatewayImg,
    linkUrl: "/payment-gateway",
  },
  {
    titleHtml: "Payment Link",
    description:
      "Effortlessly collect payments on WhatsApp, SMS, Facebook, Twitter, and more using no-code payment links.",
    cardImage: paymentLink,
    linkUrl: "/payment-button",
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
export { allInOnePolicies, cardsData, managementCards, stackcardData, corebenifitData }
