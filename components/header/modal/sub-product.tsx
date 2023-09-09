import Image from "next/image";
import styles from "./sub-product.module.scss";
import { footerArrow } from "..";
import { useState } from "react";

const SubProduct = (props: any) => {
  const [hoverIconImage, setHoverIconImage] = useState(null);
  const [activeSubtitle, setActiveSubtitle] = useState(
    props.subProducts[0].subtitle
  );

  const activeGroup = props.subProducts.find(
    (group: any) => group.subtitle === activeSubtitle
  );

  const animationClassName = (() => {
    switch (props.index) {
      case 0:
        return styles.top_to_bottom;
      case 1:
        return styles.right_to_left;
      case 2:
        return styles.right_to_left;
      case 3:
        return styles.right_to_left;
      default:
        return "";
    }
  })();

  if (!activeGroup) return null;

  return (
    <div className={`col-8 d-flex mb-5 ${styles.container}`}>
      <div className={styles.box_shadow_left}></div>
      <div className="d-flex flex-column">
        {props.subProducts.length > 1 && (
          <div className="d-flex flex-row color-secondry-grey">
            {props.subProducts.map((group: any) => (
              <div
                key={group.subtitle}
                className={`${styles.sub_product_title} ${
                  group.subtitle === activeSubtitle ? "color-equity-blue" : ""
                }`}
                onMouseOver={() => setActiveSubtitle(group.subtitle)}
              >
                {group.subtitle}
              </div>
            ))}
          </div>
        )}

        <div
          key={activeSubtitle}
          className={`d-flex ${animationClassName} ${
            props.subProducts.length > 1 ? "mt-4" : "mt-2"
          }`}
        >
          <div className={styles.sub_products_container}>
            {activeGroup.list.map((product: any, index: any) => (
              <div
                key={product.name}
                className={`${styles.sub_product_row} d-flex`}
                onMouseEnter={() => setHoverIconImage(index)}
                onMouseLeave={() => setHoverIconImage(null)}
              >
                <div>
                  <Image
                    src={
                      hoverIconImage === index
                        ? product.imageSrcHovered
                        : product.imageSrc
                    }
                    alt={product.name}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="d-flex flex-column ms-4">
                  <div className={styles.sub_product_name}>{product.name}</div>
                  <div className={styles.sub_product_description}>
                    {product.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`d-flex align-items-center justify-content-around ${
          styles.footer
        } ${styles[activeGroup.footerImg]}`}
      >
        <div>{activeGroup.footerText}</div>
        <div className="d-flex">
          <div className="px-2">Explore</div>
          <Image src={footerArrow} alt="explore olympus" />
        </div>
      </div>
    </div>
  );
};

export default SubProduct;
