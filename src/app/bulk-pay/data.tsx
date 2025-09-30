import crouselIconOne from "./img/crouselIconOne.svg"
import crouselIconTwo from "./img/crouselIconTwo.svg"
import crouselIconThree from "./img/crouselIconThree.svg"
import crouselIconFour from "./img/crouselIconFour.svg"
import { TStackCardsProp } from "@/src/types"
import {
  advancedImage,
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
  taskIconSeven,
  taskIconSix,
  taskIconThree,
  taskIconTwo,
} from "./img"

const cardsData: TStackCardsProp = [
  {
    title: "Login",
    description:
      "Login to EnKash and choose the bulk business payment you wish to make.",
    icon: scrollIconOne,
  },
  {
    title: "Upload",
    description:
      "Use pre-defined templates to enter the mandatory details and upload",
    icon: scrollIconTwo,
  },
  {
    title: "Approvals",
    description: "Trigger approval workflows to get necessary approvals.",
    icon: scrollIconThree,
  },
  {
    title: "Make Payment",
    description:
      "Select multiple invoices and make bulk payments using any payment mode",
    icon: scrollIconFour,
  },
]

const allProductSections = [
  {
    title: "Bulk Payout",
    subtitle: "Manage every spend effortlessly",
    items: [
      {
        title: "Recurring Payments Made Easy",
        description:
          "Simplify repeat payments like rent, utilities, and subscriptions with automated schedules.",
        image: crouselIconOne,
      },
      {
        title: "Centralized Payment System ",

        description:
          "Manage all your payouts from a single dashboard, gaining complete visibility and control.",
        image: crouselIconTwo,
      },

      {
        title: "Real-Time Tracking and Alerts",
        description:
          "Stay updated on every transaction with instant notifications and detailed reports.",
        image: crouselIconThree,
      },
      {
        title: "Customizable Approval Workflows",

        description:
          "Maintain compliance and prevent misuse by tailoring approval hierarchies to your organization’s needs.",
        image: crouselIconFour,
      },
    ],
  },
]

const allInOnePolicyData: TStackCardsProp = [
  {
    icon: taskIconOne,
    title: "Save Time and Boost Efficiency",
    description:
      "Spend less time on manual payment processes and optimize cash flow with EnKash. Automate recurring and bulk payments, ensure timely transactions, and eliminate errors using a centralized system that integrates seamlessly with your existing tools and processes.",
    image: paymentLinkImage,
    buttonUrl: "/sales",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconTwo,
    title: "Enhance Vendor Relationships",
    description:
      "Build trust with vendors through consistent on-time payments. Foster better partnerships by maintaining transparency and resolving payment queries faster with a reliable payment system.",
    image: shareImage,
    buttonUrl: "/sales",
    maxImageHeight: "305px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "Strengthen Financial Control",
    description:
      "Gain real-time visibility into your transactions. Monitor payment statuses, generate detailed reports, and stay compliant with customizable approval workflows tailored to your organization’s needs.",
    image: paymentOptionImage,
    buttonUrl: "/sales",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconFour,
    title: "Improve Cash Flow Management",
    description:
      "Ensure smooth operations with faster processing times. Manage recurring expenses like rent, utilities, and vendor payments efficiently to improve cash flow and operational stability.",
    image: notificationImage,
    buttonUrl: "/sales",
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: taskIconFive,
    title: "Seamless Integrations",
    description:
      "Connect EnKash Express Pay with your ERP, accounting software, or HRMS to simplify workflows and eliminate data silos. Enhance productivity with a fully integrated payment solution.",
    image: optimizedIcon,
    buttonUrl: "/sales",
    maxImageHeight: "259px",
  },
  {
    icon: taskIconSix,
    title: "Secure and Reliable Platform",
    description:
      "Keep your business secure with robust fraud detection, data encryption, and multi-layered access controls. Rely on industry-leading uptime and performance for uninterrupted operations..",
    image: secureImage,
    buttonUrl: "/sales",
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: taskIconSeven,
    title: "Customizable Solutions for Your Needs",
    description:
      "Adapt the platform to your unique business requirements. From approval hierarchies to payment scheduling, EnKash Express Pay offers unparalleled flexibility.",
    image: advancedImage,
    buttonUrl: "/sales",
    maxImageHeight: "259px",
  },
]

export { cardsData, allProductSections, allInOnePolicyData }
