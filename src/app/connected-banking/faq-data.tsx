
import Link from "next/link"

const faqData = [
  {
    question: "Do I need to switch banks to use EnKash Connected Banking?",
    answer: [
      {
        heading:
          "No. You continue using your existing bank accounts, we simply help you connect and automate them.",
      },
    ],
  },
  {
    question: "Is this safe and compliant?",
    answer: [
      {
        heading:
          "Absolutely. EnKash follows industry-grade encryption, data privacy protocols, and bank-grade security.",
      },
    ],
  },
  {
    question: "Can I use EnKash with multiple banks?",
    answer: [
      {
        heading:
          "Yes. You can connect and manage multiple bank accounts for better liquidity control.",
      },
    ],
  },
  {
    question: "Do funds pass through EnKash?",
    answer: [
      {
        heading:
          "No. Your money never leaves your bank accounts. EnKash just enables the routing and automation layer.",
      },
    ],
  },
  {
    question:
      "Is this available for all businesses?",
    answer: [],
     answerHTML: (
      <div className="my-2">
        <p>
          Yes. From funded startups to enterprise-grade businesses.
          <Link
            href="https://www.enkash.com/sales/"
            target="_blank"
          >
            Talk to our team
          </Link>{" "}
         to find your best fit.
        </p>
      </div>
    ),
  },
  
]

export const SecondfaqData = [
  {
    question: "Quick Pay Button",
    answer: [
      {
        heading:
          "Perfect for fixed-price payments. Designed for businesses that sell products or services at a set price",
      },
    ],
  },
  {
    question: "Checkout Button",
    answer: [
      {
        heading:
          "Sell multiple items with ease. Tailored for e-commerce businesses to allow customers to select multiple items and quantities effortlessly",
      },
    ],
  },
  {
    question: "Donate Button",
    answer: [
      {
        heading:
          "Let supporters contribute their desired amount. Ideal for NGOs and charitable organizations, allowing supporters to contribute any amount they wish.",
      },
    ],
  },
  {
    question: "Custom Button",
    answer: [
      {
        heading:
          "Add advanced options for tailored use cases. Perfect for businesses with unique payment needs. This button can be configured to match your exact requirements.",
      },
    ],
  },
]

export default faqData
