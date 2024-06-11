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
import BlogWrapper from "@/components/blog/blog-wrapper";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import { Metadata } from "next";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import FAQHtml from "./faq-html";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title:
    "Hierarchy & Control : Manage Hierarchy, Work & Task  Management - EnKash",
  description:
    "Businesses can bring transparency using approval hierarchies and enhance decision-making abilities within the organization.  How you can save time & money with Enkash.  Book a Demo",
  alternates: {
    canonical: "https://www.enkash.com/ofex/hierarchy-and-controls/",
  },
};

const hierarchyAndControls = () => {
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
              title="Hierarchy and Controls"
              size="h4"
              weight="4"
              useH1TagInHtml={true}
            />
          </div>
          <div className="d-flex flex-column">
            <Heading
              title={`Optimize organizational${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title={`hierarchy and control for${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <div>
              <Heading
                title={`quick and${space}`}
                color="white"
                size="h2"
                weight="7"
              />
              <Heading
                title="efficient"
                color="rainy-blue"
                size="h2"
                weight="7"
              />
            </div>

            <Heading
              title={`expense management${space}`}
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Effortlessly set up control across departments, sub-departments, and designations"
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
              itemArray: ["Approval Process"],
              oldWayDescription:
                "The traditional paper or email-based multi-level approval process is tedious and time-consuming.",
              newWayDescription:
                "OfEx automatic approval flow can be set up on the dashboard based on organizational roles, departments, and designations.",
            },
            {
              itemArray: ["Privacy Concerns"],
              oldWayDescription:
                "Limited control over who could access financial data leads to security concerns.",
              newWayDescription:
                "EnKash allows you to have role-based access and control with increased security.",
            },
            {
              itemArray: ["Compliance & Auditing"],
              oldWayDescription:
                "The compliance tracking in line with the company or department-wise policy requires extensive manual effort.",
              newWayDescription:
                "Built-in compliance checks for automatic alerts and tracking across hierarchical levels for policy violations.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-flex flex-column text-center mb-5">
          <Heading
            title="Delegate authority for better"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title="transparency & faster resolution"
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>
        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Define Custom Roles"
              description="Assign specific permissions and accessibility to multiple hierarchies based on their department structure"
              source="expense_management"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Reduces Financial Risks"
              description="Multiple individuals can be involved in the approval hierarchy. This ensures that expenses are verified multiple times and that there is no inaccuracy, duplication, or fraud"
              source="expense_management"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Fast Decision Making"
              description="The system provides real-time insights into the expense pattern for businesses to identify areas that can be managed better"
              source="expense_management"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Resource Management"
              description="The AI and ML-powered technology allows setting automated rules for expense approval and categorization, helping reduce the burden on managers and accounting teams"
              source="expense_management"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Easy Configuration"
              description="Seamlessly integrating software like Zoho, Tally, SAP, and Oracle Netsuite with EnKash eliminates the need for manual data entry"
              source="expense_management"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Highly"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Scalable"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              source="expense_management"
              description="Add new departments and employee roles without any hassle"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <div className="d-inline flex-column">
                  <Heading
                    title={`Have better control across departments and expenses${space}`}
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
          title="Learn how hierarchy and control can benefit your business and employees!"
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
            title="Don't worry! Our FAQs section will help you learn about department management in detail"
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
          title="Seeking further understanding of hierarchy and control?"
          description="Hierarchy and control within an organization are critical elements that define the structure, authority, and decision-making processes. Understanding hierarchy in a company is crucial as it defines the flow of authority and responsibility. In practice, countless businesses exemplify various forms of hierarchy, each tailored to their unique needs."
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
                  title="What is the role of approval hierarchies in expense management?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Approval hierarchies provide a defined structure to determine how expense reports will be reviewed and approved within the organization. Businesses can initiate a transparent process for managing expenses with approval hierarchies and reduce the risk of unauthorized expenses."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the benefits of expense approval hierarchies?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Here are some benefits of expense approval hierarchies:"
                />
              </div>
              <div className="mb-2 d-inline">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Accountability:"
                  />
                </div>
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title=" The immediate manager reviews an expense report, which is then sent to the next level for further review and approval."
                />
              </div>
              <br />
              <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Transparency:"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="This gives insights into spend patterns and helps make better budget and saving decisions"
                />
              </div>
              <br /> <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Decision-making:"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Businesses can define the authority levels and associated spend limits, allowing the employees to make decisions within the limits"
                />
              </div>
              <div className="mb-2 mt-5">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How do approval hierarchies help reduce financial risks?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title=" Approval hierarchies help reduce financial risks in the following ways:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Multiple individuals review and verify the expense claims,
                    leaving no room for errors
                  </li>
                  <li>
                    Since expenses are accessible to multiple departments, there
                    is less opportunity to manipulate the documents
                  </li>
                  <li>
                    Businesses can impose spend guidelines and prevent
                    non-compliant expenses by stopping reimbursement if there is
                    overspending
                  </li>
                  <li>
                    The approvers in the hierarchy process are accountable for
                    approved expenses
                  </li>
                </ul>
              </div>
              <div className="mb-2 mt-5">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How do approval hierarchies impact decision decision-making in businesses?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The approval hierarchy enables managers to make expense-related decisions. The organizations can define the approval hierarchy and fast-track decision-making. A well-defined hierarchy ensures there are no unnecessary delays at work since managers have the authority to approve if they believe a particular expense is necessary and requires immediate action."
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

export default hierarchyAndControls;
