import { TCardTypes, TStackCardsProp } from "@/src/types"
import { EmployeeBenefitStepsProps } from "@/components/employee-benefit-steps/EmployeeBenefitSteps"
import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitIcon5,
  fuelCardImg,
  mealCardImg,
  PettyCashDigitizationImage,
  PolicyIcon1,
  PolicyIcon2,
  PolicyIcon3,
  PolicyIcon4,
  PolicyIcon5,
  PolicyImage1,
  PolicyImage2,
  PolicyImage3,
  PolicyImage4,
  PolicyImage5,
  purchesCardImg,
  sassCardImg,
  sassCardImg2,
  termsAndConCardImg,
  vendorPaymentImage,
  virtualCardImg,
} from "./img"
import { getSalesUrl } from "@/src/utils/getSalesUrl"

const benifitsData = [
  { icon: "/images/ArtboardBg.svg", title: "Tax Efficiency & Savings" },
  { icon: "/images/blue-arrow.svg", title: "Policy Compliance" },
  { icon: "/images/SubtractImg.webp", title: "Real-time Control" },
]
const salesUrl = getSalesUrl("/employee-benefit-multi-wallet")
const policies: TStackCardsProp = [
  {
    icon: PolicyIcon1,
    title: "RBI-Licensed PPI Issuer — the gold standard",
    description:
      "EnKash holds a full Prepaid Payment Instrument (PPI) license from the Reserve Bank of India. Your money and your employees' data are protected by the highest regulatory framework in Indian fintech.",
    image: PolicyImage1,
    buttonUrl: salesUrl,
    maxImageHeight: "248px",
  },
  {
    icon: PolicyIcon2,
    title: "Real-time Spend Control",
    description:
      "Load, freeze, and manage wallets in real time from the EnKash dashboard. Set merchant category controls per wallet type — ensuring benefits are used only as intended.",
    image: PolicyImage2,
    buttonUrl: salesUrl,
    maxImageHeight: "305px",
    reverse: true,
  },
  {
    icon: PolicyIcon3,
    title: "Connects to Your Existing Stack",
    description:
      "Native integrations with leading HRMSs and accounting systems like Darwinbox, Keka, greytHR, Zoho People, SAP SuccessFactors, and all leading Indian payroll systems. Zero data re-entry.",
    image: PolicyImage3,
    buttonUrl: salesUrl,
    maxImageHeight: "243px",
  },
  {
    icon: PolicyIcon4,
    title: "Audit-ready Reporting, Always",
    description:
      "Auto-generate IT-compliant benefit statements, Form 12BA inputs, and wallet-wise spend reports. ITR filing season becomes routine, not a scramble.",
    image: PolicyImage4,
    buttonUrl: salesUrl,
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: PolicyIcon5,
    title: "Pan-India Open Network Acceptance",
    description:
      "Unlike closed-loop systems, EnKash runs on the RuPay network — accepted at 50 lakh+ merchant touchpoints across every state, city, and town in India.",
    image: PolicyImage5,
    buttonUrl: salesUrl,
    maxImageHeight: "259px",
  },
]

const managementCards: TCardTypes = [
  {
    titleHtml: "Fuel Card",
    description:
      "Track and control fuel spends with real-time limits and GST-compliant invoices.",
    cardImage: "/images/fuelCardBg.webp",
    linkUrl: "/fuel-card",
  },
  {
    titleHtml: "Meal Card",
    description:
      "Optimize meal benefits for employees with tax-efficient, policy-controlled spending.",
    cardImage: "/images/mealCardBg.webp",
    linkUrl: "/meal-card",
  },
  {
    titleHtml: "Gift Card",
    description:
      "Manage non-cash gifts and vouchers for employees with automated digital receipts.",
    cardImage: "/images/giftCardBg.webp",
    linkUrl: "/gift-cards",
  },
]

const stepsData = [
  {
    stepNumber: "Step 1",
    title: "Define your policy",
    description:
      "Customise wallet limits for each role and level. EnKash recommends optimal amounts to maximise tax savings within legal limits.",
  },
  {
    stepNumber: "Step 2",
    title: "Upload employee details",
    description:
      "Bulk-import your employee roster via CSV or sync directly with your HRMS (Darwinbox, Keka, greytHR, and more).",
  },
  {
    stepNumber: "Step 3",
    title: "Cards issued instantly",
    description:
      "RuPay cards dispatched to employee addresses. Digital KYC — no branch visits required.",
  },
  {
    stepNumber: "Step 4",
    title: "Load & manage",
    description:
      "Load wallet balances monthly via a single bulk transfer. Real-time dashboard for HR/Finance — track spend, generate reports, and stay audit-ready.",
  },
]
const headingData: EmployeeBenefitStepsProps["heading"] = {
  content: [
    { title: "Up and Running Before Your ", color: "color-black" },
    { title: "Next Payroll Cycle", color: "color-equity-blue" },
  ],
  headingTag: "h2" as const,
  className: "text-center",
}
const introductionCards = [
  {
    value: "5,000+",
    label: "Trust of Businesses",
  },
  { value: "₹1L+", label: "Tax saved per employee, yearly" },
  {
    value: "100%",
    label: "RBI & IT Act compliant",
  },
  {
    value: "2 Cr+",
    label: "Online/offline Merchant touchpoints",
  },
]

const benefitGridData = [
  {
    id: 1,
    icon: benefitIcon1, // use your actual meal icon path
    title: "Food & Meal",
    amount: "₹1,05,600",
    subtitle: "Up to per year",
  },
  {
    id: 2,
    icon: benefitIcon2, // use your actual fuel icon path
    title: "Fuel Wallet",
    amount: "₹84,000",
    subtitle: "Up to per year",
  },
  {
    id: 3,
    icon: benefitIcon3, // use your actual gift icon path
    title: "Gift Wallet",
    amount: "₹15,000",
    subtitle: "Up to per year",
  },
  {
    id: 4,
    icon: benefitIcon4, // use your actual telecom icon path
    title: "Telecom Wallet",
    amount: "Actuals",
    subtitle: "fully exempt",
  },
  {
    id: 5,
    icon: benefitIcon5, // use your actual LTA icon path
    title: "LTA Wallet",
    amount: "Actuals",
    subtitle: "2 journeys / 4-yr block",
  },
]

const walletCards = [
  {
    id: "food-meal",
    icon: benefitIcon1,
    title: "Food & Meal Wallet",
    subtitle: "Turn daily meals into tax-efficient income.",
    description:
      "Move from taxable cash and turn daily meals into tax-efficient income with a structured meal card in India, aligned with meal allowance tax exemption rules. No receipts. No reimbursements.",
    highlights: [
      "Up to ₹1,05,600/year in tax-efficient benefits",
      "Based on policy and usage",
    ],
    position: "top-left" as const,
  },
  {
    id: "gift-reward",
    icon: benefitIcon3,
    title: "Gift & Reward Wallet",
    subtitle: "Reward employees without increasing their tax burden.",
    description:
      "Issue non-cash rewards instantly for milestones and festivals. No vendors. No delays. No operational overhead.",
    highlights: [
      "Tax-free up to ₹15,000/year",
      "Above this, full amount becomes taxable",
    ],
    position: "top-right" as const,
  },
  {
    id: "fuel-conveyance",
    icon: benefitIcon2,
    title: "Fuel & Conveyance Wallet",
    subtitle: "Eliminate reimbursement chaos for business travel.",
    description:
      "Fuel spends happen directly through a controlled wallet. Every transaction is tracked and policy-aligned from the start.",
    highlights: ["Tax-efficient for official use", "As per Section 10(14)"],
    position: "bottom-left" as const,
    textColor: "white" as const,
  },
  {
    id: "telecom-internet",
    icon: benefitIcon4,
    title: "Telecom & Internet Wallet",
    subtitle: "Support work expenses without chasing bills.",
    description:
      "Allocate telecom benefits upfront. Employees pay directly. Finance gets full visibility, no reimbursements needed.",
    highlights: ["Tax-efficient for official usage"],
    position: "bottom-right" as const,
    textColor: "white" as const,
  },
  {
    id: "lta",
    icon: benefitIcon5,
    title: "LTA Wallet",
    subtitle: "Make travel benefits simple and usable.",
    description:
      "Employees use the wallet for eligible travel while the system tracks compliance automatically. No paperwork. No missed claims.",
    highlights: ["Exemption on eligible travel", "As per LTA rules"],
    position: "center" as const,
    textColor: "white" as const,
  },
]

const statisticsData = [
  {
    id: "stat-1",
    stat: "2 Million+",
    label: "Corporate Cards Processed",
  },
  {
    id: "stat-2",
    stat: "₹500Cr+",
    label: "Monthly transactions processed",
  },
  {
    id: "stat-3",
    stat: "36 of 36",
    label: "States & UTs covered",
  },
  {
    id: "stat-4",
    stat: "100%",
    label: "India-only focus",
  },
]
const cardType: TCardTypes = [
  {
    titleHtml: "Fuel Card",
    description:
      "Track and control fuel spends with real-time limits, spend visibility, and GST-compliant invoices.",
    cardImage: fuelCardImg,
    linkUrl: "/fuel-card",
  },
  {
    titleHtml: "Digital Marketing Card",
    description:
      "Simplify ad payments across platforms while staying within budget and preventing overspending.",
    cardImage: sassCardImg,
    linkUrl: "/digital-marketing-card",
  },
  {
    titleHtml: "SaaS Card",
    description:
      "Manage recurring SaaS subscriptions with auto-renewal tracking and vendor-wise expense control.",
    cardImage: sassCardImg2,
    linkUrl: "/saas-card",
  },
  {
    titleHtml: "Payroll Card",
    description:
      "Pay employees, freelancers, or gig workers directly with zero bank dependency or delays.",
    cardImage: purchesCardImg,
    linkUrl: salesUrl,
  },
  {
    titleHtml: "Virtual Card",
    description:
      "Instantly issue secure virtual cards for online purchases, with customizable limits and real-time tracking.",
    cardImage: virtualCardImg,
    linkUrl: salesUrl,
  },
  {
    titleHtml: "Travel & Expense Card",
    description:
      "Streamline business travel spends—set budgets, track usage, and automate travel expense reconciliation.",
    cardImage: termsAndConCardImg,
    linkUrl: "/travel-and-expense-card",
  },
  {
    titleHtml: "Purchase Card",
    description:
      "Centralize vendor and business purchases with approval workflows, spend controls, and GST capture.",
    cardImage: purchesCardImg,
    linkUrl: "/purchase-card",
  },
  {
    titleHtml: "Fleet Card",
    description:
      "Digitize fleet expenses such as fuel, tolls, and repairs, while tracking usage per vehicle or driver.",
    cardImage: vendorPaymentImage,
    linkUrl: salesUrl,
  },
]
const multiWalletProductsData = [
  {
    id: 1,
    title: "For Employers:",
    description: (
      <ul className="mb-0 ps-3" style={{ listStyleType: "disc" }}>
        <li className="mb-2">
          <strong>Manage All Benefits in One Place:</strong> Allocate and manage
          meal, fuel, telecom, gift and travel benefits from one dashboard.
        </li>
        <li className="mb-2">
          <strong>Set Clear Spending Controls:</strong> Define wallet limits and
          ensure each benefit is used only for the right purpose.
        </li>
        <li className="mb-2">
          <strong>Reduce Payroll Work:</strong> Load benefits in bulk and access
          reports for payroll, reconciliation and compliance.
        </li>
        <li className="mb-2">
          <strong>Track Employee Usage:</strong> View wallet balances,
          transactions and benefit utilisation in real time.
        </li>
      </ul>
    ),
    button: {
      connectUrl: salesUrl,
      connectText: "Get Started",
      blueArrow: "",
    },
  },
  {
    id: 2,
    title: "For Employees:",
    description: (
      <ul className="mb-0 ps-3" style={{ listStyleType: "disc" }}>
        <li className="mb-2">
          <strong>Use Multiple Benefits on Single Card:</strong> Access meal,
          fuel, telecom, gift and travel benefits through one RuPay card and
          app.
        </li>
        <li className="mb-2">
          <strong>Pay Easily with UPI:</strong> Scan eligible UPI QR codes and
          pay directly from the relevant benefit wallet.
        </li>
        <li className="mb-2">
          <strong>Get More Value from Your Salary:</strong> Use eligible
          tax-optimised benefits to improve take-home value, subject to
          applicable rules.
        </li>
        <li className="mb-2">
          <strong>Check Balances Anytime:</strong> View available wallet
          balances and past transactions directly from the EnKash app.
        </li>
      </ul>
    ),
    button: {
      connectUrl: salesUrl,
      connectText: "Get Started",
      blueArrow: "",
    },
  },
]

const multiWalletComparisonData = {
  heading: {
    content: [
      { title: "EnKash vs Pluxee vs Zaggle: ", color: "color-black" },
      { title: "Employee Benefit Card Comparison", color: "color-equity-blue" },
    ],
    headingTag: "h2" as const,
    className: "text-center f-5 mb-4",
  },
  description:
    "Compare EnKash, Pluxee and Zaggle across UPI payments, employee benefit wallets, RBI PPI licensing and spend management capabilities.",
  ourColumnLabel: "EnKash",
  competitorColumnLabel: ["Pluxee, formerly Sodexo", "Zaggle"],
  rows: [
    {
      feature: "UPI payments",
      ourValue:
        "Native UPI-on-PPI experience for payments at eligible UPI QR codes across India",
      competitorValue: [
        "QR payments through supported Pluxee acceptance channels, along with card payments",
        "UPI availability may vary by card programme and issuing partner",
      ],
    },
    {
      feature: "RBI PPI licence",
      ourValue: "Direct RBI-authorised PPI issuer with in-house issuance",
      competitorValue: [
        "Direct RBI-authorised PPI issuer",
        "Cards are issued through banking or authorised issuing partners",
      ],
    },
    {
      feature: "Employee benefit wallets",
      ourValue:
        "Meal, fuel, gift, telecom, LTA and other benefits on one multi-wallet card",
      competitorValue: [
        "Meal and multiple employee benefit categories",
        "Multi-category employee benefit and prepaid card programmes",
      ],
    },
    {
      feature: "Card and wallet management",
      ourValue:
        "Real-time wallet loading, controls, blocking and spend visibility from one dashboard",
      competitorValue: [
        "Benefit allocation and card management through the Pluxee platform",
        "Card and spend controls through Zaggle’s SaaS platform",
      ],
    },
    {
      feature: "Solutions beyond employee benefits",
      ourValue:
        "Expense management, corporate cards, petty cash, payables and rewards on one platform",
      competitorValue: [
        "Primarily focused on employee benefits, rewards and engagement",
        "Spend management, employee benefits, corporate cards and SaaS solutions",
      ],
    },
    {
      feature: "Issuing and operating model",
      ourValue:
        "PPI issuance and platform management handled within the EnKash ecosystem",
      competitorValue: [
        "Operates employee benefit programmes through its licensed Indian entity",
        "Platform services may involve Zaggle and its issuing partners",
      ],
    },
    {
      feature: "India focus",
      ourValue:
        "Built for Indian tax rules, UPI payments and business spend requirements",
      competitorValue: [
        "Indian operations supported by a global employee benefits group",
        "India-focused spend management company listed on the NSE",
      ],
    },
    {
      feature: "Fund safety",
      ourValue:
        "Funds managed under RBI requirements applicable to authorised PPI issuers",
      competitorValue: [
        "Funds managed under RBI requirements applicable to authorised PPI issuers",
        "Funds managed under the regulatory framework of the issuing bank or PPI partner",
      ],
    },
    {
      feature: "Best suited for",
      ourValue:
        "Businesses seeking UPI-enabled employee benefits with broader spend management capabilities",
      competitorValue: [
        "Businesses focused primarily on meal, benefits and employee rewards",
        "Businesses seeking employee benefits combined with SaaS-led spend management",
      ],
    },
  ],
}

export {
  managementCards,
  benifitsData,
  introductionCards,
  benefitGridData,
  stepsData,
  policies,
  headingData,
  walletCards,
  statisticsData,
  cardType,
  multiWalletProductsData,
  multiWalletComparisonData,
}
