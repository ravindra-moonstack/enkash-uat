import {
  costControlSavings,
  costControlSavingsIcon,
  fraudProtection,
  fraudProtectionIcon,
  realTimeExpense,
  realTimeExpenseIcon,
  streamlinedReimbursement,
  streamlinedReimbursementIcon,
  tabIconFive,
  tabIconFour,
  tabIconOne,
  tabIconThree,
  tabIcontwo,
  wideAcceptanceNetwork,
  wideAcceptanceNetworkIcon,
} from "./img"
import { bg1, bg2, bg3, bg4, bg5 } from "../products/vouchers/img"
import { TStackCardsProp } from "@/src/types"

const stackcardData: TStackCardsProp = [
  {
    icon: realTimeExpenseIcon,
    title: "Enjoy Ultimate Control",
    description:
      "Block merchant types, set daily/weekly/monthly spend limits, and restrict payment modes (ATM, POS, Online) - all in minutes.",
    image: realTimeExpense,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    icon: fraudProtectionIcon,
    title: "Instantly Issue & Reload Cards",
    description:
      "Issue cards digitally to teams or individuals. Load or top up in one click via your centralized dashboard.",
    image: fraudProtection,
    buttonUrl: "/sales",
  },
  {
    icon: streamlinedReimbursementIcon,
    title: "Real-Time Visibility",
    description:
      "Track every swipe the moment it happens. Spot anomalies, analyze trends, and take corrective action instantly.",
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    icon: costControlSavingsIcon,
    title: "Get 360° Spend Analytics",
    description:
      "Get 360° reporting on who spent what, where, and why. Slice and dice by department, location, or category.",
    image: costControlSavings,
    buttonUrl: "/sales",
  },
  {
    icon: wideAcceptanceNetworkIcon,
    title: "Seamlessly Reconcile",
    description:
      "Auto-categorize spends, attach invoices, and sync with your accounting system. Close your books faster—without chasing receipts.",
    image: wideAcceptanceNetwork,
    buttonUrl: "/sales/?source=expense_management",
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

export { progressData, stackcardData }
