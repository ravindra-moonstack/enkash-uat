import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./modal.module.scss";
import resources from "../data/resources";
import { blueforwardArrow } from "..";
import resourcesData from "../blog-data.json";

type Resource = {
  image: string;
  imageAlt: string;
  title: string;
  date: string;
  description: string;
  link: string;
};

const ResourcesModal = () => {
  const [hoveredResourceIndex, setHoveredResourceIndex] = useState<
    number | null
  >(null);
  const refs = resources.map(() => useRef<HTMLDivElement | null>(null));

  // Use the blog data from resourcesData
  const blogData: Resource = resourcesData;

  return (
    <div className={`row mt-5 ${styles.container}`}>
      <div
        className={`${styles.resources_grid_row} col-7 px-5 pb-5 mb-2 position-relative`}
      >
        {hoveredResourceIndex !== null &&
          refs[hoveredResourceIndex].current && (
            <div
              className={styles.background_slide}
              style={{
                transform: `
              translateY(${refs[hoveredResourceIndex].current!.offsetTop}px) 
              translateX(${refs[hoveredResourceIndex].current!.offsetLeft}px)
            `,
                height: `${refs[hoveredResourceIndex].current!.offsetHeight}px`,
                width: `${refs[hoveredResourceIndex].current!.offsetWidth}px`,
              }}
            ></div>
          )}
        {resources.map((product: any, index: any) => (
          <div
            key={product.name}
            className={`${styles.product_row} ${
              hoveredResourceIndex === index
                ? styles.opacity_selected
                : styles.opacity_normal
            }`}
            onMouseEnter={() => setHoveredResourceIndex(index)}
            ref={refs[index]}
          >
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
            <div
              className={`${styles.resource_latest_read_container} mb-3 d-flex align-items-center`}
            >
              <div className={styles.latest_read_text}>Latest Reads</div>
              <Image
                className="ms-3"
                src={blueforwardArrow}
                alt="Read Enkash blog post"
                width={60}
              />
            </div>
          </div>
          <div>
            <Image
              src={blogData.image}
              alt={blogData.imageAlt}
              width={450}
              height={250}
            />
          </div>
          <div
            className={`mb-2 mt-2 cursor-pointer ${styles.resource_modal_blog_title}`}
          >
            {blogData.title}
          </div>
          <div className="color-slate-grey mb-2">{blogData.date}</div>
          <div className={`mb-3 ${styles.resource_modal_blog_descrption}`}>
            {blogData.description}
          </div>
          <div
            className={`${styles.resource_arrow_icon} mb-2 color-equity-blue`}
          >
            Read more
            <a href={blogData.link}>
              <Image
                className="ms-2"
                width={40}
                src={blueforwardArrow}
                alt="Read Enkash blog post"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesModal;
