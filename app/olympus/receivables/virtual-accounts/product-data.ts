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
    title: "Auto Collect",
    description:
      "Collect payments from customers by sending a virtual account number via  NEFT, RTGS, IMPS and UPI payment modes",
    image: autoCollect,
    link: "/olympus/receivables/auto-collect/",
  },
  {
    title: "Payment Link",
    description:
      "Embed payment links to ensure instant payment collection without the need for a website or application.",
    image: paymentLink,
    link: "/olympus/receivables/payment-links/",
  },
  {
    title: "QR Codes",
    description:
      "Allow customers to make payments via scannable QR codes using their smart devices.",
    image: paymentButton,
    link: "/olympus/receivables/qr-codes/",
  },
  {
    title: "Subscriptions",
    description:
      "Ensure regular revenue and convenience for customers by enabling subscriptions for recurring payments.",
    image: qrCode,
    link: "/olympus/receivables/subscription-management/",
  },
  {
    title: "Payment Page",
    description:
      "Make a customizable checkout interface for your business and collect payments.",
    image: paymentPage,
    link: "/olympus/receivables/customized-payment/",
  },
  {
    title: "Invoices",
    description:
      "Generate invoices in bulk by automating recurring transactions and tracking sales",
    image: invoices,
    link: "/olympus/receivables/invoices/",
  },
  {
    title: "Instant Settlement",
    description:
      "Receive payments from customers instantly enabling cash flow improvement.",
    image: instantSettlement,
    link: "/olympus/receivables/instant-settlement/",
  },
  {
    title: "Reminder Engine",
    description:
      "No more manual reminders; automate business collections with a reminder engine.",
    image: reminderEngine,
    link: "/olympus/receivables/reminder-engine/",
  },
];

export default productData;
