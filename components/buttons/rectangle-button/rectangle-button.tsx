"use client"

import { useState } from "react"
import styles from "../button.module.scss"
import Image, { StaticImageData } from "next/image"

export interface ButtonProps {
  isDisabled?: boolean
  title: string
  url?: string | (() => void)
  theme?: "blue" | "green" | "black" | "outline-blue" | "border-gray"
  width?: string
  actionImage?: StaticImageData | string
  iconSize?: number
  className?: string
  hoverImage?: StaticImageData | string
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
  hoverImage,
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const handleClick = () => {
    if (typeof url === "string") {
      window.open(url, "_blank")
    } else if (typeof url === "function") {
      url() // invoke function directly
    }
  }

  const iconClass = iconSize === 20 ? "big-icon" : "custom-icon"
  const iconToShow = isHovered && hoverImage ? hoverImage : actionImage

  return (
    <button
      disabled={isDisabled}
      className={`${styles.rectangle_button} ${theme ? styles[theme] : ""} ${
        isDisabled ? styles.disabled : ""
      } ${className ?? ""}`}
      onClick={handleClick}
      style={{ width: width || "max-content" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {title}
      {iconToShow && (
        <Image
          className={`ms-2 ${styles[iconClass]}`}
          src={iconToShow}
          alt="action image"
          width={iconSize}
          height={iconSize}
        />
      )}
    </button>
  )
}

export default RectangleButton
