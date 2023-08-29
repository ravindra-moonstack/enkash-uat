import styles from "./heading.module.scss";

export interface HeadingProps {
  title: string;
  color?: "black" | "electric-green" | "white" | "equity-blue" | "rainy-blue";
}

const H1 = ({ title, color }: HeadingProps) => {
  const colorClass = color ? `color-${color}` : "";
  return <h1 className={`${styles.h1} ${colorClass}`}>{title}</h1>;
};

export default H1;
1;
