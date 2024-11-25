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
import generateMetaData from "@/common/utils/metaData";
import StructuredData from "@/components/head/structuredData";

export const metadata: Metadata = generateMetaData({
  title:
    "Collect Payments Online on Websites with Customized Payment Buttons - EnKash",
  description:
    "Integrate the Payment Button and accept payments instantly from Debit Card, Credit Card, Net Banking, UPI and Wallets. Book a free demo now !!",
  alternates: {
    canonical: "https://www.enkash.com/olympus/receivables/payment-button/",
  },
  faqData: faqData,
});

const page = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/olympus/receivables/payment-button/`}
        faqData={faqData}
      />
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
                title="Payment Button"
                size="h4"
                weight="4"
                useH1TagInHtml={true}
              />
            </div>
          </div>
          <div className="d-flex flex-column">
            <Heading
              title="Easy-to-integrate"
              color="white"
              size="h2"
              weight="7"
            />
            <div>
              <Heading
                title="payment button"
                color="rainy-blue"
                size="h2"
                weight="7"
              />
              <Heading
                title={`${space}for`}
                color="white"
                size="h2"
                weight="7"
              />
            </div>
            <Heading
              title="seamless collections"
              color="white"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Access a pre-designed payment button with a plug-and-play integration on your website"
              size="h6"
              weight="5"
            />
          </div>
          <div className="my-5 d-flex flex-row justify-content-start align-items-center">
            <div className="me-2">
              <PrimaryButton
                title="EnKash Now"
                theme="blue"
                url="/sales/?source=receivables"
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
              itemArray: ["Manual Payment", "Processing"],
              oldWayDescription:
                "The absence of payment buttons makes businesses rely on manual payment processing like bank transfers or cheques.",
              newWayDescription:
                "Businesses can easily add a payment button on their website and collect payments easily.",
            },
            {
              itemArray: ["Customer", "Experience"],
              oldWayDescription:
                "Traditional businesses fail to provide a smooth customer experience without a payment button.",
              newWayDescription:
                "Payment buttons provide a seamless checkout for customers enhancing their experience.",
            },
            {
              itemArray: ["Data", "Management"],
              oldWayDescription:
                "Data management is hindered without payment buttons as there is no transaction tracking and automated record-keeping which is essential for financial operations.",
              newWayDescription:
                "Payment buttons are integrated with payment processors which help streamline data facilitating efficient record keeping.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading
            title="Convenient business transactions"
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}with enhanced customer experience `}
            color="black"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Facilitate Collections"
              description="Businesses can make their collections easy by adding a payment button on their website for one-time and recurring payments"
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Zero Integration Cost"
              description="The EnKash payment button comes with a plug-and-play integration which means zero technical cost and manual effort required"
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="User-Friendly Experience"
              description="Payment button templates have been created for users to easily interact with the website and have a seamless experience while making payments"
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="DIY Payment Button Creation"
              description="Businesses can choose a payment button template or create their payment button from scratch as per their brand requirements"
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
                    title="Facilitate collections with a secure"
                    color="white"
                    size="h1"
                    weight="6"
                  />

                  <Heading
                    title="payment button for your business "
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
            title="Don't worry! Our FAQs section will help you learn about payment buttons in detail"
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
          title="Seeking further understanding of payment buttons?"
          description="Payment buttons are accessible buttons that can be used by a business to collect payments from their customers online. These can be customized as per business requirements and can be added to the website easily."
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
                  title="Can businesses send automated receipts with buttons?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Businesses can send automated receipts and 80G receipts with a payment button."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Why EnKash’s payment button is a great option?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="EnKash payment button comes with a plug-and-play integration. It can be easily added to any online business website to collect payments, send automated receipts, 80G receipts, showcase a thank you message, and have custom offers for users."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How to integrate payment buttons into my business website or online store?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Create an account on EnKash, configure the details, and generate the payment button code. Embed the generated code on your business website or online store."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Is it possible to customize the appearance and functionality of payment buttons as per my brand?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Payment buttons can be customized aligning with a business’s brand guidelines."
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

export default page;
