import styles from "./heading.module.scss";

export interface HeadingProps {
  size: "h0" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  title: string;
  color?: "black" | "electric-green" | "white" | "equity-blue" | "rainy-blue";
}

const Heading = ({ size, title, color }: HeadingProps) => {
  const colorClass = color ? `color-${color}` : "";
  const sizeClass = size || "h1";

  return <h1 className={`${styles[sizeClass]} ${colorClass}`}>{title}</h1>;
};

export default Heading;
