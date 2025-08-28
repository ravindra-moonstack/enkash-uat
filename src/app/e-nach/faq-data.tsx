import Link from "next/link"

const faqData = [
  {
    question: "What is an e-NACH mandate?",
    answer: [],
    answerHTML: (
      <div className="my-2">
        <h4>
          Electronic National Automated Clearing House or e-NACH is a way to
          <Link target="_blank" href={`${process.env.URL}`}>

            automate recurring payments
          </Link>
          like electricity bills, insurance premiums, SIPs, telephone bills, and
          other utility bills with a bank account.
        </h4>
      </div>
    ),
  },
  {
    question: "How do I register for e-NACH online?",
    answer: [
      {
        bullets: [
          "Login to EnKash",
          "Register the business for e-NACH by filling in the necessary details like personal information, bank account details, and the amount to be authorized for transactions",
          "Submit the details and wait for verification",
          "An intimation regarding registration approval will be received on the registered email ID and phone number",
        ],
      },
    ],
  },
  {
    question: "How are e-NACH and e-Mandate different?",
    answer: [
      { heading: "Governing Authority" },
      {
        heading:
          "eNACH is governed by the National Payments Corporation of India (NPCI) and covers over 40+ banks.",
      },
      { heading: "e-Mandates are governed by individual banks." },
      { heading: "Types of Payments" },
      { heading: "eNACH excels in automating recurring payments." },
      {
        heading:
          "eMandate provides versatility, accommodating both recurring and one-time transactions.",
      },
      { heading: "Control" },
      {
        heading:
          "eNACH offers automated processing with predetermined schedules.",
      },
      {
        heading:
          "eMandate provides flexibility to initiate transactions as needed.",
      },
      { heading: "Usage" },
      {
        heading:
          "eNACH is commonly used for subscriptions, loan repayments, and utilities.",
      },
      {
        heading:
          "eMandate is used for various payments including ad-hoc payments.",
      },
    ],
  },
  {
    question: "What are the advantages of e-NACH and e-Mandate?",
    answer: [
      {
        bullets: [
          "Both e-NACH and e-Mandate bring efficiency to payment processing in businesses",
          "E-NACH has replaced the manual methods of authorization and e-Mandate has eliminated the need for paperwork, reducing workload",
          "e-NACH ensures timely collection with predetermined schedules and removes the need to be involved manually",
          "Customers can easily make recurring payments without any friction in the process",
          "e-NACH and e-Mandate can be customized as per business requirements and can be scaled easily as the business grows without disrupting the payment processing",
          "Transactions processed via e-NACH and e-Mandate are digitally encrypted which eliminates the risk of data violation",
        ],
      },
    ],
  },
  {
    question: "How do I cancel my e-NACH mandate?",
    answer: [
      {
        heading:
          "e-NACH can be canceled online by logging into the NACH mandate portal and selecting the mandates to be canceled.",
      },
    ],
  },
  {
    question: "Is e-NACH secure for business payment?",
    answer: [
      {
        heading:
          "e-NACH is a secure and reliable payment solution that reduces the risk of fraud usually associated with manual payment processing.",
      },
    ],
  },
  {
    question: "Does e-NACH resolve cash flow for businesses?",
    answer: [
      {
        heading:
          "e-NACH integration enables a consistent cash flow by automating recurring payments and simplifying financial operations. This automation allows timely collections, therefore, improving liquidity in the business.",
      },
    ],
  },
  {
    question: "How do you set up automotive e-NACH payments?",
    answer: [
      {
        bullets: [
          "Fill out the e-NACH enrolment form",
          "Login and select the NACH tab",
          "Choose the payment debit type to be auto-debited every month",
          "Register and validate the data",
          "Enter bank account details and complete the e-Mandate form and choose between net banking and debit card",
          "A reference number and mandate registration confirmation message will pop up",
        ],
      },
    ],
  },
  {
    question: "What do recurring payments mean?",
    answer: [],
    answerHTML: (
      <div className="my-2">
        <h4>
          A payment model where customers authorize the payment of funds from
          their accounts automatically at regular intervals for goods, services,
          or
          <Link href="http://enkash.com/utility-bill-payment/" target="_blank">
            bill payments
          </Link>
          on an ongoing basis is called recurring payments.
        </h4>
      </div>
    ),
  },
  {
    question: "What is the difference between NACH and e-NACH?",
    answer: [],
    answerHTML: (
      <div className="my-2">
        <h4>
          National Payments Corporation of India (NPCI) incorporated the
          National Automated Clearing House or NACH for banks to make bulk
          transactions for subsidy distribution, dividends, and salaries.
        </h4>
        <h4>
          NACH enables repetitive transactions that take place in bulk. It can
          be further used for
          <Link href={`${process.env.URL}/bulk-collect/`} target="_blank">
            payment collection
          </Link>
          like electricity bills, water bills, insurance premium payments, and
          other utility bills. To automate these recurring payments, NPCI
          introduced the Electronic National Automated Clearing House, or
          e-NACH.
        </h4>
        <h4>
          The need to fill the NACH forms and involvement in paperwork is
          eliminated due to e-NACH. The mandate registration process for e-NACH
          can be completed within a few hours and requires minimum human
          intervention.
        </h4>
      </div>
    ),
  },
  {
    question: "How does e-Mandate work?",
    answer: [
      {
        heading:
          "E-mandate works by allowing individuals to provide their consent digitally for businesses to deduct payments directly from their bank accounts. These are directly set up through a net banking transaction from merchant websites. To enable this, a customer would have to complete a one-time net banking transaction authorization after which all subsequent payments will not require customer intervention.",
      },
    ],
  },
  {
    question: "How does e-NACH work?",
    answer: [
      {
        heading:
          "E-NACH works via electronic mandates, where customers are supposed to provide their authorization for automated debits from their bank accounts. These mandates enable businesses to initiate payments on pre-determined dates. The automated nature of e-NACH minimizes the administrative burden on businesses and customers, ensuring a secure and seamless payment experience.",
      },
    ],
  },
  {
    question: "How to enable e-NACH with EnKash?",
    answer: [
      {
        bullets: [
          "Register on EnKash",
          "You will be provided with e-NACH with an API integration which can done easily with a plug-and-play method",
          "You can set the recurring payment for both your monthly payments and collections",
        ],
      },
    ],
  },
]

export default faqData
