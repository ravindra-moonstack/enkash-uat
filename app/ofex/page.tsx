import Image from "next/image";
import { Metadata } from "next";
import { space } from "@/common/constant";
import styles from "./page.module.scss";
import blogData from "./blog-data";
import faqData from "./faq-data";
import howDoesItWorkData from "./how-does-It-work-data";
import Heading from "@/components/heading/heading";
import ExploreCard from "@/components/explore-card/explore-card";
import EnkashWay from "@/components/enkash-way/enkash-way";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import HowDoesItWork from "@/components/how-does-it-work/how-does-it-work.";
import BlogWrapper from "@/components/blog/blog-wrapper";
import ActionCard from "@/components/action-card/action-card";
import LottieDynamicLoadComponent from "@/components/lottie-client/lottie-dynamic-load-client";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import Header from "@/components/header/header";
import {
  officeImg,
  whiteArrow,
  cardBg,
  faqBg,
  heavyLiftingIconOne,
  heavyLiftingIconTwo,
  heavyLiftingIconThree,
} from ".";
import FAQHtml from "./faq-html";
import Footer from "@/components/footer/footer";
import generateMetaData from "@/common/utils/metaData";

export const metadata: Metadata = generateMetaData({
  title: "Automated Expense Management Software for your Business- EnKash",
  description:
    "EnKash automated expense management platform keeps track of budgets and ensures that spends are within limits. Automating expense management saves time & transparency.Book Demo Now !!",
  alternates: {
    canonical: "https://www.enkash.com/ofex/",
  },
  faqData: faqData,
});

const OfEx = () => {
  return (
    <div className={`color-white ${styles.home_container}`}>
      <Header utmSource="expense_management" />

      <div className={`${styles.first_row} row color-white`}>
        <div className="col-md-6 col-12 d-flex flex-column">
          <div className="d-flex mb-4">
            <Heading title="O" color="rainy-blue" size="h1" weight="7" />
            <Heading title="fEx" size="h1" weight="7" />
          </div>
          <div className="d-inline">
            <Heading
              title="Improve business expense management "
              color="rainy-blue"
              size="h2"
              weight="7"
              useH1TagInHtml={true}
            />
            <Heading
              title="with advanced technology"
              color="white"
              size="h2"
              weight="7"
            />
          </div>
          <div className="mt-4 mobile-only">
            <Heading
              title="Get a detailed analysis of where, when, and how your business is spending, and automate the expense management process for your business"
              color="white"
              size="h6"
              weight="5"
            />
          </div>
          <div className="mt-4 desktop-only">
            <Heading
              title="Get a detailed analysis of where, when, and how your business is spending, and automate the expense management process for your business"
              color="white"
              size="h5"
              weight="5"
            />
          </div>

          <div className="my-5">
            <PrimaryButton
              title="EnKash Now"
              theme="blue"
              url="/sales/?source=expense_management"
            />
            <span className="mx-2"></span>
            <SecondryButton
              title="Get Free Demo"
              actionImage={whiteArrow}
              iconSize={15}
              url="/sales/?source=expense_management"
            />
          </div>
        </div>
        <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
          <div className={styles.lottie_container}>
            <LottieDynamicLoadComponent
              animationName={"OfexBannerAnimation"}
              loop={true}
            />
          </div>
        </div>
      </div>
      <div className={`${styles.second_row} bg-white row d-flex`}>
        <HowDoesItWork dataSets={howDoesItWorkData} bannerImage={officeImg} />
      </div>
      <div className={styles.third_row}>
        <div className={`row bg-white ${styles.section}`}>
          <div className="col-md-6 col-12 my-md-5 my-3">
            <ExploreCard
              title="Budget and Advances"
              description="Set budgets for each department or function and provide advances as per projections and past usage"
              theme="blue"
              link="/ofex/budget-and-advances"
            />
          </div>
          <div
            className={`col-md-6 col-12 d-flex my-md-5 my-3 d-flex justify-content-end ${styles.first_container}`}
          >
            <Image
              src={cardBg}
              alt="card background"
              className={styles.card_bg}
            />
            <LottieDynamicLoadComponent
              animationName={"XpenzBudgetAnimation"}
              loop={true}
            />
          </div>
        </div>
        <div className={`row bg-white ${styles.section}`}>
          <div
            className={`col-md-6 col-12 order-md-1 order-2 d-flex my-md-5 my-3 d-flex justify-content-start  ${styles.second_container}`}
          >
            <Image
              src={cardBg}
              alt="card background"
              className={styles.card_bg}
            />
            <LottieDynamicLoadComponent
              animationName={"XpenzHeirarchyAnimation"}
              loop={true}
            />
          </div>
          <div className="col-md-6 col-12 order-md-2 order-1 my-md-5 my-3 ">
            <ExploreCard
              title="Hierarchy and Controls"
              description="Use proper controls using department hierarchies to manage your expenses with ease and without delays"
              theme="blue"
              link="/ofex/hierarchy-and-controls"
            />
          </div>
        </div>
        <div className={`row bg-white ${styles.section}`}>
          <div className="col-md-6 col-12 my-md-5 my-3">
            <ExploreCard
              title="Reimbursements"
              description="Keep employees happy and ensure uninterrupted business-related activities with streamlined reimbursement processes"
              theme="blue"
              link="/ofex/reimbursement"
            />
          </div>
          <div
            className={`col-md-6 col-12 d-flex my-md-5 my-3 d-flex justify-content-end ${styles.third_container}`}
          >
            <Image
              src={cardBg}
              alt="card background"
              className={styles.card_bg}
            />

            <LottieDynamicLoadComponent
              animationName={"XpenzReimbursementAnimation"}
              loop={true}
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row row-padding`}>
        <div className="col-md-6 col-12 d-flex mb-5 order-1 order-md-1 justify-content-center">
          <div className={styles.lottie_container}>
            <LottieDynamicLoadComponent
              animationName={"XpenzPolicyAnimation"}
              loop={true}
            />
          </div>
        </div>
        <div className="col-md-6 col-12 mb-md-5 mb-3 order-2 order-md-2 px-md-5">
          <ExploreCard
            title="Policy and Approval Flows"
            description="Choose an approval matrix (auto, multi, custom, hierarchical) that works best for your business to create and maintain an aligned approval process for all kinds of spends"
            theme="green"
            link="/ofex/policy-and-approval-flows"
          />
        </div>

        <div className="col-md-6 col-12 mt-5 order-4 order-md-3 px-md-5">
          <ExploreCard
            title="Scan and Drop Receipts"
            description="Leverage OCR for digital receipt management, reporting  & reconciliation"
            theme="green"
            link="/ofex/scan-and-drop-receipts"
          />
        </div>
        <div className="col-md-6 col-12 d-flex mt-5 order-3 order-md-4 px-md-5">
          <div className={styles.lottie_second_container}>
            <LottieDynamicLoadComponent
              animationName={"XpenzScanAnimation"}
              loop={true}
            />
          </div>
        </div>
      </div>

      <div className="row bg-white row-padding">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <Heading
            title={`Unlock the power of streamlined${space}`}
            size="h1"
            color="black"
            weight="6"
          />
          <Heading
            title={`expense management${space}`}
            size="h1"
            color="equity-blue"
            weight="6"
          />
        </div>
      </div>

      <div className={`row bg-indi-volt ${styles.fifth_row}`}>
        <div
          className={`d-flex flex-column flex-md-row tex-center justify-content-evenly ${styles.container}`}
        >
          <div className="mb-4 text-md-center">
            <Image
              src={heavyLiftingIconOne}
              alt="coins icon"
              className="mb-4"
            />
            <div className="d-flex flex-column">
              <Heading title="Streamlined" size="h5" color="white" weight="7" />
              <Heading
                title="Approval Flow"
                size="h5"
                color="white"
                weight="7"
              />
            </div>
          </div>

          <div className="mb-4 text-md-center">
            <Image
              src={heavyLiftingIconTwo}
              alt="coins icon"
              className="mb-4"
            />
            <div className="d-flex flex-column">
              <Heading title="Faster " size="h5" color="white" weight="7" />
              <Heading
                title="Reimbursements"
                size="h5"
                color="white"
                weight="7"
              />
            </div>
          </div>

          <div className="mb-4 text-md-center">
            <Image
              src={heavyLiftingIconThree}
              alt="coins icon"
              className="mb-4"
            />
            <div className="d-flex flex-column">
              <Heading title="Increased" size="h5" color="white" weight="7" />
              <Heading title="Visibility" size="h5" color="white" weight="7" />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.sixth_row} row d-flex bg-white row-padding`}>
        <EnkashWay
          progressData={[
            {
              itemArray: ["Expense", "Reporting"],
              oldWayDescription:
                "Traditional expense reporting was paper-based and managing it consumed a lot of manhours, leading to discrepancy in data",
              newWayDescription:
                "EnKash’s OfEx platform automates the expense recording, leading to zero errors.",
            },
            {
              itemArray: ["Operational", "Efficiency"],
              oldWayDescription:
                "Manual expense management is tedious, prone to errors, and leads to inefficiency.",
              newWayDescription:
                "Automating expense management saves time, efficiency, and transparency as you no longer need to track expenses manually.",
            },
            {
              itemArray: ["Spend", "Overview"],
              oldWayDescription:
                "It is challenging to identify department-wise spending patterns, cost-saving opportunities, and compliance issues.",
              newWayDescription:
                "EnKash provides real-time insights into your employee expenses by departments, cost centre, projects & expense heads spend patterns for better forecasting & allocation.",
            },
            {
              itemArray: ["Expense", "Approvals"],
              oldWayDescription:
                "Traditional reimbursement approval systems lead to delays in processing expense reports.",
              newWayDescription:
                "With automated approval workflows, you can enforce expense policies and check whether spend complies with policies.",
            },
            {
              itemArray: ["Accessibility"],
              oldWayDescription:
                "The old reimbursement processes required form filling, paperwork, and proof of expenditures as receipts, causing delays in reimbursements.",
              newWayDescription:
                "EnKash’s OfEx drop receipts feature  enables you and your employees to capture and submit expenses on the go from anywhere easily.",
            },
          ]}
        />
      </div>
      <div
        className={`row d-flex bg-white row-padding-top-none ${styles.seventh_row}`}
      >
        <ActionCard
          mainTitle={
            <>
              <div className="d-flex flex-column">
                <Heading title="Total" color="white" size="h1" weight="5" />
                <Heading
                  title="Control"
                  color="electric-green"
                  size="h1"
                  weight="5"
                />
              </div>
            </>
          }
          mainImage={officeImg}
          link="/sales/?source=expense_management"
          description="Gain control over your business spends with a complete overview of all your expenses. Analyze data to create efficient budgets, optimize expenses and increase your savings."
        />
      </div>
      <div className="bg-white row-padding d-flex justify-content-center">
        <div className="ps-md-5 scroll_container d-flex pb-4">
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Streamlined process"
              description="Effortless expense submission and approval process supported via  WhatsApp"
              ctaColor="blue"
              source="expense_management"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Smart"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Audits"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              source="expense_management"
              description="Automatic expense data extraction with OCR technology and smart audit alerts for duplicate entries by submitters and approvers"
              ctaColor="blue"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Real-Time Alerts"
              description="Enforcing expense policy compliance and fraud risk reduction with real-time alerts across the approval hierarchy"
              ctaColor="blue"
              source="expense_management"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Customized Approval Flow"
              description="Empowering businesses to create customized expense approval processes based on employee roles, expense categories, hierarchy, and single or multiple levels"
              ctaColor="blue"
              source="expense_management"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Credit Card Integration"
              description="Seamless integration with corporate credit cards, enabling businesses to track and manage credit card expenses"
              ctaColor="blue"
              source="expense_management"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              whiteTitle="HRMS and ERP Integration"
              description="Seamless Integration with HRMS, accounting softwares like Zoho, Tally, Quickbooks, and ERP Systems- SAP and Oracle Netsuite, for automated data exchange and elimination of manual data entry and reconciliation"
              ctaColor="blue"
              source="expense_management"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Custom Reporting"
              description="Rich business intelligence for custom reports, insights dashboard, and expense analytics for informed decision-making"
              ctaColor="blue"
              source="expense_management"
            />
          </div>
        </div>
      </div>

      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how OfEx can revolutionize the way you work!"
        />
      </div>

      <div
        className={`${styles.eigth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don’t worry! Our FAQs section will help you learn about expense management in detail"
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

      <div className={`row ${styles.ninth_row} bg-equity-blue`}>
        <div className="d-flex justify-content-evenly align-items-center">
          <Heading
            title="Seeking further understanding of OfEx?"
            size="h3"
            color="white"
          />
          <div>
            <PrimaryButton title="Know More" theme="black" url="/sales" />
          </div>
        </div>
      </div>

      <div className="row">
        <ContactUsCard
          title="Manage your office expenses like never before!"
          description="Expense management is the process of working around a company’s budget and expenses, managing approval, reports, and reimbursements raised by employees."
          source="expense_management"
        />
      </div>

      <div className="row">
        <ComprehensiveView
          title="Explore our comprehensive guide"
          innerHtml={
            <>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the different types of expense management?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Expense management can be divided into the following categories."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Advance and adjust expenses: "
                />
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Employees draw advances for business expenses, submitting supporting documents for reimbursement. Advances may be replenished as needed."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Spend and claim reimbursement: "
                />
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Employees pay expenses upfront and claim reimbursement with approved paperwork, ensuring a seamless reimbursement process."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Ordering, invoicing, and payment: "
                />
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Ideal for planned purchases, this involves raising a request, procurement sourcing vendors, and payment upon completion, ensuring efficient expense control."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Ad-hoc and emergency: "
                />
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Senior employees with discretionary powers can incur and get reimbursed for ad-hoc or emergency expenses."
                />
              </div>

              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Advanced card and spend management platform: "
                />
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Utilizing virtual cards, this platform supports all expense management types, offering complete control and visibility over expenditures."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Why is expense management important?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Expense management is crucial to ensure that the business's financial health is at an optimum level. Here are some aspects that are affected by expense management."
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Expense management is crucial for maintaining optimal
                    financial health
                  </li>
                  <li>
                    It helps businesses control costs, improve cash flow, and
                    mitigate risks
                  </li>
                  <li>
                    It ensures compliance with regulations and enhances employee
                    morale
                  </li>
                  <li>
                    It helps businesses pinpoint unnecessary spending and
                    control costs, improving profit margins
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the challenges in the expense management process?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="When the expense management process is manual, there could be some challenges that include the following:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Poor visibility into data around expenses and manual errors
                    or missing data
                  </li>
                  <li>
                    Complicated work processes and poor expense reporting
                    processes
                  </li>
                  <li>Instances of fraud and increased risk</li>
                  <li>
                    Lack of compliance with expense policies and poor visibility
                    into budgets
                  </li>
                  <li>
                    Poor employee morale due to complicated reimbursement
                    processes
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What is an expense report?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="An expense report is an itemized report that contains the details of expenses that have been incurred and paid for on behalf of the company. An employee or a department can create an expense report to showcase the expense details and categories they have incurred for a particular period."
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

export default OfEx;
