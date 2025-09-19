import { TStackCardsProp } from "@/src/types"
import {
  costControlSavings,
  costControlSavingsIcon,
  digitalCardImg,
  fleetCardImg,
  fraudProtection,
  fraudProtectionIcon,
  fuelCardImg,
  mealCardImg,
  realTimeExpense,
  realTimeExpenseIcon,
  termsAndConCardImg,
  sassCardImg,
  streamlinedReimbursement,
  streamlinedReimbursementIcon,
  virtualCardImg,
  wideAcceptanceNetwork,
  wideAcceptanceNetworkIcon,
  payrollCardImg,
  sliderOne,
  sliderTwo,
  sliderThree,
  sliderFour,
  sliderFive,
  firstIcon,
  secondIcon,
  thirdIcon,
  fourthIcon,
} from "./img"

const intantActionData = [
  {
    title: "Simplify Procurement ",
    description:
      "Issue purchase cards to authorized employees for quick, secure purchasing.",
    icon: firstIcon,
  },

  {
    title: "Set Limits",
    description:
      "Customize limits based on employee roles, departments, or project needs.",
    icon: secondIcon,
  },
  {
    title: "Track Expenses",
    description:
      "View detailed reports and track spending across departments with real-time insights.",
    icon: thirdIcon,
  },
  {
    title: "Optimize Decisions",
    description:
      "Use spending data to inform purchasing decisions and improve supplier terms.",
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
    cardImage: payrollCardImg,
    linkUrl: "/sales/?source=prepaid-card",
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
    linkUrl: "/sales/?source=prepaid-card",
  },
]

const allProductSections = [
  {
    title: "Reconciliation & Policy",
    subtitle: "Control and visibility in real time",
    items: [
      {
        title: "Streamlined Procurement",
        description:
          "Simplify the purchase process and reduce the burden of paperwork.",
        image: sliderOne,
        link: "/payment-button/",
      },
      {
        title: "Customizable Spending Limits",
        description: "Control how much your team spends and on what.",
        image: sliderTwo,
        link: "/qr-code/",
      },
      {
        title: "Real-Time Transaction Data",
        description:
          "Monitor expenses as they happen, allowing for immediate action.",
        image: sliderThree,
        link: "/auto-collect/",
      },
      {
        title: "Improved Supplier Negotiations",
        description:
          "Use spending data to negotiate better deals with suppliers.",
        image: sliderFour,
        link: "/auto-collect/",
      },
      {
        title: "Policy Compliance",
        description: "Enforce company policies directly through card controls.",
        image: sliderFive,
        link: "/auto-collect/",
      },
    ],
  },
]

const stackcardData: TStackCardsProp = [
  {
    icon: realTimeExpenseIcon,
    title: "Effortless Procurement Management",
    description:
      "Transform the way your business handles procurement. Purchase cards make purchasing goods and services a smooth, straightforward process. Authorized employees can make purchases on behalf of the company, bypassing the complexities of traditional procurement systems. This eliminates unnecessary delays, paperwork, and approval bottlenecks.",
    image: realTimeExpense,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    icon: fraudProtectionIcon,
    title: "Increase Control & Reduce Costs",
    description:
      "Set custom spending limits and enforce purchase policies directly through EnKash’s easy-to-use platform. Track every transaction in real time, enabling you to control expenses, avoid budget overruns, and prevent fraud. The ability to set merchant category restrictions ensures that your team only makes relevant purchases, keeping your expenses in check. With a corporate purchase card, businesses can enforce spend policies without slowing down procurement cycles.",
    image: fraudProtection,
    buttonUrl: "/sales",
  },
  {
    icon: streamlinedReimbursementIcon,
    title: "Simplify Expense Tracking and Reporting",
    description:
      "Gain full visibility of your procurement expenses with detailed, real-time reporting. Analyze spending trends and uncover potential cost savings with EnKash’s centralized dashboard. This data-backed approach allows for more informed decision-making and effective supplier negotiations, ensuring you always get the best value.",
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    icon: costControlSavingsIcon,
    title: "Faster Payment Cycles & Vendor Relationships",
    description:
      "Speed up payment cycles and enhance relationships with your vendors by ensuring prompt, hassle-free transactions. Purchase Cards streamline the payment process, allowing you to meet deadlines, maintain positive supplier relations, and improve cash flow—all while reducing administrative workload.",
    image: costControlSavings,
    buttonUrl: "/sales",
  },
  {
    icon: wideAcceptanceNetworkIcon,
    title: "Better Compliance & Risk Management",
    description:
      "Purchase Cards help ensure compliance with your company’s procurement policies. Each card is customizable with spend limits and merchant restrictions, so you can confidently minimize the risk of unauthorized purchases or fraud. Automated reporting makes policy breaches easier to spot and rectify.",
    image: wideAcceptanceNetwork,
    buttonUrl: "/sales",
  },
]

export { allProductSections, cardType, intantActionData, stackcardData }
