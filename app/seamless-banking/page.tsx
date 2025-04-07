import Image from "next/image"
import Link from "next/link"

import {
  Header,
  ThreeSteps,
  Footer,
  Heading,
  BlogWrapper,
  ComprehensiveView,
  PrimaryButton,
  GetStartedCard,
  HowDoesCarousel,
  ContactUsCard,
  LottieClientComponent,
  StructuredData,
  AllProducts,
  FAQHtml,
} from "@/components"
import styles from "./page.module.scss"
import { space } from "@/common/constant"
import { blogData, carouselData, productData } from "./data"
import faqData from "./faq-data"
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from "."
import { Metadata } from "next"
import { userPlus, numberOne, stack } from "@/components/three-steps/"
import generateMetaData from "@/common/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "Decentralized Finance Payment Solutions for Businesses - EnKash",
  description:
    "Decentralized Payment is an emerging digital ecosystem that allows people to send, purchase, and exchange financial assets without relying on banks, brokerages, or exchanges.",
  alternates: {
    canonical: "https://www.enkash.com/seamless-banking/",
  },
  faqData: faqData,
})

const seamlessBanking = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/seamless-banking/`}
        faqData={faqData}
      />
      <Header utmSource="payables" />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <Heading
              title={`Business Banking ${space}`}
              color="rainy-blue"
              size="h4"
              weight="7"
            />
          </div>

          <div className="d-flex flex-column">
            <Heading
              title="Leverage business"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading
              title="banking with your"
              color="white"
              size="h2"
              weight="7"
            />
            <Heading title="existing Bank" color="white" size="h2" weight="7" />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Effortlessly integrate your existing bank accounts with EnKash for a streamlined, secure, and fully customizable banking"
              color="white"
              size="h6"
              weight="5"
            />
          </div>
          <div className="my-5 d-flex flex-row justify-content-start align-items-center">
            <div className="me-2">
              <PrimaryButton
                title="Get Started"
                theme="blue"
                url="/sales/?source=payables"
              />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div className={styles.lottie_container}>
            {" "}
            <LottieClientComponent animationData={bannerLottie} loop={true} />
          </div>
        </div>

        <div className={styles.three_step_container}>
          <ThreeSteps
            title="Transform Your Business Banking Experience"
            steps={[
              {
                icon: userPlus,
                text: "Comprehensive Banking",
              },
              {
                icon: stack,
                text: "Advanced Security",
              },
              {
                icon: numberOne,
                text: "Scalable for Growth",
              },
            ]}
          />
        </div>
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-2">
          <Heading
            title="Powerful Solution to How You Manage "
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}Business Finances`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>
        <div className="d-flex justify-content-center text-center mb-5"></div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Tailor Banking to Your Business Needs"
              description="Customize banking workflows to fit your business needs. With EnKash, tailor approval hierarchies, spending categories, and payment flows for maximum efficiency and policy compliance. Streamline processes and gain better control over transactions."
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Transactions Visibility"
              description="Achieve full transparency into your finances with EnKash’s intuitive dashboard. Track transactions in real time, consolidate data from multiple accounts, and generate insights for smarter decisions. Streamline management and reduce errors with accurate, up-to-date information."
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Decentralized Payments "
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Virtual Accounts "
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Empower departments with platform-specific debit cards for seamless decentralized payments. EnKash’s virtual accounts simplify payment management, offering branch-level visibility and control. Reduce reliance on central finance teams, boosting efficiency and accountability."
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Smart Controls"
              description="Prevent overspending with customizable approval thresholds and velocity controls. EnKash enables businesses to set spending caps and workflows for each department or project, ensuring policy compliance, reducing risk, and enhancing cost control."
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Smooth Operations with Better Cashflow"
              description="Enhance stability by automating payables and collections. EnKash ensures timely invoice processing, payment scheduling, and receipt capturing, streamlining cash flow. Gain better visibility and control to avoid disruptions and maintain financial health."
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Simplify Banking with Effortless Integration"
              description="Connect EnKash to your banking and financial systems effortlessly. Seamless integration eliminates complex setups, allowing businesses to quickly adopt the solution. Enjoy smooth workflows, reduced manual effort, and increased productivity."
              source="payables"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.second_row}  bg-white`}>
        <AllProducts
          title="EnKash Products - Making Payments "
          subtitle="Smarter"
          data={productData}
        />
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <div className="text-center d-flex flex-column">
                  <Heading
                    title={`How Business Banking Works ${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <div>
                    <Heading
                      title="with EnKash"
                      color="rainy-blue"
                      size="h1"
                      weight="6"
                    />
                  </div>
                </div>
              </div>
            </>
          }
          mainTitle="How does it work?"
          carouselData={carouselData}
          carouselBg={caraouselBg}
        />
      </div>

      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how our Seamless Banking can revolutionize the way you work!"
        />
      </div>

      <div
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs section will help you learn about seamless banking in detail"
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

      <div className={`${styles.sixth_row} row`}>
        <ContactUsCard
          title="Seeking further understanding of seamless banking?"
          description="Personalized digital banking services based on data and insights about the user’s preferences is seamless banking. It exists to ensure a consistent and secure business experience for the user."
          source="payables"
        />
      </div>

      <div className={`${styles.seventh_row} row`}>
        <ComprehensiveView
          title="Explore our comprehensive guide"
          innerHtml={
            <>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What is a decentralized accounting system?"
                />
              </div>
              <div className="mb-5">
                <p>
                  A way to decentralize the authority of making and collecting
                  payments from their respective department vendors and
                  customers is what makes a decentralized accounting system. The
                  automation leading the system facilitates{" "}
                  <Link
                    href="https://www.enkash.com/digital-invoicing/"
                    target="_blank"
                  >
                    invoice uploading,
                  </Link>{" "}
                  data collection, and reconciliation with enhanced visibility
                  and customization as required.
                </p>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How seamless banking works?"
                />
              </div>
              <div className="mb-5">
                <p>
                  Seamless banking enables the integration of banks and a{" "}
                  <Link href="https://www.enkash.com/" target="_blank">
                    financial platform to streamline
                  </Link>{" "}
                  payments for customers. It allows easy and secure transactions
                  with automation at the core. Users can make their payments
                  easily and generate real-time data for reconciliation.
                </p>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How does EnKash’s seamless payment solutions benefits small businesses?"
                />
              </div>
              <div className="mb-5">
                <p>
                  The seamless payments solution by EnKash provides greater
                  flexibility and visibility into business transactions
                  providing data that can drive business to greater heights. It
                  also eases{" "}
                  <Link
                    href="https://www.enkash.com/bulk-collect/"
                    target="_blank"
                  >
                    business payments and collections
                  </Link>{" "}
                  relieving the users from the hassle of managing multiple
                  transactions across different bank branches. It streamlines
                  reconciliation for the audit team to facilitate
                  decision-making in real-time.
                </p>
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="payables" />
    </div>
  )
}

export default seamlessBanking
