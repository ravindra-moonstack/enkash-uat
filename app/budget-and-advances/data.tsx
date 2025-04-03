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
    title: "Policy and Approval Flow",
    description:
      "Enterprises can define their policies and set approval flow for easy decision making.",
    image: paymentLink,
    link: "/policy-and-approval-flows/",
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
    title: "Hierarchy and Control",
    description: "Define hierarchies for better control and transparency.",
    image: autoCollect,
    link: "/hierarchy-and-controls/",
  },
]

const carouselData = [
  {
    image: iconOne,
    alt: "Go to Advances and add details like advance name, amount, and date.",
    title: "Go to Advances and add details like advance name, amount, and date",
    heading: "Add details: ",
  },
  {
    image: iconTwo,
    alt: "Select category or category groups if you want to submit multiple categories",
    title:
      "Select category or category groups if you want to submit multiple categories",
    heading: "Define categories: ",
  },
  {
    image: iconThree,
    alt: "The policy created will check whether the advance is aligned with the budget allocation",
    title:
      "The policy created will check whether the advance is aligned with the budget allocation",
    heading: "Advance alignment: ",
  },
]

const blogData = [
  {
    image:
      "https://blogs.enkash.com/wp-content/uploads/2022/09/blog_28.29e8be51.jpg",
    imageAlt: "Improve Budget Management with EnKash Platform",
    title: "Improve Budget Management with EnKash Platform",
    date: "Aug 29, 2023",
    description:
      "If you own a business, you’d know how hard it is to stay in check when it comes to business expenses. Even if you plan each expense down to a single rupee, you still find yourself struggling to...",
    link: "/resources/blog/enkash-spend-management-software-for-smb/",
  },
  {
    image:
      "https://blogs.enkash.com/wp-content/uploads/2023/04/Budget-control-system.jpg",
    imageAlt: "Simplify Your Finances with a Budget Control System",
    title: "Simplify Your Finances with a Budget Control System",
    date: "Aug 03, 2023",
    description:
      "Isn’t managing all the finances tiring sometimes, especially for businesses that need to keep track of multiple transactions and expenses, all at once? With the help of a budget control system...",
    link: "/resources/blog/simplify-finance-with-budget-control-system/",
  },
  {
    image:
      "https://blogs.enkash.com/wp-content/uploads/2023/01/Budget-Management-The-Key-to-Success.jpg",
    imageAlt: "Budget Management: The Key to Success",
    title: "Budget Management: The Key to Success ",
    date: "Jan 9, 2023",
    description:
      "The key to any successful business is to keep track of expenses, ensuring cash inflow is higher than cash outflow. Therefore, every business must create a solid plan for expenses at the beginning...",
    link: "/resources/blog/learn-everything-about-budget-management/",
  },
]

export { blogData, carouselData, productData }
