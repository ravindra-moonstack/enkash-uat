import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../../common/constant";
import faqData from "./faq-data";
import blogData from "./blog-data";
import carouselData from "./carousel-data";
import { banner, caraouselBg, faqBg, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import EnkashWay from "@/components/enkash-way/enkash-way";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import FAQ from "@/components/faq/faq";
import BlogWrapper from "@/components/blog/blog-wrapper";
import { Metadata } from "next";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import FAQHtml from "./faq-html";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Link from "next/link";
import generateMetaData from "@/common/utils/metaData";
import StructuredData from "@/components/head/structuredData";

export const metadata: Metadata = generateMetaData({
  title:
    "Cash Flow Analytics System for Businesses | Manage Cash Flow Easily - EnKash",
  description:
    "Cash flow analytics by EnKash help businesses understand their cash flows and gaps. It presents data in an easy-to-understand format. This facilitates businesses to forecast their future and make informed decisions.",
  alternates: {
    canonical: "https://www.enkash.com/solutions/cashflow-analytics/",
  },
  faqData: faqData,
});

const cashflowAnalytics = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/solutions/cashflow-analytics/`}
        faqData={faqData}
      />
      <Header utmSource="" />

      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div className="d-flex">
              <Heading
                title={`Solutions |${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
            <Heading
              title="Cash Flow Analytics"
              size="h4"
              weight="4"
              useH1TagInHtml={true}
            />
          </div>
          <div className="d-flex flex-column">
            <Heading
              title="Assess your business’s"
              color="white"
              size="h2"
              weight="7"
            />
            <div>
              <Heading
                title="financial health with"
                color="white"
                size="h2"
                weight="7"
              />
              <Heading
                title={`${space}cash`}
                color="rainy-blue"
                size="h2"
                weight="7"
              />
            </div>

            <Heading
              title="flow analytics"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Optimize working capital with real-time insights into cash inflows and outflows"
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
                url="/sales/?source="
              />
            </div>
            <div>
              <SecondryButton
                title="Get Free Demo"
                actionImage={whiteArrow}
                iconSize={15}
                url="/sales/?source="
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
          <ThreeSteps />
        </div>
      </div>

      <div className={`${styles.second_row} row d-flex bg-white row-padding`}>
        <EnkashWay
          progressData={[
            {
              itemArray: ["Less", "Visibility"],
              oldWayDescription:
                "Businesses had no or limited visibility into their operations, performance, and consumer behavior without analytics.",
              newWayDescription:
                "With EnKash’s cash flow analytics, businesses have complete transparency and visibility of their cash inflow and outflow. This ensures real-time information of their business health and improves decision-making.",
            },
            {
              itemArray: ["Identifying", "Operational Risks"],
              oldWayDescription:
                "Traditional businesses had no opportunity to identify potential risks pertaining to operational losses and unforeseen challenges.",
              newWayDescription:
                "Using analytics, businesses can identify upcoming risks and challenges that can now be mitigated timely.",
            },

            {
              itemArray: ["Customer", "Understanding"],
              oldWayDescription:
                "Businesses need to understand their customer’s purchase patterns for better cash inflow. This data was not used by businesses efficiently to enhance their marketing and revenue growth.",
              newWayDescription:
                "Businesses can use data from cash flow analytics to know their customers' spending patterns and purchasing frequency. This allows businesses to identify a strategy that helps increase customer satisfaction.",
            },
            {
              itemArray: ["Resource", "Allocation"],
              oldWayDescription:
                "Lack of data and insights often led to inefficient allocation of resources in the business which makes the business incompetent.",
              newWayDescription:
                "Enterprises can utilize data and allocate funds to be used efficiently across different departments for optimal growth.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading
            title="Manage business operations and complete transactions with"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}efficiency`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>
        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Real-Time Monitoring"
              description="Analytics provide real-time data into cash inflow and outflow"
              source=""
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <>
                  <Heading
                    title="Predicts"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Future"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </>
              }
              description="Businesses can utilize data from analytics to predict financial trends and upcoming expenses. This helps in better planning"
              source=""
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <>
                  <Heading
                    title="Working"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Capital"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </>
              }
              description="Enterprises can identify areas of improvement to better their working capital position"
              source=""
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <>
                  <Heading
                    title="Risk"
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
                </>
              }
              description="It is easier for businesses to identify potential financial risks and make quick decisions to prevent them"
              source=""
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <>
                  <Heading
                    title="Compliance"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Issues"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </>
              }
              description="Cash flow analytics help ensure compliance with financial regulations. This facilitates timely financial reporting and reduces the risks of regulatory issues"
              source=""
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <div className="d-flex flex-column">
                  <div>
                    <Heading
                      title="Incorporate"
                      color="white"
                      size="h1"
                      weight="6"
                    />
                    <Heading
                      title={`${space}transparency in business`}
                      color="rainy-blue"
                      size="h1"
                      weight="6"
                    />
                  </div>

                  <Heading
                    title="with cash flow analytics"
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
      {/* <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how meal cards can benefit your business and employees!"
        />
      </div> */}
      <div
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs section will help you learn about cash flow analytics in detail"
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
          title="Seeking further understanding about cash flow analytics?"
          description="A cash flow analysis is the interpretation of the cash inflows and outflows of a business to determine a company's working capital."
          source=""
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
                  title="How does cash flow analytics help corporate business?"
                />
              </div>
              <div className="mb-5">
                <p>
                  Cash flow analytics is crucial for corporate businesses as it
                  provides real-time insights into financial inflows and
                  outflows. By analyzing{" "}
                  <Link
                    href="https://www.enkash.com/resources/blog/spend-management-software-enhanced-cashflow/"
                    target="_blank"
                  >
                    cash flow patterns
                  </Link>
                  , businesses can anticipate liquidity needs, optimize working
                  capital, and make informed financial decisions. This enhances
                  overall financial management, mitigates risks, and ensures the
                  company's stability and growth.
                </p>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are some key metrics and indicators used in cash flow analytics?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Cash flow analytics has various key metrics and indicators like operating cash flow, net cash flow, working capital ratio, AR turnover, AP days, capital expenditure ratio, and cash reserve ratio."
                />
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="" />
    </div>
  );
};

export default cashflowAnalytics;
