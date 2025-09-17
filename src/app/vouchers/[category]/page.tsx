import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.scss"
import VoucherData, { Voucher } from "../data/voucher-data"
import {
  blueStepTick,
  corporateNeed,
  individualNeed,
  whiteArrow,
  zigZagGrey,
  zigZagTop,
} from "../img/index"
import VoucherCard from "@/src/components/voucher-page/voucher-card"
import SavingsCalculator from "@/src/components/voucher-page/voucher-calculator/voucher-calculator"
import OccasionVoucher from "@/src/components/voucher-page/occasion-voucher"
import CustomBreadcrumb from "@/src/components/breadcrumb"
import { linkifyText, nameToUrl } from "@/src/utils/stringUtils"
import VoucherFaqComponent from "@/src/components/voucher-page/voucher-faq"
import RectangleButton from "@/src/components/buttons/rectangle-button"
import DynamicHeading from "@/src/components/dynamic-heading"
import { blueArrow } from "."

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params

  const voucher: Voucher = VoucherData[category]

  if (!voucher) {
    return {
      title: `Voucher not found - EnKash`,
      description:
        "The voucher you are looking for is not available, explore more in Bolt section.",
      alternates: {
        canonical: `${process.env.URL}/bolt/voucher/404`,
      },
    }
  }

  const imageUrl = `${process.env.URL}/images/voucher-bg/${voucher.urlName}.webp`

  return {
    title: `${voucher.brandName} Gift Card Vouchers - How to Use, Redeem and Check ${voucher.brandName} Gift Card Balance`,
    description: `Get the best ${voucher.brandName} gift card offers! Learn how to buy a ${voucher.brandName} gift card, check your ${voucher.brandName} gift card balance, and redeem your gift card easily.`,
    alternates: {
      canonical: `${process.env.URL}/voucher/${voucher.urlName}`,
    },
    openGraph: {
      title: `${voucher.brandName} Gift Card Vouchers - How to Use, Redeem and Check ${voucher.brandName} Gift Card Balance`,
      description: `Get the best ${voucher.brandName} gift card offers! Learn how to buy a ${voucher.brandName} gift card, check your ${voucher.brandName} gift card balance, and redeem your gift card easily.`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${voucher.name} image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${voucher.brandName} Gift Card Vouchers - How to Use, Redeem and Check ${voucher.brandName} Gift Card Balance`,
      description: `Get the best ${voucher.brandName} gift card offers! Learn how to buy a ${voucher.brandName} gift card, check your ${voucher.brandName} gift card balance, and redeem your gift card easily.`,
      images: [imageUrl],
    },
  }
}

const sanitizeStep = (step: string): string => {
  const containsOnlyLetters = /^[a-zA-Z]+$/
  let myStep = step
  while (!containsOnlyLetters.test(myStep[0]) && myStep) {
    myStep = myStep.slice(1)
  }
  return myStep
}

const sanitizeUTM = (utm: string): string => {
  utm = utm.toLowerCase()
  utm = utm.replace(/ /g, "_")
  return utm
}

const fetchVoucher = async (voucherName: string): Promise<Voucher | null> => {
  // local voucher
  const localVoucher: Voucher | any = VoucherData[voucherName]

  if (!localVoucher) {
    return null
  }

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
        cache: `no-cache`,
      }
    )

    const apiData = await apiResponse.json()

    apiData.payload.data.forEach((product: any) => {
      if (
        nameToUrl(product.brand) === localVoucher.urlName &&
        product.active &&
        product.enabled
      ) {
        localVoucher.discount = parseFloat(product.discount)
      }
    })

    return localVoucher
  } catch (error) {
    console.error("Error fetching vouchers:", error)
    return null
  }
}

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ category: string }>
}) => {
  //

  const { category } = await params
  const voucherName = category

  const voucherData = await fetchVoucher(voucherName)

  const voucherCategory = voucherData?.category || ""
  const voucherImage = voucherData
    ? `/images/voucher-bg/${voucherData.urlName}.webp`
    : null

  const categoryNameMap = new Map<string, string>([
    ["e-commerce", "E-Commerce"],
    ["food-and-beverages", "Food & Beverages"],
    ["health-and-wellness", "Health & Wellness"],
    ["apparels", "Apparels"],
    ["movies-and-music", "Movies & Music"],
  ])

  const boltUTM = voucherData
    ? `https://bolt.enkash.com/signup?utm_source=bolt&utm_medium=enkash_website&utm_campaign=redeem_${sanitizeUTM(
        voucherData.name.toLowerCase()
      )}`
    : "https://bolt.enkash.com/"

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Vouchers", url: "/products/vouchers" },
    {
      name: `${categoryNameMap.get(voucherCategory)}`,
      url: `/vouchers/category/${voucherData?.category}`,
    },
    { name: voucherData?.name || "Voucher", url: `/voucher/${voucherName}` },
  ]

  return (
    <>
      {voucherData ? (
        <div className={`color-white ${styles.home_container}`}>
          <div className={`${styles.voucher_detail}`}>
            <div className={`mx-auto ${styles.voucher_detail_container}`}>
              <div className={`mt-md-3 ${styles.top_container}`}>
                <div className={`${styles.top_container_section}`}>
                  <div className={`${styles.breadcrumb}`}>
                    <CustomBreadcrumb items={breadcrumbItems} />
                  </div>

                  <div className={styles.web_only}>
                    <div className={`${styles.voucher_image_section}`}>
                      <div className={styles.discount_bar}>
                        <div className={styles.discount_}>
                          Up to <span>{voucherData.discount}%</span> OFF
                        </div>
                      </div>

                      <div
                        className={`${styles.voucher_name} ${
                          voucherData.name.length > 30
                            ? voucherData.name.length > 33
                              ? styles.voucher_name_widest
                              : styles.voucher_name_wide
                            : ""
                        }`}
                      >
                        {voucherData.name.replace("-", "\u2011")}
                      </div>
                      <div className={styles.voucher_image}>
                        {voucherImage && (
                          <Image
                            src={voucherImage}
                            alt={voucherData.name}
                            width={330}
                            height={300}
                          />
                        )}
                      </div>
                      <div className={styles.buy_now_button}>
                        <Link href={boltUTM} target="_blank">
                          BUY NOW
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={styles.mobile_only}>
                    <VoucherCard voucher={voucherData} routeToBolt={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`mx-auto  ${styles.voucher_detail_container}`}>
            <div className={` ${styles.top_container_detail}`}>
              <div className={styles.detail_section}>
                {/* Gift card main title */}
                <div className={`my-4`}>
                  <div className={`mb-1 ${styles.description_title}`}>
                    <DynamicHeading
                      content={[
                        {
                          title: voucherData.name,
                          color: "color-secondary-black",
                        },
                      ]}
                      headingTag="h3"
                      className="f-7 "
                    />
                  </div>
                  <div className={`mb-4 ${styles.description}`}>
                    {voucherData.description}
                  </div>
                </div>

                {/* About company section */}
                <div className={`my-4`}>
                  <div className={`mb-1 ${styles.description_title}`}>
                    <DynamicHeading
                      content={[
                        {
                          title: `About ${voucherData.brandName}`,
                          color: "color-secondary-black",
                        },
                      ]}
                      headingTag="h3"
                      className="f-7 "
                    />
                  </div>
                  <div className={`mb-1 ${styles.description}`}>
                    {voucherData.aboutCompany}
                  </div>
                </div>

                {/* Savings Calculator section */}
                <div className={`my-4`}>
                  <div className={`mb-1 ${styles.description_title}`}>
                    <DynamicHeading
                      content={[
                        {
                          title: voucherData.calculatorTitle,
                          color: "color-secondary-black",
                        },
                      ]}
                      headingTag="h3"
                      className="f-7 "
                    />
                  </div>
                  <div className={`mb-1 ${styles.description}`}>
                    {voucherData.calculatorDescription}
                  </div>
                  <div className={`my-5`}>
                    <SavingsCalculator
                      voucherName={voucherData.name}
                      category={voucherData.category}
                      savingsPercentage={voucherData.discount}
                      voucherImg={`/images/voucher-bg/${voucherData.urlName}.webp`}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={`mb-md-4 ${styles.mid_container}`}>
              <div className={styles.detail_section}>
                {/* How to Buy Section */}
                <div>
                  <div className={`mb-1 ${styles.description_title}`}>
                    <DynamicHeading
                      content={[
                        {
                          title: voucherData.howToBuyTitle,
                          color: "color-secondary-black",
                        },
                      ]}
                      headingTag="h3"
                      className="f-7 "
                    />
                  </div>
                  <div className={`mb-md-4 ${styles.description}`}>
                    <div className={`mb-3`}>
                      Purchasing a {voucherData.name} from the EnKash platform
                      is quite simple. Here are detailed steps on how to do it:
                    </div>

                    <div className={styles.progressSteps}>
                      <div className={styles.step}>
                        <div className={styles.iconContainer}>
                          <Image src={blueStepTick} alt="tick" />
                        </div>
                        <div className={styles.content}>
                          <h3 className={styles.title}>Login</h3>
                          <p className={styles.description}>
                            Login to
                            <br />
                            bolt.enkash.com
                          </p>
                        </div>
                        <div className={styles.line} />
                      </div>
                      <div className={styles.step}>
                        <div className={styles.iconContainer}>
                          <Image src={blueStepTick} alt="tick" />
                        </div>
                        <div className={styles.content}>
                          <h3 className={styles.title}>Select</h3>
                          <p className={styles.description}>
                            Select brand voucher, denomination & quantity
                          </p>
                        </div>
                        <div className={styles.line} />
                      </div>
                      <div className={styles.step}>
                        <div className={styles.iconContainer}>
                          <Image src={blueStepTick} alt="tick" />
                        </div>
                        <div className={styles.content}>
                          <h3 className={styles.title}>Checkout</h3>
                          <p className={styles.description}>Checkout and pay</p>
                        </div>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <div>
                          Go to bolt.enkash.com or
                          <a href="https://bolt.enkash.com/" target="_blank">
                            click here
                          </a>
                        </div>
                      </li>
                      <li>
                        <div>Login with your mobile number</div>
                      </li>
                      <li>
                        <div>
                          Explore a wide selection of vouchers or select your
                          preferred category.
                        </div>
                      </li>
                      <li>
                        <div>Select the brand voucher</div>
                      </li>
                      <li>
                        <div>
                          Choose the {voucherData.name} voucher denomination and
                          quantity you wish to purchase.
                        </div>
                      </li>
                      <li>
                        <div>
                          {`Once ready, head to your cart and click "Buy Now" to
                          proceed with the purchase`}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className={` mb-4 ${styles.mid_container}`}>
              <div className={styles.detail_section}>
                {/* Use and Redeem section */}
                <div>
                  <div className={`mb-1 ${styles.description_title}`}>
                    <DynamicHeading
                      content={[
                        {
                          title: voucherData.howToRedeemTitle,
                          color: "color-secondary-black",
                        },
                      ]}
                      headingTag="h3"
                      className="f-7 "
                    />
                  </div>
                  <div className={`mb-4 ${styles.description}`}>
                    <div className={`mb-3`}>{voucherData.howToRedeemDesc}</div>
                    <ul>
                      {voucherData.howToRedeemSteps.map((step, index) => {
                        const isHeading =
                          step.includes("Online Redemption") ||
                          step.includes("Website/App") ||
                          step.includes("In-Store Redemption")
                        return (
                          <li
                            key={index}
                            style={{ listStyle: isHeading ? "none" : "disc" }}
                          >
                            <div
                              dangerouslySetInnerHTML={{
                                __html: linkifyText(sanitizeStep(step)),
                              }}
                              style={{
                                fontWeight: isHeading ? "bold" : "normal",
                                marginTop: isHeading ? "0.5rem" : "0",
                              }}
                            ></div>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>

                {/* Check Balance section */}
                <div className={`my-4`}>
                  <div className={`mb-1 ${styles.description_title}`}>
                    <DynamicHeading
                      content={[
                        {
                          title: voucherData.checkBalanceTitle,
                          color: "color-secondary-black",
                        },
                      ]}
                      headingTag="h3"
                      className="f-7 "
                    />
                  </div>
                  <div className={`mb-4 ${styles.description}`}>
                    <div className={`mb-3`}>{voucherData.checkBalanceDesc}</div>
                    <ul>
                      {voucherData.checkBalanceSteps.map((step, index) => (
                        <li key={index}>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: linkifyText(sanitizeStep(step)),
                            }}
                          ></div>
                          {}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.bottom_zigzag}>
                <Image src={zigZagTop} alt="zig-zag" />
              </div>
            </div>
            <div className={`mb-4 ${styles.bottom_container}`}>
              <div className={styles.detail_section}>
                {/* Terms and Conditions section */}
                <div>
                  <div className={`mb-1 ${styles.description_title}`}>
                    <DynamicHeading
                      content={[
                        {
                          title: voucherData.termsAndConditionsTitle,
                          color: "color-secondary-black",
                        },
                      ]}
                      headingTag="h3"
                      className="f-7"
                    />
                  </div>
                  <div className={`mb-4 ${styles.description}`}>
                    <ul>
                      {voucherData.termsAndConditionSteps.map((step, index) => (
                        <li key={index}>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: linkifyText(sanitizeStep(step)),
                            }}
                          ></div>
                          {}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.bottom_zigzag}>
                <Image src={zigZagGrey} alt="zig-zag" />
              </div>
            </div>

            <div className={` mb-4 ${styles.mid_container}`}>
              <div className={styles.detail_section}>
                <div>
                  <div className={`mb-1 ${styles.description_title}`}>
                    <DynamicHeading
                      content={[
                        {
                          title: `Who can use ${voucherData.name}`,
                          color: "color-secondary-black",
                        },
                      ]}
                      headingTag="h3"
                      className="f-7 "
                    />
                  </div>
                </div>
              </div>
              <div className={`mb-md-4 ${styles.description}`}>
                <div className={styles.need_container}>
                  <div className={styles.need_img}>
                    <Image src={individualNeed} alt="Individuals" />
                  </div>
                  <div className={`${styles.need_content}`}>
                    <DynamicHeading
                      content={[
                        {
                          title: "Individuals",
                          color: "color-secondary-black",
                        },
                      ]}
                      headingTag="h4"
                      className="f-7 "
                    />
                    <div className={`mb-4 ml-2 ${styles.description}`}>
                      Getting your hands on {voucherData.name}s will enable you
                      to get exclusive discounts.
                    </div>
                  </div>
                </div>

                <div className={styles.need_container}>
                  <div className={styles.need_img}>
                    <Image src={corporateNeed} alt="Companies" />
                  </div>
                  <div className={`${styles.need_content}`}>
                    <DynamicHeading
                      content={[
                        {
                          title: "Companies",
                          color: "color-secondary-black",
                        },
                      ]}
                      headingTag="h4"
                      className="f-7 "
                    />

                    <div className={`mb-4 ml-2 ${styles.description}`}>
                      Enterprises can save big annually with an exclusive
                      {voucherData.name}s for their employees.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={` mb-4 ${styles.mid_container}`}>
              <OccasionVoucher
                occasionsDesc={voucherData.occasionsDesc}
                voucherName={voucherData.name}
                festivals={voucherData.festivals}
                anniversary={voucherData.anniversary}
                birthdays={voucherData.birthdays}
              />
            </div>
          </div>

          <div className={`${styles.faq_new_row}  relative`}>
            <div className={`${styles.faqSection} text-start max-w-auto `}>
              <div className={`${styles.title} text-start  pb-5`}>
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
                      className="f-4 pb-0"
                    />
                  </div>
                  <div className="mt-2 d-none d-md-block">
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
                  <VoucherFaqComponent voucherName={voucherName} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={` py-5 ${styles.error_container}`}>
          <div className={`${styles.first_row} row color-white`}>
            <div className="col-md-10 mx-auto col-12 d-flex flex-column align-items-center py-5">
              <div className="d-flex mb-4 text-center">
                <DynamicHeading
                  content={[
                    {
                      title:
                        "The Voucher you are looking for is currently not available",
                      color: "color-secondry-black ",
                    },
                  ]}
                  headingTag="h2"
                  className="f-7"
                />
              </div>
              <div className="d-flex">
                <DynamicHeading
                  content={[
                    {
                      title: "Explore more on Bolt",
                      color: "color-equity-blue ",
                    },
                  ]}
                  headingTag="h2"
                  className="f-7"
                />
              </div>

              <div className="mt-4 desktop-only"></div>
              <div className="mt-5">
                <RectangleButton
                  title="Explore Bolt"
                  theme="blue"
                  url="/bolt"
                />
                <span className="mx-2"></span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CategoryPage
