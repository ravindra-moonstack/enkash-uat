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
  dashboardIconOne,
  dashboardIconTwo,
  dashboardIconThree,
  dashboardIconFour,
  paymentIconOne,
  paymentIconTwo,
  paymentIconThree,
  paymentIconFour,
  locationIconOne,
  locationIconTwo,
  locationIconThree,
  locationIconFour,
  realIconOne,
  realIconTwo,
  realIconThree,
  realIconFour,
  approvalIconOne,
  approvalIconFour,
  approvalIconThree,
  approvalIconTwo,
  centerlizeIconOne,
  centerlizeIconTwo,
  centerlizeIconThree,
  centerlizeIconFour,
} from "./img"

const cardsData: TStackCardsProp = [
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
    title: " One click payment ",
    description:
      "Simplify the complexity of multiple payments with EnKash’s one-click payment feature. Easily pay several bills simultaneously by filtering them based on location, provider, or due date. Ideal for businesses making bulk commercial bill payments and multi-location corporate bill payment cycles.This efficiency not only saves time but also makes bulk payment handling a breeze, ensuring you never miss a due date.",
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

const benifitsData = [
  { desc: "Monthly Savings*", title: "10 cr" },
  { desc: "Enterprises", title: "500+" },
  { desc: "Payment Success Rate", title: "99.99%" },
  { desc: "Monthly Bills Processed", title: "3 lakhs+" },
]

const integrationData = [
  {
    title: "All Utilities in One View",
    description:
      "Track electricity, water, internet, gas, and telecom bills from one centralized dashboard.",
    icon: dashboardIconOne,
  },
  {
    title: "Auto-Fetched Bill Details",
    description:
      "View bill amounts, due dates, and billing cycles without manual entry or branch dependency.",
    icon: dashboardIconTwo,
  },
  {
    title: "Location-Wise Mapping",
    description:
      "Each bill is tagged to the correct branch or business location for clear and accurate tracking.",
    icon: dashboardIconThree,
  },
  {
    title: "Linked Bill Copies",
    description:
      "Access official bill copies directly from the dashboard, mapped to each bill and its respective location.",
    icon: dashboardIconFour,
  },
]

const paymentMethodData = [
  {
    title: "Bulk and Single Payments",
    description:
      "Pay multiple utility bills together or clear individual bills when needed, all from one platform.",
    icon: paymentIconOne,
  },
  {
    title: "Smart Filtering",
    description:
      "Filter bills by location, service provider, or due date before initiating payments for better control.",
    icon: paymentIconTwo,
  },
  {
    title: "Payment-Bill Linking",
    description:
      "Every payment is linked to the original bill and its bill copy, ensuring complete traceability.",
    icon: paymentIconThree,
  },
  {
    title: "Timely Payments",
    description:
      "Reduce missed due dates and late fees with a streamlined, on-time payment execution process.",
    icon: paymentIconFour,
  },
]

const dashboardData = [
  {
    title: "Branch-Level Tagging",
    description:
      "Tag every bill and bill copy to its respective branch or business unit for accurate tracking.",
    icon: locationIconOne,
  },
  {
    title: "Central Oversight",
    description:
      "Manage utility bills and payments across all locations from a single finance dashboard.",
    icon: locationIconTwo,
  },
  {
    title: "Reduced Branch Dependency",
    description:
      "Eliminate manual sharing of bill copies and payment details from local teams or vendors.",
    icon: locationIconThree,
  },
  {
    title: "Consistent Processes",
    description:
      "Apply a standardized billing and payment workflow across all locations for better control.",
    icon: locationIconFour,
  },
]

const rankData = [
  {
    title: "Live Payment Status",
    description:
      "Track paid, pending, and failed utility payments in real time for complete visibility.",
    icon: realIconOne,
  },
  {
    title: "Bills and Payments in One Place",
    description:
      "Reconcile using bill details, payment data, and linked bill copies from a single, unified view.",
    icon: realIconTwo,
  },
  {
    title: "Audit-Ready Records",
    description:
      "Maintain structured, well-mapped records that are always ready for audits and internal reviews.",
    icon: realIconThree,
  },
  {
    title: "Faster Period Closures",
    description:
      "Reduce delays during month-end or year-end reconciliation with streamlined payment tracking.",
    icon: realIconFour,
  },
]

const approvalData = [
  {
    title: "Maker-Checker Workflows",
    description:
      "Route utility bills automatically to the right approvers based on predefined rules and workflows.",
    icon: approvalIconOne,
  },
  {
    title: "Role-Based Access",
    description:
      "Control who can view, approve, or make payments on bills across branches and locations.",
    icon: approvalIconTwo,
  },
  {
    title: "Bill Copy Review Before Approval",
    description:
      "Approvers can review verified bill copies directly before providing final sign-off.",
    icon: approvalIconThree,
  },
  {
    title: "Complete Audit Trail",
    description:
      "Track every action taken on a bill—from submission to payment—for compliance and accountability.",
    icon: approvalIconFour,
  },
]

const centerData = [
  {
    title: "Auto-Fetched from Authorized Sources",
    description:
      "Bill copies are automatically fetched from authorized sources via Bharat Connect and BBPS partners.",
    icon: centerlizeIconOne,
  },
  {
    title: "Payment-Linked Bill Copies",
    description:
      "Each bill copy is mapped to the exact payment, billing cycle, and business location for clear traceability.",
    icon: centerlizeIconTwo,
  },
  {
    title: "Audit and Compliance Ready",
    description:
      "Use verified and structured bill copies confidently for audits and internal compliance checks.",
    icon: centerlizeIconThree,
  },
  {
    title: "Always Accessible",
    description:
      "View or download official bill copies anytime directly from the centralized dashboard.",
    icon: centerlizeIconFour,
  },
]

export {
  cardsData,
  allProductSections,
  allInOnePolicyData,
  benifitsData,
  rankData,
  dashboardData,
  paymentMethodData,
  integrationData,
  approvalData,
  centerData,
}
