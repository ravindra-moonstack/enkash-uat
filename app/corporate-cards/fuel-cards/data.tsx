import iconOne from "./img/icon-one.svg";
import iconTwo from "./img/icon-two.svg";
import iconThree from "./img/icon-three.svg";
import iconFour from "./img/icon-four.svg";
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
import { FAQProps } from "@/components/faq/faq";

const productData: AllProductsDataProp[] = [
  {
    title: "Meal Card",
    description:
      "Provide employees with tax-saving meal benefits using a dedicated card accepted at restaurants and grocery stores.",
    image: paymentLink,
    link: "/corporate-cards/meal-cards/",
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

const faqData: FAQProps[] = [
  {
    question: "What are fuel cards?",
    answer: [
      {
        heading:
          "Fuel cards are specialized payment cards designed exclusively for purchasing fuel. Fuel Cards by EnKash, for instance, are prepaid cards restricted to fuel-related expenses. Our fuel cards ensure employees using their vehicles for work-related travel can do so without financial constraints. This convenient solution eliminates the need to rely on personal funds and streamlines the process of managing travel expenses for businesses.",
      },
    ],
  },
  {
    question: "Why are fuel cards important for my business?",
    answer: [
      {
        heading:
          "Fuel cards play a crucial role in business operations. They enable employees to travel for work without relying on their funds. Moreover, fuel cards significantly reduce paperwork and enhance operational efficiency, especially in work-related transport and local travel. Fuel Cards offer an effective solution to manage fuel expenses, optimize budgets, and streamline administrative processes.",
      },
    ],
  },
  {
    question:
      "Does the fuel card module help improve the finance team’s performance? If yes, how?",
    answer: [
      {
        heading:
          "Fuel cards are a boon for finance teams. Instead of laboriously reviewing numerous fuel receipts, seeking approvals, and processing employee claims manually, EnKash offers a streamlined approach. With EnKash, you can issue cards to your employees for fuel expenses. They can effortlessly scan their receipts for approval, and the card balance can be topped off based on usage. Monitoring, blocking, unblocking, and usage restrictions become simple tasks.",
      },
    ],
  },
  {
    question:
      "Why should a business consider offering fuel cards to employees?",
    answer: [
      {
        heading:
          "Businesses should consider providing fuel cards to employees for several compelling reasons. Fuel Cards from EnKash eliminate reimbursement hassles by providing pre-loaded cards for company-funded fuel expenses when employees use their vehicles for business travel. This simplifies financial processes and enhances travel experiences, contributing to overall efficiency and resource savings for the finance team.",
      },
    ],
  },
  {
    question: "How do fuel cards cut down business frauds?",
    answer: [
      {
        heading:
          "Fuel cards effectively reduce business fraud risk. They can only be used to purchase fuel, and that too at authorized outlets, eliminating the possibility of misuse. Our fuel cards offer additional security measures, such as passcodes or OTPs, to prevent unauthorized usage. These measures ensure that fuel-related expenses are genuine and prevent any fraudulent activities.",
      },
    ],
  },
  {
    question: "Who is eligible to apply for a fuel card?",
    answer: [
      {
        heading:
          "Fuel cards are typically available to businesses and employees who engage in regular work-related travel and fuel expenses. Eligibility criteria may vary depending on the issuer, but they are generally accessible to entities seeking a streamlined approach to fuel management.",
      },
    ],
  },
  {
    question: "How can a company fuel card save money for businesses?",
    answer: [
      {
        heading:
          "Fuel cards by EnKash help businesses save money by optimizing fuel expenses. Through features like spending limits and usage restrictions, businesses can control and manage their fuel budgets effectively. Reducing administrative overhead and streamlining processes with fuel cards also translates into significant business cost savings.",
      },
    ],
  },
  {
    question: "Which businesses can use a company fuel card?",
    answer: [
      {
        heading:
          "Company fuel cards can benefit companies of all sizes and industries. Our fuel cards are versatile and can be customized to suit the specific needs of different businesses, whether large corporations or small startups.",
      },
    ],
  },
  {
    question: "Where can you use a company fuel card?",
    answer: [
      {
        heading:
          "Fuel cards are designed for authorized fuel outlets, ensuring employees can access fuel conveniently and securely. These cards give businesses control over where and how they spend on fuel, optimizing their expenses.",
      },
    ],
  },
];

const carouselData = [
  {
    image: iconOne,
    alt: "Log in or register on the EnKash platform",
    title: "Log in or register on the EnKash platform.",
    heading: "Login: ",
  },
  {
    image: iconTwo,
    alt: "Issue pre-loaded fuel cards to employees",
    title: "Issue pre-loaded fuel cards to employees",
    heading: "Issue: ",
  },
  {
    image: iconThree,
    alt: "Send SMS or email notifications to employees",
    title: "Send SMS or email notifications to employees",
    heading: "Notify: ",
  },
  {
    image: iconFour,
    alt: "The card is ready to use post KYC is done",
    title: "The card is ready to use post KYC is done",
    heading: "Activate: ",
  },
];

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/5-Reasons-you-need-prepaid-credit-card-for-your-business-1.jpg",
    imageAlt: "5 Reasons You Need Prepaid Credit Cards For Your Business",
    title: "5 Reasons You Need Prepaid Credit Cards For Your Business",
    date: "Sep 29, 2022",
    description:
      "Many businesses that operate on a small and medium level have gained huge success and have been able to scale their company profitably with prepaid credit cards, as they are regarded as a powerful financial...",
    link: "https://www.enkash.com/resources/blog/prepaid-credit-card-for-business/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/blog_31.568a8412.jpg",
    imageAlt: "Corporate Prepaid Cards Vs Corporate Credit Cards",
    title: "Corporate Prepaid Cards Vs Corporate Credit Cards",
    date: "Sep 26, 2022",
    description:
      "Businesses – big or small, still heavily rely on business credit cards for their finances. It’s a practice that’s been adopted for years, and while it does give a certain degree of freedom to conduct business transactions, there are...",
    link: "https://www.enkash.com/resources/blog/employee-prepaid-vs-corporate-credit-cards/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/10/Prepaid-Cards-A-definitive-guide-to-growth-and-profitibility.jpg",
    imageAlt: "Prepaid Cards – A Guide to Growth",
    title: "Prepaid Cards – A Guide to Growth",
    date: "Oct 10, 2022",
    description:
      "The growth of a business depends on various factors, one of which is the way a company makes payments. With the country rapidly moving towards digitization in different industries, digital payments in India have become",
    link: "https://www.enkash.com/resources/blog/prepaid-cards-a-defintive-guide-to-growth/",
  },
];

export { blogData, faqData, carouselData, productData };
