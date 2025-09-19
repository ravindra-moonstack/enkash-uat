import { TFAQProps } from "@/src/types/faq"

const faqData: TFAQProps[] = [
   {
      question: "What is auto-collect?",
      answer: [
        {
          heading:
            "Auto collect is a streamlined automated payment collection solution, designed to facilitate effortless fund collection via various channels such as UPI,  NEFT payment collection, IMPS, and RTGS. It automates the reconciliation process, providing real-time reconciliation and automated alerts, thereby optimizing financial operations for businesses.",
        },
      ],
    },
    {
      question: "What is Virtual Payment Address (VPA)?",
      answer: [
        {
          heading:
            "A Virtual Payment Address (VPA) is a unique identifier assigned to a customer or branch for collecting payments. It eliminates the need for sharing traditional bank account details and simplifies reconciliation.",
        },
      ],
    },
    {
      question:
        "Who can use the auto-collect solution?",
      answer: [
        {
          heading: "Auto collect is available for businesses of all sizes and types, ranging from single-entity establishments to those with multiple branches or departments. It is tailored to meet the payment collection needs of a wide range of businesses, regardless of their scale or industry.",
        },
      ],
    },
    {
      question: "Can I use EnKash Auto-Collect for multiple branches?",
      answer: [
        {
          heading:
            "Yes! You can create unique virtual accounts for each branch or franchise, ensuring seamless tracking and reconciliation across locations.",
        },
      ],
    },
    {
      question: "Where can I see all the settlements for payments collected via the auto-collect solution?",
      answer: [
        {
          heading:
            "You can view all the settlements for payments that are collected via the auto-collect solution through EnKash’s reporting dashboard. This centralized dashboard offers comprehensive insights into your payment settlements, enabling efficient monitoring and management of your financial transactions. ",
        },
      ],
    },
    {
      question: "How does auto collect enhance efficiency and accuracy while saving time?",
      answer: [
        {
          heading:
            "Auto collect enhances efficiency and accuracy by automating the reconciliation process and providing real-time reconciliation capabilities. This minimizes errors, improves accuracy, and eliminates the need for manual intervention, thereby saving time and streamlining financial operations.",
        },
      ],
    },
    {
      question: "How secure is EnKash Auto-Collect?",
      answer: [
        {
          heading:
            "EnKash uses advanced encryption and complies with payment security standards, ensuring your transactions are safe and secure.",
        },
      ],
    },
    {
      question: "What is the price of EnKash Auto-collect?",
      answer: [
        {
          heading:
            "Connect with our sales team to get pricing information and get a demo of our payment solutions.",
        },
      ],
    },
    {
      question: "How does Auto Collect via UPI work?",
      answer: [
        {
          heading:"Auto Collect via UPI works by sending a collect request to the customer's UPI ID, which they can approve to complete the payment. Businesses can also set up recurring UPI mandates for automated billing.",
        },
      ],
    },
    
]

export const SecondfaqData = [
  {
    question: "Quick Pay Button",
    answer: [
      {
        heading:
          "Perfect for fixed-price payments. Designed for businesses that sell products or services at a set price",
      },
    ],
  },
  {
    question: "Checkout Button",
    answer: [
      {
        heading:
          "Sell multiple items with ease. Tailored for e-commerce businesses to allow customers to select multiple items and quantities effortlessly",
      },
    ],
  },
  {
    question: "Donate Button",
    answer: [
      {
        heading:
          "Let supporters contribute their desired amount. Ideal for NGOs and charitable organizations, allowing supporters to contribute any amount they wish.",
      },
    ],
  },
  {
    question: "Custom Button",
    answer: [
      {
        heading:
          "Add advanced options for tailored use cases. Perfect for businesses with unique payment needs. This button can be configured to match your exact requirements.",
      },
    ],
  },
]

export default faqData
