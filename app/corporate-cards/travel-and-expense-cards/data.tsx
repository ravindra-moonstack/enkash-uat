import iconOne from "./img/icon-one.svg";
import iconTwo from "./img/icon-two.svg";
import iconThree from "./img/icon-three.svg";
import iconFour from "./img/icon-four.svg";
import iconFive from "./img/icon-five.svg";
import iconSix from "./img/icon-six.svg";
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
    title: "Virtual Card",
    description:
      "Generate secure, single-use virtual cards for online payments, reducing fraud risk and improving accountability.",
    image: autoCollect,
    link: "/corporate-cards/virtual-cards/",
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
    question: "What is a travel and expense card?",
    answer: [
      {
        heading:
          "A travel and expense card is a specialized corporate credit card designed to streamline and simplify expenses related to business travel.  These purpose-built cards allow employees to make travel-related expenditures, such as booking flights, hotels, and dining, while enabling businesses to monitor and manage these expenses effectively.",
      },
    ],
  },
  {
    question:
      "Can I access a dedicated dashboard for managing my travel and expense cards?",
    answer: [
      {
        heading:
          "You can access a user-friendly dashboard as your control center for managing travel and expense cards. This dashboard offers real-time visibility and control over your virtual/physical card usage, allowing you to set spending limits, block or cancel cards, review transaction history, and easily manage user access.",
      },
    ],
  },
  {
    question:
      "What should I do if I lose my travel and expense card while traveling or notice suspicious activity on it?",
    answer: [
      {
        heading:
          "If your travel and expense card is lost during traveling or if you suspect any unauthorized activity, you can instantly block the card. For added convenience and security, in case of emergencies, you can also request the issuance of a virtual card to replace the lost or compromised one.",
      },
    ],
  },
  {
    question:
      "What measures can I take to prevent fraud and ensure the security of travel and expense cards?",
    answer: [
      {
        heading:
          "Travel and Expense cards are designed to offer robust control and visibility over your business travel expenses, ensuring security and preventing fraud. To bolster security, you can define spending limits to restrict excessive or unauthorized expenditures and closely monitor transaction history to identify suspicious activities.",
      },
    ],
  },
  {
    question:
      "How can travel and expense cards assist me in managing my traveling expenses?",
    answer: [
      {
        heading:
          "Travel and Expense cards serve as an effective tool for maximizing control over your entire travel expenditure. These cards offer a multi-faceted approach to optimization: first, you can establish limits and approval policies to prevent overspending. Additionally, you'll benefit from comprehensive spend visibility.",
      },
    ],
  },
];
const carouselData = [
  {
    image: iconOne,
    alt: "Login to EnKash portal and fill in user details.",
    title: "Login to EnKash portal and fill in user details.",
    heading: "Login and Add Details: ",
  },
  {
    image: iconTwo,
    alt: "Add the user and set custom limits on currency, amount, category, and more",
    title:
      "Add the user and set custom limits on currency, amount, category, and more",
    heading: "Control Management: ",
  },
  {
    image: iconThree,
    alt: "User completes their KYC",
    title: "User completes their KYC",
    heading: "KYC: ",
  },
  {
    image: iconFour,
    alt: "Employees can access and use their cards for a smooth travel experience",
    title:
      "Employees can access and use their cards for a smooth travel experience",
    heading: "Card Activation: ",
  },
];

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/05/Feature-Image-42-1.jpg",
    imageAlt: "A Detailed Guide about Travel and Expense Management",
    title: "A Detailed Guide about Travel and Expense Management",
    date: "Mar 08, 2023",
    description:
      "Traveling for business purposes is a common practice in today’s globalized world. As employees traverse the globe to attend meetings, conferences, and client visits, managing travel expenses efficiently becomes a crucial...",
    link: "https://www.enkash.com/resources/blog/guide-about-travel-and-expense-management/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/12/How-business-credit-cards-boost-your-expense-management.jpg",
    imageAlt:
      "Understand How Business Credit Cards Boost Your Expense Management",
    title: "Understand How Business Credit Cards Boost Your Expense Management",
    date: "Dec 21, 2023",
    description:
      "A business credit card is a specially designed card for business owners and provides unique benefits to a business or an organization. Business cards come with high credit limits, more significant reward potential...",
    link: "https://www.enkash.com/resources/blog/how-business-credit-cards-boost-expense-management/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/blog_5.d5042859.jpg",
    imageAlt: "How to Manage Business Expenses With Corporate Cards?",
    title: "How to Manage Business Expenses With Corporate Cards?",
    date: "Dec 21, 2023",
    description:
      "Over the past couple of years, corporate cards have garnered a massive response. They are slowly but steadily becoming an indispensable tool in the arsenal of a successful businessman...",
    link: "https://www.enkash.com/resources/blog/corporate-card-for-business-expenses/",
  },
];

export { blogData, faqData, carouselData, productData };
