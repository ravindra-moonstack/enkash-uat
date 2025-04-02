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
    link: "/olympus/payables/bill-payment/",
  },
  {
    title: "Vendor Payments",
    description:
      "Efficiently schedule and process vendor payments to strengthen relationships and maintain supply chain reliability",
    image: paymentButton,
    link: "/olympus/payables/vendor-payment/",
  },
  {
    title: "Vendor Management",
    description:
      "Streamline vendor relationships with efficient onboarding, centralized data, and seamless payment workflows for enhanced collaboration.",
    image: paymentPage,
    link: "/olympus/payables/vendor-management/",
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
    image: autoCollect,
    link: "/olympus/payables/invoice-management/",
  },
  {
    title: "GST Payment",
    description:
      "Manage GST payments effortlessly with integrated solutions, ensuring timely compliance and tax submissions.",
    image: invoices,
    link: "/olympus/payables/gst-payments/",
  },
  {
    title: "Bulk Payments",
    description:
      "Process bulk payments quickly and securely, saving time and minimizing manual errors in payouts.",
    image: instantSettlement,
    link: "/olympus/payables/bulk-payout/",
  },
  {
    title: "Payable Analytics",
    description:
      "Gain actionable insights into payables data to optimize cash flow, track trends, and enhance decision-making.",
    image: reminderEngine,
    link: "/olympus/payables/payable-analytics/",
  },
]

const carouselData = [
  {
    image: iconOne,
    alt: "Upload employee data, set approval workflows, and prepare for payroll runs within our intuitive platform.",
    title:
      "Upload employee data, set approval workflows, and prepare for payroll runs within our intuitive platform.",
    heading: "Upload Employee Data: ",
  },
  {
    image: iconTwo,
    alt: "Review and approve payroll runs before initiating payments, ensuring accuracy and compliance.",
    title:
      "Review and approve payroll runs before initiating payments, ensuring accuracy and compliance.",
    heading: "Review and Approve: ",
  },
  {
    image: iconThree,
    alt: "Make secure salary payments using flexible methods such as debit/credit cards, virtual cards, NEFT, IMPS, and more.",
    title:
      "Make secure salary payments using flexible methods such as debit/credit cards, virtual cards, NEFT, IMPS, and more.",
    heading: "Process Payments: ",
  },
  {
    image: iconFour,
    alt: "Gain real-time visibility into payroll data and generate detailed reports for analysis and decision-making",
    title:
      "Gain real-time visibility into payroll data and generate detailed reports for analysis and decision-making",
    heading: "Real-Time Tracking: ",
  },
]

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/02/All-you-need-to-know-about-employee-expense-reimbursement.jpg",
    imageAlt: "All You Need to Know about Employee Expense Reimbursement",
    title: "All You Need to Know about Employee Expense Reimbursement",
    date: "Dec 23, 2022",
    description:
      "Employee expense reimbursement is a process where an employer reimburses an employee for expenses incurred while performing job-related tasks. These expenses may include travel, training, equipment...",
    link: "https://www.enkash.com/resources/blog/employee-expense-reimbursement/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/blog_33.8ebac017.jpg",
    imageAlt: "7 Benefits of Payroll cards for Employees",
    title: "7 Benefits of Payroll cards for Employees",
    date: "May 11, 2023",
    description:
      "Caring for employees makes a business seem thoughtful and reliable. Employee satisfaction is a two-way street and payroll cards for employees is a good start. The easiest way to make employees happy is to pay them on time...",
    link: "https://www.enkash.com/resources/blog/payroll-card-for-employees/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/09/how-to-use-bulk-payment-effectively-for-better-results-.jpg",
    imageAlt: "How to Use Bulk Payment Effectively for Better Results?",
    title: "How to Use Bulk Payment Effectively for Better Results?",
    date: "Aug 15, 2023",
    description:
      "Today, ensuring your business is up and running consistently is considered a necessity. With the increasing competition, any break in your supply of goods or services to your customers can result...",
    link: "https://www.enkash.com/resources/blog/how-to-use-bulk-payment-effectively-for-better-results/",
  },
]

export { blogData, carouselData, productData }
