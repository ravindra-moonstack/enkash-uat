import iconOne from "./img/icon-one.svg"
import iconTwo from "./img/icon-two.svg"
import iconThree from "./img/icon-three.svg"
import iconFour from "./img/icon-four.svg"
import { FAQProps } from "@/components/faq/faq"
import {
  autoCollect,
  invoices,
  paymentButton,
  paymentLink,
  qrCode,
} from "@/components/all-products"
import { AllProductsDataProp } from "@/components/all-products/all-products"

const productData: AllProductsDataProp[] = [
  {
    title: "Channel Incentives",
    description:
      "Motivate partners and distributors with tailored rewards, driving sales and long-term engagement.",
    image: paymentLink,
    link: "/channel-incentives/",
  },
  {
    title: "Employee Rewards",
    description:
      "Recognize and retain top talent with instant, meaningful, and customizable reward solutions.",
    image: paymentButton,
    link: "/employee-rewards/",
  },
  {
    title: "Offers",
    description:
      "Unlock exclusive deals and discounts to enhance loyalty, boost engagement, and drive satisfaction.",
    image: qrCode,
    link: "/offers/",
  },
]

const carouselData = [
  {
    image: iconOne,
    alt: "Sign up on EnKash with all the necessary company details.",
    title: "Sign up on EnKash with all the necessary company details.",
    heading: "Sign Up: ",
  },
  {
    image: iconTwo,
    alt: "Add funds to the company account and request gift cards whenever necessary.",
    title:
      "Add funds to the company account and request gift cards whenever necessary.",
    heading: "Add Funds: ",
  },
  {
    image: iconThree,
    alt: "Enterprises can distribute these gift cards with preset amounts based on the occasion.",
    title:
      "Enterprises can distribute these gift cards with preset amounts based on the occasion.",
    heading: "Distribution: ",
  },
]

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/blog_26.d1a8b0d7.jpg",
    imageAlt:
      "What is Business Expense Card & Benefits of Business Prepaid Cards",
    title: "What is Business Expense Card & Benefits of Business Prepaid Cards",
    date: "Sep 23, 2023",
    description:
      "Prepaid cards or corporate expense cards have emerged as cutting-edge expense management tools, offering a range of innovative features to simplify your life. From handling business payments...",
    link: "https://www.enkash.com/resources/blog/prepaid-card-for-business-expenses/ ",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/5-Reasons-you-need-prepaid-credit-card-for-your-business-1.jpg",
    imageAlt: "5 Reasons You Need Prepaid Credit Cards For Your Business",
    title: "5 Reasons You Need Prepaid Credit Cards For Your Business",
    date: "Sep 29, 2022",
    description:
      "Many businesses that operate on a small and medium level have gained huge success and have been able to scale their company profitably with prepaid credit cards, as they are regarded as a powerfu...",
    link: "https://www.enkash.com/resources/blog/prepaid-credit-card-for-business/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/10/Prepaid-Cards-A-definitive-guide-to-growth-and-profitibility.jpg",
    imageAlt: "Prepaid Cards – A Guide to Growth",
    title: "Prepaid Cards – A Guide to Growth",
    date: "Oct 20, 2022",
    description:
      "The growth of a business depends on various factors, one of which is the way a company makes payments. With the country rapidly moving towards digitization in different industries, digital payments in..",
    link: "https://www.enkash.com/resources/blog/prepaid-cards-a-defintive-guide-to-growth/",
  },
]

export { blogData, carouselData, productData }
