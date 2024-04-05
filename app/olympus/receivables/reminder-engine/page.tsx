import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../../../common/constant";
import faqData from "./faq-data";
import blogData from "./blog-data";
import carouselData from "./carousel-data";
import { banner, bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
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
import Link from "next/link";

export const metadata: Metadata = {
  title:
    " Payment Reminders: Automate Payment Collection Reminders - EnKash.com",
  description:
    "Reminder engines help businesses keep track of the payments to be received by the customer. Businesses can use these reminders to collect payments timely and facilitate their cash flow.",
};

const reminderEngine = () => {
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
                title="Reminder Engine"
                size="h4"
                weight="4"
                useH1TagInHtml={true}
              />
            </div>
          </div>
          <div className="d-flex flex-column">
            <Heading
              title="Get paid faster by"
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="automating collection"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading
              title="reminders"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Forget manual reminders, automate business collections with ease today"
              size="h6"
              weight="5"
            />
          </div>
          <div className="my-5 d-flex flex-row justify-content-start align-items-center">
            <div className="me-2">
              <PrimaryButton
                title="EnKash Now"
                theme="blue"
                url="https://home.enkash.com/signup?utm_source=receivables"
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
            {/* <Image src={banner} alt="reminder flow image" /> */}
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
              itemArray: ["Automation"],
              oldWayDescription:
                "Manually calling and following up with each customer for their outstanding payment is tedious and requires a lot of time.",
              newWayDescription:
                "With EnKash, businesses can automate payment reminders to customers and save time for other productive work.",
            },
            {
              itemArray: ["Instant", "Collection"],
              oldWayDescription:
                "The conventional way of collection led to delays and ultimately affects the cash flow of the business.",
              newWayDescription:
                "Businesses can embed payment links within the reminder engine channel and collections can be done instantly.",
            },
            {
              itemArray: ["DSO", "Management"],
              oldWayDescription:
                "Businesses are unable to make collections timely and this increases their Days Sales Outstanding (DSO). Often, they have to rely on loans to meet their business financial requirements.",
              newWayDescription:
                "With EnKash, businesses can automate collection reminders and fasten their  collections eventually decreasing their DSO and making their cash flow steady.",
            },
            {
              itemArray: ["Better Customer", "Relationships"],
              oldWayDescription:
                "The manual way of collection doesn’t allow businesses to know customer behavior and payment patterns; thus having a gap between them.",
              newWayDescription:
                "EnKash brings businesses closer to their customers by providing insights into their behavior and patterns. This enables businesses to make decisions keeping customers at the forefront and establish better customer relationships.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading
            title="Automated reminder engine for"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}efficient receivables & steady cash flow`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Choice of Reminders"
              description="There are two types of reminders — invoice reminders and automatic reminders. While invoice reminders can be sent to specific customers by looking at their payment patterns and timeline. Automatic reminders can be set as and when the customer is onboarded"
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Complete Visibility"
              description="Businesses can have an extensive view of the customer’s payment history to understand the payment behavior"
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Embedded Links"
              description="Payment reminders are sent to the customer with embedded links making it easier for them to pay. This facilitates the cash flow of the business"
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Total"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Control"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              whiteTitle="Total Control"
              description="Enterprises have complete freedom to decide when to send the reminders and which channel to use to collect payments — email, SMS, or WhatsApp"
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Multiple Reminders"
              source="receivables"
              description="With invoice reminders, businesses can select and dispatch multiple reminders using a single click at the same time. This helps save time and hassle of sending individual reminders"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <div className="text-center d-inline px-5">
                  <Heading
                    title={`Facilitate business processes and efficient cash flow with an${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="automated reminder engine"
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
      {/* <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how virtual accounts can revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about the reminder engine in detail"
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
          title="Seeking further understanding of the reminder engine?"
          description="Reminder engines help businesses keep track of the payments to be received by the customer. Businesses can use these reminders to collect payments timely and facilitate their cash flow."
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
                  title="How do payment reminders work?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Payment reminders are automated messages that help businesses collect payments from their customers timely. They facilitate easy payment collection and enable businesses to fulfill their demands related to cash flow and other business processes."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Can we set payment reminders before the due date?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Enterprises can define the reminders as per their convenience. They can set reminders for pre-payment and late payments"
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How to set up an automated payment reminder?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Define the reminder timeline, it could be before or after the due date. Certain businesses give early payment discounts which can be availed if reminders are received before the date of payment."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How do payment reminders facilitate cash flow in a business?"
                />
              </div>
              <div className="mb-3">
                <p>
                  <Link
                    href="https://www.enkash.com/resources/blog/benefits-of-enabling-auto-reminder-for-bill-payments/"
                    target="_blank"
                  >
                    Payment reminders
                  </Link>{" "}
                  can facilitate cash flow in a business in the following ways:
                </p>
              </div>
              <div className="mb-3">
                <p>
                  Reducing late payments: Businesses can reduce late payments by
                  reminding customers of their due payments and settling their
                  outstanding amounts instantly.
                </p>
              </div>
              <div className="mb-3">
                <p>
                  Better customer relationship: Enterprises can establish better
                  customer relationships with timely payments and understand
                  their payment patterns better.
                </p>
              </div>
              <div className="mb-3">
                <p>
                  Improved accounts receivable: With payment reminders in place,{" "}
                  <Link
                    href="https://www.enkash.com/olympus/receivables/"
                    target="_blank"
                  >
                    accounts receivables
                  </Link>{" "}
                  of a business can be accessed and maintained efficiently with
                  easy access to outstanding invoices and identification of the
                  payments due.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  Cash flow prediction: Businesses can predict their cash flow
                  better and use it for the expansion of the processes with
                  efficient decision-making.
                </p>
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="receivables" />
    </div>
  );
};

export default reminderEngine;
