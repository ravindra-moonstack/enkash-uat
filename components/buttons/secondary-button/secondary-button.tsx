"use client";

import styles from "../button.module.scss";
import Image from "next/image";

export interface ButtonProps {
  isDisabled?: boolean;
  title: string;
  url?: string;
  actionImage: any;
  size?: "small" | "medium";
  weight?: "bold" | "normal";
  iconSize?: "small-icon" | "big-icon";
}

const SecondryButton = ({
  isDisabled,
  title,
  url,
  actionImage,
  size,
  weight,
  iconSize,
}: ButtonProps) => {
  const sizeClass = size || "small";
  const weightClass = weight || "normal";
  const iconClass = iconSize || "big-icon";

  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <button
      disabled={isDisabled}
      className={`${styles.secondry_button} ${styles[sizeClass]} ${styles[weightClass]}`}
      onClick={handleClick}
    >
      {title}
      <Image
        className={`ms-2  ${styles[iconClass]} `}
        src={actionImage}
        alt="action image"
      />
    </button>
  );
};

export default SecondryButton;
