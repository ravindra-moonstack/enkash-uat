import { FAQProps } from "@/components/faq/faq";
import Link from "next/link";

import styles from "./page.module.scss";

import iconOne from "./img/icon-ones.svg";
import iconTwo from "./img/icon-two.svg";
import iconThree from "./img/icon-three.svg";
import iconFour from "./img/icon-four.svg";
import iconFive from "./img/icon-five.svg";

const howDoesItWorkData = [
  {
    imageSrc: iconOne,
    altText:
      "Automate all your business-related payments after validating the receiver’s information",
    heading:
      "Automate all your business-related payments after validating the receiver’s information",
  },
  {
    imageSrc: iconTwo,
    altText:
      "Pay your monthly vendor bills, utility bills, and rental bills directly to the recipient’s account",
    heading:
      "Pay your monthly vendor bills, utility bills, and rental bills directly to the recipient’s account",
  },
  {
    imageSrc: iconThree,
    altText: "Pay multiple bills and vendors in a single click simultaneously",
    heading: "Pay multiple bills and vendors in a single click simultaneously",
  },
  {
    imageSrc: iconFour,
    altText:
      "Easily upload and pay all your business-related utility bills, rental, vendor, and GST payments",
    heading:
      "Easily upload and pay all your business-related utility bills, rental, vendor, and GST payments",
  },
  {
    imageSrc: iconFive,
    altText:
      "View, track, and reconcile all the payments made from a single dashboard",
    heading:
      "View, track, and reconcile all the payments made from a single dashboard",
  },
];

const faqData: FAQProps[] = [
  {
    question:
      "How can EnKash improve the efficiency of our accounts payable department?",
    answer: [
      {
        heading:
          "EnKash helps improve the efficiency of the accounts department at all levels, starting from an easy and thorough process from onboarding vendors to making payments to them at the end of each billing cycle. With EnKash, you can be sure that your vendor details are captured accurately, along with the details of the department requesting the goods or services. You can set hierarchies for approvals for quicker payment. Any disputes with vendors can also be raised if required.",
      },
    ],
  },
  {
    question: "What accounting systems does EnKash integrate with?",
    answer: [
      {
        heading:
          "EnKash integrates easily with platforms like Tally and enhances your existing banking and accounting experience. Our dedicated technical and customer support team will support you during the time of purchase to understand the integration requirements.",
      },
    ],
  },
  {
    question: "Does EnKash support automated invoice capture?",
    answer: [
      {
        heading:
          "Once an invoice has been uploaded and scanned using our advanced OCR technology, the EnKash platform will parse through the documents and capture the details in the invoice. The captured invoice information can be used to process the payables further as required.",
      },
    ],
  },
  {
    question: "How does the EnKash platform help you manage tax payments?",
    answer: [],
    answerHTML: (
      <div className="mb-4">
        <h4 className={styles.heading}>
          GST, or Goods and Services Tax, is a consolidated tax that replaced
          many state-level, central-level and value-added taxes. For any
          business to continue functioning, it is crucial to pay GST on time and
          file the return. Moreover, the non-payment of GST can lead to
          penalties, causing further issues.
        </h4>
        <h4>
          For the <Link href="/olympus/payables/gst-payments">gst payment</Link>{" "}
          to go on time, there are various steps involved, which need to take
          place quickly and without any errors. The process starts by logging
          into the GST portal, checking the details of the tax amount due, and
          preparing and downloading a challan. Once the challan is ready, you
          need to internally get it checked and approved by the requisite
          authorities and make the payment. Once the payment is completed, it is
          a good idea to record the maker-checker-approval trail and the related
          documents.
        </h4>
      </div>
    ),
  },
  {
    question: "How to manage bill payments with EnKash?",
    answer: [
      {
        heading:
          "The accounts payable workflow lets you upload and scan the bill or invoice received into the system to create a record against the payment to be made. After this, the approval process begins, depending on the department hierarchy, the criticality of the invoice, and the approval levels set in the system. Once approved, payment can be made using any preferred mode, and the transaction status can be viewed on the dashboard for future reference.",
      },
    ],
  },
  {
    question:
      "How does the EnKash payables solution enable complete transparency?",
    answer: [
      {
        heading:
          "With EnKash, we give total visibility into your spending with smarter controls so that you can make better business decisions. The process of payments starts with recognizing the source to which you make the payment. In this case, it could be a vendor, landlord, utility provider, or trader. Onboarding the vendor ensures that all the relevant departments in the business know who to approach if there are any quality issues or changes in the quantity and quality of supplies. You also have access to a dashboard to get insights on the type of spends that occur and where you can optimize the spends for maximum benefit to the business.",
      },
    ],
  },
  {
    question: "How can a business regulate payments?",
    answer: [
      {
        heading:
          "By setting up custom approval matrices during accounts payable automation, you can discover improved spend control and eliminate manual errors for timely payments. The platform helps in regulating payments while keeping in mind factors like control, timing, audit trail, and quality. You also get a complete overview of your accounts payable and receivable, which can help you manage your funds better and minimize the stress of arranging working capital.",
      },
    ],
  },
  {
    question: "How do automatic reminders work?",
    answer: [
      {
        heading:
          "Never miss a payment again with auto-fetch and timely reminders. Make on-time payments towards vendors, rent, taxes, and more every time. Most businesses follow a particular cycle and need to be paid at a particular time. EnKash ensures that you get a reminder of when your payments are due so that you can quickly get approvals and make payments to get on-time rebates and ensure continuity.",
      },
    ],
  },
  {
    question: "What is the meaning and use of approval flows?",
    answer: [
      {
        heading:
          "Approval workflows make managing and optimizing expenses easier. Set approval limits, create hierarchies, avoid delays, and reduce errors with set rules. Any business-related payment or the accounts payable cycle starts with approvals.",
      },
      {
        heading:
          " Approval flows are the backbone of sound financial management as they ensure accountability and help you face compliance issues. With accounts payable systems like EnKash, you can choose from various approval matrices and set the approval levels within the system. The idea is to balance spends without sacrificing timely payments or meeting statutory requirements like audit queries.",
      },
    ],
  },
];

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/08/account-payable-process.jpg",
    imageAlt: "A Guide to the Accounts Payable Process",
    title: "A Guide to the Accounts Payable Process",
    date: "Aug 18, 2023",
    description:
      "Efficient cash flow management is the cornerstone of financial success for any business. One crucial aspect of this process is the effective management of accounts payable...",
    link: "https://www.enkash.com/resources/blog/account-payable-process/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/blog_1.8652a187.png",
    imageAlt: "Optimize Your Accounts Payable and Receivable with Automation",
    title: "Optimize Your Accounts Payable and Receivable with Automation",
    date: "Sep 23, 2023",
    description:
      "A successful business is dependent on a variety of factors. While most of those factors can be controlled from within the company itself, cash-flow remains the most pivotal...",
    link: "https://www.enkash.com/resources/blog/optimize-your-accounts-payable-receivable/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/blog_13.c5f87d66.png",
    imageAlt: "Why SMBs Need to Automate Accounts Payables and Receivables",
    title: "Why SMBs Need to Automate Accounts Payables and Receivables",
    date: "Sep 26, 2023",
    description:
      "Businesses- big or small, need a steady account receivable and payable flow to function. A business’ bottom line may be green at the end of the quarter, but if the cash flow is not...",
    link: "https://www.enkash.com/resources/blog/why-choose-automated-account-payable-platform/",
  },
];

const getStartedData = [
  {
    title: "Remote Operations",
    description:
      "Teams from different locations can access and share files from anywhere and process payments easily",
  },
  {
    title: "Effective invoice & vendor management",
    description:
      " Easily upload vendor invoices, do vendor KYC and review vendor performance to manage them better.",
  },
  {
    title: "Early payment discount",
    description:
      "Set payment reminders and make vendor payments early to avail trade discount",
  },
  {
    title: "Streamlined Workflows",
    description:
      "A streamlined approval process can significantly reduce processing time and minimize the risk of delayed payments",
  },
];

export { blogData, faqData, howDoesItWorkData, getStartedData };
