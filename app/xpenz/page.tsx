import Image from "next/image";
import styles from "./page.module.scss";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "@/constant/common";
import {
  blueArrowForward,
  budgetAndAdvance,
  cashAndCoin,
  coin,
  heirarchyControl,
  laptop,
  officeImg,
  policyApproval,
  progressBar,
  regualation,
  reimbursement,
  rupeeCard,
  scanAndDrop,
  whiteArrow,
  xpenzDashboard,
  oldWay,
  newWay,
  greenArrow,
  cardOne,
  cardTwo,
  cardThree,
} from ".";
import Heading from "@/components/heading/heading";
import ExploreCard from "@/components/explore-card/explore-card";
import EnkashWay from "@/components/enkash-way/enkash-way";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import BlogCard from "@/components/blog-card/blog-card";
import Head from "next/head";
import MenuButton from "@/components/buttons/menu-button/menu-button";

const xpenz = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <div className={`${styles.first_row} row color-white row-padding`}>
        <div className="col-md-6 col-12 d-flex flex-column">
          <div className="d-flex mb-4">
            <Heading title="X" color="rainy-blue" size="h1" weight="7" />
            <Heading title="penz" size="h1" weight="7" />
          </div>
          <div className="d-flex flex-column">
            <Heading
              title="optimize buisness spends"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading title="with a complete overview" color="white" size="h2" />
            <Heading title="of expenses" color="white" size="h2" />
          </div>
          <div className={`mt-4 ${styles.desktop_description}`}>
            <Heading
              title="Maximize productivity within your organization with an easier 
                  reimbursement system that helps you track, process and sync data in
                   real-time."
              color="white"
              size="h6"
              weight="5"
            />
          </div>
          <div className={`mt-4 ${styles.mobile_description}`}>
            <Heading
              title="Maximize productivity within your organization with an easier 
                  reimbursement system that helps you track, process and sync data in
                   real-time."
              color="white"
              size="h5"
              weight="5"
            />
          </div>
          <div className="my-5">
            <PrimaryButton
              title="Enkash Now!"
              theme="theme-blue"
              size="medium"
            />
            <span className="mx-2"></span>
            <SecondryButton
              title="Book a Demo"
              actionImage={whiteArrow}
              size="medium"
              iconSize="small-icon"
            />
          </div>
        </div>
        <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
          <Image
            src={xpenzDashboard}
            alt="reimbursement dashboard"
            className={styles.dashboard_img}
          />
        </div>
      </div>
      <div className={`${styles.second_row} bg-white row d-flex row-padding`}>
        <div
          className={`d-flex col-12 flex-column flex-md-row align-items-center ${styles.card}`}
        >
          <div className="d-flex flex-column flex-md-row">
            <div className={styles.img_container}>
              <Image
                src={laptop}
                alt="office team image"
                className={`${styles.img_container} img-fluid`}
              />
            </div>
            <div
              className={`d-flex flex-column align-items-center ${styles.card_container}`}
            >
              <Heading
                title="How does it work?"
                color="electric-green"
                size="h2"
                weight="6"
              />

              <div className="mt-md-5 mt-3 d-flex flex-column flex-md-row">
                <Image
                  src={rupeeCard}
                  alt="rupee card image"
                  className={`me-5 ${styles.rupee_img}`}
                />
                <Heading
                  title="Make sure your business expenses are paid on time for uninterrupted operations."
                  color="white"
                  size="h5"
                  weight="5"
                />
              </div>

              <div
                className={`d-flex justify-content-center ${styles.progress_bar}`}
              >
                <Image src={progressBar} alt="progress" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-padding-x-only bg-white">
        <div className="col-md-1"></div>
        <div className="col-md-5 col-12 my-md-5 my-3">
          <ExploreCard
            title="Budgets and Advances"
            description="Create budgets, track and optimize expenses, increase savings. "
            theme="blue"
          />
        </div>
        <div className="col-md-5 col-12 d-flex my-md-5 my-3 d-flex justify-content-end blue_grad_bg_two">
          <Image
            src={budgetAndAdvance}
            className="img-fluid"
            alt="payables image"
          />
        </div>
        <div className="col-md-1"></div>
      </div>

      <div className="row row-padding-x-only bg-white">
        <div className="col-md-1"></div>

        <div className="col-md-5 col-12 order-md-1 order-2 d-flex my-md-5 my-3 d-flex justify-content-start blue_grad_bg_two">
          <Image
            src={heirarchyControl}
            className="img-fluid"
            alt="heirarchy control image"
          />
        </div>

        <div className="col-md-5 col-12 order-md-2 order-1 my-md-5 my-3 ">
          <ExploreCard
            title="Hierarchy and Controls"
            description="Create hierarchies and establish control over employee expenditure."
            theme="blue"
          />
        </div>
        <div className="col-md-1"></div>
      </div>

      <div className="row row-padding-top-none bg-white">
        <div className="col-md-1"></div>

        <div className="col-md-5 col-12 px-5 my-md-5 my-3">
          <ExploreCard
            title="Reimbursements"
            description="Fast-track and optimize the entire reimbursement process with better spend overview."
            theme="blue"
          />
        </div>
        <div className="col-md-5 col-12 d-flex my-md-5 my-3 d-flex justify-content-end blue_grad_bg_two">
          <Image
            src={reimbursement}
            className="img-fluid"
            alt="payables image"
          />
        </div>
        <div className="col-md-1"></div>
      </div>

      <div className={`${styles.fourth_row} row row-padding`}>
        <div className="col-md-6 col-12 d-flex mb-5 order-1 order-md-1 justify-content-center">
          <Image
            src={scanAndDrop}
            alt="policy and approval flows image"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 col-12 mb-md-5 mb-3 order-2 order-md-2 px-md-5">
          <ExploreCard
            title="Policy and Approval Flows"
            description="Choose an approval matrix that works best for your business and create and maintain an aligned approval process for all kinds of spends."
            theme="green"
          />
        </div>

        <div className="col-md-6 col-12 mt-5 order-4 order-md-3 px-md-5">
          <ExploreCard
            title="Scan and Drop Receipts"
            description="Leverage OCR for digital receipt management & reconciliation."
            theme="green"
          />
        </div>
        <div className="col-md-6 col-12 d-flex mt-5 order-3 order-md-4">
          <Image
            src={policyApproval}
            alt="scan and drop receipt image"
            className="img-fluid"
          />
        </div>
      </div>

      <div className="row bg-white row-padding">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
          <Heading
            title={`EnKash does${space}`}
            size="h1"
            color="black"
            weight="6"
          />
          <Heading
            title={`the heavy lifting${space}`}
            size="h1"
            color="equity-blue"
            weight="6"
          />
          <Heading title="for you." size="h1" color="black" weight="6" />
        </div>
      </div>

      <div className={`row bg-indi-volt ${styles.fifth_row}`}>
        <div className="d-flex flex-column flex-md-row tex-center justify-content-evenly">
          <div className="md:mb-0 mb-4 text-md-center">
            <Image src={coin} alt="coins icon" className="md:mb-0 mb-4" />
            <Heading
              title="On-time Payments"
              size="h5"
              color="white"
              weight="7"
            />
            <Heading title="Payments" size="h5" color="white" weight="7" />
          </div>
          <div className="mb-4 text-md-center">
            <Image src={regualation} alt="regulation icon" className="mb-4" />
            <Heading title="Spend " size="h5" color="white" weight="7" />
            <Heading title="Regulation" size="h5" color="white" weight="7" />
          </div>
          <div className="mb-4 text-md-center">
            <Image
              src={cashAndCoin}
              alt="cash and coin icon"
              className="md:mb-0 mb-4"
            />
            <Heading
              title="Cash Flow Optimization"
              size="h5"
              color="white"
              weight="7"
            />
            <Heading title="Optimization" size="h5" color="white" weight="7" />
          </div>
        </div>
      </div>
      <div className={`${styles.sixth_row} row d-flex bg-white row-padding`}>
        <div className="col-12 d-flex flex-column flex-md-row justify-content-center align-items-center">
          <Heading
            title={`The EnKash Way is${space}`}
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title="the better way."
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>
        <div className="col-12 d-flex justify-content-center mb-5 text-center">
          <Heading
            title="Switch to EnKash today!"
            color="black"
            size="h1"
            weight="6"
          />
        </div>
        <div
          className={`col-12 d-flex my-md-5 my-3 ${styles.progress_container}`}
        >
          <div className={styles.progress_items}>
            <Heading title="Expense" size="h4" color="equity-blue" weight="7" />
            <br />
            <Heading
              title="Reporting"
              size="h4"
              color="equity-blue"
              weight="7"
            />
          </div>
          <div className={styles.progress_items}>
            <Heading title="Operational" size="h4" color="black" weight="7" />
            <br />
            <Heading title="Efficency" size="h4" color="black" weight="7" />
          </div>
          <div className={styles.progress_items}>
            <Heading title="Spend" size="h4" color="black" weight="7" />
            <br />
            <Heading title="Overview" size="h4" color="black" weight="7" />
          </div>
          <div className={styles.progress_items}>
            <Heading title="Expense" size="h4" color="black" weight="7" />
            <br />
            <Heading title="Approval" size="h4" color="black" weight="7" />
          </div>
          <div className={styles.progress_items}>
            <Heading title="Accessibility" size="h4" color="black" weight="7" />
          </div>
        </div>
        <div className="col-1"></div>
        <div
          className={`col-10 d-flex justify-content-evenly ${styles.progress_bar}`}
        ></div>
        <div className="col-1"></div>

        <div className="col-12 d-flex flex-column flex-lg-row my-5 align-items-center justify-content-center">
          <Image
            className="me-2  img-fluid"
            src={oldWay}
            alt="enkash steps"
            width={550}
          />
          <Image
            className={`me-2 img-fluid ${styles.arrow}`}
            src={blueArrowForward}
            alt="enkash steps"
          />
          <Image
            className="img-fluid"
            src={newWay}
            alt="enkash steps"
            width={550}
          />
        </div>
      </div>
      <div
        className={`row d-flex bg-white row-padding-top-none ${styles.seventh_row}`}
      >
        <div
          className={`d-flex col-12 flex-column-reverse flex-md-row ${styles.container}`}
        >
          <div className={`d-flex flex-column bg-indi-volt ${styles.left_row}`}>
            <div className="d-flex flex-column">
              <div className="d-flex">
                <Heading title="Total" color="white" size="h1" weight="5" />
                <Heading
                  title={`${space}Visibility`}
                  color="electric-green"
                  size="h1"
                  weight="5"
                />
              </div>

              <div className="my-4">
                <Heading
                  title="Gain control over your business spends with a complete overview of all your expenses. Analyze data to create efficient budgets, optimize 
            expenses and increase your savings."
                  color="white"
                  size="h6"
                  weight="4"
                />
              </div>
              <div className="d-flex align-items-center mt-2">
                <Heading
                  title="Get Started"
                  color="electric-green"
                  size="h6"
                  weight="4"
                />
                <Image
                  className="m-2"
                  src={greenArrow}
                  alt="arrow icon"
                  width={50}
                />
              </div>
            </div>
          </div>
          <div className={styles.right_row}>
            <Image
              src={officeImg}
              alt="office team image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="row eigth_row bg-white row-padding">
        <div
          className={`col-12 d-flex flex-md-row mt-3 pb-3 justify-content-md-center ${styles.scroll_container}`}
        >
          <div className="me-4">
            <GetStartedCard
              title1="Digital Receipt Management"
              title2=""
              description="Leverage OCR technology to create a seamless reimbursement process 
            for your employees. Scan or photograph receipts, and upload them for immediate approvals."
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              title1="Approval Process"
              title2=""
              description="Configure approval processes as per the requirements of your business.
             Plan your cash flow better, optimize savings, and accelerate your reimbursement process."
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              title1="Departmental Hierarchy"
              title2=""
              description="Choose an approval matrix that’s best for your business, down to the departmental level. More transparency means increased efficiency and nullified delays."
            />
          </div>
        </div>
      </div>
      <div className="row eigth_row bg-white row-padding text-center">
        <div className="col-12 d-flex justify-content-center">
          <Heading
            title="Expense Management Insights"
            size="h1"
            color="black"
            weight="6"
          />
        </div>
        <div className="col-12 d-flex justify-content-center mt-4">
          <Heading
            title="Blogs to related topics"
            size="h4"
            color="equity-blue"
          />
        </div>
        <div className="col-12 d-flex justify-content-center mt-4">
          <MenuButton title="See all" theme="light" />
        </div>

        <div
          className={`col-12 d-flex justify-content-md-evenly mt-5 pb-3 ${styles.scroll_container}`}
        >
          <div className="me-4 ms-md-4">
            <BlogCard
              title="Lorem ipsum dolor sit amet, consectetur."
              date="Dec 21, 2023"
              description="Lorem ipsum dolor sit amet consectetur. Magna malesuada 
          imperdiet fames feugiat nulla vitae aliquet. Sit purus sociis vitae in mi. Fames et diam quis urna 
         "
              blogImage={cardOne}
              blogImageAlt="office image"
            />
          </div>
          <div className="me-4 ">
            <BlogCard
              title="Lorem ipsum dolor sit amet, consectetur."
              date="Dec 21, 2023"
              description="Lorem ipsum dolor sit amet consectetur. Magna malesuada 
          imperdiet fames feugiat nulla vitae aliquet. Sit purus sociis vitae in mi. Fames et diam quis urna 
          "
              blogImage={cardTwo}
              blogImageAlt="office image"
            />
          </div>

          <div className="me-4">
            <BlogCard
              title="Lorem ipsum dolor sit amet, consectetur."
              date="Dec 21, 2023"
              description="Lorem ipsum dolor sit amet consectetur. Magna malesuada 
          imperdiet fames feugiat nulla vitae aliquet. Sit purus sociis vitae in mi. Fames et diam quis urna 
          "
              blogImage={cardThree}
              blogImageAlt="office image"
            />
          </div>
        </div>
      </div>
      <div className={`row ${styles.eigth_row} bg-equity-blue`}>
        <div className="d-flex justify-content-evenly">
          <Heading
            title="Have Questions about Expense Management?"
            size="h3"
            color="white"
          />
          <div>
            {" "}
            <PrimaryButton
              title="Know More"
              theme="theme-black"
              size="medium"
            />
          </div>
        </div>
      </div>

      <div className="row">
        <ContactUsCard />
      </div>
    </div>
  );
};

export default xpenz;
