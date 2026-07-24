import { TFAQProps } from "@/src/types/faq"
import Link from "next/link"

const faqData: TFAQProps[] = [
  {
    question: "What is a payment gateway?",
    answer: [
      {
        heading:
          "A payment gateway is a secure payment technology that authorizes, encrypts, and processes online payments between customers, merchants, banks, and payment networks. It securely transfers payment information, verifies transaction details, obtains approval from the customer's issuing bank, and enables the safe transfer of funds. Payment gateways support multiple payment methods, including UPI, credit cards, debit cards, net banking, digital wallets, and Buy Now, Pay Later (BNPL), making them an essential component of modern digital commerce.",
      },
    ],
  },
  {
    question: "What payment methods are supported by EnKash Payment Gateway?",
    answerHTML: (
      <div>
        <p>
          EnKash Payment Gateway supports an extensive range of payment methods through a single integration, offering unparalleled flexibility for businesses. Here’s what we support:
        </p>
        <ul>
          <li>
            <p>
              <b>Cards: </b> All major card networks, including RuPay, Visa, MasterCard, Amex, Diners Club, and Maestro.
            </p>
          </li>
          <li>
            <p>
              <b>Net Banking:</b> Access to over 90 public and private banks across India.
            </p>
          </li>
          <li>
            <p>
              <b>UPI: </b> Compatibility with 20+ UPI apps, including Google Pay, PhonePe, Paytm, BHIM, and Amazon Pay.
            </p>
          </li>
          <li>
            <p>
              <b>Buy Now, Pay Later (BNPL): </b> Partnerships with 35+ providers for card-based and cardless EMI options, as well as pay-later services.
            </p>
          </li>
          <li>
            <p>
              <b>Wallets: </b> Support for 9+ digital and mobile wallets, such as Paytm, Amazon Pay, Freecharge, and MobiKwik.
            </p>
          </li>
        </ul>
        <p>
          EnKash ensures customers can choose their preferred payment mode, enhancing their overall payment experience.
        </p>
      </div>
    ),
  },
  {
    question: "What types of platforms and payment gateway integrations are supported by EnKash?",
    answerHTML: (
      <div>
        <p>
          EnKash Payment Gateway provides versatile integrations to help businesses across various platforms accept payments effortlessly. Here’s how:
        </p>
        <ul>
          <li>
            <p>
              <b>Web and Mobile Integrations: </b> EnKash offers seamless integration options through RESTful APIs and mobile SDKs compatible with Android, iOS, React Native, Flutter, Cordova, Xamarin, and Capacitor.
            </p>
          </li>
          <li>
            <p>
              <b>E-commerce and Website Plugins:</b> Our gateway supports plug-and-play integrations with leading platforms such as Shopify, WooCommerce, Magento, PrestaShop, Wix, OpenCart, WHMCS, and WordPress, among others.
            </p>
          </li>
          <li>
            <p>
              <b>Custom Solutions: </b> For merchants with unique requirements, EnKash provides tailored integrations to meet specific needs, ensuring smooth payment acceptance across websites, mobile apps, and other digital channels.
            </p>
          </li>
        </ul>
        <p>
          With EnKash, merchants can quickly integrate payments across channels, streamlining their operations and enhancing customer convenience.
        </p>
      </div>
    ),
  },
  {
    question: "How does a payment gateway work?",
    answer: [
      {
        heading:
          "As soon as a customer makes any payment, the payment gateway collects and encrypts the payment details. This information is further sent to the payment processor and the bank for authorization. After approval, the funds are transferred to the receiver’s account, completing the transaction.",
      },
    ],
  },
  {
    question: "What is the price of a payment gateway?",
    answerHTML: (
      <div>
        <p>EnKash provides transparent pricing.</p>
        <p>
          <Link
            className="mx-1"
            href={`${process.env.NEXT_PUBLIC_URL}/sales`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Talk to our sales team
          </Link>
          {" today for detailed payment gateway charges or to explore tailored plans designed for your business needs."}
        </p>
      </div>
    ),
  },
  {
    question: "How to integrate a payment gateway with a website?",
    answerHTML: (
      <div>
        <p>
          EnKash is a versatile payment gateway that seamlessly integrates with your website or app through the following options:
        </p>
        <ul>
          <li>
            <p>
              <b>EnKash APIs: </b> Ideal for desktop and website integrations, offering flexibility and control.
            </p>
          </li>
          <li>
            <p>
              <b>EnKash SDKs:</b> Best suited for mobile app integrations, providing smooth functionality.
            </p>
          </li>
          <li>
            <p>
              <b>EnKash Plugins: </b> Perfect for third-party platforms like{" "}
              <Link
                href="https://www.enkash.com/resources/blog/best-payment-gateway-for-woocommerce-store"
                style={{ color: "#1c5af4" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                WooCommerce
              </Link>
              {", "}
              <Link
                href="https://www.enkash.com/resources/blog/shopify-payment-gateway-india"
                style={{ color: "#1c5af4" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Shopify
              </Link>
              {", and more"}
            </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Do you provide payment analytics and reports?",
    answerHTML: (
      <div>
        <p>
          Yes, EnKash provides comprehensive analytics and reporting through your dashboard. Track transaction volumes,{" "}
          <Link
            href="https://www.enkash.com/resources/blog/what-is-payment-success-rate"
            style={{ color: "#1c5af4" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            success rates
          </Link>
          {", settlement timelines, and business metrics across daily, weekly, monthly, and yearly timeframes. Export data for accounting and reconciliation purposes."}
        </p>
      </div>
    ),
  },
  {
    question: "How do I handle chargebacks and disputes?",
    answerHTML: (
      <div>
        <p>
          EnKash provides a dedicated dispute management system through your dashboard. When a{" "}
          <Link
            href="https://www.enkash.com/resources/blog/all-you-need-to-know-about-chargeback"
            style={{ color: "#1c5af4" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            chargeback
          </Link>
          {" occurs, you're notified immediately and can submit evidence to contest it. Our support team assists throughout the dispute resolution process."}
        </p>
      </div>
    ),
  },
  {
    question: "How does EnKash prevent fraudulent transactions?",
    answer: [
      {
        heading:
          "EnKash employs multi-layered fraud prevention, including real-time transaction monitoring, velocity checks, pattern recognition, risk scoring, and integration with industry fraud databases. Suspicious transactions are flagged for review before processing.",
      },
    ],
  },
  {
    question: "What makes EnKash different from other payment gateways?",
    answer: [
      {
        heading:
          "EnKash delivers enterprise-level capabilities with a merchant-first approach. We offer transparent pricing with no hidden fees, 24/7 dedicated support that actually responds, same-day onboarding without bureaucratic delays, and robust technical infrastructure that scales as you grow. Unlike other payment gateways that prioritize enterprise clients, we provide every merchant, regardless of their size, with the same level of attention, service quality, and technical excellence.",
      },
    ],
  },
]

export default faqData
