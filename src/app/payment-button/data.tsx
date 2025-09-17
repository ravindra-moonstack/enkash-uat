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
  notificationImage,
  optimizedIcon,
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
    title: "Create",
    description: "Use EnKash’s intuitive dashboard to design your button.",
    icon: scrollIconOne,
  },
  {
    title: "Copy",
    description: "Generate an auto-created code tailored to your button.",
    icon: scrollIconTwo,
  },
  {
    title: "Integrate",
    description: "Paste the code on your website or blog.",
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
    title: "Credit and Debit Cards:",
    description: "Process domestic and international card payments easily.",
    icon: cards,
  },
  {
    title: "UPI (Unified Payments Interface):",
    description:
      "Harness the power of instant, hassle-free payments with India’s leading digital payment method.",
    icon: upi,
  },
  {
    title: "Net Banking:",
    description:
      "Enable seamless transactions through direct integrations with over 50+ major banks.",
    icon: netBanking,
  },
  {
    title: "Digital Wallets:",
    description:
      "Accept payments through popular wallets for quicker and convenient checkouts.",
    icon: digital,
  },
  {
    title: "EMI & PayLater:",
    description:
      "Empower your customers with flexible payment options like No Cost EMI and PayLater, boosting affordability and conversion rates.",
    icon: emi,
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
    title: "Setup in under 5 minutes",
    description:
      "Add the button to your website or blog in under 5 minutes. Skip complex installations and technical hurdles with our straightforward setup process. Create your button, copy the code, and get started instantly without waiting for developer assistance.",
    image: paymentLinkImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconTwo,
    title: "Ctrl C + Ctrl V = Payment Ready",
    description:
      "No coding expertise is required. Copy-paste a one-line code. EnKash Payment Buttons seamlessly integrate into any website or blog, ensuring a smooth user experience and uninterrupted functionality with zero technical complications.",
    image: shareImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "305px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "Accept Payments Anytime, Anywhere",
    description:
      "Accept one-time or recurring payments effortlessly. Enable your customers to choose between single transactions or subscriptions, making your payment process adaptable to diverse business models and customer needs.",
    image: paymentOptionImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "268px",
  },
  {
    icon: taskIconFour,
    title: "Match Your Style",
    description:
      "Match your brand’s look and feel with customizable styles, colors, and text. Design buttons that align with your business identity, creating a consistent and professional appearance for your online presence.",
    image: notificationImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: taskIconFive,
    title: "Optimized for the Mobile",
    description:
      "Designed for optimal performance on all devices. Provide a seamless payment experience for users of smartphones, tablets, or desktops, catering to the growing mobile commerce trends.",
    image: optimizedIcon,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "221px",
  },
  {
    icon: taskIconSix,
    title: "Don’t Compromise on Security",
    description:
      "Industry-leading security and compliance standards ensure safe payments. Protect your customers’ data with advanced encryption and fraud detection, building trust and credibility for your business.",
    image: secureImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "259px",
    reverse: true,
  },
]

const managementCardData = [
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
