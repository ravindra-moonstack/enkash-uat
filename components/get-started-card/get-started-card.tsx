import Image from "next/image";
import { blueArrow, whiteArrow } from ".";
import styles from "./get-started-card.module.scss";
import Heading from "../heading/heading";

export interface CardProps {
  title1: string;
  title2: string;
  description: string;
  ctaColor?: string;
}

const GetStartedCard = ({
  title1,
  title2,
  description,
  ctaColor,
}: CardProps) => {
  return (
    <div
      className={`d-flex flex-column bg-indi-volt position-relative m-1 ${styles.card_body}`}
    >
      <Heading title={title1} color="rainy-blue" size="h2" weight="6" />
      <Heading title={title2} color="white" size="h2" weight="6" />
      <div className="my-3">
        <Heading title={description} color="white" size="h6" weight="4" />
      </div>
      <div
        className={`d-flex align-items-center mt-5 ${styles.action_container}`}
      >
        <div className={styles.underline}>
          <h1
            className={`${styles.get_started_text} ${
              ctaColor ? "color-cyan-blue" : "color-white"
            }`}
          >
            Get Started
          </h1>
        </div>
        {!ctaColor && (
          <Image className="m-2" src={whiteArrow} alt="arrow icon" width={50} />
        )}
        {ctaColor && (
          <Image className="m-2" src={blueArrow} alt="arrow icon" width={50} />
        )}
      </div>
    </div>
  );
};

export default GetStartedCard;
