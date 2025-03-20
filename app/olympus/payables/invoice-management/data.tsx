import { FAQProps } from "@/components/faq/faq";
import Link from "next/link";

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
    title: "Vendor Management",
    description:
      "Streamline vendor relationships with efficient onboarding, centralized data, and seamless payment workflows for enhanced collaboration.",
    image: paymentPage,
    link: "/olympus/payables/vendor-management/",
  },
  {
    title: "Rental Payments",
    description:
      "Simplify rental payments with automated solutions, ensuring timely transactions and avoiding penalties or delays.",
    image: paymentButton,
    link: "/olympus/payables/rental-payment/",
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
const carouselData = [
  {
    image: iconOne,
    alt: "Create your account and add invoices ",
    title: "Create your account and add invoices ",
    heading: "Sign Up and Upload: ",
  },
  {
    image: iconTwo,
    alt: "Set up approval workflows and process invoices efficiently.",
    title: "Set up approval workflows and process invoices efficiently.",
    heading: "Approve: ",
  },
  {
    image: iconThree,
    alt: "Make payments using your preferred method, including EnKash credit lines.",
    title:
      "Make payments using your preferred method, including EnKash credit lines.",
    heading: "Pay: ",
  },
  {
    image: iconFour,
    alt: "Monitor progress and generate insights to improve financial planning.",
    title:
      "Monitor progress and generate insights to improve financial planning.",
    heading: "Track & Report: ",
  },
];

const blogData = [
  {
    image:
      "https://blogs.enkash.com/wp-content/uploads/2023/04/How-to-modernize-manual-invoice-processing-with-automation.jpg",
    imageAlt:
      "From Manual to Automation: How to Modernize Your Invoice Processing Workflow",
    title:
      "From Manual to Automation: How to Modernize Your Invoice Processing Workflow",
    date: "Apr 07, 2023",
    description:
      "Invoice processing is a critical component of any organization’s financial operations. However, the traditional manual method of processing invoices can be time-consuming and error-prone. In today’s fast-paced business...",
    link: "https://www.enkash.com/resources/blog/how-to-modernize-invoice-processing-workflow/",
  },
  {
    image:
      "https://blogs.enkash.com/wp-content/uploads/2023/05/E-invoicing-under-GST.jpg",
    imageAlt: "E-invoicing under GST: Benefits and Process",
    title: "E-invoicing under GST: Benefits and Process",
    date: "Sep 29, 2023",
    description:
      "In today’s fast-paced digital world, traditional paper-based processes are being replaced by more efficient and streamlined electronic methods. The introduction of e-invoicing under the Goods and Services Tax (GST) regime...",
    link: "https://www.enkash.com/resources/blog/e-invoicing-under-gst/",
  },

  {
    image:
      "https://blogs.enkash.com/wp-content/uploads/2023/01/Heres-how-iInvoice-processing-makes-everything-easier.jpg",
    imageAlt: "Here’s How Invoice Processing Makes Everything Easier",
    title: "Here’s How Invoice Processing Makes Everything Easier",
    date: "Jan 09, 2023",
    description:
      "Invoice processing includes a complete cycle of receiving the invoice, verifying, reviewing, approving, processing it for payment and keeping a record. Companies often receive multiple invoices, including freelancers,...",
    link: "https://www.enkash.com/resources/blog/how-invoice-processing-makes-everything-easier/",
  },
];

const faqData: FAQProps[] = [
  {
    question: "What is invoice management?",
    answer: [],
    answerHTML: (
      <>
        <h4>
          A process that enables businesses to track and{" "}
          <Link
            href="https://www.enkash.com/olympus/payables/vendor-payment/"
            target="_blank"
          >
            pay vendor invoices
          </Link>{" "}
          is invoice management. It involves receiving an invoice from the
          vendor, verifying it, paying the amount to the vendor, and recording
          the same for future reconciliation.
        </h4>
      </>
    ),
  },
  {
    question: "Why should I automate my invoicing process?",
    answer: [],
    answerHTML: (
      <>
        {/* Your answerhtml content for index 1 */}
        <h4 className=" mb-3">Top reasons to automate invoice processing:</h4>
        {/* Add any other HTML elements as needed */}

        <h4 className="ms-2 mb-3">
          - No manual entry: Automated invoice management eliminates the need
          for manual entry into accounting systems{" "}
        </h4>

        <h4 className="ms-2 mb-3">
          - Easy verification: Accounting softwares verifies vendors and
          approves and rejects them based on the information provided. This
          helps in removing fraudulent cases
        </h4>

        <h4 className="ms-2 mb-3">
          - Access to information: The data on invoices can be easily viewed
          anytime and anywhere
        </h4>

        <h4 className="ms-2 mb-3">
          - Customized workflows: Businesses can define and customize their
          workflows as per their needs
        </h4>

        <h4 className="ms-2 mb-3">
          - Enhanced visibility: The visibility of{" "}
          <Link
            href="https://www.enkash.com/olympus/receivables/invoices/"
            target="_blank"
          >
            invoice management
          </Link>{" "}
          is improved with real-time data availability for decision-making
        </h4>

        <h4 className="ms-2 mb-3">
          - Better vendor relationship management: The automation of invoices
          gives payment notifications and alerts ensuring vendor payments are
          done on time; improving relationships
        </h4>
      </>
    ),
  },
  {
    question:
      "What is the importance of E-Invoicing in ensuring quick payments?",
    answer: [],
    answerHTML: (
      <>
        {/* Your answerhtml content for index 2 */}
        <h4>
          The quicker processing of invoices with the automation software
          enables quicker payments. Businesses can make immediate payments for
          the invoices uploaded on the automation software. In fact, with EnKash
          bulk payments can also be made with a single click. These quick
          payments can also help avail early payment discounts enabling savings
          for the business.
        </h4>
      </>
    ),
  },
  {
    question: "Is it possible to generate an online bill?",
    answer: [
      {
        heading:
          "You can upload invoices on EnKash with a few simple steps. Add the necessary details about the vendor, post KYC, upload the invoice, and make the payment via the invoicing software.",
        bullets: [],
      },
    ],
  },
  {
    question: "How do automatic invoice processes work?",
    answer: [
      {
        bullets: [
          "When an invoice is received, it is uploaded and scanned via the automation software, and the data is extracted in the accounting system in the desired format automatically",
          "As soon as the data is recorded into the digital database, the invoice is converted into a text-searchable document that is mapped by the system so that the data entered into the system can be actively tracked within the ERP system",
          "The data stored includes the vendor’s name, purchase amount, details of the goods/services availed, etc., and provides a detailed account of the invoice, which can be shared with the concerned parties for review and payment approval",
          "Vendor post-KYC is added and payment is done if data is validated",
        ],
      },
    ],
  },
  {
    question: "What are automated reminders in invoicing?",
    answer: [
      {
        heading:
          "Automated reminders or notifications can help businesses make payments to vendors before the due date. Some of the vendors provide trade discounts on early payments which can help businesses to save their costs and add to their cash flow.",
      },
    ],
  },
  {
    question: " Why are multiple payment options important in invoicing?",
    answer: [],
    answerHTML: (
      <>
        <h4>
          Businesses can improve their cash flow by offering{" "}
          <Link
            href="https://www.enkash.com/olympus/payables/bulk-payout/"
            target="_blank"
          >
            multiple payment
          </Link>{" "}
          options as this enables faster and efficient payment without any delay
          unlike in the case of traditional payment options like cheques. This
          also helps establish trust in the business.
        </h4>
      </>
    ),
  },
];

export { blogData, faqData, carouselData, productData };
