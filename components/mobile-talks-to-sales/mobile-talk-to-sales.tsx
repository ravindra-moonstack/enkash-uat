"use client"

import styles from "./mobile-talk-to-sales.module.scss"
import RectangleButton from "../buttons/rectangle-button"
import { usePathname } from "next/navigation"

const TalkToSales = () => {
  const pathname = usePathname() // ✅ moved inside component
  const lastSlug = pathname.split("/").filter(Boolean).pop() || "website"

  return (
    <div className="mobile-only">
      <div className={styles.mobile_talk_sales}>
        <RectangleButton
          title="Talk to Sales"
          theme="blue"
          url={`/sales/?source=${lastSlug}`}
          width="100%"
        />
      </div>
    </div>
  )
}

export default TalkToSales
