"use client"
import Image, { StaticImageData } from "next/image"
import { useRouter } from "next/navigation"
import { FaArrowRight } from "react-icons/fa"
import { IoIosArrowForward } from "react-icons/io"
import styles from "./button.module.scss"
import { useState } from "react"

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
}: ButtonProps) => {
  const router = useRouter()

  const [currentImage, setCurrentImage] = useState(image) // ⭐ NEW

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
      onMouseEnter={handleMouseEnter}   // ⭐ NEW
      onMouseLeave={handleMouseLeave}   // ⭐ NEW
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

      {title}

      {arrow &&
        (arrowType === "ios" ? <IoIosArrowForward /> : <FaArrowRight />)}
    </button>
  )
}

export default CommonButton
