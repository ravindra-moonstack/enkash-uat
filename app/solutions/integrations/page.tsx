import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../../common/constant";
import faqData from "./faq-data";
import blogData from "./blog-data";
import carouselData from "./carousel-data";
import { banner, caraouselBg, faqBg, whiteArrow } from ".";
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
import generateMetaData from "@/common/utils/metaData";

export const metadata: Metadata = generateMetaData({
  title: "Integrating Business Systems with Automated Workflows - EnKash",
  description:
    "With integrations, operational tasks in business can be automated bringing efficiency to the system. Integrations help streamline business processes.",
  alternates: {
    canonical: "https://www.enkash.com/solutions/integrations/",
  },
  faqData: faqData,
});

const Integrations = () => {
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
              title="Integrations"
              size="h4"
              weight="4"
              useH1TagInHtml={true}
            />
          </div>
          <div className="d-flex flex-column">
            <Heading
              title={`Make business`}
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <div>
              <Heading
                title={`processes`}
                color="rainy-blue"
                size="h2"
                weight="7"
              />
              <Heading
                title={`${space}smooth with`}
                color="white"
                size="h2"
                weight="7"
              />
            </div>
            <Heading
              title="integrations"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="From managing business accounts payable and receivables to expense management, integrate your existing business systems to improve efficiency"
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
            <LottieClientComponent animationData={banner} loop={true} />
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
              itemArray: ["B2B & Utility", "Payments"],
              oldWayDescription:
                "Businesses had to manually generate invoices for all business-related payments with limited options like cheques and bank transfers. This often leads to delayed reconciliation.",
              newWayDescription:
                "Businesses can integrate their accounting softwares with EnKash for invoice syncing and flexible payment options. It also helps enable automated reconciliation which takes place in real-time.",
            },
            {
              itemArray: ["Expense", "Management"],
              oldWayDescription:
                "Employee expense management is paper-based in a traditional business setup. It includes manual approval and reimbursement without any transparency in the workflow.",
              newWayDescription:
                "Businesses can seamlessly manage their employee expenses by automating with EnKash. The system can help streamline their approval flow and provide real-time data for better finance management.",
            },

            {
              itemArray: ["Employee", "  R&R"],
              oldWayDescription:
                "The conventional methods of employee R&R are complex, tedious, and give limited options. There is a lack of personalization which dismisses the motive of the program.",
              newWayDescription:
                "Enterprises can integrate their business with EnKash for a smooth R&R structure where they can customize it as per their needs. The reward system has multiple options and can be personalized as per the occasion.",
            },
            {
              itemArray: ["Corporate Card", "Management"],
              oldWayDescription:
                "The traditional way of managing cards doesn’t allow you to control spends. Real-time tracking and reconciliation are not possible due to the absence of data.",
              newWayDescription:
                "Businesses integrate with EnKash to monitor their spends in real-time and define limits for each department and category aligning with the company budget and company policies.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading
            title={`Enhance business processes${space}`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading
            title="with integrations"
            color="black"
            size="h1"
            weight="6"
          />
        </div>
        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Real-Time Sync"
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title=" Multiple Systems"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Integration"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Businesses can integrate their existing systems for payments across businesses, managing their employee expenses, business card management, and rewards programs."
              source=""
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Real-Time Updates"
              description="Integrations enable real-time data exchange between systems, ensuring accurate and updated information."
              source=""
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Scalability"
              description="With EnKash, integration capabilities can be scaled as and when the business expands."
              source=""
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="API Integration"
              description="Businesses can integrate from a host of APIs as per their requirements ensuring they get the functionality that will enhance their business."
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
                  <div>
                    <Heading
                      title="Business integrations "
                      color="rainy-blue"
                      size="h1"
                      weight="6"
                    />
                    <Heading
                      title={"made easy"}
                      color="white"
                      size="h1"
                      weight="6"
                    />
                  </div>
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
            title="Don't worry! Our FAQs section will help you learn about integrations in detail"
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
          title="Seeking further understanding of integrations?"
          description="Integrations in business help improve overall efficiency by enabling different systems to communicate and share information for operations."
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
                  title="What is the role of APIs in business integrations?"
                />
              </div>
              <div className="mb-5">
                <p>
                  APIs are the software interface that allows two applications
                  to communicate with each other. They enable data sharing in a
                  secure and standardized manner.
                </p>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How to ensure data security in integrated systems?"
                />
              </div>
              <div className="mb-5">
                <p>
                  Businesses should implement encryption, secure their
                  authentication methods, and do regular security audits to keep
                  a check on security in integrated systems.
                </p>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Which factors should businesses consider when choosing integration solutions?"
                />
              </div>
              <div className="mb-5">
                <p>
                  When looking for an integration solution, businesses should
                  consider factors like business requirements, compatibility
                  with existing systems, functionality coverage, scalability,
                  and vendor support.
                </p>
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="" />
    </div>
  );
};

export default Integrations;
