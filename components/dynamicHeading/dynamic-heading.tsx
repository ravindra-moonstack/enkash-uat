import React, { JSX } from "react";
import "./dynamic-heading.css";
import styles from "./dynamic-heading.module.scss";
 
type HeadingTag = keyof JSX.IntrinsicElements;
 
interface HeadingSegment {
  title?: string;
  name?: string;
  text?: string;
  color?: string; // Should match SCSS class names (without "color-" prefix)
  tag?: HeadingTag;
  className?: string; // Additional classes for segments
}
 
interface DynamicHeadingProps {
  content: HeadingSegment[];
  headingTag?: HeadingTag;
  className?: string;
}
 
const DynamicHeading: React.FC<DynamicHeadingProps> = ({
  content,
  headingTag = "h2",
  className,
}) => {
  const Tag = headingTag;
 
  return (
    <div className={`${styles.pageHeading}`}>
    <Tag className={className || undefined}>
      {content.map((item, i) => {
        const Element = item.tag || "span";
        const text = item.title ?? item.name ?? item.text ?? "";
        const colorClass = item.color ? `${item.color.replace("#", "")}` : "";
        const segmentClasses = [
          colorClass,
          item.className,
        ].filter(Boolean).join(" ");
 
        return (
          <Element key={i} className={segmentClasses || undefined}>
            {text}
          </Element>
        );
      })}
    </Tag>
    </div>
  );
};
 
export default DynamicHeading;