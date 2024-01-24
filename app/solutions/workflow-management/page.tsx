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
import FAQ from "@/components/faq/faq";
import BlogWrapper from "@/components/blog/blog-wrapper";
import { Metadata } from "next";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import FAQHtml from "./faq-html";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Save Time with Workflow Management Software for Businesses - EnKash",
  description:
    "EnKash workflow management platform provides an infrastructure for the set-up, automated payment reminders over email, sms & WhatsApp. Book a Free Demo Now !!",
};

const workflowManagement = () => {
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
              title="Workflow Management"
              size="h4"
              weight="4"
              useH1TagInHtml={true}
            />
          </div>
          <div className="d-flex flex-column">
            <Heading
              title="Elevate your workflows"
              color="white"
              size="h2"
              weight="7"
            />
            <div>
              <Heading
                title={`and${space}`}
                color="white"
                size="h2"
                weight="7"
              />
              <Heading
                title="unlock operational"
                color="rainy-blue"
                size="h2"
                weight="7"
              />
            </div>

            <Heading
              title="excellence"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Revolutionize the way you manage workflows with EnKash—a comprehensive solution designed to simplify, automate, and optimize your business processes"
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
                url="https://home.enkash.com/signup?utm_source="
              />
            </div>
            <div>
              <SecondryButton
                title="Book a Demo"
                actionImage={whiteArrow}
                iconSize={15}
                url="/sales/?source="
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
              itemArray: ["Customization"],
              oldWayDescription:
                "Traditional systems used to offer limited flexibility, which made it difficult to adapt workflows to unique business needs or accommodate variations in the approval process and policy.",
              newWayDescription:
                "EnKash provides a high level of customization. Businesses can tailor approval workflows in the hierarchy. This adaptability ensures that the system aligns seamlessly with the organization's unique processes.",
            },
            {
              itemArray: ["Multi-branch", "Management"],
              oldWayDescription:
                "Earlier, managing the approval workflow with multiple locations and/or departments was difficult. There were a lot of gaps, such as excluding relevant stakeholders and a lack of control over cash flow.",
              newWayDescription:
                "With EnKash, easily streamline the approval workflow for multiple branches and departments, ensuring all stakeholders are included. Get visibility of every aspect of the workflow, giving control over cash flow and fostering accountability.",
            },

            {
              itemArray: ["Policies &", "Budgets"],
              oldWayDescription:
                "Enforcing spending policies was a cumbersome task, and tracking budget compliance was often challenging. Lack of real-time monitoring also led to overspending and policy violations.",
              newWayDescription:
                "EnKash automates policy enforcement and budget tracking. The system enables real-time monitoring and ensures adherence to budget constraints. This proactive approach minimizes the risk of overspending and policy non-compliance.",
            },
            {
              itemArray: ["Ease of Use"],
              oldWayDescription:
                "In the traditional approach, approval workflows often involved complex, manual processes. Users had to navigate through piles of paper-based invoices and manually route documents or bills for approval.",
              newWayDescription:
                "EnKash revolutionizes the approval workflow with an intuitive dashboard, enhancing the user experience. It not only automates the entire process but is also super easy to use, so there is no need for any complex training",
            },
            {
              itemArray: ["Collaboration"],
              oldWayDescription:
                "Before there were delays in payment approval due to prolonged communication lines and multiple decision-makers. Accessibility to approval workflows was also restricted, particularly beyond the office, impeding collaboration among remote team members.",
              newWayDescription:
                "EnKash streamlines the approval process by automating the routing of invoices to designated checkers. Utilizing a user-friendly dashboard, makers, and checkers can conveniently create, review, and approve payments, promoting collaboration across remote teams.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading
            title="Empower your business with"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}streamlined workflows`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>
        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Customizable Approval Hierarchies"
              description="Design workflows that suit your organizational hierarchy, delegate responsibilities across teams, and ensure each invoice reaches the right person for authorization"
              source=""
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <>
                  <Heading
                    title="Audit"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Trail"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </>
              }
              description="Easily trace the journey of every invoice from submission to final approval all within the dashboard, enabling you to foster trust and accountability within your organization and maintain a clear audit trail"
              source=""
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
              description="Take off the workload from your team by enabling them to approve multiple payments in one go"
              source=""
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <>
                  <Heading
                    title="Real-time"
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
                </>
              }
              description="Gain real-time insights and enhance transparency by tracking all the invoice approvals, and payment status in a centralized location"
              source=""
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <>
                  <Heading
                    title="Fraud"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Detection"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </>
              }
              description="Get a comprehensive overview of all transactions, effortlessly detect duplicate invoices, and promptly flag suspicious transactions, enhancing security and significantly mitigating the risk of fraud"
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
                <div className="d-inline">
                  <Heading
                    title="Simplify, automate, and optimize"
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />

                  <Heading
                    title={`${space}with EnKash solutions`}
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
            title="Don't worry! Our FAQs section will help you learn about workflow management in detail"
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
          title="Seeking further understanding about workflow management?"
          description="Workflow management is a defined and automated sequence of steps and processes that a document, request, or transaction follows within an organization to obtain necessary approvals. The purpose of an approval workflow is to streamline and standardize the approval process, ensuring that documents move through the necessary channels and are authorized by the appropriate individuals."
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
                  title=" Does workflow management help prevent fraud?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Yes, workflow management, especially with EnKash, helps prevent fraud by providing comprehensive transaction overviews, enabling the checker to detect duplicate invoices or incorrect amounts, and flagging suspicious activities promptly."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How to save time with workflow automation management?"
                />
              </div>
              <div className="mb-5">
                <p>
                  EnKash workflow management allows you to save time by
                  automating the approval process for business payments. Users
                  can{" "}
                  <Link href="https://www.enkash.com/olympus/payables/invoice-management/">
                    quickly upload invoices digitally
                  </Link>
                  , and automate the routing of invoices with pre-set
                  preferences, allowing for swift approvals.
                </p>
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Why EnKash workflow management is important for your business?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="EnKash workflow management is important for businesses as it revolutionizes the approval workflow with an intuitive dashboard, making the process easy to use and highly efficient. It enables customization, ensures compliance with policies, provides real-time tracking, and fosters collaboration among remote team members."
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

export default workflowManagement;
