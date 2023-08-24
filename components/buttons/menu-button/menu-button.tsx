"use client";

import styles from "../button.module.scss";

export interface ButtonProps {
  isDisabled?: boolean;
  containerStyles?: string;
  title: string;
  theme: string;
}

const MenuButton = ({ isDisabled, title, theme }: ButtonProps) => {
  let buttonClassName =
    theme === "light" ? styles.menu_button_light : styles.menu_button;

  return (
    <>
      <button disabled={isDisabled} className={buttonClassName}>
        {title}
      </button>
    </>
  );
};

export default MenuButton;
