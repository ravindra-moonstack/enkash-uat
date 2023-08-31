import Image from "next/image";
import styles from "./page.module.scss";
import PrimaryButton from "../components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import MenuButton from "@/components/buttons/menu-button/menu-button";
import ExploreCard from "@/components/explore-card/explore-card";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import { space } from "@/constant/common";

import {
  dashboard,
  iphoneDashboard,
  numberOne,
  numberThree,
  numberTwo,
  stack,
  userPlus,
  userTick,
  automateIcon,
  twoBoxIcon,
  blueBoxIcon,
  circleRupeeIcon,
  payablesImage,
  receivableImage,
  expenseDashboard,
  teamImg,
  corporateCardsImg,
  diyCardsModuleImg,
  loyaltyLoungeMobileImg,
  mobileIntegration,
  inc42,
  paymentAndCardSummit,
  nasscom,
  testimonials,
  userImg,
  whiteArrow,
} from ".";
import Heading from "@/components/heading/heading";
import Head from "next/head";

export const metadata = {
  title: "Asia's 1st and Smartest Spend Management Platform | EnKash",
  description:
    "Enkash is now Asia's 1st and Smartest Spend Management Platform that offer services like Account Payable, Accounts Receivable, Expense Management & many more.",
};

const loginUrl = "https://home.enkash.com/login";

const home = () => {
  return (
    <div className={styles.home_container}>
      <div
        className={`first_row row text-center color-white bg-indi-volt row-padding ${styles.bg_rainbow}`}
      >
        <span className="col-12">
          <Heading title="A Spend" size="h0" />
        </span>
        <span className="col-12 mt-4">
          <Heading title="Management Solution" size="h0" />
        </span>
        <span className="col-12 mt-5">
          <Heading title="That Does it All" size="h0" />
        </span>
        <div className={`col-12 mt-5`}>
          <div>
            <Heading
              title="Now streamline buisiness spend and optimize your cashflow"
              size="h5"
            />
          </div>
          <div>
            <Heading title="with real-time data and insights." size="h5" />
          </div>
        </div>
        <div className="my-5">
          <PrimaryButton title="Get a Demo" url={loginUrl} theme="theme-blue" />
          <span className="mx-2"></span>
          <SecondryButton
            title="Watch Video"
            actionImage={whiteArrow}
            url={loginUrl}
          />
        </div>
      </div>
      <div
        className={`${styles.second_row} row d-flex justify-content-center align-items-center
       text-center color-white bg-indi-volt row-padding`}
      >
        <div className={`col-12`}>
          <div>
            <Heading
              title="3 Easy Steps to"
              color="white"
              size="h2"
              weight="bold"
            />
          </div>
          <div>
            <Heading
              title="Get Started with EnKash"
              color="white"
              size="h2"
              weight="normal"
            />
          </div>

          <div className="d-flex justify-content-evenly align-items-center mt-5">
            <div className="d-flex align-items-center">
              <Image src={userPlus} alt="signup image"></Image>
              <Image
                className="ms-2"
                src={numberOne}
                alt="step one image"
              ></Image>
              <div className="ms-2">
                <Heading title="Sign Up" size="h5" />
              </div>
            </div>
            <div className="d-flex align-items-center">
              <Image src={userTick} alt="signup image"></Image>
              <Image
                className="ms-2"
                src={numberTwo}
                alt="step one image"
              ></Image>
              <div className="ms-2">
                <Heading title="Complete KYC Process" size="h5" />
              </div>
            </div>
            <div className="d-flex align-items-center">
              <Image src={stack} alt="signup image"></Image>
              <Image
                className="ms-2"
                src={numberThree}
                alt="step one image"
              ></Image>
              <div className="ms-2">
                <Heading title="Get Started" size="h5" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div className={styles.email_box}>
            <div className="me-4 w-full d-flex align-items-center">
              <input type="text" placeholder="Enter your email"></input>
            </div>
            <div>
              <PrimaryButton title="Get Started Now" theme="theme-blue" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`third_row row color-white row-padding px-5 mt-5 ${styles.bg_traingle_stack}`}
      >
        <div className="col-2"></div>
        <div
          className={`col-8 d-flex flex-column justify-content-center align-items-center px-5`}
        >
          <div className="mb-4 d-flex justify-content-evenly w-100">
            <MenuButton isDisabled={false} title="Manage" theme="dark" />
            <MenuButton isDisabled={false} title="Track" theme="secondary" />
            <MenuButton
              isDisabled={false}
              title="Customize"
              theme="secondary"
            />
            <MenuButton isDisabled={false} title="Automate" theme="secondary" />
          </div>

          <Image
            src={dashboard}
            alt="enkash dashboard"
            className="w-100"
            height={500}
          />
        </div>
        <div className="col-2"></div>
        <div className="col-12 d-flex justify-content-center align-items-center p-4 text-center">
          <div className="sub_heading mb-5">
            <div>
              <Heading
                title="Solutions that let you"
                size="h2"
                weight="light"
              />
            </div>
            <div>
              <Heading
                title="streamline cashflow and optimize workflow."
                size="h2"
                weight="bold"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`row ${styles.fourth_row}`}>
        <div className="col-6 d-flex flex-column justify-content-center align-items-center">
          <div>
            <Heading title="Ultimate" color="black" size="h1" />
            <div>
              <Heading
                title={`productivity${space}`}
                color="equity-blue"
                size="h1"
              />
              <Heading title="and" color="black" size="h1" />
            </div>
            <div>
              <Heading
                title={`control${space}`}
                color="equity-blue"
                size="h1"
              />
              <Heading title="Now at" color="black" size="h1" />
            </div>
            <div>
              <Heading title={`your${space}`} color="equity-blue" size="h1" />
              <Heading title="fingertips." color="equity-blue" size="h1" />
            </div>
          </div>
          <div className="d-flex flex-column my-5">
            <div className="row d-flex my-4">
              <div className="col-6 d-flex">
                <Image
                  src={automateIcon}
                  alt="automate icon"
                  className="mx-4"
                  height={50}
                />
                <div>
                  <Heading title="Intelligent" color="equity-blue" size="h5" />
                  <Heading
                    title="Automation Tools"
                    color="equity-blue"
                    size="h5"
                  />
                </div>
              </div>
              <div className="col-6 d-flex">
                <Image
                  src={twoBoxIcon}
                  alt="automate icon"
                  className="mx-4"
                  height={50}
                />
                <div>
                  <Heading
                    title="Real-Time Data"
                    color="equity-blue"
                    size="h5"
                  />
                  <Heading title="& Insights" color="equity-blue" size="h5" />
                </div>
              </div>
            </div>
            <div className="row d-flex my-4">
              <div className="col-6 d-flex">
                <Image
                  src={blueBoxIcon}
                  alt="automate icon"
                  className="mx-4"
                  height={50}
                />
                <div>
                  <Heading
                    title="Optimized Business"
                    color="equity-blue"
                    size="h5"
                  />
                  <Heading title="Productivity" color="equity-blue" size="h5" />
                </div>
              </div>
              <div className="col-6 d-flex">
                <Image
                  src={circleRupeeIcon}
                  alt="automate icon"
                  className="mx-4"
                  height={50}
                />
                <div>
                  <Heading title="Unparalleled" color="equity-blue" size="h5" />
                  <Heading title="Savings" color="equity-blue" size="h5" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 d-flex position-relative">
          <Image
            src={dashboard}
            alt="enkash dashboard image"
            className={styles.desktop_img}
          />
          <Image
            src={iphoneDashboard}
            alt="enkash dashboard mobile image"
            className={styles.iphone_img}
          />
        </div>
      </div>
      <div className={`row ${styles.fifth_row}`}>
        <div className="col-6 d-flex mb-5">
          <Image src={payablesImage} alt="payables image" />
        </div>
        <div className="col-6 mb-5 px-5">
          <ExploreCard
            title="Payables"
            description=" Manage all outgoing expenses in one place. Our online platform
              keeps track of all your business expenditures, and gives you
              timely reminders that ensure all necessary payments are paid,
              with no delays."
            theme="green"
          />
        </div>
        <div className="col-6 mt-5 px-5">
          <ExploreCard
            title="Receivables"
            description="EnKash empowers your business by providing intelligent
                automation tools that help you end time-consuming manual
                follow-ups and create better collection strategies."
            theme="green"
          />
        </div>
        <div className="col-6 d-flex mt-5">
          <Image src={receivableImage} alt="receivable image" />
        </div>
      </div>
      <div className={`row d-flex ${styles.sixth_row}`}>
        <div className="col-6 d-flex mb-5 blue_grad_bg_one">
          <Image src={expenseDashboard} alt="payables image" />
        </div>
        <div className="col-6 mb-5 px-5">
          <ExploreCard
            title="Expense Management"
            description="Gain control over your business spends with a complete overview
              of all your expenses. Analyze data to create efficient budgets,
              optimize expenses and scale your business."
            theme="blue"
          />
        </div>
      </div>
      <div className={`row d-flex ${styles.seventh_row}`}>
        <div className={`d-flex col-12 flex-row`}>
          <div className={`d-flex flex-column ${styles.card_container}`}>
            <Heading
              title="Say yes to better"
              color="electric-green"
              size="h2"
            />
            <Heading title="approval flows." color="white" size="h2" />
            <div className="mt-2">
              <Heading
                title="Choose an approval matrix that’s best for your business, down to
                the departmental level. Transparent approval processes increase
                efficiency and nullify delays.Choose an approval matrix that’s best for your business, down to
                the departmental level. Transparent approval processes increase
                efficiency and nullify delays."
                color="white"
                size="h6"
              />
            </div>

            <div className="mt-5">
              <PrimaryButton
                title="Get a Demo"
                url={loginUrl}
                theme="theme-green"
              />
            </div>
          </div>

          <Image src={teamImg} alt="office team image" />
        </div>
      </div>
      <div className={`row d-flex d-flex ${styles.eigth_row}`}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div>
            <Heading title="Discover full control." color="black" size="h1" />
          </div>
          <div>
            <Heading title="Discover freedom." color="equity-blue" size="h1" />
          </div>
          <div className="mt-2">
            <Heading
              title="Leverage the power of purpose-based cards with smart controls."
              color="equity-blue"
              size="h4"
            />
          </div>
        </div>
      </div>
      <div className={`row ${styles.ninth_row}`}>
        <div className="col-6 d-flex mb-5 d-flex justify-content-center blue_grad_bg_two">
          <Image src={corporateCardsImg} width={350} alt="payables image" />
        </div>
        <div className="col-6 mb-5 px-5">
          <ExploreCard
            title="Corporate Cards"
            description="Issue cards for different purposes, and manage them all on a single platform with smart controls. Enable or disable spend categories as and when required."
            theme="blue"
          />
        </div>
        <div className="col-6 mt-5 px-5">
          <ExploreCard
            title="DIY Card Module"
            description="Create purpose-made company cards yourself or empower employees and departments to generate cards, set usage limits, track, manage, and control card spends."
            theme="blue"
          />
        </div>
        <div className="col-6 d-flex mb-5 d-flex justify-content-center blue_grad_bg_two">
          <Image src={diyCardsModuleImg} width={350} alt="receivable image" />
        </div>
      </div>
      <div className={`row ${styles.tenth_row}`}>
        <div className="col-12 d-flex justify-content-center">
          <div>
            <Heading title={`Loyalty ${space}`} color="black" size="h1" />
            <Heading title="Lounge" color="equity-blue" size="h1" />
          </div>
        </div>
        <div className="col-6 d-flex flex-column mt-5">
          <div className="d-flex">
            <div className="me-2">
              <MenuButton isDisabled={false} title="Voucher" theme="light" />
            </div>
            <div className="me-2">
              <MenuButton isDisabled={false} title="Reward" theme="light" />
            </div>
            <MenuButton isDisabled={false} title="Incentive" theme="light" />
          </div>
          <div className="d-flex mt-3">
            <div className="me-2">
              <MenuButton isDisabled={false} title="Gift Card" theme="light" />
            </div>
            <MenuButton isDisabled={false} title="Offers" theme="light" />
          </div>
          <div className="d-flex mt-3">
            <Heading
              title="200+ brand vouchers for corporate gifting. The more you spend, the
              more you’ll earn, and the closer you’ll get to unlocking more and
              more rewards."
              color="black"
              size="h5"
            />
          </div>
          <div className="d-flex mt-3">
            <PrimaryButton
              title="Get a Demo"
              isDisabled={false}
              url=""
              theme="theme-blue"
            />
          </div>
        </div>
        <div className="col-6 d-flex justify-content-center mt-5">
          <Image
            src={loyaltyLoungeMobileImg}
            alt="loyalty lounge image"
            width={300}
          />
        </div>
      </div>
      <div className={`row ${styles.eleventh_row}`}>
        <div className={`col-12`}>
          <div>
            <Heading title="3 Easy Steps to" color="white" size="h2" />
          </div>
          <div>
            <Heading title="Get Started with EnKash" color="white" size="h2" />
          </div>
          <div className="d-flex justify-content-evenly align-items-center mt-5">
            <div className="d-flex align-items-center">
              <Image src={userPlus} alt="signup image"></Image>
              <Image
                className="ms-2"
                src={numberOne}
                alt="step one image"
              ></Image>
              <div className="ms-2">
                <Heading title="Sign Up" size="h5" />
              </div>
            </div>
            <div className="d-flex align-items-center">
              <Image src={userTick} alt="signup image"></Image>
              <Image
                className="ms-2"
                src={numberTwo}
                alt="step one image"
              ></Image>
              <div className="ms-2">
                <Heading title="Complete KYC Process" size="h5" />
              </div>
            </div>
            <div className="d-flex align-items-center">
              <Image src={stack} alt="signup image"></Image>
              <Image
                className="ms-2"
                src={numberThree}
                alt="step one image"
              ></Image>
              <div className="ms-2">
                <Heading title="Get Started" size="h5" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`row ${styles.twelfth_row}`}>
        <div className="d-flex">
          <div className="me-4">
            <GetStartedCard
              title1="Optimize Spending;"
              title2="save more."
              description="Power your business with a centralized spend management
               platform & save countless working hours."
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              title1="Total Visibility;"
              title2="smarter controls."
              description="Power your business with a centralized spend management
               platform & save countless working hours."
            />
          </div>
          <div>
            <GetStartedCard
              title1="Convenient solutions to scale faster."
              title2="to scale faster."
              description="Power your business with a centralized spend management
               platform & save countless working hours."
            />
          </div>
        </div>
      </div>
      <div className={`row ${styles.thirteenth_row}`}>
        <div className="col-6 d-flex justify-content-center mt-5 blue_grad_bg_three">
          <Image
            src={mobileIntegration}
            alt="mobile integrations"
            width={400}
          />
        </div>
        <div className="col-6 d-flex flex-column mt-5">
          <div className="mt-3">
            <div>
              <Heading
                title="Integrate Seamlessly;"
                color="equity-blue"
                size="h1"
              />
            </div>
            <Heading title="Connect Systems Readily." color="black" size="h1" />
          </div>
          <div>
            <Heading
              title="Our platform links seamlessly with any accounting, ERP
                solution you currently use like Tally, Quickbooks, SAP amongst
                others. Ensure your books are always audit ready and view real-time
                up-to-the-minute data."
              color="black"
              size="h5"
            />
          </div>
          <div className="d-flex mt-3">
            <PrimaryButton
              title="Get a Demo"
              isDisabled={false}
              url=""
              theme="theme-blue"
            />
          </div>
        </div>
      </div>
      <div className={`row ${styles.fourteenth_row}`}>
        <div className={`d-flex ${styles.box}`}>
          <div
            className={`d-flex flex-column justify-content-between  ${styles.box_item}`}
          >
            <div className="mb-5">
              <Heading title="Startups to Watch" color="black" size="h5" />
            </div>
            <div className="mt-5">
              <Image src={inc42} alt="inc42 logo" width={250} />
            </div>
          </div>
          <div
            className={`d-flex flex-column bg-black justify-content-between ${styles.box_item}`}
          >
            <div className="mb-5">
              <Heading
                title="Winner - India Fintech Awards 2020"
                color="electric-green"
                size="h5"
              />
            </div>
            <div className="mt-5">
              <Image src={nasscom} alt="nasscom logo" width={250} />
            </div>
          </div>
          <div
            className={`d-flex flex-column justify-content-betweens ${styles.box_item}`}
          >
            <div className="mb-5">
              <Heading
                title="Best B2B Solution Provider"
                color="black"
                size="h5"
              />
            </div>
            <div className="mt-5">
              <Image
                src={paymentAndCardSummit}
                alt="payment and card summit logo"
                width={250}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`row ${styles.fifthteen_row}`}>
        <div className="col-12 mb-5 d-flex justify-content-center">
          <div>
            <Heading title="Trusted by " color="white" size="h1" />
          </div>
          <div>
            <Heading title="1000+ " color="electric-green" size="h1" />
          </div>
          <div>
            <Heading title="companies." color="white" size="h1" />
          </div>
        </div>
        <div
          className={`col-6 d-flex flex-column  ${styles.testimonials_section}`}
        >
          <div>
            <Heading title="NTech Media" color="electric-green" size="h5" />
          </div>
          <div>
            <Heading
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              quis, ornare metus nec, feugiat erat."
              size="h4"
            />
          </div>
          <div className="d-flex mt-4 align-items-center">
            <div className="me-4">
              <Image src={userImg} alt="enkash user image" />
            </div>
            <div className="d-flex flex-column">
              <Heading title="- Manoj Day, CEO," size="h5" />
              <Heading title=" NTech Media" size="h5" />
            </div>
          </div>
        </div>
        <div className="col-6">
          <Image src={testimonials} alt="enkash testimonials" width={600} />
        </div>
      </div>
      <div className={`row ${styles.sixteenth_row}`}>
        <ContactUsCard />
      </div>
    </div>
  );
};

export default home;
