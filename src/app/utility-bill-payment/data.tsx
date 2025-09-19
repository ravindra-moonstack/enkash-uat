import { TStackCardsProp } from "@/src/types"
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
} from "./img"

const cardsData = [
  {
    title: "Onboard in Minutes",
    description: "Sign up and link your business locations to our platform.",
    icon: scrollIconOne,
  },
  {
    title: "Add and Auto-Fetch Bills",
    description:
      "Add utility bill details or let EnKash auto-fetch them for you.",
    icon: scrollIconTwo,
  },
  {
    title: "Pay in One Click",
    description:
      "Make single or bulk payments instantly with robust security measures.",
    icon: scrollIconThree,
  },
  {
    title: "Track & Reconcile",
    description:
      "Monitor all payment statuses and reconcile them effortlessly.",
    icon: scrollIconFour,
  },
]

const allProductSections = [
  {
    title: "Expense Management",
    subtitle: "Manage every spend effortlessly",
    items: [
      {
        title: "Automated Reminders ",
        description: "Never miss a due date with timely alerts.",
        image: crouselIconOne,
      },
      {
        title: "Flexible Payments ",
        description: "Partial payments, bulk payments, or auto-pay options.",
        image: crouselIconTwo,
      },
      {
        title: "Security First ",
        description:
          "Multi-layer encryption and fraud monitoring ensure safe transactions.",
        image: crouselIconThree,
      },
      {
        title: "Centralized Insights",
        description: "Consolidated view of all bills and payment history.",
        image: crouselIconFour,
      },
      {
        title: "APIs for Automation ",

        description:
          "Seamlessly integrate with your ERP or accounting software.",
        image: crouselIconFive,
      },
    ],
  },
]

const allInOnePolicyData: TStackCardsProp = [
  {
    icon: taskIconOne,
    title: "One Dashboard for All Bills",
    description:
      "EnKash brings all your utility bills to one place, whether it’s an electricity bill, water bill, or internet bill. By auto-fetching bill details such as due dates and amounts, the platform reduces manual effort and minimizes errors. With a single dashboard, you gain complete control over your business’s recurring expenses, ensuring seamless management.",
    image: paymentLinkImage,
    buttonUrl: "/sales",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconTwo,
    title: "One-Click Payments",
    description:
      "Simplify the complexity of multiple payments with EnKash’s one-click payment feature. Easily pay several bills simultaneously by filtering them based on location, provider, or due date. This efficiency not only saves time but also makes bulk payment handling a breeze, ensuring you never miss a due date.",
    image: shareImage,
    buttonUrl: "/sales",
    maxImageHeight: "305px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "Multi-Location Management",
    description:
      "Effortlessly manage utility bills across various business locations, including offices, warehouses, and retail outlets. With centralized control, you can consolidate expenses, improve accuracy, and gain better financial visibility. Streamline bill tracking and payments regardless of where your business operates.",
    image: paymentOptionImage,
    buttonUrl: "/sales",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconFour,
    title: "Real-Time Reconciliation",
    description:
      "Stay informed with real-time updates on payment statuses through EnKash’s intuitive dashboard. Generate detailed, custom reports for audits, financial planning, or tracking payment histories. This feature ensures accurate records and eliminates the hassle of manual reconciliations, giving you peace of mind.",
    image: notificationImage,
    buttonUrl: "/sales",
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: taskIconFive,
    title: "Streamlined Approvals",
    description:
      "Optimize your payment process with customizable approval workflows. Assign specific roles and permissions to team members, ensuring compliance and preventing unauthorized transactions. EnKash’s approval system enables transparency, speeds up decision-making, and enhances your organization’s financial governance.",
    image: optimizedIcon,
    buttonUrl: "/sales",
    maxImageHeight: "259px",
  },
]

export { cardsData, allProductSections, allInOnePolicyData }
