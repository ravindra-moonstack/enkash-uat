import styles from "./page.module.scss";
import PrimaryButton from "../components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";

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
        <div className={`row text-center color-white ${styles.bg_rainbow}`}>
          <span className={`col-12 ${styles.font_heading}`}>A Spend</span>
          <span className={`col-12 mt-3 ${styles.font_heading}`}>
            Management Solution
          </span>
          <span className={`col-12 mt-4 ${styles.font_heading}`}>
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
        <div className="row">
          <div className="col-12">Full width column</div>
        </div>
        <div className="row">
          <div className="col-12">Full width column</div>
        </div>
      </div>
    </div>
  );
};

export default home;
