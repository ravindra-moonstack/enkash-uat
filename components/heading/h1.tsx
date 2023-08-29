import styles from "./heading.module.scss";

export interface HeadingProps {
  title: string;
  color?: "white" | "electric-green" | "black" | "equity-blue";
}

const H1 = ({ title, color }: HeadingProps) => {
  const colorClass = color ? `color-${color}` : "";
  return <span className={`${styles.h1} ${colorClass}`}>{title}</span>;
};

export default H1;
1;
