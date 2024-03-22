import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
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
import { Metadata } from "next";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import FAQHtml from "./faq-html";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { space } from "@/common/constant";

export const metadata: Metadata = {
  title: "Automated Accounts Reconciliation & Bank Reconciliation - EnKash",
  description:
    "EnKash automated reconciliation solutions streamline your financial processes, reduce errors, and enhance efficiency. make cash flow management easier & your finance team focused on more strategic tasks.",
  alternates: {
    canonical:
      "https://www.enkash.com/olympus/receivables/automated-reconciliation/",
  },
};

const automatedReconcilation = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <Header utmSource="" />

      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div className="d-flex">
              <Heading
                title={`Reveivables |${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
            <Heading
              title="Automated Reconciliation"
              size="h4"
              weight="4"
              useH1TagInHtml={true}
            />
          </div>
          <div className="d-flex flex-column">
            <Heading
              title="Free up your team’s"
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="bandwidth with"
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="automated reconciliation"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Leverage automated reconciliation to make cash flow management easier and enable your finance team to focus on more strategic tasks"
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
                url="https://home.enkash.com/signup?utm_source="
              />
            </div>
            <div>
              <SecondryButton
                title="Get Free Demo"
                actionImage={whiteArrow}
                iconSize={15}
                url="/sales/?source="
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
              itemArray: ["Accuracy"],
              oldWayDescription:
                "The manual nature of data entry in the traditional method increases the likelihood of errors, such as typos, incorrect amounts, or misplaced entries. These errors can lead to discrepancies in reconciliation.",
              newWayDescription:
                "EnKash's automated system significantly improves accuracy by minimizing human intervention. The advanced algorithms ensure precise data extraction and validation, contributing to a more reliable reconciliation process.",
            },
            {
              itemArray: ["Visibility"],
              oldWayDescription:
                "The lack of visibility into financial transactions often resulted in challenges in making timely payments to vendors and meeting other financial obligations.",
              newWayDescription:
                "With EnKash, get clear visibility into your cash flow status and ensure all your business payments are processed on time, fostering better relationships.",
            },

            {
              itemArray: ["Cost", "Efficiency"],
              oldWayDescription:
                "The conventional method relies on manual labor for data entry, which incurs higher operational costs. The need for skilled personnel and the time spent on repetitive tasks contribute to increased expenses.",
              newWayDescription:
                "With EnKash, you can make the whole process more cost-effective, as it reduces the reliance on manual labor. The streamlined process leads to operational efficiency, minimizing the risk of costly errors.",
            },
            {
              itemArray: ["Integration"],
              oldWayDescription:
                "Traditional systems often face challenges in integrating with other platforms and systems, leading to isolated data and potential data silos.",
              newWayDescription:
                "EnKash offers seamless integration with various accounting and ERP systems. This interoperability ensures a smooth flow of information across different platforms, enhancing overall efficiency and connectivity.",
            },
            {
              itemArray: ["Scalability"],
              oldWayDescription:
                "Traditional methods may struggle to handle growing volumes of transactions, making scalability challenging.",
              newWayDescription:
                "EnKash's automated system is designed for scalability, effortlessly accommodating increasing transaction volumes without compromising efficiency.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-flex flex-column text-center mb-5">
          <Heading
            title="Reconcile records in real-time to"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title="speed up decision-making"
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>
        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Multi-Bank Reconciliation"
              description="Automatically map transactions with bank statements using names, dates, and amounts. Effortlessly reconcile unmatched transactions, review mappings, and update transactions in your ERP"
              source=""
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <>
                  <Heading
                    title="Track and"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Control"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </>
              }
              description="Manage records of vendor, rental, utilities, and tax payments from end to end, and easily track the payment status directly on the platform"
              source=""
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Manage Receivables"
              description="Improve overall customer experience by optimizing collection reminders via the platform with real-time updates of who has paid and who has not"
              source=""
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <>
                  <Heading
                    title="Accelerate"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Audits"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </>
              }
              description="Access detailed transaction history, ensuring clear audit trails for enhanced accountability and compliance. Maintain thorough records of transactions and changes, promoting transparency and traceability"
              source=""
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <>
                  <Heading
                    title="Reduce"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Fraud"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </>
              }
              description="Gain a clear view of all the transactions, easily identify duplicate invoices, and flag suspicious transactions. Enhancing security and reducing the risk of fraud"
              source=""
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <div className="d-flex flex-column">
                  <div>
                    <Heading
                      title="Automate reconciliation and focus"
                      color="white"
                      size="h1"
                      weight="6"
                    />
                  </div>

                  <div>
                    <Heading
                      title={`on${space}`}
                      color="rainy-blue"
                      size="h1"
                      weight="6"
                    />

                    <Heading
                      title="more strategic tasks"
                      color="rainy-blue"
                      size="h1"
                      weight="6"
                    />
                  </div>
                </div>
              </div>
            </>
          }
          mainTitle="How does it work?"
          carouselData={carouselData}
          carouselBg={caraouselBg}
        />
      </div>
      {/* <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how meal cards can benefit your business and employees!"
        />
      </div> */}
      <div
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs section will help you learn about automated reconciliation
            in detail"
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
          title="Seeking further understanding of automated reconciliation?"
          description="The reconciliation process is essential to ensure optimum cash flow planning, meet accounts payable obligations seamlessly, and optimize the accounts receivable function. Automated reconciliation cuts down manual efforts and reduces errors to help improve customer experience, cut down interest costs, and ensure that you meet your business payment obligations."
          source=""
        />
      </div>
      <div className={`${styles.seventh_row} row`}>
        <ComprehensiveView
          title="Explore our comprehensive guide"
          innerHtml={
            <>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Is it possible to automate bank reconciliation?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="It is possible to automate bank reconciliation with the right software. The process of bank reconciliation involves going through each entry in the account statement and matching it against payments made and the payments received. The right software solution will go through all the entries from the bank statement and match them with the records your system has and the entries to identify where the payments have been made and the parties from which you have received payments."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the benefits of automated bank reconciliation"
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Automating bank reconciliation has many benefits, both direct and indirect."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Here are some direct benefits:"
                />
              </div>
              <div className="mb-3">
                <ul>
                  <li>Quicker reconciliation</li>
                  <li>More accurate matching of records</li>
                  <li>Saving the team’s time</li>
                  <li>Quicker update of internal financial statement</li>
                </ul>
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Indirect benefits include:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>Better customer experience</li>
                  <li>Lesser follow-up on collections</li>
                  <li>Improved payables management</li>
                  <li>Compliance with audits</li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Who prepares bank reconciliation?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The finance department is in charge of the bank accounts reconciliation process. In earlier times, the whole process of gathering records, seeking inputs, and asking for documentation was done manually. However, today the process of bank reconciliation has been automated. While it is a matter of using your spend management platform to run the bank reconciliation process. However, the finance department still has ownership of the entire process and is in charge of checking if the final bank accounts reconciliation is done properly."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What is the use of bank accounts reconciliation in Tally?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Bank accounts reconciliation within your core financial system like Tally helps ensure that all financial records are updated and all your financial stakeholders have a single source of truth. For instance, the finance controller will be able to access the current cash flow status with a few clicks. Your sales department will be able to check if all the customer accounts that were due to make payments against their respective sales have done so and take decisions on further credit sales. Your purchase manager can assess whether a particular vendor’s contract is worth renewing and if he or she is defaulting on the delivery of goods or services."
                />
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="" />
    </div>
  );
};

export default automatedReconcilation;
