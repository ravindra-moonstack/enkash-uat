import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../../../common/constant";
import faqData from "./faq-data";
import blogData from "./blog-data";
import carouselData from "./carousel-data";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import EnkashWay from "@/components/enkash-way/enkash-way";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import BlogWrapper from "@/components/blog/blog-wrapper";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import { Metadata } from "next";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import FAQHtml from "./faq-html";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "GST Payment - GST Bill Payment Online for Businesses | EnKash",
  description:
    "Simplify GST Payment and Bill Payment Online - Seamlessly manage your GST payments and bills with our convenient online platform. Save time, stay compliant, and experience hassle-free transactions.",
  alternates: {
    canonical: "https://www.enkash.com/olympus/payables/gst-payments/",
  },
};

const taxPayments = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <Header utmSource="payables" />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div className="d-flex">
              <Heading
                title={`Olympus |${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
            <Heading title="GST Payments" size="h4" weight="4" useH1TagInHtml={true}/>
          </div>

          <div className="">
            <div className="d-flex flex-wrap">
              <Heading
                title={`Make GST payments with complete${space}`}
                color="white"
                size="h2"
                weight="7"
              />
              <Heading
                title="visibility and approvals"
                color="rainy-blue"
                size="h2"
                weight="7"
              />
            </div>
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Enable quicker GST challan payment on time every time with an optimized process and easy approvals via EnKash"
              color="white"
              size="h6"
              weight="5"
            />
          </div>
          <div className="my-5 d-flex flex-row justify-content-start align-items-center">
            <div className="me-2">
              <PrimaryButton
                title="EnKash Now"
                theme="blue"
                url="https://home.enkash.com/signup?utm_source=payables"
              />
            </div>
            <div>
              <SecondryButton
                title="Book a Demo"
                actionImage={whiteArrow}
                iconSize={15}
                url="/sales/?source=payables"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div className={styles.lottie_container}>
            <LottieClientComponent animationData={bannerLottie} loop={true} />
          </div>
        </div>
        <div className={styles.three_step_container}>
          <ThreeSteps />
        </div>
      </div>

      <div className={`${styles.second_row} row d-flex bg-white row-padding`}>
        <EnkashWay
          progressData={[
            {
              itemArray: ["Timely", "Payments"],
              oldWayDescription:
                "Traditionally, there was a high chance of missing the payment deadline as there was no way to get reminders on time.",
              newWayDescription:
                "Set a reminder for tax payments to make sure it is paid on time.",
            },
            {
              itemArray: ["Approval", "Process"],
              oldWayDescription:
                "Manually prepare paperwork to get approval from the concerned person, often leading to late payment.",
              newWayDescription:
                "Customize maker checker approver as per your organization’s needs and get payment approvals in no time.",
            },
            {
              itemArray: ["Payment", "Method"],
              oldWayDescription:
                "Earlier businesses had to use their working capital or arrange funds externally to make the payment.",
              newWayDescription:
                "With EnKash, make GST payments using flexible payment methods, including your credit card.",
            },
            {
              itemArray: ["Record", "Keeping"],
              oldWayDescription:
                "Traditionally, businesses had to maintain a stack of paper-based GST payment receipts, making auditing and reconciliation difficult.",
              newWayDescription:
                "Easily view all your previous GST payment receipts in a single dashboard, making it easy to audit and reconcile.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading
            title="Leverage EnKash for"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}automatic and easy${space}`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading title="GST payments" color="black" size="h1" weight="6" />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Easy"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Payments"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              source="payables"
              description=" Set and manage a simple and intuitive process to ensure that all aspects are checked and payments are quick and easy"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Easy Monitoring"
              description="Benefit from centralized view and control over all GST bill payments across your company on a single platform"
              source="payables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Digital"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Challans"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              source="payables"
              description="Auto read the challans and convert them into paper records for audits and other purposes"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Approval"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Flow"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              source="payables"
              description="Ensure checks and approvals are in place for valid spending, the proper audit trail, and close books quickly. This will help you 
              prevent errors, unauthorized payments and reduce the risk of fraud"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <div className="text-center d-flex flex-column">
                  <Heading
                    title={`Paying GST has never been this${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="easy and convenient"
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                </div>
              </div>
            </>
          }
          mainTitle="How does it work?"
          carouselData={carouselData}
          carouselBg={caraouselBg}
        />
      </div>
      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how GST payments can revolutionize the way you work!"
        />
      </div>

      <div
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs section will help you learn about gst payments in detail"
            color="black"
            size="h4"
          />
        </div>

        <div>
          <FAQHtml faqData={faqData} />
        </div>

        <div className={styles.faq_bg}>
          <Image src={faqBg} alt="background image" />x
        </div>
      </div>

      <div className={`${styles.sixth_row} row`}>
        <ContactUsCard
          title="Seeking further understanding of GST payment online?"
          description="GST, or Goods and Services Tax, is an indirect tax implemented to consolidate many excise duties, VAT,  and other indirect taxes. GST is applicable at every level at which the sale occurs."
          source="payables"

        />
      </div>
      <div className={`${styles.seventh_row} row`}>
        <ComprehensiveView
          title="Explore our comprehensive guide"
          innerHtml={
            <>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Explain the types of taxpayers and their GST payment process"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="All taxpayers are bound to follow the same GST payment process. However, there are various types of taxpayers:"
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Regular Taxpayers"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="These taxpayers use the PMT-06 challan to pay GST while filing GSTR-3B. A challan can be created and paid for while filing GSTR-3B returns."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Quarterly Taxpayers"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="All those who have opted for the Quarterly Returns with Monthly Payment (QRMP) scheme under GST come under this category of taxpayers. They deposit the tax in the initial two months of the quarter using the PMT-6 and pay while filing GSTR-3B for the third month of the quarter."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Nil GST returns Taxpayers"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="This category of taxpayers has no taxes to pay for the tax period, and they don’t use the challan to make the payment."
                />
              </div>

              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Composition Taxpayers"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="These taxpayers must summarize their sales/turnover details for the quarter in challan CMP-08 and make tax payments."
                />
              </div>

              {/* divide */}

              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="What are the steps to create a challan without portal login?"
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Follow the steps below to create a challan without logging into the GST portal"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Go to{space}
                    <a href="https://www.gst.gov.in/" target="_blank">
                      https://www.gst.gov.in/
                    </a>
                  </li>
                  <li>Navigate to the Services tab</li>
                  <li>Select Payments and click on Create Challan</li>
                  <li>Enter GSTIN in the provided field</li>
                  <li>Input the captcha code and click Proceed</li>
                  <li>
                    Choose monthly or quarterly payment reason and select the
                    desired period for challan creation
                  </li>
                  <li>Click on self-assessment challan or 35% and proceed</li>
                  <li>
                    Challan amount details auto-fill with previous tax payments
                    (You can click on edit reason only if you have logged into
                    the portal)
                  </li>
                  <li>
                    Follow the steps for offline or online payment and re-enter
                    GSTIN to proceed further
                  </li>
                </ul>
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="What are the steps to generate a GST challan after portal login?"
                />
              </div>
              <div className="mb-2">
                <ul>
                  <li>
                    Visit{" "}
                    <a href="https://www.gst.gov.in/" target="_blank">
                      https://www.gst.gov.in/
                    </a>{" "}
                    to access the GST portal
                  </li>
                  <li>Log in with your username, password, captcha, and OTP</li>
                  <li>Navigate to Services → Payments → Create Challan</li>
                  <li>
                    Choose the reason: Monthly Payment for Quarterly return
                    (QRMP scheme) or Any Other Payment
                  </li>
                  <li>
                    Select the financial period for the return. Opt for 35%
                    Challan or Self-Assessment basis
                  </li>
                  <li>
                    Challan Amount Details auto-fill with tax paid via Form GSTR
                    3B
                  </li>
                  <li>
                    Save the challan for edits (not applicable with 35% scheme)
                  </li>
                </ul>
              </div>

              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The saving of challan is only possible if you have logged into the official GST portal"
                />
              </div>

              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="What are the time constraints for filing the returns of the GST Payment?"
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The various types of GST Return Forms have different due dates for filing the returns."
                />
              </div>
              <div className="mb-5">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th>Return Form</th>
                      <th>Due Date</th>
                    </tr>
                    <tr>
                      <td>GSTR-1</td>
                      <td>11th of the next month</td>
                    </tr>
                    <tr>
                      <td>IFF</td>
                      <td>13th of the next month</td>
                    </tr>
                    <tr>
                      <td>GSTR-3B</td>
                      <td>
                        20th of the next month For QRMP it is 22nd or 24th of
                        the month succeeding the quarter
                      </td>
                    </tr>

                    <tr>
                      <td>CMP-08</td>
                      <td>18th of the month succeeding the quarter</td>
                    </tr>
                    <tr>
                      <td>GSTR-4</td>
                      <td>30th of the month succeeding a financial year</td>
                    </tr>
                    <tr>
                      <td>GSTR-5</td>
                      <td>20th of the next month</td>
                    </tr>
                    <tr>
                      <td>GSTR-5A</td>
                      <td>20th of the next month</td>
                    </tr>
                    <tr>
                      <td>GSTR-6</td>
                      <td>13th of the next month</td>
                    </tr>
                    <tr>
                      <td>GSTR-7</td>
                      <td>10th of the next month</td>
                    </tr>
                    <tr>
                      <td>GSTR-8</td>
                      <td>10th of the next month</td>
                    </tr>
                    <tr>
                      <td>GSTR-9</td>
                      <td>31st December of the next financial year</td>
                    </tr>
                    <tr>
                      <td>GSTR-9C</td>
                      <td>31st December of the next financial year</td>
                    </tr>
                    <tr>
                      <td>GSTR-10</td>
                      <td>Within three months of the date of cancellation</td>
                    </tr>
                    <tr>
                      <td>GSTR-11</td>
                      <td>
                        28th of the month after the month for which the
                        statement is filed
                      </td>
                    </tr>
                    <tr>
                      <td>ITC-04</td>
                      <td>
                        25th April (AATO up to Rs.5 crore)
                        <br />
                        25th October and 25th April (AATO exceeds Rs.5 crore)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="What is the timeframe for net banking transactions?"
                />
              </div>

              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="If you are making the payments online, you have access to it around the clock but if you want transaction for the same day, it is better to time your payments between 08:00 am to 08:00 pm."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="What are the different types of GST forms?"
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="A Comprehensive List of Forms:"
                />
              </div>
              <div className="mb-5">
                {" "}
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th>Form</th>
                      <th>Purpose</th>
                    </tr>
                    <tr>
                      <td>Form GST PMT-01</td>
                      <td>To maintain the electronic tax liability register</td>
                    </tr>
                    <tr>
                      <td>Form GST PMT-02</td>
                      <td>For maintaining the electronic credit ledger</td>
                    </tr>
                    <tr>
                      <td>Form GST PMT-03</td>
                      <td>
                        <p>This includes the following:</p>
                        <p>
                          - Order of rejection for refund of balance in
                          electronic ledger
                        </p>
                        <p>
                          - Electronic cash ledger that is issued by an
                          authorized personnel
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Form GST PMT-04</td>
                      <td>
                        To communicate if there is any discrepancy in your
                        electronic credit ledger
                      </td>
                    </tr>
                    <tr>
                      <td>Form GST PMT-05</td>
                      <td>To maintain the electronic cash ledger</td>
                    </tr>
                    <tr>
                      <td>Form GST PMT-06</td>
                      <td>
                        This includes the challan for paying tax, interest,
                        fees, penalty, or other related amounts
                      </td>
                    </tr>
                    <tr>
                      <td>Form GST PMT-07</td>
                      <td>
                        This form can be used to communicate if the bank account
                        has been debited but CIN is not generated or if the CIN
                        has been generated but not reflected in the GST portal
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="payables" />
    </div>
  );
};

export default taxPayments;
