import { FAQProps } from "@/components/faq/faq";

const faqData: FAQProps[] = [
  {
    question: "What is Payment Gateway?",
    answer: [
      {
        heading:
          "A payment gateway is a digital solution that facilitates online and in-store payments for businesses. It processes transactions securely, supporting various payment methods such as credit cards, debit cards, and more. Acting as an intermediary between the merchant and the bank, it ensures smooth and secure transactions for both businesses and their customers.",
      },
    ],
  },
  {
    question: "What payment methods are supported by EnKash Payment Gateway?",
    answer: [
      {
        heading:
          "EnKash Payment Gateway supports an extensive range of payment methods through a single integration, offering unparalleled flexibility for businesses. Here’s what we support:",
      },
      {
        bullets: [
          "Cards: All major card networks, including RuPay, Visa, MasterCard, Amex, Diners Club, and Maestro.",
          "Net Banking: Access to over 90 public and private banks across India.",
          "UPI: Compatibility with 20+ UPI apps, including Google Pay, PhonePe, Paytm, BHIM, and Amazon Pay.",
          "Buy Now, Pay Later (BNPL): Partnerships with 35+ providers for card-based and cardless EMI options, as well as pay-later services.",
          "Wallets: Support for 9+ digital and mobile wallets, such as Paytm, Amazon Pay, Freecharge, and MobiKwik.",
        ],
      },
      {
        heading:
          "EnKash ensures customers can choose their preferred payment mode, enhancing their overall payment experience.",
      },
    ],
  },
  {
    question:
      "What types of platforms and payment gateway integration are supported by EnKash?",
    answer: [
      {
        heading:
          "EnKash Payment Gateway provides versatile integrations to help businesses across various platforms accept payments effortlessly. Here’s how:",
      },
      {
        bullets: [
          "Web and Mobile Integrations: EnKash offers seamless integration options through RESTful APIs and mobile SDKs compatible with Android, iOS, React Native, Flutter, Cordova, Xamarin, and Capacitor.",
          "E-commerce and Website Plugins: Our gateway supports plug-and-play integrations with leading platforms such as Shopify, WooCommerce, Magento, PrestaShop, Wix, OpenCart, WHMCS, and WordPress, among others.",
          "Custom Solutions: For businesses with unique requirements, EnKash enables tailored integrations to fit specific needs, ensuring smooth payment acceptance across websites, mobile apps, and other digital channels.",
        ],
      },
      {
        heading:
          "With EnKash, businesses can quickly integrate payments across channels, streamlining their operations and enhancing customer convenience.",
      },
    ],
  },
  {
    question: "How does a payment gateway work?",
    answer: [
      {
        heading:
          "As soon as a customer makes any payment, the payment gateway collects and encrypts the payment details. This information is further sent to the payment processor and the bank for authorization. After approval, the funds are transferred to the receiver’s account completing the transaction.",
      },
    ],
  },
  {
    question: "What is the price of a payment gateway?",
    answer: [
      {
        heading:
          "EnKash provides transparent pricing. Talk to our sales team today for detailed payment gateway charges or to explore tailored plans designed for your business needs.",
      },
    ],
  },
  {
    question: "How to integrate a payment gateway with a website?",
    answer: [
      {
        heading:
          "EnKash is a versatile payment gateway that seamlessly integrates with your website or app through the following options:",
      },
      {
        bullets: [
          "EnKash APIs: Ideal for desktop and website integrations, offering flexibility and control.",
          "EnKash SDKs: Best suited for mobile app integrations, providing smooth functionality.",
          "EnKash Plugins: Perfect for third-party platforms like WooCommerce, Shopify, and more.",
        ],
      },
    ],
  },
];

export default faqData;
