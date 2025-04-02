import iconOne from "./img/icon-one.svg";
import iconTwo from "./img/icon-two.svg";
import iconThree from "./img/icon-three.svg";
import { FAQProps } from "@/components/faq/faq";
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
    alt: "Create your EnKash account in just a few clicks.",
    title: "Create your EnKash account in just a few clicks.",
    heading: "Sign Up: ",
  },
  {
    image: iconTwo,
    alt: "Link your rental agreements and landlord information.",
    title: "Link your rental agreements and landlord information.",
    heading: "Add Payment Details: ",
  },
  {
    image: iconThree,
    alt: "Schedule recurring payments or pay on the go with automated reminders.",
    title:
      "Schedule recurring payments or pay on the go with automated reminders.",
    heading: "Automate and Pay: ",
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



export { blogData, carouselData,  productData };
