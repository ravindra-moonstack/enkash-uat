"use client"
import Image from "next/image"
import { space } from "@/common/constant"
import styles from "./page.module.scss"
import { allProductSections, cardData } from "./data"
import faqData from "./faq-data"
import { Header, Heading, FAQHtml, Footer } from "@/components"
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
  taskIconFive,
  taskIconSix,
  secureImage,
  invoiceImg,
  optimizedImg,
} from "."

import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import CustomBreadcrumb from "@/components/breadcrumb/breadbrumb"
import LogoSlider from "@/components/logo-slider/logo-slider"
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"
import AllInOnePolicy from "@/components/all-in-one-policy/all-in-one-policy"
import AllProducts from "@/components/all-products/all-products"

const mergedCards = allProductSections.flatMap((section) => section.items)

const PaymentPage = (): React.JSX.Element => {
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
                  name: "Make Payments",
                  url: "/products/make-payments",
                },
              ]}
              linkColor="white"
            />
          </div>
          <div className="col-12 d-flex flex-column text-center">
            <div className="  mt-3 text-center">
              <Heading
                title="The Control Tower for All Your Business Payments."
                color="white"
                size="h2"
                weight="7"
              />
            </div>
            <div>
              <Heading
                title="The Most Powerful Payables Platform for Growing Businesses"
                color="dark-grey"
                size="h5"
                weight="4"
                useH1TagInHtml={true}
              />
            </div>

            <div className="mt-md-5 mt-3">
              <RectangleButton
                title="Talk to Sales"
                theme="blue"
                url="/sales/?source=expense_management"
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

      <div className={styles.second_row}>
        <div className="max-m-auto">
          <div className=" text-center pb-md-5 pb-3">
            <Heading
              title={`Make Business Payments: Faster, Leaner, Smarter. ${space}`}
              color="white"
              size="bannerHeading"
              weight="5"
            />
          </div>
          <div className={`d-flex  flex-wrap  ${styles.section}`}>
            {cardData.map((item, index) => (
              <div
                key={index}
                className={`d-flex flex-column justify-content-center align-items-center ${styles.card}`}
              >
                <Heading
                  title={item.value}
                  color="black"
                  size="h2"
                  weight="7"
                  useH1TagInHtml={true}
                />

                <Heading
                  title={item.title}
                  color="main-grey"
                  size="h6"
                  weight="4"
                  useH1TagInHtml={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row}`}>
        <div className="max-w-auto">
          <div className={`row  ${styles.section}`}>
            <div className={`${styles.title} text-center `}>
              <div className={`d-inline  pb-3`}>
                <Heading
                  title={`Pay Everything. ${space}`}
                  color="black"
                  size="h1"
                  weight="5"
                />
                <Heading
                  title={`On Time. In One Place. `}
                  color="equity-blue"
                  size="h1"
                  weight="5"
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
                buttonUrl="/rental-payments"
                maxImageHeight="305px"
                buttonText="Explore Rental Payments"
                reverse
              />

              <AllInOnePolicy
                icon={taskIconThree}
                title="Never Miss Another Utility Bill Payment"
                description="Never miss a utility payment again. Schedule electricity, internet, phone, and other bills with smart reminders and approvals. EnKash keeps you organized, audit-ready, and always on top of your bills."
                image={paymentOptionImage}
                buttonUrl="/bill-payments"
                buttonText="Explore Bill Payments"
                maxImageHeight="264px"
              />

              <AllInOnePolicy
                icon={taskIconFour}
                title="Disburse Hundreds of Payments in One Click"
                description="Make mass payouts to vendors, freelancers, gig workers, and more — instantly, through your preferred payment mode. Upload once, disburse in one click. It’s payout efficiency, redefined for scale."
                image={notificationImage}
                buttonUrl="/bulk-payouts"
                buttonText="Explore Bulk Payouts"
                maxImageHeight="264px"
                reverse
              />

              <AllInOnePolicy
                icon={taskIconFive}
                title="Make Every GST Tax Payment On Time"
                description="Ensure timely and compliant tax payments without the manual load. Automate GST and statutory dues with proper documentation, built-in checks, and a clear audit trail. Stay compliant and stress-free."
                image={optimizedImg}
                buttonUrl="/gst-payments"
                buttonText="Explore GST Payments"
                maxImageHeight="259px"
              />

              <AllInOnePolicy
                icon={taskIconSix}
                title="Pay Your Teams Right, Every Time"
                description="Disburse salaries accurately and on time, every month. Automate your payroll, track payments, and ensure data integrity — all while giving your teams the peace of mind they deserve."
                image={secureImage}
                buttonUrl="/explore-payroll"
                buttonText="Explore Payroll"
                maxImageHeight="264px"
                reverse
              />

              <AllInOnePolicy
                icon={taskIconSix}
                title="Bring Order to Invoice Chaos"
                description="Disburse salaries accurately and on time, every month. Automate your payroll, track payments, and ensure data integrity — all while giving your teams the peace of mind they deserve."
                image={invoiceImg}
                buttonUrl="/invoice-management"
                buttonText="Explore Invoice Management"
                maxImageHeight="279px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.slider_row} relative`}>
        <div className={`${styles.title} text-center pb-5`}>
          <div className={` pb-3  d-inline`}>
            <Heading
              title={`The EnKash Advantage${space}`}
              color="black"
              size="h1"
              weight="5"
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
            <Heading
              title="Say No To Payment Delays"
              size="bannerHeading"
              color="white"
              weight="4"
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

export default PaymentPage
