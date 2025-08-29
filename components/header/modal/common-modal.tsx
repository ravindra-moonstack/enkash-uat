import React, { useCallback, useState } from "react"

import styles from "./modal.module.scss"
import SubProduct from "./sub-product"
import { TProductCategory } from "@/src/types/navbar"
import Link from "next/link"

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
  const [prevHoveredProductIndex] = useState<null | number>(null)

  const onMouseLeave = useCallback(() => {
    setTimeout(() => {
      if (onLinkClick) {
        onLinkClick()
      }
    }, 500)
  }, [onLinkClick])

  return (
    <div className={` ${styles.container}`} onMouseLeave={onMouseLeave}>
      <div className="d-flex gap-3 justify-content-center">
        {data?.map((mother, i) => {
          const subProducts = mother.subProducts || []

          if (!subProducts || subProducts.length === 0) return null

          return (
            <>
              <SubProduct
                key={i}
                subProducts={subProducts}
                index={i}
                hoveredProductIndex={i}
                prevHoveredProductIndex={prevHoveredProductIndex}
                onLinkClick={onLinkClick}
                motherProductName={mother.name}
                parentLink={mother.link}
              />
              {isCorporate && (
                <div className={styles.exploreProduct}>
                  <Link href="/products/corporate-cards">
                    <h4 className="mb-1">Explore Corporate Cards </h4>
                  </Link>
                </div>
              )}
            </>
          )
        })}
      </div>
    </div>
  )
}

export default CommonModal
