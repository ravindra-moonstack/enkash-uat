import iconOne from "./img/auto-collect.svg"
import iconTwo from "./img/subsccribtion.svg"
import iconThree from "./img/enach.svg"
import iconFour from "./img/benifits-icon.svg"
import iconFive from "./img/audit-ready.svg"
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
  costControlSavings,
  costControlSavingsIcon,
  digitalCardImg,
  fleetCardImg,
  fraudProtection,
  fraudProtectionIcon,
  fuelCardImg,
  integrationAudit,
  integrationAuditIcon,
  mealCardImg,
  payrollCarddImg,
  realTimeExpense,
  realTimeExpenseIcon,
  sassCardImg,
  seemlessIntegration,
  seemlessIntegrationIcon,
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
    title: "Create an Account ",
    description: "Register your business and verify your credentials.",
    icon: firstIcon,
  },

  {
    title: "Customize Cards",
    description:
      "Tailor cards for specific functions with unique spending rules.",
    icon: secondIcon,
  },
  {
    title: "Monitor Usage",
    description: "Use our platform to track spending and maintain control.",
    icon: thirdIcon,
  },
  {
    title: "Make Payments",
    description: "Pay vendors, manage subscriptions, and more with ease.",
    icon: fourthIcon,
  },
]

const spendAnalyticsData = [
  {
    title: "Full Control:",
    description:
      " Manage spending with detailed transaction insights and adjustable limits.",
    icon: iconOne,
  },

  {
    title: "Cost Efficiency:",
    description:
      " Avoid overspending and gain better visibility into expenses.",
    icon: iconTwo,
  },
  {
    title: "Improved Security: ",
    description:
      "Block or disable cards instantly to prevent unauthorized usage.",
    icon: iconThree,
  },
  {
    title: "Vendor Trust:",
    description: " Enable timely payments and improve business relationships.",
    icon: iconFour,
  },
  {
    title: "Audit Ready:",
    description:
      "  Automated processes ensure clear documentation and compliance.",
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
    cardImage: payrollCarddImg,
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
    linkUrl: "/travel-and-expense-card",
  },
  {
    titleHtml: "Meal Card",
    description:
      "Offer tax-free meal benefits to employees with wide acceptance and full usage transparency.",
    cardImage: mealCardImg,
    linkUrl: "/meal-card",
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
        link: "/qr-code/",
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

const stackcardData = [
  {
    color: "#fff",
    icon: realTimeExpenseIcon,
    title: "Purpose-Made Cards for Every Need",
    description:
      "Issue cards specifically designed for your unique use cases, such as travel, SaaS, or marketing campaigns. Configure individual card settings to match your organization’s requirements.",
    image: realTimeExpense,
    buttonUrl: "/sales",
  },
  {
    color: "#eee",
    icon: fraudProtectionIcon,
    title: "Precise Spending Controls",
    description:
      "Define spending rules for teams or individuals. Customize limits based on categories, amounts, or timeframes to maintain budget discipline.",
    image: fraudProtection,
    buttonUrl: "/sales",
  },
  {
    color: "#fff",
    icon: streamlinedReimbursementIcon,
    title: "Real-Time Monitoring",
    description:
      "Track transactions as they happen. Gain instant insights into where and how funds are being used, ensuring better financial decisions.",
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    color: "#eee",
    icon: costControlSavingsIcon,
    title: "Built-In Approval Workflows",
    description:
      "Simplify internal processes with predefined approval workflows that align with company policies. Save time and reduce repetitive tasks.",
    image: costControlSavings,
    buttonUrl: "/sales",
  },
  {
    color: "#eee",
    icon: wideAcceptanceNetworkIcon,
    title: "Enhanced Vendor Payments",
    description:
      "Ensure timely payments to vendors, strengthening business relationships and unlocking the potential for better payment terms.",
    image: wideAcceptanceNetwork,
    buttonUrl: "/sales",
  },
  {
    color: "#eee",
    icon: integrationAuditIcon,
    title: "Integrated Audit Support",
    description:
      "Keep financial operations transparent and compliant with automated reconciliation and comprehensive transaction records.",
    image: integrationAudit,
    buttonUrl: "/sales",
  },
  {
    color: "#eee",
    icon: seemlessIntegrationIcon,
    title: "Seamless Integration",
    description:
      "Easily connect with popular accounting tools like Tally and Zoho to simplify data management and reporting.",
    image: seemlessIntegration,
    buttonUrl: "/sales",
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
}
