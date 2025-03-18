import { FAQProps } from "@/components/faq/faq";

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/12/Open-a-virtual-bank-account-now-to-manage-your-business-expenses.jpg",
    imageAlt:
      "Open a Virtual Bank Account for Business and Manage Expense Better",
    title: "Open a Virtual Bank Account for Business and Manage Expense Better",
    date: "Dec 26, 2022",
    description:
      "Virtual bank accounts have been in high demand for the past couple of decades, offering unique advantages to users compared to traditional bank accounts. Open a virtual bank...",
    link: "https://www.enkash.com/resources/blog/benefits-of-virtual-bank-account/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/01/What-is-a-virtual-account-and-how-your-business-can-benefit-for-it.jpg",
    imageAlt:
      "What Is a Virtual Account, and How Your Business Can Benefit from It?",
    title:
      "What Is a Virtual Account, and How Your Business Can Benefit from It?",
    date: "Jan 27, 2023",
    description:
      "Virtual banking has penetrated the large-scale sector, and every small-scale and medium-scale business is also moving towards virtual banking. Virtual bank accounts are trending because of...",
    link: "https://www.enkash.com/resources/blog/what-is-virtual-account-number/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/01/Witness-an-era-of-financial-ease-with-with-virtual-accounts.jpg",
    imageAlt: "Learn How Virtual Accounts Can Benefit Your Business",
    title: "Learn How Virtual Accounts Can Benefit Your Business",
    date: "Jan 09, 2023",
    description:
      "Virtual account allows businesses to initiate seamless financial transactions and maintain track records. Various large, medium, and small-scale businesses are shifting towards...",
    link: "https://www.enkash.com/resources/blog/how-virtual-accounts-can-benefit-your-business/",
  },
];

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

export { blogData, faqData };
