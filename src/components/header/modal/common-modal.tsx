import React, { useCallback, useState } from "react"
import Link from "next/link"

import styles from "./common.module.scss"
import SubProduct from "./sub-product"
import { TProductCategory } from "@/src/types/navbar"

type TCommonModalProp = {
  onLinkClick: () => void
  data?: TProductCategory[]
  isCorporate?: boolean
}

const CommonModal = ({
  onLinkClick,
  data,
  isCorporate,
}: TCommonModalProp): React.JSX.Element => {
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
    <div
      className={`${styles.container} ${isCorporate && styles.cardModal} w-100`}
      onMouseLeave={onMouseLeave}
    >
      <div className="d-flex gap-3 justify-content-center w-100">
        {data?.map((mother, i) => {
          const subProducts = mother.subProducts || []

          if (!subProducts || subProducts.length === 0) return null

          return (
            <div key={i} className="w-100">
              <SubProduct
                subProducts={subProducts}
                index={i}
                hoveredProductIndex={i}
                prevHoveredProductIndex={prevHoveredProductIndex}
                onLinkClick={onLinkClick}
                motherProductName={mother.name}
                parentLink={mother.link}
                backgroundColor={mother?.backgroundColor}
              />
              {isCorporate && (
                <div className={styles.exploreProduct}>
                  <Link href="/products/corporate-cards" onClick={() => { onLinkClick(); }}>
                    <h4 className="mb-1">Explore Corporate Cards </h4>
                  </Link>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CommonModal
