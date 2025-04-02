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
    title: "Gift Cards",
    description:
      "A prepaid card used by businesses to purchase in bulk for various purposes.",
    image: paymentLink,
    link: "/loyalty-lounge/gift-cards/",
  },
  {
    title: "Brand Vouchers",
    description:
      "Provide employees with top-brand vouchers for flexible and meaningful appreciation.",
    image: paymentButton,
    link: "/bolt/",
  },
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

const carouselData = [
  {
    image: iconOne,
    alt: "Sign up on EnKash and complete your KYC.",
    title: "Sign up on EnKash and complete your KYC.",
    heading: "Complete KYC : ",
  },
  {
    image: iconTwo,
    alt: "Visit Partnered Services on the dashboard. Explore our curated brand offers and select as per your requirements.",
    title:
      "Visit Partnered Services on the dashboard. Explore our curated brand offers and select as per your requirements.",
    heading: "Select Offers: ",
  },
  {
    image: iconThree,
    alt: "Read the terms and conditions and click on Apply Now to get the offer.",
    title:
      "Read the terms and conditions and click on Apply Now to get the offer.",
    heading: "Apply: ",
  },
];

const faqData: FAQProps[] = [
  {
    question: "What are offers?",
    answer: [
      {
        heading:
          "EnKash offers are attractive discounts and benefits on partnered services available only for existing customers. These exclusive offers can be availed only on EnKash’s platform, which can help businesses save more and grow.",
      },
    ],
  },
  {
    question: "How can I avail these offers?",
    answer: [
      {
        heading: "To access these offers on EnKash, follow these steps:",
        bullets: [
          "Login to EnKash and complete your KYC",
          "Visit the Partnered Services section on the dashboard",
          "Explore the exclusive offers and choose the one that aligns with your business needs",
          'Carefully read the terms and conditions before clicking - "Apply Now"',
        ],
      },
    ],
  },
  {
    question:
      "Are there any terms and conditions associated with these offers?",
    answer: [
      {
        heading:
          "There are certain terms and conditions associated with these offers on EnKash. These T&Cs vary depending on the offers and categories. It is highly advisable to carefully read the terms and conditions before applying for any particular offer.",
      },
    ],
  },
  {
    question: "Is there any eligibility criteria to avail these offers?",
    answer: [
      {
        heading:
          "Each of these offers has a certain eligibility criteria. These promotions apply only to EnKash customers, so you must be an existing EnKash user to take advantage of these offers.",
      },
    ],
  },
];

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/blog_26.d1a8b0d7.jpg",
    imageAlt: "Rewards Programs -The Way to Pay More, Earn More",
    title: "Rewards Programs -The Way to Pay More, Earn More",
    date: "Dec 21, 2021",
    description:
      "Corporate cards with attractive rewards programs are one of the most popular choices in the business world these days. Their ease of usage coupled with their...",
    link: "https://www.enkash.com/resources/blog/corporate-cards-benefits-rewards-program/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/blog_33.8ebac017.jpg",
    imageAlt: "7 Benefits of Payroll cards for Employees",
    title: "7 Benefits of Payroll cards for Employees",
    date: "Jan 27, 2023",
    description:
      "Caring for employees makes a business seem thoughtful and reliable. Employee satisfaction is a two-way street and payroll cards for employees is a good start...",
    link: "https://www.enkash.com/resources/blog/payroll-card-for-employees/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/06/Employee-Retention-Strategies-to-Help-Your-Startup-Thrive.jpg",
    imageAlt: "8 Employee Retention Strategies for Startup Success",
    title: "8 Employee Retention Strategies for Startup Success",
    date: "Jan 9, 2023",
    description:
      "Running a successful startup requires more than just innovative ideas and cutting-edge technology. It also relies on having a team of talented and dedicated employees...",
    link: "https://www.enkash.com/resources/blog/employee-retention-strategies/",
  },
];

export { blogData, faqData, carouselData, productData };
