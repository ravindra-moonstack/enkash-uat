import Image from "next/image"
import { Fragment } from "react"
import Link from "next/link"

import styles from "./mobile-header.module.scss"

import CommanButton from "@/src/components/buttons"
import { blueArrowUp } from ".."
import { TSubProduct } from "@/src/types/navbar"

interface SubProductListViewProps {
  navTitle: string
  sections: {
    title: string
    products?: TSubProduct[]
  }[]
  signupUrl: string
  setCurrentStep: (step: number) => void
}

const SubProductListView = ({
  navTitle,
  sections,
  setCurrentStep,
}: SubProductListViewProps) => {
  //

  return (
    <div className={`w-100 absolute z-10 `}>
      <div className={styles.mobile_sub_product_modal}>
        <div className="d-flex  align-items-center justify-content-between px-4 py-3">
          <div className={`${styles.nav_title}`}>{navTitle}</div>
          <div className={`d-flex align-items-center  ${styles.header}`}>
            <button
              className={` bg-transparent border-0 p-0`}
              onClick={() => setCurrentStep(1)}
            >
              <Image src={blueArrowUp} alt="Back" width={20} height={20} />
            </button>
          </div>
        </div>

        {sections.map((section, secIndex) => {
          let backgroundColor = "#FFFFFF"
          if (secIndex === 0) backgroundColor = "#F6FCFF"
          else if (secIndex === 2) backgroundColor = "#F0F0F0"

          return (
            <div
              key={secIndex}
              className={`mb-2 relative ${styles.nav_sub_child_product}`}
              style={{ backgroundColor }}
            >
              {section?.products?.[0]?.subtitleLink ? (
                <Link
                  href={section.products[0].subtitleLink}
                  onClick={() => setCurrentStep(0)}
                >
                  <div className={styles.sub_product_title}>
                    {section?.title}
                  </div>
                </Link>
              ) : (
                <div className={styles.sub_product_title}>{section?.title}</div>
              )}

              {section?.products?.map((productGroup, prodIndex) => (
                <div key={prodIndex}>
                  <div className="list">
                    {productGroup?.list?.map((item) => {
                      const externalUrls = ["docs."]

                      const isExternal = externalUrls?.some((_item) =>
                        item.link?.includes(_item)
                      )

                      return (
                        <Link
                          target={isExternal ? "_blank" : "_self"}
                          href={item.link}
                          key={item.name}
                          onClick={() => setCurrentStep(0)}
                        >
                          <Fragment>
                            <li className="d-flex justify-content-start py-3">
                              <div
                                className="me-4"
                                style={{ width: 24, height: 24 }}
                              >
                                {item.imageSrcHovered ? (
                                  <Image
                                    src={item.imageSrcHovered}
                                    alt={item.name}
                                    width={24}
                                    height={24}
                                  />
                                ) : null}
                              </div>
                              <div className="d-flex flex-column color-grey-900">
                                <div className={styles.sub_title}>
                                  {item.name}
                                </div>
                              </div>
                            </li>
                          </Fragment>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              ))}

              {section.products?.[0]?.subtitleLink &&
                ![
                  "For Developers",
                  "Resources",
                  "Payable & Receivable+",
                  "Prepaid Cards",
                  "Credit Cards",
                  "Cards",
                  "Partnership",
                ].includes(section.title) && (
                  <div className={styles.exploreProduct}>
                    <Link href={section.products[0].subtitleLink}>
                      <h4 className="fw-bold mb-0">Explore {section.title}</h4>
                    </Link>
                  </div>
                )}
            </div>
          )
        })}

        {navTitle === "Cards" && (
          <div className={styles.exploreProduct}>
            <h4 className="fw-bold mb-0  pr-4">Explore Corporate Card</h4>
          </div>
        )}

        <div
          className={`d-flex justify-content-center ${styles.buttons_container}`}
        >
          <CommanButton
            title="Log In"
            theme="outline-blue"
            url={`${process.env.NEXT_PUBLIC_HOME_URL}`}
            openInNewTab
          />
        </div>
      </div>
    </div>
  )
}

export default SubProductListView
