import { useState } from "react"
import styles from "./modal.module.scss"
import motherProducts from "../data/mother-products"
import ReceivableProducts from "../data/receivable-products"
import payableProducts from "../data/payable-products"
import freedomProducts from "../data/freedom-products"
import xpenzProducts from "../data/ofex-products"
import loyaltyLoungeProducts from "../data/loaylty-lounge-products"
import brandVouchersProducts from "../data/brand-voucher-products"
import SubProduct from "./sub-product"

const allSubProducts = [
  ReceivableProducts,
  payableProducts,
  freedomProducts,
  xpenzProducts,
  brandVouchersProducts,
  loyaltyLoungeProducts,
]

const PaymentModal = ({ onLinkClick }: any) => {
  const [hoveredProductIndex] = useState<number>(0) // default open index

  const product = motherProducts[hoveredProductIndex]
  const subProducts = allSubProducts[hoveredProductIndex]

  const [prevHoveredProductIndex, setPrevHoveredProductIndex] = useState<
    null | number
  >(null)

  const getSubProductsByMother = (motherName: string) => {
    const mother = motherProducts.find((item) => item.name === motherName)
    if (!mother) return []

    // Normalize both keys to return subproducts
    return mother.subProducts || mother.payableProducts || []
  }

  return (
    <div className={`mt-4 ${styles.container}`}>
      <div className="d-flex gap-2">
        {motherProducts.map((mother, i) => {
          const subProducts = getSubProductsByMother(mother.name)

          if (!subProducts || subProducts.length === 0) return null

          return (
            <SubProduct
              key={mother.link}
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
