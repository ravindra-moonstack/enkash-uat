import Image from "next/image";
import styles from "../explore-card/explore-card.module.scss";
import { greenArrow, blueArrow } from ".";

export interface CardProps {
  title: string;
  description: string;
  theme: string;
}

const ExploreCard = ({ title, description, theme }: CardProps) => {
  const titleClass =
    theme === "blue" ? "color-equity-blue" : "color-electric-green";
  const descriptionClass = theme === "blue" ? "color-black" : "color-white";
  const actionTextClass =
    theme === "blue" ? "color-equity-blue" : "color-electric-green";
  const arrowSrc = theme === "blue" ? blueArrow : greenArrow;

  return (
    <div className="d-flex flex-column">
      <div className={`${styles.title} ${titleClass}`}>{title}</div>
      <div className={`${styles.description} ${descriptionClass}`}>
        {description}
      </div>
      <div className="d-flex align-items-center mt-2">
        <div className={actionTextClass}>Explore Now</div>
        <Image className="m-2" src={arrowSrc} alt="arrow icon" width={50} />
      </div>
    </div>
  );
};

export default ExploreCard;
