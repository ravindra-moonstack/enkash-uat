"use client"

import styles from "../button.module.scss"
import Image, { StaticImageData } from "next/image"

export interface ButtonProps {
  isDisabled?: boolean
  title: string
  url?: string | (() => void) // string link or function
  theme?: "blue" | "green" | "black" | "outline-blue" | "border-gray"
  width?: string
  actionImage?: StaticImageData | string // next/image compatible types
  iconSize?: number // must be a number for Image width/height
  className?: string
}

const RectangleButton = ({
  isDisabled,
  title,
  url,
  theme,
  width,
  actionImage,
  iconSize = 20, // default icon size
  className,
}: ButtonProps) => {
  const handleClick = () => {
    if (typeof url === "string") {
      window.open(url, "_blank")
    } else if (typeof url === "function") {
      url() // invoke function directly
    }
  }

  const iconClass = iconSize === 20 ? "big-icon" : "custom-icon"

  return (
    <button
      disabled={isDisabled}
      className={`${styles.rectangle_button} ${theme ? styles[theme] : ""} ${
        isDisabled ? styles.disabled : ""
      } ${className ?? ""}`}
      onClick={handleClick}
      style={{ width: width || "max-content" }}
    >
      {title}
      {actionImage && (
        <Image
          className={`ms-2 ${styles[iconClass]}`}
          src={actionImage}
          alt="action image"
          width={iconSize}
          height={iconSize}
        />
      )}
    </button>
  )
}

export default RectangleButton
