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
    title: "Channel Incentives",
    description:
      "Motivate partners and distributors with tailored rewards, driving sales and long-term engagement.",
    image: paymentLink,
    link: "/loyalty-lounge/channel-incentive/",
  },
  {
    title: "Employee Rewards",
    description:
      "Recognize and retain top talent with instant, meaningful, and customizable reward solutions.",
    image: paymentButton,
    link: "/loyalty-lounge/employee-rewards/",
  },
  {
    title: "Offers",
    description:
      "Unlock exclusive deals and discounts to enhance loyalty, boost engagement, and drive satisfaction.",
    image: paymentButton,
    link: "/loyalty-lounge/offers/",
  },
];

const dataSets = [
  {
    imageSrc: iconOne,
    altText: "Create custom rewards programs according to business needs",
    heading: "Create custom rewards programs according to business needs",
  },
  {
    imageSrc: iconTwo,
    altText: "Automate tasks involved in managing rewards programs",
    heading:
      "Automate tasks involved in managing rewards programs, such as tracking employee performance, distributing rewards, and generating reports",
  },
  {
    imageSrc: iconThree,
    altText:
      "Easily distribute rewards and incentives to employees, channel partners",
    heading:
      "Easily distribute rewards and incentives to employees, channel partners, and other stakeholders",
  },
  {
    imageSrc: iconFour,
    altText: "Get a centralized redemption platform where employees",
    heading:
      "Get a centralized redemption platform where employees, partners, and stakeholders can view their available rewards and redeem them for a variety of products and services",
  },
];

const faqData: FAQProps[] = [
  {
    question: "What is a loyalty lounge?",
    answer: [
      {
        heading:
          "EnKash has designed a loyalty lounge for businesses to reward their employees, partners, and other stakeholders. It comprises solutions like brand vouchers, employee rewards, channel incentives, gift cards, and offers. Businesses can use these solutions to appreciate their employees, boost their morale, and also establish long-term business relationships with their partners.",
      },
    ],
  },

  {
    question: "How do I sign up for the loyalty lounge?",
    answer: [
      {
        bullets: [
          "Create your account on EnKash",
          "Decide the loyalty lounge solution for your business - brand vouchers, channel incentives, gift cards, offers, and employee rewards",
          "Customize the solution as per your business needs and make a purchase",
          "Reduces fraud and overspending occurrences",
          "Use the loyalty lounge solution to appreciate your employees and enhance your business",
        ],
      },
    ],
  },
  {
    question: "Why does my business need a loyalty program?",
    answer: [
      {
        heading:
          "A loyalty lounge program by EnKash is an excellent marketing, customer engagement, and retention strategy that helps establish your brand in the market. You can make your target customers return to you with the right loyalty solution and make your relationships with partners stronger and better.",
      },
    ],
  },
];
const blogData = [
  {
    image:
      "https://blogs.enkash.com/wp-content/uploads/2022/09/blog_26.d1a8b0d7.jpg",
    imageAlt: "Rewards Programs -The Way to Pay More, Earn More",
    title: "Rewards Programs -The Way to Pay More, Earn More",
    date: "Sep 26, 2022",
    description:
      "Corporate cards with attractive rewards programs are one of the most popular choices in the business world these days. Their ease of usage coupled with their immense flexibility makes...",
    link: "/resources/blog/corporate-cards-benefits-rewards-program/",
  },
  {
    image:
      "https://blogs.enkash.com/wp-content/uploads/2023/06/Employee-Retention-Strategies-to-Help-Your-Startup-Thrive.jpg",
    imageAlt: "8 Employee Retention Strategies for Startup Success",
    title: "8 Employee Retention Strategies for Startup Success",
    date: "June 15, 2023",
    description:
      "Running a successful startup requires more than just innovative ideas and cutting-edge technology. It also relies on having a team of talented and dedicated employees who are committed...",
    link: "/resources/blog/employee-retention-strategies/",
  },
  {
    image:
      "https://blogs.enkash.com/wp-content/uploads/2022/12/HR-Policies.jpg",
    imageAlt: "Essential HR Policies for a Startup Company",
    title: "Essential HR Policies for a Startup Company",
    date: "Dec 20, 2022",
    description:
      "Human Resources (HR) is an important department for every profitable business. The human resource department forms the organization’s backbone by hiring suitable people. The success of any...",
    link: "/resources/blog/hr-policies-for-startups/",
  },
];

export { blogData, faqData, dataSets, productData};
