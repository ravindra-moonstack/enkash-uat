import { useState } from "react"
import styles from "./modal.module.scss"
import motherProducts from "../data/mother-products"
import SubProduct from "./sub-product"

const PaymentModal = ({
  onLinkClick,
}: {
  onLinkClick?: () => void
  modalLeft: number
}) => {
  const [hoveredProductIndex] = useState<number>(0) // default open index

  const [prevHoveredProductIndex] = useState<null | number>(null)

  const getSubProductsByMother = (motherName: string) => {
    const mother = motherProducts.find((item) => item.name === motherName)
    if (!mother) return []

    // Normalize both keys to return subproducts
    return mother.subProducts || mother.payableProducts || []
  }

  return (
    <div>
      <div className={` max-w-auto  ${styles.container}`}>
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
    </div>
  )
}

export default PaymentModal
