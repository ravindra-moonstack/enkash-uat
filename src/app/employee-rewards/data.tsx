import { TStackCardsProp } from "@/src/types"
import {
  costControlSavings,
  costControlSavingsIcon,
  fraudProtection,
  fraudProtectionIcon,
  realTimeExpense,
  realTimeExpenseIcon,
  scrollIconOne,
  scrollIconThree,
  scrollIconTwo,
  stackCardSixIcon,
  stackCardSixImg,
  streamlinedReimbursement,
  streamlinedReimbursementIcon,
  wideAcceptanceNetwork,
  wideAcceptanceNetworkIcon,
  vouchers,
  incentive,
  offers,
  giftCard,
  activationIcon,
  extensiveIcon,
  realTimeIcon,
} from "./img"

const benifitsData = [
  { icon: extensiveIcon, title: "Extensive Reward Options" },
  { icon: activationIcon, title: "Instant Reward Redemption" },
  { icon: realTimeIcon, title: "Easy Reward Disbursement" },
]
const cardsData: TStackCardsProp = [
  {
    title: "Complete KYC",
    description:
      "Log in to EnKash using your registered mobile number and complete your KYC.",
    icon: scrollIconOne,
  },
  {
    title: "Add Funds",
    description:
      "Fund your account via NEFT, IMPS, or RTGS. Upload employee data using the sample file format and allocate points to them. ",
    icon: scrollIconTwo,
  },
  {
    title: " Redemption Process",
    description:
      "Employees will be notified via SMS, WhatsApp, and e-mail about rewards and the redemption process.",
    icon: scrollIconThree,
  },
]

const cardType = [
  {
    title: "Expense Management",
    subtitle: "Manage every spend effortlessly",
    items: [
      {
        titleHtml: "Gift Cards",
        description:
          "Empower teams with versatile, prepaid gift cards for seamless rewards and recognition.",
        cardImage: giftCard,
        url: "/gift-cards/",
      },
      {
        titleHtml: "Offers",
        description:
          "Unlock exclusive deals and discounts to boost employee engagement and motivation.",
        cardImage: offers,
        url: "/offers/",
      },
      {
        titleHtml: "Channel Incentives ",
        description:
          "Drive partner performance with strategic rewards, commissions, and loyalty programs.",
        cardImage: incentive,
        url: "/channel-incentives/",
      },
      {
        titleHtml: "Brand Vouchers ",
        description:
          "Provide employees with top-brand vouchers for flexible and meaningful appreciation.",
        cardImage: vouchers,
        url: "/products/vouchers",
      },
    ],
  },
]

const stackcardData: TStackCardsProp = [
  {
    icon: realTimeExpenseIcon,
    title: "Personalized Recognition",
    description:
      "Tailor rewards to individual preferences by offering flexible and customizable options, creating a more meaningful experience that fosters loyalty, boosts morale, and strengthens workplace culture.",
    image: realTimeExpense,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    icon: fraudProtectionIcon,
    title: "Instant Allocation & Redemption",
    description:
      "Reward employees in real time using WhatsApp, email, and SMS, making the process seamless, efficient, and instantly gratifying for recipients, encouraging a more engaged and motivated workforce.",
    image: fraudProtection,
    buttonUrl: "/sales",
  },
  {
    icon: streamlinedReimbursementIcon,
    title: "Diverse Rewards",
    description:
      "Choose from 400+ brands across entertainment, fashion, travel, dining, and more, ensuring every employee finds something they truly value and appreciate, enhancing their motivation and job satisfaction.",
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    icon: costControlSavingsIcon,
    title: "HRMS Integration",
    description:
      "Automate reward allocation by integrating seamlessly with your HRMS, eliminating manual processes, reducing administrative workload, and ensuring accurate, hassle-free employee recognition at every stage.",
    image: costControlSavings,
    buttonUrl: "/sales",
  },
  {
    icon: wideAcceptanceNetworkIcon,
    title: "Open Voucher Function",
    description:
      "Issue open vouchers on the dashboard & reward winners on the spot by sharing QR Codes via WhatsApp or email, integrated with their login codes. The recipient can redeem the reward by scanning the QR code received.",
    image: wideAcceptanceNetwork,
    buttonUrl: "/sales",
  },
  {
    icon: stackCardSixIcon,
    title: "Data-Driven Insights",
    description:
      "Track engagement, monitor reward effectiveness, and optimize your recognition strategy with comprehensive analytics and reporting tools that provide actionable insights for enhancing employee motivation and performance.",
    image: stackCardSixImg,
    buttonUrl: "/sales",
  },
]

export { cardsData, cardType, stackcardData, benifitsData }
