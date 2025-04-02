import { FAQProps } from "@/components/faq/faq"
import iconOne from "./img/icon-one.svg"
import iconTwo from "./img/icon-two.svg"
import iconThree from "./img/icon-three.svg"
import iconFour from "./img/icon-four.svg"
import iconFive from "./img/icon-five.svg"
import {
  autoCollect,
  instantSettlement,
  invoices,
  paymentButton,
  paymentLink,
  paymentPage,
  qrCode,
  reminderEngine,
} from "@/components/all-products"
import { AllProductsDataProp } from "@/components/all-products/all-products"

const productData: AllProductsDataProp[] = [
  {
    title: "Payment Gateway",
    description:
      "No-code solution to seamlessly collect payments across multiple channels, ensuring you never miss a transaction.",
    image: paymentLink,
    link: "/payment-links/",
  },
  {
    title: "Payment Page",
    description:
      "Set up custom-branded payment pages in just minutes, requiring no technical expertise to start accepting payments online.",
    image: paymentPage,
    link: "/customized-payment/",
  },
  {
    title: "Payment Button",
    description:
      "Add a pre-designed payment button to your website with a simple plug-and-play integration.",
    image: paymentButton,
    link: "/payment-button/",
  },
  {
    title: "QR Codes",
    description:
      "Enable secure, contactless payments with QR codes, allowing businesses to process instant transactions.",
    image: qrCode,
    link: "/qr-codes/",
  },
  {
    title: "Auto Collect",
    description:
      "Seamlessly accept NEFT, RTGS, and IMPS transfers using customer-specific identifiers, with automated reconciliation for large-scale transactions.",
    image: autoCollect,
    link: "/auto-collect/",
  },
  {
    title: "Invoices",
    description:
      "Automate invoicing for recurring transactions, monitor sales and payments, and generate bulk invoices with integrated payment links.",
    image: invoices,
    link: "/invoices/",
  },
  {
    title: "Instant Settlement",
    description:
      "Access your funds immediately, bypass traditional settlement cycles, and take greater control of your cash flow.",
    image: instantSettlement,
    link: "/instant-settlement/",
  },
  {
    title: "Reminder Engine",
    description:
      "Remove manual reminders and easily automate your business collections for a more seamless cash flow..",
    image: reminderEngine,
    link: "/collection-reminder/",
  },
]

const carouselData = [
  {
    image: iconOne,
    alt: "Use the EnKash dashboard or APIs to generate payment links with ease.",
    title:
      "Use the EnKash dashboard or APIs to generate payment links with ease.",
    heading: "Generate Payment Link: ",
  },
  {
    image: iconTwo,
    alt: "Send the links via SMS, email, WhatsApp, or social media.",
    title: "Send the links via SMS, email, WhatsApp, or social media.",
    heading: "Share Payment Link: ",
  },
  {
    image: iconThree,
    alt: "Customers pay using their preferred payment method, and you get notified instantly.",
    title:
      "Customers pay using their preferred payment method, and you get notified instantly.",
    heading: "Get Paid: ",
  },
]

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/05/Tips-for-choosing-the-right-payment-link-generator-for-your-business.jpg",
    imageAlt:
      "Tips for Choosing the Right Payment Link Generator for Your Business",
    title:
      "Tips for Choosing the Right Payment Link Generator for Your Business",
    date: "May 18, 2023",
    description:
      "In today’s world, businesses have gone digital, and with that comes the need to facilitate online payments. One of the best ways to do this is by using a payment link generator....",
    link: "https://www.enkash.com/resources/blog/tips-for-choosing-the-right-payment-link-generator/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/03/How-to-Generate-Payment-Link-for-Seamless-Payments.jpg",
    imageAlt: "Learn How to Generate Payment Link for Seamless Payments",
    title: "Learn How to Generate Payment Link for Seamless Payments",
    date: "March 20, 2023",
    description:
      "Online transactions have become a part of our daily lives in today’s digital world. With the rise of e-commerce, numerous ways exist to purchase goods and services online. One of the most suitable...",
    link: "https://www.enkash.com/resources/blog/how-to-generate-payment-link/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/01/Setup-digital-transaction-account-and-accept-payment-online.jpg",
    imageAlt: "Set Up Digital Transaction Account and Accept Payments Online",
    title: "Set Up Digital Transaction Account and Accept Payments Online",
    date: "Jan 24, 2023",
    description:
      "The world is going digital, and the latest development in the financial sector is the unceasing rise of online payments. Pertaining to the aftereffects of COVID-19 and ease of payment, making any transaction...",
    link: "https://www.enkash.com/resources/blog/accepting-payments-online-for-business/",
  },
]

export { blogData, carouselData, productData }
