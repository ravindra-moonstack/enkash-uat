import styles from "./mobile-header.module.scss"
import { Fragment, useState } from "react"

import { forwardArrowBlue } from ".."
import Image from "next/image"
import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"

interface ProductListViewProps {
  childProducts: any[]
  products: any[]
  setCurrentStep: (step: number) => void
  currentStep: number
  signupUrl: any
}

const ProductListView = ({
  products,
  childProducts,

  signupUrl,
}: ProductListViewProps) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null)
  return (
    <div className={`w-100 absolute z-10 `}>
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
                        window.location.href = item.link
                      } else {
                        setSelectedItemIndex(index)
                      }
                    }}
                  >
                    <div className="d-flex flex-column">
                      <div className={styles.title}>
                        {item.name}
                        {item.name == "Receivables" && (
                          <sup className={styles.sup}>#</sup>
                        )}
                      </div>
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
            className={`d-flex   justify-content-center ${styles.buttons_container}`}
          >
            <RectangleButton
              title="Talk to Sales"
              theme="blue"
              url={signupUrl}
            />
            {/* <span className="mx-2"></span> */}

            <RectangleButton
              title="Log In"
              theme="outline-blue"
              url={"https://home.enkash.com/login"}
            />
          </div>
        </div>
      )}

      {/* {selectedItemIndex === 0 && (
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
      )} */}
    </div>
  )
}

export default ProductListView
