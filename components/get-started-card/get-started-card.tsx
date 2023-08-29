import Image from "next/image";
import H5 from "../heading/h5";
import H3 from "../heading/h3";
import { whiteArrow, rainBlueBiscuit } from ".";
import styles from "./get-started-card.module.scss";

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
      <H3 title={title1} color="rainy-blue" bold={true} />
      <H3 title={title2} color="white" bold={true} />
      <div className="my-3">
        <H5 title={description} color="white" />
      </div>
      <div className="d-flex align-items-center mt-2">
        <H5 title="Explore Now" color="white" />
        <Image className="m-2" src={whiteArrow} alt="arrow icon" width={50} />
      </div>
    </div>
  );
};

export default GetStartedCard;
