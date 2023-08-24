"use client";

import styles from "../button.module.scss";

export interface ButtonProps {
  isDisabled?: boolean;
  containerStyles?: string;
  title: string;
  url: string;
}

const PrimaryButton = ({ isDisabled, title, url }: ButtonProps) => {
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <>
      <button
        disabled={isDisabled}
        className={styles.primary_button}
        onClick={handleClick}
      >
        {title}
      </button>
    </>
  );
};

export default PrimaryButton;
