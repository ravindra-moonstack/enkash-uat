import {
  autoCollect,
  instantSettlement,
  invoices,
  paymentButton,
  paymentLink,
  paymentPage,
  qrCode,
  reminderEngine,
} from "@/components/all-products";
import { AllProductsDataProp } from "@/components/all-products/all-products";

const productData: AllProductsDataProp[] = [
  {
    title: "Payment Gateway",
    description:
      "Effortlessly collect payments across various channels with this no-code solution",
    image: paymentPage,
    link: "/olympus/receivables/payment-gateway/",
  },
  {
    title: "Payment Link",
    description:
      "Send payment links on WhatsApp, SMS, Facebook, Twitter, and more to collect payments",
    image: paymentLink,
    link: "/olympus/receivables/payment-links/",
  },
  {
    title: "Payment Button",
    description:
      "A pre-designed easy-to-integrate payment button for your website to collect payments.",
    image: paymentButton,
    link: "/olympus/receivables/payment-button/",
  },
  {
    title: "QR Codes",
    description:
      "Allow secure, contactless payments using QR codes, empowering businesses to process transactions instantly.",
    image: qrCode,
    link: "/olympus/receivables/qr-codes/",
  },
  {
    title: "Auto Collect",
    description:
      "Easily accept NEFT, RTGS, and IMPS transfers with customer-specific identifiers and automated reconciliation for scalability.",
    image: autoCollect,
    link: "/olympus/receivables/auto-collect/",
  },
  {
    title: "Invoices",
    description:
      "Automate recurring invoicing, track sales, and payments, and create bulk invoices with embedded payment links.",
    image: invoices,
    link: "/olympus/receivables/invoices/",
  },
  {
    title: "UPI Payments",
    description:
      "UPI payments with any app - BHIM, PhonePe, WhatsApp for smooth transactions. No SMS, no VPA hassles.",
    image: qrCode,
    link: "/olympus/receivables/upi-payments/",
  },
  {
    title: "Reminder Engine",
    description:
      "Eliminate manual reminders and automate your business collections effortlessly for smoother cash flow management.",
    image: reminderEngine,
    link: "/olympus/receivables/reminder-engine/",
  },
];

export default productData;
