import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../../../common/constant";
import { blogData, carouselData } from "./data";
import faqData from "./faq-data";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import Header from "@/components/header/header";
import { Metadata } from "next";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import { FAQHtml } from "@/components/faq";
import Footer from "@/components/footer/footer";
import generateMetaData from "@/common/utils/metaData";
import StructuredData from "@/components/head/structuredData";
import { userPlus, numberOne, stack } from "@/components/three-steps/";
import BlogWrapper from "@/components/blog/blog-wrapper";
import AllProducts from "@/components/all-products/all-products";
import productData from "./product-data";

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
                title={`Payment Buttons `}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
          </div>
          <div className="">
            <Heading
              title={`Sell smarter, not harder with`}
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title={`${space}EnKash Payment Button`}
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Embed a secure, customizable payment button on your website and collect payments in minutes."
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
                url="https://docs.enkash.com/payment-gateway"
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
            title="The Best Payment Button for Businesses"
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
            title={`Convenient business transactions with `}
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title="enhanced customer experience "
            color="rainy-blue"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Setup in under 5 minutes"
              description="Add the button to your website or blog in under 5 minutes. Skip complex installations and technical hurdles with our straightforward setup process. Create your button, copy the code, and get started instantly without waiting for developer assistance."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Ctrl C + Ctrl V = Payment Ready"
              description="No coding expertise is required. Copy-paste a one-line code. EnKash Payment Buttons seamlessly integrate into any website or blog, ensuring a smooth user experience and uninterrupted functionality with zero technical complications."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Accept Payments Anytime, Anywhere"
              description="Accept one-time or recurring payments effortlessly. Enable your customers to choose between single transactions or subscriptions, making your payment process adaptable to diverse business models and customer needs."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Match Your Style"
              description="Match your brand’s look and feel with customizable styles, colors, and text. Design buttons that align with your business identity, creating a consistent and professional appearance for your online presence."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Optimized for the Mobile"
              description="Designed for optimal performance on all devices. Provide a seamless payment experience for users of smartphones, tablets, or desktops, catering to the growing mobile commerce trends."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Don’t Compromise on Security"
              description="Industry-leading security and compliance standards ensure safe payments. Protect your customers’ data with advanced encryption and fraud detection, building trust and credibility for your business."
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
                  title="Facilitate collections with a secure"
                  color="white"
                  size="h1"
                  weight="6"
                />
                <Heading
                  title={`${space} payment button for your business `}
                  color="rainy-blue"
                  size="h1"
                  weight="6"
                />
              </div>
            </>
          }
          mainTitle="How to Make a Payment Button?"
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

      <div className={`${styles.second_row}  bg-white `}>
        <AllProducts
          title="Check out other payment products at"
          subtitle="EnKash"
          data={productData}
        />
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
