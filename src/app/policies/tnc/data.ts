import { payment, platform, prepaid } from "./img"

const tabs = [{ key: "payments" }, { key: "prepaid" }, { key: "platform" }]

const cards = [
  {
    key: "payments",
    description:
      "Understand our payment terms for secure, compliant, and transparent transactions.",
    titleHtml: "Payments",
    cardImage: payment,
  },
  {
    key: "prepaid",
    description:
      "Review prepaid usage terms to ensure smooth and compliant transactions.",
    titleHtml: "Prepaid Program",
    cardImage: prepaid,
    buttonUrl: "/policies/prepaid-program/tnc",
  },
  {
    key: "platform",
    description: "Know our platform usage terms for fair and secure services.",
    titleHtml: "Platform",
    cardImage: platform,
    buttonUrl: "/policies/platform/tnc",
  },
]

export { cards, tabs }
