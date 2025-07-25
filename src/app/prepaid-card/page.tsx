"use client"
import Image from "next/image"
import { space } from "@/common/constant"
import styles from "./page.module.scss"
import { Header, Heading, Footer, FAQHtml } from "@/components"
import {
  blueArrow,
  whiteArrow,
  podiumImage,
  heroCardImg,
  tabIconOne,
  tabIcontwo,
  tabIconThree,
  tabIconFour,
  tabIconFive,
} from "."
import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"
import CustomBreadcrumb from "@/components/breadcrumb/breadbrumb"
import { faqData } from "./faq-data"
import LogoSlider from "@/components/logo-slider/logo-slider"
import EnkashWay from "@/components/enkash-way/enkash-way"
import { itIcon } from "../products/expense-management"
import bg1 from "./img/MealCard.jpg"
import bg2 from "./img/Fuel-card.jpg"
import bg3 from "./img/digital-marketing.jpg"
import bg4 from "./img/logistic-card.jpg"
import bg5 from "./img/payroll-card.jpg"

// const showScroll = cardsData.length > 3
// const mergedCards = allProductSections.flatMap((section) => section.items)
const PrepaidCard = (): React.JSX.Element => {
  return (
    <div className={`color-white  ${styles.home_container}`}>
      <Header utmSource="expense_management" />
      <TalkToSales />
      <div className={`${styles.first_row}`}>
        <div className="max-w-auto px-4">
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
            />
          </div>
          <div className={`${styles.title} col-12 `}>
            <Heading
              title="Prepaid Cards"
              color="equity-blue"
              size="h5"
              weight="4"
              underline
            />
            <div className="d-flex  flex-column text-center">
              <Heading
                title="The Best Prepaid Corporate Card "
                color="black"
                size="h2"
                weight="2"
                italic
              />
              <Heading
                title="for Business Spending"
                color="black"
                size="h2"
                weight="7"
              />
            </div>

            <div className="d-inline text-center">
              <Heading
                title="No paperwork. No delays. Just swipe and go, with full compliance."
                color="black"
                size="h5"
                weight="4"
                useH1TagInHtml={true}
              />
            </div>
            <div className={styles.button_wrapper}>
              <RectangleButton
                title="Get Started"
                theme="blue"
                url="/sales/?source=expense_management"
              />
            </div>
          </div>
        </div>
        <div className=" col-12 pt-5 ">
          <div className={styles.lottie_container}>
            {" "}
            <Image src={heroCardImg} alt="card background" className=" " />
          </div>
          <div className={styles.lottie_container_bottom}>
            {" "}
            <Image
              src={podiumImage}
              alt="card background"
              className="position-absolute "
            />
          </div>
        </div>
      </div>

      <div>
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

      <div className={`${styles.fourth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center   flex-column gap-4 align-items-center text-center">
            <Heading
              title="Step into the world of smarter, safer, and seamless spending "
              size="bannerHeading"
              color="white"
              weight="4"
            />
          </div>

          <div className={`${styles.get_started_button} `}>
            <RectangleButton
              title="Get Started "
              theme="outline-blue"
              actionImage={blueArrow}
              hoverImage={whiteArrow}
              url="/sales/?source=expense_management"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.faq_new_row}  relative`}>
        <div className={`${styles.faqSection} text-start max-w-auto `}>
          <div className={`${styles.title} text-start  pb-md-5 pb-3`}>
            <Heading
              title={`Frequently Asked Questions ${space}`}
              color="black"
              size="h1"
              weight="5"
            />
            <Heading title={`(`} color="black" size="h1" weight="5" />
            <Heading title={`FAQs`} color="equity-blue" size="h1" weight="5" />
            <Heading title={`) ${space}`} color="black" size="h1" weight="5" />
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div>
              <div>
                <Heading
                  title="Have more questions? "
                  color="dark-grey"
                  size="h3"
                  weight="5"
                  useH1TagInHtml={true}
                />
              </div>
              <div className="mt-2 d-none d-md-block">
                <RectangleButton
                  title="Get started today"
                  theme="border-gray"
                  actionImage={blueArrow}
                  hoverImage={whiteArrow}
                  iconSize={15}
                  url="/sales/?source=receivables"
                />
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
