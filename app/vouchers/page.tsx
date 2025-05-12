import Image from "next/image"
import { Metadata } from "next"
import { space } from "@/common/constant"
import styles from "./page.module.scss"
import { blogData, dataSets } from "./data"
import faqData from "./faq-data"
import {
  Header,
  Footer,
  Heading,
  BlogWrapper,
  ComprehensiveView,
  PrimaryButton,
  GetStartedCard,
  ContactUsCard,
  FAQHtml,
  StructuredData,
  SecondryButton,
} from "@/components"
import ExploreCard from "@/components/explore-card/explore-card"
import EnkashWay from "@/components/enkash-way/enkash-way"
import LottieDynamicLoadComponent from "@/components/lottie-client/lottie-dynamic-load-client"
import {
  officeImg,
  whiteArrow,
  cardBg,
  faqBg,
  heavyLiftingIconOne,
  heavyLiftingIconTwo,
  heavyLiftingIconThree,
  eCommerceImg,
  foodAndBeverages,
  apparels,
  moviesAndMusic,
  healthAndWellness,
  boltHero,
} from "."
import generateMetaData from "@/common/utils/metaData"
import HowDoesItWork from "@/components/how-does-it-work/how-does-it-work."

export const metadata: Metadata = generateMetaData({
  title: "Buy Exclusive e Gift Cards & Brand Gift Vouchers Online | EnKash",
  description:
    "Buy e-Gifts cards online with our exclusively curated 400+ brand E-gift cards & vouchers available across various categories. Customize the Corporate gift vouchers without any Hassle with EnKash.",
  alternates: {
    canonical: "https://www.enkash.com/vouchers/",
  },
  faqData: faqData,
})

const boltPage = () => {
  const boltUTM = `https://bolt.enkash.com/signup?utm_source=bolt&utm_medium=enkash_website&utm_campaign=brandvoucher_explore_bolt`
  const halfBoltUTM = `bolt&utm_medium=enkash_website&utm_campaign=brandvoucher_explore_bolt`
  return (
    <div className={`color-white ${styles.home_container}`}>
      <StructuredData url={`https://www.enkash.com/bolt/`} faqData={faqData} />
      <Header utmSource={halfBoltUTM} />

      <div className={`${styles.first_row} row color-white`}>
        <div className="col-md-6 col-12 d-flex flex-column">
          <div className="d-flex mb-4">
            <Heading
              title="Brand Vouchers"
              color="rainy-blue"
              size="h1"
              weight="7"
            />
          </div>
          <div className="d-flex flex-column">
            <Heading
              title="Unlock huge savings on"
              color="white"
              size="h2"
              weight="7"
            />
            <div className="d-flex">
              <Heading
                title={`exclusive ${space}`}
                color="white"
                size="h2"
                weight="7"
                useH1TagInHtml={true}
              />
              <Heading
                title="brand vouchers"
                color="rainy-blue"
                size="h2"
                weight="7"
              />
            </div>
          </div>

          <div className="mt-4 mobile-only">
            <Heading
              title="Gain access to a curated selection of brand vouchers across various categories and enjoy huge savings"
              color="white"
              size="h6"
              weight="5"
            />
          </div>
          <div className="mt-4 desktop-only">
            <Heading
              title="Gain access to a curated selection of brand vouchers across various categories and enjoy huge savings "
              color="white"
              size="h5"
              weight="5"
            />
          </div>
          <div className="mt-5">
            <PrimaryButton
              title="Talk to Sales "
              theme="blue"
              url="/sales/?source=Bolt"
            />
            <span className="mx-2"></span>
            <SecondryButton
              title="Sign Up "
              actionImage={whiteArrow}
              iconSize={15}
              url="/login"
            />
          </div>
        </div>

        <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
          <div className={styles.lottie_container}>
            <Image src={boltHero} alt="bolt" />
            {/* <LottieDynamicLoadComponent
              animationName={"LoyaltyBannerAnimation"}
              loop={true}
            /> */}
          </div>
        </div>
      </div>

      <div className={`${styles.second_row} bg-white row d-flex row-padding`}>
        <HowDoesItWork dataSets={dataSets} bannerImage={officeImg} />
      </div>

      <div className={styles.third_row}>
        <div className={`row bg-white ${styles.section}`}>
          <div className="col-md-6 col-12 my-md-5 my-5">
            <ExploreCard
              title="E-commerce"
              description="Get enticing deals on a diverse range of e-commerce brands. Whether you're searching for the latest gadgets, trendy fashion items, or household essentials, get all in one place"
              theme="blue"
              link="/voucher/category/e-commerce"
            />
          </div>
          <div
            className={`col-md-6 col-12 d-flex my-md-5 my-3 d-flex justify-content-center ${styles.first_container}`}
          >
            <Image
              src={cardBg}
              alt="card background"
              className={styles.card_bg}
            />
            <div className={styles.first_lottie_container}>
              <Image src={eCommerceImg} alt="E-commerce" />
              {/* <LottieDynamicLoadComponent
                animationName={"LoyaltyEmployeeAnimation"}
                loop={true}
              /> */}
            </div>
          </div>
        </div>

        <div className={`row bg-white ${styles.section}`}>
          <div
            className={`col-md-6 col-12 order-md-1 order-2 d-flex my-md-5 my-3 d-flex justify-content-  ${styles.second_container}`}
          >
            <Image
              src={cardBg}
              alt="card background"
              className={styles.card_bg}
            />
            <div className={styles.second_lottie_container}>
              <Image src={foodAndBeverages} alt="Food and Beverages" />
              {/* <LottieDynamicLoadComponent
                animationName={"LoyaltyBrandVoucherAnimation"}
                loop={true}
              />{" "} */}
            </div>
          </div>
          <div className="col-md-6 col-12 order-md-2 order-1 my-md-5 my-3 ">
            <ExploreCard
              title="Food & Beverages"
              description="Treat your taste buds to good food, from gourmet delicacies to everyday essentials, and relish in discounts that make every meal more satisfying"
              theme="blue"
              link="/voucher/category/food-and-beverages"
            />
          </div>
        </div>

        <div className={`row bg-white ${styles.section}`}>
          <div className="col-md-6 col-12 my-md-5 my-3">
            <ExploreCard
              title="Apparels"
              description="Elevate your style quotient without breaking the bank by availing discounted shopping gift vouchers from famous apparel brands"
              theme="blue"
              link="/voucher/category/apparels"
            />
          </div>
          <div
            className={`col-md-6 col-12 d-flex my-md-5 my-5 d-flex justify-content-end ${styles.third_container}`}
          >
            <Image
              src={cardBg}
              alt="card background"
              className={styles.card_bg}
            />
            <div className={styles.third_lottie_container}>
              <Image src={apparels} alt="apparels" />
            </div>

            {/* <LottieDynamicLoadComponent
              animationName={"LoyaltyGiftCardAnimation"}
              loop={true}
            /> */}
          </div>
        </div>

        <div className={`row bg-white ${styles.section}`}>
          <div
            className={`col-md-6 col-12 order-md-1 order-2 d-flex my-md-5 my-3 d-flex justify-content-  ${styles.second_container}`}
          >
            <Image
              src={cardBg}
              alt="card background"
              className={styles.card_bg}
            />
            <div className={styles.second_lottie_container}>
              <Image src={moviesAndMusic} alt="movies and music" />
              {/* <LottieDynamicLoadComponent
                animationName={"LoyaltyBrandVoucherAnimation"}
                loop={true}
              />{" "} */}
            </div>
          </div>
          <div className="col-md-6 col-12 order-md-2 order-1 my-md-5 my-3 ">
            <ExploreCard
              title="Movies & Music"
              description="Immerse yourself in a world of entertainment at a fraction of the cost with gift vouchers from leading movies and music providers"
              theme="blue"
              link="/voucher/category/movies-and-music"
            />
          </div>
        </div>

        <div className={`row bg-white ${styles.section}`}>
          <div className="col-md-6 col-12 my-md-5 my-3">
            <ExploreCard
              title="Health and Wellness"
              description="Prioritize your well-being with our range of savings on health and wellness brands. Our discounted gift vouchers empower you to invest in your health without straining your budget"
              theme="blue"
              link="/voucher/category/health-and-wellness"
            />
          </div>
          <div
            className={`col-md-6 col-12 d-flex my-md-5 my-5 d-flex justify-content-end ${styles.third_container}`}
          >
            <Image
              src={cardBg}
              alt="card background"
              className={styles.card_bg}
            />
            <div className={styles.fourth_lottie_container}>
              <Image src={healthAndWellness} alt="Health and wellness" />
            </div>
            {/* <LottieDynamicLoadComponent
              animationName={"LoyaltyGiftCardAnimation"}
              loop={true}
            /> */}
          </div>
        </div>
      </div>

      {/* <div className={`${styles.fourth_row} row row-padding`}>
        <div className="col-md-6 col-12 d-flex mb-5 order-1 order-md-1 justify-content-center">
          <div className={styles.lottie_container}>
            <LottieDynamicLoadComponent
              animationName={"LoyaltyOfferAnimation"}
              loop={true}
            />
          </div>
        </div>
        <div className="col-md-6 col-12 mb-md-5 mb-3 order-2 order-md-2 px-md-5">
          <ExploreCard
            title="Offers"
            description="Unlock exclusive offers and enjoy discounts on various partnered subscriptions from popular services such as Amazon, ClearTax, Canva, and numerous others"
            theme="green"
            link="/offers"
          />
        </div>

        <div className="col-md-6 col-12 mt-5 order-4 order-md-3 px-md-5">
          <ExploreCard
            title="Channel Incentives"
            description="A cutting-edge solution that helps businesses automate and streamline their channel incentive programs, boosting channel partner engagement, loyalty, and revenue"
            theme="green"
            link="/channel-incentives"
          />
        </div>
        <div className="col-md-6 col-12 d-flex mt-5 order-3 order-md-4 px-md-5">
          <div className={styles.second_lottie_container}>
            <LottieDynamicLoadComponent
              animationName={"LoyaltyChannelAnimation"}
              loop={true}
            />{" "}
          </div>
        </div>
      </div> */}

      <div className="row bg-white row-padding text-center">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div>
            <Heading
              title={`Elevate your ${space}`}
              size="h1"
              color="black"
              weight="6"
            />
          </div>
          <Heading
            title={`shopping experience  ${space}`}
            size="h1"
            color="equity-blue"
            weight="6"
          />
          <Heading
            title={` with huge discounts`}
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
              <Heading title="Simplified " size="h5" color="white" weight="7" />
              <Heading title="Redemption" size="h5" color="white" weight="7" />
            </div>
          </div>

          <div className="mb-4 text-md-center">
            <Image
              src={heavyLiftingIconTwo}
              alt="coins icon"
              className="mb-4"
            />
            <div className="d-flex flex-column">
              <Heading
                title="Flexibility & "
                size="h5"
                color="white"
                weight="7"
              />
              <Heading title="Choice" size="h5" color="white" weight="7" />
            </div>
          </div>

          <div className="mb-4 text-md-center">
            <Image
              src={heavyLiftingIconThree}
              alt="coins icon"
              className="mb-4"
            />
            <div className="d-flex flex-column">
              <Heading
                title="Hassle-Free "
                size="h5"
                color="white"
                weight="7"
              />
              <Heading title="Management" size="h5" color="white" weight="7" />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.sixth_row} row d-flex bg-white row-padding`}>
        <EnkashWay
          progressData={[
            {
              itemArray: ["Voucher", "Access"],
              oldWayDescription:
                "Buying physical vouchers can take time and effort.",
              newWayDescription:
                "Vouchers instantly come to your mailbox. These can be easily accessed anytime and anywhere with your EnKash account.",
            },
            {
              itemArray: ["Redemption", "Process"],
              oldWayDescription:
                "Redeeming vouchers may require in-person visits or lengthy online processes.",
              newWayDescription:
                "Redeem vouchers effortlessly with just a few clicks during online deals or in-store transactions.",
            },
            {
              itemArray: ["Freedom", "of Choice"],
              oldWayDescription:
                "Voucher limitations and restrictions can hinder your ability to choose freely.",
              newWayDescription:
                "Enjoy the flexibility to choose from a diverse range and buy gift vouchers tailored to your preferences.",
            },
            {
              itemArray: ["Voucher", "Management"],
              oldWayDescription:
                "Keeping track of multiple paper vouchers can be troublesome.",
              newWayDescription:
                "No more clutter or misplacement, buy gift vouchers easily and manage online.",
            },
            {
              itemArray: ["Personalization"],
              oldWayDescription:
                "Limited personalization options for physical vouchers.",
              newWayDescription:
                "Share brand vouchers as gifts with personalized messages for birthdays, anniversaries, and other special occasions.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline  flex-column text-center mb-5">
          <Heading
            title="Let them choose their adventure with our"
            size="h1"
            color="black"
            weight="6"
          />
          <Heading
            title={`${space} exclusive range of brand vouchers  `}
            size="h1"
            color="black"
            weight="6"
          />
        </div>
        <div className="d-flex justify-content-center">
          <div className={`d-flex flex-md-row mt-3 pb-4 scroll_container`}>
            <div className="me-4">
              <GetStartedCard
                titleHtml={
                  <div className="d-flex flex-column">
                    <Heading
                      title="Instant"
                      color="rainy-blue"
                      size="h2"
                      weight="6"
                    />
                    <Heading
                      title="Delivery"
                      color="rainy-blue"
                      size="h2"
                      weight="6"
                    />
                  </div>
                }
                description="Brand vouchers are available with a snap of a finger and can be accessed anytime and anywhere"
                ctaColor="blue"
                source="Loyalty_lounge"
              />
            </div>
            <div className="me-4">
              <GetStartedCard
                titleHtml={
                  <div className="d-flex flex-column">
                    <Heading
                      title="Flexible"
                      color="rainy-blue"
                      size="h2"
                      weight="6"
                    />
                    <Heading
                      title=" Denominations"
                      color="rainy-blue"
                      size="h2"
                      weight="6"
                    />
                  </div>
                }
                description="Brand vouchers can be availed in multiple flexible denominations as per budget"
                ctaColor="blue"
                source="Loyalty_lounge"
              />
            </div>
            <div className="me-4">
              <GetStartedCard
                titleHtml={
                  <div className="d-flex flex-column">
                    <Heading
                      title="Discount on"
                      color="rainy-blue"
                      size="h2"
                      weight="6"
                    />
                    <Heading
                      title="Bulk Ordering"
                      color="rainy-blue"
                      size="h2"
                      weight="6"
                    />
                  </div>
                }
                description="Exclusive savings can be availed on our brand gift vouchers for employees if ordered in bulk"
                ctaColor="blue"
                source="Loyalty_lounge"
              />
            </div>
            <div className="me-4">
              <GetStartedCard
                whiteTitle="Automatic Alerts"
                description="Integrated platform to automatically inform users via WhatsApp, and e-mail with details of the purchased voucher and instructions on how to redeem it"
                ctaColor="blue"
                source="Loyalty_lounge"
              />
            </div>
          </div>
        </div>{" "}
      </div>

      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how loyalty lounge can benefit your business and employees!"
        />
      </div>

      <div
        className={`${styles.eigth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don’t worry! Our FAQs section will help you learn about bolt in detail"
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

      {/* <div className={`row ${styles.ninth_row} bg-equity-blue`}>
        <div className="d-flex justify-content-evenly align-items-center">
          <Heading
            title="Seeking further understanding of loyalty lounge?"
            size="h3"
            color="white"
          />
          <div>
            <PrimaryButton title="Know More" theme="black" url="/sales" />
          </div>
        </div>
      </div> */}

      <div className="row">
        <ContactUsCard
          title="Seeking further understanding of brand vouchers? Explore the comprehensive guide"
          description="Brand vouchers are prepaid instruments created to provide discounts on purchasing specific products and services following their terms and conditions."
          source="Bolt"
        />
      </div>

      <div className={`${styles.seventh_row} row`}>
        <ComprehensiveView
          title="Explore our comprehensive guide"
          innerHtml={
            <>
              <div className="mb-2">
                <Heading
                  size="h2"
                  color="black"
                  weight="6"
                  title="How does a gift card voucher or brand voucher work?"
                />
              </div>
              <div className="mb-5">
                <p>
                  A gift or brand voucher works like a debit card. It is
                  preloaded with money, and the receiver can use it wherever
                  specified up to the limit of the gift voucher. It comes with
                  specific terms and conditions and has an expiration date.
                </p>
              </div>

              <div className="mb-2">
                <Heading
                  size="h2"
                  color="black"
                  weight="6"
                  title="Can you claim GST on gift card vouchers to employees?"
                />
              </div>
              <div className="mb-5">
                <p>
                  Businesses cannot claim GST on employee gift card vouchers if
                  they are not considered a business expense.
                </p>
              </div>

              <div className="mb-2">
                <Heading
                  size="h2"
                  color="black"
                  weight="6"
                  title="Are there any restrictions on using brand gift card vouchers?"
                />
              </div>
              <div className="mb-5">
                <p>
                  Brand vouchers intend to provide discounts to the receiver.
                  However, specific associated terms and conditions could be
                  termed as restrictions.
                </p>
                <ul>
                  <li>
                    <strong>Applicability:</strong> It is crucial to check
                    whether the brand voucher can be redeemed online, offline,
                    or both. The brand can decide whether their voucher can be
                    used once or multiple times
                  </li>
                  <li>
                    <strong>
                      Non-refundable, non-transferable, or exchanged against
                      cash:
                    </strong>{" "}
                    Typically, brand vouchers cannot be refunded, transferred,
                    or exchanged for cash
                  </li>
                  <li>
                    <strong>Expiry date:</strong> Brand vouchers are usually
                    valid for one year from the date of issuance. Check the last
                    date of usage to utilize the online discount available
                  </li>
                </ul>
              </div>
            </>
          }
        />
      </div>

      <Footer utmSource={halfBoltUTM} />
    </div>
  )
}

export default boltPage
