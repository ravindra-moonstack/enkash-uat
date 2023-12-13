import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../../constant/common";
import faqData from "./faq-data";
import blogData from "./blog-data";
import carouselData from "./carousel-data";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import EnkashWay from "@/components/enkash-way/enkash-way";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import { Metadata } from "next";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import BlogWrapper from "@/components/blog/blog-wrapper";
import FAQHtml from "./faq-html";
import HeaderWrapper from "@/components/header/header";

export const metadata: Metadata = {
  title: "Employee Rewards & Recognition Management Platform  - EnKash",
  description:
    "Explore our Employee Rewards and Recognition Program for businesses. Discover how our program can boost morale, enhance productivity, and create a culture of appreciation within your organization",
};

const employeeRewards = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <HeaderWrapper />

      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div className="d-flex">
              <Heading
                title={`Loyalty Lounge${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
            <Heading title="| Employee Rewards" size="h4" weight="4" />
          </div>

          <div className="d-inline d-md-flex flex-column">
            <Heading
              title={`Rewards management${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <div>
              <Heading
                title={`platform for${space}`}
                color="white"
                size="h2"
                weight="7"
              />
              <Heading
                title="effortless"
                color="rainy-blue"
                size="h2"
                weight="7"
              />
            </div>
            <Heading
              title="recognition and "
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading
              title="redemption"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Build a culture of employee engagement, productivity, and retention with our comprehensive rewards programs"
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
              itemArray: ["Rewards", "Options"],
              oldWayDescription:
                "Limited reward options, often restricted to cash or physical gifts.",
              newWayDescription:
                "Diverse reward options, including personalized rewards, experiences, or benefits, enhancing employee satisfaction.",
            },
            {
              itemArray: ["Manual", "Recognition"],
              oldWayDescription:
                "Employee recognition and rewards often rely on manual processes, which can be inconsistent and time-consuming.",
              newWayDescription:
                "Automated recognition and reward system that tracks employee achievements and delivers rewards efficiently and consistently.",
            },
            {
              itemArray: ["Personalization"],
              oldWayDescription:
                "Rewards are often generic and do not consider individual employee preferences.",
              newWayDescription:
                "Employees can choose rewards based on their interests and needs.",
            },
            {
              itemArray: ["Employee", " Engagement"],
              oldWayDescription:
                "Traditional methods may not always foster employee engagement or a positive work environment.",
              newWayDescription:
                "Promotes employee engagement via customized recognition programs, leading to enhanced employee satisfaction.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-flex flex-column text-center mb-5">
          <div>
            <Heading
              title="Discover why EnKash is the"
              color="black"
              size="h1"
              weight="6"
            />
            <Heading
              title={`${space}best employee`}
              color="equity-blue"
              size="h1"
              weight="6"
            />
          </div>

          <Heading
            title={`${space}rewards and recognition platform`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>

        <div className="d-flex justify-content-center">
          <div className={`d-flex flex-md-row mt-3 pb-4 scroll_container`}>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Program Administration"
                description="Manage and customize programs, define eligibility criteria, automate policy adherence, and track participation—all in one place"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Easy Allocation & Redemption"
                description="Effortlessly allocate rewards by bulk uploading employee data and sending automated alerts for awarded points and redemption via WhatsApp, email, and SMS"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Diverse Redemption"
                description="Redeem from 400+ brands like Myntra, Amazon, Zomato, and Nykaa across 20+ categories like entertainment, fashion, travel, etc"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="HRMS Integration"
                description="Streamline user onboarding and reward allocation by seamlessly integrating with HRMS platforms, eliminating manual processes"
              />
            </div>

            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Open Voucher Function"
                description="Issue open vouchers on the dashboard & reward winners on the spot by sharing QR Codes via WhatsApp or email, integrated with their login codes. The recipient can redeem the reward by scanning the QR code received"
              />
            </div>

            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Realtime Updates"
                description="Stay informed about redemption and account actions on a single dashboard for better managing your R&R program"
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
                <div className="text-center d-flex flex-column">
                  <Heading
                    title={`Smart DIY platform for employee${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="rewards and redemption"
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
      {/* <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how employee rewards can benefit your business and employees!"
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
            title=" Don’t worry! Our FAQs section will help you learn about employee rewards in detail"
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
          title="Seeking further understanding of employee rewards?"
          description="Employee rewards in an organization are recognition and compensation strategies and benefits offered to employees to acknowledge and encourage their contributions, enhance job satisfaction, and drive motivation, ultimately fostering a positive workplace culture and employee retention."
        />
      </div>

      <div className={`${styles.seventh_row} row`}>
        <ComprehensiveView
          title="Explore our comprehensive guide"
          innerHtml={
            <>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Why should mid-to-large company HR professionals choose a customized rewards and recognition program by EnKash?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Here are some of the reasons why HR of mid-size businesses should choose EnKash for their employee rewards and recognition program:"
                />
              </div>
              <div className="mb-2 d-inline">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Customizable:"
                  />
                </div>
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="EnKash's R&R program is highly customizable, allowing HR professionals to tailor it to the specific needs and culture of their organization"
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
                    title="Corporate Savings:"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title=" EnKash provides bulk order discounts to corporates on a wide variety of brand vouchers across categories, which makes it an excellent option to get maximum savings"
                />
              </div>
              <br /> <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Easy Integration:"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="EnKash easily integrates with HRMS platforms, simplifying the process of employee onboarding and reward allocation for the HR"
                />
              </div>
              <br /> <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Redemption Options:"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="EnKash offers a comprehensive catalog of 400+ brand vouchers like Myntra, Amazon, Zomato, Nykaa, etc., across 20+ categories like entertainment, fashion, travel, etc., that employees can choose from"
                />
              </div>
              <br /> <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Centralized Dashboard:"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="EnKash offers a centralized dashboard, streamlining the management and administration of the R&R program, making it more efficient for HR professionals to implement and maintain the programs at scale"
                />
              </div>
              <div className="mb-2 mt-5">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title=" Why is it essential to implement employee rewards and recognition?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Implementing rewards and recognition programs is crucial because they boost employee morale, productivity, and job satisfaction. With EnKash's employee rewards platform, safety and security are top priorities so employees can use them worry-free. The platform also facilitates easy sharing of vouchers and provides advance expiry alerts, ensuring employees maximize their rewards and remain engaged."
                />
              </div>
            </>
          }
        />
      </div>
    </div>
  );
};

export default employeeRewards;
