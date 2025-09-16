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
import emi from "./img/emi.svg"
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
  invoices,
  paymentButton,
  paymentLink,
  paymentPage,
  qrCodes,
  reminder,
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
    title: "Fast Performance",
    description:
      "Our app loads quickly and smoothly for a better user experience.",
    icon: policyIcon,
  },
  {
    title: "Secure",
    description: "Top-notch security features keep your data safe and private.",
    icon: plugin,
  },
  {
    title: "24/7 Support",
    description: "We provide around-the-clock assistance whenever you need it.",
    icon: documentation,
  },
  {
    title: "Customizable",
    description: "Easily tailor the app to fit your unique workflow and needs.",
    icon: sandbox,
  },
]

const integrationData = [
  {
    title: "Comprehensive SDKs and APIs",
    description:
      "Integrate quickly using our well-documented, developer-friendly tools compatible with Python, Java, PHP, and more.",
    icon: policyIcon,
  },
  {
    title: "Plugins for Popular Platforms",
    description:
      "Enable seamless setup with ready-to-use plugins for platforms like Shopify, WooCommerce, and Magento.",
    icon: plugin,
  },
  {
    title: "Detailed API Documentation",
    description:
      "Access step-by-step guides and resources for frictionless onboarding.",
    icon: documentation,
  },
  {
    title: "Sandbox Environment",
    description:
      "Test your integration thoroughly in a secure and isolated environment before going live.",
    icon: sandbox,
  },
]

const paymentMethodData = [
  {
    title: "Credit and Debit Cards",
    description: "Process domestic and international card payments easily.",
    icon: cards,
  },
  {
    title: "UPI (Unified Payments Interface)",
    description:
      "Harness the power of instant, hassle-free payments with India’s leading digital payment method.",
    icon: upi,
  },
  {
    title: "Net Banking",
    description:
      "Enable seamless transactions through direct integrations with over 50+ major banks.",
    icon: netBanking,
  },
  {
    title: "Digital Wallets",
    description:
      "Accept payments through popular wallets for quicker and convenient checkouts.",
    icon: digital,
  },
  {
    title: "EMI & PayLater",
    description:
      "Empower your customers with flexible payment options like No Cost EMI and PayLater, boosting affordability and conversion rates.",
    icon: emi,
  },
]

const dashboardData = [
  {
    title: "Financial Overview",
    description:
      "Track and analyze transactions across daily, weekly, monthly, and yearly time frames.",
    icon: financial,
  },
  {
    title: "Transaction History Insights",
    description:
      "Detailed insights into the history of each transaction. Understand payment statuses, order details, refunds, and more.",
    icon: transation,
  },
  {
    title: "Settlement Reconciliation",
    description:
      "Stay fully informed about your business with a detailed breakdown of transactions, reversals, refunds, disputes, and vendor commissions.",
    icon: settlement,
  },
  {
    title: "User-friendly Interface",
    description:
      "With an easy-to-navigate interface, you can effortlessly manage payments, refunds, API keys, webhooks, invoices, and more—all in one place.",
    icon: userFriendly,
  },
]

const rankData = [
  {
    title: "PCI DSS Compliance",
    description:
      "Protect sensitive payment information with industry-standard security practices.",
    icon: pci,
  },
  {
    title: "End-to-End Encryption",
    description:
      "Safeguard transactions with advanced encryption protocols to prevent data breaches.",
    icon: encription,
  },
  {
    title: "Tokenization",
    description:
      "Replace card details with secure tokens to enhance privacy and reduce fraud risks.",
    icon: token,
  },
  {
    title: "Continuous Monitoring",
    description:
      "Detect and mitigate vulnerabilities proactively with real-time threat assessments and third-party audits.",
    icon: monitorizing,
  },
]

const supportData = [
  {
    title: "Tech Support at Every Stage",
    description:
      "Whether you're integrating, going live, or scaling up, our tech team is with you throughout.",
    icon: tech,
  },
  {
    title: "Merchant Support",
    description:
      "Reach us anytime, any day—via chat, email, or call—for instant help and issue resolution.",
    icon: merchant,
  },
  {
    title: "Proactive Issue Resolution",
    description:
      "We don’t just wait for you to raise a ticket—our team monitors and preempts potential issues to ensure business continuity.",
    icon: proActive,
  },
  {
    title: "Onboarding to Scaling Assistance",
    description:
      "Whether it’s Day 1 or Year 5, we guide you at every milestone of your payment journey.",
    icon: onboarding,
  },
]

const savingData = [
  {
    title: "Frictionless Checkout",
    description:
      "Simplify payments with a clean and intuitive checkout interface that minimizes distractions and maximizes conversions.",
    icon: frictionless,
  },
  {
    title: "Saved Cards Across Businesses",
    description:
      "Enable customers to save their card details securely for faster payments on subsequent purchases.",
    icon: saved,
  },
  {
    title: "Global Card Saving",
    description:
      "Extend your services to international customers with global card-saving capabilities, ensuring compliance with tokenization standards.",
    icon: global,
  },
  {
    title: "Personalized Payment Options",
    description:
      "Display payment methods tailored to your customer’s preferences and behavior, driving faster decision-making at checkout.",
    icon: options,
  },
]

const acceleratedGrowthData = [
  {
    title: "Fully-Compliant RBI Authorized Platform",
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

const managementCardData = [
  {
    titleHtml: "Payment Links",
    description:
      "Collect payments across WhatsApp, SMS, Facebook, Twitter, and other platforms with no-code payment links.",
    cardImage: paymentLink,
    linkUrl: "payment-links",
  },
  {
    titleHtml: "Payment Page",
    description:
      "Create custom-branded Payment Pages in minutes to accept payments online—no tech effort needed.",
    cardImage: paymentPage,
    linkUrl: "payment-page",
  },
  {
    titleHtml: "Payment Button",
    description:
      "Integrate a pre-designed payment button to your website with a simple plug-and-play solution.",
    cardImage: paymentButton,
    linkUrl: "payment-button",
  },
  {
    titleHtml: "QR Codes",
    description:
      "Secure, contactless payment with QR codes to enable businesses to accept instant transactions.",
    cardImage: qrCodes,
    linkUrl: "qr-code",
  },
  {
    titleHtml: "Auto Collect",
    description:
      "Accept NEFT, RTGS, and IMPS transfers using on-demand customer identifiers with automated reconciliation at scale.",
    cardImage: autoCollect,
    linkUrl: "auto-collect",
  },
  {
    titleHtml: "Bulk Collect",
    description:
      "Collect multiple payments in one go with instant tracking and automated reminders.",
    cardImage: invoices,
    linkUrl: "/bulk-collect",
  },
  {
    titleHtml: "Instant Settlement",
    description:
      "Access your funds instantly, skip standard settlement cycles, and gain better control over your cash flow.",
    cardImage: instant,
    linkUrl: "instant-settlement",
  },
  {
    titleHtml: "Reminder Engine",
    description:
      "Eliminate manual reminders and effortlessly automate your business collections for smoother cash flow.",
    cardImage: reminder,
    linkUrl: "collection-reminder",
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
  managementCardData,
}
