import Image from "next/image";
import styles from "./modal.module.scss";
import resources from "../../../constant/resources";
import { blueforwardArrow, officeDiscussionPic, readMore } from "..";

const ResourcesModal = () => {
  return (
    <div className={`row mt-5 ${styles.container}`}>
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
            <div className="mb-3">
              Latest Reads
              <Image
                className="ms-3"
                src={blueforwardArrow}
                alt="Read Enkash blog post"
                width={60}
              />
            </div>
          </div>
          <div>
            <Image src={officeDiscussionPic} alt="Blog post Pic" height={150} />
          </div>
          <div className={`mb-2 mt-2 ${styles.resource_modal_blog_title}`}>
            Lorem ipsum dolor sit amet, consectetur.
          </div>
          <div className="color-slate-grey mb-2">Dec 21, 2023</div>
          <div className="mb-3">
            Lorem ipsum dolor sit amet consectetur. Magna malesuada imperdiet
            fames feugiat nulla vitae aliquet. Sit purus sociis vitae in mi.
            Fames et diam quis urna vestibulum ipsum. Nibh vestibulum ut viverra
            mattis.
          </div>
          <div className="mb-2 color-equity-blue">
            Read more
            <Image
              className="ms-3"
              width={50}
              src={blueforwardArrow}
              alt="Read Enkash blog post"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesModal;
