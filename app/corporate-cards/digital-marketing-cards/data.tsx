import iconOne from "./img/icon-one.svg";
import iconTwo from "./img/icon-two.svg";
import iconThree from "./img/icon-three.svg";

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
    title: "Virtual Card",
    description:
      "Generate secure, single-use virtual cards for online payments, reducing fraud risk and improving accountability.",
    image: autoCollect,
    link: "/corporate-cards/virtual-cards/",
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
    alt: "Issue a corporate card for digital marketing and set customized limits for a campaign expenditure.",
    title:
      "Issue a corporate card for digital marketing and set customized limits for a campaign expenditure..",
    heading: "Issuance: ",
  },
  {
    image: iconTwo,
    alt: "Manage your expenditure with a predefined usage policy to prevent misuse of cards",
    title:
      "Manage your expenditure with a predefined usage policy to prevent misuse of cards",
    heading: "Control: ",
  },
  {
    image: iconThree,
    alt: "Link your card to digital marketing platforms to have a complete overview of all your digital marketing expenses",
    title:
      "Link your card to digital marketing platforms to have a complete overview of all your digital marketing expenses",
    heading: "Connect: ",
  },
];

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/08/blog_10G.c8939210.jpg",
    imageAlt: "Why Is Digital Marketing Important for Small Businesses?",
    title: "Why Is Digital Marketing Important for Small Businesses?",
    date: "Aug 08, 2022",
    description:
      "We live in a digital world, where the importance of digital marketing is likely to only increase in the future. According to industry research, there were over 700 million internet users in India in 2020 which is expected to grow to...",
    link: "https://www.enkash.com/resources/blog/importance-of-digital-marketing/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/05/How-startups-can-leverage-digital-marketing.jpg",
    imageAlt: "Digital Marketing for Startups: Advantages and Opportunities",
    title: "Digital Marketing for Startups: Advantages and Opportunities",
    date: "May 05, 2023",
    description:
      "While traditional marketing methods still hold value, digital marketing has emerged as a game-changer for startups. With its unparalleled reach, cost-effectiveness, and precise targeting capabilities...",
    link: "https://www.enkash.com/resources/blog/digital-marketing-for-startups/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/blog_27.dc4a6280.jpg",
    imageAlt: "Manage Digital Marketing Expenses with Corporate Cards",
    title: "Manage Digital Marketing Expenses with Corporate Cards",
    date: "Sep 026, 2022",
    description:
      "Virtual account allows businesses to initiate seamless financial transactions and maintain track records. Various large, medium, and small-scale businesses are shifting towards...",
    link: "https://www.enkash.com/resources/blog/enkash-corporate-cards-for-digital-marketers/",
  },
];

export { blogData, carouselData, productData };
