import Image from "next/image";
import styles from "./mobile-header.module.scss";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import { Fragment, useState } from "react";
import utmSources from "@/constant/utm-source";
import Link from "next/link";

const singupUrl = `https://home.enkash.com/signup?utm_source=${utmSources["nav_bar"]}`;
const loginUrl = "https://home.enkash.com/login";

const SubProductListView = (props: {
  setSelectedItemIndex: any;
  products: any;
  setCurrentStep: (step: number) => void; // Receive this prop
}) => {
  const [activeSubtitleIndex, setActiveSubtitleIndex] = useState(0);

  const productsToUse = props.products;
  const currentHeading = productsToUse[activeSubtitleIndex]?.currentHeading;

  return (
    <div className={`w-100 absolute z-10 bg-indi-volt`}>
      <div className={styles.mobile_modal}>
        <li>
          <div className="d-flex flex-column justify-content-center px-4 py-2">
            <div className={styles.title}>{currentHeading?.name}</div>
            <div className={styles.description}>
              {currentHeading?.description}
            </div>
          </div>
        </li>

        <div className="list">
          <div className="d-flex flex-row">
            {productsToUse.map((category: any, index: any) => (
              <div
                key={category.subtitle}
                className={`py-2 px-4`}
                onClick={() => setActiveSubtitleIndex(index)}
              >
                {category.subtitle != "Default" && (
                  <li>
                    <div
                      className={`my-3 ${styles.underline_text} ${
                        activeSubtitleIndex === index
                          ? "color-equity-blue"
                          : "color-secondry-grey"
                      }`}
                    >
                      {category.subtitle}
                    </div>
                  </li>
                )}
              </div>
            ))}
          </div>
          <div className={styles.line}></div>
          {productsToUse[activeSubtitleIndex]?.list.map((item: any) => (
            <Link
              href={item.link}
              onClick={() => {
                props.setCurrentStep(0);
              }}
            >
              <Fragment key={item.name}>
                <li className={`d-flex justify-content-start py-4 px-4`}>
                  <div className="me-4">
                    <Image
                      src={item.imageSrc}
                      alt={item.name}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="d-flex flex-column color-secondry-grey">
                    <div className={styles.title}>{item.name}</div>
                    <div className={styles.description}>{item.description}</div>
                  </div>
                </li>
                <div className={styles.line}></div>
              </Fragment>
            </Link>
          ))}
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

export default SubProductListView;
