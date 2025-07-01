import styles from "./heading.module.scss"

export interface HeadingProps {
  size: "h0" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7" | "bannerHeading"
  title: string
  color?:
    | "black"
    | "secondry-black"
    | "electric-green"
    | "white"
    | "equity-blue"
    | "rainy-blue"
    | "main-grey"
    | "bluish-purple"
    | "alternate-grey"
    | "grey-100"
    | "grey-200"

  weight?: "2" | "3" | "4" | "5" | "6" | "7"
  italic?: boolean
  useH1TagInHtml?: boolean // New prop for using h1 tag
  useH2TagInHtml?: boolean // New prop for using h2 tag
  underline?: boolean
}

const Heading = ({
  size,
  title,
  color,
  weight,
  italic,
  underline,
  useH1TagInHtml,
  useH2TagInHtml,
}: HeadingProps) => {
  const colorClass = color ? `color-${color}` : ""
  const fontWeight = `f-${weight}` || "f-5"
  const sizeClass = size || "h6"
  const fontStyle = italic ? styles.italic : ""
  const underlineClass = underline ? styles.underline : ""

  const HeadingTag = useH1TagInHtml ? "h1" : useH2TagInHtml ? "h2" : "p"

  return (
    <HeadingTag
      className={`${styles[sizeClass]} ${colorClass} ${styles[fontWeight]} ${fontStyle} ${underlineClass}`}
    >
      {title}
    </HeadingTag>
  )
}

export default Heading
