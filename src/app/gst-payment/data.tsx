import crouselIconOne from "./img/crouselIconOne.svg"
import crouselIconTwo from "./img/crouselIconTwo.svg"
import crouselIconThree from "./img/crouselIconThree.svg"
import crouselIconFour from "./img/crouselIconFour.svg"
import crouselIconFive from "./img/crouselIconFive.svg"
import crouselIconSix from "./img/crouselIconSix.svg"

import { notificationImage, paymentLinkImage, paymentOptionImage, scrollIconOne, scrollIconThree, scrollIconTwo, shareImage, taskIconFour, taskIconOne, taskIconThree, taskIconTwo } from "."

const cardsData = [
  {
    title: "Login",
    description: "Log in to EnKash portal",
    icon: scrollIconOne,
  },
  {
    title: "Upload",
    description: "Upload your GST challan details",
    icon: scrollIconTwo,
  },
  {
    title: "Pay",
    description: "Make payment via multiple payment options",
    icon: scrollIconThree,
  },
]

const allProductSections = [
  {
    title: "Expense Management",
    subtitle: "Manage every spend effortlessly",
    items: [
      {
        title: "Recurring Billing Setup",
        description:
          "Easily schedule recurring rent payments aligned with your rental agreements.",
        image: crouselIconOne,
      },
      {
        title: "Payment Notifications ",

        description:
          "Both tenants and landlords get instant alerts on payment status, ensuring transparency.",
        image: crouselIconTwo,
      },

      {
        title: "Split Payment Options ",
        description:
          "Divide rent across multiple payers or payment modes effortlessly.",
        image: crouselIconThree,
      },
      {
        title: "Customizable Payment Schedules",

        description:
          "Tailor payment dates to fit your cash flow without hassle.",
        image: crouselIconFour,
      },
      {
        title: "Dynamic Rent Adjustments",

        description:
          "Handle rent changes, prorated amounts, or additional fees smoothly.",
        image: crouselIconFive,
      },
      {
        title: "Detailed Rental Insights",

        description:
          "Access monthly rent reports and analytics to track trends and expenses.",
        image: crouselIconSix,
      },
    ],
  },
]

const allInOnePolicyData = [
  {
    icon: taskIconOne,
    title: "Never Miss a GST Payment Deadline Again",
    description:
      "Stay on top of your GST payment deadlines with automatic reminders that alert you well in advance. The intuitive approval flow ensures that all payments are processed on time, preventing last-minute confusion or delays. You’ll never have to worry about missing a crucial deadline, reducing the risk of fines and penalties.",
    image: paymentLinkImage,
    buttonUrl: "/sales",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconTwo,
    title: "Clear and Concise Approval Process",
    description:
      "With EnKash, every payment goes through a well-structured approval workflow, ensuring that only valid payments are made. Our system ensures that all checks and validations are carried out before any transaction is approved. This transparent process reduces the risk of unauthorized payments and helps maintain a high level of compliance across your organization.",
    image: shareImage,
    buttonUrl: "/sales",
    maxImageHeight: "305px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "Centralized Monitoring",
    description:
      "Gain full visibility into your GST payments with a centralized dashboard that consolidates data from across your company. This feature allows you to track payments, approval statuses, and records from one convenient location, providing a complete picture of your tax liabilities and streamlining your tax management process.",
    image: paymentOptionImage,
    buttonUrl: "/sales",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconFour,
    title: "Audit-Ready Records",
    description:
      "EnKash automatically converts your GST challans into digital records that are organized and easily accessible. This ensures that you are always audit-ready, with records available for future reference. By maintaining a clear digital trail, you can avoid the hassle of paper records and reduce the time spent on audits, making the process more efficient and organized.",
    image: notificationImage,
    buttonUrl: "/sales",
    maxImageHeight: "259px",
    reverse: true,
  },
];

export { cardsData, allProductSections, allInOnePolicyData }
