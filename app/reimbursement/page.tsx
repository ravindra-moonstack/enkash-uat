import Image from "next/image";
import styles from "./page.module.scss";
import H1 from "@/components/heading/h1";
import H2 from "@/components/heading/h2";
import H4 from "@/components/heading/h4";
import H5 from "@/components/heading/h5";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../constant/common";

import {
  bar,
  blueArrowBackward,
  blueArrowForward,
  laptopScreen,
  newWay,
  oldWay,
  reimbursementCard,
  reimbursementDashboard,
  steps,
} from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";

const reimbursement = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <div className={`row color-white ${styles.first_row}`}>
        <div className="col-6 d-flex flex-column">
          <div className="d-flex mb-4">
            <H1 title="X" color="rainy-blue" />
            <H1 title="penz | Reimbursements" />
          </div>
          <div className="d-flex">
            <H2 title={`EnKash${space}`} color="white" bold={true} />
            <H2 title="minimizes" color="rainy-blue" bold={true} />
          </div>
          <div className="d-flex">
            <H2 title={`distractions${space}`} color="white" bold={true} />
            <H2 title={`so that${space}`} color="white" bold={true} />
            <H2 title="you can" color="rainy-blue" bold={true} />
          </div>
          <div className="d-flex">
            <H2 title="take action." color="rainy-blue" bold={true} />
          </div>
          <div className="d-flex mt-4 pe-5">
            <H5
              title="Maximize productivity within your organization with an easier 
              reimbursement system that helps you track, process and sync data in
               real-time."
              color="white"
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
            src={reimbursementDashboard}
            alt="reimbursement dashboard"
            width={600}
          />
        </div>
      </div>
      <div className={`row d-flex ${styles.second_row}`}>
        <div className="col-12 d-flex justify-content-center">
          <H1 title={`The EnKash Way is${space}`} color="black"></H1>
          <H1 title="the better way." color="equity-blue"></H1>
        </div>
        <div className="col-12 d-flex justify-content-center mb-5">
          <H1 title="Switch to EnKash today!" color="black"></H1>
        </div>
        <div className="col-12 my-5 px-5">
          <Image src={steps} alt="enkash steps" width={1200} />
        </div>
        <div className="col-12 d-flex my-5 align-items-center justify-content-center px-5">
          <Image className="me-2" src={oldWay} alt="enkash steps" width={550} />
          <Image className="me-2" src={blueArrowForward} alt="enkash steps" />
          <Image src={newWay} alt="enkash steps" width={550} />
        </div>
      </div>
      <div className={`row d-flex ${styles.third_row}`}>
        <div className="col-12 d-flex justify-content-center">
          <H1
            title="Streamline Your Reimbursement Process"
            color="equity-blue"
          ></H1>
        </div>
        <div className="col-12 d-flex justify-content-center mb-5">
          <H1 title="with Automated Solutions." color="black"></H1>
        </div>
        <div className="col-12 d-flex justify-content-evenly mt-3">
          <GetStartedCard
            title1="Automated Processes"
            title2=""
            description="A digitized end-to-end solution, automate checking, approvals,
             invoice generation and submission to ensure speed and accuracy."
          />
          <GetStartedCard
            title1="Better Documentation"
            title2=""
            description="Ensure employee compliance with easy-to-use capture modes which 
            captures payments made on behalf of the business in a few simple steps"
          />
          <GetStartedCard
            title1="Real time tracking"
            title2=""
            description="Track spends made on behalf of the business by employees in real time."
          />
        </div>
        <div className="col-12 d-flex justify-content-center mt-4">
          <Image src={bar} alt="progress bar" width={1200} />
        </div>
      </div>
      <div className={`row d-flex ${styles.fourth_row}`}>
        <div className="col-12">
          <H1 title="EnKash Makes Your Business’ Reimbursement" color="white" />
        </div>
        <div className="col-12 d-flex justify-content-center">
          <H1 title="Process Effortless." color="rainy-blue" />
        </div>
        <div className={`col-6 mt-5 d-flex flex-column ${styles.left_row}`}>
          <H1 title="How do Reimbursements work?" color="white" />
          <div className="d-flex align-items-center mt-4">
            <Image
              className="me-2"
              src={blueArrowBackward}
              alt="enkash steps"
            />
            <H1 title="1/5" color="white" />
            <Image className="ms-2" src={blueArrowForward} alt="enkash steps" />
          </div>
        </div>
        <div
          className={`col-6 mt-5 d-flex flex-column justify-content-center  ${styles.right_row}`}
        >
          <Image
            className="mb-4"
            src={reimbursementCard}
            alt="reimbursement card image"
          />
          <H4
            title="Allocate funds for specific expenses and set limits on corporate cards to avoid the risk of overspending."
            color="white"
          />
        </div>
      </div>
      <div className="row">
        <ContactUsCard />
      </div>
    </div>
  );
};

export default reimbursement;
