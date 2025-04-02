import iconOne from "./img/icon-one.svg";
import iconTwo from "./img/icon-two.svg";
import iconThree from "./img/icon-three.svg";
import iconFour from "./img/icon-four.svg";
import {
  autoCollect,
  instantSettlement,
  invoices,
  paymentButton,
  paymentLink,
  paymentPage,
  qrCode,
  reminderEngine,
} from "@/components/all-products";
import { AllProductsDataProp } from "@/components/all-products/all-products";

const productData: AllProductsDataProp[] = [
  {
    title: "Meal Card",
    description:
      "Provide employees with tax-saving meal benefits using a dedicated card accepted at restaurants and grocery stores.",
    image: paymentButton,
    link: "/corporate-cards/meal-cards/",
  },
  {
    title: "Fuel Card",
    description:
      "Manage fuel expenses effortlessly with a card designed for streamlined tracking and cost control.",
    image: paymentLink,
    link: "/corporate-cards/fuel-cards/",
  },
  {
    title: "Travel and Expense",
    description:
      "Simplify travel expense management with dedicated cards, ensuring transparency and easy reconciliation",
    image: reminderEngine,
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
    title: "DIY Card Module",
    description:
      "Customize card settings, limits, and features effortlessly with EnKash’s Do-It-Yourself card module.",
    image: invoices,
    link: "/corporate-cards/diy-card-module/",
  },
];
const carouselData = [
  {
    image: iconOne,
    alt: "Register your business on EnKash.",
    title: "Register your business on EnKash.",
    heading: "Create an Account: ",
  },
  {
    image: iconTwo,
    alt: "Generate virtual cards for employees, vendors, or projects.",
    title: "Generate virtual cards for employees, vendors, or projects.",
    heading: "Issue Cards Instantly : ",
  },
  {
    image: iconThree,
    alt: "Customize spend limits and track all transactions",
    title: "Customize spend limits and track all transactions",
    heading: "Set Limits & Monitor Usage: ",
  },
  {
    image: iconFour,
    alt: "Use cards for online purchases, SaaS subscriptions, or other expenses.",
    title:
      "Use cards for online purchases, SaaS subscriptions, or other expenses.",
    heading: "Make Payments: ",
  },
];

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/Virtual-credit-cards-enable-quiker-payments-scaled.jpg",
    imageAlt: "Virtual Credit Cards Enable Quicker Payments",
    title: "Virtual Credit Cards Enable Quicker Payments",
    date: "Aug 02, 2023",
    description:
      "Managing the company’s accounts payable on time ensures the business maintains healthy relationships with merchants, creditors, employees, and customers. However, for SMEs delayed disbursements can affect the overall...",
    link: "https://www.enkash.com/resources/blog/enable-payments-with-virtual-cards-for-business/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/04/Make-secure-online-payments-with-free-virtual-cards.png",
    imageAlt: "Make Secure Online Payments with Free Virtual Cards",
    title: "Make Secure Online Payments with Free Virtual Cards",
    date: "Apr 28, 2023",
    description:
      "While the world is busy transforming everything online, it is better that you choose the solution for payments which is absolutely trustworthy. Now, you must be wondering how one can do that- with EnKash...",
    link: "https://www.enkash.com/resources/blog/how-to-make-secure-online-payments-with-virtual-cards/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/02/A-step-by-step-guide-for-virtual-card-business.jpg",
    imageAlt: "A Step-by-Step Guide for Virtual Card Business",
    title: "A Step-by-Step Guide for Virtual Card Business",
    date: "Feb 22, 2023",
    description:
      "A fascinating step towards sound business spending are virtual credit cards. They provide businesses with a safer, more personalized, and transparent way to pay for rent, vendors, GST, bills, and ...",
    link: "https://www.enkash.com/resources/blog/guide-for-virtual-card-business/",
  },
];

export { blogData, carouselData, productData };
