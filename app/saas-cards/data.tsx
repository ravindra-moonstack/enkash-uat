import iconOne from "./img/icon-one.svg"
import iconTwo from "./img/icon-two.svg"
import iconThree from "./img/icon-three.svg"
import iconFour from "./img/icon-four-updated.svg"
import iconFive from "./img/icon-five.svg"
import {
  autoCollect,
  invoices,
  paymentButton,
  paymentLink,
  paymentPage,
  qrCode,
} from "@/components/all-products"
import { AllProductsDataProp } from "@/components/all-products/all-products"

const productData: AllProductsDataProp[] = [
  {
    title: "Fuel Card",
    description:
      "Manage fuel expenses effortlessly with a card designed for streamlined tracking and cost control.",
    image: paymentLink,
    link: "/fuel-card/",
  },
  {
    title: "Virtual Card",
    description:
      "Generate secure, single-use virtual cards for online payments, reducing fraud risk and improving accountability.",
    image: paymentButton,
    link: "/virtual-card/",
  },
  {
    title: "Travel and Expense",
    description:
      "Simplify travel expense management with dedicated cards, ensuring transparency and easy reconciliation",
    image: paymentPage,
    link: "/travel-and-expense-card/",
  },
  {
    title: "Purchase Card",
    description:
      "Empower your team to make secure business purchases while maintaining full control over spending limits.",
    image: qrCode,
    link: "/purchase-card/",
  },
  {
    title: "Digital Marketing Card",
    description:
      "Optimize digital ad spends with a card tailored for marketing expenses, offering real-time tracking and control.",
    image: autoCollect,
    link: "/digital-marketing-card/",
  },
  {
    title: "DIY Card Module",
    description:
      "Customize card settings, limits, and features effortlessly with EnKash’s Do-It-Yourself card module.",
    image: invoices,
    link: "/diy-card-module/",
  },
]

const carouselData = [
  {
    image: iconOne,
    alt: "Control SaaS spends",
    title:
      "Control SaaS spends and security like never before - Monitor and take action on subscription renewals and expenditures at your convenience",
  },
  {
    image: iconTwo,
    alt: "Works best with all leading, IT-approved tools",
    title:
      "Works best with all leading, IT-approved tools. Integrate your entire SaaS stack to get valuable insights for your business",
  },
  {
    image: iconThree,
    alt: "Get real-time visibility into your SaaS corporate card",
    title:
      "Get real-time visibility into your SaaS corporate card/virtual account balance so that you can stop worrying about overpaying or expense fraud",
  },
  {
    image: iconFour,
    alt: "Save countless work hours by automating your SaaS billing",
    title:
      "Save countless work hours by automating your SaaS billing, invoicing, and receipt matching process",
  },
  {
    image: iconFive,
    alt: "Ensure uninterrupted business operations with seamless payment processing",
    title:
      "Ensure uninterrupted business operations with seamless payment processing for your SaaS subscriptions",
  },
]

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/blog_30.2b14ff38.jpg",
    imageAlt: "Automate Your Spends with SaaS Spend Management Software",
    title: "Automate Your Spends with SaaS Spend Management Software",
    date: "Feb 08, 2023",
    description:
      "Prepaid cards or corporate expense cards have emerged as cutting-edge expense management tools, offering a range of innovative features to simplify your life. From handling business...",
    link: "https://www.enkash.com/resources/blog/saas-subscription-management-with-virtual-cards/",
  },

  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/12/Keep-things-simple-with-EnKash.jpg",
    imageAlt: "Keep Things Strategic & Simple with Spend Management Software",
    title: "Keep Things Strategic & Simple with Spend Management Software",
    date: "Feb 08, 2023",
    description:
      "From startup expenditure to sourcing business assets to improvement costs, a huge expense is involved in running a business. Moreover, the expenditure may vary depending on the business type...",
    link: "https://www.enkash.com/resources/blog/keep-things-simple-with-spend-management-software/",
  },

  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/blog_4.cf1aca79.jpg",
    imageAlt: "Top 5 Reasons to Adopt B2B Payment Automation",
    title: "Top 5 Reasons to Adopt B2B Payment Automation",
    date: "Aug 08, 2023",
    description:
      "Digital is the new normal. This mantra of B2B payment automation has been ingrained in our post-pandemic world which gave us a rude awakening in terms of how we used to function....",
    link: "https://www.enkash.com/resources/blog/why-use-automation-in-b2b-payments/",
  },
]

export { blogData, carouselData, productData }
