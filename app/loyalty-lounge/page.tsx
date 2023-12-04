import Image from "next/image";
import { Metadata } from "next";
import { space } from "@/constant/common";
import styles from "./page.module.scss";
import blogData from "./blog-data";
import faqData from "./faq-data";
import howDoesItWorkData from "./how-does-It-work-data";
import Heading from "@/components/heading/heading";
import ExploreCard from "@/components/explore-card/explore-card";
import EnkashWay from "@/components/enkash-way/enkash-way";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import MobileHeader from "@/components/header/mobile-header/mobile-header";
import WebHeader from "@/components/header/web-header";
import HowDoesItWork from "@/components/how-does-it-work/how-does-it-work.";
import BlogWrapper from "@/components/blog/blog-wrapper/blog-wrapper";
import ActionCard from "@/components/action-card/action-card";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import LottieDynamicLoadComponent from "@/components/lottie-client/lottie-dynamic-load-client";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import {
  officeImg,
  whiteArrow,
  cardBg,
  faqBg,
  heavyLiftingIconOne,
  heavyLiftingIconTwo,
  heavyLiftingIconThree,
  bannerAnimation,
} from ".";
import FAQHtml from "./faq-html";

export const metadata: Metadata = {
  title:
    "All-in-one Rewards, Corporate Gifting & incentives Management Platform - EnKash",
  description:
    "Get a seamless solution for rewards, corporate gifting &  incentives management platform designed to engage and motivate employees, channel partners, and stakeholders. Book a Demo Now !!",
};

const loyaltyLounge = () => {
  return (
    <div className={`color-white ${styles.home_container}`}>
      <div className="mobile-header">
        <MobileHeader />
      </div>
      <div className="desktop-header">{<WebHeader />}</div>
      <div className={`${styles.first_row} row color-white`}>
        <div className="col-md-6 col-12 d-flex flex-column">
          <div className="d-flex mb-4">
            <Heading title="L" color="rainy-blue" size="h1" weight="7" />
            <Heading title="oyalty Lounge" size="h1" weight="7" />
          </div>
          <div className="d-flex flex-column">
            <Heading
              title="Unlock the Power of"
              color="white"
              size="h2"
              weight="7"
            />

            <Heading
              title="Personalized Rewards"
              color="rainy-blue"
              size="h2"
            />
            <Heading title="and Recognition with" color="white" size="h2" />
            <Heading title="EnKash" color="white" size="h2" />
          </div>
          <div className="mt-4 mobile-only">
            <Heading
              title="An all-in-one rewards, corporate gifting, and incentives management platform that helps businesses boost loyalty and enhance the experience for their employees, channel partners, and other stakeholders."
              color="white"
              size="h6"
              weight="5"
            />
          </div>
          <div className="mt-4 desktop-only">
            <Heading
              title="An all-in-one rewards, corporate gifting, and incentives management platform that helps businesses boost loyalty and enhance the experience for their employees, channel partners, and other stakeholders."
              color="white"
              size="h5"
              weight="5"
            />
          </div>
          <div className={styles.button_container}>
            <PrimaryButton title="EnKash Now" theme="theme-blue" />
            <span className="mx-2"></span>
            <SecondryButton
              title="Book a Demo"
              actionImage={whiteArrow}
              iconSize={15}
            />
          </div>
        </div>
        <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
          <div className={styles.lottie_container}>
            <LottieClientComponent
              animationData={bannerAnimation}
              loop={true}
            />
          </div>
        </div>
      </div>
      <div className={`${styles.second_row} bg-white row d-flex row-padding`}>
        <HowDoesItWork dataSets={howDoesItWorkData} bannerImage={officeImg} />
      </div>
      <div className={styles.third_row}>
        <div className={`row bg-white ${styles.section}`}>
          <div className="col-md-6 col-12 my-md-5 my-3">
            <ExploreCard
              title="Employee Rewards"
              description="Make your employees feel valued with our comprehensive recognition and redemption solution"
              theme="blue"
            />
          </div>
          <div
            className={`col-md-6 col-12 d-flex my-md-5 my-3 d-flex justify-content-end ${styles.first_container}`}
          >
            <Image
              src={cardBg}
              alt="card background"
              className={styles.card_bg}
            />
            <div className={styles.first_lottie_container}>
              <LottieDynamicLoadComponent
                animationName={"LoyaltyEmployeeAnimation"}
                loop={true}
              />
            </div>
          </div>
        </div>
        <div className={`row bg-white ${styles.section}`}>
          <div
            className={`col-md-6 col-12 order-md-1 order-2 d-flex my-md-5 my-3 d-flex justify-content-start  ${styles.second_container}`}
          >
            <Image
              src={cardBg}
              alt="card background"
              className={styles.card_bg}
            />
            <div className={styles.second_lottie_container}>
              <LottieDynamicLoadComponent
                animationName={"LoyaltyBrandVoucherAnimation"}
                loop={true}
              />{" "}
            </div>
          </div>
          <div className="col-md-6 col-12 order-md-2 order-1 my-md-5 my-3 ">
            <ExploreCard
              title="Brand Vouchers"
              description="Unlock a world of savings and convenience with exclusive brand vouchers; they are instant, personalized, and hassle-free"
              theme="blue"
            />
          </div>
        </div>
        <div className={`row bg-white ${styles.section}`}>
          <div className="col-md-6 col-12 my-md-5 my-3">
            <ExploreCard
              title="Gift Cards"
              description="User-friendly gifting solutions with a wide range of gift cards that empower your employees to choose the perfect gift for themselves or their loved ones"
              theme="blue"
            />
          </div>
          <div
            className={`col-md-6 col-12 d-flex my-md-5 my-3 d-flex justify-content-end ${styles.third_container}`}
          >
            <Image
              src={cardBg}
              alt="card background"
              className={styles.card_bg}
            />
            <LottieDynamicLoadComponent
              animationName={"LoyaltyGiftCardAnimation"}
              loop={true}
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row row-padding`}>
        <div className="col-md-6 col-12 d-flex mb-5 order-1 order-md-1 justify-content-center">
          <div className={styles.lottie_container}>
            <LottieDynamicLoadComponent
              animationName={"XpenzPolicyAnimation"}
              loop={true}
            />
          </div>
        </div>
        <div className="col-md-6 col-12 mb-md-5 mb-3 order-2 order-md-2 px-md-5">
          <ExploreCard
            title="Offers"
            description="Unlock exclusive offers and enjoy discounts on various partnered subscriptions from popular services such as Amazon, ClearTax, Canva, and numerous others"
            theme="green"
          />
        </div>

        <div className="col-md-6 col-12 mt-5 order-4 order-md-3 px-md-5">
          <ExploreCard
            title="Channel Incentives"
            description="A cutting-edge solution that helps businesses automate and streamline their channel incentive programs, boosting channel partner engagement, loyalty, and revenue"
            theme="green"
          />
        </div>
        <div className="col-md-6 col-12 d-flex mt-5 order-3 order-md-4 px-md-5">
          <LottieDynamicLoadComponent
            animationName={"LoyaltyChannelAnimation"}
            loop={true}
          />
        </div>
      </div>

      <div className="row bg-white row-padding text-center">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div>
            <Heading
              title={`Elevate Your${space}`}
              size="h1"
              color="black"
              weight="6"
            />
            <Heading
              title={`Rewards Program${space}`}
              size="h1"
              color="equity-blue"
              weight="6"
            />
            <Heading title="to the" size="h1" color="black" weight="6" />
          </div>

          <Heading
            title={`Next Level with EnKash${space}`}
            size="h1"
            color="black"
            weight="6"
          />
        </div>
      </div>

      <div className={`row bg-indi-volt ${styles.fifth_row}`}>
        <div
          className={`d-flex flex-column flex-md-row tex-center justify-content-evenly ${styles.container}`}
        >
          <div className="mb-4 text-md-center">
            <Image
              src={heavyLiftingIconOne}
              alt="coins icon"
              className="mb-4"
            />
            <div className="d-flex flex-column">
              <Heading
                title="Customized Reward"
                size="h5"
                color="white"
                weight="7"
              />
              <Heading title="Programs" size="h5" color="white" weight="7" />
            </div>
          </div>

          <div className="mb-4 text-md-center">
            <Image
              src={heavyLiftingIconTwo}
              alt="coins icon"
              className="mb-4"
            />
            <div className="d-flex flex-column">
              <Heading title="Enhanced" size="h5" color="white" weight="7" />
              <Heading title="Engagement" size="h5" color="white" weight="7" />
            </div>
          </div>

          <div className="mb-4 text-md-center">
            <Image
              src={heavyLiftingIconThree}
              alt="coins icon"
              className="mb-4"
            />
            <div className="d-flex flex-column">
              <Heading title="Simplified" size="h5" color="white" weight="7" />
              <Heading title="Redemption" size="h5" color="white" weight="7" />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.sixth_row} row d-flex bg-white row-padding`}>
        <EnkashWay
          progressData={[
            {
              itemArray: ["Rewards", "Options"],
              oldWayDescription:
                "Limited reward options, like cash or gift cards.",
              newWayDescription:
                "Variety of reward options, including gift cards, brand vouchers, subscriptions, discounts, offers, and more.",
            },
            {
              itemArray: ["Redemption", "Process"],
              oldWayDescription:
                "Long and complex processes to redeem rewards.",
              newWayDescription:
                "Automated notifications of awarded points and redemption process via WhatsApp, email, and SMS.",
            },
            {
              itemArray: ["Ease", "of use"],
              oldWayDescription:
                "Rewards programs can be complex and time-consuming to administer.",
              newWayDescription:
                "EnKash's Loyalty Lounge is user-friendly and easy to manage.",
            },
            {
              itemArray: ["Personalization"],
              oldWayDescription:
                "Rewards are often generic and do not take into account individual preferences.",
              newWayDescription:
                "Ability to tailor rewards to individual preferences, promoting a more personalized and thoughtful approach.",
            },
            {
              itemArray: ["Rewards", "Tracking"],
              oldWayDescription:
                "Difficult to track rewards and redemption history.",
              newWayDescription:
                "Easy to track rewards and redemption history on the EnKash platform.",
            },
          ]}
        />
      </div>
      <div
        className={`row d-flex bg-white row-padding-top-none ${styles.seventh_row}`}
      >
        <ActionCard
          mainTitle={
            <>
              <div className="d-flex flex-column">
                <Heading title="Total" color="white" size="h1" weight="5" />
                <Heading
                  title="Control"
                  color="electric-green"
                  size="h1"
                  weight="5"
                />
              </div>
            </>
          }
          mainImage={officeImg}
          description="Gain control over your business spends with a complete overview of all your expenses. Analyze data to create efficient budgets, optimize expenses and increase your savings."
        />
      </div>
      <div className="bg-white row-padding d-flex justify-content-center">
        <div className="ps-md-5 scroll_container d-flex pb-4">
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Creation And Customization"
              description="Businesses can easily create and customize their rewards programs to meet their specific needs, including setting up different reward tiers, point structures, and redemption options"
              ctaColor="blue"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Bulk Allocation"
              description="Employers can simultaneously allocate rewards to their employees in bulk, making this product relevant for large companies"
              ctaColor="blue"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Open Voucher Policy"
              description="Businesses can issue open vouchers on the dashboard by simply integrating with the login code during redemption"
              ctaColor="blue"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Seamless Integration"
              description="This product can be seamlessly integrated with HRMS platforms, WhatsApp and e-mails for hassle-free redemption"
              ctaColor="blue"
            />
          </div>

          <div className="me-4">
            <GetStartedCard
              whiteTitle="Reporting and Analytics"
              description="Download comprehensive reports and check analytics anytime to track the performance of your rewards programs"
              ctaColor="blue"
            />
          </div>
        </div>
      </div>

      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper blogData={blogData} title="Loyalty Lounge Insights" />
      </div>

      <div
        className={`${styles.eigth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don’t worry! Our FAQs Section will Help you Learn about Xpenz in detail"
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

      <div className={`row ${styles.ninth_row} bg-equity-blue`}>
        <div className="d-flex justify-content-evenly align-items-center">
          <Heading
            title="Have Questions about Expense Management?"
            size="h3"
            color="white"
          />
          <div>
            <PrimaryButton title="Know More" theme="theme-black" />
          </div>
        </div>
      </div>

      <div className="row">
        <ContactUsCard
          title="Seeking Further Understanding of Loyalty Lounge?"
          description="Get a seamless solution for rewards, corporate gifting &  incentives management platform designed to engage and motivate employees, channel partners, and stakeholders. Book a Demo Now !!"
        />
      </div>
    </div>
  );
};

export default loyaltyLounge;
