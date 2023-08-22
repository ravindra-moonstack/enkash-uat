"use client";

import styles from "../button.module.scss";

export interface ButtonProps {
  isDisabled?: boolean;
  containerStyles?: string;
  title: string;
  url: string;
}

const SecondryButton = ({ isDisabled, title, url }: ButtonProps) => {
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <button
      disabled={isDisabled}
      className={styles.secondry_button}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default SecondryButton;
