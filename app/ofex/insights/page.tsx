import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../../common/constant";
import faqData from "./faq-data";
import carouselData from "./carousel-data";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import EnkashWay from "@/components/enkash-way/enkash-way";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import { Metadata } from "next";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import FAQHtml from "./faq-html";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Employee Expense Management : Get Data Driven Insight - EnKash.com",
  description:
    "Employee Expense Management tracks employee business expenses with data-driven insights. Revolutionize the way you manage and analyze expenditures for enhanced financial efficiency",
};

const insights = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <Header utmSource="expense_management" />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div className="d-flex">
              <Heading
                title={`OfEx |${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
            <Heading
              title="Insights"
              size="h4"
              weight="4"
              useH1TagInHtml={true}
            />
          </div>
          <div className="d-flex flex-column">
            <Heading
              title="Unlock the power of data"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading
              title="with intelligent insights"
              color="white"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Gain strategic control over employee expenses with data-driven insights. Revolutionize the way you manage and analyze expenditures for enhanced financial efficiency"
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
                url="https://home.enkash.com/signup?utm_source=expense_management"
              />
            </div>
            <div>
              <SecondryButton
                title="Get Free Demo"
                actionImage={whiteArrow}
                iconSize={15}
                url="/sales/?source=expense_management"
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
                "Employees used to submit their expense reports manually, either on paper or through a spreadsheet. This data was then manually entered into a financial system, causing delays and hassles for settlements.",
              newWayDescription:
                "EnKash uses OCR technology to automatically capture data from receipts and report expenses, eliminating the need for manual data entry. This ensures that data is up-to-date, removes any discrepancies, and is readily available for analysis.",
            },
            {
              itemArray: ["Reporting", "Frequency"],
              oldWayDescription:
                "Periodic reporting was often delayed. Monthly/quarterly reports didn’t capture real time insights of expenses, which made it difficult for businesses to make informed decisions and plan better.",
              newWayDescription:
                "Get continuous and instant reporting with real-time insights, allowing businesses to have a dynamic view of their expenses, and facilitating quick decision-making based on the latest financial insights.",
            },
            {
              itemArray: ["Expense", "Visibility"],
              oldWayDescription:
                "There was limited visibility into individual and overall expenses. Tracking and analyzing expenses on an individual level used to be cumbersome, leading to a lack of transparency.",
              newWayDescription:
                "Gain comprehensive insights into expenses with detailed visibility. Admins and finance teams can drill down into specific expense categories, branch codes, departments, projects, etc., to gain a clear view.",
            },
            {
              itemArray: ["Customization"],
              oldWayDescription:
                "Traditional systems may offer limited options for customizing reports. Businesses may find it challenging to tailor expense reporting to specific needs and preferences.",
              newWayDescription:
                "Customize insights based on specific business needs and tailor reports based on criteria like date range, amount, count, etc., ensuring accurate extraction of the most relevant insights for efficient financial management.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading
            title="Stay informed about"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}employee expenses${space}`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <div>
            <Heading title="with EnKash" color="black" size="h1" weight="6" />
          </div>
        </div>
        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Customizable Dashboards"
              description="Grant varied access, like admin and finance teams, customize dashboards for tailored insights based on status, payment mode, category, segments, etc"
              source="expense_management"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="AI-Powered Insights"
              description="Get actionable insights into employee expenses patterns, identify cost-saving opportunities, and optimize budgets with AI-driven analytics"
              source="expense_management"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <>
                  <div className="d-flex flex-column">
                    <Heading
                      title="Policy"
                      color="rainy-blue"
                      size="h2"
                      weight="6"
                    />
                    <Heading
                      title="Violation"
                      color="rainy-blue"
                      size="h2"
                      weight="6"
                    />
                  </div>
                </>
              }
              source="expense_management"
              description="Easily analyze policies with the highest violations and get a comprehensive overview of expenses deviating from policy norms, allowing for proactive corrective actions"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Real-time Tracking"
              description="Monitor expenses in real-time, allowing for proactive decision-making and cost control, leading to improved bottom-line results"
              source="expense_management"
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
                    title="Get comprehensive insights and"
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="make smart decisions"
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
          title="Learn how digital receipt management can revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about insights in detail"
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
          title="Seeking further understanding of insights?"
          description="Insights provide real-time and interactive access to data gathered from employee business expenses. It presents complex data in a clear and easy-to-understand format, such as charts, graphs, and tables, allowing businesses to gain knowledge about various aspects of employee spending."
          source="expense_management"
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
                  title="What types of data can be tracked and analyzed through an employee insights dashboard?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Through an employee insights dashboard, various types of data related to employee business expenses can be tracked and analyzed including status, payment mode analysis, distribution by category, department, cost center, branches, and company segments, top 10 users with policy deviation, top 10 policies with the most violations, and the number of expenses with policy deviation."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How can EnKash help in policy compliance and expense control?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="EnKash provides a comprehensive overview of policy violations, allowing businesses to easily analyze and identify areas with the highest violations. This proactive approach enables organizations to take corrective actions promptly, ensuring compliance with expense policies and better control over expenditures."
                />
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="expense_management" />
    </div>
  );
};

export default insights;
