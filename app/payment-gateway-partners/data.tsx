import iconOne from "./img/icon-one.svg"
import iconTwo from "./img/icon-two.svg"
import iconThree from "./img/icon-three.svg"
import iconFour from "./img/icon-four.svg"
import { autoCollect } from "@/components/all-products"
import platform from "./img/platform.svg"
import plugin from "./img/pligins.svg"
import language from "./img/language.svg"

const carouselData = [
  {
    image: iconOne,
    alt: "Sign up for EnKash partnership program.",
    title: "Sign up for EnKash partnership program.",
    heading: "Sign Up : ",
  },
  {
    image: iconTwo,
    alt: "Refer merchants and businesses through our dashboard",
    title: "Refer merchants and businesses through our dashboard",
    heading: "Refer : ",
  },
  {
    image: iconThree,
    alt: "Use real-time data to make informed financial decisions, such as early payments or vendor negotiations.",
    title: "Receive commissions for every transaction that the business makes",
    heading: "Earn : ",
  },
]

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2024/05/different-types-of-payment-gateway_11zon.jpg",
    imageAlt:
      "What Are The Different Types of Payment Gateways? - A Complete Guide - ",
    title:
      "What Are The Different Types of Payment Gateways? - A Complete Guide - ",
    date: "May 22, 2024",
    description:
      "Customer is KING – This is not just a phrase but a mantra that every business lives by nowadays. The growth and success of any business, be it small, medium, or large, depends on these...",
    link: "https://www.enkash.com/resources/blog/different-types-of-payment-gateways/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2025/03/Importance-of-Payment-Gateway-1.jpg",
    imageAlt:
      "The Need for Payment Gateways: Why Payment Gateways Are Important",
    title: "The Need for Payment Gateways: Why Payment Gateways Are Important",
    date: "March 19, 2025",
    description:
      "With the rising digital economy where everything moves quickly, businesses have come to depend heavily on online transactions and seamless payments. For e-commerce, service-based platforms...",
    link: "https://www.enkash.com/resources/blog/importance-of-payment-gateways/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2025/04/How-to-choose-the-right-payment-gateway.jpg",
    imageAlt: "How to Choose the Right Payment Gateway for Your Business",
    title: "How to Choose the Right Payment Gateway for Your Business",
    date: "Apr 01, 2025",
    description:
      "More than ever, in this digital age, businesses rely increasingly on online payment processing methods to consummate fast and secure transactions with customers. A secure payment ...",
    link: "https://www.enkash.com/resources/blog/how-to-choose-the-right-payment-gateway-for-your-business/",
  },
]

const cardData = [
  {
    title: "Languages",
    description: "Multi-language SDKs & APIs for fast, easy integration.",
    image: language,
    explanation:
      "Shell & HTTP, JavaScript, Java, Swift, Go, PHP, Python, C, C#, Objective-C, Ruby, OCaml, Dart, R",
  },
  {
    title: "Plugins",
    description:
      "Seamlessly connect EnKash to the best online store platforms with ready-to-use plugins:",
    image: plugin,
    explanation: "WooCommerce, Magento, OpenCart",
  },
  {
    title: "Platform",
    description: "Choose the best integration method for your business model.",
    image: platform,
    explanation: "Hosted Checkout and Server-to-Server",
  },
]
export { blogData, carouselData, cardData }
