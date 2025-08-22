import styles from "./page.module.scss"
import { allProductSections, cardData } from "./data"
import faqData from "./faq-data"
import {
  DynamicHeading,
  LogoSlider,
  CustomBreadcrumb,
  RectangleButton,
  AllInOnePolicy,
  AllProducts,
  LottieDynamicLoadComponent,
  FaqSection,
} from "@/components"
import {
  blueArrow,
  whiteArrow,
  paymentLinkImage,
  shareImage,
  paymentOptionImage,
  notificationImage,
  taskIconOne,
  taskIconTwo,
  taskIconThree,
  taskIconFour,
  taskIconFive,
  taskIconSix,
  secureImage,
  invoiceImg,
  optimizedImg,
} from "."
import { Metadata } from "next"
import generateMetaData from "@/common/utils/metaData"
import { getSalesUrl } from "@/common/utils/getSalesUrl"

export const metadata: Metadata = generateMetaData({
  title: "Fast, Easy and Secure Business Payments with EnKash",
  description:
    "Simplify vendor, utility, and tax payments with EnKash. Make fast, secure payouts via UPI, cards, or bank transfers—all from one powerful payment dashboard.",
  alternates: {
    canonical: "https://www.enkash.com/make-payments/",
  },
})
const salesUrl = getSalesUrl("/make-payments")
const mergedCards = allProductSections.flatMap((section) => section.items)

const PaymentPage = (): React.JSX.Element => {
  return (
    <div className={`color-white ${styles.home_container}`}>
      <div className={`${styles.first_row}`}>
        <div className="max-w-auto">
          <div className="d-flex">
            <CustomBreadcrumb
              items={[
                { name: "Home", url: "/" },
                { name: "Products", url: "/products" },
                {
                  name: "Make Payments",
                  url: "/products/make-payments",
                },
              ]}
              linkColor="white"
            />
          </div>
          <div className="col-12 d-flex flex-column text-center">
            <div className="  mt-3 text-center mb-2">
              <DynamicHeading
                content={[
                  {
                    title: "The Control Tower for All Your Business Payments",
                    color: "color-white ",
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
                      "The Most Powerful Payables Platform for Growing Businesses",
                    color: "color-dark-grey subHeading",
                  },
                ]}
                headingTag="p"
                className="f-4"
              />
            </div>

            <div className="mt-md-5 mt-3 mb-3 mb-md-0">
              <RectangleButton
                title="Talk to Us"
                theme="blue"
                url={salesUrl}
              />
            </div>
          </div>
          <div className=" col-12">
            <div className={styles.lottie_container}>
              <LottieDynamicLoadComponent
                animationName={"MakePaymentAnimationLottie"}
                loop={true}
              />
            </div>
          </div>
        </div>
        <div>
          <LogoSlider />
        </div>
      </div>

      <div className={styles.second_row}>
        <div className="max-m-auto">
          <div className=" text-center pb-md-4 pb-3">
            <DynamicHeading
              content={[
                {
                  title: "Make Business Payments Faster, Leaner & Smarter",
                  color: "color-white ",
                },
              ]}
              headingTag="h3"
              className="f-5"
            />
          </div>
          <div className={`d-flex  flex-wrap  ${styles.section}`}>
            {cardData.map((item, index) => (
              <div
                key={index}
                className={`d-flex flex-column justify-content-center align-items-center ${styles.card}`}
              >
                <DynamicHeading
                  content={[
                    {
                      title: item.value,
                      color: "color-black ",
                    },
                  ]}
                  headingTag="h2"
                  className="f-7 fs-48"
                />
                <DynamicHeading
                  content={[
                    {
                      title: item.title,
                      color: "color-main-grey ",
                    },
                  ]}
                  headingTag="h6"
                  className="f-4 text-center d-block"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row}`}>
        <div className="max-w-auto">
          <div className={` ${styles.section}`}>
            <div className={`row gap-3`}>
              <div className={`${styles.title} text-center pb-md-5 pb-4`}>
                <div className={``}>
                  <DynamicHeading
                    content={[
                      {
                        title: "Pay Everything.",
                        color: "color-black ",
                      },
                      {
                        title: "On Time. In One Place.",
                        color: "color-equity-blue ",
                      },
                    ]}
                    headingTag="h2"
                    className="f-5 "
                  />
                </div>
              </div>

              <div className={styles.allInOnePolicy}>
                <AllInOnePolicy
                  icon={taskIconOne}
                  title="Take Control of Every Vendor Payment"
                  description="Simplify vendor payments by uploading invoices, setting approvals, and scheduling disbursals — all from one dashboard. Say goodbye to fragmented workflows, delays, and reconciliation hassles. You’re in control, start to finish."
                  image={paymentLinkImage}
                  buttonUrl="/vendor-payment"
                  maxImageHeight="264px"
                  buttonText="Explore Vendor Payments"
                />

                <AllInOnePolicy
                  icon={taskIconTwo}
                  title="Manage All Your Rents Without Lifting a Finger"
                  description="Manage and track rental payments across locations with automated TDS handling, complete records, and seamless scheduling. Free yourself from spreadsheets and stay compliant without chasing paperwork or due dates."
                  image={shareImage}
                  buttonUrl="/rent-payment"
                  maxImageHeight="305px"
                  buttonText="Explore Rental Payments"
                  reverse
                />
                <AllInOnePolicy
                  icon={taskIconThree}
                  title="Never Miss Another Utility Bill Payment"
                  description="Never miss a utility payment again. Schedule electricity, internet, phone, and other bills with smart reminders and approvals. EnKash keeps you organized, audit-ready, and always on top of your bills."
                  image={paymentOptionImage}
                  buttonUrl="/utility-bill-payment"
                  buttonText="Explore Bill Payments"
                  maxImageHeight="264px"
                />

                <AllInOnePolicy
                  icon={taskIconFour}
                  title="Disburse Hundreds of Payments in One Click"
                  description="Make mass payouts to vendors, freelancers, gig workers, and more — instantly, through your preferred payment mode. Upload once, disburse in one click. It’s payout efficiency, redefined for scale."
                  image={notificationImage}
                  buttonUrl="/bulk-pay"
                  buttonText="Explore Bulk Payouts"
                  maxImageHeight="264px"
                  reverse
                />

                <AllInOnePolicy
                  icon={taskIconFive}
                  title="Make Every GST Tax Payment On Time"
                  description="Ensure timely and compliant tax payments without the manual load. Automate GST and statutory dues with proper documentation, built-in checks, and a clear audit trail. Stay compliant and stress-free."
                  image={optimizedImg}
                  buttonUrl="/gst-payment"
                  buttonText="Explore GST Payments"
                  maxImageHeight="259px"
                />

                <AllInOnePolicy
                  icon={taskIconSix}
                  title="Pay Your Teams Right, Every Time"
                  description="Disburse salaries accurately and on time, every month. Automate your payroll, track payments, and ensure data integrity — all while giving your teams the peace of mind they deserve."
                  image={secureImage}
                  buttonUrl="/payroll"
                  buttonText="Explore Payroll"
                  maxImageHeight="264px"
                  reverse
                />

                <AllInOnePolicy
                  icon={taskIconSix}
                  title="Bring Order to Invoice Chaos"
                  description="Digitize, validate, and approve invoices without the chaos. Cut down processing time, reduce errors, and gain full visibility with smart workflows tailored to your accounts payable process."
                  image={invoiceImg}
                  buttonUrl="/invoice-management"
                  buttonText="Explore Invoice Management"
                  maxImageHeight="279px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.slider_row} relative`}>
        <div className={`${styles.title} text-center `}>
          <div className={``}>
            <DynamicHeading
              content={[
                {
                  title: "The EnKash Advantage",
                  color: "color-black ",
                },
              ]}
              headingTag="h2"
              className="f-5"
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
          <div className="text-center">
            <DynamicHeading
              content={[
                {
                  title: "Say No To Payment Delays",
                  color: "color-white ",
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
              url={salesUrl}
            />
          </div>
        </div>
      </div>

      <FaqSection faqData={faqData} />
    </div>
  )
}

export default PaymentPage
