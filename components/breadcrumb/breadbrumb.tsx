import React from "react"
import Link from "next/link"
import Head from "next/head"
import styles from "./breadcrumb.module.scss"

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  domain?: string
  linkColor?: "white" | "black"
}

const CustomBreadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  domain = "https://www.enkash.com/",
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
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Head>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <ol className={styles.list}>
          {items.map((item, index) => (
            <li key={index} className={styles.item}>
              {index < items.length - 1 ? (
                <Link
                  href={item.url}
                  className={`${styles.link} ${styles[linkColor || "black"]}`}
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
