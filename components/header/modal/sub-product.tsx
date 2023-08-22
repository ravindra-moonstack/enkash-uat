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

  if (!activeGroup) return null;

  return (
    <div className={`col-8 d-flex`}>
      <div className={styles.box_shadow_left}></div>
      <div className="d-flex flex-column">
        {/* List out all subtitles */}
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

        {/* Render content based on active subtitle */}
        <div
          className={`d-flex ${props.subProducts.length > 1 ? "mt-4" : "mt-2"}`}
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

      {/* Footer content */}
      <div
        className={`bg-equity-blue d-flex align-items-center justify-content-around ${styles.footer}`}
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
