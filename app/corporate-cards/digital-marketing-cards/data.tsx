import iconOne from "./img/icon-one.svg";
import iconTwo from "./img/icon-two.svg";
import iconThree from "./img/icon-three.svg";
import Link from "next/link";
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
    title: "Virtual Card",
    description:
      "Generate secure, single-use virtual cards for online payments, reducing fraud risk and improving accountability.",
    image: autoCollect,
    link: "/corporate-cards/virtual-cards/",
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
    question:
      "What is digital marketing, and how does the digital marketing card aid its management?",
    answer: [],
    answerHTML: (
      <div>
        <h4>
          Digital marketing promotes products or services using digital channels
          like search engines, social media, email, and websites. Digital
          marketing cards serve as financial control tools in this landscape,
          consolidating expenses scattered across platforms. These purpose-based
          cards enable businesses to manage{" "}
          <Link
            href="https://www.enkash.com/resources/blog/enkash-corporate-cards-for-digital-marketers/"
            target="_blank"
          >
            digital marketing expenses
          </Link>{" "}
          efficiently in a centralized place, simplifying financial oversight
          and offering a comprehensive view of their digital marketing
          activities.
        </h4>
      </div>
    ),
  },
  {
    question:
      "Can I implement usage limits on my digital marketing card to safeguard against overspending?",
    answer: [
      {
        heading:
          "These cards offer a highly flexible solution to customize usage limits on their digital marketing budgets, ensuring a stringent check against overspending. The best part is that these limits can be aligned with your business’s specific marketing budget, making it easier to stay within financial boundaries. This feature empowers companies to maintain strict financial control, preventing unintentional or excessive expenditures in their digital marketing efforts.",
      },
    ],
  },
  {
    question:
      "How can digital marketing cards simplify the process of running marketing campaigns?",
    answer: [
      {
        heading:
          "Running marketing campaigns has become effortless and efficient with digital marketing cards. You can easily select and execute campaigns by seamlessly integrating this card into your digital marketing platform. The card's setup allows you to manage all expenses related to your campaigns in one central location. This simplifies both the initiation and tracking of campaigns, enhancing your ability to manage and optimize your digital marketing efforts effectively.",
      },
    ],
  },
  {
    question:
      "Can I set specific limits on my digital marketing card for various expenditures?",
    answer: [],
    answerHTML: (
      <div>
        <h4>
          Companies can issue this{" "}
          <Link
            href="https://www.enkash.com/resources/blog/enkash-corporate-cards-for-digital-marketers/"
            target="_blank"
          >
            corporate card for digital marketing
          </Link>{" "}
          purposes and establish specific spending limits for distinct
          categories of expenditures. For instance, you can set limits for
          campaign-related expenses and subscription renewals based on your
          marketing budget. Furthermore, you can manage the types of
          expenditures you want to allow, ensuring that payments to specific
          websites or services align with your predefined financial boundaries.
        </h4>
      </div>
    ),
  },
  {
    question:
      "How to prevent the misuse of its digital marketing card for marketing expenses?",
    answer: [
      {
        heading:
          "These digital marketing cards employ a well-defined usage policy to prevent misuse. This policy acts as a safeguard, ensuring that only specific types of expenditures pre-approved by the marketing team are allowed on the card. These cards offer a secure and efficient way to protect against unauthorized or inappropriate spending by controlling and restricting card usage through predefined parameters. This level of control ultimately contributes to enhanced financial discipline and transparency in managing your digital marketing expenses.",
      },
    ],
  },
];

const carouselData = [
  {
    image: iconOne,
    alt: "Issue a corporate card for digital marketing and set customized limits for a campaign expenditure.",
    title:
      "Issue a corporate card for digital marketing and set customized limits for a campaign expenditure..",
    heading: "Issuance: ",
  },
  {
    image: iconTwo,
    alt: "Manage your expenditure with a predefined usage policy to prevent misuse of cards",
    title:
      "Manage your expenditure with a predefined usage policy to prevent misuse of cards",
    heading: "Control: ",
  },
  {
    image: iconThree,
    alt: "Link your card to digital marketing platforms to have a complete overview of all your digital marketing expenses",
    title:
      "Link your card to digital marketing platforms to have a complete overview of all your digital marketing expenses",
    heading: "Connect: ",
  },
];

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/08/blog_10G.c8939210.jpg",
    imageAlt: "Why Is Digital Marketing Important for Small Businesses?",
    title: "Why Is Digital Marketing Important for Small Businesses?",
    date: "Aug 08, 2022",
    description:
      "We live in a digital world, where the importance of digital marketing is likely to only increase in the future. According to industry research, there were over 700 million internet users in India in 2020 which is expected to grow to...",
    link: "https://www.enkash.com/resources/blog/importance-of-digital-marketing/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/05/How-startups-can-leverage-digital-marketing.jpg",
    imageAlt: "Digital Marketing for Startups: Advantages and Opportunities",
    title: "Digital Marketing for Startups: Advantages and Opportunities",
    date: "May 05, 2023",
    description:
      "While traditional marketing methods still hold value, digital marketing has emerged as a game-changer for startups. With its unparalleled reach, cost-effectiveness, and precise targeting capabilities...",
    link: "https://www.enkash.com/resources/blog/digital-marketing-for-startups/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/blog_27.dc4a6280.jpg",
    imageAlt: "Manage Digital Marketing Expenses with Corporate Cards",
    title: "Manage Digital Marketing Expenses with Corporate Cards",
    date: "Sep 026, 2022",
    description:
      "Virtual account allows businesses to initiate seamless financial transactions and maintain track records. Various large, medium, and small-scale businesses are shifting towards...",
    link: "https://www.enkash.com/resources/blog/enkash-corporate-cards-for-digital-marketers/",
  },
];

export { blogData, faqData, carouselData, productData };
