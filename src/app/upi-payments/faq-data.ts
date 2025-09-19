import { TFAQProps } from "@/src/types/faq"

const faqData: TFAQProps[] = [
  {
    question: "What is a UPI Payment Gateway?",
    answer: [
      {
        heading:
          "A UPI Payment Gateway is a platform that allows businesses to accept payments directly from customers’ bank accounts using the Unified Payments Interface (UPI). EnKash’s UPI Payment Gateway enables seamless and secure transactions by connecting your business with UPI-supported apps like Google Pay, PhonePe, BHIM, and more, ensuring smooth payment processing and instant fund transfer.",
      },
    ],
  },
  {
    question: "What is a UPI ID?",
    answer: [
      {
        heading:
          "A UPI ID (Unified Payments Interface Identification) is a unique identifier used for making payments and transferring money via the UPI network. It functions as a Virtual Payment Address (VPA) that is linked to a user’s bank account. Instead of sharing sensitive bank account details, a customer only needs to provide their UPI ID (for example, username@bankname) to make or receive payments.",
      },
      {
        heading:
          "For businesses using EnKash’s UPI payment gateway, you can create a personalized UPI ID to accept payments directly into your bank account. This simple, secure method eliminates the need to share long bank account details and provides a convenient way for customers to complete transactions.",
      },
    ],
  },
  {
    question: "What is UPI PIN?",
    answer: [
      {
        heading:
          "A UPI PIN (Unified Payments Interface Personal Identification Number) is a unique 4-6 digit code used to authorize transactions on the UPI network. It acts as a password that ensures secure payments and helps prevent unauthorized transactions. The UPI PIN is required when making payments, transferring money, or performing any action involving UPI-enabled apps, such as Google Pay, PhonePe, or BHIM.",
      },
      {
        heading:
          "When a customer uses UPI payment solutions like EnKash, they will be prompted to enter their UPI PIN to authorize the payment. This ensures that only the account holder can approve transactions, adding an extra layer of security to the payment process.",
      },
    ],
  },
  {
    question: "What is UPI and how does it work for B2B Collections?",
    answer: [
      {
        heading:
          "UPI is a digital payment system that allows instant money transfers between bank accounts using a Virtual Payment Address (VPA). In B2B collections, businesses can share their UPI VPA with their clients to initiate instant payments for invoices or bills.",
      },
    ],
  },
  {
    question: "How does a UPI Payment Gateway work?",
    answer: [
      {
        heading:
          "A UPI Payment Gateway processes payments by facilitating real-time money transfers between a customer's and a business’s bank accounts.",
      },
      {
        heading:
          "When a customer selects UPI as a payment option, the gateway sends a collect request to the customer’s UPI app (like PhonePe or BHIM). The customer approves the payment using their UPI PIN, and the funds are transferred instantly to the business’s account. EnKash handles the routing, ensuring quick and secure transactions with high success rates.",
      },
    ],
  },
  {
    question:
      "What is the maximum UPI payment limit for transactions for a customer?",
    answer: [
      {
        heading:
          "The transaction limit for UPI payments is set by the Reserve Bank of India (RBI). It typically varies between ₹1 lakh to ₹2 lakh per transaction, depending on the bank and the type of transaction.",
      },
      {
        heading:
          "For businesses using EnKash’s UPI payment gateway, this limit allows you to process large transactions efficiently, while ensuring compliance with regulatory requirements.",
      },
    ],
  },
  {
    question: "Which UPI apps are supported by EnKash?",
    answer: [
      {
        heading:
          "EnKash supports all major UPI apps, including BHIM, PhonePe, Google Pay, Paytm, WhatsApp Pay, AmazonPay and others.",
      },
      {
        heading:
          "This wide compatibility allows your customers to pay using their preferred UPI app, ensuring a smooth and convenient transaction experience.",
      },
    ],
  },
  {
    question: "How can I collect payments via UPI QR code?",
    answer: [
      {
        heading:
          "To collect payments via UPI QR code, you can generate a static or dynamic UPI QR code through the EnKash dashboard. Once the QR code is displayed on your website, app, or physical store, customers can scan it using their UPI app to make instant payments. This method is particularly useful for businesses that operate in person or want to accept payments without a complex setup.",
      },
      {
        heading: "Learn more about QR Codes >>",
      },
    ],
  },
  {
    question:
      "How does EnKash ensure higher success rates on UPI transactions?",
    answer: [
      {
        heading:
          "EnKash’s UPI payment uses advanced payment routing technology to optimize transaction success. Our system intelligently routes payments to the best possible bank servers, reducing transaction failures. We also offer enhanced reconciliation tools, ensuring that payments are successfully processed with minimal interruptions, so your business can avoid payment losses.",
      },
    ],
  },
  {
    question:
      "Is there a separate integration required to accept UPI payments on EnKash Payment Gateway?",
    answer: [
      {
        heading:
          "No, EnKash’s UPI payment gateway is designed to integrate seamlessly with your existing systems. Whether you’re using a website or mobile app, EnKash provides easy-to-use APIs and SDKs that eliminate the need for complex integrations. You can start accepting UPI payments with minimal setup time and effort.",
      },
    ],
  },
  {
    question:
      "What are the different UPI checkout flows I can explore for my website/app?",
    answer: [
      {
        heading:
          "EnKash offers multiple UPI checkout flows to suit your business model:",
      },
      {
        bullets: [
          "UPI Intent Flow: Automatically redirects customers to their UPI app for easy payment approval.",
          "UPI Payment Links: Embed links on your website or send them via email/SMS for quick payments.",
          "UPI Dynamic QR Code: Generate a unique QR code for each transaction for quick and contactless payments.",
          "UPI AutoPay: Set up recurring payments for subscription-based businesses to automate collections and improve customer retention.",
        ],
      },
    ],
  },
  {
    question:
      "Are there any transaction fees associated with using UPI payments?",
    answer: [
      {
        heading:
          "UPI transactions are typically free or incur minimal charges, making it an economical payment solution for businesses.",
      },
      {
        heading:
          "EnKash helps you save on transaction fees compared to traditional payment methods, ensuring more of your revenue stays with your business.",
      },
    ],
  },
  {
    question: "What kind of support does EnKash provide for UPI payments?",
    answer: [
      {
        heading:
          "EnKash offers 24/7 customer support to assist you with any issues related to UPI payments. Whether you need help with integration, troubleshooting, or payment reconciliation, our expert team is available to ensure you have the best experience.",
      },
    ],
  },
  {
    question: "How to change UPI PIN?",
    answer: [
      {
        heading: "To change your UPI PIN, follow these steps:",
      },
      {
        bullets: [
          "Open the UPI-enabled app (like Google Pay, PhonePe, Paytm, BHIM, or your bank’s app).",
          "Go to the UPI / Bank Account section.",
          "Select the bank account for which you want to change the PIN.",
          `Tap on Change UPI PIN (or "Reset UPI PIN" if you forgot it).`,
          `Enter your existing UPI PIN (for change) or debit card details (for reset).`,
          "Set a new UPI PIN and confirm it.",
        ],
      },
    ],
  },
  {
    question: "What is VPA in UPI?",
    answer: [
      {
        heading:
          "VPA in UPI stands for Virtual Payment Address. It is a unique identifier that works like an email ID for your UPI transactions. Instead of sharing your bank account number and IFSC code, you can simply use a VPA to send or receive money.",
      },
    ],
  },
]

export default faqData
