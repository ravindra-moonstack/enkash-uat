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
import BlogWrapper from "@/components/blog/blog-wrapper";
import ActionCard from "@/components/action-card/action-card";
import LottieDynamicLoadComponent from "@/components/lottie-client/lottie-dynamic-load-client";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import Header from "@/components/header/header";
import {
  officeImg,
  officeImg2,
  whiteArrow,
  cardBg,
  faqBg,
  heavyLiftingIconOne,
  heavyLiftingIconTwo,
  heavyLiftingIconThree,
  officeImg3,
  authorOne,
  authorTwo,
} from ".";
import TestimonialCard from "@/components/testimonial-card/testimonial-card";
import FAQHtml from "./faq-html";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title:
    "Automate your Business Account Payable & Receivable with Enkash Olympus  ",
  description:
    "EnKash Olympus helps small and medium businesses to solve their daily vendor, user and invoice management needs for Financial Success. Book a Free Demo to know how Enkash saves your money & time",
  alternates: {
    canonical: "https://www.enkash.com/olympus/",
  },
};

const olympus = () => {
  return (
    <div className={`color-white ${styles.home_container}`}>
      <Header utmSource="payables" />

      <div className={`${styles.first_row} row color-white`}>
        <div className="col-md-6 col-12 d-flex flex-column">
          <div className="d-flex mb-4">
            <Heading title="O" color="rainy-blue" size="h1" weight="7" />
            <Heading title="lympus" size="h1" weight="7" />
          </div>
          <div>
            <Heading title={`The${space}`} color="white" size="h2" weight="7" />
            <Heading
              title={`smart one-stop platform${space}`}
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading
              title={`for faster, efficient, and${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="effortless payments and banking"
              color="white"
              weight="7"
              size="h2"
            />
          </div>
          <div className="mt-4 mobile-only">
            <Heading
              title="Unlock 2X growth | 3X efficiency | 100% transparency"
              color="white"
              size="h6"
              weight="5"
            />
          </div>
          <div className="mt-4 desktop-only">
            <Heading
              title="Unlock 2X growth | 3X efficiency | 100% transparency"
              color="white"
              size="h5"
              weight="5"
            />
          </div>
          <div className="my-5">
            <PrimaryButton
              title="EnKash Now"
              theme="blue"
              url="https://home.enkash.com/signup?utm_source=payables"
            />
            <span className="mx-2"></span>
            <SecondryButton
              title="Book a Demo"
              actionImage={whiteArrow}
              iconSize={15}
              url="/sales/?source=payables"
            />
          </div>
        </div>
        <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
          <div className={styles.lottie_container}>
            <LottieDynamicLoadComponent
              animationName={"OlympusBannerAnimation"}
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
              title="Vendor Payments"
              description="Instantly add, verify, digitally validate, pay, and manage invoices with multiple vendors with one-click automation and clear visibility"
              theme="blue"
              link="/olympus/payables/vendor-payment"
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
              <LottieDynamicLoadComponent
                animationName={"OlympusVendorAnimation"}
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
              <LottieDynamicLoadComponent
                animationName={"OlympusGSTAnimation"}
                loop={true}
              />{" "}
            </div>
          </div>
          <div className="col-md-6 col-12 order-md-2 order-1 my-md-5 my-3 ">
            <ExploreCard
              title="GST Payments"
              description="Pay GST easily with our 3-step process. Get reminders, convert challans digitally, and monitor payments in one place"
              theme="blue"
              link="/olympus/payables/gst-payments"
            />
          </div>
        </div>
        <div className={`row bg-white ${styles.section}`}>
          <div className="col-md-6 col-12 my-md-5 my-3">
            <ExploreCard
              title="Bill Payments"
              description="Add multiple utility providers, automate recurring payments, and ensure on-time payments with features like Auto-Fetch and Auto-Pay"
              theme="blue"
              link="/olympus/payables/bill-payment"
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
            <div className={styles.lottie_container}>
              <LottieDynamicLoadComponent
                animationName={"OlympusUtilityAnimation"}
                loop={true}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row row-padding`}>
        <div className="col-md-6 col-12 d-flex mb-5 order-1 order-md-1">
          <div className={styles.lottie_container}>
            <LottieDynamicLoadComponent
              animationName={"OlympusRentalAnimation"}
              loop={true}
            />
          </div>
        </div>
        <div className="col-md-6 col-12 mb-md-5 mb-3 order-2 order-md-2 px-md-5">
          <ExploreCard
            title="Rental Payments"
            description="Pay and manage your office/home rent seamlessly directly into your landlord’s bank account"
            theme="green"
            link="/olympus/payables/rental-payment"
          />
        </div>

        <div className="col-md-6 col-12 mt-5 order-4 order-md-3 px-md-5">
          <div className="mt-5">
            <ExploreCard
              title="Payment Links"
              description="Expedite your collection process by embedding payment links with digital invoices"
              theme="green"
              link="/olympus/receivables/payment-links"
            />
          </div>
        </div>
        <div className="col-md-6 col-12 d-flex mt-5 order-3 order-md-4 px-md-5">
          <div className={styles.lottie_second_container}>
            <LottieDynamicLoadComponent
              animationName={"OlympusPaymentAnimation"}
              loop={true}
            />
          </div>
        </div>
      </div>

      <div className={styles.more_cards}>
        <div className={`row bg-white ${styles.section}`}>
          <div
            className={`col-md-6 col-12 order-md-1 order-2 d-flex my-md-5 d-flex justify-content-start  ${styles.first_container}`}
          >
            <Image
              src={cardBg}
              alt="card background"
              className={styles.card_bg}
            />
            <div className={styles.lottie_container}>
              <LottieDynamicLoadComponent
                animationName={"OlympusBulkCollectAnimation"}
                loop={true}
              />
            </div>
          </div>
          <div className="col-md-6 col-12 order-md-2 order-1 my-md-5 my-3 ">
            <ExploreCard
              title="Bulk Collect"
              description="Streamline business collections through automated payment reminders, and bulk invoice dispatch in one click"
              theme="blue"
              link="/olympus/receivables/bulk-collect"
            />
          </div>
        </div>
        <div className={`row bg-white ${styles.section}`}>
          <div className="col-md-6 col-12 my-md-5">
            <ExploreCard
              title="Invoices"
              description="Digitize the entire invoicing process from uploading to dispatching invoices electronically
              Effortlessly streamline your business payments and collections"
              theme="blue"
              link="/olympus/receivables/invoices"
            />
          </div>
          <div
            className={`col-md-6 col-12 d-flex my-md-5 d-flex justify-content-end ${styles.second_container}`}
          >
            <Image
              src={cardBg}
              alt="card background"
              className={styles.card_bg}
            />
            <div className={styles.lottie_container}>
              <LottieDynamicLoadComponent
                animationName={"OlympusInvoicesAnimation"}
                loop={true}
              />
            </div>
          </div>
        </div>

        <div className={`row bg-white ${styles.section}`}>
          <div
            className={`col-md-6 col-12 order-md-1 order-2 d-flex my-md-5 d-flex justify-content-start  ${styles.third_container}`}
          >
            <Image
              src={cardBg}
              alt="card background"
              className={styles.card_bg}
            />
            <div className={styles.lottie_container}>
              <LottieDynamicLoadComponent
                animationName={"RecievablesVirtualAnimation"}
                loop={true}
              />
            </div>
          </div>
          <div className="col-md-6 col-12 order-md-2 order-1 my-md-5 my-3 ">
            <ExploreCard
              title="Virtual Accounts"
              description="Streamline the collection process by creating virtual accounts for your customers"
              theme="blue"
              link="/olympus/receivables/virtual-accounts"
            />
          </div>
        </div>
      </div>

      <div className="row bg-white row-padding">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
          <Heading
            title={`One Platform |${space}`}
            size="h1"
            color="black"
            weight="6"
          />
          <Heading
            title={`Endless Solutions${space}`}
            size="h1"
            color="equity-blue"
            weight="6"
          />
        </div>
      </div>

      <div className={`row bg-indi-volt ${styles.fifth_row}`}>
        <div
          className={`d-flex flex-column flex-md-row tex-center justify-content-evenly ${styles.container}`}
        >
          <div className="mb-4 text-md-center">
            <Image
              src={heavyLiftingIconOne}
              alt="coins icon"
              className="mb-4"
            />
            <div className="d-flex flex-column">
              <Heading title="Total" size="h5" color="white" weight="7" />
              <Heading title="Visibility" size="h5" color="white" weight="7" />
            </div>
          </div>

          <div className="mb-4 text-md-center">
            <Image
              src={heavyLiftingIconTwo}
              alt="coins icon"
              className="mb-4"
            />
            <div className="d-flex flex-column">
              <Heading title="Better" size="h5" color="white" weight="7" />
              <Heading title="Controls" size="h5" color="white" weight="7" />
            </div>
          </div>

          <div className="mb-4 text-md-center">
            <Image
              src={heavyLiftingIconThree}
              alt="coins icon"
              className="mb-4"
            />
            <div className="d-flex flex-column">
              <Heading
                title="Comprehensive"
                size="h5"
                color="white"
                weight="7"
              />
              <Heading
                title="Optimization"
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
              itemArray: ["Payment", "Solution"],
              oldWayDescription:
                "Handling business payments one by one leads to unnecessary burden and delays.",
              newWayDescription:
                "Efficiently processes multiple business payments in bulk with one-click OTP.",
            },
            {
              itemArray: ["Approval", "Process"],
              oldWayDescription:
                "Approvals need numerous POCs to check and approve, delaying the process.",
              newWayDescription:
                "Custom approval matrices with different hierarchies enable easy approvals with a few clicks.",
            },
            {
              itemArray: ["Collection", "Approach"],
              oldWayDescription:
                "Manual or traditional banking collection processes are rigid and restrictive.",
              newWayDescription:
                "Digitize the payment collection process with the help of automatically generated invoices, payment links, quick collection and more.",
            },
            {
              itemArray: ["Cash Flow", "Planning"],
              oldWayDescription:
                "Checking payments due and accounts receivables to plan for cash flow can be slow.",
              newWayDescription:
                "EnKash provides you with real-time analytics on your payables and receivables to enable planning your cash flow.",
            },
            {
              itemArray: ["Collaboration"],
              oldWayDescription:
                "Collaboration is typically confined to internal stakeholders within the organization and is often restricted even within different departments.",
              newWayDescription:
                "Work closely with internal and external stakeholders, like vendors, customers, auditors, and your team, for improved results.",
            },
            {
              itemArray: ["Reconciliation	"],
              oldWayDescription:
                "Manual data processing can lead to discrepancies during reconciliation.",
              newWayDescription:
                "The accuracy of the data generated makes the reconciliation process more manageable for the finance team.",
            },
            // {
            //   itemArray: ["Operational", "and", "Process Efficiency "],
            //   oldWayDescription:
            //     "Manual data processing can lead to discrepancies during reconciliation",
            //   newWayDescription:
            //     "The accuracy of the data generated makes the reconciliation process more manageable for the finance team",
            // },
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
                <Heading
                  title="Multiple Branch"
                  color="electric-green"
                  size="h1"
                  weight="5"
                />
                <Heading title="Banking" color="white" size="h1" weight="5" />
              </div>
            </>
          }
          mainImage={officeImg2}
          link="https://home.enkash.com/signup?utm_source=payables"
          description="Create accounts in multiple branches and manage payables, receivables, accounting, and expenses with a single interface"
        />
      </div>
      <div className="bg-white row-padding d-flex justify-content-center">
        <div className="ps-md-5 scroll_container d-flex pb-4">
          <div className="me-4">
            <GetStartedCard
              whiteTitle=" Multiple User Management"
              description="Streamline branch finances with role-based access in one platform. Ensure that teams that are situated at various locations can function efficiently"
              ctaColor="blue"
              source="payables"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Workflow Management"
              description="With EnKash Olympus, you can create custom workflows with an advanced maker-checker model to meet regulatory and audit-based requirements"
              ctaColor="blue"
              source="payables"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Multiple Modes Of Payment"
              description="Enjoy the freedom of using flexible payment solutions, including credit cards and dedicated virtual cards, with the EnKash Olympus solution"
              ctaColor="blue"
              source="payables"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Easy Integration"
              description="Businesses can easily use EnKash with their existing accounting software integrations like Tally. There is zero tech investment involved"
              ctaColor="blue"
              source="payables"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Audit"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Trail"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="EnKash provides a detailed audit trail against each transaction made on the platform, bringing transparency to the business"
              ctaColor="blue"
              source="payables"
            />
          </div>
        </div>
      </div>
      <div className={styles.data_row}>
        <div className={styles.left}>
          <div className="d-flex flex-column">
            <div className="mb-3">
              <Heading
                title="Seamless Onboarding"
                color="electric-green"
                size="h1"
                weight="6"
              />
            </div>

            <Heading
              title=" The platform digitally validates the vendors and onboards them seamlessly. It also auto-flags in case of any mismatched information"
              color="white"
              size="h6"
              weight="4"
            />
          </div>
        </div>
        <div className={styles.right}>
          <Image src={officeImg3} alt="office image" />
        </div>
      </div>
      <div className="row row-padding-x-only my-5">
        <div className="d-inline text-center">
          <Heading
            title={`EnKash Olympus${space}`}
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`empowers growth${space}`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading
            title="- Hear it from the users!"
            color="black"
            size="h1"
            weight="6"
          />
        </div>
      </div>
      <div className={`${styles.testimonial_row}`}>
        <div className="scroll_container pb-md-5 pb-3">
          <div className="me-4 me-m-0">
            <TestimonialCard
              companyName="Founder & CEO, Vianet"
              authorName="Deep Sehgal"
              testimonialText='"We encountered significant challenges in our Accounts Receivables processes, as everything was handled manually. However, with the implementation of EnKash’s Olympus, there has been a substantial reduction in man-hours invested, achieving 100% accuracy in accounting and auditing and an impressive 40% improvement in overall process efficiency."'
              authorImage={authorOne}
            />
          </div>
          <div className="me-4 me-m-0">
            <TestimonialCard
              companyName="Founder, Honeycomb Creative"
              authorName="Noufel Anamala"
              testimonialText='"In integrated marketing communications, agencies need to allocate budgets for different verticals. Through Olympus’ virtual cards, we were able to manage our budget allocation for various departments, streamline approvals seamlessly, and gain real-time visibility of all our department-wise expenses to our finance department"'
              authorImage={authorTwo}
            />
          </div>
        </div>
      </div>

      <div className={styles.get_your_account_row}>
        <div className="d-flex flex-column">
          <div>
            <Heading
              title="Integrate, automate & accelerate"
              size="h2"
              color="rainy-blue"
              weight="6"
            />
            <Heading
              title={`${space}your`}
              size="h2"
              color="white"
              weight="6"
            />
          </div>
          <div className="mb-3">
            <Heading
              title="business with Olympus"
              size="h2"
              color="white"
              weight="6"
            />
          </div>
          <div>
            <PrimaryButton
              title="Get your free account"
              theme="blue"
              url="https://home.enkash.com/signup?utm_source=payables"
            />
          </div>
        </div>
      </div>

      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how olympus can revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about olympus in detail"
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
            title="Seeking further understanding of EnKash Olympus?"
            size="h3"
            color="white"
          />
          <div>
            <PrimaryButton title="Know More" theme="black" url="/sales" />
          </div>
        </div>
      </div>

      <div className="row">
        <ContactUsCard
          title="Business payment management was never this easy!"
          description="EnKash Olympus is an industry-first, robust technology stack that streamlines financial operations and drives growth through increased efficiency, transparency, and adaptability. This innovative solution includes features for automating accounts payable, accounts receivable, auditing, analytics, and reconciliation. EnKash Olympus is primarily designed to cater to traditional mid-size businesses that may be new to digital payments or lack accessibility to modern financial tools."
          source="payables"
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
                  title="Why do I need to automate payables?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="While payables are part of the business's outgoings, they have a definite impact on the business operations. Automating payables ensures that you make payments to vendors and suppliers on time, and this, in turn, ensures that you are in a position to meet your obligations to customers and other stakeholders. Moreover, automating payables ensures that you can identify any issues with vendors or other quality-related issues. Factors like procurement, onboarding of vendors, and payment tracking will help optimize spend and meet quality standards."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What impact will poor receivables have on cash flow?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Receivables have a direct effect on the business's cash flow, and any delay in the process of managing receivables can harm the business. To ensure that receivables have a positive effect on cash flow, you need to start with timely invoicing with complete and accurate details. Also, embedding payment links and offering various modes of payment is another step that will ensure you collect your receivables on time and can positively maintain your cash flow.  Another impact of receivables is ensuring you can provide a positive customer experience with minimal follow-up and correct information."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How do audit errors affect the business?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Business audits are crucial to ensure that all the transactions a business undertakes are aligned with correct practices. When a business is not in a position to answer audit queries or has errors in the process, it results in penalties, delays in the publishing of financial results, and ultimately damage the business’s reputation. A solution like EnKash Olympus helps you meet auditory requirements by setting correct processes, having approval matrices, paperwork to support expenses, etc."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="When are analytics required in a business?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Analytics play a vital role in understanding many aspects of business operations. Whether it is the type of expense or any quality issue that customers may have, sales trends as per different seasons, or even any unnecessary expenses, analytics can help you dive deeper and make the right decision to improve the business. Analytics form the fuel to run the machinery of decision-making at all levels of the business."
                />
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="payables" />
    </div>
  );
};

export default olympus;
