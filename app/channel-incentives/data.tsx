import iconOne from "./img/icon-one.svg"
import iconTwo from "./img/icon-two.svg"
import iconThree from "./img/icon-three.svg"
import iconFour from "./img/icon-four.svg"
import iconFive from "./img/icon-five.svg"
import {
  autoCollect,
  invoices,
  paymentButton,
  paymentLink,
  qrCode,
} from "@/components/all-products"
import { AllProductsDataProp } from "@/components/all-products/all-products"

const productData: AllProductsDataProp[] = [
  {
    title: "Gift Cards",
    description:
      "A prepaid card used by businesses to purchase in bulk for various purposes.",
    image: paymentLink,
    link: "/gift-cards/",
  },
  {
    title: "Employee Rewards",
    description:
      "Recognize and retain top talent with instant, meaningful, and customizable reward solutions.",
    image: paymentButton,
    link: "/employee-rewards/",
  },

  {
    title: "Brand Vouchers",
    description:
      "Provide employees with top-brand vouchers for flexible and meaningful appreciation.",
    image: paymentButton,
    link: "/bolt/",
  },
  {
    title: "Offers",
    description:
      "Unlock exclusive deals and discounts to enhance loyalty, boost engagement, and drive satisfaction.",
    image: paymentButton,
    link: "/loyalty-lounge/offers/",
  },
]

const carouselData = [
  {
    image: iconOne,
    alt: "Login to EnKash or register",
    title:
      "Log in to EnKash using your registered mobile number and complete your KYC.",
    heading: "Mandatory KYC : ",
  },
  {
    image: iconTwo,
    alt: "Add funds to your account via NEFT, IMPS, or RTGS.",
    title:
      "Add funds to your account via NEFT, IMPS, or RTGS. Upload channel sales partners list using bulk upload template file.",
    heading: "Add Funds : ",
  },
  {
    image: iconThree,
    alt: "Partners will be notified via SMS, Whatsapp, ",
    title:
      "Partners will be notified via SMS, Whatsapp, and e-mail about their incentive points and redemption process.",
    heading: "Send Rewards : ",
  },
]

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/blog_26.d1a8b0d7.jpg",
    imageAlt: "Rewards Programs -The Way to Pay More, Earn More",
    title: "Rewards Programs -The Way to Pay More, Earn More",
    date: "Aug 02, 2023",
    description:
      "Corporate cards with attractive rewards programs are one of the most popular choices in the business world these days. Their ease of usage coupled with their immense...",
    link: "https://www.enkash.com/resources/blog/corporate-cards-benefits-rewards-program/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/05/Tips-to-improve-business-expense-reimbursement-processes.jpg",
    imageAlt: "7 Tips to Improve Business Expense Reimbursement Processes",
    title: "7 Tips to Improve Business Expense Reimbursement Processes",
    date: "May 09, 2023",
    description:
      "A business without any expenses is impossible because you need to spend on various aspects. These include the raw materials that you need to run your core business...",
    link: "https://www.enkash.com/resources/blog/tips-to-improve-expense-reimbursement-processes/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/12/Payment-process-guide-for-2023.jpg",
    imageAlt: "Payment Processing Guide for 2023",
    title: "Payment Processing Guide for 2023",
    date: "Aug 10, 2023",
    description:
      "A business owner needs to perform numerous tedious tasks for the smooth and efficient functioning of their business. Whatever the type of business you own, making your...",
    link: "https://www.enkash.com/resources/blog/payment-processing-guide/",
  },
]

export { blogData, carouselData, productData }
