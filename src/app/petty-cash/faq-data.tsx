import { TFAQProps } from "@/src/types/faq"
import Link from "next/link"

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
  {
    question: "What is petty cash?",
    answer: [
      {
        heading: "Petty cash ",
      },
    ],
    answerHTML: (
      <div>
        <p>
          <Link
            className="mx-1"
            href={`${process.env.NEXT_PUBLIC_URL}/resources/blog/what-is-petty-cash-and-its-types`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Petty cash
          </Link>
          {
            " refers to small amounts of money used by businesses to handle day-to-day operational expenses such as local travel, office supplies, minor repairs, or staff reimbursements. In India, petty cash is commonly used when expenses are frequent, low-value, and need quick settlement without formal purchase orders."
          }
        </p>
      </div>
    ),
  },
  {
    question: "What is a petty cash card?",
    answerHTML: (
      <div>
        <p>
          {"A petty cash card is a "}
          <Link
            className="mx-1"
            href={`${process.env.NEXT_PUBLIC_URL}/prepaid-card`}
            rel="noopener noreferrer"
            target="_blank"
          >
            prepaid corporate card
          </Link>
          {
            " issued to employees for handling small business expenses without using physical cash. These cards allow controlled spending, digital tracking, and instant visibility into transactions, making them a more secure and auditable alternative to traditional petty cash systems."
          }
        </p>
      </div>
    ),
  },
  {
    question: "What is petty cash management?",
    answerHTML: (
      <div>
        <p>The best petty cash management application should offer:</p>
        <ul>
          <li>
            <p>Digital petty cash or prepaid cards</p>
          </li>
          <li>
            <p>Real-time expense tracking and approvals</p>
          </li>
          <li>
            <p>Receipt capture with OCR</p>
          </li>
          <li>
            <p>Policy-based spending controls</p>
          </li>
          <li>
            <p>GST-ready reports and audit trails</p>
          </li>
        </ul>
        <p>
          {"Modern platforms like EnKash integrate petty cash with "}
          <Link
            className="mx-1"
            href={`${process.env.NEXT_PUBLIC_URL}/products/expense-management`}
            rel="noopener noreferrer"
            target="_blank"
          >
            expense management
          </Link>
          {", reimbursements, and "}
          <Link
            className="mx-1"
            href={`${process.env.NEXT_PUBLIC_URL}/products/corporate-cards`}
            rel="noopener noreferrer"
            target="_blank"
          >
            corporate cards
          </Link>
          {", helping finance teams reduce manual work and improve compliance."}
        </p>
      </div>
    ),
  },
  {
    question: "What is petty cash expense?",
    answer: [
      {
        heading:
          "A petty cash expense refers to small, day-to-day business costs paid from the petty cash fund, such as office supplies, courier charges, snacks, or quick travel-related purchases.",
      },
    ],
  },
  {
    question: "What is a petty cash expense list?",
    answer: [
      {
        heading:
          "A petty cash expense list is a detailed record of all small expenses paid during a specific period. It typically includes the date, purpose, amount, employee name, and supporting receipts. Digital systems automatically generate these lists, making reconciliations, audits, and GST reporting easier for finance teams.",
      },
    ],
  },
  {
    question: "Is digital petty cash better than cash-based petty cash?",
    answer: [
      {
        heading:
          "Yes. Digital petty cash reduces cash leakage, improves transparency, and provides real-time visibility into spending. It also simplifies approvals, reporting, and audits compared to manual cash handling.",
      },
    ],
  },
  {
    question: "Can petty cash expenses be tracked for GST compliance?",
    answer: [
      {
        heading:
          "Yes. When petty cash expenses are recorded digitally with valid invoices, they can be tracked for GST reporting and audits. Platforms with built-in expense management make it easier to maintain compliance and documentation.",
      },
    ],
  },
  {
    question: "Who should use a petty cash management system?",
    answer: [
      {
        heading:
          "Petty cash management systems are ideal for businesses with multiple employees, locations, or frequent small expenses, including startups, SMEs, enterprises, retail chains, and field teams.",
      },
    ],
  },
  {
    question:
      "Can petty cash be integrated with expense management and reimbursements?",
    answer: [
      {
        heading:
          "Yes. Modern solutions allow petty cash, reimbursements, and corporate cards to operate on a single platform, giving finance teams unified control and better visibility across all business expenses.",
      },
    ],
  },
]

export default faqData
