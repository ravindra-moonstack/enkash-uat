import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./modal.module.scss";
import motherProducts from "../data/mother-products";
import olympusProducts from "../data/receivable-products";
import freedomProducts from "../data/freedom-products";
import xpenzProducts from "../data/ofex-products";
import loyaltyLoungeProducts from "../data/loaylty-lounge-products";
import SubProduct from "./sub-product";
import { productModalEmptyStateImg } from "../.";
import Link from "next/link";
import ReceivableProducts from "../data/receivable-products";
import payableProducts from "../data/payable-products";
import brandVouchersProducts from "../data/brand-voucher-products";

const ProductModal = ({ onLinkClick }: any) => {
  const [hoveredProductIndex, setHoveredProductIndex] = useState<number | null>(
    0
  );
  const productRowRef = useRef<HTMLDivElement | null>(null);
  const refs = motherProducts.map(() => useRef<HTMLDivElement>(null));

  const [prevHoveredProductIndex, setPrevHoveredProductIndex] = useState<
    null | number
  >(null);

  function assignRef(
    ref: React.MutableRefObject<HTMLDivElement | null>,
    value: HTMLDivElement | null
  ) {
    ref.current = value;
  }

  return (
    <div className={`row mt-5 ${styles.container}`}>
      <div
        className={`${styles.left_container} d-flex flex-column align-items-right pe-2 pb-5 mb-2 position-relative`}
      >
        {hoveredProductIndex !== null && refs[hoveredProductIndex].current && (
          <div
            className={styles.background_slide}
            style={{
              transform: `
      translateY(${refs[hoveredProductIndex].current!.offsetTop}px) 
      translateX(${refs[hoveredProductIndex].current!.offsetLeft}px)
    `,
              height: `${refs[hoveredProductIndex].current!.offsetHeight}px`,
              width: `${refs[hoveredProductIndex].current!.offsetWidth}px`,
            }}
          ></div>
        )}
        {motherProducts.map((product: any, index: any) => (
          <div
            key={product.name}
            className={`${styles.product_row} ${
              hoveredProductIndex === index
                ? styles.opacity_selected
                : styles.opacity_normal
            }`}
            onMouseEnter={() => {
              setPrevHoveredProductIndex(hoveredProductIndex);
              if (hoveredProductIndex === null) {
                setHoveredProductIndex(0);
              } else {
                setHoveredProductIndex(index);
              }
            }}
            ref={(element) => {
              if (index === 0) assignRef(productRowRef, element);
              assignRef(refs[index], element);
            }}
          >
            <Link href={product.link}>
              <div className={styles.product_name}>
                {product.name} {product.name === "Receivables" && <sup>#</sup>}
              </div>
              <div className={styles.product_description}>
                {product.description}
              </div>
            </Link>
          </div>
        ))}
      </div>
      {hoveredProductIndex === null && (
        <div className={`${styles.right_container} d-flex`}>
          <Image
            src={productModalEmptyStateImg}
            alt="Enkash product modal image"
            className={`position-absolute end-0 bottom-0 ${styles.product_stack}`}
            height={450}
            width={1200}
          />
        </div>
      )}

      {hoveredProductIndex === 0 && (
        <SubProduct
          subProducts={ReceivableProducts}
          index={0}
          hoveredProductIndex={hoveredProductIndex}
          prevHoveredProductIndex={prevHoveredProductIndex}
          onLinkClick={onLinkClick}
        />
      )}
      {hoveredProductIndex === 1 && (
        <SubProduct
          subProducts={payableProducts}
          index={1}
          hoveredProductIndex={hoveredProductIndex}
          prevHoveredProductIndex={prevHoveredProductIndex}
          onLinkClick={onLinkClick}
        />
      )}

      {hoveredProductIndex === 2 && (
        <SubProduct
          subProducts={freedomProducts}
          index={2}
          hoveredProductIndex={hoveredProductIndex}
          prevHoveredProductIndex={prevHoveredProductIndex}
          onLinkClick={onLinkClick}
        />
      )}

      {hoveredProductIndex === 3 && (
        <SubProduct
          subProducts={xpenzProducts}
          index={3}
          hoveredProductIndex={hoveredProductIndex}
          prevHoveredProductIndex={prevHoveredProductIndex}
          onLinkClick={onLinkClick}
        />
      )}

      {hoveredProductIndex === 4 && (
        <SubProduct
          subProducts={brandVouchersProducts}
          index={3}
          hoveredProductIndex={hoveredProductIndex}
          prevHoveredProductIndex={prevHoveredProductIndex}
          onLinkClick={onLinkClick}
        />
      )}

      {hoveredProductIndex === 5 && (
        <SubProduct
          subProducts={loyaltyLoungeProducts}
          index={3}
          hoveredProductIndex={hoveredProductIndex}
          prevHoveredProductIndex={prevHoveredProductIndex}
          onLinkClick={onLinkClick}
        />
      )}
    </div>
  );
};

export default ProductModal;
