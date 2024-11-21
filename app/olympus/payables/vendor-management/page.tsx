import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../../../common/constant";
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
import { Metadata } from "next";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import FAQHtml from "./faq-html";
import BlogWrapper from "@/components/blog/blog-wrapper";
import Footer from "@/components/footer/footer";
import Link from "next/link";
import generateMetaData from "@/common/utils/metaData";
import StructuredData from "@/components/head/structuredData";

export const metadata: Metadata = generateMetaData({
  title: "Best Vendor Management Platform for Businesses in India - EnKash",
  description:
    "Enhance Efficiency with EnKash Vendor Management platform: Discover how implementing a vendor management system can streamline operations, improve supplier relationships, and boost your business's overall success.",
  alternates: {
    canonical: "https://www.enkash.com/olympus/payables/vendor-management/",
  },
  faqData: faqData,
});

const vendorManagement = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/olympus/payables/vendor-management/`}
        faqData={faqData}
      />
      <Header utmSource="payables" />
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
            <Heading
              title="Vendor Management"
              size="h4"
              weight="4"
              useH1TagInHtml={true}
            />
          </div>

          <div className="d-flex flex-column">
            <div>
              <Heading
                title="Streamline your"
                color="white"
                size="h2"
                weight="7"
              />
              <Heading
                title={`${space}vendor`}
                color="rainy-blue"
                size="h2"
                weight="7"
              />
            </div>

            <div>
              <Heading
                title={`management${space}`}
                color="rainy-blue"
                size="h2"
                weight="7"
              />
              <Heading title="with ease" color="white" size="h2" weight="7" />
            </div>
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Redefine your vendor management strategy with advanced features. Centralize vendor data, streamline onboarding, and guarantee timely payments for better relationships"
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
                url="/sales/?source=payables"
              />
            </div>
            <div>
              <SecondryButton
                title="Get Free Demo"
                actionImage={whiteArrow}
                iconSize={15}
                url="/sales/?source=payables"
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
              itemArray: ["Vendor", "Data"],
              oldWayDescription:
                "Manually entered and unverified details, leading to inconsistent data which causes inefficiencies.",
              newWayDescription:
                "Centralized platform with a unified repository for all vendor-related information, ensuring accuracy and easy access.",
            },
            {
              itemArray: ["Verification", "Process"],
              oldWayDescription:
                "Extensive, manual verification processes that used to involve multiple people, plenty of paperwork, and back-and-forth communication.",
              newWayDescription:
                "Streamlined verification process through automation, collect and verify essential information about your vendors or suppliers instantly with vendor eKYC.",
            },
            {
              itemArray: ["Visibility"],
              oldWayDescription:
                "Difficult to track invoices and expenses. There was no visibility of spending patterns and historical data, which led to a lack of strategic insights while making decisions.",
              newWayDescription:
                "Real-time insights into all vendor-related data.  Transparent dashboards and reports on spend patterns, and compliance enabling cost optimization and data-driven decision making.",
            },
            {
              itemArray: ["Workflows"],
              oldWayDescription:
                "Getting payment approvals for vendor payments was very hectic, requiring numerous email follow-ups with the manager.",
              newWayDescription:
                "With EnKash, you can automate your payment approvals by setting up a customized maker-checker workflow, wherein you can directly send the pending invoices to the manager for approval.",
            },
            {
              itemArray: ["Collaboration"],
              oldWayDescription:
                "There were limited collaboration tools, often relying on email communication and manual updates.",
              newWayDescription:
                "Integrated collaboration features, enabling seamless communication among teams involved in vendor management. Shared dashboards and updates enhance team coordination & decision-making.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-2">
          <Heading
            title="Enhance vendor relationships with"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}better features`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>
        <div className="d-flex justify-content-center text-center mb-5"></div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Vendor Onboarding"
              description="Easily add multiple vendors on the platform by providing basic details like their name, email, phone number, PAN, GST, and bank account"
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Invoicing"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Process"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Upload single or bulk invoices in the dashboard and effortlessly manage and process them in a centralized system, ensuring a streamlined workflow"
              source="payables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Advance Payments"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Facilitate advance payments with the “Add Advance” option to give payment upfront as and when needed"
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Payment"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Management"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Streamline the entire payment process, from approval to execution, and get flexible payment modes 
              like NEFT, IMPS, RTGS, UPI, debit cards virtual cards, and more to ensure timely payment"
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Tracking and Reporting"
              description="Gain real-time insights into spending patterns, track expenses, and generate comprehensive reports for informed decision-making"
              source="payables"
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
                    title={`One platform for effortless${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="collaboration and cost control"
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
          title="Learn how our vendor management can revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about vendor management in detail"
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
          title="Seeking further understanding of vendor management?"
          description="Vendor management involves overseeing relationships with external suppliers, ensuring efficient collaboration, and monitoring performance to optimize operational processes and control costs. It aims to foster positive and productive partnerships between a company and its vendors."
          source="payables"
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
                  title="What are the benefits of a vendor management system?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Benefits of using EnKash vendor management system:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Streamlined Operations: EnKash centralizes vendor data,
                    onboarding, invoicing, and payments, eliminating manual
                    processes and saving time
                  </li>
                  <li>
                    Improved Cost Efficiency: Gain real-time insights into
                    spending patterns, and identify discounts and early payment
                    opportunities
                  </li>
                  <li>
                    Enhanced Transparency and Compliance: Ensure accuracy and
                    consistency in vendor data, and maintain complete audit
                    trails
                  </li>
                  <li>
                    Reduced Risks and Fraud:{" "}
                    <Link
                      href="https://www.enkash.com/resources/blog/enhance-productivity-with-vendor-payment-automation/"
                      target="_blank"
                    >
                      Automate vendor verification
                    </Link>{" "}
                    through eKYC to minimize the risk of fraudulent activity
                  </li>
                  <li>
                    Stronger Vendor Relationships: Improve communication and
                    collaboration with vendors through integrated dashboards and
                    shared updates, fostering trust and transparency
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Is vendor management a part of ITIL?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Yes, vendor management is a crucial component of ITIL (Information Technology Infrastructure Library) practices, ensuring effective management of external service providers."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Who is responsible for vendor management?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Vendor management is a collaborative effort involving various stakeholders, with responsibility often falling on procurement, supply chain, or vendor management teams."
                />
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="payables" />
    </div>
  );
};

export default vendorManagement;
