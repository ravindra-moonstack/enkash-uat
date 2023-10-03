import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import styles from "./modal.module.scss";
import solutions from "../../../constant/solutions";
import { productModalEmptyStateImg } from "..";

const SolutionsModal = () => {
  const [hoveredProductIndex, setHoveredProductIndex] = useState<null | number>(
    null
  );
  const [rowHeight, setRowHeight] = useState(0);
  const productRowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (productRowRef.current) {
      setRowHeight(productRowRef.current.offsetHeight);
    }
  }, [productRowRef]);

  return (
    <div className={`row mt-5 ${styles.container}`}>
      <div className="col-4 d-flex flex-column align-items-right px-5 pb-5 mb-2 position-relative">
        {hoveredProductIndex !== null && (
          <div
            className={styles.background_slide}
            style={{
              transform: `translateY(${hoveredProductIndex * rowHeight}px)`,
              height: `${rowHeight}px`,
            }}
          ></div>
        )}
        {solutions.map((product: any, index: any) => (
          <div
            key={product.name}
            className={styles.product_row}
            onMouseEnter={() => {
              if (hoveredProductIndex === null) {
                setHoveredProductIndex(0);
              } else {
                setHoveredProductIndex(index);
              }
            }}
            ref={index === 0 ? productRowRef : null}
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
    </div>
  );
};

export default SolutionsModal;
