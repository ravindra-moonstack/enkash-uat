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
    icon: scrollIconFour,
  },
]

const allProductSections = [
  {
    title: "Expense Management",
    subtitle: "Manage every spend effortlessly",
    items: [
      {
        title: "Personalized ",
        title2: "Rewards:",
        description:
          "Tailor incentives for employees, partners, and stakeholders.",
        image: crouselIconOne,
      },
      {
        title: "Automated ",
        title2: "Processes:",
        description: "Streamline reward allocation, redemption, and tracking.",
        image: crouselIconTwo,
      },

      {
        title: "Flexible ",
        title2: "Redemption: ",
        description:
          " Offer multiple reward types—vouchers, gift cards, discounts, and more.",
        image: crouselIconThree,
      },
      {
        title: "Real-Time Tracking ",
        title2: "& Analytics:",
        description: " Gain insights into reward performance and engagement.",
        image: crouselIconFour,
      },
      {
        title: "Seamless ",
        title2: "Integration:",
        description:
          "Easily integrate with HRMS, CRMs, and business platforms.",
        image: crouselIconFive,
      },
    ],
  },
]

export { cardsData, allProductSections }
