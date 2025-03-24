import iconOne from "./img/icon-one.svg";
import iconTwo from "./img/icon-two.svg";
import iconThree from "./img/icon-three.svg";
import iconFour from "./img/icon-four.svg";
import iconFive from "./img/icon-five.svg";
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
    title: "Gift Cards",
    description:
      "Empower teams with versatile, prepaid gift cards for seamless rewards and recognition.",
    image: paymentLink,
    link: "/loyalty-lounge/gift-cards/",
  },
  {
    title: "Channel Incentives",
    description:
      "Motivate partners and distributors with tailored rewards, driving sales and long-term engagement.",
    image: qrCode,
    link: "/loyalty-lounge/channel-incentive/",
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
    image: invoices,
    link: "/loyalty-lounge/offers/",
  },
];



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
];

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
];

export { blogData, productData, carouselData };
