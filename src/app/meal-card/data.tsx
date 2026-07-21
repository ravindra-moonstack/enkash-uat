import { TStackCardsProp } from "@/src/types"
import {
  costControlSavings,
  costControlSavingsIcon,
  fleetCardImg,
  fraudProtection,
  fraudProtectionIcon,
  fuelCardImg,
  purchesCardImg,
  realTimeExpense,
  realTimeExpenseIcon,
  sassCardImg,
  streamlinedReimbursement,
  streamlinedReimbursementIcon,
  termsAndConCardImg,
  virtualCardImg,
  firstIcon,
  thirdIcon,
  fourthIcon,
  secondIcon,
  payrollCardImg,
  caraouselIcon11,
  caraouselIcon12,
  caraouselIcon13,
  success,
  dataIcon1,
  dataIcon2,
  dataIcon3,
  dataIcon4,
  dataIcon5,
  dataImage1,
  dataImage2,
  dataImage3,
  dataImage4,
  dataImage5,
  EmployeeBenefits,
  EmployeeBenefit1,
  autoCollect,
  subscribtion,
  eNach,
  benfits,
  categoryIcon1,
  categoryIcon2,
  categoryIcon3,
  categoryIcon4,
  categoryIcon5,
  categoryIcon6,
  categoryIcon7,
  categoryIcon8,
} from "./img"
import { CardData } from "@/src/components/management-card"
import { getSalesUrl } from "@/src/utils/getSalesUrl"
const salesUrl = getSalesUrl("meal-card")
const dataSets = [
  {
    iconSrc: dataIcon1,
    imageSrc: dataImage1,
    altText: "Instant Issuance & Reload",
    title: "Instant Issuance & Reload",
    subtitle:
      "Issue physical or virtual meal cards to your entire workforce in minutes. Reload balances individually or in bulk via the EnKash dashboard, with no delays or manual processing.",
  },
  {
    iconSrc: dataIcon2,
    imageSrc: dataImage2,
    altText: "Real-Time Spend Dashboard",
    title: "Real-Time Spend Dashboard",
    subtitle:
      "Track spending by employee, team, or department in real time. Generate detailed reports, monitor utilisation, and identify patterns, all from one unified view with no end-of-month surprises.",
  },
  {
    iconSrc: dataIcon3,
    imageSrc: dataImage3,
    altText: "Instant Block & Replace",
    title: "Instant Block & Replace",
    subtitle:
      "Employees can instantly block lost cards and request replacements. Zero liability on reported lost cards; no waiting, no paperwork.",
  },
  {
    iconSrc: dataIcon4,
    imageSrc: dataImage4,
    altText: "MCC-Based Spend Controls",
    title: "MCC-Based Spend Controls",
    subtitle:
      "Restrict transactions to approved food and grocery merchant categories at the transaction level, not just as a policy. Set channel limits across POS, online, and contactless. Spend cannot slip outside defined categories by design.",
  },
  {
    iconSrc: dataIcon5,
    imageSrc: dataImage5,
    altText: "ERP-Ready Integrations",
    title: "ERP-Ready Integrations",
    subtitle:
      "Native integrations with SAP, Tally, and Zoho. Your finance workflow doesn't need to change because EnKash fits into what you already use.",
  },
]

const intantActionData = [
  {
    stepNumber: "Step 1",
    title: "Sign Up and KYC",
    description: "Log in to EnKash or register using a valid mobile number.",
  },
  {
    stepNumber: "Step 2",
    title: "Issuance",
    description: "Issue meal cards to employees with preloaded funds.",
  },
  {
    stepNumber: "Step 3",
    title: "Alerts",
    description: "Notify employees via SMS/email about card activation.",
  },
  {
    stepNumber: "Step 4",
    title: "Card Activation",
    description: "Employees must complete KYC to activate their meal cards.",
  },
]

const cardType: CardData[] = [
  {
    whiteTitle: "Fuel Card",
    description:
      "Track and control fuel spends with real-time limits, spend visibility, and GST-compliant invoices.",
    cardImage: fuelCardImg,
    linkUrl: "/fuel-card",
    theme: "black",
  },
  {
    whiteTitle: "Digital Marketing Card",
    description:
      "Simplify ad payments across platforms while staying within budget and preventing overspending.",
    cardImage: purchesCardImg,
    linkUrl: "/digital-marketing-card",
    theme: "black",
  },
  {
    whiteTitle: "SaaS Card",
    description:
      "Manage recurring SaaS subscriptions with auto-renewal tracking and vendor-wise expense control.",
    cardImage: sassCardImg,
    linkUrl: "/saas-card",
    theme: "black",
  },
  {
    whiteTitle: "Payroll Card",
    description:
      "Pay employees, freelancers, or gig workers directly with zero bank dependency or delays.",
    cardImage: payrollCardImg,

    theme: "black",
  },
  {
    whiteTitle: "Virtual Card",
    description:
      "Instantly issue secure virtual cards for online purchases, with customizable limits and real-time tracking",
    cardImage: virtualCardImg,
    linkUrl: "/virtual-card",
    theme: "black",
  },
  {
    whiteTitle: "Travel & Expense Card",
    description:
      "Streamline business travel spends—set budgets, track usage, and automate travel expense reconciliation.",
    cardImage: termsAndConCardImg,
    linkUrl: "/travel-and-expense-card",
    theme: "black",
  },

  {
    whiteTitle: "Purchase Card",
    description:
      "Centralize vendor and business purchases with approval workflows, spend controls, and GST capture.",
    cardImage: purchesCardImg,
    linkUrl: "/purchase-card",
    theme: "black",
  },
  {
    whiteTitle: "Fleet Card",
    description:
      "Digitize fleet expenses such as fuel, tolls, and repairs, while tracking usage per vehicle or driver.",
    cardImage: fleetCardImg,
    theme: "black",
  },
]

const stackcardData: TStackCardsProp = [
  {
    icon: realTimeExpenseIcon,
    title: "Tax Savings Made Simple",
    description: `With Meal Cards*, employees can receive up to ₹1,05,600 
annually in tax-free meal benefits by utilizing tax exemptions under Section 17(2)(viii) of the Income Tax Act, 1961. This benefit not only increases take-home pay but also helps businesses boost employee satisfaction and retention by providing tangible financial advantages.`,
    image: realTimeExpense,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    icon: fraudProtectionIcon,
    title: "Wide Acceptance",
    description: `Our prepaid Meal Cards are accepted across a vast network of outlets, making them a versatile tool for daily needs. From supermarkets for grocery shopping to food delivery platforms like Swiggy and Zomato, as well as restaurants, cafes, and food courts nationwide, the card ensures hassle-free transactions anywhere employees prefer.`,
    image: fraudProtection,
    buttonUrl: "/sales",
  },
  {
    icon: streamlinedReimbursementIcon,
    title: "Secure and Hassle-Free",
    description: `Security is a priority with Meal Cards*. Employees can instantly block their cards if they are lost and get replacements without delay. With zero liability on reported lost cards, users enjoy peace of mind. Additionally, the paperless system ensures all transactions are trackable, reducing risks and promoting transparency.`,
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    icon: costControlSavingsIcon,
    title: "Easy Management for Employers",
    description: `EnKash simplifies meal benefit distribution for businesses with a streamlined, one-time issuance process. Corporate can reload balances in real-time, track spending patterns, and generate detailed reports through an intuitive dashboard, saving time and reducing administrative overhead.`,
    image: costControlSavings,
    buttonUrl: "/sales",
  },
]

const statsData = [
  {
    value: 105600,
    label: "Annual Tax-Free Benefit Per Employee",
    prefix: "₹",
    animate: true,
  },
  {
    value: 8800,
    label: "Monthly Tax-Free Meal Limit",
    prefix: "₹",
    animate: true,
  },
  {
    value: 2,
    label: "Merchant Outlets Across India",
    suffix: " Cr+",
    animate: true,
  },
]

const allProductSections = [
  {
    items: [
      {
        title: "UPI-based Scan & Pay",
        description:
          "Works at any UPI-enabled food or grocery merchant — restaurants, cafes, kirana stores, food courts, or online. No friction, no extra steps.",
        image: caraouselIcon11,
      },
      {
        title: "Wide Acceptance",
        description:
          "Accepted at 500000+ outlets across India. Works on Swiggy, Zomato, Blinkit, and all major food delivery platforms. Built on RuPay rails.",
        image: caraouselIcon12,
      },
      {
        title: "Physical and Virtual Cards",
        description:
          "Employees who prefer tapping or swiping can use their physical card. Remote or online-first employees get a virtual card, issued instantly, usable immediately.",
        image: caraouselIcon13,
      },
    ],
  },
]
const mealBenefitUpgradeData = [
  {
    icon: success,
    title: "Tax-exempt under Section 17(2)(viii) of the Income Tax Act",
  },
  {
    icon: success,
    title: "₹8,800 per month tax-free limit per employee",
  },
  {
    icon: success,
    title: "Effective under the new Income Tax Rules from April 1, 2026",
  },
  {
    icon: success,
    title: "Zero change to your payroll cost",
  },
]

// ============================================================
// DATA CONFIGS — Edit content here without touching components
// ============================================================

// ─── MealCardComparison ─────────────────────────────────────
const mealCardComparisonData = {
  heading: {
    content: [
      {
        title: "The Only Meal Card Platform That Gives You Complete Ownership",
        color: "color-black f-5",
      },
    ],
    headingTag: "h2" as const,
  },
  ourColumnLabel: "EnKash",
  competitorColumnLabel: "Competitors",
  rows: [
    {
      feature: "Issuance Model",
      ourValue: "Own RBI PPI License",
      competitorValue: "Bank-led / co-branded",
    },
    {
      feature: "Card Issuance Speed",
      ourValue: "Instant & Digital",
      competitorValue: "Dependent on bank timelines",
    },
    {
      feature: "UPI-Enabled Payments",
      ourValue: "Yes, Scan & Pay ready",
      competitorValue: "No",
    },
    {
      feature: "MCC Restrictions",
      ourValue: "Configurable per transaction",
      competitorValue: "Policy-based, not enforced",
    },
    {
      feature: "Dashboard & Analytics",
      ourValue: "Unified real-time view",
      competitorValue: "Post-spend reporting only",
    },
    {
      feature: "ERP Integration",
      ourValue: "SAP, Tally, Zoho ready",
      competitorValue: "Requires custom setup",
    },
    {
      feature: "Tax Compliance",
      ourValue: "Auto-categorized",
      competitorValue: "Policy-driven",
    },
    {
      feature: "Customizable Workflows",
      ourValue: "Role-based, granular",
      competitorValue: "Limited flexibility",
    },
    {
      feature: "Control & Independence",
      ourValue: "Full ownership, no dependency",
      competitorValue: "Bank or third-party dependent",
    },
  ],
  ctaButton: {
    label: "Book a Demo to See the Difference",
    href: salesUrl,
  },
}

// ─── AcceptedEverywhere ─────────────────────────────────────
// NOTE: Icons are JSX — import from the component file or pass inline SVGs.
// This config provides text/metadata; icons are managed inside the component by default.
const acceptedEverywhereData = {
  heading: {
    content: [
      { title: "Accepted Everywhere Employees ", color: "color-black f-5" },
      { title: "Eat, Order, and Shop", color: "color-equity-blue f-5" },
    ],
    headingTag: "h2" as const,
  },
  // To customize categories, override the `categories` prop with your icons + labels.
  autoplayInterval: 3000,
}

// ─── BenefitsCards ──────────────────────────────────────────
const benefitsCardsData = {
  heading: {
    content: [
      {
        title: "Benefits That Work for Your Business and Your People",
        color: "color-black-1f f-5",
      },
    ],
    headingTag: "h2" as const,
    className: "f-5",
  },
  cards: [
    {
      imageUrl: EmployeeBenefits.src,
      imageAlt: "For Employers",
      cardLabel: "For Employers",
      points: [
        {
          text: "Restructure CTC to deliver more value without increasing payroll cost",
        },
        {
          text: "Convert taxable allowances into tax-efficient benefits, compliant",
        },
        {
          text: "Replace paper coupons and reimbursements with a fully digital, audit-ready system on one dashboard",
        },
        {
          text: "Issue physical or virtual cards instantly to your entire workforce with zero delays or paperwork",
        },
      ],
      ctaButton: {
        label: "Book a Demo",
        href: salesUrl,
      },
    },
    {
      imageUrl: EmployeeBenefit1.src,
      imageAlt: "For Employees",
      cardLabel: "For Employees",
      points: [
        {
          text: "Take home more from the same CTC through smarter structuring",
        },
        {
          text: "Access funds instantly with no reimbursements, bills, or waiting",
        },
        {
          text: "Use across 5,00,000+ food and grocery outlets, online and offline",
        },
        {
          text: "Pay your way: tap, swipe, scan any UPI QR, or order online",
        },
      ],
      ctaButton: {
        label: "Book a Demo",
        href: salesUrl,
      },
    },
  ],
}
const customCategories = [
  {
    label: "Restaurants & Cafes",
    icon: categoryIcon1,
  },
  {
    label: "Supermarkets & Grocery Stores",
    icon: categoryIcon2,
  },
  {
    label: "Food Delivery Apps (Swiggy, Zomato, Blinkit)",
    icon: categoryIcon3,
  },
  {
    label: "Corporate Cafeterias",
    icon: categoryIcon4,
  },
  {
    label: "Bakeries",
    icon: categoryIcon5,
  },
  {
    label: "Kirana Stores",
    icon: categoryIcon6,
  },
  {
    label: "UPI-Enabled Merchants Nationwide",
    icon: categoryIcon7,
  },
  {
    label: "Food Courts",
    icon: categoryIcon8,
  },
]
export {
  dataSets,
  intantActionData,
  cardType,
  stackcardData,
  statsData,
  allProductSections,
  mealBenefitUpgradeData,
  mealCardComparisonData,
  acceptedEverywhereData,
  benefitsCardsData,
  customCategories,
}
