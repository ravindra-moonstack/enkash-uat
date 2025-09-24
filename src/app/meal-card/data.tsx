import { TCardTypes, TStackCardsProp } from "@/src/types"
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
  iconOne,
  iconTwo,
  iconThree,
  iconFour,
  autoCollect,
  subscribtion,
  eNach,
  firstIcon,
  thirdIcon,
  benfits,
  fourthIcon,
  secondIcon,
  payrollCardImg,
} from "."

const dataSets = [
  {
    iconSrc: iconOne,
    imageSrc: autoCollect,
    altText: "Auto Collect ",
    title: "Instant Issuance & Reload",
    subtitle:
      "Issue cards instantly and refill balances as needed without delays. This feature ensures employees have continuous access to meal benefits without interruptions, improving their overall experience and satisfaction.",
  },
  {
    iconSrc: iconTwo,
    imageSrc: subscribtion,
    altText: "Setting up of budgets",
    title: "Expense Tracking & Reporting",
    subtitle:
      "Get a detailed view of spending patterns to optimize benefit plans and budgets. EnKash provides easy-to-use tools for monitoring transactions, making it simpler to manage meal benefits effectively and ensure compliance.",
  },
  {
    iconSrc: iconThree,
    imageSrc: eNach,
    altText: "Simplified expense submission",
    title: "Compliance and Security",
    subtitle:
      "Fully compliant with RBI guidelines and equipped with advanced fraud detection, Meal Cards offer unparalleled security. Businesses can confidently provide meal benefits, knowing that every transaction is safe and reliable.",
  },
  {
    iconSrc: iconFour,
    imageSrc: benfits,
    altText: "Simplified expense submission",
    title: "Employee-Centric Benefits",
    subtitle:
      "Boost morale and productivity by offering flexible meal benefits that employees truly appreciate. Meal Cards are designed with user convenience, ensuring a positive experience at every step.",
  },
]

const intantActionData = [
  {
    title: "Sign Up and KYC",
    description:
      "Log in to EnKash using your registered mobile number and complete your KYC.",
    icon: firstIcon,
  },

  {
    title: "Issuance",
    description: "Issue meal cards to employees with preloaded funds.",
    icon: secondIcon,
  },
  {
    title: "Alerts",
    description:
      "Employees will be notified via SMS, WhatsApp and email about the card updates.",
    icon: thirdIcon,
  },
  {
    title: "Card Activation",
    description:
      "Employees will be notified via SMS, WhatsApp, and e-mail about rewards and the redemption process.",
    icon: fourthIcon,
  },
]

const cardType : TCardTypes = [
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
    titleHtml: "SaaS Card",
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
    linkUrl: "/sales/?source=meal-card",
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
    linkUrl: "/sales/?source=meal-card",
  },
]

const stackcardData: TStackCardsProp = [
  {
    icon: realTimeExpenseIcon,
    title: "Tax Savings Made Simple",
    description: `With Meal Cards*, employees can save up to ₹26,400 
annually in taxes by utilizing tax exemptions under Section 17(2)(viii) of the Income Tax Act, 1961. This benefit not only increases take-home pay but also helps businesses boost employee satisfaction and retention by providing tangible financial advantages.`,
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

export { dataSets, intantActionData, cardType, stackcardData }
