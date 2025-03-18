import { FAQProps } from "@/components/faq/faq";

import iconOne from "./img/icon-one.svg";
import iconTwo from "./img/icon-two.svg";
import iconThree from "./img/icon-three.svg";
import iconFour from "./img/icon-four.svg";
import { CarouselData } from "@/components/carousel/how-does-carousel";

const carouselData: CarouselData["carouselData"] = [
  {
    image: iconOne,
    alt: "Generate QR Code: Use EnKash dashboard or API to create a QR code for your business",
    title: "Use EnKash dashboard or API to create a QR code for your business",
    heading: "Generate QR Code: ",
  },
  {
    image: iconTwo,
    alt: "Display and Share: Print it for your storefront, share it digitally, or include it on invoices.",
    title:
      "Print it for your storefront, share it digitally, or include it on invoices.",
    heading: "Display and Share: ",
  },
  {
    image: iconThree,
    alt: "Accept Payments: Customers scan the code using their preferred UPI app or wallet.",
    title: "Customers scan the code using their preferred UPI app or wallet.",
    heading: "Accept Payments: ",
  },
  {
    image: iconFour,
    alt: "Track and Reconcile: Automatically match payments with orders and generate detailed reports.",
    title:
      "Automatically match payments with orders and generate detailed reports.",
    heading: "Track and Reconcile: ",
  },
];

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
];

const faqData: FAQProps[] = [
  {
    question: "What is the difference between a static and dynamic QR code?",
    answer: [
      {
        heading: "The difference between a static and a dynamic QR code is:",
        bullets: [
          "Static QR Code: A static QR code is linked to your business account and remains constant. You can display this code at your checkout counter, on receipts, or even in marketing materials.",
          "Dynamic QR Code: This code generates unique codes for each transaction, perfect for online payments. This allows you to capture specific invoice details for easy reconciliation.",
        ],
      },
    ],
  },
  {
    question: "Can I use QR codes for online transactions?",
    answer: [
      {
        heading:
          "Yes, our QR codes can be integrated into your e-commerce platforms for seamless online payments.",
      },
    ],
  },
  {
    question: "Is there a limit to the number of QR codes I can generate?",
    answer: [
      {
        heading:
          "No, you can create as many QR codes as needed for different products or services.",
      },
    ],
  },
  {
    question: "Are there any transaction fees associated with QR codes?",
    answer: [
      {
        heading:
          "EnKash offers transparent pricing plans. Please refer to our website or contact our sales team for details.",
      },
    ],
  },
];

export { blogData, faqData, carouselData };
