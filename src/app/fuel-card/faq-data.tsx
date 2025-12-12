import { TFAQProps } from "@/src/types/faq"
import Link from "next/link"

const faqData: TFAQProps[] = [
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

  /* -------------------- NEW FAQ ENTRIES --------------------- */

  {
    question: "What is a Fuel Surcharge Waiver?",
    answer: [
      {
        heading:
          "A fuel surcharge waiver is a benefit offered by banks and corporate card providers where the extra fee charged on fuel transactions is refunded to the customer. In India, fuel stations usually apply a surcharge on card payments, and this waiver helps reduce that additional cost.",
      },
      {
        heading:
          "For businesses, especially those managing fleets, logistics teams or high-volume fuel expenses, a fuel surcharge waiver leads to direct savings on every refuelling transaction and improves overall expense efficiency.",
      },
    ],
  },
  {
    question: "How does a Fuel Surcharge Waiver benefit businesses?",
    answer: [
      {
        heading:
          "A fuel surcharge waiver helps businesses save on every fuel transaction by refunding the additional surcharge typically charged at fuel stations. This reduces overall fuel costs, lowers monthly operating expenses, and supports more accurate budgeting.",
      },
      {
        heading:
          "For companies with delivery teams, logistics fleets, sales staff, or on-field employees, a fuel surcharge waiver ensures predictable fuel spend, better cost control, and improved expense management across locations.",
      },
    ],
  },
  {
    question: "What is a Petrol Card?",

    answerHTML: (
      <div>
        <p>
          {
            "A petrol card is a dedicated fuel payment card that allows users or businesses to pay for petrol, diesel, and other fuel services at authorised fuel stations across India. It functions like a "
          }
          <Link
            className="mx-1"
            href={`${process.env.NEXT_PUBLIC_URL}/resources/blog/prepaid-cards-a-defintive-guide-to-growth`}
            rel="noopener noreferrer"
            target="_blank"
          >
            prepaid card
          </Link>
          but is restricted only to fuel-related transactions.
        </p>
        <p>
          Businesses use petrol cards to control fuel spend, track usage in real
          time, reduce cash handling, and ensure that employees refuel only at
          approved locations.
        </p>
      </div>
    ),
  },
  {
    question: "What are the key benefits of Petrol Cards?",
    answerHTML: (
      <div>
        <p>
          {
            "Petrol cards provide businesses with stronger control over fuel expenses and offer multiple advantages such as spending limits, fuel surcharge waivers, and real-time transaction tracking. They help prevent misuse by restricting purchases only to fuel, improving transparency and reducing fraud."
          }
          {"Companies also benefit from easier "}
          <Link
            className="mx-1"
            href={`${process.env.NEXT_PUBLIC_URL}/resources/blog/employee-expense-reimbursement`}
            rel="noopener noreferrer"
            target="_blank"
          >
            reimbursements,
          </Link>
          {
            "automated expense records, and better visibility into fuel consumption across teams, vehicles, and locations."
          }
        </p>
      </div>
    ),
  },
  {
    question: "How to apply for a Fuel Card for your company?",
    answerHTML: (
      <div>
        <p>
          {
            "You can apply for an EnKash Fuel Card by sharing your business details, basic KYC documents, and contact information through the EnKash application page. After quick verification, your fuel cards are issued and activated for your teams, vehicles, or branch locations.  To begin the process,"
          }
          <Link
            className="mx-1"
            href={`${process.env.NEXT_PUBLIC_URL}/sales`}
            rel="noopener noreferrer"
            target="_blank"
          >
            click here to apply for an EnKash Fuel Card for your company.
          </Link>
        </p>
      </div>
    ),
  },
  {
    question: "Are Fuel Cards different from regular corporate cards?",
    answer: [
      {
        heading:
          "Yes, Fuel Cards are different from regular corporate cards. A Fuel Card is a restricted-use payment card that can be used only for petrol, diesel, or other fuel-related transactions at authorised fuel stations. This gives businesses stronger spending control, clearer budgeting, and detailed fuel-specific reports.",
      },
      {
        heading:
          "Regular corporate cards allow broader business expenses, while a Fuel Card focuses only on fuel, helping companies prevent misuse and manage fleet or on-field travel costs more efficiently.",
      },
      {
        heading:
          "Businesses using the EnKash Fuel Card also get real-time tracking, spending limits, and automated expense visibility to improve fuel management across teams and locations.",
      },
    ],
  },
  {
    question: "Do Fuel Cards offer GST benefits?",
    answerHTML: (
      <div>
        <p>
          {"Yes, Fuel Cards can offer"
          }
          <Link
            className="mx-1"
            href={`${process.env.NEXT_PUBLIC_URL}/resources/blog/what-is-gst`}
            rel="noopener noreferrer"
            target="_blank"
          >
           GST
          </Link>
          {"benefits. Businesses can claim Input Tax Credit (ITC) on eligible fuel expenses when the fuel purchase comes with a valid GST-compliant invoice. This helps reduce overall tax liability and improves monthly reconciliation."}


        </p>
        <p>{"Companies using the EnKash Fuel Card get clear digital records, GST-ready invoices, and organised expense data, making GST claims and filing easier and more accurate."}</p>
      </div>
    ),
  },
  {
    question: "Are Fuel Cards safe for driver or employee use?",
    answer: [
      {
        heading:
          "Yes, Fuel Cards are safe for drivers and employees. They come with built-in security features such as PIN protection, spend limits, merchant restrictions, and real-time transaction alerts.",
      },
      {
        heading:
          "With the EnKash Fuel Card, businesses also get advanced security options, location-wise controls, instant card blocking, and real-time dashboards that make fuel usage safer and fully trackable across teams and vehicles.",
      },
    ],
  },
]

export default faqData
