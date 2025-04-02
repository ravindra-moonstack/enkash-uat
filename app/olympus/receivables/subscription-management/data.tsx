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
    title: "UPI Payments",
    description:
      "UPI payments with any app - BHIM, PhonePe, WhatsApp for smooth transactions. No SMS, no VPA hassles.",
    image: paymentLink,
    link: "/olympus/receivables/upi-payments/",
  },
  {
    title: "eNACH",
    description:
      "A mandate for receiving recurring payments from customers, eNACH helps businesses with a steady cash flow.",
    image: reminderEngine,
    link: "/olympus/receivables/eNACH/",
  },
  {
    title: "QR Codes ",
    description:
      "No-code solution to seamlessly collect payments across multiple channels, ensuring you never miss a transaction.",
    image: qrCode,
    link: "/qr-codes/",
  },
  {
    title: "Invoices",
    description:
      "Create bulk invoices and automate recurring invoicing, with embedded payment links",
    image: invoices,
    link: "/invoices/",
  },
  {
    title: "Payment Link",
    description:
      "Use no-code payment links to collect payments on different channels like WhatsApp, SMS, email and social media.",
    image: paymentLink,
    link: "/payment-links/",
  },
  {
    title: "Payment Button",
    description:
      "An easy-to-integrate pre-designed payment button lets businesses collect payments.",
    image: paymentButton,
    link: "/payment-button/",
  },
  {
    title: "Instant Settlement",
    description:
      "Businesses can skip traditional settlement cycles and switch to instant settlement taking complete control of their cash flow.",
    image: instantSettlement,
    link: "/instant-settlement/",
  },
  {
    title: "Payment Page",
    description:
      "Make customized payment pages with zero technical effort and start receiving funds.",
    image: paymentPage,
    link: "/customized-payment/",
  },
]

const carouselData = [
  {
    image: iconOne,
    alt: "Sign up on EnKash for its subscription management model",
    title: "Sign up on EnKash for its subscription management model",
    heading: "Get Started: ",
  },
  {
    image: iconTwo,
    alt: "Seamlessly integrate your business website with EnKash without any technical efforts.",
    title:
      "Seamlessly integrate your business website with EnKash without any technical efforts.",
    heading: "Integrate: ",
  },
  {
    image: iconThree,
    alt: "Start receiving recurring payments from your customers as per their subscription plans.",
    title:
      "Start receiving recurring payments from your customers as per their subscription plans.",
    heading: "Collect: ",
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
