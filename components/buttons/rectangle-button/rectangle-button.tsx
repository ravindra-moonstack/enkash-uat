"use client"

import styles from "../button.module.scss"
import Image from "next/image"

export interface ButtonProps {
  isDisabled?: boolean
  title: string
  url?: any
  theme?: "blue" | "green" | "black" | "outline-blue" | "border-gray"
  width?: string
  actionImage?: any
  iconSize?: any
}

const RectangleButton = ({
  isDisabled,
  title,
  url,
  theme,
  width,
  actionImage,
  iconSize,
}: ButtonProps) => {
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank")
    }
  }
  const iconClass = iconSize || "big-icon"

  return (
    <>
      <button
        disabled={isDisabled}
        className={`${styles.rectangle_button} ${theme ? styles[theme] : ""}
        ${isDisabled ? styles.disabled : ""}`}
        onClick={handleClick}
        style={{ width: width || "auto" }}
      >
        {title}
        {actionImage && (
          <Image
            className={`ms-2  ${styles[iconClass]} `}
            src={actionImage}
            alt="action image"
            width={iconSize}
          />
        )}
      </button>
    </>
  )
}

export default RectangleButton
