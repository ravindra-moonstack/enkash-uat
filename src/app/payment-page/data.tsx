import crouselIconOne from "./img/crouselIconOne.svg"
import crouselIconTwo from "./img/crouselIconTwo.svg"
import crouselIconThree from "./img/crouselIconThree.svg"
import crouselIconFour from "./img/crouselIconFour.svg"
import crouselIconFive from "./img/crouselIconFive.svg"

import {
  autoCollect,
  costControlSavings,
  costControlSavingsIcon,
  fraudProtection,
  fraudProtectionIcon,
  instant,
  notificationImage,
  optimizedIcon,
  paymentButton,
  paymentGateway,
  paymentLink,
  paymentLinkImage,
  paymentOptionImage,
  qrCodes,
  realTimeExpense,
  realTimeExpenseIcon,
  reminder,
  scrollIconOne,
  scrollIconThree,
  scrollIconTwo,
  shareImage,
  streamlinedReimbursement,
  streamlinedReimbursementIcon,
  taskIconFive,
  taskIconFour,
  taskIconOne,
  taskIconThree,
  taskIconTwo,
  TravelIcon,
  TravelImage,
} from "."

const cardsData = [
  {
    title: "Create",
    description:
      "Select a payment page template or customize the page according to your brand guidelines.",
    icon: scrollIconOne,
  },
  {
    title: "Integrate",
    description: "Plug the page into your payment collection process.",
    icon: scrollIconTwo,
  },
  {
    title: "Collect",
    description: "Accept payments from your customers",
    icon: scrollIconThree,
  },
]

const allProductSections = [
  {
    title: "Expense Management",
    subtitle: "Manage every spend effortlessly",
    items: [
      {
        title: "Secure ",
        title2: "Transactions",
        description:
          "Built with robust security protocols, EnKash Payment Pages ensure complete protection for every transaction.",
        image: crouselIconOne,
      },
      {
        title: "Automated ",
        title2: "Receipts",
        description:
          "Save time with automatic email confirmations and payment receipts sent directly to your customers.",
        image: crouselIconTwo,
      },

      {
        title: "Instant ",
        title2: "Refunds",
        description:
          "Enhance customer satisfaction with quick and hassle-free refunds.",
        image: crouselIconThree,
      },
      {
        title: "Saved Card ",
        title2: "Tokenization",
        description:
          "Let customers save their card details securely for faster checkouts while adhering to compliance standards.",
        image: crouselIconFour,
      },
      {
        title: "Custom ",
        title2: "Fields",
        description:
          "Collect essential customer data by adding personalized fields to your payment page.",
        image: crouselIconFive,
      },
    ],
  },
]
const allInOnePolicyData = [
  {
    icon: taskIconOne,
    title: "Customization at Your Fingertips",
    description:
      "Design payment pages that truly showcase your brand identity. Add your logo, select colors that resonate with your business, and customize fields to gather precise and relevant customer details. With memorable and professional URLs, sharing your payment page becomes a breeze, enhancing both brand recognition and user convenience.",
    image: paymentLinkImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconTwo,
    title: "Multiple Payment Modes",
    description:
      "Give your customers unmatched flexibility with over 180 domestic and international payment options. Whether they prefer UPI, net banking, credit or debit cards, wallets, or international currencies, EnKash ensures secure and seamless transactions, catering to a global audience and diverse payment preferences.",
    image: shareImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "305px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "Zero Coding Required",
    description:
      "Spend more time growing your business and less time worrying about technical complexities. EnKash’s intuitive platform lets you create and launch fully functional payment pages within minutes, all without any coding knowledge or the need for additional technical resources.",
    image: paymentOptionImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconFour,
    title: "Optimized for Mobile and Web",
    description:
      "Ensure a flawless checkout experience on any device. EnKash Payment Pages are meticulously designed to adapt to smartphones, tablets, and desktops, offering customers an engaging and consistent interface that works seamlessly regardless of the device they use.",
    image: notificationImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: taskIconFive,
    title: "Get Real-time Insights",
    description:
      "Leverage actionable insights with our powerful dashboard. Access real-time transaction data, monitor payment trends, and analyze customer behavior to make strategic business decisions that can drive growth and enhance operational efficiency.",
    image: optimizedIcon,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "259px",
  },
]

const managementCardData = [
  {
    titleHtml: "Payment Gateway",
    description:
      "A no-code solution to effortlessly collect payments across various channels, guaranteeing you never miss a transaction.",
    cardImage: paymentGateway,
    linkUrl: "/payment-gateway",
  },
  {
    titleHtml: "Payment Links",
    description:
      "Collect payments across WhatsApp, SMS, and social media with easy-to-share payment links.",
    cardImage: paymentLink,
    linkUrl: "/payment-links",
  },
  {
    titleHtml: "Payment Button",
    description:
      "Easily integrate a pre-designed payment button into your website with a quick plug-and-play setup.",
    cardImage: paymentButton,
    linkUrl: "/payment-button",
  },
  {
    titleHtml: "QR Codes",
    description:
      "Enable secure, contactless payments with QR codes, allowing businesses to process instant transactions.",
    cardImage: qrCodes,
    linkUrl: "/qr-code",
  },
  {
    titleHtml: "Auto Collect",
    description:
      "Accept NEFT, RTGS, and IMPS transfers using on-demand customer identifiers with automated reconciliation at scale.",
    cardImage: autoCollect,
    linkUrl: "/auto-collect",
  },
  {
    titleHtml: "Instant Settlement",
    description:
      "Access your funds immediately, bypass traditional settlement cycles, and take greater control of your cash flow.",
    cardImage: instant,
    linkUrl: "/instant-settlement",
  },
  {
    titleHtml: "Reminder Engine",
    description:
      "Automate your collections and say goodbye to manual reminders.",
    cardImage: reminder,
    linkUrl: "/collection-reminder",
  },
]
const stackcardData = [
  {
    color: "#fff",
    icon: realTimeExpenseIcon,
    title: "Product Sales",
    description: `Sell your products or services online with a professional storefront. List multiple items, manage inventory, and set purchase controls.`,
    image: realTimeExpense,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    color: "#eee",
    icon: fraudProtectionIcon,
    title: "Event Registrations",
    description: `Easily collect event fees and manage attendee registration with customized payment pages.`,
    image: fraudProtection,
    buttonUrl: "/sales",
  },
  {
    color: "#fff",
    icon: streamlinedReimbursementIcon,
    title: "Donations",
    description: `Streamline your fundraising efforts with pages that allow supporters to donate quickly and securely. Send automated receipts, including 80G certificates for NGOs.`,
    image: streamlinedReimbursement,
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    color: "#eee",
    icon: costControlSavingsIcon,
    title: "Tuition and Fee Collection",
    description: `Simplify fee payments for educational institutions. Automate reconciliation and ensure hassle-free collections.`,
    image: costControlSavings,
    buttonUrl: "/sales",
  },
  {
    color: "#eee",
    icon: TravelIcon,
    title: "Travel and Hospitality",
    description: `Collect payments for bookings, packages, or other services effortlessly.`,
    image: TravelImage,
    buttonUrl: "/sales",
  },
]
export { cardsData, allProductSections, allInOnePolicyData, managementCardData, stackcardData }
