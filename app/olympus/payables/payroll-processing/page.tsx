import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../../../common/constant";
import faqData from "./faq-data";
import blogData from "./blog-data";
import carouselData from "./carousel-data";
import { banner, caraouselBg, faqBg, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import EnkashWay from "@/components/enkash-way/enkash-way";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import Header from "@/components/header/header";
import { Metadata } from "next";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import FAQHtml from "./faq-html";
import BlogWrapper from "@/components/blog/blog-wrapper";
import Footer from "@/components/footer/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: " Payroll Processing & Management Software for Businesses - EnKash",
  description:
    "EnKash provides end-to-end payroll processing by offering a comprehensive platform that covers all aspects of payroll management. Book a Free Demo",
  alternates: {
    canonical: "https://www.enkash.com/olympus/payables/payroll-processing/",
  },
};

const payrollProcessing = () => {
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
            <Heading
              title="Payroll Processing"
              size="h4"
              weight="4"
              useH1TagInHtml={true}
            />
          </div>

          <div className="d-flex flex-column">
            <div>
              <Heading
                title="Leverage the"
                color="white"
                size="h2"
                weight="7"
              />
              <Heading
                title={`${space}power of`}
                color="rainy-blue"
                size="h2"
                weight="7"
              />
            </div>
            <div>
              <Heading
                title="streamlined"
                color="rainy-blue"
                size="h2"
                weight="7"
              />
              <Heading
                title={`${space}payroll`}
                size="h2"
                color="white"
                weight="7"
              />
            </div>

            <Heading title="processing" color="white" size="h2" weight="7" />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Optimize payroll procedures and guarantee timely payments through our secure and efficient platform for a stress-free salary disbursement experience"
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
                title="Get Free Demo"
                actionImage={whiteArrow}
                iconSize={15}
                url="/sales/?source=payables"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div className={styles.lottie_container}>
            <Image src={banner} alt="banner image" />
            {/* <LottieClientComponent animationData={bannerLottie} loop={true} /> */}
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
              itemArray: ["Process"],
              oldWayDescription:
                "Sending out employee salaries used to be a drawn-out and manual task. With traditional methods, errors and delays were not uncommon in calculating salaries.",
              newWayDescription:
                "With EnKash, quickly calculate and send employees their accurate salaries directly to their bank accounts, giving them quick access to their funds.",
            },
            {
              itemArray: ["Bulk", "Payment"],
              oldWayDescription:
                "Limited capacity for bulk payments, making it challenging to handle a larger volume of transactions efficiently.",
              newWayDescription:
                "EnKash introduces efficiency by facilitating seamless bulk payroll disbursements through streamlined processes, allowing organizations to manage a higher volume of transactions.",
            },
            {
              itemArray: ["Cash-Flow", "Visibility"],
              oldWayDescription:
                "Earlier there was no way to track the financial transactions in real-time as all the data used to be scattered, the finance teams had to manually maintain paper records to get a clear view of the cash flow.",
              newWayDescription:
                "EnKash provides real-time visibility into the cash flow through tracking and reporting features. Organizations gain immediate insights into their financial transactions.",
            },
            {
              itemArray: ["Approval", "Process"],
              oldWayDescription:
                "Traditionally, signatures or email confirmations were required for approvals, which relied on varying response times, introducing delays and also the risk of lost documents or miscommunication.",
              newWayDescription:
                "Automate approval workflows with configurable rules, allowing for a faster approval process. Automated systems can route payroll information to designated approvers, ensuring that approvals are obtained promptly.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-2">
          <Heading
            title="Simplify payroll payouts"
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}with our advanced solutions`}
            color="black"
            size="h1"
            weight="6"
          />
        </div>
        <div className="d-flex justify-content-center text-center mb-5"></div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Employee Data Verification"
              description="Efficiently collect and validate crucial information about your employees with e-KYC, before initiating the payroll system, ensuring accuracy and compliance with regulatory requirements"
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Salary Account Validation"
              description="Utilize the penny-drop method to validate salary account details before processing payroll transactions, minimizing the risk of payment errors and enhancing financial security"
              source="payables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Multi-Branch Disbursement"
              description="Simplify the complexity of the payroll system across multiple branches with one click. Easily initiate the employee salaries of different branches with a single dashboard"
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Seamless ERP Integration"
              description="Integrate effortlessly with your existing ERP system and banking partners to streamline the entire payroll processing workflow"
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Flexible Functionality"
              description="Ensure timely payment for interns, contractors, and full-time employees, handling both regular and off-cycle payroll effortlessly. Additionally, swiftly process reimbursements alongside monthly payroll"
              source="payables"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <div className="text-center d-inline">
                  <Heading
                    title={`Efficient, accurate, and${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="hassle-free payroll management"
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
          title="Learn how our payroll processing can revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about payroll processing in detail"
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
          title="Seeking further understanding of payroll processing?"
          description="Payroll processing is how a company makes sure its employees get paid the right amount, on time. It's all about calculating and handing out salaries and wages to everyone who works there."
          source="payables"
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
                  title="What is end-to-end payroll processing?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="End-to-end payroll processing refers to the complete process of managing payroll from start to finish, including tasks such as collecting employee data, calculating wages, deducting taxes, processing payments, and generating reports. EnKash provides end-to-end payroll processing by offering a comprehensive platform that covers all aspects of payroll management"
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the key components of effective payroll processing software?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Key components of an effective payroll processing software include automation of tasks, accuracy in calculations, compliance with regulations, security of financial data, scalability to handle varying volumes of transactions, integration with other systems such as ERP and banking partners, and robust reporting and analytics capabilities"
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What is the difference between payroll processing and payroll management?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Payroll processing specifically refers to the technical aspects of calculating and distributing employee salaries and wages. On the other hand, payroll management encompasses a broader range of tasks including strategic planning, policy development, compliance with labor laws, employee benefits administration, and overall oversight of the payroll function within an organization."
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

export default payrollProcessing;
