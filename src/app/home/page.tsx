import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

import styles from "./page.module.scss"

// components
import DynamicHeading from "@/components/dynamic-heading"
import LogoSlider from "@/components/logo-slider"
import FeatureCard from "@/components/feature-card"
import LottieDynamicLoadComponent from "@/components/lottie-client/lottie-dynamic-load-client"
import CommanButton from "@/components/buttons"
import UtilityBillPayments from "@/components/utility-bill-payments"
import PartnerSection from "@/components/partner-section-data"
import PaymentGatewayCare from "@/components/home-page-payment-box"
import ScrollableCardsSection from "@/src/components/scrollable-cards-section"
import PrepaidCardHome from "@/components/prepaid-card-home/PrepaidCardHome"
import HomePageRewardsVouchers from "@/components/home-page-rewards-vouchers"
import HomeReceivablesPayables from "@/components/home-receivables-payables"
import Counter from "@/components/home-counter"
import HomePageSlider from "@/components/home-page-slider"
import BuiltforBuildersSection from "@/components/builtfor-builders-card"
import BottomCtaSection from "@/components/bottom-cta-section"

// helpers
import {
  bankIcons,
  securityIcon1,
  securityIcon2,
  securityIcon3,
  securityIcon4,
  securityIcon5,
  bankIcons2,
} from "./img"
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
import generateMetaData from "@/utils/metaData"
import Head from "next/head"

export const metadata: Metadata = generateMetaData({
  title: "The Best Payments and Spend Management Platform",
  description:
    "Unlock growth with the best payments and spend management platform with products across corporate cards, vouchers, loyalty and more",
  alternates: {
    canonical: `${process.env.URL}`,
  },
})

const HomePage = (): React.JSX.Element => {
  //

  return (
    <div className={`color-white ${styles.home_container}`}>
      <Head>
        <link rel="preload" as="image" href="/img/banner_bg_image.webp" />
      </Head>
      <section className={`${styles.topBanner}`}>
        <div className="max-w-auto">
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
          <div className="d-flex justify-content-center">
            <CommanButton
              title="Connect with Us"
              theme="blue"
              url="/sales?source=homepage"
            />
          </div>
        </div>
      </section>

      <section className={`${styles.ctaLogoSlider}`}>
        <div className="max-w-auto">
          <DynamicHeading
            content={[
              {
                title: "I want to:",
                color: "color-grey-200",
              },
            ]}
            headingTag="p"
            className=" mb-4 f-3"
          />
          <div className={`${styles.ctaButtonSection}`}>
            {ctaButtonData.map((item, index) => (
              <div className={`${styles.ctaButtonBox}`} key={index}>
                <CommanButton {...item} />
              </div>
            ))}
          </div>

          <div className={`${styles.logoSliderSection}`}>
            <LogoSlider />
          </div>
        </div>
      </section>

      <section className={`${styles.collectPaymentSection}`}>
        <div className="max-w-auto">
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
                    src="/svgs/viewsIcon.svg"
                    alt="lock"
                    width={42}
                    height={38}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.collectPaymentsBoxSection} row`}>
            {cardsData.map((item, index) => (
              <PaymentGatewayCare
                {...item}
                key={index.toString()}
                className={`${styles.collectPaymentBox} col-12 col-sm-6 col-lg-4`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.makePaymentSection}`}>
        <div className="max-w-auto">
          <div className={`${styles.makePaymentsInner}`}>
            <div className={`${styles.makePaymentHeading} mb-4 mb-md-5`}>
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

            <div className="row g-md-5">
              {prepaidCardsDataSecond.map((item, index) => (
                <div
                  key={index.toString()}
                  className={`${styles.prepaidCardBox} col-md-6 mb-4 mb-md-0`}
                >
                  <PrepaidCardHome {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.rewardSction}`}>
        <div className="max-w-auto">
          <div className={`${styles.rewardSectionInner}`}>
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

        <div className={`${styles.rewardsBottomSlider} container`}>
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

              <div className="row gap-x-3">
                {ReceivablesData.map((item, index) => (
                  <div
                    className={`${styles.ReceivablesPayablesBoxOuter} col-md-4  mb-4`}
                    key={index.toString()}
                  >
                    <HomeReceivablesPayables {...item} />
                  </div>
                ))}
              </div>
            </div>
            <div className={`${styles.receivablesSection}`}>
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

              <div className="row">
                <div className="col-md-8">
                  <div className="row">
                    {PayablesData.map((item, index) => (
                      <div
                        key={index.toString()}
                        className={`${styles.ReceivablesPayablesBoxOuter} col-md-6 mb-4`}
                      >
                        <HomeReceivablesPayables {...item} />
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

          <div className={`${styles.counterSectionOuter}`}>
            <div className="row">
              {counterData.map((item, index) => (
                <div className="col-md-4" key={index.toString()}>
                  <Counter
                    {...item}
                    className={`${styles.counterBox} "col-md-4`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.brandSection}`}>
        <div className="max-w-auto">
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

          <div className={`row ${styles.brandSliderSection}`}>
            <HomePageSlider
              testimonials={adidasData}
              className={styles.brandSliderInner}
            />
          </div>
        </div>
      </section>

      <section className={`${styles.securitySection}`}>
        <div className={`${styles.securitySectionOuter} max-w-auto`}>
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
                            title: "PCI DSS ",
                            color: "color-black",
                          },
                          {
                            title: "Certification",
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
      </section>

      <section className={`${styles.BuiltforBuildersSection}`}>
        <div className="max-w-auto">
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

          <div className={`${styles.BuiltforBuilderscard}`}>
            <div className="row">
              {BuiltforBuildersCardData.map((item, index) => (
                <BuiltforBuildersSection
                  className={`${styles.collectPaymentBox} col-md-3`}
                  {...item}
                  key={index.toString()}
                />
              ))}
            </div>

            <Link
              href={"https://docs.enkash.com/"}
              className={`${styles.customButtons}`}
            >
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
      </section>

      <BottomCtaSection className={`${styles.getStartedSection}`} />
    </div>
  )
}

export default HomePage
