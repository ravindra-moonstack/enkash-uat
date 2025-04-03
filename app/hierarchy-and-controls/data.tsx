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
    image: paymentButton,
    link: "/reimbursement/",
  },
  {
    title: "Scan & Drop Receipts",
    description:
      "Scan and upload expense receipts digitally for quick and efficient reimbursement.",
    image: qrCode,
    link: "/scan-and-drop-receipts/",
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
      "A set of guidelines or rules that outline the procedures for seeking and granting official authorization for expenses. ",
    image: autoCollect,
    link: "/policy-and-approval-flows/",
  },
]

const carouselData = [
  {
    image: iconOne,
    alt: "Choose to manage users ",
    title: "Choose to manage users ",
    heading: "Manage Users: ",
  },
  {
    image: iconTwo,
    alt: "Add users or bulk upload using the sample file format",
    title: "Add users or bulk upload using the sample file format",
    heading: "Add Details: ",
  },
  {
    image: iconThree,
    alt: "Go to Expense and configure user roles based on their grades, designation, and department management",
    title:
      "Go to Expense and configure user roles based on their grades, designation, and department management",
    heading: "Configure: ",
  },
]

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/12/Open-a-virtual-bank-account-now-to-manage-your-business-expenses.jpg",
    imageAlt: "How Can Spend Analysis Help in Effective Cost Management?",
    title: "How Can Spend Analysis Help in Effective Cost Management?",
    date: "Aug 18, 2023",
    description:
      "In today’s competitive business landscape, cost management plays a crucial role in the success and sustainability of any organization. Controlling expenses and optimizing spending....",
    link: "https://www.enkash.com/resources/blog/spend-analysis/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/blog_28.29e8be51.jpg",
    imageAlt: "Improve Budget Management with EnKash Platform",
    title: "Improve Budget Management with EnKash Platform",
    date: "Aug 29, 2023",
    description:
      "If you own a business, you’d know how hard it is to stay in check when it comes to business expenses. Even if you plan each expense down to a single rupee, you still find yourself....",
    link: "https://www.enkash.com/resources/blog/enkash-spend-management-software-for-smb/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/04/Insights-with-expense-management.jpg",
    imageAlt:
      "Gain Valuable Insights into Your Finances with Expense Management",
    title: "Gain Valuable Insights into Your Finances with Expense Management",
    date: "April 07, 2023",
    description:
      "Managing expenses is an essential aspect of personal and professional financial management. Keeping track of expenses can provide valuable insights into your finances, including...",
    link: "https://www.enkash.com/resources/blog/importance-of-expense-management/",
  },
]

export { blogData, carouselData, productData }
