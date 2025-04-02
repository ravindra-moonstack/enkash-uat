import { FAQProps } from "@/components/faq/faq";
import Link from "next/link";
import styles from "./page.module.scss";

const faqData: FAQProps[] = [
  {
    question: "Why opt for automated invoice processing software?",
    answer: [
      {
        heading:
          "Automated invoice processing software reduces the time and cost associated with manual invoicing, helps enhance accuracy, and ensures prompt payments. It also eliminates the risk of human errors during manual data entry and calculations.",
      },
    ],
  },
  {
    question: " What do automated reminders in invoicing entail?",
    answer: [
      {
        heading:
          "Automated reminders are notifications sent to customers to prompt them to pay their invoices on time. These reminders can be scheduled to run automatically, reducing the need for labor-intensive manual follow-ups.",
      },
    ],
  },
  {
    question:
      "How does optimizing invoicing processes contribute to improved collections?",
    answer: [
      {
        heading:
          "Optimizing your invoicing processes can lead to timely and accurate invoicing, reducing payment delays and increasing the likelihood of receiving payments on schedule. Ultimately, this improvement in the invoicing process can significantly enhance collections.",
      },
    ],
  },
  {
    question:
      "What's the significance of providing multiple payment options in invoicing?",
    answer: [
      {
        heading:
          "Providing customers with multiple payment options is crucial for improving convenience and satisfaction. It increases the likelihood of receiving timely payments and offers customers the flexibility to choose the payment method that suits them best.",
      },
    ],
  },
  {
    question:
      "In what ways does automated invoice processing enhance invoice management?",
    answer: [
      {
        heading:
          "Automated invoice processing streamlines invoice management, reducing manual efforts, improving accuracy, and ensuring faster payments. This efficiency results in better control over your financial records and more streamlined operations.",
      },
    ],
  },
];

const secondFaqData: FAQProps[] = [
  {
    question: "What does digital invoice processing entail?",
    answer: [
      {
        heading:
          "Digital Invoice Processing involves streamlining invoice uploading, distribution, and management.EnKash's Invoice Feature can assist by automating the entire invoicing process, from uploading to deployment, making it more efficient and error-free for recurring transactions. This translates into saved time and enhanced productivity, which can greatly benefit your business.",
      },
    ],
  },
  {
    question: "How does the process of digital invoicing work?",
    answer: [
      {
        heading:
          "The digital invoicing process scans and sends invoices. It streamlines the invoicing workflow by extracting relevant data using Optical Character Recognition (OCR), recording the same, and sending them to customers electronically.",
      },
    ],
  },
  {
    question:
      "How can I assess and select an automated invoice processing software?",
    answer: [
      {
        heading:
          "Evaluating an automated invoice processing software requires considering factors like efficiency and cost reduction. EnKash's Invoice Feature excels in these aspects by eliminating manual efforts, reducing the likelihood of human error, and reducing costs associated with manual invoicing. ",
      },
    ],
  },
  {
    question:
      "What strategies can I employ to improve the digitization of invoices?",
    answer: [
      {
        heading:
          "To digitize invoices more effectively, you need streamlined processes and cost reduction. EnKash’s Invoice Feature supports this by electronically storing and organizing invoices, making them easy to access. This feature also helps reduce labor, printing, and mailing invoice costs.",
      },
    ],
  },
];
export { faqData, secondFaqData };
