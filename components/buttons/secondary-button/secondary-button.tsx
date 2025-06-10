"use client";

import styles from "../button.module.scss";
import Image from "next/image";

export interface ButtonProps {
  isDisabled?: boolean;
  title: string;
  url?: string;
  actionImage?: any;
  iconSize?: any;
  theme?: "blue" | "green" | "black" | "border-blue" | "border-gray";
}

const SecondryButton = ({
  isDisabled,
  title,
  url,
  actionImage,
  iconSize,
  theme,
}: ButtonProps) => {
  const iconClass = iconSize || "big-icon";

  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <button
      disabled={isDisabled}
      className={`${styles.secondry_button} ${theme ? styles[theme] : ""}
              ${isDisabled ? styles.disabled : ""}`}
      onClick={handleClick}
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
  );
};

export default SecondryButton;
