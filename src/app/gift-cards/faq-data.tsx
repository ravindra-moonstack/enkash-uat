import { TFAQProps } from "@/src/types/faq"
import Link from "next/link"

const faqData: TFAQProps[] = [
  {
    question: "What are gift cards?",
    answer: [
      {
        heading:
          "Gift cards are prepaid cards containing a specific monetary value, which can be used to purchase goods or services at the issuing retailer or a network of participating merchants. They are typically sold by retailers, online stores, or platforms like EnKash and can be physical cards or digital codes sent by email or text. Gift cards by EnKash are non-reloadable and non-transferable. Cash-outs or fund transfers are also not permitted.",
      },
    ],
  },
  {
    question: "Why are corporate gift cards important for businesses?",
    answer: [
      {
        heading:
          "Gift cards are essential for businesses as they are a versatile and convenient way to show appreciation and offer rewards. They allow recipients the freedom to choose something they truly desire, making them a more personalized and meaningful gift than traditional options.",
      },
    ],
  },
  {
    question: "Why should a startup consider offering gift cards to employees?",
    answer: [
      {
        heading:
          "Startups should consider offering gift cards to incentivize and recognize the performance of their employees and partners. This can help motivate and improve their overall productivity. Gift cards are a cost-effective way to reward employees and partners, as they can be purchased in bulk at a discounted rate. Gift cards can boost morale by providing a tangible reward for the efforts put in by the people. This can create a positive and supportive workplace culture.",
      },
    ],
  },
  {
    question: "Is corporate gifting taxable?",
    answer: [
      {
        heading:
          "The taxability of corporate gifting depends on the value of the gift. If the gift is within or less than the taxable limit, then there is no need to pay any tax. However, if the gift card limit exceeds Rs 5000, it will be taxable.",
      },
    ],
  },
  {
    question: "What is a corporate gift card?",
    answer: [
      {
        heading:
          "A corporate gift card is a prepaid card organizations use to gift their employees, clients, customers, or partners. These cards are loaded with money up to a certain specified amount and are among the best ways to appreciate people. These cards can be redeemed online or in-store.",
      },
    ],
  },
  {
    question: "How to access a corporate gift card?",
    answer: [
      {
        heading: "",
        bullets: [
          "Register on EnKash and enter all the company details required",
          "After all the details are validated, the company becomes eligible for gift cards",
          "The company can load money into their account and request the cards as required",
          "These gift cards can be allocated to the recipient with a preloaded amount as per the occasion",
        ],
      },
    ],
  },
  {
    question: "What are the rules for corporate gifting?",
    answer: [
      {
        heading:
          "Corporate gifts should be aligned with the company's ethics and policies. These gifts must be legal. There must be transparency in corporate gifting and sensitivity towards all cultures.",
      },
    ],
  },
  {
    question: "Is corporate gifting profitable?",
    answer: [
      {
        heading:
          "Organizations have observed enhanced retention rates through the implementation of corporate gifting strategies. Hence, opting for gift cards, such as those offered by EnKash, proves to be a mutually beneficial strategy. By motivating stakeholders with secure, convenient, and easily manageable gift cards that offer access across various categories, organizations can expect improved outcomes and increased productivity.",
      },
    ],
  },
  {
    question: "What is the TDS rate for corporate gifting?",
    answer: [
      {
        heading:
          "A corporate gift can attract a TDS of 10% if the gift value exceeds Rs 20,000 in a year. This is decided under Section 194R of the Income Tax Act, 1961.",
      },
    ],
  },
  {
    question: "How to avoid gift tax as an employer?",
    answer: [
      {
        heading:
          "Businesses can avoid gift tax by keeping the value of gifts within the tax-free limit of 5000 INR in a calendar year.",
      },
    ],
  },

  /* 🔽 NEW FAQs ADDED BELOW 🔽 */

  {
    question: "Where can businesses buy gift cards online securely?",

    answerHTML: (
      <div>
        <p>
          {
            "Businesses can buy gift cards online through trusted corporate gifting platforms that offer strong security, compliance, and invoice support."
          }

          {"With EnKash Gift Cards, businesses get:"}
        </p>
        <ul>
          <li>
            {" "}
            Access to verified brand vouchers across shopping, food, travel, and
            entertainment
          </li>
          <li>Secure digital issuance with role-based access and approvals</li>

          <li>
            {" "}
            <Link
              className="mx-1"
              href={`${process.env.NEXT_PUBLIC_URL}/resources/blog/what-is-gst`}
              rel="noopener noreferrer"
              target="_blank"
            >
              GST
            </Link>
            -compliant invoices for easy accounting
          </li>
          <li>Centralised tracking from a single dashboard</li>
        </ul>
        <p>
          EnKash also integrates gifting with expense management,{" "}
          <Link
            className="mx-1"
            href={`${process.env.NEXT_PUBLIC_URL}/resources/blog/prepaid-cards-a-defintive-guide-to-growth`}
            rel="noopener noreferrer"
            target="_blank"
          >
            prepaid cards,
          </Link>
          and{" "}
          <Link
            className="mx-1"
            href={`${process.env.NEXT_PUBLIC_URL}/resources/blog/benefits-of-paying-utility-bill-payment-online`}
            rel="noopener noreferrer"
            target="_blank"
          >
            bill payments,
          </Link>{" "}
          helping finance teams manage rewards and spends together.
        </p>
      </div>
    ),
  },
  {
    question: "Can companies sell gift cards through a digital platform?",
    answer: [
      {
        heading:
          "Yes. Companies can sell gift cards digitally using platforms that support bulk issuance, APIs, and white-label options.",
        bullets: [
          "Issue gift cards digitally to customers, partners, or channel teams",
          "Distribute rewards instantly via email or mobile",
          "Track redemptions and balances in real time",
          "Use gift cards as part of sales incentives, loyalty programs, or promotions",
        ],
      },
      {
        heading:
          "For fintechs and enterprises, EnKash also offers API-based and co-branded solutions for large-scale distribution.",
      },
    ],
  },
  {
    question: "Are discount gift cards available for corporate gifting?",
    answerHTML: (
      <div>
        <p>
          {
            "Yes. Many brands offer discounted gift cards for bulk or corporate purchases."
          }

          {"With EnKash "}

          <Link
            className="mx-1"
            href={`${process.env.NEXT_PUBLIC_URL}/resources/blog/guide-to-gift-cards-where-to-buy`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Gift Cards,
          </Link>
          {" businesses can:"}
        </p>
        <ul>
          <li> Access bulk pricing and corporate discounts</li>
          <li>Reduce overall reward and incentive costs</li>

          <li>Choose from multiple popular brands in one place</li>
          <li>Control budgets with predefined limits and approvals</li>
        </ul>
        <p>
          This makes EnKash ideal for employee rewards, festive gifting, sales
          incentives, and customer engagement programs
        </p>
      </div>
    ),
  },
  {
    question: "How can recipients redeem a gift card?",
    answer: [
      {
        heading:
          "To redeem a gift card, recipients can use the card details or app-based access to shop online or in-store at supported merchants. Redemption steps vary based on the gift card type and merchant acceptance.",
      },
    ],
  },
  {
    question:
      "Why should businesses choose digital gift cards over cash rewards?",
    answer: [
      {
        heading:
          "Digital gift cards offer better tracking, flexibility, and compliance than cash rewards. They are easier to distribute, customizable in value, and provide recipients with the freedom to choose how they want to redeem them.",
      },
    ],
  },
  {
    question: "Can gift cards be used across multiple stores or platforms?",
    answer: [
      {
        heading:
          "Many modern gift cards are designed for wide acceptance and can be redeemed across multiple online or offline stores. This flexibility makes them ideal for corporate gifting and employee reward programs.",
      },
    ],
  },
  {
    question: "Is it safe to buy gift cards online for employees?",
    answer: [
      {
        heading:
          "Yes, it is safe to buy gift cards online when using a verified gift cards site that offers security features like tracking, blocking, and controlled access. This ensures protection against loss, misuse, or unauthorized transactions.",
      },
    ],
  },
  {
    question: "What types of gift cards are available for businesses?",
    answer: [
      {
        heading:
          "Businesses can choose from different types of gift cards based on their use case and audience.",
        bullets: [
          "Brand-specific gift cards usable at a single merchant",
          "Multi-brand gift cards accepted across multiple stores or platforms",
          "Category-based cards for food, shopping, travel, or entertainment",
          "Digital gift cards issued instantly in bulk",
        ],
      },
    ],
  },
  {
    question: "Can gift cards be used for employee rewards and incentives?",
    answer: [
      {
        heading:
          "Yes. Gift cards are widely used for employee rewards and incentive programs.",
        bullets: [
          "Performance recognition and spot rewards",
          "Festive and annual employee gifting",
          "Sales incentives and referral programs",
          "Engagement initiatives across distributed teams",
        ],
      },
      {
        heading:
          "Digital gift cards are easy to distribute and work well for remote or multi-location organisations.",
      },
    ],
  },
  {
    question: "Do corporate gift cards come with GST invoices?",
    answer: [
      {
        heading:
          "Yes, when purchased through authorised corporate platforms, gift cards come with GST-compliant invoices.",
        bullets: [
          "Maintain proper accounting records",
          "Simplify audits and compliance",
          "Track gifting expenses clearly",
          "Align rewards with internal finance policies",
        ],
      },
      {
        heading: "Invoice availability may vary by brand and voucher type.",
      },
    ],
  },
]

export default faqData
