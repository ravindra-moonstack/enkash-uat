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

const cardsData : TStackCardsProp =  [
  {
    title: "Workflow Outline",
    description:
      "Identify the key tasks, decision points, and stakeholders involved in your business process. Outline the flow from start to finish.",
    icon: scrollIconOne,
  },
  {
    title: "Design & Automate the Workflow",
    description:
      "Use EnKash to build your process with a drag-and-drop builder. Set triggers, assign roles, add deadlines, and automate approvals or notifications.",
    icon: scrollIconTwo,
  },
  {
    title: "Track, Improve & Scale",
    description:
      "Monitor workflow performance with real-time dashboards and reports. Identify bottlenecks, gather feedback, and optimize as needed. As you grow, easily replicate or scale your workflows.",
    icon: scrollIconThree,
  },
]

const workflowPolicies : TStackCardsProp =  [
  {
    icon: taskIconOne,
    title: "Integration with Existing Tools",
    description:
      "Seamlessly connect with CRMs, ERPs, email platforms, payment gateways, and more.",
    image: paymentLinkImage,
    buttonUrl: "/sales/",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconTwo,
    title: "Task Assignment & Routing",
    description:
      "Automatically assign tasks to the right people based on roles, rules, or logic.",
    image: notificationImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "Approval Flows & Accessibility",
    description:
      "Customizable multi-level approvals for payments, documents, requests, etc. Define user roles, visibility rules, and access levels for data security and accountability.",
    image: shareImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
  },
  {
    icon: taskIconFour,
    title: "Predict with AI Power",
    description:
      "Leverage AI to forecast trends, run smart analysis, and set intelligent alerts so you can make proactive, data-driven decisions for your business.",
    image: paymentOptionImage,
    buttonUrl: "/sales/",
    maxImageHeight: "305px",
    reverse: true,
  },
]

export { cardsData, workflowPolicies }
