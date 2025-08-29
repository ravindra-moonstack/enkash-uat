import React, { useState, useMemo, createRef } from "react"
import Image from "next/image"
import Link from "next/link"

import styles from "./modal.module.scss"
import apiDocs from "../data/api-docs"
import { solutionModalEmptyStateImg } from ".."

type ApiDocItem = {
  name: string
  description: string
  link: string
}

const ApiDocsModal = (): React.JSX.Element => {
  //

  const [hoveredResourceIndex, setHoveredResourceIndex] = useState<
    number | null
  >(null)

  const refs = useMemo(() => apiDocs.map(() => createRef<HTMLDivElement>()), [])

  return (
    <div className={`row mt-4 ${styles.container}`}>
      <div
        className={`${styles.solutions_grid_row}  px-5 pb-5 mb-2 position-relative`}
      >
        {hoveredResourceIndex !== null &&
          refs[hoveredResourceIndex]?.current && (
            <div
              className={styles.background_slide}
              style={{
                transform: `translateY(${
                  refs[hoveredResourceIndex].current!.offsetTop
                }px)
                            translateX(${
                              refs[hoveredResourceIndex].current!.offsetLeft
                            }px)`,
                height: `${refs[hoveredResourceIndex].current!.offsetHeight}px`,
                width: `${refs[hoveredResourceIndex].current!.offsetWidth}px`,
              }}
            ></div>
          )}

        {apiDocs.map((product: ApiDocItem, index: number) => (
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
  )
}

export default ApiDocsModal
