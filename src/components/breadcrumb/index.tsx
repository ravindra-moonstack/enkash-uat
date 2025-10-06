// /src/components/CustomBreadcrumb.tsx
import React from "react"
import Link from "next/link"
import Script from "next/script"
import styles from "./breadcrumb.module.scss"
import { BreadcrumbProps } from "@/src/types/common"

const CustomBreadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  domain = process.env.NEXT_PUBLIC_URL || "", // ← use NEXT_PUBLIC_ prefix
  linkColor,
}) => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${domain}${item.url}`,
    })),
  }

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(schemaMarkup)}
      </Script>

      <nav
        className={`${styles.breadcrumb} ${
          linkColor === "white"
            ? styles.white
            : linkColor === "allWhite"
              ? styles.allWhite
              : ""
        }`}
        aria-label="Breadcrumb"
      >
        <ol className={styles.list}>
          {items.map((item, index) => (
            <li key={index} className={styles.item}>
              {index < items.length - 1 ? (
                <Link
                  href={item.url}
                  className={`${styles.link} ${
                    styles[
                      linkColor === "allWhite" ? "black" : linkColor || "black"
                    ]
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <span className={styles.current} aria-current="page">
                  {item.name}
                </span>
              )}
              {index < items.length - 1 && (
                <span className={styles.separator} aria-hidden="true">
                  &gt;
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

export default CustomBreadcrumb
