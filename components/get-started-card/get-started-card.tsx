import Image from "next/image";
import { whiteArrow, rainBlueBiscuit } from ".";
import styles from "./get-started-card.module.scss";
import Heading from "../heading/heading";

export interface CardProps {
  title1: string;
  title2: string;
  description: string;
}

const GetStartedCard = ({ title1, title2, description }: CardProps) => {
  return (
    <div
      className={`d-flex flex-column bg-indi-volt position-relative ${styles.card_body}`}
    >
      <Heading title={title1} color="rainy-blue" size="h2" weight="6" />
      <Heading title={title2} color="white" size="h2" weight="6" />
      <div className="my-3">
        <Heading title={description} color="white" size="h6" weight="4" />
      </div>
      <div className="d-flex align-items-center mt-5">
        <div className={styles.underline}>
          <Heading title="Get Started" color="white" size="h6" />
        </div>
        <Image className="m-2" src={whiteArrow} alt="arrow icon" width={50} />
      </div>
    </div>
  );
};

export default GetStartedCard;
