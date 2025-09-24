import crouselIconOne from "./img/crouselIconOne.svg"
import crouselIconTwo from "./img/crouselIconTwo.svg"
import crouselIconThree from "./img/crouselIconThree.svg"
import crouselIconFour from "./img/crouselIconFour.svg"

import {
  notificationImage,
  optimizedIcon,
  paymentLinkImage,
  paymentOptionImage,
  secureImage,
  shareImage,
  taskIconFive,
  taskIconFour,
  taskIconOne,
  taskIconSix,
  taskIconThree,
  taskIconTwo,
} from "./img"


const allProductSections = [
  {
    title: "Expense Management",
    subtitle: "Manage every spend effortlessly",
    items: [
      {
        title: "End-to-End ",
        title2: "Automation",
        description: "Eliminate manual tasks across finance operations",
        image: crouselIconOne,
      },
      {
        title: "Fast ",
        title2: "Deployment",
        description: "Start using powerful features with minimal setup",
        image: crouselIconTwo,
      },

      {
        title: "Real-Time  ",
        title2: "Visibility ",
        description: "Gain insights across collections, expenses, and payouts",
        image: crouselIconThree,
      },
      {
        title: "Enterprise-Grade ",
        title2: "Security",
        description: "Bank-level security and full regulatory compliance",
        image: crouselIconFour,
      },
    ],
  },
]

const policiesData = [
  {
    icon: taskIconOne,
    title: "Collect Payments with Ease and Efficiency",
    description:
      "Accept payments anywhere, anytime with our powerful and flexible solutions. Whether you're an online business, retailer, or service provider, we enable you to offer multiple payment modes and frictionless checkout experiences.",
    image: paymentLinkImage,
    buttonUrl: "/products/collect-payments",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconTwo,
    title: "Make Business Payments Without Any Hassle",
    description:
      "Say goodbye to fragmented banking portals and manual errors. We empower you to handle all your business payouts from a single dashboard, with advanced controls and automated workflows.",
    image: shareImage,
    buttonUrl: "/products/make-payments/",
    maxImageHeight: "305px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "Issue Smart Corporate Cards for Every Use Case",
    description:
      "Empower your teams with purpose-driven cards and real-time controls. From travel and marketing to SaaS and fleet management, we offer the most diverse range of corporate cards.",
    image: paymentOptionImage,
    buttonUrl: "/products/corporate-cards/",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconFour,
    title: "Automate Expense Management & Control Business Spend",
    description:
      "Track, approve, and analyze every rupee spent, without spreadsheets. Our intelligent expense management system gives finance teams total control, from expense creation to budgeting and reimbursements.",
    image: notificationImage,
    buttonUrl: "/products/expense-management/",
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: taskIconFive,
    title: "Boost Morale with Strategic Rewards & Incentives",
    description:
      "Recognize performance and drive engagement through meaningful rewards. We make it easy to run reward programs for employees, sales channels, and partners, all from one platform.",
    image: secureImage,
    buttonUrl: "/products/rewards/",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconSix,
    title: "Offer 400+ Brand Vouchers That Everyone Loves",
    description:
      "Delight teams and partners with instant access to India’s most popular brands. Our voucher catalog makes gifting fast, flexible, and memorable.",
    image: optimizedIcon,
    buttonUrl: "/products/vouchers/",
    maxImageHeight: "259px",
    reverse: true,
  },
]

export { allProductSections, policiesData }
