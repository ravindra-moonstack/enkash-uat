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
import { FAQProps } from "@/components/faq/faq";

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
    image: paymentButton,
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
    title: "Vendor Management",
    description:
      "Streamline vendor relationships with efficient onboarding, centralized data, and seamless payment workflows for enhanced collaboration.",
    image: instantSettlement,
    link: "/olympus/payables/vendor-management/",
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
    question: "What is express pay?",
    answer: [
      {
        heading:
          "Payments from a single account to multiple beneficiaries simultaneously define express pay. EnKash automates this process for businesses, allowing efficient, accurate payments to multiple vendors with a single click.",
      },
    ],
  },
  {
    question: "Why does a business need express pay?",
    answer: [
      {
        heading: "A few reasons why businesses should adopt express pay:",
        bullets: [
          "It’s error-free, helps save time and resources involved in making multiple payments manually",
          "Express pay follow security layers for data encryption",
          "There are fewer chances of payment failure and it supports different payment methods",
          "Bulk payments in advance help to avoid penalties and get trade discounts",
        ],
      },
    ],
  },
  {
    question: "How can express pay improve business cash flow?",
    answer: [
      {
        heading:
          "Express pay can help businesses schedule monthly payments in advance and get trade discounts from their vendors and suppliers. This early payment can ensure businesses save expenses and have an easy monthly cash flow.",
      },
    ],
  },
  {
    question: "How can express pay help the finance team at work?",
    answer: [
      {
        heading:
          "Express pay helps the finance team reduce errors in individual payments, such as double payments or incorrect details. It also streamlines the payment process, minimizing the need for manual data entry.",
      },
    ],
  },
  {
    question: "How is a bulk list different from a bulk payment?",
    answer: [
      {
        heading:
          "A bulk list is a prerequisite list for bulk payment. It is a list of beneficiaries of the credit accounts that can be picked to pay from a single account. Bulk payment is the process of making payments to multiple beneficiaries with a single account simultaneously using the bulk list.",
      },
    ],
  },
  {
    question: "How to set recurring bulk payments?",
    answer: [
      {
        heading:
          "Businesses can set recurring bulk payments via the E-Nach mandate. These payments can be set with a credit or debit card. For now, EnKash provides easy recurring payments for utility bills with a virtual account.",
      },
    ],
  },
  {
    question: "What does the future hold for bulk payments?",
    answer: [
      {
        heading:
          "Bulk payments are increasingly popular due to technological advancements, providing convenience, accuracy, and dependability. The consistency introduced by bulk payments is expected to persist, with businesses readily accepting this innovative approach.",
      },
    ],
  },
  {
    question: "What are the challenges faced by bulk payment systems?",
    answer: [
      {
        heading:
          "There are certain challenges faced by bulk payment systems, which are:",
        bullets: [
          "Many systems are restricted to only one type of payment, like vendor payment",
          "Not all bulk payment systems provide a customizable approval flow",
          "Many bulk payment systems offer only limited payment instruments",
        ],
      },
      {
        heading:
          "EnKash addresses these challenges, offering a holistic platform which supports various types of business payments, including rental and utility payments. It also offers customizable workflows and flexible payment options.",
      },
    ],
  },

  {
    question: "What is a bulk faster payment?",
    answer: [
      {
        heading:
          "Bulk faster payment is making multiple payments from the same debit account simultaneously. As the name suggests, these payments are fast, as multiple accounts are credited simultaneously.",
      },
    ],
  },
  {
    question: "What is a bulk transfer?",
    answer: [
      {
        heading:
          "Bulk transfer is a process of making huge payments to more than one beneficiary in a single click. EnKash can make safe, fast, and easy bulk transfers to all your vendors.",
      },
    ],
  },
  {
    question: " How does bulk transfer work?",
    answer: [
      {
        heading: "Here's how bulk transfer operates:",
        bullets: [
          "Specify the type of bulk payment needed, such as vendor payments, rental, etc",
          "Download the sample format, enter details, and upload it",
          "Submit for approval in a maker-checker workflow",
          "Select multiple invoices and initiate bulk payments using various payment methods",
        ],
      },
    ],
  },
];

const carouselData = [
  {
    image: iconOne,
    alt: "Login to EnKash and choose the bulk business payment you wish to make.",
    title:
      "Login to EnKash and choose the bulk business payment you wish to make.",
    heading: "Login: ",
  },
  {
    image: iconTwo,
    alt: "Use pre-defined templates to enter the mandatory details and upload",
    title:
      "Use pre-defined templates to enter the mandatory details and upload",
    heading: "Upload: ",
  },
  {
    image: iconThree,
    alt: "Trigger approval workflows to get necessary approvals.",
    title: "Trigger approval workflows to get necessary approvals.",
    heading: "Approvals: ",
  },
  {
    image: iconFour,
    alt: "Select multiple invoices and make bulk payments using any payment mode",
    title:
      "Select multiple invoices and make bulk payments using any payment mode",
    heading: "Make Payment: ",
  },
];

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/12/Possibilities-of-bulk-payment.jpg",
    imageAlt: "Explore a Wide Range of Possibilities with Bulk Payment",
    title: "Explore a Wide Range of Possibilities with Bulk Payment",
    date: "Aug 15, 2023",
    description:
      "As the name suggests, a bulk payment refers to a payment method that lets the payer make multiple debit payments to a bulk list. A bulk list is a list of beneficiaries or accounts you intend to pay from a single debit account...",
    link: "https://www.enkash.com/resources/blog/possibilities-with-bulk-payment/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/09/how-to-use-bulk-payment-effectively-for-better-results-.jpg",
    imageAlt: "How to Use Bulk Payment Effectively for Better Results?",
    title: "How to Use Bulk Payment Effectively for Better Results?",
    date: "Aug 29, 2023",
    description:
      "Today, ensuring your business is up and running consistently is considered a necessity. With the increasing competition, any break in your supply of goods or services to your customers can result in lost orders and revenue...",
    link: "https://www.enkash.com/resources/blog/how-to-use-bulk-payment-effectively-for-better-results/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/12/What-is-Vendor-payment.jpg",
    imageAlt: "What is Vendor Payment and How Does It Work?",
    title: "What is Vendor Payment and How Does It Work?",
    date: "Sep 20, 2023",
    description:
      "ccounts payable is a vital part of a firm’s operation and is responsible for processing the payment to the vendors. In addition, it is responsible for making virtual payments that are not associated with payroll..",
    link: "https://www.enkash.com/resources/blog/how-does-vendor-payment-work/",
  },
];

export { blogData, faqData, carouselData, productData };
