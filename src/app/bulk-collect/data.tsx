import iconOne from "./img/icon-one.svg"
import iconTwo from "./img/icon-two.svg"
import iconThree from "./img/icon-three.svg"
import iconFour from "./img/icon-four.svg"
import iconFive from "./img/icon-five.svg"
import iconSix from "./img/icon-six.svg"
import policyIcon from "./img/policyIcon.svg"
import sandbox from "./img/sandbox-logo.svg"
import documentation from "./img/documentation-logo.svg"
import plugin from "./img/plugin-logo.svg"
import authorised from "./img/authorised.svg"
import first from "./img/first.svg"
import uptime from "./img/uptime.svg"
import support from "./img/support-icon.svg"
import cards from "./img/credit-debit-cards.svg"
import upi from "./img/upi.svg"
import netBanking from "./img/net-banking.svg"
import digital from "./img/digital.svg"
import financial from "./img/financial.svg"
import transation from "./img/transition.svg"
import settlement from "./img/settlement.svg"
import userFriendly from "./img/user-friendly.svg"
import pci from "./img/pci.svg"
import encription from "./img/encryption.svg"
import token from "./img/token.svg"
import monitorizing from "./img/monitoring.svg"
import tech from "./img/tech.svg"
import merchant from "./img/merchant.svg"
import proActive from "./img/proActive.svg"
import onboarding from "./img/onboarding.svg"
import frictionless from "./img/frictionless.svg"
import saved from "./img/saved.svg"
import global from "./img/global.svg"
import options from "./img/options.png"
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

const dataSets = [
  {
    imageSrc: iconOne,
    altText: "Allocates hierarchy ",
    heading:
      "Allocates hierarchy : roles It supports and allocates customized approval hierarchy aligned to the company’s policies.",
  },
  {
    imageSrc: iconTwo,
    altText: "Setting up of budgets",
    heading:
      "Setting up of budgets : The automated expense management platform helps define budgets for all departments & projects as per employee allocation",
  },
  {
    imageSrc: iconThree,
    altText: "Simplified expense submission",
    heading:
      "Simplified expense submission: A user-friendly interface ensuring that employees can effortlessly submit expenses from their mobile devices at any time and from any location",
  },
  {
    imageSrc: iconFour,
    altText: "Automated approval workflow",
    heading:
      "Automated approval workflow: On-click approval process based on predefined budgets or policies",
  },
  {
    imageSrc: iconFive,
    altText: "Faster expense tracking",
    heading:
      "Faster expense tracking: AI-powered WhatsApp bot helps report expenses and enables managers to give on-the-go approvals",
  },
  {
    imageSrc: iconSix,
    altText: "Real-time visibility",
    heading:
      "Real-time visibility:  Managers can access up-to-date reports and dashboards that offer insights into spending patterns, budget utilization, and cost centers",
  },
]

const cardsData = [
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

const integrationData = [
  {
    title: "Comprehensive SDKs and APIs:",
    description:
      "Integrate quickly using our well-documented, developer-friendly tools compatible with Python, Java, PHP, and more.",
    icon: policyIcon,
  },
  {
    title: "Plugins for Popular Platforms:",
    description:
      "Enable seamless setup with ready-to-use plugins for platforms like Shopify, WooCommerce, and Magento.",
    icon: plugin,
  },
  {
    title: "Detailed API Documentation:",
    description:
      "Access step-by-step guides and resources for frictionless onboarding.",
    icon: documentation,
  },
  {
    title: "Sandbox Environment:",
    description:
      "Test your integration thoroughly in a secure and isolated environment before going live.",
    icon: sandbox,
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

const dashboardData = [
  {
    title: "Financial Overview:",
    description:
      "Track and analyze transactions across daily, weekly, monthly, and yearly time frames.",
    icon: financial,
  },
  {
    title: "Transaction History Insights:",
    description:
      "Detailed insights into the history of each transaction. Understand payment statuses, order details, refunds, and more.",
    icon: transation,
  },
  {
    title: "Settlement Reconciliation:",
    description:
      "Stay fully informed about your business with a detailed breakdown of transactions, reversals, refunds, disputes, and vendor commissions.",
    icon: settlement,
  },
  {
    title: "User-friendly Interface:",
    description:
      "With an easy-to-navigate interface, you can effortlessly manage payments, refunds, API keys, webhooks, invoices, and more—all in one place.",
    icon: userFriendly,
  },
]

const rankData = [
  {
    title: "PCI DSS Compliance:",
    description:
      "Protect sensitive payment information with industry-standard security practices.",
    icon: pci,
  },
  {
    title: "End-to-End Encryption:",
    description:
      "Safeguard transactions with advanced encryption protocols to prevent data breaches.",
    icon: encription,
  },
  {
    title: "Tokenization:",
    description:
      "Replace card details with secure tokens to enhance privacy and reduce fraud risks.",
    icon: token,
  },
  {
    title: "Continuous Monitoring:",
    description:
      "Detect and mitigate vulnerabilities proactively with real-time threat assessments and third-party audits.",
    icon: monitorizing,
  },
]

const supportData = [
  {
    title: "Tech Support at Every Stage:",
    description:
      "Whether you're integrating, going live, or scaling up, our tech team is with you throughout.",
    icon: tech,
  },
  {
    title: "Merchant Support:",
    description:
      "Reach us anytime, any day—via chat, email, or call—for instant help and issue resolution.",
    icon: merchant,
  },
  {
    title: "Proactive Issue Resolution:",
    description:
      "We don’t just wait for you to raise a ticket—our team monitors and preempts potential issues to ensure business continuity.",
    icon: proActive,
  },
  {
    title: "Onboarding to Scaling Assistance:",
    description:
      "Whether it’s Day 1 or Year 5, we guide you at every milestone of your payment journey.",
    icon: onboarding,
  },
]

const savingData = [
  {
    title: "Frictionless Checkout:",
    description:
      "Simplify payments with a clean and intuitive checkout interface that minimizes distractions and maximizes conversions.",
    icon: frictionless,
  },
  {
    title: "Saved Cards Across Businesses:",
    description:
      "Enable customers to save their card details securely for faster payments on subsequent purchases.",
    icon: saved,
  },
  {
    title: "Global Card Saving:",
    description:
      "Extend your services to international customers with global card-saving capabilities, ensuring compliance with tokenization standards.",
    icon: global,
  },
  {
    title: "Personalized Payment Options:",
    description:
      "Display payment methods tailored to your customer’s preferences and behavior, driving faster decision-making at checkout.",
    icon: options,
  },
]

const acceleratedGrowthData = [
  {
    title: "Fully-Compliant RBI Authorised Platform",
    icon: authorised,
  },
  {
    title: "Industry First Payment-led Financial Platform",
    icon: first,
  },
  {
    title: "100% Uptime",
    icon: uptime,
  },
  {
    title: "24X7 Customer Support",
    icon: support,
  },
]

const allInOnePolicyData = [
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
  dataSets,
  cardsData,
  acceleratedGrowthData,
  integrationData,
  paymentMethodData,
  dashboardData,
  rankData,
  supportData,
  savingData,
  allInOnePolicyData,
  managementCardData,
}
