import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import { space } from "../../../../common/constant";
import {
  blogData,
  faqData,
  secondFaqData,
  carouselData,
  productData,
} from "./data";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import BlogWrapper from "@/components/blog/blog-wrapper";
import Header from "@/components/header/header";
import { Metadata } from "next";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import { FAQHtml } from "@/components/faq";
import Footer from "@/components/footer/footer";
import generateMetaData from "@/common/utils/metaData";
import StructuredData from "@/components/head/structuredData";
import { userPlus, numberOne, stack } from "@/components/three-steps/";
import AllProducts from "@/components/all-products/all-products";

export const metadata: Metadata = generateMetaData({
  title: "Accept Online Payments with Instant Settlements - EnKash",
  description:
    "Get cash in hand instantly after accepting online payments with Instant Settlement whenever you want. You don’t need to wait for days to get your customer payments to grow your business with EnKash.",
  alternates: {
    canonical:
      "https://www.enkash.com/olympus/receivables/instant-settlements/",
  },
  faqData: faqData,
});

const InstantSettlement = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/olympus/receivables/instant-settlements/`}
        faqData={faqData}
      />
      <Header utmSource="receivables" />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div>
              <Heading
                title={`Instant Settlements${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
              <sup className="sup-symbol"></sup>
            </div>
          </div>

          <div className="d-flex flex-column">
            <Heading
              title={`Accelerate business ${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title={`cash flow with${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="instant settlements"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Say goodbye to traditional settlement cycles that take days. Access funds immediately and have better control over your business cash flow."
              size="h6"
              weight="5"
            />
          </div>

          <div className="my-5 d-flex flex-row justify-content-start align-items-center">
            <div className="me-2">
              <PrimaryButton
                title="Get started"
                theme="blue"
                url="/sales/?source=receivables"
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
            title="Instant Settlement for Better Cash Flow"
            steps={[
              {
                icon: userPlus,
                text: "Real-Time Payment",
              },
              {
                icon: stack,
                text: "24/7 Availability",
              },
              {
                icon: numberOne,
                text: "Multiple Settlement Options ",
              },
            ]}
          />
        </div>
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center pb-2">
          <Heading
            title="Get Paid Instantly."
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}  No Delays. No Hassles.`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Real-time Access to Funds"
              description="No more waiting for your hard-earned money. Get payments settled instantly after every transaction, ensuring smooth operations and eliminating financial uncertainties that could impact business growth."
              source="receivables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Round the Clock Availability"
              description="Unlike traditional banking systems, EnKash Instant Settlements work 24x7, including weekends and bank holidays, so you can access your funds anytime, even outside standard banking hours."
              source="receivables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Flexible Payment Options"
              description="Whether you need funds instantly, multiple times a day, or at specific times, choose from on-demand, scheduled, or same-day settlements to align with your business needs and cash flow cycle."
              source="receivables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Better Efficiency and Business Growth"
              description="With immediate access to working capital, reinvest in your business, scale up faster, optimize inventory, and execute marketing strategies without relying on external financing or credit facilities."
              source="receivables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Better Relationships"
              description="Paying vendors and suppliers on time fosters trust, strengthens business relationships, and opens doors to better deals, potential discounts, and improved credit terms, reducing financial strain."
              source="receivables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Seamless Integration"
              description="EnKash offers simple API and no-code solutions, allowing you to integrate instant settlements effortlessly into your existing payment infrastructure without technical complexities or operational disruptions."
              source="receivables"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.second_row}  bg-white `}>
        <AllProducts
          title="Check Out EnKash’s Other Payment Products and Solutions"
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
                    title={`Get your hands on your${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="earnings instantly, every time"
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
          title="Learn how instant settlements can revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about instant settlements in detail"
            color="black"
            size="h4"
          />
        </div>

        <div>
          <FAQHtml faqData={faqData} />
        </div>
      </div>

      <div
        className={`${styles.fifth_row} row row-padding-bottom-none pt-0 bg-white`}
      >
        <div className="mb-5">
          <Heading
            title="Seeking further understanding of instant settlements? Explore our comprehensive guide"
            color="equity-blue"
            size="h1"
          />
        </div>
        <div className="mb-5">
          <Heading
            title="Instant settlement refers to the process of settling financial transactions immediately or in real-time. Instead of waiting for a certain period (like days or weeks) for funds to clear and settle between parties, instant settlement allows for the immediate transfer of funds."
            color="black"
            size="h4"
          />
        </div>

        <div>
          <FAQHtml faqData={secondFaqData} />
        </div>

        <div className={styles.faq_bg}>
          <Image src={faqBg} alt="background image" />x
        </div>
      </div>

      <div className={`${styles.sixth_row} row`}>
        <ContactUsCard
          title="Seeking further understanding of instant settlements?"
          description="Instant settlement refers to the process of settling financial transactions immediately or in real-time. Instead of waiting for a certain period (like days or weeks) for funds to clear and settle between parties, instant settlement allows for the immediate transfer of funds."
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
                  title="What are the benefits of real-time settlements?"
                />
              </div>
              <div className="mb-5">
                <p>
                  Real-time settlements offer several advantages, including:
                </p>
                <ul>
                  <li>
                    Improved cash flow management: Instant access to funds
                    allows for better financial planning and the ability to
                    seize opportunities promptly.
                  </li>
                  <li>
                    Enhanced flexibility: With funds available immediately,
                    businesses can react swiftly to changing circumstances and
                    make timely decisions.
                  </li>
                  <li>
                    Streamlined operations: Real-time settlements reduce
                    administrative burdens associated with tracking and
                    reconciling payments, leading to increased efficiency.
                  </li>
                  <li>
                    Better customer relations: Prompt settlement of transactions
                    can enhance customer satisfaction and loyalty by providing a
                    seamless payment experience.
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What is the settlement schedule for same-day Settlements?"
                />
              </div>
              <div className="mb-5">
                <p>
                  Same-day settlements with EnKash follow a T+0 schedule,
                  meaning funds from transactions are transferred to your
                  designated account on the same day the transaction occurs.
                  This ensures quick and consistent cash flow, allowing you to
                  access your earnings without delay.
                </p>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How secure are instant settlements?"
                />
              </div>
              <div className="mb-5">
                <p>
                  EnKash employs robust security measures and follows industry
                  best practices to ensure the safety and security of your
                  financial transactions.
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

export default InstantSettlement;
