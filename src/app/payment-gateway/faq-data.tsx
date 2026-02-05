import { TFAQProps } from "@/src/types/faq"
import Link from "next/link"

const faqData: TFAQProps[] = [
  {
    question: "What is Payment Gateway?",
    answer: [
      {
        heading:
          "A payment gateway is a secure technology platform that facilitates online payment transactions between customers and merchants. It encrypts sensitive payment information, communicates with issuing banks for authorization, and ensures secure fund transfers. The gateway acts as the critical link between your business and the financial infrastructure that processes payments.",
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
              <b> Net Banking:</b> Access to over 90 public and private banks across India.
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
        <p> EnKash ensures customers can choose their preferred payment mode, enhancing their overall payment experience.

        </p>
      </div>
    ),

  },
  {
    question:
      "What types of platforms and payment gateway integration are supported by EnKash?",
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
              <b>Custom Solutions: </b> For <span className="color-equity-blue">merchants</span> with unique requirements, EnKash <span className="color-equity-blue">provides</span> tailored integrations to <span className="color-equity-blue">meet</span> specific needs, ensuring smooth payment acceptance across websites, mobile apps, and other digital channels.
            </p>
          </li>
        </ul>
        <p>With EnKash, <span className="color-equity-blue">merchants</span> can quickly integrate payments across channels, streamlining their operations and enhancing customer convenience.
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
        <p>
          EnKash provides transparent pricing.
        </p>
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
              <b>EnKash Plugins: </b> Perfect for third-party platforms like WooCommerce, Shopify, and more
            </p>
          </li>
        </ul>
      </div>
    ),
  }
]

export default faqData
