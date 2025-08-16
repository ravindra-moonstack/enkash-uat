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
} from "."

const intantActionData = [
  {
    title: "Log in and complete your KYC",
    description:
      "Get started in minutes. Simply log in to your EnKash account and complete your KYC to unlock full access.",
    icon: firstIcon,
  },

  {
    title: "Complete control of your corporate cards ",
    description:
      "Manage all your cards effortlessly with real-time visibility, built-in security, and proactive controls.",
    icon: secondIcon,
  },
  {
    title: "Scale with confidence",
    description:
      "Whether you're a growing startup or a large enterprise, EnKash adapts seamlessly to your needs today and as you grow.",
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
  },
]

const allProductSections = [
  {
    title: "Expense Management",
    subtitle: "Manage every spend effortlessly",
    items: [
      {
        title: "Real-Time Activation & Deactivation ",
        description:
          "Instantly activate new cards or block lost ones with just a click. No waiting, no paperwork, just full control at your fingertips.",
        image: sliderOneIcon,
        link: "/payment-links/",
      },
      {
        title: "Smart Access Controls",
        description:
          "Set spending limits, usage rules, and card access for teams or individuals to ensure complete oversight and reduce misuse.",
        image: sliderTwoIcon,
        link: "/payment-page/",
      },
      {
        title: "Live Monitoring & Alerts ",
        description:
          "Track transactions as they occur with real-time notifications and detailed insights for improved visibility and faster decision-making.",
        image: sliderThreeIcon,
        link: "/payment-button/",
      },
      {
        title: "Centralized Dashboard",
        description:
          "Manage all your corporate cards in one place, issue, control, and monitor without toggling between tools or systems.",
        image: sliderFourIcon,
        link: "/qr-codes/",
      },
    ],
  },
]

const stackcardData = [
  {
    color: "#fff",
    icon: realTimeExpenseIcon,
    title: "Instant Actions. Full Control.",
    description:
      "Manage your cards on the spot—activate, disable, or adjust without any effort using our robust corporate card management system.",
    image: realTimeExpense,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    color: "#eee",
    icon: fraudProtectionIcon,
    title: "Enhanced Security",
    description:
      "Protect your business from fraud with instant deactivation and real-time alerts.",
    image: fraudProtection,
    buttonUrl: "/sales",
  },
  {
    color: "#fff",
    icon: streamlinedReimbursementIcon,
    title: "Smarter Expense Tracking",
    description:
      "Get a clear view of every transaction, categorize spends, and avoid overspending.",
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    color: "#eee",
    icon: costControlSavingsIcon,
    title: "Streamlined Workflows",
    description:
      "Manage all card-related tasks from a single, centralized dashboard, saving time and effort.",
    image: costControlSavings,
    buttonUrl: "/sales",
  },
];

export {
  intantActionData,
  spendAnalyticsData,
  cardType,
  allProductSections,
  cardData,
  stackcardData
}
