"use client";

import styles from "../button.module.scss";

export interface ButtonProps {
  isDisabled?: boolean;
  title: string;
  url: string;
  theme?: "theme-blue" | "theme-green";
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
        className={`${styles.primary_button} ${theme ? styles[theme] : ""}`}
        onClick={handleClick}
      >
        {title}
      </button>
    </>
  );
};

export default PrimaryButton;
