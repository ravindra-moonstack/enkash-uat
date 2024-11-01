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
import BlogWrapper from "@/components/blog/blog-wrapper";
import Header from "@/components/header/header";
import { Metadata } from "next";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import FAQHtml from "./faq-html";
import Footer from "@/components/footer/footer";
import generateMetaData from "@/common/utils/metaData";

export const metadata: Metadata = generateMetaData({
  title: "Auto Payment Collection Platform | What is Auto Collect  - EnKash",
  description:
    "Auto Collect enables you to collect payments from customers via bank transfers (NEFT, RTGS, IMPS ) and UPI. Book Demo Now !!",
  alternates: {
    canonical: "https://www.enkash.com/olympus/receivables/auto-collect",
  },
  faqData: faqData,
});

const AutoCollect = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <Header utmSource="receivables" />
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
            <div>
              <Heading
                title="Auto Collect"
                size="h4"
                weight="4"
                useH1TagInHtml={true}
              />
              <sup className="sup-symbol"></sup>
            </div>
          </div>
          <div className="d-flex flex-column">
            <Heading
              title={`Get paid faster${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title={`and boost cash flow${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="with auto collect"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Effortlessly collect payments through diverse channels like NEFT, IMPS, and RTGS, leveraging auto collect for real-time reconciliation via dedicated customer virtual accounts"
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
          <ThreeSteps />
        </div>
      </div>

      <div className={`${styles.second_row} row d-flex bg-white row-padding`}>
        <EnkashWay
          progressData={[
            {
              itemArray: ["Reconciliation ", "Process"],
              oldWayDescription:
                "Reconciliation was a labor-intensive process that involved manually matching incoming payments with invoices/records. ",
              newWayDescription:
                "With EnKash, enjoy instant reconciliation capabilities, ensuring that incoming payments are automatically matched with invoices.",
            },
            {
              itemArray: ["Payment ", "Settlements"],
              oldWayDescription:
                "Slow payment settlements hindered cash flow, causing operational challenges. And the inability to settle on holidays or weekends also added to the delays.",
              newWayDescription:
                "EnKash enables 365-day payment settlements, meaning you can access funds at your convenience, even on bank holidays, giving flexibility to better manage your cash flow and operational needs.",
            },
            {
              itemArray: ["Multi-Branch ", "Management"],
              oldWayDescription:
                "Difficult to manage multiple branches/departments as there was no way to track transactions for individual units effectively.	",
              newWayDescription:
                "Tailored for businesses with multiple branches or franchises, EnKash auto collect offers centralized control with individualized tracking for each unit.",
            },
            {
              itemArray: ["Notification ", "and Alerts"],
              oldWayDescription:
                "With the old way, businesses had to rely on manual checks to stay informed about successful payments.",
              newWayDescription:
                "With EnKash, get real-time alerts through webhooks and dashboards. So that you can get immediate notification of successful payments, enabling you to stay on top of your financial transactions effortlessly.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center pb-2">
          <Heading
            title="Business auto collections made"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}easy and efficient`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Virtual Solutions"
              description="Utilize the power of unique virtual payment addresses and virtual bank accounts to automatically collect and reconcile all bank transfers, including UPI, NEFT, IMPS, and RTGS"
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Zero Cost Creation"
              description="Enjoy the convenience of creating unlimited virtual payment addresses at zero cost"
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Multiple Virtual Bank Accounts"
              description="Manage collections from diverse sources seamlessly by creating unique virtual bank accounts for each business unit or customer, enhancing financial transparency"
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Personalized Branding"
              description="Add a personal touch to your VPAs with a custom brand prefix, reinforcing your brand identity with every transaction"
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Split Settlements"
              description="Automatically split the settled amount in the virtual account among multiple parties and accounts based on predefined percentages"
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Account Management"
              description="Take control of your virtual accounts in real-time. Activate or deactivate accounts as needed, ensuring seamless fund transfers"
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
                <div className="text-center d-flex flex-column">
                  <Heading
                    title={`Easily speed up your ${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="collection efforts with auto collect"
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
          title="Learn how Auto Collect can revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about auto collect in detail"
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
          title="Seeking further understanding of auto collect?"
          description="Auto collect streamlines the collection process for businesses, making it easier to receive payments from customers via different channels. It automates tasks such as reconciliation, provides real-time alerts, and offers centralized control for enhanced efficiency and accuracy."
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
                  size="h3"
                  color="black"
                  weight="6"
                  title="What type of details can I pull from the auto collect dashboard?"
                />
              </div>
              <div className="mb-5">
                <p>
                  The auto collect dashboard offers a variety of details to
                  cater to your specific needs. These reports include
                  transaction summaries, settlement details, payment histories,
                  and more, providing comprehensive insights into your payment
                  collection activities.
                </p>
              </div>

              <div className="mb-3">
                <Heading
                  size="h2"
                  color="black"
                  weight="6"
                  title="What is the essence of collecting payments?"
                />
              </div>
              <div className="mb-5">
                <p>
                  Collecting payments is essential for businesses to maintain
                  cash flow and sustain operations. It involves receiving funds
                  from customers or clients in exchange for goods or services
                  rendered, ensuring financial stability and growth.
                </p>
              </div>

              <div className="mb-3">
                <Heading
                  size="h2"
                  color="black"
                  weight="6"
                  title="What is the auto collect process?"
                />
              </div>
              <div className="mb-5">
                <p>The auto collect process involves:</p>
                <ul>
                  <li>
                    Generating unique VPA or UPI IDs for each branch,
                    department, or customer
                  </li>
                  <li>
                    Payments are then received via various channels like NEFT,
                    RTGS, IMPS, etc., directly to virtual bank accounts
                  </li>
                  <li>
                    The business gets real-time notifications when the payment
                    is received in their{" "}
                    <a href="https://www.enkash.com/resources/blog/benefits-of-virtual-bank-account/ ">
                      virtual bank account
                    </a>
                  </li>
                  <li>
                    All the transactions can then be reconciled by automatically
                    mapping the payments with the invoices
                  </li>
                </ul>
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="receivables" />
    </div>
  );
};

export default AutoCollect;
