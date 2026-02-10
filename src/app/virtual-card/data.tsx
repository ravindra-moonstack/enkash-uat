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
  payrollCardImg,
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
    title: "Create an Account",
    description: "Register your business on EnKash",
    icon: firstIcon,
  },

  {
    title: "Issue Cards Instantly ",
    description: "Generate virtual cards for employees, vendors, or projects.",
    icon: secondIcon,
  },
  {
    title: "Set Limits & Monitor Usage",
    description: "Customize spend limits and track all transactions",
    icon: thirdIcon,
  },
  {
    title: "Make Payments",
    description:
      "Use cards for online purchases, SaaS subscriptions, or other expenses.",
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

const cardType: CardData[] = [
  {
    theme: "black",
    whiteTitle: "Fuel Card",
    description:
      "Track and control fuel spends with real-time limits, spend visibility, and GST-compliant invoices.",
    cardImage: fuelCardImg,
    linkUrl: "/fuel-card",
  },
  {
    theme: "black",
    whiteTitle: "Digital Marketing Card",
    description:
      "Simplify ad payments across platforms while staying within budget and preventing overspending.",
    cardImage: digitalCardImg,
    linkUrl: "/digital-marketing-card",
  },
  {
    theme: "black",
    whiteTitle: "SaaS Card",
    description:
      "Manage recurring SaaS subscriptions with auto-renewal tracking and vendor-wise expense contro",
    cardImage: sassCardImg,
    linkUrl: "/saas-card",
  },
  {
    theme: "black",
    whiteTitle: "Payroll Card",
    description:
      "Pay employees, freelancers, or gig workers directly with zero bank dependency or delays.",
    cardImage: payrollCardImg,
  },
  {
    theme: "black",
    whiteTitle: "Meal Card",
    description:
      "Offer tax-free meal benefits to employees with wide acceptance and full usage transparency.",
    cardImage: mealCardImg,
    linkUrl: "/meal-card",
  },
  {
    theme: "black",
    whiteTitle: "T&E Card",
    description:
      "Streamline business travel spends—set budgets, track usage, and automate travel expense reconciliation",
    cardImage: termsAndConCardImg,
    linkUrl: "/travel-and-expense-card",
  },
  {
    theme: "black",
    whiteTitle: "Purchase Card",
    description:
      "Centralize vendor and business purchases with approval workflows, spend controls, and GST capture.",
    cardImage: purchesCardImg,
    linkUrl: "/purchase-card",
  },
  {
    theme: "black",
    whiteTitle: "Fleet Card",
    description:
      "Digitize fleet expenses such as fuel, tolls, and repairs, while tracking usage per vehicle or driver",
    cardImage: fleetCardImg,
  },
]

const allProductSections = [
  {
    title: "Expense Management",
    subtitle: "Manage every spend effortlessly",
    items: [
      {
        title: "High Security: ",
        description: "Bank-grade encryption to protect your data.",
        image: sliderOneIcon,
        link: "/payment-links/",
      },
      {
        title: "Instant Access:",
        description: "No waiting time—issue cards immediately.",
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
        title: "No Hidden Fees: ",
        description: "Transparent pricing with no extra charges.",
        image: sliderThreeIcon,
        link: "/payment-button/",
      },
      {
        title: "Seamless Integration",
        description: "Sync with your existing accounting tools.",
        image: sliderFourIcon,
        link: "/qr-code/",
      },
      {
        title: "Unlimited Cards:",
        description: "Create as many cards as your business needs.",
        image: sliderFiveIcon,
        link: "/auto-collect/",
      },
    ],
  },
]
const stackcardData: TStackCardsProp = [
  {
    icon: realTimeExpenseIcon,
    title: "Reduce Business Costs with Smarter Payment Solutions",
    description:
      "Save costs by eliminating the need for physical cards, including production and maintenance fees. Advanced fraud control features minimize the risk of unauthorized transactions, ensuring secure financial operations without additional expenses.",
    image: realTimeExpense,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    icon: fraudProtectionIcon,
    title: "Stay in Control with Real-Time Expense Insights",
    description:
      "Monitor every transaction in real-time with our intuitive dashboard. Access detailed insights into spending trends, helping your business optimize budgets and make informed financial decisions.",
    image: fraudProtection,
    buttonUrl: "/sales",
  },
  {
    icon: streamlinedReimbursementIcon,
    title: "Tailor Your Virtual Card to Fit Your Needs",
    description:
      "Design virtual cards tailored for specific needs such as vendor payments, SaaS subscriptions, or travel expenses. Set individual or departmental spending limits and usage policies to ensure compliance and efficiency.",
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    icon: costControlSavingsIcon,
    title: "Strengthen Vendor Trust with Timely Payments",
    description:
      "Ensure timely and secure payments to vendors, fostering trust and better business terms. Streamlined payment processes enable quicker transactions, enhancing vendor satisfaction.",
    image: costControlSavings,
    buttonUrl: "/sales",
  },
  {
    icon: wideAcceptanceNetworkIcon,
    title: "No Expense Oversight with One Dashboard",
    description:
      "Easily manage multiple cards through a centralized, user-friendly interface. Take immediate action by monitoring, blocking, or canceling cards, all while maintaining full control over business expenses.",
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
