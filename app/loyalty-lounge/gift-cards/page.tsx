import Image from "next/image";
import { Metadata } from "next";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import { space } from "../../../common/constant";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import EnkashWay from "@/components/enkash-way/enkash-way";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import { blogData, faqData, carouselData, productData } from "./data";
import { Header, Footer, BlogWrapper } from "@/components";
import { userPlus, numberOne, stack } from "@/components/three-steps/";
import generateMetaData from "@/common/utils/metaData";
import StructuredData from "@/components/head/structuredData";
import { FAQHtml } from "@/components/faq";
import AllProducts from "@/components/all-products/all-products";

export const metadata: Metadata = generateMetaData({
  title: "Corporate Gift Cards for Employees for Every Occasion with EnKash",
  description:
    "Unlock the power of corporate gifting with our versatile gift cards. Delight clients, employees, and partners with a world of choices. Explore our corporate gift card solutions now!",
  alternates: {
    canonical: "https://www.enkash.com/loyalty-lounge/gift-cards/",
  },
  faqData: faqData,
});

const GiftCards = (): React.JSX.Element => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/loyalty-lounge/gift-cards/`}
        faqData={faqData}
      />
      
      <Header utmSource="Loyalty_lounge" />

      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <Heading
              title={`Gift Cards${space}`}
              color="rainy-blue"
              size="h4"
              weight="7"
            />
          </div>

          <div className="d-flex flex-column">
            <Heading
              title={`Build a culture of  ${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title={`recognition with customized ${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title={`Gift Cards${space}`}
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Make corporate gifting seamless for businesses with these easy-to-access and control gift cards."
              color="white"
              size="h6"
              weight="5"
            />
          </div>
        </div>

        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div className={styles.lottie_container}>
            <LottieClientComponent animationData={bannerLottie} loop={true} />
          </div>
        </div>

        <div className={styles.three_step_container}>
          <ThreeSteps
            title="Best Corporate Gift Cards Online"
            steps={[
              {
                icon: userPlus,
                text: "Easily Accessible",
              },
              {
                icon: stack,
                text: "Trackable ",
              },
              {
                icon: numberOne,
                text: "Multiple Denominations",
              },
            ]}
          />
        </div>
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline  flex-column text-center mb-5">
          <Heading title="One" color="black" size="h1" weight="6" />
          <Heading
            title={`${space} Corporate Gift Card;${space}`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading
            title=" Endless Choices"
            color="black"
            size="h1"
            weight="6"
          />
        </div>

        <div className="d-flex justify-content-center">
          <div className={`d-flex flex-md-row mt-3 pb-4 scroll_container`}>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Instant Digital Delivery"
                description="Send and receive gift cards instantly via email or SMS, ensuring a seamless gifting experience. No physical handling, no delays—just instant rewards, perfect for every occasion."
                source="Loyalty_lounge"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                titleHtml={
                  <>
                    <Heading
                      title="Freedom"
                      color="rainy-blue"
                      size="h2"
                      weight="6"
                    />
                    <Heading
                      title="of Choice"
                      color="rainy-blue"
                      size="h2"
                      weight="6"
                    />
                  </>
                }
                description="Empower recipients with the flexibility to redeem gift cards for products and services across a wide range of top brands, ensuring a personalized and satisfying gifting experience."
                source="Loyalty_lounge"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                titleHtml={
                  <>
                    <Heading
                      title="Personalized"
                      color="rainy-blue"
                      size="h2"
                      weight="6"
                    />
                    <Heading
                      title="Gifting Experience"
                      color="rainy-blue"
                      size="h2"
                      weight="6"
                    />
                  </>
                }
                source="Loyalty_lounge"
                description="Customize gift cards with your company’s logo, branding, and personalized messages, enhancing engagement while creating a memorable and meaningful gifting experience for employees and customers"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Highly Secure and Reliable"
                description="Prepaid and protected, EnKash Gift Cards can be securely frozen in case of loss or theft. The self-PIN generation feature adds an extra layer of security for peace of mind"
                source="Loyalty_lounge"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Bulk Distribution with Ease"
                description="Easily distribute multiple gift cards in bulk with just a few clicks. Ideal for corporate gifting, rewards programs, and promotions, saving time and effort for large-scale campaigns."
                source="Loyalty_lounge"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Multiple Denominations"
                description="Choose from a variety of denominations up to ₹10,000, making it easy to cater to different gifting needs—whether it’s a small appreciation or a grand reward."
                source="Loyalty_lounge"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.second_row}  bg-white`}>
        <AllProducts
          title="Products to Encourage Loyalty and Reward "
          subtitle="Employees"
          data={productData}
        />
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

      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how gift cards can benefit your business and employees!"
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
          source="Loyalty_lounge"
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
      <Footer utmSource="Loyalty_lounge" />
    </div>
  );
};

export default GiftCards;
