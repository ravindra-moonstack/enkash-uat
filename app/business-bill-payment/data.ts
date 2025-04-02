import iconOne from "./img/icon-one.png"
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
    title: "Vendor Management",
    description:
      "Streamline vendor relationships with efficient onboarding, centralized data, and seamless payment workflows for enhanced collaboration.",
    image: paymentLink,
    link: "/vendor-management/",
  },
  {
    title: "Vendor Payments",
    description:
      "Efficiently schedule and process vendor payments to strengthen relationships and maintain supply chain reliability",
    image: paymentPage,
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
    alt: "Sign up and link your business locations to our platform.",
    title: "Sign up and link your business locations to our platform.",
    heading: "Onboard in Minutes: ",
  },
  {
    image: iconTwo,
    alt: "Add utility bill details or let EnKash auto-fetch them for you.",
    title: "Add utility bill details or let EnKash auto-fetch them for you.",
    heading: "Add and Auto-Fetch Bills: ",
  },
  {
    image: iconThree,
    alt: "Make single or bulk payments instantly with robust security measures.",
    title:
      "Make single or bulk payments instantly with robust security measures.",
    heading: "Pay in One Click: ",
  },
  {
    image: iconFour,
    alt: "Monitor all payment statuses and reconcile them effortlessly.",
    title: "Monitor all payment statuses and reconcile them effortlessly.",
    heading: "Track & Reconcile: ",
  },
]

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/01/Save-money-with-timely-credit-card-bill-payments.jpg",
    imageAlt: "Save Money with Timely Credit Card Bill Payments",
    title: "Save Money with Timely Credit Card Bill Payments",
    date: "Jan 27, 2023",
    description:
      "Credit cards are a commonly used payment method in businesses for making purchases and accepting payments from customers. They offer a convenient and efficient way for business owners to manage their finances and provide benefits to customers, such as reward programs...",
    link: "https://www.enkash.com/resources/blog/benefits-of-credit-card-bill-payments/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/05/Feature-Image-6.jpg",
    imageAlt:
      "Benefits of Enabling Auto Reminder for Bill Payments for Businesses",
    title:
      "Benefits of Enabling Auto Reminder for Bill Payments for Businesses",
    date: "May 26, 2023",
    description:
      "Managing bill payments efficiently is crucial for maintaining healthy financial operations. Auto reminders for bill payments in businesses provide a valuable solution for streamlining financial operations and ensuring timely payments...",
    link: "https://www.enkash.com/resources/blog/benefits-of-enabling-auto-reminder-for-bill-payments/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/05/A-guide-to-manage-your-finances-and-bills-payable.jpg",
    imageAlt:
      "Managing Your Finances: A Guide to Bills Payable and Simplifying Your Life with Bill Pay",
    title:
      "Managing Your Finances: A Guide to Bills Payable and Simplifying Your Life with Bill Pay",
    date: "Aug 10, 2023",
    description:
      "Do you ever feel like you’re drowning in a sea of bills? Between rent, utilities, credit cards, and other expenses, it can be overwhelming to keep track of all the payments you need to make each month. But managing your finances doesn’t organization..",
    link: "https://www.enkash.com/resources/blog/guide-to-manage-your-bills-payable/",
  },
]

export { blogData, carouselData, productData }
