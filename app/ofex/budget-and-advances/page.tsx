import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../../common/constant";
import faqData from "./faq-data";
import blogData from "./blog-data";
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
import BlogWrapper from "@/components/blog/blog-wrapper";
import FAQHtml from "./faq-html";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import generateMetaData from "@/common/utils/metaData";
import StructuredData from "@/components/head/structuredData";

export const metadata: Metadata = generateMetaData({
  title: "Budget Management Platform | Budget Control for Business - EnKash",
  description:
    "Optimize your financial stability with expert budget control management and cash flow strategies. Effectively allocate resources, track expenditures, and manage your cash flow to achieve sustainable financial success",
  alternates: {
    canonical: "https://www.enkash.com/ofex/budget-and-advances/",
  },
  faqData: faqData,
});

const budgetAndAdvance = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/ofex/budget-and-advances/`}
        faqData={faqData}
      />
      <Header utmSource="expense_management" />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div className="d-flex">
              <Heading
                title={`OfEx${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
            <Heading
              title="| Budgets and Advances"
              size="h4"
              weight="4"
              useH1TagInHtml={true}
            />
          </div>

          <div className="d-inline d-md-flex flex-column">
            <div>
              <Heading
                title={`Ensure${space}`}
                color="white"
                size="h2"
                weight="7"
              />
              <Heading
                title={`smooth cashflow${space}`}
                color="rainy-blue"
                size="h2"
                weight="7"
              />
            </div>

            <Heading
              title="with easy budget allocation"
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="and advance management"
              color="white"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Establish department-wise budgets and release advances as per projections and previous data"
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
                url="/sales/?source=expense_management"
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
              itemArray: ["Control", "Budgeting"],
              oldWayDescription:
                "Traditionally, there was no way to follow a disciplined budgeting for each department and project.",
              newWayDescription:
                "With EnKash, businesses can designate budgets for each department to avoid overspending.",
            },
            {
              itemArray: ["Easy", "Management"],
              oldWayDescription:
                "Managing budgets for each department and tracking them manually can be a heavy task.",
              newWayDescription:
                "Businesses can easily track the budget allocated to each department and project from a single dashboard.",
            },
            {
              itemArray: ["Smooth", "Approvals"],
              oldWayDescription:
                "Taking approval for each advance request can be very difficult.",
              newWayDescription:
                "There is no need to take approval on each advance payment. Managers can approve them in one go, provided they match the actual budget allocated and within the policy framework.",
            },
            {
              itemArray: ["Financial", "Calculations"],
              oldWayDescription:
                "Complex financial calculations are required to track budget utilization and make informed financial decisions.",
              newWayDescription:
                "EnKash's automated system performs all the complex financial calculations, providing you with real-time insights and analytics.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading title="Set up" color="equity-blue" size="h1" weight="6" />
          <Heading
            title={`${space}budgets and advances smoothly`}
            color="black"
            size="h1"
            weight="6"
          />
        </div>

        <div className="d-flex justify-content-center">
          <div className={`d-flex flex-md-row mt-3 pb-4 scroll_container`}>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle=" Customize Budgets"
                description="Create budgets that are aligned with your business finances and goals to achieve"
                source="expense_management"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Track Budget Utilization"
                description="Track and compare actual expenses against budgeted amounts, ensuring your financial plans are not disturbed"
                source="expense_management"
              />
            </div>

            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Advance For Projects"
                description="Simplified advance process to secure immediate funds when required for a specific project or category"
                source="expense_management"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Multiple Categories"
                description="Raise advances under category groups that allow you to combine multiple categories while submitting advances"
                source="expense_management"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <div className="text-center d-inline">
                  <Heading
                    title={`Budgeting under your${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title={`complete control${space}`}
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title={`at all times!${space}`}
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
          title="Learn how budget and advances can revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about budget management in detail"
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
          title="Seeking further understanding of budget and advances?"
          description="Budget management allows businesses to monitor their financial planning, use their financial tools, and achieve business goals, making the business sustainable in the long run."
          source="expense_management"
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
                  title="What are the objectives of budgeting?"
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The objectives of budgeting include:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Giving direction as to where the company is going and
                    whether the financial goals are aligned with it or not
                  </li>
                  <li>
                    It helps predict the company’s cash flow and take corrective
                    measures timely
                  </li>
                  <li>
                    Defines allocation of funds to resources as per requirement
                  </li>
                  <li>It helps measure employee performance</li>
                </ul>
              </div>

              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What is the significance of budget and budgetary control?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Budgets are critical for maintaining financial stability and achieving long-term objectives. OfEx emphasizes their importance by streamlining budgetary control, enabling businesses to promptly make informed decisions and respond to financial challenges."
                />
              </div>

              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What is the role of effective budget management?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Effective budgeting is essential for management to ensure that resources are used efficiently. OfEx reinforces this importance by simplifying budgeting tasks, making it an integral part of management's daily operations."
                />
              </div>

              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title=" What is the purpose of budget?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="A budget's primary purpose is to serve as a financial plan, providing guidance on revenue and expenditures. OfEx aligns with this purpose by offering a user-friendly platform for budget management."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the constraints of budgeting?"
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="While budgeting is essential, it does have limitations, such as being based on assumptions and historical data. OfEx addresses these limitations by offering real-time data and analytics, enabling businesses to adapt to changing circumstances swiftly."
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

export default budgetAndAdvance;
