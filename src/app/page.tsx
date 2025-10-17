import { Metadata } from "next"
import generateMetaData from "../utils/metaData"
import HomePage from "./home/page"

export const metadata: Metadata = generateMetaData({
  title: "Best Expense Management & Payment Solutions for Businesses.",
  description:
    "Unlock growth with the best payments and spend management platform with products across corporate cards, vouchers, loyalty and more",
  alternates: {
    canonical: `${process.env.URL}`,
  },
})
const Home = (): React.JSX.Element => {
  return <HomePage />
}

export default Home
