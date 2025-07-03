"use client"
import Image from "next/image"
import { space } from "@/common/constant"
import styles from "./page.module.scss"
import { cardData, cardsData } from "./data"
import faqData from "./faq-data"

import {
  Header,
  Footer,
  Heading,
  FAQHtml,
  SecondryButton,
} from "@/components"
import EnkashWay from "@/components/enkash-way/enkash-way"
import {
  faqBg,
  blueArrow,
  approved,
  policyIcon,
  motherCardImg,
  advanceAi,
} from "."
import ManagementCard from "@/components/management-card/management-card"
import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import PolicyCard from "@/components/policyCard/policyCard"
import CardAnimation from "@/components/cardAnimation/page"
import LogoSlider from "@/components/logo-slider/logo-slider"
import CustomBreadcrumb from "@/components/breadcrumb/breadbrumb"
import {
  dashboardData,
  integrationData,
  paymentMethodData,
  rankData,
  savingData,
  supportData,
} from "../payment-gateway/data"
import {
  dashboard,
  leftHand,
  paymenyMethod,
  rank,
  support,
} from "../payment-gateway"

const showScroll = cardsData.length > 3
const ExpenseManagement = (): React.JSX.Element => {
  return (
    <div className={`color-white ${styles.home_container}`}>
      <Header utmSource="expense_management" />

      <div className={`${styles.first_row}`}>
        <div className="max-w-auto">
          <div className="d-flex">
            <CustomBreadcrumb
              items={[
                { name: "Home", url: "/" },
                { name: "Products", url: "/products" },
                {
                  name: "Expense Management",
                  url: "/products/expense-management",
                },
              ]}
            />
          </div>

          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex flex-column mb-3 justify-content-center align-items-center ">
              <Heading
                title="Create, Track & Submit Expenses."
                color="black"
                size="h2"
                weight="7"
              />
              <Heading
                title="Now on WhatsApp"
                color="equity-blue"
                size="h2"
                weight="7"
              />
            </div>
            <div className="d-inline">
              <Heading
                title="Let’s Put Smart Expense Management in Your Pocket"
                color="alternate-grey"
                size="h5"
                weight="4"
                useH1TagInHtml={true}
              />
            </div>
          </div>

          <div className=" col-12 d-flex justify-content-center align-items-center">
            <div className={styles.lottie_container}>
              <div className={styles.button_wrapper}>
                <RectangleButton
                  title="Get Started"
                  theme="blue"
                  url="/sales/?source=expense_management"
                />
              </div>
              <div>
                <Image
                  src={motherCardImg}
                  alt="card background"
                  className="position-relative w-100 h-100"
                />
              </div>
            </div>
          </div>

          <div>
            <LogoSlider type={"partners"} />
          </div>
        </div>
      </div>

      <div className={styles.second_row}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center`}>
            <Heading
              title={`No Missed Spends.  ${space}`}
              color="black"
              size="h1"
              weight="5"
            />
            <Heading
              title={`No Manual Effort. ${space}`}
              color="equity-blue"
              size="h1"
              weight="5"
            />
          </div>

          {/* Section 1 */}
          <div className={`row bg-white align-items-center ${styles.section}`}>
            <div className="col-md-6 col-12 px-0 px-md-5 order-1 order-md-1">
              <div className={`d-flex flex-column ${styles.subtitle}`}>
                <Heading
                  title={`Developer First Integration  ${space}`}
                  color="black"
                  size="h3"
                  weight="5"
                />
                <Heading
                  title={`Built for developers, our robust SDKs, APIs, and plugins support major languages and platforms ${space}`}
                  color="main-grey"
                  size="h5"
                  weight="4"
                />
              </div>
              <div className={` ${styles.payment_section}`}>
                {integrationData.map(({ icon, title, description }, i) => (
                  <div key={i} style={{ direction: "ltr" }}>
                    <PolicyCard
                      icon={icon}
                      title={title}
                      description={description}
                    />
                  </div>
                ))}
              </div>
              <div className={`${styles.list_button}`}>
                <RectangleButton
                  title="Get Started  Today "
                  theme="outline-blue"
                  url="/sales/?source=expense_management"
                />
              </div>
            </div>
            <div
              className={`col-md-6 col-12 d-flex my-md-5 my-3 justify-content-end ${styles.third_container} order-2 order-md-2`}
            >
              <div>
                <Image
                  src={advanceAi}
                  alt="card background"
                  className="position-relative w-100 h-100"
                  height={618}
                />
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div
            className={`row bg-color-soft-mint pb-[50px] pt-[50px] align-items-center ${styles.section}`}
          >
            <div
              className={`col-md-6 col-12 d-flex my-md-5 my-3 ${styles.third_container} order-2 order-md-1`}
            >
              <div>
                <Image
                  src={paymenyMethod}
                  alt="card background"
                  className="position-relative w-100 h-100"
                  style={{ maxHeight: "563px" }}
                />
              </div>
            </div>
            <div className="col-md-6 col-12 px-0 px-md-5 order-1 order-md-2">
              <div className={`d-flex flex-column ${styles.subtitle}`}>
                <Heading
                  title={`Accept All Payment Methods ${space}`}
                  color="black"
                  size="h3"
                  weight="5"
                />
                <Heading
                  title={`Provide your customers with the freedom to choose how they pay with several online payment methods. ${space}`}
                  color="main-grey"
                  size="h5"
                  weight="4"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                }}
              >
                {paymentMethodData.map(({ icon, title, description }, i) => (
                  <div key={i} style={{ direction: "ltr" }}>
                    <PolicyCard
                      icon={icon}
                      title={title}
                      description={description}
                    />
                  </div>
                ))}
              </div>
              <div className={`${styles.list_button}`}>
                <RectangleButton
                  title="Get Started  Today "
                  theme="outline-blue"
                  url="/sales/?source=expense_management"
                />
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className={`row bg-white align-items-center ${styles.section}`}>
            <div className="col-md-6 col-12 px-0 px-md-5 order-1 order-md-1">
              <div className={`d-flex flex-column ${styles.subtitle}`}>
                <Heading
                  title={`Powerful Dashboards to Drive Decisions ${space}`}
                  color="black"
                  size="h3"
                  weight="5"
                />
                <Heading
                  title={`Get detailed statistics and reports on payments, settlements, refunds, and much more for informed decision-making. ${space}`}
                  color="main-grey"
                  size="h5"
                  weight="4"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                }}
              >
                {dashboardData.map(({ icon, title, description }, i) => (
                  <div key={i} style={{ direction: "ltr" }}>
                    <PolicyCard
                      icon={icon}
                      title={title}
                      description={description}
                    />
                  </div>
                ))}
              </div>
              <div className={`${styles.list_button}`}>
                <RectangleButton
                  title="Get Started  Today "
                  theme="outline-blue"
                  url="/sales/?source=expense_management"
                />
              </div>
            </div>
            <div
              className={`col-md-6 col-12 d-flex my-md-5 my-3 justify-content-end ${styles.third_container} order-2 order-md-2`}
            >
              <div>
                <Image
                  src={dashboard}
                  alt="card background"
                  className="position-relative w-100 h-100"
                  height={672}
                />
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div
            className={`row bg-color-soft-mint pb-[50px] pt-[50px] align-items-center ${styles.section}`}
          >
            <div
              className={`col-md-6 col-12 d-flex my-md-5 my-3 justify-content-start ${styles.third_container} order-2 order-md-1`}
            >
              <div>
                <Image
                  src={rank}
                  alt="card background"
                  className="position-relative w-100 h-100"
                  height={493}
                />
              </div>
            </div>
            <div className="col-md-6 col-12 px-0 px-md-5 order-1 order-md-2">
              <div className={`d-flex flex-column ${styles.subtitle}`}>
                <Heading
                  title={`Bank Grade Security ${space}`}
                  color="black"
                  size="h3"
                  weight="5"
                />
                <Heading
                  title={`Enjoy enterprise-grade security to reassure your customers of secure and reliable payment transactions. ${space}`}
                  color="main-grey"
                  size="h5"
                  weight="4"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                }}
              >
                {rankData.map(({ icon, title, description }, i) => (
                  <div key={i} style={{ direction: "ltr" }}>
                    <PolicyCard
                      icon={icon}
                      title={title}
                      description={description}
                    />
                  </div>
                ))}
              </div>
              <div className={`${styles.list_button}`}>
                <RectangleButton
                  title="Get Started  Today "
                  theme="outline-blue"
                  url="/sales/?source=expense_management"
                />
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className={`row bg-white align-items-center ${styles.section}`}>
            <div className="col-md-6 col-12 px-0 px-md-5 order-1 order-md-1">
              <div className={`d-flex flex-column ${styles.subtitle}`}>
                <Heading
                  title={`100% Lifetime Support  ${space}`}
                  color="black"
                  size="h3"
                  weight="5"
                />
                <Heading
                  title={`Dedicated Relationship Managers: Get personalized assistance from experts who understand your business and growth goals. ${space}`}
                  color="main-grey"
                  size="h5"
                  weight="4"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                }}
              >
                {supportData.map(({ icon, title, description }, i) => (
                  <div key={i} style={{ direction: "ltr" }}>
                    <PolicyCard
                      icon={icon}
                      title={title}
                      description={description}
                    />
                  </div>
                ))}
              </div>
              <div className={`${styles.list_button}`}>
                <RectangleButton
                  title="Get Started  Today "
                  theme="outline-blue"
                  url="/sales/?source=expense_management"
                />
              </div>
            </div>
            <div
              className={`col-md-6 col-12 d-flex  justify-content-end ${styles.third_container} order-2 order-md-2`}
            >
              <div>
                <Image
                  src={support}
                  alt="card background"
                  className="position-relative w-100 h-100"
                  height={705}
                />
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div
            className={`row bg-color-soft-mint  pb-0 pb-md-5  position-relative ${styles.section}`}
          >
            <div
              className={`col-md-6 col-12 d-flex my-md-5  ${styles.third_container} order-2 order-md-1`}
            >
              <div className={`${styles.custom_bottom_offset}`}>
                <Image
                  src={leftHand}
                  alt="card background"
                  className="position-relative w-100 h-100"
                  style={{ maxHeight: "625px" }}
                />
              </div>
            </div>
            <div className="col-md-6 col-12 px-0 px-md-5 order-1 order-md-2">
              <div className={`d-flex flex-column ${styles.subtitle}`}>
                <Heading
                  title={`Advanced Checkout and Card Saving  ${space}`}
                  color="black"
                  size="h3"
                  weight="5"
                />
                <Heading
                  title={`Enhance your checkout experience with features designed for convenience and efficiency: ${space}`}
                  color="main-grey"
                  size="h5"
                  weight="4"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                }}
              >
                {savingData.map(({ icon, title, description }, i) => (
                  <div key={i} style={{ direction: "ltr" }}>
                    <PolicyCard
                      icon={icon}
                      title={title}
                      description={description}
                    />
                  </div>
                ))}
              </div>
              <div className={`${styles.list_button}`}>
                <RectangleButton
                  title="Get Started  Today "
                  theme="outline-blue"
                  url="/sales/?source=expense_management"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white row-padding ">
        <div className={`${styles.title} text-center pb-5`}>
          <Heading
            title={`EMS Features  ${space}`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading
            title={`in Spotlight${space}`}
            color="black"
            size="h1"
            weight="6"
          />
        </div>
        <div className="row g-3 pb-4 ps-md-5">
          {cardData.map((card, index) => (
            <div className="col-12 col-md-4" key={index}>
              <ManagementCard
                whiteTitle={card.whiteTitle}
                description={card.description}
                cardImage={card.cardImage}
                theme="dark"
              />
            </div>
          ))}
        </div>

        <div className="mt-5 mx-5">
          <RectangleButton
            title="Learn More About Receipt Management"
            theme="blue"
            url="/sales/?source=expense_management"
          />
          <span className="mx-2"></span>
          <RectangleButton
            title="Explore Reimbursement Management"
            theme="outline-blue"
            url="/sales/?source=expense_management"
          />
        </div>
      </div>

      <div className={styles.third_row}>
        <div className={`row relative ${styles.section}`}>
          <div className={`${styles.title} text-center pb-5`}>
            <Heading
              title={`Smart Policy  ${space}`}
              color="black"
              size="h1"
              weight="6"
            />
            <Heading
              title={`Enforcement & Approvals ${space}`}
              color="equity-blue"
              size="h1"
              weight="6"
            />
            <div>
              {" "}
              <Heading
                title="Control spending before it happens. Automate what doesn't need your time."
                color="main-grey"
                size="h4"
                weight="4"
                useH1TagInHtml={true}
              />
            </div>
          </div>
          <div
            className={`w-50 mt-5 ${
              showScroll ? "overflow-auto scrollbar-thin" : ""
            }`}
            style={{
              maxHeight: "400px",
              direction: showScroll ? "rtl" : "ltr",
            }}
          >
            {cardsData.map(({ icon, title, description }, i) => (
              <div
                key={i}
                style={{
                  direction: "ltr",
                  marginLeft: "20px",
                  marginBottom: "20px",
                }}
              >
                <PolicyCard
                  icon={icon}
                  title={title}
                  description={description}
                />
              </div>
            ))}
          </div>
          <div className="mt-5 mx-5">
            <SecondryButton
              title="Learn more Managing Hierarchy and Controls"
              theme="border-gray"
              actionImage={blueArrow}
              iconSize={15}
              url="/sales/?source=receivables"
            />
          </div>{" "}
          <div className="text-end">
            <Image src={approved} alt="icon" />
          </div>
        </div>
      </div>

      <div className={styles.fourth_row}>
        <div className={`row relative ${styles.section}`}>
          <div className={`${styles.title} text-center pb-5`}>
            <Heading
              title={`Smart Policy  ${space}`}
              color="black"
              size="h1"
              weight="6"
            />
            <Heading
              title={`Enforcement & Approvals ${space}`}
              color="bluish-purple"
              size="h1"
              weight="6"
            />
            <div>
              {" "}
              <Heading
                title="Control spending before it happens. Automate what doesn't need your time."
                color="main-grey"
                size="h5"
                weight="4"
                useH1TagInHtml={true}
              />
            </div>
          </div>
          <CardAnimation />
          <div className="mt-5 mx-5">
            <SecondryButton
              title="Learn more Managing Hierarchy and Controls"
              theme="border-gray"
              actionImage={blueArrow}
              iconSize={15}
              url="/sales/?source=receivables"
            />
          </div>{" "}
        </div>
      </div>

      <div
        className={`${styles.eigth_row} row row-padding-bottom-none relative`}
      >
        <div className={`${styles.faqSection} text-start  pb-5`}>
          <div className={`${styles.title} text-start  pb-5`}>
            <Heading
              title={`Connect your finance stack. ${space}`}
              color="black"
              size="h1"
              weight="6"
            />
            <Heading
              title={` Free your team  ${space}`}
              color="bluish-purple"
              size="h1"
              weight="6"
            />

            <Heading
              title="from spreadsheets."
              color="black"
              size="h1"
              weight="6"
              useH1TagInHtml={true}
            />
            <div>
              {" "}
              <Heading
                title="EnKash - The Financial Ecosystem Enabler"
                color="main-grey"
                size="h5"
                weight="4"
                useH1TagInHtml={true}
              />
            </div>
          </div>

          <div>
            <FAQHtml faqData={faqData} />
          </div>
        </div>
        <div className={styles.faq_bg}>
          <Image src={faqBg} alt="background image" />x
        </div>
      </div>

      <div className={`${styles.sixth_row} row d-flex bg-white row-padding`}>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <Heading
            title={`One Platform, Every Use Case, Total Control`}
            size="h1"
            color="black"
            weight="6"
          />
        </div>
        <EnkashWay
          progressData={[
            {
              itemArray: ["IT & SaaS"],
              title: "Instant Activation",
              description:
                "Start transacting in minutes without long wait times.",
              icon: policyIcon,
            },
            {
              itemArray: ["E-commerce & Retail"],
              title: "Smart Controls",
              description: "Automate spending policies easily.",
              icon: policyIcon,
            },
            {
              itemArray: ["Manufacturing"],
              title: "Instant Activation",
              description:
                "Start transacting in minutes without long wait times.",
              icon: policyIcon,
            },
            {
              itemArray: ["Logistics & Supply Chain"],
              title: "Smart Controls",
              description: "Automate spending policies easily.",
              icon: policyIcon,
            },
            {
              itemArray: ["Consulting & Services"],
              title: "Instant Activation",
              description:
                "Start transacting in minutes without long wait times.",
              icon: policyIcon,
            },
            {
              itemArray: ["Pharma & Healthcare"],
              title: "Smart Controls",
              description: "Automate spending policies easily.",
              icon: policyIcon,
            },
          ]}
        />
      </div>

      {/* <div className={`row ${styles.ninth_row} `}>
        <div className="">
          <h1>
            Build a <span>leaner, smarter, & future-ready</span> finance team
          </h1>
          <div className="mt-5 mx-5">
            <SecondryButton
              title="Get started today"
              theme="border-gray"
              actionImage={blueArrow}
              iconSize={15}
              url="/sales/?source=receivables"
            />
          </div>{" "}
        </div>
      </div> */}
      <Footer />
    </div>
  )
}

export default ExpenseManagement
