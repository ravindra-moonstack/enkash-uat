import { TStackCardsProp } from "@/src/types"
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
  giftCard,
  offers,
  incentive,
  vouchers,
} from "./img"

const cardsData : TStackCardsProp =  [
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

const stackcardData: TStackCardsProp = [
  {
    icon: realTimeExpenseIcon,
    title: "Maximize Savings",
    description:
      "Unlock significant savings on various business products with exclusive discounts on our partnered services.",
    image: realTimeExpense,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    icon: fraudProtectionIcon,
    title: "Top Partnered Deals",
    description:
      "Explore the finest corporate deals and offers from our esteemed partner brands like AWS, ClearTax, Canva, and more.",
    image: fraudProtection,
    buttonUrl: "/sales",
  },
  {
    icon: streamlinedReimbursementIcon,
    title: "Effortless Process",
    description:
      "Enjoy a seamless experience with just a few clicks, making it quick and easy to access exclusive deals and offers.",
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    icon: costControlSavingsIcon,
    title: "Regularly Updated Offers",
    description:
      "Stay ahead of the curve with the best deals for your business needs.",
    image: costControlSavings,
    buttonUrl: "/sales",
  },
  {
    icon: wideAcceptanceNetworkIcon,
    title: "Get Real-time Insights",
    description:
      "Leverage actionable insights with our powerful dashboard. Access real-time transaction data, monitor payment trends, and analyze customer behavior to make strategic business decisions that can drive growth and enhance operational efficiency.",
    image: wideAcceptanceNetwork,
    buttonUrl: "/sales",
  },
]

export { cardsData, cardType, stackcardData }
