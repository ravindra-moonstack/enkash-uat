import { useState } from "react"
import styles from "./modal.module.scss"
import SubProduct from "./sub-product"
import resourseProducts from "../data/resources"

const ResourcesModal = ({
  onLinkClick,
  modalLeft,
}: {
  onLinkClick?: () => void
  modalLeft: number
}) => {
  const [prevHoveredProductIndex] = useState<null | number>(null)

  return (
    <div
      className={styles.modal_wrapper}
      style={{
        left: `calc(${modalLeft}px - 8px)`,
        top: "89px",
      }}
      onMouseLeave={onLinkClick}
    >
      <div className={` ${styles.container} `}>
        <div className="d-flex gap-3">
          {resourseProducts.map((mother, i) => {
            const subProducts =
              mother.subProducts || mother.payableProducts || []

            if (!subProducts || subProducts.length === 0) return null

            return (
              <SubProduct
                key={i}
                subProducts={subProducts}
                index={i}
                hoveredProductIndex={i} // <-- This ensures every card gets rendered correctly
                prevHoveredProductIndex={prevHoveredProductIndex}
                onLinkClick={onLinkClick}
                motherProductName={mother.name}
                parentLink={mother.link}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ResourcesModal
