import styles from "./page.module.scss";
import PrimaryButton from "../components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import ExploreCard from "@/components/explore-card/explore-card";
import MenuButton from "@/components/buttons/menu-button/menu-button";
import faqData  from "@/constant/faq-data/billPaymentFaq";
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
} from ".";
import Image from "next/image";
import FaqComponent from "@/components/faq/faq";

export const metadata = {
  title: "Asia's 1st and Smartest Spend Management Platform | EnKash",
  description:
    "Enkash is now Asia's 1st and Smartest Spend Management Platform that offer services like Account Payable, Accounts Receivable, Expense Management & many more.",
};

const loginUrl = "https://home.enkash.com/login";

const home = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <div className="">
        <div className="row">
          <FaqComponent faqData={faqData}/>
        </div>
        <div
          className={`row text-center color-white ${styles.bg_rainbow} ${styles.first_row}`}
        >
          <span className={`col-12 ${styles.font_heading}`}>A Spend</span>
          <span className={`col-12 mt-4 ${styles.font_heading}`}>
            Management Solution
          </span>
          <span className={`col-12 mt-5 ${styles.font_heading}`}>
            That Does it All
          </span>
          <div className={`col-12 mt-5`}>
            <div>Now streamline buisiness spend and optimize your cashflow</div>
            <div>with real-time data and insights.</div>
          </div>
          <div className="my-5">
            <PrimaryButton title="Get a Demo" url={loginUrl} />
            <span className="mx-2"></span>
            <SecondryButton title="Watch Video" url={loginUrl} />
          </div>
        </div>
        <div className={`row ${styles.second_row}`}>
          <div className={`col-12`}>
            <div className="sub_heading">
              <b>3 Easy Steps to</b> <br />
              Get Started with EnKash
            </div>
            <div className="d-flex justify-content-evenly align-items-center mt-5">
              <div className="d-flex align-items-center">
                <Image src={userPlus} alt="signup image"></Image>
                <Image
                  className="ms-2"
                  src={numberOne}
                  alt="step one image"
                ></Image>
                <div className="ms-2">Sign Up</div>
              </div>
              <div className="d-flex align-items-center">
                <Image src={userTick} alt="signup image"></Image>
                <Image
                  className="ms-2"
                  src={numberTwo}
                  alt="step one image"
                ></Image>
                <div className="ms-2">Complete KYC Process</div>
              </div>
              <div className="d-flex align-items-center">
                <Image src={stack} alt="signup image"></Image>
                <Image
                  className="ms-2"
                  src={numberThree}
                  alt="step one image"
                ></Image>
                <div className="ms-2">Get Started</div>
              </div>
            </div>
          </div>
        </div>
        <div className={`row ${styles.third_row}`}>
          <div className="col-2"></div>
          <div
            className={`col-8 d-flex flex-column justify-content-center align-items-center px-5`}
          >
            <div className="mb-3 d-flex justify-content-evenly w-100">
              <MenuButton isDisabled={false} title="Manage" theme="dark" />
              <MenuButton isDisabled={false} title="Track" theme="dark" />
              <MenuButton isDisabled={false} title="Customize" theme="dark" />
              <MenuButton isDisabled={false} title="Automate" theme="dark" />
            </div>

            <Image src={dashboard} alt="enkash dashboard" className="w-100" />
          </div>
          <div className="col-2"></div>
          {/* <div className="col-12 d-flex justify-content-center align-items-center p-4">
          
          </div> */}
          <div className="col-12 d-flex justify-content-center align-items-center p-4 text-center">
            <div className="sub_heading mb-5">
              Solutions that let you
              <br />
              <b>streamline cashflow and optimize workflow.</b>
            </div>
          </div>
        </div>
        <div className={`row ${styles.fourth_row}`}>
          <div className="col-6 d-flex flex-column justify-content-center align-items-center color-equity-blue">
            <div className="heading">
              <span className="color-black">Ultimate</span> <br />
              productivity <span className="color-black">and</span> <br />
              control. <span className="color-black">Now at</span> <br />
              your <span className="color-black">fingertips.</span>
            </div>
            <div className={`d-flex flex-column my-5 ${styles.bullet_points}`}>
              <div className="row d-flex my-4">
                <div className="col-6 d-flex">
                  <Image
                    src={automateIcon}
                    alt="automate icon"
                    className="mx-4"
                    height={50}
                  />
                  <div className="color-equity-blue">
                    Intelligent <br />
                    Automation Tools
                  </div>
                </div>
                <div className="col-6 d-flex">
                  <Image
                    src={twoBoxIcon}
                    alt="automate icon"
                    className="mx-4"
                    height={50}
                  />
                  <div className="color-equity-blue">
                    Real-Time Data <br />& Insights
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
                  <div className="color-equity-blue">
                    Optimized Business <br />
                    Productivity
                  </div>
                </div>
                <div className="col-6 d-flex">
                  <Image
                    src={circleRupeeIcon}
                    alt="automate icon"
                    className="mx-4"
                    height={50}
                  />
                  <div className="color-equity-blue">
                    Unparalleled <br />
                    Savings
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
          <div className={`col-6 d-flex mb-5 ${styles.blue_grad_bg}`}>
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
              <span className={styles.title}>
                <span className="color-electric-green">Say yes to better</span>{" "}
                <br />
                approval flows.
              </span>
              <span className={styles.description}>
                Choose an approval matrix that’s best for your business, down to
                the departmental level. Transparent approval processes increase
                efficiency and nullify delays.
              </span>
              <div className="mt-5">
                <PrimaryButton title="Get a Demo" url={loginUrl} />
              </div>
            </div>

            <Image src={teamImg} alt="office team image" />
          </div>
        </div>
        <div className={`row d-flex d-flex ${styles.eigth_row}`}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="heading">
              <span className="color-black">Discover full control.</span>
              <br />{" "}
              <span className="color-equity-blue">Discover freedom.</span>
            </div>
            <div className={styles.description}>
              Leverage the power of purpose-based cards with smart controls.
            </div>
          </div>
        </div>
        <div className={`row ${styles.ninth_row}`}>
          <div className={`col-6 d-flex mb-5 ${styles.blue_grad_bg_light}`}>
            <Image src={corporateCardsImg} height={400} alt="payables image" />
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
          <div className={`col-6 d-flex mb-5 ${styles.blue_grad_bg_light}`}>
            <Image
              src={diyCardsModuleImg}
              height={400}
              alt="receivable image"
            />
          </div>
        </div>
        <div className={`row ${styles.tenth_row}`}>
          <div className="col-12 d-flex justify-content-center heading">
            <span className="color-equity-blue">Loyalty</span>
            <span className="color-black ms-2">Lounge</span>
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
                <MenuButton
                  isDisabled={false}
                  title="Gift Card"
                  theme="light"
                />
              </div>
              <MenuButton isDisabled={false} title="Offers" theme="light" />
            </div>
            <div className="d-flex description color-black mt-3">
              200+ brand vouchers for corporate gifting. The more you spend, the
              more you’ll earn, and the closer you’ll get to unlocking more and
              more rewards.
            </div>
            <div className="d-flex mt-3">
              <PrimaryButton title="Get a Demo" isDisabled={false} url="" />
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
            <div className="sub_heading">
              <b>3 Easy Steps to</b> <br />
              Get Started with EnKash
            </div>
            <div className="d-flex justify-content-evenly align-items-center mt-5">
              <div className="d-flex align-items-center">
                <Image src={userPlus} alt="signup image"></Image>
                <Image
                  className="ms-2"
                  src={numberOne}
                  alt="step one image"
                ></Image>
                <div className="ms-2">Sign Up</div>
              </div>
              <div className="d-flex align-items-center">
                <Image src={userTick} alt="signup image"></Image>
                <Image
                  className="ms-2"
                  src={numberTwo}
                  alt="step one image"
                ></Image>
                <div className="ms-2">Complete KYC Process</div>
              </div>
              <div className="d-flex align-items-center">
                <Image src={stack} alt="signup image"></Image>
                <Image
                  className="ms-2"
                  src={numberThree}
                  alt="step one image"
                ></Image>
                <div className="ms-2">Get Started</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
