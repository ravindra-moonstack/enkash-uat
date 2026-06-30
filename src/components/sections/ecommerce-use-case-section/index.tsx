import React, { JSX } from "react"
import styles from "./ecommerce-use-case-section.module.scss"
import DynamicHeading from "../../dynamic-heading"
import CommonButton from "../../buttons"
import Image, { StaticImageData } from "next/image"

interface HeadingPart {
  title: string
  color: string
}

interface EcommerceUseCaseItem {
  icon: string | StaticImageData
  title: string
  description?: string
  highlightText?: string
  descriptionHtml?: React.ReactNode
  image?: string | StaticImageData
  buttonUrl?: string
  maxImageHeight?: string
  reverse?: boolean
}

interface EcommerceUseCaseSectionProps {
  heading?: HeadingPart[]
  headingTag?: keyof JSX.IntrinsicElements
  items: EcommerceUseCaseItem[]
  subHeading?: HeadingPart[]
  buttonUrl?: string
  className?: string
  textColClass?: string
  imageColClass?: string
}

const EcommerceUseCaseSection: React.FC<EcommerceUseCaseSectionProps> = ({
  heading,
  headingTag = "h2",
  items,
  buttonUrl = "#",
  subHeading,
  className = "",
  textColClass,
  imageColClass,
}) => {
  return (
    <div className={`${styles.use_case_section} ${className}`}>
      <div className={`${styles.section} max-w-auto`}>
        {(heading || subHeading) && (
          <div className={`${styles.title} text-center pb-4 pb-md-5`}>
            {heading && (
              <DynamicHeading
                content={heading}
                headingTag={headingTag}
                className="f-6"
              />
            )}
            {subHeading && (
              <DynamicHeading
                content={subHeading}
                headingTag="p"
                className="mt-2"
              />
            )}
          </div>
        )}

        {items.map((item, index) => (
          <React.Fragment key={index}>
            <div
              className={`row align-items-center mb-3 ${styles.item_section}`}
            >
              {/* Text Block */}
              <div
                className={`${textColClass || "col-md-7"} col-12 order-2 ${item.reverse ? "order-md-2" : "order-md-1"}`}
              >
                <div
                  className={`d-flex align-items-start ${styles.policyCard}`}
                >
                  {/* Icon */}
                  <div className="d-flex justify-content-center align-items-center bg-light rounded-circle">
                    <Image src={item.icon} alt="icon" width={55} height={55} />
                  </div>

                  {/* Title and Description */}
                  <div className={`${styles.allInOnePolicy}`}>
                    <DynamicHeading
                      content={[
                        {
                          title: item.title,
                          color: "color-black",
                        },
                      ]}
                      headingTag="h3"
                      className="f-7 heading-h5"
                    />
                    {item.descriptionHtml ? (
                      <div className="color-grey-200 mb-0">
                        {item.descriptionHtml}
                      </div>
                    ) : (
                      item.description && (
                        <DynamicHeading
                          content={[
                            {
                              title: item.description,
                              color: "color-grey-200",
                            },
                          ]}
                          headingTag="p"
                          className="mb-0"
                        />
                      )
                    )}
                    {item.highlightText && (
                      <DynamicHeading
                        content={[
                          {
                            title: item.highlightText,
                            color: "color-electric-green f-7",
                          },
                        ]}
                        headingTag="p"
                        className="mb-0"
                      />
                    )}
                  </div>
                </div>

                <div className={styles.list_button}>
                  <CommonButton
                    title="Get Started"
                    theme="outline-blue"
                    url={item.buttonUrl || buttonUrl}
                  />
                </div>
              </div>

              <div
                className={`${imageColClass || "col-md-5"} col-12 order-1 d-flex justify-content-end ${
                  item.reverse ? "order-md-1" : "order-md-2"
                } ${styles.third_container}`}
              >
                {item.image && (
                  <Image
                    src={item.image}
                    alt="card visual"
                    className="w-100"
                    style={{
                      maxHeight: item.maxImageHeight || "auto",
                      height: "auto",
                      objectFit: "contain",
                    }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 400px"
                    quality={75}
                  />
                )}
              </div>
            </div>

            {/* Connectors */}
            {/* {items.length - 1 && (
                            <div className={item.reverse ? styles.connector_1 : styles.connector_2}>
                                {item.reverse ? (
                                    <svg width="699" height="945" viewBox="0 0 699 945" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M698.5 872.5V374.82C698.5 372.611 696.709 370.82 694.5 370.82L76.499 370.82C74.2899 370.82 72.499 369.029 72.499 366.82L72.499 0.5" stroke="#00BF9E" strokeOpacity="0.15" strokeLinecap="square" />
                                        <path d="M686.502 884.5V386.82C686.502 384.611 684.711 382.82 682.502 382.82L64.501 382.82C62.2918 382.82 60.501 381.029 60.501 378.82L60.501 12.5" stroke="#00BF9E" strokeOpacity="0.15" strokeLinecap="square" />
                                        <path d="M674.504 896.5V398.82C674.504 396.611 672.713 394.82 670.504 394.82L52.5029 394.82C50.2938 394.82 48.5029 393.029 48.5029 390.82L48.5029 24.5" stroke="#00BF9E" strokeOpacity="0.15" strokeLinecap="square" />
                                        <path d="M662.501 908.5V410.82C662.501 408.611 660.71 406.82 658.501 406.82L40.5 406.82C38.2908 406.82 36.5 405.029 36.5 402.82L36.5 36.5" stroke="#00BF9E" strokeOpacity="0.15" strokeLinecap="square" />
                                        <path d="M650.503 920.5V422.82C650.503 420.611 648.712 418.82 646.503 418.82L28.5019 418.82C26.2928 418.82 24.502 417.029 24.502 414.82L24.502 48.5" stroke="#00BF9E" strokeOpacity="0.15" strokeLinecap="square" />
                                        <path d="M638.505 932.5V434.82C638.505 432.611 636.714 430.82 634.505 430.82L16.5039 430.82C14.2947 430.82 12.5039 429.029 12.5039 426.82L12.5039 60.5" stroke="#00BF9E" strokeOpacity="0.15" strokeLinecap="square" />
                                        <path d="M626.501 944.5V446.82C626.501 444.611 624.71 442.82 622.501 442.82L4.49998 442.82C2.29084 442.82 0.5 441.029 0.5 438.82L0.5 72.5" stroke="#00BF9E" strokeOpacity="0.15" strokeLinecap="square" />
                                    </svg>

                                ) : (
                                    <svg width="699" height="945" viewBox="0 0 699 945" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 872.5V374.82C0.5 372.611 2.29086 370.82 4.5 370.82L622.5 370.82C624.709 370.82 626.5 369.029 626.5 366.82V0.5" stroke="#00BF9E" strokeOpacity="0.15" strokeLinecap="square" />
                                        <path d="M12.5 884.5V386.82C12.5 384.611 14.2909 382.82 16.5 382.82L634.5 382.82C636.709 382.82 638.5 381.029 638.5 378.82V12.5" stroke="#00BF9E" strokeOpacity="0.15" strokeLinecap="square" />
                                        <path d="M24.5 896.5V398.82C24.5 396.611 26.2909 394.82 28.5 394.82L646.5 394.82C648.709 394.82 650.5 393.029 650.5 390.82V24.5" stroke="#00BF9E" strokeOpacity="0.15" strokeLinecap="square" />
                                        <path d="M36.5 908.5V410.82C36.5 408.611 38.2909 406.82 40.5 406.82L658.5 406.82C660.709 406.82 662.5 405.029 662.5 402.82V36.5" stroke="#00BF9E" strokeOpacity="0.15" strokeLinecap="square" />
                                        <path d="M48.5 920.5V422.82C48.5 420.611 50.2909 418.82 52.5 418.82L670.5 418.82C672.709 418.82 674.5 417.029 674.5 414.82V48.5" stroke="#00BF9E" strokeOpacity="0.15" strokeLinecap="square" />
                                        <path d="M60.5 932.5V434.82C60.5 432.611 62.2909 430.82 64.5 430.82L682.5 430.82C684.709 430.82 686.5 429.029 686.5 426.82V60.5" stroke="#00BF9E" strokeOpacity="0.15" strokeLinecap="square" />
                                        <path d="M72.5 944.5V446.82C72.5 444.611 74.2909 442.82 76.5 442.82L694.5 442.82C696.709 442.82 698.5 441.029 698.5 438.82V72.5" stroke="#00BF9E" strokeOpacity="0.15" strokeLinecap="square" />
                                    </svg>

                                )}
                            </div>
                        )} */}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default EcommerceUseCaseSection
