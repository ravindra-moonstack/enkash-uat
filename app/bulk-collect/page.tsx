import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../constant/common";
import faqData from "./faqData";
import carouselData from "./carouselData";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import EnkashWay from "@/components/enkash-way/enkash-way";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import FAQ from "@/components/faq/faq";
import MobileHeader from "@/components/header/mobile-header/mobile-header";
import WebHeader from "@/components/header/web-header";
import BlogWrapper from "@/components/blog/blog-wrapper/blog-wrapper";
import Lottie from "lottie-react";
import { Metadata } from "next";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";

export const metadata: Metadata = {
  title: "Bulk Collect – Corporate E-Collect and Payment Collection | EnKash",
  description:
    "Revolutionize your business payment collection with Bulk Collect. Streamline data management, enhance efficiency, and ensure seamless payment processes. Explore the benefits with EnKash today",
};

const bulkCollect = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <div className="mobile-header">
        <MobileHeader />
      </div>
      <div className="desktop-header">{<WebHeader />}</div>
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
            <Heading title="Bulk Collect" size="h4" weight="4" />
          </div>
          <Heading
            title={`No more outstanding${space}`}
            color="white"
            size="h2"
            weight="7"
          />
          <div className="d-inline">
            <Heading
              title={`invoices with${space}`}
              color="white"
              size="h2"
              weight="7"
            />
          </div>
          <Heading
            title="bulk collect"
            color="rainy-blue"
            size="h2"
            weight="7"
          />

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Streamline your business collections with automated payment reminders, bulk invoice dispatch, and efficient monitoring"
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
              itemArray: ["Collection", "Process"],
              oldWayDescription:
                "Manually following up with customers for payments can be tiresome and challenging, often leading to confusion",
              newWayDescription:
                "Automate the bulk collection process by integrating your existing system with EnKash",
            },
            {
              itemArray: ["Time &", "Effort"],
              oldWayDescription:
                "Maintaining collections by hand takes a lot of time and resources, which could be efficiently utilized elsewhere if the procedure were automated",
              newWayDescription:
                "Bulk collect allows businesses to collect multiple payments simultaneously, saving time and effort compared to collecting payments individually",
            },
            {
              itemArray: ["Reconciliation"],
              oldWayDescription:
                "Traditional reconciliation processes require manual entries of every payment the business receives, which is a time-consuming and error-prone process",
              newWayDescription:
                "Simplify the reconciliation process with bulk collect by tracking and consolidating payments, making it easier for businesses to track and manage their finances",
            },
            {
              itemArray: ["Limitations"],
              oldWayDescription:
                "Face limitations due to restrictions of certain food shops",
              newWayDescription:
                "Fewer restrictions due to the broader acceptability of meal cards across outlets",
            },
            {
              itemArray: ["Accuracy &", "Speed"],
              oldWayDescription:
                "With manual collection, businesses may increase the risk of errors associated with manual payment collection processes, reducing accuracy and increasing the risk of financial losses",
              newWayDescription:
                "With automated bulk collection, businesses can reduce the risk of errors associated with manual payment collection processes, improving accuracy and reducing the risk of financial losses",
            },
            {
              itemArray: ["Business Cash", "Flow"],
              oldWayDescription:
                "Due to the time taken in manual collection strategies and transaction processing, your business’s cash flow can be hindered if payments are not made on time",
              newWayDescription:
                "Collecting payments in bulk can improve cash flow by reducing the time it takes to receive payments, allowing businesses to allocate funds more efficiently",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading
            title="Fast-track your business collection"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}strategy with future-ready technology`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>
        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Improved Experience"
              description="With bulk collection, your team can focus on improving customer experience rather than doing manual follow-ups and other mundane tasks"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Simplified Communication"
              description="The flow of data and information between all stakeholders becomes seamless, simpler, and faster"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Automated Process"
              description="Automate the collection process from end to end. Benefit from bulk reading of accounts, amounts due, and more"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Insights and Analytics"
              description="Plan ahead for any shortfalls in cash flow by analyzing previous data and identifying recurring patterns in slow collections"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Better Operations"
              description="Ease the pressure on your invoicing and collections team with automation and improved bulk invoicing with complete and updated details"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <div className="text-center d-inline flex-column">
                  <Heading
                    title={`Business${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title={`bulk collections${space}`}
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="made easy"
                    color="white"
                    size="h1"
                    weight="6"
                  />
                </div>
                <div>
                  <Heading
                    title="and efficient"
                    color="white"
                    size="h1"
                    weight="6"
                  />
                </div>
              </div>
            </>
          }
          mainTitle="How Does Bulk Collect Work?"
          carouselData={carouselData}
          carouselBg={caraouselBg}
        />
      </div>
      <div className="row bg-white row-padding text-center">
        <BlogWrapper title="Learn how bulk collect benefits for your business and employees!" />
      </div>
      <div
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions ?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs section will help you learn about bulk collect in detail"
            color="black"
            size="h4"
          />
        </div>

        <div>
          {faqData.map((item, index) => (
            <FAQ key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
        <div className={styles.faq_bg}>
          <Image src={faqBg} alt="background image" />x
        </div>
      </div>

      <div className={`${styles.sixth_row} row`}>
        <ContactUsCard />
      </div>
      <div className={`${styles.seventh_row} row`}>
        <ComprehensiveView
          title="Seeking further understanding of bulk collect? Explore the comprehensive guide"
          innerHtml={
            <>
              <div className="mb-5">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Bulk collect is an automation feature in EnKash Olympus that sends invoices to multiple customers in one click. This enables businesses to quickly follow up with the customer and keep a check on their business cash flow"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Understanding bulk collect"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Bulk collect revolutionizes payment collection by automating the retrieval of account information and outstanding amounts in bulk, simplifying the process and enhancing efficiency. With bulk collect, you can streamline your payment collection tasks and make them more accurate while saving time and resources. The bulk collect feature in Olympus takes this further, offering multiple payment options, automated reminders, and comprehensive data management, ensuring a seamless and convenient experience for businesses and their customers."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="The essence of collecting payments"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Payments are the lifeblood of any business, and with the bulk collect feature, it becomes a hassle-free endeavor. The essence of collecting payments is about ensuring that the process is not only efficient but also enhances the overall customer experience. With bulk collect, businesses can offer their customers a secure and user-friendly auto-collect experience. This feature takes care of the nitty-gritty details, such as automated reminders and streamlined data management, making the payment collection process convenient and reliable."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="The role of bulk collect"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Bulk collect is pivotal in transforming how businesses manage their receivables. It is a central hub for collecting payments in bulk, streamlining operations, and improving cash flow management. The bulk collect feature goes beyond traditional methods by providing insights and analytics, allowing businesses to plan for cash flow fluctuations proactively. It enhances the role of payment collection by making it a seamless, accurate, and efficient process."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Exploring bulk collect limits"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Understanding the limits of bulk collect is essential for businesses. While the Olympus Platform's bulk collect feature offers numerous advantages, it's essential to know the limits specific to your business needs. These limits can vary depending on your payment collection requirements and the type of payments you are managing. However, rest assured that the feature is designed to accommodate a wide range of businesses, offering flexibility and scalability to meet your unique needs."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Unraveling the bulk collect process"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The bulk collection process is traditionally a complex and labor-intensive task involving manually tracking accounts, outstanding amounts, and relevant details. This manual approach often leads to time-consuming follow-ups and increases the likelihood of errors or inaccuracies in the payment collection. This process is streamlined and significantly improved with the Olympus Platform's innovative auto-collect feature. It automates the collection due in bulk, eliminating the need for manual interventions. This ensures the accuracy and completeness of data in each invoice. By integrating bulk collect into your payment collection operations, your business can save time, reduce the risk of errors, and enhance overall efficiency, ultimately leading to an accurate payment collection experience."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="All about E-collect accounts"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="E-collect accounts are a fundamental component of efficient payment collection, and the Olympus bulk collect feature takes them to the next level. E-collect accounts offer businesses a secure and streamlined way to receive payments online. Bulk collect makes the process even more straightforward, as it integrates seamlessly with E-collect accounts, providing enhanced automation, comprehensive data management, and improved customer experience. Businesses can rest assured that the bulk collect feature provides an all-encompassing solution for e-collection, saving time and effort while ensuring that payments are collected effectively and securely."
                />
              </div>
            </>
          }
        />
      </div>
    </div>
  );
};

export default bulkCollect;
