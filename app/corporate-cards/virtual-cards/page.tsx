import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import { space } from "../../../common/constant";
import { blogData, carouselData, productData } from "./data";
import faqData from "./faq-data";
import { Header, Footer, BlogWrapper } from "@/components";
import { FAQHtml } from "@/components/faq";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import { Metadata } from "next";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import generateMetaData from "@/common/utils/metaData";
import StructuredData from "@/components/head/structuredData";
import { userPlus, numberOne, stack } from "@/components/three-steps/";
import AllProducts from "@/components/all-products/all-products";

export const metadata: Metadata = generateMetaData({
  title:
    "Virtual Cards – Prepaid Virtual Cards for Businesses in India - EnKash",
  description:
    "Choose best Prepaid Virtual cards for businesses to manage employee expenses and spending. Enkash offers prepaid virtual cards for businesses in India",
  alternates: {
    canonical: "https://www.enkash.com/corporate-cards/virtual-cards/",
  },
  faqData: faqData,
});

const virtualCard = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/corporate-cards/virtual-cards/`}
        faqData={faqData}
      />
      <Header utmSource="corporate_cards" />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <Heading
              title={`Virtual Cards${space}`}
              color="rainy-blue"
              size="h4"
              weight="7"
            />
          </div>
          <div className="d-flex flex-column">
            <Heading
              title="Secure and Efficient"
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title=" Payments with EnKash "
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="Virtual Prepaid Card"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Empower your organization to control, track, and optimize spending like never before."
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
                url="/sales/?source=corporate_cards"
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
            title="Elevate Digital Transactions with the Best Virtual Card"
            steps={[
              {
                icon: userPlus,
                text: "Instant",
              },
              {
                icon: stack,
                text: "Secure",
              },
              {
                icon: numberOne,
                text: "Trackable",
              },
            ]}
          />
        </div>
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-flex flex-column text-center mb-5">
          <Heading
            title="Best Virtual Prepaid Cards"
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading
            title="in India - Modern Solutions for Managing Business Expenses"
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
                    title="Reduce Business Costs with "
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Smarter Payment Solutions"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              source="corporate_cards"
              description="Save costs by eliminating the need for physical cards, including production and maintenance fees. Advanced fraud control features minimize the risk of unauthorized transactions, ensuring secure financial operations without additional expenses."
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Stay in Control with "
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Real-Time Expense Insights"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Monitor every transaction in real-time with our intuitive dashboard. Access detailed insights into spending trends, helping your business optimize budgets and make informed financial decisions."
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Tailor Your Virtual"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Card to Fit Your Needs"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Design virtual cards tailored for specific needs such as vendor payments, SaaS subscriptions, or travel expenses. Set individual or departmental spending limits and usage policies to ensure compliance and efficiency."
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Strengthen Vendor Trust"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="with Timely Payments"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Ensure timely and secure payments to vendors, fostering trust and better business terms. Streamlined payment processes enable quicker transactions, enhancing vendor satisfaction."
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="No Expense Oversight"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="with One Dashboard"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Easily manage multiple cards through a centralized, user-friendly interface. Take immediate action by monitoring, blocking, or canceling cards, all while maintaining full control over business expenses."
              source="corporate_cards"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.second_row}  bg-white`}>
        <AllProducts
          title="An Array of Corporate Cards by"
          subtitle="EnKash"
          data={productData}
        />
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <Heading
                  title="Maximize your business efficiency with virtual cards"
                  color="rainy-blue"
                  size="h1"
                  weight="6"
                />
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
          title="Learn how virtual cards can revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about virtual cards in detail"
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
          title="Seeking further understanding of virtual cards?"
          description="Virtual cards are digital, secure tools for making online transactions. They are readily available via EnKash and are user-friendly, convenient, and customizable."
          source="corporate_cards"
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
                  title="What are the features of a virtual credit card?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Virtual cards are digital versions of traditional debit cards. Here are some of the features of virtual cards:"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Easy accessibility: "
                />
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="You must register on EnKash to get your business virtual cards."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Multiple usages: "
                />
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="These virtual cards can be used for rental payments, tax payments, and other business-related expenses."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Convenience & Secure: "
                />
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Virtual cards are a convenient and secure mode of payment."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Easy to block: "
                />
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="In case they are being misused, you can easily block these cards to avoid misuse."
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="No credit check: "
                />
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Virtual card issuance doesn’t require a credit check."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the benefits of a virtual card?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Here are some benefits of a virtual card:"
                />
              </div>
              <div className="mb-3">
                <Heading size="h6" color="black" weight="6" title="Secure: " />
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Virtual cards are secure as they require OTP for each online transaction."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Accessible: "
                />
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="These cards are easily accessible from mobile devices and website from any location."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Better control:  "
                />
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="With these virtual cards, you can have better financial control by setting your spending limits."
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="User-friendly:  "
                />
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Virtual cards are easy to use for online transactions because of their virtual nature."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Are virtual cards safe?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Virtual cards are safe for online transactions. These cards offer temporary numbers separate from your bank account numbers, keeping your information secure. With EnKash, you can always be assured of virtual cards' security and credibility."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How can I get a virtual card?
                  "
                />
              </div>
              <div className="mb-5">
                <p>
                  You can{" "}
                  <Link href="/sales" target="_blank">
                    {" "}
                    sign up on EnKash
                  </Link>{" "}
                  to get a virtual card for your business. After signing up,
                  enter your required details and complete your KYC. The virtual
                  card will be generated as soon as your verification is done.
                  Create a PIN for its usage, transfer funds from your primary
                  account to this virtual card, and use it freely for online
                  purchases.
                </p>
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How to use a virtual card?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="You can use a virtual card by following these easy steps:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Sign up on EnKash with your valid number or email address
                  </li>
                  <li>
                    Generate a virtual card number, CVV, and expiration date
                  </li>
                  <li>Create a pin to keep it secure</li>
                  <li>Use your virtual card like a debit card</li>
                  <li>
                    Manage your virtual card from the EnKash dashboard easily
                  </li>
                </ul>
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Who can ideally use a virtual card?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Virtual cards are great for businesses to manage their employee expenses and spends. Businesses can allocate funds to each department head using a virtual card without getting involved in every business transaction directly. A virtual card brings transparency to the business as it is easily accessible and trackable. It also helps analyze areas where spends can be controlled."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Business owners can restrict virtual cards to manage expenses. They are safe for business-related transactions and can be accessed from anywhere while traveling for work. They can also be easily revoked in case of business fraud and misuse."
                />
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="corporate_cards" />
    </div>
  );
};

export default virtualCard;
