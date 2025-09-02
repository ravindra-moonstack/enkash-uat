import { notFound } from "next/navigation"

import styles from "./page.module.scss"

// components
import { CategoryData } from "../vouchers/data/category-data"
import VoucherCard from "@/src/components/voucher-card/voucher-card"
import { nameToUrl } from "@/src/common/utils/stringUtils"
import { CTASection } from "@/src/components"
import SliderComponent from "@/src/components/slider-component"
import VoucherFaqComponent from "./voucher-faq"
import VoucherFaqSection from "@/src/components/voucher-faq"
import NotFound from "../not-found"

// helpers
import { VOUCHER_DATA, CATEGORY_META, VALID_CATEGORIES } from "./data"
import { blueArrow, whiteArrow } from "../affordability-suite"
import fetchVouchers from "@/src/helpers/vouchers"

const getDiscountValue = (raw: string | number | undefined): number => {
  if (!raw) return 0
  return typeof raw === "string" ? parseFloat(raw) : raw
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ mainCategory: string }>
}) {
  const { mainCategory } = await params

  if (!VALID_CATEGORIES.includes(mainCategory)) {
    return {
      title: "Category not found - EnKash",
      description:
        "The category you are looking for is not available, explore more in Bolt section.",
      alternates: {
        canonical: `${process.env.URL}/bolt/category/404`,
      },
    }
  }

  const categoryMeta = CATEGORY_META[mainCategory]
  const categoryData = CategoryData[mainCategory]

  return {
    title:
      categoryMeta?.title ||
      `${categoryData.heading} - ${categoryData.title} ${categoryData.discount}% OFF - EnKash`,
    description: categoryMeta?.description || categoryData.description,
    alternates: {
      canonical:
        categoryMeta?.canonical ||
        `${process.env.URL}/bolt/category/${categoryData.name}`,
    },
  }
}

const MainCategoryPage = async ({
  params,
}: {
  params: Promise<{ mainCategory: string }>
}) => {
  const { mainCategory } = await params
  const isValidCategory = VALID_CATEGORIES.includes(mainCategory)

  if (!isValidCategory) {
    return <NotFound />
  }

  const pageData = VOUCHER_DATA[mainCategory]

  if (!pageData) notFound()

  const { apiDiscounts } = await fetchVouchers(mainCategory)

  // Apply discounts dynamically
  const slidesWithDiscount = pageData.slides
    .map((slide) => ({
      ...slide,
      discount: getDiscountValue(
        apiDiscounts[nameToUrl(slide.brandName)] || slide.discount
      ),
    }))
    .filter((item) => item.discount !== 0)

  const voucherCardsWithDiscount = pageData.voucherCards
    .map((card) => {
      const brandKey = card.brandName ? nameToUrl(card.brandName) : ""
      const discountFromApi = brandKey ? apiDiscounts[brandKey] : undefined

      return {
        ...card,
        discount: discountFromApi
          ? `${getDiscountValue(discountFromApi)}%`
          : `${getDiscountValue(card.discount)}%`,
      }
    })
    .filter((item) => item.discount !== "0%")

  return (
    <div className={`color-black ${styles.home_container}`}>
      <div className={styles.first_row}>
        <SliderComponent
          breadcrumbItems={pageData.breadcrumbItems}
          slides={slidesWithDiscount}
          title={pageData.title}
        />

        <div className={styles.voucher_card}>
          <div className="max-w-auto">
            <div className="row">
              {voucherCardsWithDiscount.map((card, index) => (
                <div key={index} className="col-12 col-md-3 mb-4">
                  <VoucherCard {...card} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CTASection
        title={
          "Discover the EnKash difference - Secure, Scalable and Seamless."
        }
        buttonText={"Get Started"}
        actionImage={blueArrow}
        hoverImage={whiteArrow}
        background="linear-gradient(180deg, #2e2e2e 0%, #010205 100%)"
      />
      <VoucherFaqSection
        mainTitle="Frequently Asked Questions ("
        highlightTitle="FAQs"
        subTitle="Have more questions?"
        buttonText="Contact with us"
        FaqContent={<VoucherFaqComponent voucherName={mainCategory} />}
      />
    </div>
  )
}

export default MainCategoryPage
