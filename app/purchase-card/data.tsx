import iconOne from "./img/icon-one.svg"
import iconTwo from "./img/icon-two.svg"
import iconThree from "./img/icon-three.svg"
import iconFour from "./img/icon-four.svg"
import {
  autoCollect,
  invoices,
  paymentButton,
  paymentLink,
} from "@/components/all-products"
import { AllProductsDataProp } from "@/components/all-products/all-products"

const productData: AllProductsDataProp[] = [
  {
    title: "Fuel Card",
    description:
      "Manage fuel expenses effortlessly with a card designed for streamlined tracking and cost control.",
    image: paymentLink,
    link: "/fuel-card/",
  },
  {
    title: "Virtual Card",
    description:
      "Generate secure, single-use virtual cards for online payments, reducing fraud risk and improving accountability.",
    image: paymentButton,
    link: "/virtual-card/",
  },
  {
    title: "Travel and Expense",
    description:
      "Simplify travel expense management with dedicated cards, ensuring transparency and easy reconciliation",
    image: paymentButton,
    link: "/travel-and-expense-card/",
  },
  {
    title: "Meal Card",
    description:
      "Provide employees with tax-saving meal benefits using a dedicated card accepted at restaurants and grocery stores.",
    image: paymentButton,
    link: "/meal-card/",
  },
  {
    title: "Digital Marketing Card",
    description:
      "Optimize digital ad spends with a card tailored for marketing expenses, offering real-time tracking and control.",
    image: autoCollect,
    link: "/digital-marketing-card/",
  },
  {
    title: "DIY Card Module",
    description:
      "Customize card settings, limits, and features effortlessly with EnKash’s Do-It-Yourself card module.",
    image: invoices,
    link: "/diy-card-module/",
  },
]

const carouselData = [
  {
    image: iconOne,
    alt: "Issue purchase cards to authorized employees for quick, secure purchasing.",
    title:
      "Issue purchase cards to authorized employees for quick, secure purchasing.",
    heading: "Simplify Procurement: ",
  },
  {
    image: iconTwo,
    alt: "Customize limits based on employee roles, departments, or project needs.",
    title:
      "Customize limits based on employee roles, departments, or project needs.",
    heading: "Set Limits: ",
  },
  {
    image: iconThree,
    alt: "View detailed reports and track spending across departments with real-time insights.",
    title:
      "View detailed reports and track spending across departments with real-time insights.",
    heading: "Track Expenses: ",
  },
  {
    image: iconFour,
    alt: "Use spending data to inform purchasing decisions and improve supplier terms.",
    title:
      "Use spending data to inform purchasing decisions and improve supplier terms.",
    heading: "Optimize Decisions: ",
  },
]

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/blog_21.e87c3940.jpg",
    imageAlt: "Purchase Cards: Control, Visibility & Credit Optimization",
    title: "Purchase Cards: Control, Visibility & Credit Optimization",
    date: "Aug 02, 2023",
    description:
      "Employee satisfaction is one of the cornerstones of a successful business. To keep your employees happy, just paying salaries on time is not enough anymore...",
    link: "https://www.enkash.com/resources/blog/purchase-cards-for-credit-optimization/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/Supercharge-your-business-with-a-purchase-card-scaled.jpg",
    imageAlt: "Supercharge Your Business with a Purchase Card",
    title: "Supercharge Your Business with a Purchase Card",
    date: "Sep 26, 2022",
    description:
      "Do you keep buying business essentials online for your clients? Don’t you want to share your credit card credentials with employees? Are you tired of keeping a record of business expenses?...",
    link: "https://www.enkash.com/resources/blog/business-expenses-with-enkash-purchase-card/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/blog_19.256a1cdc.jpg",
    imageAlt: "Purchase Cards Bring Working Capital Efficiency",
    title: "Purchase Cards Bring Working Capital Efficiency",
    date: "Aug 02, 2023",
    description:
      "Businesses are incorporating Purchase cards into their business models to increase their working capital efficiency. Due to their boosted efficiency and vast variety of benefits, Purchase Cards...",
    link: "https://www.enkash.com/resources/blog/working-capital-b2b-purchase-cards/",
  },
]

export { blogData, carouselData, productData }
