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
    description:
      "Sign up and map all your business locations to a single dashboard.",
    icon: scrollIconOne,
  },
  {
    title: "Add and Auto-Fetch Bills",
    description:
      "Add utility bill details manually or let EnKash auto-fetch bills directly from authorized billers.",
    icon: scrollIconTwo,
  },
  {
    title: "Pay in One Click",
    description:
      "Make single or bulk bill payments instantly with secure and reliable payment rails.",
    icon: scrollIconThree,
  },
  {
    title: "Track & Reconcile",
    description:
      "Track payment status in real time and reconcile bills effortlessly with linked records.",
    icon: scrollIconFour,
  },
]

const allProductSections = [
  {
    title: "Expense Management",
    subtitle: "Manage every spend effortlessly",
    items: [
      {
        title: "Automated Reminders",
        description:
          "Never miss a due date with timely alerts via Bharat Connect.",
        image: crouselIconOne,
      },
      {
        title: "Flexible Payments",
        description:
          "Partial payments, bulk payments, auto-pay, or financing options are at your service.",
        image: crouselIconTwo,
      },
      {
        title: "Security First",
        description:
          "Multi-layer encryption and fraud monitoring ensure safe transactions.",
        image: crouselIconThree,
      },
      {
        title: "Centralized Insights",
        description:
          "One view of all bills, all payments, and all locations, reporting without reconstruction.",
        image: crouselIconFour,
      },
      {
        title: "APIs for Automation",
        description:
          "Seamlessly integrate with your ERP or accounting software.",
        image: crouselIconFive,
      },
      {
        title: "Invoice Management",
        description:
          "Upload multiple invoices in bulk and start receiving payments faster.",
        image: crouselIconFive, // keeping standard icon
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
  { desc: "Monthly Savings*", title: "10 Cr" },
  { desc: "Enterprises", title: "5000+" },
  { desc: "Payment Success Rate", title: "99.99%" },
  { desc: "Monthly Bills Processed", title: "5 Lakhs+" },
]

const integrationData = [
  {
    title: "All Utilities In One Place",
    description:
      "Track and pay electricity, water, gas, broadband, and telecom bills across all locations from a single dashboard.",
    icon: dashboardIconOne,
  },
  {
    title: "Auto-Fetched Bills with Structured Data",
    description:
      "Multiple electricity bills are fetched directly from authorized billers with structured data, including amounts, due dates, billing cycles, and 99+ standardized fields.",
    icon: dashboardIconTwo,
  },
  {
    title: "Location-Level Mapping",
    description:
      "Each bill is tagged to the correct branch or business unit for accurate tracking and reporting.",
    icon: dashboardIconThree,
  },
  {
    title: "Linked Bill Copies with OCR",
    description:
      "Official bill copies are mapped to each bill and payment, with OCR-enabled extraction for faster review and validation.",
    icon: dashboardIconFour,
  },
]

const paymentMethodData = [
  {
    title: "Bulk and Single Payments",
    description:
      "Clear multiple bills together or pay individual bills as needed.",
    icon: paymentIconOne,
  },
  {
    title: "Smart Filtering",
    description:
      "Filter bills by location, provider, or due date before initiating payments.",
    icon: paymentIconTwo,
  },
  {
    title: "Payment–Bill Linkage",
    description:
      "Every payment is automatically linked to its bill and bill copy.",
    icon: paymentIconThree,
  },
  {
    title: "Timely Execution",
    description:
      "Reduce missed due dates and late fees with clear visibility and streamlined workflows.",
    icon: paymentIconFour,
  },
]

const dashboardData = [
  {
    title: "Branch-Level Tagging",
    description:
      "Bills are tagged to their respective locations from the moment they enter the system.",
    icon: locationIconOne,
  },
  {
    title: "Central Finance Control",
    description:
      "Manage business utility bill payments across all locations from one dashboard.",
    icon: locationIconTwo,
  },
  {
    title: "Reduced Branch Dependency",
    description:
      "Eliminate manual bill sharing and follow-ups with local teams.",
    icon: locationIconThree,
  },
  {
    title: "Consistent Workflows",
    description:
      "Apply uniform approval and payment processes across every location.",
    icon: locationIconFour,
  },
]

const rankData = [
  {
    title: "Live Bill Payment Status",
    description: "Track paid, pending, and failed transactions in real time.",
    icon: realIconOne,
  },
  {
    title: "Bills And Payments Together",
    description: "Match bills, payments, and bill copies from a single source.",
    icon: realIconTwo,
  },
  {
    title: "Audit-Ready Records",
    description:
      "Maintain structured, traceable documentation for audits and internal reviews.",
    icon: realIconThree,
  },
  {
    title: "Faster Period Closures",
    description: "Reduce delays during month-end and year-end closing cycles.",
    icon: realIconFour,
  },
]

const approvalData = [
  {
    title: "Maker-Checker Workflows",
    description:
      "Route bills automatically to the right approvers based on rules you define.",
    icon: approvalIconOne,
  },
  {
    title: "Role-Based Access",
    description:
      "Control who can view, approve, or pay bills across locations.",
    icon: approvalIconTwo,
  },
  {
    title: "Bill Copy Review Before Approval",
    description:
      "Approvers can review verified bill copies and OCR-extracted data before sign-off.",
    icon: approvalIconThree,
  },
  {
    title: "Complete Audit Trail",
    description:
      "Track every action taken on a bill for compliance and accountability.",
    icon: approvalIconFour,
  },
]

const centerData = [
  {
    title: "Audit-Ready Bill Copies",
    description:
      "CA-registered and approved bill copies suitable for audits, compliance checks, and expense claims.",
    icon: centerlizeIconOne,
  },
  {
    title: "Fetched from Authorized Sources",
    description:
      "Bill copies are fetched via BBPS partners, DISCOMs, or user uploads when required.",
    icon: centerlizeIconTwo,
  },
  {
    title: "Platform-Integrated Documentation",
    description:
      "Bill copies are auto-generated and linked to each bill and payment within the workflow.",
    icon: centerlizeIconThree,
  },
  {
    title: "Always Accessible from the Dashboard",
    description:
      "View or download bill copies anytime without manual sharing or follow-ups.",
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
