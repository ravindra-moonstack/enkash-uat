import Image from "next/image"
import styles from "./sub-product.module.scss"
import { footerArrow } from ".."
import { useRef, useState } from "react"
import Link from "next/link"

const SubProduct = (props: any) => {
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
    props.onLinkClick && props.onLinkClick()
  }
  const motherProductName = props.motherProductName

  return (
    <div className={`d-flex flex-column ${styles.container}`}>
      {hasActiveGroup ? (
        <>
          <div className={`mb-3 ${styles.motherProduct}`}>
            <Link href={props.parentLink || "#"}>
              <h4 className="fw-bold mb-1">{motherProductName}</h4>
            </Link>
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
                  refs[hoveredProductIndex].current && (
                    <div
                      className={styles.background_slide}
                      style={{
                        transform: scrollingDivRef.current
                          ? `
              translateY(${
                refs[hoveredProductIndex].current!.offsetTop -
                scrollingDivRef.current.scrollTop
              }px) 
              translateX(${refs[hoveredProductIndex].current!.offsetLeft}px)
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
                  )}

                {activeGroup.list.map((product: any, index: any) => (
                  <Link
                    href={product.link}
                    //to make coming soon pages non-clickable
                    key={product.name}
                    onClick={(e) => {
                      if (product?.comingSoon) {
                        e.preventDefault()
                      }
                    }}
                  >
                    <div
                      key={product.name}
                      className={`${styles.sub_product_row} ${
                        hoveredProductIndex === index
                          ? styles.color_highlight
                          : ""
                      } d-flex`}
                      onMouseEnter={() => {
                        sethoveredProductIndex(index)
                      }}
                      onClick={handleItemClick}
                      ref={refs[index]}
                    >
                      {product.imageSrcHovered && (
                        <div>
                          <Image
                            src={product.imageSrcHovered}
                            alt={product.name}
                            width={25}
                            height={25}
                          />
                        </div>
                      )}

                      <div className={`d-flex flex-column ms-3`}>
                        <div className={`d-flex ${styles.sub_product_name}`}>
                          {product.name !== "EnKash PG" && <>{product.name}</>}

                          {/* new tag with json */}
                          {product.name === "EnKash PG" && (
                            <>
                              EnKash<sup>TM</sup> PG
                            </>
                          )}

                          {/* new tag with json */}
                          {product?.new && (
                            <div className={styles.new_badge}> NEW</div>
                          )}
                        </div>
                        <div className={styles.sub_product_description}>
                          {product.description}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* only for freedom products */}
          {props.index === 2 && (
            <div className={styles.powered}>*Powered by Banks/REs</div>
          )}
          {/* {props.index === 0 && (
            <div className={styles.powered}>
              #Launching soon 🚀 as per
              <br /> RBI's PA (Online) authorization
            </div>
          )} */}

          {/* <div
            className={`d-flex align-items-center justify-content-between ${
              styles.footer
            } ${styles[activeGroup.footerImg]}`}
          >
            <div className={styles.footer_text}>{activeGroup.footerText}</div>
            <Link href={activeGroup.footerLink}>
              <div className={`d-flex align-items-center ${styles.explore}`}>
                <div className={`${styles.footer_text} px-2`}>Explore</div>
                <Image src={footerArrow} alt="explore arrow image" />
              </div>
            </Link>
          </div> */}
        </>
      ) : null}
    </div>
  )
}

export default SubProduct
