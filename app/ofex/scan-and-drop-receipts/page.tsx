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
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import { Metadata } from "next";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import generateMetaData from "@/common/utils/metaData";
import StructuredData from "@/components/head/structuredData";
import AllProducts from "@/components/all-products/all-products";

export const metadata: Metadata = generateMetaData({
  title:
    "Digital Receipt & Control Management : Store your Documents Online - EnKash",
  description:
    "Digital Receipt Management - Take control of your scanned receipts with our intuitive solution. Organize, store, and track digital receipts efficiently, making financial record-keeping a breeze",
  alternates: {
    canonical: "https://www.enkash.com/ofex/scan-and-drop-receipts/",
  },
  faqData: faqData,
});

const ScanAndDropReceipts = (): React.JSX.Element => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/ofex/scan-and-drop-receipts/`}
        faqData={faqData}
      />

      <Header utmSource="expense_management" />

      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <Heading
              title={`Digital Receipt Management${space}`}
              color="rainy-blue"
              size="h4"
              weight="7"
            />
          </div>

          <div className="d-flex flex-column">
            <Heading
              title={`Scan, submit, and file  ${space}`}
              color="white"
              size="h2"
              weight="7"
            />

            <div>
              <Heading
                title={`business expenses  ${space}`}
                color="rainy-blue"
                size="h2"
                weight="7"
              />
              <Heading title="digitally" color="white" size="h2" weight="7" />
            </div>
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Upload receipts instantly from anywhere for easy access and timely tracking."
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
                url="/sales/?source=expense_management"
              />
            </div>
            <div>
              <SecondryButton
                title="Get Free Demo"
                actionImage={whiteArrow}
                iconSize={15}
                url="/sales/?source=expense_management"
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

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center flex-column  mb-5">
          <Heading
            title="Go Paperless & Digitize "
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space} Business Expenses  ${space}`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading title="with EnKash" color="black" size="h1" weight="6" />
        </div>
        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="OCR Technology"
              description="Automatically scan and collect details from receipts using OCR, eliminating the need for manual entry"
              source="expense_management"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="WhatsApp Integration"
              description="Make it easy for employees to submit receipts on the go using WhatsApp"
              source="expense_management"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <>
                  <div className="d-flex flex-column">
                    <Heading
                      title="Drop"
                      color="rainy-blue"
                      size="h2"
                      weight="6"
                    />
                    <Heading
                      title="Receipts"
                      color="rainy-blue"
                      size="h2"
                      weight="6"
                    />
                  </div>
                </>
              }
              source="expense_management"
              description="Streamline record-keeping by dropping receipts at your convenience"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Link Receipts to Expenses"
              description="Easily link your dropped electronic receipts to expenses anytime"
              source="expense_management"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Download Receipts in One Click"
              description="Gain overall control over the business expense reimbursement process by downloading all receipts in just one click"
              source="expense_management"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.second_row}  bg-white`}>
        <AllProducts
          title="Simplify expense management with EnKash’s innovative  "
          subtitle="solutions"
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
                    title="How digital receipt management helps"
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="accelerate expense management"
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
          title="Learn how digital receipt management can revolutionize the way you work!"
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
            title="Don’t worry! Our FAQs section will help you learn about digital receipt management in detail"
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
          title="Seeking further understanding of scan & drop receipts"
          description="Scan & drop receipts is a cutting-edge solution designed to streamline the process of capturing and managing receipts and invoices in a digital format. This innovative technology allows businesses to convert their paper-based invoices into electronic receipts effortlessly."
          source="expense_management"
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
                  title="How can you effectively manage digital receipts?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Managing digital receipts effectively can be achieved through OfEx's comprehensive digital receipt management solution. This technology allows for the effortless capture, storage, and organization of digital receipts. It includes the scan & drop receipt feature for quick digitization of paper-based receipts, saving time and reducing the risk of losing critical financial records."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What is receipt management?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Receipt management involves digitizing and organizing various receipts and invoices related to business expenses. This process helps convert paper-based receipts into digital format, making them easily accessible and searchable, simplifying record-keeping, providing quick access, ensuring accurate data tracking, and enhancing overall financial control."
                />
              </div>

              <div className="mb-2 mt-5">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What is the importance of digital receipts in businesses?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Digital receipts are vital in modern business operations due to their efficiency and convenience. With OfEx's digital receipt management, businesses can benefit from streamlined expense processes, reduced paperwork, compliance checks, and a clear trail of financial transactions for audits. They also improve expense reporting and minimize manual intervention."
                />
              </div>

              <div className="mb-2 mt-5">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What serves as the primary purpose of receipt management?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The primary purpose of receipt management is to simplify how businesses handle their financial records. It streamlines capturing, organizing, and accessing electronic receipts, reducing the reliance on physical paperwork. This digital transformation saves time and ensures accuracy in data tracking, offering better financial control and compliance."
                />
              </div>

              <div className="mb-2 mt-5">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What sets receipt management apart from invoice management?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Receipt management by OfEx primarily focuses on capturing and organizing various receipts related to business expenses. It streamlines converting paper-based receipts into digital format. On the other hand, invoice management typically involves handling and processing invoices from vendors, ensuring timely payments, and tracking accounts payable."
                />
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="expense_management" />
    </div>
  );
};

export default ScanAndDropReceipts;
