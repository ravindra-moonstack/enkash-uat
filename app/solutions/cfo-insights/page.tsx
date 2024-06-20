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

export const metadata: Metadata = {
  title:
    "CFO Insights: Empowers CFOs with Approval Workflows & Admin Controls - EnKash",
  description:
    "EnKash - The Freedom platform enables CFOs to automate tasks and make data-backed, controlled, and informed decisions through curated information.",
  alternates: {
    canonical: "https://www.enkash.com/solutions/cfo-insights/",
  },
};

const CfoSuite = () => {
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
              title="CFO Insights"
              size="h4"
              weight="4"
              useH1TagInHtml={true}
            />
          </div>
          <div className="d-flex flex-column">
            <Heading
              title={`Leverage our CFO Insights`}
              color="rainy-blue"
              size="h2"
              weight="7"
            />

            <Heading
              title={`and make smart business`}
              color="white"
              size="h2"
              weight="7"
            />
            <Heading title={`decisions`} color="white" size="h2" weight="7" />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="As a CFO, automate tasks and make data-backed decisions with our comprehensive suite, providing curated information for controlled and informed decision-making"
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
              itemArray: ["Collaboration"],
              oldWayDescription:
                "Traditional methods involved manual processes and siloed data, hindering collaboration between CFOs, finance teams and other departments.",
              newWayDescription:
                "EnKash provides a centralized dashboard helping to foster enhanced collaboration and communication across people and departments.",
            },
            {
              itemArray: ["Control and", "Compliance"],
              oldWayDescription:
                "Required multiple tools for business spend control, making policy compliance difficult.",
              newWayDescription:
                "Customizable automated workflows and spending controls ensure policy compliance, reducing unauthorized expenses.",
            },
            {
              itemArray: ["Real-time ", "Insights"],
              oldWayDescription:
                "Had to wait for quarterly reports to access data, hindering timely decision-making.",
              newWayDescription:
                "Access to real-time data supports informed financial decisions and resource optimization.",
            },
            {
              itemArray: ["Cost ", "Reduction"],
              oldWayDescription:
                "Traditionally, businesses had to employ a large finance team to manage and track business spends.",
              newWayDescription:
                "EnKash enables you to easily set limits and control spending categories to align budgets with financial goals, all in one dashboard.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading
            title={`Empower CFOs${space}`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
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
              whiteTitle="Policy Adherence"
              description="CFO Admin controls make it simple to enforce expense policies, ensuring adherence and budget compliance"
              source=""
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Operational Efficiency"
              description="Streamlined processes reduce administrative overhead, allowing CFOs to allocate resources more efficiently"
              source=""
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Tracking & Reporting"
              description="Daily reports and alerts enable CFOs to maintain a detailed overview of spending, enhancing budget management"
              source=""
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Scalable Solutions"
              description="Virtual and physical card ecosystems can seamlessly adapt to company growth and financial needs"
              source=""
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Cost Optimization"
              description="CFOs can fine-tune spending to align with financial goals and eliminate unnecessary costs"
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
                      title="Explore our&nbsp;"
                      color="white"
                      size="h1"
                      weight="6"
                    />
                    <Heading
                      title="feature-rich CFO Insights"
                      color="rainy-blue"
                      size="h1"
                      weight="6"
                    />
                  </div>
                  <Heading
                    title="for streamlined finance"
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
            title="Don't worry! Our FAQs section will help you learn about CFO Insights in detail"
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
          title="Seeking further understanding of CFO Insights?"
          description='The "CFO Insights"  is designed specifically for Chief Financial Officers (CFOs). It aims to automate tasks, facilitate data-backed decision-making, and streamline financial processes within organizations. '
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
                  title="How do instant card management and spending controls contribute to fortified security?"
                />
              </div>
              <div className="mb-5">
                <p>
                  Instant card management and spending controls help CFOs
                  protect company assets and mitigate fraud risks, enhancing
                  overall security.
                </p>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How does the platform simplify policy compliance assurance?"
                />
              </div>
              <div className="mb-5">
                <p>
                  CFO admin controls make it simple to enforce expense policies,
                  ensuring adherence and budget compliance.
                </p>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="In what ways does the platform enhance operational efficiency for CFOs?"
                />
              </div>
              <div className="mb-5">
                <p>
                  Streamlined processes reduce administrative overhead, allowing
                  CFOs to allocate resources more efficiently, improving
                  operational efficiency.
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

export default CfoSuite;
