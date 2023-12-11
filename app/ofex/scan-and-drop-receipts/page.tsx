import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../../constant/common";
import faqData from "./faq-data";
import blogData from "./blog-data";
import carouselData from "./carousel-data";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import EnkashWay from "@/components/enkash-way/enkash-way";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import BlogWrapper from "@/components/blog/blog-wrapper";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import { Metadata } from "next";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import FAQHtml from "./faq-html";
import HeaderWrapper from "@/components/header/header-wrapper";

export const metadata: Metadata = {
  title:
    "Digital Receipt & Control Management : Store your Documents Online - EnKash",
  description:
    "Digital Receipt Management - Take control of your scanned receipts with our intuitive solution. Organize, store, and track digital receipts efficiently, making financial record-keeping a breeze",
};

const scanAndDropReceipts = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <HeaderWrapper />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div className="d-flex">
              <Heading
                title={`OfEx |${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
            <Heading title="Scan & Drop Receipts" size="h4" weight="4" />
          </div>
          <div className="d-flex flex-column">
            <Heading
              title={`Drop your receipts${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <div>
              <Heading
                title={`instantly for${space}`}
                color="rainy-blue"
                size="h2"
                weight="7"
              />
              <Heading title="accurate" color="white" size="h2" weight="7" />
            </div>

            <Heading
              title="and timely records"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Leverage digital receipt management with EnKash to ensure that all invoices related to business expenses are scanned, submitted, and filed in the relevant records for later use"
              color="white"
              size="h6"
              weight="5"
            />
          </div>
          <div className="my-5 d-flex flex-row justify-content-start align-items-center">
            <div className="me-2">
              <PrimaryButton title="EnKash Now" theme="theme-blue" />
            </div>
            <div>
              <SecondryButton
                title="Book a Demo"
                actionImage={whiteArrow}
                iconSize={15}
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
              itemArray: ["Receipt", "Management"],
              oldWayDescription:
                "Traditionally, retrieving paper-based records for reimbursement required a lot of manual effort.",
              newWayDescription:
                "EnKash stores all your past invoices on the dashboard, which can be quickly retrieved and viewed anytime, anywhere.",
            },
            {
              itemArray: ["Access", "Control"],
              oldWayDescription:
                "Access to the invoices and records cannot be regulated.",
              newWayDescription:
                "Set access controls within the system to regulate who can view and check.",
            },
            {
              itemArray: ["Quick", "Capture"],
              oldWayDescription:
                "Physical copy of the invoice must be managed, which is a task in itself.",
              newWayDescription:
                "Simply take a photo of the receipt and drop it on EnKash. Use an integrated WhatsApp bot to create expenses on the go.",
            },
            {
              itemArray: ["View and", "check"],
              oldWayDescription:
                "It is difficult to search invoices to match them with the manual record.",
              newWayDescription:
                "Conduct a smart search on the system to view and check receipts.",
            },
            {
              itemArray: ["Compliance"],
              oldWayDescription:
                "Written notations have to be made to trace the payment and approvals.",
              newWayDescription:
                "Clear checking and approval trails for compliance and audits.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-flex flex-column text-center mb-5">
          <Heading
            title="Digitize business expenses with"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title="digital receipt management"
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>
        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="OCR Technology"
              description="Automatically scan and collect details from receipts using OCR, eliminating the need for manual entry"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="WhatsApp Integration"
              description="Make it easy for employees to submit receipts on the go using WhatsApp"
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
              description="Streamline record-keeping by dropping receipts at your convenience"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Link Receipts to Expenses"
              description="Easily link your dropped electronic receipts to expenses anytime"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="One-Click Download"
              description="Gain overall control over the business expense reimbursement process by downloading all receipts in just one click"
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
    </div>
  );
};

export default scanAndDropReceipts;
