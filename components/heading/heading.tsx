import styles from "./heading.module.scss";

export interface HeadingProps {
  size: "h0" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  title: string;
  color?: "black" | "electric-green" | "white" | "equity-blue" | "rainy-blue";
  weight?: "lighter" | "light" | "normal" | "bolder" | "bold";
}

const Heading = ({ size, title, color, weight }: HeadingProps) => {
  const colorClass = color ? `color-${color}` : "";
  const fontWeight = weight ? `fw-${weight}` : "fw-normal";
  const sizeClass = size || "h6";

  return (
    <h1 className={`${styles[sizeClass]} ${colorClass} ${fontWeight}`}>
      {title}
    </h1>
  );
};

export default Heading;
