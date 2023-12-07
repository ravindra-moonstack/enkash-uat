import styles from "./heading.module.scss";

export interface HeadingProps {
  size: "h0" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  title: string;
  color?: "black" | "electric-green" | "white" | "equity-blue" | "rainy-blue";
  weight?: "3" | "4" | "5" | "6" | "7";
  italic?: boolean; // Add the italic prop
}

const Heading = ({ size, title, color, weight, italic }: HeadingProps) => {
  const colorClass = color ? `color-${color}` : "";
  const fontWeight = `f-${weight}` || "f-5";
  const sizeClass = size || "h6";
  const fontStyle = italic ? styles.italic : "";

  return (
    <h1
      className={`${styles[sizeClass]} ${colorClass} ${styles[fontWeight]} ${fontStyle}`}
    >
      {title}
    </h1>
  );
};

export default Heading;
