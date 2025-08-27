import crouselIconOne from "./img/crouselIconOne.svg"
import crouselIconTwo from "./img/crouselIconTwo.svg"
import crouselIconThree from "./img/crouselIconThree.svg"
import crouselIconFour from "./img/crouselIconFour.svg"
import crouselIconFive from "./img/crouselIconFive.svg"
import crouselIconSix from "./img/crouselIconSix.svg"

import {
  autoCollect,
  instant,
  invoices,
  paymentButton,
  paymentGateway,
  paymentLink,
  paymentLinkImage,
  paymentOptionImage,
  qrCodes,
  reminder,
  scrollIconOne,
  scrollIconThree,
  scrollIconTwo,
  shareImage,
  taskIconOne,
  taskIconThree,
  taskIconTwo,
} from "."

const cardsData = [
  {
    title: "Define Your Use Case",
    description:
      "Choose the core objective - EMIs, BNPL, or other credit solutions. This will ensure focused integration and maximum customer impact.",
    icon: scrollIconOne,
  },
  {
    title: "Seamless API Integration",
    description:
      "Connect your website through robust APIs for a smooth, scalable, and efficient affordability experience.",
    icon: scrollIconTwo,
  },
  {
    title: "Maximize Visibility",
    description:
      "Enhance customer engagement by adding affordability widgets or buttons on key pages.",
    icon: scrollIconThree,
  },
]

const allProductSections = [
  {
    title: "Expense Management",
    subtitle: "Manage every spend effortlessly",
    items: [
      {
        title: "Recurring Billing Setup",
        description:
          "Easily schedule recurring rent payments aligned with your rental agreements.",
        image: crouselIconOne,
      },
      {
        title: "Payment Notifications ",

        description:
          "Both tenants and landlords get instant alerts on payment status, ensuring transparency.",
        image: crouselIconTwo,
      },

      {
        title: "Split Payment Options ",
        description:
          "Divide rent across multiple payers or payment modes effortlessly.",
        image: crouselIconThree,
      },
      {
        title: "Customizable Payment Schedules",

        description:
          "Tailor payment dates to fit your cash flow without hassle.",
        image: crouselIconFour,
      },
      {
        title: "Dynamic Rent Adjustments",

        description:
          "Handle rent changes, prorated amounts, or additional fees smoothly.",
        image: crouselIconFive,
      },
      {
        title: "Detailed Rental Insights",

        description:
          "Access monthly rent reports and analytics to track trends and expenses.",
        image: crouselIconSix,
      },
    ],
  },
]

const allInOnePolicyData = [
  {
    icon: taskIconOne,
    title: "EMI",
    description:
      "Boost conversions by offering flexible and affordable payment options. Enable EMI through both debit and credit cards to make purchases easier and more accessible for your customers.",
    image: paymentLinkImage,
    buttonUrl: "/sales",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconTwo,
    title: "Buy Now, Pay Later",
    description:
      "Drive customer acquisition and loyalty by letting them enjoy your product or service now and pay later. With EnKash, you can integrate multiple pay-later providers, allowing users to delay payments while you still get paid instantly.",
    image: shareImage,
    buttonUrl: "/sales",
    maxImageHeight: "305px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "Affordability Widget",
    description:
      "Showcase custom offers or highlight EMI and payment options directly on the product page, so customers see affordability where it matters most.",
    image: paymentOptionImage,
    buttonUrl: "/sales",
    maxImageHeight: "243px",
  },
]

const managementCardsData = [
  {
    titleHtml: "Payment Gateway",
    description:
      "No-code solution to seamlessly collect payments across multiple channels, ensuring you never miss a transaction.",
    cardImage: paymentGateway,
    linkUrl: "/payment-gateway",
  },
  {
    titleHtml: "Payment Link",
    description:
      "Effortlessly collect payments on WhatsApp, SMS, Facebook, Twitter, and more using no-code payment links.",
    cardImage: paymentLink,
    linkUrl: "/payment-links",
  },
  {
    titleHtml: "Payment Button",
    description:
      "Add a pre-designed payment button to your website with a simple plug-and-play integration.",
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
      "Remove manual reminders and easily automate your business collections for a more seamless cash flow.",
    cardImage: reminder,
    linkUrl: "/collection-reminder/",
  },
]

export {
  cardsData,
  allProductSections,
  allInOnePolicyData,
  managementCardsData,
}
