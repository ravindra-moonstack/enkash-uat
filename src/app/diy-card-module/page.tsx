import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.scss"
import { cardType, intantActionData, spendAnalyticsData } from "./data"
import {
  RectangleButton,
  CustomBreadcrumb,
  LogoSlider,
  CardProduct,
  DynamicHeading,
  CardStacking,
  AllInOnePolicy,
  PolicyCard,
  FaqSection,
  StepsSection,
} from "@/components"

import {
  blueArrow,
  whiteArrow,
  mealCardImage,
  heroCardImg,
  podiumImage,
  realTimeExpenseIcon,
  realTimeExpense,
  fraudProtectionIcon,
  fraudProtection,
  streamlinedReimbursementIcon,
  streamlinedReimbursement,
  costControlSavingsIcon,
  costControlSavings,
  wideAcceptanceNetworkIcon,
  wideAcceptanceNetwork,
  integrationAudit,
  seemlessIntegration,
  integrationAuditIcon,
  seemlessIntegrationIcon,
  instantActionImg,
} from "."


import faqData from "./faq-data"

import StepCard from "@/components/stepCard/stepCard"


const cards = [
  {
    color: "#fff",
    content: (
      <>
        <AllInOnePolicy
          icon={realTimeExpenseIcon}
          title="Purpose-Made Cards for Every Need"
          description="Issue cards specifically designed for your unique use cases, such as travel, SaaS, or marketing campaigns. Configure individual card settings to match your organization’s requirements."
          image={realTimeExpense}
          buttonUrl="/sales"
          maxImageHeight="300px"
        />
      </>
    ),
  },
  {
    color: "#eee",
    content: (
      <>
        <AllInOnePolicy
          icon={fraudProtectionIcon}
          title="Precise Spending Controls"
          description="Define spending rules for teams or individuals. Customize limits based on categories, amounts, or timeframes to maintain budget discipline."
          image={fraudProtection}
          buttonUrl="/sales"
          maxImageHeight="300px"
        />
      </>
    ),
  },
  {
    color: "#fff",
    content: (
      <>
        <AllInOnePolicy
          icon={streamlinedReimbursementIcon}
          title="Real-Time Monitoring"
          description="Track transactions as they happen. Gain instant insights into where and how funds are being used, ensuring better financial decisions."
          image={streamlinedReimbursement}
          buttonUrl="/sales/?source=expense_management"
          maxImageHeight="300px"
        />
      </>
    ),
  },
  {
    color: "#eee",
    content: (
      <>
        <AllInOnePolicy
          icon={costControlSavingsIcon}
          title="Built-In Approval Workflows"
          description="Simplify internal processes with predefined approval workflows that align with company policies. Save time and reduce repetitive tasks."
          image={costControlSavings}
          buttonUrl="/sales"
          maxImageHeight="300px"
        />
      </>
    ),
  },
  {
    color: "#eee",
    content: (
      <>
        <AllInOnePolicy
          icon={wideAcceptanceNetworkIcon}
          title="Enhanced Vendor Payments"
          description="Ensure timely payments to vendors, strengthening business relationships and unlocking the potential for better payment terms."
          image={wideAcceptanceNetwork}
          buttonUrl="/sales"
          maxImageHeight="300px"
        />
      </>
    ),
  },
  {
    color: "#eee",
    content: (
      <>
        <AllInOnePolicy
          icon={integrationAuditIcon}
          title="Integrated Audit Support"
          description="Keep financial operations transparent and compliant with automated reconciliation and comprehensive transaction records."
          image={integrationAudit}
          buttonUrl="/sales"
          maxImageHeight="300px"
        />
      </>
    ),
  },
  {
    color: "#eee",
    content: (
      <>
        <AllInOnePolicy
          icon={seemlessIntegrationIcon}
          title="Seamless Integration"
          description="Easily connect with popular accounting tools like Tally and Zoho to simplify data management and reporting."
          image={seemlessIntegration}
          buttonUrl="/sales"
          maxImageHeight="300px"
        />
      </>
    ),
  },
]
const DiyCardModule = (): React.JSX.Element => {
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
                  name: "Diy Card",
                  url: "/corporate-cards/diy-card-module",
                },
              ]}
            />
          </div>
          <div className={`${styles.title} col-12 `}>
            <DynamicHeading
              content={[
                {
                  title: "Diy Card",
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
                    title: "Take Control of Your Business Expenses with",
                    color: "color-black f-3 italic d-block",
                  },
                  {
                    title: " DIY Corporate Card Module",
                    color: "color-black ",
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
                      "Design cards for specific needs, enforce spending policies, and oversee all transactions with ease.",
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

      <div>
        <LogoSlider />
      </div>

      <div className={`${styles.action_row} bg-white `}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-md-5 pb-5`}>
            <div>
              <DynamicHeading
                content={[
                  {
                    title: "How to Use the DIY Card Module",
                    color: "color-black",
                  },
                ]}
                headingTag="h2"
                className="f-6"
              />
            </div>
          </div>
          <div className={`row bg-white align-items-center ${styles.section}`}>
            <div className="col-md-6 col-12 px-md-5">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {intantActionData.map(({ icon, title, description }, i) => (
                  <div key={i} style={{ direction: "ltr" }}>
                    <StepCard
                      icon={icon}
                      title={title}
                      description={description}
                    />
                  </div>
                ))}
              </div>
              <div className={`${styles.list_button}`}>
                <RectangleButton
                  title="Get started "
                  theme="border-gray"
                  actionImage={blueArrow}
                  hoverImage={whiteArrow}
                  url="/sales/?source=expense_management"
                  className="d-flex justify-content-between align-items-center"
                />
              </div>
            </div>
            <div className={`col-md-6 col-12 `}>
              <div>
                <Image
                  src={mealCardImage}
                  alt="card background"
                  className="w-100 mh-550 object-fit-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.card_stacking_row}>
        <div className={` max-w-auto  ${styles.section}`}>
          <>
            <div className={`${styles.title} text-center `}>
              <DynamicHeading
                content={[
                  {
                    title: "The Smarter Approach to ",
                    color: "color-black",
                  },
                  {
                    title: "Corporate Card Management ",
                    color: "color-equity-blue",
                  },
                ]}
                headingTag="h2"
                className="f-6"
              />
            </div>

            <CardStacking
              cards={cards}
              heading={[
                {
                  title: "Meal Cards that your Employees Deserve",
                  color: "color-black",
                },
              ]}
            />
          </>
        </div>
      </div>

      <div className={`${styles.third_row} `}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-2 pb-md-5`}>
            <div
              className={` flex-column justify-content-center align-items-center pb-3 `}
            >
              <DynamicHeading
                content={[
                  {
                    title: "The EnKash Advantage - Benefits of Using EnKash’s ",
                    color: "color-black",
                  },
                  {
                    title: "DIY Card Module",
                    color: "color-equity-blue",
                  },
                ]}
                headingTag="h2"
                className="f-6"
              />
            </div>
          </div>
          <div className={`row align-items-center ${styles.section}`}>
            <div className="col-md-6 col-12  pe-md-5">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {spendAnalyticsData.map(({ icon, title, description }, i) => (
                  <div key={i} style={{ direction: "ltr" }}>
                    <StepCard
                      icon={icon}
                      title={title}
                      description={description}
                    />
                  </div>
                ))}
              </div>
              <div className={`${styles.list_button}`}>
                <RectangleButton
                  title="Get started "
                  theme="border-gray"
                  actionImage={blueArrow}
                  hoverImage={whiteArrow}
                  url="/sales"
                  className="d-flex justify-content-between align-items-center"
                />
              </div>
            </div>
            <div className={`col-md-6 col-12 d-flex `}>
              <div>
                <Image
                  src={instantActionImg}
                  alt="card background"
                  className="w-100 mh-550 object-fit-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.sixth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center   flex-column gap-4 align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title: "Take Charge of Your Expenses Today!",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className=""
            />
          </div>

          <div className={`${styles.get_started_button} `}>
            <RectangleButton
              title="Get Started Today"
              theme="outline-blue"
              actionImage={blueArrow}
              hoverImage={whiteArrow}
              url="/sales/?source=expense_management"
            />
          </div>
        </div>
      </div>

      <div>
        <FaqSection faqData={faqData} />
      </div>

      <div className={styles.other_products}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-5`}>
            <DynamicHeading
              content={[
                {
                  title: "Your Business, ",
                  color: "color-black",
                },
                {
                  title: "Your Cards – ",
                  color: "color-equity-blue",
                },
                {
                  title: "Tailored by EnKash",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className=""
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

export default DiyCardModule
