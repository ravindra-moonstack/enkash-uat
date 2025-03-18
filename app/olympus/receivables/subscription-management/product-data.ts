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
    title: "UPI Payments",
    description:
      "UPI payments with any app - BHIM, PhonePe, WhatsApp for smooth transactions. No SMS, no VPA hassles.",
    image: paymentLink,
    link: "/olympus/receivables/upi-payments/",
  },
  {
    title: "eNACH",
    description:
      "A mandate for receiving recurring payments from customers, eNACH helps businesses with a steady cash flow.",
    image: reminderEngine,
    link: "/olympus/receivables/eNACH/",
  },
  {
    title: "QR Codes ",
    description:
      "No-code solution to seamlessly collect payments across multiple channels, ensuring you never miss a transaction.",
    image: qrCode,
    link: "/olympus/receivables/qr-codes/",
  },
  {
    title: "Invoices",
    description:
      "Create bulk invoices and automate recurring invoicing, with embedded payment links",
    image: invoices,
    link: "/olympus/receivables/invoices/",
  },
  {
    title: "Payment Link",
    description:
      "Use no-code payment links to collect payments on different channels like WhatsApp, SMS, email and social media.",
    image: paymentLink,
    link: "/olympus/receivables/payment-links/",
  },
  {
    title: "Payment Button",
    description:
      "An easy-to-integrate pre-designed payment button lets businesses collect payments.",
    image: paymentButton,
    link: "/olympus/receivables/payment-button/",
  },
  {
    title: "Instant Settlement",
    description:
      "Businesses can skip traditional settlement cycles and switch to instant settlement taking complete control of their cash flow.",
    image: instantSettlement,
    link: "/olympus/receivables/instant-settlement/",
  },
  {
    title: "Payment Page",
    description:
      "Make customized payment pages with zero technical effort and start receiving funds.",
    image: paymentPage,
    link: "/olympus/receivables/customized-payment/",
  },
];

export default productData;
