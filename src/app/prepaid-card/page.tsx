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
import { blueArrow, whiteArrow, podiumImage, heroCardImg } from "."
import { faqData } from "./faq-data"
import EnkashWay from "@/components/enkash-way/enkash-way"
import { progressData, stackcardData } from "./data"

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
      buttonUrl={item.buttonUrl}
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
                { name: "Corporate Cards ", url: "/corporate-cards" },
                {
                  name: "Prepaid Cards",
                  url: "/corporate-cards/prepaid-card",
                },
              ]}
            />
          </div>
          <div className={`${styles.title} col-12 `}>
            <DynamicHeading
              content={[
                {
                  title: "Prepaid Cards",
                  color: "color-equity-blue underline",
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
                    color: "color-black f-3 d-block italic",
                  },
                  {
                    title: "for Business Spending",
                    color: "color-black",
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
                    color: "color-black subHeading",
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

      <LogoSlider />
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
                title: "Why Businesses Love Us ",
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
              url="/sales/?source=expense_management"
            />
          </div>
        </div>
      </div>

      <FaqSection faqData={faqData} />
    </div>
  )
}

export default PrepaidCard
