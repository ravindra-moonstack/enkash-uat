import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import { space } from "../../../../common/constant";
import { blogData, carouselData, productData } from "./data";
import faqData from "./faq-data";
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
  FAQHtml
} from "@/components";
import { Metadata } from "next";
import generateMetaData from "@/common/utils/metaData";
import { userPlus, numberOne, stack } from "@/components/three-steps/";

export const metadata: Metadata = generateMetaData({
  title: " Express Pay | Corporate Bulk Payment Solution | EnKash",
  description:
    "Revolutionize your financial processes with our advanced express pay solution. Experience the ease of managing large-scale payments through our efficient bulk payment system.",
  alternates: {
    canonical: "https://www.enkash.com/olympus/payables/bulk-payout/",
  },
  faqData: faqData,
});

const bulkPayout = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/olympus/payables/bulk-payout/`}
        faqData={faqData}
      />
      <Header utmSource="payables" />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <Heading
              title={`Bulk Payout ${space}`}
              color="rainy-blue"
              size="h4"
              weight="7"
            />
          </div>
          <Heading
            title={`Simplify Bulk Payouts with EnKash${space}`}
            color="white"
            size="h2"
            weight="7"
          />
          <Heading
            title={`Express Pay${space}`}
            color="rainy-blue"
            size="h2"
            weight="7"
          />

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Streamline your business payouts with EnKash’s Express Pay. Automate payments, save time and gain control over your cash flow."
              color="white"
              size="h6"
              weight="5"
            />
          </div>
          <div
            className={`${styles.button_container} my-5 d-flex flex-row justify-content-start align-items-center`}
          >
            <div className="me-2">
              <PrimaryButton
                title="Get Started"
                theme="blue"
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
          <ThreeSteps
            title="Unlock Bulk Payments with EnKash"
            steps={[
              {
                icon: userPlus,
                text: "Multi-Payment Support",
              },
              {
                icon: stack,
                text: "Scalable for Growth",
              },
              {
                icon: numberOne,
                text: "Seamless Experience",
              },
            ]}
          />
        </div>
      </div>

      <div
        className={`${styles.third_row} row d-flex bg-white row-padding-x-only`}
      >
        <div className="text-center">
          <div className="d-flex flex-column mb-5">
            <div>
              <Heading title="Innovative" color="black" size="h1" weight="6" />
              <Heading
                title={`${space}Bulk Payments Solutions${space}`}
                color="equity-blue"
                size="h1"
                weight="6"
              />
              <Heading
                title="for Enterprises"
                color="black"
                size="h1"
                weight="6"
              />
            </div>
          </div>
        </div>

        <div className="d-flex text-left">
          <div className={`d-flex flex-md-row mt-3 pb-4 scroll_container`}>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Save Time and Boost Efficiency"
                description="Automate recurring and bulk payments with EnKash to optimize cash flow, reduce manual tasks, ensure timely transactions, and eliminate errors, all through a centralized system that integrates seamlessly with your existing tools."
                source="payables"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                titleHtml={
                  <>
                    <Heading
                      title="Enhance Vendor Relationships"
                      color="rainy-blue"
                      size="h2"
                      weight="6"
                    />
                  </>
                }
                source="payables"
                description="Build trust with vendors through on-time payments, foster stronger partnerships, and resolve payment queries quickly using a reliable, transparent payment system."
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Strengthen Financial Control"
                description="Gain real-time visibility into transactions, monitor payment statuses, generate detailed reports, and ensure compliance with customizable approval workflows tailored to your organization’s needs."
                source="payables"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Improve Cash Flow Management"
                description="Streamline operations with faster processing times. Efficiently manage recurring expenses like rent, utilities, and vendor payments to enhance cash flow and maintain operational stability."
                source="payables"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Seamless Integrations"
                description="Connect EnKash Express Pay with your ERP, accounting software, or HRMS to simplify workflows and eliminate data silos. Enhance productivity with a fully integrated payment solution."
                source="payables"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Secure and Reliable Platform"
                description="Protect your business with robust fraud detection, data encryption, and multi-layered access controls. Rely on industry-leading uptime and performance for seamless, uninterrupted operations"
                source="payables"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Customizable Solutions for Your Needs"
                description="Tailor the platform to your business needs, from approval hierarchies to payment scheduling. EnKash Express Pay offers unmatched flexibility"
                source="payables"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.second_row}  bg-white`}>
        <AllProducts
          title="EnKash Products - Making Payments "
          subtitle="Smarter"
          data={productData}
        />
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <Heading
                  title={`How To Get Started with EnKash Express Pay for ${space}`}
                  color="white"
                  size="h1"
                  weight="6"
                />
                <div>
                  <Heading
                    title={`Bulk Payouts${space}`}
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
          title="Learn how Bulk Payouts could revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about express pay in detail"
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
          title="Seeking further understanding of express pay?"
          description="A system that enables organizations or individuals to make payments to multiple beneficiaries at the same time is called bulk payment."
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
                  title="Why is a bulk payment solution needed?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Our bulk payment solutions help businesses with the following advantages:"
                />
              </div>

              <div className="mb-5">
                <ul>
                  <li>
                    Faster and secure payments, made with encryption technology,
                    ensuring data is secured
                  </li>
                  <li>
                    Automation eliminates manual error and helps in easier
                    processing of larger transactions
                  </li>
                  <li>
                    Low payment failure rate as all accounts are validated
                    before initiating the payments
                  </li>
                  <li>
                    Supports{" "}
                    <Link
                      href="https://www.enkash.com/resources/blog/modes-of-payment/"
                      target="_blank"
                    >
                      multiple modes of payment
                    </Link>
                    , including NEFT, RTGS, IMPS, UPI, debit cards, connected
                    banking, and more
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Different types of bulk payments"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="There are two types of bulk payments: Standard Domestic Bulk Payment and Bulk Inter Account Transfer (IAT)."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Standard Domestic Bulk Payment"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Standard Domestic Bulk Payment lets you make bulk payments to multiple beneficiaries from a single account. This bulk payment is further classified into two categories i.e., immediate bulk payments (IBULK) and next-day bulk payments (NBULK)"
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Bulk Inter Account Transfer (IAT)"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="This bulk payment type enables you to make payments to multiple credit accounts from a single debit account. You can also use IAT to make international payments."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title=" What are the payment modes for express pay?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Bulk payment can be done through bank transfers, 
                  NEFT, RTGS, IMPS, UPI, debit cards, connected banking, and more."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What is the future of bulk financial services?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Bulk payment is taking the lead in the B2B space. Businesses need to send and receive money in bulk on a daily basis. Products like EnKash Olympus make bulk payments easy, safe, convenient, and traceable. Integrating bulk payments with existing ERP systems reduces the workload for finance teams, making recurring payments efficient and saving time and resources for businesses."
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

export default bulkPayout;
