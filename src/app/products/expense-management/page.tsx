"use client"
import Image from "next/image"
import styles from "./page.module.scss"
import { allProductSections, cardData, cardsData, stackcardData } from "./data"
import { faqData, SecondfaqData } from "./faq-data"

import { Header, Footer, FAQHtml } from "@/components"
// import EnkashWay from "@/components/enkash-way/enkash-way"
import {
  faqBg,
  blueArrow,
  approved,
  advanceAi,
  receipt,
  upi,
  walletExpense,
  whiteArrow,
  itIcon,
  ecoomerceIcon,
  manufactureIcon,
  logisticIcon,
  consultancyIcon,
  pharmacyIcon,
} from "."
import ManagementCard from "@/components/management-card/management-card"
import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import PolicyCard from "@/components/policyCard/policyCard"
import LogoSlider from "@/components/logo-slider/logo-slider"
import CustomBreadcrumb from "@/components/breadcrumb/breadbrumb"
import {
  dashboardData,
  integrationData,
  paymentMethodData,
  rankData,
} from "./data"
import SecondFaqHtml from "@/components/second-faq/secondFaqHtml"
import bg1 from "./img/bg4.jpg"
import bg2 from "./img/bg3.jpg"
import bg3 from "./img/bg2.jpg"
import bg4 from "./img/bg1.jpg"
import bg5 from "./img/bg6.jpg"
import bg6 from "./img/bg5.jpg"

import AllProducts from "@/components/all-products/all-products"
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"
import LottieDynamicLoadComponent from "@/components/lottie-client/lottie-dynamic-load-client"
import EnkashWay from "@/components/enkash-way/enkash-way"
import DynamicHeading from "@/components/dynamicHeading/dynamic-heading"
import AllInOnePolicy from "@/components/all-in-one-policy/all-in-one-policy"
import Link from "next/link"
import React from "react"
import SplineAnimation from "@/components/splineAnimation/splineAnimation"
// import ContentShowcase from "@/components/contentShowcase/contentShowcase"
// import Spline from "@splinetool/react-spline"
const CardStacking = React.lazy(() => import("@/components/cardStacking/cardStacking"))
const showScroll = cardsData.length > 3
const mergedCards = allProductSections.flatMap((section) => section.items)
const cards = stackcardData.map((item: any) => ({
  color: item.color,
  content: (
    <AllInOnePolicy
      icon={item.icon}
      title={item.title}
      description={item.description}
      image={item.image}
      buttonUrl={item.buttonUrl}
      maxImageHeight="300px"
    />
  ),
}))
const ExpenseManagement = (): React.JSX.Element => {
  return (
    <div className={`color-white ${styles.home_container}`}>
      <Header utmSource="expense_management" />
      <TalkToSales />
      <div className={`${styles.first_row}`}>
        <div className={`${styles.spline_background}`}>
          <SplineAnimation />
        </div>
        <div className="max-w-auto  position-relative no-pointer">
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

          <div className="col-12">
            <div className="text-center mt-4 mt-mb-5">
              <DynamicHeading
                content={[
                  {
                    title: "Create, Track & Submit Expenses.",
                    color: "color-black d-block text-center",
                  },
                  {
                    title: "Now on WhatsApp",
                    color: "color-equity-blue d-block text-center",
                  },
                ]}
                headingTag="h1"
                className="f-7 mb-3 mb-md-0"
              />
            </div>
            <div className="text-center">
              <DynamicHeading
                content={[
                  {
                    title: "Let’s Put Smart Expense Management in Your Pocket",
                    color: "color-alternate-grey subHeading",
                  },
                ]}
                headingTag="p"
                className="f-4 text-center"
              />
            </div>
            <div className="mt-3 pointer-auto text-center">
              <RectangleButton title="Talk to us" theme="blue" url="/sales/" />
            </div>
          </div>

          <div className=" col-12 d-flex justify-content-center align-items-center">
            <div className={styles.lottie_container}>
              <LottieDynamicLoadComponent
                animationName={"ExpenseLottie"}
                loop={true}
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <LogoSlider />
        </div>
      </div>
      {/* <div className="bg_white_index">
        <ContentShowcase
          mainHeading={[
            { title: "No Missed Spends.", color: "color-black" },
            { title: " No Manual Effort.", color: "color-equity-blue" },
          ]}
          heading="Expense Creation via Any Channel - Powered by Advanced AI"
          subheading="Capture expenses effortlessly - anytime, anywhere with intelligent automation across WhatsApp, email, app, and more."
          data={integrationData}
          imageSrc={advanceAi}
          imageAlt="card background"
          reverse
        />
      </div> */}

      <div className={`${styles.second_row}  bg_white_index`}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center`}>
            <DynamicHeading
              content={[
                {
                  title: "No Missed Spends.",
                  color: "color-black",
                },
                {
                  title: " No Manual Effort.",
                  color: "color-equity-blue",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>

          {/* Section 1 */}
          <div className={`row bg-white align-items-center ${styles.section}`}>
            <div className="col-md-6 col-12">
              <div className={`d-flex flex-column ${styles.subtitle}`}>
                <DynamicHeading
                  content={[
                    {
                      title:
                        "Expense Creation via Any Channel - Powered by Advanced AI",
                      color: "color-black",
                    },
                  ]}
                  headingTag="h4"
                  className="f-5"
                />
                <DynamicHeading
                  content={[
                    {
                      title:
                        "Capture expenses effortlessly - anytime, anywhere with intelligent automation across WhatsApp, email, app, and more.",
                      color: "color-main-grey",
                    },
                  ]}
                  headingTag="p"
                  className="f-4 mt-2 mb-0"
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
            <div className={`col-md-6 col-12 order-2 order-md-2 `}>
              <div className="text-end">
                <Image
                  src={advanceAi}
                  alt="card background"
                  className="position-relative w-100 mh-550 object-fit-contain"
                />
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div
            className={`bg-color-soft-mint pb-[50px] pt-[50px]  ${styles.section}`}
          >
            <div className="row align-items-center">
              <div className={`col-md-6 col-12  order-2 order-md-1`}>
                <div>
                  <Image
                    src={receipt}
                    alt="card background"
                    className="position-relative w-100 mh-550 object-fit-contain"
                  />
                </div>
              </div>
              <div className="col-md-6 col-12 order-1 order-md-2">
                <div className={`d-flex flex-column ${styles.subtitle}`}>
                  <DynamicHeading
                    content={[
                      {
                        title:
                          "Travel Requests & Per Diem – Plan Ahead, Stay Within Budget",
                        color: "color-black",
                      },
                    ]}
                    headingTag="h4"
                    className="f-5"
                  />
                  <DynamicHeading
                    content={[
                      {
                        title:
                          "Let employees plan trips easily with automated per diem and compliance.",
                        color: "color-main-grey",
                      },
                    ]}
                    headingTag="p"
                    className="f-4 mt-2 mb-0"
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
          </div>

          {/* Section 3 */}
          <div className={`row bg-white align-items-center ${styles.section}`}>
            <div className="col-md-6 col-12  px-md-5 order-1 order-md-1">
              <div className={`d-flex flex-column ${styles.subtitle}`}>
                <DynamicHeading
                  content={[
                    {
                      title: "UPI- Based Petty Cash",
                      color: "color-black",
                    },
                  ]}
                  headingTag="h4"
                  className="f-5"
                />
                <DynamicHeading
                  content={[
                    {
                      title:
                        "Turn petty cash chaos into controlled digital spending with real-time visibility and approvals.",
                      color: "color-main-grey",
                    },
                  ]}
                  headingTag="p"
                  className="f-4 mt-2 mb-0"
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
            <div className={`col-md-6 col-12   order-2 order-md-2`}>
              <div>
                <Image
                  src={upi}
                  alt="card background"
                  className="position-relative w-100 mh-550 object-fit-contain"
                />
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div
            className={`bg-color-soft-mint pb-[50px] pt-[50px] ${styles.section}`}
          >
            <div className="row align-items-center">
              <div className={`col-md-6 col-12  order-2 order-md-1`}>
                <div>
                  <Image
                    src={walletExpense}
                    alt="card background"
                    className="position-relative w-100 mh-550 object-fit-contain"
                  />
                </div>
              </div>
              <div className="col-md-6 col-12  order-1 order-md-2">
                <div className={`d-flex flex-column ${styles.subtitle}`}>
                  <DynamicHeading
                    content={[
                      {
                        title: "Employee Reimbursements with Smart Wallets",
                        color: "color-black",
                      },
                    ]}
                    headingTag="h4"
                    className="f-5"
                  />
                  <DynamicHeading
                    content={[
                      {
                        title:
                          "Automate category-wise allowances, get instant access to funds, and breeze through compliance.",
                        color: "color-main-grey",
                      },
                    ]}
                    headingTag="p"
                    className="f-4 mt-2 mb-0"
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
          </div>
        </div>
      </div>

      <div className={`${styles.fifth_row} bg_white_index`}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-4 pb-md-5`}>
            <DynamicHeading
              content={[
                {
                  title: "EMS Features ",
                  color: "color-equity-blue",
                },
                {
                  title: "in Spotlight",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
          <div className="row g-3 ">
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

          <div className="mt-5  d-flex flex-column flex-md-row gap-3">
            <RectangleButton
              title="Explore Receipt Management"
              theme="blue"
              url="/sales/?source=expense_management"
              width="auto"
            />
            <RectangleButton
              title="Explore Reimbursement Management"
              theme="outline-blue"
              url="/sales/?source=expense_management"
              width="auto"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.third_row} bg_white_index`}>
        <div className={`relative max-w-auto`}>
          <div className={`${styles.title} text-start `}>
            <DynamicHeading
              content={[
                {
                  title: "Smart Policy",
                  color: "color-black",
                },
                {
                  title: " Enforcement & Approvals",
                  color: "color-equity-blue",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
            <div>
              <DynamicHeading
                content={[
                  {
                    title:
                      "Control spending before it happens. Automate what doesn't need your time.",
                    color: "color-main-grey subHeading",
                  },
                ]}
                headingTag="p"
                className="f-4 mt-2 mb-0"
              />
            </div>
          </div>

          <div
            className={`col-md-6 col-12 mt-4 mt-md-5 mt-4 ${
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

          <div className={styles.scrollBtn}>
            <RectangleButton
              title="Explore Policy Controls"
              theme="border-gray"
              actionImage={blueArrow}
              iconSize={15}
              url="/sales/?source=receivables"
            />
          </div>
        </div>

        <div className={styles.approvedImage}>
          <Image src={approved} alt="icon" />
        </div>
      </div>

      <div className={`${styles.card_stacking_row} bg_white_index`}>
        <div className={` max-w-auto  ${styles.section}`}>
          <>
            <div className={`${styles.title} text-center px-md-5`}>
              <DynamicHeading
                content={[
                  {
                    title: "Spend Analytics & Insights: ",
                    color: "color-black",
                  },
                  {
                    title: "Turn Every Rupee Spent ",
                    color: "color-equity-blue",
                  },
                  {
                    title: "into Actionable Insight",
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

      <div className={`${styles.eigth_row} relative`}>
        <div className={`${styles.faqSection} text-start  max-w-auto`}>
          <div className={`${styles.title} text-start pb-4 pb-md-5`}>
            <DynamicHeading
              content={[
                {
                  title: "Integrate with Ease. Connect Without Gaps.",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
          <div className="row">
            <div className="col-md-6">
              <div>
                <SecondFaqHtml SecondfaqData={SecondfaqData} />
              </div>
            </div>
            <div className="col-md-6 sm-d-none">
              <div className={styles.faq_bg}>
                <Image
                  src={faqBg}
                  alt="background image"
                  className="w-100 mh-550 object-fit-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.seventh_row} bg_white_index`}>
        <div className={`${styles.title} text-center`}>
          <div
            className={` flex-column justify-content-center align-items-center `}
          >
            <DynamicHeading
              content={[
                {
                  title: "Be Ready for Every ",
                  color: "color-black",
                },
                {
                  title: "Review with Confidence",
                  color: "color-equity-blue",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
        </div>

        <div>
          <AllProducts
            title="All Features"
            subtitle="Combine all use cases"
            data={mergedCards}
          />
        </div>
      </div>

      <div
        className={`${styles.sixth_row} bg_white_index row d-flex bg-white `}
      >
        <EnkashWay
          sectionHeading="One Platform, Every Use Case, Total Control"
          progressItemPadding="15px 12px"
          progressData={[
            {
              itemArray: ["IT & SaaS"],
              title: "IT & SaaS",
              description:
                "No more scattered subscriptions, remote reimbursements, and cloud tool audits. Centralize expenses, automate approvals, and get real-time visibility. Empowering your finance team to stay agile without slowing down your product or people.",
              icon: itIcon,
              bgImage: bg1,
            },
            {
              itemArray: ["E-commerce & Retail"],
              title: "E-commerce & Retail",
              description:
                "Forget about juggling vendor payouts, branch-level expenses, and seasonal budgets. Track spends across warehouses and storefronts, enforce policies by category, and simplify GST reporting - all while scaling faster with total financial control.",
              icon: ecoomerceIcon,
              bgImage: bg2,
            },
            {
              itemArray: ["Manufacturing"],
              title: "Manufacturing",
              description:
                "Do away with manual approvals, unclear plant-level spends, and poor budget tracking. Get control over every rupee - from raw material procurement to field reimbursements - ensuring compliance and audit-readiness across your supply chain.",
              icon: manufactureIcon,
              bgImage: bg3,
            },
            {
              itemArray: ["Logistics & Supply Chain"],
              title: "Logistics & Supply Chain",
              description:
                "Do not lose visibility into fleet expenses, fuel claims, or vendor payments. EnKash EMS connects your expense data with real-time dashboards, automates reconciliations, and flags policy breaches instantly, allowing your operations to run lean and accountable.",
              icon: logisticIcon,
              bgImage: bg4,
            },
            {
              itemArray: ["Consulting & Services"],
              title: "Consulting & Services",
              description:
                "Eliminate consultants' overspending, misreporting, or delay in claims. Enjoy fast, mobile-first submissions, real-time approvals, and project-wise expense tagging. Keep clients happy, costs transparent, and your margins intact.",
              icon: consultancyIcon,
              bgImage: bg5,
            },
            {
              itemArray: ["Pharma & Healthcare"],
              title: "Pharma & Healthcare",
              description:
                "Do not let MR travel management, hospital branch expenses, and regulatory reporting become a challenge. Automate policy enforcement, capture receipts instantly, and align with compliance standards to focus on patient care, not paperwork.",
              icon: pharmacyIcon,
              bgImage: bg6,
            },
          ]}
        />
      </div>

      <div className={`${styles.blueBackGroundSection} bg_white_index`}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center  align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title: "Build a leaner, smarter, & future-ready finance team",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5 pb-3 pb-md-0"
            />
          </div>
          <div className={`${styles.get_started_button} `}>
            <RectangleButton
              title="Get Started  Today "
              theme="outline-blue"
              actionImage={blueArrow}
              hoverImage={whiteArrow}
              url="/sales/?source=expense_management"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.faq_new_row} bg_white_index relative`}>
        <div className={`${styles.faqSection} text-start max-w-auto `}>
          <div className={`${styles.title} text-start  pb-2 pb-md-5`}>
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
            <div className="mb-4">
              <div>
                <DynamicHeading
                  content={[
                    {
                      title: "Have more questions?",
                      color: "color-dark-grey subHeading",
                    },
                  ]}
                  headingTag="p"
                  className="f-4"
                />
              </div>
              <div className="mt-2 d-none d-md-block">
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

export default ExpenseManagement
