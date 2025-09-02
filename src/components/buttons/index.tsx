"use client"
import Image, { StaticImageData } from "next/image"
import { useRouter } from "next/navigation"
import { FaArrowRight } from "react-icons/fa"

import styles from "./button.module.scss"

export type ButtonTheme =
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
  theme?: ButtonTheme
  width?: string
  iconSize?: number
  className?: string
  image?: StaticImageData | string
  openInNewTab?: boolean 
  arrow?: boolean
}

const Button = ({
  isDisabled,
  title,
  url,
  theme = "blue",
  width,
  iconSize = 20,
  className,
  openInNewTab = false,
  image,
  arrow = false,
}: ButtonProps) => {
  //

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
    >
      {title}
      {image && (
        <Image
          className={`ms-2 ${styles[iconClass]}`}
          src={image}
          alt="action image"
          width={iconSize}
          height={iconSize}
        />
      )}
      {arrow && <FaArrowRight />}
    </button>
  )
}

export default Button
