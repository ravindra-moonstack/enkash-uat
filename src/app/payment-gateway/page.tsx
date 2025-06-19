"use client"
import Image from "next/image"
import { Metadata } from "next"
import { space } from "@/common/constant"
import styles from "./page.module.scss"
import { acceleratedGrowthData, cardsData } from "./data"
import faqData from "./faq-data"
import {
  Header,
  Footer,
  Heading,
  PrimaryButton,
  StructuredData,
  FAQHtml,
  SecondryButton,
} from "@/components"
import EnkashWay from "@/components/enkash-way/enkash-way"
import {
  creditCard,
  blueArrow,
  approved,
  policyIcon,
  groupIcon,
  paymentSummary,
  integration,
  paymenyMethod,
  dashboard,
  rank,
  support,
  leftHand,
  whiteArrow,
  acceleratedGrowthImg,
} from "."
import generateMetaData from "@/common/utils/metaData"
import ManagementCard from "@/components/management-card/management-card"
import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import PolicyCard from "@/components/policyCard/policyCard"
import CardAnimation from "@/components/cardAnimation/page"
import CustomBreadcrumb from "@/components/breadcrumb/breadbrumb"
import Home from "../page"
import BankSection from "@/components/logo-slider/logo-slider"
import LogoSlider from "@/components/logo-slider/logo-slider"
import Card from "@/components/cardAnimation/card/card"

const showScroll = cardsData.length > 3
const PaymentGateway = (): React.JSX.Element => {
  return (
    <div className={`color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/expense-management/`}
        faqData={faqData}
      />
      <Header utmSource="expense_management" />

      <div className={`${styles.first_row} `}>
        <CustomBreadcrumb
          items={[
            { name: "Home", url: "/" },
            { name: "Products", url: "/products" },
            { name: "Payment Gateway", url: "/products/payment-gateway" },
          ]}
        />
        <div className="d-flex">
          <div className="col-12 col-md-6 d-flex flex-column">
            <div className="d-flex my-5 flex-column flex-md-row">
              <div className="d-flex border-bottom-equity">
                <Heading
                  title={`Payment Gateway ${space}`}
                  color="equity-blue"
                  size="h4"
                  weight="7"
                />
              </div>
            </div>
            <div className="d-flex flex-column">
              <Heading
                title={`India’s First Payment${space}`}
                color="black"
                size="h2"
                weight="7"
              />
              <div>
                <Heading
                  title=" Gateway Built for SMBs"
                  color="black"
                  size="h2"
                  weight="7"
                />
              </div>
            </div>

            <div className="d-flex mt-4 pe-5">
              <Heading
                title="The best payment gateway for a superior merchant experience."
                color="black"
                size="h5"
                weight="5"
              />
            </div>
            <div className="my-5 d-flex flex-column justify-content-start align-items-start">
              <Image
                src={groupIcon}
                alt="card visual"
                className={styles.card_image}
              />
              <div className="my-5 d-flex flex-row justify-content-start align-items-center">
                <div className="me-2">
                  <RectangleButton
                    title="Get Started"
                    theme="blue"
                    url="/sales/?source=expense_management"
                  />
                </div>
                <div>
                  <RectangleButton
                    title="API Doc"
                    theme="outline-blue"
                    url="/sales/?source=expense_management"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div
              className="position-relative w-100 h-100"
              style={{ maxHeight: "625px" }}
            >
              <Image
                src={paymentSummary}
                alt="card visual"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
        <LogoSlider type="customers" />
      </div>

      <div className={`row ${styles.second_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-3  align-items-center">
          <div className="d-flex justify-content-center  align-items-center">
            <Heading
              title="Say Hello to a"
              size="h3"
              color="white"
              weight="3"
            />
            <Heading
              title={`${space} Smarter, Faster & Secure ${space}`}
              size="h3"
              color="white"
              weight="6"
            />
            <Heading
              title="way to handle transactions"
              size="h3"
              color="white"
              weight="3"
            />
          </div>

          <div className={` d-flex ${styles.section}`}>
            {" "}
            <div
              className={`my-5 d-flex flex-column justify-content-center align-items-center ${styles.card}`}
            >
              <div className="me-2">
                <Heading
                  title="100%"
                  color="white"
                  size="h2"
                  weight="7"
                  useH1TagInHtml={true}
                />
              </div>
              <div
                className={`py-2 d-flex flex-column justify-content-center align-items-center ${styles.innerCard}`}
              >
                {" "}
                <Heading
                  title="Support"
                  color="white"
                  size="h5"
                  weight="4"
                  useH1TagInHtml={true}
                />
              </div>
            </div>
            <div
              className={`my-5 d-flex flex-column justify-content-center align-items-center ${styles.card}`}
            >
              <div className="me-2">
                <Heading
                  title="100%"
                  color="white"
                  size="h2"
                  weight="7"
                  useH1TagInHtml={true}
                />
              </div>
              <div
                className={`py-2 d-flex flex-column justify-content-center align-items-center ${styles.innerCard}`}
              >
                {" "}
                <Heading
                  title="Uptime"
                  color="white"
                  size="h5"
                  weight="4"
                  useH1TagInHtml={true}
                />
              </div>
            </div>
            <div
              className={`my-5 d-flex flex-column justify-content-center align-items-center ${styles.card}`}
            >
              <div className="me-2">
                <Heading
                  title="100%"
                  color="white"
                  size="h2"
                  weight="7"
                  useH1TagInHtml={true}
                />
              </div>
              <div
                className={`py-2 d-flex flex-column justify-content-center align-items-center ${styles.innerCard}`}
              >
                {" "}
                <Heading
                  title="Faster"
                  color="white"
                  size="h5"
                  weight="4"
                  useH1TagInHtml={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.third_row}>
        <div className={`${styles.title} text-center pb-5`}>
          <Heading
            title={`Built for SMBs,  ${space}`}
            color="equity-blue"
            size="h1"
            weight="5"
          />
          <Heading
            title={`Trusted by Enterprises ${space}`}
            color="black"
            size="h1"
            weight="5"
          />
        </div>

        <div className={`row bg-white ${styles.section}`}>
          <div className="col-md-6 col-12 px-5">
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
                size="h4"
                weight="4"
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "50px" }}
            >
              {cardsData.map(({ icon, title, description }, i) => (
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
                title="Get Started"
                theme="outline-blue"
                url="/sales/?source=expense_management"
              />
            </div>
          </div>
          <div
            className={`col-md-6 col-12 d-flex my-md-5 my-3
             justify-content-start ${styles.third_container}`}
          >
            <div>
              <Image
                src={integration}
                alt="card background"
                className="position-relative w-100 h-100"
                style={{ maxHeight: "625px" }}
              />
            </div>
          </div>
        </div>

        <div
          className={`row bg-color-soft-mint pb-[50px] pt-[50px] ${styles.section}`}
        >
          <div
            className={`col-md-6 col-12 d-flex my-md-5 my-3
             justify-content-start ${styles.third_container}`}
          >
            <div>
              <Image
                src={paymenyMethod}
                alt="card background"
                className="position-relative w-100 h-100"
                style={{ maxHeight: "625px" }}
              />
            </div>
          </div>

          <div className="col-md-6 col-12 px-5">
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
                size="h4"
                weight="4"
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "50px" }}
            >
              {cardsData.map(({ icon, title, description }, i) => (
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
                title="Get Started"
                theme="outline-blue"
                url="/sales/?source=expense_management"
              />
            </div>
          </div>
        </div>

        <div className={`row bg-white ${styles.section}`}>
          <div className="col-md-6 col-12 px-5">
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
                size="h4"
                weight="4"
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "50px" }}
            >
              {cardsData.map(({ icon, title, description }, i) => (
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
                title="Get Started"
                theme="outline-blue"
                url="/sales/?source=expense_management"
              />
            </div>
          </div>
          <div
            className={`col-md-6 col-12 d-flex my-md-5 my-3
             justify-content-start ${styles.third_container}`}
          >
            <div>
              <Image
                src={dashboard}
                alt="card background"
                className="position-relative w-100 h-100"
                style={{ maxHeight: "625px" }}
              />
            </div>
          </div>
        </div>

        <div
          className={`row bg-color-soft-mint pb-[50px] pt-[50px] ${styles.section}`}
        >
          <div
            className={`col-md-6 col-12 d-flex my-md-5 my-3
             justify-content-start ${styles.third_container}`}
          >
            <div>
              <Image
                src={rank}
                alt="card background"
                className="position-relative w-100 h-100"
                style={{ maxHeight: "625px" }}
              />
            </div>
          </div>

          <div className="col-md-6 col-12 px-5">
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
                size="h4"
                weight="4"
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "50px" }}
            >
              {cardsData.map(({ icon, title, description }, i) => (
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
                title="Get Started"
                theme="outline-blue"
                url="/sales/?source=expense_management"
              />
            </div>
          </div>
        </div>

        <div className={`row bg-white ${styles.section}`}>
          <div className="col-md-6 col-12 px-5">
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
                size="h4"
                weight="4"
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "50px" }}
            >
              {cardsData.map(({ icon, title, description }, i) => (
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
                title="Get Started"
                theme="outline-blue"
                url="/sales/?source=expense_management"
              />
            </div>
          </div>
          <div
            className={`col-md-6 col-12 d-flex my-md-5 my-3
             justify-content-start ${styles.third_container}`}
          >
            <div>
              <Image
                src={support}
                alt="card background"
                className="position-relative w-100 h-100"
                style={{ maxHeight: "625px" }}
              />
            </div>
          </div>
        </div>

        <div
          className={`row bg-color-soft-mint  position-relative ${styles.section}`}
        >
          <div
            className={`col-md-6 col-12 d-flex my-md-5 my-3
             justify-content-start ${styles.third_container}`}
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

          <div className="col-md-6 col-12 px-5">
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
                size="h4"
                weight="4"
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "50px" }}
            >
              {cardsData.map(({ icon, title, description }, i) => (
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
                title="Get Started"
                theme="outline-blue"
                url="/sales/?source=expense_management"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${styles.eigth_row} row row-padding-bottom-none relative`}
      >
        <div className={`text-start  pb-5`}>
          <div
            className={`${styles.title} text-start  d-flex flex-column pb-5`}
          >
            <Heading
              title={`Best Payment Gateway in India for ${space}`}
              color="black"
              size="h1"
              weight="6"
            />
            <Heading
              title={` Accelerated Growth ${space}`}
              color="equity-blue"
              size="h1"
              weight="6"
            />
          </div>

          <div className="col-6">
            {acceleratedGrowthData.map(({ icon, title }, i) => (
              <div key={i} style={{ direction: "ltr" }}>
                <div className="d-flex align-items-start gap-3 py-3 w-4 h-4">
                  <div
                    className="d-flex justify-content-center align-items-center bg-light rounded-circle"
                    style={{ width: "32px", height: "32px" }}
                  >
                    <Image src={icon} alt="icon" />
                  </div>
                  <div className="d-flex flex-column gap-3">
                    <Heading title={title} color="black" size="h4" weight="5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.faq_bg}>
          <Image src={acceleratedGrowthImg} alt="background image" />x
        </div>
      </div>
  <div
        className={`${styles.faq_new_row} row row-padding-bottom-none relative`}
      >
        <div className={`${styles.faqSection} text-start  pb-5`}>
          <div className={`${styles.title} text-start  pb-5`}>
            <Heading
              title={`Frequently Asked Questions  ${space}`}
              color="black"
              size="h1"
              weight="6"
            />
            <Heading
              title={` (FAQ) ${space}`}
              color="bluish-purple"
              size="h1"
              weight="6"
            />
          </div>
          <div>
            {" "}
            <Heading
              title="Have more questions? "
              color="main-grey"
              size="h5"
              weight="4"
              useH1TagInHtml={true}
            />
          </div>
          <div className="mt-2">
            <SecondryButton
              title="Get started today"
              theme="border-gray"
              actionImage={blueArrow}
              iconSize={15}
              url="/sales/?source=receivables"
            />
          </div>
          <div>
            <FAQHtml faqData={faqData} />
          </div>
        </div>
      </div>
      <div className={`row ${styles.new_row} `}>
        <div className="d-flex justify-content-center flex-column gap-3  align-items-center">
          <Heading
            title="Discover the EnKash difference - Secure, Scalable and Seamless.Get Started"
            size="h3"
            color="white"
          />
          <div>
            <RectangleButton
              title="Get Started"
              theme="outline-blue"
              url="/sales/?source=expense_management"
              actionImage={blueArrow}
              iconSize={15}
            />
          </div>
        </div>
      </div>

      <div className="bg-white row-padding ">
        <div className={`${styles.title} text-center pb-5`}>
          <Heading
            title={`EnKash’s ${space}`}
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`innovative solutions ${space}`}
            color="bluish-purple"
            size="h1"
            weight="6"
          />

          <Heading
            title="for expense management"
            color="black"
            size="h1"
            weight="6"
          />
        </div>
        <div className="row g-3 pb-4 ps-md-5">
          <div className="col-12 col-md-4">
            <ManagementCard
              whiteTitle="Streamlined process"
              description="Effortless expense submission and approval process supported via  WhatsApp"
              ctaColor="blue"
              source="expense_management"
              cardImage={creditCard}
            />
          </div>

          <div className="col-12 col-md-4">
            <ManagementCard
              whiteTitle="Streamlined process"
              description="Effortless expense submission and approval process supported via  WhatsApp"
              ctaColor="blue"
              source="expense_management"
              cardImage={creditCard}
            />
          </div>

          <div className="col-12 col-md-4">
            <ManagementCard
              whiteTitle="Streamlined process"
              description="Effortless expense submission and approval process supported via  WhatsApp"
              ctaColor="blue"
              source="expense_management"
              cardImage={creditCard}
            />
          </div>

          <div className="col-12 col-md-4">
            <ManagementCard
              whiteTitle="Streamlined process"
              description="Effortless expense submission and approval process supported via  WhatsApp"
              ctaColor="blue"
              source="expense_management"
              cardImage={creditCard}
            />
          </div>

          <div className="col-12 col-md-4">
            <ManagementCard
              whiteTitle="Streamlined process"
              description="Effortless expense submission and approval process supported via  WhatsApp"
              ctaColor="blue"
              source="expense_management"
              cardImage={creditCard}
            />
          </div>

          <div className="col-12 col-md-4">
            <ManagementCard
              whiteTitle="Streamlined process"
              description="Effortless expense submission and approval process supported via  WhatsApp"
              ctaColor="blue"
              source="expense_management"
              cardImage={creditCard}
            />
          </div>

          <div className="col-12 col-md-4">
            <ManagementCard
              whiteTitle="Streamlined process"
              description="Effortless expense submission and approval process supported via  WhatsApp"
              ctaColor="blue"
              source="expense_management"
              cardImage={creditCard}
            />
          </div>

          <div className="col-12 col-md-4">
            <ManagementCard
              whiteTitle="Streamlined process"
              description="Effortless expense submission and approval process supported via  WhatsApp"
              ctaColor="blue"
              source="expense_management"
              cardImage={creditCard}
            />
          </div>

          <div className="col-12 col-md-4">
            <ManagementCard
              whiteTitle="Streamlined process"
              description="Effortless expense submission and approval process supported via  WhatsApp"
              ctaColor="blue"
              source="expense_management"
              cardImage={creditCard}
            />
          </div>
        </div>

        <div className="mt-5 mx-5">
          <PrimaryButton
            title="Learn More About Receipt Management"
            theme="blue"
            url="/sales/?source=expense_management"
          />
          <span className="mx-2"></span>
          <PrimaryButton
            title="Explore Reimbursement Management"
            theme="border-blue"
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
              <div key={i} style={{ direction: "ltr", marginLeft: "20px" }}>
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

      <div className={`row ${styles.ninth_row} `}>
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
      </div>
      <Footer utmSource="expense_management" />
    </div>
  )
}

export default PaymentGateway
