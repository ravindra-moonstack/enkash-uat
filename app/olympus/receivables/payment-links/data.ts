import { FAQProps } from "@/components/faq/faq";

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/05/Tips-for-choosing-the-right-payment-link-generator-for-your-business.jpg",
    imageAlt:
      "Tips for Choosing the Right Payment Link Generator for Your Business",
    title:
      "Tips for Choosing the Right Payment Link Generator for Your Business",
    date: "May 18, 2023",
    description:
      "In today’s world, businesses have gone digital, and with that comes the need to facilitate online payments. One of the best ways to do this is by using a payment link generator....",
    link: "https://www.enkash.com/resources/blog/tips-for-choosing-the-right-payment-link-generator/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/03/How-to-Generate-Payment-Link-for-Seamless-Payments.jpg",
    imageAlt: "Learn How to Generate Payment Link for Seamless Payments",
    title: "Learn How to Generate Payment Link for Seamless Payments",
    date: "March 20, 2023",
    description:
      "Online transactions have become a part of our daily lives in today’s digital world. With the rise of e-commerce, numerous ways exist to purchase goods and services online. One of the most suitable...",
    link: "https://www.enkash.com/resources/blog/how-to-generate-payment-link/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/01/Setup-digital-transaction-account-and-accept-payment-online.jpg",
    imageAlt: "Set Up Digital Transaction Account and Accept Payments Online",
    title: "Set Up Digital Transaction Account and Accept Payments Online",
    date: "Jan 24, 2023",
    description:
      "The world is going digital, and the latest development in the financial sector is the unceasing rise of online payments. Pertaining to the aftereffects of COVID-19 and ease of payment, making any transaction...",
    link: "https://www.enkash.com/resources/blog/accepting-payments-online-for-business/",
  },
];

const faqData: FAQProps[] = [
  {
    question: "What is a Payment Link?",
    answer: [
      {
        heading:
          "Payment Link is a secure, no-code solution that allows businesses to collect payments quickly and easily across platforms like WhatsApp, SMS, email, and social media. Simply share the link, and your customers can make payments instantly.",
      },
    ],
  },
  {
    question: "What are the benefits of Payment Links for a business?",
    answer: [
      {
        heading:
          "EnKash Payment Links offer several advantages for businesses:",
      },
      {
        bullets: [
          "Easy to Use: No technical setup or coding required. You can create and share payment links in just a few clicks.",
          "Convenient Payment Collection: Accept payments via SMS, email, WhatsApp, social media, and more, making it easy for customers to pay.",
          "Secure Transactions: Payment Links are fully secure, ensuring customer data protection and compliance with PCI DSS standards.",
          "Faster Cash Flow: Speed up payment collections and improve cash flow with instant payments.",
          "Global Reach: Accept payments from anywhere in the world, with support for international transactions.",
          "Cost-Effective: Eliminate the need for expensive POS systems or infrastructure, making Payment Links an affordable solution for businesses of all sizes.",
          "Automation: Automate reminders and invoicing for recurring payments, saving time and reducing manual effort.",
        ],
      },
    ],
  },
  {
    question: "How to send a Payment Link?",
    answer: [
      {
        heading:
          "You can enter your customer’s mobile number and email address during creation to send through various channels such as email, SMS, WhatsApp, Facebook, or any messaging platform.",
      },
      {
        heading:
          "Alternatively, you can copy the Payment Link and paste it into social media messages, WhatsApp, or any other digital messaging platform. It’s a seamless way to request payments and ensures a smooth customer experience.",
      },
    ],
  },
  {
    question: "Is EnKash Payment Link secure?",
    answer: [
      {
        heading:
          "Yes, EnKash Payment Links are highly secure. We ensure the encryption of sensitive customer data and comply with PCI DSS standards to protect all transactions. Your customers' information remains secure at all times.",
      },
    ],
  },
  {
    question: "What are the features of an EnKash Payment Link?",
    answer: [
      {
        heading:
          "EnKash Payment Links offer an easy, efficient way to collect payments with no coding or technical setup required.",
      },
      {
        heading:
          "Packed with powerful features such as automated invoicing, support for international payments, customizable messages, bulk payment link creation, and automated reminders, EnKash ensures a smooth, streamlined payment collection process. Whether you need to set payment terms or send notifications, our Payment Links are designed to help your business collect payments quickly and effortlessly. Perfect for businesses looking to move fast and simplify their payment process.",
      },
    ],
  },
  {
    question: "How can I use a Payment Link?",
    answer: [
      {
        heading:
          "You can use an EnKash Payment Link in any way that works for you—just share it with your customers, and they can click to make the payment.",
      },
      {
        heading:
          "Creating a Payment Link takes only two simple steps, and it can be automatically sent to your customer’s email and phone number. To share it on other platforms like WhatsApp, social media, or chatbots, simply copy the link from the dashboard and paste it where needed.",
      },
    ],
  },
  {
    question: "Can I send Payment Links in bulk?",
    answer: [
      {
        heading:
          "Yes, EnKash allows you to generate and share Payment Links in bulk. You can upload an XLSX or CSV file containing customer contact details and payment amounts, streamlining the process and improving efficiency for large-scale collections.",
      },
    ],
  },
  {
    question: "Are Payment Links suitable for my business?",
    answer: [
      {
        heading:
          "Yes, payment links are perfect for businesses of all sizes—whether you're a small startup, a growing SMB, or a large enterprise. EnKash payment links offer a secure, easy, and scalable way to collect payments across multiple channels, ensuring a seamless payment experience for both you and your customers.",
      },
    ],
  },
  {
    question: "Can I create a Payment Link for a specific amount?",
    answer: [
      {
        heading:
          "Absolutely! You can create a Payment Link for any amount you choose. Whether it’s a fixed payment or an invoice, the link can be customized to match the specific transaction value.",
      },
    ],
  },
  {
    question: "Can my customers make partial payments using Payment Links?",
    answer: [
      {
        heading:
          "Yes, you can enable partial payments on a Payment Link by specifying the minimum amount you wish to collect. Customers can then make multiple payments between the minimum amount and the total link amount. EnKash will notify you of all partial payments made.",
      },
    ],
  },
  {
    question: "How can I accept payments without a website?",
    answer: [
      {
        heading:
          "With EnKash Payment Links, you can easily create a payment link in just a few clicks and share it with your customers via SMS, email, WhatsApp, or any other messaging platform. There’s no need for a website—just send the link, and your customers can make secure payments instantly, streamlining the payment collection process for businesses of any size.",
      },
    ],
  },
];

export { blogData, faqData };
