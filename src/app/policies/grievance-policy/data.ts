import { payment, prepaid, platform } from "./img"

const tabs = [{ key: "payments" }, { key: "prepaid" }, { key: "platform" }]

const cards = [
  {
    key: "payments",
    description:
      "Quickly resolve payment issues with our clear, compliant grievance process.",
    titleHtml: "Payments",
    cardImage: payment,
    buttonUrl: "/policies/payments/grievance-policy",
  },
  {
    key: "prepaid",
    description:
      "Resolve prepaid card disputes promptly with our transparent escalation process.",
    titleHtml: "Prepaid Program",
    cardImage: prepaid,
    buttonUrl: "/policies/prepaid-program/grievance-policy",
  },
  {
    key: "platform",
    description:
      "Address platform concerns swiftly through our structured grievance resolution system.",
    titleHtml: "Platform",
    cardImage: platform,
    buttonUrl: "/policies/platform/grievance-policy",
  },
]

export { tabs, cards }
