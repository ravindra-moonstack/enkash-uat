import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../constant/common";
import faqData from "@/constant/faq-data/billPaymentFaq";
import carouselData from "./carouselData";

import {
  bar,
  newWay,
  oldWay,
  reimbursementCard,
  reimbursementDashboard,
  whiteArrow,
} from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import EnkashWay from "@/components/enkash-way/enkash-way";
import FaqComponent from "@/components/faq/faq";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";

const reimbursement = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-4">
            <Heading title="X" color="rainy-blue" size="h4" />
            <Heading title="penz | Reimbursements" size="h4" />
          </div>
          <div className="d-flex">
            <Heading title={`EnKash${space}`} color="white" size="h2" />
            <Heading title="minimizes" color="rainy-blue" size="h2" />
          </div>
          <div className="d-flex">
            <Heading title={`distractions${space}`} color="white" size="h2" />
            <Heading title={`so that${space}`} color="white" size="h2" />
            <Heading title="you can" color="rainy-blue" size="h2" />
          </div>
          <div className="d-flex">
            <Heading title="take action." color="rainy-blue" size="h2" />
          </div>
          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Maximize productivity within your organization with an easier 
              reimbursement system that helps you track, process and sync data in
               real-time."
              color="white"
              size="h6"
            />
          </div>
          <div className="my-5 d-flex flex-row justify-content-start align-items-center">
            <div className="me-2">
              <PrimaryButton title="Enkash Now!" theme="theme-blue" />
            </div>
            <div>
              <SecondryButton
                title="Book a Demo"
                actionImage={whiteArrow}
                iconSize="small-icon"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <Image
            src={reimbursementDashboard}
            alt="reimbursement dashboard"
            className="img-fluid p-5"
          />
        </div>
        <div className={styles.three_step_container}>
          <ThreeSteps />
        </div>
      </div>
      <div className={`${styles.second_row} row d-flex bg-white row-padding`}>
        <EnkashWay />
      </div>
      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-top-none`}
      >
        <div className="col-12 d-flex justify-content-center text-center">
          <Heading
            title="Streamline Your Reimbursement Process"
            color="equity-blue"
            size="h1"
          />
        </div>
        <div className="col-12 d-flex justify-content-center mb-5">
          <Heading title="with Automated Solutions." color="black" size="h1" />
        </div>
        <div className="col-12 d-flex flex-column flex-md-row justify-content-evenly mt-3">
          <div className="mb-2 mb-md-0">
            <GetStartedCard
              title1="Automated Processes"
              title2=""
              description="A digitized end-to-end solution, automate checking, approvals,
             invoice generation and submission to ensure speed and accuracy."
            />
          </div>
          <div className="mb-2 mb-md-0">
            <GetStartedCard
              title1="Better Documentation"
              title2=""
              description="Ensure employee compliance with easy-to-use capture modes which 
            captures payments made on behalf of the business in a few simple steps"
            />
          </div>
          <div className="mb-2 mb-md-0">
            <GetStartedCard
              title1="Real time tracking"
              title2=""
              description="Track spends made on behalf of the business by employees in real time."
            />
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center mt-4">
          <Image src={bar} alt="progress bar" className="img-fluid" />
        </div>
      </div>
      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className=" text-center">
                <Heading
                  title={`EnKash Makes Your Business’ ${space}`}
                  color="white"
                  size="h1"
                />
                <Heading title="Reimbursement" color="rainy-blue" size="h1" />
              </div>
              <div className=" text-center">
                <Heading
                  title="Process Effortless."
                  color="rainy-blue"
                  size="h1"
                />
              </div>
            </>
          }
          mainTitle="How do Reimbursements work?"
          carouselData={carouselData}
        />
      </div>
      <div
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white`}
      >
        <FaqComponent faqData={faqData} />
      </div>
      <div className={`${styles.sixth} row`}>
        <ContactUsCard />
      </div>
    </div>
  );
};

export default reimbursement;
