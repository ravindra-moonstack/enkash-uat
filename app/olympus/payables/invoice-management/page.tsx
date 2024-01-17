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
import BlogWrapper from "@/components/blog/blog-wrapper";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Invoice Processing & Software: Streamline Invoicing - EnKash",
  description:
    "Efficiently manage invoices with our advanced invoicing software. Simplify your invoice processing tasks and streamline your business operations",
  alternates: {
    canonical: "https://www.enkash.com/olympus/payables/invoice-management/",
  },
};

const invoiceManagement = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <Header utmSource="payables" />
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
            <Heading title="Invoice Management" size="h4" weight="4" useH1TagInHtml={true}/>
          </div>

          <div className="d-flex flex-column">
            <Heading
              title="Enhance invoice"
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="management with"
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="automation, transparency"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading
              title="& customization "
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Pay all your vendors seamlessly from a single dashboard with complete visibility and a flexible approval flow"
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
                url="https://home.enkash.com/signup?utm_source=payables"
              />
            </div>
            <div>
              <SecondryButton
                title="Book a Demo"
                actionImage={whiteArrow}
                iconSize={15}
                url="/sales/?source=payables"
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
              itemArray: ["Automation &", "Reconciliation"],
              oldWayDescription:
                "The traditional way of vendor invoice management has been paper-based making it tedious and unmanageable, especially during reconciliation.",
              newWayDescription:
                "EnKash enables you to automate all vendor payments reducing manual intervention and eventually simplifying reconciliation.",
            },
            {
              itemArray: ["Approval", "Flow"],
              oldWayDescription:
                "The approval flow in the traditional invoice management system is manual, time taking, and not clearly defined leading to approval issues and delays.",
              newWayDescription:
                "With EnKash, companies can depend on robust and fast approval. They can configure their approval workflow as per business requirements; basis hierarchy, department, projects with automation leading the way.",
            },
            {
              itemArray: ["Data Extraction &", "Accuracy"],
              oldWayDescription:
                "Manually extracting data is tedious and can lead to discrepancies, bringing inaccuracy at the forefront.",
              newWayDescription:
                "Invoice automation makes data extraction easy ensuring that the data produced is accurate to the core and that there is no room for disparity.",
            },
            {
              itemArray: ["Safety"],
              oldWayDescription:
                "Data handling in the traditional way is prone to breaching, misplacement, and even loss.",
              newWayDescription:
                "The digital and secure database stores everything in the cloud making it completely safe and accessible to authorized individuals.",
            },
            {
              itemArray: ["Integration"],
              oldWayDescription:
                "Traditional integration can be tedious and has to be done manually.",
              newWayDescription:
                "EnKash enables easy integration with existing accounting softwares for efficient workflows.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-2">
          <Heading
            title="Manage vendor invoices"
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}with ease, efficiency, and accuracy`}
            color="black"
            size="h1"
            weight="6"
          />
        </div>
        <div className="d-flex justify-content-center text-center mb-5"></div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Seamless Tech Management"
              description="Businesses can easily integrate their existing ERPs like Tally, SAP, and Zoho with the invoice management platform at zero technical cost and negligible efforts"
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Easy Handling & Transparency"
              description="The invoice management is simplified for everyone’s usage and understanding. Smooth interface and easy-to-understand flow with clear visibility and transparency for all the stakeholders"
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Digital"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Invoices"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Enterprises can digitize invoices right from their uploading to dispatching. This saves time and effort while reducing the workload"
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="End-to-end Visibility"
              description="All the details related to sales and payments can be viewed on a single dashboard, enabling better planning and strategizing for the business"
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Simplified Tracking & Monitoring"
              description="With digital invoices, one can easily track and monitor details of each vendor payment making the process more efficient and advanced"
              source="payables"
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
                    title={`Invoice management made easy for${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="better decision-making"
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
          title="Learn how invoice management can revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about invoice management in detail."
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
          title="Seeking Further Understanding about Invoice Management?"
          description="Invoice management is the process in which businesses receive an invoice from a vendor from whom they have availed any goods or services, validate the legitimacy of the invoice, pay the vendor, and record the payment in their accounts for reconciliation."
          source="payables"
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
                  title="Why is invoice management important?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Invoice management is important:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    To prevent delays and errors in paying for goods and
                    services
                  </li>
                  <li>
                    To keep track of supplies and prevent wastage and delays
                  </li>
                  <li>To help regulate inventory</li>
                  <li>
                    As the data from invoice management can be used in planning
                    and reviewing financial and performance data of the company;
                    enabling better decision making
                  </li>
                  <li>
                    To ease tax documentation, audits, and taxation activities
                  </li>
                  <li>To establish better vendor relationships</li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Does invoice management help prevent fraud?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The KYC for vendor verification is the most crucial part of EnKash’s invoice management. This ensures that there is no fraud and if GST, PAN, or bank account provided by the vendor are not verified, they are immediately rejected from the system."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Should I expect faster processing with invoice management software?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The invoice management softwares has a centralized platform where invoices can be automatically routed for approval, helping reduce the processing time. This workflow enables faster invoice processing, allowing timely payments to avoid penalties."
                />
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="payables" />
    </div>
  );
};

export default invoiceManagement;
