import iconOne from "./img/icon-one.svg"
import iconTwo from "./img/icon-two.svg"
import iconThree from "./img/icon-three.svg"
import iconFour from "./img/icon-four.svg"
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
      "This no-code solution allows effortless payments collection across various channels, guaranteeing you never miss a transaction.",
    image: paymentLink,
    link: "/payment-links/",
  },
  {
    title: "Payment Link",
    description:
      "Collect payments on WhatsApp, SMS, Facebook, Twitter, and more using no-code payment links.",
    image: paymentPage,
    link: "/payment-links/",
  },
  {
    title: "Payment Button",
    description:
      "Integrate this pre-designed payment button with a quick plug-and-play setup.",
    image: paymentButton,
    link: "/payment-button/",
  },
  {
    title: "QR Codes",
    description:
      "Collect contactless payments using QR codes, allowing businesses to process transactions instantly.",
    image: qrCode,
    link: "/qr-codes/",
  },
  {
    title: "Auto Collect",
    description:
      "Accept NEFT, RTGS, and IMPS transfers with customer-specific identifiers and automated reconciliation for scalability.",
    image: autoCollect,
    link: "/auto-collect/",
  },
  {
    title: "Invoices",
    description:
      "It’s time to automate recurring invoicing, track sales, and payments, and create bulk invoices with embedded payment links.",
    image: invoices,
    link: "/digital-invoicing/",
  },
  {
    title: "Instant Settlement",
    description:
      "Instantly access your business funds, skip traditional settlement cycles, and take full control of your cash flow.",
    image: instantSettlement,
    link: "/instant-settlement/",
  },
  {
    title: "Reminder Engine",
    description:
      "Automate your business collections for a smoother cash flow management.",
    image: reminderEngine,
    link: "/collection-reminder/",
  },
]

const carouselData = [
  {
    image: iconOne,
    alt: "Connect bank accounts, payment gateways, and other financial systems with EnKash.",
    title:
      "Connect bank accounts, payment gateways, and other financial systems with EnKash.",
    heading: "Integrate Payment Sources: ",
  },
  {
    image: iconTwo,
    alt: "Define rules to match transactions, invoices, and payments automatically based on your business needs.",
    title:
      "Define rules to match transactions, invoices, and payments automatically based on your business needs.",
    heading: "Customize Reconciliation Rules: ",
  },
  {
    image: iconThree,
    alt: "Allow EnKash to automatically match and reconcile transactions, while generating detailed reports for your review",
    title:
      "Allow EnKash to automatically match and reconcile transactions, while generating detailed reports for your review",
    heading: "Review & Reconcile: ",
  },
]

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/WhatsApp-Image-2023-09-13-at-4.23.23-PM-1.jpeg",
    imageAlt: "Tax-free Meals For Your Employees With EnKash Meal Cards",
    title: "Tax-free Meals For Your Employees With EnKash Meal Cards",
    date: "Sep 26, 2022",
    description:
      "Employee satisfaction is one of the cornerstones of a successful business. To keep your employees happy, just paying salaries on time is not enough anymore...",
    link: "https://www.enkash.com/resources/blog/tax-free-meal-card/",
  },

  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/blog_7.1b7b0500.jpg",
    imageAlt:
      "What is Business Expense Card & Benefits of Business Prepaid Cards",
    title: "What is Business Expense Card & Benefits of Business Prepaid Cards",
    date: "Aug 02, 2023",
    description:
      "Prepaid cards or corporate expense cards have emerged as cutting-edge expense management tools, offering a range of innovative features to simplify your life. From handling business...",
    link: "https://www.enkash.com/resources/blog/prepaid-card-for-business-expenses/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/10/Prepaid-Cards-A-definitive-guide-to-growth-and-profitibility.jpg",
    imageAlt: "Prepaid Cards – A Guide to Growth",
    title: "Prepaid Cards – A Guide to Growth",
    date: "Oct 20, 2022",
    description:
      "The growth of a business depends on various factors, one of which is the way a company makes payments. With the country rapidly moving towards digitization in different industries, digital payment...",
    link: "https://www.enkash.com/resources/blog/prepaid-cards-a-defintive-guide-to-growth/",
  },
]

export { blogData, carouselData, productData }
