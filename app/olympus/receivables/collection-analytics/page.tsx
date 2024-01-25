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

export const metadata: Metadata = {
  title:
    "Collection Analytics & DSO Management Platform for Businesses - EnKash",
  description:
    "Seamless experience with our cutting-edge Collection analytics Solutions for corporate and small businesses. Explore the benefits of the Data collection analytics platform. Book Free Demo !!",
};

const collectionAnalytics = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
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
                title="Collection Analytics"
                size="h4"
                weight="4"
                useH1TagInHtml={true}
              />
              <sup className="sup-symbol">#</sup>
            </div>
          </div>
          <div className="d-flex flex-column">
            <Heading
              title="Unlock the power of"
              color="white"
              size="h2"
              weight="7"
            />
            <div>
              <Heading
                title={`data and${space}`}
                color="white"
                size="h2"
                weight="7"
              />
              <Heading
                title="enhance"
                color="rainy-blue"
                size="h2"
                weight="7"
              />
            </div>

            <Heading
              title="decision-making"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Effortlessly analyze and enhance your collection process with our smart analytics. Gain valuable insights and streamline your operations for optimal efficiency"
              size="h6"
              weight="5"
            />
          </div>
          <div className="my-5 d-flex flex-row justify-content-start align-items-center">
            <div className="me-2">
              <PrimaryButton
                title="EnKash Now"
                theme="blue"
                url="https://home.enkash.com/signup?utm_source=receivables"
              />
            </div>
            <div>
              <SecondryButton
                title="Book a Demo"
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
              itemArray: ["Data", "Collection"],
              oldWayDescription:
                "Earlier, companies hired people for manual data entry, introducing errors and delays. This method heavily depended on spreadsheets and disconnected systems, causing inefficiencies in data management.",
              newWayDescription:
                "EnKash automates the entire data collection process by pulling real-time data directly from the dashboard, reducing manual errors, and collating all the data in a centralized system, simplifying analysis and reporting.",
            },
            {
              itemArray: ["Accessibility"],
              oldWayDescription:
                "Limited access to AR data, typically restricted to finance teams, which caused delays in communication and collaboration.",
              newWayDescription:
                "With EnKash, you can grant role-based access to a user-friendly dashboard, enabling cross-functional teams like finance, sales, and operations teams to readily access relevant AR information for a 360° view.",
            },
            {
              itemArray: ["DSO", "Management"],
              oldWayDescription:
                "Earlier, DSO management was often a challenging task due to the lack of real-time data and manual processes. This resulted in delayed identification of overdue payments and hindered the optimization of cash flow.",
              newWayDescription:
                "Get up-to-the-minute tracking of payment statuses, and implement proactive strategies for reducing DSO. By leveraging real-time insights, EnKash enables organizations to maintain a healthier cash flow position.",
            },
            {
              itemArray: ["Real-Time", "Insights"],
              oldWayDescription:
                "In the traditional way there was no way to get real-time visibility into accounts receivable performance. Also, it was very difficult to track payment status and identify potential issues.",
              newWayDescription:
                "With EnKash, businesses can get access to a comprehensive dashboard that provides real-time insights into AR metrics, ultimately enabling proactive collection management and quick identification of discrepancies for faster resolutions.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row} row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-flex flex-column text-center mb-5">
          <Heading
            title="Streamline your collection process with"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}smart analytics`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Customizable Dashboards"
              description="Tailor your collection analytics dashboard to show reports on the basis of week, month, or custom date range, ensuring relevance and clarity"
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Visibility And Monitoring"
              description="Effortlessly track your collection process with complete visibility by monitoring invoice status, outstanding amounts, total collections, and overdue payments for prompt follow-ups"
              source="receivables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Automated Reporting"
              source="receivables"
              description="Receive comprehensive downloadable reports automatically, eliminating the need for manual compilation and reducing the risk of errors"
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
      {/* <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how virtual accounts can revolutionize the way you work!"
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
