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
      "No-code solution to seamlessly collect payments across multiple channels, ensuring you never miss a transaction.",
    image: paymentLink,
    link: "/olympus/receivables/payment-gateway/",
  },
  {
    title: "Payment Page",
    description:
      "Set up custom-branded payment pages in just minutes, requiring no technical expertise to start accepting payments",
    image: paymentPage,
    link: "/olympus/receivables/payment-page/",
  },
  {
    title: "Payment Button",
    description:
      "Add a pre-designed payment button to your website with a simple plug-and-play integration.",
    image: paymentButton,
    link: "/olympus/receivables/payment-button/",
  },
  {
    title: "UPI Payments",
    description:
      "UPI payments with any app - BHIM, PhonePe, WhatsApp for smooth transactions. No SMS, no VPA hassles.",
    image: qrCode,
    link: "/olympus/receivables/upi-payments/",
  },
  {
    title: "QR Codes",
    description:
      "Enable secure, contactless payments with QR codes, allowing businesses to process instant transactions.",
    image: reminderEngine,
    link: "/olympus/receivables/qr-codes/",
  },
  {
    title: "Auto Collect",
    description:
      "Seamlessly accept NEFT, RTGS, and IMPS transfers using customer-specific identifiers, with automated reconciliation for large-scale transactions.",
    image: autoCollect,
    link: "/olympus/receivables/auto-collect/",
  },
  {
    title: "Instant Settlement",
    description:
      "Access your funds immediately, bypass traditional settlement cycles, and take greater control of your cash flow.",
    image: instantSettlement,
    link: "/olympus/receivables/instant-settlement/",
  },
  {
    title: "Invoices",
    description:
      "Automate invoicing for recurring transactions, monitor sales and payments, and generate bulk invoices with integrated payment links.",
    image: invoices,
    link: "/olympus/receivables/invoices/",
  },
];

const carouselData = [
  {
    image: iconOne,
    alt: " Login to EnKash and initiate eNACH registration",
    title: " Login to EnKash and initiate eNACH registration",
    heading: "Login: ",
  },
  {
    image: iconTwo,
    alt: "Provide required personal and bank information",
    title: "Provide required personal and bank information",
    heading: "Details: ",
  },
  {
    image: iconThree,
    alt: "Verify using net banking, debit card, or Aadhaar OTP.",
    title: "Provide required personal and bank information",
    heading: "Authenticate: ",
  },
  {
    image: iconFour,
    alt: "eNACH is setup for recurring payments, once approved",
    title: "eNACH is setup for recurring payments, once approved",
    heading: "Activation: ",
  },
];

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/12/Open-a-virtual-bank-account-now-to-manage-your-business-expenses.jpg",
    imageAlt:
      "Open a Virtual Bank Account for Business and Manage Expense Better",
    title: "Open a Virtual Bank Account for Business and Manage Expense Better",
    date: "Dec 26, 2022",
    description:
      "Virtual bank accounts have been in high demand for the past couple of decades, offering unique advantages to users compared to traditional bank accounts. Open a virtual bank...",
    link: "https://www.enkash.com/resources/blog/benefits-of-virtual-bank-account/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/01/What-is-a-virtual-account-and-how-your-business-can-benefit-for-it.jpg",
    imageAlt:
      "What Is a Virtual Account, and How Your Business Can Benefit from It?",
    title:
      "What Is a Virtual Account, and How Your Business Can Benefit from It?",
    date: "Jan 27, 2023",
    description:
      "Virtual banking has penetrated the large-scale sector, and every small-scale and medium-scale business is also moving towards virtual banking. Virtual bank accounts are trending because of...",
    link: "https://www.enkash.com/resources/blog/what-is-virtual-account-number/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/01/Witness-an-era-of-financial-ease-with-with-virtual-accounts.jpg",
    imageAlt: "Learn How Virtual Accounts Can Benefit Your Business",
    title: "Learn How Virtual Accounts Can Benefit Your Business",
    date: "Jan 09, 2023",
    description:
      "Virtual account allows businesses to initiate seamless financial transactions and maintain track records. Various large, medium, and small-scale businesses are shifting towards...",
    link: "https://www.enkash.com/resources/blog/how-virtual-accounts-can-benefit-your-business/",
  },
];

export  {blogData, carouselData, productData};
