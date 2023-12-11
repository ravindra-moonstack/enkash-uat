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
import { Metadata } from "next";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import Link from "next/link";
import FAQHtml from "./faq-html";
import HeaderWrapper from "@/components/header/header-wrapper";

export const metadata: Metadata = {
  title:
    "Virtual Cards – Prepaid Virtual Cards for Businesses in India - EnKash",
  description:
    "Choose best Prepaid Virtual cards for businesses to manage employee expenses and spending. Enkash offers prepaid virtual cards for businesses in India",
};

const virtualCard = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <HeaderWrapper />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div className="d-flex">
              <Heading
                title={`Slash |${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
            <Heading title="Virtual Cards" size="h4" weight="4" />
          </div>
          <div className="d-flex flex-column">
            <Heading
              title="Secure & easy-to-use"
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="virtual cards for all"
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="your payment needs"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Make it easy for your modern business to track and reconcile all payments with the new-age and innovative virtual cards"
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
              itemArray: ["Safety Concerns"],
              oldWayDescription:
                "Physical cards are often at a high risk of getting lost or stolen.",
              newWayDescription:
                "A virtual card is always available on your device, reducing its chances of getting lost or stolen.",
            },
            {
              itemArray: ["Convenience"],
              oldWayDescription:
                "It is challenging to have a physical card handy whenever making online payments.",
              newWayDescription:
                "Access to a virtual card anytime and from anywhere makes it convenient.",
            },

            {
              itemArray: ["Issuance"],
              oldWayDescription:
                "The process of getting a physical card is often time-consuming and may take a week’s time to reach you.",
              newWayDescription:
                "A virtual card can be issued instantly after the admin’s approval.",
            },
            {
              itemArray: ["Payment Processing"],
              oldWayDescription:
                "This card requires a longer time to process payment.",
              newWayDescription:
                "Payments are processed instantly on this card, and can be blocked immediately in case of fraud or misuse.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-flex flex-column text-center mb-5">
          <Heading
            title="Make way for virtual cards & enjoy"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title="greater flexibility, convenience & safety"
            color="equity-blue"
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
                    title="Cost"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Saving"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Virtual cards can help businesses save money by reducing processing costs, eliminating the need for physical cards or checks, and reducing the risk of fraud"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Streamline Operations"
              description="Virtual cards ensure that your financial operations are streamlined and spend less time tracking payments, getting approvals, and recordkeeping"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Enhanced Tracking"
              description="Offers detailed tracking capabilities, providing businesses with real-time insights into your spending to identify areas to save money"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Reduced Risk Of Fraud"
              description="It can be set up with spending limits and other controls, reducing the risk of unauthorized or fraudulent transactions. It 
              helps protect your privacy by eliminating any risk associated with lost paperwork"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Customizable Cards"
              description="Virtual cards can be customized for different use cases like vendor payments, rental, GST, and even for other business-related
              expenses like digital marketing, travel and fuel cards, etc"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="No Additional cost"
              description="Having a virtual card doesn’t come with an extra cost"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Vendor Relationships"
              description="Virtual cards enable your business to make payments quickly and securely, which improves relations with your vendors and helps you negotiate better deals"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <div className="d-flex">
                  <Heading
                    title="Maximize your business efficiency with virtual cards"
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
                  <Link href="https://home.enkash.com/signup" target="_blank">
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
    </div>
  );
};

export default virtualCard;
