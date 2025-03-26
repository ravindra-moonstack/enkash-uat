import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../../common/constant";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import { Metadata } from "next";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import { FAQHtml } from "@/components/faq";
import Header from "@/components/header/header";
import BlogWrapper from "@/components/blog/blog-wrapper";
import faqData from "./faq-data";
import { blogData, carouselData, productData } from "./data";
import Footer from "@/components/footer/footer";
import generateMetaData from "@/common/utils/metaData";
import StructuredData from "@/components/head/structuredData";
import { userPlus, numberOne, stack } from "@/components/three-steps/";
import AllProducts from "@/components/all-products/all-products";

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
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/corporate-cards/digital-marketing-cards/`}
        faqData={faqData}
      />

      <Header utmSource="corporate_cards" />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <Heading
              title={`Digital Marketing Card${space}`}
              color="rainy-blue"
              size="h4"
              weight="7"
            />
          </div>
          <div className="d-flex flex-column">
            <Heading
              title={`Take Control of Your  ${space}`}
              color="white"
              size="h2"
              weight="7"
            />

            <Heading
              title={`Marketing Budget ${space}`}
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading
              title="  with EnKash’s"
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title={` Digital Marketing Card${space}`}
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Effortlessly allocate, track, and optimize your marketing budgets. Designed specifically for marketing professionals, this solution ensures precision, control, and real-time visibility over your campaigns’ spend."
              color="white"
              size="h6"
              weight="5"
            />
          </div>
          <div className="my-5 d-flex flex-row justify-content-start align-items-center">
            <div className="me-2">
              <PrimaryButton
                title="Get Started"
                theme="blue"
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
          <ThreeSteps
            title="Maximize Your Marketing Impact with EnKash Digital Marketing Cards"
            steps={[
              {
                icon: userPlus,
                text: "Customizable Spending Limits",
              },
              {
                icon: stack,
                text: "Dedicated Expense Tracking",
              },
              {
                icon: numberOne,
                text: "Real-time Monitoring",
              },
            ]}
          />
        </div>
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading
            title="The Smarter Way to Manage Your"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space} Digital Marketing Expenses`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>
        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Simplified Budget Allocation"
              description="Manage multiple campaigns effortlessly with EnKash’s Digital Marketing Card. Allocate funds directly to campaigns, assign specific budgets, and eliminate manual tracking, ensuring seamless distribution and greater efficiency."
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Real-Time Expense Tracking"
              description="Monitor every transaction instantly with EnKash’s real-time expense tracking. Gain insights into your campaign’s financial health, make on-the-fly adjustments, and ensure you stay within budget without overspending."
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Prevent Overspending"
              description="Overspending on campaigns can be costly. With EnKash’s Digital Marketing Card, you can set predefined spending limits for each card. This feature ensures your team stays within budget, preventing unauthorized expenses and helping you maintain financial discipline for more efficient and cost-effective marketing campaigns."
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Simplified "
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Subscription Management"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Managing recurring subscriptions for marketing tools, software, or ad platforms becomes effortless with EnKash. Automate payments for these subscriptions with clear schedules and centralized tracking. You’ll never miss a payment, and you'll save time that would otherwise be spent on manual invoicing and reconciliation."
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Customizable "
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Usage Policies"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Tailor your spending policies to fit your unique marketing needs. With EnKash’s Digital Marketing Card, you can enforce specific restrictions, such as category-based spending limits or vendor-specific constraints. This ensures that every expense aligns with your business’s objectives and helps maximize the effectiveness of your marketing efforts."
              source="corporate_cards"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.second_row}  bg-white`}>
        <AllProducts
          title="An Array of Corporate Cards by"
          subtitle="EnKash"
          data={productData}
        />
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
