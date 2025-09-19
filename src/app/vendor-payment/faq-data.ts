import { TFAQProps } from "@/src/types/faq"

const faqData: TFAQProps[] = [
  {
    question: "What are vendor payments?",
    answer: [
      {
        heading:
          "Vendor payment refers to the process of disbursing funds from a business or organization to its suppliers or vendors in exchange for goods or services that have been provided. It's a critical aspect of the procure-to-pay cycle in business operations. EnKash’s vendor payment solution focuses on helping businesses manage vendors end-to-end. You can use the express pay option for regular and repetitive vendor payments.",
      },
      {
        heading:
          "Efficient vendor pay systems help organizations maintain strong vendor relationships, optimize cash flow, negotiate favorable payment terms, and ensure compliance with contractual agreements. Automation and integration with financial systems enhance the accuracy and efficiency of the vendor payment process.",
      },
      {
        heading:
          "Managing vendor payables efficiently is a key part of optimizing working capital and maintaining accurate accounts payable records.",
      },
    ],
  },
  {
    question: "What is vendor reconciliation?",
    answer: [
      {
        heading:
          "Vendor reconciliation, also known as supplier reconciliation, is the process of comparing and verifying the financial records and transactions between a company and its vendors or suppliers. The goal of vendor reconciliation is to ensure that the financial statements of both parties align and that any discrepancies or differences are identified and resolved accurately.",
      },
      {
        heading:
          "Moreover, vendor reconciliation is a critical aspect of maintaining financial integrity, controlling costs, and managing relationships with suppliers. It helps in detecting errors, avoiding overpayments or underpayments, and ensuring that the financial statements accurately represent the company's liabilities and financial position concerning its vendors.",
      },
    ],
  },
  {
    question: "How can I pay my vendors through EnKash?",
    answer: [
      {
        heading:
          "Follow the steps below to make vendor payments via the EnKash platform:",
      },
      {
        bullets: [
          "Log in to EnKash with valid credentials and complete KYC",
          "Go to Vendor Payments and upload invoice",
          "Add maker-checker approval workflow",
          "Select vendor invoices to be paid individually or in bulk with one click with the preferred payment mode",
        ],
      },
    ],
  },
  {
    question: "How does EnKash ensure payment security?",
    answer: [
      {
        heading:
          "EnKash uses multi-layer encryption, two-factor authentication, and fraud monitoring to keep transactions secure.",
      },
    ],
  },
  {
    question: "Can I integrate EnKash with my ERP software?",
    answer: [
      {
        heading:
          "Yes, EnKash integrates seamlessly with ERPs like Tally, QuickBooks, and Zoho.",
      },
    ],
  },
  {
    question: "Does EnKash handle TDS deductions?",
    answer: [
      {
        heading:
          "Absolutely! EnKash automates TDS deductions and filings to ensure compliance.",
      },

      {
        bullets: [
          "By creating an invoice on the EnKash platform",
          "After uploading a vendor invoice and editing it, or",
          "By syncing your Tally integrated system with the EnKash portal",
        ],
      },
    ],
  },
  {
    question:
      "Who will pay the TDS to the government in case of vendor payment?",
    answer: [
      {
        heading:
          "TDS (Tax Deducted at Source) is typically deducted and deposited by the person paying the vendor. In the context of vendor payments, the responsibility for deducting TDS and remitting it to the government lies with the party making the payment.",
      },
    ],
  },
  {
    question:
      "Can I track payment invoices that are paid through cash and cheque?",
    answer: [
      {
        heading:
          "You can check the status of the vendor payment made in cash and cheque provided you have integrated Tally with EnKash. You cannot track these payments but check their status.",
      },
    ],
  },
  {
    question:
      "How can I provide vendor payment details to my CA for bookkeeping?",
    answer: [
      {
        heading:
          "With EnKash, you can allocate the auditor role to your CA while setting the maker-checker approver workflow on the dashboard. This will allow your CA to view all the vendor payments made on the platform.",
      },
    ],
  },
  {
    question: "What payment methods are supported?",
    answer: [
      {
        heading:
          "EnKash supports UPI, NEFT, RTGS, credit/debit cards, and more for flexible vendor payments.",
      },
    ],
  },
  {
    question: "What is the vendor's meaning?",
    answer: [
      {
        heading:
          "A vendor is a person or business that provides goods or services to another business or organization. In a business context, vendors can include suppliers of raw materials, service providers, contractors, consultants, or anyone a company purchases from. Managing vendor relationships is crucial for ensuring timely deliveries, quality service, and maintaining smooth business operations.",
      },
    ],
  },
]

export default faqData
