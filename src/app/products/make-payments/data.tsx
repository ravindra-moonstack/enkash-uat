import {
  crouselIconOne,
  crouselIconTwo,
  crouselIconThree,
  crouselIconFour,
  crouselIconFive,
} from "."

const cardData = [
  {
    value: "95% ",
    title: "Reduction in Payment Errors",
  },
  {
    value: "100%",
    title: "Payment Compliance",
  },
  {
    value: "90%",
    title: "Improvement in Efficiency",
  },
]

const allProductSections = [
  {
    title: "Expense Management",
    subtitle: "Manage every spend effortlessly",
    items: [
      {
        title: "Cost Reduction ",

        description: "Reduce manual effort, payment delays & leakages.",
        image: crouselIconOne,
      },
      {
        title: " Faster Processing ",

        description: "Automate workflows and eliminate bottlenecks.",
        image: crouselIconTwo,
      },

      {
        title: "Spend Visibility  ",

        description: "Get a complete view of payables, anytime.",
        image: crouselIconThree,
      },

      {
        title: "Risk Control ",

        description: "Reduce fraud, errors & non-compliant payments.",
        image: crouselIconFour,
      },
      {
        title: "Better Relationships  ",

        description: "Make timely payouts to improve vendor relationships.",
        image: crouselIconFive,
      },
    ],
  },
]

export { allProductSections, cardData }
