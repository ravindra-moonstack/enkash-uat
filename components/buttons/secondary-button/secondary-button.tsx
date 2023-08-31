"use client";

import styles from "../button.module.scss";
import Image from "next/image";

export interface ButtonProps {
  isDisabled?: boolean;
  title: string;
  url?: string;
  actionImage: any;
}

const SecondryButton = ({
  isDisabled,
  title,
  url,
  actionImage,
}: ButtonProps) => {
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
      <Image className="ms-2" src={actionImage} alt="action image" />
    </button>
  );
};

export default SecondryButton;
