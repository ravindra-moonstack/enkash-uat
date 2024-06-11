import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../../../common/constant";
import faqData from "./faq-data";
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
import Footer from "@/components/footer/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Decentralized Finance Payment Solutions for Businesses - EnKash",
  description:
    "Decentralized Payment is an emerging digital ecosystem that allows people to send, purchase, and exchange financial assets without relying on banks, brokerages, or exchanges.",
};

const seamlessBanking = () => {
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
            <Heading
              title="Seamless Banking"
              size="h4"
              weight="4"
              useH1TagInHtml={true}
            />
          </div>

          <div className="d-flex flex-column">
            <Heading
              title="Leverage business"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading
              title="banking with your"
              color="white"
              size="h2"
              weight="7"
            />
            <Heading title="existing Bank" color="white" size="h2" weight="7" />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Experience seamless integration, secure transactions, and customization with your existing bank account and manage business finances efficiently"
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
                url="/sales/?source=payables"
              />
            </div>
            <div>
              <SecondryButton
                title="Get Free Demo"
                actionImage={whiteArrow}
                iconSize={15}
                url="/sales/?source=payables"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div className={styles.lottie_container}>
            {" "}
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
              itemArray: ["Multiple", "Bank Accounts"],
              oldWayDescription:
                "Managing multiple bank accounts manually for payments and collections has been the traditional way of business.",
              newWayDescription:
                "With EnKash, businesses can decentralize payments and collections by working with just one branch of their existing bank.",
            },
            {
              itemArray: ["Transparency", "& Control"],
              oldWayDescription:
                "The conventional way of banking does not provide transparency as decision-making and payments are controlled by authorized individuals only which operate centrally.",
              newWayDescription:
                "Automation via seamless banking reduces the risk of central dependency while it gives total transparency by way of spend controls and enhanced due diligence before payments are remitted.",
            },
            {
              itemArray: ["Define", "Limits"],
              oldWayDescription:
                "Businesses can't define approval and spend limits with physical bank accounts.",
              newWayDescription:
                "Bulk rental payments can be made  seamlessly and hassle-free.",
            },
            {
              itemArray: ["Real-Time Visibility", "& Reconciliation"],
              oldWayDescription:
                "Data accessibility and visibility are rare when handled manually. And, data reconciliation is tedious when done manually and cannot be made available in real-time.",
              newWayDescription:
                "Users have 100% visibility of their data across different bank accounts along with real-time reconciliation.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-2">
          <Heading
            title="Business banking just"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}got smoother & simplified${space}`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading
            title="with greater visibility & security"
            color="black"
            size="h1"
            weight="6"
          />
        </div>
        <div className="d-flex justify-content-center text-center mb-5"></div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Customize As Per Need"
              description="Businesses can define a customized logic for decentralized payments as per their requirements"
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Visibility & Tracking"
              description="It becomes easier for businesses to have clear visibility of all their transactions on a single dashboard. This facilitates data-based decision-making and avoids overspending"
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle=" Virtual Accounts"
              description="Decentralized payments for businesses can have dedicated platform debit cards for each branch. This facilitates easy and smooth management"
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Define"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Limits"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Businesses can define velocity control by defining a limit for the amount to be used and also set approval limits"
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Cashflow Management"
              description="Enterprises are assured to have a streamlined cash flow as their payables and collections will be in place with receipts captured properly and timely"
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Seamless Integration"
              description="Businesses can easily integrate banking facilities via EnKash without much technical intervention"
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
                    title={`Experience business banking in a${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <div>
                    <Heading
                      title="digitized way"
                      color="rainy-blue"
                      size="h1"
                      weight="6"
                    />
                    <Heading
                      title={`${space}with EnKash`}
                      color="white"
                      size="h1"
                      weight="6"
                    />
                  </div>
                </div>
              </div>
            </>
          }
          mainTitle="How does it work?"
          carouselData={carouselData}
          carouselBg={caraouselBg}
        />
      </div>
      {/* <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how our Seamless Banking can revolutionize the way you work!"
        />
      </div> */}
      <div
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs section will help you learn about seamless banking in detail"
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
          title="Seeking further understanding of seamless banking?"
          description="Personalized digital banking services based on data and insights about the user’s preferences is seamless banking. It exists to ensure a consistent and secure business experience for the user."
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
                  title="What is a decentralized accounting system?"
                />
              </div>
              <div className="mb-5">
                <p>
                  A way to decentralize the authority of making and collecting
                  payments from their respective department vendors and
                  customers is what makes a decentralized accounting system. The
                  automation leading the system facilitates{" "}
                  <Link
                    href="https://www.enkash.com/olympus/receivables/invoices/"
                    target="_blank"
                  >
                    invoice uploading,
                  </Link>{" "}
                  data collection, and reconciliation with enhanced visibility
                  and customization as required.
                </p>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How seamless banking works?"
                />
              </div>
              <div className="mb-5">
                <p>
                  Seamless banking enables the integration of banks and a{" "}
                  <Link href="https://www.enkash.com/" target="_blank">
                    financial platform to streamline
                  </Link>{" "}
                  payments for customers. It allows easy and secure transactions
                  with automation at the core. Users can make their payments
                  easily and generate real-time data for reconciliation.
                </p>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How does EnKash’s seamless payment solutions benefits small businesses?"
                />
              </div>
              <div className="mb-5">
                <p>
                  The seamless payments solution by EnKash provides greater
                  flexibility and visibility into business transactions
                  providing data that can drive business to greater heights. It
                  also eases{" "}
                  <Link
                    href="https://www.enkash.com/olympus/receivables/bulk-collect/"
                    target="_blank"
                  >
                    business payments and collections
                  </Link>{" "}
                  relieving the users from the hassle of managing multiple
                  transactions across different bank branches. It streamlines
                  reconciliation for the audit team to facilitate
                  decision-making in real-time.
                </p>
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="payables" />
    </div>
  );
};

export default seamlessBanking;
