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
import FAQ from "@/components/faq/faq";
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
  banner,
} from ".";

export const metadata: Metadata = {
  title: "Corporate Credit and Prepaid Cards in India| Apply Now - EnKash",
  description:
    "Empower your workforce with Enkash Freedom: Tailored corporate cards offering customizable spending limits and real-time expense tracking for enhanced cash flow management, operational efficiency, and paperless processes",
};

const freedom = () => {
  return (
    <div className={`color-white ${styles.home_container}`}>
      <div className="mobile-header">
        <MobileHeader />
      </div>
      <div className="desktop-header">{<WebHeader />}</div>
      <div className={`${styles.first_row} row color-white`}>
        <div className="col-md-6 col-12 d-flex flex-column">
          <div className="d-flex mb-4">
            <Heading title="F" color="rainy-blue" size="h1" weight="7" />
            <Heading title="reedom" size="h1" weight="7" />
          </div>
          <div className="d-flex flex-column">
            <Heading
              title=" Purpose-built business cards"
              color="white"
              size="h2"
              weight="7"
            />
            <div>
              <Heading title={`for all your${space}`} color="white" size="h2" />
              <Heading
                title="credit and prepaid needs"
                color="rainy-blue"
                size="h2"
              />
            </div>
          </div>
          <div className="mt-4 mobile-only">
            <Heading
              title="Issue purpose-built corporate cards to your employees. Set spending limits and controls, track spending in real-time to optimize cash flow, streamline operations, reduce paperwork, and save more"
              color="white"
              size="h6"
              weight="5"
            />
          </div>
          <div className="mt-4 desktop-only">
            <Heading
              title="Issue purpose-built corporate cards to your employees. Set spending limits and controls, track spending in real-time to optimize cash flow, streamline operations, reduce paperwork, and save more"
              color="white"
              size="h5"
              weight="5"
            />
          </div>
          <div className={`my-5 ${styles.button_container}`}>
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
            <LottieClientComponent animationData={banner} loop={true} />
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
              title="Purchase or P Cards"
              description="Streamline procurement, control expenses, and enhance efficiency for your business, all while reducing paperwork and risk of fraud"
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
            <LottieDynamicLoadComponent
              animationName={"FreedomPurchaseAnimation"}
              loop={true}
            />
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
            <LottieDynamicLoadComponent
              animationName={"FreedomTravelAnimation"}
              loop={true}
            />
          </div>
          <div className="col-md-6 col-12 order-md-2 order-1 my-md-5 my-3 ">
            <ExploreCard
              title="Travel and Expense Cards"
              description="Control corporate travel expenses effortlessly, ensure budget compliance, and eliminate fraud risk with smart travel and expense physical and virtual cards for streamlined travel expense management"
              theme="blue"
            />
          </div>
        </div>
        <div className={`row bg-white ${styles.section}`}>
          <div className="col-md-6 col-12 my-md-5 my-3">
            <ExploreCard
              title="Meal Cards"
              description="Simplify food expenses for your employees with secure, easy-to-track prepaid physical and virtual meal cards, offering control, convenience, and tax savings, an all-in-one solution"
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
              animationName={"FreedomMealAnimation"}
              loop={true}
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row row-padding`}>
        <div className="col-md-6 col-12 d-flex mb-5 order-1 order-md-1 justify-content-center">
          <div className={styles.lottie_container}>
            <LottieDynamicLoadComponent
              animationName={"FreedomDigitalAnimation"}
              loop={true}
            />
          </div>
        </div>
        <div className="col-md-6 col-12 mb-md-5 mb-3 order-2 order-md-2 px-md-5">
          <ExploreCard
            title="Digital Marketing Cards"
            description="Take control of your digital marketing budget with purpose-based corporate business credit cards, set custom limits, and streamline campaign management for better performance and cost management"
            theme="green"
          />
        </div>

        <div className="col-md-6 col-12 mt-5 order-4 order-md-3 px-md-5">
          <ExploreCard
            title="SaaS Cards"
            description="Simplify SaaS subscription with unified billing, automated invoicing, and actionable insights to optimize spending for your organization"
            theme="green"
          />
        </div>
        <div className="col-md-6 col-12 d-flex mt-5 order-3 order-md-4 px-md-5">
          <div className={styles.lottie_second_container}>
            <LottieDynamicLoadComponent
              animationName={"FreedomSaasAnimation"}
              loop={true}
            />
          </div>
        </div>
      </div>

      <div className={styles.more_cards}>
        <div className={`row bg-white ${styles.section}`}>
          <div className="col-md-6 col-12 my-md-5 my-3">
            <ExploreCard
              title="Fuel Cards"
              description="This prepaid business corporate card can be used to pay for fuel at any authorized fuel station. They are a convenient and efficient way to manage employee fuel expenses"
              theme="blue"
            />
          </div>
          <div
            className={`col-md-6 col-12 d-flex my-md-0 my-5 d-flex justify-content-end ${styles.first_container}`}
          >
            <Image
              src={cardBg}
              alt="card background"
              className={styles.card_bg}
            />
            <LottieDynamicLoadComponent
              animationName={"FreedomFuelAnimation"}
              loop={true}
            />
          </div>
        </div>
        <div className={`row bg-white ${styles.section}`}>
          <div
            className={`col-md-6 col-12 order-md-1 order-2 d-flex my-md-5 my-5 d-flex justify-content-start  ${styles.second_container}`}
          >
            <Image
              src={cardBg}
              alt="card background"
              className={styles.card_bg}
            />
            <LottieDynamicLoadComponent
              animationName={"FreedomVirtualAnimation"}
              loop={true}
            />
          </div>
          <div className="col-md-6 col-12 order-md-2 order-1 my-md-5 my-3 ">
            <ExploreCard
              title="Virtual Cards"
              description="Make it easy for your modern business to track and reconcile all payments with the new-age and innovative virtual cards."
              theme="blue"
            />
          </div>
        </div>
      </div>

      <div className="row bg-white row-padding">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
          <Heading
            title={`EnKash does${space}`}
            size="h1"
            color="black"
            weight="6"
          />
          <Heading
            title={`the heavy lifting${space}`}
            size="h1"
            color="equity-blue"
            weight="6"
          />
          <Heading title="for you." size="h1" color="black" weight="6" />
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
              <Heading title="Reduced" size="h5" color="white" weight="7" />
              <Heading title="Costs" size="h5" color="white" weight="7" />
            </div>
          </div>

          <div className="mb-4 text-md-center">
            <Image
              src={heavyLiftingIconTwo}
              alt="coins icon"
              className="mb-4"
            />
            <div className="d-flex flex-column">
              <Heading title="Improved" size="h5" color="white" weight="7" />
              <Heading title="Efficiency" size="h5" color="white" weight="7" />
            </div>
          </div>

          <div className="mb-4 text-md-center">
            <Image
              src={heavyLiftingIconThree}
              alt="coins icon"
              className="mb-4"
            />
            <div className="d-flex flex-column">
              <Heading title="Greater" size="h5" color="white" weight="7" />
              <Heading title="Control" size="h5" color="white" weight="7" />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.sixth_row} row d-flex bg-white row-padding`}>
        <EnkashWay
          progressData={[
            {
              itemArray: ["Card", "Issuance"],
              oldWayDescription:
                "Slow and time-consuming, involving multiple steps and paperwork.",
              newWayDescription:
                "Instant and digital, both physical and virtual cards can be issued within minutes of approval and can be activated immediately, providing quick access to funds.",
            },
            {
              itemArray: ["Expense", "tracking"],
              oldWayDescription:
                "Manual and tedious, requiring employees to collect and submit receipts.",
              newWayDescription:
                "Automated and real-time, with all transactions automatically captured and synced to the platform.",
            },
            {
              itemArray: ["Reconciliation"],
              oldWayDescription:
                "Complex and error-prone, requiring manual matching of transactions against receipts and expense reports.",
              newWayDescription:
                "Automated and seamless, automatically reconciling transactions against receipts and expense reports.",
            },
            {
              itemArray: ["Visibility &", "Control"],
              oldWayDescription:
                "Finance teams have limited visibility into employee spending.",
              newWayDescription:
                "Finance teams have complete visibility and control over employee spending.",
            },
            {
              itemArray: ["Employee", "experience"],
              oldWayDescription:
                "Employees have to submit expense reports and wait for reimbursement.",
              newWayDescription:
                "Employees can use their EnKash enabled credit, prepaid, and virtual cards to make purchases without having to worry about reimbursement.",
            },
            {
              itemArray: ["Card	", "Controls"],
              oldWayDescription:
                "No way to set spending limits, track transactions, or prevent employees from using their cards in unauthorized ways.",
              newWayDescription:
                "Easily set spending limits, restrict card usage to certain merchants or categories, and even block cards if necessary.",
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
              whiteTitle="Streamline Card Management "
              description="You can easily issue and manage business credit, prepaid, and virtual cards for your team. To make spending easier and more accountable"
              ctaColor="blue"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Customizable Cards"
              description="Both physical and virtual cards can be customized for different use cases like vendor payments, rental, and GST, and you can even set spending limits for individual cards or categories of expenses"
              ctaColor="blue"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Allocate Credit Limit"
              description="Empower your team with the credit they need for business-related expenses, simplifying cash-flow management"
              ctaColor="blue"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Smart"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Platform"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Gain complete visibility into your team's spending with our smart platform. See where money is going in real-time and track spending trends over time"
              ctaColor="blue"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Quick Disbursement"
              description="Do you need to issue a card for an unexpected expense? The quick disbursement feature makes it easy. You can issue a virtual card in minutes, and your team can start spending immediatel"
              ctaColor="blue"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Purposeful Prepaid Cards"
              description="Leverage prepaid business corporate card to pre-load a specific amount onto each card,  facilitating easy tracking and control of employee expenses, such as fuel and meals"
              ctaColor="blue"
            />
          </div>
        </div>
      </div>

      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper blogData={blogData} title="Freedom Insights" />
      </div>

      <div
        className={`${styles.eigth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs section will help you learn about corporate business cards in detail"
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
          title="Seeking further understanding of freedom cards?"
          description="'Freedom Cards' are purpose-built business credit, prepaid, and virtual cards designed for various corporate needs such as travel, marketing, SaaS, fuel, meals, etc. Powered by banks and financial institutions, these cards enable businesses to issue customized corporate cards, set spending limits, and track expenses in real time."
        />
      </div>

      <div className="row">
        <ComprehensiveView
          title="Explore our comprehensive guide"
          innerHtml={
            <>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are corporate business credit cards?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Corporate business credit cards are credit cards for business purposes based on financial credibility. Once the company gets a credit limit on the corporate card, it can allocate limits to other employees and issue them virtual card for business-related expenses. However, this is only possible when the corporate cards are supported by smart spend management, which helps you allocate limits, set usage rules, and control, monitor, and manage the cards issued with a few simple clicks."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the features of a virtual credit card?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Virtual credit card are digital versions of traditional debit cards. Here are some of the features of virtual credit card:"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Easy accessibility: "
                />
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title=" You must register on EnKash to get your business virtual cards."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Multiple usages: "
                />
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="These virtual cards can be used for rental payments, tax payments, and other business-related expenses"
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Convenience & Secure: "
                />
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Virtual cards are a convenient and secure mode of payment."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Easy to block: "
                />
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="In case they are being misused, you can easily block these cards to avoid misuse."
                />
              </div>

              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="No credit check: "
                />
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Virtual card issuance doesn’t require a credit check."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Will I get a dashboard to control the movement of virtual cards?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="With EnKash, you will get a dashboard to manage and control the movement of virtual cards. This dashboard gives you real-time visibility and control over your virtual card usage, allowing you to set spending limits, block or cancel cards, view transaction history, and manage user access."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title=" What is the difference between prepaid and credit cards?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="While prepaid and credit cards offer convenient payment options, they differ in their fundamental approach to financing. Here are some key differences:"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Prepaid Cards:"
                />
              </div>
              <div className="mb-3">
                <ul>
                  <li>
                    Funds must be loaded onto the card before it can be used
                  </li>
                  <li>
                    Spending is limited to the available balance on the card
                  </li>
                  <li>
                    No credit checks are required to obtain a prepaid card
                  </li>
                </ul>
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Credit Cards:"
                />
              </div>
              <div className="mb-3">
                <ul>
                  <li>
                    Allow users to borrow money up to a predetermined credit
                    limit
                  </li>
                  <li>
                    Repayment of borrowed funds and interest charges are
                    required each month
                  </li>
                  <li>
                    Credit checks are typically required to obtain a credit card
                  </li>
                </ul>
              </div>
            </>
          }
        />
      </div>
    </div>
  );
};

export default freedom;
