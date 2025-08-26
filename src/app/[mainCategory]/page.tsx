import { notFound } from "next/navigation"
import styles from "./page.module.scss"
import { CategoryData } from "../vouchers/data/category-data"
import VoucherCard from "@/components/voucher-card/voucher-card"
import VoucherData, { Voucher } from "../vouchers/data/voucher-data"
import { nameToUrl } from "@/common/utils/stringUtils"
import SliderComponent from "@/components/sliderComponent/sliderComponent"
import { VOUCHER_DATA } from "./data"
import { blueArrow, whiteArrow } from "../affordability-suite"
import VoucherFaqComponent from "./voucher-faq"
import { CATEGORY_META } from "./categoryMeta"
import { CTASection } from "@/components"
import VoucherFaqSection from "@/components/voucherFaq/voucherFaqSection"
import NotFound from "../not-found"


const VALID_CATEGORIES: string[] = [
  "e-commerce-vouchers",
  "food-and-beverages-vouchers",
  "health-and-wellness-vouchers",
  "apparels-vouchers",
  "movie-and-music-vouchers",
]


const getDiscountValue = (raw: string | number | undefined): number => {
  if (!raw) return 0
  return typeof raw === "string" ? parseFloat(raw) : raw
}

const fetchVouchers = async (
  categoryName: string
): Promise<{
  validVouchers: Voucher[]
  apiDiscounts: Record<string, string>
}> => {
  const localVouchers: Voucher[] = Object.values(VoucherData).filter(
    (voucher) => voucher.category === categoryName
  )

  try {
    const apiResponse = await fetch(
      "https://marketplaces.enkash.in/api/v0/bolt/searchProducts?product=VOUCHER",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
        next: { revalidate: 3600 },
      }
    )

    const apiData = await apiResponse.json()
    const products = apiData.payload.data || []

    const apiDiscounts: Record<string, string> = {}
    products.forEach((product: any) => {
      apiDiscounts[nameToUrl(product.brand)] = product.discount
    })

    const validVouchers = localVouchers.filter((localVoucher) =>
      products.some(
        (product: any) =>
          nameToUrl(product.brand) === localVoucher.urlName &&
          product.active &&
          product.enabled
      )
    )

    validVouchers.forEach((voucher) => {
      voucher.discount = parseFloat(apiDiscounts[voucher.urlName])
    })

    return { validVouchers, apiDiscounts }
  } catch (error) {
    console.error("Error fetching vouchers:", error)
    return { validVouchers: [], apiDiscounts: {} }
  }
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
        canonical: `https://www.enkash.com/bolt/category/404`,
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
        `https://www.enkash.com/bolt/category/${categoryData.name}`,
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

  const categoryData = CategoryData[mainCategory]
  const pageData = VOUCHER_DATA[mainCategory]

  if (!pageData) notFound()

  const { apiDiscounts } = await fetchVouchers(mainCategory)

  // Apply discounts dynamically
  const slidesWithDiscount = pageData.slides.map((slide) => ({
    ...slide,
    discount: getDiscountValue(
      apiDiscounts[nameToUrl(slide.brandName)] || slide.discount
    ),
  }))

  const voucherCardsWithDiscount = pageData.voucherCards.map((card) => {
    const brandKey = card.brandName ? nameToUrl(card.brandName) : ""
    const discountFromApi = brandKey ? apiDiscounts[brandKey] : undefined

    return {
      ...card,
      discount: discountFromApi
        ? `${getDiscountValue(discountFromApi)}%`
        : `${getDiscountValue(card.discount)}%`,
    }
  })

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
        buttonText="Get started today"
        FaqContent={<VoucherFaqComponent voucherName={mainCategory} />}
      />
    </div>
  )
}

export default MainCategoryPage
