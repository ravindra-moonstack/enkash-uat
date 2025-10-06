
import {
  digitalCardImg,
  fleetCardImg,
  fuelCardImg,
  mealCardImg,
  payrollCardImg,
  purchesCardImg,
  virtualCardImg,
  iconOne,
  iconTwo,
  iconThree,
  identifyIcon,
  detectIcon,
  monitorIcon,
  customizeIcon,
  instantIcon,
  onboardingIcon,
  noThidPartyIcon,
  diyControlIcon,
  sliderOne,
  sliderTwo,
  sliderThree,
  sliderFour,
  firstIcon,
  secondIcon,
  thirdIcon,
  fourthIcon,
} from "./img"
import { CardData } from "@/src/components/management-card"

const intantActionData = [
  {
    title: "Login and Add Details",
    description: "Login to EnKash portal and fill in user details.",
    icon: firstIcon,
  },

  {
    title: "Control Management",
    description:
      "Add the user and set custom limits on currency, amount, category, and more.",
    icon: secondIcon,
  },
  {
    title: "KYC",
    description: "User completes their KYC.",
    icon: thirdIcon,
  },
  {
    title: "Card Activation",
    description:
      "Employees can access and use their cards for a smooth travel experience.",
    icon: fourthIcon,
  },
]

const costSavingData = [
  {
    title: "Reduce Travel Costs ",
    description:
      " Save up to 15% on travel-related expenses with optimized booking tools.",
    icon: instantIcon,
  },

  {
    title: "Automated Policy Compliance ",
    description:
      " Ensure all expenses are policy-compliant to prevent overspending.",
    icon: onboardingIcon,
  },
  {
    title: " Tax Benefits",
    description:
      "Simplify GST claims on flights and hotels to save an additional 5-18%.",
    icon: noThidPartyIcon,
  },
]

const enhanceEmployeeData = [
  {
    title: " Faster Approvals ",
    description: " Real-time alerts for approvers eliminate delays.",
    icon: monitorIcon,
  },

  {
    title: "Travel Perks ",
    description:
      "Unlock exclusive travel rewards, lounge access, and travel insurance for your team.",
    icon: detectIcon,
  },
]

const unmatchControlData = [
  {
    title: "Customizable Limits ",
    description:
      "Set spending caps, transaction categories, and approval workflows.",
    icon: customizeIcon,
  },

  {
    title: "Fraud Prevention",
    description:
      "Real-time monitoring and alerts for suspicious activity keep your business secure.",
    icon: diyControlIcon,
  },
  {
    title: "Seamless Integrations",
    description:
      "Connect with ERP, HRMS, and accounting software to streamline workflows.",
    icon: identifyIcon,
  },
]

const spendAnalyticsData = [
  {
    title: "Real-Time Expense Tracking",
    description:
      " Monitor all transactions as they happen, giving you complete oversight.",
    icon: iconOne,
  },

  {
    title: "Integrated Travel and Expense Management Platform",
    description:
      "Combine expense management for travel bookings and approvals into one centralized system.",
    icon: iconTwo,
  },
  {
    title: "Global Acceptance",
    description:
      " Use your EnKash card anywhere, with competitive exchange rates for international travel.",
    icon: iconThree,
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
    whiteTitle: "Payroll Card",
    description:
      "Pay employees, freelancers, or gig workers directly with zero bank dependency or delays.",
    cardImage: payrollCardImg,
    linkUrl: "/sales/?source=travel-and-expense-card",
  },
  {
    theme: "black",
    whiteTitle: "Virtual Card",
    description:
      "Instantly issue secure virtual cards for online purchases, with customizable limits and real-time tracking",
    cardImage: virtualCardImg,
    linkUrl: "/virtual-card",
  },
  {
    theme: "black",
    whiteTitle: "Meal Card",
    description:
      "Access meal cards to give monthly access to food across multiple online, dine-in, and food delivery apps, along with a tax-saving facility.",
    cardImage: mealCardImg,
    linkUrl: "/meal-card",
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
      "Digitize fleet expenses such as fuel, tolls, and repairs, while tracking usage per vehicle or driver.",
    cardImage: fleetCardImg,
    linkUrl: "/sales/?source=travel-and-expense-card",
  },
]

const allProductSections = [
  {
    title: "Reconciliation & Policy",
    subtitle: "Control and visibility in real time",
    items: [
      {
        title: "Real-Time Management",
        description:
          "Get instant updates on all travel-related expenses, providing greater visibility and control over spending.",
        image: sliderOne,
        link: "/payment-button/",
      },
      {
        title: "DIY Card Module",
        description:
          "Set rules, track expenses, and manage approvals through an intuitive dashboard accessible anytime, anywhere.",
        image: sliderTwo,
        link: "/qr-code/",
      },
      {
        title: "Automated Compliance and Reporting",
        description:
          "Enforce policy adherence automatically and generate detailed reports for insights into spending patterns.",
        image: sliderThree,
        link: "/auto-collect/",
      },
      {
        title: "Advanced Analytics",
        description:
          "Leverage data to identify top spenders and frequent travelers while analyzing missed savings opportunities.",
        image: sliderFour,
        link: "/auto-collect/",
      },
    ],
  },
]

export {
  allProductSections,
  cardType,
  costSavingData,
  enhanceEmployeeData,
  intantActionData,
  spendAnalyticsData,
  unmatchControlData,
}
