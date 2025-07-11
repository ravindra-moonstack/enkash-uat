import { FAQProps } from "../../../components/faq-new/faq"

// ✅ Create a type that excludes `index` & `answerVisible` & `onToggleAnswerVisibility`
type FAQDataItem = Omit<
  FAQProps,
  "index" | "answerVisible" | "onToggleAnswerVisibility"
>

const faqData: FAQDataItem[] = [
  {
    question: "What is a purchase card?",
    answer: [
      {
        heading:
          "Purchase cards can be used to make purchases as long as you have a balance on it, but they can be used only for purchases of goods and services.",
      },
    ],
  },
  {
    question: "What are the benefits of using a purchase card?",
    answer: [
      {
        heading:
          "Businesses can streamline the procurement process using a purchase card, reduce paperwork, and provide greater visibility and control over spending. A P-card also simplifies expense tracking and reduces the risk of fraud.",
      },
    ],
  },
  {
    question: "Who can use a purchase card?",
    answer: [
      {
        heading:
          "A P-card is typically issued to an employee authorized to make purchases on behalf of the company or organization. The employee is responsible for ensuring that the purchases made with the card comply with the company's policies and procedures.",
      },
    ],
  },
]

export default faqData
