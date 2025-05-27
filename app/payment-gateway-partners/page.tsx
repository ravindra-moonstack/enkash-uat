import { Metadata } from "next"
import Image from "next/image"
import styles from "./page.module.scss"
import { space } from "@/common/constant"
import Link from "next/link"
import {
  bannerLottie,
  caraouselBg,
  faqBg,
  partnerIcon,
  grayArrow,
  tick,
  earn,
  customer,
  trust,
  embbended,
  supportTeam,
} from "."
import {
  Header,
  Footer,
  Heading,
  PrimaryButton,
  HowDoesCarousel,
  LottieClientComponent,
  StructuredData,
  FAQHtml,
} from "@/components"
import generateMetaData from "@/common/utils/metaData"
import { carouselData, cardData } from "./data"
import faqData from "./faq-data"
import TertiaryButton from "@/components/buttons/tertiary-button/tertiary-button"
import ExploreCard from "@/components/explore-card/explore-card"
import BankSection from "@/components/homepage/bank-section"
import PartnerForm from "@/components/partner-form/partner-form"
import CompanySection from "@/components/company/company-section"

export const metadata: Metadata = generateMetaData({
  title: "Payment Gateway Partnership Program - EnKash",
  description:
    "Join the EnKash Payment Gateway Partner Program to earn recurring commissions. Unlimited earnings, trusted platform, seamless experience.",
  alternates: {
    canonical: "https://www.enkash.com/payment-gateway-partners/",
  },
  faqData: faqData,
})

const PartnerPage = (): React.JSX.Element => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/payment-gateway/`}
        faqData={faqData}
      />
      <Header utmSource="receivables" />

      <div
        className={`${styles.first_row}  bg-indi-volt row row-padding color-white`}
      >
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div className="d-flex">
              <Heading
                title={`Payment Gateway Partner Program${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
          </div>

          <div className="d-flex flex-column">
            <Heading
              title="Let’s Build the  "
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title=" Future of Digital Payments -"
              size="h2"
              color="rainy-blue"
              weight="7"
            />
            <Heading title=" Together." color="white" size="h2" weight="7" />
          </div>

          <div className="my-5 d-flex flex-row justify-content-start align-items-center">
            <div className="me-2">
              <Link href="#partner-form" scroll={true}>
                <PrimaryButton title="Become a Partner" theme="blue" />
              </Link>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div className={styles.lottie_container}>
            <LottieClientComponent animationData={bannerLottie} loop={true} />
          </div>
        </div>
      </div>

      <div className={styles.partner}>
        <div className={`col-md-7 col-12 ${styles.contactBlock}`}>
          <div className={styles.topSection}>
            <Heading title="Built for Growth-" size="h2" weight="6" />
            <Heading title="Focused Partners" size="h2" weight="6" />
            <Heading
              title="Whether you're a tech innovator, service provider, or business enabler, EnKash’s payment gateway partner program is tailored for you."
              size="h6"
              weight="5"
            />
          </div>

          <div className={styles.contactSection}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <Image
                  src={partnerIcon}
                  alt="Partner Icon"
                  className={styles.help_icons}
                  width={22}
                  height={18}
                />
              </div>

              <div className="d-flex flex-column">
                <Heading title="Integration Partners" size="h4" weight="7" />
                <Heading
                  title="For ERP, SaaS, and cloud-based platforms looking to integrate EnKash’s advanced payment solutions seamlessly."
                  size="h5"
                  weight="4"
                />
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <Image
                  src={partnerIcon}
                  alt="Partner Icon"
                  className={styles.help_icons}
                  width={22}
                  height={18}
                />
              </div>

              <div className="d-flex flex-column">
                <Heading title="Referral Partners" size="h4" weight="7" />
                <Heading
                  title="For digital agencies, consultants, and web developers helping businesses scale with top-tier financial solutions."
                  size="h5"
                  weight="4"
                />
              </div>
            </div>

            <div>
              <Link href="#partner-form" scroll={true}>
                <TertiaryButton
                  title="Become a Partner"
                  actionImage={grayArrow}
                  iconSize={15}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.third_row}>
        <div className={`row bg-white align-items-center ${styles.section}`}>
          <div
            className={`col-md-6 col-12 d-flex my-md-5 my-3
                   justify-content-start ${styles.third_container}`}
          >
            <div className={styles.lottie_third_container}>
              <Image
                src={earn}
                alt="card background"
                width={587}
                height={587}
                className={styles.card_img}
              />
            </div>
          </div>

          <div className="col-md-6 col-12 px-5">
            <ExploreCard
              title="Earn More, Effortlessly"
              description="Whether you’re a consultant, developer, or SaaS provider, unlock new revenue streams by referring clients to EnKash -  no extra work required. Let your expertise pay you back."
              theme="blue"
              link="#partner-form"
              linkTitle="Become a Partner"
            />
          </div>
        </div>

        <div className={`row bg-white align-items-center ${styles.section}`}>
          <div className="col-md-6 col-12 my-md-5 my-3 px-5">
            <ExploreCard
              title="Build Trust with a Market Leader"
              description="Create purpose-made company cards yourself or empower employees and departments to generate cards, set usage limits, track, manage, and control card spends."
              theme="blue"
              link="#partner-form"
              linkTitle="Become a Partner"
            />
          </div>

          <div
            className={`col-md-6 col-12 d-flex my-md-5 my-3 d-flex  ${styles.first_container}`}
          >
            <div className={styles.lottie_first_container}>
              <Image
                src={trust}
                alt="trust"
                width={500}
                height={372}
                className={styles.card_img}
              />
            </div>
          </div>
        </div>

        <div className={`row bg-white align-items-center ${styles.section}`}>
          <div
            className={`col-md-6 col-12 d-flex my-md-5 my-3
                   justify-content-start ${styles.third_container}`}
          >
            <div className={styles.lottie_third_container}>
              <Image
                src={customer}
                alt="card background"
                width={500}
                height={500}
                className={styles.card_img}
              />
            </div>
          </div>

          <div className="col-md-6 col-12 px-5 ">
            <ExploreCard
              title="Customer Delight with Superior Fintech Solutions"
              description="Whether you’re a consultant, developer, or SaaS provider, unlock new revenue streams by referring clients to EnKash -  no extra work required. Let your expertise pay you back."
              theme="blue"
              link="#partner-form"
              linkTitle="Become a Partner"
            />
          </div>
        </div>

        <div className={`row bg-white align-items-center ${styles.section}`}>
          <div className="col-md-6 col-12 my-md-5 my-3 px-5">
            <ExploreCard
              title="Embedded Payments, Made Simple"
              description="Create purpose-made company cards yourself or empower employees and departments to generate cards, set usage limits, track, manage, and control card spends."
              theme="blue"
              link="#partner-form"
              linkTitle="Become a Partner"
            />
          </div>

          <div
            className={`col-md-6 col-12 d-flex my-md-5 my-3 d-flex ${styles.first_container}`}
          >
            <div className={styles.lottie_first_container}>
              <Image
                src={embbended}
                alt="embbended"
                width={500}
                height={500}
                className={styles.card_img}
              />
            </div>
          </div>
        </div>

        <div className={`row bg-white  align-items-center ${styles.section}`}>
          <div
            className={`col-md-6 col-12 d-flex my-md-5 my-3
                   justify-content-start ${styles.third_container}`}
          >
            <div className={styles.lottie_third_container}>
              <Image
                src={supportTeam}
                alt="supportTeam"
                width={605}
                height={553}
                className={styles.card_img}
              />
            </div>
          </div>

          <div className="col-md-6 col-12 px-5">
            <ExploreCard
              title="Dedicated Support, Zero Stress"
              description="Enjoy white-glove onboarding and ongoing support from a dedicated account manager. Your clients stay happy and your operations stay smooth."
              theme="blue"
              link="#partner-form"
              linkTitle="Become a Partner"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.integration_row} row   pt-md-5`}>
        <div
          className={`d-inline text-center my-5 mb-md-2 px-3 px-md-5 ${styles.title_container}`}
        >
          <Heading
            title="Developer-first Integrations"
            color="black"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`${styles.container}`}>
          {cardData?.map((card: any, index: any) => (
            <div
              key={index}
              className={`${styles.card} col-md-4 ${
                index % 2 !== 0 ? styles.card_white_bg : ""
              }`}
            >
              <div className={styles.iconContainer}>
                <Image src={card.image} width={50} alt="icon" />
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <p>{card.explanation}</p>
            </div>
          ))}
        </div>

        <div>
          <TertiaryButton
            title="Explore Integration Documents"
            iconSize={15}
            url="https://docs.enkash.com/"
          />
        </div>
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <Heading
                  title="How to Become a Partner "
                  color="white"
                  size="h1"
                  weight="6"
                />
              </div>
            </>
          }
          mainTitle="How does it work?"
          carouselData={carouselData}
          carouselBg={caraouselBg}
        />
      </div>

      <div className={`${styles.second_row}  bg-white  relative`}>
        <div>
          <div className={`${styles.company_row} row`}>
            <div
              className={`d-flex  flex-column text-center px-3 px-md-5 ${styles.title_container}`}
            >
              <Heading
                title="You are in Good Company: "
                color="equity-blue"
                size="h1"
                weight="3"
              />

              <Heading
                title="The Best FinTech Partnership Program"
                color="black"
                size="h1"
                weight="7"
              />
            </div>
            <div className={styles.blurEffect}></div>
            <div className={styles.blurEffectRight}></div>
            <div className="">
              <CompanySection />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${styles.eighth_row}   row row-padding`}
        id="partner-form"
      >
        <div className="col-12 col-md-6 d-flex flex-column gap-4">
          <div className="">
            <Heading title="Ready to  " color="black" size="h1" weight="7" />
            <Heading
              title="  Earn More and Grow Faster "
              size="h1"
              color="equity-blue"
              weight="7"
            />
            <Heading title=" with EnKash?" color="black" size="h1" weight="7" />
          </div>

          <div className={`d-flex align-items-center`}>
            <Image src={tick} alt="tick" className={styles.help_icons} />
            <Heading
              title="Industry-best earnings"
              size="h4"
              color="main-grey"
              weight="5"
            />
          </div>

          <div className={`d-flex align-items-center  `}>
            <Image src={tick} alt="tick" className={styles.help_icons} />
            <Heading
              title="Fast activation for your clients"
              size="h4"
              color="main-grey"
              weight="5"
            />
          </div>

          <div className={`d-flex align-items-center pb-5  pb-md-0`}>
            <Image src={tick} alt="tick" className={styles.help_icons} />
            <Heading
              title="Dedicated support for accelerated growth"
              size="h4"
              color="main-grey"
              weight="5"
            />
          </div>
        </div>

        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div className={styles.inner_container}>
            <PartnerForm />
          </div>
        </div>
      </div>

      <div
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs section will help you learn about flexible billing cycle in detail."
            color="black"
            size="h4"
          />
        </div>

        <div>
          <FAQHtml faqData={faqData} />
        </div>

        <div className={styles.faq_bg}>
          <Image src={faqBg} alt="background image" />x
        </div>
      </div>

      <Footer utmSource="receivables" />
    </div>
  )
}

export default PartnerPage
