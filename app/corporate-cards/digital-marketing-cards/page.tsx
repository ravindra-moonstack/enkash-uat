import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../../common/constant";
import faqData from "./faq-data";
import carouselData from "./carousel-data";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import EnkashWay from "@/components/enkash-way/enkash-way";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import { Metadata } from "next";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import Link from "next/link";
import FAQHtml from "./faq-html";
import Header from "@/components/header/header";
import BlogWrapper from "@/components/blog/blog-wrapper";
import blogData from "./blog-data";
import Footer from "@/components/footer/footer";
import generateMetaData, {
  generateBreadcrumbSchema,
  generateFaqSchema,
} from "@/common/utils/metaData";
import Head from "next/head";

export const metadata: Metadata = generateMetaData({
  title:
    "Digital Marketing Corporate Card for Businesses | Corporate Card for Ad Spend- EnKash",
  description:
    "Digital marketing Corporate card is a specialized financial tool designed to streamline and enhance the management of digital marketing expenses. It empowers businesses to centralize their spending, set customized limits, and control their budget effectively",
  alternates: {
    canonical:
      "https://www.enkash.com/corporate-cards/digital-marketing-cards/",
  },
  faqData: faqData,
});

const digitalMarketingCard = () => {
  const breadcrumbSchema = generateBreadcrumbSchema(
    "https://www.enkash.com/corporate-cards/digital-marketing-cards/"
  );
  const faqSchema = generateFaqSchema(faqData);
  console.log(breadcrumbSchema);
  console.log(faqSchema);
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      <Header utmSource="corporate_cards" />

      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div className="d-flex">
              <Heading
                title={`Corporate Cards |${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
            <Heading
              title="Digital Marketing Cards"
              size="h4"
              weight="4"
              useH1TagInHtml={true}
            />
          </div>
          <div className="d-flex flex-column">
            <Heading
              title={`Your go-to card for all${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <div>
              <Heading
                title={`digital marketing${space}`}
                color="rainy-blue"
                size="h2"
                weight="7"
              />
              <Heading title="needs" color="white" size="h2" weight="7" />
            </div>
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Take control of your digital marketing budget with easy-to-use and customizable cards. Load your marketing budget into the card, select the campaigns you want to run, and keep track of expenditures in real-time"
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
                url="/sales/?source=corporate_cards"
              />
            </div>
            <div>
              <SecondryButton
                title="Get Free Demo"
                actionImage={whiteArrow}
                iconSize={15}
                url="/sales/?source=corporate_cards"
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
              itemArray: ["Budget", "Allocation"],
              oldWayDescription:
                "Verbally specifying budgets, or even having them in writing, does not guarantee that your digital marketing spends will not cross the specified budget, especially when using one corporate card for all spends.",
              newWayDescription:
                "A purpose-based corporate card with a predefined limit ensures that your digital marketing expenses do not exceed your intended budget.",
            },
            {
              itemArray: ["Expense", "Tracking"],
              oldWayDescription:
                "Tracking digital marketing expenses means tallying invoices with actual card spends and going through multiple dashboards and campaigns to calculate the amount spent.",
              newWayDescription:
                "Track and manage all your digital marketing expenses on a single platform, including ad spends, marketing software purchases, and more.",
            },
            {
              itemArray: ["Campaign", "Management"],
              oldWayDescription:
                "Managing and optimizing campaign performance across multiple channels and platforms is complex, and enforcing consistent budgets is even more challenging.",
              newWayDescription:
                "In your digital marketing card, set customized limits for campaign expenditures based on your budget and select any campaigns you wish to run.",
            },
            {
              itemArray: ["Spend", "Overview"],
              oldWayDescription:
                "Getting a comprehensive view of your business’s digital marketing spending is challenging.",
              newWayDescription:
                "Get a complete overview of your marketing spends that helps reduce costs and streamline your payment process.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading
            title="Simplify your business’s"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}digital marketing`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading title={`${space}needs`} color="black" size="h1" weight="6" />
        </div>
        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Subscription Management"
              description="Effectively manage your recurring digital marketing expenses, such as subscriptions that recur monthly or annually"
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Spend Optimization"
              description="Enhance your organization's performance by implementing a robust purchasing oversight process that helps reduce cost and streamlines your payment process"
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Marketing Budgets"
              description="A digital marketing business card lets you set customized usage limits, ensuring no overspending"
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Easy"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Usage"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description=" You can seamlessly add your card for digital marketing expenses to the desired platform and select the campaigns you wish to run"
              source="corporate_cards"
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
                  <Heading
                    title="Master your digital marketing expenditure with"
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <div>
                    <Heading
                      title={`greater${space}`}
                      color="white"
                      size="h1"
                      weight="6"
                    />
                    <Heading
                      title="control and visibility"
                      color="rainy-blue"
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
      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how digital marketing cards can revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about digital marketing in detail"
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
          title="Seeking further understanding of digital marketing cards?"
          description="A digital marketing card is a specialized financial tool designed to streamline and enhance the management of digital marketing expenses. It empowers businesses to centralize their spending, set customized limits, and control their budget effectively."
          source="corporate_cards"
        />
      </div>
      <div className={`${styles.seventh_row} row`}>
        <ComprehensiveView
          title="Explore our comprehensive guide"
          innerHtml={
            <>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Why are digital marketing expenditures necessary for any business?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="A digital marketing team is crucial for shaping a business's online presence, handling website management, social media engagement, content syndication, and more. Expenditures in digital marketing are unavoidable, covering software subscriptions, search engine optimization tools, and investments in paid advertising. Spending varies based on campaign frequency and tools used."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are typical marketing expenditures that companies may encounter?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Businesses typically incur marketing costs in specific categories, including expenses for content and design improvement tools to enhance quality. Pay-per-click or advertising costs are typical for channel-specific campaigns. Optimization tools are essential for website and blog content. Other costs include event-related expenses like sponsorship, booth graphics, giveaways, and travel. Consultancy fees and occasional one-time charges may also contribute to overall expenditures."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the key elements in managing digital marketing expenses with a credit card?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Effectively managing digital marketing expenses involves
                  establishing budgets aligned with annual spending plans and
                  allocating funds to individuals for designated expenses.
                  Setting up approval processes within the department is
                  critical to financial control. Leveraging mass payment
                  discounts is pivotal for efficient expense management. The
                  digital marketing card simplifies these aspects, enabling
                  businesses to maintain financial discipline and streamline
                  marketing operations effectively."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What is the role of a corporate card in business expenses?"
                />
              </div>
              <div className="mb-5">
                <p>
                  A{" "}
                  <Link
                    href="https://www.enkash.com/resources/blog/corporate-card-for-business-expenses/"
                    target="_blank"
                  >
                    corporate card for business
                  </Link>{" "}
                  expenses, supported by an intelligent spend management
                  platform, streamlines financial outlays, ensuring operational
                  continuity. These cards enable businesses to allocate funds,
                  set spending limits, establish approval matrices, and track
                  usage comprehensively. Digital marketing cards extend this
                  concept, offering specialized features for controlling and
                  monitoring digital marketing spends.
                </p>
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="corporate_cards" />
    </div>
  );
};

export default digitalMarketingCard;
