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
import { banner, caraouselBg, faqBg, whiteArrow } from "."
import generateMetaData from "@/common/utils/metaData"
import { userPlus, numberOne, stack } from "@/components/three-steps/"

export const metadata: Metadata = generateMetaData({
  title: "Payroll Processing & Management Software for Businesses - EnKash",
  description:
    "EnKash provides end-to-end payroll processing by offering a comprehensive platform that covers all aspects of payroll management. Book a Free Demo",
  alternates: {
    canonical: "https://www.enkash.com/payroll/",
  },
  faqData: faqData,
})

const Payroll = (): React.JSX.Element => {
  //

  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/payroll/`}
        faqData={faqData}
      />
      <Header utmSource="payables" />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <Heading
              title={`Payroll Software${space}`}
              color="rainy-blue"
              size="h4"
              weight="7"
            />
          </div>

          <div className="d-flex flex-column">
            <div>
              <Heading
                title="Payroll Processing Software "
                color="rainy-blue"
                size="h2"
                weight="7"
              />
              <Heading title={`by EnKash`} color="white" size="h2" weight="7" />
            </div>
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Your ultimate solution for accurate, compliant, and stress-free salary disbursement. Empower your business with EnKash’s advanced payroll processing solution designed to meet your workforce’s diverse needs"
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
            <LottieClientComponent animationData={banner} loop={true} />
          </div>
        </div>

        <div className={styles.three_step_container}>
          <ThreeSteps
            title="The Payroll Solution You Can Trust"
            steps={[
              {
                icon: userPlus,
                text: "Automated Workflows",
              },
              {
                icon: stack,
                text: "On-Time Payments",
              },
              {
                icon: numberOne,
                text: "Seamless Integration",
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
            title="Simplify payroll payouts"
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space} with our advanced solutions`}
            color="black"
            size="h1"
            weight="6"
          />
        </div>
        <div className="d-flex justify-content-center text-center mb-5"></div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Employee Data Management"
              description="Efficiently collect and validate crucial information about your employees with e-KYC, before initiating the payroll system, ensuring accuracy and compliance with regulatory requirements."
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Secure Salary Account Validation"
              description="Validate salary account details with the penny-drop method, reducing payment errors and enhancing financial security. Ensure accurate, hassle-free transactions for smooth processing."
              source="payables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Multi-Branch Salary Disbursement"
              description="Manage payroll across multiple branches from a single dashboard. With a click, initiate accurate salary disbursements for all employees, no matter their location."
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Seamless ERP Integration"
              description="Seamlessly integrate EnKash’s payroll software with your ERP systems and banking partners, creating a unified, efficient workflow tailored to your business needs."
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Flexible Payment Solutions"
              description="Manage payments for full-time employees, contractors, and interns, including regular and off-cycle payroll. Reimburse employee expenses alongside payroll for added convenience."
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Configurable Approval Workflows"
              description="Set approval hierarchies with customizable rules. Automate payroll information routing to designated approvers, ensuring timely approvals and minimizing delays."
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Advanced Reporting and Analytics"
              description="Gain real-time insights into payroll trends and employee expenses. Generate customizable reports to support data-driven decisions and strategic planning."
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
                <div className="text-center d-inline">
                  <Heading
                    title={`How to Get Started with ${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="EnKash Payroll Processing"
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
          title="Learn how our payroll processing can revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about payroll processing in detail"
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
          title="Seeking further understanding of payroll processing?"
          description="Payroll processing is how a company makes sure its employees get paid the right amount, on time. It's all about calculating and handing out salaries and wages to everyone who works there."
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
                  title="What is end-to-end payroll processing?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="End-to-end payroll processing refers to the complete process of managing payroll from start to finish, including tasks such as collecting employee data, calculating wages, deducting taxes, processing payments, and generating reports. EnKash provides end-to-end payroll processing by offering a comprehensive platform that covers all aspects of payroll management."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the key components of effective payroll processing software?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Key components of an effective payroll processing software include automation of tasks, accuracy in calculations, compliance with regulations, security of financial data, scalability to handle varying volumes of transactions, integration with other systems such as ERP and banking partners, and robust reporting and analytics capabilities."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What is the difference between payroll processing and payroll management?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Payroll processing specifically refers to the technical aspects of calculating and distributing employee salaries and wages. On the other hand, payroll management encompasses a broader range of tasks including strategic planning, policy development, compliance with labor laws, employee benefits administration, and overall oversight of the payroll function within an organization."
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

export default Payroll
