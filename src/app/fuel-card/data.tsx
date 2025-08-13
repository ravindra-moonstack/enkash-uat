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
  digitalCardImg,
  fraudProtection,
  fraudProtectionIcon,
  mealCardImg,
  payrollCardImg,
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

const stackcardData = [
  {
    color: "#fff",
    icon: realTimeExpenseIcon,
    title: "Real-Time Expense Tracking",
    description:
      "With the Prepaid fuel Cards*, you can monitor fuel expenses as they occur, providing complete visibility and control. All transactions are logged in real time, allowing you to track fuel usage efficiently. This means you can quickly identify spending patterns, prevent budget overruns, and make data-driven decisions to optimize your fuel budget.",
    image: realTimeExpense,
    buttonUrl: "/sales/",
  },
  {
    color: "#eee",
    icon: fraudProtectionIcon,
    title: "Fraud Protection",
    description:
      "Fuel Cards are equipped with robust security features, including PIN protection and real-time alerts for any suspicious activity. These security measures ensure that only authorized transactions are processed, significantly reducing the risk of misuse or fraudulent charges. You can block or freeze cards instantly to prevent unauthorized access, keeping your business safe.",
    image: fraudProtection,
    buttonUrl: "/sales",
  },
  {
    color: "#fff",
    icon: streamlinedReimbursementIcon,
    title: "Streamlined Reimbursement",
    description:
      "Say goodbye to the traditional, cumbersome reimbursement process. Fuel Cards* eliminate the need for employees to submit fuel receipts or wait for reimbursement approvals. All fuel-related expenses are automatically managed and settled through the cards, making the entire process faster, more efficient, and less prone to errors, allowing your finance team to focus on more strategic tasks.",
    image: streamlinedReimbursement,
    buttonUrl: "/sales",
  },
  {
    color: "#eee",
    icon: costControlSavingsIcon,
    title: "Cost Control & Savings",
    description:
      "Fuel Cards* allow you to set customizable daily or monthly spending limits for each employee, ensuring that fuel expenses stay within your budget. You can easily monitor fuel consumption against approved limits, providing greater control over spending. By optimizing usage patterns and identifying cost-saving opportunities, your business can significantly reduce unnecessary fuel expenses.",
    image: costControlSavings,
    buttonUrl: "/sales",
  },
  {
    color: "#fff",
    icon: wideAcceptanceNetworkIcon,
    title: "Wide Acceptance Network",
    description:
      "Fuel Cards* are accepted at a vast network of authorized fuel stations, giving your employees the freedom to refuel at a variety of locations, both locally and nationwide. This broad acceptance ensures convenience, reduces the risk of out-of-network charges, and guarantees that your business is always covered wherever your team travels, whether near or far.",
    image: wideAcceptanceNetwork,
    buttonUrl: "/sales",
  },
]
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
    title: "Login",
    description: "Log in or register on the EnKash platform",
    icon: firstIcon,
  },

  {
    title: "Issue",
    description: "The card is ready to use post KYC is done",
    icon: secondIcon,
  },
  {
    title: "Notify",
    description: "Send SMS or email notifications to employees",
    icon: thirdIcon,
  },
  {
    title: "Activate",
    description: "The card is ready to use post KYC is done",
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
    titleHtml: "Meal Card",
    description:
      "Give tax-saving meal benefits to employees with easy-to-use, digital meal cards accepted nationwide.",
    cardImage: mealCardImg,
    linkUrl: "/meal-card",
  },
  {
    titleHtml: "Digital Marketing Card",
    description:
      "Manage online ad spends across platforms with preset limits and real-time spend visibility and control.",
    cardImage: digitalCardImg,
    linkUrl: "/digital-marketing-card",
  },
  {
    titleHtml: "SaaS Card",
    description:
      "Centralize and manage software subscriptions easily with cards made for recurring SaaS payments and renewals.",
    cardImage: sassCardImg,
    linkUrl: "/sass-card",
  },
  {
    titleHtml: "Payroll Card",
    description:
      "Pay employees, freelancers, or gig workers directly with zero bank dependency or delays.",
    cardImage: payrollCardImg,
  },
  {
    titleHtml: "Virtual Card",
    description:
      "Generate secure, one-time or recurring virtual cards for safer, faster, and trackable online payments.",
    cardImage: virtualCardImg,
    linkUrl: "/virtual-card",
  },
  {
    titleHtml: "T&E Card",
    description:
      "Manage travel & entertainment spends with smart controls, real-time tracking, and seamless",
    cardImage: termsAndConCardImg,
    linkUrl: "/travel-and-expense-card",
  },

  {
    titleHtml: "Purchase Card",
    description:
      "Pre-approved cards that help manage vendor payments and operational purchases for effortless procurement",
    cardImage: purchesCardImg,
    linkUrl: "/purchase-card",
  },
  {
    titleHtml: "Fleet Card",
    description:
      "Digitize fleet expenses such as fuel, tolls, repairs—while tracking usage per vehicle or driver.",
    cardImage: purchesCardImg,
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
  stackcardData,
}
