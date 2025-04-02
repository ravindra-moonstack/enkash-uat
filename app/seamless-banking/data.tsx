import { FAQProps } from "@/components/faq/faq"
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
import Link from "next/link"

const productData: AllProductsDataProp[] = [
  {
    title: "Business Utility Bill Payment",
    description:
      "Seamlessly manage and automate utility bill payments to ensure uninterrupted operations for your business.",
    image: paymentLink,
    link: "/business-bill-payment/",
  },
  {
    title: "Vendor Payments",
    description:
      "Efficiently schedule and process vendor payments to strengthen relationships and maintain supply chain reliability",
    image: paymentButton,
    link: "/vendor-payment/",
  },
  {
    title: "Rental Payments",
    description:
      "Simplify rental payments with automated solutions, ensuring timely transactions and avoiding penalties or delays.",
    image: paymentPage,
    link: "/rental-payment/",
  },
  {
    title: "Invoice Management",
    description:
      "Digitize and streamline invoice handling to enhance accuracy, compliance, and overall accounts payable efficiency.",
    image: qrCode,
    link: "/invoice-management/",
  },
  {
    title: "Payroll Processing",
    description:
      "Automate payroll disbursements to pay employees accurately and on time, every single month.",
    image: autoCollect,
    link: "/payroll/",
  },
  {
    title: "GST Payment",
    description:
      "Manage GST payments effortlessly with integrated solutions, ensuring timely compliance and tax submissions.",
    image: invoices,
    link: "/gst-payment/",
  },
  {
    title: "Bulk Payments",
    description:
      "Process bulk payments quickly and securely, saving time and minimizing manual errors in payouts.",
    image: instantSettlement,
    link: "express-pay/",
  },
  {
    title: "Payable Analytics",
    description:
      "Gain actionable insights into payables data to optimize cash flow, track trends, and enhance decision-making.",
    image: reminderEngine,
    link: "/payable-analytics/",
  },
]

const carouselData = [
  {
    image: iconOne,
    alt: "Log in to EnKash and link your bank account",
    title: "Log in to EnKash and link your bank account",
    heading: "Login: ",
  },
  {
    image: iconTwo,
    alt: "Add beneficiaries to the platform.",
    title: "Add beneficiaries to the platform.",
    heading: "Beneficiaries: ",
  },
  {
    image: iconThree,
    alt: "Create or import invoices and set up the approval matrix.",
    title: "Create or import invoices and set up the approval matrix.",
    heading: "Invoices: ",
  },
  {
    image: iconFour,
    alt: "Make payments directly from EnKash..",
    title: "Make payments directly from EnKash..",
    heading: "Payment: ",
  },
]

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
]

export { blogData, carouselData, productData }
