import { FAQProps } from "@/components/faq/faq";

import iconOne from "./img/icon-one.svg";
import iconTwo from "./img/icon-two.svg";
import iconThree from "./img/icon-three.svg";
import iconFour from "./img/icon-four.svg";
import iconFive from "./img/icon-five.svg";

const howDoesItWorkData = [
  {
    imageSrc: iconOne,
    altText:
      "Begin by uploading invoices, bills, and other financial documents directly into Olympus. Further, these documents can be uploaded by your business vendors/suppliers and customers",
    heading:
      "Begin by uploading invoices, bills, and other financial documents directly into Olympus. Further, these documents can be uploaded by your business vendors/suppliers and customers",
  },
  {
    imageSrc: iconTwo,
    altText:
      "Olympus takes over from here, automatically extracts crucial data from these documents, and transforms them into digital records",
    heading:
      "Olympus takes over from here, automatically extracts crucial data from these documents, and transforms them into digital records",
  },
  {
    imageSrc: iconThree,
    altText:
      "With the extracted information, you can review, approve, or reject invoices, payments, and other financial transactions with a customizable approval workflow as per the internal process",
    heading:
      "With the extracted information, you can review, approve, or reject invoices, payments, and other financial transactions with a customizable approval workflow as per the internal process",
  },
  {
    imageSrc: iconFour,
    altText:
      "Olympus ensures hassle-free payment processing and account reconciliation, handling these tasks on your behalf",
    heading:
      "Olympus ensures hassle-free payment processing and account reconciliation, handling these tasks on your behalf",
  },
  {
    imageSrc: iconFive,
    altText:
      "Stay in control of your financial performance with the ability to generate custom reports and track your finances in real-time",
    heading:
      "Stay in control of your financial performance with the ability to generate custom reports and track your finances in real-time",
  },
];

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/07/What-is-EnKash-Olympus.jpg",
    imageAlt: "What is EnKash Olympus and Its 5 Main Benefits for Businesses",
    title: "What is EnKash Olympus and Its 5 Main Benefits for Businesses",
    date: "Aug 29, 2023",
    description:
      "EnKash, Asia’s first and smartest spend management platform, has launched yet another industry-first product – Olympus to help startups and traditional businesses manage their cash flows better...",
    link: "https://www.enkash.com/resources/blog/what-is-enkash-olympus/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/08/Transformative-Product-by-EnKash-Delivers-scaled.jpg",
    imageAlt:
      "Transformative Product by EnKash Delivers 40% Process Improvement and 50% Cost Savings for Beta Customers",
    title:
      "Transformative Product by EnKash Delivers 40% Process Improvement and 50% Cost Savings for Beta Customers",
    date: "Aug 10, 2023",
    description:
      "Managing bill payments efficiently is crucial for maintaining healthy financial operations. Auto reminders for bill payments in businesses provide a valuable solution...",
    link: "https://www.enkash.com/resources/blog/transformative-product-by-enkash-delivers-improvement-and-cost-savings/",
  },

  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/05/Accounts-payable-vs-accounts-receivable-Understanding-the-differences.jpg",
    imageAlt: "Accounts Payable v/s Accounts Receivable",
    title: "Accounts Payable v/s Accounts Receivable",
    date: "Oct 13, 2023",
    description:
      "Accounts Payable is the money owed to vendors and suppliers by the business. This results in the cash outflow of the business. Whereas AR is the exact opposite, which is the money a business owes to...",
    link: "https://www.enkash.com/resources/blog/accounts-payable-vs-accounts-receivable/",
  },
];

const faqData: FAQProps[] = [
  {
    question: " What are the key features of EnKash Olympus?",
    answer: [
      {
        heading: "The key features of EnKash Olympus include:",
        bullets: [
          "Digital Payment Automation: Enabling businesses to achieve financial independence by offering cost-effective digital payment solutions for both payables and receivables",
          "Real-Time Reconciliation: Seamlessly integrating with Tally and capturing data from diverse sources to ensure real-time transaction reconciliation and accuracy",
          "Audit Capabilities: Establishing stringent checks and hierarchical controls within the dashboard, creating a transparent audit trail for financial transactions and activities",
          "Real-Time Data Analytics: Empowering various teams, including business and finance, with the ability to craft customized dashboards and access real-time data analytics for informed decision-making",
        ],
      },
    ],
  },
  {
    question: "Why small and medium businesses should choose EnKash Olympus?",
    answer: [
      {
        heading:
          "EnKash Olympus is a product specifically catering to the needs of small and medium businesses to solve their daily life challenges. SMEs should choose Olympus because of the following key reasons:",
        bullets: [
          "It enables businesses to achieve self-reliance by providing cost-effective access to digital payment solutions",
          "It automates core payables, receivables, and reconciliation, resulting in increased efficiency, transparency, and adaptability",
          "Seamlessly use with existing ERP systems and accounting software integrations, ensuring a smooth operational experience",
          "Provides a range of payment methods to maximize convenience and accessibility for buyers and suppliers",
          "It allows onboarding of only validated buyers and suppliers with complete vendor management, and automated flagging mechanisms to identify discrepancies",
        ],
      },
    ],
  },
];

export { blogData, faqData, howDoesItWorkData };
