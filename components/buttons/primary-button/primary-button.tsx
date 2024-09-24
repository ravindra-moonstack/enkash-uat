"use client";

import styles from "../button.module.scss";

export interface ButtonProps {
  isDisabled?: boolean;
  title: string;
  url?: any;
  theme?: "blue" | "green" | "black";
}

const PrimaryButton = ({ isDisabled, title, url, theme }: ButtonProps) => {
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <>
      <button
        disabled={isDisabled}
        className={`${styles.primary_button} ${theme ? styles[theme] : ""}
        ${isDisabled ? styles.disabled : ""}`}
        onClick={handleClick}
      >
        {title}
      </button>
    </>
  );
};

export default PrimaryButton;
