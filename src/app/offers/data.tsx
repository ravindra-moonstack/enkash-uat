import crouselIconOne from "./img/crouselIconOne.svg"
import crouselIconTwo from "./img/crouselIconTwo.svg"
import crouselIconThree from "./img/crouselIconThree.svg"
import crouselIconFour from "./img/crouselIconFour.svg"
import crouselIconFive from "./img/crouselIconFive.svg"
import crouselIconSix from "./img/crouselIconSix.svg"
import giftCard from "./img/gift-card.webp"
import offers from "./img/offers.webp"
import incentive from "./img/incentive.webp"
import vouchers from "./img/vouchers.webp"

import {
  costControlSavings,
  costControlSavingsIcon,
  fraudProtection,
  fraudProtectionIcon,
  realTimeExpense,
  realTimeExpenseIcon,
  scrollIconOne,
  scrollIconThree,
  scrollIconTwo,
  streamlinedReimbursement,
  streamlinedReimbursementIcon,
  wideAcceptanceNetwork,
  wideAcceptanceNetworkIcon,
} from "."

const cardsData = [
  {
    title: "Complete KYC",
    description: "Sign up on EnKash and complete your KYC.",
    icon: scrollIconOne,
  },
  {
    title: "Select Offers",
    description:
      "Visit `Partnered Services` on the dashboard. Explore our curated corporate offers and select as per your requirements.",
    icon: scrollIconTwo,
  },
  {
    title: "Apply For Offer",
    description:
      "Read the terms and conditions and click on `Apply Now` to get the offer.",
    icon: scrollIconThree,
  },
]

const cardType = [
  {
    title: "Expense Management",
    subtitle: "Manage every spend effortlessly",
    items: [
      {
        titleHtml: "Gift Cards",
        description:
          "Empower teams with versatile, prepaid gift cards for seamless rewards and recognition.",
        cardImage: giftCard,
        url: "/gift-cards/",
      },
      {
        titleHtml: "Employee Rewards",
        description:
          "Appreciate employees with our innovative and likable employee rewards.",
        cardImage: offers,
        url: "/offers/",
      },
      {
        titleHtml: "Channel Incentives ",
        description:
          "Drive partner performance with strategic rewards, commissions, and loyalty programs.",
        cardImage: incentive,
        url: "/channel-incentives/",
      },
      {
        titleHtml: "Brand Vouchers ",
        description:
          "Provide employees with top-brand vouchers for flexible and meaningful appreciation.",
        cardImage: vouchers,
        url: "/vouchers/",
      },
    ],
  },
]
const allProductSections = [
  {
    title: "Expense Management",
    subtitle: "Manage every spend effortlessly",
    items: [
      {
        title: "Recurring Billing Setup",
        description:
          "Easily schedule recurring rent payments aligned with your rental agreements.",
        image: crouselIconOne,
      },
      {
        title: "Payment Notifications ",

        description:
          "Both tenants and landlords get instant alerts on payment status, ensuring transparency.",
        image: crouselIconTwo,
      },

      {
        title: "Split Payment Options ",
        description:
          "Divide rent across multiple payers or payment modes effortlessly.",
        image: crouselIconThree,
      },
      {
        title: "Customizable Payment Schedules",

        description:
          "Tailor payment dates to fit your cash flow without hassle.",
        image: crouselIconFour,
      },
      {
        title: "Dynamic Rent Adjustments",

        description:
          "Handle rent changes, prorated amounts, or additional fees smoothly.",
        image: crouselIconFive,
      },
      {
        title: "Detailed Rental Insights",

        description:
          "Access monthly rent reports and analytics to track trends and expenses.",
        image: crouselIconSix,
      },
    ],
  },
]

const stackcardData = [
  {
    color: "#fff",
    icon: realTimeExpenseIcon,
    title: "Maximize Savings",
    description:
      "Unlock significant savings on various business products with exclusive discounts on our partnered services.",
    image: realTimeExpense,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    color: "#eee",
    icon: fraudProtectionIcon,
    title: "Top Partnered Deals",
    description:
      "Explore the finest corporate deals and offers from our esteemed partner brands like AWS, ClearTax, Canva, and more.",
    image: fraudProtection,
    buttonUrl: "/sales",
  },
  {
    color: "#fff",
    icon: streamlinedReimbursementIcon,
    title: "Effortless Process",
    description:
      "Enjoy a seamless experience with just a few clicks, making it quick and easy to access exclusive deals and offers.",
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    color: "#eee",
    icon: costControlSavingsIcon,
    title: "Regularly Updated Offers",
    description:
      "Stay ahead of the curve with the best deals for your business needs.",
    image: costControlSavings,
    buttonUrl: "/sales",
  },
  {
    color: "#eee",
    icon: wideAcceptanceNetworkIcon,
    title: "Get Real-time Insights",
    description:
      "Leverage actionable insights with our powerful dashboard. Access real-time transaction data, monitor payment trends, and analyze customer behavior to make strategic business decisions that can drive growth and enhance operational efficiency.",
    image: wideAcceptanceNetwork,
    buttonUrl: "/sales",
  },
]

export { cardsData, allProductSections, cardType, stackcardData }
