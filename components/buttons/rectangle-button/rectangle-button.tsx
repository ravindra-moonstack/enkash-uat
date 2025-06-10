"use client";

import styles from "../button.module.scss";

export interface ButtonProps {
  isDisabled?: boolean;
  title: string;
  url?: any;
  theme?: "blue" | "green" | "black";
  width?: string;
}

const RectangleButton = ({
  isDisabled,
  title,
  url,
  theme,
  width,
}: ButtonProps) => {
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

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
      </button>
    </>
  );
};

export default RectangleButton;
