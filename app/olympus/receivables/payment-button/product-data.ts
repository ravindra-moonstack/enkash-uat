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
    description: "Seamlessly collect payments with no-code solutions.",
    image: paymentLink,
    link: "/olympus/receivables/payment-page/",
  },
  {
    title: "Payment Page",
    description: "Create stunning, branded checkout experiences in minutes.",
    image: paymentPage,
    link: "/olympus/receivables/payment-page/",
  },
  {
    title: "Payment Link",
    description:
      "Collect payments across WhatsApp, SMS, and social media with easy-to-share payment links",
    image: paymentButton,
    link: "/olympus/receivables/payment-button/",
  },
  {
    title: "QR Codes",
    description:
      "Enable secure, contactless and instant payments for your customers.",
    image: qrCode,
    link: "/olympus/receivables/payment-button/",
  },
  {
    title: "Auto Collect",
    description:
      "Accept NEFT, RTGS, and IMPS with advanced reconciliation for large-scale transactions.",
    image: autoCollect,
    link: "/olympus/receivables/auto-collect/",
  },
  {
    title: "Invoices",
    description:
      "Automate recurring transactions, track sales, and generate bulk invoices with integrated payment links.",
    image: invoices,
    link: "/olympus/receivables/invoices/",
  },
  {
    title: "Instant Settlement",
    description:
      "Access funds instantly and break free from settlement delays.",
    image: instantSettlement,
    link: "/olympus/receivables/instant-settlement/",
  },
  {
    title: "Reminder Engine",
    description:
      "Automate your collections and say goodbye to manual reminders.",
    image: reminderEngine,
    link: "/olympus/receivables/reminder-engine/",
  },
];

export default productData;
