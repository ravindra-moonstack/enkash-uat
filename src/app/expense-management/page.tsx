"use client";
import Image from "next/image";
import { Metadata } from "next";
import { space } from "@/common/constant";
import styles from "./page.module.scss";
import { cardsData } from "./data";
import faqData from "./faq-data";

import {
  Header,
  Footer,
  Heading,
  PrimaryButton,
  StructuredData,
  FAQHtml,
  SecondryButton,
} from "@/components";
import EnkashWay from "@/components/enkash-way/enkash-way";
import { faqBg, creditCard, blueArrow, approved, policyIcon } from ".";
import generateMetaData from "@/common/utils/metaData";
import ManagementCard from "@/components/management-card/management-card";
import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button";
import PolicyCard from "@/components/policyCard/policyCard";
import CardAnimation from "@/components/cardAnimation/page";

export const metadata: Metadata = generateMetaData({
  title: "Automated Expense Management Software for your Business- EnKash",
  description:
    "EnKash automated expense management platform keeps track of budgets and ensures that spends are within limits. Automating expense management saves time & transparency.Book Demo Now!",
  alternates: {
    canonical: "https://www.enkash.com/expense-management/",
  },
  faqData: faqData,
});

const showScroll = cardsData.length > 3;
const ExpenseManagement = (): React.JSX.Element => {
  return (
    <div className={`color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/expense-management/`}
        faqData={faqData}
      />
      <Header utmSource="expense_management" />

      <div className={`${styles.first_row}`}>
        <div className="col-12 d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex ">
            <p className={`${styles.subtitle}`}>Expense Management</p>
          </div>
          <div className="d-flex mb-4">
            <Heading
              title="Expense Management"
              color="black"
              size="h1"
              weight="7"
            />
          </div>
          <div className="d-inline">
            <Heading
              title="Smarter Spending."
              color="main-grey"
              size="h2"
              weight="4"
              useH1TagInHtml={true}
            />
            <Heading
              title={`${space} Seamless Control. ${space}`}
              color="main-grey"
              size="h5"
              weight="4"
            />
            <Heading
              title="Instant Visibility."
              color="main-grey"
              size="h5"
              weight="4"
            />
          </div>

          <div className="mt-4 mobile-only">
            <Heading
              title="Smarter Spending. Seamless Control. Instant Visibility."
              color="white"
              size="h6"
              weight="5"
            />
          </div>

          <div className="mt-5">
            <RectangleButton
              title="Get Started"
              theme="blue"
              url="/sales/?source=expense_management"
            />
          </div>
        </div>
        <div className=" col-12 d-flex justify-content-center align-items-center">
          <div className={styles.lottie_container}>
            {/* <LottieDynamicLoadComponent
              animationName={"OfexBannerAnimation"}
              loop={true}
            /> */}
          </div>
        </div>

        {/* <div>
          <BankSection type="customers" />
        </div> */}
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
  );
};

export default ExpenseManagement;
