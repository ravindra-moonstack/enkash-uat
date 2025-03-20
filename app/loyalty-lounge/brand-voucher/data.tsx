import iconOne from "./img/icon-one.svg";
import iconTwo from "./img/icon-two.svg";
import iconThree from "./img/icon-three.svg";
import iconFour from "./img/icon-four.svg";
import iconFive from "./img/icon-five.svg";
import { FAQProps } from "@/components/faq/faq";

const carouselData = [
  {
    image: iconOne,
    alt: "Login to EnKash or register",
    title: "Login to your EnKash account or register and complete your KYC",
  },
  {
    image: iconTwo,
    alt: "wide range of brand vouchers",
    title: "Explore our wide range of brand vouchers from the dashboard",
  },
  {
    image: iconThree,
    alt: "Select the brand voucher",
    title:
      "Select the brand voucher and specify the quantity along with the preferred denomination",
  },
  {
    image: iconFour,
    alt: "Go to the cart and pay using any of the available payment methods",
    title: "Go to the cart and pay using any of the available payment methods",
  },
  {
    image: iconFive,
    alt: "Redeem the brand voucher",
    title: "Redeem the brand voucher on the brand's website or physical store",
  },
];

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/06/Employee-Retention-Strategies-to-Help-Your-Startup-Thrive.jpg",
    imageAlt: "8 Employee Retention Strategies for Startup Success",
    title: "8 Employee Retention Strategies for Startup Success",
    date: "Jun 16, 2023",
    description:
      "Running a successful startup requires more than just innovative ideas and cutting-edge technology. It also relies on having a team of talented and dedicated employees who are committed to the company’s...",
    link: "https://www.enkash.com/resources/blog/employee-retention-strategies/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/12/HR-Policies.jpg",
    imageAlt: "Essential HR Policies for a Startup Company",
    title: "Essential HR Policies for a Startup Company",
    date: "Jab 27, 2023",
    description:
      "Human Resources (HR) is an important department for every profitable business. The human resource department forms the organization’s backbone by hiring suitable people. The success of any business...",
    link: "https://www.enkash.com/resources/blog/hr-policies-for-startups/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/blog_26.d1a8b0d7.jpg",
    imageAlt: "Rewards Programs -The Way to Pay More, Earn More",
    title: "Rewards Programs -The Way to Pay More, Earn More",
    date: "Aug 02, 2023",
    description:
      "Corporate cards with attractive rewards programs are one of the most popular choices in the business world these days. Their ease of usage coupled with their immense flexibility makes them a prime choice...",
    link: "https://www.enkash.com/resources/blog/corporate-cards-benefits-rewards-program/",
  },
];

const faqData: FAQProps[] = [
  {
    question: "What is a brand or a gift voucher?",
    answer: [
      {
        heading:
          "A brand voucher or gift voucher is a promotional offer by brands to provide discounts on specified products and services. We feature a curated selection of brands, including Amazon Gift Vouchers, Flipkart Gift Vouchers, Myntra Gift Vouchers, Lifestyle Vouchers, and more.",
      },
      {
        heading:
          "Leverage your employee reward points to acquire these E-gift vouchers.",
      },
      {
        heading:
          "It's essential to note that each brand has its unique redemption guidelines. To ensure a seamless experience, take a moment to read the 'Terms & Conditions' and 'How to Redeem' sections specific to the brand of your choice. Elevate your game with E-gift vouchers, available exclusively on EnKash.",
      },
    ],
  },
  {
    question: "How to use a brand voucher?",
    answer: [
      {
        heading:
          "Using a brand voucher is pretty simple. Here’s how you can do it the right way:",
        bullets: [
          "Read the amount it is valid for and whether it can be redeemed online or offline",
          "Know for which products and services it can be utilized and the last date to use it",
          "Check all the terms and conditions mentioned on the brand voucher",
          "Enter the code or coupon as given during checkout when making a purchase on the brand's website or in-store",
          "If in doubt, reach out to the brand via their customer service",
        ],
      },
    ],
  },
  {
    question:
      "Can brand vouchers be combined with other discounts or promotions?",
    answer: [
      {
        heading:
          "Combining brand vouchers with other discounts or offers completely depends on the brand’s terms and conditions. Some brands may allow clubbing offers with brand vouchers, while others will refrain from it. It is advisable to read the terms and conditions of the brand voucher carefully before using it.",
      },
    ],
  },
  {
    question: "Are brand vouchers transferable?",
    answer: [
      {
        heading:
          "Brand vouchers are usually not transferable and can only be used by the recipient. However, some shopping vouchers can be transferred to close friends and family depending on the terms and conditions stated in the voucher.",
      },
    ],
  },
  {
    question: "Are gift vouchers given to employees taxable?",
    answer: [
      {
        heading:
          "Gift vouchers given to employees are not taxable up to a limit of Rs 5000 in a given financial year. However, if the gift voucher value exceeds the threshold amount of Rs 5000, then the employer will have to pay the tax applicable as per Section 17(2)(viii) of the Income Tax Act, 1961, read with Rule 3(7)(iv) of the Income Tax Rules, 1962. In this case, the employer will have to retain the taxes from your salary against this gift voucher.",
      },
    ],
  },
];

export { blogData, carouselData, faqData };
