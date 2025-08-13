import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.scss"
import { allProductSections, cardsData } from "./data"
import faqData from "./faq-data"
import {
  Header,
  FAQHtml,
  Footer,
  DynamicHeading,
  TalkToSales,
  LogoSlider,
  CustomBreadcrumb,
  PolicyCard,
  RectangleButton,
  ManagementCard,
  AllInOnePolicy,
  AllProducts

} from "@/components"
import {
  blueArrow,
  groupIcon,
  paymentSummary,
  paymentLink,
  qrCodes,
  invoices,
  paymentButton,
  autoCollect,
  instant,
  reminder,
  whiteArrow,
  mealCardImage,
  paymentLinkImage,
  shareImage,
  paymentOptionImage,
  notificationImage,
  activationIcon,
  realTimeIcon,
  optimizedIcon,
  taskIconOne,
  taskIconTwo,
  taskIconThree,
  taskIconFour,
  taskIconFive,
  paymentGateway,
} from "."

const showScroll = cardsData.length > 3
const mergedCards = allProductSections.flatMap((section) => section.items)

const PaymentPage = (): React.JSX.Element => {
  return (
    <div className={`color-white ${styles.home_container}`}>
      <Header utmSource="expense_management" />

      <TalkToSales />

      <div className={`${styles.first_row} `}>
        <div className="max-w-auto">
          <div className="d-flex flex-column flex-md-row">
            <div className="col-12 col-md-6 d-flex flex-column">
              <div className="d-flex">
                <CustomBreadcrumb
                  items={[
                    { name: "Home", url: "/" },
                    {
                      name: "Collect Payments",
                      url: "/products/collect-payments",
                    },
                    {
                      name: "Payment Page",
                      url: "/payment-page",
                    },
                  ]}
                />
              </div>
              <div
                className={`${styles.first_row_title} d-md-flex text-center flex-column flex-md-row `}
              >
                <DynamicHeading
                  content={[
                    {
                      title: "Payment Page",
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
                <div className="d-flex pt-3 pt-md-0">
                  <DynamicHeading
                    content={[
                      {
                        title:
                          "Instant Online Payments with Custom  Payment Page",
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
                          "Create professional, branded payment pages that enable secure and hassle-free online payment collection.",
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
            </div>
            <div className="col-12 col-md-6 ">
              <div className={`${styles.right_img} position-relative ps-md-5`}>
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

      <div className={`row ${styles.second_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32  max-w-auto">
          <div className="d-inline justify-content-center  align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title: "Best Online Payment Solution",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5 mb-3 mb-md-0 "
            />
          </div>

          <div className={` d-flex ${styles.section}`}>
            {" "}
            <div className={` ${styles.card}`}>
              <div className={` d-flex ${styles.outerCard}`}>
                <DynamicHeading
                  content={[
                    {
                      title: "100%",
                      color: "color-white",
                    },
                  ]}
                  headingTag="h2"
                  className="f-6"
                />
              </div>
              <div className={`py-2 text-center ${styles.innerCard}`}>
                {" "}
                <DynamicHeading
                  content={[
                    {
                      title: "Fast",
                      color: "color-white",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0"
                />
              </div>
            </div>
            <div className={` ${styles.card}`}>
              <div className={` d-flex ${styles.outerCard}`}>
                <Image src={activationIcon} alt="icon" />
              </div>
              <div className={`py-2 text-center ${styles.innerCard}`}>
                {" "}
                <DynamicHeading
                  content={[
                    {
                      title: "Customizable",
                      color: "color-white",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0"
                />
              </div>
            </div>
            <div className={` ${styles.card}`}>
              <div className={` d-flex ${styles.outerCard}`}>
                <Image src={realTimeIcon} alt="icon" />
              </div>
              <div className={`py-2 text-center ${styles.innerCard}`}>
                {" "}
                <DynamicHeading
                  content={[
                    {
                      title: "Secure",
                      color: "color-white",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.third_row}>
        <div className={`relative max-w-auto`}>
          <div className={`${styles.title} text-center pb-md-5 pb-4`}>
            <DynamicHeading
              content={[
                {
                  title: "How to Setup EnKash Payment Pages",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
          <div className="row">
            <div className="col-md-6 col-12">
              <div
                className={` mt-md-5 ${
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
                    }}
                    className={styles.scrollCard}
                  >
                    <PolicyCard
                      icon={icon}
                      title={title}
                      description={description}
                    />
                  </div>
                ))}
              </div>
              <div className={`${styles.list_button} `}>
                <RectangleButton
                  title="Get Started"
                  theme="outline-blue"
                  url="/sales/?source=receivables"
                />
              </div>
            </div>
            <div className="col-md-6 col-12">
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

      <div className={`${styles.fourth_row}  `}>
        <div className="max-w-auto">
          <div className={`${styles.section}`}>
            <div className={`row  align-items-center `}>
              <div className={`${styles.title} text-center  `}>
                <div className={`text-center pb-4 pb-md-5`}>
                  <DynamicHeading
                    content={[
                      {
                        title: "Effortless Transactions, Secure ",
                        color: "color-equity-blue",
                      },
                      {
                        title: " Payments -  The EnKash Way",
                        color: "color-black",
                      },
                    ]}
                    headingTag="h2"
                    className="f-6"
                  />
                </div>
              </div>

              <div className={styles.allInOnePolicy}>
                <AllInOnePolicy
                  icon={taskIconOne}
                  title="Customization at Your Fingertips"
                  description="Design payment pages that truly showcase your brand identity. Add your logo, select colors that resonate with your business, and customize fields to gather precise and relevant customer details. With memorable and professional URLs, sharing your payment page becomes a breeze, enhancing both brand recognition and user convenience."
                  image={paymentLinkImage}
                  buttonUrl="/sales/?source=expense_management"
                  maxImageHeight="243px"
                />

                <AllInOnePolicy
                  icon={taskIconTwo}
                  title="Multiple Payment Modes"
                  description="Give your customers unmatched flexibility with over 180 domestic and international payment options. Whether they prefer UPI, net banking, credit or debit cards, wallets, or international currencies, EnKash ensures secure and seamless transactions, catering to a global audience and diverse payment preferences."
                  image={shareImage}
                  buttonUrl="/sales/?source=expense_management"
                  maxImageHeight="305px"
                  reverse
                />

                <AllInOnePolicy
                  icon={taskIconThree}
                  title="Zero Coding Required"
                  description="Spend more time growing your business and less time worrying about technical complexities. EnKash’s intuitive platform lets you create and launch fully functional payment pages within minutes, all without any coding knowledge or the need for additional technical resources."
                  image={paymentOptionImage}
                  buttonUrl="/sales/?source=expense_management"
                  maxImageHeight="243px"
                />

                <AllInOnePolicy
                  icon={taskIconFour}
                  title="Optimized for Mobile and Web"
                  description="Ensure a flawless checkout experience on any device. EnKash Payment Pages are meticulously designed to adapt to smartphones, tablets, and desktops, offering customers an engaging and consistent interface that works seamlessly regardless of the device they use."
                  image={notificationImage}
                  buttonUrl="/sales/?source=expense_management"
                  maxImageHeight="259px"
                  reverse
                />

                <AllInOnePolicy
                  icon={taskIconFive}
                  title="Get Real-time Insights"
                  description="Leverage actionable insights with our powerful dashboard. Access real-time transaction data, monitor payment trends, and analyze customer behavior to make strategic business decisions that can drive growth and enhance operational efficiency."
                  image={optimizedIcon}
                  buttonUrl="/sales/?source=expense_management"
                  maxImageHeight="259px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.slider_row} relative`}>
        <div className="max-w-auto">
          <div className={`${styles.title} row`}>
            <div className={`col-md-12 px-md-3`}>
              <DynamicHeading
                content={[
                  {
                    title: "EnKash Payment Pages Features for ",
                    color: "color-black",
                  },
                  {
                    title: "Secure Online Payment",
                    color: "color-equity-blue",
                  },
                ]}
                headingTag="h2"
                className="f-6 text-center"
              />
            </div>
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
          <div className=" text-center">
            <DynamicHeading
              content={[
                {
                  title: "Turn clicks into transactions!",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5 mb-3 "
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

      <div className={`${styles.faq_new_row}  relative`}>
        <div className={`${styles.faqSection} text-start max-w-auto `}>
          <div className={`${styles.title} text-start  pb-md-5 pb-2`}>
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
                  className="mb-0"
                />
              </div>
              <div className="mt-3 d-none d-md-block">
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

      <div className={styles.other_products}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center  pb-4 pb-md-5`}>
            <DynamicHeading
              content={[
                {
                  title: "Check out our ",
                  color: "color-black",
                },
                {
                  title: "other payment products",
                  color: "color-equity-blue",
                },
                {
                  title: " at EnKash",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
          <div className="row g-3 pb-4 ">
            <div className="col-12 col-md-4">
              <ManagementCard
                titleHtml="Payment Gateway"
                description="A no-code solution to effortlessly collect payments across various channels, guaranteeing you never miss a transaction."
                cardImage={paymentGateway}
                linkUrl="/payment-gateway"
              />
            </div>

            <div className="col-12 col-md-4">
              <ManagementCard
                titleHtml="Payment Links"
                description="Collect payments across WhatsApp, SMS, and social media with easy-to-share payment links."
                cardImage={paymentLink}
                linkUrl="/payment-links"
              />
            </div>
            <div className="col-12 col-md-4">
              <ManagementCard
                titleHtml="Payment Button"
                description="Easily integrate a pre-designed payment button into your website with a quick plug-and-play setup."
                cardImage={paymentButton}
                linkUrl="/payment-button"
              />
            </div>

            <div className="col-12 col-md-4">
              <ManagementCard
                titleHtml="QR Codes"
                description="Enable secure, contactless payments with QR codes, allowing businesses to process instant transactions."
                cardImage={qrCodes}
                linkUrl="/qr-codes"
              />
            </div>

            <div className="col-12 col-md-4">
              <ManagementCard
                titleHtml="Auto Collect"
                description="Accept NEFT, RTGS, and IMPS transfers using on-demand customer identifiers with automated reconciliation at scale."
                cardImage={autoCollect}
                linkUrl="/auto-collect"
              />
            </div>

            <div className="col-12 col-md-4">
              <ManagementCard
                titleHtml="Invoices"
                description="Automate invoicing for recurring transactions, monitor sales and payments, and generate bulk invoices with integrated payment links."
                cardImage={invoices}
                linkUrl="/invoices"
              />
            </div>

            <div className="col-12 col-md-4">
              <ManagementCard
                titleHtml="Instant Settlement"
                description="Access your funds immediately, bypass traditional settlement cycles, and take greater control of your cash flow."
                cardImage={instant}
                linkUrl="/instant"
              />
            </div>

            <div className="col-12 col-md-4">
              <ManagementCard
                titleHtml="Reminder Engine"
                description="Automate your collections and say goodbye to manual reminders."
                cardImage={reminder}
                linkUrl="/reminder"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default PaymentPage
