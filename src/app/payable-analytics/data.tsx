import { TStackCardsProp } from "@/src/types"
import {
  activationIcon,
  hundredPercentIcon,
  notificationImage,
  paymentLinkImage,
  paymentOptionImage,
  realTimeIcon,
  scrollIconOne,
  scrollIconThree,
  scrollIconTwo,
  shareImage,
  taskIconFour,
  taskIconOne,
  taskIconThree,
  taskIconTwo,
} from "./img"


const benifitsData = [
  { icon: realTimeIcon, title: "Access Real-Time Data" },
  { icon: activationIcon, title: "Analyze Latest Trends" },
  { icon: hundredPercentIcon, title: "Gain Actionable Insights" },
]

const cardsData: TStackCardsProp = [
  {
    title: "Access Dashboard",
    description: "Log in and access the dashboard to view payable analytics.",
    icon: scrollIconOne,
  },
  {
    title: "Data Selection",
    description: "Use filters to select data and generate actionable insights.",
    icon: scrollIconTwo,
  },
  {
    title: "Optimize Decisions",
    description: "Analyze real-time data to make business decisions.",
    icon: scrollIconThree,
  },
]

const allInOnePolicyData: TStackCardsProp = [
  {
    icon: taskIconOne,
    title: "Seamless Data Access",
    description:
      "Easily connect or import data from files, product databases, and external sources—so you can analyze everything in one place without the hassle.",
    image: paymentLinkImage,
    buttonUrl: "/sales",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconTwo,
    title: "Secure Data Sharing",
    description:
      "Access and share data confidently with the right stakeholders while keeping your security and privacy fully intact.",
    image: shareImage,
    buttonUrl: "/sales",
    maxImageHeight: "305px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "Visualize Data with Ease",
    description:
      "Get actionable insights through interactive, easy-to-understand visual reports that make data analysis both intuitive and impactful",
    image: paymentOptionImage,
    buttonUrl: "/sales",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconFour,
    title: "Predict with AI Power",
    description:
      "Leverage AI to forecast trends, run smart analyses, and set intelligent alerts so you can make proactive, data-driven decisions for your business.",
    image: notificationImage,
    buttonUrl: "/sales",
    maxImageHeight: "259px",
    reverse: true,
  },
 
]
export { cardsData, benifitsData, allInOnePolicyData }
