import Image from "next/image"
import { Metadata } from "next"
import { space } from "@/common/constant"
import styles from "./page.module.scss"
import LottieDynamicLoadComponent from "@/components/lottie-client/lottie-dynamic-load-client"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import Heading from "@/components/heading/heading"
import PrimaryButton from "@/components/buttons/primary-button/primary-button"
import SecondryButton from "@/components/buttons/secondary-button/secondary-button"
import { CategoryData } from "../../../bolt/data/category-data"
import Link from "next/link"
import CategoryMenu from "@/components/voucher-page/category-menu"
import VoucherCard from "@/components/voucher-page/voucher-card"
import {
  apparels,
  eCommerceImg,
  foodAndBeverages,
  healthAndWellness,
  moviesAndMusic,
  noVoucherFoundImg,
  whiteArrow,
} from "../../../bolt/index"
import { movieAndMusic } from "@/components/header"
import VoucherData, { Voucher } from "../../../bolt/data/voucher-data"
import { nameToUrl } from "@/common/utils/stringUtils"
import StructuredData from "@/components/head/structuredData"
import { generateVoucherSchema } from "@/common/utils/metaData"

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
  params: { category: string }
}): Metadata {
  const categoryName: string = params.category
  let isValidCategory: boolean = true
  if (!validCategories.includes(categoryName)) {
    return {
      title: `Category not found - EnKash`,
      description:
        "The category you are looking for is not available, explore more in Bolt section.",
      alternates: {
        canonical: `https://www.enkash.com/bolt/category/404`,
      },
    }
  }

  const categoryData = CategoryData[categoryName]

  return {
    title: `${categoryData.heading} - ${categoryData.title} ${categoryData.discount}% OFF - EnKash`,
    description: categoryData.description,
    alternates: {
      canonical: `https://www.enkash.com/bolt/category/${categoryData.name}`,
    },
  }
}

const fetchVouchers = async (categoryName: string) => {
  // local vouchers for the current category
  const localVouchers: Voucher[] = Object.values(VoucherData).filter(
    (voucher: Voucher) => voucher.category === categoryName
  )
  // return localVouchers;
  try {
    // bolt open api
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

    //store the voucherName and it's discount from API data
    const apiDiscounts: Record<string, string> = {}
    apiData.payload.data.forEach((product: any) => {
      apiDiscounts[nameToUrl(product.brand)] = product.discount
    })

    validVouchers.map(
      (validVoucher, index) =>
        (validVoucher.discount = parseFloat(apiDiscounts[validVoucher.urlName]))
    )

    return validVouchers
  } catch (error) {
    console.error("Error fetching vouchers:", error)
    const emptyVouchers: Voucher[] = []
    return emptyVouchers
  }
}

let CategoryPhoto = new Map<string, any>([
  ["e-commerce", eCommerceImg],
  ["apparels", apparels],
  ["food-and-beverages", foodAndBeverages],
  ["movies-and-music", moviesAndMusic],
  ["health-and-wellness", healthAndWellness],
])

const validCategories: string[] = [
  "e-commerce",
  "food-and-beverages",
  "health-and-wellness",
  "apparels",
  "movies-and-music",
]

const categoryPage = async ({ params }: { params: { category: string } }) => {
  const categoryName: string = params.category
  let isValidCategory: boolean = true
  if (!validCategories.includes(categoryName)) {
    isValidCategory = false
  }

  const categoryData = CategoryData[categoryName]
  const currentCategoryPhoto = CategoryPhoto.get(categoryName)
  const boltUTM = `https://vouchers.enkash.com/signup?utm_source=bolt&utm_medium=enkash_website&utm_campaign=${categoryName}`
  const halfBoltUTM = `bolt&utm_medium=enkash_website&utm_campaign=${categoryName}`

  // const vouchers: Voucher[] = [];
  const vouchers: Voucher[] = await fetchVouchers(categoryName)
  return (
    <div className={`color-white ${styles.home_container}`}>
      <StructuredData url={`https://www.enkash.com/voucher/${categoryName}`} />
      <Header utmSource={halfBoltUTM} />

      {isValidCategory ? (
        <>
          {categoryData && (
            <div className={`${styles.first_row} row color-white`}>
              <div className="col-md-6 col-12 d-flex flex-column">
                <div className="d-flex mb-4">
                  <Heading
                    title={categoryData.heading}
                    color="rainy-blue"
                    size="h1"
                    weight="7"
                    useH1TagInHtml={true}
                  />
                  {/* <Heading title="B" color="rainy-blue" size="h1" weight="7" />
            <Heading title="olt" size="h1" weight="7" /> */}
                </div>
                <div className="d-flex flex-column">
                  <div className={styles.discount_text}>
                    {categoryData.title}
                    <span>&nbsp;{categoryData.discount}% OFF</span>
                  </div>
                </div>
                <div className="mt-4 mobile-only">
                  <Heading
                    title={categoryData.description}
                    color="white"
                    size="h6"
                    weight="4"
                    useH2TagInHtml={true}
                  />
                </div>
                <div className="mt-4 desktop-only">
                  <Heading
                    title={categoryData.description}
                    color="white"
                    size="h5"
                    weight="5"
                    useH2TagInHtml={true}
                  />
                </div>
                <div className="mt-5">
                  <PrimaryButton
                    title="Explore Bolt"
                    theme="blue"
                    url="/bolt"
                  />
                  {/* tag-id while navigating through category-menu to land on same position */}
                  <span id="category-menu" className="mx-2"></span>
                  <SecondryButton title="Buy Now" iconSize={15} url={boltUTM} />
                </div>
              </div>
              <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
                <div className={styles.lottie_container}>
                  <Image src={currentCategoryPhoto} alt={categoryName} />
                  {/* <LottieDynamicLoadComponent
                    animationName={"LoyaltyBannerAnimation"}
                    loop={true}
                  /> */}
                </div>
              </div>
            </div>
          )}
          {/* show all vouchers menu*/}
          <div>
            <CategoryMenu currentPageCategory={categoryName} />
          </div>
          {/* render each voucher */}
          <div className={`m-4 ${styles.vouchers_cont}`}>
            {vouchers.length > 0 && (
              <div className={`m-4 my-5 mx-auto ${styles.vouchers_container}`}>
                {Object.values(vouchers).map((voucher: Voucher, index) => (
                  <div key={index}>
                    <VoucherCard voucher={voucher} />
                    <div
                      dangerouslySetInnerHTML={{
                        __html: generateVoucherSchema(voucher),
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
            {/* When No vouchers are available in a category */}
            {vouchers.length === 0 && (
              <div className={`mt-2 mb-5 mx-auto ${styles.vouchers_container}`}>
                <div className={`mt-4 ${styles.no_voucher_container}`}>
                  <div className={styles.no_voucher_img}>
                    <Image
                      src={noVoucherFoundImg}
                      alt="white-arrow"
                      width={500}
                      height={500}
                    />
                  </div>
                  <Heading
                    title="Currently unavailable!"
                    color="secondry-black"
                    size="h4"
                    weight="7"
                  />
                  <Heading
                    title="Please come back soon."
                    color="black"
                    size="h5"
                    weight="3"
                  />
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className={`color-white ${styles.error_container}`}>
          <div className={`${styles.first_row} row color-white`}>
            <div className="col-md-10 mx-auto col-12 d-flex flex-column align-items-center py-5">
              <div className="d-flex mb-4">
                <Heading
                  title="The Category you are looking for is not present"
                  color="white"
                  size="h2"
                  weight="7"
                />
                {/* <Heading title="B" color="rainy-blue" size="h1" weight="7" />
            <Heading title="olt" size="h1" weight="7" /> */}
              </div>
              <div className="d-flex flex-column">
                <Heading
                  title="Explore more on Bolt"
                  color="white"
                  size="h2"
                  weight="7"
                />
              </div>

              <div className="mt-4 desktop-only"></div>
              <div className="mt-5">
                <PrimaryButton
                  title="Explore Bolt"
                  theme="blue"
                  url="/vouchers"
                />
                <span className="mx-2"></span>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer utmSource={halfBoltUTM} />
    </div>
  )
}

export default categoryPage
