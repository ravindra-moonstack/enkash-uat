import Image from "next/image";
import { Metadata } from "next";
import styles from "./page.module.scss";
import { space } from "../../../common/constant";
import { blogData, carouselData, productData } from "./data";
import faqData from "./faq-data";
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
} from "@/components";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
import generateMetaData from "@/common/utils/metaData";
import { userPlus, numberOne, stack } from "@/components/three-steps/";


export const metadata: Metadata = generateMetaData({
  title: "Purchase Cards | Benefits of Purchase Cards for Businesses  - EnKash",
  description:
    "Purchasing cards allow employees to quickly and efficiently buy what they need, and automatically record all transactions.",
  alternates: {
    canonical: "https://www.enkash.com/corporate-cards/purchase-cards/",
  },
  faqData: faqData,
});

const PurchaseCard = (): React.JSX.Element => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/corporate-cards/purchase-cards/`}
        faqData={faqData}
      />

      <Header utmSource="corporate_cards" />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column px-2">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div className="d-flex">
              <Heading
                title={`Procurement Card${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
          </div>
          <div>
            <Heading title="Optimize Your" color="white" size="h2" weight="7" />
            <Heading
              title={`${space} Business Procurement ${space}`}
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading title={`with EnKash`} color="white" size="h2" weight="7" />
            <Heading
              title={`${space} Purchase Cards (P-Cards) `}
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Say goodbye to time-consuming paperwork and complicated approval workflows. Empower your team to make purchases within preset limits, while you monitor, manage, and optimize spending in real-time."
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
            title="Master Your Business Procurement Process"
            steps={[
              {
                icon: userPlus,
                text: "Integrated",
              },
              {
                icon: stack,
                text: "Secure",
              },
              {
                icon: numberOne,
                text: "Flexible",
              },
            ]}
          />
        </div>
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-flex flex-column text-center mb-5">
          <Heading
            title="Get a Handle on Your "
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title="Business Expenses"
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading
            title="with the Best Purchase Card in India "
            color="black"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="
              Effortless Procurement Management"
              description="Transform your business procurement with EnKash purchase cards. Authorized employees can make purchases directly, simplifying the process and bypassing traditional system complexities. Eliminate delays, paperwork, and approval bottlenecks for a smoother, more efficient workflow."
              source="corporate_cards"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Increase Control and Reduce Cost"
              description="Gain control and reduce costs with EnKash. Set custom spending limits, enforce purchase policies, and track transactions in real-time. Prevent budget overruns and fraud, while merchant category restrictions ensure only relevant purchases are made."
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Simplify Expense Tracking and Reporting"
              description="Gain full visibility of your procurement expenses with detailed, real-time reporting. Analyze spending trends, uncover cost savings, and make informed decisions through a centralized dashboard, enhancing supplier negotiations for the best value."
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle=" Faster Payment Cycles"
              description="Accelerate payment cycles and strengthen vendor relationships with EnKash Purchase Cards. Streamline transactions to meet deadlines, improve cash flow, and reduce administrative workload, all while maintaining positive supplier relations."
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle=" Risk Management and Compliance"
              description="Ensure compliance with your procurement policies. Customize spend limits and merchant restrictions to prevent unauthorized purchases and fraud. Automated reporting helps spot and correct policy breaches with ease."
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
                <div className="d-flex">
                  <Heading
                    title="Optimize business procurement process with purchase cards"
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                </div>
              </div>
            </>
          }
          mainTitle="How Does EnKash Purchase Card Work"
          carouselData={carouselData}
          carouselBg={caraouselBg}
        />
      </div>
      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how purchase cards can benefit your business and employees!"
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
            title="Don’t worry! Our FAQs section will help you learn about purchase cards in detail"
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
          title="Seeking further understanding of purchase cards?"
          description="Purchase cards make the business procurement process accessible, convenient, and manageable. Businesses can use these cards to streamline the process of purchasing."
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
                  title="What types of purchases can be made with a purchase card?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Most goods and services, including office supplies and minor equipment purchases, can be purchased using a purchase card. However, depending on the organization's policies, some restrictions may exist."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How are disputes or issues with purchase card transactions resolved?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="If there are disputes or issues with a purchase card transaction, the employee who made the purchase should contact the company's finance or procurement department for assistance. The department can work with the card issuer to resolve the issue and ensure the transaction is properly recorded and documented."
                />
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="corporate_cards" />
    </div>
  );
};

export default PurchaseCard;
