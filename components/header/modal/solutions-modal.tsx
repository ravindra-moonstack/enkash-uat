import Image from "next/image";
import styles from "./modal.module.scss";
import solutions from "../../../constant/solutions";
import { productModalEmptyStateImg } from "..";

const SolutionsModal = () => {
  return (
    <div className="row mt-5">
      <div className="col-4 d-flex flex-column align-items-right px-5 pb-5 mb-2">
        {solutions.map((product: any) => (
          <div key={product.name} className={styles.product_row}>
            <div className={styles.product_name}>{product.name}</div>
            <div className={styles.product_description}>
              {product.description}
            </div>
          </div>
        ))}
      </div>
      <div className={`col-8 d-flex`}>
        <Image
          src={productModalEmptyStateImg}
          alt="Enkash product modal image"
          className="position-absolute end-0 bottom-0"
          height={450}
          width={1200}
        />
      </div>
    </div>
  );
};

export default SolutionsModal;
