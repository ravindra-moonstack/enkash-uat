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
import Footer from "@/components/footer/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customise Payment Page: Accept Payments with Payment Page | EnKash",
  description:
    "Customise Payment Pages and send different versions of the same Payment Page to different customers. Book Demo now !!",
};

const eNach = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <Header utmSource="receivables" />
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
            <div>
              <Heading
                title="Customized Payment"
                size="h4"
                weight="4"
                useH1TagInHtml={true}
              />
              <sup className="sup-symbol">#</sup>
            </div>
          </div>
          <div className="d-flex flex-column">
            <Heading
              title="Collect payments from"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <div>
              <Heading
                title="customers"
                color="rainy-blue"
                size="h2"
                weight="7"
              />
              <Heading
                title={`${space}with a`}
                color="white"
                size="h2"
                weight="7"
              />
            </div>

            <Heading
              title="customized payment page"
              size="h2"
              color="white"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Accept payments with automated payment receipts, customized branding, and zero coding"
              size="h6"
              weight="5"
            />
          </div>
          <div className="my-5 d-flex flex-row justify-content-start align-items-center">
            <div className="me-2">
              <PrimaryButton
                title="EnKash Now"
                theme="blue"
                url="https://home.enkash.com/signup?utm_source=receivables"
              />
            </div>
            <div>
              <SecondryButton
                title="Get Free Demo"
                actionImage={whiteArrow}
                iconSize={15}
                url="/sales/?source=receivables"
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
              itemArray: ["Lack of", "Personalization"],
              oldWayDescription:
                "The traditional payment pages are basic and lack any kind of personalization giving no value to the customer experience.",
              newWayDescription:
                "With EnKash, businesses can customize their payment pages with their brand standards and give a personalized feel to customers making them feel valued.",
            },
            {
              itemArray: ["Technical", "Integration & Cost"],
              oldWayDescription:
                "Businesses had to invest in resources to integrate payment pages. Technical integration is usually complicated and time-taking.",
              newWayDescription:
                "EnKash payment pages require no integration. Businesses can go online with minimal integration and tech efforts. We create and operate for you.",
            },
            {
              itemArray: ["Hassle-free", "payments"],
              oldWayDescription:
                "Conventional businesses lack security and do not accept payments from multiple modes.",
              newWayDescription:
                "Businesses can securely accept payments from a wide range of payment methods and send automated receipts.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading title="Create your" color="black" size="h1" weight="6" />
          <Heading
            title={`${space}custom-branded payment page`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Minimal Integration"
              description="Businesses can easily create their customized payment page with payment gateways to collect payments online with negligible technical integration. Both one-time and recurring payments can be collected with these payment pages."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Multiple Payment Pages"
              description="Enterprises can create multiple payment pages for each type of transaction. For instance, one payment page can be created for a charity and one for collection from customers."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Security"
              description="EnKash does not store your customer card details. This information can only be seen by the customer, the payment gateway, and the bank. This ensures data security."
              source="receivables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Customize Your Brand"
              source="receivables"
              description="Businesses can customize their payment page as per their requirements and give their customer a seamless experience."
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Automated Receipts"
              description="Send automated receipts to customers on payment confirmation without any manual intervention."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Custom Fields"
              description="Businesses can customize their payment page by modifying fields to collect information relevant to them."
              source="receivables"
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
                    title={`Payment pages that align with your${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="business requirements"
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
          title="Learn how virtual accounts can revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about e-Nach in detail"
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
          title="Seeking further understanding of customized payment page?"
          description="Businesses can create customized payment pages for their customers and collect payments from them. These payments can be easily incorporated into business websites and functioning can start instantly."
          source="receivables"
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
                  title="What is EnKash's customized payment page?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="EnKash provides customized payment pages to businesses to collect their payments from customers for across different business models."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How can I customize the payment pages to reflect my brand's identity professionally?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Brand colors, fonts, and logos can be incorporated into payment pages to align with the brand’s identity."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Can I add custom fields or additional information on the payment pages to gather specific customer data?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Yes, businesses can add or modify custom fields as per their requirements and gather information beneficial to them."
                />
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="receivables" />
    </div>
  );
};

export default eNach;
