import Image from "next/image";
import styles from "./page.module.scss";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "@/constant/common";
import blogData from "./blog-data";
import {
  cardBg,
  faqBg,
  whiteArrow,
  office,
  settingIcon,
  cashAndTime,
  coinIcon,
  officeImg,
  bannerAnimation,
  vendorPayAnimation,
  rentalPayAnimation,
  bulkPayAnimation,
  billPayAnimation,
  taxPayAnimation,
} from ".";
import Heading from "@/components/heading/heading";
import ExploreCard from "@/components/explore-card/explore-card";
import EnkashWay from "@/components/enkash-way/enkash-way";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import MobileHeader from "@/components/header/mobile-header/mobile-header";
import WebHeader from "@/components/header/web-header";
import HowDoesItWork from "@/components/how-does-it-work/how-does-it-work.";
import faqData from "./faqData";
import howDoesItWorkData from "./howDoesItWorkData";
import FAQ from "@/components/faq/faq";
import BlogWrapper from "@/components/blog/blog-wrapper/blog-wrapper";
import ActionCard from "@/components/action-card/action-card";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Payable: Streamline your Outgoing Payments | Enkash",
  description:
    "Streamline Your Accounts Payable Process with Our Expert Service. From Invoice Verification to Timely Payments, Trust Us for Efficient Financial Management. Get Started Today",
};

const payables = () => {
  return (
    <div className={`color-white ${styles.home_container}`}>
      <div className="mobile-header">
        <MobileHeader />
      </div>
      <div className="desktop-header">{<WebHeader />}</div>
      <div className={`${styles.first_row} row color-white`}>
        <div className="col-md-6 col-12 d-flex flex-column">
          <div className="d-flex mb-4">
            <Heading
              title={`olympus${space}`}
              color="rainy-blue"
              size="h1"
              weight="7"
            />
            <Heading title="| payables" size="h1" weight="7" />
          </div>
          <div className="d-iline">
            <Heading
              title={`Streamline all accounts payable${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="on one platform."
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>
          <div className={`mt-4 ${styles.desktop_description}`}>
            <Heading
              title="Pay vendors, utility bills, rental payments, taxes, and more using payment methods of your choice. With EnKash, cost reductions, optimized workflows, and timely payments come to your business naturally"
              color="white"
              size="h6"
              weight="5"
            />
          </div>
          <div className={`mt-4 ${styles.mobile_description}`}>
            <Heading
              title="Pay vendors, utility bills, rental payments, taxes, and more using payment methods of your choice. With EnKash, cost reductions, optimized workflows, and timely payments come to your business naturally"
              color="white"
              size="h5"
              weight="5"
            />
          </div>
          <div className={`my-5 ${styles.button_container}`}>
            <PrimaryButton
              title="EnKash Now"
              theme="theme-blue"
            />
            <span className="mx-2"></span>
            <SecondryButton
              title="Book a Demo"
              actionImage={whiteArrow}
              iconSize={15}
            />
          </div>
        </div>
        <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
          <div className={styles.lottie_container}>
            <LottieClientComponent
              animationData={bannerAnimation}
              loop={true}
            />
          </div>
        </div>
      </div>
      <div className={`${styles.second_row} bg-white row d-flex row-padding`}>
        <HowDoesItWork dataSets={howDoesItWorkData} bannerImage={office} />
      </div>
      <div className={styles.third_row}>
        <div className={`row bg-white ${styles.section}`}>
          <div className="col-md-6 col-12 my-md-5 my-3">
            <ExploreCard
              title="Vendor Payments"
              description="Keep track of all your vendor bills, get automated updates about upcoming payments, and simplify bulk vendor payments with a single click"
              theme="blue"
            />
          </div>
          <div
            className={`col-md-6 col-12 d-flex my-md-5 my-3 d-flex justify-content-end ${styles.first_container}`}
          >
            <Image
              src={cardBg}
              alt="card background"
              className={styles.card_bg}
            />
            <div className={styles.lottie_container}>
              <LottieClientComponent
                animationData={vendorPayAnimation}
                loop={true}
              />
            </div>
          </div>
        </div>
        <div className={`row bg-white ${styles.section}`}>
          <div
            className={`col-md-6 col-12 order-md-1 order-2 d-flex my-md-5 my-3 d-flex justify-content-start  ${styles.second_container}`}
          >
            <Image
              src={cardBg}
              alt="card background"
              className={styles.card_bg}
            />

            <div className={styles.lottie_container}>
              <LottieClientComponent
                animationData={rentalPayAnimation}
                loop={true}
              />
            </div>
          </div>
          <div className="col-md-6 col-12 order-md-2 order-1 my-md-5 my-3 ">
            <ExploreCard
              title="Rental Payments"
              description="Maintain rental records, manage TDS benefits & pay rent for several locations, all on one platform."
              theme="blue"
            />
          </div>
        </div>
        <div className={`row bg-white ${styles.section}`}>
          <div className="col-md-6 col-12  my-md-5 my-3">
            <ExploreCard
              title="Bulk Payouts"
              description="Enable bulk payouts and make payments to vendors, billers & more via payment modes of your choice"
              theme="blue"
            />
          </div>
          <div
            className={`col-md-6 col-12 d-flex my-md-5 my-3 d-flex justify-content-end ${styles.third_container}`}
          >
            <Image
              src={cardBg}
              alt="card background"
              className={styles.card_bg}
            />
            <LottieClientComponent
              animationData={bulkPayAnimation}
              loop={true}
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row row-padding`}>
        <div className="col-md-6 col-12 d-flex mb-5 order-1 order-md-1 justify-content-center">
          <div className={styles.lottie_container}>
            <LottieClientComponent
              animationData={billPayAnimation}
              loop={true}
            />
          </div>
        </div>
        <div className="col-md-6 col-12 mb-md-5 mb-3 order-2 order-md-2 px-md-5">
          <ExploreCard
            title="Bill payments"
            description=" Easily manage recurring bills like utility, electricity, etc"
            theme="green"
          />
        </div>

        <div className="col-md-6 col-12 mt-5 order-4 order-md-3 px-md-5">
          <ExploreCard
            title="Tax Payments"
            description="Ensure an audit-compliant and seamless GST payment process for timely remittance"
            theme="green"
          />
        </div>
        <div className="col-md-6 col-12 d-flex mt-5 order-3 order-md-4 px-md-5">
          <div className={styles.lottie_second_container}>
            <LottieClientComponent
              animationData={taxPayAnimation}
              loop={true}
            />
          </div>
        </div>
      </div>

      <div className="row bg-white row-padding">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
          <div className="d-inline text-center">
            <Heading
              title={`Streamline your accounts payable${space}`}
              size="h1"
              color="black"
              weight="6"
            />
          </div>
        </div>
      </div>

      <div className={`row bg-indi-volt ${styles.fifth_row}`}>
        <div
          className={`d-flex flex-column flex-md-row tex-center justify-content-evenly  ${styles.container}`}
        >
          <div className="md:mb-0 mb-4 text-md-center">
            <Image src={coinIcon} alt="coins icon" className="md:mb-0 mb-4" />
            <div className="d-flex flex-md-column flex-row">
              <Heading title="Cost" size="h5" color="white" weight="7" />
              <Heading
                title={`${space}reduction`}
                size="h5"
                color="white"
                weight="7"
              />
            </div>
          </div>
          <div className="mb-4 text-md-center">
            <Image src={settingIcon} alt="regulation icon" className="mb-4" />
            <div className="d-flex flex-md-column flex-row">
              <Heading title="Optimized" size="h5" color="white" weight="7" />
              <Heading
                title={`${space}workflow`}
                size="h5"
                color="white"
                weight="7"
              />
            </div>
          </div>
          <div className="mb-4 text-md-center">
            <Image
              src={cashAndTime}
              alt="cash and coin icon"
              className="md:mb-0 mb-4"
            />
            <div className="d-flex flex-md-column flex-row">
              <Heading title="Timely" size="h5" color="white" weight="7" />
              <Heading
                title={`${space}payments`}
                size="h5"
                color="white"
                weight="7"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.sixth_row} row d-flex bg-white row-padding`}>
        <EnkashWay
          progressData={[
            {
              itemArray: ["Data Entry", "Techniques"],
              oldWayDescription:
                "Manual invoice processing and data entries are time-consuming, error-prone, and can result in delayed payments",
              newWayDescription:
                "Automate vendor onboarding, check incoming invoices, and get approvals to help reduce manual efforts and save time and money",
            },
            {
              itemArray: ["Process &", "Hierarchy"],
              oldWayDescription:
                "Traditional payment in accounting processes requires contacting multiple POCs, which can be time-consuming",
              newWayDescription:
                "Set up online approval matrices with an accounts payable automation platform, which enables easy approvals in just a few clicks",
            },
            {
              itemArray: ["Risk &", "Errors"],
              oldWayDescription:
                "Manual data entries cause errors in the reconciliation process. It can lead to discrepancies in accounting records, making the reconciliation process time-consuming and challenging",
              newWayDescription:
                "Automating data entry and receipt management can eliminate errors, improve accuracy, and save time during the reconciliation process",
            },

            {
              itemArray: ["Bulk Vendor", "Payments"],
              oldWayDescription:
                "Making vendor payments individually causes unnecessary delays",
              newWayDescription:
                "Make bulk payouts to vendors and billers with a single-click OTP system",
            },
          ]}
        />
      </div>
      <div
        className={`row d-flex bg-white row-padding-top-none ${styles.seventh_row}`}
      >
        <ActionCard
          mainTitle={
            <>
              <div className="d-flex flex-column">
                <Heading title="Complete" color="white" size="h1" weight="5" />
                <Heading
                  title="Transparency"
                  color="electric-green"
                  size="h1"
                  weight="5"
                />
              </div>
            </>
          }
          mainImage={officeImg}
          description="Gain control over your business spends with a complete overview of all your expenses. Analyze data to create efficient budgets, optimize expenses and increase your savings."
        />
      </div>

      <div className="bg-white row-padding d-flex justify-content-center">
        <div className="ps-md-5 scroll_container d-flex pb-4">
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Faster & Accurate Payments"
              description="Automating the payables process fastens it by eliminating manual intervention. It also reduces the chances of errors"
              ctaColor="blue"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              titleHtml={
                <>
                  <Heading
                    title="Spend"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="visibility"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </>
              }
              description="A centralized view of the business spend trends can be checked on the same dashboard"
              ctaColor="blue"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Remote Operations"
              description="Teams from different locations can access and share files from anywhere and process payments easily"
              ctaColor="blue"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Effective invoice & vendor management"
              description="Easily upload vendor invoices, do vendor KYC and review vendor performance to manage them better"
              ctaColor="blue"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Early payment discount"
              description="Set payment reminders and make vendor payments early to avail trade discount"
              ctaColor="blue"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Streamlining approval workflows"
              description="A streamlined approval process can significantly reduce processing time and minimize the risk of delayed payments"
              ctaColor="blue"
            />
          </div>
        </div>
      </div>

      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper blogData={blogData} title="Payables Insights" />
      </div>

      <div
        className={`${styles.eigth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions ?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs Section will Help you Learn about Accounts Payables in detail."
            color="black"
            size="h4"
          />
        </div>

        <div>
          {faqData.map((item, index) => (
            <FAQ
              key={index}
              question={item.question}
              answer={item.answer}
              answerVisible={index === 0}
            />
          ))}
        </div>
        <div className={styles.faq_bg}>
          <Image src={faqBg} alt="background image" />x
        </div>
      </div>

      <div className={`row ${styles.ninth_row} bg-equity-blue`}>
        <div className="d-flex justify-content-evenly align-items-center">
          <Heading
            title="Have Questions about Payables?"
            size="h3"
            color="white"
          />
          <div>
            <PrimaryButton
              title="Know More"
              theme="theme-black"
            />
          </div>
        </div>
      </div>

      <div className="row">
        <ContactUsCard
          title="Learn about account payables automation for enhanced efficiency"
          description="Accounts payable automation is the process by which a business pays its suppliers, service providers, and vendors online"
        />
      </div>
      <div className="row">
        <ComprehensiveView
          title="Explore the comprehensive guide"
          innerHtml={
            <>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What is accounts payable automation?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Accounts payable automation means using technology to make business payments, which include vendor payments, rental payments, bill payments, tax payments, and utility payments. Accounts payable automation helps make business payments easy and efficient."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What is accounts payable process?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The accounts payable process in most businesses starts with the request to source a vendor or supplier to provide either goods or services."
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Vendor evaluation, assessment of landlords and service
                    providers
                  </li>
                  <li>
                    Onboard vendors, add rental properties, register utility
                    providers, and more
                  </li>
                  <li>
                    Start the process of obtaining goods and the start of
                    services
                  </li>
                  <li>
                    Collect all the bills and invoices for payments due when the
                    time for payment is due
                  </li>
                  <li>
                    Check if the invoices, bills, and rent amounts due are
                    correct
                  </li>
                  <li>
                    Complete the payments to utilities, vendors, rentals, etc.,
                    after checks and approvals
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the benefits of accounts payable automation"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The benefits of accounts payable automation include:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Reduced prices and on-time payment rebates due to long-term
                    contracts and better negotiation
                  </li>

                  <li>
                    Better productivity of the finance team as accounts payable
                    automation reduces the amount of mundane manual work
                  </li>

                  <li>
                    Streamlined spend and better audit preparation due to the
                    approval matrices and checks in place
                  </li>

                  <li>
                    Increased ability to meet the needs of internal and external
                    customers
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What is an accounts payable invoice?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="An accounts payable invoice is a bill raised for the goods or services your company has availed. In most instances, it is a continued service or purchase that occurs at regular intervals rather than a singular purchase. Accounts payable invoices are raised once the agreed-upon credit period agreed upon comes to an end, and the payment becomes due."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="An ideal accounts payable invoice contains details like the name, address, and other details of the vendor or supplier. It also includes the order number or ID to ensure that you can trace it back to get the payment process started. The invoice also includes documents like goods received acknowledgment as proof of delivery completion."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The accounts payable invoice has details of any changes to the order in terms of quality and quantity. Once these details are covered, the invoice will state the rate agreed upon, the quantity delivered, and the total amount due. Details like service charges, GST, and other taxes can also be added."
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The accounts payable invoice also includes details on how to make the payment, like the bank name, name of the bank account holder, bank account number, the IFSC code, and the various options to complete the payment. Businesses can use accounts payable invoice automation with a payment link to speed up the process of completing payment."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What is the invoice management process?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="the invoice management process involves various steps. It starts with retrieving invoices from vendors, collecting bills from utility providers and rental dues, and then parsing the invoice or bills for details to confirm it is correct. After this, the invoice, bill, or payment request is sent to the department, which requests to confirm that the goods or services were received or services used as stated in the bill or invoice."
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="In case of any discrepancies, a request is made to change the amount due on the invoice. Once all the details are settled, a final check is made, a payment approval request is raised, and once approved, payment is made. After the payment, proof of payment and invoice is filed with the order reference numbers in place, along with the approval trail for future reference."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h4"
                  color="black"
                  weight="4"
                  title="What is the relationship between cash flow and accounts payable?"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Accounts payable relates to all the short-term payment
                    obligations a business has, which results in the outflow of
                    funds from a business, impacting the cash flow
                  </li>

                  <li>
                    Businesses can optimize their accounts payable rebates from
                    vendors on purchases, which can positively impact the cash
                    flow
                  </li>

                  <li>
                    The accounts payable process constitutes proper negotiation,
                    and the ability to negotiate prices has a positive impact on
                    cash flow
                  </li>

                  <li>
                    Businesses can establish credit terms in the accounts
                    payable process, and this can help optimize their cash flow
                  </li>
                </ul>
              </div>
            </>
          }
        />
      </div>
    </div>
  );
};

export default payables;
