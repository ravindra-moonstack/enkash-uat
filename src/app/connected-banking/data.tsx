
import {
  MaintainCompleteControl,
  notificationImage,
  paymentLinkImage,
  paymentOptionImage,
  reduceFrauds,
  scrollIconFourth,
  scrollIconOne,
  scrollIconThree,
  scrollIconTwo,
  secureImage,
  shareImage,
  taskIconFive,
  taskIconFour,
  taskIconOne,
  taskIconSix,
  taskIconThree,
  taskIconTwo,
  netBanking,
  upi,
  cards
} from "./img"


const cardsData = [
  {
    title: "Link",
    description:
      "Link your bank accounts to view balances & initiate payouts instantly.",
    icon: scrollIconOne,
  },
  {
    title: "Routing",
    description: "We securely route the payment through your bank.",
    icon: scrollIconTwo,
  },
  {
    title: "Track",
    description: "Track payout status in real time.",
    icon: scrollIconThree,
  },
  {
    title: "Fetch",
    description: "Fetch automated reconciliation files without delays.",
    icon: scrollIconFourth,
  },
]


const paymentMethodData = [
  {
    title: "Enterprise-Ready from Day One",
    description:
      "Custom pricing, early feature access, and a dedicated account manager.",
    icon: cards,
  },
  {
    title: "Support That Goes Beyond the Ticket",
    description:
      "Human-first support via WhatsApp, email, or phone; real help, always.",
    icon: upi,
  },
  {
    title: "Direct Payouts from Your Bank",
    description:
      "Pay directly from your bank account - no wallet, no fund transfers.",
    icon: netBanking,
  },
]






const payoutPolicies = [
  {
    icon: taskIconOne,
    title: "Initiate payouts directly from your bank accounts",
    description:
      "Forget wallet loading and fund transfers. With EnKash, your payouts happen directly from your connected bank accounts, giving you complete control over cash flow without any operational delays or intermediaries.",
    image: paymentLinkImage,
    buttonUrl: "/sales/",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconTwo,
    title: "Link multiple bank accounts",
    description:
      "Connect all your current accounts from different banks on a single dashboard. Distribute payout load, minimize dependency on a single bank, reduce downtime risks, and improve liquidity management across your business operations.",
    image: notificationImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "Access 24x7 payment rails",
    description:
      "Make payouts anytime—day or night, weekends or holidays. EnKash supports UPI, IMPS, NEFT, and RTGS round-the-clock, ensuring your vendors, customers, or employees get paid without delay.",
    image: shareImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
  },
  {
    icon: taskIconFour,
    title: "Get real-time balance visibility",
    description:
      "See up-to-date balances across all your linked accounts instantly. Make smarter financial decisions with accurate visibility into available funds before initiating payouts or planning high-value transactions.",
    image: paymentOptionImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
    reverse: true,
  },
  {
    icon: taskIconFive,
    title: "Automate reconciliation",
    description:
      "Say goodbye to manual downloads and spreadsheet matching. EnKash fetches direct bank files and automates reconciliation, making your accounting faster, more accurate, and audit-ready without any manual effort.",
    image: secureImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
  },
  {
    icon: taskIconSix,
    title: "Enable smart routing",
    description:
      "Intelligently route each payout from the most optimal account based on pre-set rules or available balance. Maximize fund utilization and avoid failed transactions due to insufficient funds in a single account.",
    image: reduceFrauds,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
    reverse: true,
  },
  {
    icon: taskIconFive,
    title: "Maintain complete control",
    description:
      "With EnKash, your money stays in your bank. No wallet dependencies or fund transfers- just a secure, compliant layer that enables real-time visibility, control, and automation over all your payouts.",
    image: MaintainCompleteControl,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
  },
]

export { cardsData, paymentMethodData, payoutPolicies }
