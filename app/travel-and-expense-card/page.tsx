import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

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
import styles from "./page.module.scss"
import { space } from "@/common/constant"
import { blogData, carouselData, productData } from "./data"
import faqData from "./faq-data"
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from "."
import { userPlus, numberOne, stack } from "@/components/three-steps/"
import generateMetaData from "@/common/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "Best Travel and Expenses Corporate Cards for Business - EnKash",
  description:
    "Travel & expense cards offer benefits that enhance corporate travel management. Use these cards and avail amazing travel perks and rewards.",
  alternates: {
    canonical: "https://www.enkash.com/travel-and-expense-card/",
  },
  faqData: faqData,
})

const TravelAndExpenseCard = (): React.JSX.Element => {
  //

  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <Header utmSource="corporate_cards" />
      <StructuredData
        url={`https://www.enkash.com/travel-and-expense-card/`}
        faqData={faqData}
      />

      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <Heading
              title={`Travel Expense Cards${space}`}
              color="rainy-blue"
              size="h4"
              weight="7"
            />
          </div>

          <div>
            <Heading
              title={`EnKash Travel and Expenses Card${space}`}
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading
              title={`Optimize Your Business`}
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="Travel Management"
              color="white"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Ensure seamless travel experiences while empowering your team, saving costs, and enhancing compliance— with one smart solution."
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
                url="/sales/?source=corporate_cards"
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
            title="Optimize Travel Budgets with EnKash Travel and Expense Cards"
            steps={[
              {
                icon: userPlus,
                text: "Expense Monitoring",
              },
              {
                icon: stack,
                text: "Cashless Convenience",
              },
              {
                icon: numberOne,
                text: "Employee Empowerment",
              },
            ]}
          />
        </div>
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading title="EnKash " color="equity-blue" size="h1" weight="6" />
          <Heading
            title={`${space} Travel and Expense Cards for Delightful ${space} `}
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title="Travel Experiences"
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>
        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Comprehensive "
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Travel Management"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              source="corporate_cards"
              description="Efficiently manage business travel with EnKash’s comprehensive tools. Monitor transactions in real time, integrate travel bookings and approvals into a centralized platform, and enjoy global card acceptance with competitive exchange rates for international travel."
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Cost Saving Simplified"
              description="Optimize spending and reduce costs with EnKash’s advanced tools. Save up to 15% on travel expenses, ensure policy compliance with automation, and simplify GST claims to save an additional 5-18% on bookings."
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Enhanced "
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Employee Experience"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description=" Enhance your team’s travel experience with EnKash. Enjoy faster approvals through real-time alerts, ensure policy adherence, and unlock exclusive perks like travel rewards, lounge access, and travel insurance for a seamless journey."
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Unmatched Control"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="and Compliance"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Take control of your spending with EnKash. Set customizable limits, monitor transactions in real-time to prevent fraud, and integrate seamlessly with ERP, HRMS, and accounting tools for streamlined compliance and workflow efficiency."
              source="corporate_cards"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.second_row}  bg-white`}>
        <AllProducts
          title="An Array of Corporate Cards by"
          subtitle="EnKash"
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
                    title={`How To Get Started with ${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title={`EnKash ${space}`}
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="Travel Expense Cards"
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
          title="Learn how travel and expense cards can revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about travel cards in detail"
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
          title="Seeking further understanding of travel & expense cards?"
          description="Travel and Expense cards, often called T&E cards are specialized financial instruments designed to streamline and enhance business travel expenses."
          source="corporate_cards"
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
                  title="What are the benefits of travel and expense cards"
                />
              </div>
              <div className="mb-5">
                <p>
                  Travel & Expense cards offer a range of benefits that enhance{" "}
                  <Link
                    href="https://www.enkash.com/resources/blog/guide-about-travel-and-expense-management"
                    target="_blank"
                  >
                    corporate travel management
                  </Link>
                  . With these cards, you can enjoy a comprehensive business
                  travel solution with end-to-end visibility into travel
                  expenditures. These purpose-based corporate cards are equipped
                  with customizable rules and policies.
                </p>
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="These cards can be managed in real-time, allowing you to define rules, limits, and approval matrices and enabling efficient budget management. The cards also offer a complete overview of travel expenses, providing actionable insights for reducing costs and optimizing budgets. At the same time, smart controls help prevent expense fraud and hold everyone accountable in real-time."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How do travel cards in India work?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The travel cards provide businesses and employees with a convenient and secure way to manage travel expenses. These cards come preloaded with approved budgets, eliminating the need for employees to use their personal expenses. You can tailor the cards to your team's specific needs by setting daily, monthly, and annual usage limits via the DIY corporate access feature."
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The hassle of expense reports and reimbursements is eliminated, as all transaction data is available in real-time through an intuitive platform. Additionally, travel cards allow you to book online business travels from anywhere while earning meaningful rewards, such as exclusive flight and hotel deals."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How can I get the balance on my travel card?"
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="It is easy to check the balance on your travel card. With a user-friendly dashboard, you can access real-time transaction information and view your card's current balance anytime. This feature provides transparency and control over your travel expenses, ensuring you are aware of the funds available on your card."
                />
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="corporate_cards" />
    </div>
  )
}

export default TravelAndExpenseCard
