import styles from "./heading.module.scss";

export interface HeadingProps {
  title: string;
  color?: "white" | "electric-green" | "black" | "equity-blue";
}

const H6 = ({ title, color }: HeadingProps) => {
  const colorClass = color ? `color-${color}` : "";
  return <h6 className={`${styles.h6} ${colorClass}`}>{title}</h6>;
};

export default H6;
1;
