import crouselIconOne from "./img/crouselIconOne.svg"
import crouselIconTwo from "./img/crouselIconTwo.svg"
import crouselIconThree from "./img/crouselIconThree.svg"
import crouselIconFour from "./img/crouselIconFour.svg"
import crouselIconFive from "./img/crouselIconFive.svg"
import crouselIconSix from "./img/crouselIconSix.svg"

import {
  notificationImage,
  optimizedIcon,
  paymentLinkImage,
  paymentOptionImage,
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
} from "."

const cardsData = [
  {
    title: "Sign Up",
    description: "Create your EnKash account in just a few clicks.",
    icon: scrollIconOne,
    marginBottoms: "20px",
  },
  {
    title: "Add Payment Details",
    description: "Link your rental agreements and landlord information.",
    icon: scrollIconTwo,
    marginBottoms: "20px",
  },
  {
    title: "Automate and Pay",
    description:
      "Schedule recurring payments or pay on the go with automated reminders.",
    icon: scrollIconThree,
    marginBottoms: "20px",
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

const allInOnePolicyData = [
  {
    icon: taskIconOne,
    title: "Eliminate Late Payment Penalties",
    description:
      "Avoid the stress and cost of missing due dates. EnKash’s automated reminders and recurring payment options ensure your rent is paid on time, every time. Say goodbye to late fees and improve your cash flow with a solution designed to keep you punctual without constant follow-ups.",
    image: paymentLinkImage,
    buttonUrl: "/sales",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconTwo,
    title: "Multiple Payment Modes",
    description:
      "Pay your rent your way. Choose from UPI, NEFT, RTGS, credit cards, or digital wallets to make your rental payments. Whether you want instant processing or flexibility in managing funds, EnKash has a payment mode that works for you—and your landlord will thank you for it!",
    image: shareImage,
    buttonUrl: "/sales",
    maxImageHeight: "305px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "Streamlined Payment Tracking",
    description:
      "Say goodbye to messy spreadsheets and fragmented payment records. EnKash’s centralized dashboard gives you a real-time view of all your rent transactions. Know what’s paid, what’s pending, and what’s overdue—all in one intuitive platform. Gain control and transparency like never before.",
    image: paymentOptionImage,
    buttonUrl: "/sales",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconFour,
    title: "Instant Reconciliation",
    description:
      "Save hours of effort with automatic reconciliation. EnKash links your payments to corresponding invoices seamlessly, so you can track rent settlements without lifting a finger. No more manual matching, no more errors—just accurate records and peace of mind.",
    image: notificationImage,
    buttonUrl: "/sales",
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: taskIconFive,
    title: "Secure Transactions",
    description:
      "Your security is our priority. EnKash uses multi-layered encryption, fraud detection, and bank-grade protocols to safeguard every transaction. Whether you pay rent via credit card, UPI, or any other method, you can trust that your data and funds are protected.",
    image: optimizedIcon,
    buttonUrl: "/sales",
    maxImageHeight: "259px",
  },
  {
    icon: taskIconSix,
    title: "Fast Onboarding",
    description:
      "Get started with ease. EnKash’s onboarding process is quick, simple, and user-friendly. Complete your KYC, set up your rental payment preferences, and you’re good to go in just a few steps. No steep learning curve—just seamless functionality from day one.",
    image: secureImage,
    buttonUrl: "/sales",
    maxImageHeight: "259px",
    reverse: true,
  },
]

export { cardsData, allProductSections, allInOnePolicyData }
