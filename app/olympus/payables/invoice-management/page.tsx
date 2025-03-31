import Image from "next/image";
import styles from "./page.module.scss";
import { space } from "../../../../common/constant";
import { blogData,  carouselData, productData } from "./data";
import faqData from "./faq-data";
import { bannerLottie, caraouselBg, faqBg} from ".";
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
  FAQHtml
} from "@/components";
import { Metadata } from "next";
import generateMetaData from "@/common/utils/metaData";
import { userPlus, numberOne, stack } from "@/components/three-steps/";


export const metadata: Metadata = generateMetaData({
  title: "Invoice Processing & Software: Streamline Invoicing - EnKash",
  description:
    "Efficiently manage invoices with our advanced invoicing software. Simplify your invoice processing tasks and streamline your business operations",
  alternates: {
    canonical: "https://www.enkash.com/olympus/payables/invoice-management/",
  },
  faqData: faqData,
});

const invoiceManagement = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/olympus/payables/invoice-management/`}
        faqData={faqData}
      />
      <Header utmSource="payables" />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <Heading
              title={`Invoice Management${space}`}
              color="rainy-blue"
              size="h4"
              weight="7"
            />
          </div>

          <div className="d-flex flex-column">
            <Heading
              title="Transform your "
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="Invoice Management Process "
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading title="with EnKash" color="white" size="h2" weight="7" />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Make invoice management efficient, get greater visibility, and maintain better control over your financial operations."
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
            title="The Best Invoice Management Platform in India"
            steps={[
              {
                icon: userPlus,
                text: "End-to-end Digitization",
              },
              {
                icon: stack,
                text: "Compliance Ready",
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
            title="Take Control of Your "
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}Invoice Process `}
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading title="with EnKash " color="black" size="h1" weight="6" />
        </div>
        <div className="d-flex justify-content-center text-center mb-5"></div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Centralized Dashboards"
              description="Manage vendor invoices effortlessly with EnKash’s intuitive platform. Gain end-to-end visibility into the invoice lifecycle, track statuses, and stay on top of financial obligations efficiently."
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Flexible "
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Approval Process"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Create workflows aligned with your organization’s structure. Assign roles, set authorization levels, and design approval hierarchies to ensure compliance while maintaining speed and accuracy."
              source="payables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Cashflow Optimization"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Optimization"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Boost liquidity with EnKash’s facilitated credit lines. Strategically extend payment deadlines while ensuring timely payments to maintain smooth operations and strengthen vendor relationships."
              source="payables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="ERP Integration"
              description="Sync EnKash with ERPs like Tally, SAP, and Zoho for seamless data flow. Avoid duplications, save time, and ensure accuracy with synchronized invoices and payments, simplifying reconciliation effortlessly."
              source="payables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Advanced Reporting"
              description="Access real-time invoice statuses and generate detailed reports effortlessly. Use actionable data to refine financial planning, identify trends, and make informed decisions to drive business growth."
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
                    title={`How EnKash ${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="Invoice Management System "
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title={`${space} Works`}
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
          title="Learn how invoice management can revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about invoice management in detail"
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
          title="Seeking further understanding about invoice management?"
          description="Invoice management is the process in which businesses receive an invoice from a vendor from whom they have availed any goods or services, validate the legitimacy of the invoice, pay the vendor, and record the payment in their accounts for reconciliation."
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
                  title="Why is invoice management important?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Invoice management is important:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    To prevent delays and errors in paying for goods and
                    services
                  </li>
                  <li>
                    To keep track of supplies and prevent wastage and delays
                  </li>
                  <li>To help regulate inventory</li>
                  <li>
                    As the data from invoice management can be used in planning
                    and reviewing financial and performance data of the company;
                    enabling better decision making
                  </li>
                  <li>
                    To ease tax documentation, audits, and taxation activities
                  </li>
                  <li>To establish better vendor relationships</li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Does invoice management help prevent fraud?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The KYC for vendor verification is the most crucial part of EnKash’s invoice management. This ensures that there is no fraud and if GST, PAN, or bank account provided by the vendor are not verified, they are immediately rejected from the system."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Should I expect faster processing with invoice management software?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The invoice management softwares has a centralized platform where invoices can be automatically routed for approval, helping reduce the processing time. This workflow enables faster invoice processing, allowing timely payments to avoid penalties."
                />
              </div>
            </>
          }
        />
      </div>

      <Footer utmSource="payables" />
    </div>
  );
};

export default invoiceManagement;
