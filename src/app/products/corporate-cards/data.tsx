import iconOne from "./img/icon-one.svg"
import iconTwo from "./img/icon-two.svg"
import iconThree from "./img/icon-three.svg"
import iconFour from "./img/icon-four.svg"
import iconFive from "./img/icon-five.svg"
import iconSix from "./img/icon-six.svg"
import policyIcon from "./img/policyIcon.svg"
import overviewIcon from "./img/overview.svg"
import controlIcon from "./img/control.svg"
import intelligenceIcon from "./img/intelligence.svg"
import statementIcon from "./img/statement.svg"
import oneClickIcon from "./img/oneClick.svg"
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

const blogData = [
  {
    image:
      "https://blogs.enkash.com/wp-content/uploads/2022/09/blog_25.a957f315.jpg",
    imageAlt: "Spend Management Platform: An Expense Management Strategy",
    title: "Spend Management Platform: An Expense Management Strategy",
    date: "Aug 03, 2023",
    description:
      "When you think about working capital management or spend management platform, you think of managing expenses that are incurred in your business over a quarter of a year...",
    link: "/resources/blog/spend-management-software-for-smarter-spends/",
  },
  {
    image:
      "https://blogs.enkash.com/wp-content/uploads/2023/04/Insights-with-expense-management.jpg",
    imageAlt:
      "Gain Valuable Insights into Your Finances with Expense Management",
    title: "Gain Valuable Insights into Your Finances with Expense Management",
    date: "Apr 07, 2023",
    description:
      "Managing expenses is an essential aspect of personal and professional financial management. Keeping track of expenses can provide valuable insights into your finances, including where...",
    link: "/resources/blog/importance-of-expense-management/",
  },
  {
    image:
      "https://blogs.enkash.com/wp-content/uploads/2023/02/Improve-your-cash-flow-with-the-best-expense-management-software.jpg",
    imageAlt:
      "Improve Your Cash Flow with The Best Expense Management Software",
    title: "Improve Your Cash Flow with The Best Expense Management Software",
    date: "Feb 22, 2023",
    description:
      "The foundation for any business’s efficient operation consists of creating precise budget, keeping close check on the business expenses, and streamlining cash flow. We cannot overstate...",
    link: "/resources/blog/best-expense-management-software/",
  },
]

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
    title: "Real-time tracking & controls",
  },
  {
    icon: securityIcon,
    title: "100% RBI-compliant",
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
    title: "DIY ",
    title2:"control",
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
    titleHtml: "Meal Card",
    description:
      "Give tax-saving meal benefits to employees with easy-to-use, digital meal cards accepted nationwide.",
    cardImage: mealCardImg,
  },
  {
    titleHtml: "Fuel Card",
    description:
      "Control and track fuel expenses with prepaid cards designed for fleet and travel-related spending.",
    cardImage: fuelCardImg,
  },
  {
    titleHtml: "T&E Card",
    description:
      "Manage travel & entertainment spends with smart controls, real-time tracking, and seamless",
    cardImage: termsAndConCardImg,
  },
  {
    titleHtml: "Virtual Card",
    description:
      "Generate secure, one-time or recurring virtual cards for safer, faster, and trackable online payments.",
    cardImage: termsAndConCardImg,
  },
  {
    titleHtml: "Purchase Card",
    description:
      "Pre-approved cards that help manage vendor payments and operational purchases for effortless procurement",
    cardImage: virtualCardImg,
  },
  {
    titleHtml: "Digital Marketing Card",
    description:
      "Manage online ad spends across platforms with preset limits and real-time spend visibility and control.",
    cardImage: purchesCardImg,
  },
  {
    titleHtml: "SaaS Card",
    description:
      "Centralize and manage software subscriptions easily with cards made for recurring SaaS payments and renewals.",
    cardImage: sassCardImg,
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
        link: "/payment-links/",
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
        link: "/qr-codes/",
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
  blogData,
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
}
