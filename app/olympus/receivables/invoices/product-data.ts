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
      "Never miss a transaction with this no-code solution to effortlessly collect payments across various channels. ",
    image: paymentPage,
    link: "/olympus/receivables/payment-gateway/",
  },
  {
    title: "Payment Link",
    description:
      "Seamlessly collect payments on WhatsApp, SMS, Facebook, Twitter, and more using no-code payment links.",
    image: paymentLink,
    link: "/olympus/receivables/payment-links/",
  },
  {
    title: "Payment Button",
    description:
      "A payment button that easily integrates into your website with a quick plug-and-play setup.",
    image: paymentButton,
    link: "/olympus/receivables/payment-button/",
  },
  {
    title: "QR Codes",
    description:
      "Collect secure, contactless payments using QR codes, empowering businesses to process transactions ",
    image: qrCode,
    link: "/olympus/receivables/qr-codes/",
  },
  {
    title: "Auto Collect",
    description:
      "Accept NEFT, RTGS, and IMPS transfers with customer-specific identifiers and automated reconciliation for scalability.",
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
    title: "Instant Settlement",
    description:
      "Access your funds instantly, skip traditional settlement cycles, and take full control of your cash flow.",
    image: qrCode,
    link: "/olympus/receivables/instant-settlements/",
  },
  {
    title: "Reminder Engine",
    description:
      "Get over manual reminders and automate your business collections effortlessly for smoother cash flow management.",
    image: reminderEngine,
    link: "/olympus/receivables/reminder-engine/",
  },
];

export default productData;
