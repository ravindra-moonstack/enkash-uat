import React from "react"
import { Metadata } from "next"
import MealCardClient from "./MealCardClient"
import generateMetaData from "@/utils/metaData"

export const metadata: Metadata = {
  ...generateMetaData({
    title: "India's First Meal Card with UPI Payments | EnKash",
    description: "Bringing together the power of RuPay, the familiarity of UPI, and the tax efficiency of meal benefits.",
    alternates: { canonical: `${process.env.URL}/campaigns/meal-card/` },
  }),
  robots: {
    index: false,
    follow: true,
  },
}

const MealCardPage = () => {
  return <MealCardClient />
}

export default MealCardPage
