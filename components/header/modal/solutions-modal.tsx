import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./modal.module.scss";
import solutions from "../../../constant/solutions";
import { productModalEmptyStateImg } from "..";

const SolutionsModal = () => {
  const [hoveredSolutionIndex, setHoveredSolutionIndex] = useState<
    null | number
  >(null);
  const refs = solutions.map(() => useRef<HTMLDivElement>(null));

  return (
    <div className={`row mt-5 ${styles.container}`}>
      <div className="col-4 d-flex flex-column align-items-right px-5 pb-5 mb-2 position-relative">
        {hoveredSolutionIndex !== null &&
          refs[hoveredSolutionIndex].current && (
            <div
              className={styles.background_slide}
              style={{
                transform: `
        translateY(${refs[hoveredSolutionIndex].current!.offsetTop}px) 
        translateX(${refs[hoveredSolutionIndex].current!.offsetLeft}px)
      `,
                height: `${refs[hoveredSolutionIndex].current!.offsetHeight}px`,
                width: `${refs[hoveredSolutionIndex].current!.offsetWidth}px`,
              }}
            ></div>
          )}
        {solutions.map((solution: any, index: any) => (
          <div
            key={solution.name}
            className={styles.product_row}
            onMouseEnter={() => setHoveredSolutionIndex(index)}
            ref={refs[index]}
          >
            <div className={styles.product_name}>{solution.name}</div>
            <div className={styles.product_description}>
              {solution.description}
            </div>
          </div>
        ))}
      </div>
      {hoveredSolutionIndex === null && (
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
