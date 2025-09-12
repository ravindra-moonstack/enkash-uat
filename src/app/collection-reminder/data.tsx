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
  TravelIcon,
  TravelImage,
} from "."

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

const allInOnePolicies = [
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
const managementCards = [
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
const stackcardData = [
  {
    color: "#fff",
    icon: realTimeExpenseIcon,
    title: "Choice of Reminders",
    description: `Businesses can send either of the two types of reminders — invoice reminders and automatic reminders. While invoice reminders can be sent to specific customers by looking at their payment patterns and timeline. Automatic reminders can be sent as and when the customer is onboarded.`,
    image: realTimeExpense,
    buttonUrl: "/sales/?source=upi-payments",
  },
  {
    color: "#eee",
    icon: fraudProtectionIcon,
    title: "Absolute Visibility",
    description: `Enterprises can view the customer’s payment history and pattern to understand their payment behaviour.`,
    image: fraudProtection,
    buttonUrl: "/sales",
  },
  {
    color: "#fff",
    icon: streamlinedReimbursementIcon,
    title: "Embedded Links",
    description: `Payment reminders are sent to the customer with embedded links. This encourages then to pay instantly. `,
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=upi-payments",
  },
  {
    color: "#eee",
    icon: costControlSavingsIcon,
    title: "Total Control",
    description: `Enterprises can control when to send the reminders and which channel for payment collection — email, SMS, or WhatsApp.`,
    image: costControlSavings,
    buttonUrl: "/sales",
  },
  {
    color: "#eee",
    icon: TravelIcon,
    title: "Single Click Reminders",
    description: `Using invoice reminders, businesses can select and dispatch multiple reminders using a single click.`,
    image: TravelImage,
    buttonUrl: "/sales",
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
  allInOnePolicies,
  managementCards,
  stackcardData,
}
