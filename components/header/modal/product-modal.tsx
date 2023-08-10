"use client";

import { useState } from "react";
import styles from "./modal.module.scss";
import motherProducts from "../../../constant/mother-products";
import olympusProducts from "../../../constant/olympus-products";
import freedomProducts from "../../../constant/freedom-products";
import xpenzProducts from "../../../constant/xpenz-products";
import loyaltyLoungeProducts from "../../../constant/loaylty-lounge-products";

import SubProduct from "./sub-product";

const ProductModal = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [hoverIconImage, setHoverIconImage] = useState(null);

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
      <SubProduct
        hoveredProduct={hoveredProduct}
        hoveredIndex={0}
        hoverIconImage={hoverIconImage}
        setHoverIconImage={setHoverIconImage}
        subProducts={olympusProducts}
      />
      <SubProduct
        hoveredProduct={hoveredProduct}
        hoveredIndex={1}
        hoverIconImage={hoverIconImage}
        setHoverIconImage={setHoverIconImage}
        subProducts={freedomProducts}
      />
      <SubProduct
        hoveredProduct={hoveredProduct}
        hoveredIndex={2}
        hoverIconImage={hoverIconImage}
        setHoverIconImage={setHoverIconImage}
        subProducts={xpenzProducts}
      />
      <SubProduct
        hoveredProduct={hoveredProduct}
        hoveredIndex={3}
        hoverIconImage={hoverIconImage}
        setHoverIconImage={setHoverIconImage}
        subProducts={loyaltyLoungeProducts}
      />
    </div>
  );
};

export default ProductModal;
