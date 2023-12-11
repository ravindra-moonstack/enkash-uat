import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../../../constant/common";
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
import HeaderWrapper from "@/components/header/header-wrapper";
import { Metadata } from "next";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import FAQHtml from "./faq-html";

export const metadata: Metadata = {
  title:
    "Payment Link: Create Payment Links & Collect Bulk Payments Online - EnKash",
  description:
    "Effortlessly Create Payment Links & Securely Accept Payments Online. Explore hassle-free transaction management for your business and revolutionize your payment collection methods",
};

const paymentLinks = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <HeaderWrapper />
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
            <Heading title="Payment Links" size="h4" weight="4" />
          </div>

          <div className="d-flex flex-column">
            <Heading
              title="Pace up your collection"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <div>
              <Heading
                title={`process${space}`}
                color="rainy-blue"
                size="h2"
                weight="7"
              />
              <Heading
                title="with EnKash’s payment links"
                color="white"
                size="h2"
                weight="7"
              />
            </div>
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Quicken the collection process with embedded payment links in invoices. Build stronger relationships with your customers and improve your DSO"
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
              itemArray: ["Payment", "Process"],
              oldWayDescription:
                "Without a payment link, customers had to manually enter transaction details to make a payment, which is prone to errors and delays.",
              newWayDescription:
                "Payment links provide a quick and easy way for customers to make payments. They can simply click on the link and enter their details to complete the payment.",
            },
            {
              itemArray: ["Security"],
              oldWayDescription:
                "Traditional methods lack the secure framework needed for payments; increasing the risk of data breaches.",
              newWayDescription:
                "Payment links offer more security than traditional payment methods. Our payment links use encryption and other security measures to protect payment information.",
            },
            {
              itemArray: ["Payment", "Tracking"],
              oldWayDescription:
                "Manually tracking customer payments is time-consuming.",
              newWayDescription:
                "Payment links from EnKash provide businesses with better tracking and record-keeping capabilities.",
            },
            {
              itemArray: ["Customer", "Experience"],
              oldWayDescription:
                "Incessantly following up with customers to make payments without providing them an easy way to do so can cause friction between the customer and your business.",
              newWayDescription:
                "Payment links improve the overall customer experience by bringing in convenience. This helps businesses build stronger customer relationships, and improve DSO.",
            },
            {
              itemArray: ["Cash Flow", "Optimization"],
              oldWayDescription:
                "Traditional banking methods require much processing time, hindering your business’s cash flow even if the payment is made on time.",
              newWayDescription:
                "Payment links can help businesses improve their cash flow by reducing the time it takes to receive payments.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-flex flex-column align-items-center mb-5">
          <div className="text-center">
            <Heading
              title={`Enable payment links${space}`}
              color="equity-blue"
              size="h1"
              weight="6"
            />
            <Heading
              title="in your invoices for"
              color="black"
              size="h1"
              weight="6"
            />
          </div>

          <Heading
            title="better collections"
            color="black"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Quicker Collections"
              description="Payment links embedded in digital invoices or other forms of communication quicken the collection or payment process"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Payment Options"
              description=" Embedded payment links ensure customers have various payment options once they click the embedded payment link"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Easily Accessible"
              description="Since invoices are sent online, they can be accessed anywhere, anytime, without hassle"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Simplified Tracking"
              description="Online payments or collections through payment links create a trail of the entire process, which helps with tracking and analysis"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Improved Cashflow"
              description="Payment links enable quicker collections and payments so that your business’s cash flow always stays healthy"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <div>
                  <Heading
                    title="Improve your business’s cash flow with"
                    color="white"
                    size="h1"
                    weight="6"
                  />
                </div>

                <Heading
                  title="payment links"
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
          title="Learn how payment links can revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about payment links in detail"
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
          title="Seeking further understanding of payment links?"
          description="Payment links are a convenient and straightforward way to collect payments online. These are unique URLs that direct customers to a secure payment page, where they can enter their payment information and complete the transaction quickly and securely."
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
                  title="Which approach is the most optimal for online payments?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The most optimal approach for online payments combines simplicity, security, and convenience. Payment links provide a streamlined solution. They offer various payment options and real-time tracking, ensuring quick and secure transactions. This approach simplifies the payment process for customers and businesses, making it the preferred choice for online payments."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How can small and medium businesses effectively acquire payments?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Small and medium businesses can effectively acquire payments by implementing digital payment solutions.  These solutions offer easy access, multiple payment choices, and streamlined tracking. They enhance operational efficiency, save time, and facilitate prompt payment collection, which is crucial for small and medium businesses' success."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title=" What methods do companies employ for the acceptance of payments?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Companies employ various methods for accepting payments, with embedded payment links becoming increasingly popular. These links can be used on websites, social media, apps, and more. They simplify the payment process, enhancing customer convenience and ensuring quick, secure transactions. This method has become a key component of modern payment acceptance strategies."
                />
              </div>
            </>
          }
        />
      </div>
    </div>
  );
};

export default paymentLinks;
