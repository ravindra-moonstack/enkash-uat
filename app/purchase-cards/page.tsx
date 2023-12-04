import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../constant/common";
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
import MobileHeader from "@/components/header/mobile-header/mobile-header";
import WebHeader from "@/components/header/web-header";
import BlogWrapper from "@/components/blog/blog-wrapper/blog-wrapper";
import { Metadata } from "next";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";

export const metadata: Metadata = {
  title: "Purchase Cards | Benefits of P Cards for Businesses  - EnKash",
  description:
    "Purchasing cards allow employees to quickly and efficiently buy what they need, and automatically record all transactions.",
};

const purchaseCard = () => {
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
              <Heading
                title={`Freedom |${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
            <Heading title="Purchase Cards" size="h4" weight="4" />
          </div>
          <div className="d-flex flex-column">
            <Heading
              title="Manage business"
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="procurement costs with"
              color="white"
              size="h2"
              weight="7"
            />
            <div>
              <Heading
                title={`smart and${space}`}
                color="white"
                size="h2"
                weight="7"
              />
              <Heading
                title={`easy-to-use${space}`}
                color="rainy-blue"
                size="h2"
                weight="7"
              />
              <Heading
                title="purchase cards"
                color="white"
                size="h2"
                weight="7"
              />
            </div>
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Get your business a purchase card with a pre-defined limit and approvals for procurement purposes"
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
              itemArray: ["Procurement", "Process"],
              oldWayDescription:
                "The procurement process is time-consuming because it often involves a lot of paperwork, including purchase requisitions, purchase orders, and invoices.",
              newWayDescription:
                "Purchase cards make the procurement process faster and more efficient, with fewer paperwork and approval requirements.",
            },
            {
              itemArray: ["Spends", "Control"],
              oldWayDescription:
                "Limited control makes it difficult for organizations to monitor and control spending.",
              newWayDescription:
                "Purchase cards allow organizations to better monitor and control spending with real-time transaction tracking and preset spending limits.",
            },
            {
              itemArray: ["Procurement", "Cost"],
              oldWayDescription:
                "The traditional procurement process required more administrative resources, which led to higher costs.",
              newWayDescription:
                "With less paperwork and streamlined processes, procurement and expense management costs can be reduced.",
            },
            {
              itemArray: ["Risk of", "Fraud"],
              oldWayDescription:
                "With manual processes and less oversight, there is a higher risk of fraudulent purchases or misuse of company funds.",
              newWayDescription:
                "P-cards provide greater visibility and control over spending, reducing the risk of fraud or misuse of company funds.",
            },
            {
              itemArray: ["Payment", "Cycles"],
              oldWayDescription:
                "The traditional procurement process often involves longer payment cycles, which could impact cash flow and vendor relationships.",
              newWayDescription:
                "Purchase credit cards speed up payment cycles, which helps to maintain positive vendor relationships and improve cash flow.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-flex flex-column text-center mb-5">
          <Heading
            title="Smoothen your business expenses with"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title="purchase cards from EnKash"
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="
              Streamlined Procurement"
              description="Purchase credit cards can simplify your procurement process, allowing authorized employees to quickly and easily purchase goods and services"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle=" Increased Control"
              description="Purchase cards provide greater visibility and control over spending, allowing your business to manage expenses better and prevent fraud"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Better Reporting"
              description="Purchase cards often provide detailed reporting and analytics, allowing you to identify spending trends and areas of cost savings"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="No Dependency"
              description="With purchase cards, the authorized individual does not have to depend on the finance team for business-related expenses and can make decisions if the expense is aligned with company policies"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <div className="d-flex">
                  <Heading
                    title="Optimize business procurement process with purchase cards"
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                </div>
              </div>
            </>
          }
          mainTitle="How does purchase cards work?"
          carouselData={carouselData}
          carouselBg={caraouselBg}
        />
      </div>
      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how Fuel Cards offer a host of benefits for your business and employees!"
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
            title="Don't worry! Our FAQs Section will Help you Learn about Purchase Cards in detail"
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
          title="Seeking further understanding of purchase cards?"
          description="Purchase cards make the business procurement process accessible, convenient, and manageable. Businesses can use these cards to streamline the process of purchasing"
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
                  title="What types of purchases can be made with a purchase card?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Most goods and services, including office supplies and minor equipment purchases, can be purchased using a purchase card. However, depending on the organization's policies, some restrictions may exist"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How are disputes or issues with purchase card transactions resolved?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="If there are disputes or issues with a purchase card transaction, the employee who made the purchase should contact the company's finance or procurement department for assistance. The department can work with the card issuer to resolve the issue and ensure the transaction is properly recorded and documented"
                />
              </div>
            </>
          }
        />
      </div>
    </div>
  );
};

export default purchaseCard;
