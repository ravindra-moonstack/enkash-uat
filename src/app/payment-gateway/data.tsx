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
import {
  autoCollect,
  carouselIcon1,
  carouselIcon2,
  carouselIcon3,
  carouselIcon4,
  ecommerceImage,
  educationImage,
  foodImage,
  healthcareImage,
  instant,
  invoices,
  itemIcon1,
  itemIcon2,
  itemIcon3,
  itemIcon4,
  nbfcsImage,
  paymentButton,
  paymentLink,
  paymentPage,
  qrCodes,
  reminder,
  travelImage,
} from "./img"

const introductionCards = [
  { value: "100%", label: "Support" },
  { value: "100%", label: "Uptime" },
  { value: "100%", label: "Faster" },
]


const integrationData = [
  {
    title: "Debit and Credit Cards:",
    description:
      "Process transactions across all major card networks. Complete card coverage in a single integration.",
    icon: policyIcon,
  },
  {
    title: "UPI Payments:",
    description:
      "Direct integration with India's most popular payment method. Support for all major UPI applications with industry-leading success rates.",
    icon: plugin,
  },
  {
    title: "Net Banking:",
    description:
      "Seamless connectivity with 50+ major banks across India. Enable direct account-to-account transfers with real-time authorization.",
    icon: documentation,
  },
  {
    title: "Digital Wallets:",
    description:
      "Accept payments through all major digital wallets for faster, more convenient checkouts. One-tap payments for millions of wallet users.",
    icon: sandbox,
  },
  {
    title: "EMI & Buy Now Pay Later:",
    description:
      "Offer No Cost EMI, cardless EMI, and Buy Now Pay Later options to increase conversion rates and average order values. Make purchases more affordable for customers.",
    icon: emi,
  },
]

const paymentMethodData = [
  {
    title: "Pre-Built Platform Integrations:",
    description: "Production-ready plugins for Shopify, WooCommerce, Magento, and other major e-commerce platforms. Deploy in minutes, not weeks.",
    icon: cards,
  },
  {
    title: "Comprehensive SDK Support:",
    description:
      "Native SDKs for Python, Java, PHP, and other major programming languages. Clean architecture, consistent interfaces, and extensive code examples.",
    icon: upi,
  },
  {
    title: "Complete API Documentation:",
    description:
      "Step-by-step integration guides with working code samples. Comprehensive webhook documentation for real-time event handling.",
    icon: netBanking,
  },
  {
    title: "Full-Featured Sandbox Environment:",
    description:
      "Test every integration scenario in an environment that mirrors production exactly. Validate implementations before going live with confidence.",
    icon: digital,
  },
]

const dashboardData = [
  {
    title: "Round-the-Clock Technical Support:",
    description:
      "Direct access to technical support for integration, troubleshooting, and scaling. Available 24/7 via chat, email, or call for instant help and resolution.",
    icon: financial,
  },
  {
    title: "Expert Merchant Support:",
    description:
      "Reach our support team anytime, any day for guidance on payments, settlements, and business operations. Instant help when you need it most.",
    icon: transation,
  },
  {
    title: "Proactive Issue Resolution:",
    description:
      "We don't wait for you to raise tickets. Our team actively monitors and preempts potential issues to ensure your business continuity.",
    icon: settlement,
  },
  {
    title: "Intuitive Interface Design:",
    description:
      "Consistent support quality from Day 1 through Year 5 and beyond. We guide you at every milestone of your payment journey.",
    icon: userFriendly,
  },
]

const rankData = [
  {
    title: "Comprehensive Financial Overview:",
    description:
      "Track and analyze transaction data across daily, weekly, monthly, and yearly timeframes. Complete visibility into payment volumes, success rates, and settlement timelines.",
    icon: pci,
  },
  {
    title: "Detailed Transaction Insights:",
    description:
      "Access complete history of each transaction. Understand payment statuses, order details, refunds, and detailed transaction information.",
    icon: encription,
  },
  {
    title: "Settlement Reconciliation:",
    description:
      "Clear breakdown of transactions, reversals, refunds, disputes, and vendor commissions. Stay fully informed about your business finances.",
    icon: token,
  },
  {
    title: "User-Friendly Interface:",
    description:
      "Easy-to-navigate dashboard to manage payments, refunds, API keys, webhooks, invoices, and more—all in one place.",
    icon: monitorizing,
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
const categories = [
  { id: "ecommerce", label: "E-commerce & Retail" },
  { id: "education", label: "Education & EdTech" },
  { id: "nbfcs", label: "NBFCs & Financial Institutions" },
  { id: "healthcare", label: "Healthcare & Wellness" },
  { id: "food", label: "Food & Beverage" },
  { id: "travel", label: "Travel & Hospitality" },
]
const slides = [
  {
    id: "ecommerce-1",
    category: "ecommerce",
    title: "E-commerce & Retail",
    description:
      "Accept payments seamlessly across your online store with checkout optimized for conversions. Support for COD-to-prepaid incentives, split settlements for marketplaces, and instant refund processing.",
    image: ecommerceImage.src,
    imageAlt: "E-commerce retail business",
  },
  {
    id: "education-1",
    category: "education",
    title: "Education & EdTech",
    description:
      "Accept payments seamlessly across your online store with checkout optimized for conversions. Support for COD-to-prepaid incentives, split settlements for marketplaces, and instant refund processing.",
    image: educationImage.src,
    imageAlt: "Education and EdTech classroom",
  },
  {
    id: "nbfcs-1",
    category: "nbfcs",
    title: "NBFCs & Financial Institutions",
    description:
      "Accept payments seamlessly across your online store with checkout optimized for conversions. Support for COD-to-prepaid incentives, split settlements for marketplaces, and instant refund processing.",
    image: nbfcsImage.src,
    imageAlt: "Financial institutions business",
  },
  {
    id: "healthcare-1",
    category: "healthcare",
    title: "Healthcare & Wellness",
    description:
      "Accept payments seamlessly across your online store with checkout optimized for conversions. Support for COD-to-prepaid incentives, split settlements for marketplaces, and instant refund processing.",
    image: healthcareImage.src,
    imageAlt: "Healthcare and wellness services",
  },
  {
    id: "food-1",
    category: "food",
    title: "Food & Beverage",
    description:
      "Accept payments seamlessly across your online store with checkout optimized for conversions. Support for COD-to-prepaid incentives, split settlements for marketplaces, and instant refund processing.",
    image: foodImage.src,
    imageAlt: "Food and beverage industry",
  },
  {
    id: "travel-1",
    category: "travel",
    title: "Travel & Hospitality",
    description:
      "Accept payments seamlessly across your online store with checkout optimized for conversions. Support for COD-to-prepaid incentives, split settlements for marketplaces, and instant refund processing.",
    image: travelImage.src,
    imageAlt: "Travel and hospitality services",
  },
]

const slideData = [
  {
    id: 1,
    icon: itemIcon1.src,
    title: "Split Payment Architecture",
    description:
      "Automatically split payments across sellers, platform fees, and service providers with configurable commissions, hold periods, and payout schedules.",
  },
  {
    id: 2,
    icon: itemIcon2.src,
    title: "Enterprise Integration",
    description:
      "Simplify collections and payables by connecting to the Bharat Connect platform. Expand your reach and get paid faster, all in one place.",
  },
  {
    id: 3,
    icon: itemIcon3.src,
    title: "Instant Settlement",
    description:
      "Expand into new regions and business segments by bundling EnKash with your existing SME and corporate offerings.",
  },
  {
    id: 4,
    icon: itemIcon4.src,
    title: "Recurring Billing Engine",
    description:
      "Position your bank as a tech-forward brand by offering co-branded solutions across payments, cards, and expense tools.",
  },
]
const allProductSections = [
  {
    title: "Expense Management",
    subtitle: "Manage every spend effortlessly",
    items: [
      {
        title: "High-Performance Loading ",
        description: "Checkout optimized to load in under 300ms. Every millisecond matters, faster checkouts directly translate to higher conversion rates.",
        image: carouselIcon1,
      },
      {
        title: "Secure Card Storage ",
        description: "Wallets that work across multiple merchants, not limited to your ecosystem.",
        image: carouselIcon2,
      },
      {
        title: "Intelligent Payment Routing ",
        description:
          "Integrated Payment Gateway for easy fund addition via credit cards.",
        image: carouselIcon3,
      },
      {
        title: "Mobile-First Design",
        description: "Simple APIs for quick setup, perfect for B2C companies looking to scale.",
        image: carouselIcon4,
      },
    ],
  },
]
const customFeatures = [
  {
    title: "PCI DSS Level 1 Compliance",
    description: "Certified to the highest level of payment card industry security standards. Your transaction data is protected with the same protocols used by major financial institutions.",
  },
  {
    title: "End-to-End Encryption",
    description: "Each team was given its own virtual card with preset spending limits. This helped avoid overlap and made it easier to manage team-wise budgets while giving full visibility to finance.",
  },
  {
    title: "Advanced Tokenization",
    description: "Each team was given its own virtual card with preset spending limits. This helped avoid overlap and made it easier to manage team-wise budgets while giving full visibility to finance.",
  },
  {
    title: "Continuous Monitoring",
    description: "Each team was given its own virtual card with preset spending limits. This helped avoid overlap and made it easier to manage team-wise budgets while giving full visibility to finance.",
  },
]
export {
  acceleratedGrowthData,
  dashboardData,
  integrationData,
  managementCardData,
  paymentMethodData,
  rankData,
  introductionCards,
  categories,
  slides,
  slideData,
  allProductSections,
  customFeatures,
}
