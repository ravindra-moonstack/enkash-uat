"use client"
import Image from "next/image"
import styles from "./page.module.scss"
import faqData from "./faq-data"
import { Header, FAQHtml, Footer } from "@/components"
import {
  blueArrow,
  paymentSummary,
  whiteArrow,
  paymentLinkImage,
  shareImage,
  paymentOptionImage,
  notificationImage,
  taskIconOne,
  taskIconTwo,
  taskIconThree,
  taskIconFour,
  bg1,
  bg2,
  bg3,
  bg4,
  bg5,
  secureImage,
  tabIconOne,
  tabIconTwo,
  tabIconThree,
  tabIconFour,
  tabIconFive,
} from "."

import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import CustomBreadcrumb from "@/components/breadcrumb/breadbrumb"
import LogoSlider from "@/components/logo-slider/logo-slider"
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"
import AllInOnePolicy from "@/components/all-in-one-policy/all-in-one-policy"
import DynamicHeading from "@/components/dynamicHeading/dynamic-heading"
import EnkashWay from "@/components/enkash-way/enkash-way"

const Vouchers = (): React.JSX.Element => {
  return (
    <div className={`color-white ${styles.home_container}`}>
      <Header utmSource="expense_management" />

      <TalkToSales />

      <div className={`${styles.first_row}`}>
        <div className="max-w-auto">
          <div className="d-flex">
            <CustomBreadcrumb
              items={[
                { name: "Home", url: "/" },
                { name: "Products", url: "/products" },
                {
                  name: "Vouchers",
                  url: "/products/vouchers",
                },
              ]}
            />
          </div>
          <div className="col-12 d-flex flex-column text-center">
            <div className="  mt-3 mb-3 mb-md-2 text-center">
              <DynamicHeading
                content={[
                  {
                    title: "400+ Brand Vouchers. One Powerful Platform.",
                    color: "color-black ",
                  },
                ]}
                headingTag="h1"
                className="f-7"
              />
            </div>
            <div>
              <DynamicHeading
                content={[
                  {
                    title:
                      "Save More. Reward Smarter. Delight Better with Gift Voucher Deals.",
                    color: "color-dark-grey ",
                  },
                ]}
                headingTag="h5"
                className="f-4"
              />
            </div>

            <div className="mt-md-4 mt-3">
              <RectangleButton
                title="Talk to Sales"
                theme="blue"
                url="/sales"
              />
            </div>
          </div>
          <div className=" col-12">
            <div className={styles.lottie_container}>
              <div>
                <Image
                  src={paymentSummary}
                  alt="card visual"
                  style={{
                    objectFit: "contain",
                    maxHeight: "648px",
                  }}
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <LogoSlider />
        </div>
      </div>

      <div className={`row ${styles.second_row} `}>
        <div className="d-flex text-center flex-column gap-32  max-w-auto">
          <div className="d-inline  text-center">
            <DynamicHeading
              content={[
                {
                  title: "Numbers That Make the Difference",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-3"
            />
            <div className={`${styles.second_row_line} `}></div>
          </div>

          <div className={` d-flex ${styles.section}`}>
            {" "}
            <div className={` d-flex flex-column text-center ${styles.card}`}>
              <div className={` d-flex ${styles.outerCard}`}>
                <DynamicHeading
                  content={[
                    {
                      title: "Up to 40%",
                      color: "color-white",
                    },
                  ]}
                  headingTag="h5"
                  className="f-7"
                />
              </div>
              <div
                className={`py-2 d-flex flex-column text-center ${styles.innerCard}`}
              >
                {" "}
                <DynamicHeading
                  content={[
                    {
                      title: "Instant Savings",
                      color: "color-white",
                    },
                  ]}
                  headingTag="p"
                  className="f-4 mb-0"
                />
              </div>
            </div>
            <div className={` d-flex flex-column text-center ${styles.card}`}>
              <div className={` d-flex ${styles.outerCard}`}>
                <DynamicHeading
                  content={[
                    {
                      title: "Under 60 secs",
                      color: "color-white",
                    },
                  ]}
                  headingTag="h5"
                  className="f-7"
                />
              </div>
              <div
                className={`py-2 d-flex flex-column text-center ${styles.innerCard}`}
              >
                {" "}
                <DynamicHeading
                  content={[
                    {
                      title: "Instant Delivery",
                      color: "color-white",
                    },
                  ]}
                  headingTag="p"
                  className="f-4 mb-0"
                />
              </div>
            </div>
            <div className={` d-flex flex-column text-center ${styles.card}`}>
              <div className={` d-flex ${styles.outerCard}`}>
                <DynamicHeading
                  content={[
                    {
                      title: "100%",
                      color: "color-white",
                    },
                  ]}
                  headingTag="h5"
                  className="f-7 "
                />
              </div>
              <div
                className={`py-2 d-flex flex-column text-center ${styles.innerCard}`}
              >
                {" "}
                <DynamicHeading
                  content={[
                    {
                      title: "Redemption Tracking",
                      color: "color-white",
                    },
                  ]}
                  headingTag="p"
                  className="f-4 mb-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row}  `}>
        <div className="max-w-auto">
          <div className={`row  align-items-center ${styles.section}`}>
            <div className={`${styles.title} text-center `}>
              <div className={`d-inline text-center pb-3`}>
                <DynamicHeading
                  content={[
                    {
                      title: "Business-Grade Gift Vouchers, ",
                      color: "color-black ",
                    },
                    {
                      title: "Consumer-Loved Experience",
                      color: "color-equity-blue ",
                    },
                  ]}
                  headingTag="h2"
                  className="f-5"
                />
              </div>
            </div>

            <div className={styles.allInOnePolicy}>
              <AllInOnePolicy
                icon={taskIconOne}
                title="Instant Access to 400+ Brands"
                description="From e-commerce giants to luxury fashion, gourmet dining to health essentials—you’ll find every major category covered through our curated gift voucher collection."
                image={paymentLinkImage}
                buttonUrl="/employee-rewards/"
                maxImageHeight="243px"
              />

              <AllInOnePolicy
                icon={taskIconTwo}
                title="Flexible Denominations"
                description="Pick the value that fits your budget and purpose. Choose from multiple denominations so you can personalize gifting or budget-friendly perks."
                image={shareImage}
                buttonUrl="/channel-incentives/"
                maxImageHeight="305px"
                reverse
              />

              <AllInOnePolicy
                icon={taskIconThree}
                title="Bulk Ordering Benefits"
                description="Need to distribute vouchers at scale? Enjoy exclusive discounts on bulk orders for employee rewards, customer promotions, or festive gifting."
                image={paymentOptionImage}
                buttonUrl="/gift-cards/"
                maxImageHeight="243px"
              />

              <AllInOnePolicy
                icon={taskIconFour}
                title="Smart Distribution & Auto-Alerts"
                description="Each voucher comes with automated alerts on WhatsApp and email, complete with redemption instructions. No guesswork, no manual follow-ups."
                image={notificationImage}
                buttonUrl="/offers/"
                maxImageHeight="259px"
                reverse
              />
              <AllInOnePolicy
                icon={taskIconThree}
                title="One Dashboard. Total Control."
                description="Track, manage, and analyze voucher usage from a single interface. Customize campaigns, set expiry dates, and view real-time redemption insights."
                image={secureImage}
                buttonUrl="/gift-cards/"
                maxImageHeight="243px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.sixth_row} row d-flex bg-white `}>
        <EnkashWay
          sectionHeading="The Categories You Love, The Discounts You Deserve"
          progressData={[
            {
              itemArray: ["E-commerce"],
              title: "E-commerce",
              description:
                "Access a wide range of online shopping platforms. From electronics to everyday essentials, get everything you need—conveniently and affordably.",
              icon: tabIconOne,
              bgImage: bg1,
              url: "/e-commerce-vouchers",
            },
            {
              itemArray: ["Food & Beverages"],
              title: "Food & Beverages",
              description:
                "Whether it’s a gourmet meal, a quick bite, or your daily staples, savor irresistible savings every time you eat in or dine out.",
              icon: tabIconTwo,
              bgImage: bg2,
              url: "/food-and-beverages-vouchers",
            },
            {
              itemArray: ["Apparels & Fashion"],
              title: "Apparels & Fashion",
              description:
                "Stay stylish without overspending. Explore discounted options across fashion staples, premium labels, and seasonal collections.",
              icon: tabIconThree,
              bgImage: bg3,
              url: "/apparels-vouchers",
            },
            {
              itemArray: ["Movies & Music"],
              title: "Movies & Music",
              description:
                "Dive into your favorite entertainment - be it movies, concerts, or streaming—while saving big on unforgettable experiences.",
              icon: tabIconFour,
              bgImage: bg4,
              url: "/movie-and-music-vouchers",
            },
            {
              itemArray: ["Health & Wellness"],
              title: "Health & Wellness",
              description:
                "Make your well-being a priority with value-driven vouchers for healthcare, fitness, wellness services, and daily health needs.",
              icon: tabIconFive,
              bgImage: bg5,
              url: "/health-and-wellness-vouchers",
            },
          ]}
        />
      </div>

      <div className={`${styles.faq_new_row}  relative`}>
        <div className={`${styles.faqSection} text-start max-w-auto `}>
          <div className={`${styles.title} text-start  pb-md-5 pb-2`}>
            <DynamicHeading
              content={[
                {
                  title: "Frequently Asked Questions ( ",
                  color: "color-black ",
                },
                {
                  title: "FAQs",
                  color: "color-equity-blue ",
                },
                {
                  title: " )",
                  color: "color-black ",
                },
              ]}
              headingTag="h2"
              className="f-5"
            />
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div>
              <div>
                <DynamicHeading
                  content={[
                    {
                      title: "Have more questions?",
                      color: "color-dark-grey ",
                    },
                  ]}
                  headingTag="h3"
                  className="f-5"
                />
              </div>
              <div className="mt-3 d-none d-md-block">
                <RectangleButton
                  title="Get started today"
                  theme="border-gray"
                  actionImage={blueArrow}
                  hoverImage={whiteArrow}
                  iconSize={15}
                  url="/sales/"
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

export default Vouchers
