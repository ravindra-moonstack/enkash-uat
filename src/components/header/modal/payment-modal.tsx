import { useCallback, useState } from "react"

import styles from "./common.module.scss"
import motherProducts from "../data/mother-products"
import SubProduct from "./sub-product"

const PaymentModal = ({ onLinkClick }: { onLinkClick?: () => void }) => {
  //
  const onMouseLeave = useCallback(() => {
    setTimeout(() => {
      if (onLinkClick) {
        onLinkClick()
      }
    }, 500)
  }, [onLinkClick])

  const [hoveredProductIndex] = useState<number>(0)

  const [prevHoveredProductIndex] = useState<null | number>(null)

  const getSubProductsByMother = (motherName?: string) => {
    const mother = motherProducts.find((item) => item.name === motherName)
    if (!mother) return []
    return mother.subProducts || []
  }

  return (
    <div
      id={`modal`}
      role="menu"
      aria-labelledby={`menu-item`}
      tabIndex={-1}
      className={`max-w-auto  ${styles.container}`}
      onMouseLeave={onMouseLeave}
    >
      <div className="d-flex gap-3">
        {motherProducts.map((mother, i) => {
          const subProducts = getSubProductsByMother(mother.name)

          if (!subProducts || subProducts.length === 0) return null

          return (
            <SubProduct
              key={mother.name}
              subProducts={subProducts}
              index={i}
              hoveredProductIndex={hoveredProductIndex}
              prevHoveredProductIndex={prevHoveredProductIndex}
              onLinkClick={onLinkClick}
              motherProductName={mother.name}
              parentLink={mother.link}
            />
          )
        })}
      </div>
    </div>
  )
}

export default PaymentModal
