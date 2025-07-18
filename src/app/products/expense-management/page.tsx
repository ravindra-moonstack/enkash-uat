"use client"
import Image from "next/image"
import { space } from "@/common/constant"
import styles from "./page.module.scss"
import { allProductSections, cardData, cardsData } from "./data"
import { faqData, SecondfaqData } from "./faq-data"

import { Header, Footer, Heading, FAQHtml } from "@/components"
import EnkashWay from "@/components/enkash-way/enkash-way"
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

const showScroll = cardsData.length > 3
const mergedCards = allProductSections.flatMap((section) => section.items)

const ExpenseManagement = (): React.JSX.Element => {
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
                  name: "Expense Management",
                  url: "/products/expense-management",
                },
              ]}
            />
          </div>

          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex flex-column my-3 justify-content-center align-items-center ">
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
            {/* <div className={styles.lottie_container}>
              <div className={styles.button_wrapper}>
                <RectangleButton
                  title="Get Started"
                  theme="blue"
                  url="/sales/?source=expense_management"
                />
              </div>
              <Image
                src={motherCardImg}
                alt="card background"
                className="position-relative w-100 h-100"
              />
            </div> */}
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
            <div className="col-md-6 col-12">
              <div className={`d-flex flex-column ${styles.subtitle}`}>
                <Heading
                  title={`Expense Creation via Any Channel - Powered by Advanced AI ${space}`}
                  color="black"
                  size="h3"
                  weight="5"
                />
                <Heading
                  title={`Capture expenses effortlessly - anytime, anywhere with intelligent automation across WhatsApp, email, app, and more.${space}`}
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
            <div className={`col-md-6 col-12 order-2 order-md-2`}>
              <div>
                <Image
                  src={advanceAi}
                  alt="card background"
                  className="position-relative w-100 h-100"
                />
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div
            className={`row bg-color-soft-mint pb-[50px] pt-[50px] align-items-center ${styles.section}`}
          >
            <div className={`col-md-6 col-12  order-2 order-md-1`}>
              <div>
                <Image
                  src={receipt}
                  alt="card background"
                  className="position-relative w-100 h-100"
                />
              </div>
            </div>
            <div className="col-md-6 col-12 order-1 order-md-2">
              <div className={`d-flex flex-column ${styles.subtitle}`}>
                <Heading
                  title={`Travel Requests & Per Diem – Plan Ahead, Stay Within Budget ${space}`}
                  color="black"
                  size="h3"
                  weight="5"
                />
                <Heading
                  title={`Let employees plan trips easily with automated per diem and compliance. ${space}`}
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
                  title={`UPI- Based Petty Cash${space}`}
                  color="black"
                  size="h3"
                  weight="5"
                />
                <Heading
                  title={`Turn petty cash chaos into controlled digital spending with real-time visibility and approvals.. ${space}`}
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
            <div className={`col-md-6 col-12   order-2 order-md-2`}>
              <div>
                <Image
                  src={upi}
                  alt="card background"
                  className="position-relative w-100 h-100"
                />
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div
            className={`row bg-color-soft-mint pb-[50px] pt-[50px] align-items-center ${styles.section}`}
          >
            <div className={`col-md-6 col-12  order-2 order-md-1`}>
              <div>
                <Image
                  src={walletExpense}
                  alt="card background"
                  className="position-relative w-100 h-100"
                />
              </div>
            </div>
            <div className="col-md-6 col-12  order-1 order-md-2">
              <div className={`d-flex flex-column ${styles.subtitle}`}>
                <Heading
                  title={`Employee Reimbursements with Smart Wallets ${space}`}
                  color="black"
                  size="h3"
                  weight="5"
                />
                <Heading
                  title={`Automate category-wise allowances, get instant access to funds, and breeze through compliance. ${space}`}
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
        </div>
      </div>

      <div className={`${styles.fifth_row} bg-white `}>
        <div className="max-w-auto">
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
          <div className="row g-3 pb-4 ">
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

          <div className="mt-5 mx-md-5 d-flex flex-column flex-md-row gap-3">
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

      <div className={styles.third_row}>
        <div className={`relative max-w-auto`}>
          <div className={`${styles.title} text-start pb-5`}>
            <Heading
              title={`Smart Policy ${space}`}
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
            className={`col-md-6 col-12 mt-5 ${
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

      {/* <div className={styles.fourth_row}>
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
      </div> */}

      <div className={`${styles.eigth_row} relative`}>
        <div className={`${styles.faqSection} text-start pb-5 max-w-auto`}>
          <div className={`${styles.title} text-start pb-5`}>
            <Heading
              title={`Integrate with Ease. Connect Without Gaps. ${space}`}
              color="black"
              size="h1"
              weight="6"
            />
          </div>

          <div>
            <SecondFaqHtml SecondfaqData={SecondfaqData} />
          </div>
          <div className={styles.faq_bg}>
            <Image src={faqBg} alt="background image" />x
          </div>
        </div>
      </div>

      <div className={`${styles.seventh_row} `}>
        <div className={`${styles.title} text-center pb-5 pt-5`}>
          <div
            className={` flex-column justify-content-center align-items-center pb-3  d-inline`}
          >
            <Heading
              title={`Be Ready for Every  ${space}`}
              color="black"
              size="h1"
              weight="5"
            />
            <Heading
              title={`Review with Confidence  ${space}`}
              color="equity-blue"
              size="h1"
              weight="5"
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

      <div className={`${styles.sixth_row} row d-flex bg-white `}>
        <EnkashWay
          sectionHeading="One Platform, Every Use Case, Total Control"
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

      <div className={` ${styles.ninth_row} `}>
        <div className="max-w-auto">
          <h1>
            Build a <span>leaner, smarter, & future-ready</span> finance team
          </h1>
          <div className="mt-5 mx-5">
            <RectangleButton
              title="Get started today"
              theme="border-gray"
              actionImage={blueArrow}
              iconSize={15}
              url="/sales/?source=receivables"
            />
          </div>{" "}
        </div>
      </div>

      <div className={`${styles.faq_new_row}  relative`}>
        <div className={`${styles.faqSection} text-start max-w-auto `}>
          <div className={`${styles.title} text-start  pb-5`}>
            <Heading
              title={`Frequently Asked Questions  ${space}`}
              color="black"
              size="h1"
              weight="5"
            />
            <Heading title={`(`} color="black" size="h1" weight="5" />
            <Heading title={`FAQ`} color="equity-blue" size="h1" weight="5" />
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

export default ExpenseManagement
