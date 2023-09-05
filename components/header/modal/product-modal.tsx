"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./modal.module.scss";
import motherProducts from "../../../constant/products/mother-products";
import olympusProducts from "../../../constant/products/olympus-products";
import freedomProducts from "../../../constant/products/freedom-products";
import xpenzProducts from "../../../constant/xpenz-products";
import loyaltyLoungeProducts from "../../../constant/products/loaylty-lounge-products";
import SubProduct from "./sub-product";
import { productModalEmptyStateImg } from "../.";

const ProductModal = () => {
  const [hoveredProductIndex, setHoveredProductIndex] = useState(null);

  return (
    <div className="row mt-5">
      <div className="col-4 d-flex flex-column align-items-right px-5 pb-5 mb-2">
        {motherProducts.map((product: any, index: any) => (
          <div
            key={product.name}
            className={styles.product_row}
            onMouseEnter={() => {
              setHoveredProductIndex(index);
            }}
          >
            <div className={styles.product_name}>{product.name}</div>
            <div className={styles.product_description}>
              {product.description}
            </div>
          </div>
        ))}
      </div>
      {hoveredProductIndex === null && (
        <div className={`col-8 d-flex`}>
          <Image
            src={productModalEmptyStateImg}
            alt="Enkash product modal image"
            className="position-absolute end-0 bottom-0"
            height={450}
            width={1200}
          />
        </div>
      )}
      {hoveredProductIndex === 0 && (
        <SubProduct subProducts={olympusProducts} index={0} />
      )}
      {hoveredProductIndex === 1 && (
        <SubProduct subProducts={freedomProducts} index={1} />
      )}
      {hoveredProductIndex === 2 && (
        <SubProduct subProducts={xpenzProducts} index={2} />
      )}
      {hoveredProductIndex === 3 && (
        <SubProduct subProducts={loyaltyLoungeProducts} index={3} />
      )}
    </div>
  );
};

export default ProductModal;
