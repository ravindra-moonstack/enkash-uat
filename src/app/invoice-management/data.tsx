import crouselIconOne from "./img/crouselIconOne.svg"
import crouselIconTwo from "./img/crouselIconTwo.svg"
import crouselIconThree from "./img/crouselIconThree.svg"
import crouselIconFour from "./img/crouselIconFour.svg"
import crouselIconFive from "./img/crouselIconFive.svg"


import {
  scrollIconFour,
  scrollIconOne,
  scrollIconThree,
  scrollIconTwo,
} from "."

const cardsData = [
  {
    title: "Sign Up and Upload",
    description: "Create your account and add invoices ",
    icon: scrollIconOne,
  },
  {
    title: "Approve",
    description: "Set up approval workflows and process invoices efficiently.",
    icon: scrollIconTwo,
  },
  {
    title: "Pay",
    description:
      "Make payments using your preferred method, including EnKash credit lines.",
    icon: scrollIconThree,
  },
  {
    title: "Track & Report",
    description:
      "Monitor progress and generate insights to improve financial planning.",
    icon: scrollIconFour,
  },
]

const allProductSections = [
  {
    title: "Customizable Alerts and Notifications",
    subtitle: "Manage every spend effortlessly",
    items: [
      {
        title: "Customizable Alerts and Notifications",
        description:
          "Stay informed with real-time alerts for due dates, pending approvals, and payment statuses, ensuring no task is overlooked.",
        image: crouselIconOne,
      },
      {
        title: "Multi-Channel Invoice Upload",

        description:
          "Add invoices via drag-and-drop, email integration, or API, giving you flexibility in how you manage inputs.",
        image: crouselIconTwo,
      },

      {
        title: "Role-Based Access Control",
        description:
          "Grant specific access rights to users based on their roles, enhancing security and accountability in your workflow.",
        image: crouselIconThree,
      },
      {
        title: "Audit Trail Trackings",

        description:
          "Maintain a clear and detailed history of every action taken on invoices for transparency and audit readiness.",
        image: crouselIconFour,
      },
      {
        title: "Bulk Payment Scheduling",

        description:
          "Handle rent changes, prorated amounts, or additional fees smoothly.",
        image: crouselIconFive,
      },
    ],
  },
]

export { cardsData, allProductSections }
