import iconOne from "./img/icon-one.svg"
import iconTwo from "./img/icon-two.svg"
import iconThree from "./img/icon-three.svg"
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
    title: "Budget & Advances",
    description:
      "Define budgets and get advances for better expense management. ",
    image: paymentLink,
    link: "/budget-and-advances/",
  },
  {
    title: "Reimbursements",
    description:
      "Businesses repay amount to employees or partners for expenses incurred on their behalf.",
    image: paymentLink,
    link: "/reimbursements/",
  },
  {
    title: "Scan & Drop Receipts",
    description:
      "Scan and upload expense receipts digitally for quick and efficient reimbursement.",
    image: qrCode,
    link: "/receipts/",
  },
  {
    title: "Policy and Approval Flow",
    description:
      "A set of guidelines or rules that outline the procedures for seeking and granting official authorization for employee expenses. ",
    image: invoices,
    link: "/approval-flows/",
  },
  {
    title: "Hierarchy and Control",
    description: "Define hierarchies for better control and transparency.",
    image: autoCollect,
    link: "/hierarchy-and-controls/",
  },
]

const carouselData = [
  {
    image: iconOne,
    alt: "Dive into detailed employee expenses analytics with a centralized dashboard for real-time expense tracking and decision-making",
    title:
      "Dive into detailed employee expenses analytics with a centralized dashboard for real-time expense tracking and decision-making",
    heading: "Centralized Dashboard: ",
  },
  {
    image: iconTwo,
    alt: "Ensure confidentiality and compliance of your financial data with our robust encryption and security measures",
    title:
      "Ensure confidentiality and compliance of your financial data with our robust encryption and security measures",
    heading: "Comprehensible Data: ",
  },
  {
    image: iconThree,
    alt: "Ensure confidentiality and compliance of your financial data with our robust encryption and security measures",
    title:
      "Ensure confidentiality and compliance of your financial data with our robust encryption and security measures",
    heading: "Security Measures: ",
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

export { blogData, carouselData, productData }
