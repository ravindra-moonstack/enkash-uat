import Image from "next/image";
import styles from "./page.module.scss";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "@/constant/common";
import {
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
} from ".";
import Heading from "@/components/heading/heading";
import ExploreCard from "@/components/explore-card/explore-card";
import EnkashWay from "@/components/enkash-way/enkash-way";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import BlogCard from "@/components/blog-card/blog-card";

const xpenz = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <div className={`${styles.first_row} row color-white row-padding`}>
        <div className="col-md-6 col-12 d-flex flex-column">
          <div className="d-flex mb-4">
            <Heading title="X" color="rainy-blue" size="h1" />
            <Heading title="penz" size="h1" />
          </div>
          <div className="d-flex flex-column">
            <Heading
              title="optimize buisness spends"
              color="rainy-blue"
              size="h2"
            />
            <Heading title="with a complete overview" color="white" size="h2" />
            <Heading title="of expenses" color="white" size="h2" />
          </div>
          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Maximize productivity within your organization with an easier 
                  reimbursement system that helps you track, process and sync data in
                   real-time."
              color="white"
              size="h5"
            />
          </div>
          <div className="my-5">
            <PrimaryButton title="Enkash Now!" theme="theme-blue" />
            <span className="mx-2"></span>
            <SecondryButton title="Book a Demo" actionImage={whiteArrow} />
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
      <div className={`${styles.second_row} row d-flex bg-white row-padding`}>
        <div className={`d-flex col-12 flex-column flex-md-row`}>
          <Image src={laptop} alt="office team image" className="img-fluid" />
          <div className="d-flex flex-column justify-content-center align-items-center bg-indi-volt">
            <Heading
              title="How does it work?"
              color="electric-green"
              size="h2"
            />
            <div className="d-flex mt-2 px-5 mt-5">
              <div className="px-5">
                <Image src={rupeeCard} alt="rupee card image" width={100} />
              </div>
              <div className="px-5">
                <Heading
                  title="Make sure your business expenses are 
                paid on time for uninterrupted 
                operations."
                  color="white"
                  size="h6"
                />
              </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <Image src={progressBar} alt="progress bard" height={10} />
            </div>
          </div>
        </div>
      </div>
      <div className="third_row row d-flex row-padding-top-none bg-white">
        <div className="col-md-6 col-12 my-5 px-5">
          <ExploreCard
            title="Budgets and Advances"
            description="Create budgets, track and optimize expenses, increase savings. "
            theme="blue"
          />
        </div>
        <div className="col-md-6 col-12 d-flex my-5 d-flex justify-content-center blue_grad_bg_two">
          <Image
            src={budgetAndAdvance}
            className="img-fluid"
            alt="payables image"
          />
        </div>

        <div className="col-md-6 col-12 d-flex my-5 d-flex justify-content-center blue_grad_bg_two">
          <Image
            src={heirarchyControl}
            className="img-fluid"
            alt="heirarchy control image"
          />
        </div>

        <div className="col-md-6 col-12 my-5 px-5 ">
          <ExploreCard
            title="Hierarchy and Controls"
            description="Create hierarchies and establish control over employee expenditure."
            theme="blue"
          />
        </div>

        <div className="col-md-6 col-12 px-5 my-5">
          <ExploreCard
            title="Reimbursements"
            description="Fast-track and optimize the entire reimbursement process with better spend overview."
            theme="blue"
          />
        </div>
        <div className="col-md-6 col-12 d-flex my-5 d-flex justify-content-center blue_grad_bg_two">
          <Image
            src={reimbursement}
            className="img-fluid"
            alt="payables image"
          />
        </div>
      </div>
      <div className={`${styles.fourth_row} row row-padding`}>
        <div className="col-md-6 col-12 d-flex mb-5">
          <Image
            src={policyApproval}
            alt="payables image"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 col-12 mb-5 px-5">
          <ExploreCard
            title="Scan and Drop Receipts"
            description="Leverage OCR for digital receipt management & reconciliation."
            theme="green"
          />
        </div>
        <div className="col-md-6 col-12 mt-5 px-5">
          <ExploreCard
            title="Receivables"
            description="EnKash empowers your business by providing intelligent
                automation tools that help you end time-consuming manual
                follow-ups and create better collection strategies."
            theme="green"
          />
        </div>
        <div className="col-md-6 col-12 d-flex mt-5">
          <Image
            src={scanAndDrop}
            alt="receivable image"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row bg-white row-padding">
        <div className="d-flex justify-content-center">
          <Heading title={`EnKash does${space}`} size="h1" color="black" />
          <Heading
            title={`the heavy lifting${space}`}
            size="h1"
            color="equity-blue"
          />
          <Heading title="for you." size="h1" color="black" />
        </div>
      </div>
      <div className={`row bg-indi-volt ${styles.fifth_row}`}>
        <div className="d-flex flex-column flex-md-row align-items-center tex-center justify-content-evenly">
          <div className="md:mb-0 mb-4">
            <Image src={coin} alt="coins icon" className="md:mb-0 mb-4" />
            <Heading title="On-time" size="h5" color="white" />
            <Heading title="Payments" size="h5" color="white" />
          </div>
          <div className="md:mb-0 mb-4">
            <Image
              src={regualation}
              alt="regulation icon"
              className="md:mb-0 mb-4"
            />
            <Heading title="Spend" size="h5" color="white" />
            <Heading title="Regulation" size="h5" color="white" />
          </div>
          <div className="md:mb-0 mb-4">
            <Image
              src={cashAndCoin}
              alt="cash and coin icon"
              className="md:mb-0 mb-4"
            />
            <Heading title="Cash Flow" size="h5" color="white" />
            <Heading title="Optimization" size="h5" color="white" />
          </div>
        </div>
      </div>
      <div className="sixth_row row d-flex bg-white row-padding">
        <EnkashWay />
      </div>
      <div className={`row d-flex bg-white row-padding ${styles.seventh_row}`}>
        <div
          className={`d-flex col-12 flex-column flex-md-row ${styles.container}`}
        >
          <div className={`d-flex flex-column bg-indi-volt ${styles.left_row}`}>
            <ExploreCard
              title="Total Visibility"
              description="Gain control over your business spends with a complete overview of all your expenses. Analyze data to create efficient budgets, optimize 
            expenses and increase your savings."
              theme="green"
            />
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
        <div className="col-12 d-flex flex-column flex-md-row justify-content-evenly mt-3">
          <div className="mb-4 md:mb-0">
            <GetStartedCard
              title1="Digital Receipt Management"
              title2=""
              description="Leverage OCR technology to create a seamless reimbursement process 
            for your employees. Scan or photograph receipts, and upload them for immediate approvals."
            />
          </div>
          <div className="mb-4 md:mb-0">
            <GetStartedCard
              title1="Approval Process"
              title2=""
              description="Configure approval processes as per the requirements of your business.
             Plan your cash flow better, optimize savings, and accelerate your reimbursement process."
            />
          </div>
          <div className="mb-4 md:mb-0">
            <GetStartedCard
              title1="Departmental Hierarchy"
              title2=""
              description="Choose an approval matrix that’s best for your business, down to the departmental level. More transparency means increased efficiency and nullified delays."
            />
          </div>
        </div>
      </div>
      <div className="row eigth_row bg-white row-padding">
        <div className="col-12 d-flex justify-content-center">
          <Heading
            title="Expense Management Insights"
            size="h1"
            color="black"
          />
        </div>
        <div className="col-12 d-flex justify-content-center mt-3">
          <Heading
            title="Expense Management Insights"
            size="h5"
            color="equity-blue"
          />
        </div>
        <div className="col-12 d-flex justify-content-center mt-3">
          <PrimaryButton title="See all" />
        </div>

        <div className="col-12 d-flex flex-column flex-md-row justify-content-evenly mt-5">
          <div className="mb-4 md:mb-0">
            <BlogCard
              title="Lorem ipsum dolor sit amet, consectetur."
              date="Dec 21, 2023"
              description="Lorem ipsum dolor sit amet consectetur. Magna malesuada 
          imperdiet fames feugiat nulla vitae aliquet. Sit purus sociis vitae in mi. Fames et diam quis urna 
          vestibulum ipsum. Nibh vestibulum ut viverra mattis."
              blogImage={laptop}
              blogImageAlt="office image"
            />
          </div>
          <div className="mb-4 md:mb-0">
            <BlogCard
              title="Lorem ipsum dolor sit amet, consectetur."
              date="Dec 21, 2023"
              description="Lorem ipsum dolor sit amet consectetur. Magna malesuada 
          imperdiet fames feugiat nulla vitae aliquet. Sit purus sociis vitae in mi. Fames et diam quis urna 
          vestibulum ipsum. Nibh vestibulum ut viverra mattis."
              blogImage={officeImg}
              blogImageAlt="office image"
            />
          </div>

          <div className="mb-4 md:mb-0">
            <BlogCard
              title="Lorem ipsum dolor sit amet, consectetur."
              date="Dec 21, 2023"
              description="Lorem ipsum dolor sit amet consectetur. Magna malesuada 
          imperdiet fames feugiat nulla vitae aliquet. Sit purus sociis vitae in mi. Fames et diam quis urna 
          vestibulum ipsum. Nibh vestibulum ut viverra mattis."
              blogImage={laptop}
              blogImageAlt="office image"
            />
          </div>
        </div>
      </div>
      <div className="row eigth_row bg-equity-blue row-padding">
        <div className="d-flex justify-content-evenly">
          <Heading
            title="Have Questions about Expense Management?"
            size="h3"
            color="white"
          />
          <PrimaryButton title="Know More" theme="theme-black" />
        </div>
      </div>

      <div className="row">
        <ContactUsCard />
      </div>
    </div>
  );
};

export default xpenz;
