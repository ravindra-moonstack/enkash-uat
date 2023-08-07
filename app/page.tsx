import Styles from "./page.module.scss";

export const metadata = {
  title: "Asia's 1st and Smartest Spend Management Platform | EnKash",
  description:
    "Enkash is now Asia's 1st and Smartest Spend Management Platform that offer services like Account Payable, Accounts Receivable, Expense Management & many more.",
};

const home = () => {
  return (
    <div className={`bg-indi-volt color-white ${Styles.home}`}>
      <div>
        Spend Management <br />
        Management Solution <br />
        That Does It All
      </div>
    </div>
  );
};

export default home;
