import Image from "next/image";
import { Metadata } from "next";
import { space } from "@/common/constant";
import styles from "./page.module.scss";
import blogData from "./blog-data";
import faqData from "./faq-data";
import howDoesItWorkData from "./how-does-It-work-data";
import Heading from "@/components/heading/heading";
import ExploreCard from "@/components/explore-card/explore-card";
import EnkashWay from "@/components/enkash-way/enkash-way";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import HowDoesItWork from "@/components/how-does-it-work/how-does-it-work.";
import Header from "@/components/header/header";
import BlogWrapper from "@/components/blog/blog-wrapper";
import ActionCard from "@/components/action-card/action-card";
import LottieDynamicLoadComponent from "@/components/lottie-client/lottie-dynamic-load-client";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import {
  officeImg,
  whiteArrow,
  cardBg,
  faqBg,
  heavyLiftingIconOne,
  heavyLiftingIconTwo,
  heavyLiftingIconThree,
} from ".";
import FAQHtml from "./faq-html";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: " Accounts Receivables Automation Software for Business - EnKash",
  description:
    "Save cost of your business with Accounts Receivables Automation Software. Automate your invoicing, reduce payment delays & improve financial efficiency. Sign up for Free Trial Now!!",
};

const receivables = () => {
  return (
    <div className={`color-white ${styles.home_container}`}>
      <Header utmSource="receivables" />
      <div className={`${styles.first_row} row color-white`}>
        <div className="col-md-6 col-12 d-flex flex-column">
          <div className="d-inline mb-4">
            <Heading
              title="Olympus |"
              color="rainy-blue"
              size="h1"
              weight="7"
            />
            <Heading title={`${space}Receivables`} size="h1" weight="7" />
          </div>
          <div className="d-flex flex-column">
            <Heading
              title="Digitize and optimize"
              color="white"
              size="h2"
              weight="7"
            />

            <div>
              <Heading
                title="your business"
                color="white"
                size="h2"
                weight="7"
              />
              <Heading
                title={`${space}collection process`}
                color="rainy-blue"
                size="h2"
                weight="7"
              />
            </div>
          </div>

          <div className="mt-4 mobile-only">
            <Heading
              title="Use smart automation tools, actionable data, and smart invoices for enhanced business collection"
              color="white"
              size="h6"
              weight="5"
            />
          </div>
          <div className="mt-4 desktop-only">
            <Heading
              title="Use smart automation tools, actionable data, and smart invoices for enhanced business collection"
              color="white"
              size="h5"
              weight="5"
            />
          </div>
          <div className={`my-5 ${styles.button_container}`}>
            <PrimaryButton
              title="EnKash Now"
              theme="theme-blue"
              url="https://home.enkash.com/signup?utm_source=receivables"
            />
            <span className="mx-2"></span>
            <SecondryButton
              title="Book a Demo"
              actionImage={whiteArrow}
              iconSize={15}
              url="/sales/?source=receivables"
            />
          </div>
        </div>
        <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
          <div className={styles.lottie_container}>
            <LottieDynamicLoadComponent
              animationName={"RecievablesBannerAnimation"}
              loop={true}
            />
          </div>
        </div>
      </div>
      <div className={`${styles.second_row} bg-white row d-flex row-padding`}>
        <HowDoesItWork dataSets={howDoesItWorkData} bannerImage={officeImg} />
      </div>
      <div className={styles.third_row}>
        <div className={`row bg-white ${styles.section}`}>
          <div className="col-md-6 col-12 my-md-5 my-3">
            <ExploreCard
              title="Virtual Accounts"
              description="Streamline the collection process by creating virtual accounts for your customers"
              theme="blue"
              link="/olympus/receivables/virtual-accounts"
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
            <div className={styles.lottie_first_container}>
              <LottieDynamicLoadComponent
                animationName={"RecievablesVirtualAnimation"}
                loop={true}
              />
            </div>
          </div>
        </div>

        <div className={`row bg-white ${styles.section}`}>
          <div
            className={`col-md-6 col-12 d-flex my-md-5 my-3
             justify-content-start ${styles.third_container}`}
          >
            <Image
              src={cardBg}
              alt="card background"
              className={styles.card_bg}
            />

            <div className={styles.lottie_third_container}>
              <LottieDynamicLoadComponent
                animationName={"RecievablesBulkAnimation"}
                loop={true}
              />
            </div>
          </div>
          <div className="col-md-6 col-12 px-5">
            <ExploreCard
              title="Bulk Collect"
              description="Create an improved, customer-focused collection experience while ensuring better DSO"
              theme="blue"
              link="/olympus/receivables/bulk-collect"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row row-padding`}>
        <div className="col-md-6 col-12 d-flex mb-5 order-1 order-md-1 justify-content-center">
          <div className={styles.lottie_first_container}>
            <LottieDynamicLoadComponent
              animationName={"RecievablesPaymentAnimation"}
              loop={true}
            />
          </div>
        </div>
        <div className="col-md-6 col-12 mb-md-5 mb-3 order-2 order-md-2 px-md-5">
          <ExploreCard
            title="Payment Links"
            description="Reduce follow-ups and speed up collections by embedding payment links within digital invoices"
            theme="green"
            link="/olympus/receivables/payment-links"
          />
        </div>

        <div className="col-md-6 col-12 mt-5 order-4 order-md-3 px-md-5">
          <ExploreCard
            title="Invoices"
            description="Reduce follow-ups and collect on time with digital invoice dispatch"
            theme="green"
            link="/olympus/receivables/invoices"
          />
        </div>
        <div className="col-md-6 col-12 d-flex mt-5 order-3 order-md-4 px-md-5">
          <div className={styles.lottie_second_container}>
            <LottieDynamicLoadComponent
              animationName={"RecievablesInvoiceAnimation"}
              loop={true}
            />
          </div>
        </div>
      </div>

      <div className="row bg-white row-padding text-center">
        <div className="d-flex flex-column">
          <div>
            <Heading
              title={`Make business${space}`}
              size="h1"
              color="black"
              weight="6"
            />
            <Heading
              title={`collections${space}`}
              size="h1"
              color="black"
              weight="6"
            />
          </div>
          <div>
            <Heading
              title={`easy and smooth${space}`}
              size="h1"
              color="equity-blue"
              weight="6"
            />
            <Heading title="with EnKash!" size="h1" color="black" weight="6" />
          </div>
        </div>
      </div>

      <div className={`row bg-indi-volt ${styles.fifth_row}`}>
        <div
          className={`d-flex flex-column flex-md-row tex-center justify-content-evenly ${styles.container}`}
        >
          <div className="mb-4 text-md-center">
            <Image src={heavyLiftingIconOne} alt="icon" className="mb-4" />
            <div className="d-flex flex-column">
              <Heading title="Quick" size="h5" color="white" weight="7" />
              <Heading title="Collections" size="h5" color="white" weight="7" />
            </div>
          </div>

          <div className="mb-4 text-md-center">
            <Image
              src={heavyLiftingIconTwo}
              alt="coins icon"
              className="mb-4"
            />
            <div className="d-flex flex-column">
              <Heading title="One-click" size="h5" color="white" weight="7" />
              <Heading title="Deployment" size="h5" color="white" weight="7" />
            </div>
          </div>

          <div className="mb-4 text-md-center">
            <Image
              src={heavyLiftingIconThree}
              alt="coins icon"
              className="mb-4"
            />
            <div className="d-flex flex-column">
              <Heading title="Easy" size="h5" color="white" weight="7" />
              <Heading title="Tracking" size="h5" color="white" weight="7" />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.sixth_row} row d-flex bg-white row-padding`}>
        <EnkashWay
          progressData={[
            {
              itemArray: ["Collection", "Process"],
              oldWayDescription:
                "Manually keeping track of receivables and customer payments creates unnecessary confusion.",
              newWayDescription:
                "Leverage virtual accounts to streamline reconciliation by linking received payments to customer accounts.",
            },
            {
              itemArray: ["Payment", "Methods"],
              oldWayDescription:
                "Restricting payment methods can cause even more delays in the collection process.",
              newWayDescription:
                "Enable customers to pay amounts due with embedded payment links quickly.",
            },
            {
              itemArray: ["Collection", "Method"],
              oldWayDescription:
                "Manual or traditional banking collection processes are rigid and restrictive.",
              newWayDescription:
                "Digitize the collection process with a seamless invoicing process, payment links, quick collection, and more.",
            },
            {
              itemArray: ["Invoice", "Dispatch"],
              oldWayDescription:
                "Generating and dispatching invoices manually is a time-consuming process, which, if not done, can hinder collections.",
              newWayDescription:
                "Never miss out on timely deployment of invoices and reminders with digital invoicing.",
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
                <Heading title="Total" color="white" size="h1" weight="5" />
                <Heading
                  title="Control"
                  color="electric-green"
                  size="h1"
                  weight="5"
                />
              </div>
            </>
          }
          mainImage={officeImg}
          link="https://home.enkash.com/signup?utm_source=receivables"

          description="Gain control over your business spends with a complete overview of all your expenses. Analyze data to create efficient budgets, optimize expenses and increase your savings."
        />
      </div>
      <div className="bg-white row-padding d-flex justify-content-center">
        <div className="ps-md-5 scroll_container d-flex pb-4">
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Automate and Accelerate"
              description="Put repetitive and mundane tasks on auto-pilot and significantly reduce your team’s efforts in the invoicing and reconciliation process"
              ctaColor="blue"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Proactive Collection"
              description="Build collection strategies that work for both you and your customer. Get details about each transaction linked seamlessly with virtual accounts for better insights"
              ctaColor="blue"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Smart"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Invoices"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Leverage the power of embedded payment links within invoices and other forms of communication to quicken the collection process"
              ctaColor="blue"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Improved Cashflow"
              description="An automated collection strategy that does most of your work and can improve your business's overall cash flow"
              ctaColor="blue"
            />
          </div>
        </div>
      </div>

      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how receivables can revolutionize the way you work!"
        />
      </div>

      <div
        className={`${styles.eigth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs section will help you learn about receivables in detail"
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

      <div className={`row ${styles.ninth_row} bg-equity-blue`}>
        <div className="d-flex justify-content-evenly align-items-center">
          <Heading
            title="Seeking further understanding of accounts receivables?"
            size="h3"
            color="white"
          />
          <div>
            <PrimaryButton title="Know More" theme="theme-black" url="/sales" />
          </div>
        </div>
      </div>

      <div className="row">
        <ContactUsCard
          title="Speed up business collections for easy cash flow"
          description="Accounts Receivable is the outstanding amount customers or clients owe to a business. This amount is against any good or service availed from the business"
        />
      </div>

      <div className="row">
        <ComprehensiveView
          title="Explore our comprehensive guide"
          innerHtml={
            <>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the advantages of accounts receivable?"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    AR helps improve a business's cash flow by speeding up
                    incoming funds, ensuring a steady cash flow
                  </li>
                  <li>
                    Accounts receivable improve liquidity and support working
                    capital and day-to-day business operations
                  </li>
                  <li>
                    Businesses can enhance customer relationships by allowing
                    flexibility in credit offerings and building customer
                    relationships
                  </li>
                  <li>
                    With accounts receivable managed properly, businesses can
                    get valuable data to understand their financial health
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are examples of receivables?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="One of the examples to understand accounts receivable would be:"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="A clothing manufacturer delivering the raw material to a retail store on credit. The payment can be made to the manufacturer within 30 days as both parties agree."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How accounts receivable is different from accounts payable?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Accounts receivable and accounts payable are two different aspects of a business. Accounts receivable is the money a business will receive from its customers against the goods or services it has provided. On the other hand, accounts payable is the money a business has to pay its vendors or suppliers for the goods or services they have purchased from them."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How companies recognize accounts receivable?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="When a business delivers goods or services on credit, that is when their accounts receivable is created. Further, this transaction is recorded in the balance sheet as revenue against accounts receivable entry. As and when the payment is received, the amount is deducted from the accounts receivable balance."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title=" What are the steps in the accounts receivable process?"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    The AR process starts when a good or service and a detailed
                    invoice are delivered to the customer
                  </li>
                  <li>
                    The sale is recorded in the company’s accounting books
                  </li>
                  <li>This entry is regularly monitored</li>
                  <li>
                    Upon receiving payment, the accounts receivable ledger is
                    updated
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the 4 functions of accounts receivable?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The four accounts receivable functions are:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Establishing credit limits to reduce the risk of non-payment
                  </li>
                  <li>
                    Sending invoices to customers for goods and services
                    delivered with payment details and terms specified
                  </li>
                  <li>
                    Recording the payment received from the customer to their
                    respective accounts
                  </li>
                  <li>
                    Following up on overdue accounts and implementing collection
                    strategies
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How can businesses manage accounts receivable?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Businesses can manage accounts receivable by following the steps below:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Companies can automate their invoicing, payment tracking,
                    and reminders with accounting software like EnKash
                  </li>
                  <li>
                    Businesses can establish credit policies with credit limits,
                    terms, and conditions for customers
                  </li>
                  <li>
                    Conduct checks on customers for their creditworthiness
                  </li>
                  <li>
                    Implement effective collection strategies and fast-track
                    their receivables process
                  </li>
                  <li>
                    Maintain good customer relationships by openly addressing
                    their grievances
                  </li>
                </ul>
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="receivables" />
    </div>
  );
};

export default receivables;
