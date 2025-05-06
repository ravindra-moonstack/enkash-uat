import iconOne from "./img/icon-one.svg"
import iconTwo from "./img/icon-two.svg"
import iconThree from "./img/icon-three.svg"
import {
  autoCollect,
  instantSettlement,
  invoices,
  paymentButton,
  paymentLink,
  paymentPage,
  qrCode,
  reminderEngine,
} from "@/components/all-products"
import { AllProductsDataProp } from "@/components/all-products/all-products"

const productData: AllProductsDataProp[] = [
  {
    title: "Payment Gateway",
    description: "Seamlessly collect payments with no-code solutions.",
    image: paymentLink,
    link: "/payment-links/",
  },
  {
    title: "Payment Page",
    description: "Create stunning, branded checkout experiences in minutes.",
    image: paymentPage,
    link: "/payment-page/",
  },
  {
    title: "Payment Link",
    description:
      "Collect payments across WhatsApp, SMS, and social media with easy-to-share payment links",
    image: paymentButton,
    link: "/payment-links/",
  },
  {
    title: "QR Codes",
    description:
      "Enable secure, contactless and instant payments for your customers.",
    image: qrCode,
    link: "/qr-codes/",
  },
  {
    title: "Auto Collect",
    description:
      "Accept NEFT, RTGS, and IMPS with advanced reconciliation for large-scale transactions.",
    image: autoCollect,
    link: "/auto-collect/",
  },
  {
    title: "Invoices",
    description:
      "Automate recurring transactions, track sales, and generate bulk invoices with integrated payment links.",
    image: invoices,
    link: "/digital-invoicing/",
  },
  {
    title: "Instant Settlement",
    description:
      "Access funds instantly and break free from settlement delays.",
    image: instantSettlement,
    link: "/instant-settlement/",
  },
  {
    title: "Reminder Engine",
    description:
      "Automate your collections and say goodbye to manual reminders.",
    image: reminderEngine,
    link: "/collection-reminder/",
  },
]
const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/12/Open-a-virtual-bank-account-now-to-manage-your-business-expenses.jpg",
    imageAlt:
      "Open a Virtual Bank Account for Business and Manage Expense Better",
    title: "Open a Virtual Bank Account for Business and Manage Expense Better",
    date: "Dec 26, 2022",
    description:
      "Virtual bank accounts have been in high demand for the past couple of decades, offering unique advantages to users compared to traditional bank accounts. Open a virtual bank...",
    link: "https://www.enkash.com/resources/blog/benefits-of-virtual-bank-account/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/01/What-is-a-virtual-account-and-how-your-business-can-benefit-for-it.jpg",
    imageAlt:
      "What Is a Virtual Account, and How Your Business Can Benefit from It?",
    title:
      "What Is a Virtual Account, and How Your Business Can Benefit from It?",
    date: "Jan 27, 2023",
    description:
      "Virtual banking has penetrated the large-scale sector, and every small-scale and medium-scale business is also moving towards virtual banking. Virtual bank accounts are trending because of...",
    link: "https://www.enkash.com/resources/blog/what-is-virtual-account-number/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/01/Witness-an-era-of-financial-ease-with-with-virtual-accounts.jpg",
    imageAlt: "Learn How Virtual Accounts Can Benefit Your Business",
    title: "Learn How Virtual Accounts Can Benefit Your Business",
    date: "Jan 09, 2023",
    description:
      "Virtual account allows businesses to initiate seamless financial transactions and maintain track records. Various large, medium, and small-scale businesses are shifting towards...",
    link: "https://www.enkash.com/resources/blog/how-virtual-accounts-can-benefit-your-business/",
  },
]

const carouselData = [
  {
    image: iconOne,
    alt: "Use EnKash’s intuitive dashboard to design your button",
    title: "Use EnKash’s intuitive dashboard to design your button",
    heading: "Create: ",
  },
  {
    image: iconTwo,
    alt: "Generate an auto-created code tailored to your button.",
    title: "Generate an auto-created code tailored to your button.",
    heading: "Copy: ",
  },
  {
    image: iconThree,
    alt: " Paste the code on your website or blog.",
    title: " Paste the code on your website or blog.",
    heading: "Integrate: ",
  },
]

export { blogData, carouselData, productData }
