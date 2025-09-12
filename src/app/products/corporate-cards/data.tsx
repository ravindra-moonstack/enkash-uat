import {
  clockIcon,
  fuelCardImg,
  mealCardImg,
  multiCardIcon,
  purchesCardImg,
  realTimeTrakingIcon,
  sassCardImg,
  securityIcon,
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
  instantIcon,
  onboardingIcon,
  noThidPartyIcon,
  diyControlIcon,
  autoCapture,
  auditExpense,
  reconcile,
  workflow,
  approve,
} from "./img"

const cardData = [
  {
    icon: clockIcon,
    title: "Instant Card Issuance",
  },
  {
    icon: multiCardIcon,
    title: "Multiple Card Options",
  },
  {
    icon: realTimeTrakingIcon,
    title: "Real-time Tracking & Controls",
  },
  {
    icon: securityIcon,
    title: "100% RBI-compliant",
  },
]

const intantActionData = [
  {
    title: "Live Account Overview",
    description:
      "Track balances, credit limits, billing cycles, and dues in real-time.",
    icon: overviewIcon,
  },
  {
    title: "Granular Card Controls",
    description:
      "Set custom limits, manage usage channels, and block or reissue cards with just a click.",
    icon: controlIcon,
  },
  {
    title: "Transaction Intelligence",
    description:
      "Drill down into each transaction by category, user, time, and channel.",
    icon: intelligenceIcon,
  },
  {
    title: "Statement Clarity",
    description:
      "Download detailed, filterable statements for individual or consolidated accounts.",
    icon: statementIcon,
  },
  {
    title: "One-Click Settlements",
    description:
      "Make payments across cards with flexible split options by total, minimum due, or custom logic.",
    icon: oneClickIcon,
  },
]

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

const rbiData = [
  {
    title: "Instant ",
    description:
      "Instant card issuance without routing requests through banks.",
    icon: instantIcon,
  },
  {
    title: " Fast",
    description: "Faster onboarding and fewer compliance hurdles.",
    icon: onboardingIcon,
  },
  {
    title: "No Delays",
    description: "No third-party delays or dependencies.",
    icon: noThidPartyIcon,
  },
  {
    title: "Customizable ",

    description:
      "DIY control over how your cards are issued, used, and managed.",
    icon: diyControlIcon,
  },
]

const corporateCardData = [
  {
    title: " Reloadable with full/minimum KYC options",
  },
  {
    title: " Set daily, monthly, and category-based limits",
  },
  {
    title: "Instant card creation, blocking, & top-up from a single dashboard",
  },
  {
    title: " Real-time tracking, smart analytics, and full policy compliance",
  },
  {
    title: "Supports digital wallets with future-ready UPI integration",
  },
]

const cardType = [
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
      "Manage travel & entertainment spends with smart controls, real-time tracking, and seamless",
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
      "Pre-approved cards that help manage vendor payments and operational purchases for effortless procurement",
    cardImage: purchesCardImg,
    linkUrl: "/purchase-card",
  },

  {
    titleHtml: "SaaS Card",
    description:
      "Centralize and manage software subscriptions easily with cards made for recurring SaaS payments and renewals.",
    cardImage: sassCardImg,
    linkUrl: "/saas-card",
  },
]

const allProductSections = [
  {
    title: "Expense Management",
    subtitle: "Manage every spend effortlessly",
    items: [
      {
        title: "Auto-capture receipts",
        description: "and match them with transactions",
        image: autoCapture,
        link: "/receipts/",
      },
      {
        title: "View, approve, and audit expenses",
        description: "all in one place",
        image: auditExpense,
        link: "/payment-page/",
      },
    ],
  },
  {
    title: "Reconciliation & Policy",
    subtitle: "Control and visibility in real time",
    items: [
      {
        title: "Auto-reconcile",
        description: "with your accounting software",
        image: reconcile,
        link: "/payment-button/",
      },
      {
        title: "Set policy-driven workflows",
        description: "that apply at the swipe level",
        image: workflow,
        link: "/qr-code/",
      },
      {
        title: "Track and approve spends",
        description: "on the go via mobile",
        image: approve,
        link: "/auto-collect/",
      },
    ],
  },
]

export {
  intantActionData,
  spendAnalyticsData,
  rbiData,
  corporateCardData,
  cardData,
  cardType,
  allProductSections,
}
