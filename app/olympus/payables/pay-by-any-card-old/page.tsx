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
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pay Bill Payments by Credit & Debit Card Online - EnKash",
  description:
    "Pay by any card offers flexibility to users, allowing them to make various business payments using their preferred card.",
  alternates: {
    canonical: "https://www.enkash.com/olympus/payables/pay-by-any-card/",
  },
};

const payByAnyCard = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <Header utmSource="payables" />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div className="d-flex">
              <Heading
                title={`Payables |${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
            <Heading
              title="Pay By Any Card"
              size="h4"
              weight="4"
              useH1TagInHtml={true}
            />
          </div>

          <div className="d-flex flex-column">
            <Heading
              title="Make effortless"
              color="white"
              size="h2"
              weight="7"
            />
            <div>
              <Heading
                title={`business${space}`}
                color="white"
                size="h2"
                weight="7"
              />
              <Heading
                title="payments with"
                color="rainy-blue"
                size="h2"
                weight="7"
              />
            </div>

            <Heading
              title="your preferred card"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Optimize working capital by easily paying for business transactions, like vendor, rental, utility, and GST payments, using any card"
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
              itemArray: ["Access", "to Capital"],
              oldWayDescription:
                "Earlier, businesses either missed payments due to lack of funds or had to rely on loans for immediate access to capital.",
              newWayDescription:
                "With our card payment solution, you can get instant access to unutilized funds available on your credit card, to make business payments.",
            },
            {
              itemArray: ["Payment", "Methods"],
              oldWayDescription:
                "Earlier, payment options were limited to cash, bank transfers, or specific cards approved by the supplier, posing challenges for users, where preferred payment methods were not accepted.",
              newWayDescription:
                "EnKash gives flexibility to users by enabling them to make business payments using any card of their choice, including credit cards.",
            },
            {
              itemArray: ["Card", "Acceptance"],
              oldWayDescription:
                "Limited to suppliers who accept debit/credit cards or have online payment gateways in place.",
              newWayDescription:
                "EnKash eliminates this constraint. Users can pay any supplier directly into their bank accounts even without direct card acceptance with our card payment solution.",
            },
            {
              itemArray: ["Cash Flow", "Management"],
              oldWayDescription:
                "The potential for ups and downs in the cash flow cycle necessitated careful planning and coordination to ensure timely business payments.",
              newWayDescription:
                "Easily extend payment cycles by leveraging the credit period of your card and optimize cash flow.",
            },
            {
              itemArray: ["Control"],
              oldWayDescription:
                "Manual tracking and reconciliation used to take up a lot of man-hours and were prone to errors.",
              newWayDescription:
                "With EnKash, effortlessly track and manage all payments in one centralized location, saving time and enhancing accuracy.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-2">
          <Heading
            title="Unlock a smarter way"
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}to make business payments`}
            color="black"
            size="h1"
            weight="6"
          />
        </div>
        <div className="d-flex justify-content-center text-center mb-5"></div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Extended Credit Period"
              description="Gain a credit period of up to 52 days†, allowing you to optimize your cash flow and manage expenses more efficiently"
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading title="No" color="rainy-blue" size="h2" weight="6" />
                  <Heading
                    title="Limit"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Get the flexibility to transfer any amount from your credit card to the beneficiary’s bank account with any restriction at any time, and anywhere"
              source="payables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="More"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Savings"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Save on interest costs and optimize your working capital by leveraging the benefits of contactless card payment with pay by any card"
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Improved"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Cash Flow"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Experience enhanced liquidity with reduced immediate cash outflows, leading to better cash flow management"
              source="payables"
            />
          </div>
        </div>
        <div className="mt-5">
          <Heading
            size="h5"
            title="(†Terms and conditions apply. The credit period is subject to approval and may vary based on individual banking arrangements.)"
            color="black"
          />
        </div>
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <div className="text-center d-flex flex-column">
                  <Heading
                    title={`Experience enhanced${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="cash flow, flexible payments, and more"
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
          title="Learn how our pay by any card can revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about our pay by any card in detail"
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
          title="Seeking further understanding of pay by any card?"
          description='"Pay by any card" typically refers to the ability to make a payment using any valid credit or debit card, regardless of the issuing bank or financial institution. It offers flexibility to users, allowing them to make various business payments by cards.'
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
                  title="How long does the settlement process usually take when we make payments using a card?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="We aim to provide fast and efficient services, which is why the settlement process only takes T+1 day which means the beneficiary will swiftly receive the money on the next business day."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How can I get an extended credit period using my credit card?"
                />
              </div>
              <div className="mb-5">
                <p>
                  By utilizing a{" "}
                  <Link
                    href="https://www.enkash.com/resources/blog/enable-payments-with-virtual-cards-for-business/"
                    target="_blank"
                  >
                    credit card for payments,
                  </Link>{" "}
                  you ensure timely payment to your recipient, while delaying
                  the actual cash outflow until your credit card bill's due
                  date. This strategy grants you an extended payment term of up
                  to 52 days. The credit period is subject to approval and may
                  vary based on individual banking arrangements.
                </p>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Are there any additional fees associated with pay by any card?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="No, there are no additional fees, but you just have to pay a basic transaction fee at the time of making the payment."
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

export default payByAnyCard;
