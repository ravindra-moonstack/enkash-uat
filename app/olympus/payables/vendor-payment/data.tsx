import iconOne from "./img/icon-one.svg";
import iconTwo from "./img/icon-two.svg";
import iconThree from "./img/icon-three.svg";
import iconFour from "./img/icon-four.svg";
import iconFive from "./img/icon-five.svg";

const carouselData = [
  {
    image: iconOne,
    alt: "Upload invoices in bulk, or sync them directly from your accounting software.",
    title:
      "Upload invoices in bulk, or sync them directly from your accounting software.",
    heading: "Add Invoices: ",
  },
  {
    image: iconTwo,
    alt: "Set up approval workflows, assign roles, and get real-time notifications.",
    title:
      "Set up approval workflows, assign roles, and get real-time notifications.",
    heading: "Approve with Ease: ",
  },
  {
    image: iconThree,
    alt: "Select payment options and process payments in just a few clicks.",
    title: "Select payment options and process payments in just a few clicks.",
    heading: "Make Payments: ",
  },
  {
    image: iconFour,
    alt: "Track payment statuses and generate detailed reports.",
    title: "Track payment statuses and generate detailed reports.",
    heading: "Reconcile Instantly: ",
  },
];

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/12/What-is-Vendor-payment.jpg",
    imageAlt: "What is Vendor Payment and How Does It Work?",
    title: "What is Vendor Payment and How Does It Work?",
    date: "Dec 23, 2022",
    description:
      "Accounts payable is a vital part of a firm’s operation and is responsible for processing the payment to the vendors. In addition, it is responsible for making virtual payments that...",
    link: "https://www.enkash.com/resources/blog/how-does-vendor-payment-work/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/blog_37.5e69915c-scaled.jpg",
    imageAlt: "Enhance your Productivity with Vendor Payment Automation",
    title: "Enhance your Productivity with Vendor Payment Automation",
    date: "Aug 08, 2023",
    description:
      "It is rightly said that one must have a supplier relationship of continuous improvement to create an agile process of procuring to pay process flow and in turn, boost business growth...",
    link: "https://www.enkash.com/resources/blog/enhance-productivity-with-vendor-payment-automation/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/05/Role-of-vendor-payments-in-customer-experience.jpg",
    imageAlt: "The Role of Vendor Payments in Customer Experience",
    title: "The Role of Vendor Payments in Customer Experience",
    date: "Aug 10, 2023",
    description:
      "If you are a startup, small or medium-sized business, then your main concern is ensuring that you continue to serve your customers seamlessly. As simple as it sounds,...",
    link: "https://www.enkash.com/resources/blog/role-of-vendor-payments/",
  },
];

const faqData = [
  {
    question: "What is vendor payment?",
    answer: [
      {
        heading:
          "Vendor payment refers to the process of disbursing funds from a business or organization to its suppliers or vendors in exchange for goods or services that have been provided. It's a critical aspect of the procure-to-pay cycle in business operations. EnKash’s vendor payment solution focuses on helping businesses manage vendors end-to-end. You can use the express pay option for regular and repetitive vendor payments.",
      },
      {
        heading:
          "Efficient vendor pay systems help organizations maintain strong vendor relationships, optimize cash flow, negotiate favorable payment terms, and ensure compliance with contractual agreements. Automation and integration with financial systems enhance the accuracy and efficiency of the vendor payment process.",
      },
    ],
  },
  {
    question: "How can I pay my vendors through EnKash?",
    answer: [
      {
        heading:
          "Follow the below steps to make vendor payments via EnKash platform:",
        bullets: [
          "Log in to EnKash with valid credentials and complete KYC",
          "Go to Vendor Payments under Olympus and upload invoices",
          "Add maker-checker approval workflow",
          "Select vendor invoices to be paid individually or in bulk with one click with the preferred payment mode",
        ],
      },
    ],
  },
  {
    question: "How can I deduct TDS while making vendor payment?",
    answer: [
      {
        heading:
          "There are three different ways through which TDS on vendor payments can be deducted. The same are mentioned below:",
        bullets: [
          "By creating an invoice on the EnKash platform",
          "After uploading a vendor invoice and editing it, or",
          "By syncing your Tally integrated system with the EnKash portal",
        ],
      },
    ],
  },
  {
    question:
      "Who will pay the TDS to the government in case of vendor payment?",
    answer: [
      {
        heading:
          "TDS (Tax Deducted at Source) is typically deducted and deposited by the person paying the vendor. In the context of vendor payments, the responsibility for deducting TDS and remitting it to the government lies with the party making the payment.",
      },
    ],
  },
  {
    question:
      "Can I track payment invoices that are paid through cash and cheque?",
    answer: [
      {
        heading:
          "You can check the status of the vendor payment made in cash and cheque provided you have integrated Tally with EnKash. You cannot track these payments but check their status.",
      },
    ],
  },
  {
    question:
      "How can I provide vendor payment details to my CA for bookkeeping?",
    answer: [
      {
        heading:
          "With EnKash, you can allocate the auditor role to your CA while setting the maker-checker approver workflow on the dashboard. This will allow your CA to view all the vendor payments made on the platform.",
      },
    ],
  },
  {
    question: "What is vendor reconciliation?",
    answer: [
      {
        heading:
          "Vendor reconciliation, also known as supplier reconciliation, is the process of comparing and verifying the financial records and transactions between a company and its vendors or suppliers. The goal of vendor reconciliation is to ensure that the financial statements of both parties align and that any discrepancies or differences are identified and resolved accurately.",
      },
      {
        heading:
          "Moreover, vendor reconciliation is a critical aspect of maintaining financial integrity, controlling costs, and managing relationships with suppliers. It helps in detecting errors, avoiding overpayments or underpayments, and ensuring that the financial statements accurately represent the company's liabilities and financial position concerning its vendors.",
      },
    ],
  },
];

export { blogData, faqData ,carouselData};
