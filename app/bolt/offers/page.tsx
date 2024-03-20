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
import FAQHtml from "./faq-html";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title:
    " Rewards & Offers- Get Exclusive offers on SaaS subscriptions | EnKash",
  description:
    "Unlock a world of savings and exclusive perks with our rewards and offers. Explore the benefits of our program and start enjoying the offer with EnKash today!",
  alternates: {
    canonical: "https://www.enkash.com/loyalty-lounge/offers/",
  },
};

const offers = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <Header utmSource="Loyalty_lounge" />

      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div className="d-flex">
              <Heading
                title={`Loyalty Lounge |${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
            <Heading
              title="Offers"
              size="h4"
              weight="4"
              useH1TagInHtml={true}
            />
          </div>
          <div>
            <Heading
              title="Unlock exclusive "
              color="rainy-blue"
              size="h2"
              weight="7"
            />

            <Heading
              title={`offers${space}`}
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading
              title="on business products"
              color="white"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Explore our curated offers from trusted partners and get exclusive discounts on a wide range of business products and services"
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
                url="https://home.enkash.com/signup?utm_source=Loyalty_lounge"
              />
            </div>
            <div>
              <SecondryButton
                title="Get Free Demo"
                actionImage={whiteArrow}
                iconSize={15}
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
          <ThreeSteps />
        </div>
      </div>

      <div className={`${styles.second_row} row d-flex bg-white row-padding`}>
        <EnkashWay
          progressData={[
            {
              itemArray: ["Finding", "Offers"],
              oldWayDescription:
                "It’s difficult for businesses to find offers that fulfill their needs and help them save big.",
              newWayDescription:
                "Access a curated selection of the best offers from our partner brands on various business products and services.",
            },
            {
              itemArray: ["Time", "Investment"],
              oldWayDescription:
                "Businesses had to spend hours negotiating for the best deals.",
              newWayDescription:
                "On EnKash, exclusive discounts and best deals are just a click away.",
            },
            {
              itemArray: ["Missed", "Opportunities"],
              oldWayDescription:
                "Lack of awareness leads to missing out on great deals.",
              newWayDescription:
                "Real-time visibility of offers on the dashboard gives you access to better deals and more savings.",
            },
            {
              itemArray: ["Tracking"],
              oldWayDescription:
                "Difficulty in tracking active offers, savings, and their validity.",
              newWayDescription:
                "Get real-time data on your offers, savings, and validity on the go.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-flex flex-column text-center mb-5">
          <Heading
            title="Learn more about maximizing"
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <div>
            <Heading
              title="your savings"
              color="equity-blue"
              size="h1"
              weight="6"
            />
            <Heading
              title={`${space}with EnKash`}
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
                description="Unlock significant savings on various business products with exclusive discounts on our partnered services"
                source="Loyalty_lounge"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Top Partnered Deals"
                description="Explore the finest deals from our esteemed partner brands like AWS, ClearTax, Canva, and more"
                source="Loyalty_lounge"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle=" Effortless Process"
                description="Enjoy a seamless experience with just a few clicks, making it quick and easy to access exclusive deals and offers"
                source="Loyalty_lounge"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Regularly Updated Offers"
                description="Stay ahead of the curve with the best deals for your business needs"
                source="Loyalty_lounge"
              />
            </div>
          </div>
        </div>
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
      {/* <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how our partner offers can benefit your business!"
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
