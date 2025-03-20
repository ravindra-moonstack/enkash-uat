import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import BlogWrapper from "@/components/blog/blog-wrapper";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import Heading from "@/components/heading/heading";
import EnkashWay from "@/components/enkash-way/enkash-way";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import { space } from "../../../../common/constant";
import { blogData, faqData, secondFaqData, carouselData } from "./data";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
import FAQHtml from "./faq-html";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import generateMetaData from "@/common/utils/metaData";
import StructuredData from "@/components/head/structuredData";
import { userPlus, numberOne, stack } from "@/components/three-steps/";
import AllProducts from "@/components/all-products/all-products";
import productData from "./product-data";

export const metadata: Metadata = generateMetaData({
  title: "Automated Invoicing Processing & Software for Business - EnKash",
  description:
    "Simplify your invoicing process with our cutting-edge invoicebill management software for businesses.  Get complete visibility of sales and payments & create bulk invoices with embedded payment links",
  alternates: {
    canonical: "https://www.enkash.com/olympus/receivables/invoices/",
  },
  faqData: faqData,
});

const invoices = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/olympus/receivables/invoices/`}
        faqData={faqData}
      />
      <Header utmSource="receivables" />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <Heading
              title={`Invoices${space}`}
              color="rainy-blue"
              size="h4"
              weight="7"
            />
          </div>

          <div className="d-flex flex-column">
            <Heading
              title="Enhance business "
              color="white"
              size="h2"
              weight="7"
            />

            <div>
              <Heading
                title="operations with"
                color="white"
                size="h2"
                weight="7"
              />

              <Heading
                title={`${space}Digital Invoicing`}
                color="rainy-blue"
                size="h2"
                weight="7"
              />
            </div>
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Transform your invoicing process with EnKash Digital Invoicing, a smart and automated solution designed to save time, eliminate errors, and streamline payments."
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
          <ThreeSteps
            title="Simplify Business Payments With Digital Invoicing"
            steps={[
              {
                icon: userPlus,
                text: "Automated Invoice Processing",
              },
              {
                icon: stack,
                text: "Real-Time Tracking",
              },
              {
                icon: numberOne,
                text: "Enhanced Payment Collection",
              },
            ]}
          />
        </div>
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading title="Effortless  " color="black" size="h1" weight="6" />

          <Heading
            title={`${space}Invoicing,`}
            color="equity-blue"
            size="h1"
            weight="6"
          />

          <Heading
            title={`${space}Faster Payments`}
            color="black"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Bulk Invoice"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Uploads"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              source="receivables"
              description="Upload multiple invoices in one go, minimizing manual work and saving valuable time. Ideal for businesses handling high transaction volumes, recurring billing, or vendor payments with ease."
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="OCR Technology"
              description="With EnKash, you can digitally upload your invoices, which are scanned using OCR technology. This helps save time and reduces the risk of human error."
              source="receivables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Seamless "
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Payment Collection "
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Embed secure payment links directly within invoices, allowing customers to pay instantly using multiple payment methods. Improve cash flow, reduce payment delays, and provide a frictionless payment experience."
              source="receivables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Effortlessly "
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Track Invoices"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              source="receivables"
              description="Upload bulk invoices with all necessary details of regular purchases to save time and employee bandwidth in just a few clicks"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Partial and "
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Recurring Payments "
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Give customers the flexibility to make partial payments or schedule automated recurring invoices. Enhance convenience, maintain predictable revenue streams, and improve payment cycle consistency for your business."
              source="receivables"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.second_row}  bg-white `}>
        <AllProducts
          title="Check Out EnKash’s Other Payment Products and Solutions"
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
                    title="Streamline your invoicing process"
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="with bulk actions"
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
          title="Learn how digital invoicing can revolutionize the way you work!"
        />
      </div>

      <div
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white pb-0`}
      >
        <div className="mb-5">
          <Heading title="Got Questions?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs section will help you learn about instant settlements in detail"
            color="black"
            size="h4"
          />
        </div>

        <div>
          <FAQHtml faqData={faqData} />
        </div>
      </div>

      <div
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading
            title="Seeking further understanding of invoices? Explore the comprehensive guide"
            color="equity-blue"
            size="h1"
          />
        </div>
        <div className="mb-5">
          <Heading
            title="Invoices are the lifeblood of any business, serving as the formal documentation of financial transactions between sellers and buyers. These documents comprehensively record goods or services rendered, payment terms, and crucial contact information. In essence, invoices ensure that businesses are compensated for their offerings and play a vital role in financial management, accounting, and taxation. "
            color="black"
            size="h4"
          />
        </div>

        <div>
          <FAQHtml faqData={secondFaqData} />
        </div>

        <div className={styles.faq_bg}>
          <Image src={faqBg} alt="background image" />x
        </div>
      </div>

      <div className={`${styles.sixth_row} row`}>
        <ContactUsCard
          title="Seeking further understanding of invoices?"
          description="Invoices are the lifeblood of any business, serving as the formal documentation of financial transactions between sellers and buyers. These documents comprehensively record goods or services rendered, payment terms, and crucial contact information. In essence, invoices ensure that businesses are compensated for their offerings and play a vital role in financial management, accounting, and taxation."
          source="receivables"
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
                  title="What does digital invoice processing entail?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Digital invoice processing involves streamlining invoice uploading, distribution, and management. Olympus's Invoice Feature can assist by automating the entire invoicing process, from uploading to deployment, making it more efficient and error-free for recurring transactions. This translates into saved time and enhanced productivity, which can greatly benefit your business."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How does the process of digital invoicing work?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The digital invoicing process scans and sends invoices. It streamlines the invoicing workflow by extracting relevant data using Optical Character Recognition (OCR), recording the same, and sending them to customers electronically."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How can I assess and select an automated invoice processing software?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Evaluating an automated invoice processing software requires considering factors like efficiency and cost reduction. Olympus's invoice feature
                  excels in these aspects by eliminating manual efforts, reducing the likelihood of human error, and reducing costs associated with manual invoicing."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What strategies can I employ to improve the digitization of invoices?"
                />
              </div>
              <div className="mb-5">
                <p>
                  To{" "}
                  <Link
                    href="https://www.enkash.com/resources/blog/e-invoicing-under-gst/"
                    target="_blank"
                  >
                    digitize invoices
                  </Link>{" "}
                  more effectively, you need streamlined processes and cost
                  reduction. Olympus's invoice feature supports this by
                  electronically storing and organizing invoices, making them
                  easy to access. This feature also helps reduce labor,
                  printing, and mailing invoice costs.
                </p>
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="receivables" />
    </div>
  );
};

export default invoices;
