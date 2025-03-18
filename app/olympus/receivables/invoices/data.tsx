import iconOne from "./img/icon-one.svg";
import iconTwo from "./img/icon-two.svg";
import iconThree from "./img/icon-three.svg";
import iconFour from "./img/icon-four.svg";
import iconFive from "./img/icon-five.svg";
import { FAQProps } from "@/components/faq/faq";

const carouselData = [
  {
    image: iconOne,
    alt: "Create your account on EnKash and add your business details.",
    title: "Create your account on EnKash and add your business details.",
    heading: "Sign Up: ",
  },
  {
    image: iconTwo,
    alt: "Choose or design invoice templates with your branding, payment terms, and logo.",
    title:
      "Choose or design invoice templates with your branding, payment terms, and logo.",
    heading: "Customize Invoice Templates: ",
  },
  {
    image: iconThree,
    alt: "Create automated invoices instantly and send them to clients via your preferred channel.",
    title:
      "Create automated invoices instantly and send them to clients via your preferred channel.",
    heading: "Send Invoices: ",
  },
];

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/12/Processing-Invoices-in-SAP-A-Step-by-Step-Guide.jpg",
    imageAlt: "Processing Invoices in SAP: A Step-by-Step Guide",
    title: "Processing Invoices in SAP: A Step-by-Step Guide",
    date: "Dec 26, 2022",
    description:
      "Every organization needs a systematic process for invoicing. If the payment to the vendor is made on time, it can positively impact your organization’s relationship with the vendor or the supplier...",
    link: "https://www.enkash.com/resources/blog/processing-invoices-in-sap/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/01/Heres-how-iInvoice-processing-makes-everything-easier.jpg",
    imageAlt: "Here’s How Invoice Processing Makes Everything Easier",
    title: "Here’s How Invoice Processing Makes Everything Easier",
    date: "Jan 09, 2023",
    description:
      "Invoice processing includes a complete cycle of receiving the invoice, verifying, reviewing, approving, processing it for payment and keeping a record. Companies often receive multiple invoices...",
    link: "https://www.enkash.com/resources/blog/how-invoice-processing-makes-everything-easier/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/04/How-to-modernize-manual-invoice-processing-with-automation.jpg",
    imageAlt:
      "From Manual to Automation: How to Modernize Your Invoice Processing Workflow",
    title:
      "From Manual to Automation: How to Modernize Your Invoice Processing Workflow",
    date: "Apr 07, 2023",
    description:
      "Invoice processing is a critical component of any organization’s financial operations. However, the traditional manual method of processing invoices can be time-consuming and error-prone...",
    link: "https://www.enkash.com/resources/blog/how-to-modernize-invoice-processing-workflow/",
  },
];

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

export { blogData, carouselData, faqData, secondFaqData };
