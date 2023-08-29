import styles from "./mobile-header.module.scss";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import utmSources from "@/constant/utm-source";

const singupUrl = `https://home.enkash.com/signup?utm_source=${utmSources["nav_bar"]}`;
const loginUrl = "https://home.enkash.com/login";

const ProductListView = (props: any) => {
  return (
    <div className={`w-100 absolute z-10 bg-indi-volt`}>
      <div className={styles.mobile_modal}>
        <div className="list">
          <div className={styles.line}></div>
          <ul>
            {props.products.map((item: any, index: any) => (
              <>
                <li key={item.name + "a"} className={`py-4 px-4`}>
                  {item.name}
                </li>
                <div className={styles.line}></div>
              </>
            ))}
          </ul>
        </div>
        <div
          className={`d-flex p-5 justify-content-center ${styles.buttons_container}`}
        >
          <PrimaryButton title="Sign Up" url={singupUrl} theme="theme-blue" />
          <span className="mx-2"></span>
          <PrimaryButton title="Log In" url={loginUrl} theme="theme-blue" />
        </div>
      </div>
    </div>
  );
};

export default ProductListView;
