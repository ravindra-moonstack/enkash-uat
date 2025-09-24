import { TStackCardsProp } from "@/src/types";
import {
  notificationImage,
  optimizedIcon,
  paymentLinkImage,
  paymentOptionImage,
  scrollIconFour,
  scrollIconOne,
  scrollIconThree,
  scrollIconTwo,
  shareImage,
  taskIconFive,
  taskIconFour,
  taskIconOne,
  taskIconThree,
  taskIconTwo,
  crouselIconFive,
  crouselIconThree,
  crouselIconFour,
  crouselIconTwo,
  crouselIconOne
} from "."

const cardsData : TStackCardsProp =  [
  {
    title: "Sign Up and Upload",
    description: "Create your account and add invoices.",
    icon: scrollIconOne,
  },
  {
    title: "Approve",
    description: "Set up approval workflows and process invoices efficiently.",
    icon: scrollIconTwo,
  },
  {
    title: "Pay",
    description:
      "Make payments using your preferred method, including EnKash credit lines.",
    icon: scrollIconThree,
  },
  {
    title: "Track & Report",
    description:
      "Monitor progress and generate insights to improve financial planning.",
    icon: scrollIconFour,
  },
]

const allProductSections=  [
  {
    title: "Customizable Alerts and Notifications",
    subtitle: "Manage every spend effortlessly",
    items: [
      {
        title: "Customizable Alerts and Notifications",
        description:
          "Stay informed with real-time alerts for due dates, pending approvals, and payment statuses, ensuring no task is overlooked.",
        image: crouselIconOne,
      },
      {
        title: "Multi-Channel Invoice Upload",

        description:
          "Add invoices via drag-and-drop, email integration, or API, giving you flexibility in how you manage inputs.",
        image: crouselIconTwo,
      },

      {
        title: "Role-Based Access Control",
        description:
          "Grant specific access rights to users based on their roles, enhancing security and accountability in your workflow.",
        image: crouselIconThree,
      },
      {
        title: "Audit Trail Trackings",

        description:
          "Maintain a clear and detailed history of every action taken on invoices for transparency and audit readiness.",
        image: crouselIconFour,
      },
      {
        title: "Bulk Payment Scheduling",

        description:
          "Handle rent changes, prorated amounts, or additional fees smoothly.",
        image: crouselIconFive,
      },
    ],
  },
]


const allInOnePolicyData : TStackCardsProp =  [
  {
    icon: taskIconOne,
    title: "Centralized Dashboard for Complete Control",
    description:
      "Manage all vendor invoices from a single, intuitive platform designed for maximum efficiency. With end-to-end visibility of the invoice lifecycle, track the status of every invoice to stay on top of your financial obligations.",
    image: paymentLinkImage,
    buttonUrl: "/sales",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconTwo,
    title: "Flexible Approval Processes for Business Needs",
    description:
      "Design workflows that align perfectly with your organizational structure. Easily assign roles, set authorization levels, and create tailored approval hierarchies that ensure compliance without compromising on speed or accuracy.",
    image: shareImage,
    buttonUrl: "/sales",
    maxImageHeight: "305px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "Cash Flow Optimization for Timely Decisions",
    description:
      "Utilize EnKash’s facilitated credit lines to enhance liquidity and maintain smooth operations. Extend payment deadlines strategically while strengthening relationships with vendors through consistent and timely payment processes.",
    image: paymentOptionImage,
    buttonUrl: "/sales",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconFour,
    title: "Effortless ERP System Integration",
    description:
      "Sync EnKash with major ERP platforms like Tally, SAP, and Zoho for seamless data flow. Avoid duplications, save time, and ensure data accuracy with synchronized invoice and payment records that simplify reconciliation.",
    image: notificationImage,
    buttonUrl: "/sales",
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: taskIconFive,
    title: "Detailed Insights Through Advanced Reporting",
    description:
      "Access real-time invoice statuses and generate comprehensive reports with ease. Use actionable data to refine your financial planning, identify trends, and make well-informed decisions for your business growth.",
    image: optimizedIcon,
    buttonUrl: "/sales",
    maxImageHeight: "259px",
  },
];


export { cardsData, allProductSections, allInOnePolicyData }
