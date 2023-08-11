import Image from "next/image";
import styles from "./modal.module.scss";
import resources from "../../../constant/resources";
import { blueforwardArrow, officeDiscussionPic, readMore } from "..";

const ResourcesModal = () => {
  return (
    <div className="row mt-5">
      <div className={`${styles.resources_grid_row} col-7 px-5 pb-5 mb-2`}>
        {resources.map((product: any) => (
          <div key={product.name} className={styles.product_row}>
            <div className={styles.product_name}>{product.name}</div>
            <div className={styles.product_description}>
              {product.description}
            </div>
          </div>
        ))}
      </div>
      <div className="col-5 d-flex position-relative">
        <div className={styles.box_shadow_left}></div>
        <div className="d-flex flex-column ps-4">
          <div>
            <div>Latest Reads</div>
            <Image src={blueforwardArrow} alt="Read Enkash blog post" />
          </div>
          <div>
            <Image src={officeDiscussionPic} alt="Blog post Pic" />
          </div>
          <div>Lorem ipsum dolor sit amet, consectetur.</div>
          <div>Dec 21, 2023</div>
          <div>
            Lorem ipsum dolor sit amet consectetur. Magna malesuada imperdiet
            fames feugiat nulla vitae aliquet. Sit purus sociis vitae in mi.
            Fames et diam quis urna vestibulum ipsum. Nibh vestibulum ut viverra
            mattis.
          </div>
          <div>
            <Image src={readMore} alt="Blog read more" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesModal;
