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
} from "@/components"
import styles from "./page.module.scss"
import generateMetaData from "@/common/utils/metaData"
import { space } from "@/common/constant"
import { blogData, carouselData, productData } from "./data"
import { faqData, secondFaqData } from "./faq-data"
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from "."
import { userPlus, numberOne, stack } from "@/components/three-steps/"

export const metadata: Metadata = generateMetaData({
  title: "Best Vendor Management Platform for Businesses in India - EnKash",
  description:
    "Enhance Efficiency with EnKash Vendor Management platform: Discover how implementing a vendor management system can streamline operations, improve supplier relationships, and boost your business's overall success.",
  alternates: {
    canonical: "https://www.enkash.com/vendor-management/",
  },
  faqData: faqData,
})

const vendorManagement = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/vendor-management/`}
        faqData={faqData}
      />
      <Header utmSource="payables" />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <Heading
              title={`Vendor Management ${space}`}
              color="rainy-blue"
              size="h4"
              weight="7"
            />
          </div>

          <div className="d-flex flex-column">
            <div>
              <Heading
                title="Manage Vendors "
                color="rainy-blue"
                size="h2"
                weight="7"
              />
              <Heading
                title={`${space}with Confidence `}
                color="white"
                size="h2"
                weight="7"
              />
            </div>

            <div>
              <Heading
                title={`Using EnKash${space}`}
                color="white"
                size="h2"
                weight="7"
              />
            </div>
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Gain complete control of vendor relationships. From onboarding to payments and compliance, our platform empowers businesses to work faster, reduce risks, and maintain healthy supplier partnerships."
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
            <LottieClientComponent animationData={bannerLottie} loop={true} />
          </div>
        </div>

        <div className={styles.three_step_container}>
          <ThreeSteps
            title="The Best Vendor Management and Onboarding Platform"
            steps={[
              {
                icon: userPlus,
                text: "Accurate Verification",
              },
              {
                icon: stack,
                text: "Fast Onboarding",
              },
              {
                icon: numberOne,
                text: "Delightful Experience",
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
            title="Vendor Management System "
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}to Enhance`}
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space} Vendor Relationships  `}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>
        <div className="d-flex justify-content-center text-center mb-5"></div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Instant Vendor Onboarding"
              description="Onboard new vendors effortlessly with EnKash’s one-click invite feature. Collect details like PAN, GST, and bank info via pre-set templates, eliminating manual data entry for a faster, error-free process and successful vendor relationships."
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Effortless Invoice "
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Management"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Simplify invoice management with EnKash’s centralized dashboard. Upload and track single or bulk invoices in real time, reduce errors, and ensure timely processing—saving time, improving vendor relationships, and enhancing financial accuracy."
              source="payables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Flexible Payment Options"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Provide vendors with multiple payment options—UPI, virtual cards, and bank transfers. Track payment statuses in real time with EnKash, ensuring transparency and trust. Timely, flexible payments improve vendor satisfaction and convenience for everyone."
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Advanced Reporting"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="& Insights"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Unlock actionable insights with EnKash’s reporting tools. Monitor vendor performance, analyze payment histories, and identify trends to optimize your supply chain. Use data-driven decisions to enhance financial outcomes and operational efficiency."
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Customizable Approval Flows"
              description="Design approval workflows tailored to your organization with EnKash. Set role-based access, define thresholds, and create flexible hierarchies to streamline decision-making, ensure compliance, and align transactions with internal policies and business goals."
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
                    title={`Step-by-Step Guide to ${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="Vendor Management Process"
                    color="rainy-blue"
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
          title="Learn how our vendor management can revolutionize the way you work!"
        />
      </div>

      <div
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white pb-0`}
      >
        <div className="mb-5">
          <Heading title="Got Questions?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs section will help you learn about automated reconciliation
            in detail"
            color="black"
            size="h4"
          />
        </div>

        <div>
          <FAQHtml faqData={faqData} />
        </div>
      </div>

      <div
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading
            title="Seeking further understanding of vendor management? Explore our comprehensive guide"
            color="equity-blue"
            size="h1"
          />
        </div>
        <div className="mb-5">
          <Heading
            title="Vendor management involves overseeing relationships with external suppliers, ensuring efficient collaboration, and monitoring performance to optimize operational processes and control costs. It aims to foster positive and productive partnerships between a company and its vendors."
            color="black"
            size="h4"
          />
        </div>

        <div>
          <FAQHtml faqData={secondFaqData} />
        </div>
        <div className={styles.faq_bg}>
          <Image src={faqBg} alt="background image" />
        </div>
      </div>

      <div className={`${styles.sixth_row} row`}>
        <ContactUsCard
          title="Seeking further understanding of vendor management?"
          description="Vendor management involves overseeing relationships with external suppliers, ensuring efficient collaboration, and monitoring performance to optimize operational processes and control costs. It aims to foster positive and productive partnerships between a company and its vendors."
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
                  title="What are the benefits of a vendor management system?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Benefits of using EnKash vendor management system:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Streamlined Operations: EnKash centralizes vendor data,
                    onboarding, invoicing, and payments, eliminating manual
                    processes and saving time
                  </li>
                  <li>
                    Improved Cost Efficiency: Gain real-time insights into
                    spending patterns, and identify discounts and early payment
                    opportunities
                  </li>
                  <li>
                    Enhanced Transparency and Compliance: Ensure accuracy and
                    consistency in vendor data, and maintain complete audit
                    trails
                  </li>
                  <li>
                    Reduced Risks and Fraud:{" "}
                    <Link
                      href="https://www.enkash.com/resources/blog/enhance-productivity-with-vendor-payment-automation/"
                      target="_blank"
                    >
                      Automate vendor verification
                    </Link>{" "}
                    through eKYC to minimize the risk of fraudulent activity
                  </li>
                  <li>
                    Stronger Vendor Relationships: Improve communication and
                    collaboration with vendors through integrated dashboards and
                    shared updates, fostering trust and transparency
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Is vendor management a part of ITIL?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Yes, vendor management is a crucial component of ITIL (Information Technology Infrastructure Library) practices, ensuring effective management of external service providers."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Who is responsible for vendor management?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Vendor management is a collaborative effort involving various stakeholders, with responsibility often falling on procurement, supply chain, or vendor management teams."
                />
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="payables" />
    </div>
  )
}

export default vendorManagement
