import { useCallback, useState } from "react"

import styles from "./modal.module.scss"

// components
import SubProduct from "./sub-product"
import partnershipProducts from "../data/partnership"

type TPartnershipModalProp = {
  onLinkClick?: () => void
  modalLeft: number
}

const PartnershipModal = ({
  onLinkClick,
}: TPartnershipModalProp): React.JSX.Element => {
  //

  const [prevHoveredProductIndex] = useState<null | number>(null)

  const onMouseLeave = useCallback(() => {
    setTimeout(() => {
      if (onLinkClick) {
        onLinkClick()
      }
    }, 500)
  }, [onLinkClick])

  return (
    <div onMouseLeave={onMouseLeave}>
      <div className={styles.container}>
        <div className="d-flex gap-3">
          {partnershipProducts.map((mother, i) => {
            const subProducts = mother.subProducts || []

            if (!subProducts || subProducts.length === 0) return null

            return (
              <SubProduct
                key={i}
                subProducts={subProducts}
                index={i}
                hoveredProductIndex={i}
                prevHoveredProductIndex={prevHoveredProductIndex}
                onLinkClick={onLinkClick}
                motherProductName={mother.name}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PartnershipModal
