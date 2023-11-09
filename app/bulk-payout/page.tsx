import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../constant/common";
import faqData from "./faqData";
import blogData from "./blog-data";
import carouselData from "./carouselData";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import EnkashWay from "@/components/enkash-way/enkash-way";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import FAQ from "@/components/faq/faq";
import MobileHeader from "@/components/header/mobile-header/mobile-header";
import WebHeader from "@/components/header/web-header";
import BlogWrapper from "@/components/blog/blog-wrapper/blog-wrapper";
import { Metadata } from "next";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";

export const metadata: Metadata = {
  title: " Bulk Payout | Corporate Bulk Payment Solution | EnKash",
  description:
    "Revolutionize your financial processes with our advanced bulk payout solution. Experience the ease of managing large-scale payments through our efficient bulk payment system.",
};

const bulkPayout = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <div className="mobile-header">
        <MobileHeader />
      </div>
      <div className="desktop-header">{<WebHeader />}</div>
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
            <Heading title="Bulk Payout" size="h4" weight="4" />
          </div>
          <Heading
            title={`Fast and Secure${space}`}
            color="white"
            size="h2"
            weight="7"
          />

          <div className="d-inline">
            <Heading
              title={`Bulk Payouts${space}`}
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading
              title={`for All Your${space}`}
              color="white"
              size="h2"
              weight="7"
            />
          </div>

          <Heading title="Business Needs" color="white" size="h2" weight="7" />

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Get auto-reminders and approvals for regularly occurring business expenses like rent, utilities, vendors, and more"
              color="white"
              size="h6"
              weight="5"
            />
          </div>
          <div
            className={`${styles.button_container} my-5 d-flex flex-row justify-content-start align-items-center`}
          >
            <div className="me-2">
              <PrimaryButton title="EnKash Now" theme="theme-blue" />
            </div>
            <div>
              <SecondryButton
                title="Book a Demo"
                actionImage={whiteArrow}
                iconSize={15}
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
              itemArray: ["Processing", "Time"],
              oldWayDescription:
                "Single payments take longer time  to process since each transaction is processed separately",
              newWayDescription:
                "Multiple payments are processed much faster with a single click",
            },
            {
              itemArray: ["Type of", "Payment"],
              oldWayDescription:
                "Payments are typically used for one-off transactions such as purchases",
              newWayDescription:
                "Solves hassle of recurring payments such as vendor payments, GST, rental and utility",
            },
            {
              itemArray: ["Flexibility"],
              oldWayDescription:
                "Single payments offer lesser flexibility and control over each individual transaction.",
              newWayDescription:
                "Bulk payments offer greater flexibility since all payments are in the batch and are processed together.",
            },
            {
              itemArray: [" Vendor", "Relationships"],
              oldWayDescription:
                "Businesses fail to build stronger relationships with vendors and suppliers as payments are not timely processed",
              newWayDescription:
                "Businesses build stronger relationships with vendors and suppliers by providing timely or early payments",
            },
            {
              itemArray: ["Payment", "Tracking"],
              oldWayDescription:
                "Since payments are mostly done manually, the chances of loss of payment receipts are very high, making it difficult to track",
              newWayDescription:
                "Bulk payments are easier to track and manage as they are processed as a batch, making it simpler to reconcile accounts and track",
            },
            {
              itemArray: ["Payables", "Management"],
              oldWayDescription:
                "Paying numerous vendor invoices, utility bills, rental bills, or multiple GST challans is a cumbersome process with a risk of errors or missed deadlines",
              newWayDescription:
                "Streamlining payments with a one-click option for all outstanding invoices, bills, rentals, and GST challans simplifies managing company payables, and minimizes errors and potential delays",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading title="Facing the" color="black" size="h1" weight="6" />
          <Heading
            title={`${space}complexities`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}involved in`}
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}bulk processing?`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <div className="mt-2">
            <Heading
              title="Don’t worry; EnKash will fix them for you."
              color="black"
              size="h1"
              weight="6"
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className={`d-flex flex-md-row mt-3 pb-4 scroll_container`}>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Repeat Payments"
                description="Ensure that repeat payments that occur monthly, quarterly, or weekly happen as a matter of course. This way, your business can enjoy continued services and facilities with minimal manual dependencies."
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                titleHtml={
                  <>
                    <Heading
                      title="Reduce Payment Processing Time"
                      color="rainy-blue"
                      size="h2"
                      weight="6"
                    />
                  </>
                }
                description="Processing payments individually can be time-consuming and can cause delays. By using bulk payout, you can reduce payment processing time and improve cash flow."
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Centralized Payment Processing"
                description="By centralizing payment processing through a bulk payout system, you can have better visibility and control over processes to prevent errors"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Automate Payment Reminders"
                description="Enable an automated reminder engine to keep track of all your outstanding business payments"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Checks and Approvals"
                description="Finance is all about timely payments with the right checks and approvals to ensure negligible misuse of funds. The process of bulk payout for your recurring payments ensures speed and efficiency"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <Heading
                  title={`Simplify your business payouts with our${space}`}
                  color="white"
                  size="h1"
                  weight="6"
                />
                <div>
                  <Heading
                    title={`bulk processing solution${space}`}
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                </div>
              </div>
            </>
          }
          mainTitle="How Does Bulk Payout Work?"
          carouselData={carouselData}
          carouselBg={caraouselBg}
        />
      </div>
      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how Bulk Payouts could revolutionize the way you work!"
        />
      </div>
      <div
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions ?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title=" Don't worry! Our FAQs section will help you learn about bulk payout in detail"
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

      <div className={`${styles.sixth_row} row`}>
        <ContactUsCard
          title="Seeking further understanding of bulk payouts?"
          description="A system that enables organizations or individuals to make payments to multiple beneficiaries at the same time is called bulk payment. EnKash provides bulk payment solutions to businesses"
        />{" "}
      </div>
      <div className={`${styles.seventh_row} row`}>
        <ComprehensiveView
          title="Explore the comprehensive guide"
          innerHtml={
            <>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Why is a bulk payment solution needed?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="In order to make business transactions smooth, efficient, safe, and faster, companies can use bulk payment solutions provided by EnKash. It can help businesses with the following advantages"
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Faster and safe payments:"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Bulk payment solutions ensure that all the vendors associated with the business get their payments timely so that there should not be any gaps in product supply. These payments are made with encryption technology, ensuring data is secured"
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Automation:"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Automating bulk payments eliminates the scope of manual error and helps in easier processing of larger transactions on a frequent basis"
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Negligible payment failure rate:"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Bulk payment solutions verify each account before initiating any transfer. Any invalid accounts with potential risks of payment failure will be eliminated, and bulk payments will be made to valid accounts"
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Multiple modes of payment:"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="EnKash supports multiple modes of payment, including bank transfers, credit cards, debit cards, and virtual cards"
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Different types of bulk payments"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="There are two types of bulk payments: Standard Domestic Bulk Payment and Bulk Inter Account Transfer (IAT). 
                  Standard Domestic Bulk Payment lets you make bulk payments to multiple beneficiaries from a single account. You can use it on EnKash and make secure bulk payments.
                  This bulk payment is further classified into three categories:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Immediate bulk payments (IBULK): These payments are
                    immediately processed when you create payments for the bulk
                    list. Payment can be done via a virtual account.
                  </li>
                  <li>
                    Next-day bulk payments (NBULK): This type will credit the
                    recipients’ account after the day the payment has been made.
                    This can be done using net banking or credit cards for bulk
                    payment via our portal.
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Bulk Inter Account Transfer (IAT) "
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="This bulk payment type enables you to make payments to multiple credit accounts from a single debit account. You can also use IAT to make international payments, unlike standard bulk payments. It is fast, dependable, and secure. However, it has a complicated procedure depending on the company’s location and target demographics"
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title=" What are the payment modes for bulk payout?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Bulk payment can be done through bank transfers, and via credit or debit card"
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Bank Transfers"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="EnKash facilitates bank transfers using NEFT and RTGS. These days, banks facilitate corporate bulk payments. When making vendor payments in bulk, you will be redirected to the bank’s Internet banking portal, where payment can be made in bulk."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Credit Card"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Vendor, utility or rental payments in bulk can be made using a credit card on EnKash. Businesses can use their credit card to make bulk payments"
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Virtual Account"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="You can create a virtual account on EnKash and make payments anytime without linking it to a particular bank's operating system"
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What is the future of bulk financial services?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Bulk payment is taking the lead in the B2B space. Businesses need to send and receive money in bulk on a daily basis. Products like EnKash Olympus make bulk payments easy, safe, convenient, and traceable. 
                  Companies can easily integrate Olympus with their existing ERP and use it to make bulk business payments. This transformation has lessened the work for the finance teams as their burden of receiving invoices, verifying them manually, and then processing payment for every single vendor has reduced. Adopting bulk payment as a way to make recurring payments can help businesses save their time and resources and become more efficient"
                />
              </div>
            </>
          }
        />
      </div>
    </div>
  );
};

export default bulkPayout;
