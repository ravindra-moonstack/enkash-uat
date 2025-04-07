import iconOne from "./img/icon-one.svg"
import iconTwo from "./img/icon-two.svg"
import iconThree from "./img/icon-three.svg"
import iconFour from "./img/icon-four.svg"

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
    title: "Insights",
    description:
      "Make use of deep, data-driven understandings for informed decision making.",
    image: invoices,
    link: "/expense-analytics-and-insights/",
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
    alt: "Enter the details required along with the amount limit and frequency to create a policy",
    title:
      "Enter the details required along with the amount limit and frequency to create a policy",
    heading: "Create Policy : ",
  },
  {
    image: iconTwo,
    alt: "After policy creation, an approval flow will have to be created and linked to it ",
    title:
      "After policy creation, an approval flow will have to be created and linked to it ",
    heading: "Approval Flow : ",
  },
  {
    image: iconThree,
    alt: " If you do not set the approval flow, default approval based on hierarchy will be set automatically",
    title:
      " If you do not set the approval flow, default approval based on hierarchy will be set automatically",
    heading: "Link Them : ",
  },
]

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/05/Tips-to-improve-business-expense-reimbursement-processes.jpg",
    imageAlt: "7 Tips to Improve Business Expense Reimbursement Processes",
    title: "7 Tips to Improve Business Expense Reimbursement Processes",
    date: "May 09, 2023",
    description:
      "A business without any expenses is impossible because you need to spend on various aspects. These include the raw materials that you need to run your core business, the vendors who keep your office working...",
    link: "https://www.enkash.com/resources/blog/tips-to-improve-expense-reimbursement-processes/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/Types-of-corporate-credit-cards-to-manage-expenses.jpg",
    imageAlt: "9 types of corporate credit cards to manage expenses",
    title: "9 types of corporate credit cards to manage expenses",
    date: "Sep 23, 2023",
    description:
      "The corporate credit card has been around the business industry for a while now. While popular banks have been issuing many types of corporate credit cards for years, FinTech platforms are now offering more evolved payment..",
    link: "https://www.enkash.com/resources/blog/smart-business-expenses-managment/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/02/All-you-need-to-know-about-employee-expense-reimbursement.jpg",
    imageAlt: "All You Need to Know about Employee Expense Reimbursement",
    title: "All You Need to Know about Employee Expense Reimbursement",
    date: "Feb 17, 2023",
    description:
      "Employee expense reimbursement is a process where an employer reimburses an employee for expenses incurred while performing job-related tasks. These expenses may include travel, training...",
    link: "https://www.enkash.com/resources/blog/employee-expense-reimbursement/",
  },
]

export { blogData, carouselData, productData }
