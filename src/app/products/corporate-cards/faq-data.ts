import { TFAQProps } from "@/src/types/faq"

const faqData: TFAQProps[] = [
  {
    question: "Who can get an EnKash Corporate Card?",
    answer: [
      {
        heading:
          "Any registered business — startup, SMB, or enterprise. No personal guarantee, no bank approval process, and no minimum spend threshold. The platform works for a two-card program and scales to thousands of cards across multiple entities.",
      },
    ],
  },
  {
    question: "How quickly are cards issued?",
    answer: [
      {
        heading:
          "Under 60 seconds. EnKash holds its own RBI-authorised PPI license so every card is issued directly on our own infrastructure, never routed through a bank. Most businesses complete KYC online and are issuing cards the same day.",
      },
    ],
  },
  {
    question: "Prepaid or credit — which is right for my business?",
    answer: [
      {
        heading:
          "Prepaid loads funds in advance and eliminates reimbursements entirely — cards can only spend what's loaded. Credit offers a revolving line assessed on your business profile, with no collateral or personal guarantee required. Both run on the same platform with identical controls, visibility, and reconciliation.",
      },
    ],
  },
  {
    question: "Can I issue virtual cards immediately?",
    answer: [
      {
        heading:
          "Yes. Virtual cards are available instantly, single-use or recurring — with spend caps, MCC locks, and channel controls applied from the moment of creation. Cancel in seconds from the dashboard with no process involved.",
      },
    ],
  },
  {
    question: "How does GST reconciliation work?",
    answer: [
      {
        heading:
          "Every transaction is tagged with GST metadata at the point of spend. Export ITC-eligible data in one click or sync directly to your accounting system — no manual classification, no month-end assembly.",
      },
    ],
  },
  {
    question: "What accounting and ERP systems do you integrate with?",
    answer: [
      {
        heading:
          "Tally, SAP, Zoho Books, and QuickBooks directly, with custom export formats and full API access for any other setup. Every transaction syncs reconciliation-ready — no reformatting required.",
      },
    ],
  },
  {
    question: "Can I manage multiple entities from one platform?",
    answer: [
      {
        heading:
          "Yes. Separate card programs per entity or cost centre, distinct controls for each, and consolidated reporting across all of them from one dashboard — with role-based access so each team sees only what they need to.",
      },
    ],
  },
  {
    question: "Are meal and fuel cards structured for tax compliance?",
    answer: [
      {
        heading:
          "Yes. Meal and fuel cards are MCC-locked to compliant merchant categories per RBI and IT Act guidelines. Tax benefits apply automatically at every eligible transaction with no manual categorisation or separate claim process.",
      },
    ],
  },
  {
    question: "What happens when a card is lost or an employee leaves?",
    answer: [
      {
        heading:
          "Block the card in one click from the dashboard — no support ticket, no bank call, no delay. Reissue instantly with existing controls carried over. For employee exits, cards can be bulk-deactivated and reassigned without affecting the program.",
      },
    ],
  },
  {
    question: "How is EnKash different from a bank-issued corporate card?",
    answer: [
      {
        heading:
          "Bank-issued cards run on bank infrastructure — issued in days, controlled through portals that update overnight, and reconciled on the bank's timeline. EnKash owns its full stack through its PPI license: cards in under 60 seconds, controls enforced at the point of spend, and reconciliation that runs automatically with no third party involved. Use case cards — fleet, T&E, digital marketing, SaaS — are configured natively on the same platform, not bolted on as separate products.",
      },
    ],
  },
  {
    question: "How do T&E cards work?",
    answer: [
      {
        heading:
          "T&E cards are configured with per-trip or per-employee limits, MCC restrictions for travel and dining merchants, and receipt capture built into the card workflow. Policy is enforced at the swipe — not reviewed in a month-end expense audit.",
      },
    ],
  },
  {
    question: "How do fleet and logistics cards work?",
    answer: [
      {
        heading:
          "Fleet cards are MCC-locked to fuel, toll, and vehicle maintenance merchants only. Every transaction is categorised automatically at the point of spend, so fleet costs are tracked in real time without manual entry or driver-submitted receipts.",
      },
    ],
  },
  {
    question: "How do SaaS and subscription cards work?",
    answer: [
      {
        heading:
          "Virtual cards issued per vendor with a recurring spend cap tied to the approved subscription value. If a vendor raises their price beyond the approved limit or a subscription is discontinued, the card blocks automatically — no surprise renewals, no manual cancellations required.",
      },
    ],
  },
]

export default faqData
