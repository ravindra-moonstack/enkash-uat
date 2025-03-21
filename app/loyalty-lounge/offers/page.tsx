import Image from "next/image";
import { Metadata } from "next";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import { space } from "../../../common/constant";
import faqData from "./faq-data";
import { carouselData, productData, blogData } from "./data";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import { FAQHtml } from "@/components/faq";
import { Header, Footer, BlogWrapper } from "@/components";
import generateMetaData from "@/common/utils/metaData";
import StructuredData from "@/components/head/structuredData";
import { userPlus, numberOne, stack } from "@/components/three-steps/";
import AllProducts from "@/components/all-products/all-products";

export const metadata: Metadata = generateMetaData({
  title:
    "Rewards & Offers- Get Exclusive offers on SaaS subscriptions | EnKash",
  description:
    "Unlock a world of savings and exclusive perks with our rewards and offers. Explore the benefits of our program and start enjoying the offer with EnKash today!",
  alternates: {
    canonical: "https://www.enkash.com/loyalty-lounge/offers/",
  },
  faqData: faqData,
});

const offers = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/loyalty-lounge/offers/`}
        faqData={faqData}
      />
      <Header utmSource="Loyalty_lounge" />

      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <Heading
              title={`Offers${space}`}
              color="rainy-blue"
              size="h4"
              weight="7"
            />
          </div>
          <div>
            <Heading
              title="Access exclusive offers on "
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title={`${space} business products `}
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Discover best offers from trusted partners and enjoy special discounts on a variety of business products and services."
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
                url="/sales/?source=Loyalty_lounge"
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
            title="Best Offers For You"
            steps={[
              {
                icon: userPlus,
                text: "Customizable",
              },
              {
                icon: stack,
                text: "Exclusive Discounts",
              },
              {
                icon: numberOne,
                text: "Trusted Partners",
              },
            ]}
          />
        </div>
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-flex flex-column text-center mb-5">
          <Heading title="Exclusive " color="black" size="h1" weight="6" />
          <div>
            <Heading
              title="discounts and benefits"
              color="equity-blue"
              size="h1"
              weight="6"
            />
            <Heading
              title={`${space} on partnered services`}
              color="black"
              size="h1"
              weight="6"
            />
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className={`d-flex flex-md-row mt-3 pb-4 scroll_container`}>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Maximize Savings"
                description="Unlock exceptional savings on a variety of essential business products through exclusive discounts from our trusted partners, helping you reduce operational costs and improve your bottom line."
                source="Loyalty_lounge"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Top Partnered Deals"
                description="Access top-tier offers from renowned partner brands like AWS, ClearTax, Canva, and more, ensuring your business gets the best value on tools and services you rely on daily."
                source="Loyalty_lounge"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle=" Effortless Process"
                description="Enjoy a smooth, hassle-free experience where you can quickly discover and redeem exclusive deals with just a few clicks, saving time and effort while maximizing your savings."
                source="Loyalty_lounge"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Regularly Updated Offers"
                description="Stay ahead of the competition with a constantly refreshed list of the most relevant and up-to-date offers for your business needs, ensuring you never miss out on a great deal."
                source="Loyalty_lounge"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.second_row}  bg-white`}>
        <AllProducts
          title="Products to Encourage Loyalty and Reward "
          subtitle="Employees"
          data={productData}
        />
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <div>
                  <Heading
                    title={`Make your${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title={`business processes smooth${space}`}
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="with these special offers"
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

      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how our partner offers can benefit your business!"
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
            title="Don't worry! Our FAQs section will help you learn about our partner offers in detail"
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
          title="Seeking further understanding of offers?"
          description="Make your business function smoothly and advance toward growth with exclusive offers from EnKash. These offers on partnered services can help grow your business."
          source="Loyalty_lounge"
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
                  title="How will these offers benefit my business?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="These offers can benefit your business by providing significant savings on business products and services through curated deals with trusted partners. With a seamless process and real-time visibility, businesses can easily access top-notch deals, streamline subscriptions, and stay ahead of new offers."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the different categories of offers available?
                  "
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Various offers are available across diverse categories such as travel, health & fitness, finance, insurance, recruitment, cloud computing, sales & marketing, and more. These offers encompass various services from brands like Nimbbl, AWS, ClearTax, Alibaba Cloud, and more.
                  "
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How can I contact EnKash customer support?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="To reach us, you can send an email to support@enkash.com or contact us at (+91) 853 049 0475."
                />
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="Loyalty_lounge" />
    </div>
  );
};

export default offers;
