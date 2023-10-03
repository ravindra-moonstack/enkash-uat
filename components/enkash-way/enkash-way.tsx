import Heading from "../heading/heading";
import { space } from "../../constant/common";
import Image from "next/image";
import { blueArrowForward, newWay, oldWay } from ".";
import styles from "./enkash-way.module.scss";

const EnkashWay = () => {
  return (
    <>
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
        <Heading
          title={`The EnKash Way is${space}`}
          color="black"
          size="h1"
          weight="6"
        />
        <Heading
          title="the better way."
          size="h1"
          color="equity-blue"
          weight="6"
        />
      </div>
      <div className="d-flex justify-content-center mb-5 text-center">
        <Heading
          title="Switch to EnKash today!"
          color="black"
          size="h1"
          weight="6"
        />
      </div>
      <div className={`d-flex my-md-5 my-3 ${styles.progress_container}`}>
        <div className={styles.progress_items}>
          <Heading title="Expense" size="h4" color="equity-blue" weight="7" />
          <br />
          <Heading title="Reporting" size="h4" color="equity-blue" weight="7" />
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
      <div className={styles.progress_bar_container}>
        <div
          className={`d-flex justify-content-evenly ${styles.progress_bar}`}
        ></div>
      </div>

      <div className="d-flex flex-column flex-lg-row my-5 align-items-center justify-content-center">
        <Image
          className="img-fluid"
          src={oldWay}
          alt="enkash steps"
          width={550}
        />
        <Image
          className={`img-fluid ${styles.arrow}`}
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
    </>
  );
};

export default EnkashWay;
