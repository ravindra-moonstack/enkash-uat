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
import FAQ from "@/components/faq/faq";
import BlogWrapper from "@/components/blog/blog-wrapper";
import Header from "@/components/header/header";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import { Metadata } from "next";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import FAQHtml from "./faq-html";

export const metadata: Metadata = {
  title: "Vendor Payment – Automated Multiple Vendor Payment | EnKash",
  description:
    "Explore how our vendor payment solutions streamline transactions, improve financial control, and enhance supplier relationships. Discover the ease and effectiveness of managing vendor payments",
};

const vendorPayment = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <Header />
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
            <Heading title="Vendor Payment" size="h4" weight="4" />
          </div>
          <Heading
            title={`Transform your business today with automated${space}`}
            color="white"
            size="h2"
            weight="7"
          />

          <div className="d-line">
            <Heading
              title="vendor payments"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Make vendor payments seamlessly with a single click and get complete control with real-time updates"
              color="white"
              size="h6"
              weight="5"
            />
          </div>
          <div className="my-5 d-flex flex-row justify-content-start align-items-center">
            <div className="me-2">
              <PrimaryButton
                title="EnKash Now"
                theme="theme-blue"
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
              itemArray: ["Data", "Entry"],
              oldWayDescription:
                "Manual data entry delays the entire payment process.",
              newWayDescription:
                "Saves time and money by processing all invoices digitally.",
            },
            {
              itemArray: ["Approval", "Workflows"],
              oldWayDescription:
                "Scattered process to track approval of invoices via emails or verbally.",
              newWayDescription:
                "Streamlined process with defined roles like maker, checker, and approvers.",
            },
            {
              itemArray: ["Risk and", "Errors"],
              oldWayDescription:
                "Difficult to catch errors and discrepancies in each invoice.",
              newWayDescription:
                "Low or zero chances of errors in invoices due to automation.",
            },
            {
              itemArray: ["Bulk", "Payments"],
              oldWayDescription:
                "Manual intervention for bulk payments and limited payment options.",
              newWayDescription: "Make bulk vendor payments with a single OTP.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row} row d-flex bg-white row-padding-x-only`}
      >
        <div className="text-center mb-5">
          <div className="d-inline">
            <Heading title="We ensure" color="black" size="h1" weight="6" />
            <Heading
              title={`${space}fast, easy, and safe${space}`}
              color="equity-blue"
              size="h1"
              weight="6"
            />
            <Heading
              title="vendor payments"
              color="black"
              size="h1"
              weight="6"
            />
          </div>
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Vendor"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="KYC"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Collect and verify essential information about your vendors and suppliers before onboarding them onto the platform to ensure hassle-free transactions"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Bank Account Validation"
              description="Validate the bank account details of the vendors by using the penny-drop method before processing transactions to prevent payment errors"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Multi-Branch Payments"
              description="Simplify vendor payments across multiple branches with a single click, while maintaining transparency through real-time updates on approvals and notifications via a centralized dashboard"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="PO Management"
              description="Hassle-free PO (Purchase Order) management against the invoices on a single dashboard"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Automated Reminders"
              description="Make sure that all vendor payments are processed on time and without errors. Get automated reminders to track outstanding vendor payments"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Seamless Integration"
              description="Seamless integration with your existing ERP system and banking partners for smooth vendor payments"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Virtual"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Cards"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Access to a virtual card for payment decentralization/ branch payments/department-wise payments"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <div className="text-center d-inline flex-column">
                  <Heading
                    title={`Secure and hassle-free${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="vendor payments"
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                </div>
                <div>
                  <Heading
                    title="every single time"
                    color="white"
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
          title="Learn how our vendor payments platform can revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about vendor payment in detail"
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
          title="Seeking further understanding of vendor payments?"
          description="Vendor payments are accounts payable or invoices to pay, which refer to compensating suppliers for the goods or services they provide to your business. Maintaining a good relationship with your suppliers while ensuring you don’t have responsibilities for an extended time is possible by managing your vendor payments methodically and timely. This keeps businesses of all kinds running as efficiently & effectively as possible."
        />
      </div>
      <div className={`${styles.seventh_row} row`}>
        <ComprehensiveView
          title="Explore our comprehensive guide."
          innerHtml={
            <>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What is a vendor in accounts payable?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="In Accounts Payable (AP), a vendor refers to a person, business, or entity from whom a company purchases goods or services. A vendor can be an individual, a company, a supplier, or a service provider that supplies products or services required for the company's operations. Vendors play a crucial role in the procurement and supply chain process of a business. Timely payment to suppliers is crucial for maintaining good credit terms and sustaining a healthy supply chain."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Why do businesses need to streamline vendor payments?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Businesses need to streamline their vendor payments to:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Ensure their payments are quick, accurate, and made on time
                  </li>
                  <li>
                    Establish a rapport in the industry with timely vendor
                    payments
                  </li>
                  <li>Improve vendor relations in the longer run</li>
                  <li>
                    Pay before the due date and avail trade discount, if both
                    parties agree
                  </li>
                </ul>
              </div>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What issues arise from a poor vendor payment system?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="A poor vendor payment system can lead to several issues that can significantly impact a company's operations. Some of the common issues are:"
                />
              </div>
              <div className="mb-2 d-inline">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Late payments:"
                  />
                </div>
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Delays in processing and making payments to vendors can lead to strained vendor relationships and potential disruptions in the supply chain."
                />
              </div>
              <br />
              <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Inaccuracies and discrepancies:"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Errors in payment amounts, duplicate payments, or incorrect payment details can lead to financial inaccuracies and reconciliation challenges."
                />
              </div>
              <br /> <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Cash flow challenges"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Inadequate cash flow management due to inconsistent or delayed payments can potentially affect the company's ability to meet its financial obligations."
                />
              </div>
              <br /> <br />
              <div className="mb-5 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Operational inefficiencies:"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Wasted time and resources spent on manual and inefficient payment processing, including duplicate data entry, approval delays, and manual reconciliation efforts."
                />
              </div>
              <br /> <br /> <br />
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title=" What are the various functions of the vendor payment module?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The vendor payment module is designed to streamline and manage the end-to-end vendor payment process efficiently. Here are the various functions typically associated with a vendor payment module:"
                />
              </div>
              <div className="mb-2 d-inline">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Adding your vendor:"
                  />
                </div>
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The first and foremost step in the vendor payment module is to add the vendor to the portal."
                />
              </div>
              <br />
              <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Invoice verification:"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Validates and verifies vendor invoices against purchase orders, contracts, or other agreements to ensure accuracy and authenticity."
                />
              </div>
              <br /> <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Payment authorization and approval:"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Facilitates the approval workflow for vendor payments, ensuring that authorized personnel review and approve payments in accordance with company policies."
                />
              </div>
              <br /> <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Payment scheduling:"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Allows for the scheduling of vendor payments based on agreed-upon payment terms, ensuring timely and accurate disbursement of funds to vendors."
                />
              </div>
              <br /> <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Payment processing:"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Initiates the actual payment transactions using selected payment methods, such as electronic transfers, net banking, or credit cards."
                />
              </div>
              <br /> <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Bank reconciliation:"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Integrates with bank statements and reconciles payments made with bank transactions, minimizing errors and discrepancies in financial records."
                />
              </div>
              <br></br>
              <br /> <br />
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What payment modes can I use for vendor payments?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="You can use a virtual card to make quick, easy, and reliable vendor invoice payments. As soon as you register on the platform, you will get access to a virtual card with an account number."
                />
              </div>
              <div className="mb-2 d-inline">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Cheque Payments:"
                  />
                </div>
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="These are traditional and widely used and can be mailed or handed directly to the vendor. Moreover, it requires manual processing and may have longer processing times."
                />
              </div>
              <br /> <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="National Electronic Funds Transfer (NEFT):"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title=" Directly transfers funds from your bank account to the vendor's bank account and is faster and more efficient than cheques. These are most commonly used for recurring vendor payments."
                />
              </div>
              <br />
              <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Credit Card Payments:"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="It allows vendor payment through credit cards and provides convenience and potential rewards (e.g., cashback, reward points). Not only this, there’s another best option available, i.e., making vendor payments through Corporate Cards that come with a simplified onboarding process, complete transparency, and so much more, offering cash flow management seamlessly."
                />
              </div>
              <br /> <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Virtual Card Payments:"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="You can use a virtual card to make quick, easy, and reliable vendor invoice payments. As soon as you register on the platform, you will get access to a virtual card with an account number."
                />
              </div>
              <br />
              <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Real Time Gross Settlement (RTGS):"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="It enables real-time funds transfer from one bank to another in India."
                />
              </div>
              <br /> <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Immediate Payment Service (IMPS):"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title=" Vendor bill payment can be done with this facility that provides instant interbank electronic fund transfers, which are available 24/7 and can used for real-time payments."
                />
              </div>
              <br /> <br />
            </>
          }
        />
      </div>
    </div>
  );
};

export default vendorPayment;
