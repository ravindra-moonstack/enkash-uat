import iconOne from "./img/icon-one.svg"
import iconTwo from "./img/icon-two.svg"
import iconThree from "./img/icon-three.svg"
import iconFour from "./img/icon-four.svg"
import iconFive from "./img/icon-five.svg"
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
    title: "Gift Cards",
    description:
      "Empower teams with versatile, prepaid gift cards for seamless rewards and recognition.",
    image: paymentLink,
    link: "/gift-cards/",
  },
  {
    title: "Channel Incentives",
    description:
      "Motivate partners and distributors with tailored rewards, driving sales and long-term engagement.",
    image: qrCode,
    link: "/channel-incentives/",
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
]

const faqData: FAQProps[] = [
  {
    question: "What are reimbursements?",
    answer: [
      {
        heading:
          "Reimbursements refer to the payment or compensation made to an employee for expenses incurred on behalf of the organization. For example, when an employee travels on behalf of their company and incurs expenses such as airfare, hotel accommodation, and meals, the employee can request reimbursement of expenses, and the organization is bound to pay that amount.",
      },
    ],
  },
  {
    question: "What is the need for automating reimbursements?",
    answer: [
      {
        heading:
          "Expense reimbursement requires a lot of manual work and attention to detail, which can increase the risk of errors. Automating the reimbursement process helps you save resources like time and money across the business, unburdens your finance team, and ensures that your business can meet essential deadlines without worrying about reimbursements.",
      },
    ],
  },
  {
    question:
      "How does automating the reimbursement process help me save time?",
    answer: [
      {
        heading:
          "Automating the reimbursement process reduces the time it takes to process and approve reimbursements. This means that employees do not have to spend as much time filling out paperwork, and managers do not have to spend as much time reviewing and approving expenses. This can free up time for employees and managers to focus on other tasks.",
      },
    ],
  },
  {
    question: "Will automated reimbursements help me reduce the risk of fraud?",
    answer: [
      {
        heading:
          "Absolutely! Automating the reimbursement process can increase transparency by providing a clear and consistent process for submitting and approving expenses. This can help prevent fraud and ensure that expenses are properly documented and accounted for.",
      },
    ],
  },
  {
    question: "Can automating the reimbursement process help with cost-saving?",
    answer: [
      {
        heading:
          "Definitely! Automating the reimbursement process can help save costs by reducing the need for manual processing and paper-based systems. This can help reduce printing and mailing costs and the cost of manually reviewing and processing expenses.",
      },
    ],
  },
  {
    question: "Is expense reimbursement part of the salary?",
    answer: [
      {
        heading:
          "Expense reimbursement is typically not considered part of an individual's salary. Salaries are fixed amounts paid regularly for the work performed, while expense reimbursement involves compensating employees for out-of-pocket expenses incurred while performing job-related tasks.",
      },
    ],
  },
]

const carouselData = [
  {
    image: iconOne,
    alt: " Go to “Add Expense” and upload your receipt; the details will be auto-filled using OCR technology or using WhatsApp integration",
    title:
      " Go to “Add Expense” and upload your receipt; the details will be auto-filled using OCR technology or using WhatsApp integration",
    heading: "Upload receipts: ",
  },
  {
    image: iconTwo,
    alt: "Choose to submit a single expense or combine multiple expenses in a dossier ",
    title:
      "Choose to submit a single expense or combine multiple expenses in a dossier ",
    heading: "Single or Combined Submission: ",
  },
  {
    image: iconThree,
    alt: "Click Create; the expense will be forwarded to the manager for approval",
    title:
      "Click Create; the expense will be forwarded to the manager for approval",
    heading: "Approval: ",
  },
  {
    image: iconFour,
    alt: "View all expenses in the Expenses tab with their respective status",
    title: "View all expenses in the Expenses tab with their respective status",
    heading: "Know Status: ",
  },
]

const blogData = [
  {
    image:
      "https://blogs.enkash.com/wp-content/uploads/2023/01/Guide-on-Medical-expenses-reimbursement-by-employer.jpg",
    imageAlt:
      "Medical Expenses Reimbursement by Employer: A Comprehensive Guide",
    title: "Medical Expenses Reimbursement by Employer: A Comprehensive Guide",
    date: "Jan 24, 2023",
    description:
      "Do you need help keeping up with employee medical reimbursements? Is tracking payments and data sync in real time taking too long? It does not have to be that way. Processing employee....",
    link: "/resources/blog/medical-expenses-reimbursement-by-employer/",
  },
  {
    image:
      "https://blogs.enkash.com/wp-content/uploads/2023/05/Tips-to-improve-business-expense-reimbursement-processes.jpg",
    imageAlt: "7 Tips to Improve Business Expense Reimbursement Processes",
    title: "7 Tips to Improve Business Expense Reimbursement Processes",
    date: "May 09, 2023",
    description:
      "A business without any expenses is impossible because you need to spend on various aspects. These include the raw materials that you need to run your core business, the vendors who...",
    link: "/resources/blog/tips-to-improve-expense-reimbursement-processes/",
  },
  {
    image:
      "https://blogs.enkash.com/wp-content/uploads/2023/02/All-you-need-to-know-about-employee-expense-reimbursement.jpg",
    imageAlt: "All You Need to Know about Employee Expense Reimbursement",
    title: "All You Need to Know about Employee Expense Reimbursement",
    date: "Feb 17, 2023",
    description:
      "Employee expense reimbursement is a process where an employer reimburses an employee for expenses incurred while performing job-related tasks. These expenses may include travel, training, equipment, and other...",
    link: "/resources/blog/employee-expense-reimbursement/",
  },
]

export { blogData, productData, carouselData }
