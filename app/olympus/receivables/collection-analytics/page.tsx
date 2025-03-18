import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../../../common/constant";
import faqData from "./faq-data";
import carouselData from "./carousel-data";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import EnkashWay from "@/components/enkash-way/enkash-way";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import Header from "@/components/header/header";
import { Metadata } from "next";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import FAQHtml from "./faq-html";
import Footer from "@/components/footer/footer";
import Link from "next/link";
import generateMetaData from "@/common/utils/metaData";
import StructuredData from "@/components/head/structuredData";
import { userPlus, numberOne, stack } from "@/components/three-steps/";
import AllProducts from "@/components/all-products/all-products";
import productData from "./product-data";
import BlogWrapper from "@/components/blog/blog-wrapper";
import blogData from "../blog-data";

export const metadata: Metadata = generateMetaData({
  title:
    "Collection Analytics & DSO Management Platform for Businesses - EnKash",
  description:
    "Seamless experience with our cutting-edge Collection analytics Solutions for corporate and small businesses. Explore the benefits of the Data collection analytics platform. Book Free Demo !!",
  alternates: {
    canonical:
      "https://www.enkash.com/olympus/receivables/collection-analytics/",
  },
  faqData: faqData,
});

const collectionAnalytics = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/olympus/receivables/collection-analytics/`}
        faqData={faqData}
      />
      <Header utmSource="receivables" />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <Heading
              title={`Collection Analytics${space}`}
              color="rainy-blue"
              size="h4"
              weight="7"
            />
          </div>

          <div className="d-flex flex-column">
            <Heading
              title="Leverage data to "
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title={`boost decision-making with ${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <div>
              <Heading
                title=" Collection "
                color="rainy-blue"
                size="h2"
                weight="7"
              />
              <Heading
                title="Analytics"
                color="rainy-blue"
                size="h2"
                weight="7"
              />
            </div>
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Gain valuable insights with our smart analytics and streamline operations for optimal efficiency."
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

            <div>
              <SecondryButton
                title="API Documentation"
                actionImage={whiteArrow}
                iconSize={15}
                url="https://docs.enkash.com"
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
            title="Enhance Collection Process Using Data"
            steps={[
              {
                icon: userPlus,
                text: "Data Tracking ",
              },
              {
                icon: stack,
                text: "Performance Insights",
              },
              {
                icon: numberOne,
                text: "Visual Dashboards",
              },
            ]}
          />
        </div>
      </div>

      <div
        className={`${styles.third_row} row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-flex flex-column text-center mb-5">
          <Heading
            title="Optimize Recovery and "
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}Boost Cash Flow`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Tailored Dashboards"
              description="Customize your collection analytics dashboard to get reports on the basis of week, month, or custom date range, ensuring relevance and clarity."
              source="receivables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Effortless Visibility And Monitoring"
              description="Track the collection process with complete visibility by monitoring invoice status, outstanding amounts, total collections, and overdue payments for prompt follow-ups."
              source="receivables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Automated Reporting"
              source="receivables"
              description="Access comprehensive downloadable reports automatically, eliminating the need for manual compilation and reducing the risk of errors."
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="DSO"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Tracking"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Measure and manage Days Sales Outstanding (DSO) efficiently to gain insights into the average time it takes to collect payments. Improve your receivables management with a clear understanding of payment cycle trends, helping you optimize your cash flow further"
              source="receivables"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.second_row}  bg-white `}>
        <AllProducts
          title="Check out other payment products at"
          subtitle="EnKash"
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
                    title="Improve your cash flow with"
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="complete visibility"
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
          title="Learn how our collection analytics can revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about collection analytics in detail"
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
          title="Seeking further understanding of collection analytics?"
          description="Collection analytics involves leveraging data analysis techniques to enhance debt collection processes. It utilizes historical data to predict and manage customer payment behavior, ultimately benefiting businesses by improving efficiency and cash flow."
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
                  size="h5"
                  color="black"
                  weight="6"
                  title=" How EnKash collection analytics works?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="EnKash collection analytics employs advanced data analysis and modeling to provide insights into payment patterns, helping businesses proactively manage collections, prioritize accounts, and optimize resource allocation for effective debt recovery."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Why is EnKash collection analytics important for your business?"
                />
              </div>
              <div className="mb-5">
                <p>
                  <Link href="https://www.enkash.com/" target="_blank">
                    EnKash collection analytics
                  </Link>{" "}
                  is crucial for businesses as it empowers them to predict and
                  manage customer payment behavior effectively, leading to
                  reduced bad debt, improved cash flow, and overall financial
                  stability. It provides a strategic advantage in optimizing
                  debt collection processes for sustainable business growth.
                </p>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Can collection analytics help in reducing bad debt and improving cash flow?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Yes, collection analytics can significantly contribute to reducing bad debt and improving cash flow."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Why is DSO management important for businesses?"
                />
              </div>
              <div className="mb-5">
                <p>
                  Days Sales Outstanding (DSO) management is crucial for
                  businesses because it provides insight into the average time
                  it takes for a company to collect payments from its customers.
                  A lower DSO indicates that a business is efficient in{" "}
                  <Link
                    href="https://www.enkash.com/olympus/receivables/"
                    target="_blank"
                  >
                    collecting receivables,
                  </Link>{" "}
                  contributing to improved cash flow. Efficient DSO management
                  allows businesses to optimize working capital, reduce the risk
                  of bad debts, and enhance overall financial stability. It also
                  helps in assessing the effectiveness of credit and collection
                  policies, enabling businesses to make informed decisions to
                  improve their cash conversion cycle
                </p>
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title=" Is it necessary to have advanced data analysis skills to implement collection analytics for businesses? "
                />
              </div>
              <div className="mb-5">
                <p>
                  While having advanced data analysis skills can be beneficial,
                  many collection analytics solutions are designed to be
                  user-friendly and accessible to individuals without extensive
                  technical expertise. Businesses can leverage pre-built models
                  and user-friendly interfaces to implement collection analytics
                  effectively, even without a deep understanding of advanced
                  data analysis.
                </p>
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="receivables" />
    </div>
  );
};

export default collectionAnalytics;
