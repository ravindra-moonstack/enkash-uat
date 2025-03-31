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
    title: "Payment Gateway",
    description:
      "A no-code solution to effortlessly collect payments across various channels, guaranteeing you never miss a transaction.",
    image: paymentLink,
    link: "/olympus/receivables/payment-links/",
  },
  {
    title: "Payment Link",
    description:
      "Effortlessly collect payments on WhatsApp, SMS, Facebook, Twitter, and more using no-code payment links.",
    image: paymentPage,
    link: "/olympus/receivables/payment-links/",
  },
  {
    title: "Payment Button",
    description:
      "Easily integrate a pre-designed payment button into your website with a quick plug-and-play setup.",
    image: paymentButton,
    link: "/olympus/receivables/payment-button/",
  },
  {
    title: "QR Codes",
    description:
      "Enable secure, contactless payments using QR codes, empowering businesses to process transactions instantly.",
    image: qrCode,
    link: "/olympus/receivables/qr-codes/",
  },
  {
    title: "Auto Collect",
    description:
      "Easily accept NEFT, RTGS, and IMPS transfers with customer-specific identifiers and automated reconciliation for scalability.",
    image: autoCollect,
    link: "/olympus/receivables/auto-collect/",
  },
  {
    title: "Invoices",
    description:
      "Automate recurring invoicing, track sales, and payments, and create bulk invoices with embedded payment links",
    image: invoices,
    link: "/olympus/receivables/invoices/",
  },
  {
    title: "Instant Settlement",
    description:
      "Get instant access to your funds, skip traditional settlement cycles, and take full control of your cash flow.",
    image: instantSettlement,
    link: "/olympus/receivables/instant-settlement/",
  },
  {
    title: "Reminder Engine",
    description:
      "Eliminate manual reminders and automate your business collections effortlessly for smoother cash flow management.",
    image: reminderEngine,
    link: "/olympus/receivables/reminder-engine/",
  },
];

const carouselData = [
  {
    image: iconOne,
    alt: " Register with EnKash and integrate the UPI payment gateway on your website or app.",
    title:
      " Register with EnKash and integrate the UPI payment gateway on your website or app.",
    heading: "Sign-up: ",
  },
  {
    image: iconTwo,
    alt: "Ensure compliance and enable secure transactions by completing the simple KYC process.",
    title:
      "Ensure compliance and enable secure transactions by completing the simple KYC process.",
    heading: "KYC: ",
  },
  {
    image: iconThree,
    alt: "Start receiving payments through UPI apps—directly into your bank account.",
    title:
      "Start receiving payments through UPI apps—directly into your bank account.",
    heading: "Collect: ",
  },
];

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/01/UPI-Transaction-Status-Check-Verify-Your-Payments.jpg",
    imageAlt: "UPI Transaction Status Check - Verify Your Payments",
    title: "UPI Transaction Status Check: Verify Your Payments",
    date: "Jan 24, 2023",
    description:
      "Conducting a UPI transaction check has become important to ensure seamless payments. Learn how to do a UPI transaction status check here",
    link: "https://www.enkash.com/resources/blog/detailed-guide-about-upi-transaction-status/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2024/03/How-to-Integrate-UPI-Payment-Gateway-in-Website-or-Mobile-App-1024x576.png",
    imageAlt: "How to Integrate UPI Payment Gateway in Website or Mobile App",
    title:
      "Optimizing Business Transactions: Mastering Seamless UPI Integration",
    date: "Mar 22, 2024",
    description:
      "Optimize your business with seamless UPI payment gateway integration. Choose EnKash's Olympus for secure, efficient, and flexible transactions. Revolutionize payment processes for success",
    link: "https://www.enkash.com/resources/blog/why-upi-payment-gateway-integration-is-essential/",
    author: "Avinash",
    readingTime: "8 minutes",
  },
  {
    image: "https://www.enkash.com/resources/wp-content/uploads/2024/03/37.png",
    imageAlt: "MPIN",
    title: "What is MPIN? How to Generate and Use MPIN in UPI?",
    date: "Mar 20, 2024",
    description:
      "Explore the significance of Mobile Personal Identification Number (MPIN) in securing UPI and mobile banking transactions. Learn how to generate, change, and use your MPIN for enhanced online payment security.",
    link: "https://www.enkash.com/resources/blog/what-is-mpin-full-form-meaning-and-how-to-generate-and-use-mpin-in-upi/",
    author: "Avinash",
    readingTime: "6 minutes",
  },
];

export  {blogData, carouselData, productData};
