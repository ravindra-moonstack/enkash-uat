import { FAQProps } from "@/components/faq/faq"
import Link from "next/link"
import styles from "./page.module.scss"

const faqData: FAQProps[] = [
  {
    question:
      "What is an instant settlement in a payment gateway, and how does it benefit businesses?",
    answer: [
      {
        heading:
          "Instant Settlement gateway refers to the process of transferring funds from the customer's account to the merchant's account after a successful transaction. ",
      },
      {
        heading:
          "When a customer makes a purchase using a payment gateway with instant settlement, the transaction is initially authorized, and then the funds are settled or transferred to the merchant's account, typically within a certain timeframe.",
      },
    ],
  },
  {
    question: "How do I get started with EnKash’s instant settlements?",
    answer: [
      {
        heading:
          "Visit the EnKash website or contact our customer support team to learn more about getting started with instant settlements.",
      },
    ],
  },
  {
    question: "Is there a minimum transaction amount for instant settlements?",
    answer: [
      {
        heading:
          "No, there is no minimum transaction amount for instant settlements.",
      },
    ],
  },
  {
    question: "Who can benefit from instant settlements?",
    answer: [],
    answerHTML: (
      <div className="mb-4">
        <h4 className={styles.heading}>
          Any business that wants faster access to its cash flow can benefit
          from instant settlements. This includes businesses of all sizes, from
          freelancers and small businesses to large enterprises.
        </h4>
      </div>
    ),
  },
  {
    question: "Is there a waiting period for settlements with EnKash?",
    answer: [
      {
        heading:
          "No, there is no waiting period. EnKash offers super-fast settlements, allowing you to receive your customer payments straight into your bank account every day.",
      },
    ],
  },
]

const secondFaqData = [
  {
    question: " What are the benefits of real-time settlements?",
    answer: [
      {
        heading: "Real-time settlements offer several advantages, including:",
      },
      {
        bullets: [
          "Improved cash flow management: Instant access to funds allows for better financial planning and the ability to seize opportunities promptly.",
          "Enhanced flexibility: With funds available immediately, businesses can react swiftly to changing circumstances and make timely decisions.",
          "Streamlined operations: Real-time settlements reduce administrative burdens associated with tracking and reconciling payments, leading to increased efficiency.",
          "Better customer relations: Prompt settlement of transactions can enhance customer satisfaction and loyalty by providing a seamless payment experience.",
        ],
      },
    ],
  },
  {
    question: " What is the settlement schedule for same-day Settlements?",
    answer: [
      {
        heading:
          "Same-day settlements with EnKash follow a T+0 schedule, meaning funds from transactions are transferred to your designated account on the same day the transaction occurs. This ensures quick and consistent cash flow, allowing you to access your earnings without delay.",
      },
    ],
  },
  {
    question: "How secure are instant settlements?",
    answer: [
      {
        heading:
          "EnKash employs robust security measures and follows industry best practices to ensure the safety and security of your financial transactions.",
      },
    ],
  },
]

export { faqData, secondFaqData }
