import Image from "next/image"
import styles from "./mobile-header.module.scss"
import { Fragment } from "react"
import Link from "next/link"
import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import { blueArrowUp } from ".."

interface SubProductListViewProps {
  navTitle: string // 👈 NEW
  sections: {
    title: string
    products: {
      subtitle: string
      subtitleLink: string
      currentHeading: { name: string; description: string }
      list: {
        name: string
        description?: string
        link: string
        imageSrc?: any
        imageSrcHovered?: any
      }[]
    }[]
  }[]
  signupUrl: string
  setCurrentStep: (step: number) => void
}

const SubProductListView = ({
  navTitle,
  sections,
  signupUrl,
  setCurrentStep,
}: SubProductListViewProps) => {
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

        {/* Section Mapping */}
        {sections.map((section, secIndex) => {
          // Define background color based on index
          let backgroundColor = "#FFFFFF" // default (2nd)
          if (secIndex === 0) backgroundColor = "#F6FCFF" // first
          else if (secIndex === 2) backgroundColor = "#F0F0F0" // third

          return (
            <div
              key={secIndex}
              className={`mb-2 relative ${styles.nav_sub_child_product}`}
              style={{
                backgroundColor,
              }}
            >
              <div className={styles.sub_product_title}>{section.title}</div>

              {section.products.map((productGroup, prodIndex) => (
                <div key={prodIndex}>
                  <div className="list">
                    {productGroup.list.map((item) => (
                      <Link
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
                    ))}
                  </div>
                </div>
              ))}

              {section.products[0]?.subtitleLink &&
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

        {/* CTA Buttons */}
        <div
          className={`d-flex justify-content-center ${styles.buttons_container}`}
        >
          <RectangleButton title="Talk to Sales" theme="blue" url={signupUrl} />
          <RectangleButton
            title="Log In"
            theme="outline-blue"
            url=""
          />
        </div>
      </div>
    </div>
  )
}

export default SubProductListView
