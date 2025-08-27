import Link from "next/link"
import { FAQProps } from "../../../components/faq-new/faq"

// ✅ Create a type that excludes `index` & `answerVisible` & `onToggleAnswerVisibility`
type FAQDataItem = Omit<
  FAQProps,
  "index" | "answerVisible" | "onToggleAnswerVisibility"
>

const faqData: FAQDataItem[] = [
  {
    question:
      "What is digital marketing, and how does the digital marketing card aid its management?",
    answer: [],
    answerHTML: (
      <div>
        <h4>
          Digital marketing promotes products or services using digital channels
          like search engines, social media, email, and websites. Digital
          marketing cards serve as financial control tools in this landscape,
          consolidating expenses scattered across platforms. These purpose-based
          cards enable businesses to manage{" "}
          <Link
            href={`${process.env.URL}/resources/blog/enkash-corporate-cards-for-digital-marketers/`}
            target="_blank"
          >
            digital marketing expenses
          </Link>{" "}
          efficiently in a centralized place, simplifying financial oversight
          and offering a comprehensive view of their digital marketing
          activities.
        </h4>
      </div>
    ),
  },
  {
    question:
      "Can I implement usage limits on my digital marketing card to safeguard against overspending?",
    answer: [
      {
        heading:
          "These cards offer a highly flexible solution to customize usage limits on their digital marketing budgets, ensuring a stringent check against overspending. The best part is that these limits can be aligned with your business’s specific marketing budget, making it easier to stay within financial boundaries. This feature empowers companies to maintain strict financial control, preventing unintentional or excessive expenditures in their digital marketing efforts.",
      },
    ],
  },
  {
    question:
      "How can digital marketing cards simplify the process of running marketing campaigns?",
    answer: [
      {
        heading:
          "Running marketing campaigns has become effortless and efficient with digital marketing cards. You can easily select and execute campaigns by seamlessly integrating this card into your digital marketing platform. The card's setup allows you to manage all expenses related to your campaigns in one central location. This simplifies both the initiation and tracking of campaigns, enhancing your ability to manage and optimize your digital marketing efforts effectively.",
      },
    ],
  },
  {
    question:
      "Can I set specific limits on my digital marketing card for various expenditures?",
    answer: [],
    answerHTML: (
      <div>
        <h4>
          Companies can issue this{" "}
          <Link
            href={`${process.env.URL}/resources/blog/enkash-corporate-cards-for-digital-marketers/`}
            target="_blank"
          >
            corporate card for digital marketing
          </Link>{" "}
          purposes and establish specific spending limits for distinct
          categories of expenditures. For instance, you can set limits for
          campaign-related expenses and subscription renewals based on your
          marketing budget. Furthermore, you can manage the types of
          expenditures you want to allow, ensuring that payments to specific
          websites or services align with your predefined financial boundaries.
        </h4>
      </div>
    ),
  },
  {
    question:
      "How to prevent the misuse of its digital marketing card for marketing expenses?",
    answer: [
      {
        heading:
          "These digital marketing cards employ a well-defined usage policy to prevent misuse. This policy acts as a safeguard, ensuring that only specific types of expenditures pre-approved by the marketing team are allowed on the card. These cards offer a secure and efficient way to protect against unauthorized or inappropriate spending by controlling and restricting card usage through predefined parameters. This level of control ultimately contributes to enhanced financial discipline and transparency in managing your digital marketing expenses.",
      },
    ],
  },
]

export default faqData
