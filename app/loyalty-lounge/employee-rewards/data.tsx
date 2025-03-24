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
    title: "Channel Incentives",
    description:
      "Motivate partners and distributors with tailored rewards, driving sales and long-term engagement.",
    image: qrCode,
    link: "/loyalty-lounge/channel-incentive/",
  },
  {
    title: "Brand Vouchers",
    description:
      "Provide employees with top-brand vouchers for flexible and meaningful appreciation.",
    image: paymentButton,
    link: "/bolt/",
  },
  {
    title: "Offers",
    description:
      "Unlock exclusive deals and discounts to enhance loyalty, boost engagement, and drive satisfaction.",
    image: invoices,
    link: "/loyalty-lounge/offers/",
  },
];

const carouselData = [
  {
    image: iconOne,
    alt: "Log in to EnKash using your registered mobile number and complete your KYC.",
    title:
      "Log in to EnKash using your registered mobile number and complete your KYC.",
    heading: "Login: ",
  },
  {
    image: iconTwo,
    alt: "Add funds to your account via NEFT, IMPS, or RTGS. ",
    title: "Add funds to your account via NEFT, IMPS, or RTGS. .",
    heading: "Add Funds: ",
  },
  {
    image: iconThree,
    alt: "Upload employee data using the sample file format and allocate points against the name of the employee to be rewarded. ",
    title:
      "Upload employee data using the sample file format and allocate points against the name of the employee to be rewarded. ",
    heading: "Employee Details: ",
  },
  {
    image: iconFour,
    alt: "Employees will be notified via SMS, WhatsApp, and e-mail about rewards and the redemption process.",
    title:
      "Employees will be notified via SMS, WhatsApp, and e-mail about rewards and the redemption process.",
    heading: "Redeem: ",
  },
];

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/blog_33.8ebac017.jpg",
    imageAlt: "7 Benefits of Payroll cards for Employees",
    title: "7 Benefits of Payroll cards for Employees",
    date: "Aug 02, 2023",
    description:
      "Caring for employees makes a business seem thoughtful and reliable. Employee satisfaction is a two-way street and payroll cards for employees is a good start. The easiest way to...",
    link: "https://www.enkash.com/resources/blog/payroll-card-for-employees/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/blog_26.d1a8b0d7.jpg",
    imageAlt: "Rewards Programs -The Way to Pay More, Earn More",
    title: "Rewards Programs -The Way to Pay More, Earn More",
    date: "Aug 02, 2023",
    description:
      "Corporate cards with attractive rewards programs are one of the most popular choices in the business world these days. Their ease of usage coupled with their immense flexibility...",
    link: "https://www.enkash.com/resources/blog/corporate-cards-benefits-rewards-program/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/06/Employee-Retention-Strategies-to-Help-Your-Startup-Thrive.jpg",
    imageAlt: "8 Employee Retention Strategies for Startup Success",
    title: "8 Employee Retention Strategies for Startup Success",
    date: "Jun 15, 2023",
    description:
      "Running a successful startup requires more than just innovative ideas and cutting-edge technology. It also relies on having a team of talented and dedicated employees who are committed...",
    link: "https://www.enkash.com/resources/blog/employee-retention-strategies/",
  },
];

export { blogData, carouselData, productData };
