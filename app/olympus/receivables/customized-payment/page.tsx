import Image from "next/image";
import styles from "./page.module.scss";
import { space } from "../../../../common/constant";
import faqData from "./faq-data";
import {blogData, productData, carouselData} from "./data";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
import {
  Header,
  ThreeSteps,
  Footer,
  Heading,
  BlogWrapper,
  ComprehensiveView,
  PrimaryButton,
  GetStartedCard,
  HowDoesCarousel,
  ContactUsCard,
  LottieClientComponent,
  StructuredData,
  AllProducts,
  FAQHtml,
  SecondryButton,
} from "@/components";
import EnkashWay from "@/components/enkash-way/enkash-way";
import { Metadata } from "next";
import Link from "next/link";
import generateMetaData from "@/common/utils/metaData";
import { userPlus, numberOne, stack } from "@/components/three-steps/";

export const metadata: Metadata = generateMetaData({
  title: "Customise Payment Page: Accept Payments with Payment Page | EnKash",
  description:
    "Customise Payment Pages and send different versions of the same Payment Page to different customers. Book Demo now !!",
  alternates: {
    canonical: "https://www.enkash.com/olympus/receivables/customized-payment/",
  },
  faqData: faqData,
});

const page = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <Header utmSource="receivables" />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div className="d-flex">
              <Heading
                title={`Payment Page ${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
          </div>
          <div className="d-flex flex-column">
            <Heading
              title={`Instant ${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="Online Payments with "
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <div>
              <Heading
                title={`Custom${space}`}
                color="white"
                size="h2"
                weight="7"
              />
              <Heading
                title="Payment Page"
                color="rainy-blue"
                size="h2"
                weight="7"
              />
            </div>
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Create professional, branded payment pages that enable secure and hassle-free online payment collection."
              size="h6"
              weight="5"
            />
          </div>
          <div className="my-5 d-flex flex-row justify-content-start align-items-center">
            <div className="me-2">
              <PrimaryButton
                title="Get Started"
                theme="blue"
                url="/sales/?source=receivables"
              />
            </div>
            <div>
              <SecondryButton
                title="API Documentation"
                actionImage={whiteArrow}
                iconSize={15}
                url="https://docs.enkash.com"
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
            title="Best Online Payment Solution "
            steps={[
              {
                icon: userPlus,
                text: "Fast",
              },
              {
                icon: stack,
                text: "Customizable",
              },
              {
                icon: numberOne,
                text: "Secure",
              },
            ]}
          />
        </div>
      </div>

      <div
        className={`${styles.second_row} row d-flex bg-white row-padding-top-none`}
      ></div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading
            title="Create your custom-branded payment page with "
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}EnKash`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Customization at Your Fingertips"
              description="Create payment pages that reflect your brand with custom logos, colors, and fields. Share easily with professional URLs, boosting brand recognition and user convenience effortlessly."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Multiple Payment Modes "
              description="Offer your customers unmatched flexibility with 180+ domestic and international payment options, including UPI, cards, wallets, and more."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Zero Coding Required"
              description="Focus on growing your business while EnKash simplifies the rest. Launch fully functional payment pages in minutes—no coding or technical expertise needed."
              source="receivables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Optimized for Mobile and Web"
              source="receivables"
              description="Designed for smartphones, tablets, and desktops, they ensure a seamless, engaging, and consistent interface every time."
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Real-time Insights"
              description="Access real-time transaction data, track payment trends, and analyze customer behavior to make smarter, data-driven business decisions effortlessly."
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
                <Heading
                  title={`Payment pages that align with your${space}`}
                  color="white"
                  size="h1"
                  weight="6"
                />
                <Heading
                  title="business requirements"
                  color="rainy-blue"
                  size="h1"
                  weight="6"
                />
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
          title="Learn how virtual accounts can revolutionize the way you work!"
        />
      </div>

      <div className={`${styles.fifth_row} row row-padding-x-only bg-white`}>
        <div className="mb-5">
          <Heading title="Got Questions?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs section will help you learn about customized payment page in detail"
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

      <div className={`${styles.second_row}  bg-white `}>
        <AllProducts
          title="Check out other payment products at"
          subtitle="EnKash"
          data={productData}
        />
      </div>
      
      <div className={`${styles.sixth_row} row`}>
        <ContactUsCard
          title="Seeking further understanding of customized payment page?"
          description="Businesses can create customized payment pages for their customers and collect payments from them. These payments can be easily incorporated into business websites and functioning can start instantly."
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
                  title="What is EnKash's customized payment page?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="EnKash provides customized payment pages to businesses to collect their payments from customers for across different business models."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How can I customize the payment pages to reflect my brand's identity professionally?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Brand colors, fonts, and logos can be incorporated into payment pages to align with the brand’s identity."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Can I add custom fields or additional information on the payment pages to gather specific customer data?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Yes, businesses can add or modify custom fields as per their requirements and gather information beneficial to them."
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
