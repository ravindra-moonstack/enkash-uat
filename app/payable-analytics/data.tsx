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
    link: "/rent-payment/",
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
    title: "Vendor Management",
    description:
      "Streamline vendor relationships with efficient onboarding, centralized data, and seamless payment workflows for enhanced collaboration.",
    image: paymentPage,
    link: "/vendor-management/",
  },
  {
    title: "Bulk Payments",
    description:
      "Process bulk payments quickly and securely, saving time and minimizing manual errors in payouts.",
    image: instantSettlement,
    link: "express-pay/",
  },
  {
    title: "GST Payment",
    description:
      "Manage GST payments effortlessly with integrated solutions, ensuring timely compliance and tax submissions.",
    image: invoices,
    link: "/gst-payment/",
  },
]

const carouselData = [
  {
    image: iconOne,
    alt: "Access your dashboard to view all payable analytics.",
    title: "Access your dashboard to view all payable analytics.",
    heading: "Login to EnKash: ",
  },
  {
    image: iconTwo,
    alt: "Select specific vendors, branches, or payment periods to generate actionable insights.",
    title:
      "Select specific vendors, branches, or payment periods to generate actionable insights.",
    heading: "Filter and Analyze Data: ",
  },
  {
    image: iconThree,
    alt: "Use real-time data to make informed financial decisions, such as early payments or vendor negotiations.",
    title:
      "Use real-time data to make informed financial decisions, such as early payments or vendor negotiations.",
    heading: "Optimize Decisions: ",
  },
]

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/02/Make-smart-business-decisions-with-accounts-payable-insights.jpg",
    imageAlt:
      "Leverage Accounts Payable Insights to Make Smart Business Decisions",
    title:
      "Leverage Accounts Payable Insights to Make Smart Business Decisions",
    date: "Feb 02, 2023",
    description:
      "If you ask a business leader what the main currency of their business is, the answer is most likely to be data. Yes, updated and accurate data is the currency that oils the business decision-making...",
    link: "https://www.enkash.com/resources/blog/accounts-payable-insights/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/05/Streamline-your-business-with-efficient-payable-management.jpg",
    imageAlt: "Streamline Your Business with Efficient Payable Management",
    title: "Streamline Your Business with Efficient Payable Management",
    date: "May 04, 2023",
    description:
      "In the world of business, effective payable management is a critical component of success. Whether you are running a small or large business, the management of accounts payable can be...",
    link: "https://www.enkash.com/resources/blog/streamline-your-business-with-payable-management/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/05/A-guide-to-manage-your-finances-and-bills-payable.jpg",
    imageAlt:
      "Managing Your Finances: A Guide to Bills Payable and Simplifying Your Life with Bill Pay",
    title:
      "Managing Your Finances: A Guide to Bills Payable and Simplifying Your Life with Bill Pay",
    date: "May 05, 2023",
    description:
      "Do you ever feel like you’re drowning in a sea of bills? Between rent, utilities, credit cards, and other expenses, it can be overwhelming to keep track of all the payments you need to make each month...",
    link: "https://www.enkash.com/resources/blog/guide-to-manage-your-bills-payable/",
  },
]

export { blogData, carouselData, productData }
