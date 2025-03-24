import iconOne from "./img/icon-one.svg";
import iconTwo from "./img/icon-two.svg";
import iconThree from "./img/icon-three.svg";
import iconFour from "./img/icon-four.svg";
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
    title: "Purchase Card",
    description:
      "Empower your team to make secure business purchases while maintaining full control over spending limits.",
    image: qrCode,
    link: "/corporate-cards/purchase-cards/",
  },
  {
    title: "Digital Marketing Card",
    description:
      "Optimize digital ad spends with a card tailored for marketing expenses, offering real-time tracking and control.",
    image: autoCollect,
    link: "/corporate-cards/digital-marketing-cards/",
  },
  {
    title: "Meal Card",
    description:
      "Provide employees with tax-saving meal benefits using a dedicated card accepted at restaurants and grocery stores.",
    image: paymentButton,
    link: "/corporate-cards/meal-cards/",
  },
];



const carouselData = [
  {
    image: iconOne,
    alt: "Register your business and verify your credentials.",
    title: "Register your business and verify your credentials.",
    heading: "Create an Account: ",
  },
  {
    image: iconTwo,
    alt: "Tailor cards for specific functions with unique spending rules.",
    title: "Tailor cards for specific functions with unique spending rules.",
    heading: "Customize Cards: ",
  },
  {
    image: iconThree,
    alt: "Use our platform to track spending and maintain control.",
    title: "Use our platform to track spending and maintain control.",
    heading: "Monitor Usage: ",
  },
  {
    image: iconFour,
    alt: "Pay vendors, manage subscriptions, and more with ease.",
    title: "Pay vendors, manage subscriptions, and more with ease.",
    heading: "Make Payments: ",
  },
];

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/WhatsApp-Image-2023-09-13-at-4.23.23-PM-1.jpeg",
    imageAlt: "Tax-free Meals For Your Employees With EnKash Meal Cards",
    title: "Tax-free Meals For Your Employees With EnKash Meal Cards",
    date: "Sep 26, 2022",
    description:
      "Employee satisfaction is one of the cornerstones of a successful business. To keep your employees happy, just paying salaries on time is not enough anymore...",
    link: "https://www.enkash.com/resources/blog/tax-free-meal-cards/",
  },

  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/blog_7.1b7b0500.jpg",
    imageAlt:
      "What is Business Expense Card & Benefits of Business Prepaid Cards",
    title: "What is Business Expense Card & Benefits of Business Prepaid Cards",
    date: "Aug 02, 2023",
    description:
      "Prepaid cards or corporate expense cards have emerged as cutting-edge expense management tools, offering a range of innovative features to simplify your life. From handling business...",
    link: "https://www.enkash.com/resources/blog/prepaid-card-for-business-expenses/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/10/Prepaid-Cards-A-definitive-guide-to-growth-and-profitibility.jpg",
    imageAlt: "Prepaid Cards – A Guide to Growth",
    title: "Prepaid Cards – A Guide to Growth",
    date: "Oct 20, 2022",
    description:
      "The growth of a business depends on various factors, one of which is the way a company makes payments. With the country rapidly moving towards digitization in different industries, digital payment...",
    link: "https://www.enkash.com/resources/blog/prepaid-cards-a-defintive-guide-to-growth/",
  },
];

export { blogData, carouselData, productData };
