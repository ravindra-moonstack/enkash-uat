import { TFAQProps } from "@/src/types/faq"

export const faqData: TFAQProps[] = [
  {
    question: "What are the PPI wallet limits, including Min KYC and Full KYC?",
    answer: [
      {
        heading:
          "Min KYC: Up to ₹10,000 balance, ₹10,000 monthly load/spend.\nFull KYC: Up to ₹2 Lakh balance at any time, with no monthly limits on loads or spends.",
      },
    ],
  },
  {
    question: "What are the beneficiary limits?",
    answer: [
      {
        heading:
          "You can add unlimited beneficiaries. There are no restrictions on the number of bank accounts or wallets linked for transfers.",
      },
    ],
  },
  {
    question: "How do cobrand partners manage funds?",
    answer: [
      {
        heading:
          "As a cobrand partner, you maintain a master wallet with EnKash. You can load funds to individual user wallets only up to the available balance in your master wallet.",
      },
    ],
  },
  {
    question: "Is there a wallet expiry?",
    answer: [
      {
        heading:
          "Wallets do not expire as long as they are active. Inactive wallets (no transactions for 12 months) may be flagged, but funds remain safe and can be reactivated anytime.",
      },
    ],
  },
  {
    question: "What KYC methods are supported?",
    answer: [
      {
        heading:
          "We support seamless digital KYC (Aadhaar e-sign or OTP-based), video KYC, and offline options. Your users can complete it directly in-app for quick upgrades.",
      },
    ],
  },
  {
    question: "Is user data shared with the cobrand partner?",
    answer: [
      {
        heading:
          "Yes, as per RBI co-branding guidelines, cobrand partners get access to relevant transaction data, KYC status, and wallet details for compliance and operations. Sensitive data is shared securely and only as needed.",
      },
    ],
  },
  {
    question: "Are IMPS transfers allowed from the wallet?",
    answer: [
      {
        heading:
          "Yes, instant IMPS transfers to bank accounts are fully supported for Full KYC wallets – fast, 24/7, and reliable for payouts. IMPS is not allowed on Min KYC wallets.",
      },
    ],
  },
  {
    question: "Are there any limits on IMPS transfers from wallets?",
    answer: [
      {
        heading:
          "Up to ₹2 Lakh per transaction, no monthly cap overall. However, the maximum is ₹2 Lakh per beneficiary per month.",
      },
    ],
  },
  {
    question: "Can I issue cards under a co-branding arrangement?",
    answer: [
      {
        heading:
          "Yes! Under our co-branding model, you can issue RuPay prepaid cards (virtual or physical) in your brand name. This is fully supported and helps add new features like card-based spending for your users.",
      },
    ],
  },
  {
    question:
      "Are there any restrictions or guidelines for using PPI wallets for rent payments or education payments?",
    answer: [
      {
        heading:
          "PPI wallets can be used for legitimate rent and education payments as per RBI guidelines for prepaid instruments. All transactions must comply with RBI rules on permitted use cases, KYC requirements, and limits – no special restrictions beyond standard PPI regulations. We ensure full compliance in our setup.",
      },
    ],
  },
]
