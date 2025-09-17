import { TFAQProps } from "@/src/types/faq"

const faqData: TFAQProps[] = [
  {
    question: "What is an automated payment reminder?",
    answer: [
      {
        heading:
          "EnKash’s automated payment reminder allows businesses to remind their customers about their due payment.",
      },
      {
        heading:
          "Businesses can customize these reminders as per their requirements. They need to upload the invoice, feed in the dates on which the reminder needs to go, along with the embedded payment link, and decide on the channel via which they want to send the reminder to collect the payment.",
      },
    ],
  },
  {
    question: "How to set up an automated payment reminder for my business?",
    answer: [
      {
        heading:
          "Use EnKash’s payment reminder to collect payments from customers. Register on the platform and choose between two types of payment reminders - invoice reminders and automatic reminders.",
      },
      {
        heading:
          "Invoice reminders allow you to access invoices from the dashboard against which payments are due and select them all at once or one after the other to send reminders to the customers.",
      },
      {
        heading:
          "Automated reminders are created when a customer is onboarded. These reminders eliminate the need to manually follow up with the customer as they extract data and dispatch invoices automatically, reminding them of the due dates to make payment.",
      },
    ],
  },
  {
    question: "How to schedule payment reminders with EnKash?",
    answer: [
      {
        bullets: [
          "Login to EnKash",
          "Go to the Collect Payments tab",
          "If the customer is new, define the journey by first registering",
          "Following that, configure the reminder engine. This will automatically send reminders to the customer as per the defined timeline and channel selected",
          "If the invoice is already in the system, select it and send a reminder to the customer from the dashboard",
        ],
      },
    ],
  },
  {
    question: "How do payment reminders work?",
    answer: [
      {
        heading:
          "Payment reminders are automated messages that help businesses collect payments from their customers timely. They facilitate easy payment collection and enable businesses to fulfil their demands related to cash flow and other business processes.",
      },
    ],
  },
  {
    question: "Can we set payment reminders before the due date?",
    answer: [
      {
        heading:
          "Enterprises can define the reminders as per their convenience. They can set reminders for pre-payment and late payments",
      },
    ],
  },
  {
    question: "How to set up an automated payment reminder?",
    answer: [
      {
        heading:
          "Define the reminder timeline;, it could be before or after the due date. Certain businesses give early payment discounts, which can be availed if reminders are received before the date of payment.",
      },
    ],
  },
  {
    question: "How do payment reminders facilitate cash flow in a business?",
    answer: [
      {
        heading:
          "Payment reminders can facilitate cash flow in a business in the following ways:",
      },
      {
        heading:
          "Reducing late payments: Businesses can reduce late payments by reminding customers of their due payments and settling their outstanding amounts instantly.",
      },
      {
        heading:
          "Better customer relationship: Enterprises can establish better customer relationships with timely payments and understand their payment patterns better.",
      },
      {
        heading:
          "Improved accounts receivable: With payment reminders in place, accounts receivables of a business can be accessed and maintained efficiently with easy access to outstanding invoices and identification of the payments due.",
      },
      {
        heading:
          "Cash flow prediction: Businesses can predict their cash flow better and use it for the expansion of the processes with efficient decision-making.",
      },
    ],
  },
]

export const SecondfaqData: TFAQProps[] = [
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
