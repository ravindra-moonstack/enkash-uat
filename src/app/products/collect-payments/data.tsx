import {
  paymentButtonIcon,
  paymentButtonImg,
  paymentGatwayIcon,
  paymentGatwayImg,
  paymentLinkIcon,
  paymentLinkImg,
  paymentPageIcon,
  paymentPageImg,
  qrCodeIcon,
  qrCodeImg,
  upiIcon,
  upiImg,
  eNach,
  subscribtion,
  autoCollect,
  iconThree,
  iconTwo,
  iconOne,
} from "./img"

const dataSets = [
  {
    iconSrc: iconOne,
    imageSrc: autoCollect,
    altText: "Auto Collect ",
    title: "Auto Collect",
    imageMaxHeight: "283px",
    subtitle:
      "Automate the collection of payments through virtual accounts and UPI IDs, ensuring faster and error-free reconciliations while eliminating manual efforts and improving operational efficiency for merchants handling high transaction volumes.",
    linkUrl: "/auto-collect",
  },
  {
    iconSrc: iconTwo,
    imageSrc: subscribtion,
    altText: "Subscriptions",
    title: "Subscriptions",
    imageMaxHeight: "221px",
    subtitle:
      "Set up automated recurring payments effortlessly, enabling merchants to offer subscription-based services while ensuring seamless and timely payments, reducing manual intervention, and enhancing customer retention rates.",
    linkUrl: "/subscriptions",
  },
  {
    iconSrc: iconThree,
    imageSrc: eNach,
    altText: "e-NACH",
    title: "e-NACH",
    imageMaxHeight: "377px",
    subtitle:
      "Simplify recurring payments and mandate-based transactions for businesses managing loans, insurance, and other financial services by enabling automated deductions from customer accounts with full compliance and security.",
    linkUrl: "/e-nach",
  },
]

const cardData = [
  {
    value: "100%",
    title: "Transaction Success Rate",
  },
  {
    value: "99.9%",
    title: "Uptime",
  },
  {
    value: "100+",
    title: "Payment Options",
  },
]

const allInOnePolicyData = [
  {
    icon: paymentGatwayIcon,
    title: "Payment Gateway",
    description:
      "A high-performance gateway that enables merchants to accept payments through multiple methods such as credit cards, debit cards, UPI, net banking, and digital wallets, ensuring seamless transactions with exceptional success rates and security.",
    image: paymentGatwayImg,
    buttonUrl: "/payment-gateway",
  },
  {
    icon: paymentLinkIcon,
    title: "Payment Links",
    description:
      "Generate and share secure payment links instantly via SMS, email, WhatsApp, or social media, allowing merchants to collect payments from customers without requiring a website, ensuring quick and hassle-free transactions..",
    image: paymentLinkImg,
    reverse: true,
    buttonUrl: "/payment-links",
  },
  {
    icon: paymentButtonIcon,
    title: "Payment Button",
    description:
      "Easily integrate a payment button on your website, app, or digital platform, providing customers with a seamless checkout experience that enhances conversions while simplifying payment collection for merchants of all sizes.",
    image: paymentButtonImg,
    buttonUrl: "/payment-button",
  },
  {
    icon: paymentPageIcon,
    title: "Payment Page",
    description:
      "Create a professional, branded payment page in just minutes, enabling merchants without a website to collect online payments efficiently while providing customers with a secure and user-friendly payment experience.",
    image: paymentPageImg,
    reverse: true,
    buttonUrl: "/payment-page",
  },
  {
    icon: upiIcon,
    title: "UPI Payments",
    description:
      " Enable customers to make instant payments using UPI, ensuring a fast, secure, and seamless checkout process that reduces transaction friction and improves the overall user experience for both merchants and consumers alike.",
    image: upiImg,
    buttonUrl: "/upi-payments",
  },
  {
    icon: qrCodeIcon,
    title: "QR Code Payments",
    description:
      "Generate unique static or dynamic QR codes for merchants to accept payments instantly in retail stores, restaurants, and events, allowing customers to make secure and contactless payments with ease.",
    image: qrCodeImg,
    reverse: true,
    buttonUrl: "/qr-code",
  },
]

export { dataSets, cardData, allInOnePolicyData }
