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

export { blogData, productData, carouselData };
