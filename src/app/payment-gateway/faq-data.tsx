import { TFAQProps } from "@/src/types/faq"
import Link from "next/link"

const faqData: TFAQProps[] = [
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

  // ✅ NEW FAQS ADDED BELOW

  {
    question: "How to create a Payment Gateway in India?",
    answer: [
      {
        heading:
          "Building a payment gateway in India requires RBI compliance, secure tech infrastructure, and banking partnerships. The core steps are:",
      },
      {
        bullets: [
          "Choose your model – Either apply for an RBI Payment Aggregator license or integrate with an existing licensed gateway.",
          "Build secure payment APIs – Checkout flows, UPI and card rails, refunds, settlements, tokenization, and dashboards.",
          "Meet compliance requirements – PCI-DSS, encryption, fraud monitoring, KYC, dispute management, and audit logs.",
          "Partner with banks and networks – Tie-ups with acquiring banks, UPI partners, and card networks.",
          "Test and launch – Validate payments, refunds, settlements, and reconciliation before going live.",
        ],
      },
      {
        heading:
          "The faster way? Sign up with EnKash and let us handle compliance, banking infrastructure, and technology for you.",
      },
    ],
    answerHTML: (
      <div>
        <ul>
          <li>
            <p>
              <b> Choose your model – </b>Either apply for an RBI Payment
              Aggregator license or integrate with an existing licensed gateway.
            </p>
          </li>
          <li>
            <p>
              <b> Build secure payment APIs –</b> Checkout flows, UPI and card
              rails, refunds, settlements, tokenization, and dashboards.
            </p>
          </li>
          <li>
            <p>
              <b>Meet compliance requirements –</b> PCI-DSS, encryption, fraud
              monitoring, KYC, dispute management, and audit logs.
            </p>
          </li>
          <li>
            <p>
              <b>Partner with banks and networks –</b> Tie-ups with acquiring
              banks, UPI partners, and card networks.
            </p>
          </li>
          <li>
            <p>
              <b>Test and launch – </b>Validate payments, refunds, settlements,
              and reconciliation before going live.
            </p>
          </li>
        </ul>
        <p>
          {
            "Validate payments, refunds, settlements, and reconciliation before going live. There is a much better and faster way -"
          }
          <Link
            className="mx-1"
            href={`${process.env.NEXT_PUBLIC_URL}/sales`}
            rel="noopener noreferrer"
            target="_blank"
          >
            signup
          </Link>
          {" with EnKash and let us take care of all that."}
        </p>
      </div>
    ),
  },

  {
    question: "Which payment gateway is best in India?",
    answer: [
      {
        heading:
          "The best payment gateway depends on your business needs. Most companies look for high success rates, fast onboarding, strong security, and support for UPI, cards, and netbanking.",
      },
      {
        heading:
          "Popular payment gateways in India include EnKash, Razorpay, Cashfree, PayU and PhonePe. Each offers UPI, cards and netbanking support.",
      },
      {
        heading:
          "For businesses that want a gateway with stronger compliance, faster onboarding and deeper control, EnKash Payment Gateway offers a clear advantage because it is built on RBI-approved PA/PG infrastructure, provides real-time settlements, and includes PCI-DSS security, and advanced fraud checks by default.",
      },
    ],
  },
  {
    question: "What are payment gateway charges?",
    answerHTML: (
      <div>
        <p>
          Payment gateway charges are the fees businesses pay for processing
          online transactions. These usually include:
        </p>
        <ul>
          <li>
            <p>
              <b>MDR (Merchant Discount Rate): </b> A small percentage charged
              on every successful transaction.
            </p>
          </li>
          <li>
            <p>
              <b> Payment mode fees:</b> Different for UPI, cards, netbanking or
              wallets.
            </p>
          </li>
          <li>
            <p>
              <b>Platform or setup fees (if applicable): </b> Some gateways
              charge onboarding or annual maintenance fees.
            </p>
          </li>
          <li>
            <p>
              <b>Settlement or payout charges: </b> Fees for faster settlements
              like T+0 or instant payouts.
            </p>
          </li>
        </ul>
        <p>
          {
            "EnKash Payment Gateway keeps pricing simple with transparent MDR, no hidden costs. "
          }
          <Link
            className="mx-1"
            href={`${process.env.NEXT_PUBLIC_URL}/sales`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Talk to us
          </Link>
          {" to get the best pricing."}
        </p>
      </div>
    ),
  },
  {
    question: "How to integrate UPI payment gateway in a website?",
    answerHTML: (
      <div>
        <p>
          To integrate a UPI payment gateway in your website, you typically
          follow these steps:
        </p>
        <ul>
          <li>
            <p>
              <b>Choose a UPI-enabled payment gateway </b> Select a provider
              that supports UPI along with cards and netbanking.
            </p>
          </li>
          <li>
            <p>
              <b> Complete signup and KYC</b>Register your business, submit KYC
              documents and get merchant approval.
            </p>
          </li>
          <li>
            <p>
              <b>Get API keys or plugins </b> Use the provider’s APIs, SDKs or
              ready plugins for platforms like Shopify, WooCommerce or custom
              sites.
            </p>
          </li>
          <li>
            <p>
              <b>Integrate and test </b> Add the UPI payment option on the
              checkout page, test in sandbox, then move to live.
            </p>
          </li>
        </ul>
        <p>
          {
            "To get UPI, cards and netbanking in a single integration, developer friendly APIs, clear documentation and real-time reports, you can add UPI payments to your website quickly while staying compliant with Indian regulations with EnKash. "
          }
          <Link
            className="mx-1"
            href={`${process.env.NEXT_PUBLIC_URL}/sales`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Talk to our team
          </Link>
          {"to get started."}
        </p>
      </div>
    ),
  },
  {
    question: "Is UPI a payment gateway?",
    answer: [
      {
        heading:
          "No, UPI is not a payment gateway. UPI is a real-time payment system, while a payment gateway is the service that processes and routes UPI transactions for businesses.",
      },
    ],
  },
  {
    question: "What is Chargeback in payment gateways?",
    answer: [
      {
        heading:
          "A chargeback occurs when a customer disputes a transaction with their bank, leading to payment reversal. It protects buyers but may result in fees or losses for merchants if not managed properly.",
      },
    ],
  },
  {
    question: " Is EnKash PCI-DSS compliant?",
    answer: [
      {
        heading:
          "Yes, EnKash is PCI-DSS compliant, ensuring secure handling of cardholder data and meeting global payment security standards.",
      },
    ],
  },
  {
    question: "What payment methods are supported by a payment gateway?",
    answer: [
      {
        heading:
          "Payment gateways support multiple methods including UPI, credit/debit cards, net banking, wallets, EMI, BNPL, and bank transfers depending on the provider.",
      },
    ],
  },
  {
    question: "Which type of e-commerce uses payment gateways?",
    answer: [
      {
        heading:
          "All e-commerce models—including B2C, B2B, D2C, and marketplace platforms—use payment gateways to accept online payments securely.",
      },
    ],
  },
  {
    question: "What is Tokenization in a payment gateway?",
    answer: [
      {
        heading:
          "Tokenization replaces sensitive card data with a secure, randomly generated token. It protects customer information and enables safe recurring or saved payments.",
      },
    ],
  },
  {
    question: "How does encryption secure payment gateways?",
    answer: [
      {
        heading:
          "Encryption converts payment data into unreadable code during transmission, ensuring that sensitive details like card numbers remain protected from fraud and unauthorized access",
      },
    ],
  },
  {
    question: "What are the types of Payment Gateways?",
    answerHTML: (
      <div>
        <p>
          The main types of payment gateways are Hosted, Self-Hosted, and
          API/Non-Hosted gateways. Hosted gateways redirect users to a secure
          checkout page, self-hosted gateways collect data on your site but
          process it externally, and API gateways enable fully integrated,
          seamless checkout within your website or app.
        </p>

        <p>
          <Link
            className="mx-1"
            href={`${process.env.NEXT_PUBLIC_URL}/resources/blog/hosted-vs-integrated-payment-gateways`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Learn more about hosted vs integrated payment gateway
          </Link>
        </p>
      </div>
    ),
  },
]

export default faqData
