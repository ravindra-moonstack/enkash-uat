import { FAQProps } from "@/components/faq/faq"
import Link from "next/link"
import { space } from "@/common/constant"

const faqData: FAQProps[] = [
  {
    question: "What is a subscription management platform?",
    answer: [],
    answerHTML: (
      <div>
        <h4 className="mb-3 mt-2">
          <b>Customization:</b> Businesses can customize the subscription
          management as per their requirements and save costs accordingly..{" "}
        </h4>
        <h4 className="mb-3">
          <b>Easy integration:</b> Enterprises can easily integrate with EnKash
          to manage their subscriptions efficiently.
        </h4>
        <h4 className="mb-3">
          <b>Single dashboard access:</b> Easy access to a user-friendly
          dashboard to track invoices, check customer history, and understand
          their behavior.{" "}
        </h4>
        <h4>
          <b>Recurring payments: </b>
          Define recurring payments for your customers with
          <Link href="https://www.enkash.com/" target="_blank">
            {`${space}invoice generation ${space}`}
          </Link>
        </h4>
        <h4 className="mb-4">
          <b> Automated invoice generation:</b> Businesses can
          <Link
            href="https://www.enkash.com/digital-invoicing/"
            target="_blank"
          >
            {`${space} automate invoice generation ${space}`}
          </Link>
          for recurring payments by defining the timeline and frequency for
          their customers.
        </h4>
        <h4 className="mb-3">
          <b>Customer management: </b>EnKash helps manage customers efficiently
          by providing them with timely reminders, automated recurring invoices,
          and easy communication.
        </h4>
      </div>
    ),
  },
  {
    question: "What are the benefits of using subscription management systems?",
    answer: [
      {
        heading:
          "Automates recurring invoices: EnKash’s subscription management system facilitates recurring invoices as it automatically sends invoices to customers each month as per the defined timeline.",
      },
      {
        heading:
          "Enables seamless payment: Businesses can send reminders to their customers with the help of subscription management. The need to follow up with customers manually for payment is eliminated with automation.Cost saving with customization: Enterprises can customize their subscription management as per their needs. This enables them to decide on integration at their own cost.",
      },
      {
        heading:
          "Cost saving with customization: Enterprises can customize their subscription management as per their needs. This enables them to decide on integration at their own cost.",
      },
      {
        heading:
          "Access to automatic reports: It becomes easy to track new customers and existing subscribers along with their transaction history on a single platform. This facilitates decision-making in a business.",
      },
    ],
  },
  {
    question: "Are there any subscription alerts?",
    answer: [],
    answerHTML: (
      <div>
        <h4 className="mb-3 mt-2">
          Automated subscriptions enable businesses to{" "}
          <Link href="https://www.enkash.com/bulk-collect/" target="_blank">
            {`${space} track and collect payments ${space}`}
          </Link>
          for their product or service automatically with various payment
          gateways. In case, a customer doesn’t have sufficient funds, they will
          be automatically notified.
        </h4>
      </div>
    ),
  },
  {
    question: "How does EnKash subscription management help my business?",
    answer: [
      {
        heading: "EnKash’s subscription management enables businesses:",
      },
      {
        bullets: [
          "Automate their recurring bills, saving time and effort",
          "Improve their cash flow management",
          "Enhance their customer retention by offering flexible subscription plans ",
          "Reduce their manual errors with automated invoicing and payment collection",
          "Gain insights into subscription performance and customer behaviour",
          "Simplify upgrades, downgrades, and plan changes for customers ",
          "Boost operational efficiency by integrating with existing systems",
          "Boost operational efficiency by integrating with existing systems",
        ],
      },
    ],
  },
  {
    question: "Is it possible to customize subscription payments?",
    answer: [
      {
        heading:
          "Businesses can customize subscription payments according to their industry standards, customers and needs like cash flow.",
      },
      {
        heading:
          "If they need cash flow quarterly, they can define collections from customers in that way.",
      },
    ],
  },
  {
    question: "How does an automated subscription work?",
    answer: [
      {
        heading:
          "Automated subscriptions allow businesses to track and collect payments for their product or service automatically with various payment gateways.",
      },
      {
        heading:
          "In case, a customer doesn’t have sufficient funds, they will be automatically notified.",
      },
    ],
  },
  {
    question:
      "How does subscription management system help in customer retention?",
    answer: [
      {
        heading:
          "A subscription management platform allows customization of subscriptions based on customer preferences and their history. ",
      },
      {
        heading:
          "This enables a unique and customizable experience for the customer that meets their expectations. This helps in customer retention; making them feel valued and preferred.",
      },
    ],
  },
]

const secondFaqData: FAQProps[] = [
  {
    question: "How does EnKash subscription management help my business? ",
    answer: [
      {
        heading:
          "Customization: Businesses can customize the subscription management as per their requirements and save costs accordingly.",
      },
      {
        heading:
          "Easy integration: Enterprises can easily integrate with EnKash to manage their subscriptions efficiently.",
      },
      {
        heading:
          "Single dashboard access: Easy access to a user-friendly dashboard to track invoices, check customer history, and understand their behavior.",
      },
      {
        heading:
          "Recurring payments: Define recurring payments for your customers with EnKash’s subscription management.",
      },
      {
        heading:
          "Automated invoice generation: Businesses can automate invoice generation for recurring payments by defining the timeline and frequency for their customers.",
      },
      {
        heading:
          "Customer management: EnKash helps manage customers efficiently by providing them with timely reminders, automated recurring invoices, and easy communication.",
      },
    ],
  },
  {
    question: " Can we customize subscription payments? ",
    answer: [
      {
        heading:
          "Businesses can customize subscription payments as per their industry standards, their customers and business needs like cash flow. If they need cash flow quarterly, they can define collections from customers in that way. ",
      },
    ],
  },
  {
    question: " How automated subscription works?",
    answer: [
      {
        heading:
          "Automated subscriptions enable businesses to track and collect payments for their product or service automatically with various payment gateways. In case, a customer doesn’t have sufficient funds, they will be automatically notified.",
      },
    ],
  },
  {
    question:
      "How does subscription management software help in customer retention? ",
    answer: [
      {
        heading:
          "Subscription management software allows customization of subscriptions based on customer preferences and their history. This enables a unique and customizable experience for the customer that meets their expectations. This helps in customer retention; making them feel valued and preferred.",
      },
    ],
  },
]

export { faqData, secondFaqData }
