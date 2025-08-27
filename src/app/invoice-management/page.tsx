import Image from "next/image"
import styles from "./page.module.scss"
import { allInOnePolicyData, allProductSections, cardsData } from "./data"
import faqData from "./faq-data"
import {
  DynamicHeading,
  LogoSlider,
  CustomBreadcrumb,
  RectangleButton,
  AllInOnePolicy,
  ScrollableCardsSection,
  AllProducts,
  FaqSection,
} from "@/components"
import {
  blueArrow,
  groupIcon,
  paymentSummary,
  whiteArrow,
  mealCardImage,

} from "."
import { getSalesUrl } from "@/common/utils/getSalesUrl"
import generateMetaData from "@/common/utils/metaData"
import { Metadata } from "next"

export const metadata: Metadata = generateMetaData({
  title: "Invoice Management System: Automate, Track & Reconcile Invoices ",
  description:
    "Digitize your invoice workflow with EnKash. Create, share, approve, and reconcile invoices faster—streamline accounts payable and improve cash flow visibility.",
  alternates: {
    canonical: `${process.env.URL}/invoice-management/`,
  },
})
const salesUrl = getSalesUrl("/invoice-management")

const mergedCards = allProductSections.flatMap((section) => section.items)

const InvoiceManagement = (): React.JSX.Element => {
  return (
    <div className={`color-white ${styles.home_container}`}>
      <div className={`${styles.first_row} `}>
        <div className="max-w-auto">
          <div className="d-flex flex-column flex-md-row">
            <div className="col-12 col-md-6 d-flex flex-column">
              <div className="d-flex">
                <CustomBreadcrumb
                  items={[
                    { name: "Home", url: "/" },
                    {
                      name: "Make Payments",
                      url: "/products/make-payments",
                    },
                    {
                      name: "Invoice Management",
                      url: "/invoice-management",
                    },
                  ]}
                />
              </div>
              <div
                className={`${styles.first_row_title} d-md-flex text-center  flex-column flex-md-row `}
              >
                <DynamicHeading
                  content={[
                    {
                      title: "Invoice Management",
                      color: "color-equity-blue underline",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0"
                />
              </div>
              <div
                className={`text-center text-md-start ${styles.first_row_content}  `}
              >
                <div className="pt-3 pt-md-0">
                  <DynamicHeading
                    content={[
                      {
                        title:
                          "Transform your Invoice Management Process with EnKash",
                        color: "color-black",
                      },
                    ]}
                    headingTag="h1"
                    className="f-7"
                  />
                </div>

                <div className="d-flex mt-3 mb-3 text-center text-md-start ">
                  <DynamicHeading
                    content={[
                      {
                        title:
                          "Make invoice management efficient, get greater visibility, and maintain better control over your financial operations.",
                        color: "color-black subHeading",
                      },
                    ]}
                    headingTag="p"
                    className="mb-0"
                  />
                </div>

                <div className="d-flex flex-column align-items-center align-items-md-start">
                  <Image
                    src={groupIcon}
                    alt="card visual"
                    className={styles.group_logo}
                  />
                  <div
                    className={`${styles.first_row_button} d-flex flex-row  align-items-center`}
                  >
                    <div>
                      <RectangleButton
                        title="Get Started  "
                        theme="blue"
                        url={salesUrl}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center d-md-flex">
              <div
                className={`${styles.right_img} position-relative w-100 h-100 d-flex`}
              >
                <Image
                  src={paymentSummary}
                  alt="card visual"
                  className="w-100 mh-550 object-fit-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <LogoSlider />
      </div>

      <div className={styles.third_row}>
        <div className={`relative max-w-auto`}>
          <div className={`${styles.title} text-center pb-md-5 pb-4`}>
            <DynamicHeading
              content={[
                {
                  title: "How EnKash ",
                  color: "color-black",
                },
                {
                  title: "Invoice Management",
                  color: "color-equity-blue",
                },
                {
                  title: " Works",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
          <div className="row">
            <div className="col-md-6 col-12">
              <ScrollableCardsSection
                cardsData={cardsData}
                showScroll={true}
                maxHeight="400px"
                buttonTitle="Get Started"
                buttonTheme="outline-blue"
                buttonUrl={salesUrl}
              />
            </div>
            <div className="col-md-6 col-12">
              <div>
                <Image
                  src={mealCardImage}
                  alt="card background"
                  className="w-100"
                  style={{ maxHeight: "672px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row}  `}>
        <div className="max-w-auto">
          <div className={` ${styles.section}`}>
            <div className={`row  align-items-center`}>
              <div className={`${styles.title} text-center `}>
                <div className={`text-center pb-4 pb-md-5`}>
                  <DynamicHeading
                    content={[
                      {
                        title:
                          "Take Control of Your Invoice Process with EnKash",
                        color: "color-black",
                      },
                    ]}
                    headingTag="h2"
                    className="f-5"
                  />
                </div>
              </div>

              <div className={styles.allInOnePolicy}>
                {allInOnePolicyData.map((item, index) => (
                  <AllInOnePolicy
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    buttonUrl={salesUrl}
                    maxImageHeight={item.maxImageHeight}
                    reverse={item.reverse}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.slider_row} relative`}>
        <div className={`${styles.title} text-center  max-w-auto`}>
          <div className={``}>
            <DynamicHeading
              content={[
                {
                  title: "Features to Solve ",
                  color: "color-black",
                },
                {
                  title: "Invoice Management Challenges ",
                  color: "color-equity-blue",
                },
                {
                  title: "with Confidence ",
                  color: "color-black",
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

      <div className={`${styles.fifth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center  align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title: "Start Managing Invoices the Smarter Way",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5 pb-3 pb-md-0"
            />
          </div>
          <div className={`${styles.get_started_button} `}>
            <RectangleButton
              title="Get Started  "
              theme="outline-blue"
              actionImage={blueArrow}
              hoverImage={whiteArrow}
              url={salesUrl}
            />
          </div>
        </div>
      </div>

      <FaqSection faqData={faqData} />
    </div>
  )
}

export default InvoiceManagement
