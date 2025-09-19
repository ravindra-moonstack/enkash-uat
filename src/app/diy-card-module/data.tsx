import iconOne from "./img/auto-collect.svg"
import iconTwo from "./img/subsccribtion.svg"
import iconThree from "./img/enach.svg"
import iconFour from "./img/benifits-icon.svg"
import iconFive from "./img/audit-ready.svg"
import firstIcon from "./img/icon-one.svg"
import secondIcon from "./img/icon-two.svg"
import thirdIcon from "./img/icon-three.svg"
import fourthIcon from "./img/icon-four.svg"

import {
  costControlSavings,
  costControlSavingsIcon,
  digitalCardImg,
  fleetCardImg,
  fraudProtection,
  fraudProtectionIcon,
  fuelCardImg,
  integrationAudit,
  integrationAuditIcon,
  mealCardImg,
  payrollCarddImg,
  realTimeExpense,
  realTimeExpenseIcon,
  sassCardImg,
  seemlessIntegration,
  seemlessIntegrationIcon,
  streamlinedReimbursement,
  streamlinedReimbursementIcon,
  termsAndConCardImg,
  virtualCardImg,
  wideAcceptanceNetwork,
  wideAcceptanceNetworkIcon,
} from "./img"
import { TStackCardsProp } from "@/src/types"

const intantActionData = [
  {
    title: "Create an Account ",
    description: "Register your business and verify your credentials.",
    icon: firstIcon,
  },

  {
    title: "Customize Cards",
    description:
      "Tailor cards for specific functions with unique spending rules.",
    icon: secondIcon,
  },
  {
    title: "Monitor Usage",
    description: "Use our platform to track spending and maintain control.",
    icon: thirdIcon,
  },
  {
    title: "Make Payments",
    description: "Pay vendors, manage subscriptions, and more with ease.",
    icon: fourthIcon,
  },
]

const spendAnalyticsData = [
  {
    title: "Full Control:",
    description:
      " Manage spending with detailed transaction insights and adjustable limits.",
    icon: iconOne,
  },

  {
    title: "Cost Efficiency:",
    description:
      " Avoid overspending and gain better visibility into expenses.",
    icon: iconTwo,
  },
  {
    title: "Improved Security: ",
    description:
      "Block or disable cards instantly to prevent unauthorized usage.",
    icon: iconThree,
  },
  {
    title: "Vendor Trust:",
    description: " Enable timely payments and improve business relationships.",
    icon: iconFour,
  },
  {
    title: "Audit Ready:",
    description:
      "  Automated processes ensure clear documentation and compliance.",
    icon: iconFive,
  },
]

const cardType = [
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
    cardImage: digitalCardImg,
    linkUrl: "/digital-marketing-card",
  },
  {
    titleHtml: "Saas Card",
    description:
      "Manage recurring SaaS subscriptions with auto-renewal tracking and vendor-wise expense control",
    cardImage: sassCardImg,
    linkUrl: "/saas-card",
  },
  {
    titleHtml: "Payroll Card",
    description:
      "Pay employees, freelancers, or gig workers directly with zero bank dependency or delays.",
    cardImage: payrollCarddImg,
  },
  {
    titleHtml: "Virtual Card",
    description:
      "Instantly issue secure virtual cards for online purchases, with customizable limits and real-time tracking",
    cardImage: virtualCardImg,
    linkUrl: "/virtual-card",
  },
  {
    titleHtml: "Travel & Expense Card",
    description:
      "Streamline business travel spends—set budgets, track usage, and automate travel expense reconciliation.",
    cardImage: termsAndConCardImg,
    linkUrl: "/travel-and-expense-card",
  },
  {
    titleHtml: "Meal Card",
    description:
      "Offer tax-free meal benefits to employees with wide acceptance and full usage transparency.",
    cardImage: mealCardImg,
    linkUrl: "/meal-card",
  },

  {
    titleHtml: "Fleet Card",
    description:
      "Digitize fleet expenses such as fuel, tolls, and repairs, while tracking usage per vehicle or driver.",
    cardImage: fleetCardImg,
  },
]

const stackcardData: TStackCardsProp = [
  {
    
    icon: realTimeExpenseIcon,
    title: "Purpose-Made Cards for Every Need",
    description:
      "Issue cards specifically designed for your unique use cases, such as travel, SaaS, or marketing campaigns. Configure individual card settings to match your organization’s requirements.",
    image: realTimeExpense,
    buttonUrl: "/sales",
  },
  {
    
    icon: fraudProtectionIcon,
    title: "Precise Spending Controls",
    description:
      "Define spending rules for teams or individuals. Customize limits based on categories, amounts, or timeframes to maintain budget discipline.",
    image: fraudProtection,
    buttonUrl: "/sales",
  },
  {
    
    icon: streamlinedReimbursementIcon,
    title: "Real-Time Monitoring",
    description:
      "Track transactions as they happen. Gain instant insights into where and how funds are being used, ensuring better financial decisions.",
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    
    icon: costControlSavingsIcon,
    title: "Built-In Approval Workflows",
    description:
      "Simplify internal processes with predefined approval workflows that align with company policies. Save time and reduce repetitive tasks.",
    image: costControlSavings,
    buttonUrl: "/sales",
  },
  {
    
    icon: wideAcceptanceNetworkIcon,
    title: "Enhanced Vendor Payments",
    description:
      "Ensure timely payments to vendors, strengthening business relationships and unlocking the potential for better payment terms.",
    image: wideAcceptanceNetwork,
    buttonUrl: "/sales",
  },
  {
    
    icon: integrationAuditIcon,
    title: "Integrated Audit Support",
    description:
      "Keep financial operations transparent and compliant with automated reconciliation and comprehensive transaction records.",
    image: integrationAudit,
    buttonUrl: "/sales",
  },
  {
    
    icon: seemlessIntegrationIcon,
    title: "Seamless Integration",
    description:
      "Easily connect with popular accounting tools like Tally and Zoho to simplify data management and reporting.",
    image: seemlessIntegration,
    buttonUrl: "/sales",
  },
]

export { intantActionData, spendAnalyticsData, cardType, stackcardData }
