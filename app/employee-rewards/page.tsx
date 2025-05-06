import Image from "next/image"
import { Metadata } from "next"

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
import { userPlus, numberOne, stack } from "@/components/three-steps/"
import { bannerLottie, caraouselBg, faqBg } from "."
import generateMetaData from "@/common/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "Employee Rewards & Recognition Management Platform  - EnKash",
  description:
    "Explore our Employee Rewards and Recognition Program for businesses. Discover how our program can boost morale, enhance productivity, and create a culture of appreciation within your organization",
  alternates: {
    canonical: "https://www.enkash.com/employee-rewards/",
  },
  faqData: faqData,
})

const EmployeeRewards = (): React.JSX.Element => {
  //

  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/employee-rewards/`}
        faqData={faqData}
      />
      <Header utmSource="Loyalty_lounge" />

      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <Heading
              title={`Employee Rewards${space}`}
              color="rainy-blue"
              size="h4"
              weight="7"
            />
          </div>

          <div className="d-inline d-md-flex flex-column">
            <Heading
              title={` Motivate Your Valuable Workforce with${space}`}
              color="white"
              size="h2"
              weight="7"
            />

            <Heading
              title={` Employee Rewards${space}`}
              color="white"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Recognize achievements, celebrate milestones, and boost morale with EnKash’s all-in-one employee rewards and recognition platform."
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
                url="/sales/?source=Loyalty_lounge"
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
            title="Recognize & Retain Employees"
            steps={[
              {
                icon: userPlus,
                text: "Extensive Reward Options",
              },
              {
                icon: stack,
                text: "Instant Reward Redemption",
              },
              {
                icon: numberOne,
                text: "Easy Reward Disbursement",
              },
            ]}
          />
        </div>
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-flex flex-column text-center mb-5">
          <div>
            <Heading
              title="Promote Productivity & "
              color="black"
              size="h1"
              weight="6"
            />
            <Heading
              title={`${space}Engagement With `}
              color="equity-blue"
              size="h1"
              weight="6"
            />
          </div>

          <Heading
            title={`${space}Employee Rewards `}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>

        <div className="d-flex justify-content-center">
          <div className={`d-flex flex-md-row mt-3 pb-4 scroll_container`}>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Personalized Recognition"
                description="Tailor rewards to individual preferences by offering flexible and customizable options, creating a more meaningful experience that fosters loyalty, boosts morale, and strengthens workplace culture."
                source="Loyalty_lounge"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Easy Allocation & Redemption"
                description="Reward employees in real time using WhatsApp, email, and SMS, making the process seamless, efficient, and instantly gratifying for recipients, encouraging a more engaged and motivated workforce."
                source="Loyalty_lounge"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Diverse Redemption"
                description="Choose from 400+ brands across entertainment, fashion, travel, dining, and more, ensuring every employee finds something they truly value and appreciate, enhancing their motivation and job satisfaction"
                source="Loyalty_lounge"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="HRMS Integration"
                description="Automate reward allocation by integrating seamlessly with your HRMS, eliminating manual processes, reducing administrative workload, and ensuring accurate, hassle-free employee recognition at every stage."
                source="Loyalty_lounge"
              />
            </div>

            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Open Voucher Function"
                description="Issue open vouchers on the dashboard & reward winners on the spot by sharing QR Codes via WhatsApp or email, integrated with their login codes. The recipient can redeem the reward by scanning the QR code received."
                source="Loyalty_lounge"
              />
            </div>

            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Realtime Updates"
                description="Track engagement, monitor reward effectiveness, and optimize your recognition strategy with comprehensive analytics and reporting tools that provide actionable insights for enhancing employee motivation and performance."
                source="Loyalty_lounge"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.second_row}  bg-white`}>
        <AllProducts
          title="Other Products to Build High-Performing "
          subtitle="Teams"
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
                    title={`Smart DIY platform for employee${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="rewards and redemption"
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
          title="Learn how employee rewards can benefit your business and employees!"
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
            title=" Don’t worry! Our FAQs section will help you learn about employee rewards in detail"
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
          title="Seeking further understanding of employee rewards?"
          description="Employee rewards in an organization are recognition and compensation strategies and benefits offered to employees to acknowledge and encourage their contributions, enhance job satisfaction, and drive motivation, ultimately fostering a positive workplace culture and employee retention."
          source="Loyalty_lounge"
        />
      </div>

      <div className={`${styles.seventh_row} row`}>
        <ComprehensiveView
          title="Explore our comprehensive guide"
          innerHtml={
            <>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Why should mid-to-large company HR professionals choose a customized rewards and recognition program by EnKash?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Here are some of the reasons why HR of mid-size businesses should choose EnKash for their employee rewards and recognition program:"
                />
              </div>
              <div className="mb-2 d-inline">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Customizable:"
                  />
                </div>
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="EnKash's R&R program is highly customizable, allowing HR professionals to tailor it to the specific needs and culture of their organization"
                />
              </div>
              <br />
              <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Corporate Savings:"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title=" EnKash provides bulk order discounts to corporates on a wide variety of brand vouchers across categories, which makes it an excellent option to get maximum savings"
                />
              </div>
              <br /> <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Easy Integration:"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="EnKash easily integrates with HRMS platforms, simplifying the process of employee onboarding and reward allocation for the HR"
                />
              </div>
              <br /> <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Redemption Options:"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="EnKash offers a comprehensive catalog of 400+ brand vouchers like Myntra, Amazon, Zomato, Nykaa, etc., across 20+ categories like entertainment, fashion, travel, etc., that employees can choose from"
                />
              </div>
              <br /> <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Centralized Dashboard:"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="EnKash offers a centralized dashboard, streamlining the management and administration of the R&R program, making it more efficient for HR professionals to implement and maintain the programs at scale"
                />
              </div>
              <div className="mb-2 mt-5">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title=" Why is it essential to implement employee rewards and recognition?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Implementing rewards and recognition programs is crucial because they boost employee morale, productivity, and job satisfaction. With EnKash's employee rewards platform, safety and security are top priorities so employees can use them worry-free. The platform also facilitates easy sharing of vouchers and provides advance expiry alerts, ensuring employees maximize their rewards and remain engaged."
                />
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="Loyalty_lounge" />
    </div>
  )
}

export default EmployeeRewards
