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
  MaintainCompleteControl,
  notificationImage,
  paymentLinkImage,
  paymentOptionImage,
  reduceFrauds,
  scrollIconFourth,
  scrollIconOne,
  scrollIconThree,
  scrollIconTwo,
  secureImage,
  shareImage,
  taskIconFive,
  taskIconFour,
  taskIconOne,
  taskIconSix,
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
    title: "Link",
    description:
      "Link your bank accounts to view balances & initiate payouts instantly.",
    icon: scrollIconOne,
  },
  {
    title: "Routing",
    description: "We securely route the payment through your bank.",
    icon: scrollIconTwo,
  },
  {
    title: "Track",
    description: "Track payout status in real time.",
    icon: scrollIconThree,
  },
  {
    title: "Fetch",
    description: "Fetch automated reconciliation files without delays.",
    icon: scrollIconFourth,
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
    title: "Enterprise-Ready from Day One",
    description:
      "Custom pricing, early feature access, and a dedicated account manager.",
    icon: cards,
  },
  {
    title: "Support That Goes Beyond the Ticket",
    description:
      "Human-first support via WhatsApp, email, or phone; real help, always.",
    icon: upi,
  },
  {
    title: "Direct Payouts from Your Bank",
    description:
      "Pay directly from your bank account - no wallet, no fund transfers.",
    icon: netBanking,
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

const payoutPolicies = [
  {
    icon: taskIconOne,
    title: "Initiate payouts directly from your bank accounts",
    description:
      "Forget wallet loading and fund transfers. With EnKash, your payouts happen directly from your connected bank accounts, giving you complete control over cash flow without any operational delays or intermediaries.",
    image: paymentLinkImage,
    buttonUrl: "/sales/",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconTwo,
    title: "Link multiple bank accounts",
    description:
      "Connect all your current accounts from different banks on a single dashboard. Distribute payout load, minimize dependency on a single bank, reduce downtime risks, and improve liquidity management across your business operations.",
    image: notificationImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "Access 24x7 payment rails",
    description:
      "Make payouts anytime—day or night, weekends or holidays. EnKash supports UPI, IMPS, NEFT, and RTGS round-the-clock, ensuring your vendors, customers, or employees get paid without delay.",
    image: shareImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
  },
  {
    icon: taskIconFour,
    title: "Get real-time balance visibility",
    description:
      "See up-to-date balances across all your linked accounts instantly. Make smarter financial decisions with accurate visibility into available funds before initiating payouts or planning high-value transactions.",
    image: paymentOptionImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
    reverse: true,
  },
  {
    icon: taskIconFive,
    title: "Automate reconciliation",
    description:
      "Say goodbye to manual downloads and spreadsheet matching. EnKash fetches direct bank files and automates reconciliation, making your accounting faster, more accurate, and audit-ready without any manual effort.",
    image: secureImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
  },
  {
    icon: taskIconSix,
    title: "Enable smart routing",
    description:
      "Intelligently route each payout from the most optimal account based on pre-set rules or available balance. Maximize fund utilization and avoid failed transactions due to insufficient funds in a single account.",
    image: reduceFrauds,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
    reverse: true,
  },
  {
    icon: taskIconFive,
    title: "Maintain complete control",
    description:
      "With EnKash, your money stays in your bank. No wallet dependencies or fund transfers- just a secure, compliant layer that enables real-time visibility, control, and automation over all your payouts.",
    image: MaintainCompleteControl,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
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
  payoutPolicies,
}
