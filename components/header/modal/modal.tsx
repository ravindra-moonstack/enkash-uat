import { useState } from "react";
import Image from "next/image";
import styles from "./modal.module.scss";

const Modal = ({ showModal, content }: any) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // if (!showModal) {
  //   return null;
  // }

  return (
    <div className="row mt-5">
      <div className="col-4 d-flex flex-column align-items-right pl-5">
        {content.products.map((product: any, index: any) => (
          <div
            key={index}
            className={styles.product_row}
            onMouseEnter={() => setHoveredProduct(index)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className={styles.product_name}>{product.name}</div>
            <div className={styles.product_description}>
              {product.description}
            </div>
          </div>
        ))}
      </div>
      <div className="col-8 ${styles.empty_state_image">
        <div
          className={`${styles.empty_state_image} ${
            hoveredProduct === null ? styles.show : styles.hide
          }`}
        >
          <Image
            src={content.image}
            alt="Product Image"
            width={800}
            height={450}
          />
        </div>
        {content.products.map((product: any, index: any) => (
          <div
            key={index}
            className={hoveredProduct === index ? styles.show : styles.hide}
          >
            <div className="row">
              {product.subProductLeft.map((subProduct: any) => (
                <div className="col-6" key={subProduct.name}>
                  <div className="row align-items-center">
                    <div className="col-2">
                      {/* <Image
                        src={subProduct.image}
                        alt="Sub Product Image"
                        layout="fill"
                        objectFit="cover"
                      /> */}
                    </div>
                    <div className="col-10">
                      <h4>{subProduct.title}</h4>
                      <p>{subProduct.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              {product.subProductRight.map((subProduct: any) => (
                <div className="col-6" key={subProduct.name}>
                  <div className="row align-items-center">
                    <div className="col-2">
                      {/* <Image
                        src={subProduct.image}
                        alt="Sub Product Image"
                        layout="fill"
                        objectFit="cover"
                      /> */}
                    </div>
                    <div className="col-10">
                      <h4>{subProduct.title}</h4>
                      <p>{subProduct.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modal;
