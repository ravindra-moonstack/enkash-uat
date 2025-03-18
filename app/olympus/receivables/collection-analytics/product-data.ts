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
      "Collect payments across various channels, guaranteeing you never miss a transaction.",
    image: paymentLink,
    link: "/olympus/receivables/payment-links/",
  },
  {
    title: "Payment Link",
    description:
      "Use WhatsApp, SMS, Facebook, Twitter, and more with no-code payment links.",
    image: paymentPage,
    link: "/olympus/receivables/payment-links/",
  },
  {
    title: "Payment Button",
    description:
      "Integrate a pre-designed payment button into your website with a quick plug-and-play setup.",
    image: paymentButton,
    link: "/olympus/receivables/payment-button/",
  },
  {
    title: "QR Codes",
    description:
      "Use secure, contactless payments using QR codes, empowering businesses to process transactions instantly",
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
      "Automate recurring invoicing, track sales, and payments, and create bulk invoices with embedded payment links",
    image: invoices,
    link: "/olympus/receivables/invoices/",
  },
  {
    title: "Instant Settlement",
    description:
      "Get instant access to your funds, skip traditional settlement cycles, and take full control of your cash flow.",
    image: instantSettlement,
    link: "/olympus/receivables/instant-settlement/",
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
