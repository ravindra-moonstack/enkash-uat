import iconOne from "./img/icon-one.svg"
import iconTwo from "./img/icon-two.svg"
import iconThree from "./img/icon-three.svg"
import iconFour from "./img/icon-four.svg"
import { FAQProps } from "@/components/faq/faq"
import {
  autoCollect,
  invoices,
  paymentButton,
  paymentLink,
  qrCode,
} from "@/components/all-products"
import { AllProductsDataProp } from "@/components/all-products/all-products"

const productData: AllProductsDataProp[] = [
  {
    title: "Budget & Advance",
    description:
      "Get advances cleared as per the defined budget to get going without any hindrance.",
    image: qrCode,
    link: "/budget-and-advances/",
  },
  {
    title: "Reimbursements",
    description:
      "Businesses repay amount to employees or partners for expenses incurred on their behalf.",
    image: paymentLink,
    link: "/reimbursement/",
  },
  {
    title: "Hierarchy and Control",
    description: "Define hierarchies for better control and transparency.",
    image: autoCollect,
    link: "/hierarchy-and-controls/",
  },
  {
    title: "Insights",
    description:
      "Make use of deep, data-driven understandings for informed decision making.",
    image: invoices,
    link: "/insights/",
  },
  {
    title: "Policy and Approval Flow",
    description:
      "Enterprises can define their policies and set approval flow for easy decision making.",
    image: paymentLink,
    link: "/policy-and-approval-flows/",
  },
]

const carouselData = [
  {
    image: iconOne,
    alt: "Go to Drop Receipts as visible on the top and store all your receipts on the go",
    title:
      "Go to Drop Receipts as visible on the top and store all your receipts on the go",
    heading: "Scan receipts : ",
  },
  {
    image: iconTwo,
    alt: "Upload receipts as and when you spend",
    title: "Upload receipts as and when you spend",
    heading: "Upload on the go : ",
  },
  {
    image: iconThree,
    alt: "Link them to expenses anytime as per your convenience ",
    title: "Link them to expenses anytime as per your convenience ",
    heading: "Reimburse : ",
  },
]

const faqData: FAQProps[] = [
  {
    question: " What is digital receipt management?",
    answer: [
      {
        heading:
          "Digital receipt management of OfEx ensures that employees who spend on behalf of the business, whether for travel, entertainment, rent, utilities, or other office expenses, can easily scan and upload receipts at the time of payment. This feature ensures that timely and accurate records are created, addressing the need for precise record-keeping. ",
      },
    ],
  },
  {
    question: "Why digital receipt management is essential for my business?",
    answer: [
      {
        heading:
          "Digital receipt management enables you to efficiently manage the paper-based trails associated with your business transactions, ensuring that your finance and other teams are always audit-ready. With OfEx, you'll streamline your financial processes, making tracking and accessing your business expense records easier with just a few clicks.",
      },
    ],
  },
  {
    question:
      "Does digital receipt management module help improve the finance team’s performance? If yes, how?",
    answer: [
      {
        heading:
          "Absolutely! OfEx's digital receipt management enhances the finance team's efficiency by transforming the process into a streamlined, digital one. It speeds up the entire expense management process, from reimbursement to recording and addressing audit queries.",
      },
    ],
  },
  {
    question: "Why should a business consider digital receipt management?",
    answer: [
      {
        heading:
          "Businesses can benefit immensely from OfEx's digital receipt management for several reasons:",
        bullets: [
          "Reduces paperwork related to business expenses, making administrative tasks more efficient",
          "Streamlines the reimbursement process, enabling startups to manage their finances better",
          "Helps with planning for cash flow by providing insights based on accurate spend records",
          "Makes it easy to deal with compliance and audit queries, ensuring businesses are always audit-ready",
          "Improves expense reporting with minimal manual intervention, saving time and reducing errors",
        ],
      },
    ],
  },
  {
    question: "How does the digital receipt management module curb misuse?",
    answer: [
      {
        heading:
          "Digital receipt management ensures accurate expenses by allowing easy verification of details with scanned receipts. It enhances transparency and accountability through notations, checks, and approvals, reducing the risk of misuse.",
      },
    ],
  },
]

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/04/Budget-control-system.jpg",
    imageAlt: "Simplify Your Finances with a Budget Control System",
    title: "Simplify Your Finances with a Budget Control System",
    date: "Aug 08, 2023",
    description:
      "Isn’t managing all the finances tiring sometimes, especially for businesses that need to keep track of multiple transactions and expenses, all at once? With the help of a budget control system...",
    link: "https://www.enkash.com/resources/blog/simplify-finance-with-budget-control-system/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/10/blog_17N.816f8743.jpg",
    imageAlt: "How Does Expense Management Software Help Your Business?",
    title: "How Does Expense Management Software Help Your Business?",
    date: "Aug 08, 2023",
    description:
      "Whether you are an individual or a company, expenses are a part of life that you cannot avoid. While expenses are inevitable, there are chances that the repercussions of not managing expenses....",
    link: "https://www.enkash.com/resources/blog/benefits-of-expense-management-software/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/12/Keep-an-Efficient-Track-of-your-Companys-Expenditure.jpg",
    imageAlt:
      "Keep an Efficient Track of the Company’s Expenditure with Expense Reporting",
    title:
      "Keep an Efficient Track of the Company’s Expenditure with Expense Reporting",
    date: "Dec 30, 2022",
    description:
      "Managing expenses is an essential aspect of personal and professional financial management. Keeping track of expenses can provide valuable insights into your finances, including...",
    link: "https://www.enkash.com/resources/blog/track-company-expenditure-with-expense-reporting/",
  },
]

export { blogData, faqData, productData, carouselData }
