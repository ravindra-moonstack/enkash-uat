import { FAQProps } from "../../components/faq-new/faq"

// ✅ Create a type that excludes `index` & `answerVisible` & `onToggleAnswerVisibility`
type FAQDataItem = Omit<
  FAQProps,
  "index" | "answerVisible" | "onToggleAnswerVisibility"
>

const faqData: FAQDataItem[] = [
  {
    question: "What is a DIY card module?",
    answer: [
      {
        heading:
          "The DIY card module is a solution for businesses to manage corporate card expenses. It offers customizable spending limits, real-time expense tracking, and easy card management with a user-friendly dashboard. This centralized solution simplifies processes like issuing purpose-specific cards and disabling cards, ensuring efficient control and optimization of overall business expenditure.",
      },
    ],
  },
  {
    question: "How can I apply for the DIY card solution?",
    answer: [
      {
        heading:
          "To apply for the DIY card solution, get in touch with us and share your requirements.",
      },
    ],
  },
  {
    question: "What documents are needed to apply for this solution?",
    answer: [
      {
        heading:
          "To apply for this solution, follow these steps:\n\nCreate an EnKash account by completing a simple registration process, and verify your account with KYC details.\n\nChoose the type of business entity: Sole Proprietorship, Partnership, Private Limited Company, Public Limited Company, or others.\n\nProvide the following documents:\n\n• Sole Proprietorship: Business financial statements for the past two years, along with the owner's credentials.\n• Partnership: Business financial statements for the past two years and personal financial statements of the partners.\n• Private Limited Company: Business financial statements for the past two years and the finances of the directors.\n• Public Limited Company: Audited financial statements for the past two years, details of the company structure, and the board of directors.\n\nSubmit financials based on your business type:\n• GSTIN certificate.\n• PAN details of the business.\n• Owner/Partner/Director details.\n\nProvide credit scores for the company or proprietor/partner/directors.\n\nInclude additional documents such as:\n• Partnership deed for partnership firms.\n• Shareholding structure for private limited companies.\n• Shareholding pattern for public limited companies.\n\nSubmit any other relevant documents requested during the final credit assessment to ensure the best possible credit limit for your business.",
      },
    ],
  },
  {
    question: "How does a DIY card solution help with audits?",
    answer: [
      {
        heading:
          "We provide a free smart dashboard along with your card that enables you to track and manage expenses in real time. You can also update entries in real time and keep track of approval status. All these factors will help you with audits.",
      },
    ],
  },
  {
    question: "How can I prevent fraud with the DIY card solution?",
    answer: [
      {
        heading:
          "To prevent fraud using the DIY card solution, you can employ OTP authorization for secure card usage. Additionally, if the card is lost or misplaced, promptly block it using the DIY dashboard. This ensures added security and prevents unauthorized access to the card.",
      },
    ],
  },
  {
    question: "How can I control expenses with the DIY card solution?",
    answer: [
      {
        heading:
          "To control expenses with the DIY card solution, utilize the DIY dashboard to monitor and analyze your spending. Receive regular analytics for a comprehensive overview, allowing you to optimize business spend and maintain control over expenses.",
      },
    ],
  },
]

export default faqData
