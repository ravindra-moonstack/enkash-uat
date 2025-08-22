const faqData = [
  {
    question: "What are make payments in B2B payments?",
    answer: [
      {
        heading:
          `In B2B, "Make Payments" means a business initiating a payment to another business for goods or services through methods like bank transfers, UPI, cards, or virtual accounts. It’s a crucial step in accounts payable and often includes approvals, invoice matching, and scheduling.`,
      },
    ],
  },
  {
    question: "How does the rental/vendor payment flow work?",
    answer: [
      {
        heading:
          "You can schedule recurring payments like rent or one-time vendor payouts by adding payee details and selecting the appropriate mode. Once set, the system automates the transaction based on the defined date and rules. Reminders, approvals, and real-time tracking are built in for complete visibility.",
      },
    ],
  },
  {
    question: "Can I set approval workflows for payments?",
    answer: [
      {
        heading:
          "Definitely. You can set multi-level approval workflows tailored to your organization’s hierarchy. For example, a payment can be configured to go from a department head to finance and then to the CFO before it is processed, ensuring both control and compliance.",
      },
    ],
  },
  {
    question: "How fast are payouts?",
    answer: [
      {
        bullets: [
          "IMPS & UPI: Instant, available 24/7 including weekends and holidays.",
          "NEFT & RTGS: Typically completed on the same business day, depending on banking hours. Speed depends on the chosen method, but you always have options for real-time or scheduled payouts.",
        ],
      },
      {
        heading:
          "Ultimately, this improvement in the invoicing process can significantly enhance collections.",
      },
    ],
  },
  {
    question: "What payment methods are available?",
    answer: [
      {
        heading:
          "EnKash supports multiple secure payment modes such as IMPS, NEFT, RTGS, UPI, and more, allowing you to choose the most suitable option based on transaction size and urgency.",
      },
    ],
  },
]

export default faqData
