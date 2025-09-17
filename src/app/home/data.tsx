import { ButtonTheme } from "@/src/components/buttons"
import {
  AdiadsBg,
  Adiadslogo,
  AdiadsProfile,
  bigBg,
  biglogo,
  bigProfile,
  BuiltforBuildersCardIcon,
  BuiltforBuildersCardIcon2,
  BuiltforBuildersCardIcon3,
  collectPaymentboxIcon1,
  collectPaymentboxIcon2,
  collectPaymentboxIcon3,
  collectPaymentboxIcon4,
  collectPaymentboxIcon5,
  collectPaymentboxIcon6,
  delMonteBg,
  delMontelogo,
  delMonteProfile,
  honeycombBg,
  honeycomblogo,
  honeycombProfile,
  makePayment1,
  makePayment2,
  makePayment3,
  makePayment4,
  prepaidBottom1,
  prepaidBottom2,
  prepaidTop1,
  prepaidTop2,
  prepaidTop3,
  prepaidTop4,
  prepaidTop5,
  receivableBottomIcon,
  rewardIcon,
  rewardImg1,
  rewardImg2,
  rewardImg3,
  rewardSliderIcon1,
  rewardSliderIcon2,
  rewardSliderIcon3,
  rewardSliderIcon4,
  rewardSliderIcon5,
  vianetBackLogo,
  vianetBg,
  vianetlogo,
  vianetProfile,
} from "."

const HomePageRewardsVouchersSlide = [
  {
    titleHtml: "E-commerce ",
    title2: "Vouchers",
    description:
      "Distribute vouchers usable on top online platforms - instantly.",
    cardImage: rewardSliderIcon1,
    padding: "30px 20px",
    hoverClass: "HomePageRewardsVouchersCard",
    url: "/e-commerce-vouchers",
  },
  {
    titleHtml: "Food & Beverages ",
    title2: "Vouchers",
    description:
      "Offer employees or partners vouchers for cafes, restaurants, and delivery apps.",
    cardImage: rewardSliderIcon2,
    padding: "30px 20px",
    hoverClass: "HomePageRewardsVouchersCard",
    url: "/food-and-beverages-vouchers",
  },

  {
    titleHtml: "Health & Wellness ",
    title2: "Vouchers",
    description:
      "Promote wellbeing with rewards redeemable for fitness, health, and self-care.",
    cardImage: rewardSliderIcon3,
    padding: "30px 20px",
    hoverClass: "HomePageRewardsVouchersCard",
    url: "/health-and-wellness-vouchers",
  },
  {
    titleHtml: "Music & Movies ",
    title2: "Vouchers",
    description:
      "Enjoy blockbuster movies, trending shows, and music with versatile vouchers.",
    cardImage: rewardSliderIcon4,
    padding: "30px 20px",
    hoverClass: "HomePageRewardsVouchersCard",
    url: "/movie-and-music-vouchers",
  },
  {
    titleHtml: "Apparel ",
    title2: "Vouchers",
    description:
      "Reward with fashion – vouchers redeemable at leading clothing and lifestyle brands.",
    cardImage: rewardSliderIcon5,
    padding: "30px 20px",
    hoverClass: "HomePageRewardsVouchersCard",
    url: "/apparels-vouchers",
  },
]
const adidasData = [
  {
    image: AdiadsBg,
    title1: "How Adidas boosted employee ",
    title2: "engagement with EnKash Rewards",
    description:
      "“This platform has redefined employee engagement by allowing employees to choose from a wide range of rewards, including shopping vouchers, food, electronics, travel, and experiences. This flexibility has boosted engagement, performance, and retention.”",
    name: "Anisha Chandran",
    role: "HR Head",
    profileImg: AdiadsProfile,
    rightTopIcon: "",
    backLogo: Adiadslogo,
    ourlayClass: "AdiadslogoClass",
  },
  {
    image: delMonteBg,
    title1: "How Del Monte automated ",
    title2: "R&R and strengthened team engagement with EnKash",
    description:
      "“The EnKash Reward automation has significantly enhanced our R&R program. The flexibility in reward redemption options, combined with the automated process, has streamlined our operations. We've noticed a rise in team engagement, and it's helping foster stronger relationships within the organization.”",
    name: "Swati Rawat",
    role: "HR Head",
    profileImg: delMonteProfile,
    rightTopIcon: delMontelogo,
    backLogo: delMontelogo,
    ourlayClass: "delMontelogoClass",
  },
  {
    image: bigBg,
    title1: "How BIG FM simplified ",
    title2: "corporate gifting with EnKash",
    description:
      "“EnKash has been a fantastic partner for our gifting needs at BIG FM. What truly sets them apart is their quick TATs, prompt response & unwavering support, ensuring a seamless experience from start to finish. Their commitment to service excellence truly stands out, making Enkash our go-to choice for hassle-free gifting solutions.”",
    name: "Roopa Mahesh Kumar",
    role: "HR Head",
    profileImg: bigProfile,
    rightTopIcon: biglogo,
    backLogo: biglogo,
    ourlayClass: "biglogoClass",
  },
  {
    image: vianetBg,
    title1: "How Vianet improved ",
    title2: "financial decisions with EnKash",
    description:
      "“One of the key benefits of EnKash was gaining real-time visibility of our Daily Sales Outstanding (DSOs), which became an interactive feature. This real-time insight into our receivables greatly improved our decision-making capabilities. We have unlocked a new efficiency level in our receivables processes, streamlining operations and ensuring smoother financial management.”",
    name: "Deep Sehgal",
    role: "Founder and CEO",
    profileImg: vianetProfile,
    rightTopIcon: vianetlogo,
    backLogo: vianetBackLogo,
    ourlayClass: "vianetlogoClass",
  },
  {
    image: honeycombBg,
    title1: "How Honeycomb Creative streamlined ",
    title2: "budget allocation with EnKash Virtual Cards",
    description:
      "“In integrated marketing communications, agencies need to allocate budgets for different verticals. Through EnKash’s virtual cards, we were able to manage our budget allocation for various departments, streamline approvals seamlessly, and gain real-time visibility of all our department-wise expenses to our finance department”",
    name: "Noufel Anamala",
    role: "Transformative Leader",
    profileImg: honeycombProfile,
    rightTopIcon: honeycomblogo,
    backLogo: honeycomblogo,
    ourlayClass: "honeycomblogoClass",
  },
]
const scrollCardsData = [
  {
    title: "Digital Petty Cash",
    description:
      "Track and manage small-ticket expenses across branches in real time.",
    url: "/petty-cash",
    icon: "",
    hoverClass: "scrollCardHover",
  },
  {
    title: "Budget & Advances",
    description:
      "Set budgets, issue advances, and monitor usage against spending limits.",
    url: "/budget-and-advances",
    icon: "",
    hoverClass: "scrollCardHover",
  },
  {
    title: "Reimbursements",
    description:
      "Enable fast, policy-aligned reimbursements with built-in approvals.",
    url: "/reimbursements",
    icon: "",
    hoverClass: "scrollCardHover",
  },
  {
    title: "Scan & Drop Receipts",
    description:
      "Snap receipts and auto-extract data for quick claim submissions.",
    url: "/receipts",
    icon: "",
    hoverClass: "scrollCardHover",
  },
  {
    title: "Spend Analytics",
    description:
      "Get deep insights into spends with smart, real-time analytics.",
    url: "/expense-analytics-and-insights",
    icon: "",
    hoverClass: "scrollCardHover",
  },
]

const makePaymentData = [
  {
    title: "Utility Bill Payments",
    subtitle:
      "Automate and manage all business utility bills from one unified dashboard.",
    womanImg: makePayment1,
    url: "/utility-bill-payment",
    hoverClass: "hoverMakePayment1",
  },
  {
    title: "Vendor Payments",
    subtitle:
      "Pay suppliers and vendors on time with complete visibility and control.",
    womanImg: makePayment2,
    url: "/vendor-payment",
    hoverClass: "hoverMakePayment2",
  },
  {
    title: "Rental Payments",
    subtitle:
      "Schedule recurring rent and lease payments with auto-reminders and logs.",
    womanImg: makePayment3,
    url: "/rent-payment",
    hoverClass: "hoverMakePayment3",
  },
  {
    title: "Bulk Pay",
    subtitle:
      "Send high-volume payouts with role-based, multi-level approval flows.",
    womanImg: makePayment4,
    url: "/bulk-pay",
    hoverClass: "hoverMakePayment4",
  },
]
const BuiltforBuildersCardData = [
  {
    title: "APIs & Modules",
    subtitle:
      "Unlock powerful automation and customized payment flows with our flexible APIs and plug-and-play modules.",

    icon: BuiltforBuildersCardIcon,
    url: "",
  },
  {
    title: "Seamless Integrations",
    subtitle:
      "Effortlessly sync with ERPs, accounting platforms, and business tools to centralize your financial operations.",

    icon: BuiltforBuildersCardIcon2,
    url: "",
  },
  {
    title: "Workflow Management",
    subtitle:
      "Simplify approvals and process flows to eliminate bottlenecks and boost team productivity.",

    icon: BuiltforBuildersCardIcon3,
    url: "",
  },
]
const cardsData = [
  {
    title: "Payment Gateway",
    subtitle:
      "Developer-first, no-code gateway for seamless payment collections across channels.",

    icon: collectPaymentboxIcon1,
    url: "/payment-gateway",
  },
  {
    title: "Payment Links",
    subtitle:
      "Shareable links via WhatsApp, SMS, or social - get paid instantly without friction.",

    icon: collectPaymentboxIcon2,
    url: "/payment-links",
  },
  {
    title: "Payment Button",
    subtitle:
      "Plug-and-play buttons for your website. Quick setup, no coding needed.",

    icon: collectPaymentboxIcon3,
    url: "/payment-button",
  },
  {
    title: "UPI Payments",
    subtitle:
      "Accept UPI payments via BHIM, PhonePe, WhatsApp & more, no VPA, no SMS fatigue.",

    icon: collectPaymentboxIcon4,
    url: "/upi-payments",
  },
  {
    title: "QR Code",
    subtitle:
      "Accept secure, contactless payments with instant-scannable QR codes.",

    icon: collectPaymentboxIcon5,
    url: "/qr-code",
  },
  {
    title: "Affordability Suite",
    subtitle:
      "Offer customers EMIs, BNPL & credit options to boost conversions and cash flow.",

    icon: collectPaymentboxIcon6,
    url: "/affordability-suite",
  },
]
const PayablesData = [
  {
    title: "Invoice Management ",
    subtitle:
      "Digitize approvals and settle invoices faster with audit-ready records.",
    url: "/invoice-management",
    bottomIcon: receivableBottomIcon,
  },
  {
    title: "Payable Analytics",
    subtitle: "Track, plan, and manage payables with a live dashboard view.",
    url: "/payable-analytics",
    bottomIcon: receivableBottomIcon,
  },
  {
    title: "Approval Flows",
    subtitle: "Enforce spending rules automatically to ensure full compliance.",
    url: "/approval-flows",
    bottomIcon: receivableBottomIcon,
  },
  {
    title: "Workflow Management",
    subtitle: "Enforce spending rules automatically to ensure full compliance.",
    url: "/workflow-management",
    bottomIcon: receivableBottomIcon,
  },
]
const ReceivablesData = [
  {
    title: "Digital Invoicing",
    subtitle:
      "Generate and send GST-compliant invoices in seconds. Track status, set reminders & get paid faster.",
    url: "/digital-invoicing",
    bottomIcon: receivableBottomIcon,
  },
  {
    title: "Auto Reconciliation",
    subtitle:
      "Automatically match incoming payments with invoices - no manual work, zero errors.",
    url: "/auto-reconciliation",
    bottomIcon: receivableBottomIcon,
  },
  {
    title: "Connected Banking",
    subtitle:
      "Link your bank accounts to manage collections, settlements & cash positions - all in one view.",
    url: "/connected-banking",
    bottomIcon: receivableBottomIcon,
  },
  {
    title: "Collection Reminders",
    subtitle:
      "Automated, timely nudges via email, SMS, or WhatsApp – so you never miss a payment follow-up.",
    url: "/collection-reminder",
    bottomIcon: receivableBottomIcon,
  },
  {
    title: "Collection Analytics",
    subtitle:
      "Get deep insights into receivables -  monitor delays, aging, and recovery trends in real-time.",
    url: "/collection-analytics",
    bottomIcon: receivableBottomIcon,
  },
]
const prepaidCardsData = [
  {
    title: "Meal Card",
    subtitle: "Offer tax-saving digital meal benefits with usage tracking.",
    url: "/meal-card",
    topIcon: prepaidTop1,
  },
  {
    title: "Fuel Card",
    subtitle: "Monitor and control fleet or travel-related fuel spends easily.",
    url: "/fuel-card",
    topIcon: prepaidTop2,
  },
  {
    title: "Gift Cards",
    subtitle:
      "Send instant, personalized rewards for any occasion or milestone.",
    url: "/gift-cards",
    topIcon: prepaidTop3,
  },
  {
    title: "Self Card Management",
    subtitle: "Create, assign, and manage cards in minutes - fully self-serve.",
    url: "/diy-card-module",
    topIcon: prepaidTop4,
  },
]
const prepaidCardsDataSecond = [
  {
    title: "Purchase Cards",
    subtitle: "Enable secure vendor purchases with spend controls built in.",
    url: "/purchase-card",
    topIcon: prepaidTop5,
    bottomIcon: prepaidBottom1,
    borderColors: " #1C5AF4 ",
  },
  {
    title: "Travel & Expense Card",
    subtitle: "Simplify business travel expenses with pre-set card limits.",
    url: "/travel-and-expense-card",
    topIcon: prepaidTop5,
    bottomIcon: prepaidBottom2,
    borderColors: " #1C5AF4 ",
  },
]

const rewardData = [
  {
    title: "Employee",
    title2: "Rewards",
    subtitle:
      "Reward achievements and special occasions with instant vouchers.",
    icon: rewardIcon,
    image: rewardImg1,
    overlayColorClass: "homePagerewards1",
    url: "/employee-rewards",
  },

  {
    title: "Channel",
    title2: "Incentives",
    subtitle:
      "Run incentive programs that motivate and drive channel performance.",
    icon: rewardIcon,
    image: rewardImg2,
    overlayColorClass: "homePagerewards2",
    url: "/channel-incentives",
  },
  {
    title: "Exclusive",
    title2: "Offers",
    subtitle:
      "Provide access to curated brand deals and discounts for employees and teams.",
    icon: rewardIcon,
    image: rewardImg3,
    overlayColorClass: "homePagerewards3",
    url: "/offers",
  },
]
const ctaButtonData = [
  {
    title: "Collect Payments",
    theme: "outline-blue" as ButtonTheme,
    actionImage: "",
    hoverImage: "",
    url: "/sales?source=homepage",
  },
  {
    title: " Make Payments",
    theme: "outline-blue" as ButtonTheme,
    actionImage: "",
    hoverImage: "",
    url: "/sales?source=homepage",
  },
  {
    title: "Manage Expenses",
    theme: "outline-blue" as ButtonTheme,
    actionImage: "",
    hoverImage: "",
    url: "/sales?source=homepage",
  },
  {
    title: "Get Corporate Cards",
    theme: "outline-blue" as ButtonTheme,
    actionImage: "",
    hoverImage: "",
    url: "/sales?source=homepage",
  },
  {
    title: "Distribute Brand Vouchers",
    theme: "outline-blue" as ButtonTheme,
    actionImage: "",
    hoverImage: "",
    url: "/sales?source=homepage",
  },
  {
    title: "Reward Employees",
    theme: "outline-blue" as ButtonTheme,
    actionImage: "",
    hoverImage: "",
    url: "/sales?source=homepage",
  },
]
const counterData = [
  {
    end: 2,
    suffix: " Million +",
    label: "Corporate Cards Processed",
  },
  {
    end: 250000,
    label: "Network Members",
  },
  {
    end: 5000,
    suffix: " +",
    label: "Businesses Powered",
  },
]

export {
  counterData,
  HomePageRewardsVouchersSlide,
  adidasData,
  scrollCardsData,
  makePaymentData,
  BuiltforBuildersCardData,
  cardsData,
  PayablesData,
  ReceivablesData,
  prepaidCardsData,
  prepaidCardsDataSecond,
  rewardData,
  ctaButtonData,
}
