import Image from "next/image";
import styles from "./sub-product.module.scss";
import { footerArrow } from "..";
import { useRef, useState } from "react";
import Link from "next/link";

const SubProduct = (props: any) => {
  const [activeSubtitle, setActiveSubtitle] = useState(
    props.subProducts[0].subtitle
  );
  const [hoveredProductIndex, sethoveredProductIndex] = useState<null | number>(
    null
  );

  const activeGroup = props.subProducts.find(
    (group: any) => group.subtitle === activeSubtitle
  );

  const hasActiveGroup = !!activeGroup;

  const maxRefsLength = props.subProducts.reduce(
    (acc: any, curr: { list: string | any[] }) => {
      return curr.list.length > acc ? curr.list.length : acc;
    },
    0
  );

  const refs = Array.from({ length: maxRefsLength }, () =>
    useRef<HTMLDivElement>(null)
  );

  const animationClassName = (() => {
    if (
      props.hoveredProductIndex > props.prevHoveredProductIndex ||
      (props.hoveredProductIndex === 0 &&
        props.prevHoveredProductIndex === null)
    ) {
      return styles.top_to_bottom;
    } else if (props.hoveredProductIndex < props.prevHoveredProductIndex) {
      return styles.bottom_to_top;
    }
    return "";
  })();

  const handleItemClick = () => {
    props.onLinkClick && props.onLinkClick();
  };

  return (
    <div className={`d-flex ${styles.container}`}>
      {hasActiveGroup ? (
        <>
          <div className={styles.box_shadow_left}></div>
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
                      setActiveSubtitle(group.subtitle);
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
                className={styles.sub_products_container}
                onMouseLeave={() => sethoveredProductIndex(null)}
              >
                {hoveredProductIndex !== null &&
                  refs[hoveredProductIndex].current && (
                    <div
                      className={styles.background_slide}
                      style={{
                        transform: `
                translateY(${refs[hoveredProductIndex].current!.offsetTop}px) 
                translateX(${refs[hoveredProductIndex].current!.offsetLeft}px)
              `,
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
                  <Link href={product.link}>
                    <div
                      key={product.name}
                      className={`${styles.sub_product_row} ${
                        hoveredProductIndex === index
                          ? styles.color_highlight
                          : ""
                      } d-flex`}
                      onMouseEnter={() => {
                        sethoveredProductIndex(index);
                      }}
                      onClick={handleItemClick}
                      ref={refs[index]}
                    >
                      <div>
                        <Image
                          src={product.imageSrc}
                          alt={product.name}
                          width={47}
                          height={47}
                          className={
                            hoveredProductIndex === index
                              ? styles.image_hidden
                              : styles.default_image_visible
                          }
                        />

                        {/* Hover Image */}
                        <Image
                          src={product.imageSrcHovered}
                          alt={`${product.name} hovered`}
                          width={47}
                          height={47}
                          className={
                            hoveredProductIndex === index
                              ? styles.color_image_visible
                              : styles.image_hidden
                          }
                        />
                      </div>
                      <div className={`d-flex flex-column ms-3`}>
                        <div className={styles.sub_product_name}>
                          {product.name}
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
          {props.index === 1 && (
            <div className={styles.powered}>*Powered by Banks/REs</div>
          )}
          {props.index === 0 && activeSubtitle === "Receivables" && (
            <div className={styles.powered}>
              #Launching soon 🚀 as per
              <br /> RBI's PA (Online) authorization
            </div>
          )}

          <div
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
          </div>
        </>
      ) : null}
    </div>
  );
};

export default SubProduct;
