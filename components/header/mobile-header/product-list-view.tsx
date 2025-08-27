import { Fragment, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

import styles from "./mobile-header.module.scss"

import { forwardArrowBlue } from ".."
import RectangleButton from "@/components/buttons/rectangle-button"

interface ProductListViewProps {
  products: any[]
}

const ProductListView = ({ products }: ProductListViewProps) => {
  //

  const router = useRouter()

  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  )

  return (
    <div className="w-100 absolute z-10">
      {/* First Level */}
      {selectedItemIndex == null && (
        <div className={styles.mobile_modal}>
          <div className="list">
            <div className={styles.line}></div>
            <ul>
              {products.map((item: any, index: number) => (
                <Fragment key={index}>
                  <li
                    key={item.name}
                    className="py-4 px-4 align-items-center d-flex justify-content-between"
                    onClick={() => {
                      if (item.children && item.children.length > 0) {
                        setSelectedItemIndex(index)
                      } else {
                        router.push(item.link)
                      }
                    }}
                  >
                    <div className="d-flex flex-column">
                      <div className={styles.title}>
                        {item.name}
                        {item.name === "Receivables" && (
                          <sup className={styles.sup}>#</sup>
                        )}
                      </div>
                      <div className={styles.description}>
                        {item.description}
                      </div>
                    </div>
                    <Image
                      src={forwardArrowBlue}
                      alt="arrow down icon"
                      className="ms-4"
                    />
                  </li>
                  <div className={styles.line}></div>
                </Fragment>
              ))}
            </ul>
          </div>
          <div
            className={`d-flex justify-content-center ${styles.buttons_container}`}
          >
            <RectangleButton
              title="Log In"
              theme="outline-blue"
              url={`${process.env.HOME_URL}`}
            />
          </div>
        </div>
      )}

      {/* Second Level - Children */}
      {selectedItemIndex !== null && products[selectedItemIndex]?.children && (
        <div className={styles.mobile_modal}>
          <div className="list">
            <div className={styles.line}></div>
            <ul>
              {products[selectedItemIndex].children.map(
                (child: any, childIndex: number) => (
                  <Fragment key={childIndex}>
                    <li
                      key={child.name}
                      className="py-4 px-4 align-items-center"
                      onClick={() => {
                        router.push(child.link)
                      }}
                    >
                      <div className="d-flex flex-column">
                        <div className={styles.title}>{child.name}</div>
                      </div>
                    </li>
                    <div className={styles.line}></div>
                  </Fragment>
                )
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductListView
