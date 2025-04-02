import { FAQProps } from "@/components/faq/faq"
import styles from "./page.module.scss"
import iconOne from "./img/icon-one.svg"
import iconTwo from "./img/icon-two.svg"
import iconThree from "./img/icon-three.svg"

import {
  autoCollect,
  instantSettlement,
  invoices,
  paymentButton,
  paymentLink,
  paymentPage,
  qrCode,
  reminderEngine,
} from "@/components/all-products"
import { AllProductsDataProp } from "@/components/all-products/all-products"

const productData: AllProductsDataProp[] = [
  {
    title: "Payment Gateway",
    description:
      "Effortlessly collect payments across various channels with this no-code solution",
    image: paymentPage,
    link: "/payment-gateway/",
  },
  {
    title: "Payment Link",
    description:
      "Send payment links on WhatsApp, SMS, Facebook, Twitter, and more to collect payments",
    image: paymentLink,
    link: "/payment-links/",
  },
  {
    title: "Payment Button",
    description:
      "A pre-designed easy-to-integrate payment button for your website to collect payments.",
    image: paymentButton,
    link: "/payment-button/",
  },
  {
    title: "QR Codes",
    description:
      "Allow secure, contactless payments using QR codes, empowering businesses to process transactions instantly.",
    image: qrCode,
    link: "/qr-codes/",
  },
  {
    title: "Auto Collect",
    description:
      "Easily accept NEFT, RTGS, and IMPS transfers with customer-specific identifiers and automated reconciliation for scalability.",
    image: autoCollect,
    link: "/auto-collect/",
  },
  {
    title: "Invoices",
    description:
      "Automate recurring invoicing, track sales, and payments, and create bulk invoices with embedded payment links.",
    image: invoices,
    link: "/invoices/",
  },
  {
    title: "UPI Payments",
    description:
      "UPI payments with any app - BHIM, PhonePe, WhatsApp for smooth transactions. No SMS, no VPA hassles.",
    image: qrCode,
    link: "/olympus/receivables/upi-payments/",
  },
  {
    title: "Reminder Engine",
    description:
      "Eliminate manual reminders and automate your business collections effortlessly for smoother cash flow management.",
    image: reminderEngine,
    link: "/collection-reminder/",
  },
]

const carouselData = [
  {
    image: iconOne,
    alt: "Connect bank accounts or payment gateways to EnKash for seamless transfers.",
    title:
      "Connect bank accounts or payment gateways to EnKash for seamless transfers.",
    heading: "Link Payment Accounts:  ",
  },
  {
    image: iconTwo,
    alt: "Select the preferred settlement method and frequency (instant, daily, or custom).",
    title:
      "Select the preferred settlement method and frequency (instant, daily, or custom).",
    heading: "Choose Settlement Preferences::  ",
  },
  {
    image: iconThree,
    alt: "EnKash automates the reconciliation process, providing real-time updates and insights into your financial transactions",
    title:
      " Once set, activate instant settlements and start receiving funds in real time.",
    heading: "Confirm & Activate:  ",
  },
]

const faqData: FAQProps[] = [
  {
    question:
      "What is an instant settlement in a payment gateway, and how does it benefit businesses?",
    answer: [
      {
        heading:
          "Instant Settlement gateway refers to the process of transferring funds from the customer's account to the merchant's account after a successful transaction. ",
      },
      {
        heading:
          "When a customer makes a purchase using a payment gateway with instant settlement, the transaction is initially authorized, and then the funds are settled or transferred to the merchant's account, typically within a certain timeframe.",
      },
    ],
  },
  {
    question: "How do I get started with EnKash’s instant settlements?",
    answer: [
      {
        heading:
          "Visit the EnKash website or contact our customer support team to learn more about getting started with instant settlements.",
      },
    ],
  },
  {
    question: "Is there a minimum transaction amount for instant settlements?",
    answer: [
      {
        heading:
          "No, there is no minimum transaction amount for instant settlements.",
      },
    ],
  },
  {
    question: "Who can benefit from instant settlements?",
    answer: [],
    answerHTML: (
      <div className="mb-4">
        <h4 className={styles.heading}>
          Any business that wants faster access to its cash flow can benefit
          from instant settlements. This includes businesses of all sizes, from
          freelancers and small businesses to large enterprises.
        </h4>
      </div>
    ),
  },
  {
    question: "Is there a waiting period for settlements with EnKash?",
    answer: [
      {
        heading:
          "No, there is no waiting period. EnKash offers super-fast settlements, allowing you to receive your customer payments straight into your bank account every day.",
      },
    ],
  },
]

const secondFaqData = [
  {
    question: " What are the benefits of real-time settlements?",
    answer: [
      {
        heading: "Real-time settlements offer several advantages, including:",
      },
      {
        bullets: [
          "Improved cash flow management: Instant access to funds allows for better financial planning and the ability to seize opportunities promptly.",
          "Enhanced flexibility: With funds available immediately, businesses can react swiftly to changing circumstances and make timely decisions.",
          "Streamlined operations: Real-time settlements reduce administrative burdens associated with tracking and reconciling payments, leading to increased efficiency.",
          "Better customer relations: Prompt settlement of transactions can enhance customer satisfaction and loyalty by providing a seamless payment experience.",
        ],
      },
    ],
  },
  {
    question: " What is the settlement schedule for same-day Settlements?",
    answer: [
      {
        heading:
          "Same-day settlements with EnKash follow a T+0 schedule, meaning funds from transactions are transferred to your designated account on the same day the transaction occurs. This ensures quick and consistent cash flow, allowing you to access your earnings without delay.",
      },
    ],
  },
  {
    question: "How secure are instant settlements?",
    answer: [
      {
        heading:
          "EnKash employs robust security measures and follows industry best practices to ensure the safety and security of your financial transactions.",
      },
    ],
  },
]

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/12/Open-a-virtual-bank-account-now-to-manage-your-business-expenses.jpg",
    imageAlt:
      "Open a Virtual Bank Account for Business and Manage Expense Better",
    title: "Open a Virtual Bank Account for Business and Manage Expense Better",
    date: "Dec 26, 2022",
    description:
      "Virtual bank accounts have been in high demand for the past couple of decades, offering unique advantages to users compared to traditional bank accounts. Open a virtual bank...",
    link: "https://www.enkash.com/resources/blog/benefits-of-virtual-bank-account/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/01/What-is-a-virtual-account-and-how-your-business-can-benefit-for-it.jpg",
    imageAlt:
      "What Is a Virtual Account, and How Your Business Can Benefit from It?",
    title:
      "What Is a Virtual Account, and How Your Business Can Benefit from It?",
    date: "Jan 27, 2023",
    description:
      "Virtual banking has penetrated the large-scale sector, and every small-scale and medium-scale business is also moving towards virtual banking. Virtual bank accounts are trending because of...",
    link: "https://www.enkash.com/resources/blog/what-is-virtual-account-number/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/01/Witness-an-era-of-financial-ease-with-with-virtual-accounts.jpg",
    imageAlt: "Learn How Virtual Accounts Can Benefit Your Business",
    title: "Learn How Virtual Accounts Can Benefit Your Business",
    date: "Jan 09, 2023",
    description:
      "Virtual account allows businesses to initiate seamless financial transactions and maintain track records. Various large, medium, and small-scale businesses are shifting towards...",
    link: "https://www.enkash.com/resources/blog/how-virtual-accounts-can-benefit-your-business/",
  },
]

export { blogData, faqData, secondFaqData, carouselData, productData }
