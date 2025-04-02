import { Metadata } from "next"
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
  SecondryButton,
} from "@/components"
import styles from "./page.module.scss"
import { space } from "@/common/constant"
import { blogData, carouselData, productData } from "./data"
import faqData from "./faq-data"
import { bannerLottie, caraouselBg, faqBg } from "."
import generateMetaData from "@/common/utils/metaData"
import { userPlus, numberOne, stack } from "@/components/three-steps/"

export const metadata: Metadata = generateMetaData({
  title:
    "DIY Corporate Card & Module : Simplify Corporate Cards Payments - EnKash",
  description:
    "Elevate your business expenses with EnKash’s personalized DIY corporate card for business. Customized for your company's unique needs. Book Demo Now !!",
  alternates: {
    canonical: "https://www.enkash.com/diy-card-module/",
  },
  faqData: faqData,
})

const DiyCardModule = (): React.JSX.Element => {
  //

  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/diy-card-module/`}
        faqData={faqData}
      />

      <Header utmSource="corporate_cards" />

      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <Heading
              title={`DIY Card Module${space}`}
              color="rainy-blue"
              size="h4"
              weight="7"
            />
          </div>
          <div className="d-inline">
            <Heading
              title={`Take Control of Your${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title={`Business Expenses with EnKash ${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title={`DIY Corporate Card Module`}
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Design cards for specific needs, enforce spending policies and oversee all transactions with ease."
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
            title="Design Your Corporate Card Solution with EnKash DIY Module"
            steps={[
              {
                icon: userPlus,
                text: "No-Code Setup",
              },
              {
                icon: stack,
                text: "Automated Expense Tracking",
              },
              {
                icon: numberOne,
                text: "Flexible Spending Controls",
              },
            ]}
          />
        </div>
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading title="The Smarter " color="black" size="h1" weight="6" />
          <Heading
            title={`${space}Approach to `}
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}Corporate Card Management`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <>
                  <Heading
                    title="Purpose-Made Cards"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="for Every Need"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </>
              }
              description="Issue cards specifically designed for your unique use cases such as travel, SaaS, or marketing campaigns. Configure individual card settings to match your organization’s requirements."
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Precise Spending Controls"
              description="Define spending rules for teams or individuals. Customize limits based on categories, amounts, or timeframes to maintain budget discipline."
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Real-Time Monitoring"
              description="Track transactions as they happen. Gain instant insights into where and how funds are being used, ensuring better financial decisions."
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Built-In Approval Workflows"
              description="Simplify internal processes with predefined approval workflows that align with company policies. Save time and reduce repetitive tasks."
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Enhanced Vendor Payments"
              description="Ensure timely payments to vendors, strengthening business relationships and unlocking the potential for better payment terms."
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Integrated Audit Support"
              description="Keep financial operations transparent and compliant with automated reconciliation and comprehensive transaction records."
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Seamless Integration"
              description="Easily connect with popular accounting tools like Tally and Zoho to simplify data management and reporting."
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
                <div className="d-flex flex-column">
                  <Heading
                    title="A DIY platform that gives you complete"
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="control and transparency"
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                </div>
              </div>
            </>
          }
          mainTitle="How to DIY Your Corporate Cards"
          carouselData={carouselData}
          carouselBg={caraouselBg}
        />
      </div>

      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how meal cards can benefit your business and employees!"
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
            title="Don't worry! Our FAQs section will help you learn about our DIY cards module in detail"
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
          title="Seeking further understanding of DIY card module?"
          description="Do-It-Your Way or DIY card module is a centralized solution for businesses to manage corporate card expenses. It revolutionizes corporate card management by offering a user-friendly dashboard for easy setup and usage."
          source="corporate_cards"
        />
      </div>
      <div className={`${styles.seventh_row} row`}>
        <ComprehensiveView
          title="Explore our comprehensive guide"
          innerHtml={
            <>
              {/* <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What does DIY credit card mean?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="A 'DIY credit card' refers to a Do-It-Yourself approach in managing the allocation and usage of funds on a business credit card. Unlike traditional credit cards that come in physical form with predefined details like name, expiry date, and CVV code, a DIY credit card allows the cardholder, often a business owner, to customize and allocate credit limits to different team members. This customization enables efficient fund management for specific purposes within the business, contributing to smoother operations."
                />
              </div> */}

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Where can our customers use these cards?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Our cards module are designed to offer unparalleled flexibility, allowing customers to utilize them across a wide spectrum of business needs. Here are some key areas where our customers can maximize the utility of these cards:
                  "
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>Pay AWS, Azure, & Google Cloud bills</li>
                  <li>Procure business inventory online</li>
                  <li>Group employee Insurance through partners</li>
                  <li>Landlord details and rental payments</li>
                  <li>Subscribe to MS Office, Adobe, JIRA and CRM</li>
                  <li>Spends on Google, Facebook, LinkedIn, etc</li>
                  <li>Utility, broadband & communication bills</li>
                  <li>POS and ATM transactions</li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Why do I need a card module?"
                />
              </div>
              <div className="mb-5">
                <p>
                  A card module is essential for efficiently handling your{" "}
                  <Link
                    href="https://www.enkash.com/corporate-cards/"
                    target="_blank"
                  >
                    business corporate cards
                  </Link>{" "}
                  and distributing funds to your team. It simplifies the
                  tracking and management of purpose-specific cards assigned to
                  team members. If an employee leaves or misplaces a card,
                  blocking or putting it on hold is a quick process with just a
                  few clicks. The card module also allows you to set card usage
                  parameters and spending limits easily, providing precise
                  control. Overall, it streamlines card management tasks with
                  its user-friendly functionalities.
                </p>
              </div>

              {/* <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How does credit card DIY work?"
                />
              </div>
              <div className="mb-5">
                <p>
                  Credit card DIY helps you manage all activities related to
                  your{" "}
                  <Link
                    href="https://www.enkash.com/resources/blog/all-about-corporate-credit-card/"
                    target="_blank"
                  >
                    corporate credit card
                  </Link>{" "}
                  and ensures that you have the right checks and approvals in
                  place to ensure that the usage of the cards is as per your
                  corporate spend policy.
                </p>
              </div> */}
            </>
          }
        />
      </div>
      <Footer utmSource="corporate_cards" />
    </div>
  )
}

export default DiyCardModule
