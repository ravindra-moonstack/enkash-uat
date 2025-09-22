"use client"
import React from "react"
import { usePathname } from "next/navigation"
import styles from "./mobile-talk-to-sales.module.scss"
import CommanButton from "../buttons"

const TalkToSales = (): React.JSX.Element => {
  //

  const pathname = usePathname()
  const lastSlug = pathname.split("/").filter(Boolean).pop() || "website"

  return (
    <div className={`mobile-only ${styles.mobile_talk_sales}`}>
      <CommanButton
        title="Talk to Sales"
        theme="blue"
        url={`/sales/?source=${lastSlug}`}
        width="100%"
      />
    </div>
  )
}

export default TalkToSales
