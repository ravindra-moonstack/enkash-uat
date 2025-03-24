import iconOne from "./img/icon-one.svg";
import iconTwo from "./img/icon-two.svg";
import iconThree from "./img/icon-three.svg";
import { CarouselData } from "@/components/carousel/how-does-carousel";

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
    title: "Auto Collect",
    description:
      "Seamlessly accept NEFT, RTGS, and IMPS transfers using customer-specific identifiers, with automated reconciliation for large-scale transactions.",
    image: autoCollect,
    link: "/olympus/receivables/auto-collect/",
  },
  {
    title: "Invoices",
    description:
      "Automate invoicing for recurring transactions, monitor sales and payments, and generate bulk invoices with integrated payment links.",
    image: invoices,
    link: "/olympus/receivables/invoices/",
  },
  {
    title: "Instant Settlement",
    description:
      "Access your funds immediately, bypass traditional settlement cycles, and take greater control of your cash flow.",
    image: instantSettlement,
    link: "/olympus/receivables/instant-settlement/",
  },
  {
    title: "Reminder Engine",
    description:
      "Remove manual reminders and easily automate your business collections for a more seamless cash flow.",
    image: reminderEngine,
    link: "/olympus/receivables/reminder-engine/",
  },
];

const carouselData: CarouselData["carouselData"] = [
  {
    image: iconOne,
    alt: "Login",
    title:
      "Login to EnKash with your registered number or create an account if you are not registered",
    heading: "Login: ",
  },
  {
    image: iconTwo,
    alt: "Upload Invoices",
    title:
      "Upload the invoices and select the invoice number against which you want to use the smart payment collection feature",
    heading: "Upload Invoices: ",
  },
  {
    image: iconThree,
    alt: "Dispatch",
    title:
      "Click on “Dispatch Invoices,” and all your customers will receive their invoices in one click",
    heading: "Dispatch: ",
  },
];

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/09/How-to-Collect-Payment-on-Time-for-Business-Success-1.jpg",
    imageAlt: "How to Collect Payment on Time for Business Success",
    title: "How to Collect Payment on Time for Business Success",
    date: "Sep 26, 2023",
    description:
      "An effective business model, whether business-to-customer, online, retail, wholesale, or business-to-business, requires a solid solution to collect payments. In most cases...",
    link: "https://www.enkash.com/resources/blog/how-to-collect-payment-on-time-for-business-success/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/05/Can-technology-make-the-collect-and-track-payment-process-easier.jpg",
    imageAlt:
      "Can Technology Make the Collect and Track Payment Process Easier?",
    title: "Can Technology Make the Collect and Track Payment Process Easier?",
    date: "May 11, 2023",
    description:
      "if you are part of the finance team in a startup, you know that collections are probably the lifeblood of the company apart from being the toughest function.  Thankfully today...",
    link: "https://www.enkash.com/resources/blog/can-technology-make-collect-and-track-process-easier/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/07/how-to-handle-overdue-bill-invoices-best-practices-for-collections.jpg",
    imageAlt: "How to Handle Overdue Invoices: Best Practices for Collections",
    title: "How to Handle Overdue Invoices: Best Practices for Collections",
    date: "July 27, 2023",
    description:
      "Managing finances is a critical aspect of running any business. Amidst all the challenges a business faces, one of the most common ones is overdue invoices. This is a serious issue as unpaid invoices disrupt...",
    link: "https://www.enkash.com/resources/blog/how-to-handle-overdue-invoices-best-practices-for-collections/",
  },
];



export { blogData, carouselData,  productData };
