import Image from "next/image"
import { Metadata } from "next"

import styles from "./page.module.scss"
import { space } from "@/common/constant"
import { blogData, carouselData, productData } from "./data"
import faqData from "./faq-data"
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from "."
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
} from "@/components"
import generateMetaData from "@/common/utils/metaData"
import { userPlus, numberOne, stack } from "@/components/three-steps/"

export const metadata: Metadata = generateMetaData({
  title: "Bulk Collect – Corporate E-Collect and Payment Collection | EnKash",
  description:
    "Revolutionize your business payment collection with Bulk Collect. Streamline data management, enhance efficiency, and ensure seamless payment processes. Explore the benefits with EnKash today",
  alternates: {
    canonical: "https://www.enkash.com/bulk-collect/",
  },
  faqData: faqData,
})

const bulkCollect = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/bulk-collect/`}
        faqData={faqData}
      />
      <Header utmSource="receivables" />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <Heading
              title="Bulk Collect"
              size="h4"
              color="rainy-blue"
              weight="4"
              useH1TagInHtml={true}
            />
          </div>
          <Heading
            title={`Take Control of Your Business${space}`}
            color="white"
            size="h2"
            weight="7"
          />
          <div className="d-inline">
            <Heading
              title={`Collection with EnKash${space}`}
              color="white"
              size="h2"
              weight="7"
            />
          </div>
          <Heading
            title="Bulk Collect"
            color="rainy-blue"
            size="h2"
            weight="7"
          />

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="No more outstanding invoices and manual follow-ups. Embrace automation and efficiency with EnKash’s Bulk Payment Collection solution."
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
                url="/sales/?source=receivables"
              />
            </div>
            <div>
              <SecondryButton
                title="API Documentation"
                actionImage={whiteArrow}
                iconSize={15}
                url="https://docs.enkash.com/"
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
            title="No More Payment Delays"
            steps={[
              {
                icon: userPlus,
                text: "Instant",
              },
              {
                icon: stack,
                text: "Smart",
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
        className={`${styles.third_row} row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading
            title="Why EnKash for Bulk Payment Collection"
            color="black"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Streamlined Payment Reminders"
              description="Automate payment reminders with EnKash to reduce delays, improve collections, and free up resources for growth. Stay proactive, eliminate manual tracking, and maintain strong customer relationships by never missing a payment reminder."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Bulk Invoice Distribution"
              description="Send multiple invoices in one click, reduce errors, and ensure accurate details. Simplify workflows and accelerate cash flow with this smart, efficient invoicing solution."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Enhanced Reconciliation Accuracy"
              description="Track payment collection in real time with EnKash’s advanced tools. Automated reconciliation eliminates discrepancies, saves time, and provides actionable insights for accurate transactions and better decision-making."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Improved Customer Experience"
              description="EnKash automates repetitive tasks, enabling your team to focus on customer relationships. Deliver a hassle-free payment experience with prompt notifications and accurate invoices, boosting satisfaction, loyalty, and reputation with an optimized collection process."
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
                <div className="text-center d-inline flex-column">
                  <Heading
                    title={`Business   ${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title={`bulk collections  ${space}`}
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="made easy and efficient"
                    color="white"
                    size="h1"
                    weight="6"
                  />
                </div>
              </div>
            </>
          }
          mainTitle="How EnKash Bulk Collect Works"
          carouselData={carouselData}
          carouselBg={caraouselBg}
        />
      </div>

      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how bulk collect can benefit your business and employees!"
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
            title="Don't worry! Our FAQs section will help you learn about bulk collect in detail"
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
          title="Check Out EnKash’s Other Payment Products and Solutions"
          data={productData}
        />
      </div>

      <div className={`${styles.sixth_row} row`}>
        <ContactUsCard
          title="Seeking further understanding of bulk collect?"
          description="Bulk collect is an automation feature in EnKash Olympus that sends invoices to multiple customers in one click. This enables businesses to quickly follow up with the customer and keep a check on their business cash flow."
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
                  title="How does bulk collect revolutionize payment collection for businesses and employees?"
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
                  title="What is the essence of payment collections, and how does bulk collect contribute?"
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
                  title="How does bulk collect enhance the payment collection process?"
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
                  title="What are the limits of bulk collect?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Understanding the limits of bulk collect is essential for businesses. While the Olympus platform’s bulk collect feature offers numerous advantages, it's essential to know the limits specific to your business needs. These limits can vary depending on your payment collection requirements and the type of payments you are managing. However, rest assured that the feature is designed to accommodate a wide range of businesses, offering flexibility and scalability to meet your unique needs."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What is the process of bulk collect?"
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
                  title="What are E-collect accounts?"
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
      <Footer utmSource="receivables" />
    </div>
  )
}

export default bulkCollect
