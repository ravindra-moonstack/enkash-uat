import { FAQProps } from "../../../components/faq-new/faq"

// ✅ Create a type that excludes `index` & `answerVisible` & `onToggleAnswerVisibility`
type FAQDataItem = Omit<
  FAQProps,
  "index" | "answerVisible" | "onToggleAnswerVisibility"
>

const faqData: FAQDataItem[] = [
  {
    question: "What are fuel cards?",
    answer: [
      {
        heading:
          "Fuel cards are specialized payment cards designed exclusively for purchasing fuel. Fuel Cards by EnKash, for instance, are prepaid cards restricted to fuel-related expenses. Our fuel cards ensure employees using their vehicles for work-related travel can do so without financial constraints. This convenient solution eliminates the need to rely on personal funds and streamlines the process of managing travel expenses for businesses.",
      },
    ],
  },
  {
    question: "Why are fuel cards important for my business?",
    answer: [
      {
        heading:
          "Fuel cards play a crucial role in business operations. They enable employees to travel for work without relying on their funds. Moreover, fuel cards significantly reduce paperwork and enhance operational efficiency, especially in work-related transport and local travel. Fuel Cards offer an effective solution to manage fuel expenses, optimize budgets, and streamline administrative processes.",
      },
    ],
  },
  {
    question:
      "Does the fuel card module help improve the finance team’s performance? If yes, how?",
    answer: [
      {
        heading:
          "Fuel cards are a boon for finance teams. Instead of laboriously reviewing numerous fuel receipts, seeking approvals, and processing employee claims manually, EnKash offers a streamlined approach. With EnKash, you can issue cards to your employees for fuel expenses. They can effortlessly scan their receipts for approval, and the card balance can be topped off based on usage. Monitoring, blocking, unblocking, and usage restrictions become simple tasks.",
      },
    ],
  },
  {
    question:
      "Why should a business consider offering fuel cards to employees?",
    answer: [
      {
        heading:
          "Businesses should consider providing fuel cards to employees for several compelling reasons. Fuel Cards from EnKash eliminate reimbursement hassles by providing pre-loaded cards for company-funded fuel expenses when employees use their vehicles for business travel. This simplifies financial processes and enhances travel experiences, contributing to overall efficiency and resource savings for the finance team.",
      },
    ],
  },
  {
    question: "How do fuel cards cut down business fraud?",
    answer: [
      {
        heading:
          "Fuel cards effectively reduce business fraud risk. They can only be used to purchase fuel, and that too at authorized outlets, eliminating the possibility of misuse. Our fuel cards offer additional security measures, such as passcodes or OTPs, to prevent unauthorized usage. These measures ensure that fuel-related expenses are genuine and prevent any fraudulent activities.",
      },
    ],
  },
  {
    question: "Who is eligible to apply for a fuel card?",
    answer: [
      {
        heading:
          "Fuel cards are typically available to businesses and employees who engage in regular work-related travel and fuel expenses. Eligibility criteria may vary depending on the issuer, but they are generally accessible to entities seeking a streamlined approach to fuel management.",
      },
    ],
  },
  {
    question: "How can a company fuel card save money for businesses?",
    answer: [
      {
        heading:
          "Fuel cards by EnKash help businesses save money by optimizing fuel expenses. Through features like spending limits and usage restrictions, businesses can control and manage their fuel budgets effectively. Reducing administrative overhead and streamlining processes with fuel cards also translates into significant business cost savings.",
      },
    ],
  },
  {
    question: "Which businesses can use a company fuel card?",
    answer: [
      {
        heading:
          "Company fuel cards can benefit companies of all sizes and industries. Our fuel cards are versatile and can be customized to suit the specific needs of different businesses, whether large corporations or small startups.",
      },
    ],
  },
  {
    question: "Where can you use a company fuel card?",
    answer: [
      {
        heading:
          "Fuel cards are designed for authorized fuel outlets, ensuring employees can access fuel conveniently and securely. These cards give businesses control over where and how they spend on fuel, optimizing their expenses.",
      },
    ],
  },
  {
    question: "What is a Fleet Card?",
    answer: [
      {
        heading:
          "A Fleet Card is a specialized prepaid card designed to manage all vehicle-related business expenses such as fuel, tolls, repairs, and maintenance. It helps companies track spending per driver or vehicle in real-time.",
      },
    ],
  },
  {
    question: "Are Fleet Cards and Fuel Cards the Same?",
    answer: [
      {
        heading:
          "No, Fleet Cards and Fuel Cards are not the same, although they serve related purposes.",
        bullets: [
          "A Fuel Card is typically restricted to fuel purchases only at authorized fuel stations.",
          "A Fleet Card, on the other hand, offers broader coverage, allowing businesses to manage all vehicle-related expenses, including fuel, tolls, maintenance, parking, and repairs.",
        ],
      },
      {
        heading:
          "In short, all fuel cards are a part of fleet management, but not all fleet cards are limited to fuel alone.",
      },
    ],
  },
  {
    question: "What is the best fuel card for businesses in India?",
    answer: [
      {
        heading:
          "The best fuel card for businesses in India is one that offers real-time tracking, robust fraud protection, wide acceptance at fuel stations, and seamless expense control. EnKash Fuel Cards check all these boxes, making them the top choice for businesses seeking efficiency and cost savings.",
      },
    ],
  },
]

export default faqData
