import styles from "./heading.module.scss";

export interface HeadingProps {
  title: string;
  color?: "white" | "electric-green" | "black" | "equity-blue";
}

const H5 = ({ title, color }: HeadingProps) => {
  const colorClass = color ? `color-${color}` : "";
  return <span className={`${styles.h5} ${colorClass}`}>{title}</span>;
};

export default H5;
1;
