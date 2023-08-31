import styles from "../button.module.scss";

export interface ButtonProps {
  isDisabled?: boolean;
  title: string;
  theme: "light" | "dark" | "secondary";
}

const MenuButton = ({ isDisabled, title, theme = "dark" }: ButtonProps) => {
  const themeClass = `theme-${theme}`;

  return (
    <button
      disabled={isDisabled}
      className={`${styles.menu_button} ${styles[themeClass]}`}
    >
      {title}
    </button>
  );
};

export default MenuButton;
