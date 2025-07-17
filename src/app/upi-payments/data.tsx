
import convenient from "./img/convenient.svg"
import settlementIcon from "./img/settlementIcon.svg"
import flexibility from "./img/flexibility.svg"

import { scrollIconOne, scrollIconThree, scrollIconTwo } from "."

const cardsData = [
  {
    title: "Sign-up",
    description:
      "Register with EnKash and integrate the UPI payment gateway on your website or app.",
    icon: scrollIconOne,
  },
  {
    title: "KYC",
    description:
      "Ensure compliance and enable secure transactions by completing the simple KYC process.",
    icon: scrollIconTwo,
  },
  {
    title: "Collect",
    description:
      "Start receiving payments through UPI apps—directly into your bank account.",
    icon: scrollIconThree,
  },
]

const paymentMethodData = [
  {
    title: "Convenient and Fast",
    description:
      "UPI payments happen instantly with just a few taps—no more waiting for bank transfers or struggling with other payment methods.",
    icon: convenient,
  },
  {
    title: "Real-Time Settlement",
    description:
      "Enjoy faster cash flow with UPI’s real-time transaction settlement, providing your business with immediate access to funds.",
    icon: settlementIcon,
  },
  {
    title: "Flexibility for Customers",
    description:
      "With UPI AutoPay, your customers can easily manage recurring payments without needing to remember bank details.",
    icon: flexibility,
  },
]

export { cardsData, paymentMethodData }
