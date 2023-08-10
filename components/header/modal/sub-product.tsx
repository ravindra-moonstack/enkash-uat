import Image from "next/image";
import styles from "./sub-product.module.scss";
import { footerArrow, productModalEmptyStateImg } from "..";
import { useState } from "react";

const SubProduct = (props: any) => {
  const [hoverIconImage, setHoverIconImage] = useState(null);
  return (
    <div
      className={`col-8 d-flex ${
        props.hoveredProduct === props.hoveredIndex ? "d-block" : "d-none"
      }`}
    >
      <div className={styles.box_shadow_left}></div>
      <div
        className={`${styles.empty_state_image} ${styles.empty_state_image} ${
          props.hoveredProduct === null ? "d-block" : "d-none"
        }`}
      >
        <Image
          src={productModalEmptyStateImg}
          alt="Product Image"
          width={800}
          height={450}
        />
      </div>
      <div className={props.hoveredProduct !== null ? "d-block" : "d-none"}>
        <div className="container mt-1 ps-5">
          <div className="row d-flex">
            <div className="d-flex flex-row color-secondry-grey">
              <div className={styles.sub_product_title}>Payables</div>
              <div className={styles.sub_product_title}>Receivables</div>
            </div>
          </div>
          <div className="d-flex mt-5">
            <div className={styles.sub_products_container}>
              {props.subProducts.map((product: any, index: any) => (
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
                    />
                  </div>
                  <div className="d-flex flex-column ms-4">
                    <div className={styles.sub_product_name}>
                      {product.name}
                    </div>
                    <div className={styles.sub_product_description}>
                      {product.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-equity-blue d-flex align-items-center justify-content-around ${
          styles.footer
        } ${props.hoveredProduct !== null ? "d-block" : "d-none"}`}
      >
        <div>Streamline Your Payments with Payables</div>
        <div className="d-flex">
          <div className="px-2">Explore</div>
          <Image src={footerArrow} alt="explore olympus" />
        </div>
      </div>
    </div>
  );
};

export default SubProduct;
