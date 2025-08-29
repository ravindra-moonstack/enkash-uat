import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

import styles from "./page.module.scss"

// components
import {
  DynamicHeading,
  RectangleButton,
  LogoSlider,
  FeatureCard,
  LottieDynamicLoadComponent,
} from "@/components"

import UtilityBillPayments from "@/components/UtilityBillPayments/UtilityBillPayments"
import PartnerSection from "@/components/partnerSectionData/partnerSectionData"
import PaymentGatewayCare from "@/components/homePagePaymentBox/PaymentGatewayCard"
import ScrollableCardsSection from "@/components/scrollable-cards-section/scrollableCardsSection"
import PrepaidCardHome from "@/components/prepaidCardHome/PrepaidCardHome"
import HomePageRewardsVouchers from "@/components/HomePageRewardsVouchers/HomePageRewardsVouchers "
import HomeReceivablesPayables from "@/components/HomeReceivablesPayables"
import Counter from "@/components/HomeCounter/HomeCounter"
import HomePageSlider from "@/components/homePageSlider/HomePAgeSlider"
import BuiltforBuildersSection from "@/components/BuiltforBuildersCard/BuiltforBuildersSection"
import BottomCtaSection from "@/components/bottomCtaSection/bottomCtaSection"

// helpers
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
import generateMetaData from "@/common/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "The Best Payments and Spend Management Platform",
  description:
    "Unlock growth with the best payments and spend management platform with products across corporate cards, vouchers, loyalty and more",
  alternates: {
    canonical: `${process.env.URL}`,
  },
})
const HomePage = (): React.JSX.Element => {
  return (
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
                  theme="blue"
                  actionImage=""
                  hoverImage=""
                  url="/sales?source=homepage"
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
                        title: "India’s Only End-to-End Payments & Spend Stack",
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
                  <Image
                    src="/svgs/file-check.svg"
                    alt="file-check"
                    width={42}
                    height={38}
                  />
                  <Image
                    src="/svgs/lock.svg"
                    alt="lock"
                    width={42}
                    height={38}
                  />
                  <Image
                    src="/svgs/lock.svg"
                    alt="lock"
                    width={42}
                    height={38}
                  />
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
                      buttonText: "Become a Partner",
                      buttonLinks: "/bank-partnerships",
                    },
                    {
                      icon: bankIcons2,
                      title: "Affiliate Network",
                      description:
                        "Refer, earn, and empower India’s next 1M digital-first businesses.",
                      buttonText: "Become a Partner",
                      buttonLinks: "/affiliate-programs",
                    },
                  ],
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
                  <Link href={"https://docs.enkash.com/"} className="">
                    Read the Docs
                    <Image
                      src="/svgs/chevron-right.svg"
                      alt="chevron-right"
                      width={8}
                      height={10}
                      className="ms-1"
                    />
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
  )
}

export default HomePage
