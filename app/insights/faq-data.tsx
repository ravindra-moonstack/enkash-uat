import { FAQProps } from "@/components/faq/faq";
import Link from "next/link";
const faqData: FAQProps[] = [
  {
    question: "What is an employee insight dashboard?",
    answer: [],
    answerHTML: (
      <>
        <h4>
          An employee insight dashboard is a centralized analytics dashboard
          provided by <Link href="/">EnKash</Link> for the admin or finance
          teams that offers a comprehensive view of employee business expenses
          dissected by department, expense heads, and employee grades providing
          detailed analytics and visualizations. It allows businesses to track
          and analyze spending patterns, monitor deviations offering insights
          into individual and overall expenses for enhanced financial control.
        </h4>
      </>
    ),
  },
  {
    question: "How can an employee insight dashboard benefit my organization?",
    answer: [
      {
        heading:
          "An employee insight dashboard can benefit your organization by providing real time insights of expenses, enabling proactive decision-making. It helps identify cost-saving opportunities, optimize budgets, monitor and regulate budget deviations, and facilitate quick responses to emerging financial trends.",
      },
    ],
  },
  {
    question: "Is an EnKash employee insight dashboard user-friendly?",
    answer: [
      {
        heading:
          "Yes, the EnKash employee insight dashboard is designed to be user-friendly. It offers intuitive visualizations such as charts, graphs, and tables, making it easy for users at all levels to comprehend complex expense data.",
      },
    ],
  },
  {
    question: "Is data security ensured with an employee insight dashboard?",
    answer: [
      {
        heading:
          "Yes, data security is a priority with the EnKash employee insight dashboard. The platform ensures the confidentiality and compliance of financial data through robust encryption and security measures.",
      },
    ],
  },
];

export default faqData;
