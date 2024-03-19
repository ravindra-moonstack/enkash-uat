import styles from "./mobile-header.module.scss";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import { Fragment, useState } from "react";
import SubProductListView from "./sub-product-list-view";
import { forwardArrowBlue } from "..";
import Image from "next/image";
import Link from "next/link";

interface ProductListViewProps {
  childProducts: any[];
  products: any[];
  setCurrentStep: (step: number) => void;
  currentStep: number;
  signupUrl: any;
}

const ProductListView = ({
  products,
  childProducts,
  setCurrentStep,
  signupUrl,
}: ProductListViewProps) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  return (
    <div className={`w-100 absolute z-10 bg-indi-volt`}>
      {selectedItemIndex == null && (
        <div className={`${styles.mobile_modal} `}>
          <div className="list">
            <div className={styles.line}></div>
            <ul>
              {products.map((item: any, index: any) => (
                <Fragment key={index}>
                  <li
                    key={item.name}
                    className={`py-4 px-4 align-items-center`}
                    onClick={() => {
                      if (childProducts.length === 0) {
                        window.location.href = item.link;
                      } else {
                        setSelectedItemIndex(index);
                      }
                    }}
                  >
                    <div className="d-flex flex-column">
                      <div className={styles.title}>{item.name}</div>
                      <div className={styles.description}>
                        {item.description}
                      </div>
                    </div>
                    <Image
                      src={forwardArrowBlue}
                      alt="arrow down icon"
                      className="ms-4"
                    />
                  </li>
                  <div className={styles.line}></div>
                </Fragment>
              ))}
            </ul>
          </div>
          <div
            className={`d-flex p-5 justify-content-center ${styles.buttons_container}`}
          >
            <PrimaryButton
              title="Sign Up"
              url="https://home.enkash.com/signup"
              theme="blue"
            />
            <span className="mx-2"></span>
            <div>
              <Link href={signupUrl}>
                <button
                  className={`${styles.secondary_button} ${styles.active}`}
                >
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {selectedItemIndex === 0 && (
        <div>
          <SubProductListView
            setSelectedItemIndex={selectedItemIndex}
            products={childProducts[0]}
            setCurrentStep={setCurrentStep}
            signupUrl={signupUrl}
          />
        </div>
      )}

      {selectedItemIndex === 1 && (
        <SubProductListView
          setSelectedItemIndex={selectedItemIndex}
          products={childProducts[1]}
          setCurrentStep={setCurrentStep}
          signupUrl={signupUrl}
        />
      )}

      {selectedItemIndex === 2 && (
        <SubProductListView
          setSelectedItemIndex={selectedItemIndex}
          products={childProducts[2]}
          setCurrentStep={setCurrentStep}
          signupUrl={signupUrl}
        />
      )}
      {selectedItemIndex === 3 && (
        <SubProductListView
          setSelectedItemIndex={selectedItemIndex}
          products={childProducts[3]}
          setCurrentStep={setCurrentStep}
          signupUrl={signupUrl}
        />
      )}
      {selectedItemIndex === 4 && (
        <SubProductListView
          setSelectedItemIndex={selectedItemIndex}
          products={childProducts[4]}
          setCurrentStep={setCurrentStep}
          signupUrl={signupUrl}
        />
      )}
      {selectedItemIndex === 5 && (
        <SubProductListView
          setSelectedItemIndex={selectedItemIndex}
          products={childProducts[5]}
          setCurrentStep={setCurrentStep}
          signupUrl={signupUrl}
        />
      )}
    </div>
  );
};

export default ProductListView;
