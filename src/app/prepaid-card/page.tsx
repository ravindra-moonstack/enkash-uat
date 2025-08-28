import Image from "next/image"
import styles from "./page.module.scss"
import {
  RectangleButton,
  CustomBreadcrumb,
  LogoSlider,
  DynamicHeading,
  CardStacking,
  AllInOnePolicy,
  FaqSection,
} from "@/components"
import { blueArrow, whiteArrow, heroCardImg } from "."
import { faqData } from "./faq-data"
import EnkashWay from "@/components/enkash-way/enkash-way"
import { progressData, stackcardData } from "./data"
import { Metadata } from "next"
import generateMetaData from "@/common/utils/metaData"
import { getSalesUrl } from "@/common/utils/getSalesUrl"

export const metadata: Metadata = generateMetaData({
  title: "EnKash Corporate Prepaid Cards for Business Payments",
  description:
    "Empower your teams with EnKash’s corporate prepaid cards. Control spending, track expenses in real-time, and manage business payments effortlessly and securely.",
  alternates: {
    canonical: `${process.env.URL}/prepaid-card/`,
  },
})
const salesUrl = getSalesUrl("/prepaid-card")

const cards = stackcardData.map((item, index) => ({
  color: item.color,
  content: (
    <AllInOnePolicy
      key={index}
      buttonText="Get Started"
      icon={item.icon}
      title={item.title}
      description={item.description}
      image={item.image}
      buttonUrl={salesUrl}
      maxImageHeight="300px"
    />
  ),
}))
const PrepaidCard = (): React.JSX.Element => {
  return (
    <div className={`color-white  ${styles.home_container}`}>
      <div className={`${styles.first_row}`}>
        <div className="max-w-auto ">
          <div className="d-flex">
            <CustomBreadcrumb
              items={[
                { name: "Home", url: "/" },
                { name: "Corporate Cards ", url: "/products/corporate-cards" },
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
        <div className={`${styles.lottie_containerOuter} col-12`}>
          <div className={styles.lottie_container}>
            {" "}
            <Image src={heroCardImg} alt="card background" className=" " />
          </div>
        </div>
      </div>

      <div className="cardsSliderMargin">
        <LogoSlider />
      </div>

      <EnkashWay
        sectionHeading="Ditch out-of-pocket claims. "
        secondHeading="Take control of every rupee."
        secondHeadingColor="black"
        subTitle="Empower your teams with prepaid business cards that simplify purchases, improve tracking, and eliminate manual reimbursements."
        progressData={progressData.map((item) => ({
          ...item,
        }))} 
      />

      <div className={styles.card_stacking_row}>
        <div className={` max-w-auto  ${styles.section}`}>
          <CardStacking
            cards={cards}
            heading={[
              {
                title: "Why Businesses Love Us? ",
                color: "color-black",
              },
            ]}
          />
        </div>
      </div>

      <div className={`${styles.fourth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center   flex-column gap-4 align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title:
                    "Step into the World of Smarter, Safer & Seamless Spending",
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

      <FaqSection faqData={faqData} />
    </div>
  )
}

export default PrepaidCard
