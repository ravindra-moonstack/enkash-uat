import firstIcon from "./img/icon-one.svg"
import secondIcon from "./img/icon-two.svg"
import thirdIcon from "./img/icon-three.svg"
import fourthIcon from "./img/icon-four.svg"

import {
  costControlSavings,
  costControlSavingsIcon,
  digitalCardImg,
  fraudProtection,
  fraudProtectionIcon,
  mealCardImg,
  payrollCardImg,
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

const stackcardData = [
  {
    color: "#fff",
    icon: realTimeExpenseIcon,
    title: "Real-Time Expense Tracking",
    description:
      "With the Prepaid fuel Cards, you can monitor fuel expenses as they occur, providing complete visibility and control. All transactions are logged in real time, allowing you to track fuel usage efficiently. This means you can quickly identify spending patterns, prevent budget overruns, and make data-driven decisions to optimize your fuel budget.",
    image: realTimeExpense,
    buttonUrl: "/sales/",
  },
  {
    color: "#eee",
    icon: fraudProtectionIcon,
    title: "Fraud Protection",
    description:
      "Fuel Cards are equipped with robust security features, including PIN protection and real-time alerts for any suspicious activity. These security measures ensure that only authorized transactions are processed, significantly reducing the risk of misuse or fraudulent charges. You can block or freeze cards instantly to prevent unauthorized access, keeping your business safe.",
    image: fraudProtection,
    buttonUrl: "/sales",
  },
  {
    color: "#fff",
    icon: streamlinedReimbursementIcon,
    title: "Streamlined Reimbursement",
    description:
      "Say goodbye to the traditional, cumbersome reimbursement process. Fuel Cards eliminate the need for employees to submit fuel receipts or wait for reimbursement approvals. All fuel-related expenses are automatically managed and settled through the cards, making the entire process faster, more efficient, and less prone to errors, allowing your finance team to focus on more strategic tasks.",
    image: streamlinedReimbursement,
    buttonUrl: "/sales",
  },
  {
    color: "#eee",
    icon: costControlSavingsIcon,
    title: "Cost Control & Savings",
    description:
      "Fuel Cards allow you to set customizable daily or monthly spending limits for each employee, ensuring that fuel expenses stay within your budget. You can easily monitor fuel consumption against approved limits, providing greater control over spending. By optimizing usage patterns and identifying cost-saving opportunities, your business can significantly reduce unnecessary fuel expenses.",
    image: costControlSavings,
    buttonUrl: "/sales",
  },
  {
    color: "#fff",
    icon: wideAcceptanceNetworkIcon,
    title: "Wide Acceptance Network",
    description:
      "Fuel Cards are accepted at a vast network of authorized fuel stations, giving your employees the freedom to refuel at a variety of locations, both locally and nationwide. This broad acceptance ensures convenience, reduces the risk of out-of-network charges, and guarantees that your business is always covered wherever your team travels, whether near or far.",
    image: wideAcceptanceNetwork,
    buttonUrl: "/sales",
  },
]



const intantActionData = [
  {
    title: "Login",
    description: "Log in or register on the EnKash platform.",
    icon: firstIcon,
  },

  {
    title: "Issue",
    description: "The card is ready to use post KYC is done.",
    icon: secondIcon,
  },
  {
    title: "Notify",
    description: "Send SMS or email notifications to employees.",
    icon: thirdIcon,
  },
  {
    title: "Activate",
    description: "The card is ready to use post KYC is done.",
    icon: fourthIcon,
  },
]




const cardType = [
  {
    titleHtml: "Meal Card",
    description:
      "Give tax-saving meal benefits to employees with easy-to-use, digital meal cards accepted nationwide.",
    cardImage: mealCardImg,
    linkUrl: "/meal-card",
  },
  {
    titleHtml: "Digital Marketing Card",
    description:
      "Manage online ad spends across platforms with preset limits and real-time spend visibility and control.",
    cardImage: digitalCardImg,
    linkUrl: "/digital-marketing-card",
  },
  {
    titleHtml: "SaaS Card",
    description:
      "Centralize and manage software subscriptions easily with cards made for recurring SaaS payments and renewals.",
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
    titleHtml: "Virtual Card",
    description:
      "Generate secure, one-time or recurring virtual cards for safer, faster, and trackable online payments.",
    cardImage: virtualCardImg,
    linkUrl: "/virtual-card",
  },
  {
    titleHtml: "T&E Card",
    description:
      "Manage travel & entertainment spends with smart controls, real-time tracking, and seamless",
    cardImage: termsAndConCardImg,
    linkUrl: "/travel-and-expense-card",
  },

  {
    titleHtml: "Purchase Card",
    description:
      "Pre-approved cards that help manage vendor payments and operational purchases for effortless procurement",
    cardImage: purchesCardImg,
    linkUrl: "/purchase-card",
  },
  {
    titleHtml: "Fleet Card",
    description:
      "Digitize fleet expenses such as fuel, tolls, repairs—while tracking usage per vehicle or driver.",
    cardImage: purchesCardImg,
  },
]


export {
cardType, intantActionData, stackcardData
}
