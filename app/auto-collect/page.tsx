import Image from "next/image"
import { Metadata } from "next"

import styles from "./page.module.scss"
import { space } from "@/common/constant"
import faqData from "./faq-data"
import { blogData, productData, carouselData } from "./data"
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from "."
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
import generateMetaData from "@/common/utils/metaData"
import { userPlus, numberOne, stack } from "@/components/three-steps/"

export const metadata: Metadata = generateMetaData({
  title: "Auto Payment Collection Platform | What is Auto Collect  - EnKash",
  description:
    "Auto Collect enables you to collect payments from customers via bank transfers (NEFT, RTGS, IMPS ) and UPI. Book Demo Now !!",
  alternates: {
    canonical: "https://www.enkash.com/auto-collect/",
  },
  faqData: faqData,
})

const AutoCollect = (): React.JSX.Element => {
  //

  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/auto-collect/`}
        faqData={faqData}
      />

      <Header utmSource="receivables" />

      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div>
              <Heading
                title={`Auto Collect${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
              <sup className="sup-symbol"></sup>
            </div>
          </div>
          <div className="d-flex flex-column">
            <Heading
              title={`Automatic Payment Collection${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title={`Simplified with EnKash${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="Auto Collect"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Automate reconciliation for all incoming NEFT, RTGS, IMPS, and UPI payments using EnKash Customer Identifiers and Virtual UPI IDs. Receive real-time alerts and enjoy seamless multi-bank support."
              size="h6"
              weight="5"
            />
          </div>
          <div className="my-5 d-flex flex-row justify-content-start align-items-center">
            <div className="me-2">
              <PrimaryButton
                title="Get Started"
                theme="blue"
                url="/sales/?source=receivables"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div className={styles.lottie_container}>
            <LottieClientComponent animationData={bannerLottie} loop={true} />
          </div>
        </div>
        <div className={styles.three_step_container}>
          <ThreeSteps
            title="Automating Payment Collection"
            steps={[
              {
                icon: userPlus,
                text: "Instant ",
              },
              {
                icon: stack,
                text: "Smart ",
              },
              {
                icon: numberOne,
                text: "Secure",
              },
            ]}
          />
        </div>
      </div>

      <div
        className={`${styles.second_row} row d-flex bg-white row-padding-top-none`}
      ></div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center pb-2">
          <Heading title="Best Automatic" color="black" size="h1" weight="6" />
          <Heading
            title={`${space}Payment Collection Solution${space}`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading title="for Businesses" color="black" size="h1" weight="6" />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Multiple Modes Payment Collection"
              description="EnKash Auto-Collect supports UPI, NEFT, IMPS, and RTGS, enabling seamless branch-specific or individual customer payments. Simplify collections and accelerate your business growth with frictionless transactions."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Real-time Transaction Notification"
              description="Stay informed with instant alerts every time a payment is made. Real-time webhook updates and our dashboard ensure complete transparency and keep your financial operations running smoothly."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Zero Setup Cos"
              description="Create unlimited virtual accounts and payment addresses at no additional cost. Eliminate the manual efforts of assigning account numbers, and let our automation simplify your financial workflows."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Tailored for Every Business"
              description="Whether you’re managing multiple branches, customer touchpoints, or financial services, EnKash Auto-Collect provides flexible virtual accounts tailored to each business unit, department, or individual customer"
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Split Settlements"
              description="Automatically split the settled amount in the virtual account among multiple parties and accounts based on predefined percentages"
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Advanced Security & Compliance"
              description="Rest easy knowing that every transaction is secure. EnKash adheres to industry-leading compliance standards and encryption protocols to protect your data and funds."
              source="receivables"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <div className="d-inline text-center">
                  <Heading
                    title={`How EnKash${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="Auto Collect"
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title={`${space}Works`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
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
          title="Learn how our auto collect can revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about auto collect in detail"
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

      <div className={`${styles.second_row}  bg-white `}>
        <AllProducts
          title="Check Out EnKash’s Other Payment Products and Solutions"
          data={productData}
        />
      </div>

      <div className={`${styles.sixth_row} row`}>
        <ContactUsCard
          title="Seeking further understanding of auto collect?"
          description="Auto collect streamlines the collection process for businesses, making it easier to receive payments from customers via different channels. It automates tasks such as reconciliation, provides real-time alerts, and offers centralized control for enhanced efficiency and accuracy."
          source="receivables"
        />
      </div>
      <div className={`${styles.seventh_row} row`}>
        <ComprehensiveView
          title="Explore our comprehensive guide"
          innerHtml={
            <>
              <div className="mb-3">
                <Heading
                  size="h3"
                  color="black"
                  weight="6"
                  title="What type of details can I pull from the auto collect dashboard?"
                />
              </div>
              <div className="mb-5">
                <p>
                  The auto collect dashboard offers a variety of details to
                  cater to your specific needs. These reports include
                  transaction summaries, settlement details, payment histories,
                  and more, providing comprehensive insights into your payment
                  collection activities.
                </p>
              </div>

              <div className="mb-3">
                <Heading
                  size="h2"
                  color="black"
                  weight="6"
                  title="What is the essence of collecting payments?"
                />
              </div>
              <div className="mb-5">
                <p>
                  Collecting payments is essential for businesses to maintain
                  cash flow and sustain operations. It involves receiving funds
                  from customers or clients in exchange for goods or services
                  rendered, ensuring financial stability and growth.
                </p>
              </div>

              <div className="mb-3">
                <Heading
                  size="h2"
                  color="black"
                  weight="6"
                  title="What is the auto collect process?"
                />
              </div>
              <div className="mb-5">
                <p>The auto collect process involves:</p>
                <ul>
                  <li>
                    Generating unique VPA or UPI IDs for each branch,
                    department, or customer
                  </li>
                  <li>
                    Payments are then received via various channels like NEFT,
                    RTGS, IMPS, etc., directly to virtual bank accounts
                  </li>
                  <li>
                    The business gets real-time notifications when the payment
                    is received in their{" "}
                    <a href="https://www.enkash.com/resources/blog/benefits-of-virtual-bank-account/ ">
                      virtual bank account
                    </a>
                  </li>
                  <li>
                    All the transactions can then be reconciled by automatically
                    mapping the payments with the invoices
                  </li>
                </ul>
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="receivables" />
    </div>
  )
}

export default AutoCollect
