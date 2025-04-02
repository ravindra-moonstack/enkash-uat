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
    image: paymentButton,
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
    title: "Vendor Management",
    description:
      "Streamline vendor relationships with efficient onboarding, centralized data, and seamless payment workflows for enhanced collaboration.",
    image: instantSettlement,
    link: "/vendor-management/",
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
    alt: "Login to EnKash and choose the bulk business payment you wish to make.",
    title:
      "Login to EnKash and choose the bulk business payment you wish to make.",
    heading: "Login: ",
  },
  {
    image: iconTwo,
    alt: "Use pre-defined templates to enter the mandatory details and upload",
    title:
      "Use pre-defined templates to enter the mandatory details and upload",
    heading: "Upload: ",
  },
  {
    image: iconThree,
    alt: "Trigger approval workflows to get necessary approvals.",
    title: "Trigger approval workflows to get necessary approvals.",
    heading: "Approvals: ",
  },
  {
    image: iconFour,
    alt: "Select multiple invoices and make bulk payments using any payment mode",
    title:
      "Select multiple invoices and make bulk payments using any payment mode",
    heading: "Make Payment: ",
  },
]

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/12/Possibilities-of-bulk-payment.jpg",
    imageAlt: "Explore a Wide Range of Possibilities with Bulk Payment",
    title: "Explore a Wide Range of Possibilities with Bulk Payment",
    date: "Aug 15, 2023",
    description:
      "As the name suggests, a bulk payment refers to a payment method that lets the payer make multiple debit payments to a bulk list. A bulk list is a list of beneficiaries or accounts you intend to pay from a single debit account...",
    link: "https://www.enkash.com/resources/blog/possibilities-with-bulk-payment/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/09/how-to-use-bulk-payment-effectively-for-better-results-.jpg",
    imageAlt: "How to Use Bulk Payment Effectively for Better Results?",
    title: "How to Use Bulk Payment Effectively for Better Results?",
    date: "Aug 29, 2023",
    description:
      "Today, ensuring your business is up and running consistently is considered a necessity. With the increasing competition, any break in your supply of goods or services to your customers can result in lost orders and revenue...",
    link: "https://www.enkash.com/resources/blog/how-to-use-bulk-payment-effectively-for-better-results/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/12/What-is-Vendor-payment.jpg",
    imageAlt: "What is Vendor Payment and How Does It Work?",
    title: "What is Vendor Payment and How Does It Work?",
    date: "Sep 20, 2023",
    description:
      "ccounts payable is a vital part of a firm’s operation and is responsible for processing the payment to the vendors. In addition, it is responsible for making virtual payments that are not associated with payroll..",
    link: "https://www.enkash.com/resources/blog/how-does-vendor-payment-work/",
  },
]

export { blogData, carouselData, productData }
