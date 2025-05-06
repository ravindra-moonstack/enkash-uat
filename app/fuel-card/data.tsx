import iconOne from "./img/icon-one.svg"
import iconTwo from "./img/icon-two.svg"
import iconThree from "./img/icon-three.svg"
import iconFour from "./img/icon-four.svg"
import {
  autoCollect,
  instantSettlement,
  invoices,
  paymentButton,
  paymentLink,
  qrCode,
} from "@/components/all-products"
import { AllProductsDataProp } from "@/components/all-products/all-products"

const productData: AllProductsDataProp[] = [
  {
    title: "Meal Card",
    description:
      "Provide employees with tax-saving meal benefits using a dedicated card accepted at restaurants and grocery stores.",
    image: paymentLink,
    link: "/meal-card/",
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
    image: instantSettlement,
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
    alt: "Log in or register on the EnKash platform",
    title: "Log in or register on the EnKash platform.",
    heading: "Login: ",
  },
  {
    image: iconTwo,
    alt: "Issue pre-loaded fuel cards to employees",
    title: "Issue pre-loaded fuel cards to employees",
    heading: "Issue: ",
  },
  {
    image: iconThree,
    alt: "Send SMS or email notifications to employees",
    title: "Send SMS or email notifications to employees",
    heading: "Notify: ",
  },
  {
    image: iconFour,
    alt: "The card is ready to use post KYC is done",
    title: "The card is ready to use post KYC is done",
    heading: "Activate: ",
  },
]

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/5-Reasons-you-need-prepaid-credit-card-for-your-business-1.jpg",
    imageAlt: "5 Reasons You Need Prepaid Credit Cards For Your Business",
    title: "5 Reasons You Need Prepaid Credit Cards For Your Business",
    date: "Sep 29, 2022",
    description:
      "Many businesses that operate on a small and medium level have gained huge success and have been able to scale their company profitably with prepaid credit cards, as they are regarded as a powerful financial...",
    link: "https://www.enkash.com/resources/blog/prepaid-credit-card-for-business/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/blog_31.568a8412.jpg",
    imageAlt: "Corporate Prepaid Cards Vs Corporate Credit Cards",
    title: "Corporate Prepaid Cards Vs Corporate Credit Cards",
    date: "Sep 26, 2022",
    description:
      "Businesses – big or small, still heavily rely on business credit cards for their finances. It’s a practice that’s been adopted for years, and while it does give a certain degree of freedom to conduct business transactions, there are...",
    link: "https://www.enkash.com/resources/blog/employee-prepaid-vs-corporate-credit-cards/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/10/Prepaid-Cards-A-definitive-guide-to-growth-and-profitibility.jpg",
    imageAlt: "Prepaid Cards – A Guide to Growth",
    title: "Prepaid Cards – A Guide to Growth",
    date: "Oct 10, 2022",
    description:
      "The growth of a business depends on various factors, one of which is the way a company makes payments. With the country rapidly moving towards digitization in different industries, digital payments in India have become",
    link: "https://www.enkash.com/resources/blog/prepaid-cards-a-defintive-guide-to-growth/",
  },
]

export { blogData, carouselData, productData }
