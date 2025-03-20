import { Metadata } from "next";
import Image from "next/image";

import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../../common/constant";

import { blogData, faqData, carouselData, productData } from "./data";
import { Header, Footer, BlogWrapper } from "@/components";
import { userPlus, numberOne, stack } from "@/components/three-steps/";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import EnkashWay from "@/components/enkash-way/enkash-way";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import { FAQHtml } from "@/components/faq";
import AllProducts from "@/components/all-products/all-products";
import generateMetaData from "@/common/utils/metaData";
import StructuredData from "@/components/head/structuredData";

export const metadata: Metadata = generateMetaData({
  title:
    "Channel Incentive Platform | Channel Incentive Program for Businesses",
  description:
    "Channel Incentive Program for Businesses - Know how EnKash incentive programs can drive engagement, increase sales, and foster strong relationships with your channel partners",
  alternates: {
    canonical: "https://www.enkash.com/loyalty-lounge/channel-incentive/",
  },
  faqData: faqData,
});

const ChannelIncentive = (): React.JSX.Element => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/loyalty-lounge/channel-incentive/`}
        faqData={faqData}
      />
      <Header utmSource="Loyalty_lounge" />

      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <Heading
              title={`Channel Incentives`}
              color="rainy-blue"
              size="h4"
              weight="7"
            />
          </div>

          <div className="">
            <div className="d-flex flex-column">
              <div>
                <Heading
                  title="Boost Channel "
                  color="white"
                  size="h2"
                  weight="7"
                />
                <Heading
                  title={`${space} Sales Partner `}
                  color="white"
                  size="h2"
                  weight="7"
                />
              </div>

              <div>
                <Heading
                  title={`Engagement with ${space}`}
                  color="white"
                  size="h2"
                  weight="7"
                />
                <Heading
                  title="Channel Incentives Platform"
                  color="rainy-blue"
                  size="h2"
                  weight="7"
                />
              </div>
            </div>
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Automate channel partner incentives program and encourage partners to deliver better. Use a single dashboard to manage, track performance and distribute channel sales incentives."
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
                url="/sales/?source=Loyalty_lounge"
              />
            </div>
            <div>
              <SecondryButton
                title="API Documentation"
                actionImage={whiteArrow}
                iconSize={15}
                url="https://docs.enkash.com/"
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
            title="Best Platform For Channel Incentives "
            steps={[
              {
                icon: userPlus,
                text: "Easy Onboarding",
              },
              {
                icon: stack,
                text: "Performance Tracking",
              },
              {
                icon: numberOne,
                text: "Rewards Payout",
              },
            ]}
          />
        </div>
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-flex flex-column text-center mb-5">
          <div>
            <Heading
              title={`Motivate Partners & ${space}`}
              color="black"
              size="h1"
              weight="6"
            />
            <Heading
              title="Improve Productivity"
              color="equity-blue"
              size="h1"
              weight="6"
            />
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className={`d-flex flex-md-row mt-3 pb-4 scroll_container`}>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                titleHtml={
                  <div className="d-flex flex-column">
                    <Heading
                      title="Add Partners"
                      color="rainy-blue"
                      size="h2"
                      weight="6"
                    />
                    <Heading
                      title="In Bulk"
                      color="rainy-blue"
                      size="h2"
                      weight="6"
                    />
                  </div>
                }
                source="Loyalty_lounge"
                description="Easily onboard and manage a large number of channel partners at once, significantly reducing the time and effort needed for setup, and ensuring streamlined reward distribution across all partners."
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Bulk UPI for Incentives"
                description="Easily transfer incentives to multiple partners at once via UPI, ensuring instant payments with no delays, and providing a smooth and efficient experience for both businesses and their channel partners."
                source="Loyalty_lounge"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Diverse Redemptions Options"
                description="Give partners the flexibility to redeem their incentives from over 400 popular brands like Amazon, Flipkart, Myntra, and many more, offering a wide variety of choices to suit diverse preferences."
                source="Loyalty_lounge"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Pre-loaded Cards"
                description="Provide preloaded cards that allow partners to redeem their incentives seamlessly both online and offline, ensuring a hassle-free and secure redemption experience."
                source="Loyalty_lounge"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Automatic Alerts"
                description="Send real-time notifications via SMS, WhatsApp, and email to keep partners up-to-date on reward status, ensuring they are always informed of important updates and actions related to their incentives."
                source="Loyalty_lounge"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Real-Time Analytics"
                description="Gain access to real-time data and insights on redemptions, partner engagement, and overall program performance, helping businesses optimize incentive strategies for better outcomes and higher partner satisfaction."
                source="Loyalty_lounge"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.second_row}  bg-white`}>
        <AllProducts
          title="Check out our other loyalty lounge products at "
          subtitle="EnKash"
          data={productData}
        />
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <div className="text-center d-inline">
                  <Heading
                    title={`Simplify${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="channel incentives"
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title={`${space}with our`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                </div>
                <div>
                  <Heading
                    title="user-friendly system"
                    color="white"
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
          title="Learn how channel incentives can benefit your business and partners!"
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
            title="Don’t worry! Our FAQs section will help you learn about channel incentives in detail"
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
          title="Seeking further understanding of channel incentives?"
          description="Channel incentives is a reward program that incentivizes channel partners and their teams to increase sales or subscriptions. In most cases, a channel incentive is paid over and above the base remuneration paid on each sale or subscription completed by the channel partner. Channel incentives not only add monetary value but also a matter of pride. Channel partners covet the incentives and will use them to offer customers better service or increase their reach."
          source="Loyalty_lounge"
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
                  title="Why use a channel incentive program?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Channel incentive programs will motivate channel partners to prioritize the sales of your products or services so that they can win additional rewards. Channel partners develop their discounts and offers for customers using the additional rewards they get from channel incentives to get more customers onboard. The channel partner may also set up an internal reward system for their salespeople to increase sales. Using a channel incentive program helps increase sales, build your brand, and increase awareness of your products or services."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the benefits of incentive schemes?"
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Incentive schemes offer a lot of benefits, which include the following:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>Improved market reach</li>
                  <li>Building a brand within remote markets</li>
                  <li>
                    Additional sales resources without adding directly to your
                    overhead
                  </li>
                  <li>
                    Ability to serve your customers better due to the proximity
                    of your channel partner to the market
                  </li>
                  <li>Quicker turnaround on the post-sales processes</li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How do you plan an incentive program?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The starting point for planning an incentive program is to fully understand the product, the market, and potential customers. The next step is to discover how your peers and competitors in the market are structuring their incentive programs. The next step is to decide on the criteria you will use to reward your channel partners."
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Businesses often offer incentives to channel partners and their salespeople directly. Define the slabs for channel partners and salespeople and other conditions they must fulfill to qualify for the rewards. Take the time to explain the incentive program clearly to the channel partners and the sales team, along with the payout timelines. You can also consider tying up with a platform that makes channel incentives easier and faster."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How to get channel incentive program insights?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="As mentioned, connect with a smart platform like EnKash to manage your channel incentive program. This way, you will have a dashboard of the complete program, the due incentives, and the already paid incentives. You will get insights into which channel partners are doing well and which incentive program gives you the best results."
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

export default ChannelIncentive;
