import crouselIconOne from "./img/crouselIconOne.svg"
import crouselIconTwo from "./img/crouselIconTwo.svg"
import crouselIconThree from "./img/crouselIconThree.svg"
import crouselIconFour from "./img/crouselIconFour.svg"
import crouselIconFive from "./img/crouselIconFive.svg"

import { scrollIconOne, scrollIconThree, scrollIconTwo } from "."

const cardsData = [
  {
    title: "Onboard in Minutes",
    description: "Sign up and link your business locations to our platform.",
    icon: scrollIconOne,
  },
  {
    title: "Add and Auto-Fetch Bills",
    description:
      "Add utility bill details or let EnKash auto-fetch them for you.",
    icon: scrollIconTwo,
  },
  {
    title: "Pay in One Click",
    description:
      "Make single or bulk payments instantly with robust security measures.",
    icon: scrollIconThree,
  },
  {
    title: "Track & Reconcile",
    description:
      "Monitor all payment statuses and reconcile them effortlessly.",
    icon: scrollIconThree,
  },
]

const allProductSections = [
  {
    title: "Expense Management",
    subtitle: "Manage every spend effortlessly",
    items: [
      {
        title: "Automated Reminders ",
        description: "Never miss a due date with timely alerts.",
        image: crouselIconOne,
      },
      {
        title: "Flexible Payments ",

        description: "Partial payments, bulk payments, or auto-pay options.",
        image: crouselIconTwo,
      },

      {
        title: "Security First ",
        description:
          "Multi-layer encryption and fraud monitoring ensure safe transactions.",
        image: crouselIconThree,
      },
      {
        title: "Centralized Insights",

        description: "Consolidated view of all bills and payment history.",
        image: crouselIconFour,
      },
      {
        title: "APIs for Automation ",

        description:
          "Seamlessly integrate with your ERP or accounting software.",
        image: crouselIconFive,
      },
    ],
  },
]

export { cardsData, allProductSections }
