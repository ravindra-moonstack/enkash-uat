import iconOne from "./img/auto-collect.svg"
import iconTwo from "./img/subsccribtion.svg"
import iconThree from "./img/enach.svg"
import iconFour from "./img/benifits-icon.svg"
import autoCollect from "./img/autoCollectImg.webp"
import subscribtion from "./img/subscribtionImg.webp"
import eNach from "./img/eNachImg.webp"
import policyIcon from "./img/policyIcon.svg"
import identifyIcon from "./img/identify.svg"
import detectIcon from "./img/detect.svg"
import monitorIcon from "./img/monitor.svg"
import customizeIcon from "./img/customize.svg"
import instantIcon from "./img/instant-card.svg"
import onboardingIcon from "./img/onboarding.svg"
import noThidPartyIcon from "./img/noThidParty.svg"
import diyControlIcon from "./img/diy-control.svg"
import slideFirst from "./img/card-use-img.svg"
import slideSecond from "./img/cardUsage.png"
import slideThird from "./img/cardLimit.png"
import slideFourth from "./img/block-unblock.png"
import slideFifth from "./img/approvals.png"
import autoCapture from "./img/auto-capture.svg"
import auditExpense from "./img/audit-expence.svg"
import reconcile from "./img/reconcile.svg"
import workflow from "./img/workflow.svg"
import approve from "./img/approve.svg"
import firstIcon from "./img/icon-one.svg"
import secondIcon from "./img/icon-two.svg"
import thirdIcon from "./img/icon-three.svg"
import fourthIcon from "./img/icon-four.svg"
import benfits from "./img/fourthIMG.webp"

import {
  costControlSavings,
  costControlSavingsIcon,
  fleetCardImg,
  fraudProtection,
  fraudProtectionIcon,
  fuelCardImg,
  purchesCardImg,
  realTimeExpense,
  realTimeExpenseIcon,
  sassCardImg,
  streamlinedReimbursement,
  streamlinedReimbursementIcon,
  tabIconFive,
  tabIconFour,
  tabIconOne,
  tabIconThree,
  tabIcontwo,
  termsAndConCardImg,
  virtualCardImg,
  wideAcceptanceNetwork,
  wideAcceptanceNetworkIcon,
} from "./img"
import { bg1, bg2, bg3, bg4, bg5 } from "../products/vouchers/img"

const dataSets = [
  {
    iconSrc: iconOne,
    imageSrc: autoCollect,
    altText: "Auto Collect ",
    title: "Instant Issuance & Reload",
    subtitle:
      "Issue cards instantly and refill balances as needed without delays. This feature ensures employees have continuous access to meal benefits without interruptions, improving their overall experience and satisfaction.",
  },
  {
    iconSrc: iconTwo,
    imageSrc: subscribtion,
    altText: "Setting up of budgets",
    title: "Expense Tracking & Reporting",
    subtitle:
      "Get a detailed view of spending patterns to optimize benefit plans and budgets. EnKash provides easy-to-use tools for monitoring transactions, making it simpler to manage meal benefits effectively and ensure compliance.",
  },
  {
    iconSrc: iconThree,
    imageSrc: eNach,
    altText: "Simplified expense submission",
    title: "Compliance and Security",
    subtitle:
      "Fully compliant with RBI guidelines and equipped with advanced fraud detection, Meal Cards* offer unparalleled security. Businesses can confidently provide meal benefits, knowing that every transaction is safe and reliable.",
  },
  {
    iconSrc: iconFour,
    imageSrc: benfits,
    altText: "Simplified expense submission",
    title: "Employee-Centric Benefits",
    subtitle:
      "Boost morale and productivity by offering flexible meal benefits that employees truly appreciate. Meal Cards are designed with user convenience, ensuring a positive experience at every step.",
  },
]

const cardData = [
  {
    value: "100%",
    title: "Transaction Success Rate",
  },
  {
    value: "99.9%",
    title: "Uptime",
  },
  {
    value: "100+",
    title: "Payment Options",
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
    icon: policyIcon,
  },
  {
    title: "24/7 Support",
    description: "We provide around-the-clock assistance whenever you need it.",
    icon: policyIcon,
  },
  {
    title: "Customizable",
    description: "Easily tailor the app to fit your unique workflow and needs.",
    icon: policyIcon,
  },
  {
    title: "Cloud Sync",
    description: "Access your data anywhere with secure cloud synchronization.",
    icon: policyIcon,
  },
  {
    title: "Intuitive Design",
    description: "A clean and simple interface that’s easy to navigate.",
    icon: policyIcon,
  },
]

const intantActionData = [
  {
    title: "Sign Up and KYC",
    description:
      "Log in to EnKash using your registered mobile number and complete your KYC.",
    icon: firstIcon,
  },

  {
    title: "Issuance",
    description: "Issue meal cards to employees with preloaded funds.",
    icon: secondIcon,
  },
  {
    title: "Alerts",
    description:
      " Employees will be notified via SMS, WhatsApp and email about the card updates.",
    icon: thirdIcon,
  },
  {
    title: "Card Activation",
    description:
      "Employees will be notified via SMS, WhatsApp, and e-mail about rewards and the redemption process.",
    icon: fourthIcon,
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
    title: "Instant card issuance",
    description: "without routing requests through banks",
    icon: instantIcon,
  },
  {
    title: "Faster onboarding",
    description: "and fewer compliance hurdles",
    icon: onboardingIcon,
  },
  {
    title: "No third-party delays",
    description: "or dependencies",
    icon: noThidPartyIcon,
  },
  {
    title: "DIY control",
    description: "over how your cards are issued, used, and managed",
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
    titleHtml: "Fuel Card",
    description:
      "Track and control fuel spends with real-time limits, spend visibility, and GST-compliant invoices.",
    cardImage: fuelCardImg,
  },
  {
    titleHtml: "Digital Marketing Card",
    description:
      "Simplify ad payments across platforms while staying within budget and preventing overspending.",
    cardImage: purchesCardImg,
  },
  {
    titleHtml: "SaaS Card",
    description:
      "Manage recurring SaaS subscriptions with auto-renewal tracking and vendor-wise expense control",
    cardImage: sassCardImg,
  },
  {
    titleHtml: "Payroll Card",
    description:
      "Pay employees, freelancers, or gig workers directly with zero bank dependency or delays.",
    cardImage: sassCardImg,
  },
  {
    titleHtml: "Virtual Card",
    description:
      "Instantly issue secure virtual cards for online purchases, with customizable limits and real-time tracking",
    cardImage: termsAndConCardImg,
  },
  {
    titleHtml: "Travel & Expense Card",
    description:
      "Streamline business travel spends—set budgets, track usage, and automate travel expense reconciliation.",
    cardImage: termsAndConCardImg,
  },

  {
    titleHtml: "Purchase Card",
    description:
      "Centralize vendor and business purchases with approval workflows, spend controls, and GST capture.",
    cardImage: virtualCardImg,
  },
  {
    titleHtml: "Fleet Card",
    description:
      "Digitize fleet expenses such as fuel, tolls, and repairs, while tracking usage per vehicle or driver.",
    cardImage: fleetCardImg,
  },
  {
    titleHtml: "Forex Card",
    description:
      "Enable safe and compliant international spends with multi-currency loading and real-time transaction control",
    cardImage: virtualCardImg,
  },
]

const slideUpData = [
  {
    title: "Set Your Rules",
    description:
      "Define spending rules based on individual users, departments, or specific vendors. Set limits, track usage, and ensure policy compliance at every level.",
    src: slideFirst,
    link: "",
  },
  {
    title: "Channel-level Controls",
    description:
      "Enable or disable specific transaction channels such as POS, online (e-commerce), or contactless payments. Prevent misuse by controlling how and where each card is used.",
    src: slideSecond,
    link: "",
  },
  {
    title: "Define Your Limits",
    description:
      "Set automated daily, weekly, or monthly spend caps for each card. Avoid overspending and enforce company-wide financial discipline without constant manual intervention.",
    src: slideThird,
    link: "",
  },
  {
    title: "Block/Unblock at Your Convenience",
    description:
      "Lost or compromised card? Instantly block or reactivate it from the dashboard with one click, no paperwork, no support tickets, no delay.",
    src: slideFourth,
    link: "",
  },
  {
    title: "Simplify Approval Flows",
    description:
      "Establish flexible approval workflows with role-based access. Enable maker-checker setups to maintain internal controls and ensure complete accountability on every transaction.",
    src: slideFifth,
    link: "",
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
const stackcardData = [
  {
    color: "#fff",
    icon: realTimeExpenseIcon,
    title: "Enjoy Ultimate Control",
    description:
      "Block merchant types, set daily/weekly/monthly spend limits, and restrict payment modes (ATM, POS, Online) - all in minutes.",
    image: realTimeExpense,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    color: "#eee",
    icon: fraudProtectionIcon,
    title: "Instantly Issue & Reload Cards",
    description:
      "Issue cards digitally to teams or individuals. Load or top up in one click via your centralized dashboard.",
    image: fraudProtection,
    buttonUrl: "/sales",
  },
  {
    color: "#fff",
    icon: streamlinedReimbursementIcon,
    title: "Real-Time Visibility",
    description:
      "Track every swipe the moment it happens. Spot anomalies, analyze trends, and take corrective action instantly.",
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    color: "#eee",
    icon: costControlSavingsIcon,
    title: "Get 360° Spend Analytics",
    description:
      "Get 360° reporting on who spent what, where, and why. Slice and dice by department, location, or category.",
    image: costControlSavings,
    buttonUrl: "/sales",
  },
  {
    color: "#fff",
    icon: wideAcceptanceNetworkIcon,
    title: "Seamlessly Reconcile",
    description:
      "Auto-categorize spends, attach invoices, and sync with your accounting system. Close your books faster—without chasing receipts.",
    image: wideAcceptanceNetwork,
    buttonUrl: "/sales/?source=expense_management",
  },
]

const progressData = [
  {
    itemArray: ["Meal Card"],
    title: "Meal Card",
    description:
      "Enable tax-saving meal benefits for employees with preloaded, compliant meal cards accepted at food outlets, canteens, and online platforms.",
    icon: tabIconOne,
    bgImage: bg1,
    url: "/meal-card",
  },
  {
    itemArray: ["Fuel Card"],
    title: "Fuel Card",
    description:
      "Optimize your fuel spends with cards restricted to fuel merchants only. Get complete visibility and prevent fuel misuse at the pump.",
    icon: tabIcontwo,
    bgImage: bg2,
    url: "/fuel-card",
  },
  {
    itemArray: ["Digital Marketing Card"],
    title: "Digital Marketing Card",
    description:
      "Manage campaign budgets with dedicated prepaid cards for ad platforms like Google, Meta, and LinkedIn - eliminating overages.",
    icon: tabIconThree,
    bgImage: bg3,
    url: "/digital-marketing-card",
  },
  {
    itemArray: ["Fleet & Logistics Card"],
    title: "Logistics & Supply Chain",
    description:
      "Give your drivers the power to pay without the risk of cash misuse. Track fuel, tolls, and repair spends in real-time.",
    icon: tabIconFour,
    bgImage: bg4,
    url: "/sales/?source=prepaid-card",
    buttonText: "Get Started",
  },
  {
    itemArray: ["Payroll Card"],
    title: "Payroll Card",
    description:
      "Pay employees and gig workers instantly: no bank hassles, no KYC delays. Load salaries, bonuses, or incentives directly to payroll cards.",
    icon: tabIconFive,
    bgImage: bg5,
    url: "/sales/?source=prepaid-card",
    buttonText: "Get Started",
  },
]

export {
  dataSets,
  cardsData,
  intantActionData,
  spendAnalyticsData,
  rbiData,
  corporateCardData,
  cardData,
  cardType,
  slideUpData,
  allProductSections,
  stackcardData,
  progressData,
}
