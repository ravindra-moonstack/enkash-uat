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
  title: "Rent Payment - Pay Rent Through Credit Card | EnKash",
  description:
    "Decentralize rent payment by credit card to your different offices and pay rent online. Get TDS benefits and record approval hierarchy and make audits easy with Enkash's Rental Portal",
};

const rentalPayments = () => {
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
            <Heading title="Rental Payments" size="h4" weight="4" />
          </div>

          <div className="d-line">
            <Heading
              title={`Making${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="Rental Payments"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading
              title={`${space}Has Never Been this Seamless!`}
              color="white"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="With EnKash, make rental payments in just a few clicks and easy steps with no delays or hassles"
              color="white"
              size="h6"
              weight="5"
            />
          </div>
          <div className="my-5 d-flex flex-row justify-content-start align-items-center">
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
          <LottieClientComponent animationData={bannerLottie} loop={true} />
        </div>
        <div className={styles.three_step_container}>
          <ThreeSteps />
        </div>
      </div>

      <div className={`${styles.second_row} row d-flex bg-white row-padding`}>
        <EnkashWay
          progressData={[
            {
              itemArray: ["Data", "Processing"],
              oldWayDescription: "Data loss due to manual payment processing",
              newWayDescription:
                "The records and receipts are digitally stored; low or no chance of data loss",
            },
            {
              itemArray: ["Payments", "Charges"],
              oldWayDescription:
                "Late payment charges are incurred due to delays in making payments",
              newWayDescription:
                "Automated reminders ensure timely payments; no penalties or late payment charges",
            },
            {
              itemArray: ["Bulk", "Payments"],
              oldWayDescription:
                "Prepare paperwork to get the payment approved from the right person",
              newWayDescription:
                "Upload GST challan to EnKash portal. Challan will be read and verified digitally",
            },
            {
              itemArray: ["Payment", "Modes"],
              oldWayDescription:
                "Challenging to make bulk rental payments in real time",
              newWayDescription:
                "Bulk rental payments can be made seamlessly and hassle-free",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-2">
          <Heading
            title="Simple, smooth & hassle-free rental payments"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}for your business`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>
        <div className="d-flex justify-content-center text-center mb-5">
          <Heading
            title="We ensure fast, easy, and safe payments!"
            color="black"
            size="h5"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Quick and Easy Onboarding"
              description="Complete the onboarding with a few simple steps to ensure that rent payments go on time"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Automated Payment Reminders"
              description="Enables automated reminders to track due dates, reduce late payments, and improve business cash flow"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Easy Payment Tracking"
              description="Track what’s paid, due, and pending on a single dashboard to improve visibility, control payment activity, and increase efficiency"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Centralized Approval"
              description="Easily pay rent online for all locations with a centralized approval process with all due checks and approvals"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Pay Using Credit Cards"
              description="Get the option to pay rentals on time using any credit card and keep your business cash flow steady"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Auto-Generated Records"
              description="The platform auto-generates monthly rental bills on specified dates as per rental agreements that you feed into the system"
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
                    title={`Rental Payments${space}`}
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="are Now Fast, Easy, and Safe!"
                    color="white"
                    size="h1"
                    weight="6"
                  />
                </div>
              </div>
            </>
          }
          mainTitle="How Does Rental Payments Work?"
          carouselData={carouselData}
          carouselBg={caraouselBg}
        />
      </div>
      <div className="row bg-white row-padding text-center">
        <BlogWrapper
          blogData={blogData}
          title="Learn how Rental Payments could revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about rental payments in detail."
            color="black"
            size="h4"
          />
        </div>

        <div>
          {faqData.map((item, index) => (
            <FAQ key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
        <div className={styles.faq_bg}>
          <Image src={faqBg} alt="background image" />x
        </div>
      </div>

      <div className={`${styles.sixth_row} row`}>
        <ContactUsCard />
      </div>
      <div className={`${styles.seventh_row} row`}>
        <ComprehensiveView
          title="Seeking further understanding of rent payment software online? Explore the comprehensive guide"
          innerHtml={
            <>
              <div className="mb-5">
                <Heading
                  size="h4"
                  color="black"
                  weight="6"
                  title="Rent payment software or platform is often a part of your overall business spend management platform and helps you manage and automate your business rental payments. You can use this software to keep a record of all the premises your business rents with details including the number of premises, the rental agreements, the amounts due, the dates on which rents are due, and the details of the landlords. Furthermore, you can also set up the process workflows for rent payments to make the process quicker and more efficient."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Why should you pay rent using a credit card?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="There are many reasons to pay rent using a credit card."
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Using your credit card and getting a credit period to make
                    rental payments helps manage your cash flow.
                  </li>
                  <li>
                    It is easy to create records and set processes while using a
                    card to make rental payments.
                  </li>
                  <li>
                    It helps to pay rent using credit cards when you are facing
                    a temporary funds crunch and helps in short-term working
                    capital management.
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Why should you choose EnKash for paying rent using credit cards?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Here are some of the main reasons to pay rent using the EnKash portal."
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    It offers an intuitive and quick method of paying rent.
                  </li>
                  <li>
                    The charges to use your credit card on the EnKash portal are
                    reasonable.
                  </li>
                  <li>
                    It is possible to create approval processes to meet auditory
                    requirements.
                  </li>
                  <li>
                    Syncing with your existing ERP or accounting system is easy.
                  </li>
                  <li>
                    You can generate MIS reports with a few simple clicks.
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How to pay rent online with a credit card?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Here are a few one-time steps to set up the process:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>Set up processes and workflows and upload records.</li>
                  <li>Set maker-checker-approver matrices.</li>
                  <li>Define centralized and decentralized processes.</li>
                  <li>
                    Include details like GST, TDS, and other factors applicable
                    to your rental amounts.
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How to make multiple office rent payments with credit cards?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="You can make multiple rental payment for business through credit cards on the EnKash portal by using our bulk payment option. To do that, ensure that all rental agreements and details are uploaded. Once the records are uploaded, it is simply a matter of setting limits and getting approvals to pay using the card as described above. 

                  Before making the payment, fetch rental records, view the records, adjust for deductions, advance payments, taxes, etc, and get approvals for payments
                  
                  Pay rent via any credit card:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>Select the rental bills you want to pay.</li>
                  <li>Input your credit card details and request OTP.</li>
                  <li>
                    Enter OTP and complete the bulk rental payment in one click.
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the benefits of paying rent via credit card?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="There are many benefits of rent payment through credit card, which include the following:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Smart utilization of funds by getting access to additional
                    working capital easily.
                  </li>
                  <li>
                    With well-timed payments, you can get a free credit period
                    to repay the amount.
                  </li>
                  <li>
                    Automatic recording of payments with a portal like EnKash.
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How to get rent receipts for online rent payments?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="If you are using EnKash portal to make online rent payments, it is a matter of a few clicks to download the rental payment receipts. You will be intimated via email of your rental payment along with an attached receipt."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Why should businesses use automated rental payments?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="6"
                  title="Automated rental payments are a convenient and efficient way for businesses to collect payments. These can reduce the late payment charges and eliminate the need to pay cheques or cash each month manually. Additionally, automated rental payments help businesses save time and simplify accounting and record-keeping."
                />
              </div>
            </>
          }
        />
      </div>
    </div>
  );
};

export default rentalPayments;
