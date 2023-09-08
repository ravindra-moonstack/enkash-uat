"use client";

import styles from "../button.module.scss";

export interface ButtonProps {
  isDisabled?: boolean;
  title: string;
  url?: string;
  theme?: "theme-blue" | "theme-green" | "theme-black";
  size: "small" | "medium";
  weight?: "bold" | "normal";
}

const PrimaryButton = ({
  isDisabled,
  title,
  url,
  theme,
  size,
  weight,
}: ButtonProps) => {
  const sizeClass = size || "small";
  const weightClass = weight || "normal";

  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <>
      <button
        disabled={isDisabled}
        className={`${styles.primary_button} ${styles[sizeClass]} ${
          styles[weightClass]
        } ${theme ? styles[theme] : ""}`}
        onClick={handleClick}
      >
        {title}
      </button>
    </>
  );
};

export default PrimaryButton;
