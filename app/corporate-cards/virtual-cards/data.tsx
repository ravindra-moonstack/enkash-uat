import iconOne from "./img/icon-one.svg";
import iconTwo from "./img/icon-two.svg";
import iconThree from "./img/icon-three.svg";
import iconFour from "./img/icon-four.svg";
import { FAQProps } from "@/components/faq/faq";
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
    title: "DIY Card Module",
    description:
      "Customize card settings, limits, and features effortlessly with EnKash’s Do-It-Yourself card module.",
    image: invoices,
    link: "/corporate-cards/diy-card-module/",
  },
];

const faqData: FAQProps[] = [
  {
    question: "What is a virtual card?",
    answer: [
      {
        heading:
          "A virtual card is available in a virtual format, not in a physical form. The use of virtual cards started with the need to enable safe and speedy online transactions. Unlike a physical card with the risk of being misplaced, lost, or stolen, virtual cards can be kept safe with password-protected access.",
      },
    ],
  },
  {
    question: "How does my business qualify for virtual cards?",
    answer: [
      {
        heading:
          "To get a virtual card for your business, you will need a business account with a platform like EnKash that offers this service. The requirements to qualify for virtual cards can vary depending on the provider, but generally, you will need to meet specific criteria, such as having a business bank account, verifying your business identity, having a good credit history, etc.",
      },
    ],
  },
  {
    question:
      "Do virtual cards enable POS transactions and ATM cash withdrawals?",
    answer: [
      {
        heading:
          "Virtual cards are primarily designed for online transactions and may not be suitable for in-person point-of-sale (POS) transactions or ATM cash withdrawals. However, some virtual card providers may offer a physical card linked to the virtual card account, which can be used for in-person transactions and cash withdrawals.",
      },
    ],
  },
  {
    question:
      "Will I get a dashboard to control the movement of virtual cards?",
    answer: [
      {
        heading:
          "With EnKash, you will get a dashboard to manage and control the movement of virtual cards. This dashboard gives you real-time visibility and control over your virtual card usage, allowing you to set spending limits, block or cancel cards, view transaction history, and manage user access.",
      },
    ],
  },
  {
    question: "How do I prevent fraud using virtual cards that my team uses?",
    answer: [
      {
        heading:
          "Virtual cards can help prevent fraud, offering high control and visibility over business expenses. You can do the same by setting spending limits, monitoring transaction history, etc. You can also block your card immediately in case of any misuse or fraud.",
      },
    ],
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

export { blogData, faqData, carouselData, productData };
