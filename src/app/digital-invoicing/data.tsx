import { TStackCardsProp } from "@/src/types"
import {
  notificationImage,
  paymentLinkImage,
  paymentOptionImage,
  scrollIconOne,
  scrollIconThree,
  scrollIconTwo,
  shareImage,
  taskIconFour,
  taskIconOne,
  taskIconThree,
  taskIconTwo,
} from "./img"

const cardsData: TStackCardsProp = [
  {
    title: "Sign up",
    description: "Create your account on EnKash and add your business details.",
    icon: scrollIconOne,
  },
  {
    title: "Customize Invoice Templates",
    description:
      "Choose or design invoice templates with your branding, payment terms, and logo.",
    icon: scrollIconTwo,
  },
  {
    title: "Send Invoices",
    description:
      "Create invoices instantly and send them to clients via your preferred channel.",
    icon: scrollIconThree,
  },
]

const allInOnePolicies: TStackCardsProp = [
  {
    icon: taskIconOne,
    title: "OCR Technology for Efficiency",
    description:
      "With EnKash, you can digitally upload your invoices, which are scanned using OCR technology. This helps save time and reduces the risk of human error.",
    image: paymentLinkImage,
    buttonUrl: "/sales/",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconTwo,
    title: "Better Cash Flow",
    description:
      "Digital invoices can be processed quickly, meaning your business can get paid faster and have better cash flow.",
    image: notificationImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "Eliminates Manual Errors",
    description:
      "Digital invoices can help reduce manual errors. This can help your business avoid costly disputes and delays in payment.",
    image: shareImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
  },
  {
    icon: taskIconFour,
    title: "Tracking via Dashboard",
    description:
      "On EnKash, invoices can be easily tracked and monitored, making it easier to identify outstanding invoices and improve collections.",
    image: paymentOptionImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
    reverse: true,
  },
]

export { allInOnePolicies, cardsData }
