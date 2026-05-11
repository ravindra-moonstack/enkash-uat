"use client"
import Image, { StaticImageData } from "next/image"
import { useRouter } from "next/navigation"
import styles from "./button.module.scss"
import { useState } from "react"

import { ArrowRight, ArrowForward } from "../icons"

export type ButtonTheme =
  | "blue"
  | "green"
  | "black"
  | "outline-blue"
  | "border-gray"
  | "vedio-button"
  | "border-black"
  | "outline-blue-small"
  | "small-blue"
  | "white"
  | "grey-text"
  | "vedio-button-dark"
  | "white-without-hover"
  | "blue-hover-white"

export interface ButtonProps {
  isDisabled?: boolean
  title: string
  url?: string | (() => void)
  theme?: ButtonTheme
  width?: string
  iconSize?: number
  className?: string
  image?: StaticImageData | string
  hoverImage?: StaticImageData | string
  changeImageOnHover?: boolean
  openInNewTab?: boolean
  arrow?: boolean
  arrowType?: "fa" | "ios"
  icon?: React.ReactNode
  iconPosition?: "start" | "end"
}

const CommonButton = ({
  isDisabled,
  title,
  url,
  theme = "blue",
  width,
  iconSize = 28,
  className,
  openInNewTab = false,
  image,
  hoverImage,
  changeImageOnHover = false,
  arrow = false,
  arrowType = "fa",
  icon,
  iconPosition = "start",
}: ButtonProps) => {
  const router = useRouter()

  const [currentImage, setCurrentImage] = useState(image)

  const handleClick = () => {
    if (isDisabled) return
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

  const handleMouseEnter = () => {
    if (changeImageOnHover && hoverImage) {
      setCurrentImage(hoverImage)
    }
  }

  const handleMouseLeave = () => {
    if (changeImageOnHover && image) {
      setCurrentImage(image)
    }
  }

  const iconClass = iconSize === 20 ? "big-icon" : "custom-icon"

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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: width || "auto" }}
    >
      {currentImage && (
        <Image
          className={`${styles[iconClass]}`}
          src={currentImage}
          alt="action image"
          width={iconSize}
          height={iconSize}
        />
      )}

      {icon && iconPosition === "start" && (
        <span className={styles.custom_icon_wrap}>{icon}</span>
      )}

      {title}

      {icon && iconPosition === "end" && (
        <span className={styles.custom_icon_wrap}>{icon}</span>
      )}

      {arrow &&
        (arrowType === "ios" ? <ArrowForward /> : <ArrowRight />)}
    </button>
  )
}

export default CommonButton
