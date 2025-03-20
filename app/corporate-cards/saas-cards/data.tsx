import iconOne from "./img/icon-one.svg";
import iconTwo from "./img/icon-two.svg";
import iconThree from "./img/icon-three.svg";
import iconFour from "./img/icon-four-updated.svg";
import iconFive from "./img/icon-five.svg";
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
    alt: "Control SaaS spends",
    title:
      "Control SaaS spends and security like never before - Monitor and take action on subscription renewals and expenditures at your convenience",
  },
  {
    image: iconTwo,
    alt: "Works best with all leading, IT-approved tools",
    title:
      "Works best with all leading, IT-approved tools. Integrate your entire SaaS stack to get valuable insights for your business",
  },
  {
    image: iconThree,
    alt: "Get real-time visibility into your SaaS corporate card",
    title:
      "Get real-time visibility into your SaaS corporate card/virtual account balance so that you can stop worrying about overpaying or expense fraud",
  },
  {
    image: iconFour,
    alt: "Save countless work hours by automating your SaaS billing",
    title:
      "Save countless work hours by automating your SaaS billing, invoicing, and receipt matching process",
  },
  {
    image: iconFive,
    alt: "Ensure uninterrupted business operations with seamless payment processing",
    title:
      "Ensure uninterrupted business operations with seamless payment processing for your SaaS subscriptions",
  },
];

const faqData: FAQProps[] = [
  {
    question: "What is SaaS?",
    answer: [
      {
        heading:
          "SaaS is an abbreviation for Software as a Service. It is a software delivery model in which a third-party provider hosts applications and makes them available to customers online. SaaS is used for business applications such as CRM, project management, accounting, etc. Its benefits include lower upfront costs, faster deployment, and easier access to the latest software features.",
      },
    ],
  },
  {
    question:
      "Why should I manage my business’ recurring expenses on one platform?",
    answer: [
      {
        heading:
          "Managing all your recurring expenses on one platform provides total visibility over your entire subscription spend. You can track renewal dates and previous payments and get automated reminders about upcoming renewals, which makes it easier to manage your expenses and reduces the risk of missing payments.",
      },
    ],
  },
  {
    question: "How can I control my SaaS expenditure?",
    answer: [
      {
        heading:
          "To effectively manage your SaaS expenditure, consider implementing various strategies. Utilize specialized tools and insights to track essential information like renewal dates and subscription prices. Additionally, leverage virtual cards and accounts with predefined limits to prevent overspending on SaaS subscriptions.",
      },
    ],
  },
  {
    question: "How does SaaS subscription management help save time?",
    answer: [
      {
        heading:
          "You can use a SaaS management platform to streamline and manage all your subscriptions. This way, you can avoid manually tracking renewal dates and previous payments. This means you can spend less time on administrative tasks and more time focusing on other aspects of your business.",
      },
    ],
  },
  {
    question: "How can you get greater visibility into SaaS purchases?",
    answer: [
      {
        heading:
          "Various SaaS management platforms offer real-time visibility into SaaS purchases, which can help you make better business decisions. They let you see all your SaaS purchases in one place and gain insights into your spending patterns.",
      },
    ],
  },
];

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/blog_30.2b14ff38.jpg",
    imageAlt: "Automate Your Spends with SaaS Spend Management Software",
    title: "Automate Your Spends with SaaS Spend Management Software",
    date: "Feb 08, 2023",
    description:
      "Prepaid cards or corporate expense cards have emerged as cutting-edge expense management tools, offering a range of innovative features to simplify your life. From handling business...",
    link: "https://www.enkash.com/resources/blog/saas-subscription-management-with-virtual-cards/",
  },

  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/12/Keep-things-simple-with-EnKash.jpg",
    imageAlt: "Keep Things Strategic & Simple with Spend Management Software",
    title: "Keep Things Strategic & Simple with Spend Management Software",
    date: "Feb 08, 2023",
    description:
      "From startup expenditure to sourcing business assets to improvement costs, a huge expense is involved in running a business. Moreover, the expenditure may vary depending on the business type...",
    link: "https://www.enkash.com/resources/blog/keep-things-simple-with-spend-management-software/",
  },

  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/blog_4.cf1aca79.jpg",
    imageAlt: "Top 5 Reasons to Adopt B2B Payment Automation",
    title: "Top 5 Reasons to Adopt B2B Payment Automation",
    date: "Aug 08, 2023",
    description:
      "Digital is the new normal. This mantra of B2B payment automation has been ingrained in our post-pandemic world which gave us a rude awakening in terms of how we used to function....",
    link: "https://www.enkash.com/resources/blog/why-use-automation-in-b2b-payments/",
  },
];

export { blogData, faqData, carouselData, productData };
