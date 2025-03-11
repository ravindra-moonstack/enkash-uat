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
      "No-code solution to seamlessly collect payments across multiple channels, ensuring you never miss a transaction.",
    image: paymentLink,
    link: "/olympus/receivables/payment-page/",
  },
  {
    title: "Payment Page",
    description:
      "Set up custom-branded payment pages in just minutes, requiring no technical expertise to start accepting payments",
    image: paymentPage,
    link: "/olympus/receivables/payment-page/",
  },
  {
    title: "Payment Button",
    description:
      "Add a pre-designed payment button to your website with a simple plug-and-play integration.",
    image: paymentButton,
    link: "/olympus/receivables/payment-button/",
  },
  {
    title: "UPI Payments",
    description:
      "UPI payments with any app - BHIM, PhonePe, WhatsApp for smooth transactions. No SMS, no VPA hassles.",
    image: qrCode,
    link: "/olympus/receivables/payment-button/",
  },
  {
    title: "Auto Collect",
    description:
      "Seamlessly accept NEFT, RTGS, and IMPS transfers using customer-specific identifiers, with automated reconciliation for large-scale transactions.",
    image: autoCollect,
    link: "/olympus/receivables/auto-collect/",
  },
  {
    title: "Invoices",
    description:
      "Automate invoicing for recurring transactions, monitor sales and payments, and generate bulk invoices with integrated payment links.",
    image: invoices,
    link: "/olympus/receivables/invoices/",
  },
  {
    title: "Instant Settlement",
    description:
      "Access your funds immediately, bypass traditional settlement cycles, and take greater control of your cash flow.",
    image: instantSettlement,
    link: "/olympus/receivables/instant-settlement/",
  },
  {
    title: "Reminder Engine",
    description:
      "Remove manual reminders and easily automate your business collections for a more seamless cash flow.",
    image: reminderEngine,
    link: "/olympus/receivables/reminder-engine/",
  },
];

export default productData;
