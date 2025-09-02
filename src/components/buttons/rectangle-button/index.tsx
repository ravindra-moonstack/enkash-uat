"use client"

import { useState } from "react"
import styles from "../button.module.scss"
import Image, { StaticImageData } from "next/image"
import { useRouter } from "next/navigation"

export type RectangleButtonTheme =
  | "blue"
  | "green"
  | "black"
  | "outline-blue"
  | "border-gray"
  | "border-black"
  | "outline-blue-small"
  | "small-blue"
  | "white"

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
  openInNewTab?: boolean // ✅ new prop
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
  openInNewTab = false,
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const router = useRouter()

  const handleClick = () => {
    if (typeof url === "string") {
      if (openInNewTab) {
        window.open(url, "_blank", "noopener,noreferrer")
      } else {
        router.push(url)
      }
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
