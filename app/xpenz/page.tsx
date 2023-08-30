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
  xpenzDashboard,
} from ".";
import Heading from "@/components/heading/heading";
import { progress } from "framer-motion";
import { laptopScreen } from "../reimbursement";
import ExploreCard from "@/components/explore-card/explore-card";
import EnkashWay from "@/components/enkash-way/enkash-way";

const xpenz = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <div className={`row color-white ${styles.first_row}`}>
        <div className="col-6 d-flex flex-column">
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
            <SecondryButton title="Book a Demo" />
          </div>
        </div>
        <div className="col-6 d-flex justify-content-center">
          <Image
            src={xpenzDashboard}
            alt="reimbursement dashboard"
            width={600}
          />
        </div>
      </div>
      <div className={`row d-flex ${styles.second_row}`}>
        <div className={`d-flex col-12 flex-row`}>
          <Image src={laptop} alt="office team image" />
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
      <div className={`row d-flex ${styles.second_row}`}>
        <div className="col-6 my-5 px-5">
          <ExploreCard
            title="Budgets and Advances"
            description="Create budgets, track and optimize expenses, increase savings. "
            theme="blue"
          />
        </div>
        <div className="col-6 d-flex my-5 d-flex justify-content-center blue_grad_bg_two">
          <Image src={budgetAndAdvance} width={350} alt="payables image" />
        </div>
        <div className="col-6 d-flex my-5 d-flex justify-content-center blue_grad_bg_two">
          <Image src={heirarchyControl} width={350} alt="payables image" />
        </div>
        <div className="col-6 my-5 px-5">
          <ExploreCard
            title="Hierarchy and Controls"
            description="Create hierarchies and establish control over employee expenditure."
            theme="blue"
          />
        </div>
        <div className="col-6 px-5 my-5">
          <ExploreCard
            title="Reimbursements"
            description="Fast-track and optimize the entire reimbursement process with better spend overview."
            theme="blue"
          />
        </div>
        <div className="col-6 d-flex my-5 d-flex justify-content-center blue_grad_bg_two">
          <Image src={reimbursement} width={350} alt="payables image" />
        </div>
      </div>
      <div className={`row ${styles.third_row}`}>
        <div className="col-6 d-flex mb-5">
          <Image src={policyApproval} alt="payables image" />
        </div>
        <div className="col-6 mb-5 px-5">
          <ExploreCard
            title="Scan and Drop Receipts"
            description="Leverage OCR for digital receipt management & reconciliation."
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
          <Image src={scanAndDrop} alt="receivable image" />
        </div>
      </div>
      <div className={`row bg-white ${styles.fourth_row}`}>
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
        <div className="d-flex justify-content-evenly">
          <div>
            <Image src={coin} alt="coins icon" />
            <Heading title="On-time" size="h5" color="white" />
            <Heading title="Payments" size="h5" color="white" />
          </div>
          <div>
            <Image src={regualation} alt="regulation icon" />
            <Heading title="Spend" size="h5" color="white" />
            <Heading title="Regulation" size="h5" color="white" />
          </div>
          <div>
            <Image src={cashAndCoin} alt="cash and coin icon" />
            <Heading title="Cash Flow" size="h5" color="white" />
            <Heading title="Optimization" size="h5" color="white" />
          </div>
        </div>
      </div>
      <div className={`row d-flex bg-white ${styles.sixth_row}`}>
        <EnkashWay />
      </div>
      <div className={`row d-flex ${styles.seventh_row}`}>
        <div className={`d-flex col-12 flex-row`}>
          <div className={`d-flex flex-column bg-indi-volt ${styles.left_row}`}>
            <ExploreCard
              title="Total Visibility"
              description="Gain control over your business spends with a complete overview of all your expenses. Analyze data to create efficient budgets, optimize 
            expenses and increase your savings."
              theme="green"
            />
          </div>
          <div className={styles.right_row}>
            <Image src={officeImg} alt="office team image" width={500} />
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
