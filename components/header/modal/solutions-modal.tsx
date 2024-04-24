import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./modal.module.scss";
import solutions from "../data/solutions";
import { blueforwardArrow, solutionModalEmptyStateImg } from "..";
import resourcesData from "../blog-data.json";
import Link from "next/link";

type Resource = {
  image: string;
  imageAlt: string;
  title: string;
  date: string;
  description: string;
  link: string;
};

const SolutionsModal = () => {
  const [hoveredResourceIndex, setHoveredResourceIndex] = useState<
    number | null
  >(null);
  const refs = solutions.map(() => useRef<HTMLDivElement | null>(null));

  // Use the blog data from resourcesData
  const blogData: Resource = resourcesData;

  return (
    <div className={`row mt-4 ${styles.container}`}>
      <div
        className={`${styles.solutions_grid_row}  px-5 pb-5 mb-2 position-relative`}
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
        {solutions.map((product: any, index: any) => (
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
            <Link href={product.link}>
              <div className={styles.product_name}>{product.name}</div>
              <div className={styles.product_description}>
                {product.description}
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Image
        src={solutionModalEmptyStateImg}
        alt="stack image"
        className={styles.solution_stack}
      />
    </div>
  );
};

export default SolutionsModal;
