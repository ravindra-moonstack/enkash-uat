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
import { Metadata } from "next";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import FAQHtml from "./faq-html";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Link from "next/link";
import generateMetaData from "@/common/utils/metaData";
import StructuredData from "@/components/head/structuredData";

export const metadata: Metadata = generateMetaData({
  title: "Instant Card Management: Control your Card from Anywhere - EnKash",
  description:
    "Card Management Solution: EnKash enables real-time transaction monitoring and instant notifications so that you can take quick actions.",
  alternates: {
    canonical: "https://www.enkash.com/solutions/instant-card-management/",
  },
  faqData: faqData,
});

const InstantCardManagement = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/solutions/instant-card-management/`}
        faqData={faqData}
      />
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
              title="Instant Card Management"
              size="h4"
              weight="4"
              useH1TagInHtml={true}
            />
          </div>
          <div className="d-flex d-inline">
            <Heading
              title="Control your cards&nbsp;"
              color="rainy-blue"
              size="h2"
              weight="7"
            />

            <Heading title={`from`} color="white" size="h2" weight="7" />
          </div>
          <Heading
            title={`anywhere, anytime`}
            color="white"
            size="h2"
            weight="7"
          />

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Deactivate lost cards, manage access, and enjoy real-time security - all with a single click"
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
              itemArray: ["Response ", "Time"],
              oldWayDescription:
                "Delayed responses led to potential loss of funds and inconvenience.",
              newWayDescription:
                "Utilize instant card blocking for lost and stolen cards from your device, preventing unauthorized charges without waiting for customer support.",
            },
            {
              itemArray: ["Customer", "Support"],
              oldWayDescription:
                "Previously businesses had to wait for a long time to deactivate cards, especially during holidays or different time zones.",
              newWayDescription:
                "With EnKash, enjoy 24/7 control without relying on customer support, ensuring prompt action regardless of the time or day.",
            },
            {
              itemArray: ["Notification", "System"],
              oldWayDescription:
                "Earlier, there was no way to track transactions or get notifications/alerts in real-time.",
              newWayDescription:
                "EnKash enables real-time transaction monitoring and instant notifications so that you can take quick actions.",
            },
            {
              itemArray: ["Custom Access", "Controls"],
              oldWayDescription:
                "Lengthy process for methodological approval and no way to customize access levels for card management system.",
              newWayDescription:
                "Set tailored permissions for users or departments for card activation and deactivation based on your organization's unique needs.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading
            title={`Activate, deactivate and monitor -${space}`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading
            title="all in one place"
            color="black"
            size="h1"
            weight="6"
          />
        </div>
        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Physical Delivery"
              description="Eliminate the delay associated with physical card delivery; activate cards instantly, reducing downtime"
              source=""
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="User"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Controls"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Set access levels for users or departments to ensure only authorized personnel can manage cards"
              source=""
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Real-time"
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
              description="Receive instant notifications of card activity, allowing you to take action promptly"
              source=""
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Emergency Response"
              description="In the event of a security breach or compromised card, use instant card blocking to deactivate it immediately to prevent further unauthorized use"
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
                      title="Upgrade to a&nbsp;"
                      color="white"
                      size="h1"
                      weight="6"
                    />
                    <Heading
                      title="real-time card management"
                      color="rainy-blue"
                      size="h1"
                      weight="6"
                    />
                  </div>
                  <Heading title="system" color="white" size="h1" weight="6" />
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
            title="Don't worry! Our FAQs section will help you learn about instant card management in detail"
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
          title="Seeking further understanding of instant card management?"
          description="Instant Card Management solution is a system that allows businesses to manage their corporate cards like activating/deactivating, setting user controls, etc electronically within a single dashboard."
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
                  title="Can I customize the types of alerts I receive?"
                />
              </div>
              <div className="mb-5">
                <p>
                  Yes, you have the flexibility to customize your notification
                  settings, tailor alerts to match your preferences and stay
                  informed about specific card activities.
                </p>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How do I set access levels for different users or departments?"
                />
              </div>
              <div className="mb-5">
                <p>
                  Access controls are conveniently managed through your
                  account's card management solution section.
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

export default InstantCardManagement;
