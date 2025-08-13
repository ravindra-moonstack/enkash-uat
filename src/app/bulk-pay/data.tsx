import crouselIconOne from "./img/crouselIconOne.svg"
import crouselIconTwo from "./img/crouselIconTwo.svg"
import crouselIconThree from "./img/crouselIconThree.svg"
import crouselIconFour from "./img/crouselIconFour.svg"

import { scrollIconOne, scrollIconThree, scrollIconTwo } from "."

const cardsData = [
  {
    title: "Login",
    description:
      "Login to EnKash and choose the bulk business payment you wish to make.",
    icon: scrollIconOne,
  },
  {
    title: "Upload",
    description:
      "Use pre-defined templates to enter the mandatory details and upload",
    icon: scrollIconTwo,
  },
  {
    title: "Approvals",
    description: "Trigger approval workflows to get necessary approvals.",
    icon: scrollIconThree,
  },
  {
    title: "Make Payment",
    description:
      "Select multiple invoices and make bulk payments using any payment mode",
    icon: scrollIconThree,
  },
]

const allProductSections = [
  {
    title: "Bulk Payout",
    subtitle: "Manage every spend effortlessly",
    items: [
      {
        title: "Recurring Payments Made Easy",
        description:
          "Simplify repeat payments like rent, utilities, and subscriptions with automated schedules.",
        image: crouselIconOne,
      },
      {
        title: "Centralized Payment System ",

        description:
          "Manage all your payouts from a single dashboard, gaining complete visibility and control.",
        image: crouselIconTwo,
      },

      {
        title: "Real-Time Tracking and Alerts",
        description:
          "Stay updated on every transaction with instant notifications and detailed reports.",
        image: crouselIconThree,
      },
      {
        title: "Customizable Approval Workflows",

        description:
          "Maintain compliance and prevent misuse by tailoring approval hierarchies to your organization’s needs.",
        image: crouselIconFour,
      },
    ],
  },
]

export { cardsData, allProductSections }
