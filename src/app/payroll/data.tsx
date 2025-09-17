import crouselIconOne from "./img/crouselIconOne.svg"
import crouselIconTwo from "./img/crouselIconTwo.svg"
import crouselIconThree from "./img/crouselIconThree.svg"
import crouselIconFour from "./img/crouselIconFour.svg"
import crouselIconFive from "./img/crouselIconFive.svg"
import crouselIconSix from "./img/crouselIconSix.svg"

import {
  advancedImage,
  designedIcon,
  notificationImage,
  optimizedIcon,
  paymentLinkImage,
  paymentOptionImage,
  payrollImg,
  scrollIconOne,
  scrollIconThree,
  scrollIconTwo,
  secureImage,
  shareImage,
  taskIconEight,
  taskIconFive,
  taskIconFour,
  taskIconNine,
  taskIconOne,
  taskIconSeven,
  taskIconSix,
  taskIconThree,
  taskIconTwo,
} from "./img"

const cardsData = [
  {
    title: "Upload Employee Data",
    description:
      "Upload employee data, set approval workflows, and prepare for payroll runs within our intuitive platform.",
    icon: scrollIconOne,
  },
  {
    title: "Review and Approve",
    description:
      "Review and approve payroll runs before initiating payments, ensuring accuracy and compliance.",
    icon: scrollIconTwo,
  },
  {
    title: "Process Payments",
    description:
      "Make secure salary payments using flexible methods such as debit/credit cards, virtual cards, NEFT, IMPS, and more.",
    icon: scrollIconThree,
  },
  {
    title: "Real-Time Tracking",
    description:
      "Gain real-time visibility into payroll data and generate detailed reports for analysis and decision-making.",
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
    title: "Comprehensive Employee Data Management",
    description:
      "Effortlessly handle employee information with EnKash’s HR payroll software, allowing easy uploads, seamless validation, and bulk salary disbursements—all while ensuring compliance. EnKash ensures compliance with regulatory standards, reducing errors and streamlining onboarding processes—all within a user-friendly interface.",
    image: paymentLinkImage,
    buttonUrl: "/sales",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconTwo,
    title: "Secure Salary Account Validation",
    description:
      "Validate salary account details using the penny-drop method, minimizing payment errors and bolstering financial security. Ensure every transaction is accurate and hassle-free.",
    image: shareImage,
    buttonUrl: "/sales",
    maxImageHeight: "305px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "Multi-Branch Salary Disbursement",
    description:
      "Manage payroll across multiple branches effortlessly from a single dashboard. With just a click, initiate accurate salary disbursements for all employees, regardless of location.",
    image: paymentOptionImage,
    buttonUrl: "/sales",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconFour,
    title: "Seamless ERP Integration",
    description:
      "Integrate EnKash’s payroll software seamlessly with your existing ERP systems and banking partners. This integration enables a unified and efficient workflow tailored to your business needs.",
    image: notificationImage,
    buttonUrl: "/sales",
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: taskIconFive,
    title: "Flexible Payment Solutions",
    description:
      "Handle payments for full-time employees, contractors, and interns, covering both regular and off-cycle payroll. Additionally, reimburse employee expenses alongside payroll for added convenience.",
    image: optimizedIcon,
    buttonUrl: "/sales",
    maxImageHeight: "259px",
  },
  {
    icon: taskIconSix,
    title: "Configurable Approval Workflows",
    description:
      "Define approval hierarchies with customizable rules. Automate payroll information routing to designated approvers, ensuring prompt approvals and reduced delays.",
    image: secureImage,
    buttonUrl: "/sales",
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: taskIconSeven,
    title: "Advanced Reporting and Analytics",
    description:
      "Access real-time insights into payroll trends and employee expenses. Generate comprehensive, customizable reports to support data-driven decisions and strategic planning.",
    image: advancedImage,
    buttonUrl: "/sales",
    maxImageHeight: "259px",
  },
  {
    icon: taskIconEight,
    title: "Designed for Startups and SMEs",
    description:
      "Simple and reliable payroll software for small businesses. Easily onboard employees, run accurate payroll, and stay compliant—without the spreadsheet hassle.",
    image: designedIcon,
    buttonUrl: "/sales",
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: taskIconNine,
    title: "Streamline HR Payroll Operations",
    description:
      "A powerful HR payroll solution to automate compliance, simplify salary disbursement, and reduce manual work, ensuring smooth, secure payroll operations.",
    image: payrollImg,
    buttonUrl: "/sales",
    maxImageHeight: "259px",
  },
]

export { cardsData, allProductSections, allInOnePolicyData }
