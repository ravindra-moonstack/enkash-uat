import { useState } from "react"
import styles from "./modal.module.scss"
import cardsProducts from "../data/cards-products"
import SubProduct from "./sub-product"

const CardModal = ({
  onLinkClick,
  modalLeft,
}: {
  onLinkClick?: () => void
  modalLeft: number
}) => {
  const [prevHoveredProductIndex, setPrevHoveredProductIndex] = useState<
    null | number
  >(null)

  return (
    <div>
      <div className={styles.arrow} style={{ left: modalLeft }}></div>

      <div className={` ${styles.container}`}>
        <div className="d-flex gap-2">
          {cardsProducts.map((mother, i) => {
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

export default CardModal
