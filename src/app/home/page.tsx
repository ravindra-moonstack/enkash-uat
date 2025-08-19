import Image from "next/image"
import styles from "./page.module.scss"
import {
  DynamicHeading,
  RectangleButton,
  LogoSlider,
  FeatureCard,
  LottieDynamicLoadComponent,
} from "@/components"
import {
  bankIcons,
  securityIcon1,
  securityIcon2,
  securityIcon3,
  securityIcon4,
  securityIcon5,
  bankIcons2,
} from "."
import {
  counterData,
  HomePageRewardsVouchersSlide,
  adidasData,
  scrollCardsData,
  makePaymentData,
  BuiltforBuildersCardData,
  cardsData,
  PayablesData,
  ReceivablesData,
  prepaidCardsData,
  prepaidCardsDataSecond,
  rewardData,
  ctaButtonData,
} from "./data"

import UtilityBillPayments from "@/components/UtilityBillPayments/UtilityBillPayments"
import PartnerSection from "@/components/partnerSectionData/partnerSectionData"
import PaymentGatewayCare from "@/components/homePagePaymentBox/PaymentGatewayCard"
import ScrollableCardsSection from "@/components/scrollable-cards-section/scrollableCardsSection"
import PrepaidCardHome from "@/components/prepaidCardHome/PrepaidCardHome"
import HomePageRewardsVouchers from "@/components/HomePageRewardsVouchers/HomePageRewardsVouchers "
import HomeReceivablesPayables from "@/components/HomeReceivablesPayables/HomeReceivablesPayables"
import Counter from "@/components/HomeCounter/HomeCounter"
import HomePageSlider from "@/components/homePageSlider/HomePAgeSlider"
import BuiltforBuildersSection from "@/components/BuiltforBuildersCard/BuiltforBuildersSection"
import Link from "next/link"
import BottomCtaSection from "@/components/bottomCtaSection/bottomCtaSection"
import generateMetaData from "@/common/utils/metaData"
import { Metadata } from "next"

export const metadata: Metadata = generateMetaData({
  title: "The Best Payments and Spend Management Platform",
  description:
    "Unlock growth with the best payments and spend management platform with products across corporate cards, vouchers, loyalty and more",
  alternates: {
    canonical: "https://www.enkash.com/",
  },
})
const HomePage = (): React.JSX.Element => {
  return (
    <>
      <div className={`color-white ${styles.home_container}`}>
        <section className={`${styles.topBanner}`}>
          <div className="max-w-auto">
            <div className="row">
              <div className="col-md-12">
                <div className={`${styles.banner_heading}`}>
                  <DynamicHeading
                    content={[
                      {
                        title: "Unifying Payments. Simplifying Spends",
                        color: "color-black",
                      },
                    ]}
                    headingTag="h1"
                    className="text-center mb-4"
                  />
                </div>
                <div className={`${styles.banner_subHeading}`}>
                  <DynamicHeading
                    content={[
                      {
                        title: "SPEND LESS | Save Time | Scale Fast",
                        color: "color-black subHeading",
                      },
                    ]}
                    headingTag="p"
                    className="text-center mb-4 text-uppercase"
                  />
                </div>
                <div className={`${styles.banner_button}`}>
                  <RectangleButton
                    title="Connect with Us"
                    theme="outline-blue"
                    actionImage=""
                    hoverImage=""
                    url="/sales?source=home"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.ctaLogoSlider}`}>
          <div className="max-w-auto">
            <div className="row">
              <div className="col-md-12">
                <div
                  style={{
                    color: "#A5A5A5",
                    marginBottom: "10px",
                    fontWeight: "300",
                  }}
                >
                  I want to:
                </div>
                <div className={`${styles.ctaButtonSection}`}>
                  {ctaButtonData.map((item, index) => (
                    <div className={`${styles.ctaButtonBox}`} key={index}>
                      <RectangleButton {...item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className={`${styles.logoSliderSection}`}>
                  <LogoSlider />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.collectPaymentSection}`}>
          <div className="max-w-auto">
            <div className="row">
              <div className="col-md-12">
                <div className={`${styles.collectPaymentHeadingBox}`}>
                  <div className={`${styles.collectPaymentHeading}`}>
                    <DynamicHeading
                      content={[
                        {
                          title:
                            "India’s Only End-to-End Payments & Spend Stack",
                          color: "color-black",
                        },
                      ]}
                      headingTag="h2"
                      className="text-center mb-2"
                    />
                  </div>
                  <div className={`${styles.collectPaymentSubHeading}`}>
                    <DynamicHeading
                      content={[
                        {
                          title:
                            "Built for Businesses. Powered by RBI Licenses. Trusted by Enterprises.",
                          color: "color-black subHeading",
                        },
                      ]}
                      headingTag="p"
                      className="text-center mb-0"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.collectPaymentInnerHeadingSection}`}>
              <div className="row">
                <div className="col-md-7">
                  <div className={`{collectPaymentInnerHeading}`}>
                    <DynamicHeading
                      content={[
                        {
                          title: "Collect Payments",
                          color: "color-black italic f-3 d-block",
                        },
                        {
                          title: "Like a Pro",
                          color: "color-black",
                        },
                      ]}
                      headingTag="h3"
                      className=" mb-4"
                    />
                  </div>
                </div>
                <div className="col-md-5">
                  <div className={`${styles.collectPaymentboxIcon}`}>
                    <svg
                      width="42"
                      height="38"
                      viewBox="0 0 42 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="41.4652"
                        height="37.6957"
                        rx="6.64724"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.5461 35.8158C14.8396 35.4382 13.2024 34.7969 11.6934 33.9151L11.7809 32.2042C11.9001 29.871 10.0989 28.0768 7.77204 28.1953L5.8812 28.292C4.98409 26.8685 4.30535 25.3187 3.8676 23.694L5.35205 22.3535C7.08625 20.7886 7.08202 18.2459 5.35205 16.6845L3.76953 15.2558C4.1572 13.6668 4.77445 12.1428 5.60181 10.7319L7.77204 10.8427C10.1052 10.9619 11.8994 9.16069 11.7809 6.83383L11.6694 4.66431C13.0799 3.83708 14.6034 3.21983 16.1919 2.83203L17.6213 4.41455C19.1876 6.14876 21.7297 6.14452 23.291 4.41455L24.6315 2.9301C26.2559 3.3677 27.8055 4.04619 29.2288 4.94299L29.1321 6.83383C29.0129 9.16774 30.8141 10.9619 33.141 10.8434L34.8519 10.7559C35.7337 12.2649 36.3749 13.9021 36.7526 15.6086L35.5603 16.6845C33.8268 18.2508 33.8317 20.7929 35.5603 22.3542L36.6616 23.3476C36.2324 25.0886 35.5279 26.7499 34.5746 28.2687L33.141 28.1953C30.8078 28.0761 29.0136 29.8773 29.1321 32.2042L29.2055 33.6378C27.6867 34.5911 26.0254 35.2957 24.2844 35.7248L23.291 34.6242C21.7247 32.89 19.1827 32.8942 17.6213 34.6242L16.5461 35.8158ZM20.2205 26.3384C24.1172 26.3384 27.2759 23.1797 27.2759 19.283C27.2759 15.3863 24.1172 12.2277 20.2205 12.2277C16.3238 12.2277 13.1652 15.3863 13.1652 19.283C13.1652 23.1797 16.3238 26.3384 20.2205 26.3384Z"
                        fill="#E1F4FF"
                      />
                      <mask
                        id="mask0_3763_38424"
                        maskUnits="userSpaceOnUse"
                        x="12"
                        y="11"
                        width="16"
                        height="16"
                      >
                        <path
                          d="M25.2527 12.2598H14.0801C13.7838 12.2598 13.4997 12.3775 13.2901 12.587C13.0806 12.7965 12.9629 13.0807 12.9629 13.377V24.5496C12.9629 24.8459 13.0806 25.1301 13.2901 25.3396C13.4997 25.5491 13.7838 25.6668 14.0801 25.6668H25.2527C25.549 25.6668 25.8332 25.5491 26.0427 25.3396C26.2523 25.1301 26.37 24.8459 26.37 24.5496V13.377C26.37 13.0807 26.2523 12.7965 26.0427 12.587C25.8332 12.3775 25.549 12.2598 25.2527 12.2598Z"
                          fill="white"
                          stroke="white"
                          strokeWidth="1.48968"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.5483 21.57L20.4104 23.0597L23.3898 19.3355M15.9414 15.6113H23.3898M15.9414 18.5907H18.9208"
                          stroke="black"
                          strokeWidth="1.48968"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </mask>
                      <g mask="url(#mask0_3763_38424)">
                        <path
                          d="M10.7285 10.0156H28.6046V27.8917H10.7285V10.0156Z"
                          fill="#06ADFF"
                        />
                      </g>
                    </svg>
                    <svg
                      width="42"
                      height="38"
                      viewBox="0 0 42 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.498047"
                        width="41.4652"
                        height="37.6957"
                        rx="6.64724"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.0441 35.8158C15.3377 35.4382 13.7005 34.7969 12.1914 33.9151L12.2789 32.2042C12.3982 29.871 10.5969 28.0768 8.27008 28.1953L6.37925 28.292C5.48214 26.8685 4.8034 25.3187 4.36565 23.694L5.85009 22.3535C7.5843 20.7886 7.58007 18.2459 5.85009 16.6845L4.26758 15.2558C4.65525 13.6668 5.2725 12.1428 6.09985 10.7319L8.27008 10.8427C10.6033 10.9619 12.3975 9.16069 12.2789 6.83383L12.1675 4.66431C13.5779 3.83708 15.1014 3.21983 16.6899 2.83203L18.1194 4.41455C19.6857 6.14876 22.2277 6.14452 23.789 4.41455L25.1296 2.9301C26.7539 3.3677 28.3035 4.04619 29.7268 4.94299L29.6302 6.83383C29.5109 9.16774 31.3122 10.9619 33.639 10.8434L35.35 10.7559C36.2317 12.2649 36.873 13.9021 37.2507 15.6086L36.0583 16.6845C34.3248 18.2508 34.3298 20.7929 36.0583 22.3542L37.1597 23.3476C36.7305 25.0886 36.026 26.7499 35.0727 28.2687L33.639 28.1953C31.3058 28.0761 29.5117 29.8773 29.6302 32.2042L29.7036 33.6378C28.1848 34.5911 26.5235 35.2957 24.7824 35.7248L23.789 34.6242C22.2228 32.89 19.6807 32.8942 18.1194 34.6242L17.0441 35.8158ZM20.7186 26.3384C24.6152 26.3384 27.7739 23.1797 27.7739 19.283C27.7739 15.3863 24.6152 12.2277 20.7186 12.2277C16.8219 12.2277 13.6632 15.3863 13.6632 19.283C13.6632 23.1797 16.8219 26.3384 20.7186 26.3384Z"
                        fill="#E1F4FF"
                      />
                      <path
                        d="M24.8989 15.8224V14.2135C24.8989 11.9611 23.1292 10.1914 20.8768 10.1914C18.6244 10.1914 16.8547 11.9611 16.8547 14.2135V15.8224C15.4872 15.8224 14.4414 16.8681 14.4414 18.2357V23.8666C14.4414 25.2341 15.4872 26.2799 16.8547 26.2799H24.8989C26.2664 26.2799 27.3122 25.2341 27.3122 23.8666V18.2357C27.3122 16.8681 26.2664 15.8224 24.8989 15.8224ZM18.4635 14.2135C18.4635 12.846 19.5093 11.8003 20.8768 11.8003C22.2443 11.8003 23.2901 12.846 23.2901 14.2135V15.8224H18.4635V14.2135Z"
                        fill="#06ADFF"
                      />
                    </svg>
                    <svg
                      width="42"
                      height="38"
                      viewBox="0 0 42 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.498047"
                        width="41.4652"
                        height="37.6957"
                        rx="6.64724"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.0441 35.8158C15.3377 35.4382 13.7005 34.7969 12.1914 33.9151L12.2789 32.2042C12.3982 29.871 10.5969 28.0768 8.27008 28.1953L6.37925 28.292C5.48214 26.8685 4.8034 25.3187 4.36565 23.694L5.85009 22.3535C7.5843 20.7886 7.58007 18.2459 5.85009 16.6845L4.26758 15.2558C4.65525 13.6668 5.2725 12.1428 6.09985 10.7319L8.27008 10.8427C10.6033 10.9619 12.3975 9.16069 12.2789 6.83383L12.1675 4.66431C13.5779 3.83708 15.1014 3.21983 16.6899 2.83203L18.1194 4.41455C19.6857 6.14876 22.2277 6.14452 23.789 4.41455L25.1296 2.9301C26.7539 3.3677 28.3035 4.04619 29.7268 4.94299L29.6302 6.83383C29.5109 9.16774 31.3122 10.9619 33.639 10.8434L35.35 10.7559C36.2317 12.2649 36.873 13.9021 37.2507 15.6086L36.0583 16.6845C34.3248 18.2508 34.3298 20.7929 36.0583 22.3542L37.1597 23.3476C36.7305 25.0886 36.026 26.7499 35.0727 28.2687L33.639 28.1953C31.3058 28.0761 29.5117 29.8773 29.6302 32.2042L29.7036 33.6378C28.1848 34.5911 26.5235 35.2957 24.7824 35.7248L23.789 34.6242C22.2228 32.89 19.6807 32.8942 18.1194 34.6242L17.0441 35.8158ZM20.7186 26.3384C24.6152 26.3384 27.7739 23.1797 27.7739 19.283C27.7739 15.3863 24.6152 12.2277 20.7186 12.2277C16.8219 12.2277 13.6632 15.3863 13.6632 19.283C13.6632 23.1797 16.8219 26.3384 20.7186 26.3384Z"
                        fill="#E1F4FF"
                      />
                      <path
                        d="M24.8989 15.8224V14.2135C24.8989 11.9611 23.1292 10.1914 20.8768 10.1914C18.6244 10.1914 16.8547 11.9611 16.8547 14.2135V15.8224C15.4872 15.8224 14.4414 16.8681 14.4414 18.2357V23.8666C14.4414 25.2341 15.4872 26.2799 16.8547 26.2799H24.8989C26.2664 26.2799 27.3122 25.2341 27.3122 23.8666V18.2357C27.3122 16.8681 26.2664 15.8224 24.8989 15.8224ZM18.4635 14.2135C18.4635 12.846 19.5093 11.8003 20.8768 11.8003C22.2443 11.8003 23.2901 12.846 23.2901 14.2135V15.8224H18.4635V14.2135Z"
                        fill="#06ADFF"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.collectPaymentsBoxSection}`}>
              <div className="row">
                {cardsData.map((item, index) => (
                  <div className="col-md-4" key={index}>
                    <div className={`${styles.collectPaymentBox}`}>
                      <PaymentGatewayCare {...item} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.makePaymentSection}`}>
          <div className="max-w-auto">
            <div className="row">
              <div className="col-md-12">
                <div className={`${styles.makePaymentsInner}`}>
                  <div className="row">
                    <div className="col-md-12">
                      <div
                        className={`${styles.makePaymentHeading} mb-4 mb-md-5`}
                      >
                        <DynamicHeading
                          content={[
                            {
                              title: "Make Payments",
                              color: "color-black italic f-3 d-block",
                            },
                            {
                              title: "Effortlessly",
                              color: "color-black",
                            },
                          ]}
                          headingTag="h3"
                          className=" mb-4"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    {makePaymentData.map((item, index) => (
                      <div
                        className={`${styles.makePaymentsBoxData} col-md-6`}
                        key={index}
                      >
                        <div className={`${styles.makesPaymentsBox} `}>
                          <UtilityBillPayments
                            {...item}
                            womanImg={item.womanImg.src}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.makePaymentExpenseMagement}`}>
              <div className="row">
                <div className="col-md-6 z-1">
                  <div className={`${styles.lotty_files}`}>
                    <LottieDynamicLoadComponent
                      animationName={"HomeAnimationLottie"}
                      loop={true}
                    />
                  </div>
                </div>
                <div className="col-md-6 z-2">
                  <div
                    className={`${styles.makePaymentExpenseManagementContent}`}
                  >
                    <div className={`${styles.headings_section}`}>
                      <DynamicHeading
                        content={[
                          {
                            title: "AI-Powered",
                            color: "color-black",
                          },
                          {
                            title: "Expense Management",
                            color: "color-black italic f-3 d-block",
                          },
                        ]}
                        headingTag="h3"
                        className="text-start mb-4 mb-md-5"
                      />
                    </div>
                    <div className={`${styles.scrollableSection}`}>
                      <ScrollableCardsSection
                        cardsData={scrollCardsData}
                        showScroll={true}
                        maxHeight="400px"
                        buttonTitle=""
                        buttonTheme="outline-blue"
                        buttonUrl=""
                        marginBottoms="24px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.prepaidCardSection}`}>
          <div className="max-w-auto">
            <div className={`${styles.prepaidCardTopSection}`}>
              <div className="row">
                <div className="col-md-12">
                  <div className={`${styles.prepaidCardHeading}`}>
                    <DynamicHeading
                      content={[
                        {
                          title: "Prepaid Cards",
                          color: "color-white italic f-3 d-block",
                        },
                        {
                          title: "with Total Spend Control",
                          color: "color-white",
                        },
                      ]}
                      headingTag="h3"
                      className="text-start mb-4"
                    />
                  </div>
                </div>
              </div>
              <div className={`${styles.prepaidCardSectionInner}`}>
                <div className="row g-md-5">
                  {prepaidCardsData.map((item, index) => (
                    <div className="col-md-6 mb-4 mb-md-0" key={index}>
                      <div className={`${styles.prepaidCardBox}`}>
                        <PrepaidCardHome {...item} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={`${styles.prepaidCardSectionBottom}`}>
              <div className="row">
                <div className="col-md-12">
                  <div className={`${styles.prepaidCardHeading} mb-4 mb-md-5`}>
                    <DynamicHeading
                      content={[
                        {
                          title: "Corporate Credit Cards*",
                          color: "color-white italic f-3 d-block",
                        },
                        {
                          title: "Built to Power Growth",
                          color: "color-white",
                        },
                      ]}
                      headingTag="h3"
                      className=" mb-4"
                    />
                  </div>
                </div>
              </div>
              <div className="row g-md-5">
                {prepaidCardsDataSecond.map((item, index) => (
                  <div className="col-md-6 mb-4 mb-md-0" key={index}>
                    <div className={`${styles.prepaidCardBox}`}>
                      <PrepaidCardHome {...item} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.rewardSction}`}>
          <div className="max-w-auto">
            <div className={`${styles.rewardSectionInner}`}>
              <div className="row">
                <div className="col-md-12">
                  <div className={`${styles.rewardHeading} mb-4 mb-md-5`}>
                    <DynamicHeading
                      content={[
                        {
                          title: "Rewards & Vouchers ",
                          color: "color-black f-3 d-block",
                        },
                        {
                          title: "That Motivate and Matter",
                          color: "color-black",
                        },
                      ]}
                      headingTag="h2"
                      className="f-6 text-center"
                    />
                  </div>
                </div>
              </div>
              <div className={`${styles.rewardSectionContent}`}>
                <div className="row ">
                  {rewardData.map((item, index) => (
                    <div className="col-md-4 mb-4 mb-md-0" key={index}>
                      <div className={`${styles.rewardVauchersBox}`}>
                        <HomePageRewardsVouchers
                          {...item}
                          image={item.image.src}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className={`${styles.rewardBottomText} `}>
                    <DynamicHeading
                      content={[
                        {
                          title: "Vouchers",
                          color: "color-white subHeading",
                        },
                      ]}
                      headingTag="p"
                      className="text-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.rewardsBottomSlider} container`}>
            <div className="row">
              <div className="col-md-12">
                <div className={`${styles.rewardsBottomSliderContent}`}>
                  {HomePageRewardsVouchersSlide.map((item, index) => (
                    <div
                      className={`${styles.rewardsBottomSliderContentBox}`}
                      key={index}
                    >
                      <div className={`${styles.rewardsBottomSliderBox}`}>
                        <FeatureCard {...item} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.receivablesPayablesSection}`}>
          <div className="max-w-auto">
            <div className={`${styles.receivablesPayablesOuter}`}>
              <div className="row">
                <div className="col-md-12">
                  <div className={`${styles.receivablesPayablesHeading}`}>
                    <DynamicHeading
                      content={[
                        {
                          title: "Automating Your Accounts",
                          color: "color-black f-3 d-block",
                        },
                        {
                          title: "Receivable and Payables",
                          color: "color-black",
                        },
                      ]}
                      headingTag="h2"
                      className="text-start mb-4 mb-md-5"
                    />
                  </div>
                </div>
              </div>
              <div className={`${styles.receivablesSection}`}>
                <div className="row">
                  <div className="col-md-12">
                    <DynamicHeading
                      content={[
                        {
                          title: "Receivables Automation",
                          color: "color-black subHeading",
                        },
                      ]}
                      headingTag="p"
                      className="mb-3"
                    />
                  </div>
                </div>

                <div className="row gap-x-3">
                  {ReceivablesData.map((item, index) => (
                    <div className="col-md-4  mb-4" key={index}>
                      <div className={`${styles.ReceivablesPayablesBoxOuter}`}>
                        <HomeReceivablesPayables {...item} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`${styles.receivablesSection}`}>
                <div className="row">
                  <div className="col-md-12">
                    <DynamicHeading
                      content={[
                        {
                          title: "Payables Automation",
                          color: "color-black subHeading",
                        },
                      ]}
                      headingTag="p"
                      className="mb-3 mt-md-5 mt-4"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8">
                    <div className="row">
                      {PayablesData.map((item, index) => (
                        <div className="col-md-6 mb-4" key={index}>
                          <div
                            className={`${styles.ReceivablesPayablesBoxOuter}`}
                          >
                            <HomeReceivablesPayables {...item} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.partnerSection}`}>
          <div className="max-w-auto">
            <div className={`${styles.partnerRow} row `}>
              <div className="col-md-7">
                <PartnerSection
                  data={{
                    titleTag: "Partner with us",
                    heading: {
                      line1: "Accelerate Growth. Expand reach.",
                      line2: "Monetize your Network.",
                    },
                    partners: [
                      {
                        icon: bankIcons,
                        title: "Banks & NBFC Partners",
                        description:
                          "Launch co-branded cards, gateways, and platforms on our infrastructure - your brand, our tech.",
                      },
                      {
                        icon: bankIcons2,
                        title: "Affiliate Network",
                        description:
                          "Refer, earn, and empower India’s next 1M digital-first businesses.",
                      },
                    ],
                    buttonText: "Become a Partner",
                    buttonLinks: "/bank-partnerships",
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.counterSection}`}>
          <div className="max-w-auto">
            <div className="row">
              <div className="col-md-12">
                <div className={`${styles.counterHeading} mb-4 mb-md-5`}>
                  <DynamicHeading
                    content={[
                      {
                        title: "Say Goodbye to Fragmented Experience",
                        color: "color-black",
                      },
                    ]}
                    headingTag="h2"
                    className="text-center mb-2"
                  />
                  <DynamicHeading
                    content={[
                      {
                        title:
                          "One Unified Platform. Multiple Use Cases. Zero Complexity.",
                        color: "color-black subHeading",
                      },
                    ]}
                    headingTag="p"
                    className="text-center mb-0"
                  />
                </div>
              </div>
            </div>
            <div className={`${styles.counterSectionOuter}`}>
              <div className="row">
                {counterData.map((item, index) => (
                  <div className="col-md-4" key={index}>
                    <div className={`${styles.counterBox}`}>
                      <Counter {...item} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.brandSection}`}>
          <div className="max-w-auto">
            <div className="row">
              <div className="col-md-12">
                <div className={`${styles.heading}`}>
                  <DynamicHeading
                    content={[
                      {
                        title: "Don’t Just Take Our Word for It",
                        color: "color-black",
                      },
                    ]}
                    headingTag="h2"
                    className="text-center mb-4"
                  />
                </div>
              </div>
            </div>
            <div className={`${styles.brandSliderSection}`}>
              <div className="row">
                <div className={`${styles.brandSliderInner}`}>
                  <HomePageSlider testimonials={adidasData} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.securitySection}`}>
          <div className="max-w-auto">
            <div className={`${styles.securitySectionOuter}`}>
              <div className="row">
                <div className="col-md-7 mb-4 mb-md-0">
                  <div className={`${styles.securityLeft}`}>
                    <Image src={securityIcon1} alt={""}></Image>
                    <DynamicHeading
                      content={[
                        {
                          title: "Our Credentials, Your Confidence",
                          color: "color-white",
                        },
                      ]}
                      headingTag="h3"
                      className="f-5 mb-3 mt-3"
                    />
                    <DynamicHeading
                      content={[
                        {
                          title:
                            "Built for Businesses. Powered by RBI Licenses. Trusted by Enterprises.",
                          color: "color-white",
                        },
                      ]}
                      headingTag="p"
                      className="mb-0"
                    />
                  </div>
                </div>
                <div className="col-md-5">
                  <div className={`${styles.securityRight}`}>
                    <div className="row">
                      <div className="col-sm-6 mb-3">
                        <div className={`${styles.card}`}>
                          <Image src={securityIcon2} alt={""}></Image>
                          <DynamicHeading
                            content={[
                              {
                                title: "Payment Aggregator",
                                color: "color-black",
                              },
                              {
                                title: "License",
                                color: "color-black d-block",
                              },
                            ]}
                            headingTag="p"
                            className="text-center"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6  mb-3">
                        <div className={`${styles.card}`}>
                          <Image src={securityIcon3} alt={""}></Image>
                          <DynamicHeading
                            content={[
                              {
                                title: "Prepaid Payment",
                                color: "color-black",
                              },
                              {
                                title: "Instrument License",
                                color: "color-black d-block",
                              },
                            ]}
                            headingTag="p"
                            className="text-center"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 mb-3 mb-md-0">
                        <div className={`${styles.card} `}>
                          <Image
                            src={securityIcon4}
                            className={`${styles.bharatBillPaymentImg}`}
                            alt={""}
                          ></Image>
                          <DynamicHeading
                            content={[
                              {
                                title: "Bharat Bill Payment",
                                color: "color-black d-block",
                              },
                              {
                                title: "Operating Unit",
                                color: "color-black",
                              },
                            ]}
                            headingTag="p"
                            className="text-center"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className={`${styles.card}`}>
                          <Image src={securityIcon5} alt={""}></Image>
                          <DynamicHeading
                            content={[
                              {
                                title: "SOC 2 Compliance ",
                                color: "color-black",
                              },
                              {
                                title: "Compliance ",
                                color: "color-black d-block",
                              },
                            ]}
                            headingTag="p"
                            className="text-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.BuiltforBuildersSection}`}>
          <div className="max-w-auto">
            <div className="row">
              <div className="col-md-12">
                <div className={`${styles.topSubHeading}`}>
                  <DynamicHeading
                    content={[
                      {
                        title: "Built for ",
                        color: "color-equity-blue f-3",
                      },
                      {
                        title: "Builders",
                        color: "color-equity-blue",
                      },
                    ]}
                    headingTag="h5"
                    className="f-5 "
                  />
                </div>
                <div className={`${styles.topSubHeading}`}>
                  <DynamicHeading
                    content={[
                      {
                        title: "Everything You Need to Ship Faster",
                        color: "color-white",
                      },
                    ]}
                    headingTag="h2"
                    className="f-6 mb-3"
                  />
                </div>
              </div>
            </div>
            <div className={`${styles.BuiltforBuilderscard}`}>
              <div className="row">
                {BuiltforBuildersCardData.map((item, index) => (
                  <div className="col-md-3" key={index}>
                    <div className={`${styles.collectPaymentBox}`}>
                      <BuiltforBuildersSection {...item} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className={`${styles.customButtons}`}>
                    <Link href={"/#"}>
                      {" "}
                      Read the Docs{" "}
                      <svg
                        width="8"
                        height="10"
                        viewBox="0 0 8 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.75 1.25L5.75 5.25L1.75 9.25"
                          stroke="#1C5AF4"
                          strokeWidth="2"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.getStartedSection}`}>
          <BottomCtaSection />
        </section>
      </div>
    </>
  )
}

export default HomePage
