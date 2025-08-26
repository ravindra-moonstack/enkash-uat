import Link from "next/link"

const faqData = [
  {
    question: "Why opt for automated invoicing?",
    answer: [
      {
        heading:
          "Automated invoicing reduces the time and cost associated with manual invoicing, helps enhance accuracy, and ensures prompt payments. It also eliminates the risk of human errors during manual data entry and calculations.",
      },
    ],
  },
  {
    question: "What do automated reminders in invoicing entail?",
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
  {
    question: "What does digital invoice processing entail?",
    answer: [
      {
        heading:
          "Digital invoice processing involves streamlining invoice uploading, distribution, and management. Olympus's Invoice Feature can assist by automating the entire invoicing process, from uploading to deployment, making it more efficient and error-free for recurring transactions. This translates into saved time and enhanced productivity, which can greatly benefit your business.",
      },
    ],
  },
  {
    question: "How does the process of digital invoicing work?",
    answer: [
      {
        heading:
          "The digital invoicing process scans and sends invoices. It streamlines the invoicing workflow by extracting relevant data using Optical Character Recognition (OCR), recording the same, and sending it to customers electronically.",
      },
    ],
  },
  {
    question:
      "How can I assess and select an automated invoice processing software?",
    answer: [
      {
        heading:
          "Evaluating an automated invoice processing software requires considering factors like efficiency and cost reduction. Olympus's invoice feature excels in these aspects by eliminating manual efforts, reducing the likelihood of human error, and reducing costs associated with manual invoicing.",
      },
    ],
  },
  {
    question:
      "What strategies can I employ to improve the digitization of invoices?",
    answer: [],
    answerHTML: (
      <div className="my-2">
        <p>
          To
          <Link
            className="mx-1"
            href="https://www.enkash.com/resources/blog/e-invoicing-under-gst/"
            target="_blank"
          >
            digitize invoices
          </Link>
          {`more effectively, you need streamlined processes and cost reduction. Olympus's invoice feature supports this by electronically storing and
          organizing invoices, making them easy to access. This feature also
          helps reduce labor, printing, and mailing invoice costs.`}
        </p>
      </div>
    ),
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
