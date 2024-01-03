import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../../common/constant";
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
import Header from "@/components/header/header";
import FAQHtml from "./faq-html";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title:
    "Channel Incentive Platform | Channel Incentive Program for Businesses",
  description:
    "Channel Incentive Program for Businesses - Know how EnKash incentive programs can drive engagement, increase sales, and foster strong relationships with your channel partners",
  alternates: {
    canonical: "https://www.enkash.com/loyalty-lounge/channel-incentive/",
  },
};

const channelIncentive = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <Header utmSource="Loyalty_lounge" />

      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div className="d-flex">
              <Heading
                title={`Loyalty Lounge${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
            <Heading title="| Channel Incentive" size="h4" weight="4" />
          </div>

          <div className="">
            <div className="d-flex flex-column">
              <div>
                <Heading
                  title="Easily manage"
                  color="white"
                  size="h2"
                  weight="7"
                />
                <Heading
                  title={`${space}channel`}
                  color="rainy-blue"
                  size="h2"
                  weight="7"
                />
              </div>

              <div>
                <Heading
                  title={`partner incentives${space}`}
                  color="rainy-blue"
                  size="h2"
                  weight="7"
                />
                <Heading title="from" color="white" size="h2" weight="7" />
              </div>

              <Heading
                title="a single dashboard"
                color="white"
                size="h2"
                weight="7"
              />
            </div>
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="A game-changing platform for channel incentive programs that helps businesses boost their channel partner engagement, loyalty, and revenue by automating and streamlining their process"
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
                url="https://home.enkash.com/signup?utm_source=Loyalty_lounge"
              />
            </div>
            <div>
              <SecondryButton
                title="Book a Demo"
                actionImage={whiteArrow}
                iconSize={15}
                url="/sales/?source=Loyalty_lounge"
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
              itemArray: ["Manual Processes"],
              oldWayDescription:
                "The traditional channel incentive programs involve manual tasks such as calculating incentives and sending physical cheques, leading to delays.",
              newWayDescription:
                "Automated and streamlined channel incentive processes reduce manual work and ensure quicker reward delivery.",
            },
            {
              itemArray: ["Incentive Options"],
              oldWayDescription:
                "Limited options for channel partners to choose their rewards, often resulting in generic rewards.",
              newWayDescription:
                "Diverse reward options allow channel partners to choose as per their preference and motivate them effectively.",
            },
            {
              itemArray: ["Scalability"],
              oldWayDescription:
                "Traditional methods may not easily accommodate the needs of a growing partner network.",
              newWayDescription:
                "Scalable architecture that can adapt to the changing size and dynamics of the partner network.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-flex flex-column text-center mb-5">
          <div>
            <Heading
              title={`Partner rewards made${space}`}
              color="black"
              size="h1"
              weight="6"
            />
            <Heading title="easy," color="equity-blue" size="h1" weight="6" />
          </div>

          <Heading
            title={`${space}convenient, and secure`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
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
                description="Add multiple channel partners as individuals or bulk upload them all for easy incentive distribution"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Diverse Redemptions"
                description="Redeem from a diverse range of incentive options from 400+ brand vouchers like Amazon, Flipkart, Myntra, etc, across 25+ categories"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Non-Reloadable Cards"
                description="It comes preloaded with a specific monetary value, offering partners the flexibility to redeem their incentives across e-commerce or in-store shopping"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Automatic Alerts"
                description="Integrated platform to automatically inform users via SMS, WhatsApp, and e-mail about incentives and how to redeem points"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Real-Time Analytics"
                description="Quickly share vouchers, track redemption status, and create advanced expiry alerts to maximize user adoption"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Bulk UPI for Incentives"
                description=" Transfer incentives directly, nationwide, and in a hassle-free way, empowering seamless incentives for all"
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
      {/* <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how channel incentives can benefit your business and partners!"
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

export default channelIncentive;
