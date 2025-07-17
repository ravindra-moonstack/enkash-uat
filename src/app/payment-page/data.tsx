import crouselIconOne from "./img/crouselIconOne.svg"
import crouselIconTwo from "./img/crouselIconTwo.svg"
import crouselIconThree from "./img/crouselIconThree.svg"
import crouselIconFour from "./img/crouselIconFour.svg"
import crouselIconFive from "./img/crouselIconFive.svg"

import { scrollIconOne, scrollIconThree, scrollIconTwo } from "."

const cardsData = [
  {
    title: "Create",
    description:
      "Select a payment page template or customize the page according to your brand guidelines",
    icon: scrollIconOne,
  },
  {
    title: "Integrate",
    description: "Plug the page into your payment collection process.",
    icon: scrollIconTwo,
  },
  {
    title: "Collect",
    description: "Accept payments from your customers",
    icon: scrollIconThree,
  },
]

const allProductSections = [
  {
    title: "Expense Management",
    subtitle: "Manage every spend effortlessly",
    items: [
      {
        title: "Secure ",
        title2: "Transactions",
        description:
          "Built with robust security protocols, EnKash Payment Pages ensure complete protection for every transaction.",
        image: crouselIconOne,
      },
      {
        title: "Automated ",
        title2: "Receipts",
        description:
          "Save time with automatic email confirmations and payment receipts sent directly to your customers.",
        image: crouselIconTwo,
      },

      {
        title: "Instant ",
        title2: "Refunds",
        description:
          "Enhance customer satisfaction with quick and hassle-free refunds.",
        image: crouselIconThree,
      },
      {
        title: "Saved Card ",
        title2: "Tokenization",
        description:
          "Let customers save their card details securely for faster checkouts while adhering to compliance standards.",
        image: crouselIconFour,
      },
      {
        title: "Custom ",
        title2: "Fields",
        description:
          "Collect essential customer data by adding personalized fields to your payment page.",
        image: crouselIconFive,
      },
    ],
  },
]

export { cardsData, allProductSections }
