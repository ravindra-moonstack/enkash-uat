import { space } from "@/common/constant";
import Image from "next/image";
import { Metadata } from "next";
import styles from "./page.module.scss";
import PrimaryButton from "../components/buttons/primary-button/primary-button";
import ExploreCard from "@/components/explore-card/explore-card";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import RainbowSection from "@/components/homepage/rainbow";
import BankSection from "@/components/homepage/bank-section";
import LoyaltyLoungeSection from "@/components/homepage/loyalty-lounge-section";
import PolygonSection from "@/components/homepage/polygon-section";
import TextAnimation from "@/components/framer-motion/text-animation";
import WhileInViewAnimation from "@/components/framer-motion/while-in-view-animation";
import LottieDynamicLoadComponent from "@/components/lottie-client/lottie-dynamic-load-client";
import DashBoardAnimation from "@/components/homepage/dashboard-animation";
import Header from "@/components/header/header";
import AwardSection from "@/components/homepage/award-section";

import { authorOne, authorTwo, paIcon, bbpsIcon, ppiIcon } from ".";
import Footer from "@/components/footer/footer";
import generateMetaData from "@/common/utils/metaData";
import StructuredData from "@/components/head/structuredData";
import ThreeStepsCustom from "@/components/three-steps/three-steps-custom";

export const metadata: Metadata = generateMetaData({
  title: "EnKash - The Ultimate Platform for Businesses",
  description:
    "EnKash is the ultimate platform for businesses that offer services like Account Payable, Accounts Receivable, Expense Management, Corporate Cards, Employee Rewards, Channel Incentive, automation solutions & many more.",
  alternates: {
    canonical: "https://www.enkash.com",
  },
});

const home = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData url={`https://www.enkash.com/`} />

      <Header utmSource="corporate_cards" />
      <RainbowSection />
      <div className="my-5 pb-4 pt-5">
        <BankSection type="customers" />
      </div>
      <div
        className={`${styles.second_row} row row-padding d-flex justify-content-center align-items-center
       text-center color-white bg-indi-volt`}
      >
        <WhileInViewAnimation
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: "easeInOut",
          }}
          innerHtml={
            <ThreeStepsCustom
              steps={[
                { image: paIcon, heading: "Payment Aggregator License" },
                {
                  image: bbpsIcon,
                  heading: "Bharat Bill Payment Operating Unit License",
                },
                {
                  image: ppiIcon,
                  heading: "Prepaid Payment Instrument (PPI) License",
                },
              ]}
            />
          }
        />
      </div>
      <div className={`${styles.third_row} row color-white`}>
        <PolygonSection />
        <DashBoardAnimation />
      </div>
      <div className={`${styles.fifth_row} row row-padding pt-0`}>
        <div className="d-flex flex-column justify-content-center text-center mb-5 pb-3">
          <Heading
            title="All-in-One Payments & Financial Solutions"
            size="h2"
            weight="3"
          />

          <Heading title="to Power Your Business Growth" size="h2" weight="7" />
        </div>
        <div className="d-flex my-4 flex-column flex-md-row">
          <div className={`col-md-6 col-12 d-flex mb-5 order-2 order-md-1`}>
            <div className={styles.lottie_container}>
              <LottieDynamicLoadComponent
                animationName={"HomePagePayables"}
                loop={true}
              />
            </div>
          </div>
          <div className="col-md-6 col-12 mb-5 order-1 order-md-2">
            <ExploreCard
              title="Collect Payments"
              description="A modern payment gateway with easy-to-integrate APIs, supporting cards, net banking, EMIs, BNPL, and UPI for standalone and recurring payments. It also integrates with ERP systems for complete accounts receivable management."
              theme="green"
              link="/olympus/receivables"
            />
          </div>
        </div>

        <div className="d-flex my-4 flex-column flex-md-row">
          <div className="col-md-6 col-12 mt-5  order-3 order-md-3 pe-5">
            <ExploreCard
              title="Make Payments"
              description="A single platform to manage vendor payments, payroll, taxes, utilities, and more. Built for all businesses, it integrates via APIs or works standalone with ERP and accounting systems, requiring no tech setup."
              theme="green"
              link="/olympus/payables"
            />
          </div>
          <div
            className={`col-md-6 col-12 d-flex mt-5 order-4 order-md-4 ps-5`}
          >
            <div className={styles.lottie_container}>
              <LottieDynamicLoadComponent
                animationName={"HomePageRecieveable"}
                loop={true}
              />
            </div>
          </div>
        </div>

        <div className="d-flex my-4 mt-5 pt-4 flex-column flex-md-row">
          <div className={`col-md-6 col-12 d-flex mb-5 order-2 order-md-1`}>
            <div className={styles.lottie_container}>
              <LottieDynamicLoadComponent
                animationName={"HomePageExpenseManagement"}
                loop={true}
              />
            </div>
          </div>
          <div className="col-md-6 col-12 mb-5 order-1 order-md-2">
            <ExploreCard
              title="Expense Management"
              description="Gain full control of business spending with a comprehensive platform. Track, analyze, and optimize expenses across employees, departments, and petty cash—empowering smarter budgeting and driving efficiency across every business expense."
              theme="green"
              link="/olympus/receivables"
            />
          </div>
        </div>

        <div className="d-flex my-4 flex-column flex-md-row">
          <div className="col-md-6 col-12 mt-5  order-3 order-md-3 pe-5">
            <ExploreCard
              title="Corporate Credit Cards"
              description="Enhance cash flow and streamline expense management with customized corporate credit cards. Leverage T&E cards, procurement card, and other solutions for better control, real-time tracking, and seamless integration with your financial systems."
              theme="green"
              link="/olympus/payables"
            />
          </div>
          <div
            className={`col-md-6 col-12 d-flex mt-5 order-4 order-md-4 ps-5`}
          >
            <div className={styles.lottie_container}>
              <LottieDynamicLoadComponent
                animationName={"HomePageCorporateCard"}
                loop={true}
              />
            </div>
          </div>
        </div>

        <div className="d-flex my-4 mt-5 pt-4 flex-column flex-md-row">
          <div className={`col-md-6 col-12 d-flex mb-5 order-2 order-md-1`}>
            <div className={styles.lottie_container}>
              <LottieDynamicLoadComponent
                animationName={"HomePagePayables"}
                loop={true}
              />
            </div>
          </div>
          <div className="col-md-6 col-12 mb-5 order-1 order-md-2">
            <ExploreCard
              title="Prepaid Cards"
              description="Simplify operations by distributing prepaid cards for meal, SaaS, travel, marketing, petty cash, gifting, employee-specific use cases, and other expenses. Set spending limits, track usage in real-time, and optimize budgeting for employee perks and project-related expenses."
              theme="green"
              link="/olympus/receivables"
            />
          </div>
        </div>

        <div className="d-flex my-4 flex-column flex-md-row">
          <div className="col-md-6 col-12 mt-5  order-3 order-md-3 pe-5">
            <ExploreCard
              title="Vouchers"
              description="400+ brand vouchers across various categories, offering versatile gifting options for every need. Perfect for creating memorable experiences and adding value to your business initiatives."
              theme="green"
              link="/olympus/payables"
            />
          </div>
          <div
            className={`col-md-6 col-12 d-flex mt-5 order-4 order-md-4 ps-5`}
          >
            <div className={styles.lottie_container}>
              <LottieDynamicLoadComponent
                animationName={"HomePageRecieveable"}
                loop={true}
              />
            </div>
          </div>
        </div>

        <div className="d-flex my-4 mt-5 pt-4 flex-column flex-md-row">
          <div className={`col-md-6 col-12 d-flex mb-5 order-2 order-md-1`}>
            <div
              className={`${styles.lottie_container} ${styles.lottie_container_voucher}`}
            >
              <LottieDynamicLoadComponent
                animationName={"LoyaltyOne"}
                loop={true}
              />
            </div>
          </div>
          <div className="col-md-6 col-12 mb-5 order-1 order-md-2">
            <ExploreCard
              title="Rewards"
              description="Recognize top performers and partners while fostering a culture of recognition, boosting engagement and motivation to drive productivity and long-term success."
              theme="green"
              link="/olympus/receivables"
            />
          </div>
        </div>
      </div>

      <div
        className={`${styles.eleventh_row} row row-padding d-flex justify-content-center align-items-center
       text-center color-white bg-indi-volt`}
      >
        <div className={`col-12 mb-5`}>
          <div>
            <Heading
              title="Earn Big. Spend Smarter. Save More"
              color="white"
              size="h2"
              weight="6"
            />
          </div>
          <div>
            <Heading
              title="- Powered by EnKash"
              color="white"
              size="h2"
              weight="3"
            />
          </div>
        </div>

        <div
          className={`col-md-4 col-12 d-flex flex-column align-items-center justify-content-start justify-content-md-center ${styles.steps}`}
        >
          <div>
            <Heading title="400,000++ " size="h2" weight="6" />
          </div>
          <div>
            <Heading title="Businesses" size="h5" />
          </div>
        </div>

        <div
          className={`col-md-4 col-12 d-flex flex-column align-items-center justify-content-start justify-content-md-center ${styles.steps}`}
        >
          <div>
            <Heading title="99.99%" size="h2" weight="6" />
          </div>
          <div>
            <Heading title="Uptime" size="h5" />
          </div>
        </div>

        <div
          className={`col-md-4 col-12 d-flex flex-column align-items-center justify-content-start justify-content-md-center ${styles.steps}`}
        >
          <div>
            <Heading title="24*7" size="h2" weight="6" />
          </div>
          <div>
            <Heading title="Support" size="h5" />
          </div>
        </div>
      </div>

      <div className={`${styles.fifthteen_row} row color-white`}>
        <div className="my-5 py-5 bg-white ">
          <div className="d-flex text-center mb-3  mt-5 justify-content-center">
            <Heading
              title="Partnering with the Best"
              color="black"
              size="h2"
              weight="6"
            />
          </div>
          <div className="mb-5">
            <BankSection type="partners" />
          </div>
        </div>
        <div className={`${styles.title} text-center`}>
          <Heading
            title={`Trusted by${space}`}
            color="white"
            size="h1"
            weight="6"
          />
          <Heading
            title={`250,000+${space}`}
            color="electric-green"
            size="h1"
            weight="6"
          />

          <div>
            <Heading
              title="network members & companies"
              color="white"
              size="h1"
              weight="6"
            />
          </div>
        </div>

        <div
          className={`d-flex justify-content-between ${styles.testimonials_section}`}
        >
          <div className="testimonial-one px-md-5 mb-5">
            <div className="mb-md-5">
              <Heading
                title='"One of the key benefits of Olympus was gaining real-time visibility of our Daily Sales Outstanding (DSOs), which became an interactive feature. This real-time insight into our receivables greatly improved our decision-making capabilities. We have unlocked a new efficiency level in our receivables processes, streamlining operations and ensuring smoother financial management."'
                size="h5"
                weight="6"
                color="electric-green"
                italic={true}
              />
            </div>
            <div className="d-flex mt-4 align-items-center">
              <div className="me-4">
                <Image src={authorOne} alt="enkash user image" loading="lazy" />
              </div>
              <div className="d-flex flex-column">
                <Heading
                  title="Deep Sehgal, Founder & CEO,"
                  size="h4"
                  weight="4"
                />
                <Heading title="Vianet" size="h4" weight="4" />
              </div>
            </div>
          </div>
          <div className="testimonial-two px-md-5 mb-5">
            <div className="mb-md-5">
              <Heading
                title='"In integrated marketing communications, agencies need to allocate budgets for different verticals. Through Olympus’ virtual cards, we were able to manage our budget allocation for various departments, streamline approvals seamlessly, and gain real-time visibility of all our department-wise expenses to our finance department."'
                size="h5"
                weight="6"
                color="electric-green"
                italic={true}
              />
            </div>
            <div className="d-flex mt-4 align-items-center">
              <div className="me-4">
                <Image src={authorTwo} alt="enkash user image" loading="lazy" />
              </div>
              <div className="d-flex flex-column">
                <Heading
                  title=" Noufel Anamala, Founder,"
                  size="h4"
                  weight="4"
                />
                <Heading title="Honeycomb Creative" size="h4" weight="4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.fourteenth_row} row bg-white`}>
        <AwardSection />
      </div>

      <div
        className={`${styles.twelfth_row} row color-white bg-white row-padding`}
      >
        <div className={`col-12 d-flex flex-md-row mt-3 scroll_container`}>
          <div className={styles.card}>
            <GetStartedCard
              whiteTitle="APIs and Modules"
              description="Leverage our robust APIs and modules for hassle-free automation and tailored payment solutions."
              source="home_page"
            />
          </div>

          <div className={styles.card}>
            <GetStartedCard
              whiteTitle="Seamless Integrations"
              description="Connect with ERPs, accounting systems, and business tools for unified financial operations."
              source="home_page"
            />
          </div>

          <div className={styles.card}>
            <GetStartedCard
              whiteTitle="Workflow Management"
              description="Streamline approval workflows and processes, reducing delays and enhancing operational efficiency."
              source="home_page"
            />
          </div>

          <div className={styles.card}>
            <GetStartedCard
              whiteTitle="Insights & Analytics"
              description="Gain real-time financial insights, track trends, and optimize spending with powerful analytics and reporting."
              source="home_page"
            />
          </div>
        </div>
      </div>

      <div className={`row bg-white ${styles.sixteenth_row} overflow-hidden`}>
        <ContactUsCard
          title="Ready to upgrade with our new-age business solutions?"
          description="Explore all these products on the same platform and empower your business and employees with efficient spend management, transparency, and control across all departments"
          source="home_page"
        />
      </div>
      <Footer />
    </div>
  );
};

export default home;
