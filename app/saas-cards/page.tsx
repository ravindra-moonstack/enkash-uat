import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../constant/common";
import faqData from "./faq-data";
import blogData from "./blog-data";
import carouselData from "./carousel-data";
import { carouselBg, faqBg, heroImage, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import EnkashWay from "@/components/enkash-way/enkash-way";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import FAQ from "@/components/faq/faq";
import MobileHeader from "@/components/header/mobile-header/mobile-header";
import WebHeader from "@/components/header/web-header";
import BlogWrapper from "@/components/blog/blog-wrapper/blog-wrapper";

const saas = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <div className="mobile-header">
        <MobileHeader />
      </div>
      <div className="desktop-header">{<WebHeader />}</div>
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5">
            <Heading
              title={`Freedom ${space}`}
              color="rainy-blue"
              size="h4"
              weight="7"
            />
            <Heading title="| SaaS" size="h4" weight="4" />
          </div>

          <div className="">
            <div className="d-flex flex-wrap">
              <Heading
                title="Simplified SaaS subscription management, now"
                color="white"
                size="h2"
                weight="7"
              />
              <Heading
                title={`at your fingertips`}
                color="rainy-blue"
                size="h2"
                weight="7"
              />
            </div>
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Manage all your SaaS subscriptions on a single platform. Enhance your spend strategies with actionable insights and smart controls."
              color="white"
              size="h6"
              weight="5"
            />
          </div>
          <div className="my-5 d-flex flex-row justify-content-start align-items-center">
            <div className="me-2">
              <PrimaryButton title="EnKash Now" theme="theme-blue" />
            </div>
            <div>
              <SecondryButton
                title="Book a Demo"
                actionImage={whiteArrow}
                iconSize={15}
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <Image
            src={heroImage}
            alt="reimbursement dashboard"
            className={styles.hero_image}
          />
        </div>
        <div className={styles.three_step_container}>
          <ThreeSteps />
        </div>
      </div>

      <div className={`${styles.second_row} row d-flex bg-white row-padding`}>
        <EnkashWay
          progressData={[
            {
              itemArray: ["Subscription", "Management"],
              oldWayDescription:
                "Multiple platforms to keep track of individual SaaS subscription renewal dates and spends causes confusion and amplifies the risk of missed payments.",
              newWayDescription:
                "Digitize the collection process with the help of automation tools, and improve your customer experience to quicken your collection process.",
            },
            {
              itemArray: ["Billing", "&", "Invoicing"],
              oldWayDescription:
                "Traditional methods take a lot of time and come with layers of red tape.",
              newWayDescription:
                "Utilize advanced solutions like OCR technology and approval systems to streamline the reimbursement procedure.",
            },
            {
              itemArray: ["Utility", "Analysis"],
              oldWayDescription:
                "Manual procedures are quite time-consuming and involve multiple levels of bureaucracy.",
              newWayDescription:
                "Leverage smart tools like OCR technology and approval matrices to automate the reimbursement process.",
            },
            {
              itemArray: ["Revenue", "Forecasting"],
              oldWayDescription:
                "When businesses generate paper invoices manually, the process is time-consuming, resource-intensive, and poses risks of errors or lost invoices.",
              newWayDescription:
                "EnKash generates and sends invoices automatically, which saves time and reduces the risk of human error. This means your teams can focus on other important tasks and improve their overall efficiency.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-flex justify-content-center text-center flex-wrap mb-5">
          <Heading
            title="Streamline your SaaS"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}subscription management with EnKash.`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Recurring Subscription"
              description="Manage all your recurring expenses on one platform with total visibility over your entire subscription spend. Track renewal dates, previous payments and get automated reminders about upcoming renewals."
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Greater Visibility"
              description="EnKash offers a seamless and rich experience with real-time visibility into your SaaS purchases, that’ll help you make better decisions for your business."
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Purchasing Insights"
              description="Improve your organization's performance by increasing your purchasing oversight, which also helps with reducing costs and streamlining your payment process."
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Full Control"
              description="EnKash provides easy monitoring, analysis, and control of corporate SaaS expenses, ensuring SaaS policy compliance within your organization."
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center d-flex justify-content-center flex-wrap">
                <Heading title={`Enjoy`} color="white" size="h1" weight="6" />
                <Heading
                  title={`${space}full control${space}`}
                  color="rainy-blue"
                  size="h1"
                  weight="6"
                />
                <Heading
                  title="over your SaaS subscriptions."
                  color="white"
                  size="h1"
                  weight="6"
                />
              </div>
            </>
          }
          mainTitle="How do Saas Subscriptions work?"
          carouselData={carouselData}
          carouselBg={carouselBg}
        />
      </div>

      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper blogData={blogData} title="Saas Insights" />
      </div>
      <div
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions ?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs section will help you learn about SaaS in detail."
            color="black"
            size="h4"
          />
        </div>

        <div>
          {faqData.map((item, index) => (
            <FAQ
              key={index}
              question={item.question}
              answer={item.answer}
              answerVisible={index === 0}
            />
          ))}
        </div>
        <div className={styles.faq_bg}>
          <Image src={faqBg} alt="background image" />x
        </div>
      </div>

      <div className={`${styles.sixth_row} row`}>
      <ContactUsCard
          title="Seeking further understanding of bill payments online?"
          description="Bill payments refer to those regularly occurring expenses that a business has. These could include utilities like electricity, water, and other regular payments you need to make on time to ensure your business operations continue uninterrupted."
        />      </div>
    </div>
  );
};

export default saas;
