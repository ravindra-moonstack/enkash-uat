import crouselIconOne from "./img/crouselIconOne.svg"
import crouselIconTwo from "./img/crouselIconTwo.svg"
import crouselIconThree from "./img/crouselIconThree.svg"
import crouselIconFour from "./img/crouselIconFour.svg"
import crouselIconFive from "./img/crouselIconFive.svg"
import crouselIconSix from "./img/crouselIconSix.svg"

import {
  notificationImage,
  optimizedIcon,
  paymentLinkImage,
  paymentOptionImage,
  scrollIconFour,
  scrollIconOne,
  scrollIconThree,
  scrollIconTwo,
  secureImage,
  shareImage,
  taskIconFive,
  taskIconFour,
  taskIconOne,
  taskIconSix,
  taskIconThree,
  taskIconTwo,
} from "./img"

const cardsData = [
  {
    title: "Add Invoices",
    description:
      "Upload invoices in bulk, or sync them directly from your accounting software.",
    icon: scrollIconOne,
  },

  {
    title: "Approve with Ease",
    description:
      "Set up approval workflows, assign roles, and get real-time notifications.",
    icon: scrollIconTwo,
  },
  {
    title: "Make Payments",
    description:
      "Select payment options and process payments in just a few clicks.",
    icon: scrollIconThree,
  },
  {
    title: "Reconcile Instantly",
    description: "Track payment statuses and generate detailed reports.",
    icon: scrollIconFour,
  },
]

const allProductSections = [
  {
    title: "Expense Management",
    subtitle: "Manage every spend effortlessly",
    items: [
      {
        title: "Automated Workflows",
        description:
          "Save hours with automated invoice uploads, approval workflows, and payment processing.",
        image: crouselIconOne,
      },
      {
        title: "Accurate Compliance",
        description:
          "Ensure TDS deductions and tax filings are done accurately and on time.",
        image: crouselIconTwo,
      },

      {
        title: "Real-Time Tracking",
        description:
          "Get instant updates on payment statuses to stay in control.",
        image: crouselIconThree,
      },
      {
        title: "Flexible Payment Options",
        description:
          "Choose UPI, NEFT, RTGS, or cards to pay vendors conveniently.",
        image: crouselIconFour,
      },
      {
        title: "Secure Transactions",
        description:
          "Advanced encryption and fraud monitoring keep your payments safe.",
        image: crouselIconFive,
      },
      {
        title: "Customizable Reports",
        description:
          "Generate reports tailored to your financial planning and audit needs.",
        image: crouselIconSix,
      },
    ],
  },
]

const allInOnePolicyData = [
  {
    icon: taskIconOne,
    title: "Pay Vendors in Seconds",
    description:
      "Simplify vendor payments with multiple payment options such as UPI, NEFT, RTGS, or cards. With EnKash, you can settle invoices instantly while ensuring secure transactions. No more delays or manual follow-ups—just fast, reliable payments that strengthen your vendor relationships. Efficient management of vendor payables ensures faster invoice settlements and stronger vendor relationships.",
    image: paymentLinkImage,
    buttonUrl: "/sales",
    maxImageHeight: "250px",
  },
  {
    icon: taskIconTwo,
    title: "Eliminate Manual Hassles",
    description:
      "Say goodbye to cumbersome spreadsheets and manual errors. EnKash automates the entire process—from uploading invoices to setting payment reminders. With built-in TDS compliance and auto-validation, you can ensure every payment is accurate, on time, and fully compliant with regulations, leaving your team to focus on growth.",
    image: shareImage,
    buttonUrl: "/sales",
    maxImageHeight: "305px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "Seamless Integration",
    description:
      "Integrate EnKash seamlessly with leading ERPs like Tally, QuickBooks, and Zoho. This ensures your accounts payable system is always synchronized, saving time on manual data entry. Automatically pull invoices, update payment statuses, and maintain an organized workflow that fits effortlessly into your existing setup.",
    image: paymentOptionImage,
    buttonUrl: "/sales",
    maxImageHeight: "202px",
  },
  {
    icon: taskIconFour,
    title: "Speed Up Approvals",
    description:
      "Empower your team to approve payments faster with EnKash’s customizable workflows. Define approval hierarchies, assign roles, and get instant notifications for pending tasks. Whether you're in the office or on the go, you can approve vendor payments securely from any device, keeping your business agile.",
    image: notificationImage,
    buttonUrl: "/sales",
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: taskIconFive,
    title: "Comprehensive Reconciliation",
    description:
      "Ensure your books are always audit-ready with EnKash’s automatic reconciliation features. Match invoices to payments, generate detailed reports, and eliminate discrepancies effortlessly. This streamlined process not only improves accuracy but also saves valuable time for your finance team.",
    image: optimizedIcon,
    buttonUrl: "/sales",
    maxImageHeight: "259px",
  },
  {
    icon: taskIconSix,
    title: "End-to-End Security",
    description:
      "Protect every transaction with enterprise-grade security measures. EnKash uses multi-layered encryption, advanced fraud monitoring, and secure bank account validation to safeguard your data and payments. With compliance built into the platform, you can trust that your vendor payments are in safe hands.",
    image: secureImage,
    buttonUrl: "/sales",
    maxImageHeight: "252px",
    reverse: true,
  },
]

export { cardsData, allProductSections, allInOnePolicyData }
