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
  stackCardSixIcon,
  stackCardSixImg,
  streamlinedReimbursement,
  streamlinedReimbursementIcon,
  wideAcceptanceNetwork,
  wideAcceptanceNetworkIcon,
} from "./img"

const cardsData = [
  {
    title: "Mandatory KYC",
    description:
      "Log in to EnKash using your registered mobile number and complete your KYC.",
    icon: scrollIconOne,
  },
  {
    title: "Add Funds",
    description:
      "Add funds to your account via NEFT, IMPS, or RTGS. Upload channel partners list using bulk upload template file.",
    icon: scrollIconTwo,
  },
  {
    title: "Send Rewards",
    description:
      "Partners will be notified via SMS, Whatsapp, and e-mail about their incentive points and redemption process.",
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
        titleHtml: "Offers",
        description:
          "Unlock exclusive deals and discounts to boost employee engagement and motivation.",
        cardImage: offers,
        url: "/offers/",
      },
      {
        titleHtml: "Employee Rewards",
        description: "Appreciate your employees with rewards they will enjoy!",
        cardImage: incentive,
        url: "/employee-rewards",
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

const stackcardData = [
  {
    color: "#fff",
    icon: realTimeExpenseIcon,
    title: "Add Partners In Bulk",
    description:
      "Add channel partners as individuals or bulk upload them for easy incentive distribution.",
    image: realTimeExpense,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    color: "#eee",
    icon: fraudProtectionIcon,
    title: "Diverse Redemptions",
    description:
      "Redeem from a diverse range of incentive options from 400+ brand vouchers like Amazon, Flipkart, Myntra, etc, across 25+ categories.",
    image: fraudProtection,
    buttonUrl: "/sales",
  },
  {
    color: "#fff",
    icon: streamlinedReimbursementIcon,
    title: "Non-Reloadable Cards",
    description:
      "It comes preloaded with a specific monetary value, offering partners the flexibility to redeem their incentives across e-commerce or in-store shopping.",
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    color: "#eee",
    icon: costControlSavingsIcon,
    title: "Automatic Alerts",
    description:
      "Integrated platform to automatically inform users via SMS, WhatsApp, and e-mail about incentives and how to redeem points.",
    image: costControlSavings,
    buttonUrl: "/sales",
  },
  {
    color: "#eee",
    icon: wideAcceptanceNetworkIcon,
    title: "Real-Time Analytics",
    description:
      "Quickly share vouchers, track redemption status, and create advanced expiry alerts to maximize user adoption.",
    image: wideAcceptanceNetwork,
    buttonUrl: "/sales",
  },
  {
    color: "#eee",
    icon: stackCardSixIcon,
    title: "Bulk UPI for Incentives",
    description:
      "Transfer incentives directly, nationwide, and in a hassle-free way, empowering seamless incentives for all.",
    image: stackCardSixImg,
    buttonUrl: "/sales",
  },
]

export { cardsData, cardType, stackcardData }
