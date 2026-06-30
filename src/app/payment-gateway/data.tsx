import policyIcon from "./img/policyIcon.svg"
import sandbox from "./img/sandbox-logo.svg"
import documentation from "./img/documentation-logo.svg"
import plugin from "./img/plugin-logo.svg"
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
  itemIcon5,
  nbfcsImage,
  paymentButton,
  paymentLink,
  paymentPage,
  qrCodes,
  reminder,
  success,
  travelImage,
} from "./img"

const introductionCards = [
  { value: "100%", label: "Support" },
  { value: "100%", label: "Uptime" },
  { value: "100%", label: "Faster" },
]


const integrationData = [
  {
    title: "Debit and Credit Cards",
    description:
      "Process transactions across all major card networks. Complete card coverage in a single integration.",
    icon: policyIcon,
  },
  {
    title: "UPI Payments",
    description:
      "Direct integration with India's most popular payment method. Support for all major UPI applications with industry-leading success rates.",
    icon: plugin,
  },
  {
    title: "Net Banking",
    description:
      "Seamless connectivity with 50+ major banks across India. Enable direct account-to-account transfers with real-time authorization.",
    icon: documentation,
  },
  {
    title: "Digital Wallets",
    description:
      "Accept payments through all major digital wallets for faster, more convenient checkouts. One-tap payments for millions of wallet users.",
    icon: sandbox,
  },
  {
    title: "EMI & Buy Now Pay Later",
    description:
      "Offer No Cost EMI, cardless EMI, and Buy Now Pay Later options to increase conversion rates and average order values. Make purchases more affordable for customers.",
    icon: emi,
  },
]

const paymentMethodData = [
  {
    title: "Pre-Built Platform Integrations",
    description: "Production-ready plugins for Shopify, WooCommerce, Magento, and other major e-commerce platforms. Deploy in minutes, not weeks.",
    icon: cards,
  },
  {
    title: "Comprehensive SDK Support",
    description:
      "Native SDKs for Python, Java, PHP, and other major programming languages. Clean architecture, consistent interfaces, and extensive code examples.",
    icon: upi,
  },
  {
    title: "Complete API Documentation",
    description:
      "Step-by-step integration guides with working code samples. Comprehensive webhook documentation for real-time event handling.",
    icon: netBanking,
  },
  {
    title: "Full-Featured Sandbox Environment",
    description:
      "Test every integration scenario in an environment that mirrors production exactly. Validate implementations before going live with confidence.",
    icon: digital,
  },
]

const dashboardData = [
  {
    title: "Round-the-Clock Technical Support",
    description:
      "Direct access to technical support for integration, troubleshooting, and scaling. Available 24/7 via chat, email, or call for instant help and resolution.",
    icon: financial,
  },
  {
    title: "Expert Merchant Support",
    description:
      "Reach our support team anytime, any day for guidance on payments, settlements, and business operations. Instant help when you need it most.",
    icon: transation,
  },
  {
    title: "Proactive Issue Resolution",
    description:
      "We don't wait for you to raise tickets. Our team actively monitors and preempts potential issues to ensure your business continuity.",
    icon: settlement,
  },
  {
    title: "Intuitive Interface Design",
    description:
      "Consistent support quality from Day 1 through Year 5 and beyond. We guide you at every milestone of your payment journey.",
    icon: userFriendly,
  },
]

const rankData = [
  {
    title: "Comprehensive Financial Overview",
    description:
      "Track and analyze transaction data across daily, weekly, monthly, and yearly timeframes. Complete visibility into payment volumes, success rates, and settlement timelines.",
    icon: pci,
  },
  {
    title: "Detailed Transaction Insights",
    description:
      "Access complete history of each transaction. Understand payment statuses, order details, refunds, and detailed transaction information.",
    icon: encription,
  },
  {
    title: "Settlement Reconciliation",
    description:
      "Clear breakdown of transactions, reversals, refunds, disputes, and vendor commissions. Stay fully informed about your business finances.",
    icon: token,
  },
  {
    title: "User-Friendly Interface",
    description:
      "Easy-to-navigate dashboard to manage payments, refunds, API keys, webhooks, invoices, and more—all in one place.",
    icon: monitorizing,
  },
]


const acceleratedGrowthData = [
  {
    title: "Zero setup fees",
    icon: success,
  },
  {
    title: "Complete pricing transparency",
    icon: success,
  },
  {
    title: "24-hour onboarding",
    icon: success,
  },
  {
    title: "Dedicated technical support",
    icon: success,
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
  { id: "nbfcs", label: "NBFCs & Financial Institutions" },
  { id: "education", label: "Education & EdTech" },
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
    imageAlt: "E-commerce and retail checkout dashboard",
  },
  {
    id: "nbfcs-1",
    category: "nbfcs",
    title: "NBFCs & Financial Institutions",
    description:
      "Enable structured collections with recurring and one-time payments, installment-based flows, partner split settlements, and clear reconciliation across loans, policies, and investments.",
    image: nbfcsImage.src,
    imageAlt: "Financial institutions recurring payments dashboard",
  },
  {
    id: "education-1",
    category: "education",
    title: "Education & EdTech",
    description:
      "Flexible payment options including EMI and Pay Later for course fees. Automated installment collection, bulk fee collection for institutions, and seamless student payment tracking.",
    image: educationImage.src,
    imageAlt: "Education and EdTech payment solutions",
  },
  {
    id: "healthcare-1",
    category: "healthcare",
    title: "Healthcare & Wellness",
    description:
      "HIPAA-compliant payment processing for consultations and treatments. Support for insurance copays, installment plans for procedures, and automated appointment payment reminders.",
    image: healthcareImage.src,
    imageAlt: "Healthcare and wellness payment plans",
  },
  {
    id: "food-1",
    category: "food",
    title: "Food & Beverage",
    description:
      "QR-based contactless payments for dine-in. Online ordering integration, split bills, tip collection, and real-time settlement for daily cash flow management.",
    image: foodImage.src,
    imageAlt: "Food and beverage contactless payments",
  },
  {
    id: "travel-1",
    category: "travel",
    title: "Travel & Hospitality",
    description:
      "Multi-currency support for international bookings. Partial payment collection, cancellation, and refund automation, and flexible payment plans for packages.",
    image: travelImage.src,
    imageAlt: "Travel and hospitality multi-currency bookings",
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
      "Native integrations with accounting software, CRM, inventory systems, and ERP platforms. Payments flow directly into your workflow.",
  },
  {
    id: 3,
    icon: itemIcon3.src,
    title: "Instant Settlement",
    description:
      "Access funds the same day, including weekends and bank holidays, without waiting for standard settlement cycles.",
  },
  {
    id: 4,
    icon: itemIcon4.src,
    title: "Recurring Billing Engine",
    description:
      "Automated subscription billing with intelligent retry, lifecycle management, and flexible payment updates, all handled automatically.",
  },
  {
    id: 5,
    icon: itemIcon5.src,
    title: "Custom Payment Solutions",
    description:
      "Tailored solutions for specialized compliance, custom flows, and industry-specific scenarios that standard gateways can't support.",
  },
]
const allProductSections = [
  {
    items: [
      {
        title: "High-Performance Loading ",
        description: "Checkout optimized to load in under 300ms. Every millisecond matters, faster checkouts directly translate to higher conversion rates.",
        image: carouselIcon1,
      },
      {
        title: "Secure Card Storage ",
        description: "Tokenized card saving for one-click repeat purchases. Customers complete future transactions instantly while maintaining complete security.",
        image: carouselIcon2,
      },
      {
        title: "Intelligent Payment Routing ",
        description:
          "Smart algorithm suggests optimal payment methods based on historical success rates, customer preferences, and transaction patterns.",
        image: carouselIcon3,
      },
      {
        title: "Mobile-First Design",
        description: "Fully responsive checkout optimized for mobile devices. Touch-friendly interfaces and native performance across all screen sizes.",
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
    description: "256-bit SSL encryption from initial data capture through final settlement. Payment information is encrypted at every stage of processing.",
  },
  {
    title: "Advanced Tokenization",
    description: "Sensitive card data is replaced with secure tokens. Original card information is never stored, eliminating data breach risks while enabling saved card functionality.",
  },
  {
    title: "Continuous Monitoring",
    description: "24/7 security operations center with real-time threat detection, automated response protocols, and regular third-party security audits.",
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
