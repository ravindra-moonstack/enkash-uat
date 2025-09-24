import {  TStackCardsProp } from "@/src/types"
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
  crouselIconOne,
  crouselIconTwo,
  crouselIconThree,
  crouselIconFour,
  crouselIconFive,
  crouselIconSix,
} from "./img"

const cardsData : TStackCardsProp = [
  {
    title: "Sign Up and Add Vendors",
    description:
      "Create your account and invite vendors to collect their information using digital forms.",
    icon: scrollIconOne,
  },
  {
    title: "Verify and Approve",
    description: "Conduct automated compliance checks and approval processes.",
    icon: scrollIconTwo,
  },
  {
    title: "Collaborate & Pay",
    description:
      "Communicate in real-time and make payments using your preferred mode.",
    icon: scrollIconThree,
  },
  {
    title: "Track & Optimize",
    description:
      "Access detailed reports and improve vendor management efficiency.",
    icon: scrollIconFour,
  },
]

const allProductSections  =  [
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

const policies : TStackCardsProp =  [
  {
    icon: taskIconOne,
    title: "Instant Vendor Onboarding",
    description:
      "Quickly onboard new vendors with minimal effort using EnKash’s one-click invite feature. Collect essential details like PAN, GST, and bank account information through intuitive, pre-set templates. Say goodbye to manual data entry and enjoy a faster, error-free onboarding process that sets up your vendor relationships for success.",
    image: paymentLinkImage,
    buttonUrl: "/sales",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconTwo,
    title: "Effortless Invoice Management",
    description:
      "Simplify invoice handling with EnKash’s centralized dashboard. Easily upload single or bulk invoices and manage them efficiently from a unified platform. Track invoice statuses in real time, reduce errors, and ensure timely processing. This streamlined approach not only saves time but also fosters better vendor relationships and financial accuracy.",
    image: shareImage,
    buttonUrl: "/sales",
    maxImageHeight: "305px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "Flexible Payment Options",
    description:
      "Offer your vendors a variety of payment methods, including UPI, virtual cards, and traditional bank transfers. With EnKash, you can track payment statuses in real-time, ensuring transparency and maintaining trust. Timely payments enhance vendor satisfaction, while flexible options make transactions convenient for all parties involved.",
    image: paymentOptionImage,
    buttonUrl: "/sales",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconFour,
    title: "Advanced Reporting & Insights",
    description:
      "Unlock actionable insights into your vendor management with EnKash’s comprehensive reporting tools. Monitor vendor performance metrics, analyze payment histories, and identify trends that impact your supply chain. Use this data to make informed decisions and optimize operations for better financial outcomes and efficiency.",
    image: notificationImage,
    buttonUrl: "/sales",
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: taskIconFive,
    title: "Customizable Approval Workflows",
    description:
      "Design approval workflows that match your organizational requirements. EnKash allows you to set role-based access, define thresholds, and create flexible hierarchies. Streamline decision-making processes while maintaining strict compliance, ensuring every transaction and vendor activity aligns with your internal policies and business goals.",
    image: optimizedIcon,
    buttonUrl: "/sales",
    maxImageHeight: "259px",
  },
]

export { cardsData, allProductSections, policies }
