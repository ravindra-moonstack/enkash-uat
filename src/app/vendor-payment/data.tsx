import crouselIconOne from "./img/crouselIconOne.svg"
import crouselIconTwo from "./img/crouselIconTwo.svg"
import crouselIconThree from "./img/crouselIconThree.svg"
import crouselIconFour from "./img/crouselIconFour.svg"
import crouselIconFive from "./img/crouselIconFive.svg"
import crouselIconSix from "./img/crouselIconSix.svg"

import {
  scrollIconFour,
  scrollIconOne,
  scrollIconThree,
  scrollIconTwo,
} from "."

const cardsData = [
  {
    title: "Add Invoices",
    description:
      "Upload invoices in bulk, or sync them directly from your accounting software.",
    icon: scrollIconOne,
  },

  {
    title: "Approve with Ease",
    description:
      "Set up approval workflows, assign roles, and get real-time notifications.",
    icon: scrollIconTwo,
  },
  {
    title: "Make Payments",
    description:
      "Select payment options and process payments in just a few clicks.",
    icon: scrollIconThree,
  },
  {
    title: "Reconcile Instantly",
    description: "Track payment statuses and generate detailed reports.",
    icon: scrollIconFour,
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
        title: "Accurate Compliance",
        description:
          "Ensure TDS deductions and tax filings are done accurately and on time.",
        image: crouselIconTwo,
      },

      {
        title: "Real-Time Tracking",
        description:
          "Get instant updates on payment statuses to stay in control.",
        image: crouselIconThree,
      },
      {
        title: "Flexible Payment Options",
        description:
          "Choose UPI, NEFT, RTGS, or cards to pay vendors conveniently.",
        image: crouselIconFour,
      },
      {
        title: "Secure Transactions",
        description:
          "Advanced encryption and fraud monitoring keep your payments safe.",
        image: crouselIconFive,
      },
      {
        title: "Customizable Reports",
        description:
          "Generate reports tailored to your financial planning and audit needs.",
        image: crouselIconSix,
      },
    ],
  },
]

export { cardsData, allProductSections }
