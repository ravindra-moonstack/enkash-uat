import iconOne from "./img/predifinedIcon.svg"
import iconTwo from "./img/centerlisedIcon.svg"
import iconThree from "./img/notificationIcon.svg"
import iconFour from "./img/reconcilationIcon.svg"
import iconFive from "./img/secureIcon.svg"
import autoCollect from "./img/autoCollectImg.webp"
import subscribtion from "./img/subscribtionImg.webp"
import eNach from "./img/eNachImg.webp"
import policyIcon from "./img/policyIcon.svg"
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
import benfits from "./img/fourthIMG.webp"

import {
  costControlSavings,
  costControlSavingsIcon,
  fleetCardImg,
  fraudProtection,
  fraudProtectionIcon,
  fuelCardImg,
  mealCardImg,
  purchesCardImg,
  realTimeExpense,
  realTimeExpenseIcon,
  sassCardImg,
  streamlinedReimbursement,
  streamlinedReimbursementIcon,
  termsAndConCardImg,
  virtualCardImg,
  wideAcceptanceNetwork,
  wideAcceptanceNetworkIcon,
} from "."

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
    title: "Issuance",
    description:
      "Issue a corporate card for digital marketing and set customized limits for campaign expenditure.",
    icon: firstIcon,
  },

  {
    title: "Control",
    description:
      "Manage your expenditure with a predefined usage policy to prevent misuse of cards",
    icon: secondIcon,
  },
  {
    title: "Connect",
    description:
      "Link your card to digital marketing platforms to have a complete overview of all your digital marketing expenses",
    icon: thirdIcon,
  },
]

const spendAnalyticsData = [
  {
    title: "Predefined Spending Limits",
    description:
      "Control your team’s marketing expenses by setting customizable usage limits for every card.",
    icon: iconOne,
  },

  {
    title: "Centralized Dashboard",
    description:
      "View and manage all transactions, approvals, and reports from a single, intuitive platform.",
    icon: iconTwo,
  },
  {
    title: "Real-Time Alerts and Notifications",
    description:
      "Stay updated with instant alerts for every transaction, ensuring complete transparency.",
    icon: iconThree,
  },
  {
    title: "Automated Reconciliation",
    description:
      "Simplify accounting with auto-generated reports and streamlined expense categorization for easy reconciliation.",
    icon: iconFour,
  },
  {
    title: "Secure and Compliant Transactions",
    description:
      "Benefit from robust security features and ensure compliance with financial regulations.",
    icon: iconFive,
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
    titleHtml: "Meal Card",
    description:
      "Give tax-saving meal benefits to employees with easy-to-use, digital meal cards accepted nationwide.",
    cardImage: mealCardImg,
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

const stackcardData = [
  {
    color: "#fff",
    icon: realTimeExpenseIcon,
    title: "Simplified Budget Allocation",
    description:
      "Managing multiple marketing campaigns can be overwhelming, but with the Digital Marketing Card, you can easily allocate budgets to individual campaigns. Load funds directly onto the card and assign specific amounts for each campaign, ensuring effortless budget distribution.",
    image: realTimeExpense,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    color: "#eee",
    icon: fraudProtectionIcon,
    title: "Real-Time Expense Tracking",
    description:
      "Stay on top of every transaction with EnKash’s real-time expense-tracking feature. Instantly monitor your marketing spend as it happens, gaining valuable insights into your campaign's financial health. This enables you to make adjustments on the fly, ensuring that you don’t overspend and stay within your budget.",
    image: fraudProtection,
    buttonUrl: "/sales",
  },
  {
    color: "#fff",
    icon: streamlinedReimbursementIcon,
    title: "Prevent Overspending",
    description:
      "Overspending on campaigns can be costly. With the Digital Marketing Card, you can set predefined spending limits for each card. This feature ensures your team stays within budget, preventing unauthorized expenses and helping you maintain financial discipline for more efficient and cost-effective marketing campaigns.",
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    color: "#eee",
    icon: costControlSavingsIcon,
    title: "Simplified Subscription Management",
    description:
      "Managing recurring subscriptions for marketing tools, software, or ad platforms becomes effortless with EnKash. Automate payments for these subscriptions with clear schedules and centralized tracking. You’ll never miss a payment, and you'll save time that would otherwise be spent on manual invoicing and reconciliation.",
    image: costControlSavings,
    buttonUrl: "/sales",
  },
  {
    color: "#fff",
    icon: wideAcceptanceNetworkIcon,
    title: "Customizable Usage Policies",
    description:
      "Tailor your spending policies to fit your unique marketing needs. With the Digital Marketing Card, you can enforce specific restrictions, such as category-based spending limits or vendor-specific constraints. This ensures that every expense aligns with your business’s objectives and helps maximize the effectiveness of your marketing efforts.",
    image: wideAcceptanceNetwork,
    buttonUrl: "/sales/?source=expense_management",
  },
];

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
  stackcardData
}
