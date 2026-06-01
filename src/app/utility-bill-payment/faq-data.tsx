import { TFAQProps } from "@/src/types/faq"

const faqData: TFAQProps[] = [
  {
    question: "What is EnKash Business Utility Bill Payment?",
    answer: [
      {
        heading:
          "A centralized platform to manage the full lifecycle of business utility bills — fetching, tracking, approving, paying, and storing bill copies — from a single dashboard. Built for enterprises and multi-location businesses handling recurring utility bills.",
      },
    ],
  },
  {
    question: "How does EnKash online bill pay services help businesses?",
    answer: [
      {
        heading:
          "EnKash bill pay services reduce manual work, prevent late fees, and improve visibility across locations. By automating bill fetching, approvals, and payments, finance teams avoid multiple portals, manual tracking, and follow-ups, leading to faster closures and better control.",
      },
    ],
  },
  {
    question: "What types of utility bills can businesses pay on EnKash?",
    answer: [
      {
        heading:
          "Businesses can manage and pay a wide range of recurring utility bills, including:",
      },
      {
        bullets: [
          "Pay bulk electricity and power bills (postpaid and prepaid meters)",
          "Water bills",
          "Postpaid mobile and telecom bills",
          "Corporate internet and broadband bills",
          "Gas bills, municipal charges, and DTH services",
        ],
      },
      {
        heading:
          "All BBPS-supported utility categories can be managed from one dashboard.",
      },
    ],
  },
  {
    question: "How does the bill payment process work on EnKash?",
    answer: [
      {
        heading:
          "Bills are uploaded manually or auto-fetched from authorized billers via Bharat Connect. They move through your approval workflow, payments are executed, and status updates in real time. Bill copies are linked automatically. Auto Pay can be enabled for recurring bills.",
      },
    ],
  },
  {
    question: "What is Auto Bill Payment and how does it work?",
    answer: [
      {
        heading:
          "Auto Bill Payment allows businesses to schedule recurring utility payments in advance. Once enabled, bills are paid automatically on the due date, ensuring on-time settlements while retaining full visibility and control.",
      },
    ],
  },
  {
    question: "How are bills fetched automatically?",
    answer: [
      {
        heading:
          "EnKash connects to authorized billers via Bharat Connect and BBPS to fetch bills directly from the source. Bill amount, due date, billing cycle, and the official bill copy are captured together, removing reliance on branch teams or manual uploads.",
      },
    ],
  },
  {
    question: "Where do the bill copies come from? Are they official?",
    answer: [
      {
        heading:
          "Bill copies are retrieved directly from authorized billers through Bharat Connect and BBPS channels. They are official, timestamped, and linked to the correct bill, payment, and location, making them suitable for audits, compliance, and expense validation.",
      },
    ],
  },
  {
    question:
      "How does EnKash handle bills across multiple business locations?",
    answer: [
      {
        heading:
          "Each bill is tagged to its respective branch or unit when it enters the system. Finance teams get a centralized view across all locations, with filters for reporting and reconciliation. Bulk payments allow settling bills for multiple locations in one action.",
      },
    ],
  },
  {
    question: "What payment modes does EnKash support?",
    answer: [
      {
        heading:
          "UPI, net banking, IMPS, NEFT, RTGS, debit cards, and connected banking. Bulk payments and Auto Pay are also supported, depending on configuration.",
      },
    ],
  },
  {
    question: "How secure are payments on EnKash?",
    answer: [
      {
        heading:
          "Payments run on Bharat Connect, India’s RBI-regulated bill payment network. EnKash adds encryption, fraud monitoring, and complete audit logs to ensure secure, traceable transactions.",
      },
    ],
  },
  {
    question:
      "Why should enterprises switch to a centralized bill payment platform?",
    answer: [
      {
        heading:
          "Centralized platforms eliminate fragmented processes across branches. Enterprises gain consolidated visibility, automated bill fetching, approval workflows, real-time payment status, and audit-ready records, helping prevent late fees, service disruptions, and operational inefficiencies.",
      },
    ],
  },
  {
    question: "How does EnKash integrate with ERP and accounting systems?",
    answer: [
      {
        heading:
          "EnKash offers APIs to sync bill data, payment confirmations, and reconciliation records directly with ERP and accounting systems. This removes manual exports and ensures financial reports reflect up-to-date utility payments.",
      },
    ],
  },
]

export default faqData
