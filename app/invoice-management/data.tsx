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
    title: "Vendor Management",
    description:
      "Streamline vendor relationships with efficient onboarding, centralized data, and seamless payment workflows for enhanced collaboration.",
    image: paymentPage,
    link: "/vendor-management/",
  },
  {
    title: "Rental Payments",
    description:
      "Simplify rental payments with automated solutions, ensuring timely transactions and avoiding penalties or delays.",
    image: paymentButton,
    link: "/rental-payment/",
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
    alt: "Create your account and add invoices ",
    title: "Create your account and add invoices ",
    heading: "Sign Up and Upload: ",
  },
  {
    image: iconTwo,
    alt: "Set up approval workflows and process invoices efficiently.",
    title: "Set up approval workflows and process invoices efficiently.",
    heading: "Approve: ",
  },
  {
    image: iconThree,
    alt: "Make payments using your preferred method, including EnKash credit lines.",
    title:
      "Make payments using your preferred method, including EnKash credit lines.",
    heading: "Pay: ",
  },
  {
    image: iconFour,
    alt: "Monitor progress and generate insights to improve financial planning.",
    title:
      "Monitor progress and generate insights to improve financial planning.",
    heading: "Track & Report: ",
  },
]

const blogData = [
  {
    image:
      "https://blogs.enkash.com/wp-content/uploads/2023/04/How-to-modernize-manual-invoice-processing-with-automation.jpg",
    imageAlt:
      "From Manual to Automation: How to Modernize Your Invoice Processing Workflow",
    title:
      "From Manual to Automation: How to Modernize Your Invoice Processing Workflow",
    date: "Apr 07, 2023",
    description:
      "Invoice processing is a critical component of any organization’s financial operations. However, the traditional manual method of processing invoices can be time-consuming and error-prone. In today’s fast-paced business...",
    link: "https://www.enkash.com/resources/blog/how-to-modernize-invoice-processing-workflow/",
  },
  {
    image:
      "https://blogs.enkash.com/wp-content/uploads/2023/05/E-invoicing-under-GST.jpg",
    imageAlt: "E-invoicing under GST: Benefits and Process",
    title: "E-invoicing under GST: Benefits and Process",
    date: "Sep 29, 2023",
    description:
      "In today’s fast-paced digital world, traditional paper-based processes are being replaced by more efficient and streamlined electronic methods. The introduction of e-invoicing under the Goods and Services Tax (GST) regime...",
    link: "https://www.enkash.com/resources/blog/e-invoicing-under-gst/",
  },

  {
    image:
      "https://blogs.enkash.com/wp-content/uploads/2023/01/Heres-how-iInvoice-processing-makes-everything-easier.jpg",
    imageAlt: "Here’s How Invoice Processing Makes Everything Easier",
    title: "Here’s How Invoice Processing Makes Everything Easier",
    date: "Jan 09, 2023",
    description:
      "Invoice processing includes a complete cycle of receiving the invoice, verifying, reviewing, approving, processing it for payment and keeping a record. Companies often receive multiple invoices, including freelancers,...",
    link: "https://www.enkash.com/resources/blog/how-invoice-processing-makes-everything-easier/",
  },
]

export { blogData, carouselData, productData }
