import iconOne from "./img/icon-one.svg";
import iconTwo from "./img/icon-two.svg";
import iconThree from "./img/icon-three.svg";
import iconFour from "./img/icon-four.svg";
import { FAQProps } from "@/components/faq/faq";
import {
  autoCollect,
  invoices,
  paymentButton,
  paymentLink,
  qrCode,
} from "@/components/all-products";
import { AllProductsDataProp } from "@/components/all-products/all-products";

const productData: AllProductsDataProp[] = [
  {
    title: "Fuel Card",
    description:
      "Manage fuel expenses effortlessly with a card designed for streamlined tracking and cost control.",
    image: paymentLink,
    link: "/corporate-cards/fuel-cards/",
  },
  {
    title: "Virtual Card",
    description:
      "Generate secure, single-use virtual cards for online payments, reducing fraud risk and improving accountability.",
    image: paymentButton,
    link: "/corporate-cards/virtual-cards/",
  },
  {
    title: "Travel and Expense",
    description:
      "Simplify travel expense management with dedicated cards, ensuring transparency and easy reconciliation",
    image: paymentButton,
    link: "/corporate-cards/travel-and-expense-cards/",
  },
  {
    title: "Meal Card",
    description:
      "Provide employees with tax-saving meal benefits using a dedicated card accepted at restaurants and grocery stores.",
    image: paymentButton,
    link: "/corporate-cards/meal-cards/",
  },
  {
    title: "Digital Marketing Card",
    description:
      "Optimize digital ad spends with a card tailored for marketing expenses, offering real-time tracking and control.",
    image: autoCollect,
    link: "/corporate-cards/digital-marketing-cards/",
  },
  {
    title: "DIY Card Module",
    description:
      "Customize card settings, limits, and features effortlessly with EnKash’s Do-It-Yourself card module.",
    image: invoices,
    link: "/corporate-cards/diy-card-module/",
  },
];

const faqData: FAQProps[] = [
  {
    question: "What is a purchase card?",
    answer: [
      {
        heading:
          "Purchase cards can be used to make purchases as long as you have a balance on it, but they can be used only for purchases of goods and services.",
      },
    ],
  },
  {
    question: "What are the benefits of using a purchase card?",
    answer: [
      {
        heading:
          "Businesses can streamline the procurement process using a purchase card, reduce paperwork, and provide greater visibility and control over spending. A P-card also simplifies expense tracking and reduces the risk of fraud.",
      },
    ],
  },
  {
    question: "Who can use a purchase card?",
    answer: [
      {
        heading:
          "A P-card is typically issued to an employee authorized to make purchases on behalf of the company or organization. The employee is responsible for ensuring that the purchases made with the card comply with the company's policies and procedures.",
      },
    ],
  },
];

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
];

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
];

export { blogData, faqData, carouselData, productData };
