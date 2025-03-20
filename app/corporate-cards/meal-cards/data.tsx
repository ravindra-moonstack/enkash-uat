import Link from "next/link";
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
import { FAQProps } from "@/components/faq/faq";

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
    alt: "Login to EnKash or register using a valid mobile number.",
    title: "Login to EnKash or register using a valid mobile number.",
    heading: "Sign Up and KYC: ",
  },
  {
    image: iconTwo,
    alt: "Issue meal cards to employees with preloaded funds.",
    title: "Issue meal cards to employees with preloaded funds.",
    heading: "Issuance: ",
  },
  {
    image: iconThree,
    alt: "Notify employees via SMS/email about card activation.",
    title: "Notify employees via SMS/email about card activation.",
    heading: "Alerts: ",
  },
  {
    image: iconFour,
    alt: "Employees must complete KYC to activate their meal cards.",
    title: "Employees must complete KYC to activate their meal cards.",
    heading: "Card Activation: ",
  },
];
const faqData: FAQProps[] = [
  {
    question: "What are meal cards?",
    answer: [
      {
        heading:
          "Meal cards are employer-provided prepaid cards that work similarly to debit cards. Employees can use these meal cards for food and grocery-related purchases across multiple retail outlets, convenience stores, food chains, and food delivery apps like Zomato, Swiggy, Blinkit, etc.",
      },
    ],
  },
  {
    question: "Why meal cards are important for any business?",
    answer: [
      {
        heading:
          "Meal cards help boost employee satisfaction by providing tax benefits and streamlining food-related expenses. Instead of using their debit cards, employees can use their prepaid meal cards to make all grocery-related purchases. Providing a food card to employees also makes an attractive remuneration package, making them believe that the company is considerate towards them.",
      },
    ],
  },
  {
    question:
      "Does the meal card module help improve the finance team’s performance? If yes, how?",
    answer: [
      {
        heading:
          "Meal card is an effective replacement for paper-based food coupons. The easy management and tracking of meal cards help the finance/admin team to refill them instead of issuing monthly food coupons while tracking their balance. The finance team can easily activate, block, unblock, or deactivate the card in case of misuse.",
      },
    ],
  },
  {
    question: "Why should a startup consider offering meal cards to employees?",
    answer: [
      {
        heading:
          "Startups need to consider offering meal cards to employees for the following reasons:",
        bullets: [
          "They have a wider usage and can be used across shops and eateries",
          "Refilling at regular intervals is a matter of a few clicks based on a list of employees",
          "Onboarding new employees and offering them meal cards is easy",
          "It is easy to track and control usage for the employees as well as the finance team",
          "Meal cards motivate employees as they believe that the organization is considerate towards their food expenses",
        ],
      },
    ],
  },
  {
    question: "How meal cards reduce fraud instances in business?",
    answer: [
      {
        heading:
          "Meal cards function pretty much like debit cards but specifically for purchasing food, which means they are operated on a one-time or preset PIN. This means that even if the food card is misplaced and discovered by another person, it would be difficult to misuse. If reported lost, the finance team can easily block the card and restrict any fraud from occurring.",
      },
    ],
  },
  {
    question: "Are meal cards taxable?",
    answer: [
      {
        heading:
          "Meal cards are not taxable. However, if the amount spent on a meal exceeds the non-taxable limit of 2200 INR per month, then they are taxable as per Section 17(2)(viii) of the Income Tax Act.",
      },
    ],
  },
  {
    question: "How to claim meal allowance?",
    answer: [
      {
        heading:
          "Employee’s food allowance is a part of the remuneration. Meal allowance can be availed using tax-free meal cards. Employees can complete their KYC on the EnKash portal, activate their meal card, and use it monthly at their convenience and requirement.",
      },
    ],
  },
  {
    question: "How to implement meal cards in the workplace?",
    answer: [
      {
        heading:
          "In order to implement meal cards at the workplace, follow these easy steps:",
        bullets: [
          "Register on EnKash, your meal card provider",
          "Define the value of the card according to your organization’s budget",
          "Create a network of authorized food chains, apps, outlets where all card will be valid",
          "Educate your employees about the KYC and usage of the meal card",
          "Distribute the cards among your employees and encourage them to use it for food purchases and tax-redemption",
        ],
      },
    ],
  },
  {
    question: "How can I close the account and claim a refund?",
    answer: [],
    answerHTML: (
      <div>
        <h4>
          If you wish to request the closure of your card/wallet, please click
          on the link below to proceed:
          <Link href="https://transcorpint.com/card-closure" target="_blank">
            https://transcorpint.com/card-closure
          </Link>{" "}
        </h4>
      </div>
    ),
  },
];

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/WhatsApp-Image-2023-09-13-at-4.23.23-PM-1.jpeg",
    imageAlt: "Tax-free Meals For Your Employees With EnKash Meal Cards",
    title: "Tax-free Meals For Your Employees With EnKash Meal Cards",
    date: "Sep 26, 2022",
    description:
      "Employee satisfaction is one of the cornerstones of a successful business. To keep your employees happy, just paying salaries on time is not enough anymore...",
    link: "https://www.enkash.com/resources/blog/tax-free-meal-cards/",
  },

  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/blog_7.1b7b0500.jpg",
    imageAlt:
      "What is Business Expense Card & Benefits of Business Prepaid Cards",
    title: "What is Business Expense Card & Benefits of Business Prepaid Cards",
    date: "Aug 02, 2023",
    description:
      "Prepaid cards or corporate expense cards have emerged as cutting-edge expense management tools, offering a range of innovative features to simplify your life. From handling business...",
    link: "https://www.enkash.com/resources/blog/prepaid-card-for-business-expenses/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/10/Prepaid-Cards-A-definitive-guide-to-growth-and-profitibility.jpg",
    imageAlt: "Prepaid Cards – A Guide to Growth",
    title: "Prepaid Cards – A Guide to Growth",
    date: "Oct 20, 2022",
    description:
      "The growth of a business depends on various factors, one of which is the way a company makes payments. With the country rapidly moving towards digitization in different industries, digital payment...",
    link: "https://www.enkash.com/resources/blog/prepaid-cards-a-defintive-guide-to-growth/",
  },
];

export { blogData, faqData, carouselData, productData };
