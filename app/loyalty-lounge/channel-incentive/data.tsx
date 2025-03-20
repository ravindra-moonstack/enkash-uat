import iconOne from "./img/icon-one.svg";
import iconTwo from "./img/icon-two.svg";
import iconThree from "./img/icon-three.svg";
import iconFour from "./img/icon-four.svg";
import iconFive from "./img/icon-five.svg";
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
    title: "Gift Cards",
    description:
      "A prepaid card used by businesses to purchase in bulk for various purposes.",
    image: paymentLink,
    link: "/loyalty-lounge/gift-cards/",
  },
  {
    title: "Employee Rewards",
    description:
      "Recognize and retain top talent with instant, meaningful, and customizable reward solutions.",
    image: paymentButton,
    link: "/loyalty-lounge/employee-rewards/",
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
    image: paymentButton,
    link: "/loyalty-lounge/offers/",
  },
];

const faqData: FAQProps[] = [
  {
    question:
      "How EnKash's channel incentive platform is different from others?",
    answer: [
      {
        heading:
          "EnKash is a new-age platform with a modern approach to channel incentives. Unlike traditional businesses that send physical gifts or organize parties to incentivize their partners, EnKash allows customization and flexibility for channel incentives. The platform helps break the redundancy of similar gifts to all partners. Instead, it allows partners to choose from a variety of options as per their personal preferences. This makes the whole activity of channel incentives more fruitful and satisfying.",
      },
    ],
  },
  {
    question: "What is a channel incentive program?",
    answer: [
      {
        heading:
          "Most companies have several channels like wholesalers, retailers, resellers, and others to increase the company's sales reach. A channel incentive program motivates them with an incremental reward system besides the basic remuneration they get per unit of sale. This means the more customers they bring in, the more they will become eligible for incentives.",
      },
    ],
  },
  {
    question: "How do incentive programs work?",
    answer: [
      {
        heading:
          "Each business designs the incentive program using its industry and competition. However, the basic structure of an incentive program offers a fixed payment for each unit and has a slab system, which, when achieved, adds to the basic remuneration. For example, if a channel partner gets 2% of the sales value as remuneration, crossing a slab (of, say, a sale of 100 units) will get them an additional incentive of 1%. When the channel partner crosses the next slab (of, say, a sale of 200 units), then an additional incentive of 2% will be offered. However, this may vary from company to company as per the policies.",
      },
    ],
  },
  {
    question: "What is the purpose of incentives?",
    answer: [
      {
        heading:
          "The basic purpose of incentives is to keep the channel partner motivated. In many instances, the channel partner may use the extra income they generate from incentives on promoting the products from their end to increase sales or even offer special rebates to increase customers. The overall purpose of incentives is to improve sales and reach of the product and the brand.",
      },
    ],
  },
  {
    question: "What are examples of channel incentive programs?",
    answer: [
      {
        heading:
          "Examples of channel incentive programs include incentives offered to channel partners for selling products in any business segment, such as financial products, retail products, and FMCG products.",
      },
      {
        heading:
          "The program starts with training the teams of the channel partners on the product, the unique selling points, product specifications, and the product's value to the customers. Each channel partner may also receive marketing display material, samples, demo materials, and more to sell effectively. Periodic training and updates are also given to educate the channel partner on product developments and usage.",
      },
    ],
  },
  {
    question: "What is an incentive reward?",
    answer: [
      {
        heading:
          "Generally, an incentive reward is a payment or remuneration that is over and above the basic payout given for the sales or subscriptions that channel partners complete. The incentive is usually decided on a slab system, which ensures that the higher the sales figures, the bigger the incentive paid to the channel partner, individual sales people, or both.",
      },
    ],
  },
];

const carouselData = [
  {
    image: iconOne,
    alt: "Login to EnKash or register",
    title:
      "Log in to EnKash using your registered mobile number and complete your KYC",
  },
  {
    image: iconTwo,
    alt: "Go to the channel incentives program under loyalty lounge",
    title: "Go to the channel incentives program under loyalty lounge",
  },
  {
    image: iconThree,
    alt: "Fund your account via NEFT, IMPS, or RTGS",
    title: "Fund your account via NEFT, IMPS, or RTGS",
  },
  {
    image: iconFour,
    alt: "Add channel partners one-by-one or through bulk upload template file",
    title:
      "Add channel partners one-by-one or through bulk upload template file",
  },
  {
    image: iconFive,
    alt: "Partners as incentive recipients will be notified via SMS, Whatsapp, and e-mail about their incentive points and redemption process",
    title:
      "Partners as incentive recipients will be notified via SMS, Whatsapp, and e-mail about their incentive points and redemption process",
  },
];

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/blog_26.d1a8b0d7.jpg",
    imageAlt: "Rewards Programs -The Way to Pay More, Earn More",
    title: "Rewards Programs -The Way to Pay More, Earn More",
    date: "Aug 02, 2023",
    description:
      "Corporate cards with attractive rewards programs are one of the most popular choices in the business world these days. Their ease of usage coupled with their immense...",
    link: "https://www.enkash.com/resources/blog/corporate-cards-benefits-rewards-program/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/05/Tips-to-improve-business-expense-reimbursement-processes.jpg",
    imageAlt: "7 Tips to Improve Business Expense Reimbursement Processes",
    title: "7 Tips to Improve Business Expense Reimbursement Processes",
    date: "May 09, 2023",
    description:
      "A business without any expenses is impossible because you need to spend on various aspects. These include the raw materials that you need to run your core business...",
    link: "https://www.enkash.com/resources/blog/tips-to-improve-expense-reimbursement-processes/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/12/Payment-process-guide-for-2023.jpg",
    imageAlt: "Payment Processing Guide for 2023",
    title: "Payment Processing Guide for 2023",
    date: "Aug 10, 2023",
    description:
      "A business owner needs to perform numerous tedious tasks for the smooth and efficient functioning of their business. Whatever the type of business you own, making your...",
    link: "https://www.enkash.com/resources/blog/payment-processing-guide/",
  },
];

export { blogData, faqData, carouselData, productData };
