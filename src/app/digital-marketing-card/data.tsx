import iconOne from "./img/predifinedIcon.svg"
import iconTwo from "./img/centerlisedIcon.svg"
import iconThree from "./img/notificationIcon.svg"
import iconFour from "./img/reconcilationIcon.svg"
import iconFive from "./img/secureIcon.svg"
import firstIcon from "./img/icon-one.svg"
import secondIcon from "./img/icon-two.svg"
import thirdIcon from "./img/icon-three.svg"

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
} from "./img"
import { payrollCardImg } from "../fuel-card/img"
import { TStackCardsProp } from "@/src/types"

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
      "Manage your expenditure with a predefined usage policy to prevent misuse of cards.",
    icon: secondIcon,
  },
  {
    title: "Connect",
    description:
      "Link your card to digital marketing platforms to have a complete overview of all your digital marketing expenses.",
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

const cardType = [
  {
    titleHtml: "Fuel Card",
    description:
      "Track and control fuel spends with real-time limits, spend visibility, and GST-compliant invoices.",
    cardImage: fuelCardImg,
    linkUrl: "/fuel-card",
  },
  {
    titleHtml: "Meal Card",
    description:
      "Give tax-saving meal benefits to employees with easy-to-use, digital meal cards accepted nationwide.",
    cardImage: mealCardImg,
    linkUrl: "/meal-card",
  },

  {
    titleHtml: "SaaS Card",
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
    linkUrl: "/sales/?source=digital-marketing-card",
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
    titleHtml: "Purchase Card",
    description:
      "Centralize vendor and business purchases with approval workflows, spend controls, and GST capture.",
    cardImage: purchesCardImg,
    linkUrl: "/purchase-card",
  },
  {
    titleHtml: "Fleet Card",
    description:
      "Digitize fleet expenses such as fuel, tolls, and repairs, while tracking usage per vehicle or driver.",
    cardImage: fleetCardImg,
    linkUrl: "/sales/?source=digital-marketing-card",
  },
]

const stackcardData: TStackCardsProp = [
  {
    
    icon: realTimeExpenseIcon,
    title: "Simplified Budget Allocation",
    description:
      "Managing multiple marketing campaigns can be overwhelming, but with the Digital Marketing Card, you can easily allocate budgets to individual campaigns. Load funds directly onto the card and assign specific amounts for each campaign, ensuring effortless budget distribution.",
    image: realTimeExpense,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    
    icon: fraudProtectionIcon,
    title: "Real-Time Expense Tracking",
    description:
      "Stay on top of every transaction with EnKash’s real-time expense-tracking feature. Instantly monitor your marketing spend as it happens, gaining valuable insights into your campaign's financial health. This enables you to make adjustments on the fly, ensuring that you don’t overspend and stay within your budget.",
    image: fraudProtection,
    buttonUrl: "/sales",
  },
  {
    
    icon: streamlinedReimbursementIcon,
    title: "Prevent Overspending",
    description:
      "Overspending on campaigns can be costly. With the Digital Marketing Card, you can set predefined spending limits for each card. This feature ensures your team stays within budget, preventing unauthorized expenses and helping you maintain financial discipline for more efficient and cost-effective marketing campaigns.",
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    
    icon: costControlSavingsIcon,
    title: "Simplified Subscription Management",
    description:
      "Managing recurring subscriptions for marketing tools, software, or ad platforms becomes effortless with EnKash. Automate payments for these subscriptions with clear schedules and centralized tracking. You’ll never miss a payment, and you'll save time that would otherwise be spent on manual invoicing and reconciliation.",
    image: costControlSavings,
    buttonUrl: "/sales",
  },
  {
    
    icon: wideAcceptanceNetworkIcon,
    title: "Customizable Usage Policies",
    description:
      "Tailor your spending policies to fit your unique marketing needs. With the Digital Marketing Card, you can enforce specific restrictions, such as category-based spending limits or vendor-specific constraints. This ensures that every expense aligns with your business’s objectives and helps maximize the effectiveness of your marketing efforts.",
    image: wideAcceptanceNetwork,
    buttonUrl: "/sales/?source=expense_management",
  },
]

export {   cardType,
  intantActionData,
  spendAnalyticsData,
  stackcardData,}
