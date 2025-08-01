import { notFound } from "next/navigation"
import { Metadata } from "next"
import styles from "./page.module.scss"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import Heading from "@/components/heading/heading"
import { CategoryData } from "../vouchers/data/category-data"
import VoucherCard from "@/components/voucher-card/voucher-card"
import VoucherData, { Voucher } from "../vouchers/data/voucher-data"
import { nameToUrl } from "@/common/utils/stringUtils"
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"
import SliderComponent from "@/components/sliderComponent/sliderComponent"
import { VOUCHER_DATA } from "./data"
import DynamicHeading from "@/components/dynamicHeading/dynamic-heading"
import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import { blueArrow, whiteArrow } from "../affordability-suite"
import VoucherFaqComponent from "./voucher-faq"
import { use } from "react"

interface CategoryData {
  name: string
  heading: string
  title: string
  description: string
  discount: number
  backgroundImage: string
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ mainCategory: string }>
}): Metadata {
  const { mainCategory } = use(params)

  let isValidCategory: boolean = true

  if (!validCategories.includes(mainCategory)) {
    return {
      title: `Category not found - EnKash`,
      description:
        "The category you are looking for is not available, explore more in Bolt section.",
      alternates: {
        canonical: `https://www.enkash.com/bolt/category/404`,
      },
    }
  }

  const categoryData = CategoryData[mainCategory]

  return {
    title: `${categoryData.heading} - ${categoryData.title} ${categoryData.discount}% OFF - EnKash`,
    description: categoryData.description,
    alternates: {
      canonical: `https://www.enkash.com/bolt/category/${categoryData.name}`,
    },
  }
}

const fetchVouchers = async (categoryName: string) => {
  const localVouchers: Voucher[] = Object.values(VoucherData).filter(
    (voucher: Voucher) => voucher.category === categoryName
  )

  try {
    const apiResponse = await fetch(
      "https://marketplaces.enkash.in/api/v0/bolt/searchProducts?product=VOUCHER",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
        next: { revalidate: 3600 },
      }
    )

    const apiData = await apiResponse.json()

    const validVouchers: Voucher[] = localVouchers.filter((localVoucher) =>
      apiData.payload.data.some((product: any) => {
        return (
          nameToUrl(product.brand) === localVoucher.urlName &&
          product.active &&
          product.enabled
        )
      })
    )

    const apiDiscounts: Record<string, string> = {}
    apiData.payload.data.forEach((product: any) => {
      apiDiscounts[nameToUrl(product.brand)] = product.discount
    })

    validVouchers.forEach((validVoucher) => {
      validVoucher.discount = parseFloat(apiDiscounts[validVoucher.urlName])
    })

    // ✅ RETURN BOTH
    return { validVouchers, apiDiscounts }
  } catch (error) {
    console.error("Error fetching vouchers:", error)
    return { validVouchers: [], apiDiscounts: {} }
  }
}

const validCategories: string[] = [
  "e-commerce-vouchers",
  "food-and-beverages-vouchers",
  "health-and-wellness-vouchers",
  "apparels-vouchers",
  "movie-and-music-vouchers",
]

const MainCategoryPage = async ({
  params,
}: {
  params: Promise<{ mainCategory: string }>
}) => {
  const { mainCategory } = await params
  const categoryName = mainCategory
  let isValidCategory: boolean = true
  if (!validCategories.includes(categoryName)) {
    isValidCategory = false
  }

  const categoryData = CategoryData[categoryName]
  // const currentCategoryPhoto = CategoryPhoto.get(categoryName);
  const boltUTM = `https://bolt.enkash.com/signup?utm_source=bolt&utm_medium=enkash_website&utm_campaign=${categoryName}`
  const halfBoltUTM = `bolt&utm_medium=enkash_website&utm_campaign=${categoryName}`

  // const vouchers: Voucher[] = [];
  // const vouchers: Voucher[] = await fetchVouchers(categoryName)
  const pageData = VOUCHER_DATA[categoryName]
  if (!pageData) {
    notFound()
  }
  const { validVouchers: vouchers, apiDiscounts } = await fetchVouchers(
    categoryName
  )

  const slidesWithDiscount = pageData.slides.map((slide) => {
    // ✅ Use brandName for clean matching
    const brandUrlName = nameToUrl(slide.brandName)

    const dynamicDiscountRaw = apiDiscounts[brandUrlName] || slide.discount || 0
    const dynamicDiscount =
      typeof dynamicDiscountRaw === "string"
        ? parseFloat(dynamicDiscountRaw)
        : dynamicDiscountRaw

    return {
      ...slide,
      discount: dynamicDiscount,
    }
  })

  const voucherCardsWithDiscount = pageData.voucherCards.map((card) => {
    const brandUrlName = nameToUrl(card.brandName || card.titleHtml)
    const dynamicDiscountRaw = apiDiscounts[brandUrlName] || card.discount || 0
    const dynamicDiscount =
      typeof dynamicDiscountRaw === "string"
        ? parseFloat(dynamicDiscountRaw)
        : dynamicDiscountRaw

    return {
      ...card,
      discount: `${dynamicDiscount}%`,
    }
  })

  return (
    <div className={`color-black ${styles.home_container}`}>
      {/* <StructuredData url={`https://www.enkash.com/voucher/${categoryName}`} /> */}
      <Header utmSource={halfBoltUTM} />
      <TalkToSales />
      {isValidCategory ? (
        <>
          {categoryData && (
            <div className={`${styles.first_row}`}>
              <SliderComponent
                breadcrumbItems={pageData.breadcrumbItems}
                slides={slidesWithDiscount}
                title={pageData.title}
              />

              {/* Example: your card grid can be dynamic too */}
              <div className={styles.voucher_card}>
                <div className="max-w-auto">
                  <div className="row">
                    {voucherCardsWithDiscount.map((card, index) => (
                      <div key={index} className="col-12 col-md-3 mb-4">
                        <VoucherCard
                          titleHtml={card.titleHtml}
                          description={card.description}
                          discount={card.discount}
                          cardImage={card.cardImage}
                          buttonUrl={card.buttonUrl}
                          brandName={card.brandName}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className={`${styles.sixth_row}`}>
            <div className="d-flex justify-content-center flex-column gap-32 align-items-center max-w-auto">
              <DynamicHeading
                content={[
                  {
                    title:
                      "Discover the EnKash difference - Secure, Scalable and Seamless.",
                    color: "color-white",
                  },
                ]}
                headingTag="h3"
                className="f-5"
              />

              <RectangleButton
                title="Get Started"
                theme="outline-blue"
                url="/sales/?source=expense_management"
              />
            </div>
          </div>

          <div className={`${styles.faq_new_row}  relative`}>
            <div className={`${styles.faqSection} text-start max-w-auto `}>
              <div className={`${styles.title} text-start  pb-md-5 pb-2`}>
                <DynamicHeading
                  content={[
                    {
                      title: "Frequently Asked Questions (",
                      color: "color-black",
                    },
                    {
                      title: "FAQs",
                      color: "color-equity-blue",
                    },
                    {
                      title: ")",
                      color: "color-black",
                    },
                  ]}
                  headingTag="h2"
                  className="f-6"
                />
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between">
                <div>
                  <div>
                    <DynamicHeading
                      content={[
                        {
                          title: "Have more questions?",
                          color: "color-dark-grey subHeading",
                        },
                      ]}
                      headingTag="p"
                      className="mb-0"
                    />
                  </div>
                  <div className="mt-3 d-none d-md-block">
                    <RectangleButton
                      title="Get started today"
                      theme="border-gray"
                      actionImage={blueArrow}
                      hoverImage={whiteArrow}
                      iconSize={15}
                      url="/sales/?source=receivables"
                    />
                  </div>
                </div>
                <div className={`${styles.faqData}`}>
                  <VoucherFaqComponent voucherName={categoryName} />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className={`color-white ${styles.error_container}`}>
          <div className={`${styles.first_row} row color-white`}>
            <div className="col-md-10 mx-auto col-12 d-flex flex-column align-items-center py-5">
              <div className="d-flex mb-4">
                <Heading
                  title="The Category you are looking for is not present"
                  color="black"
                  size="h2"
                  weight="7"
                />
                {/* <Heading title="B" color="rainy-blue" size="h1" weight="7" />
            <Heading title="olt" size="h1" weight="7" /> */}
              </div>
              <div className="d-flex flex-column">
                <Heading
                  title="Explore more on Bolt"
                  color="black"
                  size="h2"
                  weight="7"
                />
              </div>

              <div className="mt-4 desktop-only"></div>
              <div className="mt-5">
                {/* <PrimaryButton title="Explore Bolt" theme="blue" url="/bolt" /> */}
                <span className="mx-2"></span>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default MainCategoryPage
