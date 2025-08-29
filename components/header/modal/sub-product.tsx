import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import styles from "./sub-product.module.scss"
import { dropdownArrow } from ".."

const SubProduct = (props: any) => {
  //

  const [activeSubtitle, setActiveSubtitle] = useState(
    props.subProducts[0].subtitle
  )
  const [hoveredProductIndex, sethoveredProductIndex] = useState<null | number>(
    null
  )

  const activeGroup = props.subProducts.find(
    (group: any) => group.subtitle === activeSubtitle
  )

  const hasActiveGroup = !!activeGroup
  const scrollingDivRef = useRef<HTMLDivElement>(null)

  const maxRefsLength = props.subProducts.reduce(
    (acc: any, curr: { list: string | any[] }) => {
      return curr.list.length > acc ? curr.list.length : acc
    },
    0
  )

  const refs = Array.from({ length: maxRefsLength }, () =>
    useRef<HTMLDivElement>(null)
  )

  const animationClassName = (() => {
    if (
      props.hoveredProductIndex > props.prevHoveredProductIndex ||
      (props.hoveredProductIndex === 0 &&
        props.prevHoveredProductIndex === null)
    ) {
      return styles.top_to_bottom
    } else if (props.hoveredProductIndex < props.prevHoveredProductIndex) {
      return styles.bottom_to_top
    }
    return ""
  })()

  const handleItemClick = () => {
    if (typeof props.onLinkClick === "function") {
      props.onLinkClick()
    }
  }

  const motherProductName = props.motherProductName

  return (
    <div className={`d-flex flex-column  ${styles.container}`}>
      {hasActiveGroup && (
        <>
          <div className={`mb-3 ${styles.motherProduct}`}>
            {props.parentLink ? (
              <Link href={props.parentLink}>
                <h4 className="fw-bold mb-1">{motherProductName}</h4>
              </Link>
            ) : (
              <h4 className="fw-bold mb-1">{motherProductName}</h4>
            )}
          </div>

          <div className="d-flex flex-column">
            {props.subProducts.length > 1 && (
              <div className="d-flex flex-row color-secondry-grey">
                {props.subProducts.map((group: any) => (
                  <Link
                    href={group.subtitleLink}
                    key={group.subtitle}
                    className={`${styles.sub_product_title} ${
                      group.subtitle === activeSubtitle
                        ? "color-equity-blue"
                        : "color-secondry-grey"
                    }`}
                    onMouseOver={() => {
                      setActiveSubtitle(group.subtitle)
                    }}
                  >
                    {group.subtitle}
                    {group.subtitle === "Receivables" && <sup>#</sup>}
                  </Link>
                ))}
              </div>
            )}

            <div
              key={activeSubtitle}
              className={`d-flex ${animationClassName} ${
                props.subProducts.length > 1 ? "mt-4" : "mt-2"
              }`}
            >
              <div
                className={`${styles.sub_products_container} ${
                  activeSubtitle === "Receivables"
                    ? styles.receivablesScroll
                    : ""
                } ${
                  activeGroup?.list?.length > 6
                    ? styles.grid_layout
                    : styles.flex_layout
                }`}
                onMouseLeave={() => sethoveredProductIndex(null)}
                ref={scrollingDivRef}
              >
                {hoveredProductIndex !== null &&
                refs[hoveredProductIndex]?.current ? (
                  <div
                    className={styles.background_slide}
                    style={{
                      transform: scrollingDivRef.current
                        ? `
                      translateY(${
                        refs[hoveredProductIndex].current!.offsetTop -
                        scrollingDivRef.current.scrollTop
                      }px) 
                      translateX(${
                        refs[hoveredProductIndex].current!.offsetLeft
                      }px)
                    `
                        : "",
                      height: `${
                        refs[hoveredProductIndex].current!.offsetHeight
                      }px`,
                      width: `${
                        refs[hoveredProductIndex].current!.offsetWidth
                      }px`,
                    }}
                  ></div>
                ) : null}

                {activeGroup.list.map((product: any, index: any) => {
                  const externalUrls = ["docs."]

                  const isExternal = externalUrls?.some((item) =>
                    product.link?.includes(item)
                  )

                  return (
                    <div
                      className={`${styles.sub_product_row_wrapper} position-relative d-flex gap-3 p-1`}
                      onMouseEnter={() => sethoveredProductIndex(index)}
                      onMouseLeave={() => sethoveredProductIndex(null)}
                      ref={refs[index]}
                      key={product.name}
                    >
                      <Link
                        target={isExternal ? "_blank" : "_self"}
                        href={product.link}
                        onClick={(e) => {
                          if (product?.comingSoon) e.preventDefault()
                        }}
                      >
                        <div
                          className={`${styles.sub_product_row} d-flex ${
                            hoveredProductIndex === index
                              ? styles.color_highlight
                              : ""
                          }`}
                          onClick={handleItemClick}
                        >
                          {product.imageSrcHovered && (
                            <div>
                              <Image
                                src={product.imageSrcHovered}
                                alt={product.name}
                                width={19}
                                height={19}
                              />
                            </div>
                          )}

                          <div className="d-flex flex-column ms-3">
                            <div
                              className={`d-flex align-items-center justify-content-between ${
                                styles.sub_product_name
                              } ${
                                motherProductName === "For Developers"
                                  ? styles.underline
                                  : ""
                              }`}
                            >
                              {product.name}
                              {product?.new && (
                                <div className={styles.new_badge}>NEW</div>
                              )}
                              {product.children && (
                                <Image
                                  src={dropdownArrow}
                                  alt="arrow"
                                  width={12}
                                  height={12}
                                  className={`ms-2 ${styles.dropdown_arrow}`}
                                />
                              )}
                            </div>

                            <div className={styles.sub_product_description}>
                              {product.description}
                            </div>
                          </div>
                        </div>
                      </Link>

                      {/* ✅ Right-side dropdown for children */}
                      {hoveredProductIndex === index && product.children && (
                        <div className={styles.child_dropdown}>
                          {product.children.map((child: any) => (
                            <Link href={child.link} key={child.name}>
                              <div className={styles.child_item}>
                                <Image
                                  src={child.imageSrc}
                                  alt={child.name}
                                  width={21}
                                  height={21}
                                />
                                <span className="ms-2">{child.name}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          {[
            "For Developers",
            "Resources",
            "Payable & Receivable+",
            "Prepaid Cards",
            "Credit Cards",
            "Partnership",
          ].includes(motherProductName) === false && (
            <div className={styles.exploreProduct}>
              {props.parentLink ? (
                <Link href={props.parentLink}>
                  <h4 className="mb-1">Explore {motherProductName}</h4>
                </Link>
              ) : (
                <h4 className="mb-1">Explore {motherProductName}</h4>
              )}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default SubProduct
