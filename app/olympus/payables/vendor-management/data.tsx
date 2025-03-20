import { FAQProps } from "@/components/faq/faq";
import iconOne from "./img/icon-one.svg";
import iconTwo from "./img/icon-two.svg";
import iconThree from "./img/icon-three.svg";
import iconFour from "./img/icon-four.svg";
import Link from "next/link";
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

const carouselData = [
  {
    image: iconOne,
    alt: "Create your account and invite vendors to collect their information using digital forms.",
    title:
      "Create your account and invite vendors to collect their information using digital forms.",
    heading: "Sign Up and Add Vendors: ",
  },
  {
    image: iconTwo,
    alt: "Conduct automated compliance checks and approval processes.",
    title: "Conduct automated compliance checks and approval processes.",
    heading: "Verify and Approve: ",
  },
  {
    image: iconThree,
    alt: "Communicate in real-time and make payments using your preferred mode.",
    title:
      "Communicate in real-time and make payments using your preferred mode.",
    heading: "Collaborate & Pay: ",
  },
  {
    image: iconFour,
    alt: "Access detailed reports and improve vendor management efficiency.",
    title: "Access detailed reports and improve vendor management efficiency.",
    heading: "Track & Optimize: ",
  },
];

const blogData = [
  {
    image:
      "https://blogs.enkash.com/wp-content/uploads/2022/12/What-is-Vendor-payment.jpg",
    imageAlt: "What is Vendor Payment and How Does It Work?",
    title: "What is Vendor Payment and How Does It Work?",
    date: "Dec 23, 2022",
    description:
      "Accounts payable is a vital part of a firm’s operation and is responsible for processing the payment to the vendors. In addition, it is responsible for making virtual payments that are not associated with payroll. Making the...",
    link: "https://www.enkash.com/resources/blog/how-does-vendor-payment-work/",
  },
  {
    image:
      "https://blogs.enkash.com/wp-content/uploads/2023/05/Why-is-vendor-reconciliation-essential-and-how-to-make-it-simple.jpg",
    imageAlt:
      "Why Is Vendor Reconciliation Essential and How to Make It Simple?",
    title: "Why Is Vendor Reconciliation Essential and How to Make It Simple?",
    date: "May 11, 2023",
    description:
      "Reconciliation of accounts, whether it is bank versus cash or collections and receivables or anything else is an ongoing process. When done manually, the process of reconciliation can be time-consuming and prone to errors...",
    link: "https://www.enkash.com/resources/blog/why-is-vendor-reconciliation-essential/",
  },
  {
    image:
      "https://blogs.enkash.com/wp-content/uploads/2022/09/blog_37.5e69915c-scaled.jpg",
    imageAlt: "Enhance your Productivity with Vendor Payment Automation",
    title: "Enhance your Productivity with Vendor Payment Automation",
    date: "Aug 15, 2023",
    description:
      "It is rightly said that one must have a supplier relationship of continuous improvement to create an agile process of procuring to pay process flow and in turn, boost business growth and productivity....",
    link: "https://www.enkash.com/resources/blog/enhance-productivity-with-vendor-payment-automation/",
  },
];

const faqData: FAQProps[] = [
  {
    question: "What is Vendor Management System (VMS)?",
    answer: [
      {
        heading:
          "A Vendor Management System (VMS) is a centralized platform designed to streamline and optimize the management of vendors or suppliers. Our vendor management offers advanced features to centralize vendor data, automate verification processes, and provide real-time insights into spending patterns.",
        bullets: [],
      },
    ],
  },
  {
    question: "What is the vendor life cycle?",
    answer: [
      {
        heading:
          "The vendor life cycle encompasses the five stages of managing vendors:",
        bullets: [
          "Pre-qualification: Identifying and evaluating potential vendors based on your needs and criteria",
          "Selection: Choosing the most suitable vendor after a thorough assessment",
          "Onboarding: Integrating the chosen vendor into your systems and processes",
          "Management: Collaborating effectively with the vendor, monitoring performance, and ensuring contract compliance",
          "Renewal/Termination: Deciding whether to renew the contract or find a new vendor based on performance and future needs",
        ],
      },
    ],
  },
  {
    question: "What is another name for vendor management?",
    answer: [
      {
        heading:
          "Supplier management and third-party relationship management (TPRM) are two alternative terms for vendor management. Though slightly nuanced, they essentially involve building and maintaining efficient relationships with external partners who provide goods or services necessary for your business operations.",
        bullets: [],
      },
    ],
  },
  {
    question: "What are the four stages of vendor management?",
    answer: [
      {
        heading:
          "The four stages of vendor management typically include vendor identification, onboarding, ongoing monitoring, and performance evaluation.",
        bullets: [],
      },
    ],
  },
];
const secondFaqData: FAQProps[] = [
  {
    question: " What are the benefits of a vendor management system?",
    answer: [],
    answerHTML: (
      <>
        <h4>Benefits of using EnKash vendor management system:</h4>
        <ul>
          <li>
            Streamlined Operations: EnKash centralizes vendor data, onboarding,
            invoicing, and payments, eliminating manual processes and saving
            time.
          </li>
          <li>
            Improved Cost Efficiency: Gain real-time insights into spending
            patterns, and identify discounts and early payment opportunities.
          </li>
          <li>
            Enhanced Transparency and Compliance: Ensure accuracy and
            consistency in vendor data, and maintain complete audit trails.
          </li>
          <li>
            Reduced Risks and Fraud:{" "}
            <Link
              href="https://www.enkash.com/resources/blog/enhance-productivity-with-vendor-payment-automation/"
              target="_blank"
            >
              Automate vendor verification
            </Link>{" "}
            through eKYC to minimize the risk of fraudulent activity.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: " Is vendor management a part of ITIL?",
    answer: [
      {
        heading:
          "Yes, vendor management is a crucial component of ITIL (Information Technology Infrastructure Library) practices, ensuring effective management of external service providers.",
      },
    ],
  },
  {
    question: "Who is responsible for vendor management?",
    answer: [
      {
        heading:
          "Vendor management is a collaborative effort involving various stakeholders, with responsibility often falling on procurement, supply chain, or vendor management teams.",
      },
    ],
  },
];

export { blogData, faqData, carouselData, secondFaqData, productData };
