import { useState } from "react"
import styles from "./modal.module.scss"
import cardsProducts from "../data/cards-products"
import SubProduct from "./sub-product"
import Link from "next/link"

const CardModal = ({
  onLinkClick,
}: {
  onLinkClick?: () => void
  modalLeft: number
}) => {
  const [prevHoveredProductIndex] = useState<null | number>(null)

  return (
    <div className={styles.cardModal}>
      <div className={` ${styles.container}`}>
        <div className="d-flex gap-3 justify-content-center">
          {cardsProducts.map((mother, i) => {
            const subProducts =
              mother.subProducts || mother.payableProducts || []

            if (!subProducts || subProducts.length === 0) return null

            return (
              <>
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
                <div className={styles.exploreProduct}>
                  <Link href="/products/corporate-cards">
                    <h4 className="mb-1">Explore Corporate Cards </h4>
                  </Link>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CardModal
