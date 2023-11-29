import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../constant/common";
import faqData from "./faq-data";
import blogData from "./blog-data";
import carouselData from "./carousel-data";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import EnkashWay from "@/components/enkash-way/enkash-way";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import FAQ from "@/components/faq/faq";
import MobileHeader from "@/components/header/mobile-header/mobile-header";
import WebHeader from "@/components/header/web-header";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import { Metadata } from "next";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import BlogWrapper from "@/components/blog/blog-wrapper/blog-wrapper";

export const metadata: Metadata = {
  title:
    " Rewards & Offers- Get Exclusive offers on SaaS subscriptions | EnKash",
  description:
    "Unlock a world of savings and exclusive perks with our rewards and offers. Explore the benefits of our program and start enjoying the offer with EnKash today!",
};

const giftCards = () => {
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
                title={`Loyalty Lounge |${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
            <Heading title="Offers" size="h4" weight="4" />
          </div>

          <div className="d-flex flex-column">
            <Heading
              title="Unlock exclusive"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <div>
              <Heading
                title={`offers${space}`}
                color="rainy-blue"
                size="h2"
                weight="7"
              />
              <Heading title="on SaaS" color="white" size="h2" weight="7" />
            </div>

            <Heading
              title={`subscriptions${space}`}
              color="white"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Explore our curated offers from trusted partners and get exclusive discounts on a wide range of business SaaS products"
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
          <LottieClientComponent animationData={bannerLottie} loop={true} />
        </div>
        <div className={styles.three_step_container}>
          <ThreeSteps />
        </div>
      </div>

      <div className={`${styles.second_row} row d-flex bg-white row-padding`}>
        <EnkashWay
          progressData={[
            {
              itemArray: ["Finding", "Offers"],
              oldWayDescription:
                "It’s difficult for businesses to find SaaS offers that fulfill their needs and help them save big",
              newWayDescription:
                "Access a curated selection of the best SaaS offers from our partner brands on various business SaaS products",
            },
            {
              itemArray: ["Time", "Investment"],
              oldWayDescription:
                "Businesses had to spend hours negotiating for the best deals",
              newWayDescription:
                "On EnKash, exclusive discounts and best deals are just a click away",
            },
            {
              itemArray: ["Missed", "Opportunities"],
              oldWayDescription:
                "Lack of awareness leads to missing out on great deals",
              newWayDescription:
                "Real-time visibility of offers on the dashboard gives you access to better deals and more savings",
            },
            {
              itemArray: ["Managing", "Subscriptions"],
              oldWayDescription:
                "Handling subscriptions and payments on different platforms often leads to chaos and inconvenience",
              newWayDescription:
                "Easily consolidate and manage all partnered subscriptions on a single platform",
            },
            {
              itemArray: ["Tracking"],
              oldWayDescription:
                "Difficulty in tracking active offers, savings, and their validity.",
              newWayDescription:
                "Get real-time data on your offers, savings, and validity on the go.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-flex flex-column text-center mb-5">
          <Heading
            title="Learn more about maximizing"
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <div>
            <Heading
              title="your savings"
              color="equity-blue"
              size="h1"
              weight="6"
            />
            <Heading
              title={`${space}with EnKash`}
              color="black"
              size="h1"
              weight="6"
            />
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className={`d-flex flex-md-row mt-3 pb-4 scroll_container`}>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Maximize Savings"
                description="Unlock significant savings on business SaaS products with exclusive discounts on our partnered services"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Top Partnered Deals"
                description="Explore the finest deals from our esteemed partner brands like AWS, ClearTax, Canva, and more"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle=" Effortless Process"
                description="Enjoy a seamless experience with just a few clicks, making it quick and easy to access exclusive deals and offers"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Regularly Updated Offers"
                description="Stay ahead of the curve with the best deals for your business needs."
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
                <div>
                  <Heading
                    title={`Encourage your employees with these${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                </div>
                <Heading
                  title={`easy-to-use${space}`}
                  color="white"
                  size="h1"
                  weight="6"
                />
                <Heading
                  title="gift cards"
                  color="rainy-blue"
                  size="h1"
                  weight="6"
                />
              </div>
            </>
          }
          mainTitle="How do Offers work?"
          carouselData={carouselData}
          carouselBg={caraouselBg}
        />
      </div>
      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how our partner offers can benefit your business!"
        />
      </div>
      <div
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions ?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs section will help you learn about our partner offers in detail"
            color="black"
            size="h4"
          />
        </div>

        <div>
          {faqData.map((item, index) => (
            <FAQ
              key={index}
              question={item.question}
              answer={item.answer}
              answerVisible={index === 0}
            />
          ))}
        </div>
        <div className={styles.faq_bg}>
          <Image src={faqBg} alt="background image" />x
        </div>
      </div>

      <div className={`${styles.sixth_row} row`}>
        <ContactUsCard
          title="Seeking further understanding of gift cards?"
          description="Corporate gift cards in India are among the best ways to encourage and retain employees. They allow employees to choose from various options and then decide for themselves. A transparent and easy way of appreciating employees, corporate gifts are customizable, convenient, and secure"
        />
      </div>

      <div className={`${styles.seventh_row} row`}>
        <ComprehensiveView
          title="Explore the
        comprehensive guide"
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
                  title="A corporate gift card is a prepaid card organizations use to gift their employees, clients, customers, or partners. These cards are loaded with money up to a certain specified amount and are among the best ways to appreciate employees. These cards can be redeemed online or in-store."
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
                    These gift cards can be allocated to employees with a
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
                  title="Corporations have noticed an increase in employee retention with corporate gifting. This retention has helped increase the company’s profits quite considerably. Therefore, investing in corporate gift cards by EnKash for employees is a win-win situation. On the one hand, you are motivating your employees with secure, convenient, and easy-to-manage cards, giving access across multiple categories, and they are also producing better results for the organization."
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
                  title="You can avoid gift tax by keeping the value of employee gifts within the tax-free limit of 5000 INR within a calendar year."
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
