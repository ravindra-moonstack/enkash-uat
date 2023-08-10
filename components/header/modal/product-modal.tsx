"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./modal.module.scss";
import motherProducts from "../../../constant/mother-products";
import olympusProducts from "../../../constant/olympus-products";

import { footerArrow, productModalEmptyStateImg } from "../.";

const ProductModal = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [hoverStateImage, setHoverStateImage] = useState(null);

  return (
    <div className="row mt-5">
      <div className="col-4 d-flex flex-column align-items-right px-5 pb-5 mb-2">
        {motherProducts.map((product: any, index: any) => (
          <div
            key={product.name}
            className={styles.product_row}
            onMouseEnter={() => setHoveredProduct(index)}
          >
            <div className={styles.product_name}>{product.name}</div>
            <div className={styles.product_description}>
              {product.description}
            </div>
          </div>
        ))}
      </div>
      <div className={`col-8 d-flex`}>
        <div
          className={`${styles.box_shadow_left} ${
            hoveredProduct === null ? "d-none" : "d-block"
          }`}
        ></div>
        <div
          className={`${styles.empty_state_image} ${styles.empty_state_image} ${
            hoveredProduct === null ? "d-block" : "d-none"
          }`}
        >
          <Image
            src={productModalEmptyStateImg}
            alt="Product Image"
            width={800}
            height={450}
          />
        </div>
        <div className={hoveredProduct !== null ? "d-block" : "d-none"}>
          <div className="container mt-1 ps-5">
            <div className="row d-flex">
              <div className="d-flex flex-row color-secondry-grey">
                <div className={styles.sub_product_title}>Payables</div>
                <div className={styles.sub_product_title}>Receivables</div>
              </div>
            </div>
            <div className="d-flex mt-5">
              <div className={styles.sub_products_container}>
                {olympusProducts.map((product: any, index: any) => (
                  <div
                    key={product.name}
                    className={`${styles.sub_product_row} d-flex`}
                    onMouseEnter={() => setHoverStateImage(index)}
                    onMouseLeave={() => setHoverStateImage(null)}
                  >
                    <div>
                      <Image
                        src={
                          hoverStateImage === index
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
          } ${hoveredProduct !== null ? "d-block" : "d-none"}`}
        >
          <div>Streamline Your Payments with Payables</div>
          <div className="d-flex">
            <div className="px-2">Explore</div>
            <Image src={footerArrow} alt="explore olympus" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
