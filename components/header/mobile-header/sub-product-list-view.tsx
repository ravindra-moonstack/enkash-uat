import Image from "next/image"
import styles from "./mobile-header.module.scss"
import PrimaryButton from "@/components/buttons/primary-button/primary-button"
import { Fragment, useState } from "react"
import Link from "next/link"
import { arrowDown, footerArrow, forwardArrowBlue } from ".."
import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"

const SubProductListView = (props: {
  setSelectedItemIndex: number | null
  products: any
  signupUrl: any
  setCurrentStep: (step: number) => void // Receive this prop
}) => {
  const [activeSubtitleIndex, setActiveSubtitleIndex] = useState(0)

  const productsToUse = props.products
  const currentHeading = productsToUse[activeSubtitleIndex]?.currentHeading
  const link = productsToUse[activeSubtitleIndex]?.parentLink

  return (
    <div className={`w-100 absolute z-10 bg-indi-volt`}>
      <div className={styles.mobile_modal}>
        <Link href={link}>
          <li className="d-flex align-items-center pe-4 pt-2">
            <div className="d-flex flex-column justify-content-center px-4 py-2 ">
              <div className={styles.title}>
                {currentHeading?.name}
                {currentHeading?.name == "Receivables" && (
                  <sup className={styles.sup}>#</sup>
                )}
              </div>
            </div>
            <Image src={arrowDown} alt="arrow down icon" className="ms-4" />
          </li>
        </Link>
        <div className="list">
          {/* was used for web-navbar olympus section */}
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

          {/* {productsToUse.map(
            (category: any, index: any) =>
              activeSubtitleIndex === index && (
                <div
                  key={category.subtitleLink}
                  className={`d-flex align-items-center ${styles.footer} ${
                    styles[category.footerImg]
                  }`}
                >
                  <div className="mx-4">{category.footerMobileText}</div>
                </div>
              )
          )} */}

          <div className={styles.line}></div>
          {productsToUse[activeSubtitleIndex]?.list.map((item: any) => (
            <Link
              href={item.link}
              key={item.name}
              onClick={() => {
                props.setCurrentStep(0)
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
        {props.setSelectedItemIndex === 2 && (
          <div className={styles.powered}>*Powered by Banks/REs</div>
        )}
        {/* {props.setSelectedItemIndex === 0 && (
          <div className={styles.powered}>
            #Launching soon 🚀 as per
            <br /> RBI's PA (Online) authorization
          </div>
        )} */}

        <div
          className={`d-flex   justify-content-center ${styles.buttons_container}`}
        >
          <RectangleButton title="Talk to Sales" theme="blue" url={""} />
          {/* <span className="mx-2"></span> */}

          <RectangleButton
            title="Log In"
            theme="outline-blue"
            url={"https://home.enkash.com/login"}
          />
        </div>
      </div>
    </div>
  )
}

export default SubProductListView
