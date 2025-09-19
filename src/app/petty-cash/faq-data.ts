import { TFAQProps } from "@/src/types/faq"

const faqData: TFAQProps[] = [
  {
    question: "What is digital petty cash?",
    answer: [
      {
        heading:
          "Digital petty cash replaces physical cash with prepaid cards or UPI wallets. It lets employees spend within defined limits while every transaction is tracked, approved, and reconciled automatically.",
      },
    ],
  },
  {
    question: "Can I issue separate budgets for different branches?",
    answer: [
      {
        heading:
          "Yes. You can assign custom budgets per branch, employee, or team and even automate fund top-ups or reallocation.",
      },
    ],
  },
  {
    question: "What if an employee overspends or breaches policy?",
    answer: [
      {
        heading:
          "The system flags violations in real time and notifies admins instantly. You can also block or restrict cards based on rules.",
      },
    ],
  },
  {
    question: "Do I need to use EnKash cards for this?",
    answer: [
      {
        heading:
          "Yes, you’ll need EnKash-issued prepaid cards or UPI wallets, which are seamlessly integrated with our Expense Management Suite.",
      },
    ],
  },
  {
    question: "How does reconciliation work?",
    answer: [
      {
        heading:
          "Every transaction is matched against the receipts and expense logs submitted by employees. The system highlights mismatches or missing receipts and updates reconciliation reports automatically.",
      },
    ],
  },
]

export default faqData
