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
    image: invoices,
    link: "/loyalty-lounge/channel-incentive/",
  },
  {
    title: "Employee Rewards",
    description:
      "Recognize and retain top talent with instant, meaningful, and customizable reward solutions.",
    image: qrCode,
    link: "/loyalty-lounge/employee-rewards/",
  },
  {
    title: "Offers",
    description:
      "Unlock exclusive deals and discounts to enhance loyalty, boost engagement, and drive satisfaction.",
    image: autoCollect,
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

export { blogData,  carouselData, productData };
