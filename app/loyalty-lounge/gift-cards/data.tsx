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
    alt: "Sign up on EnKash and provide all the necessary company details",
    title: "Sign up on EnKash and provide all the necessary company details",
  },
  {
    image: iconTwo,
    alt: "Go to bill payments and enter company details",
    title:
      "Once the given details are validated, the company becomes eligible for gift cards",
  },
  {
    image: iconThree,
    alt: "Upload your bills on the platform",
    title:
      "Companies can deposit funds into their accounts and request gift cards whenever necessary",
  },
  {
    image: iconFour,
    alt: "Select the bill you want to pay",
    title:
      "These gift cards can be distributed with preset amounts based on the occasion",
  },
];

const faqData: FAQProps[] = [
  {
    question: "What are gift cards?",
    answer: [
      {
        heading:
          "Gift cards are prepaid cards containing a specific monetary value, which can be used to purchase goods or services at the issuing retailer or a network of participating merchants. They are typically sold by retailers, online stores, or platforms like EnKash and can be physical cards or digital codes sent by email or text. Gift cards by EnKash are non-reloadable and non-transferable. Cash-outs or fund transfers are also not permitted.",
      },
    ],
  },
  {
    question: "Why are corporate gift cards important for businesses?",
    answer: [
      {
        heading:
          "Gift cards are essential for businesses as they are a versatile and convenient way to show appreciation and offer rewards. They allow recipients the freedom to choose something they truly desire, making them a more personalized and meaningful gift than traditional options.",
      },
    ],
  },
  {
    question: "Why should a startup consider offering gift cards to employees?",
    answer: [
      {
        heading:
          "Startups should consider offering gift cards to incentivize and recognize the performance of their employees and partners. This can help motivate and improve their overall productivity. Gift cards are a cost-effective way to reward employees and partners, as they can be purchased in bulk at a discounted rate. Gift cards can boost morale by providing a tangible reward for the efforts put in by the people. This can create a positive and supportive workplace culture.",
      },
    ],
  },

  {
    question: "Is corporate gifting taxable?",
    answer: [
      {
        heading:
          "The taxability of corporate gifting depends on the value of the gift. If the gift is within or less than the taxable limit, then there is no need to pay any tax. However, if the gift card limit exceeds Rs 5000, it will be taxable.",
      },
    ],
  },
];

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/blog_26.d1a8b0d7.jpg",
    imageAlt:
      "What is Business Expense Card & Benefits of Business Prepaid Cards",
    title: "What is Business Expense Card & Benefits of Business Prepaid Cards",
    date: "Sep 23, 2023",
    description:
      "Prepaid cards or corporate expense cards have emerged as cutting-edge expense management tools, offering a range of innovative features to simplify your life. From handling business payments...",
    link: "https://www.enkash.com/resources/blog/prepaid-card-for-business-expenses/ ",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/5-Reasons-you-need-prepaid-credit-card-for-your-business-1.jpg",
    imageAlt: "5 Reasons You Need Prepaid Credit Cards For Your Business",
    title: "5 Reasons You Need Prepaid Credit Cards For Your Business",
    date: "Sep 29, 2022",
    description:
      "Many businesses that operate on a small and medium level have gained huge success and have been able to scale their company profitably with prepaid credit cards, as they are regarded as a powerfu...",
    link: "https://www.enkash.com/resources/blog/prepaid-credit-card-for-business/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/10/Prepaid-Cards-A-definitive-guide-to-growth-and-profitibility.jpg",
    imageAlt: "Prepaid Cards – A Guide to Growth",
    title: "Prepaid Cards – A Guide to Growth",
    date: "Oct 20, 2022",
    description:
      "The growth of a business depends on various factors, one of which is the way a company makes payments. With the country rapidly moving towards digitization in different industries, digital payments in..",
    link: "https://www.enkash.com/resources/blog/prepaid-cards-a-defintive-guide-to-growth/",
  },
];

export { blogData, faqData, carouselData, productData };
