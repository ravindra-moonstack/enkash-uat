import Image from "next/image";
import styles from "./mobile-header.module.scss";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import { Fragment, useState } from "react";
import Link from "next/link";
import { footerArrow, forwardArrowBlue } from "..";

const SubProductListView = (props: {
  setSelectedItemIndex: any;
  products: any;
  setCurrentStep: (step: number) => void; // Receive this prop
}) => {
  const [activeSubtitleIndex, setActiveSubtitleIndex] = useState(0);

  const productsToUse = props.products;
  const currentHeading = productsToUse[activeSubtitleIndex]?.currentHeading;
  const link = productsToUse[activeSubtitleIndex]?.parentLink;

  return (
    <div className={`w-100 absolute z-10 bg-indi-volt`}>
      <div className={styles.mobile_modal}>
        <Link href={link}>
          <li className="d-flex align-items-center pe-4 pt-2">
            <div className="d-flex flex-column justify-content-center px-4 py-2 ">
              <div className={styles.title}>{currentHeading?.name}</div>
              <div className={styles.description}>
                {currentHeading?.description}
              </div>
            </div>
            <Image
              src={forwardArrowBlue}
              alt="arrow down icon"
              className="ms-4"
            />
          </li>
        </Link>
        <div className="list">
          <div className="d-flex flex-row">
            {productsToUse.map((category: any, index: any) => (
              <div
                key={category.subtitle}
                className={`py-2 px-4`}
                onClick={() => setActiveSubtitleIndex(index)}
              >
                {category.subtitle != "Default" && (
                  <>
                    <li>
                      <div
                        className={`my-3  ${
                          activeSubtitleIndex === index
                            ? "color-equity-blue"
                            : "color-secondry-grey"
                        } {${styles.title}}`}
                      >
                        <span className={styles.underline_text}>
                          {category.subtitle}
                        </span>
                        {category.subtitle === "Receivables" && (
                          <sup className={styles.sup}>#</sup>
                        )}
                      </div>
                    </li>
                  </>
                )}
              </div>
            ))}
          </div>
          {productsToUse.map(
            (category: any, index: any) =>
              activeSubtitleIndex === index && (
                <div
                  key={category.subtitleLink}
                  className={`d-flex align-items-center ${styles.footer} ${
                    styles[category.footerImg]
                  }`}
                >
                  <div className="mx-4">{category.footerMobileText}</div>
                  <Link href={category.footerLink}>
                    <div className={`${styles.explore} d-flex`}>
                      <Image
                        src={footerArrow}
                        alt="explore arrow image"
                        width={80}
                      />
                    </div>
                  </Link>
                </div>
              )
          )}

          <div className={styles.line}></div>
          {productsToUse[activeSubtitleIndex]?.list.map((item: any) => (
            <Link
              href={item.link}
              key={item.name}
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
        {props.setSelectedItemIndex === 1 && (
          <div className={styles.powered}>*Powered by Banks/REs</div>
        )}
        {props.setSelectedItemIndex === 0 && (
          <div className={styles.powered}>
            #Launching soon 🚀 as per RBI's PA (Online) authorization
          </div>
        )}

        <div
          className={`d-flex p-5 justify-content-center ${styles.buttons_container}`}
        >
          <PrimaryButton
            title="Sign Up"
            theme="blue"
            url="https://home.enkash.com/signup"
          />
          <span className="mx-2"></span>
          <div>
            <button className={`${styles.secondary_button} ${styles.active}`}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubProductListView;
