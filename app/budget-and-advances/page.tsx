import Image from "next/image"
import { Metadata } from "next"
import generateMetaData from "@/common/utils/metaData"
import styles from "./page.module.scss"
import { space } from "@/common/constant"
import { blogData, carouselData, productData } from "./data"
import faqData from "./faq-data"
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
  SecondryButton,
} from "@/components"

export const metadata: Metadata = generateMetaData({
  title: "Budget Management Platform | Budget Control for Business - EnKash",
  description:
    "Optimize your financial stability with expert budget control management and cash flow strategies. Effectively allocate resources, track expenditures, and manage your cash flow to achieve sustainable financial success",
  alternates: {
    canonical: "https://www.enkash.com/budget-and-advances/",
  },
  faqData: faqData,
})

const BudgetAndAdvance  = (): React.JSX.Element =>  {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/budget-and-advances/`}
        faqData={faqData}
      />
      <Header utmSource="expense_management" />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <Heading
              title={`Budgets and Advances${space}`}
              color="rainy-blue"
              size="h4"
              weight="7"
            />
          </div>

          <div className="d-inline d-md-flex flex-column">
            <div>
              <Heading
                title={`Keep your ${space}`}
                color="white"
                size="h2"
                weight="7"
              />
              <Heading
                title={`spends in check ${space}`}
                color="white"
                size="h2"
                weight="7"
              />
            </div>

            <Heading
              title="by allocating "
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="budgets in advance"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Define smart budgets and release advances based on projections and past insights."
              color="white"
              size="h6"
              weight="5"
            />
          </div>

          <div className="my-5 d-flex flex-row justify-content-start align-items-center">
            <div className="me-2">
              <PrimaryButton
                title="EnKash Now"
                theme="blue"
                url="/sales/?source=expense_management"
              />
            </div>
            <div>
              <SecondryButton
                title="Get Free Demo"
                actionImage={whiteArrow}
                iconSize={15}
                url="/sales/?source=expense_management"
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
          <ThreeSteps />
        </div>
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading
            title="Effortlessly Allocate Budgets and "
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}Approve Advances with EnKash`}
            color="black"
            size="h1"
            weight="6"
          />
        </div>

        <div className="d-flex justify-content-center">
          <div className={`d-flex flex-md-row mt-3 pb-4 scroll_container`}>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Budgeting & Forecasting"
                description="Budget allocation must be aligned with your business finances and goals to achieve."
                source="expense_management"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Track Budget Utilization"
                description="Track and compare actual expenses against budgeted amounts, ensuring your financial plans are not disturbed"
                source="expense_management"
              />
            </div>

            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Request Project-Wise Advance"
                description="Simplify advance process to secure immediate funds when required for a specific project or category. This leads to efficient budgeting control."
                source="expense_management"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Multiple Categories"
                description="Raise advances under category groups that allow you to combine multiple categories while submitting advances"
                source="expense_management"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.second_row}  bg-white`}>
        <AllProducts
          title="Ace business expenses with innovative "
          subtitle="solutions"
          data={productData}
        />
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <div className="text-center d-inline">
                  <Heading
                    title={`Budgeting under your${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title={`complete control${space}`}
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title={`at all times!${space}`}
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
          title="Learn how budget and advances can revolutionize the way you work!"
        />
      </div>

      <div className={`${styles.seventh_row} row`}>
        <div
          className={` ${styles.action_container} d-flex align-items-start color-white`}
        >
          <div className={styles.explore_text}>
            Budgeting under your complete control at all times!
          </div>
          <div>
            <SecondryButton
              title="Sign Up Now"
              actionImage={whiteArrow}
              iconSize={15}
              url="/login/"
            />
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
            title="Don't worry! Our FAQs section will help you learn about budget management in detail"
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
          title="Seeking further understanding of budget and advances?"
          description="Budget management allows businesses to monitor their financial planning, use their financial tools, and achieve business goals, making the business sustainable in the long run."
          source="expense_management"
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
                  title="What are the objectives of budgeting?"
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The objectives of budgeting include:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Giving direction as to where the company is going and
                    whether the financial goals are aligned with it or not
                  </li>
                  <li>
                    It helps predict the company’s cash flow and take corrective
                    measures timely
                  </li>
                  <li>
                    Defines allocation of funds to resources as per requirement
                  </li>
                  <li>It helps measure employee performance</li>
                </ul>
              </div>

              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What is the significance of budget and budgetary control?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Budgets are critical for maintaining financial stability and achieving long-term objectives. OfEx emphasizes their importance by streamlining budgetary control, enabling businesses to promptly make informed decisions and respond to financial challenges."
                />
              </div>

              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What is the role of effective budget management?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Effective budgeting is essential for management to ensure that resources are used efficiently. OfEx reinforces this importance by simplifying budgeting tasks, making it an integral part of management's daily operations."
                />
              </div>

              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title=" What is the purpose of budget?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="A budget's primary purpose is to serve as a financial plan, providing guidance on revenue and expenditures. OfEx aligns with this purpose by offering a user-friendly platform for budget management."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the constraints of budgeting?"
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="While budgeting is essential, it does have limitations, such as being based on assumptions and historical data. OfEx addresses these limitations by offering real-time data and analytics, enabling businesses to adapt to changing circumstances swiftly."
                />
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="expense_management" />
    </div>
  )
}

export default BudgetAndAdvance
