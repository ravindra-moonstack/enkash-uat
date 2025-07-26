import { Header } from "@/components"
import Category from "@/components/category"
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"
import VoucherCard from "@/components/voucher-card/voucher-card"
import { notFound } from "next/navigation"
import React from "react"
// import amazone from "@/public/images/amazon.webp"
const validCategory = ["pvr", "movies", "food-and-beverages"]

const page = async ({ params }: { params: Promise<{ category: string }> }) => {
  //

  const { category } = await params
  if (!validCategory.includes(category)) {
    notFound()
  }
  return (
    <div>
      <Header utmSource="expense_management" />

      <TalkToSales />
      {category == "pvr"}

      <Category category={category} />
      <div className="mt-5">
        <VoucherCard
          titleHtml="Amazon Prime"
          description="Shopping E-Gift Card"
          discount="13%"
          buttonUrl="./amazone.in"
        />
      </div>
    </div>
  )
}

export default page
