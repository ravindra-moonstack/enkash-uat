import {
  costControlSavings,
  costControlSavingsIcon,
  enforceApproval,
  EnforceIcon,
  fraudProtection,
  fraudProtectionIcon,
  realTimeExpense,
  realTimeExpenseIcon,
  secureCompliant,
  SecureCompliantIcon,
  streamlinedReimbursement,
  streamlinedReimbursementIcon,
  tabIconFive,
  tabIconFour,
  tabIconOne,
  tabIconThree,
  tabIcontwo,
  wideAcceptanceNetwork,
  wideAcceptanceNetworkIcon,
  fuelCardImg, mealCardImg, purchesCardImg, sassCardImg, termsAndConCardImg, virtualCardImg,
  PettyCashDigitizationImage,
  vendorPaymentImage,
  success,
  itemIcon1,
  itemIcon2,
  itemIcon3,
  itemIcon4,
  itemIcon5,
  itemIcon6
} from "./img"
import { bg1, bg2, bg3, bg4, bg5 } from "../products/vouchers/img"
import { TCardTypes, TStackCardsProp } from "@/src/types"

const otherProductsHeading = [
  { title: "Related", color: "color-black" },
  { title: " Resources", color: "color-black f-4" },
]
const blogData = [
  {
    whiteTitle: "Travel Vouchers",
    description: "Best vouchers for travel & holidays",
    cardImage: bg1,
    link: "/travel",
    discount: "20% OFF",
  },
  {
    whiteTitle: "Food Cards",
    description: "Save more on everyday meals",
    cardImage: bg2,
    link: "/food",
    discount: "10% OFF",
  },
  {
    whiteTitle: "Gift Vouchers",
    description: "Perfect for gifting moments",
    cardImage: bg3,
    link: "/gift",
    discount: "15% OFF",
  },
]

const stackcardData: TStackCardsProp = [
  {
    icon: realTimeExpenseIcon,
    title: "Issue Cards Instantly",
    description:
      "Create physical or virtual cards in seconds from your dashboard. No paperwork. No bank branch visits. Issue cards to employees, vendors, or departments immediately. Cards are accepted nationwide for online and offline business spends.",
    image: realTimeExpense,
    buttonUrl: "sales/?source=prepaid-card",
  },
  {
    icon: fraudProtectionIcon,
    title: "Set Precise Spending Limits",
    description:
      "Set daily, weekly, or monthly limits. Block merchant categories like alcohol, entertainment, or cash withdrawals. Restrict usage to POS, online, or contactless only. Apply geo-fencing to control where cards can be used. Freeze or cancel cards instantly.",
    image: fraudProtection,
    buttonUrl: "sales/?source=prepaid-card",
  },
  {
    icon: streamlinedReimbursementIcon,
    title: "Track Every Transaction in Real Time",
    description:
      "Every swipe shows up immediately on your dashboard. Track spends by employee, department, location, or category. Get instant notifications for all card activity and policy exceptions.",
    image: streamlinedReimbursement,
    buttonUrl: "sales/?source=prepaid-card",
  },
  {
    icon: costControlSavingsIcon,
    title: "Reconcile Automatically",
    description:
      "Match transactions to invoices automatically. Sync with Zoho Books, Tally, QuickBooks, SAP, and other accounting systems. Close your books faster without manual matching.",
    image: costControlSavings,
    buttonUrl: "sales/?source=prepaid-card",
  },
  {
    icon: wideAcceptanceNetworkIcon,
    title: "Get 360° Spend Visibility",
    description:
      "Filter by team, location, merchant, or time period. Export custom reports for audits or month-end reviews. See budget utilization across departments in real time.",
    image: wideAcceptanceNetwork,
    buttonUrl: "sales/?source=prepaid-card",
  },
  {
    icon: EnforceIcon,
    title: "Enforce Approval Workflows",
    description:
      "Set up approval chains based on amount, card type, or department. Maintain full audit trails. Keep finance teams in control while giving employees flexibility.",
    image: enforceApproval,
    buttonUrl: "sales/?source=prepaid-card",
  },
  {
    icon: SecureCompliantIcon,
    title: "Built to Be Secure and Compliant",
    description:
      "All prepaid cards operate on an RBI-compliant PPI framework and PCI-DSS certified infrastructure. Maintain regulatory compliance while keeping every transaction secure, traceable, and audit-ready.",
    image: secureCompliant,
    buttonUrl: "sales/?source=prepaid-card",
  },
]

const progressData = [
  {
    itemArray: ["Meal Card"],
    title: "Meal Card",
    description:
      "Enable tax-saving meal benefits for employees with preloaded, compliant meal cards accepted at food outlets, canteens, and online platforms.",
    icon: tabIconOne,
    bgImage: bg1,
    url: "/meal-card",
  },
  {
    itemArray: ["Fuel Card"],
    title: "Fuel Card",
    description:
      "Optimize your fuel spends with cards restricted to fuel merchants only. Get complete visibility and prevent fuel misuse at the pump.",
    icon: tabIcontwo,
    bgImage: bg2,
    url: "/fuel-card",
  },
  {
    itemArray: ["Digital Marketing Card"],
    title: "Digital Marketing Card",
    description:
      "Manage campaign budgets with dedicated prepaid cards for ad platforms like Google, Meta, and LinkedIn - eliminating overages.",
    icon: tabIconThree,
    bgImage: bg3,
    url: "/digital-marketing-card",
  },
  {
    itemArray: ["Fleet & Logistics Card"],
    title: "Logistics & Supply Chain",
    description:
      "Give your drivers the power to pay without the risk of cash misuse. Track fuel, tolls, and repair spends in real-time.",
    icon: tabIconFour,
    bgImage: bg4,
    url: "/sales/?source=prepaid-card",
    buttonText: "Get Started",
  },
  {
    itemArray: ["Payroll Card"],
    title: "Payroll Card",
    description:
      "Pay employees and gig workers instantly: no bank hassles, no KYC delays. Load salaries, bonuses, or incentives directly to payroll cards.",
    icon: tabIconFive,
    bgImage: bg5,
    url: "/sales/?source=prepaid-card",
    buttonText: "Get Started",
  },
]
const cardType: TCardTypes = [
  {
    titleHtml: "Meal Cards",
    description:
      "Give employees tax-compliant meal benefits without vouchers. Accepted at restaurants, food delivery apps, grocery stores, and canteens across India.",
    cardImage: mealCardImg,
    linkUrl: "/meal-card",
  },
  {
    titleHtml: "Fuel Cards",
    description:
      "Lock cards to fuel stations only. Track vehicle-wise fuel spending. Eliminate cash misuse with drivers. Get detailed reports on mileage and fuel consumption patterns.",
    cardImage: fuelCardImg,
    linkUrl: "/fuel-card",
  },
  {
    titleHtml: "Digital Marketing Cards",
    description:
      "Set fixed budgets for Google Ads, Meta, LinkedIn, and other ad platforms. Prevent campaign overspending. Get alerts when budgets near their limits.",
    cardImage: termsAndConCardImg,
    linkUrl: "/digital-marketing-card",
  },
  {
    titleHtml: "Fleet & Logistics Cards",
    description:
      "Pay for fuel, tolls, repairs, and parking without cash. Give each driver their own card with spending limits you control. Track all fleet expenses in one place.",
    cardImage: virtualCardImg,
    linkUrl: "/fleet-and-logistics-card",
  },
  {
    titleHtml: "Payroll Cards",
    description:
      "Load salaries, bonuses, or incentives directly onto cards. Perfect for gig workers, contract staff, or employees without bank accounts. Instant, secure, zero paperwork.",
    cardImage: purchesCardImg,
    linkUrl: "/payroll-card",
  },

  {
    titleHtml: "Travel & Expense Cards",
    description:
      "Issue cards for business travel with preset budgets. Employees book flights, hotels, meals, and cabs without fronting personal money. Auto-capture all expenses for easy reconciliation.",
    cardImage: sassCardImg,
    linkUrl: "/travel-and-expense-card",
  },
  {
    titleHtml: "Petty Cash Digitization",
    description:
      "Replace messy cash management with prepaid cards. Issue cards to branches, departments, or admin teams. Track office supplies, pantry, and maintenance spends.",
    cardImage: PettyCashDigitizationImage,
    linkUrl: "/petty-cash",
  },
  {
    titleHtml: "Vendor Payments",
    description:
      "Load cards for freelancers, suppliers, or contractors. Control when and where funds can be used. No bank transfers. No payment delays.",
    cardImage: vendorPaymentImage,
    linkUrl: "/vendor-payment",
  },
]

const acceleratedGrowthData = [
  {
    title: "Get a custom quote.",
    icon: success,
  },
  {
    title: "See the platform.",
    icon: success,
  },
  {
    title: "Go live in days.",
    icon: success,
  },
]
const stepsData = [
  {
    stepNumber: "Step 1",
    title: "Configure",
    description: "Define merchants, limits, and usage policies for your closed loop cards.",
  },
  {
    stepNumber: "Step 2",
    title: "Issue Cards",
    description: "Issue physical or virtual cards to employees, partners, or teams.",
  },
  {
    stepNumber: "Step 3",
    title: "Track and Manage",
    description: "Monitor transactions in real time and reconcile automatically.",
  },
]
const headingData = {
  content: [
    { title: "Getting Started ", color: "color-black" },
    { title: "with Prepaid Cards", color: "color-equity-blue" },
  ],
  headingTag: "h2",
  className: "f-5 mb-4 text-center",
}
const counterHeadingData = {
  content: [
    {
      title: "Why Businesses Choose EnKash Prepaid Cards ", color: "color-alternate-grey"
    },
  ],
  headingTag: "h2",
  className: "f-5 mb-3 text-center",
}
const statsData = [
  {
    value: '60',
    label: 'seconds to issue cards',
    animationDuration: 1500,
    prefix: "<"
  },
  {
    value: '100',
    label: 'real-time spend visibility',
    suffix: "%"
  },
  {
    value: 'ZERO',
    label: 'employee reimbursements',
  },
  {
    value: '10',
    suffix: ' Million+',
    label: 'merchant acceptance points'
  }
];

const gridData = [
  {
    id: 1,
    icon: itemIcon1.src,
    title: "Issue cards instantly",
  },
  {
    id: 2,
    icon: itemIcon2.src,
    title: "Capture expenses automatically",
  },
  {
    id: 3,
    icon: itemIcon3.src,
    title: "Match receipts in real time",
  },
  {
    id: 4,
    icon: itemIcon4.src,
    title: "Route approvals by policy",
  },
  {
    id: 5,
    icon: itemIcon5.src,
    title: "Sync to accounting seamlessly",
  },
  {
    id: 6,
    icon: itemIcon6.src,
    title: "Manage everything in one system",
  },
]
export { progressData, stackcardData, blogData, otherProductsHeading, cardType, acceleratedGrowthData, stepsData, headingData, statsData, counterHeadingData, gridData }
