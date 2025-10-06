import { TStackCardsProp } from "@/src/types"
import {
  autoCollect,
  instant,
  notificationImage,
  optimizedIcon,
  paymentButton,
  paymentLink,
  paymentLinkImage,
  paymentOptionImage,
  paymentPage,
  qrCodes,
  reminder,
  scrollIconOne,
  scrollIconThree,
  scrollIconTwo,
  secureImage,
  shareImage,
  taskIconFive,
  taskIconFour,
  taskIconOne,
  taskIconSix,
  taskIconThree,
  taskIconTwo,
} from "./img"

const cardsData: TStackCardsProp = [
  {
    title: "Create",
    description: "Use EnKash’s intuitive dashboard to design your button.",
    icon: scrollIconOne,
  },
  {
    title: "Copy",
    description: "Generate an auto-created code tailored to your button.",
    icon: scrollIconTwo,
  },
  {
    title: "Integrate",
    description: "Paste the code on your website or blog.",
    icon: scrollIconThree,
  },
]

const allInOnePolicyData: TStackCardsProp = [
  {
    icon: taskIconOne,
    title: "Setup in under 5 minutes",
    description:
      "Add the button to your website or blog in under 5 minutes. Skip complex installations and technical hurdles with our straightforward setup process. Create your button, copy the code, and get started instantly without waiting for developer assistance.",
    image: paymentLinkImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconTwo,
    title: "Ctrl C + Ctrl V = Payment Ready",
    description:
      "No coding expertise is required. Copy-paste a one-line code. EnKash Payment Buttons seamlessly integrate into any website or blog, ensuring a smooth user experience and uninterrupted functionality with zero technical complications.",
    image: shareImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "305px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "Accept Payments Anytime, Anywhere",
    description:
      "Accept one-time or recurring payments effortlessly. Enable your customers to choose between single transactions or subscriptions, making your payment process adaptable to diverse business models and customer needs.",
    image: paymentOptionImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "268px",
  },
  {
    icon: taskIconFour,
    title: "Match Your Style",
    description:
      "Match your brand’s look and feel with customizable styles, colors, and text. Design buttons that align with your business identity, creating a consistent and professional appearance for your online presence.",
    image: notificationImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "259px",
    reverse: true,
  },
  {
    icon: taskIconFive,
    title: "Optimized for the Mobile",
    description:
      "Designed for optimal performance on all devices. Provide a seamless payment experience for users of smartphones, tablets, or desktops, catering to the growing mobile commerce trends.",
    image: optimizedIcon,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "221px",
  },
  {
    icon: taskIconSix,
    title: "Don’t Compromise on Security",
    description:
      "Industry-leading security and compliance standards ensure safe payments. Protect your customers’ data with advanced encryption and fraud detection, building trust and credibility for your business.",
    image: secureImage,
    buttonUrl: "/sales/?source=expense_management",
    maxImageHeight: "259px",
    reverse: true,
  },
]

const managementCardData = [
  {
    titleHtml: "Payment Gateway",
    description: "Seamlessly collect payments with no-code solutions.",
    cardImage: paymentLink,
    linkUrl: "/payment-gateway",
  },
  {
    titleHtml: "Payment Page",
    description: "Create stunning, branded checkout experiences in minutes.",
    cardImage: paymentPage,
    linkUrl: "/payment-page",
  },
  {
    titleHtml: "Payment Links",
    description:
      "Collect payments across WhatsApp, SMS, and social media with easy-to-share payment links.",
    cardImage: paymentButton,
    linkUrl: "/payment-links",
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

export { allInOnePolicyData, cardsData, managementCardData }
