import { FAQProps } from "@/components/faq/faq";
import iconOne from "./img/icon-one.svg";
import iconTwo from "./img/icon-two.svg";
import iconThree from "./img/icon-three.svg";
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
    title: "Payable Analytics",
    description:
      "Gain actionable insights into payables data to optimize cash flow, track trends, and enhance decision-making.",
    image: reminderEngine,
    link: "/olympus/payables/payable-analytics/",
  },
];

const faqData: FAQProps[] = [
  {
    question: "What is a GST payment?",
    answer: [
      {
        heading:
          "GST payment denotes the amount of Goods and Services Tax that a business owes against its transactions that needs to be paid on a regular basis. Every entity with GST registration must remit the payment on or before the due date.",
        bullets: [],
      },
    ],
  },
  {
    question: "How do I make a GST payment?",
    answer: [
      {
        heading:
          "Making a GST payment is simple and involves the following steps:",
        bullets: [
          "Log in to the official GST portal and navigate to the payments tab under 'Services'",
          "Click “Create Challan”, enter amounts under sections like CGST, IGST, CESS, etc, and choose the NEFT/RTGS options and select AXIS bank as the remitting bank",
          "Upload the created challan on EnKash portal for audit team verification",
          "Confirm the amount, request OTP, and complete payment",
        ],
      },
    ],
  },
  {
    question: "What are CGST, SGST, and IGST?",
    answer: [
      {
        heading:
          "Central Goods and Services Tax (CGST) is the tax implemented on intrastate sales of goods and services by the central government. State Goods and Services Tax (SGST) is the tax imposed on the intrastate sales of goods and services by the state government. Integrated Goods and Services Tax (IGST) is the tax levied on interstate sales of goods and services. This is shared between the state and central governments.",
      },
    ],
  },
  {
    question: "How do I check my GST payment status?",
    answer: [
      {
        heading:
          "To check your GST payment status, start by visiting the official GST payment portal. Click on the Dashboard. On this, go to Services, then Payments, and Track Payment Status. Enter the CPIN and GSTIN to check the status of your payment. Please note that you do not need to log in to do this.",
        bullets: [],
      },
    ],
  },
  {
    question: "What is the link for GST payment?",
    answer: [
      {
        heading:
          "You need to click on this link for GST payment -  https://services.gst.gov.in/services/quicklinks/payments",
      },
    ],
  },
  {
    question: "What is EnKash GST payment?",
    answer: [
      {
        heading:
          "The tax payment module helps you deal with business-related taxes like GST without going through repetitive and manual processes. You can easily fetch the challan from the government portal, create challan for payment, get maker and approver approvals on record. You have the option to use a prepaid card, debit card, NEFT, or connected banking option to make the payment. Once the payment is completed, the payment proof will be scanned and filed digitally in your records for future reference.",
        bullets: [],
      },
    ],
  },
  {
    question: "Why is tax payment critical for my business?",
    answer: [
      {
        heading:
          "Tax payments are mandatory by law, and the government requires businesses like yours to pay taxes on time to reap the benefits associated with it, avoid penalties, and keep the business going. Olympus’ tax payment module facilitates the whole process and reduces manual errors and makes a record trail for future audit/reference.",
      },
    ],
  },
  {
    question:
      "Does the tax payment module help improve the finance team’s performance? If yes, how?",
    answer: [
      {
        heading:
          "Olympus’ tax payment module improves the efficiency of your finance team by ensuring that the payments are not missed, the approval process is clear and fast, and by ensuring that the digital records for tax payments are stored in the right place. Olympus’ tax payment module ensures that your business meets compliance and audit-related requirements.",
      },
    ],
  },
  {
    question: "Why should a startup consider GST payment?",
    answer: [
      {
        heading:
          "Tax Payment is critical for a startup because it helps them with the following aspects:",
        bullets: [
          "Ensure timely tax payments to avoid penalties",
          "Have a seamless trail of approvals and the relevant paperwork in place",
          "Enable the finance team to concentrate on more strategic work",
          "Improve the overall efficiency of all the related teams",
        ],
      },
    ],
  },
  {
    question:
      "How does the GST payment online module help create clear records?",
    answer: [
      {
        heading:
          "With Olympus’ tax payment module, much of the process is online with a transparent process laid out. This ensures that the payments are made on time with the right people checking the details and giving their approvals. Once the payment is made, a digital record is created for future reference in case it is required to provide proof of payment or answer audit-related questions.",
      },
    ],
  },
];

const carouselData = [
  {
    image: iconOne,
    alt: "Login to the EnKash portal and complete your KYC",
    title: "Login to the EnKash portal and complete your KYC",
    heading: "Login: ",
  },
  {
    image: iconTwo,
    alt: "Upload your GST challan details",
    title: "Upload your GST challan details",
    heading: "Upload: ",
  },
  {
    image: iconThree,
    alt: "Make payment via multiple payment options",
    title: "Make payment via multiple payment options",
    heading: "Pay: ",
  },
];

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/01/Steps-to-compensate-GST-Challan-payment-online.jpg",
    imageAlt: "Steps to Pay GST",
    title: "Steps to Pay GST Challan Payment Online",
    date: "Jan 09, 2023",
    description:
      "Goods and Services Tax or GST is an indirect tax levied on the supply of goods and services in India. GST is a comprehensive tax that subsumes various indirect taxes previously levied by the central and state governments...",
    link: "https://www.enkash.com/resources/blog/pay-gst-payment-online/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/06/Simplifying-GST-Payments-How-to-Pay-GST-Online.jpg",
    imageAlt: "Simplifying GST Payments",
    title: "Simplifying GST Payments: How to Pay GST Online",
    date: "Jun 13, 2023",
    description:
      "Do you face difficulty in managing tax payments for your business? Don’t worry, we are here for all your GST-related questions and concerns. Goods and Service tax, also known as GST, has become an integral part of our tax system...",
    link: "https://www.enkash.com/resources/blog/pay-gst-online-with-enkash/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/02/How-to-pay-GST-on-advance-payments.jpg",
    imageAlt: "How to Pay GST",
    title: "How to Pay GST on Advance Payments",
    date: "Feb 22, 2023",
    description:
      "Advance payments are transactions or parts of transactions done in advance. These payments are recorded as assets on the business sheet and made before exchanging goods and services. They are also known as prepaid expenses...",
    link: "https://www.enkash.com/resources/blog/gst-on-advance-payments/",
  },
];

export { blogData, faqData, productData, carouselData };
