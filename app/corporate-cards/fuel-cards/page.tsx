import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../../common/constant";
import { blogData, faqData, carouselData, productData } from "./data";
import { Header, Footer, BlogWrapper } from "@/components";
import { FAQHtml } from "@/components/faq";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import EnkashWay from "@/components/enkash-way/enkash-way";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import { Metadata } from "next";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import generateMetaData from "@/common/utils/metaData";
import StructuredData from "@/components/head/structuredData";
import { userPlus, numberOne, stack } from "@/components/three-steps/";
import AllProducts from "@/components/all-products/all-products";

export const metadata: Metadata = generateMetaData({
  title:
    "Corporate Fuel Cards for Businesses - Optimize Your Fleet with EnKash",
  description:
    "Enhance your company's bottom line with our corporate fuel cards for business. Enjoy cost savings, detailed reporting, and convenient fuel management. Discover the benefits today",
  alternates: {
    canonical: "https://www.enkash.com/corporate-cards/fuel-cards/",
  },
  faqData: faqData,
});

const fuelCard = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/corporate-cards/fuel-cards/`}
        faqData={faqData}
      />
      <Header utmSource="corporate_cards" />

      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div className="d-flex">
              <Heading
                title={`Fuel Cards${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
          </div>
          <div className="d-flex flex-column">
            <Heading
              title="Transforming Fuel "
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="Expense Management "
              color="rainy-blue"
              size="h2"
              weight="7"
            />{" "}
            <Heading title="with " color="white" size="h2" weight="7" />
            <Heading
              title="EnKash Fuel Card"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Eliminate hassle, gain control, and cut costs with EnKash’s comprehensive fuel card solution for businesses of all sizes."
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
            title="Take Control of Fuel Expenses with EnKash Fuel Cards"
            steps={[
              {
                icon: userPlus,
                text: "Employee Convenience",
              },
              {
                icon: stack,
                text: "Controlled Usage",
              },
              {
                icon: numberOne,
                text: "Tax Benefits",
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
            title="Unlock Savings and Efficiency "
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading title=" on Every Mile " color="black" size="h1" weight="6" />
        </div>
        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Real-time "
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Expense Tracking"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Monitor fuel expenses in real-time with EnKash Fuel Cards. Track transactions as they happen, gain complete visibility and identify spending patterns to prevent budget overruns. Make data-driven decisions to optimize your fuel budget."
              source="corporate_cards"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Fraud "
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Protection"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Robust security with PIN protection and real-time alerts for suspicious activity. These features ensure only authorized transactions, reducing fraud risk. Instantly block or freeze cards to prevent unauthorized access and protect your business."
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Streamlined Reimbursements"
              description="Eliminate the hassle of traditional reimbursements with EnKash Fuel Cards. Fuel expenses are automatically managed and settled, no need for receipts or approval waits. This streamlined process boosts efficiency, reduces errors, and frees up your finance team for strategic tasks."
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Cost Control and Savings"
              description="Set daily or monthly spending limits for each employee, ensuring fuel expenses stay within budget. Monitor consumption against approved limits, optimize usage, and identify savings to reduce unnecessary fuel costs."
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Wide Acceptance Network"
              description="Accepted at a wide network of authorized fuel stations, providing employees the flexibility to refuel locally or nationwide. This broad coverage ensures convenience, minimizes out-of-network charges, and keeps your business protected wherever your team travels."
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
                    title="Steps to Manage Employee "
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="Fuel Costs"
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
            title="Don't worry! Our FAQs section will help you learn about fuel cards in detail"
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
          title="Seeking further understanding of fuel cards?"
          description="Fuel cards simplify business fuel purchases, offering a streamlined and secure payment process. These cards optimize budgets, reduce administrative overhead, and enhance accountability, making them essential tools for organizations' efficient and cost-effective fuel management."
          source="corporate_cards"
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
                  title="How can I get fuel cards for my business?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="EnKash streamlines the process of obtaining fuel cards for your business with a straightforward approach. Begin by signing up on EnKash and completing KYC; then, link your company's bank account and load the necessary funds for business expenses. Subsequently, issue fuel cards to employees preloaded with funds and notify them about card activation via SMS/email."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title=" Are fuel cards good for small businesses?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Fuel cards are a valuable asset for small businesses. These cards simplify the often cumbersome reimbursement process, significantly reducing paperwork and administrative overhead. They offer cost-effective benefits, enabling businesses to optimize their fuel-related expenses efficiently. For small businesses seeking streamlined processes and cost savings, fuel cards like EnKash's are undoubtedly worth considering."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What risks are associated with fuel cards?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="While fuel cards are designed to mitigate misuse through authorized outlets, there are inherent risks, particularly in unauthorized usage. Fuel cards by EnKash address this concern with robust security features like passcodes and OTPs, ensuring that only authorized individuals can use the cards. These security measures help prevent unauthorized usage and control fuel expenses."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title=" Is it better to use a fuel or credit card for fuel expenses?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="A dedicated fuel card, such as EnKash's offering, is generally a superior choice for managing fuel expenses. Fuel cards provide targeted control over fuel-related spending, efficient tracking of transactions, and cost-saving benefits that credit cards lack. They streamline the management of fuel expenses and offer a more cost-effective solution than traditional credit cards."
                />
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="corporate_cards" />
    </div>
  );
};

export default fuelCard;
