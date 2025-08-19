"use client"

import { useState } from "react"
import styles from "../button.module.scss"
import Image, { StaticImageData } from "next/image"

// ✅ Extract a shared type so you can reuse it anywhere:
export type RectangleButtonTheme =
  | "blue"
  | "green"
  | "black"
  | "outline-blue"
  | "border-gray"
  | "border-black"
  | "outline-blue-small"
  | "small-blue"

export interface ButtonProps {
  isDisabled?: boolean
  title: string
  url?: string | (() => void)
  theme?: RectangleButtonTheme
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
  theme = "blue",
  width,
  actionImage,
  iconSize = 20,
  className,
  hoverImage,
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    if (typeof url === "string") {
      window.location.href = url //
    } else if (typeof url === "function") {
      url()
    }
  }

  const iconClass = iconSize === 20 ? "big-icon" : "custom-icon"
  const iconToShow = isHovered && hoverImage ? hoverImage : actionImage

  return (
    <button
      disabled={isDisabled}
      className={`
        ${styles.rectangle_button}
        ${theme ? styles[theme] : ""}
        ${isDisabled ? styles.disabled : ""}
        ${className ?? ""}
      `}
      onClick={handleClick}
      style={{ width: width || "auto" }}
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
