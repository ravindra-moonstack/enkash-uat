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
    "What is API integrations? | Empower your Business with Powerful API - EnKash",
  description:
    "EnKash API integrations support a wide range of platforms, enabling seamless connectivity and data exchange between various business systems and applications.",
  alternates: {
    canonical: "https://www.enkash.com/solutions/automated-reconciliation/",
  },
};

const apiAndModules = () => {
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
              title="APIs & Modules"
              size="h4"
              weight="4"
              useH1TagInHtml={true}
            />
          </div>
          <div className="d-flex flex-column">
            <Heading
              title="Connect, integrate, and"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <div>
              <Heading title="innovate" color="white" size="h2" weight="7" />
              <Heading
                title={`${space}with our`}
                color="rainy-blue"
                size="h2"
                weight="7"
              />
            </div>
            <Heading title="powerful APIs" color="white" size="h2" weight="7" />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Empower your business with our suite of robust APIs and customizable modules designed to connect your existing platforms and unlock a world of data-driven possibilities"
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
            <Image src={banner} alt="banner image" />
            {/* <LottieClientComponent animationData={bannerLottie} loop={true} /> */}
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
              itemArray: ["Business", "Payments"],
              oldWayDescription:
                "Traditionally, making business payments involved hassles like manually generating invoices, chasing approvals, etc. Payment options were limited to cheques/bank transfers, with slow reconciliation.",
              newWayDescription:
                "Streamline business payments with our powerful APIs, and get flexible options for vendor, rental, utility payments, etc. Benefit from automated reconciliation, real-time tracking, and reporting—all in one platform.",
            },
            {
              itemArray: ["Expense", "Management"],
              oldWayDescription:
                "Expense claims used to be paper-based and required manual submission, approvals, and reimbursements. Plus there was no visibility into spending patterns.",
              newWayDescription:
                "Effortlessly capture, submit, and track expenses on the go with our expense management API. Enjoy features like OCR, policies & approval flow, etc., and gain real-time visibility through smart analytics.",
            },

            {
              itemArray: ["Rewards &", " Recognition"],
              oldWayDescription:
                "Rewards programs used to be complex and time-consuming to administer with limited options like cash/gift cards lacking the touch of personalization, ultimately resulting in limited impact on employee motivation.",
              newWayDescription:
                "With EnKash, businesses can customize rewards programs with various tiers, point structures, and redemption options. And boost employee morale with a range of rewards like gift cards, brand vouchers, discounts, etc.",
            },
            {
              itemArray: ["Card", "Management"],
              oldWayDescription:
                "Earlier businesses had no way to control card spends or limit usage,  and they also faced difficulty in tracking and reconciliation of expenses due to a lack of real-time data.",
              newWayDescription:
                "Our robust APIs simplify card management, allowing businesses to monitor spending in real-time, set department-wise limits, and manage categories to align with corporate policies and budgets.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading
            title={`Accelerate growth${space}`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading
            title="with advanced API integrations"
            color="black"
            size="h1"
            weight="6"
          />
        </div>
        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Module Integration"
              description="Choose specific modules such as vendor payment, expense management, card issuance,
              onboarding journey, etc., and seamlessly integrate them into your existing systems"
              source=""
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Real-Time Sync"
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Real-Time"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Sync"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Experience instant data synchronization across multiple platforms, ensuring that crucial information is always up-to-date and accessible when you need it"
              source=""
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Open API Architecture"
              description="Our open API architecture empowers businesses to easily access and integrate our solutions into their workflows, accelerating the implementation process"
              source=""
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Customized API Solutions"
              description="Tailor our APIs to fit your unique business requirements, ensuring that you get the functionality you need without unnecessary complexity"
              source=""
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Complete Security"
              description="EnKash’s robust infrastructure and adherence to industry-leading security standards ensure complete protection of data between platforms end-to-end"
              source=""
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Server"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="SDKs"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Seamlessly integrate into your existing systems with our readily available SDKs, supporting various programming languages. And ensure quick & hassle-free integration"
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
                      title="Access open APIs & easily"
                      color="rainy-blue"
                      size="h1"
                      weight="6"
                    />
                  </div>

                  <Heading
                    title="customize solutions as per need"
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
            title="Don't worry! Our FAQs section will help you learn about APIs and modules in detail"
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
          title="Seeking further understanding about our APIs & modules?"
          description="APIs (Application Programming Interfaces) and modules are integral components of software development that facilitate connectivity, integration, and customization within and between different systems and platforms."
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
                  title="How to integrate API on my website? "
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Integrating APIs into your website involves several steps:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Obtain API credentials or access keys from the provider
                  </li>
                  <li>
                    Choose the appropriate API endpoint and method for your
                    desired functionality
                  </li>
                  <li>
                    Implement the API call within your website's codebase using
                    the preferred programming language or framework
                  </li>
                  <li>
                    Test the API integration thoroughly in our sandbox
                    environment to ensure functionality and compatibility
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Which platforms are supported by EnKash API integration services?"
                />
              </div>
              <div className="mb-5">
                <p>
                  EnKash’s API integration services support a wide range of
                  platforms, enabling seamless connectivity and sync between
                  various business systems and applications. Some common
                  platforms supported include ERP (Enterprise Resource Planning)
                  systems,{" "}
                  <Link
                    href="https://www.enkash.com/resources/blog/best-accounting-software-india/"
                    target="_blank"
                  >
                    accounting software,
                  </Link>{" "}
                  and more. For specific platform compatibility, please contact
                  our support team for assistance.
                </p>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Why does your business need API integration?"
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="API integration is essential for businesses seeking to:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Enhance operational efficiency by automating processes and
                    facilitating seamless data exchange between systems
                  </li>
                  <li>
                    Unlock new functionalities and services by integrating with
                    third-party platforms and services
                  </li>
                  <li>
                    Improve customer experiences by providing access to
                    real-time information and personalized services
                  </li>
                  <li>
                    Stay competitive in a rapidly evolving digital landscape by
                    leveraging the latest technologies and innovations
                  </li>
                </ul>
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="" />
    </div>
  );
};

export default apiAndModules;
