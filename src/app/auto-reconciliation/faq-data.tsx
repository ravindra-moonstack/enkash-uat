import Link from "next/link"

const faqData = [
  {
    question: "What is automated reconciliation?",
    answer: [
      {
        heading:
          "Automated reconciliation digitizes the process by tracking all business transactions using technology to match transaction references.",
      },
    ],
  },
  {
    question: "Why is automated reconciliation critical for a business?",
    answer: [
      {
        heading:
          "Automated reconciliation ensures that all finance-related data is updated in real-time while allowing the finance team can concentrate on other critical aspects of the business.",
      },
    ],
  },
  {
    question:
      "Does the automated reconciliation module help improve the finance team’s performance? ",
    answer: [],
    answerHTML: (
      <div className="my-2">
        <p>
          As inferred above, the process of reconciliation can be long-drawn and
          detail-oriented, taking a lot of effort and time from the finance team
          when done manually.
        </p>
        <p>
          Automating the
          <Link href={process.env.URL} target="_blank">
            accounting reconciliation process
          </Link>
          makes it easier for them to manage audits and plan cash flows.
        </p>
      </div>
    ),
  },
  {
    question:
      "Why should a small and medium business consider automated reconciliation?",
    answer: [],
    answerHTML: (
      <div className="my-2">
        <p>
          Small and Medium Businesses operate with minimal resources to make an
          impact and deal with intense competition. By automating
          reconciliation, these businesses can maximise financial efficiency
          with optimum resources.
        </p>
      </div>
    ),
  },
  {
    question:
      "How does the automated reconciliation module help in business operations?",
    answer: [
      {
        headers:
          "With the automated reconciliation module, there is increased operational efficiency and savings on resources.",
      },
      {
        headers:
          "This, in turn, results in better business payment management and improved collections. When cash flow is optimised , then business operations become seamless and uninterrupted.",
      },
    ],
  },
  {
    question: "What are the benefits of automated bank reconciliation?",
    answer: [
      {
        headers:
          "Automating bank reconciliation has both direct and indirect benefits.",
      },
      {
        headers: "Here are some direct benefits:",
      },
      {
        bullets: [
          "Fast reconciliation",
          "Accurate matching of records",
          "Saving the team’s time",
          "Quicker update of the internal financial statement",
        ],
      },
      {
        headers: "Indirect benefits include:",
      },
      {
        bullets: [
          "Enhanced customer experience",
          "Lesser follow-up on collections",
          "Improved payables management",
          "Compliance with audits",
        ],
      },
    ],
  },
  {
    question: "Who prepares the bank reconciliation?",
    answer: [
      {
        heading:
          "The finance department is in charge of the bank accounts reconciliation process. Before automated reconciliation, the whole process of gathering records, seeking inputs, and asking for documentation was done manually.",
      },
      {
        heading:
          "However, today the process of bank reconciliation has been automated. ",
      },
    ],
  },
  {
    question: "What is the use of bank account reconciliation in Tally?",
    answer: [
      {
        heading:
          "Bank account reconciliation within the core financial system like Tally, ensures that all financial records are updated and all the financial stakeholders have a single source of truth. ",
      },
      {
        heading:
          "For instance, the finance controller will be able to access the current cash flow status with a few clicks. The sales department will be able to check if all the customer accounts that were due to make payments against their respective sales have done so and take decisions on further credit sales. ",
      },
      {
        heading:
          "The purchase manager can assess whether a particular vendor’s contract is worth renewing and if he or she is defaulting on the delivery of goods or services.",
      },
    ],
  },

  {
    question: "Why is EnKash collection analytics important for your business?",
    answer: [],
    answerHTML: (
      <div className="my-2">
        <p>
          <Link
            href={`${process.env.URL}/resources/blog/e-invoicing-under-gst/`}
            target="_blank"
          >
            EnKash collection analytics
          </Link>
          is crucial for businesses as it empowers them to predict and manage
          customer payment behavior effectively, leading to reduced bad debt,
          improved cash flow, and overall financial stability. It provides a
          strategic advantage in optimizing debt collection processes for
          sustainable business growth.
        </p>
      </div>
    ),
  },
  {
    question:
      "Can collection analytics help in reducing bad debt and improving cash flow?",
    answer: [
      {
        heading:
          "Yes, collection analytics can significantly contribute to reducing bad debt and improving cash flow.",
      },
    ],
  },

  {
    question: "Why is DSO management important for businesses?",
    answer: [],
    answerHTML: (
      <div className="my-2">
        <p>
          Days Sales Outstanding (DSO) management is crucial for businesses
          because it provides insight into the average time it takes for a
          company to collect payments from its customers. A lower DSO indicates
          that a business is efficient in collecting receivables, contributing
          to improved cash flow. Efficient DSO management allows businesses to
          optimize working capital, reduce the risk of bad debts, and enhance
          overall financial stability. It also helps in assessing the
          effectiveness of credit and collection policies, enabling businesses
          to make informed decisions to improve their cash conversion cycle.
        </p>
      </div>
    ),
  },
  {
    question:
      "Is it important to have advanced data analysis skills to implement collection analytics for businesses?",
    answer: [
      {
        heading:
          "While having advanced data analysis skills can be beneficial, many collection analytics solutions are designed to be user-friendly and accessible to individuals without extensive technical expertise. ",
      },
      {
        heading:
          "Businesses can leverage pre-built models and user-friendly interfaces to implement collection analytics effectively, even without a deep understanding of advanced data analysis.",
      },
    ],
  },
]

export const SecondfaqData = [
  {
    question: "Quick Pay Button",
    answer: [
      {
        heading:
          "Perfect for fixed-price payments. Designed for businesses that sell products or services at a set price",
      },
    ],
  },
  {
    question: "Checkout Button",
    answer: [
      {
        heading:
          "Sell multiple items with ease. Tailored for e-commerce businesses to allow customers to select multiple items and quantities effortlessly",
      },
    ],
  },
  {
    question: "Donate Button",
    answer: [
      {
        heading:
          "Let supporters contribute their desired amount. Ideal for NGOs and charitable organizations, allowing supporters to contribute any amount they wish.",
      },
    ],
  },
  {
    question: "Custom Button",
    answer: [
      {
        heading:
          "Add advanced options for tailored use cases. Perfect for businesses with unique payment needs. This button can be configured to match your exact requirements.",
      },
    ],
  },
]

export default faqData
