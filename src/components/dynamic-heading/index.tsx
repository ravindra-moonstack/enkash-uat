import React, { JSX } from "react"
import Link from "next/link"
import "./dynamic-heading.css"
import styles from "./dynamic-heading.module.scss"

type HeadingTag = keyof JSX.IntrinsicElements

interface HeadingSegment {
  title?: string | number
  name?: string
  text?: string
  color?: string // Should match SCSS class names (without "color-" prefix)
  tag?: HeadingTag
  className?: string // Additional classes for segments
  link?: string // ✅ Added link property
}

interface DynamicHeadingProps {
  content?: HeadingSegment[] // ✅ Made content optional
  headingTag?: HeadingTag
  className?: string
  style?: React.CSSProperties // ✅ Added style prop support
}

const DynamicHeading: React.FC<DynamicHeadingProps> = ({
  content = [], // ✅ Default to empty array
  headingTag = "h2",
  className,
  style,
}) => {
  const Tag = headingTag

  // ✅ Optional: Add a check to ensure content is an array
  if (!Array.isArray(content)) {
    console.warn(
      "DynamicHeading: 'content' prop is not an array. Using empty array."
    )
    return (
      <div className={`${styles.pageHeading}`} style={style}>
        <Tag className={className || undefined}></Tag>
      </div>
    )
  }

  return (
    <div className={`${styles.pageHeading}`} style={style}>
      <Tag className={className || undefined}>
        {content.map((item, i) => {
          const Element = item.tag || "span"
          const text = item.title ?? item.name ?? item.text ?? ""
          const colorClass = item.color ? `${item.color.replace("#", "")}` : ""
          const segmentClasses = [colorClass, item.className]
            .filter(Boolean)
            .join(" ")

          const innerContent = (
            <Element key={i} className={segmentClasses || undefined}>
              {text}
            </Element>
          )

          // ✅ Wrap with Link if link prop exists
          return item.link ? (
            <Link key={i} href={item.link} className={`${styles.noUnderline}`}>
              {innerContent}
            </Link>
          ) : (
            innerContent
          )
        })}
      </Tag>
    </div>
  )
}

export default DynamicHeading
