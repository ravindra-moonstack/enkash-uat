import { useState } from "react"
import styles from "./modal.module.scss"
import SubProduct from "./sub-product"
import partnershipProducts from "../data/partnership"

const PartnershipModal = ({
  onLinkClick,
}: {
  onLinkClick?: () => void
  modalLeft: number
}) => {
  const [prevHoveredProductIndex] = useState<null | number>(null)

  return (
    <div className="relative mx-auto ">
      <div className={styles.arrow}></div>

      <div className={` ${styles.container}`}>
        <div className="d-flex gap-3">
          {partnershipProducts.map((mother, i) => {
            const subProducts = mother.subProducts || []

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

export default PartnershipModal
