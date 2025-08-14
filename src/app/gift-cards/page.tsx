import Image from "next/image"
import styles from "./page.module.scss"
import {
  allProductSections,
  cardData,
  cardType,
  intantActionData,
  spendAnalyticsData,
  stackcardData,
} from "./data"

import {
  RectangleButton,
  CustomBreadcrumb,
  LogoSlider,
  CardProduct,
  DynamicHeading,
  CardStacking,
  AllInOnePolicy,
  FaqSection,
  Heading,
  StepsSection,
} from "@/components"

import {
  blueArrow,
  whiteArrow,
  mealCardImage,
  instantActionImg,
  heroCardImg,
  podiumImage,
} from "."

import faqData from "./faq-data"
import AllProducts from "@/components/all-products/all-products"

const mergedCards = allProductSections.flatMap((section) => section.items)

const cards = stackcardData.map(
  ({ color, icon, title, description, image, buttonUrl }) => ({
    color,
    content: (
      <AllInOnePolicy
        icon={icon}
        title={title}
        description={description}
        image={image}
        buttonUrl={buttonUrl}
        maxImageHeight="300px"
      />
    ),
  })
)
const GiftCards = (): React.JSX.Element => {
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
                  name: "Gift Cards",
                  url: "/corporate-cards/gift-cards",
                },
              ]}
            />
          </div>
          <div className={`${styles.title} col-12 `}>
            <DynamicHeading
              content={[
                {
                  title: "Gift Cards",
                  color: "color-equity-blue underline",
                },
              ]}
              headingTag="p"
              className="mb-2"
            />

            <div className="d-flex  flex-column text-center">
              <DynamicHeading
                content={[
                  {
                    title: "Build a culture of recognition with ",
                    color: "color-black italic f-3 d-block",
                  },
                  {
                    title: "customized Gift Cards",
                    color: "color-black",
                  },
                ]}
                headingTag="h1"
                className="mb-2 f-7"
              />
            </div>

            <div className="d-inline text-center">
              <DynamicHeading
                content={[
                  {
                    title:
                      "Make gifting seamless for businesses with these easy-to-access and control gift cards.",
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

      <div className={styles.second_row}>
        <div className="max-m-auto">
          <div
            className={`${styles.second_row_title} text-center pb-3 pb-md-5`}
          >
            <DynamicHeading
              content={[
                {
                  title: "Best Gift Cards Online",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5"
            />
          </div>
          <div className={`d-flex  flex-wrap  ${styles.section}`}>
            {cardData.map((item, index) => (
              <div
                key={index}
                className={`d-flex flex-column justify-content-center align-items-center ${styles.card}`}
              >
                {item.icon && (
                  <Image src={item.icon} alt="icon" width={28} height={28} />
                )}

                <Heading
                  title={item.title}
                  color="main-grey"
                  size="h7"
                  weight="4"
                  useH1TagInHtml={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <StepsSection
        heading={[
          { text: "How to Buy Gift Cards?", colorClass: "color-black" },
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

      <div className={styles.card_stacking_row}>
        <div className={` max-w-auto  ${styles.section}`}>
          <>
            <CardStacking
              cards={cards}
              heading={[
                {
                  title: "One Gift Card; ",
                  color: "color-black",
                },
                {
                  title: "Endless Choices",
                  color: "color-equity-blue",
                },
              ]}
            />
          </>
        </div>
      </div>

      <StepsSection
        heading={[
          { text: "Other Products to Build ", colorClass: "color-black" },
          {
            text: "High-Performing Teams",
            colorClass: "color-equity-blue",
          },
        ]}
        steps={spendAnalyticsData}
        button={{
          title: "Get Started",
          theme: "border-gray",
          actionImage: blueArrow,
          hoverImage: whiteArrow,
          url: "/sales",
        }}
        image={{
          src: instantActionImg,
          alt: "card background",
        }}
        backgroundClass="bg-color-black-30"
      />

      <div className={`${styles.fifth_row} relative`}>
        <div className={`${styles.title} text-center max-w-auto`}>
          <div
            className={` flex-column justify-content-center align-items-center pb-3  d-inline`}
          >
            <DynamicHeading
              content={[
                {
                  title: "Give Your Employees ",
                  color: "color-black",
                },
                {
                  title: "The Freedom To Choose ",
                  color: "color-equity-blue",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
        </div>
        <AllProducts
          title="All Features"
          subtitle="Combine all use cases"
          data={mergedCards}
        />
      </div>

      <div className={`${styles.sixth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center   flex-column gap-4 align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title: "Explore our customizable gift cards!",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5"
            />
          </div>

          <div className={`${styles.get_started_button} `}>
            <RectangleButton
              title="Get Started Today "
              theme="outline-blue"
              actionImage={blueArrow}
              hoverImage={whiteArrow}
              url="/sales/?source=expense_management"
            />
          </div>
        </div>
      </div>

      <FaqSection faqData={faqData} />

      <div className={styles.other_products}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-5`}>
            <DynamicHeading
              content={[
                {
                  title: "Choose",
                  color: "color-black",
                },
                {
                  title: " the Right Card",
                  color: "color-equity-blue",
                },
                {
                  title: " for Every Use Case",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
          <div className="row g-3 pb-4">
            {cardType.map(({ titleHtml, description, cardImage }, index) => (
              <div key={index} className="col-12 col-md-4">
                <CardProduct
                  titleHtml={titleHtml}
                  description={description}
                  cardImage={cardImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GiftCards
