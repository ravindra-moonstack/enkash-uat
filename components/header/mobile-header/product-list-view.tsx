import Image from "next/image";
import styles from "./mobile-header.module.scss";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import utmSources from "@/constant/utm-source";
import { Fragment, useState } from "react";
import motherProducts from "@/constant/products/mother-products";
import SubProductListView from "./sub-product-list-view";

const singupUrl = `https://home.enkash.com/signup?utm_source=${utmSources["nav_bar"]}`;
const loginUrl = "https://home.enkash.com/login";

interface ProductListViewProps {
  products: any[];
  setCurrentStep: (step: number) => void;
  currentStep: number;
}

const ProductListView = ({
  products,
  setCurrentStep,
  currentStep,
}: ProductListViewProps) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  return (
    <div className={`w-100 absolute z-10 bg-indi-volt`}>
      {currentStep === 2 && (
        <div className={`${styles.mobile_modal} `}>
          <div className="list">
            <div className={styles.line}></div>
            <ul>
              {products.map((item: any, index: any) => (
                <Fragment key={index}>
                  <li
                    key={item.name}
                    className={`py-4 px-4`}
                    onClick={() => {
                      setCurrentStep(3);
                    }}
                  >
                    <div className="d-flex flex-column">
                      <div className={styles.title}>{item.name}</div>
                      <div className={styles.description}>
                        {item.description}
                      </div>
                    </div>
                  </li>
                  <div className={styles.line}></div>
                </Fragment>
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
      )}

      {currentStep === 3 && (
        <SubProductListView
          type="mother"
          products={motherProducts}
          setSelectedItemIndex={selectedItemIndex}
        />
      )}
      {/* {currentStep === 3 && selectedItemIndex === 1 && (
        <SubProductListView
          type="solutions"
          products={solutions}
          setSelectedItemIndex={selectedItemIndex}
        />
      )}
      {currentStep === 3 && selectedItemIndex === 3 && (
        <SubProductListView
          type="resources"
          products={resources}
          setSelectedItemIndex={selectedItemIndex}
        />
      )} */}
    </div>
  );
};

export default ProductListView;
