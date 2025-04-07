import iconOne from "./img/icon-one.svg"
import iconTwo from "./img/icon-two.svg"
import iconThree from "./img/icon-three.svg"
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
      "Collect payments across various channels, guaranteeing you never miss a transaction.",
    image: paymentLink,
    link: "/payment-links/",
  },
  {
    title: "Payment Link",
    description:
      "Use WhatsApp, SMS, Facebook, Twitter, and more with no-code payment links.",
    image: paymentPage,
    link: "/payment-links/",
  },
  {
    title: "Payment Button",
    description:
      "Integrate a pre-designed payment button into your website with a quick plug-and-play setup.",
    image: paymentButton,
    link: "/payment-button/",
  },
  {
    title: "QR Codes",
    description:
      "Use secure, contactless payments using QR codes, empowering businesses to process transactions instantly",
    image: qrCode,
    link: "/qr-codes/",
  },
  {
    title: "Auto Collect",
    description:
      "Easily accept NEFT, RTGS, and IMPS transfers with customer-specific identifiers and automated reconciliation for scalability.",
    image: autoCollect,
    link: "/auto-collect/",
  },
  {
    title: "Invoices",
    description:
      "Automate recurring invoicing, track sales, and payments, and create bulk invoices with embedded payment links",
    image: invoices,
    link: "/digital-invoicing/",
  },
  {
    title: "Instant Settlement",
    description:
      "Get instant access to your funds, skip traditional settlement cycles, and take full control of your cash flow.",
    image: instantSettlement,
    link: "/instant-settlement/",
  },
  {
    title: "Reminder Engine",
    description:
      "Eliminate manual reminders and automate your business collections effortlessly for smoother cash flow management.",
    image: reminderEngine,
    link: "/collection-reminder/",
  },
]

const carouselData = [
  {
    image: iconOne,
    alt: "Connect your payment systems, bank accounts, and invoicing tools to EnKash for seamless data flow.",
    title:
      "Connect your payment systems, bank accounts, and invoicing tools to EnKash for seamless data flow.",
    heading: "Integrate Payment Data: ",
  },
  {
    image: iconTwo,
    alt: "Set up personalized filters and segmentation to track and analyze collections by customer, region, or payment status.",
    title:
      "Set up personalized filters and segmentation to track and analyze collections by customer, region, or payment status.",
    heading: "Customize Analytics Dashboard: ",
  },
  {
    image: iconThree,
    alt: "Access real-time insights, identify trends, and adjust your collection strategy based on actionable data.",
    title:
      "Access real-time insights, identify trends, and adjust your collection strategy based on actionable data.",
    heading: "Review & Optimize: ",
  },
]

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
]

export { blogData, carouselData, productData }
