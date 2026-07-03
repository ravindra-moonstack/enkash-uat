import { TCardTypes } from "@/src/types"
import {
  fuelCardImg,
  mealCardImg,
  purchesCardImg,
  sassCardImg,
  termsAndConCardImg,
  virtualCardImg,
  overviewIcon,
  controlIcon,
  intelligenceIcon,
  statementIcon,
  oneClickIcon,
  identifyIcon,
  detectIcon,
  monitorIcon,
  customizeIcon,
  coBrandImage,
  GalaxyTabImage,
  digitalMarketingImg,
  caraouselIcon1,
  caraouselIcon2,
  caraouselIcon3,
  caraouselIcon4,
  pettyIconOne,
  pettyIconTwo,
  pettyIconThree,
  pettyIconFour,
  pettyIconFive,
  caraouselIcon5,
  caraouselIcon11,
  caraouselIcon12,
  caraouselIcon13,
  caraouselIcon14,
} from "./img"
import { blueArrow } from "../../home/img"
import { getSalesUrl } from "@/src/utils/getSalesUrl"

const intantActionData = [
  {
    title: "Live Account Overview",
    description:
      "Balances, credit limits, billing cycles, and outstanding dues visible in real time across all cards and accounts. Always current, with no manual compilation or requests required.",
    icon: overviewIcon,
  },
  {
    title: "Granular Card Controls",
    description:
      "Each card is configured independently with spending limits, permitted channels, and active status. Any change takes effect immediately within the platform.",
    icon: controlIcon,
  },
  {
    title: "Transaction Intelligence",
    description:
      "Every transaction is filterable by cardholder, category, date, channel, and merchant. Drill into any individual transaction for a complete breakdown or view spending patterns across teams and time periods.",
    icon: intelligenceIcon,
  },
  {
    title: "Statement Clarity",
    description:
      "Statements pulled for any individual card or consolidated across all accounts, filtered by date range or category. Available at any time and formatted for reporting or audit purposes.",
    icon: statementIcon,
  },
  {
    title: "One-Click Settlements",
    description:
      "Settlements made across multiple cards from a single screen, with the option to pay the total due, minimum due, or a custom amount per card. Payment decisions stay with the finance team, independent of a fixed billing schedule.",
    icon: oneClickIcon,
  },
]
const counterHeadingData = {
  content: [
    {
      title: "The Corporate Card Platform That Just Works ",
      color: "color-alternate-grey",
    },
  ],
  className: "f-5 mb-3 text-center",
}
const spendAnalyticsData = [
  {
    title: "Identify top spenders, vendors, and categories",
    icon: identifyIcon,
  },
  {
    title: "Detect anomalies or policy violations in real time",
    icon: detectIcon,
  },
  {
    title: "Monitor trends across departments, cards, or time periods",
    icon: monitorIcon,
  },
  {
    title: "Customize views for CXOs, finance teams, or department heads",
    icon: customizeIcon,
  },
]
const analyticData = [
  {
    title: "Auto-capture receipts and match them to transactions",
    icon: pettyIconOne,
  },
  {
    title: "View, approve, and audit expenses in one place",
    icon: pettyIconTwo,
  },
  {
    title: "Auto-reconcile with your accounting software",
    icon: pettyIconThree,
  },
  {
    title: "Apply policy-driven workflows at the point of swipe",
    icon: pettyIconFour,
  },
  {
    title: "Track and approve spends on the go via mobile",
    icon: pettyIconFive,
  },
]

const cardType: TCardTypes = [
  {
    titleHtml: "Meal Card",
    description:
      "Give tax-saving meal benefits to employees with easy-to-use, digital meal cards accepted nationwide.",
    cardImage: mealCardImg,
    linkUrl: "/meal-card",
  },
  {
    titleHtml: "Fuel Card",
    description:
      "Control and track fuel expenses with prepaid cards designed for fleet and travel-related spending.",
    cardImage: fuelCardImg,
    linkUrl: "/fuel-card",
  },
  {
    titleHtml: "T&E Card",
    description:
      "Manage travel & entertainment spends with smart controls, real-time tracking, and seamless reimbursements.",
    cardImage: termsAndConCardImg,
    linkUrl: "/travel-and-expense-card",
  },
  {
    titleHtml: "Virtual Card",
    description:
      "Generate secure, one-time or recurring virtual cards for safer, faster, and trackable online payments.",
    cardImage: virtualCardImg,
    linkUrl: "/virtual-card",
  },
  {
    titleHtml: "Purchase Card",
    description:
      "Pre-approved cards that help manage vendor payments and operational purchases for effortless procurement.",
    cardImage: purchesCardImg,
    linkUrl: "/purchase-card",
  },
  {
    titleHtml: "Digital Marketing Card",
    description:
      "Manage online ad spends across platforms with preset limits and real-time spend visibility and control.",
    cardImage: digitalMarketingImg,
    linkUrl: "/digital-marketing-card",
  },
  {
    titleHtml: "SaaS Card",
    description:
      "Centralize and manage software subscriptions easily with cards made for recurring SaaS payments and renewals.",
    cardImage: sassCardImg,
    linkUrl: "/saas-card",
  },
]

const stepsData = [
  {
    stepNumber: "Step 1",
    title: "Configure",
    description:
      "Define merchants, limits, and usage policies for your corporate cards.",
  },
  {
    stepNumber: "Step 2",
    title: "Issue Cards",
    description:
      "Issue physical or virtual cards to employees, partners, or teams.",
  },
  {
    stepNumber: "Step 3",
    title: "Track and Manage",
    description:
      "Monitor transactions in real time and reconcile automatically.",
  },
]
const headingData = {
  content: [
    { title: "Getting Started with ", color: "color-black" },
    { title: "EnKash Corporate Cards", color: "color-equity-blue" },
  ],
  headingTag: "h2",
  className: "f-5 mb-4 text-center",
}

const allProductSections = [
  {
    items: [
      {
        title: "Cards Issued in Seconds ",
        description:
          "Checkout optimized to load in under 300ms. Every millisecond matters, faster checkouts directly translate to higher conversion rates.",
        image: caraouselIcon11,
      },
      {
        title: "Full Visibility in Real Time ",
        description:
          "Tokenized card saving for one-click repeat purchases. Customers complete future transactions instantly while maintaining complete security.",
        image: caraouselIcon12,
      },
      {
        title: "Reconciliation Without the Work ",
        description:
          "Smart algorithm suggests optimal payment methods based on historical success rates, customer preferences, and transaction patterns.",
        image: caraouselIcon13,
      },
      {
        title: "Policies That Enforce Themselves",
        description:
          "Spend limits, approval workflows, and MCC restrictions are built into every card. There's nothing for employees to remember and nothing for finance to chase.",
        image: caraouselIcon14,
      },
    ],
  },
]

const statsData = [
  {
    value: "60",
    label: "seconds to issue cards",
    animationDuration: 1500,
    prefix: "<",
  },
  {
    value: "100",
    label: "real-time spend visibility",
    suffix: "%",
  },
  {
    value: "ZERO",
    label: "employee reimbursements",
  },
  {
    value: "10",
    suffix: " Million+",
    label: "merchant acceptance points",
  },
]
const productsData = [
  {
    id: 1,
    title: "Prepaid Corporate Cards",
    description:
      "Reloadable up to ₹2,00,000, MCC-locked, and live in under 60 seconds — with caps,  channel controls, and full policy compliance built in. No bank involved.",
    image: coBrandImage.src,
    alt: "Prepaid Corporate Cards",
    button: {
      connectText: "Explore Prepaid Cards ",
      connectUrl: "/prepaid-card",
      blueArrow: blueArrow,
    },
  },
  {
    id: 2,
    title: "Corporate Credit Cards",
    description:
      "Flexible limits and billing cycles built around your cash flow, with usage rules by merchant, geography, or time. Fraud protection, global acceptance, and rewards on every swipe.",
    image: GalaxyTabImage.src,
    alt: "Corporate Credit Cards",
    button: {
      connectUrl: getSalesUrl("/products/corporate-cards"),
      connectText: "Talk to Us",
      blueArrow: blueArrow,
    },
  },
]

const videoSubHeadingData = [
  [{ title: "Issue cards in under 60 seconds", color: "color-black" }],
  [
    {
      title: "Real-time spend visibility across every card",
      color: "color-black",
    },
  ],
]

const blocksSectionData = [
  {
    id: 1,
    icon: caraouselIcon1,
    title: "User and Department Rules",
    description:
      "Spending rules defined by individual user, department, or vendor and applied automatically at every transaction with no manual oversight required.",
  },
  {
    id: 2,
    icon: caraouselIcon2,
    title: "Channel-Level Restrictions",
    description:
      "POS, online, ATM, and contactless channels enabled or disabled per card. An online-only card physically cannot be used at a POS terminal.",
  },
  {
    id: 3,
    icon: caraouselIcon3,
    title: "Define Your Limits",
    description:
      "Daily, weekly, or monthly limits set once and enforced automatically with no manual resets, no monitoring, and no intervention.",
  },
  {
    id: 4,
    icon: caraouselIcon4,
    title: "Instant Block and Reactivation",
    description:
      "Lost or compromised card? Instantly block or reactivate it from the dashboard with one click, no paperwork, no support tickets, no delay.",
  },
  {
    id: 5,
    icon: caraouselIcon5,
    title: "Maker-Checker Approval Flows",
    description:
      "Role-based approval workflows with complete accountability. Every transaction has a clear owner and a full audit trail.",
  },
]

export {
  intantActionData,
  spendAnalyticsData,
  cardType,
  allProductSections,
  counterHeadingData,
  statsData,
  productsData,
  stepsData,
  headingData,
  videoSubHeadingData,
  analyticData,
  blocksSectionData,
}
