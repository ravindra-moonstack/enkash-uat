import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.scss"
import { Header, Footer, FAQHtml } from "@/components"
import {
  blueArrow,
  whiteArrow,
  heroCardImg,
  tabIconOne,
  tabIcontwo,
  tabIconThree,
  tabIconFour,
  tabIconFive,
  realTimeExpenseIcon,
  realTimeExpense,
  fraudProtectionIcon,
  fraudProtection,
  streamlinedReimbursementIcon,
  streamlinedReimbursement,
  costControlSavingsIcon,
  costControlSavings,
  wideAcceptanceNetworkIcon,
  wideAcceptanceNetwork,
} from "."
import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"
import CustomBreadcrumb from "@/components/breadcrumb/breadbrumb"
import { faqData } from "./faq-data"
import LogoSlider from "@/components/logo-slider/logo-slider"
import EnkashWay from "@/components/enkash-way/enkash-way"
import bg1 from "./img/MealCard.jpg"
import bg2 from "./img/Fuel-card.jpg"
import bg3 from "./img/digital-marketing.jpg"
import bg4 from "./img/logistic-card.jpg"
import bg5 from "./img/payroll-card.jpg"
import CardStacking from "@/components/cardStacking/cardStacking"
import DynamicHeading from "@/components/dynamicHeading/dynamic-heading"
import AllInOnePolicy from "@/components/all-in-one-policy/all-in-one-policy"
import { Metadata } from "next"
import generateMetaData from "@/common/utils/metaData"
import { getSalesUrl } from "@/common/utils/getSalesUrl"

export const metadata: Metadata = generateMetaData({
  title: "EnKah Corporate Prepaid Cards for Business Payments",
  description:
    "Empower your teams with EnKash’s corporate prepaid cards. Control spending, track expenses in real-time, and manage business payments effortlessly and securely.",
  alternates: {
    canonical: "https://www.enkash.com/prepaid-card/",
  },
})
const salesUrl = getSalesUrl("/prepaid-card")

const cards = [
  {
    color: "#fff",
    content: (
      <>
        <AllInOnePolicy
          icon={realTimeExpenseIcon}
          title="Enjoy Ultimate Control"
          description="Block merchant types, set daily/weekly/monthly spend limits, and restrict payment modes (ATM, POS, Online) - all in minutes."
          image={realTimeExpense}
          buttonUrl="/sales/?source=expense_management"
          maxImageHeight="300px"
        />
      </>
    ),
  },
  {
    color: "#eee",
    content: (
      <>
        <AllInOnePolicy
          icon={fraudProtectionIcon}
          title="Instantly Issue & Reload Cards"
          description="Issue cards digitally to teams or individuals. Load or top up in one click via your centralized dashboard."
          image={fraudProtection}
          buttonUrl="/sales"
          maxImageHeight="300px"
        />
      </>
    ),
  },
  {
    color: "#fff",
    content: (
      <>
        <AllInOnePolicy
          icon={streamlinedReimbursementIcon}
          title="Real-Time Visibility"
          description="Track every swipe the moment it happens. Spot anomalies, analyze trends, and take corrective action instantly."
          image={streamlinedReimbursement}
          buttonUrl="/sales/?source=expense_management"
          maxImageHeight="300px"
        />
      </>
    ),
  },
  {
    color: "#eee",
    content: (
      <>
        <AllInOnePolicy
          icon={costControlSavingsIcon}
          title="Get 360° Spend Analytics"
          description="Get 360° reporting on who spent what, where, and why. Slice and dice by department, location, or category."
          image={costControlSavings}
          buttonUrl="/sales"
          maxImageHeight="300px"
        />
      </>
    ),
  },
  {
    color: "#fff",
    content: (
      <>
        <AllInOnePolicy
          icon={wideAcceptanceNetworkIcon}
          title="Seamlessly Reconcile"
          description="Auto-categorize spends, attach invoices, and sync with your accounting system. Close your books faster—without chasing receipts."
          image={wideAcceptanceNetwork}
          buttonUrl="/sales/?source=expense_management"
          maxImageHeight="300px"
        />
      </>
    ),
  },
]
const PrepaidCard = (): React.JSX.Element => {
  return (
    <div className={`color-white  ${styles.home_container}`}>
      <Header utmSource="expense_management" />
      <TalkToSales />
      <div className={`${styles.first_row}`}>
        <div className="max-w-auto ">
          <div className="d-flex">
            <CustomBreadcrumb
              items={[
                { name: "Home", url: "/" },
                { name: "Corporate Cards ", url: "/corporate-cards" },
                {
                  name: "Prepaid Cards",
                  url: "/corporate-cards/prepaid-card",
                },
              ]}
              linkColor="allWhite"
            />
          </div>
          <div className={`${styles.title} col-12 `}>
            <DynamicHeading
              content={[
                {
                  title: "Prepaid Cards",
                  color: "color-white underline",
                },
              ]}
              headingTag="p"
              className=""
            />
            <div className="d-flex  flex-column text-center">
              <DynamicHeading
                content={[
                  {
                    title: "The Best Prepaid Corporate Card",
                    color: "color-white f-3 d-block italic",
                  },
                  {
                    title: "for Business Spending",
                    color: "color-white",
                  },
                ]}
                headingTag="h1"
                className="f-7 mb-2"
              />
            </div>

            <div className="d-inline text-center">
              <DynamicHeading
                content={[
                  {
                    title:
                      "No paperwork. No delays. Just swipe and go, with full compliance.",
                    color: "color-white subHeading",
                  },
                ]}
                headingTag="p"
                className=""
              />
            </div>
            <div className={styles.button_wrapper}>
              <RectangleButton
                title="Get Started"
                theme="blue"
                url={salesUrl}
              />
            </div>
          </div>
        </div>
        <div className=" col-12 pt-5 ">
          <div className={styles.lottie_container}>
            {" "}
            <Image src={heroCardImg} alt="card background" className=" " />
          </div>
        </div>
      </div>

      <div className="cardsSliderMargin">
        <LogoSlider />
      </div>

      <div className={`${styles.sixth_row} row d-flex bg-white `}>
        <EnkashWay
          sectionHeading="Ditch out-of-pocket claims. "
          secondHeading="Take control of every rupee."
          secondHeadingColor="black"
          subTitle="Empower your teams with prepaid business cards that simplify purchases, improve tracking, and eliminate manual reimbursements."
          progressData={[
            {
              itemArray: ["Meal Card"],
              title: "Meal Card",
              description:
                "Enable tax-saving meal benefits for employees with preloaded, compliant meal cards accepted at food outlets, canteens, and online platforms.",
              icon: tabIconOne,
              bgImage: bg1,
              url: "/meal-card",
            },
            {
              itemArray: ["Fuel Card"],
              title: "Fuel Card",
              description:
                "Optimize your fuel spends with cards restricted to fuel merchants only. Get complete visibility and prevent fuel misuse at the pump.",
              icon: tabIcontwo,
              bgImage: bg2,
              url: "/fuel-card",
            },
            {
              itemArray: ["Digital Marketing Card"],
              title: "Digital Marketing Card",
              description:
                "Manage campaign budgets with dedicated prepaid cards for ad platforms like Google, Meta, and LinkedIn - eliminating overages.",
              icon: tabIconThree,
              bgImage: bg3,
              url: "/digital-marketing-card",
            },
            {
              itemArray: ["Fleet & Logistics Card"],
              title: "Logistics & Supply Chain",
              description:
                "Give your drivers the power to pay without the risk of cash misuse. Track fuel, tolls, and repair spends in real-time.",
              icon: tabIconFour,
              bgImage: bg4,
              url: "/fleet-card",
            },
            {
              itemArray: ["Payroll Card"],
              title: "Payroll Card",
              description:
                "Pay employees and gig workers instantly: no bank hassles, no KYC delays. Load salaries, bonuses, or incentives directly to payroll cards.",
              icon: tabIconFive,
              bgImage: bg5,
              url: "/payroll-card",
            },
          ]}
        />
      </div>
      <div className={styles.card_stacking_row}>
        <div className={` max-w-auto  ${styles.section}`}>
          <>
            <div className={`${styles.title} text-center `}>
              <DynamicHeading
                content={[
                  {
                    title: "Why Businesses Love Us ",
                    color: "color-black",
                  },
                ]}
                headingTag="h2"
                className="f-6"
              />
            </div>

            <CardStacking cards={cards} />
          </>
        </div>
      </div>
      <div className={`${styles.fourth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center   flex-column gap-4 align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title:
                    "Step into the world of smarter, safer, and seamless spending",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5"
            />
          </div>

          <div className={`${styles.get_started_button} `}>
            <RectangleButton
              title="Get Started "
              theme="outline-blue"
              actionImage={blueArrow}
              hoverImage={whiteArrow}
              url={salesUrl}
            />
          </div>
        </div>
      </div>

      <div className={`${styles.faq_new_row}  relative`}>
        <div className={`${styles.faqSection} text-start max-w-auto `}>
          <div className={`${styles.title} text-start  pb-md-5 pb-3`}>
            <DynamicHeading
              content={[
                {
                  title: "Frequently Asked Questions (",
                  color: "color-black",
                },
                {
                  title: "FAQs",
                  color: "color-equity-blue",
                },
                {
                  title: ")",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div>
              <div>
                <DynamicHeading
                  content={[
                    {
                      title: "Have more questions?",
                      color: "color-border-gray subHeading",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0"
                />
              </div>
              <div className="mt-3 d-none d-md-block">
                <div className="connectWithUs">
                  <Link href="/contact-us">
                    <DynamicHeading
                      content={[
                        {
                          title: "Connect with us",
                          color: "color-equity-blue ",
                        },
                      ]}
                      headingTag="p"
                      className="mb-0 f-5"
                    />
                    <Image
                      src={blueArrow}
                      alt="blue Arrow"
                      width={15}
                      height={15}
                      className="ms-2"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className={`${styles.faqData}`}>
              <FAQHtml faqData={faqData} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default PrepaidCard
