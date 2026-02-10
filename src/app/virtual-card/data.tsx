import iconOne from "./img/subscribtionIcon.svg"
import iconTwo from "./img/employeeIcon.svg"
import iconThree from "./img/vendorIcon.svg"
import iconFour from "./img/travelExpenceIcon.svg"
import sliderOneIcon from "./img/sliderOneIcon.svg"
import sliderTwoIcon from "./img/sliderTwoIcon.svg"
import sliderThreeIcon from "./img/sliderThreeIcon.svg"
import sliderFourIcon from "./img/sliderFourIcon.svg"
import sliderFiveIcon from "./img/sliderFiveIcon.svg"
import firstIcon from "./img/icon-one.svg"
import secondIcon from "./img/icon-two.svg"
import thirdIcon from "./img/icon-three.svg"
import fourthIcon from "./img/icon-four.svg"

import {
  costControlSavings,
  costControlSavingsIcon,
  digitalCardImg,
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
  wideAcceptanceNetwork,
  wideAcceptanceNetworkIcon,
} from "./img"
import { TStackCardsProp } from "@/src/types"
import { CardData } from "@/src/components/management-card"

const intantActionData = [
  {
    title: "Create Your Business Account",
    description: "Sign up on EnKash and complete quick business verification.",
    icon: firstIcon,
  },

  {
    title: "Issue Virtual Cards Instantly ",
    description: "Create virtual cards for employees, vendors, or specific use cases within minutes.",
    icon: secondIcon,
  },
  {
    title: "Set Spend Controls",
    description: "Define limits, allowed categories, validity periods, and usage rules.",
    icon: thirdIcon,
  },
  {
    title: "Pay Online Securely",
    description:
      "Use virtual cards for subscriptions, vendor payments, ads, travel bookings, and more.",
    icon: fourthIcon,
  },
]

const spendAnalyticsData = [
  {
    title: "Subscription Management",
    description:
      "Control SaaS renewals and recurring payments with card-level limits and validity controls.",
    icon: iconOne,
  },

  {
    title: "Employee Expenses",
    description:
      "Enable employees to spend without reimbursements or policy violations.",
    icon: iconTwo,
  },
  {
    title: "Vendor Payments",
    description:
      "Assign individual virtual cards to vendors for clean reconciliation and audit-ready records.",
    icon: iconThree,
  },
  {
    title: "Travel and Entertainment",
    description:
      "Manage online travel bookings with defined budgets and real-time tracking.",
    icon: iconFour,
  },
]

const cardType: CardData[] = [
  {
    theme: "black",
    whiteTitle: "Fuel Card",
    description:
      "Track and control fuel spends with vehicle-wise limits, real-time usage visibility, and GST-ready reporting.",
    cardImage: fuelCardImg,
    linkUrl: "/fuel-card",
  },
  {
    theme: "black",
    whiteTitle: "Digital Marketing Card",
    description:
      "Manage ad spends across platforms with fixed budgets, spend controls, and clear campaign-level visibility.",
    cardImage: digitalCardImg,
    linkUrl: "/digital-marketing-card",
  },
  {
    theme: "black",
    whiteTitle: "SaaS Card",
    description:
      "Control recurring SaaS subscriptions with vendor-wise limits, renewal tracking, and centralised expense visibility.",
    cardImage: sassCardImg,
    linkUrl: "/saas-card",
  },
  {
    theme: "black",
    whiteTitle: "Meal Card",
    description:
      "Offer compliant meal benefits with controlled usage, wide acceptance, and transparent spend tracking.",
    cardImage: mealCardImg,
    linkUrl: "/meal-card",
  },
  {
    theme: "black",
    whiteTitle: "Travel & Expense Card",
    description:
      "Manage business travel and online bookings with predefined budgets, controls, and real-time monitoring.",
    cardImage: termsAndConCardImg,
    linkUrl: "/travel-and-expense-card",
  },
  {
    theme: "black",
    whiteTitle: "Purchase Card",
    description:
      "Centralise vendor and operational purchases with approval workflows, spend limits, and easy reconciliation.",
    cardImage: purchesCardImg,
    linkUrl: "/purchase-card",
  },
  {
    theme: "black",
    whiteTitle: "Gift Card",
    description:
      "Distribute digital rewards or incentives instantly with controlled issuance, tracking, and redemption visibility.",
    cardImage: fleetCardImg,
    linkUrl: "/gift-card",
  },
]

const allProductSections = [
  {
    title: "Expense Management",
    subtitle: "Manage every spend effortlessly",
    items: [
      {
        title: "Bank-Grade Security ",
        description: "Enterprise-grade encryption and card-level controls.",
        image: sliderOneIcon,
        link: "/payment-links/",
      },
      {
        title: "Instant Access",
        description: "No waiting periods or manual approvals.",
        image: sliderTwoIcon,
        link: "/payment-page/",
      },
    ],
  },
  {
    title: "Reconciliation & Policy",
    subtitle: "Control and visibility in real time",
    items: [
      {
        title: "Transparent Pricing",
        description: "No hidden fees or surprise charges.",
        image: sliderThreeIcon,
        link: "/payment-button/",
      },
      {
        title: "Accounting Ready",
        description: "Easy integration with ERP and accounting tools.",
        image: sliderFourIcon,
        link: "/qr-code/",
      },
      {
        title: "Built to Scale",
        description: "Unlimited virtual cards as your business grows.",
        image: sliderFiveIcon,
        link: "/auto-collect/",
      },
    ],
  },
]
const stackcardData: TStackCardsProp = [
  {
    icon: realTimeExpenseIcon,
    title: "Reduce Business Costs with Smarter Payment Control",
    description:
      "Eliminate the costs associated with physical card issuance, replacement, and maintenance. Virtual prepaid cards help reduce operational overhead while advanced controls minimise unauthorised or non-compliant spending.",
    image: realTimeExpense,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    icon: fraudProtectionIcon,
    title: "Stay in Control with Real-Time Expense Insights",
    description:
      "Monitor every virtual card transaction as it happens through an intuitive dashboard. Gain clear visibility into spending patterns to improve budgeting, approvals, and financial decision-making.",
    image: fraudProtection,
    buttonUrl: "/sales",
  },
  {
    icon: streamlinedReimbursementIcon,
    title: "Tailor Virtual Cards to Your Business Needs",
    description:
      "Create virtual cards for specific purposes such as vendor payments, subscriptions, marketing spends, or travel expenses. Set card-level limits and policies to ensure spends remain aligned with business rules.",
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    icon: costControlSavingsIcon,
    title: "Strengthen Vendor Relationships with Timely Payments",
    description:
      "Ensure reliable and secure payments to vendors using dedicated virtual prepaid cards. Faster, predictable payments improve trust while simplifying reconciliation for finance teams.",
    image: costControlSavings,
    buttonUrl: "/sales",
  },
  {
    icon: wideAcceptanceNetworkIcon,
    title: "Complete Expense Oversight from One Dashboard",
    description:
      "Manage multiple virtual cards through a centralised interface. Instantly view transactions, modify limits, block cards, or cancel usage while retaining full visibility across teams and vendors.",
    image: wideAcceptanceNetwork,
    buttonUrl: "/sales/?source=expense_management",
  },
]

export {
  intantActionData,
  spendAnalyticsData,
  cardType,
  allProductSections,
  stackcardData,
}
