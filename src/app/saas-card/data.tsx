import {
  costControlSavings,
  costControlSavingsIcon,
  fleetCardImg,
  fraudProtection,
  fraudProtectionIcon,
  fuelCardImg,
  mealCardImg,
  purchesCardImg,
  realTimeExpense,
  realTimeExpenseIcon,
  streamlinedReimbursement,
  streamlinedReimbursementIcon,
  virtualCardImg,
  payrollCardImg,
  sliderOne,
  sliderTwo,
  sliderThree,
  sliderFour,
  firstIcon,
  secondIcon,
  thirdIcon,
  fourthIcon,
} from "./img"

const intantActionData = [
  {
    title: "Instant Card Issuance ",
    description:
      "With our fully digital KYC process, cards can be issued within minutes.",
    icon: firstIcon,
  },

  {
    title: "Define Limits",
    description:
      "Daily, weekly, monthly, and yearly spending limits can be defined for each channel and transaction to manage budgets effectively.",
    icon: secondIcon,
  },
  {
    title: "Real-time Tracking",
    description:
      "Cards can be integrated with corporate financial systems for real-time tracking, reporting, and reconciliation.",
    icon: thirdIcon,
  },
  {
    title: "Card Activation",
    description:
      "These cards can be easily activated. Moreover, they can be blocked and locked remotely in case of any suspicious activity. ",
    icon: fourthIcon,
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
    cardImage: purchesCardImg,
    linkUrl: "/digital-marketing-card",
  },
  {
    titleHtml: "Meal Card",
    description:
      "Access meal cards to give monthly access to food across multiple online, dine-in, and food delivery apps, along with a tax-saving facility.",
    cardImage: mealCardImg,
    linkUrl: "/meal-card",
  },

  {
    titleHtml: "Payroll Card",
    description:
      "Pay employees, freelancers, or gig workers directly with zero bank dependency or delays.",
    cardImage: payrollCardImg,
    linkUrl: "/sales/?source=saas-card",
  },
  {
    titleHtml: "Virtual Card",
    description:
      "Instantly issue secure virtual cards for online purchases, with customizable limits and real-time tracking",
    cardImage: virtualCardImg,
    linkUrl: "/virtual-card",
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
    cardImage: fleetCardImg,
    linkUrl: "/sales/?source=saas-card",
  },
]

const allProductSections = [
  {
    title: "Reconciliation & Policy",
    subtitle: "Control and visibility in real time",
    items: [
      {
        title: "Real-Time Insights & Control",
        description:
          "Track all your SaaS spends instantly for complete visibility and smarter control over expenses.",
        image: sliderOne,
        link: "/payment-button/",
      },
      {
        title: "Your Rules. Your Control.",
        description:
          "Define custom policies, monitor spends, and manage approvals seamlessly with a dashboard that's always within reach.",
        image: sliderTwo,
        link: "/qr-code/",
      },
      {
        title: "Vendor Locking",
        description:
          "Restrict cards to specific SaaS platforms like Zoom, AWS, & Slack.",
        image: sliderThree,
        link: "/auto-collect/",
      },
      {
        title: "Subscription Management ",
        description:
          "Keep a track of active tools, renewal dates, and eliminate duplicate or unused SaaS for efficient management.",
        image: sliderFour,
        link: "/auto-collect/",
      },
    ],
  },
]

const stackcardData = [
  {
    color: "#fff",
    icon: realTimeExpenseIcon,
    title: "Seamless Integration with Your SaaS Stack",
    description:
      "EnKash works effortlessly with all leading, IT-approved tools, giving you unified control and valuable insights across your entire SaaS ecosystem.",
    image: realTimeExpense,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    color: "#eee",
    icon: fraudProtectionIcon,
    title: "Single Dashboard Management",
    description:
      "Stay on top of all your recurring expenses from a single platform. Your subscription spend, past payments, renewal dates, and automated reminders can be managed from the same dashboard.",
    image: fraudProtection,
    buttonUrl: "/sales",
  },
  {
    color: "#fff",
    icon: streamlinedReimbursementIcon,
    title: "Smarter Decisions, Backed by Data",
    description:
      "EnKash SaaS Cards give real-time insights into all your SaaS spends, enabling faster, more informed decisions that drive your business forward.",
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    color: "#eee",
    icon: costControlSavingsIcon,
    title: "Complete Control, Zero Surprises",
    description:
      "With EnKash, effortlessly monitor, analyze, and manage your corporate SaaS expenses while ensuring every spend stays compliant with your internal policies.",
    image: costControlSavings,
    buttonUrl: "/sales",
  },
]

export { allProductSections, cardType, intantActionData, stackcardData }
