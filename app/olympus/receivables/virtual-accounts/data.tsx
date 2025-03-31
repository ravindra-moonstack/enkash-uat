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
    title: "Auto Collect",
    description:
      "Collect payments from customers by sending a virtual account number via  NEFT, RTGS, IMPS and UPI payment modes",
    image: autoCollect,
    link: "/olympus/receivables/auto-collect/",
  },
  {
    title: "Payment Link",
    description:
      "Embed payment links to ensure instant payment collection without the need for a website or application.",
    image: paymentLink,
    link: "/olympus/receivables/payment-links/",
  },
  {
    title: "QR Codes",
    description:
      "Allow customers to make payments via scannable QR codes using their smart devices.",
    image: paymentButton,
    link: "/olympus/receivables/qr-codes/",
  },
  {
    title: "Subscriptions",
    description:
      "Ensure regular revenue and convenience for customers by enabling subscriptions for recurring payments.",
    image: qrCode,
    link: "/olympus/receivables/subscription-management/",
  },
  {
    title: "Payment Page",
    description:
      "Make a customizable checkout interface for your business and collect payments.",
    image: paymentPage,
    link: "/olympus/receivables/customized-payment/",
  },
  {
    title: "Invoices",
    description:
      "Generate invoices in bulk by automating recurring transactions and tracking sales",
    image: invoices,
    link: "/olympus/receivables/invoices/",
  },
  {
    title: "Instant Settlement",
    description:
      "Receive payments from customers instantly enabling cash flow improvement.",
    image: instantSettlement,
    link: "/olympus/receivables/instant-settlement/",
  },
  {
    title: "Reminder Engine",
    description:
      "No more manual reminders; automate business collections with a reminder engine.",
    image: reminderEngine,
    link: "/olympus/receivables/reminder-engine/",
  },
];

const carouselData = [
  {
    image: iconOne,
    alt: "Sign up on EnKash and create a virtual account for your business.",
    title: "Sign up on EnKash and create a virtual account for your business.",
    heading: "Create: ",
  },
  {
    image: iconTwo,
    alt: "Collect funds from customers across multiple branches via different modes of payment to the virtual account.",
    title:
      "Collect funds from customers across multiple branches via different modes of payment to the virtual account.",
    heading: "Collect: ",
  },
  {
    image: iconThree,
    alt: "Get instant notifications for payment collection. Reconcile the amount with the invoice generated in real time.",
    title:
      "Get instant notifications for payment collection. Reconcile the amount with the invoice generated in real time.",
    heading: "Reconcile: ",
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
