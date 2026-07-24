import React from "react"
import Link from "next/link"
import Script from "next/script"
import styles from "./breadcrumb.module.scss"
import { BreadcrumbProps } from "@/src/types/common"

const CustomBreadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  domain = process.env.NEXT_PUBLIC_URL || "https://www.enkash.com",
  linkColor,
}) => {
  const cleanDomain = domain.replace(/\/$/, "")

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList" as const,
    itemListElement: items.map((item, index) => {
      const element: any = {
        "@type": "ListItem" as const,
        position: index + 1,
        name: item.name || `Item ${index + 1}`,
      }
      if (item.url) {
        element.item = item.url === "/" ? cleanDomain : `${cleanDomain}${item.url}`
      }
      return element
    }),
  } satisfies {
    "@context": "https://schema.org"
    "@type": "BreadcrumbList"
    itemListElement: Array<{
      "@type": "ListItem"
      position: number
      name: string
      item?: string
    }>
  }

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup, null, 2),
        }}
      />

      <nav
        className={`${styles.breadcrumb} ${linkColor === "white"
          ? styles.white
          : linkColor === "allWhite"
            ? styles.allWhite
            : linkColor === "allBlack"
              ? styles.allBlack
              : ""
          }`}
        aria-label="Breadcrumb"
      >
        <ol className={styles.list}>
          {items.map((item, index) => {
            const isLast = index === items.length - 1

            return (
              <li key={index} className={styles.item}>
                {isLast ? (
                  <span className={styles.current} aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.url} className={styles.link}>
                    {item.name}
                  </Link>
                )}
                {!isLast && <span className={styles.separator}>›</span>}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}

export default CustomBreadcrumb
