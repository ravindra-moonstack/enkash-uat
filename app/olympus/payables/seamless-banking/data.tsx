import { FAQProps } from "@/components/faq/faq";
import iconOne from "./img/icon-one.svg";
import iconTwo from "./img/icon-two.svg";
import iconThree from "./img/icon-three.svg";
import iconFour from "./img/icon-four.svg";
import {
  autoCollect,
  instantSettlement,
  invoices,
  paymentButton,
  paymentLink,
  paymentPage,
  qrCode,
  reminderEngine,
} from "@/components/all-products";
import { AllProductsDataProp } from "@/components/all-products/all-products";
import Link from "next/link";

const productData: AllProductsDataProp[] = [
  {
    title: "Business Utility Bill Payment",
    description:
      "Seamlessly manage and automate utility bill payments to ensure uninterrupted operations for your business.",
    image: paymentLink,
    link: "/olympus/payables/bill-payment/",
  },
  {
    title: "Vendor Payments",
    description:
      "Efficiently schedule and process vendor payments to strengthen relationships and maintain supply chain reliability",
    image: paymentButton,
    link: "/olympus/payables/vendor-payment/",
  },
  {
    title: "Rental Payments",
    description:
      "Simplify rental payments with automated solutions, ensuring timely transactions and avoiding penalties or delays.",
    image: paymentPage,
    link: "/olympus/payables/rental-payment/",
  },
  {
    title: "Invoice Management",
    description:
      "Digitize and streamline invoice handling to enhance accuracy, compliance, and overall accounts payable efficiency.",
    image: qrCode,
    link: "/olympus/payables/invoice-management/",
  },
  {
    title: "Payroll Processing",
    description:
      "Automate payroll disbursements to pay employees accurately and on time, every single month.",
    image: autoCollect,
    link: "/olympus/payables/payroll-processing/",
  },
  {
    title: "GST Payment",
    description:
      "Manage GST payments effortlessly with integrated solutions, ensuring timely compliance and tax submissions.",
    image: invoices,
    link: "/olympus/payables/gst-payments/",
  },
  {
    title: "Bulk Payments",
    description:
      "Process bulk payments quickly and securely, saving time and minimizing manual errors in payouts.",
    image: instantSettlement,
    link: "/olympus/payables/bulk-payout/",
  },
  {
    title: "Payable Analytics",
    description:
      "Gain actionable insights into payables data to optimize cash flow, track trends, and enhance decision-making.",
    image: reminderEngine,
    link: "/olympus/payables/payable-analytics/",
  },
];

const faqData: FAQProps[] = [
  {
    question: "What are decentralized payments?",
    answer: [
      {
        heading:
          "Decentralized payment is the process of distributing authority to different department heads in the organization to make payments to their concerned vendors. Each department has its accounts payable team responsible for processing payments to the vendors or suppliers and maintaining records.",
        bullets: [],
      },
    ],
  },
  {
    question:
      "How decentralized payment system differs from a traditional payment system?",
    answer: [
      {
        heading:
          "The traditional payment system is a centralized authority that manages funds on users' behalf. However, that is not the case with decentralized payments as the authority is divided between teams to manage funds. The important difference between a traditional payment system and a decentralized payment system is that the transactions are processed by a central authority in the former while the latter automates the transactions with minimum human intervention.",
        bullets: [],
      },
    ],
  },

  {
    question: "What are the advantages of using decentralized payments?",
    answer: [
      {
        bullets: [
          "Decentralized payments can be customized as per the organization and department’s requirements enabling financial transactions that are aligned with the business’s nature",
          "The distribution of payment across different channels gives less chance of payment failures making the process more efficient and resilient",
          "Such payments provide greater flexibility and control over data and transactions. The user can maintain data privacy as per their choice",
          "The decentralized payment system is accessible and not difficult to work with",
          "These payments allow peer-to-peer transactions without intermediaries like banks",
          "Though these payments are accessible, they are secure and cannot be violated easily",
        ],
      },
    ],
  },
  {
    question: "Are decentralized payments secure?",
    answer: [
      {
        heading:
          "Decentralized payments are secure as they are assisted by blockchain technology. They are encrypted well for anyone to decode easily. The transactions made via decentralized payment systems cannot be tampered with or modified as they come with high security.",
        bullets: [],
      },
    ],
  },
  {
    question: "How can I start using decentralized payments on EnKash?",
    answer: [
      {
        bullets: [
          "Register on EnKash and link your existing bank account to experience seamless banking",
          "Add beneficiaries on the EnKash portal",
          "Create/import invoices on the platform",
          "Enable approval matrix of maker/checker",
          "Make payments directly from the platform to your vendor",
          "Experience auto reconciliation between your bank account, EnKash and your accounting software",
        ],
      },
    ],
  },
  {
    question: "How does EnKash's decentralized payments platform work?",
    answer: [],
    answerHTML: (
      <>
        <h4>
          EnKash decentralized payment is a part of the seamless banking system
          that we provide. Users can register on the platform, add their
          company, enter bank account details, and decentralize their payments
          as per their organization’s setup and{" "}
          <Link
            href="https://www.enkash.com/olympus/payables/vendor-payment/ "
            target="_black"
          >
            make payments to their vendors,
          </Link>{" "}
          and suppliers, and{" "}
          <Link
            href="https://www.enkash.com/olympus/payables/bill-payment/"
            target="_black"
          >
            pay their bills
          </Link>{" "}
          easily.
        </h4>
      </>
    ),
  },
  {
    question:
      " How does EnKash’s multi-bank payment solution benefit businesses?",
    answer: [],
    answerHTML: (
      <>
        <h4>
          The multi-bank payment solution by EnKash enables businesses to have
          clear visibility of payments made directly to their bank account or
          payments made via their bank account. With EnKash, businesses can
          manage{" "}
          <Link
            href="https://www.enkash.com/resources/blog/manage-multiple-bank-accounts-with-enkash/"
            target="_black"
          >
            multiple bank accounts
          </Link>{" "}
          and align different departments with the suitable bank branch.
          Businesses can also customize the approval flow according to the
          hierarchy and role mapping.
        </h4>
        <h4>
          The{" "}
          <Link
            href="https://www.enkash.com/olympus/receivables/automated-reconciliation/"
            target="_black"
          >
            reconciliation
          </Link>{" "}
          reconciliation happens on the dashboard in real time. This visibility
          helps businesses in quick decision-making based on the data and manage
          their finances better.
        </h4>
      </>
    ),
  },
  {
    question:
      "Are there any security concerns associated with seamless banking?",
    answer: [
      {
        heading:
          "Seamless banking brings convenience, ease of use, efficiency, and security while increasing customer satisfaction. A user-friendly experience helps retain customers leading to higher conversion rates for businesses.",
      },
    ],
  },

  {
    question:
      "How does a seamless payment process benefit businesses and customers?",
    answer: [
      {
        heading:
          "Seamless banking is dependent on encryption, secure technology, and user authentication measures to protect data. It is essential to have a robust cybersecurity and vigilance system to ensure the security of seamless banking transactions.",
      },
    ],
  },
];

const carouselData = [
  {
    image: iconOne,
    alt: "Log in to EnKash and link your bank account",
    title: "Log in to EnKash and link your bank account",
    heading: "Login: ",
  },
  {
    image: iconTwo,
    alt: "Add beneficiaries to the platform.",
    title: "Add beneficiaries to the platform.",
    heading: "Beneficiaries: ",
  },
  {
    image: iconThree,
    alt: "Create or import invoices and set up the approval matrix.",
    title: "Create or import invoices and set up the approval matrix.",
    heading: "Invoices: ",
  },
  {
    image: iconFour,
    alt: "Make payments directly from EnKash..",
    title: "Make payments directly from EnKash..",
    heading: "Payment: ",
  },
];

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/01/Heres-everything-you-need-to-know-about-rental-payment.jpg",
    imageAlt: "Here’s Everything You Need to Know About Rental Payments",
    title: "Here’s Everything You Need to Know About Rental Payments",
    date: "Jan 01, 2023",
    description:
      "If you are new to the corporate ecosystem or planning for a start-up, then understanding the nuances of rental payment is crucial. It is important for corporates to understand their...",
    link: "https://www.enkash.com/resources/blog/how-rental-payment-can-help-your-company/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/09/How-to-pay-rent-with-a-credit-card-1.jpg",
    imageAlt: "How to pay rent with a credit card?",
    title: "How to pay rent with a credit card?",
    date: "Sep 29, 2023",
    description:
      "Running a business often means juggling priorities and allocating funds without disrupting the flow of business. Often, this would mean that you have to find funds for...",
    link: "https://www.enkash.com/resources/blog/how-to-pay-rent-with-credit-card-online-know-about-the-benefits/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/02/Things-you-must-know-about-credit-card-rent-payment-charges.jpg",
    imageAlt: "Things You Must Know About Credit Card Rent Payment Charges",
    title: "Things You Must Know About Credit Card Rent Payment Charges",
    date: "Feb 22, 2023",
    description:
      "Credit and debt are the basic processes that form the pillars of accounting. They are essential to the working of any business and act as important factor while evaluating the success of a business....",
    link: "https://www.enkash.com/resources/blog/credit-card-rent-payment-charges/",
  },
];

export { blogData, faqData, carouselData, productData };
