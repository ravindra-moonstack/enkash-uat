import Image from "next/image"
import styles from "./page.module.scss"
import { cardType, intantActionData, stackcardData } from "./data"
import {
  RectangleButton,
  CustomBreadcrumb,
  LogoSlider,
  CardProduct,
  DynamicHeading,
  CardStacking,
  AllInOnePolicy,
  StepsSection,
  FaqSection,
} from "@/components"
import {
  blueArrow,
  whiteArrow,
  mealCardImage,
  podiumImage,
  heroCardImg,
} from "."

import faqData from "./faq-data"

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
const FuelCards = (): React.JSX.Element => {
  return (
    <div className={`color-white  ${styles.home_container}`}>
      <div className={`${styles.first_row}`}>
        <div className="max-w-auto">
          <div className="d-flex">
            <CustomBreadcrumb
              items={[
                { name: "Home", url: "/" },
                { name: "Corporate Cards ", url: "/corporate-cards" },
                {
                  name: "Fuel Card",
                  url: "/corporate-cards/fuel-card",
                },
              ]}
            />
          </div>
          <div className={`${styles.title} col-12 `}>
            <DynamicHeading
              content={[
                {
                  title: "Fuel Card",
                  color: "color-equity-blue underline",
                },
              ]}
              headingTag="p"
              className=""
            />
            <div className=" text-center">
              <DynamicHeading
                content={[
                  {
                    title: "Transforming Fuel Expense Management with ",
                    color: "color-black italic f-3 d-block",
                  },
                  {
                    title: " Fuel Cards*",
                    color: "color-black",
                  },
                ]}
                headingTag="h1"
                className="f-7 mb-2"
              />
            </div>

            <div className="text-center">
              <DynamicHeading
                content={[
                  {
                    title:
                      "Eliminate hassle, gain control, and cut costs with a comprehensive fuel card solution for businesses of all sizes.",
                    color: "color-black subHeading",
                  },
                ]}
                headingTag="p"
                className=""
              />
            </div>
            <div className={styles.button_wrapper}>
              <RectangleButton title="Get Started" theme="blue" url="/sales" />
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
  

      <div>
        <StepsSection
          heading={[
            { text: "Steps to Manage Employee ", colorClass: "color-black" },
            { text: "Fuel Costs", colorClass: "color-equity-blue" },
          ]}
          steps={intantActionData}
          button={{
            title: "Get Started",
            theme: "border-gray",
            actionImage: blueArrow,
            hoverImage: whiteArrow,
            url: "/sales",
          }}
          image={{
            src: mealCardImage,
            alt: "card background",
          }}
        />
      </div>

      <div className={styles.card_stacking_row}>
        <div className={` max-w-auto  ${styles.section}`}>
          <>
            <CardStacking
              cards={cards}
              heading={[
                {
                  title: "Unlock  ",
                  color: "color-black",
                },
                {
                  title: "Savings ",
                  color: "color-equity-blue",
                },
                {
                  title: "on Every Mile",
                  color: "color-black",
                },
              ]}
            />
          </>
        </div>
      </div>

   
        <FaqSection faqData={faqData} />
     

      <div className={styles.other_products}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-5`}>
            <DynamicHeading
              content={[
                {
                  title: "Your Business, Your Cards – ",
                  color: "color-black",
                },
                {
                  title: "Tailored by EnKash",
                  color: "color-equity-blue",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
          <div className="row g-3 pb-4">
            {cardType.map(
              ({ titleHtml, description, cardImage, linkUrl }, index) => (
                <div key={index} className="col-12 col-md-4">
                  <CardProduct
                    titleHtml={titleHtml}
                    description={description}
                    cardImage={cardImage}
                    linkUrl={linkUrl}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FuelCards
