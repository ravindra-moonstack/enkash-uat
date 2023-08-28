"use client";

import styles from "../button.module.scss";

export interface ButtonProps {
  isDisabled?: boolean;
  title: string;
  theme: "light" | "default"; 
}

const MenuButton = ({ isDisabled, title, theme = "default" }: ButtonProps) => {
  const buttonClassName = theme === "light" ? styles.menu_button_light : styles.menu_button;

  return (
    <button disabled={isDisabled} className={buttonClassName}>
      {title}
    </button>
  );
};

export default MenuButton;
