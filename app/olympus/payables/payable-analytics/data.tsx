import { FAQProps } from "@/components/faq/faq";
import iconOne from "./img/icon-one.svg";
import iconTwo from "./img/icon-two.svg";
import iconThree from "./img/icon-three.svg";
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
    title: "Vendor Management",
    description:
      "Streamline vendor relationships with efficient onboarding, centralized data, and seamless payment workflows for enhanced collaboration.",
    image: paymentPage,
    link: "/olympus/payables/vendor-management/",
  },
  {
    title: "Bulk Payments",
    description:
      "Process bulk payments quickly and securely, saving time and minimizing manual errors in payouts.",
    image: instantSettlement,
    link: "/olympus/payables/bulk-payout/",
  },
  {
    title: "GST Payment",
    description:
      "Manage GST payments effortlessly with integrated solutions, ensuring timely compliance and tax submissions.",
    image: invoices,
    link: "/olympus/payables/gst-payments/",
  },
];

const carouselData = [
  {
    image: iconOne,
    alt: "Access your dashboard to view all payable analytics.",
    title: "Access your dashboard to view all payable analytics.",
    heading: "Login to EnKash: ",
  },
  {
    image: iconTwo,
    alt: "Select specific vendors, branches, or payment periods to generate actionable insights.",
    title:
      "Select specific vendors, branches, or payment periods to generate actionable insights.",
    heading: "Filter and Analyze Data: ",
  },
  {
    image: iconThree,
    alt: "Use real-time data to make informed financial decisions, such as early payments or vendor negotiations.",
    title:
      "Use real-time data to make informed financial decisions, such as early payments or vendor negotiations.",
    heading: "Optimize Decisions: ",
  },
];

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/02/Make-smart-business-decisions-with-accounts-payable-insights.jpg",
    imageAlt:
      "Leverage Accounts Payable Insights to Make Smart Business Decisions",
    title:
      "Leverage Accounts Payable Insights to Make Smart Business Decisions",
    date: "Feb 02, 2023",
    description:
      "If you ask a business leader what the main currency of their business is, the answer is most likely to be data. Yes, updated and accurate data is the currency that oils the business decision-making...",
    link: "https://www.enkash.com/resources/blog/accounts-payable-insights/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/05/Streamline-your-business-with-efficient-payable-management.jpg",
    imageAlt: "Streamline Your Business with Efficient Payable Management",
    title: "Streamline Your Business with Efficient Payable Management",
    date: "May 04, 2023",
    description:
      "In the world of business, effective payable management is a critical component of success. Whether you are running a small or large business, the management of accounts payable can be...",
    link: "https://www.enkash.com/resources/blog/streamline-your-business-with-payable-management/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/05/A-guide-to-manage-your-finances-and-bills-payable.jpg",
    imageAlt:
      "Managing Your Finances: A Guide to Bills Payable and Simplifying Your Life with Bill Pay",
    title:
      "Managing Your Finances: A Guide to Bills Payable and Simplifying Your Life with Bill Pay",
    date: "May 05, 2023",
    description:
      "Do you ever feel like you’re drowning in a sea of bills? Between rent, utilities, credit cards, and other expenses, it can be overwhelming to keep track of all the payments you need to make each month...",
    link: "https://www.enkash.com/resources/blog/guide-to-manage-your-bills-payable/",
  },
];

const faqData: FAQProps[] = [
  {
    question: "What is payable analytics?",
    answer: [],
    answerHTML: (
      <h4>
        Payable analytics involves using data and insights to understand the
        organization’s payments. Using it, the spend pattern of the business can
        be accessed along with the identification of areas for improvement. It
        facilitates informed decision-making for businesses wherever their
        payments are concerned be it for{" "}
        <Link
          href="https://www.enkash.com/olympus/payables/vendor-management/"
          target="_blank"
        >
          vendors
        </Link>{" "}
        or other entities.
      </h4>
    ),
  },
  {
    question: "How do payable analytics benefit my business?",
    answer: [
      {
        heading:
          "Payable analytics is data that allows businesses to make better decisions. It helps optimize business-related expenses, enables cash flow management, and identifies opportunities for cost savings. Businesses can use analytics to improve their vendor relationships and streamline processes for improvement. The gaps in business payments can be identified using analytics and businesses can enhance their overall performance.",
      },
    ],
  },
  {
    question:
      "How does payable analytics help in identifying potential cost savings and improving cash flow?",
    answer: [
      {
        heading:
          "Payable analytics help businesses identify their spend patterns highlighting areas of cost saving. The insights from the analytics can be used to improve cash flow by making early payments and availing discounts, cutting down on unnecessary spends, better vendor negotiations, and utilizing cash optimally.",
      },
    ],
  },
  {
    question:
      "Can payable analytics integrate with existing accounting systems and software?",
    answer: [],
    answerHTML: (
      <h4>
        Businesses can easily integrate{" "}
        <Link href="https://www.enkash.com/" target="_blank">
          EnKash’s
        </Link>{" "}
        payable analytics with their existing accounting software or ERP
        software. The integration is not complicated and doesn’t require much
        technical cost.
      </h4>
    ),
  },
  {
    question: "Why is a payable analytics dashboard important?",
    answer: [
      {
        heading:
          "The payable analytics dashboard provides data in real-time which facilitates quick decision-making. For instance, businesses can know their cash flow and if favorable, they can use it to make early payments and avail discounts. The data can be used for better negotiations with vendors by comparing it across multiple business branches.",
      },
    ],
  },
];

export { blogData, faqData, carouselData };
