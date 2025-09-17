import iconOne from "./img/subscribtionIcon.svg"
import iconTwo from "./img/employeeIcon.svg"
import iconThree from "./img/vendorIcon.svg"
import iconFour from "./img/travelExpenceIcon.svg"
import sliderOneIcon from "./img/sliderOneIcon.svg"
import sliderTwoIcon from "./img/sliderTwoIcon.svg"
import sliderThreeIcon from "./img/sliderThreeIcon.svg"
import sliderFourIcon from "./img/sliderFourIcon.svg"
import firstIcon from "./img/icon-one.svg"
import secondIcon from "./img/icon-two.svg"
import thirdIcon from "./img/icon-three.svg"
import accesableIcon from "./img/accesable-icon.svg"
import trackableIcon from "./img/trackable-icon.svg"
import denominationIcon from "./img/denomination-icon.svg"

import {
  costControlSavings,
  costControlSavingsIcon,
  fraudProtection,
  fraudProtectionIcon,
  digitalCardImg,
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

import { fleetCardImg } from "../digital-marketing-card"
import { payrollCardImg } from "../fuel-card"

const intantActionData = [
  {
    title: "Sign Up",
    description: "Sign up on EnKash with all the necessary company details.",
    icon: firstIcon,
  },

  {
    title: "Add Funds ",
    description:
      "Add funds to the company account and request gift cards whenever necessary.",
    icon: secondIcon,
  },
  {
    title: "Distribution",
    description:
      "Enterprises can distribute these gift cards with preset amounts based on the occasion.",
    icon: thirdIcon,
  },
]

const cardData = [
  {
    icon: accesableIcon,
    title: "Easily Accessible",
  },
  {
    icon: trackableIcon,
    title: "Trackable ",
  },
  {
    icon: denominationIcon,
    title: "Multiple Denominations",
  },
]

const spendAnalyticsData = [
  {
    title: "Employee Rewards",
    description:
      "Appreciate your workforce with employee rewards they deserve.",
    icon: iconOne,
  },

  {
    title: "Offers",
    description:
      "Unlock exclusive deals and discounts to boost employee engagement and motivation.",
    icon: iconTwo,
  },
  {
    title: "Channel Incentives ",
    description:
      "Drive partner performance with strategic rewards, commissions, and loyalty programs.",
    icon: iconThree,
  },
  {
    title: "Brand Vouchers ",
    description:
      "Provide employees with top-brand vouchers for flexible and meaningful appreciation.",
    icon: iconFour,
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
    titleHtml: "SaaS Card",
    description:
      "Manage recurring SaaS subscriptions with auto-renewal tracking and vendor-wise expense contro",
    cardImage: sassCardImg,
    linkUrl: "/saas-card",
  },
  {
    titleHtml: "Payroll Card",
    description:
      "Pay employees, freelancers, or gig workers directly with zero bank dependency or delays.",
    cardImage: payrollCardImg,
    linkUrl: "/sales/?source=gift-cards",
  },
  {
    titleHtml: "Meal Card",
    description:
      "Offer tax-free meal benefits to employees with wide acceptance and full usage transparency.",
    cardImage: mealCardImg,
    linkUrl: "/meal-card",
  },
  {
    titleHtml: "T&E Card",
    description:
      "Streamline business travel spends—set budgets, track usage, and automate travel expense reconciliation",
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
      "Digitize fleet expenses such as fuel, tolls, and repairs, while tracking usage per vehicle or driver",
    cardImage: fleetCardImg,
    linkUrl: "/sales/?source=gift-cards",
  },
]

const allProductSections = [
  {
    title: "Expense Management",
    subtitle: "Manage every spend effortlessly",
    items: [
      {
        title: "Accessibility ",
        description:
          "The EnKash way of issuing gift cards is simplified, making it easy to access digital cards from anywhere.",
        image: sliderOneIcon,
        link: "/payment-links/",
      },
      {
        title: "Easy To Track",
        description:
          "Gift cards on EnKash can be easily tracked and blocked to avoid loss and misuse.",
        image: sliderTwoIcon,
        link: "/payment-page/",
      },
      {
        title: "Multiple Denominations ",
        description:
          "Gift cards are available in multiple denominations of up to Rs.10,000; Limits are configurable based on choice.",
        image: sliderThreeIcon,
        link: "/payment-button/",
      },
      {
        title: "Acceptability",
        description:
          "Gift cards by EnKash are widely accepted across many places.",
        image: sliderFourIcon,
        link: "/qr-code/",
      },
    ],
  },
]

const stackcardData = [
  {
    color: "#fff",
    icon: realTimeExpenseIcon,
    title: "Freedom of Choice",
    description:
      "The recipient can choose products or services using the gift card per their preference and convenience from a retail store or online.",
    image: realTimeExpense,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    color: "#eee",
    icon: fraudProtectionIcon,
    title: "Easily Accessible",
    description:
      "Gift cards can be easily and safely accessed from anywhere and anytime.",
    image: fraudProtection,
    buttonUrl: "/sales",
  },
  {
    color: "#fff",
    icon: streamlinedReimbursementIcon,
    title: "Safety",
    description:
      "Gift cards can be frozen in case of loss or theft without losing money with the self-PIN generation feature.",
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    color: "#eee",
    icon: costControlSavingsIcon,
    title: "Easy Distribution",
    description: "These gift cards can be easily distributed on the occasion.",
    image: costControlSavings,
    buttonUrl: "/sales",
  },
  {
    color: "#eee",
    icon: wideAcceptanceNetworkIcon,
    title: "Multiple Denominations",
    description:
      "Available in multiple denominations of up to Rs.10,000, ensuring the option to choose the card value as per your requirements.",
    image: wideAcceptanceNetwork,
    buttonUrl: "/sales",
  },
]

export {
  intantActionData,
  spendAnalyticsData,
  cardType,
  allProductSections,
  cardData,
  stackcardData,
}
