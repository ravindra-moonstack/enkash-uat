import styles from "./heading.module.scss";

export interface HeadingProps {
  title: string;
  color?: "white" | "electric-green" | "black" | "rainy-blue";
  bold?: boolean;
}

const H2 = ({ title, color, bold }: HeadingProps) => {
  const colorClass = color ? `color-${color}` : "";
  const fontWeightClass = bold ? styles.bold : styles.regular;

  return (
    <div className={`${styles.h2} ${fontWeightClass} ${colorClass}`}>
      {title}
    </div>
  );
};

export default H2;
