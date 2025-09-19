import { TFAQProps } from "@/src/types/faq"

const faqData: TFAQProps[] = [
  {
    question: "What is Affordability Suite?",
    answer: [
      {
        heading:
          "EnKash’s affordability suite is a set of offers designed to make purchases flexible via EMI options, cashback, discounts, and exchange deals.",
      },
    ],
  },
  {
    question: "Who is eligible to use the Affordability Suite?",
    answer: [
      {
        heading:
          "Any registered business on the EnKash platform can access affordability options, subject to eligibility based on payment methods or partner terms.",
      },
    ],
  },
  {
    question: "What payment options are available with Affordability Suite?",
    answer: [
      {
        heading:
          "You can access no-cost EMI, credit/debit card offers, and pay-later options depending on your bank, card, or transaction size.",
      },
    ],
  },
  {
    question:
      "How do I know if my transaction qualifies for affordability offers?",
    answer: [
      {
        heading:
          "Simply proceed to checkout and select your payment method, and eligible affordability options will be displayed automatically.",
      },
    ],
  },
  {
    question: "How can my customer use PayLater?",
    answer: [
      {
        heading:
          "Customers can use PayLater as a payment option at EnKash’s checkout. However, before making a payment, customers would have to be registered with one of EnKash’s PayLater partners.",
      },
    ],
  },
  {
    question: "What is the difference between Cardless EMI & PayLater?",
    answer: [
      {
        heading:
          "Cardless EMI and PayLater are both flexible payment options, but they differ in how they work:",
        bullets: [
          "Cardless EMI allows customers to convert their purchases into EMIs without using a debit or credit card. It’s usually linked to a customer’s mobile number and requires approval from a lending partner or BNPL provider at checkout.",
          "PayLater lets customers defer the full payment to a later date—typically 15 to 30 days—without splitting it into installments. It's more like a short-term credit line.",
        ],
      },
    ],
  },
]

export default faqData
