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

export const metadata: Metadata = {
  title:
    "Control your Business Expenses with Policies & Approval Flow  - EnKash",
  description:
    "Explore how our approval workflow solutions can optimize decision-making processes, enhance accountability, and improve efficiency in your organization. Take control of your workflow management today",
  alternates: {
    canonical: "https://www.enkash.com/ofex/policy-and-approval-flows/",
  },
};

const policyApprovalFlow = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
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
            <Heading title="| Policy and Approval Flows" size="h4" weight="4" />
          </div>

          <div className="">
            <div className="d-flex flex-column">
              <div>
                <Heading
                  title={`Create${space}`}
                  color="white"
                  size="h2"
                  weight="7"
                />
                <Heading
                  title="customized"
                  color="rainy-blue"
                  size="h2"
                  weight="7"
                />
              </div>

              <Heading
                title="policies and streamlined"
                color="rainy-blue"
                size="h2"
                weight="7"
              />
              <div>
                <Heading
                  title={`approval${space}`}
                  color="rainy-blue"
                  size="h2"
                  weight="7"
                />
                <Heading title="processes" color="white" size="h2" weight="7" />
              </div>
            </div>
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Manage expenses effectively, maintain compliance, and optimize the approval processes"
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
              itemArray: ["Ease of", "Use"],
              oldWayDescription:
                "Traditionally, policies were paper-based. They had to be reviewed and approved manually by different stakeholders.",
              newWayDescription:
                "With EnKash, policies can be created on the platform as per the company's requirements and can be viewed easily on the dashboard.",
            },
            {
              itemArray: ["Policy", "Enforcement"],
              oldWayDescription:
                "Limits can’t be defined to enforce and track compliance with the company’s budget.",
              newWayDescription:
                "Built-in policy enforcement and tracking features for different departments and employee grades to ensure adherence to spending policies.",
            },
            {
              itemArray: ["Alerts on", "Policy Breach"],
              oldWayDescription:
                "Traditionally, there was no way to determine if an employee was spending more than the budget allocated, leading to overspending and disbalance in the cash flow.",
              newWayDescription:
                "When an employee submits expenses exceeding policy limits, a warning is sent to the submitters and approvers. The approver can then reject the expense or request a correction.",
            },
            {
              itemArray: ["Approval", " Workflows"],
              oldWayDescription:
                "Email-based approval processes can be slow and require multiple follow-ups, leading to delays.",
              newWayDescription:
                "Automated and customizable workflows streamline the approval process, ensuring faster decision-making and reduced bottlenecks.",
            },

            {
              itemArray: ["User", "Permissions"],
              oldWayDescription:
                "Limited control over who can initiate, approve, or modify financial transactions.",
              newWayDescription:
                "Role-based access control ensures that the designated people have the appropriate level of authority, enhancing security and transparency.",
            },
            {
              itemArray: ["Transparency"],
              oldWayDescription:
                "Lack of transparency in approval processes makes it difficult to track the status of transactions.",
              newWayDescription:
                "Real-time visibility into the approval status of transactions provides transparency and accountability at every step.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline flex-column text-center mb-5">
          <Heading
            title={`Navigate${space}`}
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title="policies and approvals seamlessly "
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading title="with our " color="black" size="h1" weight="6" />
          <Heading
            title="smart solutions "
            color="black"
            size="h1"
            weight="6"
          />
        </div>

        <div className="d-flex justify-content-center">
          <div className={`d-flex flex-md-row mt-3 pb-4 scroll_container`}>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Customizable Policies"
                description="Set up your policies for multiple departments/ grades based on expense categories and limits, selecting monthly/yearly frequency"
                source="expense_management"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Seamless Linking"
                description="Link policies to approval flow without any hassle and avoid rework in creating approval processes"
                source="expense_management"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Flexible Approval Flow"
                description="Create auto-approval, single-level approval, or multi-level approval flows and use them across policies"
                source="expense_management"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Default Approval Flow"
                description="Apply default approval flow according to user roles if no approval flow is created"
                source="expense_management"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                titleHtml={
                  <>
                    <Heading
                      title="Bulk"
                      color="rainy-blue"
                      size="h2"
                      weight="6"
                    />
                    <Heading
                      title="Approval"
                      color="rainy-blue"
                      size="h2"
                      weight="6"
                    />
                  </>
                }
                source="expense_management"
                description="Managers can approve the expenses in bulk at the same time"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Real-Time Alerts"
                description="
                Real-time alerts for expense policy violations, enabling businesses to enforce compliance and reduce the risk of fraud"
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
                <div className="text-center d-flex flex-column">
                  <Heading
                    title="Digitize business expenses with enhanced"
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="control and compliance"
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
          title="Learn how policy and approval flows can revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about approvals in detail"
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
          title="Seeking further understanding of policy and approval flow?"
          description="Policy and approval flow is a fundamental component of modern business operations, ensuring a well-structured and efficient approach to managing expenses and financial decisions."
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
                  title="What are the benefits of using approval workflows?"
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Approval workflows offer many benefits, like:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    The workflows improve control over expenses and bring
                    transparency across the organization
                  </li>
                  <li>
                    Help in preventing resource misuse and promote adherence to
                    policies and regulations
                  </li>
                  <li>
                    Provides structured and well-documented processes, which
                    prove invaluable during audits
                  </li>
                  <li>
                    Is customizable, automates processes, and ensures compliance
                    while facilitating timely payments
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the types of approval workflows?"
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Approval workflows come in various types, including single-level approvals, multi-level approvals, hierarchical approvals, and auto-approvals."
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Auto-approval: This allows you to get approval without
                    intervention—for example, leadership expenses
                  </li>
                  <li>
                    Single or multi-level approval: This flow requires one or
                    more approvers to approve or reject the department's expense
                  </li>
                  <li>
                    Hierarchical approval: You can set this approval flow to add
                    submitters, managers, and another admin
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the policy and approval process steps?"
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="These are the steps involved in the policy and approval process:"
                />
              </div>
              <div className="mb-5">
                <ol>
                  <li>
                    Create a policy with the details required and select the
                    category for the policy
                  </li>
                  <li>
                    Select the range of employee grades along with the amount
                    limit and frequency
                  </li>
                  <li>
                    As and when an employee creates an expense, the system will
                    cross-check with the policy created
                  </li>
                  <li>
                    After policy creation, approval flow needs to be set and
                    linked to the policy
                  </li>
                  <li>
                    If you do not set the approval flow, default approval will
                    be applicable
                  </li>
                </ol>
              </div>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Why is approval workflow important?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The primary reason is that they serve as a linchpin for organizations seeking efficient control, compliance, and financial accountability. Their importance lies in enabling businesses to curb unnecessary expenditures, ensuring that spending remains within defined limits and complies with company policies and regulations."
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

export default policyApprovalFlow;
