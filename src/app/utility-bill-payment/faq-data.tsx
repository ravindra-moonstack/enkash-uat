import Link from "next/link"
import { TFAQProps } from "@/src/types/faq"

const faqData: TFAQProps[] = [
  {
    question: "What is bill payment?",
    answer: [
      {
        heading:
          "Bill payment is the process of paying dues for services like electricity, water, internet, credit cards, and telecom within the billing period. For businesses, a digital bill payment platform like EnKash helps automate payments, avoid late fees, and maintain accurate records for reconciliation and compliance.",
      },
    ],
  },
  {
    question: "Why is timely bill payment important for my business?",
    answer: [
      {
        heading:
          "When your business pays bills on time via bill pay solutions, it helps keep the business running smoothly. With on-time utility payments, you can avoid late fees and keep your business cash flow steady.",
      },
    ],
  },
  {
    question:
      "Does the bill payment module help improve the finance team’s performance? If yes, how?",
    answer: [
      {
        heading:
          "Yes, the bill pay solution helps improve the finance team’s efficiency by speeding up the process of retrieving, checking, approving, and making payments.",
      },
    ],
  },
  {
    question: "Why should a startup consider streamlining bill payments?",
    answer: [
      {
        heading:
          "Startups need to consider streamlining their bill payments for the following reasons:",
        bullets: [
          "Bill payments are processed faster and seamlessly",
          "It helps to gain a competitive advantage in the industry",
          "It positively increases your market reputation",
          "The possibility of acquiring more consumers increases marginally",
        ],
      },
    ],
  },
  {
    question:
      "How does a digitized bill payment module help cut down business fraud?",
      answerHTML: (
        <div> 
          <p>
            {"The digitized bill payment module works on verified and encrypted payments through different payment modes, to name a few, net banking, NEFT,"} 
            <Link
              className="mx-1"
              href={`${process.env.NEXT_PUBLIC_URL}/resources/blog/what-is-rtgs-in-banking-full-form-meaning-process-and-key-features-in-india`}
              rel="noopener noreferrer"
              target="_blank"
            >
              RTGS
            </Link>
            {", IMPS, UPI, debit cards, connected banking, and more, and is preferable over other manual modes, which helps in cutting down the business fraud."}
          </p>
        </div>
      ),
  },

  {
    question: "How to make bill payments on the EnKash platform?",
    answer: [
      {
        heading:
          "You can upload all the relevant bills on EnKash and set internal processes to get the relevant approvals from different departments. Once you do that, every time the bill is due, you will be notified by email to take action, such as approve, reject, or pay, based on which you can take action. Once approved, you can pay using different payment methods on the EnKash Platform.",
      },
    ],
  },
  {
    question: "What types of utility bills can I pay?",
    answerHTML: (
      <div> 
        <p>
          {"You can pay various"} 
          <Link
            className="mx-1"
            href={`${process.env.NEXT_PUBLIC_URL}/resources/blog/benefits-of-paying-utility-bill-payment-online`}
            rel="noopener noreferrer"
            target="_blank"
          >
            utility bills
          </Link>
          {"like electricity, water, internet bills, etc., using the EnKash platform."}
        </p>
      </div>
    ),
  },
  {
    question: "How do I know my bills are paid?",
    answer: [
      {
        heading:
          "Once the bills are paid, you can log in to the platform and check the status of the bills paid on the dashboard, including the date of bill payment and the amount paid.",
      },
    ],
  },
  {
    question: "What are the different modes used for online bill payment?",
    answerHTML: (
      <div> 
        <p>
          {"The different modes you can use for online bill payment include"} 
          <Link
            className="mx-1"
            href={`${process.env.NEXT_PUBLIC_URL}/resources/blog/what-is-neft`}
            rel="noopener noreferrer"
            target="_blank"
          >
            NEFT
          </Link>
          {", RTGS,"}
          <Link
            className="mx-1"
            href={`${process.env.NEXT_PUBLIC_URL}/resources/blog/imps-meaning-and-full-form-a-comprehensive-guide-to-imps-neft-and-rtgs`}
            rel="noopener noreferrer"
            target="_blank"
          >
            IMPS
          </Link>
          {", UPI, debit cards, connected banking, and more. Each of the modes of payment has its own set of features and benefits."}
        </p>
      </div>
    ),
  },
  {
    question: "What is a utility bill payment?",
    answer: [
      {
        heading:
          "Utility bill payment refers to the process of paying for essential services such as electricity, water, gas, internet, and mobile or landline connections. For businesses, managing utility bill payments digitally helps avoid late fees, ensures uninterrupted services, and provides better tracking of operational expenses. Platforms like EnKash allow automated, scheduled, and bulk utility payments to streamline this process.",
      },
    ],
  },
  {
    question: "How to pay the water bill online?",
    answerHTML: (
      <div> 
        <p>
          {"To"} 
          <Link
            className="mx-1"
            href={`${process.env.NEXT_PUBLIC_URL}/resources/blog/how-to-check-and-pay-water-bills-online-in-india`}
            rel="noopener noreferrer"
            target="_blank"
          >
            pay your water bill online
          </Link>
          {", log in to your preferred payment platform or banking app, go to the “Bill Payments” section, and select “Water” as the biller category. Choose your water service provider, enter your customer/account number, and verify the bill details. Then, select a payment method like UPI, net banking, or card, and complete the transaction securely."}
        </p>
      </div>
    ),
  },
  {
    question: "How do Online Bill Pay Services help Businesses?",
    answer: [
      {
        heading:
          "Online bill pay services automate recurring payments, centralise bills to pay, and eliminate manual processing. Companies can effortlessly handle business bill payments, corporate internet bill payment, and all utility service bills through one secure dashboard like EnKash, avoiding late fees and improving cash-flow control.",
      },
    ],
  },
  {
    question: "What is Auto Bill Payment?",
    answer: [
      {
        heading:
          "Auto bill payments enable businesses to schedule payments for utilities like power bills, water bills, and postpaid bills. Once Auto Pay is set up, the system deducts the amount automatically from the registered bill pay account, ensuring on-time settlements without manual intervention.",
      },
    ],
  },
  {
    question:
      "How Does EnKash, as a Utility Bill Payment Platform, helps businesses to reduce their operational workload?",
    answer: [
      {
        heading:
          "EnKash reduces manual efforts, prevents missed deadlines, and ensures secure bill settlement for utilities, telecom, internet, and more. It improves operational efficiency by centralizing all utility bill payment workflows under one system.",
      },
    ],
  },
  {
    question:
      "Which Bills Can Businesses Pay Using EnKash as a Bill Payment Platform?",
      answerHTML: (
        <div>
          <p>EnKash supports a comprehensive range of business and commercial utility bill payments, helping you centralize and automate all your recurring expenses. You can easily manage and pay for:</p>
          <ul>
            <li>
              <p>Electricity and power bills</p>
            </li>
            <li>
              <p>Water bill payments</p>
            </li>
            <li>
              <p>Post-paid mobile bills</p>
            </li>
            <li>
              <p>Corporate internet bills</p>
            </li>
            <li>
              <p>Municipal charges, gas bills, and other essential utilities</p>
            </li>
          </ul>
          <p>
            {"No more juggling multiple portals or missing deadlines - handle every bill from one unified dashboard. Want to streamline your utility bill payments?"}
            <Link
              className="mx-1"
              href={`${process.env.NEXT_PUBLIC_URL}/sales`}
              rel="noopener noreferrer"
              target="_blank"
            >
              Talk to us today.
            </Link> 
          </p>
        </div>
      ),
  },
  {
    question:
      "Why Should Enterprises Switch to a Centralized Business Bill Payment Platform?",
    answer: [
      {
        heading:
          "Enterprises should switch to centralized business bill payment platforms like EnKash to reduce costs, avoid penalties, prevent service disruptions, and gain complete visibility across utility bill payments across all branches. It also supports automation through bill payment APIs.",
      },
    ],
  },
  {
    question: "How can businesses make electricity bill payments online?",
    answerHTML: (
      <div> 
        <p>
          {"Businesses can make"} 
          <Link
            className="mx-1"
            href={`${process.env.NEXT_PUBLIC_URL}/resources/blog/what-is-an-electricity-bill-meaning-components-calculation`}
            rel="noopener noreferrer"
            target="_blank"
          >
            electricity bill payments
          </Link>
          {"by using a centralized bill pay platform like EnKash. Simply select the electricity biller, fetch the bill using the consumer number, verify details, and complete the payment through secure modes like UPI, net banking, or connected banking."}
        </p>
      </div>
    ),
  },
  {
    question: "How to pay electricity bills through EnKash?", 
    answerHTML: (
      <div>
        <p>To pay electricity bills through EnKash’s bill payment platform,</p>
        <ul>
          <li>
            <p>Add your electricity biller</p>
          </li>
          <li>
            <p>Auto-fetch the bill details</p>
          </li>
          <li>
            <p>Review the amount</p>
          </li>
          <li>
            <p>Get internal approval, and complete the electricity bill payment in one click.</p>
          </li> 
        </ul>
        <p>You can also make bulk payments across multiple locations.
        </p>
      </div>
    ),
  },
  {
    question:
      "Can businesses manage multiple electricity bill payments together?",
    answer: [
      {
        heading:
          "Yes, businesses can manage and pay multiple electricity bills together using bulk electricity bill payment feature of EnKash. This is especially useful for enterprises operating across multiple offices or locations.",
      },
    ],
  },
  {
    question:
      "Why electricity bills copies are important for businesses?",
    answer: [
      {
        heading:
          "Electricity bill copies serve as official proof of consumption and electricity bill payment. Businesses use Bill Copies for audits, expense validation, tax filings, and branch-level cost tracking.",
      },
    ],
  },
  {
    question:
      "Can businesses manage electricity bill copies for multiple locations using EnKash?",
    answer: [
      {
        heading:
          "Yes. EnKash allows businesses to centrally manage electricity bill copies across all branches, offices, and locations from a single dashboard. Each electricity bill copy is automatically mapped to the correct location, cost center, or business unit, giving finance teams complete visibility and control over electricity expenses without relying on local teams.",
      },
    ],
  },
  {
    question:
      "How can businesses get electricity bill copies?",
    answer: [
      {
        heading:
          "Businesses can get electricity bill copies online by logging into a digital bill pay or utility bills management platform like EnKash, selecting the relevant electricity biller, and downloading the verified bill copy linked to the billing cycle and payment.",
      },
    ],
  },
]

export default faqData
