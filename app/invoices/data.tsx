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
      "Never miss a transaction with this no-code solution to effortlessly collect payments across various channels. ",
    image: paymentPage,
    link: "/payment-gateway/",
  },
  {
    title: "Payment Link",
    description:
      "Seamlessly collect payments on WhatsApp, SMS, Facebook, Twitter, and more using no-code payment links.",
    image: paymentLink,
    link: "/payment-links/",
  },
  {
    title: "Payment Button",
    description:
      "A payment button that easily integrates into your website with a quick plug-and-play setup.",
    image: paymentButton,
    link: "/payment-button/",
  },
  {
    title: "QR Codes",
    description:
      "Collect secure, contactless payments using QR codes, empowering businesses to process transactions ",
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
      "Automate recurring invoicing, track sales, and payments, and create bulk invoices with embedded payment links.",
    image: invoices,
    link: "/invoices/",
  },
  {
    title: "Instant Settlement",
    description:
      "Access your funds instantly, skip traditional settlement cycles, and take full control of your cash flow.",
    image: qrCode,
    link: "/instant-settlement/",
  },
  {
    title: "Reminder Engine",
    description:
      "Get over manual reminders and automate your business collections effortlessly for smoother cash flow management.",
    image: reminderEngine,
    link: "/collection-reminder/",
  },
]

const carouselData = [
  {
    image: iconOne,
    alt: "Create your account on EnKash and add your business details.",
    title: "Create your account on EnKash and add your business details.",
    heading: "Sign Up: ",
  },
  {
    image: iconTwo,
    alt: "Choose or design invoice templates with your branding, payment terms, and logo.",
    title:
      "Choose or design invoice templates with your branding, payment terms, and logo.",
    heading: "Customize Invoice Templates: ",
  },
  {
    image: iconThree,
    alt: "Create automated invoices instantly and send them to clients via your preferred channel.",
    title:
      "Create automated invoices instantly and send them to clients via your preferred channel.",
    heading: "Send Invoices: ",
  },
]

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/12/Processing-Invoices-in-SAP-A-Step-by-Step-Guide.jpg",
    imageAlt: "Processing Invoices in SAP: A Step-by-Step Guide",
    title: "Processing Invoices in SAP: A Step-by-Step Guide",
    date: "Dec 26, 2022",
    description:
      "Every organization needs a systematic process for invoicing. If the payment to the vendor is made on time, it can positively impact your organization’s relationship with the vendor or the supplier...",
    link: "https://www.enkash.com/resources/blog/processing-invoices-in-sap/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/01/Heres-how-iInvoice-processing-makes-everything-easier.jpg",
    imageAlt: "Here’s How Invoice Processing Makes Everything Easier",
    title: "Here’s How Invoice Processing Makes Everything Easier",
    date: "Jan 09, 2023",
    description:
      "Invoice processing includes a complete cycle of receiving the invoice, verifying, reviewing, approving, processing it for payment and keeping a record. Companies often receive multiple invoices...",
    link: "https://www.enkash.com/resources/blog/how-invoice-processing-makes-everything-easier/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/04/How-to-modernize-manual-invoice-processing-with-automation.jpg",
    imageAlt:
      "From Manual to Automation: How to Modernize Your Invoice Processing Workflow",
    title:
      "From Manual to Automation: How to Modernize Your Invoice Processing Workflow",
    date: "Apr 07, 2023",
    description:
      "Invoice processing is a critical component of any organization’s financial operations. However, the traditional manual method of processing invoices can be time-consuming and error-prone...",
    link: "https://www.enkash.com/resources/blog/how-to-modernize-invoice-processing-workflow/",
  },
]

export { blogData, carouselData, productData }
