import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../../../common/constant";
import faqData from "./faq-data";
import blogData from "./blog-data";
import carouselData from "./carousel-data";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import EnkashWay from "@/components/enkash-way/enkash-way";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import BlogWrapper from "@/components/blog/blog-wrapper";
import Header from "@/components/header/header";
import { Metadata } from "next";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import FAQHtml from "./faq-html";
import Footer from "@/components/footer/footer";
import generateMetaData from "@/common/utils/metaData";
import StructuredData from "@/components/head/structuredData";

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
            <div className="d-flex">
              <Heading
                title={`Olympus |${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
            <div>
              <Heading
                title="Instant Settlements"
                size="h4"
                weight="4"
                useH1TagInHtml={true}
              />
              <sup className="sup-symbol"></sup>
            </div>
          </div>
          <div className="d-flex flex-column">
            <Heading
              title={`Accelerate your${space}`}
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
              title="Get quick access to your funds immediately. Don’t wait for standard settlement cycles, get more control over your cash flow and the freedom to manage your business better"
              size="h6"
              weight="5"
            />
          </div>
          <div className="my-5 d-flex flex-row justify-content-start align-items-center">
            <div className="me-2">
              <PrimaryButton
                title="EnKash Now"
                theme="blue"
                url="/sales/?source=receivables"
              />
            </div>
            <div>
              <SecondryButton
                title="Get Free Demo"
                actionImage={whiteArrow}
                iconSize={15}
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
          <ThreeSteps />
        </div>
      </div>

      <div className={`${styles.second_row} row d-flex bg-white row-padding`}>
        <EnkashWay
          progressData={[
            {
              itemArray: ["Waiting", "Period"],
              oldWayDescription:
                "Earlier, payments used to take 2-3 business days to settle in your account, hindering your cash flow.",
              newWayDescription:
                "With EnKash’s instant payment settlement process, receive funds instantly after every successful transaction.",
            },
            {
              itemArray: ["Limited", "Access"],
              oldWayDescription:
                "In the old way, settlements often used to occur only within specific banking hours, impacting your flexibility.",
              newWayDescription:
                "EnKash enables you to access your funds 24/7, 365 days a year, even on weekends and holidays.",
            },
            {
              itemArray: ["Cash Flow", "Management"],
              oldWayDescription:
                "Traditional payment settlement process often restricted cash flow, hindering the ability to seize opportunities. Facing unexpected cash flow gaps also disrupted smooth operations and growth.",
              newWayDescription:
                "Gain complete control over your cash flow, allowing you to invest, pay suppliers, or manage expenses instantly. Eliminate cash flow gaps and seize time-sensitive deals with readily available funds.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center pb-2">
          <Heading
            title="Fast-track your cash flow with"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space} seamless settlements`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Customized Settlements"
              description="Empower yourself to decide when your customer payments should transfer into your bank account. With customized payment settlement process, you have full control to settle the needed amount within a few seconds"
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Simplified Budgeting"
              description="Faster access to capital empowers you to make quicker decisions, invest in inventory, and seize strategic opportunities without delays"
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Enhanced Relations"
              description="Pay vendors/suppliers faster, build stronger relationships, potentially secure better deals, and avoid late fees"
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Super Fast Settlements"
              description="Instantly get your customer payments straight into your bank account every day with same-day settlements which are settled at T+O, for a quick and consistent cash flow experience"
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Increased Efficiency"
              description="Eliminate the need to track settlement schedules and manage cash flow fluctuations, freeing up valuable time and resources for other business-critical tasks"
              source="receivables"
            />
          </div>
        </div>
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
      {/* <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how instant settlements can revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about instant settlements in detail"
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
