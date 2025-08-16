import iconOne from "./img/auto-collect.svg"
import iconTwo from "./img/subsccribtion.svg"
import iconThree from "./img/enach.svg"
import iconFour from "./img/benifits-icon.svg"
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
import sliderOne from "./img/sliderOne.svg"
import sliderTwo from "./img/sliderTwo.svg"
import sliderThree from "./img/sliderThree.svg"
import sliderFour from "./img/sliderFour.svg"
import sliderFive from "./img/sliderFive.svg"
import firstIcon from "./img/icon-one.svg"
import secondIcon from "./img/icon-two.svg"
import thirdIcon from "./img/icon-three.svg"
import fourthIcon from "./img/icon-four.svg"
import benfits from "./img/fourthIMG.webp"

import {
  digitalCardImg,
  fleetCardImg,
  fuelCardImg,
  mealCardImg,
  termsAndConCardImg,
  sassCardImg,
  virtualCardImg,
} from "."
import { payrollCardImg } from "../fuel-card"

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
    title: "Simplify Procurement ",
    description:
      "Issue purchase cards to authorized employees for quick, secure purchasing.",
    icon: firstIcon,
  },

  {
    title: "Set Limits",
    description:
      "Customize limits based on employee roles, departments, or project needs.",
    icon: secondIcon,
  },
  {
    title: "Track Expenses",
    description:
      "View detailed reports and track spending across departments with real-time insights.",
    icon: thirdIcon,
  },
  {
    title: "Optimize Decisions",
    description:
      "Use spending data to inform purchasing decisions and improve supplier terms.",
    icon: fourthIcon,
  },
]

const spendAnalyticsData = [
  {
    title: "Subscription Management",
    description:
      "Keep SaaS payments under control with one-time or recurring payment cards.",
    icon: iconOne,
  },

  {
    title: "Employee Expenses",
    description:
      "Keep SaaS payments under control with one-time or recurring payment cards.",
    icon: iconTwo,
  },
  {
    title: "Vendor Payments",
    description:
      "Allocate separate cards for each vendor to simplify expense tracking and reconciliation.",
    icon: iconThree,
  },
  {
    title: "Travel & Entertainment",
    description:
      "Manage travel-related expenses efficiently with real-time monitoring.",
    icon: iconFour,
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
     linkUrl: "/fuel-card",
  },
  {
    titleHtml: "Digital Marketing Card",
    description:
      "Simplify ad payments across platforms while staying within budget and preventing overspending.",
    cardImage: digitalCardImg,
     linkUrl: "/digital-marketing-card",
  },
  {
    titleHtml: "Saas Card",
    description:
      "Manage recurring SaaS subscriptions with auto-renewal tracking and vendor-wise expense control",
    cardImage: sassCardImg,
     linkUrl: "/saas-card",

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
      "Instantly issue secure virtual cards for online purchases, with customizable limits and real-time tracking",
    cardImage: virtualCardImg,
     linkUrl: "/virtual-card",
  },
  {
    titleHtml: "Travel & Expense Card",
    description:
      "Streamline business travel spends—set budgets, track usage, and automate travel expense reconciliation.",
    cardImage: termsAndConCardImg,
     linkUrl: "/digital-marketing-card",
  },
  {
    titleHtml: "Meal Card",
    description:
      "Offer tax-free meal benefits to employees with wide acceptance and full usage transparency.",
    cardImage: mealCardImg,
  },

  {
    titleHtml: "Fleet Card",
    description:
      "Digitize fleet expenses such as fuel, tolls, and repairs, while tracking usage per vehicle or driver.",
    cardImage: fleetCardImg,
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
    title: "Reconciliation & Policy",
    subtitle: "Control and visibility in real time",
    items: [
      {
        title: "Streamlined Procurement",
        description:
          "Simplify the purchase process and reduce the burden of paperwork.",
        image: sliderOne,
        link: "/payment-button/",
      },
      {
        title: "Customizable Spending Limits",
        description: "Control how much your team spends and on what.",
        image: sliderTwo,
        link: "/qr-codes/",
      },
      {
        title: "Real-Time Transaction Data",
        description:
          "Monitor expenses as they happen, allowing for immediate action.",
        image: sliderThree,
        link: "/auto-collect/",
      },
      {
        title: "Improved Supplier Negotiations",
        description:
          "Use spending data to negotiate better deals with suppliers.",
        image: sliderFour,
        link: "/auto-collect/",
      },
      {
        title: "Policy Compliance",
        description: "Enforce company policies directly through card controls.",
        image: sliderFive,
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
