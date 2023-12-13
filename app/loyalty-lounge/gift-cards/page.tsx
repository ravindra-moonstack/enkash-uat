import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../../constant/common";
import faqData from "./faq-data";
import carouselData from "./carousel-data";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import EnkashWay from "@/components/enkash-way/enkash-way";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import { Metadata } from "next";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import BlogWrapper from "@/components/blog/blog-wrapper";
import FAQHtml from "./faq-html";
import HeaderWrapper from "@/components/header/header";

export const metadata: Metadata = {
  title: "Corporate Gift Cards for Employees for Every Occasion with EnKash",
  description:
    "Unlock the power of corporate gifting with our versatile gift cards. Delight clients, employees, and partners with a world of choices. Explore our corporate gift card solutions now!",
};

const giftCards = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <HeaderWrapper />

      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div className="d-flex">
              <Heading
                title={`Loyalty Lounge |${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
            <Heading title="Gift Cards" size="h4" weight="4" />
          </div>

          <div>
            <Heading
              title={`Foster a culture of recognition with these flexible${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title={`gift cards${space}`}
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Easy to access, monitor, and control gift cards for seamless gifting"
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
              itemArray: ["Accessibility"],
              oldWayDescription:
                "The traditional way of issuing gift cards was quite cumbersome and paper-based, making it a long-drawn and time-consuming process.",
              newWayDescription:
                "The EnKash way of issuing gift cards is simplified, making it easy to access digital cards from anywhere.",
            },
            {
              itemArray: ["Easy to", "Track"],
              oldWayDescription:
                "The usage of traditional gift cards cannot be tracked, with high chances of loss and misplacement.",
              newWayDescription:
                "Gift cards on EnKash can be easily tracked and blocked to avoid loss and misuse.",
            },
            {
              itemArray: ["Multiple", "Denominations"],
              oldWayDescription:
                "Traditional gift cards may have restrictions regarding their availability in specific amount limits.",
              newWayDescription:
                "Gift cards are available in multiple denominations of up to Rs.10,000; one can choose the card value per their requirement. Limits are configurable based on your choice.",
            },
            {
              itemArray: ["Acceptability"],
              oldWayDescription:
                "Traditional gift cards may have a limitation on usage.",
              newWayDescription:
                "Gift cards by EnKash are widely accepted across many places.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-flex flex-column text-center mb-5">
          <Heading
            title="Gift cards from EnKash are"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}quick, simple, and automatic!`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>

        <div className="d-flex justify-content-center">
          <div className={`d-flex flex-md-row mt-3 pb-4 scroll_container`}>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Freedom to Choose"
                description="Gift cards allow the recipient to choose products or services per their preference and convenience from a retail store or online"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                titleHtml={
                  <>
                    <Heading
                      title="Easy"
                      color="rainy-blue"
                      size="h2"
                      weight="6"
                    />
                    <Heading
                      title="Access"
                      color="rainy-blue"
                      size="h2"
                      weight="6"
                    />
                  </>
                }
                description="Gift cards are prepaid cards that can be easily and safely accessed anywhere and anytime"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                titleHtml={
                  <>
                    <Heading
                      title="Ensures"
                      color="rainy-blue"
                      size="h2"
                      weight="6"
                    />
                    <Heading
                      title="Safety"
                      color="rainy-blue"
                      size="h2"
                      weight="6"
                    />
                  </>
                }
                description="Gift cards are prepaid cards and are safe as they can be frozen in case of loss or theft without losing money with the self-PIN generation feature"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Easy to Distribute"
                description="These gift cards can be easily distributed as per the occasion"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Multiple Denominations"
                description="Available in multiple denominations of up to 
                Rs.10,000, ensuring the option to choose the card value as per your requirements"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <div className="d-inline d-md-flex flex-column">
                  <Heading
                    title="User-friendly and convenient solution for"
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="every gifting need"
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
          title="Learn how gift cards can benefit your business and employees!"
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
            title="Don't worry! Our FAQs section will help you learn about gift cards in detail"
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
          title="Seeking further understanding of gift cards?"
          description="Gift cards in India offer a versatile and effective way to express appreciation and foster positive connections. They offer recipients the flexibility to select from a range of options and make their own choices. A transparent and straightforward method of expressing gratitude, these gift cards are adaptable, user-friendly, and secure."
        />
      </div>

      <div className={`${styles.seventh_row} row`}>
        <ComprehensiveView
          title="Explore our comprehensive guide"
          innerHtml={
            <>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What is a corporate gift card?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="A corporate gift card is a prepaid card organizations use to gift their employees, clients, customers, or partners. These cards are loaded with money up to a certain specified amount and are among the best ways to appreciate people. These cards can be redeemed online or in-store."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How to access a corporate gift card?"
                />
              </div>

              <div className="mb-5">
                <ul>
                  <li>
                    Register on EnKash and enter all the company details
                    required
                  </li>
                  <li>
                    After all the details are validated, the company becomes
                    eligible for gift cards
                  </li>
                  <li>
                    The company can load money into their account and request
                    the cards as required
                  </li>
                  <li>
                    These gift cards can be allocated to the recipient with a
                    preloaded amount as per the occasion
                  </li>
                </ul>
              </div>

              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the rules for corporate gifting?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Corporate gifts should be aligned with the company's ethics and policies. These gifts must be legal. There must be transparency in corporate gifting and sensitivity towards all cultures."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Is corporate gifting profitable?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Organizations have observed enhanced retention rates through the implementation of corporate gifting strategies. Hence, opting for gift cards, such as those offered by EnKash, proves to be a mutually beneficial strategy. By motivating stakeholders with secure, convenient, and easily manageable gift cards that offer access across various categories, organizations can expect improved outcomes and increased productivity."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What is the TDS rate for corporate gifting?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="A corporate gift can attract a TDS of 10% if the gift value exceeds Rs 20,000 in a year. This is decided under Section 194R of the Income Tax Act, 1961."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How do I avoid gift tax as an employer?"
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="You can avoid gift tax by keeping the value of gifts within the tax-free limit of 5000 INR within a calendar year."
                />
              </div>
            </>
          }
        />
      </div>
    </div>
  );
};

export default giftCards;
