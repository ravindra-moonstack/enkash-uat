import Image from "next/image";
import { Metadata } from "next";
import { space } from "@/constant/common";
import styles from "./page.module.scss";
import blogData from "./blog-data";
import faqData from "./faq-data";
import howDoesItWorkData from "./how-does-It-work-data";
import Heading from "@/components/heading/heading";
import ExploreCard from "@/components/explore-card/explore-card";
import EnkashWay from "@/components/enkash-way/enkash-way";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import MobileHeader from "@/components/header/mobile-header/mobile-header";
import WebHeader from "@/components/header/web-header";
import HowDoesItWork from "@/components/how-does-it-work/how-does-it-work.";
import FAQ from "@/components/faq/faq";
import BlogWrapper from "@/components/blog/blog-wrapper/blog-wrapper";
import ActionCard from "@/components/action-card/action-card";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import LottieDynamicLoadComponent from "@/components/lottie-client/lottie-dynamic-load-client";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import {
  officeImg,
  whiteArrow,
  cardBg,
  faqBg,
  expense,
  heavyLiftingIconOne,
  heavyLiftingIconTwo,
  heavyLiftingIconFour,
  heavyLiftingIconThree,
} from ".";

export const metadata: Metadata = {
  title: "Automated AI Expense Management Software for your Business- EnKash",
  description:
    "EnKash automated expense management platform keeps track of budgets and ensures that spends are within limits. Automating expense management saves time & transparency.Book Demo Now !!",
};

const xpenz = () => {
  return (
    <div className={`color-white ${styles.home_container}`}>
      <div className="mobile-header">
        <MobileHeader />
      </div>
      <div className="desktop-header">{<WebHeader />}</div>
      <div className={`${styles.first_row} row color-white`}>
        <div className="col-md-6 col-12 d-flex flex-column">
          <div className="d-flex mb-4">
            <Heading title="X" color="rainy-blue" size="h1" weight="7" />
            <Heading title="penz" size="h1" weight="7" />
          </div>
          <div className="d-flex flex-column">
            <Heading
              title="Improve expense management"
              color="rainy-blue"
              size="h2"
              weight="7"
            />

            <Heading title="with advanced AI and ML" color="white" size="h2" />
            <Heading title="powered technology" color="white" size="h2" />
          </div>
          <div className={`mt-4 ${styles.desktop_description}`}>
            <Heading
              title="Get a detailed analysis of where, when, and how your business is spending, and automate the expense management process for your business"
              color="white"
              size="h6"
              weight="5"
            />
          </div>
          <div className={`mt-4 ${styles.mobile_description}`}>
            <Heading
              title="Get a detailed analysis of where, when, and how your business is spending, and automate the expense management process for your business"
              color="white"
              size="h5"
              weight="5"
            />
          </div>
          <div className="my-5">
            <PrimaryButton title="EnKash Now" theme="theme-blue" />
            <span className="mx-2"></span>
            <SecondryButton
              title="Book a Demo"
              actionImage={whiteArrow}
              iconSize={15}
            />
          </div>
        </div>
        <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
          <LottieClientComponent animationData={expense} loop={true} />
        </div>
      </div>
      <div className={`${styles.second_row} bg-white row d-flex row-padding`}>
        <HowDoesItWork dataSets={howDoesItWorkData} bannerImage={officeImg} />
      </div>
      <div className={styles.third_row}>
        <div className={`row bg-white ${styles.section}`}>
          <div className="col-md-6 col-12 my-md-5 my-3">
            <ExploreCard
              title="Budgets and advances"
              description="Set budgets for each department or function and provide advances as per projections and past usage"
              theme="blue"
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
              title="Hierarchy and controls"
              description="Use proper controls using department hierarchies to manage your expenses with ease and without delays"
              theme="blue"
            />
          </div>
        </div>
        <div className={`row bg-white ${styles.section}`}>
          <div className="col-md-6 col-12 px-5 my-md-5 my-3">
            <ExploreCard
              title="Reimbursements"
              description="Keep employees happy and ensure uninterrupted business-related activities with streamlined reimbursement processes"
              theme="blue"
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
            description="Choose an approval matrix(auto, multi, custom, hierarchical) that works best for your business and create and maintain an aligned approval process for all kinds of spends"
            theme="green"
          />
        </div>

        <div className="col-md-6 col-12 mt-5 order-4 order-md-3 px-md-5">
          <ExploreCard
            title="Scan and Drop Receipts"
            description="Leverage OCR for digital receipt management, reporting  & reconciliation"
            theme="green"
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
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
          <Heading
            title={`EnKash does${space}`}
            size="h1"
            color="black"
            weight="6"
          />
          <Heading
            title={`the heavy lifting${space}`}
            size="h1"
            color="equity-blue"
            weight="6"
          />
          <Heading title="for you." size="h1" color="black" weight="6" />
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

          <div className="mb-4 text-md-center">
            <Image
              src={heavyLiftingIconFour}
              alt="coins icon"
              className="mb-4"
            />
            <div className="d-flex flex-column">
              <Heading title="Spend" size="h5" color="white" weight="7" />
              <Heading title="Control" size="h5" color="white" weight="7" />
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
                "Manual expense reporting is time-consuming and prone to errors",
              newWayDescription:
                "EnKash’s Xpenz platform automates the expense recording, leading to zero errors",
            },
            {
              itemArray: ["Operational", "Efficiency"],
              oldWayDescription:
                "Manual expense management is tedious, prone to errors, and leads to inefficiency",
              newWayDescription:
                "Automating expense management saves time, efficiency, and transparency as you no longer need to track expenses manually",
            },
            {
              itemArray: ["Spend", "Overview"],
              oldWayDescription:
                "It is challenging to identify department-wise spending patterns, cost-saving opportunities, and compliance issues",
              newWayDescription:
                "EnKash provides real-time insights into your employee expenses by departments, cost centre, projects & expense heads spend patterns for better forecasting & allocation",
            },
            {
              itemArray: ["Expense", "Approvals"],
              oldWayDescription:
                "Traditional reimbursement approval systems lead to delays in processing expense reports",
              newWayDescription:
                "With automated approval workflows, you can enforce expense policies and check whether spend complies with policies",
            },
            {
              itemArray: ["Accessibility"],
              oldWayDescription:
                "The old reimbursement processes require form filling, paperwork, and proof of expenditure as receipts, causing delays",
              newWayDescription:
                "EnKash’s Xpenz drop receipts feature  enables you and your employees to capture and submit expenses on the go from anywhere easily",
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
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Smart audits"
              description="Automatic expense data extraction with OCR technology and smart audit alerts for duplicate entries by submitters and approvers"
              ctaColor="blue"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Real-time alerts"
              description="Enforcing expense policy compliance and fraud risk reduction with real-time alerts across the approval hierarchy"
              ctaColor="blue"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Customized approval workflow"
              description="Empowering businesses to create customized expense approval processes based on employee roles, expense categories, hierarchy, and single or multiple levels"
              ctaColor="blue"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Corporate credit card integration"
              description="Seamless integration with corporate credit cards, enabling businesses to track and manage credit card expenses"
              ctaColor="blue"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Integration with HRMS, accounting, and ERP systems"
              description="Seamless Integration with HRMS, accounting softwares like Zoho, Tally, Quickbooks, and ERP Systems- SAP and Oracle Netsuite, for automated data exchange and elimination of manual data entry and reconciliation"
              ctaColor="blue"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Robust business intelligence and custom reporting"
              description="Rich business intelligence for custom reports, insights dashboard, and expense analytics for informed decision-making"
              ctaColor="blue"
            />
          </div>
        </div>
      </div>

      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper blogData={blogData} title="Expense Management Insights" />
      </div>

      <div
        className={`${styles.eigth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions ?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don’t worry! Our FAQs Section will Help you Learn about Xpenz in detail"
            color="black"
            size="h4"
          />
        </div>

        <div>
          {faqData.map((item, index) => (
            <FAQ
              key={index}
              question={item.question}
              answer={item.answer}
              answerVisible={index === 0}
            />
          ))}
        </div>
        <div className={styles.faq_bg}>
          <Image src={faqBg} alt="background image" />x
        </div>
      </div>

      <div className={`row ${styles.ninth_row} bg-equity-blue`}>
        <div className="d-flex justify-content-evenly align-items-center">
          <Heading
            title="Have Questions about Expense Management?"
            size="h3"
            color="white"
          />
          <div>
            <PrimaryButton title="Know More" theme="theme-black" />
          </div>
        </div>
      </div>

      <div className="row">
        <ContactUsCard
          title="Seeking Further Understanding of Xpenz?"
          description="Expense management is the process of working around a company’s budget and expenses, managing approval, reports, and reimbursements raised by employees."
        />
      </div>

      <div className="row">
        <ComprehensiveView
          title="Explore the comprehensive guide"
          innerHtml={
            <>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Types of expense management"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="While expenses can be classified into fixed, variable, intermittent, and discretionary, the management of expenses can be more complex. Expense management can be divided into the following categories."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Advance and adjust expenses"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Under this expense, employees or teams who incur business expenses can draw an advance from the company. Once the expense is paid for, they can submit the supporting documents to support the spend. The advance may be replenished to continue the expense payment if required."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Spend and claim reimbursement"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Under this type of expense, the team or employee will pay for the expense out of pocket (after taking approvals to go ahead with the expense) and then claim the amount by submitting the supporting paperwork to get reimbursed."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Ordering, invoicing, and payment"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="For this expense, a request is raised, the procurement department sources vendors and payment is made once the work is completed and details are checked. This type of expense management works best for planned purchases for more significant expenses."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Ad-hoc and emergency"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Only senior employees with discretionary powers can sanction or undertake such expenses during emergencies and get them reimbursed."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Advanced card and spend management platform"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="A spend management platform with the option to issue, track, and manage virtual cards to employees supports all the above types of expense management while providing complete control and visibility."
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
                  title="Expense management is crucial to ensure that the financial health of the business is at an optimum level. Here are some aspects that are affected by expense management."
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Expense management keeps track of budgets and ensures that
                    spends are within limits
                  </li>
                  <li>
                    It affects the cash flow of the business and regulates the
                    business’s ability to control the cost of finance
                  </li>
                  <li>
                    Optimum expense management helps keep the business running
                    and ensures rebates and discounts
                  </li>
                  <li>
                    Mitigates any instances of fraud, minimizes risks, and
                    ensures that your business meets compliance requirements
                  </li>
                  <li>
                    Efficient expense management helps you keep employee morale
                    up with timely reimbursements
                  </li>
                  <li>
                    Helps improve profit margin by pinpointing unnecessary or
                    excessive spending and controlling costs
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Challenges in the expense management process"
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
                  <li>Poor visibility into data around expenses</li>
                  <li>Manual errors or missing data</li>
                  <li>Complicated work processes</li>
                  <li>Poor expense reporting processes</li>
                  <li>Instances of fraud and increased risk</li>
                  <li>Lack of compliance with expense policies</li>
                  <li>
                    Poor employee morale due to complicated reimbursement
                    processes
                  </li>
                  <li>No control or poor visibility into budgets</li>
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
                  title="An expense report is an itemized report that contains the details of expenses that have been incurred and paid for on behalf of the company. An expense report can either be created by an employee or a department to showcase the expense details and categories that they have incurred for a particular period."
                />
              </div>
            </>
          }
        />
      </div>
    </div>
  );
};

export default xpenz;
