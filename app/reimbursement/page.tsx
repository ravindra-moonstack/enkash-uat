import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../constant/common";
import faqData from "./faqData";
import blogData from "./blog-data";
import carouselData from "./carouselData";
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

const reimbursement = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <div className="mobile-header">
        <MobileHeader />
      </div>
      <div className="desktop-header">{<WebHeader />}</div>
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div className="d-flex">
              <Heading title="X" color="rainy-blue" size="h4" weight="7" />
              <Heading
                title={`penz ${space}`}
                color="white"
                size="h4"
                weight="7"
              />
            </div>

            <Heading title="| Reimbursements" size="h4" weight="4" />
          </div>

          <div className="">
            <div className="d-flex flex-wrap">
              <Heading title="EnKash" color="white" size="h2" weight="7" />
              <Heading
                title="minimizes distractions,"
                color="rainy-blue"
                size="h2"
                weight="7"
              />
              <Heading
                title={`so that${space}`}
                color="white"
                size="h2"
                weight="7"
              />
              <Heading
                title="you can take action."
                color="rainy-blue"
                size="h2"
                weight="7"
              />
            </div>
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Maximize productivity within your organization with an easier reimbursement system that helps you track, process and sync data in real-time."
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
              itemArray: ["Process"],
              oldWayDescription:
                "Manual procedures are quite time-consuming and involve multiple levels of bureaucracy.",
              newWayDescription:
                "Leverage smart tools like OCR technology and approval matrices to automate the reimbursement process.",
            },
            {
              itemArray: ["Timelines"],
              oldWayDescription:
                "Traditional methods take a lot of time and come with layers of red tape.",
              newWayDescription:
                "Utilize advanced solutions like OCR technology and approval systems to streamline the reimbursement procedure.",
            },
            {
              itemArray: ["Spend", "Visibility"],
              oldWayDescription:
                "When businesses generate paper invoices manually, the process is time-consuming, resource-intensive, and poses risks of errors or lost invoices.",
              newWayDescription:
                "EnKash generates and sends invoices automatically, which saves time and reduces the risk of human error. This means your teams can focus on other important tasks and improve their overall efficiency.",
            },
            {
              itemArray: ["Tax", "Compliance"],
              oldWayDescription:
                "Manually keeping track of receivables and following-up with customers for payments can take up a lot of your collection team's bandwidth, slowing down the collection process.",
              newWayDescription:
                "Digitize the collection process with the help of automation tools and improve your customer experience to quicken your collection process.",
            },
            {
              itemArray: ["Budgets", "&", "Policies"],
              oldWayDescription:
                "Without a payment link, customers need to manually enter payment information or visit a physical location to make a payment, which is prone to errors and delays.",
              newWayDescription:
                "Payment links provide a quick and easy way for customers to make payments. They can simply click on the link and enter their details to complete the payment.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-flex justify-content-center text-center flex-wrap mb-5">
          <Heading
            title="Streamline Your Reimbursement Process"
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}with Automated Solutions.`}
            color="black"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Automated Processes"
              description="A digitized end-to-end solution, automate checking, approvals, invoice generation and submission to ensure speed and accuracy."
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Better Documentation"
              description="Ensure employee compliance with easy-to-use capture modes which captures payments made on behalf of the business in a few simple steps"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Real time tracking"
              description="Track spends made on behalf of the business by employees in real time."
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Correct Entries"
              description="Automated reimbursement procedures eliminate the scope for delayed or incorrect data entries."
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center d-flex justify-content-center flex-wrap">
                <Heading
                  title={`EnKash Makes Your Business${space}`}
                  color="white"
                  size="h1"
                  weight="6"
                />
                <Heading
                  title="Reimbursement Process Effortless."
                  color="rainy-blue"
                  size="h1"
                  weight="6"
                />
              </div>
            </>
          }
          mainTitle="How do Reimbursements work?"
          carouselData={carouselData}
          carouselBg={carouselBg}
        />
      </div>
      <div className="row bg-white row-padding text-center">
        <BlogWrapper blogData={blogData} title="Reimbursement Insights" />
      </div>
      <div
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions ?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs section will help you learn about Reimbursements in detail."
            color="black"
            size="h4"
          />
        </div>

        <div>
          {faqData.map((item, index) => (
            <FAQ key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
        <div className={styles.faq_bg}>
          <Image src={faqBg} alt="background image" />x
        </div>
      </div>

      <div className={`${styles.sixth_row} row`}>
        <ContactUsCard />
      </div>
    </div>
  );
};

export default reimbursement;
