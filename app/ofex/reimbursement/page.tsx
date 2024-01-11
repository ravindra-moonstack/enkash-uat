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
import Header from "@/components/header/header";
import BlogWrapper from "@/components/blog/blog-wrapper";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import { Metadata } from "next";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import FAQHtml from "./faq-html";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Expense Reimbursement - Business & Travel  - EnKash",
  description:
    "Automate and improve your productivity within your organization with an Enkash smart reimbursement system that helps you track, process, and sync data in real-time.",
  alternates: {
    canonical: "https://www.enkash.com/ofex/reimbursement/",
  },
};

const reimbursement = () => {
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
            <Heading title="Reimbursements" size="h4" weight="4" />
          </div>
          <div className="d-flex flex-column">
            <Heading
              title={`Simplify expense${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title={`management with${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <div>
              <Heading
                title="hassle-free "
                color="white"
                size="h2"
                weight="7"
              />
              <Heading
                title="reimbursements"
                color="rainy-blue"
                size="h2"
                weight="7"
              />
            </div>
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Maximize productivity within your organization with a straightforward reimbursement system that helps you track, process, and sync data in real-time"
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
                title="Book a Demo"
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
              itemArray: ["Manual", "Process"],
              oldWayDescription:
                "Manual procedures are time-consuming for everyone involved. Employees fill out paper forms, attach receipts, and submit to their managers for approval. Then, the finance team takes action.",
              newWayDescription:
                "Leverage smart tools, such as OCR technology and approval matrices, to automate the reimbursement process and save time and money across the business.",
            },
            {
              itemArray: ["Timelines"],
              oldWayDescription:
                "Manual processes can cause delays in reimbursing employees, which can be demotivating and might create cash flow issues.",
              newWayDescription:
                "Pre-loaded corporate cards and automated approval flows ensure that employees don’t have to pay out of their pocket and reduce the workload on your finance team.",
            },
            {
              itemArray: ["Spend", "Visibility"],
              oldWayDescription:
                "Without automated systems, businesses have limited visibility of their reimbursement processes.",
              newWayDescription:
                "EnKash’s automated reimbursement system tracks expenses and monitors business spends for you.",
            },
            {
              itemArray: ["Tax", "Compliance"],
              oldWayDescription:
                "Manually tracking expenses and ensuring they comply with tax laws is time-consuming and error-prone.",
              newWayDescription:
                "Audit and tax compliance become effortless with real-time and automatic data entries.",
            },
            {
              itemArray: ["Budgets &", "Policies"],
              oldWayDescription:
                "Enforcing reimbursement policies manually across an organization can cause compliance issues and unnecessary friction among teams.",
              newWayDescription:
                "Automated online reimbursement policies provide clarity to everyone involved, from the finance team to managers and their employees.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-flex flex-column text-center mb-5">
          <div>
            <Heading
              title={`Streamline your${space}`}
              color="black"
              size="h1"
              weight="6"
            />
            <Heading
              title="reimbursement process"
              color="equity-blue"
              size="h1"
              weight="6"
            />
          </div>

          <Heading
            title="with automated solutions"
            color="black"
            size="h1"
            weight="6"
          />
        </div>
        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Automated processes"
              description="A digitized end-to-end solution automates checking, approvals, invoice generation, and submission to ensure speed and accuracy"
              source="expense_management"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="OCR Technology"
              description="Automatically scan and collect details from receipts using OCR, eliminating the need for manual entry"
              source="expense_management"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Whatsapp Integration"
              description="Seamless Whatsapp integration to approve/reject expenses at one go without logging into the dashboard "
              source="expense_management"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Deviation"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Alerts"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              source="expense_management"
              description="Receive a policy deviation warning if an employee submits an expense outside set limits"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Real-time tracking"
              description="Track spends made on behalf of the business by employees in real-time"
              source="expense_management"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Insightful"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="data"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              source="expense_management"
              description=" Benefit from a complete overview of reimbursements and plan your business’ cash flow accordingly"
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
                    title="EnKash makes your business’"
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="reimbursement process effortless"
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
          title="Learn how reimbursements can benefit your business and employees!"
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
            title="Don’t worry! Our FAQs section will help you learn about reimbursements in detail"
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
          title="Seeking further understanding of reimbursements?"
          description="In the context of a business or company, reimbursement is the process of paying back expenses employees or others have undertaken on behalf of the business. It can be as simple as paying the employee back for the business travel expenses he or she has incurred or paying back the amount spent on fuel for business purposes."
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
                  title="How do I pay expense reimbursements?"
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="To pay expense reimbursements, businesses can:"
                />
              </div>
              <div className="mb-5">
                <ol>
                  <li>
                    Offer advance funds for expenses, replenishing when the
                    employee submits paperwork
                  </li>
                  <li>
                    Have employees pay out of pocket and reimburse approved
                    amounts upon expense report submission
                  </li>
                  <li>
                    Issue a business-specific credit card with set limits and
                    designated purposes
                  </li>
                </ol>
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Are there alternatives to expense reimbursements?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="If you do not want to bother with the entire process of expense reimbursements, the best alternative is to issue virtual cards to employees for business expenses. And if you have a smart spend management platform like EnKash, you can control the limits, the type of usage, track the movement, and so on with a few clicks. This way, the employee can keep submitting the relevant documents once the expense has been paid off."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What expenses are reimbursable?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="In most businesses, the expenses incurred for business purposes can be reimbursed. These generally include meals and entertainment, travel expenses, fuel charges, advertising expenses, business gift expenses, educational costs, employees’ meals, daily travel allowance if applicable, local commutes (taxis, etc), event-related expenses, etc."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What counts as employee business expenses?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Employee business expenses are those that an employee undertakes to further the business purposes. It could be anything from public relations, marketing, advertising, events, entertainment, travel, gifts or merchandise, displays, advertising, food, entertainment, etc., as long as they are for the business."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How to manage expense reimbursements?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The management of expense reimbursements starts with clearly understanding the budget allocations. Then comes the creation of a clearly defined policy that helps everyone understand how the process works, the limits for each expense, the process to get approvals, exceptions to the rule, and the documents required to process the reimbursements. Once policies are in place, educating your employees about the same is essential. Keeping the policies updated per the organization's changing needs is also crucial."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How to simplify your expense reimbursement process?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The best way to simplify your expense reimbursement process is to invest in a spend management platform that will help you at every step. Whether it is budgeting, controls, approvals, or reporting, all these aspects will be part of the platform."
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

export default reimbursement;
