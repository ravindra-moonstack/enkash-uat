import { TFAQProps } from "@/src/types/faq"

const faqData: TFAQProps[] = [
  {
    question: "What is workflow management?",
    answer: [
      {
        heading:
          "Workflow management is the process of defining, automating, and optimizing a sequence of tasks or processes to achieve specific business goals. It helps streamline operations and improve productivity",
      },
    ],
  },
  {
    question: "Why is workflow management important?",
    answer: [
      {
        heading:
          "It reduces manual errors, speeds up approvals, ensures accountability, and helps teams stay aligned and efficient.",
      },
    ],
  },
  {
    question: "Who should use workflow management tools?",
    answer: [
      {
        heading:
          "Businesses of all sizes, startups, SMEs, and enterprises can benefit from workflow tools to automate repetitive tasks, manage approvals, and monitor progress.",
      },
    ],
  },
  {
    question: "Can I customize workflows as per my business needs?",
    answer: [
      {
        heading:
          "Yes. Most modern workflow tools offer customizable templates and allow you to create workflows tailored to your processes.",
      },
    ],
  },
  {
    question: "How does workflow automation help my team?",
    answer: [
      {
        heading:
          "It eliminates repetitive manual tasks, ensures deadlines are met, keeps everyone accountable, and frees up time for more strategic work.",
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
