import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../../common/constant";
import faqData from "./faq-data";
import carouselData from "./carousel-data";
import { banner, bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
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
import generateMetaData from "@/common/utils/metaData";

export const metadata: Metadata = generateMetaData({
  title:
    "Optimizing Cost with Customized Reporting Solutions for Businesses  - EnKash",
  description:
    "EnKash intelligent customized reporting solution helps businesses transform raw spend data into actionable insights to enable better business decisions, optimize costs and maximize savings.",
  alternates: {
    canonical: "https://www.enkash.com/solutions/customized-reporting/",
  },
  faqData: faqData,
});

const customizedReporting = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
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
              title="Customized Reporting"
              size="h4"
              weight="4"
              useH1TagInHtml={true}
            />
          </div>
          <div className="d-flex flex-column">
            <Heading
              title="Unlock intelligent"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <div>
              <Heading
                title={`insights${space}`}
                color="rainy-blue"
                size="h2"
                weight="7"
              />
              <Heading
                title="with customized"
                color="white"
                size="h2"
                weight="7"
              />
            </div>

            <Heading
              title="reporting solutions"
              size="h2"
              color="white"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Transform your financial data into actionable intelligence. Gain unparalleled control over your business finances and make informed decisions like never before"
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
            {/* <Image src={banner} alt="reminder flow image" /> */}

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
              itemArray: ["Data", "Compilation"],
              oldWayDescription:
                "Earlier, the finance team used to manually compile data from disparate sources and do spend analysis, leading to inefficiencies, errors, and delayed decision-making.",
              newWayDescription:
                "With EnKash, seamlessly integrate and analyze your financial data in real-time with our advanced reporting feature. Streamline your reporting process, reduce errors, and gain instant access to critical insights.",
            },
            {
              itemArray: ["Customization", "Options"],
              oldWayDescription:
                "Limited customization options restricted businesses from tailoring reports to their specific needs. This lack of flexibility hindered organizations from showcasing data in a manner aligned with their unique requirements.",
              newWayDescription:
                "With EnKash, get various filtration options on the dashboard, empowering you to filter and customize reports based on your specific preferences like date, status, UTR, EnKash ID, vendor name, etc.",
            },

            {
              itemArray: ["Real-time", "Updates"],
              oldWayDescription:
                "Businesses had to wait for scheduled reporting cycles due to a lack of real-time updates, leading to delays in accessing crucial information. In fast-paced business environments, this lag was detrimental.",
              newWayDescription:
                "Get instant real-time updates and insights, meaning you can know what's happening as it happens, allowing you to make informed decisions promptly and stay ahead of the competition.",
            },
            {
              itemArray: ["Visibility", "And Access"],
              oldWayDescription:
                "Earlier one significant challenge was the existence of data silos and limited access, which hindered the flow of information across different departments or stakeholders within an organization.",
              newWayDescription:
                "EnKash provides a centralized hub for financial data enhancing visibility throughout the organization. Share reports easily with stakeholders, and ensure all relevant parties have access to critical insights.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading title="Switch to smart" color="black" size="h1" weight="6" />
          <Heading
            title={`${space}data reporting${space}`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading title="with EnKash" color="black" size="h1" weight="6" />
        </div>
        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Tailored Dashboards"
              description='Create personalized dashboards with "Quick Filters" like name, date, etc to filter transactions swiftly. Add advanced filters like UTR, EnKash ID, etc., for further customization'
              source=""
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Report Generation"
              description="Effortlessly generate and download comprehensive reports from a centralized dashboard, ensuring offline access to vital information anytime"
              source=""
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Holistic"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Insights"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Monitor all invoices and spending, gaining a comprehensive overview with real-time and automated data refresh for informed decisions impacting cash flow"
              source=""
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Enhance Collaboration"
              // titleHtml={
              //   <>
              //     <Heading
              //       title="Accelerate"
              //       color="rainy-blue"
              //       size="h2"
              //       weight="6"
              //     />
              //     <Heading
              //       title="Audits"
              //       color="rainy-blue"
              //       size="h2"
              //       weight="6"
              //     />
              //   </>
              // }
              description="Boost teamwork with customizable access controls based on department, location, or branch codes, optimizing productivity by tailoring user permissions to specific teams"
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
                  <Heading
                    title="Elevate your financial insights, and"
                    color="white"
                    size="h1"
                    weight="6"
                  />

                  <Heading
                    title="empower your decisions"
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
            title="Don't worry! Our FAQs section will help you learn about customized reporting
            in detail"
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
          title="Seeking further understanding of customized reporting?"
          description="Customized reporting in EnKash refers to the ability to generate and download reports tailored to your specific needs. This allows you to gain deeper insights into your company's spend analysis, identify areas for cost optimization, and make more informed financial decisions."
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
                  title="What are the benefits of customized reporting?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="There are many benefits of customized reporting on EnKash. Firstly, it enables users to focus on the specific metrics and insights that are most relevant to their business objectives, providing a more targeted and actionable view of performance. Secondly, it enhances decision-making by presenting information in a format that aligns with the user's preferences and priorities. Additionally, customized reporting can improve efficiency by eliminating the need to sift through irrelevant data, saving time and resources."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What kind of business benefits from customized reporting?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Customized reporting is beneficial for businesses of all sizes and industries. Whether you are a small startup or a large enterprise customize reports can help you make better financial decisions."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title=" What level of technical expertise is required to create and maintain customized reports?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="EnKash's customized reporting feature is designed to be user-friendly, requiring no advanced technical expertise."
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

export default customizedReporting;
