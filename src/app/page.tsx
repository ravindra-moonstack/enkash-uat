import { Metadata } from "next"
import generateMetaData from "../utils/metaData"
import HomePage from "./home/page"

export const metadata: Metadata = generateMetaData({
  title: "The Best Payments and Spend Management Platform",
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
