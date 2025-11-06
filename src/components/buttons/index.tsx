import Image, { StaticImageData } from "next/image"
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
  url?: string
  theme?: ButtonTheme
  width?: string
  iconSize?: number
  className?: string
  image?: StaticImageData | string
  openInNewTab?: boolean
  arrow?: boolean
}

const CommonButton = ({
  isDisabled,
  title,
  url = "#",
  theme = "blue",
  width,
  iconSize = 20,
  className,
  openInNewTab = false,
  image,
  arrow = false,
}: ButtonProps) => {
  const iconClass = iconSize === 20 ? "big-icon" : "custom-icon"

  return (
    <a
      href={url}
      target={openInNewTab ? "_blank" : "_self"}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      className={`
        ${styles.rectangle_button}
        ${theme ? styles[theme] : ""}
        ${isDisabled ? styles.disabled : ""}
        ${className ?? ""}
      `}
      style={{
        width: width || "fit-content",
        pointerEvents: isDisabled ? "none" : "auto",
        opacity: isDisabled ? 0.6 : 1,
      }}
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
    </a>
  )
}

export default CommonButton
