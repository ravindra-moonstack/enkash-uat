import { FAQProps } from "../../../components/faq-new/faq"

// ✅ Create a type that excludes `index` & `answerVisible` & `onToggleAnswerVisibility`
type FAQDataItem = Omit<
  FAQProps,
  "index" | "answerVisible" | "onToggleAnswerVisibility"
>

const faqData: FAQDataItem[] = [
  {
    question: "What is a travel and expense card?",
    answer: [
      {
        heading:
          "A travel and expense card is a specialized corporate credit card designed to streamline and simplify expenses related to business travel.  These purpose-built cards allow employees to make travel-related expenditures, such as booking flights, hotels, and dining, while enabling businesses to monitor and manage these expenses effectively.",
      },
    ],
  },
  {
    question:
      "Can I access a dedicated dashboard for managing my travel and expense cards?",
    answer: [
      {
        heading:
          "You can access a user-friendly dashboard as your control center for managing travel and expense cards. This dashboard offers real-time visibility and control over your virtual/physical card usage, allowing you to set spending limits, block or cancel cards, review transaction history, and easily manage user access.",
      },
    ],
  },
  {
    question:
      "What should I do if I lose my travel and expense card while traveling or notice suspicious activity on it?",
    answer: [
      {
        heading:
          "If your travel and expense card is lost during traveling or if you suspect any unauthorized activity, you can instantly block the card. For added convenience and security, in case of emergencies, you can also request the issuance of a virtual card to replace the lost or compromised one.",
      },
    ],
  },
  {
    question:
      "What measures can I take to prevent fraud and ensure the security of travel and expense cards?",
    answer: [
      {
        heading:
          "Travel and Expense cards are designed to offer robust control and visibility over your business travel expenses, ensuring security and preventing fraud. To bolster security, you can define spending limits to restrict excessive or unauthorized expenditures and closely monitor transaction history to identify suspicious activities.",
      },
    ],
  },
  {
    question:
      "How can travel and expense cards assist me in managing my traveling expenses?",
    answer: [
      {
        heading:
          "Travel and Expense cards serve as an effective tool for maximizing control over your entire travel expenditure. These cards offer a multi-faceted approach to optimization: first, you can establish limits and approval policies to prevent overspending. Additionally, you'll benefit from comprehensive spend visibility.",
      },
    ],
  },
  {
    question:
      "How does a Travel and Expense Card improve business travel and expense management?",
    answer: [
      {
        heading:
          "EnKash’s Travel and Expense Cards are built to simplify business travel and expense workflows by offering real-time control and automated policy compliance. You can set spending limits, approve requests faster, and ensure your teams travel within budget.",
      },
    ],
  },
]

export default faqData
